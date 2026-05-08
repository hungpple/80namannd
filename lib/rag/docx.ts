import { readFileSync } from "node:fs";
import { inflateRawSync } from "node:zlib";

type ZipEntry = {
  name: string;
  compressionMethod: number;
  compressedSize: number;
  localHeaderOffset: number;
};

const END_OF_CENTRAL_DIRECTORY_SIGNATURE = 0x06054b50;
const CENTRAL_DIRECTORY_SIGNATURE = 0x02014b50;
const LOCAL_FILE_HEADER_SIGNATURE = 0x04034b50;

const WORD_TEXT_ENTRY_PATTERNS = [
  /^word\/document\.xml$/i,
  /^word\/footnotes\.xml$/i,
  /^word\/endnotes\.xml$/i,
  /^word\/comments\.xml$/i,
  /^word\/header\d+\.xml$/i,
  /^word\/footer\d+\.xml$/i,
];

export function extractDocxText(filePath: string) {
  const buffer = readFileSync(/* turbopackIgnore: true */ filePath);
  const entries = readZipEntries(buffer);
  const textEntries = entries.filter((entry) =>
    WORD_TEXT_ENTRY_PATTERNS.some((pattern) => pattern.test(entry.name))
  );

  const parts = textEntries
    .map((entry) => readZipEntry(buffer, entry).toString("utf8"))
    .map(extractTextFromWordXml)
    .filter(Boolean);

  return cleanExtractedText(parts.join("\n\n"));
}

function readZipEntries(buffer: Buffer): ZipEntry[] {
  const directoryOffset = findEndOfCentralDirectory(buffer);
  const entryCount = buffer.readUInt16LE(directoryOffset + 10);
  let offset = buffer.readUInt32LE(directoryOffset + 16);
  const entries: ZipEntry[] = [];

  for (let index = 0; index < entryCount; index += 1) {
    const signature = buffer.readUInt32LE(offset);

    if (signature !== CENTRAL_DIRECTORY_SIGNATURE) {
      throw new Error("DOCX central directory is not readable.");
    }

    const compressionMethod = buffer.readUInt16LE(offset + 10);
    const compressedSize = buffer.readUInt32LE(offset + 20);
    const fileNameLength = buffer.readUInt16LE(offset + 28);
    const extraFieldLength = buffer.readUInt16LE(offset + 30);
    const fileCommentLength = buffer.readUInt16LE(offset + 32);
    const localHeaderOffset = buffer.readUInt32LE(offset + 42);
    const nameStart = offset + 46;
    const nameEnd = nameStart + fileNameLength;

    entries.push({
      name: buffer.toString("utf8", nameStart, nameEnd),
      compressionMethod,
      compressedSize,
      localHeaderOffset,
    });

    offset = nameEnd + extraFieldLength + fileCommentLength;
  }

  return entries;
}

function findEndOfCentralDirectory(buffer: Buffer) {
  const minimumOffset = Math.max(0, buffer.length - 0xffff - 22);

  for (let offset = buffer.length - 22; offset >= minimumOffset; offset -= 1) {
    if (buffer.readUInt32LE(offset) === END_OF_CENTRAL_DIRECTORY_SIGNATURE) {
      return offset;
    }
  }

  throw new Error("DOCX file is missing a ZIP central directory.");
}

function readZipEntry(buffer: Buffer, entry: ZipEntry) {
  const signature = buffer.readUInt32LE(entry.localHeaderOffset);

  if (signature !== LOCAL_FILE_HEADER_SIGNATURE) {
    throw new Error(`DOCX entry ${entry.name} is missing a local header.`);
  }

  const fileNameLength = buffer.readUInt16LE(entry.localHeaderOffset + 26);
  const extraFieldLength = buffer.readUInt16LE(entry.localHeaderOffset + 28);
  const dataStart = entry.localHeaderOffset + 30 + fileNameLength + extraFieldLength;
  const compressedData = buffer.subarray(
    dataStart,
    dataStart + entry.compressedSize
  );

  if (entry.compressionMethod === 0) {
    return compressedData;
  }

  if (entry.compressionMethod === 8) {
    return inflateRawSync(compressedData);
  }

  throw new Error(
    `DOCX entry ${entry.name} uses unsupported compression method ${entry.compressionMethod}.`
  );
}

function extractTextFromWordXml(xml: string) {
  const output: string[] = [];
  const tokenPattern =
    /<w:t\b[^>]*>([\s\S]*?)<\/w:t>|<w:tab\b[^>]*\/?>|<w:br\b[^>]*\/?>|<\/w:p>|<\/w:tr>/g;
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(xml)) !== null) {
    const token = match[0];

    if (typeof match[1] === "string") {
      output.push(decodeXmlEntities(match[1]));
      continue;
    }

    if (token.startsWith("<w:tab")) {
      output.push("\t");
      continue;
    }

    output.push("\n");
  }

  return cleanExtractedText(output.join(""));
}

function cleanExtractedText(text: string) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function decodeXmlEntities(value: string) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, codePoint: string) =>
      String.fromCodePoint(Number(codePoint))
    )
    .replace(/&#x([\da-f]+);/gi, (_, codePoint: string) =>
      String.fromCodePoint(Number.parseInt(codePoint, 16))
    );
}
