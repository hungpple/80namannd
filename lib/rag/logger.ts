export type RagLogStage =
  | "INGEST"
  | "CHUNKING"
  | "EMBEDDING"
  | "QUERY"
  | "INTENT"
  | "QUERY_NORMALIZE"
  | "QUERY_REWRITE"
  | "QUERY_EMBEDDING"
  | "RETRIEVAL"
  | "RANKING"
  | "RAG_CONTEXT"
  | "QWEN_PROMPT"
  | "QWEN_RESPONSE"
  | "ERROR";

type RagLogLevel = "info" | "warn" | "error";

type RagLogOptions = {
  level?: RagLogLevel;
  maxStringLength?: number | null;
  verboseOnly?: boolean;
};

const DEBUG_LOGS_ENV = "ENABLE_RAG_DEBUG_LOGS";
const FULL_PROMPT_ENV = "RAG_LOG_FULL_PROMPT";
const BASIC_STRING_LIMIT = 420;
const DEBUG_STRING_LIMIT = 1400;

export function isRagDebugEnabled() {
  return readBooleanEnv(DEBUG_LOGS_ENV, false);
}

export function shouldLogFullPrompt() {
  if (!isRagDebugEnabled()) {
    return false;
  }

  const rawValue = process.env[FULL_PROMPT_ENV];

  if (rawValue === undefined) {
    return true;
  }

  return parseBoolean(rawValue);
}

export function createRagRequestId() {
  const timestamp = new Date().toISOString();
  const suffix = Math.random().toString(36).slice(2, 8);

  return `rag-${timestamp}-${suffix}`;
}

export function logRag(
  stage: RagLogStage,
  message: string,
  data?: unknown,
  options: RagLogOptions = {}
) {
  const debugEnabled = isRagDebugEnabled();

  if (options.verboseOnly && !debugEnabled) {
    return;
  }

  const maxStringLength =
    options.maxStringLength === undefined
      ? debugEnabled
        ? DEBUG_STRING_LIMIT
        : BASIC_STRING_LIMIT
      : options.maxStringLength;
  const payload =
    data === undefined ? "" : `\n${serializeForLog(data, maxStringLength)}`;

  writeLog(options.level ?? "info", `[${stage}] ${message}${payload}`);
}

export function logRagText(
  stage: RagLogStage,
  message: string,
  text: string,
  options: RagLogOptions = {}
) {
  const debugEnabled = isRagDebugEnabled();

  if (options.verboseOnly && !debugEnabled) {
    return;
  }

  const maxStringLength =
    options.maxStringLength === undefined
      ? debugEnabled
        ? DEBUG_STRING_LIMIT
        : BASIC_STRING_LIMIT
      : options.maxStringLength;
  const outputText =
    maxStringLength === null ? text : truncateText(text, maxStringLength);

  writeLog(options.level ?? "info", `[${stage}] ${message}\n${outputText}`);
}

export function logRagError(
  stage: Exclude<RagLogStage, "ERROR">,
  message: string,
  error: unknown,
  data?: Record<string, unknown>
) {
  logRag(
    "ERROR",
    `${stage}: ${message}`,
    {
      ...data,
      error: serializeError(error),
    },
    { level: "error" }
  );
}

export function previewText(value: string, maxChars = 260) {
  return truncateText(value.replace(/\s+/g, " ").trim(), maxChars);
}

export function serializeError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    name: "UnknownError",
    message: String(error),
  };
}

function readBooleanEnv(name: string, fallback: boolean) {
  const rawValue = process.env[name];

  if (rawValue === undefined) {
    return fallback;
  }

  return parseBoolean(rawValue);
}

function parseBoolean(value: string) {
  return ["1", "true", "yes", "on"].includes(value.trim().toLowerCase());
}

function truncateText(value: string, maxChars: number | null) {
  if (maxChars === null || value.length <= maxChars) {
    return value;
  }

  return `${value.slice(0, Math.max(0, maxChars - 3)).trim()}...`;
}

function serializeForLog(value: unknown, maxStringLength: number | null) {
  const normalized = normalizeForLog(value, maxStringLength);

  if (typeof normalized === "string") {
    return normalized;
  }

  try {
    return JSON.stringify(normalized, null, 2);
  } catch {
    return String(normalized);
  }
}

function normalizeForLog(
  value: unknown,
  maxStringLength: number | null,
  seen = new WeakSet<object>()
): unknown {
  if (typeof value === "string") {
    return truncateText(value, maxStringLength);
  }

  if (value instanceof Error) {
    return serializeError(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeForLog(item, maxStringLength, seen));
  }

  if (typeof value === "object" && value !== null) {
    if (seen.has(value)) {
      return "[Circular]";
    }

    seen.add(value);

    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [
        key,
        normalizeForLog(item, maxStringLength, seen),
      ])
    );
  }

  return value;
}

function writeLog(level: RagLogLevel, line: string) {
  if (level === "error") {
    console.error(line);
    return;
  }

  if (level === "warn") {
    console.warn(line);
    return;
  }

  console.log(line);
}
