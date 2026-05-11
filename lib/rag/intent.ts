export type ChatIntent =
  | "greeting"
  | "thanks"
  | "farewell"
  | "capability"
  | "identity"
  | "system_or_underlayer"
  | "unclear_or_too_short"
  | "follow_up"
  | "content_query";

const CONVERSATIONAL_INTENTS = new Set<ChatIntent>([
  "greeting",
  "thanks",
  "farewell",
  "capability",
  "identity",
  "system_or_underlayer",
  "unclear_or_too_short",
]);

const GREETING_EXACT = new Set([
  "xin chao",
  "xin chao ban",
  "chao",
  "chao ban",
  "hello",
  "hi",
  "hey",
  "alo",
  "ban oi",
  "chatbot oi",
]);

const THANKS_EXACT = new Set([
  "cam on",
  "cam on ban",
  "cam on ban nhe",
  "cam on nhe",
  "cam on nhieu",
  "thanks",
  "thank you",
  "thank you very much",
  "ok",
  "oke",
  "ok roi",
  "duoc roi",
  "ro roi",
  "toi hieu roi",
]);

const FAREWELL_EXACT = new Set([
  "tam biet",
  "hen gap lai",
  "bye",
  "goodbye",
  "chao nhe",
  "gap lai sau",
]);

const UNCLEAR_EXACT = new Set([
  "o",
  "ha",
  "sao",
  "test",
  "abc",
]);

const CONTENT_QUERY_PHRASES = [
  "luc luong an ninh nhan dan",
  "an ninh nhan dan",
  "annd",
  "80 nam",
  "ngay truyen thong",
  "12 7 1946",
  "12 7 2026",
  "chien cong",
  "lich su",
  "truyen thong",
  "dong gop",
  "bao ve to quoc",
  "bao ve dang",
  "bao ve nha nuoc",
  "bao ve nhan dan",
  "su kien",
  "giai doan",
  "thanh tich",
  "phong trao",
  "anh hung luc luong vu trang nhan dan",
  "phan cach mang",
  "quoc dan dang",
  "viet nam cong an vu",
  "cong an nhan dan",
  "an ninh quoc gia",
  "on nhu hau",
  "cach mang",
  "khang chien",
  "bao ve chinh quyen",
  "xay dung luc luong",
];

const FOLLOW_UP_PHRASES = [
  "phan tich them",
  "phan tich tiep",
  "noi ro hon",
  "giai thich them",
  "tiep tuc",
  "tiep tuc di",
  "y tren la gi",
  "noi dung tren co y nghia gi",
  "su kien nay co y nghia gi",
  "chien cong nay thuoc giai doan nao",
  "van de do la gi",
  "vay con noi dung nay thi sao",
  "noi dung nay thi sao",
  "y do la gi",
  "y nay la gi",
  "lam ro them",
];

const CONTEXT_DEPENDENT_FOLLOW_UP_PHRASES = [
  "y tren",
  "noi dung tren",
  "su kien nay",
  "chien cong nay",
  "van de do",
  "noi dung nay",
  "dieu nay",
  "viec nay",
  "y do",
  "y nay",
];

const SYSTEM_OR_UNDERLAYER_PHRASES = [
  "ban dung mo hinh gi",
  "ban co dung qwen khong",
  "ban co dung gpt khong",
  "ban co dung gemini khong",
  "ban dung cong nghe gi",
  "backend cua ban la gi",
  "he thong phia sau hoat dong nhu the nao",
  "he thong phia sau cua ban hoat dong nhu the nao",
  "ban co dung rag khong",
  "ban co dung bm25 khong",
  "ban co dung vector search khong",
  "ban dung embedding gi",
  "prompt he thong cua ban la gi",
  "log noi bo cua ban la gi",
  "du lieu duoc luu o dau",
  "mo hinh gi",
  "qwen",
  "gpt",
  "gemini",
  "ollama",
  "rag",
  "bm25",
  "vector search",
  "embedding",
  "backend",
  "api",
  "framework",
  "database",
  "prompt he thong",
  "log noi bo",
  "source code",
  "ma nguon",
  "retriever",
  "chunk",
];

const CAPABILITY_PHRASES = [
  "ban lam duoc gi",
  "ban co the lam gi",
  "chatbot nay ho tro gi",
  "toi co the hoi gi",
  "toi nen hoi nhu the nao",
  "huong dan toi su dung",
  "cach su dung chatbot",
  "ban ho tro nhung noi dung nao",
  "chatbot ho tro gi",
  "huong dan su dung",
];

const IDENTITY_PHRASES = [
  "ban la ai",
  "ban co vai tro gi",
  "ban la tro ly gi",
  "ban ho tro noi dung gi",
  "vai tro cua ban la gi",
];

const QUESTION_OR_INSTRUCTION_TERMS = new Set([
  "ai",
  "gi",
  "nao",
  "dau",
  "sao",
  "vi sao",
  "tai sao",
  "nhu the nao",
  "hay",
  "cho",
  "biet",
  "trinh bay",
  "phan tich",
  "giai thich",
  "tom tat",
  "neu",
  "ke",
  "liet",
]);

export function normalizeText(text: string) {
  return text
    .toLowerCase()
    .replace(/đ/g, "d")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function detectChatIntent(message: string): ChatIntent {
  const normalized = normalizeText(message);

  if (!normalized) {
    return "unclear_or_too_short";
  }

  const tokens = tokenizeNormalized(normalized);
  const hasFollowUp = hasFollowUpSignal(normalized);
  const hasContent = hasContentQuerySignal(normalized);

  if (hasFollowUp && hasContextDependentFollowUpSignal(normalized)) {
    return "follow_up";
  }

  if (hasContent) {
    return "content_query";
  }

  if (hasFollowUp) {
    return "follow_up";
  }

  if (hasAnyPhrase(normalized, SYSTEM_OR_UNDERLAYER_PHRASES)) {
    return "system_or_underlayer";
  }

  if (hasAnyPhrase(normalized, CAPABILITY_PHRASES)) {
    return "capability";
  }

  if (hasAnyPhrase(normalized, IDENTITY_PHRASES)) {
    return "identity";
  }

  if (isShortUtterance(tokens, 5) && FAREWELL_EXACT.has(normalized)) {
    return "farewell";
  }

  if (
    isShortUtterance(tokens, 6) &&
    (THANKS_EXACT.has(normalized) ||
      hasAnyPhrase(normalized, ["cam on", "thank you", "thanks"]))
  ) {
    return "thanks";
  }

  if (isShortUtterance(tokens, 4) && GREETING_EXACT.has(normalized)) {
    if (normalized === "alo" && /[?？]/u.test(message)) {
      return "unclear_or_too_short";
    }

    return "greeting";
  }

  if (UNCLEAR_EXACT.has(normalized) || tokens.length <= 1) {
    return "unclear_or_too_short";
  }

  if (looksLikeQuestionOrInstruction(normalized, tokens)) {
    return "content_query";
  }

  return "unclear_or_too_short";
}

export function isConversationalIntent(intent: ChatIntent) {
  return CONVERSATIONAL_INTENTS.has(intent);
}

export function shouldUseHistory(intent: ChatIntent) {
  return intent === "follow_up";
}

function hasContentQuerySignal(normalized: string) {
  return hasAnyPhrase(normalized, CONTENT_QUERY_PHRASES);
}

function hasFollowUpSignal(normalized: string) {
  return hasAnyPhrase(normalized, FOLLOW_UP_PHRASES);
}

function hasContextDependentFollowUpSignal(normalized: string) {
  return hasAnyPhrase(normalized, CONTEXT_DEPENDENT_FOLLOW_UP_PHRASES);
}

function looksLikeQuestionOrInstruction(normalized: string, tokens: string[]) {
  if (tokens.length < 3) {
    return false;
  }

  if (hasAnyPhrase(normalized, ["la gi", "vi sao", "tai sao", "nhu the nao"])) {
    return true;
  }

  return tokens.some((token) => QUESTION_OR_INSTRUCTION_TERMS.has(token));
}

function hasAnyPhrase(normalized: string, phrases: readonly string[]) {
  return phrases.some((phrase) => hasPhrase(normalized, phrase));
}

function hasPhrase(normalized: string, phrase: string) {
  const normalizedPhrase = normalizeText(phrase);

  if (!normalizedPhrase) {
    return false;
  }

  const escapedPhrase = normalizedPhrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const phrasePattern = escapedPhrase.replace(/\s+/g, "\\s+");
  const regex = new RegExp(`(?:^|\\s)${phrasePattern}(?:$|\\s)`, "u");

  return regex.test(normalized);
}

function tokenizeNormalized(normalized: string) {
  return normalized.split(/\s+/).filter(Boolean);
}

function isShortUtterance(tokens: string[], maxTokens: number) {
  return tokens.length > 0 && tokens.length <= maxTokens;
}
