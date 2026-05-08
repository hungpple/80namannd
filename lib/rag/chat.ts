import {
  DEFAULT_OLLAMA_MODEL,
  generateAnswerWithQwen,
  type ChatHistoryItem,
} from "@/lib/rag/ollama";
import { retrieveRelevantChunks } from "@/lib/rag/retriever";

const DEFAULT_RAG_TOP_K = 10;

export type ChatbotSource = {
  id: string;
  document: string;
  chunkIndex: number;
  snippet: string;
  score: number;
};

export type ChatbotAnswer = {
  answer: string;
  sources: ChatbotSource[];
  warning?: string;
  stats: {
    documentCount: number;
    chunkCount: number;
    documentsDir: string;
    model: string;
    topK: number;
  };
};

export async function answerWithRag(
  question: string,
  history: ChatHistoryItem[] = []
): Promise<ChatbotAnswer> {
  const topK = readPositiveIntegerEnv("RAG_TOP_K", DEFAULT_RAG_TOP_K);
  const { chunks, stats } = await retrieveRelevantChunks(question, topK);
  const sources = chunks.map((chunk, index) => ({
    id: `${index + 1}`,
    document: chunk.document,
    chunkIndex: chunk.chunkIndex,
    snippet: chunk.snippet,
    score: Number(chunk.score.toFixed(3)),
  }));
  const baseStats = {
    documentCount: stats.documentCount,
    chunkCount: stats.chunkCount,
    documentsDir: stats.documentsDir,
    model: process.env.OLLAMA_MODEL ?? DEFAULT_OLLAMA_MODEL,
    topK,
  };

  if (chunks.length === 0) {
    return {
      answer:
        "Tôi chưa tìm thấy phần tư liệu đủ liên quan trong kho tài liệu Word để trả lời chắc chắn câu hỏi này. Bạn có thể hỏi cụ thể hơn về mốc thời gian, chiến công, nhân vật hoặc chuyên đề cần tra cứu.",
      sources,
      stats: baseStats,
    };
  }

  try {
    const answer = await generateAnswerWithQwen({ question, chunks, history });

    return {
      answer,
      sources,
      stats: baseStats,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Không rõ nguyên nhân.";

    return {
      answer:
        "Tôi đã truy xuất được tư liệu liên quan, nhưng hiện chưa kết nối được tới Qwen2.5:7B qua Ollama để tạo câu trả lời hoàn chỉnh. Vui lòng kiểm tra Ollama đang chạy và model `qwen2.5:7b` đã được cài đặt.",
      sources,
      warning: message,
      stats: baseStats,
    };
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
