import { logRag, logRagError } from "@/lib/rag/logger";

export const DEFAULT_EMBEDDING_MODEL = "bge-m3:latest";

type EmbeddingStage = "EMBEDDING" | "QUERY_EMBEDDING";

type EmbedTextsOptions = {
  requestId?: string;
  stage?: EmbeddingStage;
};

type EmbeddingConfig = {
  enabled: boolean;
  requireEmbeddings: boolean;
  model: string;
  baseUrl: string;
  timeoutMs: number;
  batchSize: number;
};

type OllamaEmbedResponse = {
  embeddings?: number[][];
  embedding?: number[];
  error?: string;
};

const DEFAULT_BASE_URL = "http://127.0.0.1:11434";
const DEFAULT_TIMEOUT_MS = 900000;
const DEFAULT_BATCH_SIZE = 4;

export function getEmbeddingConfig(): EmbeddingConfig {
  return {
    enabled: readBooleanEnv("RAG_EMBEDDINGS_ENABLED", true),
    requireEmbeddings: readBooleanEnv("RAG_REQUIRE_EMBEDDINGS", false),
    model: process.env.OLLAMA_EMBEDDING_MODEL ?? DEFAULT_EMBEDDING_MODEL,
    baseUrl: process.env.OLLAMA_BASE_URL ?? DEFAULT_BASE_URL,
    timeoutMs: readPositiveIntegerEnv("OLLAMA_EMBEDDING_TIMEOUT_MS", DEFAULT_TIMEOUT_MS),
    batchSize: readPositiveIntegerEnv("RAG_EMBEDDING_BATCH_SIZE", DEFAULT_BATCH_SIZE),
  };
}

export async function embedTexts(texts: string[], options: EmbedTextsOptions = {}) {
  const config = getEmbeddingConfig();

  if (!config.enabled) {
    throw new Error("RAG embeddings are disabled by configuration.");
  }

  const startedAt = Date.now();
  const output: number[][] = [];

  logRag(options.stage ?? "EMBEDDING", "Preparing Ollama embedding request.", {
    requestId: options.requestId,
    model: config.model,
    baseUrl: config.baseUrl,
    textCount: texts.length,
    batchSize: config.batchSize,
    timeoutMs: config.timeoutMs,
  });

  for (let offset = 0; offset < texts.length; offset += config.batchSize) {
    const batch = texts.slice(offset, offset + config.batchSize);
    const batchStartedAt = Date.now();
    const embeddings = await embedBatch(batch, config, options);

    output.push(...embeddings);

    logRag(
      options.stage ?? "EMBEDDING",
      "Ollama embedding batch completed.",
      {
        requestId: options.requestId,
        model: config.model,
        batchStart: offset,
        batchSize: batch.length,
        embeddingsReturned: embeddings.length,
        durationMs: Date.now() - batchStartedAt,
      },
      { verboseOnly: true }
    );
  }

  logRag(options.stage ?? "EMBEDDING", "Ollama embedding request completed.", {
    requestId: options.requestId,
    model: config.model,
    textCount: texts.length,
    embeddingsReturned: output.length,
    dimension: output[0]?.length ?? null,
    durationMs: Date.now() - startedAt,
  });

  return output;
}

export function normalizeVector(vector: number[]) {
  let norm = 0;

  for (const value of vector) {
    norm += value * value;
  }

  const scale = Math.sqrt(norm);

  if (!Number.isFinite(scale) || scale === 0) {
    return vector.map(() => 0);
  }

  return vector.map((value) => value / scale);
}

async function embedBatch(
  texts: string[],
  config: EmbeddingConfig,
  options: EmbedTextsOptions
) {
  try {
    return await callOllamaEmbedEndpoint(texts, config, options);
  } catch (error) {
    logRagError(options.stage ?? "EMBEDDING", "Ollama /api/embed failed.", error, {
      requestId: options.requestId,
      fallback: "/api/embeddings",
      model: config.model,
    });

    return embedBatchWithLegacyEndpoint(texts, config, options);
  }
}

async function callOllamaEmbedEndpoint(
  texts: string[],
  config: EmbeddingConfig,
  options: EmbedTextsOptions
) {
  const payload = await postOllamaEmbeddingRequest(
    `${config.baseUrl.replace(/\/$/, "")}/api/embed`,
    {
      model: config.model,
      input: texts.length === 1 ? texts[0] : texts,
      keep_alive: "10m",
    },
    config,
    options
  );
  const embeddings =
    payload.embeddings ?? (payload.embedding ? [payload.embedding] : undefined);

  if (!embeddings || embeddings.length !== texts.length) {
    throw new Error("Ollama /api/embed returned an unexpected embedding payload.");
  }

  return embeddings;
}

async function embedBatchWithLegacyEndpoint(
  texts: string[],
  config: EmbeddingConfig,
  options: EmbedTextsOptions
) {
  const embeddings: number[][] = [];

  for (const text of texts) {
    const payload = await postOllamaEmbeddingRequest(
      `${config.baseUrl.replace(/\/$/, "")}/api/embeddings`,
      {
        model: config.model,
        prompt: text,
        keep_alive: "10m",
      },
      config,
      options
    );

    if (!payload.embedding) {
      throw new Error("Ollama /api/embeddings returned an empty embedding.");
    }

    embeddings.push(payload.embedding);
  }

  return embeddings;
}

async function postOllamaEmbeddingRequest(
  endpoint: string,
  body: Record<string, unknown>,
  config: EmbeddingConfig,
  options: EmbedTextsOptions
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), config.timeoutMs);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama embedding returned ${response.status}: ${errorText}`);
    }

    const payload = (await response.json()) as OllamaEmbedResponse;

    if (payload.error) {
      throw new Error(payload.error);
    }

    return payload;
  } catch (error) {
    logRagError(options.stage ?? "EMBEDDING", "Ollama embedding request failed.", error, {
      requestId: options.requestId,
      endpoint,
      model: config.model,
    });
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
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

function readBooleanEnv(name: string, fallback: boolean) {
  const rawValue = process.env[name];

  if (rawValue === undefined) {
    return fallback;
  }

  return ["1", "true", "yes", "on"].includes(rawValue.trim().toLowerCase());
}
