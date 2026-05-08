import type { RetrievedChunk } from "@/lib/rag/retriever";

export type ChatHistoryItem = {
  role: "user" | "assistant";
  content: string;
};

type GenerateAnswerInput = {
  question: string;
  chunks: RetrievedChunk[];
  history?: ChatHistoryItem[];
};

type OllamaMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type OllamaChatResponse = {
  message?: {
    content?: string;
  };
  error?: string;
};

export const DEFAULT_OLLAMA_MODEL = "qwen2.5:7b";

const DEFAULT_TIMEOUT_MS = 900000;
const DEFAULT_NUM_CTX = 8192;
const DEFAULT_NUM_PREDICT = 800;

const SYSTEM_PROMPT = `
Bạn là Trợ lý AI của cuộc thi tìm hiểu 80 năm Ngày truyền thống lực lượng An ninh nhân dân Việt Nam (12/7/1946 - 12/7/2026).
Nhiệm vụ của bạn là tổng hợp, giải thích và cung cấp thông tin về lịch sử, truyền thống, đóng góp và chiến công của lực lượng An ninh nhân dân Việt Nam.
Chỉ sử dụng thông tin có trong phần tư liệu truy xuất. Nếu tư liệu không đủ để trả lời chắc chắn, hãy nói rõ là chưa tìm thấy thông tin phù hợp trong kho tài liệu.
Không bịa sự kiện, số liệu, tên người, ngày tháng hoặc nguồn dẫn. Trả lời bằng tiếng Việt, giọng trang trọng, dễ hiểu, phù hợp bối cảnh tuyên truyền giáo dục truyền thống.
Khi câu trả lời dựa trên tư liệu, hãy kết thúc bằng mục "Nguồn tham khảo" liệt kê ngắn các mã nguồn như [1], [2].
`.trim();

export async function generateAnswerWithQwen({
  question,
  chunks,
  history = [],
}: GenerateAnswerInput) {
  const model = process.env.OLLAMA_MODEL ?? DEFAULT_OLLAMA_MODEL;
  const baseUrl = process.env.OLLAMA_BASE_URL ?? "http://127.0.0.1:11434";
  const timeoutMs = readPositiveIntegerEnv("OLLAMA_TIMEOUT_MS", DEFAULT_TIMEOUT_MS);
  const numCtx = readPositiveIntegerEnv("OLLAMA_NUM_CTX", DEFAULT_NUM_CTX);
  const numPredict = readPositiveIntegerEnv(
    "OLLAMA_NUM_PREDICT",
    DEFAULT_NUM_PREDICT
  );
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const messages: OllamaMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...history.slice(-6),
    {
      role: "user",
      content: buildUserPrompt(question, chunks),
    },
  ];

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        stream: false,
        keep_alive: "10m",
        options: {
          num_ctx: numCtx,
          num_predict: numPredict,
          temperature: 0.2,
          top_p: 0.85,
        },
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama trả về ${response.status}: ${errorText}`);
    }

    const payload = (await response.json()) as OllamaChatResponse;
    const answer = payload.message?.content?.trim();

    if (!answer) {
      throw new Error(payload.error ?? "Ollama không trả về nội dung trả lời.");
    }

    return answer;
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

function buildUserPrompt(question: string, chunks: RetrievedChunk[]) {
  const context = chunks
    .map(
      (chunk, index) =>
        `[${index + 1}] ${chunk.document}, đoạn ${chunk.chunkIndex}\n${chunk.content}`
    )
    .join("\n\n");

  return `
Câu hỏi của người dùng:
${question}

Tư liệu truy xuất:
${context}

Yêu cầu trả lời:
- Tổng hợp đúng trọng tâm câu hỏi.
- Ưu tiên dữ kiện trong tư liệu truy xuất, không suy đoán ngoài tư liệu.
- Nếu có nhiều ý, trình bày theo các đoạn ngắn hoặc gạch đầu dòng vừa phải.
`.trim();
}
