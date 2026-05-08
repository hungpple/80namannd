const VIETNAMESE_STOP_WORDS = new Set([
  "a",
  "ai",
  "anh",
  "ay",
  "bang",
  "bi",
  "boi",
  "cac",
  "cai",
  "can",
  "cho",
  "chu",
  "co",
  "con",
  "cua",
  "cung",
  "da",
  "dang",
  "de",
  "den",
  "di",
  "do",
  "duoc",
  "duoi",
  "gi",
  "giua",
  "hay",
  "hon",
  "khi",
  "khong",
  "la",
  "lai",
  "len",
  "luc",
  "ma",
  "mot",
  "nay",
  "neu",
  "nhieu",
  "nhung",
  "nhu",
  "o",
  "qua",
  "ra",
  "rang",
  "roi",
  "sau",
  "se",
  "su",
  "tai",
  "the",
  "theo",
  "thi",
  "trong",
  "tu",
  "va",
  "van",
  "vao",
  "ve",
  "vi",
  "voi",
]);

export function normalizeForSearch(value: string) {
  return value
    .toLowerCase()
    .replace(/đ/g, "d")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function tokenize(value: string) {
  const tokens = normalizeForSearch(value).match(/[a-z0-9]+/g) ?? [];

  return tokens.filter((token) => {
    if (/^\d+$/.test(token)) {
      return true;
    }

    return token.length >= 2 && !VIETNAMESE_STOP_WORDS.has(token);
  });
}

export function uniqueTokens(value: string) {
  return Array.from(new Set(tokenize(value)));
}

export function compactWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}
