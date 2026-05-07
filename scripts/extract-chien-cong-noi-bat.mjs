import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const docxPath = path.resolve(
  projectRoot,
  "..",
  "documents",
  "PHỤ LỤC 80 CHIẾN CÔNG CỦA LLANND.docx",
);
const imageOutputRoot = path.join(
  projectRoot,
  "public",
  "images",
  "chien-cong-noi-bat",
);
const dataOutputPath = path.join(projectRoot, "data", "chienCongNoiBat.ts");
const indexOutputPath = path.join(
  projectRoot,
  "data",
  "chienCongNoiBatIndex.ts",
);

const periods = [
  {
    key: "1945-1954",
    title:
      "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    anchor: "giai-doan-1945-1954",
    from: 1,
    to: 15,
  },
  {
    key: "1954-1975",
    title:
      "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    anchor: "giai-doan-1954-1975",
    from: 16,
    to: 40,
  },
  {
    key: "1975-nay",
    title:
      "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    anchor: "giai-doan-1975-nay",
    from: 41,
    to: 80,
  },
];

function assertInside(parent, target) {
  const resolvedParent = path.resolve(parent);
  const resolvedTarget = path.resolve(target);

  if (
    resolvedTarget !== resolvedParent &&
    !resolvedTarget.startsWith(`${resolvedParent}${path.sep}`)
  ) {
    throw new Error(`Refusing to write outside ${resolvedParent}: ${resolvedTarget}`);
  }
}

function readZipEntries(zipPath) {
  const buffer = fs.readFileSync(zipPath);
  const eocdSignature = 0x06054b50;
  let eocdOffset = -1;

  for (let offset = buffer.length - 22; offset >= Math.max(0, buffer.length - 66000); offset--) {
    if (buffer.readUInt32LE(offset) === eocdSignature) {
      eocdOffset = offset;
      break;
    }
  }

  if (eocdOffset === -1) {
    throw new Error("Could not find DOCX zip directory.");
  }

  const entryCount = buffer.readUInt16LE(eocdOffset + 10);
  const centralDirectoryOffset = buffer.readUInt32LE(eocdOffset + 16);
  const entries = new Map();
  let offset = centralDirectoryOffset;

  for (let index = 0; index < entryCount; index++) {
    if (buffer.readUInt32LE(offset) !== 0x02014b50) {
      throw new Error(`Invalid central directory entry at ${offset}.`);
    }

    const method = buffer.readUInt16LE(offset + 10);
    const compressedSize = buffer.readUInt32LE(offset + 20);
    const fileNameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const localHeaderOffset = buffer.readUInt32LE(offset + 42);
    const fileName = buffer
      .subarray(offset + 46, offset + 46 + fileNameLength)
      .toString("utf8");

    entries.set(fileName, () => {
      if (buffer.readUInt32LE(localHeaderOffset) !== 0x04034b50) {
        throw new Error(`Invalid local file header for ${fileName}.`);
      }

      const localFileNameLength = buffer.readUInt16LE(localHeaderOffset + 26);
      const localExtraLength = buffer.readUInt16LE(localHeaderOffset + 28);
      const dataStart = localHeaderOffset + 30 + localFileNameLength + localExtraLength;
      const compressed = buffer.subarray(dataStart, dataStart + compressedSize);

      if (method === 0) {
        return Buffer.from(compressed);
      }

      if (method === 8) {
        return zlib.inflateRawSync(compressed);
      }

      throw new Error(`Unsupported zip compression method ${method} for ${fileName}.`);
    });

    offset += 46 + fileNameLength + extraLength + commentLength;
  }

  return entries;
}

function decodeXml(text) {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function toAscii(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Đ/g, "D")
    .replace(/đ/g, "d");
}

function compactKey(text) {
  return toAscii(text)
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "");
}

function normalizeSpaces(text) {
  return text.replace(/[\t\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

function titleCaseFromUppercase(text) {
  return text;
}

function parseRelationships(xml) {
  return Object.fromEntries(
    [...xml.matchAll(/<Relationship\b[^>]*Id="([^"]+)"[^>]*Target="([^"]+)"/g)].map(
      (match) => [match[1], match[2]],
    ),
  );
}

function parseParagraphs(documentXml, relationshipMap) {
  const tokenPattern = /<[^>]+>|[^<]+/g;
  const paragraphs = [];
  const stack = [];
  let inText = false;
  let paragraphId = 0;
  let match;

  while ((match = tokenPattern.exec(documentXml))) {
    const token = match[0];

    if (token.startsWith("<")) {
      if (/^<w:p(\s|>)/.test(token)) {
        const rootId = stack.length > 0 ? stack[0].rootId : paragraphId;

        stack.push({
          id: paragraphId++,
          rootId,
          depth: stack.length,
          textParts: [],
          images: [],
        });
      } else if (/^<\/w:p>/.test(token)) {
        const paragraph = stack.pop();

        if (paragraph) {
          paragraph.text = normalizeSpaces(paragraph.textParts.join(""));

          if (paragraph.text || paragraph.images.length > 0) {
            paragraphs.push(paragraph);
          }
        }
      } else if (/^<w:t(\s|>)/.test(token)) {
        inText = true;
      } else if (/^<\/w:t>/.test(token)) {
        inText = false;
      } else if (/^<w:(tab|br)\b/.test(token) && stack.length > 0) {
        stack[stack.length - 1].textParts.push(" ");
      }

      const imageMatch = token.match(/^<a:blip\b[^>]*r:embed="([^"]+)"/);

      if (imageMatch && stack.length > 0) {
        const target = relationshipMap[imageMatch[1]];

        if (target) {
          stack[stack.length - 1].images.push(target.replace(/^\/?word\//, ""));
        }
      }
    } else if (inText && stack.length > 0) {
      stack[stack.length - 1].textParts.push(decodeXml(token));
    }
  }

  return paragraphs.sort((a, b) => a.id - b.id);
}

function isArticleHeading(text) {
  const match = toAscii(text).match(/^CHIEN\s*CONG\s*(\d+)\s*[.:]?/i);
  return match ? Number(match[1]) : null;
}

function isSourceLine(text) {
  const ascii = toAscii(text);
  return /^(Nguon|Anh|Ảnh)\s*:/i.test(ascii) || /^Nguồn\s*:/i.test(text);
}

function uppercaseRatio(text) {
  const letters = [...text].filter((char) => /\p{L}/u.test(char));

  if (letters.length === 0) {
    return 0;
  }

  const uppercase = letters.filter((char) => char === char.toUpperCase()).length;
  return uppercase / letters.length;
}

function isPeriodOrSectionHeading(text) {
  const ascii = toAscii(text).toUpperCase();

  return (
    /^PHAN THU/.test(ascii) ||
    /^LUC LUONG AN NINH/.test(ascii) ||
    /^AN NINH MIEN/.test(ascii) ||
    /^DANH BAI/.test(ascii) ||
    /^II\./.test(ascii) ||
    /^III\./.test(ascii)
  );
}

function isLikelyTitleContinuation(text, canonicalTitle) {
  if (!text || text.length < 6) {
    return false;
  }

  if (isSourceLine(text)) {
    return false;
  }

  const textKey = compactKey(text);
  const titleKey = compactKey(canonicalTitle);

  return (
    textKey.length >= 8 &&
    titleKey.includes(textKey) &&
    (uppercaseRatio(text) > 0.72 || !/^Chien cong/i.test(toAscii(text)))
  );
}

function extractTocTitles(paragraphs) {
  const actualStart = paragraphs.findIndex(
    (paragraph, index) => index > 180 && toAscii(paragraph.text) === "PHAN THU NHAT",
  );

  if (actualStart === -1) {
    throw new Error("Could not find the start of the article body in the DOCX.");
  }

  const titles = new Map();
  const tocParagraphs = paragraphs.slice(0, actualStart);

  for (let index = 0; index < tocParagraphs.length; index++) {
    const paragraph = tocParagraphs[index];
    const articleNumber = isArticleHeading(paragraph.text);

    if (!articleNumber || articleNumber < 1 || articleNumber > 80) {
      continue;
    }

    const titleParts = [paragraph.text];
    let cursor = index + 1;

    while (cursor < tocParagraphs.length) {
      const next = tocParagraphs[cursor].text;

      if (!next || /^\d+$/.test(next) || isArticleHeading(next) || /^PHẦN THỨ/.test(next)) {
        break;
      }

      titleParts.push(next);
      cursor++;
    }

    titles.set(articleNumber, titleParts.join(" "));
  }

  if (titles.size !== 80) {
    throw new Error(`Expected 80 article titles, found ${titles.size}.`);
  }

  return { titles, actualStart };
}

function getPeriodForArticle(id) {
  const period = periods.find((item) => id >= item.from && id <= item.to);

  if (!period) {
    throw new Error(`No period configured for article ${id}.`);
  }

  return period;
}

function makeSlug(id) {
  return `chien-cong-${String(id).padStart(2, "0")}`;
}

function firstSentences(blocks) {
  const text = blocks
    .filter((block) => block.type === "paragraph")
    .map((block) => block.text)
    .join(" ");

  const sentences = text.match(/[^.!?。]+[.!?。]+/g);

  if (sentences?.length) {
    return normalizeSpaces(sentences.slice(0, 2).join(" "));
  }

  return normalizeSpaces(text).slice(0, 240);
}

function getImageSize(buffer) {
  if (buffer[0] === 0x89 && buffer.toString("ascii", 1, 4) === "PNG") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;

    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset++;
        continue;
      }

      const marker = buffer[offset + 1];
      const length = buffer.readUInt16BE(offset + 2);

      if (
        marker >= 0xc0 &&
        marker <= 0xc3 &&
        offset + 8 < buffer.length
      ) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }

      offset += 2 + length;
    }
  }

  return { width: 1200, height: 800 };
}

function imageExtension(target) {
  const extension = path.extname(target).toLowerCase();

  if (extension === ".jpeg") {
    return ".jpg";
  }

  return extension || ".jpg";
}

function cleanCaption(text) {
  const normalized = normalizeSpaces(text);

  if (!normalized || normalized.length > 260) {
    return null;
  }

  return normalized;
}

function addParagraph(article, text) {
  const normalized = normalizeSpaces(text);

  if (!normalized) {
    return;
  }

  const previous = article.content.at(-1);

  if (previous?.type === "paragraph" && previous.text === normalized) {
    return;
  }

  article.content.push({ type: "paragraph", text: normalized });
}

function attachCaption(article, text) {
  const caption = cleanCaption(text);

  if (!caption) {
    return false;
  }

  for (let index = article.content.length - 1; index >= 0; index--) {
    const block = article.content[index];

    if (block.type !== "image") {
      if (block.type === "paragraph") {
        return false;
      }

      continue;
    }

    if (!block.caption) {
      block.caption = caption;
      block.alt = caption;
      const image = article.images.find((item) => item.src === block.src);

      if (image) {
        image.caption = caption;
        image.alt = caption;
      }
    }

    return true;
  }

  return false;
}

function createEmptyArticles(titles) {
  return Array.from({ length: 80 }, (_, index) => {
    const id = index + 1;
    const period = getPeriodForArticle(id);

    return {
      id,
      slug: makeSlug(id),
      title: titleCaseFromUppercase(titles.get(id)),
      period: period.key,
      periodTitle: period.title,
      periodAnchor: period.anchor,
      summary: "",
      coverImage: null,
      images: [],
      content: [],
      extractionNotes: [],
    };
  });
}

function buildArticles(paragraphs, actualStart, titles, zipEntries) {
  const articles = createEmptyArticles(titles);
  const body = paragraphs.slice(actualStart);
  const pendingForNextArticle = [];
  let currentArticle = null;
  let expectNextArticle = false;

  function getArticle(id) {
    return articles[id - 1];
  }

  function addImage(article, target, text) {
    const sourcePath = `word/${target}`;
    const readEntry = zipEntries.get(sourcePath);

    if (!readEntry) {
      article.extractionNotes.push(`Không tìm thấy ảnh gốc ${target} trong DOCX.`);
      return;
    }

    const buffer = readEntry();
    const extension = imageExtension(target);
    const imageIndex = article.images.length;
    const fileName = imageIndex === 0 ? `cover${extension}` : `image-${String(imageIndex).padStart(2, "0")}${extension}`;
    const outputDirectory = path.join(imageOutputRoot, article.slug);
    const outputPath = path.join(outputDirectory, fileName);
    const publicPath = `/images/chien-cong-noi-bat/${article.slug}/${fileName}`;
    const { width, height } = getImageSize(buffer);
    const caption = cleanCaption(text);
    const note = caption
      ? null
      : "DOCX không có caption tách biệt cho ảnh này; ảnh được đặt theo vị trí gần nhất trong nội dung trích xuất.";

    fs.mkdirSync(outputDirectory, { recursive: true });
    fs.writeFileSync(outputPath, buffer);

    const imageBlock = {
      type: "image",
      src: publicPath,
      width,
      height,
      alt: caption ?? article.title,
      caption,
      note,
    };

    article.content.push(imageBlock);
    article.images.push({
      src: publicPath,
      width,
      height,
      alt: imageBlock.alt,
      caption,
      note,
    });

    if (!article.coverImage) {
      article.coverImage = publicPath;
    }
  }

  function flushPending(article) {
    while (pendingForNextArticle.length > 0) {
      const block = pendingForNextArticle.shift();
      processContentParagraph(article, block);
    }
  }

  function processContentParagraph(article, paragraph) {
    const text = paragraph.text;

    if (paragraph.images.length > 0) {
      for (const image of paragraph.images) {
        addImage(article, image, text.length <= 240 ? text : "");
      }

      if (text && text.length > 240 && !isLikelyTitleContinuation(text, article.title)) {
        addParagraph(article, text);
      }

      return;
    }

    if (!text) {
      return;
    }

    if (isSourceLine(text) || text.length <= 260) {
      if (attachCaption(article, text)) {
        return;
      }
    }

    if (isLikelyTitleContinuation(text, article.title)) {
      return;
    }

    addParagraph(article, text);
  }

  for (let bodyIndex = 0; bodyIndex < body.length; bodyIndex++) {
    const paragraph = body[bodyIndex];
    const text = paragraph.text;
    const articleNumber = isArticleHeading(text);

    if (articleNumber && articleNumber >= 1 && articleNumber <= 80) {
      currentArticle = getArticle(articleNumber);
      flushPending(currentArticle);

      if (paragraph.images.length > 0) {
        for (const image of paragraph.images) {
          addImage(currentArticle, image, "");
        }
      }

      expectNextArticle = false;
      continue;
    }

    if (isPeriodOrSectionHeading(text)) {
      expectNextArticle = true;
      continue;
    }

    if (!currentArticle) {
      continue;
    }

    if (expectNextArticle && text && !paragraph.images.length) {
      pendingForNextArticle.push(paragraph);
      continue;
    }

    processContentParagraph(currentArticle, paragraph);
  }

  for (const article of articles) {
    article.summary = firstSentences(article.content);

    if (!article.summary) {
      article.summary = article.title;
      article.extractionNotes.push("Không trích xuất được đoạn mô tả riêng; summary dùng lại tiêu đề.");
    }
  }

  return articles;
}

function serialize(value) {
  return JSON.stringify(value, null, 2)
    .replace(/"type": "([^"]+)"/g, '"type": "$1"')
    .replace(/"period": "([^"]+)"/g, '"period": "$1"');
}

function publicPeriods() {
  return periods.map(({ key, title, anchor }) => ({ key, title, anchor }));
}

function writeDataFiles(articles) {
  const dataHeader = `export type AchievementPeriodKey = "1945-1954" | "1954-1975" | "1975-nay";

export type AchievementParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type AchievementHeadingBlock = {
  type: "heading";
  id: string;
  level: 2 | 3;
  text: string;
};

export type AchievementImageBlock = {
  type: "image";
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string | null;
  note?: string | null;
};

export type AchievementContentBlock =
  | AchievementParagraphBlock
  | AchievementHeadingBlock
  | AchievementImageBlock;

export type AchievementImage = Omit<AchievementImageBlock, "type">;

export type FeaturedAchievement = {
  id: number;
  slug: string;
  title: string;
  period: AchievementPeriodKey;
  periodTitle: string;
  periodAnchor: string;
  summary: string;
  coverImage: string | null;
  images: AchievementImage[];
  content: AchievementContentBlock[];
  extractionNotes: string[];
};

`;

  const dataFile = `${dataHeader}export const achievementPeriods = ${serialize(publicPeriods())} as const;

// Generated from documents/PHỤ LỤC 80 CHIẾN CÔNG CỦA LLANND.docx.
// Image blocks with a \`note\` did not have a clear standalone caption in the DOCX and may need a quick manual review.
export const featuredAchievements = ${serialize(articles)} satisfies FeaturedAchievement[];

export function getFeaturedAchievementBySlug(slug: string) {
  return featuredAchievements.find((achievement) => achievement.slug === slug);
}

export function getAdjacentAchievements(id: number) {
  return {
    previous: featuredAchievements.find((achievement) => achievement.id === id - 1) ?? null,
    next: featuredAchievements.find((achievement) => achievement.id === id + 1) ?? null,
  };
}
`;

  const indexItems = articles.map((article) => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    period: article.period,
    periodTitle: article.periodTitle,
    periodAnchor: article.periodAnchor,
    summary: article.summary,
    coverImage: article.coverImage,
    imageCount: article.images.length,
  }));

  const indexFile = `import type { AchievementPeriodKey } from "./chienCongNoiBat";

export type AchievementCardItem = {
  id: number;
  slug: string;
  title: string;
  period: AchievementPeriodKey;
  periodTitle: string;
  periodAnchor: string;
  summary: string;
  coverImage: string | null;
  imageCount: number;
};

export const achievementPeriods = ${serialize(publicPeriods())} as const;

export const featuredAchievementCards = ${serialize(indexItems)} satisfies AchievementCardItem[];
`;

  fs.writeFileSync(dataOutputPath, dataFile, "utf8");
  fs.writeFileSync(indexOutputPath, indexFile, "utf8");
}

function main() {
  if (!fs.existsSync(docxPath)) {
    throw new Error(
      `Không đọc được DOCX tại ${docxPath}. Hãy copy file vào documents/PHỤ LỤC 80 CHIẾN CÔNG CỦA LLANND.docx rồi chạy lại.`,
    );
  }

  assertInside(path.join(projectRoot, "public", "images"), imageOutputRoot);
  fs.rmSync(imageOutputRoot, { recursive: true, force: true });
  fs.mkdirSync(imageOutputRoot, { recursive: true });

  const zipEntries = readZipEntries(docxPath);
  const documentXml = zipEntries.get("word/document.xml")?.().toString("utf8");
  const relationshipXml = zipEntries
    .get("word/_rels/document.xml.rels")
    ?.()
    .toString("utf8");

  if (!documentXml || !relationshipXml) {
    throw new Error("DOCX thiếu word/document.xml hoặc relationships.");
  }

  const relationshipMap = parseRelationships(relationshipXml);
  const paragraphs = parseParagraphs(documentXml, relationshipMap);
  const { titles, actualStart } = extractTocTitles(paragraphs);
  const articles = buildArticles(paragraphs, actualStart, titles, zipEntries);
  writeDataFiles(articles);

  const imageCount = articles.reduce((sum, article) => sum + article.images.length, 0);
  const articlesWithoutImages = articles
    .filter((article) => article.images.length === 0)
    .map((article) => article.id);

  console.log(`Extracted ${articles.length} articles.`);
  console.log(`Copied ${imageCount} referenced images to ${imageOutputRoot}.`);
  console.log(
    articlesWithoutImages.length
      ? `Articles without images: ${articlesWithoutImages.join(", ")}.`
      : "Every article has at least one image.",
  );
}

main();
