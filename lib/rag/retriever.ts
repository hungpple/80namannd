import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { extractDocxText } from "@/lib/rag/docx";
import {
  DEFAULT_EMBEDDING_MODEL,
  embedTexts,
  getEmbeddingConfig,
  normalizeVector,
} from "@/lib/rag/embeddings";
import { logRag, logRagError, previewText } from "@/lib/rag/logger";
import { compactWhitespace, normalizeForSearch, tokenize, uniqueTokens } from "@/lib/rag/text";

export type RagChunk = {
  id: string;
  document: string;
  chunkIndex: number;
  content: string;
  tokenCount: number;
};

export type RetrievalSignals = {
  bm25Score: number;
  vectorScore: number | null;
  rrfScore: number;
  rerankScore: number;
  source: "bm25" | "vector" | "hybrid";
};

export type RetrievedChunk = RagChunk & {
  score: number;
  snippet: string;
  retrieval: RetrievalSignals;
};

export type RagIndexStats = {
  documentCount: number;
  chunkCount: number;
  documentsDir: string;
  builtAt: string;
  retrievalMode: "bm25" | "hybrid";
  embeddingModel: string | null;
  embeddingDimension: number | null;
  vectorStore: "disabled" | "local-json" | "faiss-http";
  persistedIndexDir: string;
  faissIndexPath: string | null;
};

type Posting = {
  chunkIndex: number;
  count: number;
};

type VectorIndex = {
  backend: "local-json";
  manifestHash: string;
  model: string;
  dimension: number;
  builtAt: string;
  chunkIds: string[];
  vectors: number[][];
};

type RagIndex = {
  chunks: RagChunk[];
  postings: Map<string, Posting[]>;
  documentFrequency: Map<string, number>;
  averageChunkLength: number;
  vectorIndex: VectorIndex | null;
  stats: RagIndexStats;
};

type RetrieveRelevantChunksOptions = {
  requestId?: string;
};

type DocumentSnapshot = {
  fileName: string;
  size: number;
  mtimeMs: number;
};

type PersistedVectorIndex = Omit<VectorIndex, "vectors"> & {
  vectors: number[][];
};

type ChunkEmbeddingDescriptor = {
  chunkId: string;
  contentHash: string;
  cacheKey: string;
};

type EmbeddingCacheEntry = {
  chunkId: string;
  contentHash: string;
  vector: number[];
};

type EmbeddingCacheFile = {
  version: 1;
  model: string;
  dimension: number | null;
  updatedAt: string;
  entries: Record<string, EmbeddingCacheEntry>;
};

type RankedHit = {
  chunkIndex: number;
  score: number;
};

type HybridCandidate = {
  chunkIndex: number;
  bm25Score: number;
  vectorScore: number | null;
  rrfScore: number;
  rerankScore: number;
  source: "bm25" | "vector" | "hybrid";
};

type QueryProcessingResult = {
  originalQuery: string;
  normalizedQuery: string;
  expandedQuery: string;
  queryTerms: string[];
  expansions: string[];
};

const DEFAULT_DOCUMENTS_DIR = path.join(process.cwd(), "resources");
const DEFAULT_INDEX_DIR = path.join(process.cwd(), ".rag-index");
const MAX_CHUNK_CHARS = 1000;
const MIN_CHUNK_CHARS = 220;
const OVERLAP_CHARS = 120;
const MAX_QUERY_TERMS = 32;
const BM25_K1 = 1.4;
const BM25_B = 0.72;
const DEFAULT_RRF_K = 60;
const DEFAULT_FIRST_STAGE_TOP_K = 40;
const DEFAULT_VECTOR_TOP_K = 40;
const FAISS_INDEX_FILE = "faiss.index";
const VECTOR_INDEX_FILE = "vectors.json";
const CHUNKS_FILE = "chunks.json";
const MANIFEST_FILE = "manifest.json";
const EMBEDDING_CACHE_FILE = "embedding-cache.json";
const SOCIAL_ONLY_RETRIEVAL_TERMS = new Set([
  "xin",
  "chao",
  "ban",
  "oi",
  "alo",
  "hello",
  "hi",
  "hey",
  "cam",
  "on",
  "ok",
  "oke",
  "thanks",
  "thank",
  "you",
  "test",
  "abc",
  "ha",
  "sao",
]);

let cachedIndex: RagIndex | null = null;
let indexPromise: Promise<RagIndex> | null = null;

export async function getRagIndex() {
  if (cachedIndex) {
    logRag(
      "INGEST",
      "Using cached RAG index.",
      {
        documentCount: cachedIndex.stats.documentCount,
        chunkCount: cachedIndex.stats.chunkCount,
        builtAt: cachedIndex.stats.builtAt,
        retrievalMode: cachedIndex.stats.retrievalMode,
        vectorStore: cachedIndex.stats.vectorStore,
      },
      { verboseOnly: true }
    );

    return cachedIndex;
  }

  if (!indexPromise) {
    indexPromise = buildRagIndex().then((index) => {
      cachedIndex = index;
      return index;
    });
  }

  return indexPromise;
}

export async function retrieveRelevantChunks(
  question: string,
  limit = 7,
  options: RetrieveRelevantChunksOptions = {}
) {
  const retrievalStartedAt = Date.now();
  const processedQuery = processQuery(question);

  logRag(
    "QUERY_NORMALIZE",
    "Query processing completed.",
    {
      requestId: options.requestId,
      originalQuery: processedQuery.originalQuery,
      normalizedQuery: processedQuery.normalizedQuery,
      expandedQuery: processedQuery.expandedQuery,
      expansions: processedQuery.expansions,
      maxQueryTerms: MAX_QUERY_TERMS,
      queryTerms: processedQuery.queryTerms,
    },
    { verboseOnly: true }
  );
  logRag(
    "QUERY_REWRITE",
    "Query rewrite completed with deterministic domain expansion.",
    {
      requestId: options.requestId,
      status: processedQuery.expansions.length > 0 ? "expanded" : "unchanged",
      rewrittenQuery: processedQuery.expandedQuery,
      expansions: processedQuery.expansions,
    },
    { verboseOnly: true }
  );

  if (!hasMeaningfulRetrievalTerms(processedQuery.queryTerms)) {
    logRag(
      "RETRIEVAL",
      "Retrieval skipped because the query has no meaningful searchable terms.",
      {
        requestId: options.requestId,
        requestedTopK: limit,
        foundChunks: 0,
        queryTerms: processedQuery.queryTerms,
        durationMs: Date.now() - retrievalStartedAt,
      },
      { level: "warn" }
    );

    return {
      chunks: [] as RetrievedChunk[],
      stats: createSkippedRetrievalStats(),
    };
  }

  const index = await getRagIndex();
  const firstStageTopK = Math.max(
    limit,
    readPositiveIntegerEnv("RAG_FIRST_STAGE_TOP_K", DEFAULT_FIRST_STAGE_TOP_K)
  );
  const vectorTopK = Math.max(
    limit,
    readPositiveIntegerEnv("RAG_VECTOR_TOP_K", DEFAULT_VECTOR_TOP_K)
  );

  logRag("RETRIEVAL", "Starting hybrid retrieval.", {
    requestId: options.requestId,
    bm25Retriever: "in-memory BM25 inverted index",
    vectorStore: index.stats.vectorStore,
    faissIndexPath: index.stats.faissIndexPath,
    hybridRetrieval: index.vectorIndex ? "enabled" : "bm25_fallback",
    rrf: "enabled",
    reranking: readRerankEndpoint() ? "cross_encoder_endpoint" : "local_signal_reranker",
    requestedTopK: limit,
    firstStageTopK,
    vectorTopK,
    totalIndexedChunks: index.chunks.length,
    queryTermCount: processedQuery.queryTerms.length,
  });

  const bm25Results = searchBm25(index, processedQuery, firstStageTopK);
  const vectorResults = await searchVector(index, processedQuery, vectorTopK, {
    requestId: options.requestId,
  });
  const fusedCandidates = fuseHybridResults(bm25Results, vectorResults);
  const rerankedCandidates = await rerankCandidates(
    index,
    processedQuery,
    fusedCandidates,
    {
      requestId: options.requestId,
    }
  );
  const chunks = rerankedCandidates.slice(0, limit).map((candidate) => {
    const chunk = index.chunks[candidate.chunkIndex];

    return {
      ...chunk,
      score: candidate.rerankScore,
      snippet: createSnippet(chunk.content),
      retrieval: {
        bm25Score: candidate.bm25Score,
        vectorScore: candidate.vectorScore,
        rrfScore: candidate.rrfScore,
        rerankScore: candidate.rerankScore,
        source: candidate.source,
      },
    };
  });

  logRag("RETRIEVAL", "Hybrid retrieval completed.", {
    requestId: options.requestId,
    requestedTopK: limit,
    bm25Hits: bm25Results.length,
    vectorHits: vectorResults.length,
    fusedCandidates: fusedCandidates.length,
    foundChunks: chunks.length,
    durationMs: Date.now() - retrievalStartedAt,
    topDocument: chunks[0]?.document ?? null,
    topScore: chunks[0] ? roundScore(chunks[0].score) : null,
  });
  logRag(
    "RETRIEVAL",
    "Retrieved chunk details.",
    {
      requestId: options.requestId,
      chunks: chunks.map((chunk, index) => createChunkLogEntry(chunk, index + 1)),
    },
    { verboseOnly: true }
  );
  logRag(
    "RANKING",
    "Final ranking completed.",
    {
      requestId: options.requestId,
      rankingMode: readRerankEndpoint()
        ? "RRF fusion plus external cross-encoder reranking"
        : "RRF fusion plus local lexical-semantic reranking",
      topChunks: chunks
        .slice(0, 10)
        .map((chunk, index) => createChunkLogEntry(chunk, index + 1)),
    },
    { verboseOnly: true }
  );

  return { chunks, stats: index.stats };
}

async function buildRagIndex(): Promise<RagIndex> {
  const ingestStartedAt = Date.now();
  const documentsDir = process.env.RAG_DOCUMENTS_DIR ?? DEFAULT_DOCUMENTS_DIR;
  const persistedIndexDir = process.env.RAG_INDEX_DIR ?? DEFAULT_INDEX_DIR;
  const chunkingConfig = {
    chunkSizeChars: MAX_CHUNK_CHARS,
    chunkOverlapChars: OVERLAP_CHARS,
    minChunkChars: MIN_CHUNK_CHARS,
  };

  if (
    !existsSync(/* turbopackIgnore: true */ documentsDir) ||
    !statSync(/* turbopackIgnore: true */ documentsDir).isDirectory()
  ) {
    const error = new Error(`RAG documents directory was not found: ${documentsDir}`);

    logRagError("INGEST", "RAG documents directory is missing.", error, {
      documentsDir,
    });
    throw error;
  }

  const documentFiles = readdirSync(
    /* turbopackIgnore: true */ documentsDir,
    { withFileTypes: true }
  )
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.toLowerCase().endsWith(".docx"))
    .filter((name) => !name.startsWith("~$"))
    .sort((left, right) => left.localeCompare(right, "vi"));
  const documentSnapshot = createDocumentSnapshot(documentsDir, documentFiles);

  logRag("INGEST", "Discovered documents for RAG ingest.", {
    documentsDir,
    totalDocuments: documentFiles.length,
    documentTypeFilter: "DOCX",
    supportedDocumentTypes: ["DOCX"],
    documents: documentFiles.map((fileName) => ({
      fileName,
      documentType: getDocumentType(fileName),
    })),
  });
  logRag(
    "CHUNKING",
    "Chunking configuration loaded.",
    {
      chunkingConfig,
    },
    { verboseOnly: true }
  );

  const chunks: RagChunk[] = [];
  const chunksByDocument: Record<string, number> = {};
  let successfulDocuments = 0;
  let failedDocuments = 0;

  for (const fileName of documentFiles) {
    const filePath = path.join(/* turbopackIgnore: true */ documentsDir, fileName);
    const documentStartedAt = Date.now();

    logRag(
      "INGEST",
      "Processing document.",
      {
        fileName,
        filePath,
        documentType: getDocumentType(fileName),
      },
      { verboseOnly: true }
    );

    try {
      const text = extractDocxText(filePath);
      const documentChunks = createChunks(text, fileName);

      successfulDocuments += 1;
      chunksByDocument[fileName] = documentChunks.length;

      logRag(
        "INGEST",
        "Document text extracted successfully.",
        {
          fileName,
          documentType: getDocumentType(fileName),
          extractedTextChars: text.length,
          extractedTextPreview: previewText(text),
          durationMs: Date.now() - documentStartedAt,
        },
        { verboseOnly: true }
      );
      logRag(
        "CHUNKING",
        "Document chunking completed.",
        {
          fileName,
          documentType: getDocumentType(fileName),
          chunksCreated: documentChunks.length,
          chunkingConfig,
          chunkPreviews: documentChunks.slice(0, 5).map((chunk) => ({
            chunkId: chunk.id,
            chunkIndex: chunk.chunkIndex,
            tokenCount: chunk.tokenCount,
            preview: previewText(chunk.content),
          })),
        },
        { verboseOnly: true }
      );

      chunks.push(...documentChunks);
    } catch (error) {
      failedDocuments += 1;

      logRagError("INGEST", "Document processing failed.", error, {
        fileName,
        filePath,
        documentType: getDocumentType(fileName),
        successfulDocuments,
        failedDocuments,
        durationMs: Date.now() - documentStartedAt,
      });
      logRag(
        "INGEST",
        "RAG ingest aborted because a document failed.",
        {
          totalDocuments: documentFiles.length,
          successfulDocuments,
          failedDocuments,
          totalChunksCreatedBeforeFailure: chunks.length,
          chunksByDocument,
        },
        { level: "error" }
      );
      throw error;
    }
  }

  if (chunks.length === 0) {
    const error = new Error(`No valid DOCX content was found in: ${documentsDir}`);

    logRagError("CHUNKING", "No valid DOCX content was chunked.", error, {
      documentsDir,
      totalDocuments: documentFiles.length,
      successfulDocuments,
      failedDocuments,
      totalChunks: 0,
      chunksByDocument,
      chunkingConfig,
    });
    throw error;
  }

  logRag("CHUNKING", "Chunking summary.", {
    totalDocuments: documentFiles.length,
    successfulDocuments,
    failedDocuments,
    totalChunks: chunks.length,
    chunksByDocument,
    chunkingConfig,
  });

  const bm25Index = buildBm25Index(chunks);
  const vectorIndex = await loadOrBuildVectorIndex(chunks, {
    documentSnapshot,
    chunkingConfig,
    persistedIndexDir,
  });
  const faissIndexPath = path.join(persistedIndexDir, FAISS_INDEX_FILE);
  const vectorStore = readFaissEndpoint()
    ? "faiss-http"
    : vectorIndex
      ? "local-json"
      : "disabled";
  const builtAt = new Date().toISOString();

  logRag("INGEST", "RAG index built successfully.", {
    documentsDir,
    persistedIndexDir,
    totalDocuments: documentFiles.length,
    successfulDocuments,
    failedDocuments,
    totalChunks: chunks.length,
    chunksByDocument,
    vocabularySize: bm25Index.postings.size,
    averageChunkLength: roundScore(bm25Index.averageChunkLength),
    retrievalMode: vectorIndex ? "hybrid" : "bm25",
    vectorStore,
    embeddingModel: vectorIndex?.model ?? null,
    embeddingDimension: vectorIndex?.dimension ?? null,
    faissIndexPath: existsSync(/* turbopackIgnore: true */ faissIndexPath)
      ? faissIndexPath
      : null,
    durationMs: Date.now() - ingestStartedAt,
    builtAt,
  });

  return {
    chunks,
    postings: bm25Index.postings,
    documentFrequency: bm25Index.documentFrequency,
    averageChunkLength: bm25Index.averageChunkLength,
    vectorIndex,
    stats: {
      documentCount: documentFiles.length,
      chunkCount: chunks.length,
      documentsDir,
      builtAt,
      retrievalMode: vectorIndex ? "hybrid" : "bm25",
      embeddingModel: vectorIndex?.model ?? null,
      embeddingDimension: vectorIndex?.dimension ?? null,
      vectorStore,
      persistedIndexDir,
      faissIndexPath: existsSync(/* turbopackIgnore: true */ faissIndexPath)
        ? faissIndexPath
        : null,
    },
  };
}

function processQuery(question: string): QueryProcessingResult {
  const normalizedQuery = normalizeForSearch(question);
  const expansions = buildDomainExpansions(normalizedQuery);
  const expandedQuery = [question, ...expansions].join("\n");
  const queryTerms = uniqueTokens(expandedQuery).slice(0, MAX_QUERY_TERMS);

  return {
    originalQuery: question,
    normalizedQuery,
    expandedQuery,
    queryTerms,
    expansions,
  };
}

function buildDomainExpansions(normalizedQuery: string) {
  const expansions = new Set<string>();

  if (hasNormalizedPhrase(normalizedQuery, "annd")) {
    expansions.add("an ninh nhan dan");
    expansions.add("luc luong an ninh nhan dan");
  }

  if (hasNormalizedPhrase(normalizedQuery, "ngay truyen thong")) {
    expansions.add("12 7 1946");
    expansions.add("12 7 2026");
  }

  if (hasNormalizedPhrase(normalizedQuery, "chien cong")) {
    expansions.add("thanh tich tieu bieu");
    expansions.add("chien cong tieu bieu");
  }

  if (hasNormalizedPhrase(normalizedQuery, "lich su")) {
    expansions.add("chang duong lich su");
    expansions.add("giai doan lich su");
  }

  return Array.from(expansions);
}

function searchBm25(index: RagIndex, query: QueryProcessingResult, limit: number) {
  const scores = new Map<number, number>();
  const totalChunks = index.chunks.length;

  for (const term of query.queryTerms) {
    const postings = index.postings.get(term);

    if (!postings) {
      continue;
    }

    const documentFrequency = index.documentFrequency.get(term) ?? 0;
    const inverseDocumentFrequency = Math.log(
      1 + (totalChunks - documentFrequency + 0.5) / (documentFrequency + 0.5)
    );

    for (const posting of postings) {
      const chunk = index.chunks[posting.chunkIndex];
      const lengthNorm =
        posting.count * (BM25_K1 + 1) /
        (posting.count +
          BM25_K1 *
            (1 - BM25_B + BM25_B * (chunk.tokenCount / index.averageChunkLength)));
      const nextScore =
        (scores.get(posting.chunkIndex) ?? 0) + inverseDocumentFrequency * lengthNorm;

      scores.set(posting.chunkIndex, nextScore);
    }
  }

  return Array.from(scores.entries())
    .map(([chunkIndex, score]) => {
      const normalizedContent = normalizeForSearch(index.chunks[chunkIndex].content);
      const phraseBoost =
        query.normalizedQuery.length > 12 && normalizedContent.includes(query.normalizedQuery)
          ? 2.5
          : 0;

      return {
        chunkIndex,
        score: score + phraseBoost,
      };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

async function searchVector(
  index: RagIndex,
  query: QueryProcessingResult,
  limit: number,
  options: RetrieveRelevantChunksOptions
) {
  if (!index.vectorIndex) {
    logRag(
      "QUERY_EMBEDDING",
      "Query embedding skipped because no vector index is available.",
      {
        requestId: options.requestId,
        status: "disabled",
        embeddingModel: null,
        embeddingDimension: null,
        retrievalMode: "BM25 fallback",
      },
      { verboseOnly: true }
    );
    return [] as RankedHit[];
  }

  const embeddingStartedAt = Date.now();

  try {
    const [queryVector] = await embedTexts([query.expandedQuery], {
      requestId: options.requestId,
      stage: "QUERY_EMBEDDING",
    });
    const normalizedVector = normalizeVector(queryVector);

    logRag("QUERY_EMBEDDING", "Query embedding completed.", {
      requestId: options.requestId,
      embeddingModel: index.vectorIndex.model,
      embeddingDimension: index.vectorIndex.dimension,
      durationMs: Date.now() - embeddingStartedAt,
    });

    if (readFaissEndpoint()) {
      const faissResults = await searchFaissEndpoint(normalizedVector, index, limit, {
        requestId: options.requestId,
      });

      if (faissResults.length > 0) {
        return faissResults;
      }
    }

    return searchLocalVectorIndex(normalizedVector, index.vectorIndex, limit);
  } catch (error) {
    logRagError("QUERY_EMBEDDING", "Query embedding/vector search failed.", error, {
      requestId: options.requestId,
      fallback: "BM25-only retrieval",
    });

    return [] as RankedHit[];
  }
}

async function searchFaissEndpoint(
  queryVector: number[],
  index: RagIndex,
  limit: number,
  options: RetrieveRelevantChunksOptions
) {
  const endpoint = readFaissEndpoint();

  if (!endpoint) {
    return [] as RankedHit[];
  }

  const startedAt = Date.now();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embedding: queryVector,
        topK: limit,
        model: index.vectorIndex?.model,
      }),
    });

    if (!response.ok) {
      throw new Error(`FAISS endpoint returned ${response.status}`);
    }

    const payload = (await response.json()) as {
      results?: Array<{ chunkId?: string; chunkIndex?: number; score?: number }>;
    };
    const chunkIdToIndex = new Map(
      index.chunks.map((chunk, chunkIndex) => [chunk.id, chunkIndex])
    );
    const results = (payload.results ?? [])
      .map((result): RankedHit | null => {
        const chunkIndex =
          typeof result.chunkIndex === "number"
            ? result.chunkIndex
            : result.chunkId
              ? chunkIdToIndex.get(result.chunkId)
              : undefined;

        if (chunkIndex === undefined || !index.chunks[chunkIndex]) {
          return null;
        }

        return {
          chunkIndex,
          score: typeof result.score === "number" ? result.score : 0,
        };
      })
      .filter((result): result is RankedHit => result !== null)
      .slice(0, limit);

    logRag("RETRIEVAL", "FAISS vector endpoint search completed.", {
      requestId: options.requestId,
      endpoint,
      requestedTopK: limit,
      foundChunks: results.length,
      durationMs: Date.now() - startedAt,
    });

    return results;
  } catch (error) {
    logRagError("RETRIEVAL", "FAISS endpoint search failed.", error, {
      requestId: options.requestId,
      endpoint,
      fallback: "local vector search",
    });
    return [] as RankedHit[];
  }
}

function searchLocalVectorIndex(
  queryVector: number[],
  vectorIndex: VectorIndex,
  limit: number
) {
  return vectorIndex.vectors
    .map((vector, chunkIndex) => ({
      chunkIndex,
      score: dotProduct(queryVector, vector),
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

function fuseHybridResults(bm25Results: RankedHit[], vectorResults: RankedHit[]) {
  const rrfK = readPositiveIntegerEnv("RAG_RRF_K", DEFAULT_RRF_K);
  const candidates = new Map<number, HybridCandidate>();
  const normalizedBm25 = normalizeScores(bm25Results);
  const normalizedVector = normalizeScores(vectorResults);

  addRrfResults(candidates, bm25Results, normalizedBm25, "bm25", rrfK);
  addRrfResults(candidates, vectorResults, normalizedVector, "vector", rrfK);

  return Array.from(candidates.values()).sort((left, right) => {
    if (right.rrfScore !== left.rrfScore) {
      return right.rrfScore - left.rrfScore;
    }

    return right.bm25Score + (right.vectorScore ?? 0) -
      (left.bm25Score + (left.vectorScore ?? 0));
  });
}

function addRrfResults(
  candidates: Map<number, HybridCandidate>,
  results: RankedHit[],
  normalizedScores: Map<number, number>,
  source: "bm25" | "vector",
  rrfK: number
) {
  results.forEach((result, index) => {
    const rank = index + 1;
    const existing = candidates.get(result.chunkIndex);
    const rrfScore = 1 / (rrfK + rank);
    const normalizedScore = normalizedScores.get(result.chunkIndex) ?? 0;

    if (!existing) {
      candidates.set(result.chunkIndex, {
        chunkIndex: result.chunkIndex,
        bm25Score: source === "bm25" ? normalizedScore : 0,
        vectorScore: source === "vector" ? normalizedScore : null,
        rrfScore,
        rerankScore: rrfScore,
        source,
      });
      return;
    }

    existing.rrfScore += rrfScore;

    if (source === "bm25") {
      existing.bm25Score = Math.max(existing.bm25Score, normalizedScore);
    } else {
      existing.vectorScore = Math.max(existing.vectorScore ?? 0, normalizedScore);
    }

    existing.source = "hybrid";
  });
}

async function rerankCandidates(
  index: RagIndex,
  query: QueryProcessingResult,
  candidates: HybridCandidate[],
  options: RetrieveRelevantChunksOptions
) {
  const endpoint = readRerankEndpoint();

  if (endpoint) {
    const externalCandidates = await rerankWithEndpoint(index, query, candidates, endpoint, options);

    if (externalCandidates.length > 0) {
      return externalCandidates;
    }
  }

  return rerankLocally(index, query, candidates);
}

async function rerankWithEndpoint(
  index: RagIndex,
  query: QueryProcessingResult,
  candidates: HybridCandidate[],
  endpoint: string,
  options: RetrieveRelevantChunksOptions
) {
  const startedAt = Date.now();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query.originalQuery,
        documents: candidates.map((candidate) => {
          const chunk = index.chunks[candidate.chunkIndex];

          return {
            id: chunk.id,
            text: chunk.content,
            metadata: {
              document: chunk.document,
              chunkIndex: chunk.chunkIndex,
            },
          };
        }),
      }),
    });

    if (!response.ok) {
      throw new Error(`Rerank endpoint returned ${response.status}`);
    }

    const payload = (await response.json()) as {
      results?: Array<{ id?: string; score?: number }>;
    };
    const scoreById = new Map(
      (payload.results ?? [])
        .filter((result) => typeof result.id === "string")
        .map((result) => [result.id as string, result.score ?? 0])
    );
    const reranked = candidates
      .map((candidate) => {
        const chunk = index.chunks[candidate.chunkIndex];
        const endpointScore = scoreById.get(chunk.id);

        if (endpointScore === undefined) {
          return candidate;
        }

        return {
          ...candidate,
          rerankScore: endpointScore,
        };
      })
      .sort((left, right) => right.rerankScore - left.rerankScore);

    logRag("RANKING", "External reranking completed.", {
      requestId: options.requestId,
      endpoint,
      candidateCount: candidates.length,
      rerankedCount: scoreById.size,
      durationMs: Date.now() - startedAt,
    });

    return reranked;
  } catch (error) {
    logRagError("RANKING", "External reranking failed.", error, {
      requestId: options.requestId,
      endpoint,
      fallback: "local reranker",
    });
    return [] as HybridCandidate[];
  }
}

function rerankLocally(
  index: RagIndex,
  query: QueryProcessingResult,
  candidates: HybridCandidate[]
) {
  const maxRrf = Math.max(...candidates.map((candidate) => candidate.rrfScore), 1);

  return candidates
    .map((candidate) => {
      const chunk = index.chunks[candidate.chunkIndex];
      const normalizedContent = normalizeForSearch(chunk.content);
      const coverage = calculateQueryCoverage(query.queryTerms, normalizedContent);
      const phraseBoost =
        query.normalizedQuery.length > 12 && normalizedContent.includes(query.normalizedQuery)
          ? 0.18
          : 0;
      const exactNameBoost = calculateExactSignalBoost(query.queryTerms, normalizedContent);
      const vectorScore = candidate.vectorScore ?? 0;
      const rerankScore =
        candidate.rrfScore / maxRrf +
        0.36 * candidate.bm25Score +
        0.32 * vectorScore +
        0.22 * coverage +
        phraseBoost +
        exactNameBoost;

      return {
        ...candidate,
        rerankScore,
      };
    })
    .sort((left, right) => right.rerankScore - left.rerankScore);
}

async function loadOrBuildVectorIndex(
  chunks: RagChunk[],
  {
    documentSnapshot,
    chunkingConfig,
    persistedIndexDir,
  }: {
    documentSnapshot: DocumentSnapshot[];
    chunkingConfig: Record<string, number>;
    persistedIndexDir: string;
  }
) {
  const embeddingConfig = getEmbeddingConfig();

  if (!embeddingConfig.enabled) {
    logRag("EMBEDDING", "Document embedding disabled by configuration.", {
      status: "disabled",
      embeddingModel: embeddingConfig.model,
      vectorStore: "disabled",
    });
    return null;
  }

  const manifestHash = createManifestHash({
    documents: documentSnapshot,
    chunks: chunks.map((chunk) => ({
      id: chunk.id,
      tokenCount: chunk.tokenCount,
      contentHash: hashString(chunk.content),
    })),
    chunkingConfig,
    embeddingModel: embeddingConfig.model,
    embeddingProvider: "ollama",
  });
  const persisted = loadPersistedVectorIndex(persistedIndexDir, manifestHash, chunks);

  if (persisted) {
    logRag("EMBEDDING", "Loaded persisted vector index.", {
      status: "loaded",
      embeddingModel: persisted.model,
      embeddingDimension: persisted.dimension,
      chunkCount: persisted.chunkIds.length,
      vectorStore: "local-json",
      persistedIndexDir,
    });
    return persisted;
  }

  try {
    mkdirSync(/* turbopackIgnore: true */ persistedIndexDir, { recursive: true });

    const embeddingStartedAt = Date.now();
    const descriptors = createChunkEmbeddingDescriptors(chunks, embeddingConfig.model);
    const cache = loadEmbeddingCache(persistedIndexDir, embeddingConfig.model);
    const vectors = new Array<number[] | null>(chunks.length).fill(null);
    const missingIndexes: number[] = [];

    descriptors.forEach((descriptor, index) => {
      const entry = cache.entries[descriptor.cacheKey];

      if (
        entry &&
        entry.contentHash === descriptor.contentHash &&
        Array.isArray(entry.vector) &&
        entry.vector.length > 0
      ) {
        vectors[index] = entry.vector;
        return;
      }

      missingIndexes.push(index);
    });

    logRag("EMBEDDING", "Document embedding cache status loaded.", {
      status: missingIndexes.length === 0 ? "complete" : "partial",
      embeddingModel: embeddingConfig.model,
      cachedChunks: chunks.length - missingIndexes.length,
      missingChunks: missingIndexes.length,
      totalChunks: chunks.length,
      persistedIndexDir,
    });

    for (
      let offset = 0;
      offset < missingIndexes.length;
      offset += embeddingConfig.batchSize
    ) {
      const batchIndexes = missingIndexes.slice(offset, offset + embeddingConfig.batchSize);
      const batchEmbeddings = await embedTexts(
        batchIndexes.map((chunkIndex) => chunks[chunkIndex].content),
        {
          stage: "EMBEDDING",
        }
      );

      batchEmbeddings.forEach((embedding, batchOffset) => {
        const chunkIndex = batchIndexes[batchOffset];
        const descriptor = descriptors[chunkIndex];
        const vector = normalizeVector(embedding);

        vectors[chunkIndex] = vector;
        cache.dimension = vector.length;
        cache.entries[descriptor.cacheKey] = {
          chunkId: descriptor.chunkId,
          contentHash: descriptor.contentHash,
          vector,
        };
      });

      cache.updatedAt = new Date().toISOString();
      persistEmbeddingCache(persistedIndexDir, cache);

      logRag("EMBEDDING", "Document embedding batch persisted.", {
        status: "partial_persisted",
        embeddingModel: embeddingConfig.model,
        embeddedChunks: Math.min(offset + batchIndexes.length, missingIndexes.length),
        missingChunks: Math.max(
          0,
          missingIndexes.length - offset - batchIndexes.length
        ),
        totalMissingChunksAtStart: missingIndexes.length,
        totalChunks: chunks.length,
      });
    }

    const completedVectors = vectors.map((vector, index) => {
      if (!vector) {
        throw new Error(`Missing embedding for chunk ${chunks[index].id}`);
      }

      return vector;
    });
    const dimension = completedVectors[0]?.length ?? 0;

    if (dimension === 0 || completedVectors.length !== chunks.length) {
      throw new Error("Embedding service returned an invalid vector index.");
    }

    const vectorIndex: VectorIndex = {
      backend: "local-json",
      manifestHash,
      model: embeddingConfig.model,
      dimension,
      builtAt: new Date().toISOString(),
      chunkIds: chunks.map((chunk) => chunk.id),
      vectors: completedVectors,
    };

    persistVectorIndex(persistedIndexDir, vectorIndex, chunks, {
      documents: documentSnapshot,
      chunkingConfig,
      embeddingModel: embeddingConfig.model,
      embeddingDimension: dimension,
      manifestHash,
    });

    logRag("EMBEDDING", "Document embeddings built and persisted.", {
      status: "persisted",
      embeddingModel: embeddingConfig.model,
      embeddingDimension: dimension,
      chunksEmbeddedSuccessfully: vectors.length,
      vectorStore: "local-json",
      faissReady: true,
      persistedIndexDir,
      durationMs: Date.now() - embeddingStartedAt,
    });

    return vectorIndex;
  } catch (error) {
    logRagError("EMBEDDING", "Document embedding failed.", error, {
      embeddingModel: embeddingConfig.model,
      fallback: embeddingConfig.requireEmbeddings ? "throw" : "BM25-only retrieval",
    });

    if (embeddingConfig.requireEmbeddings) {
      throw error;
    }

    return null;
  }
}

function loadPersistedVectorIndex(
  persistedIndexDir: string,
  manifestHash: string,
  chunks: RagChunk[]
) {
  const vectorIndexPath = path.join(persistedIndexDir, VECTOR_INDEX_FILE);

  if (!existsSync(/* turbopackIgnore: true */ vectorIndexPath)) {
    return null;
  }

  try {
    const rawValue = readFileSync(/* turbopackIgnore: true */ vectorIndexPath, "utf8");
    const payload = JSON.parse(rawValue) as PersistedVectorIndex;

    if (
      payload.manifestHash !== manifestHash ||
      payload.chunkIds.length !== chunks.length ||
      payload.chunkIds.some((chunkId, index) => chunkId !== chunks[index].id)
    ) {
      return null;
    }

    return payload as VectorIndex;
  } catch (error) {
    logRagError("EMBEDDING", "Failed to load persisted vector index.", error, {
      vectorIndexPath,
      fallback: "rebuild embeddings",
    });
    return null;
  }
}

function createChunkEmbeddingDescriptors(chunks: RagChunk[], model: string) {
  return chunks.map((chunk): ChunkEmbeddingDescriptor => {
    const contentHash = hashString(chunk.content);

    return {
      chunkId: chunk.id,
      contentHash,
      cacheKey: hashString(`${model}\n${contentHash}`),
    };
  });
}

function loadEmbeddingCache(persistedIndexDir: string, model: string): EmbeddingCacheFile {
  const cachePath = path.join(persistedIndexDir, EMBEDDING_CACHE_FILE);

  if (!existsSync(/* turbopackIgnore: true */ cachePath)) {
    return createEmptyEmbeddingCache(model);
  }

  try {
    const rawValue = readFileSync(/* turbopackIgnore: true */ cachePath, "utf8");
    const payload = JSON.parse(rawValue) as EmbeddingCacheFile;

    if (payload.version !== 1 || payload.model !== model || !payload.entries) {
      return createEmptyEmbeddingCache(model);
    }

    return payload;
  } catch (error) {
    logRagError("EMBEDDING", "Failed to load embedding cache.", error, {
      cachePath,
      fallback: "start a new embedding cache",
    });
    return createEmptyEmbeddingCache(model);
  }
}

function createEmptyEmbeddingCache(model: string): EmbeddingCacheFile {
  return {
    version: 1,
    model,
    dimension: null,
    updatedAt: new Date().toISOString(),
    entries: {},
  };
}

function persistEmbeddingCache(
  persistedIndexDir: string,
  cache: EmbeddingCacheFile
) {
  writeJsonFile(path.join(persistedIndexDir, EMBEDDING_CACHE_FILE), cache);
}

function persistVectorIndex(
  persistedIndexDir: string,
  vectorIndex: VectorIndex,
  chunks: RagChunk[],
  manifest: Record<string, unknown>
) {
  writeJsonFile(path.join(persistedIndexDir, VECTOR_INDEX_FILE), vectorIndex);
  writeJsonFile(path.join(persistedIndexDir, CHUNKS_FILE), {
    builtAt: vectorIndex.builtAt,
    chunks,
  });
  writeJsonFile(path.join(persistedIndexDir, MANIFEST_FILE), {
    ...manifest,
    files: {
      vectorIndex: VECTOR_INDEX_FILE,
      chunks: CHUNKS_FILE,
      faissIndex: FAISS_INDEX_FILE,
      embeddingCache: EMBEDDING_CACHE_FILE,
    },
    notes: [
      "vectors.json is used by the built-in TypeScript cosine search fallback.",
      "faiss.index can be generated from vectors.json for a dedicated FAISS service.",
      "embedding-cache.json allows interrupted document embedding runs to resume.",
    ],
  });
}

function buildBm25Index(chunks: RagChunk[]) {
  const postings = new Map<string, Posting[]>();
  const documentFrequency = new Map<string, number>();
  let totalTokenCount = 0;

  chunks.forEach((chunk, chunkIndex) => {
    const termCounts = new Map<string, number>();

    for (const token of tokenize(chunk.content)) {
      termCounts.set(token, (termCounts.get(token) ?? 0) + 1);
    }

    totalTokenCount += chunk.tokenCount;

    for (const [term, count] of termCounts.entries()) {
      const entries = postings.get(term) ?? [];
      entries.push({ chunkIndex, count });
      postings.set(term, entries);
      documentFrequency.set(term, (documentFrequency.get(term) ?? 0) + 1);
    }
  });

  return {
    postings,
    documentFrequency,
    averageChunkLength: Math.max(1, totalTokenCount / chunks.length),
  };
}

function createChunkLogEntry(chunk: RetrievedChunk, rank: number) {
  return {
    initialRank: rank,
    finalRank: rank,
    document: chunk.document,
    documentId: chunk.id,
    metadata: {
      chunkIndex: chunk.chunkIndex,
      tokenCount: chunk.tokenCount,
      page: "N/A",
      sheet: "N/A",
      section: "N/A",
    },
    score: roundScore(chunk.score),
    retrieval: {
      bm25Score: roundScore(chunk.retrieval.bm25Score),
      vectorScore:
        chunk.retrieval.vectorScore === null
          ? null
          : roundScore(chunk.retrieval.vectorScore),
      rrfScore: roundScore(chunk.retrieval.rrfScore),
      rerankScore: roundScore(chunk.retrieval.rerankScore),
      source: chunk.retrieval.source,
    },
    preview: previewText(chunk.content),
  };
}

function createDocumentSnapshot(documentsDir: string, documentFiles: string[]) {
  return documentFiles.map((fileName) => {
    const filePath = path.join(/* turbopackIgnore: true */ documentsDir, fileName);
    const stats = statSync(/* turbopackIgnore: true */ filePath);

    return {
      fileName,
      size: stats.size,
      mtimeMs: Math.round(stats.mtimeMs),
    };
  });
}

function getDocumentType(fileName: string) {
  const extension = path.extname(fileName).replace(".", "").toUpperCase();

  return extension || "UNKNOWN";
}

function roundScore(value: number) {
  return Number(value.toFixed(3));
}

function createChunks(text: string, documentName: string) {
  const units = splitIntoUnits(text);
  const chunks: RagChunk[] = [];
  let currentUnits: string[] = [];
  let currentLength = 0;

  for (const unit of units) {
    const nextLength = currentLength + unit.length + 1;

    if (currentUnits.length > 0 && nextLength > MAX_CHUNK_CHARS) {
      pushChunk(chunks, documentName, currentUnits.join("\n"));
      currentUnits = getOverlapUnits(currentUnits);
      currentLength = currentUnits.join("\n").length;
    }

    currentUnits.push(unit);
    currentLength += unit.length + 1;

    if (currentLength >= MAX_CHUNK_CHARS) {
      pushChunk(chunks, documentName, currentUnits.join("\n"));
      currentUnits = getOverlapUnits(currentUnits);
      currentLength = currentUnits.join("\n").length;
    }
  }

  if (currentUnits.join("\n").trim().length >= MIN_CHUNK_CHARS) {
    pushChunk(chunks, documentName, currentUnits.join("\n"));
  }

  return chunks;
}

function splitIntoUnits(text: string) {
  return text
    .split(/\n+/)
    .flatMap((paragraph) => splitLongParagraph(paragraph.trim()))
    .map(compactWhitespace)
    .filter(Boolean);
}

function splitLongParagraph(paragraph: string) {
  if (paragraph.length <= MAX_CHUNK_CHARS) {
    return [paragraph];
  }

  const words = paragraph.split(/\s+/);
  const units: string[] = [];
  let current: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    if (current.length > 0 && currentLength + word.length + 1 > MAX_CHUNK_CHARS) {
      units.push(current.join(" "));
      current = [];
      currentLength = 0;
    }

    current.push(word);
    currentLength += word.length + 1;
  }

  if (current.length > 0) {
    units.push(current.join(" "));
  }

  return units;
}

function pushChunk(chunks: RagChunk[], documentName: string, content: string) {
  const compactContent = content.trim();
  const tokenCount = tokenize(compactContent).length;

  if (tokenCount === 0) {
    return;
  }

  chunks.push({
    id: `${documentName}#${chunks.length + 1}`,
    document: documentName,
    chunkIndex: chunks.length + 1,
    content: compactContent,
    tokenCount,
  });
}

function getOverlapUnits(units: string[]) {
  const overlap: string[] = [];
  let length = 0;

  for (let index = units.length - 1; index >= 0; index -= 1) {
    const unit = units[index];

    if (length + unit.length > OVERLAP_CHARS && overlap.length > 0) {
      break;
    }

    overlap.unshift(unit);
    length += unit.length + 1;
  }

  return overlap;
}

function createSnippet(content: string) {
  const compactContent = compactWhitespace(content);

  if (compactContent.length <= 520) {
    return compactContent;
  }

  return `${compactContent.slice(0, 500).trim()}...`;
}

function hasMeaningfulRetrievalTerms(queryTerms: string[]) {
  return queryTerms.some((term) => !SOCIAL_ONLY_RETRIEVAL_TERMS.has(term));
}

function calculateQueryCoverage(queryTerms: string[], normalizedContent: string) {
  if (queryTerms.length === 0) {
    return 0;
  }

  const matchedTerms = queryTerms.filter((term) =>
    hasNormalizedPhrase(normalizedContent, term)
  );

  return matchedTerms.length / queryTerms.length;
}

function calculateExactSignalBoost(queryTerms: string[], normalizedContent: string) {
  const hasNumberSignal = queryTerms.some((term) => /^\d+$/.test(term));
  const hasProperNameLikeSignal = queryTerms.some((term) => term.length >= 6);

  if (hasNumberSignal && queryTerms.some((term) => normalizedContent.includes(term))) {
    return 0.12;
  }

  if (
    hasProperNameLikeSignal &&
    queryTerms.filter((term) => term.length >= 6 && normalizedContent.includes(term))
      .length >= 2
  ) {
    return 0.08;
  }

  return 0;
}

function normalizeScores(results: RankedHit[]) {
  const scores = new Map<number, number>();
  const maxScore = Math.max(...results.map((result) => result.score), 0);

  if (maxScore <= 0) {
    return scores;
  }

  for (const result of results) {
    scores.set(result.chunkIndex, result.score / maxScore);
  }

  return scores;
}

function dotProduct(left: number[], right: number[]) {
  const length = Math.min(left.length, right.length);
  let score = 0;

  for (let index = 0; index < length; index += 1) {
    score += left[index] * right[index];
  }

  return score;
}

function hasNormalizedPhrase(normalizedText: string, normalizedPhrase: string) {
  const phrase = normalizeForSearch(normalizedPhrase);

  if (!phrase) {
    return false;
  }

  const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const phrasePattern = escapedPhrase.replace(/\s+/g, "\\s+");
  const regex = new RegExp(`(?:^|\\s)${phrasePattern}(?:$|\\s)`, "u");

  return regex.test(normalizedText);
}

function createManifestHash(value: unknown) {
  return hashString(stableStringify(value));
}

function hashString(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (value && typeof value === "object") {
    return `{${Object.entries(value as Record<string, unknown>)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, item]) => `${JSON.stringify(key)}:${stableStringify(item)}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

function writeJsonFile(filePath: string, value: unknown) {
  writeFileSync(
    /* turbopackIgnore: true */ filePath,
    `${JSON.stringify(value, null, 2)}\n`,
    "utf8"
  );
}

function readFaissEndpoint() {
  return process.env.RAG_FAISS_SEARCH_ENDPOINT?.trim() || "";
}

function readRerankEndpoint() {
  return process.env.RAG_RERANK_ENDPOINT?.trim() || "";
}

function readPositiveIntegerEnv(name: string, fallback: number) {
  const rawValue = process.env[name];

  if (!rawValue) {
    return fallback;
  }

  const parsedValue = Number(rawValue);

  if (!Number.isFinite(parsedValue) || parsedValue < 1) {
    return fallback;
  }

  return Math.floor(parsedValue);
}

function createSkippedRetrievalStats(): RagIndexStats {
  return {
    documentCount: 0,
    chunkCount: 0,
    documentsDir: process.env.RAG_DOCUMENTS_DIR ?? DEFAULT_DOCUMENTS_DIR,
    builtAt: new Date().toISOString(),
    retrievalMode: "bm25",
    embeddingModel: process.env.OLLAMA_EMBEDDING_MODEL ?? DEFAULT_EMBEDDING_MODEL,
    embeddingDimension: null,
    vectorStore: "disabled",
    persistedIndexDir: process.env.RAG_INDEX_DIR ?? DEFAULT_INDEX_DIR,
    faissIndexPath: null,
  };
}
