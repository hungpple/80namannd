import { answerWithRag } from "@/lib/rag/chat";
import { logRag, logRagError, previewText } from "@/lib/rag/logger";
import { getRagIndex } from "@/lib/rag/retriever";
import type { ChatHistoryItem } from "@/lib/rag/ollama";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatbotRequestBody = {
  message?: unknown;
  history?: unknown;
};

export async function GET() {
  try {
    logRag("INGEST", "Chatbot index status requested.");
    const index = await getRagIndex();

    return jsonResponse({
      ok: true,
      stats: index.stats,
    });
  } catch (error) {
    logRagError("INGEST", "Chatbot index status request failed.", error);

    return jsonResponse(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Không thể khởi tạo kho tài liệu RAG.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const requestStartedAt = Date.now();

  try {
    const body = (await request.json()) as ChatbotRequestBody;
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      logRag(
        "QUERY",
        "Rejected empty chatbot API query.",
        {
          durationMs: Date.now() - requestStartedAt,
        },
        { level: "warn" }
      );

      return jsonResponse(
        { error: "Vui lòng nhập câu hỏi trước khi gửi." },
        { status: 400 }
      );
    }

    const history = parseHistory(body.history);
    logRag("QUERY", "Accepted chatbot API query.", {
      messageChars: message.length,
      messagePreview: previewText(message),
      historyMessages: history.length,
    });

    const result = await answerWithRag(message, history);

    logRag("QUERY", "Chatbot API request completed.", {
      durationMs: Date.now() - requestStartedAt,
      sourceCount: result.sources.length,
      warning: result.warning ?? null,
    });

    return jsonResponse(result);
  } catch (error) {
    logRagError("QUERY", "Chatbot API request failed.", error, {
      durationMs: Date.now() - requestStartedAt,
    });

    return jsonResponse(
      {
        error:
          error instanceof Error
            ? error.message
            : "Đã xảy ra lỗi khi xử lý câu hỏi.",
      },
      { status: 500 }
    );
  }
}

function parseHistory(value: unknown): ChatHistoryItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is { role: unknown; content: unknown } => {
      return (
        typeof item === "object" &&
        item !== null &&
        "role" in item &&
        "content" in item
      );
    })
    .map(
      (item): ChatHistoryItem => ({
        role: item.role === "assistant" ? "assistant" : "user",
        content: typeof item.content === "string" ? item.content.trim() : "",
      })
    )
    .filter((item) => item.content.length > 0)
    .slice(-8);
}

function jsonResponse(data: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");

  return new Response(JSON.stringify(data), {
    ...init,
    headers,
  });
}
