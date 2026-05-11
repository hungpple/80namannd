import {
  generateAnswerWithQwen,
  generateConversationalReplyWithQwen,
  type ChatHistoryItem,
} from "@/lib/rag/ollama";
import type { RetrievalSignals } from "@/lib/rag/retriever";
import { buildFeaturedAchievementSpecialAnswer } from "@/lib/rag/featured-achievement-intent";
import {
  detectChatIntent,
  isConversationalIntent,
  shouldUseHistory,
  type ChatIntent,
} from "@/lib/rag/intent";
import { createRagRequestId, logRag, logRagError, previewText } from "@/lib/rag/logger";
import { retrieveRelevantChunks } from "@/lib/rag/retriever";

const DEFAULT_RAG_TOP_K = 10;
const PUBLIC_MODEL_LABEL = "Trợ lý AI";

export type ChatbotSource = {
  id: string;
  document: string;
  chunkIndex: number;
  snippet: string;
  score: number;
  retrieval?: RetrievalSignals;
};

export type ChatbotAnswer = {
  answer: string;
  sources: ChatbotSource[];
  warning?: string | null;
  stats: {
    documentCount: number;
    chunkCount: number;
    documentsDir: string;
    model: string;
    topK: number;
    retrievalMode?: string;
    embeddingModel?: string | null;
    embeddingDimension?: number | null;
    vectorStore?: string;
    persistedIndexDir?: string;
  };
};

export async function answerWithRag(
  question: string,
  history: ChatHistoryItem[] = []
): Promise<ChatbotAnswer> {
  const requestId = createRagRequestId();
  const queryStartedAt = Date.now();
  const topK = readPositiveIntegerEnv("RAG_TOP_K", DEFAULT_RAG_TOP_K);

  logRag("QUERY", "Received chatbot query.", {
    requestId,
    originalQuery: question,
    queryPreview: previewText(question),
    queryChars: question.length,
    historyMessages: history.length,
    topK,
  });

  const intent = detectChatIntent(question);
  const useHistory = shouldUseHistory(intent);

  logDetectedIntent(intent, {
    requestId,
    originalQuery: question,
    useHistory,
  });

  if (isConversationalIntent(intent)) {
    try {
      const answer = await generateConversationalReplyWithQwen({
        message: question,
        intent,
        requestId,
      });

      logRag("QUERY", "Chatbot conversational query completed successfully.", {
        requestId,
        durationMs: Date.now() - queryStartedAt,
        sourcesReturned: 0,
        answerChars: answer.length,
        answerPreview: previewText(answer),
      });

      return {
        answer,
        sources: [],
        warning: null,
        stats: createSkippedRetrievalStats(topK),
      };
    } catch (error) {
      const answer = buildConversationalFallbackAnswer(intent);

      logRagError(
        "QWEN_RESPONSE",
        "Conversational generation failed; returning safe fallback answer.",
        error,
        {
          requestId,
          durationMs: Date.now() - queryStartedAt,
          sourcesReturned: 0,
        }
      );

      return {
        answer,
        sources: [],
        warning: "Tạm thời chưa tạo được câu trả lời tự nhiên. Vui lòng thử lại sau.",
        stats: createSkippedRetrievalStats(topK),
      };
    }
  }

  const specialAnswer = buildFeaturedAchievementSpecialAnswer(question);

  if (specialAnswer) {
    const sources = [
      {
        id: "1",
        document: specialAnswer.sourceDocument,
        chunkIndex: 1,
        snippet: `Câu trả lời mẫu có cấu trúc cho intent ${specialAnswer.intent}, gồm ${specialAnswer.itemCount} mục từ tài liệu ${specialAnswer.sourceDocument}.`,
        score: 1,
      },
    ];

    logRag("QUERY", "Matched featured achievement special intent.", {
      requestId,
      intent: specialAnswer.intent,
      itemCount: specialAnswer.itemCount,
      sourceDocument: specialAnswer.sourceDocument,
      ragRetrieval: "skipped",
      qwenCall: "skipped",
      detectedIntent: intent,
      durationMs: Date.now() - queryStartedAt,
    });

    return {
      answer: specialAnswer.answer,
      sources,
      stats: {
        documentCount: 1,
        chunkCount: specialAnswer.itemCount,
        documentsDir: "structured constants: lib/rag/featured-achievements.ts",
        model: PUBLIC_MODEL_LABEL,
        topK,
      },
    };
  }

  const retrievalQuery = useHistory ? buildFollowUpRetrievalQuery(question, history) : question;
  let retrievalResult: Awaited<ReturnType<typeof retrieveRelevantChunks>>;

  try {
    retrievalResult = await retrieveRelevantChunks(retrievalQuery, topK, { requestId });
  } catch (error) {
    logRagError("RETRIEVAL", "Retrieval failed before answer generation.", error, {
      requestId,
      durationMs: Date.now() - queryStartedAt,
    });
    throw error;
  }

  const { chunks, stats } = retrievalResult;
  const sources = chunks.map((chunk, index) => ({
    id: `${index + 1}`,
    document: chunk.document,
    chunkIndex: chunk.chunkIndex,
    snippet: chunk.snippet,
    score: Number(chunk.score.toFixed(3)),
    retrieval: chunk.retrieval,
  }));
  const baseStats = {
    documentCount: stats.documentCount,
    chunkCount: stats.chunkCount,
    documentsDir: stats.documentsDir,
    model: PUBLIC_MODEL_LABEL,
    topK,
    retrievalMode: stats.retrievalMode,
    embeddingModel: stats.embeddingModel,
    embeddingDimension: stats.embeddingDimension,
    vectorStore: stats.vectorStore,
    persistedIndexDir: stats.persistedIndexDir,
  };

  if (chunks.length === 0) {
    logRag("RAG_CONTEXT", "No RAG context available for this query.", {
      requestId,
      retrievedChunks: 0,
      qwenCall: "skipped",
    });
    logRag("QWEN_PROMPT", "Qwen prompt construction skipped.", {
      requestId,
      reason: "No chunks were retrieved.",
    });
    logRag("QUERY", "Chatbot query completed without model generation.", {
      requestId,
      durationMs: Date.now() - queryStartedAt,
      sourcesReturned: 0,
    });

    return {
      answer:
        "Tôi chưa tìm thấy tài liệu liên quan để trả lời chắc chắn câu hỏi này. Bạn có thể hỏi cụ thể hơn về mốc thời gian, chiến công, nhân vật hoặc chuyên đề cần tra cứu.",
      sources,
      stats: baseStats,
    };
  }

  try {
    const answer = await generateAnswerWithQwen({
      question,
      chunks,
      history: useHistory ? history : [],
      useHistory,
      requestId,
    });

    logRag("QUERY", "Chatbot query completed successfully.", {
      requestId,
      durationMs: Date.now() - queryStartedAt,
      sourcesReturned: sources.length,
      answerChars: answer.length,
      answerPreview: previewText(answer),
    });

    return {
      answer,
      sources,
      stats: baseStats,
    };
  } catch (error) {
    logRagError("QWEN_RESPONSE", "Answer generation failed; returning fallback answer.", error, {
      requestId,
      durationMs: Date.now() - queryStartedAt,
      sourcesReturned: sources.length,
    });

    return {
      answer:
        "Tôi đã truy xuất được tư liệu liên quan, nhưng hiện chưa tạo được câu trả lời hoàn chỉnh. Vui lòng thử lại sau.",
      sources,
      warning: "Tạm thời chưa tạo được câu trả lời hoàn chỉnh. Vui lòng thử lại sau.",
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

function logDetectedIntent(
  intent: ChatIntent,
  {
    requestId,
    originalQuery,
    useHistory,
  }: {
    requestId: string;
    originalQuery: string;
    useHistory: boolean;
  }
) {
  if (isConversationalIntent(intent)) {
    logRag("INTENT", "Conversational intent detected.", {
      requestId,
      originalQuery,
      detectedIntent: intent,
      action: "skip_retrieval_use_qwen_conversational_mode",
      useHistory: false,
      sourcesReturned: 0,
    });
    return;
  }

  if (intent === "follow_up") {
    logRag("INTENT", "Follow-up query detected.", {
      requestId,
      originalQuery,
      detectedIntent: intent,
      action: "use_rag_mode_with_history",
      useHistory,
    });
    return;
  }

  logRag("INTENT", "Content query detected.", {
    requestId,
    originalQuery,
    detectedIntent: "content_query",
    action: "use_rag_mode",
    useHistory: false,
  });
}

function buildFollowUpRetrievalQuery(question: string, history: ChatHistoryItem[]) {
  const recentUserQuestions = history
    .filter((item) => item.role === "user")
    .map((item) => item.content.trim())
    .filter(Boolean)
    .slice(-2);

  return [...recentUserQuestions, question].join("\n");
}

function createSkippedRetrievalStats(topK: number) {
  return {
    documentCount: 0,
    chunkCount: 0,
    documentsDir: process.env.RAG_DOCUMENTS_DIR ?? "resources",
    model: PUBLIC_MODEL_LABEL,
    topK,
  };
}

function buildConversationalFallbackAnswer(intent: ChatIntent) {
  if (intent === "thanks") {
    return "Rất vui được hỗ trợ bạn. Khi cần tìm hiểu thêm về lịch sử, truyền thống, chiến công hoặc đóng góp của lực lượng An ninh nhân dân Việt Nam, bạn cứ đặt câu hỏi nhé.";
  }

  if (intent === "farewell") {
    return "Tạm biệt bạn. Chúc bạn học tập và tìm hiểu thật hiệu quả về truyền thống lực lượng An ninh nhân dân Việt Nam.";
  }

  if (intent === "unclear_or_too_short") {
    return "Bạn vui lòng nhập câu hỏi cụ thể hơn để tôi có thể hỗ trợ chính xác, ví dụ về ngày truyền thống, lịch sử hình thành, chiến công tiêu biểu hoặc đóng góp của lực lượng An ninh nhân dân Việt Nam.";
  }

  if (intent === "capability") {
    return "Tôi có thể hỗ trợ bạn tìm hiểu về ngày truyền thống, lịch sử hình thành, các chiến công tiêu biểu, đóng góp của lực lượng An ninh nhân dân Việt Nam và ý nghĩa của các sự kiện liên quan.";
  }

  return "Tôi là Trợ lý AI được phát triển để hỗ trợ tra cứu, tìm hiểu thông tin về lịch sử, truyền thống, chiến công và những đóng góp của lực lượng An ninh nhân dân Việt Nam.";
}
