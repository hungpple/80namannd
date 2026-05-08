import { existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { extractDocxText } from "@/lib/rag/docx";
import { compactWhitespace, normalizeForSearch, tokenize, uniqueTokens } from "@/lib/rag/text";

export type RagChunk = {
  id: string;
  document: string;
  chunkIndex: number;
  content: string;
  tokenCount: number;
};

export type RetrievedChunk = RagChunk & {
  score: number;
  snippet: string;
};

export type RagIndexStats = {
  documentCount: number;
  chunkCount: number;
  documentsDir: string;
  builtAt: string;
};

type Posting = {
  chunkIndex: number;
  count: number;
};

type RagIndex = {
  chunks: RagChunk[];
  postings: Map<string, Posting[]>;
  documentFrequency: Map<string, number>;
  averageChunkLength: number;
  stats: RagIndexStats;
};

const DEFAULT_DOCUMENTS_DIR =
  "D:\\JSONFolder\\Master of Software Engineering\\Study\\80namANND\\rag-documents";
const MAX_CHUNK_CHARS = 1000;
const MIN_CHUNK_CHARS = 220;
const OVERLAP_CHARS = 120;
const MAX_QUERY_TERMS = 32;
const BM25_K1 = 1.4;
const BM25_B = 0.72;

let cachedIndex: RagIndex | null = null;
let indexPromise: Promise<RagIndex> | null = null;

export async function getRagIndex() {
  if (cachedIndex) {
    return cachedIndex;
  }

  if (!indexPromise) {
    indexPromise = Promise.resolve().then(() => {
      cachedIndex = buildRagIndex();
      return cachedIndex;
    });
  }

  return indexPromise;
}

export async function retrieveRelevantChunks(question: string, limit = 7) {
  const index = await getRagIndex();
  const queryTerms = uniqueTokens(question).slice(0, MAX_QUERY_TERMS);

  if (queryTerms.length === 0) {
    return { chunks: [] as RetrievedChunk[], stats: index.stats };
  }

  const scores = new Map<number, number>();
  const totalChunks = index.chunks.length;

  for (const term of queryTerms) {
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

      scores.set(
        posting.chunkIndex,
        (scores.get(posting.chunkIndex) ?? 0) + inverseDocumentFrequency * lengthNorm
      );
    }
  }

  const normalizedQuestion = normalizeForSearch(question);
  const candidates = Array.from(scores.entries())
    .map(([chunkIndex, score]) => {
      const chunk = index.chunks[chunkIndex];
      const normalizedContent = normalizeForSearch(chunk.content);
      const phraseBoost =
        normalizedQuestion.length > 12 && normalizedContent.includes(normalizedQuestion)
          ? 2.5
          : 0;

      return {
        ...chunk,
        score: score + phraseBoost,
        snippet: createSnippet(chunk.content),
      };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);

  return { chunks: candidates, stats: index.stats };
}

function buildRagIndex(): RagIndex {
  const documentsDir = process.env.RAG_DOCUMENTS_DIR ?? DEFAULT_DOCUMENTS_DIR;

  if (
    !existsSync(/* turbopackIgnore: true */ documentsDir) ||
    !statSync(/* turbopackIgnore: true */ documentsDir).isDirectory()
  ) {
    throw new Error(`Không tìm thấy thư mục tài liệu RAG: ${documentsDir}`);
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

  const chunks: RagChunk[] = [];

  for (const fileName of documentFiles) {
    const filePath = path.join(/* turbopackIgnore: true */ documentsDir, fileName);
    const text = extractDocxText(filePath);
    const documentChunks = createChunks(text, fileName);

    chunks.push(...documentChunks);
  }

  if (chunks.length === 0) {
    throw new Error(`Không tìm thấy nội dung DOCX hợp lệ trong: ${documentsDir}`);
  }

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
    chunks,
    postings,
    documentFrequency,
    averageChunkLength: Math.max(1, totalTokenCount / chunks.length),
    stats: {
      documentCount: documentFiles.length,
      chunkCount: chunks.length,
      documentsDir,
      builtAt: new Date().toISOString(),
    },
  };
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
