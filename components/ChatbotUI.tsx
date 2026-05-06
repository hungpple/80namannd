"use client";

import { FormEvent, useMemo, useState } from "react";
import { quickQuestions } from "@/lib/content";

type Message = {
  id: number;
  role: "bot" | "user";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: "bot",
    content:
      "Xin chào. Tôi có thể hỗ trợ tìm hiểu nhanh về các giai đoạn lịch sử, chiến công nổi bật và mục đích của website chuyên đề.",
  },
];

function createMockReply(input: string) {
  const normalized = input.toLowerCase();

  if (normalized.includes("lịch sử") || normalized.includes("giai đoạn")) {
    return "Phần lịch sử đang được tổ chức thành các giai đoạn lớn, giúp người xem nắm mạch phát triển chung trước khi đi vào từng tư liệu chi tiết.";
  }

  if (normalized.includes("chiến công") || normalized.includes("thành tựu")) {
    return "Phần chiến công nổi bật có thể tổ chức theo nhóm nội dung như an ninh, trật tự, vì nhân dân và chuyển đổi số. Mỗi mục nên có tiêu đề ngắn, thời gian, mô tả và tài liệu minh họa.";
  }

  if (normalized.includes("trang chủ") || normalized.includes("nội dung")) {
    return "Trang chủ nên ưu tiên thông điệp chính, các lối dẫn ngắn tới lịch sử, chiến công nổi bật và kênh hỏi đáp để người xem tiếp cận nhanh.";
  }

  return "Đây là phản hồi mẫu. Khi có kho dữ liệu chính thức, trợ lý có thể trả lời cụ thể hơn theo từng chủ đề và nguồn tư liệu.";
}

export function ChatbotUI() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const nextId = useMemo(() => messages.length + 1, [messages.length]);

  function sendMessage(value: string) {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    const userMessage: Message = {
      id: nextId,
      role: "user",
      content: trimmed,
    };

    const botMessage: Message = {
      id: nextId + 1,
      role: "bot",
      content: createMockReply(trimmed),
    };

    setMessages((current) => [...current, userMessage, botMessage]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="mx-auto flex h-[min(760px,calc(100svh-150px))] min-h-[560px] w-full overflow-hidden rounded-lg border border-red-100 bg-white shadow-xl shadow-red-950/10">
      <div className="flex min-h-0 w-full flex-col">
      <div className="border-b border-red-100 bg-red-900 px-5 py-4 text-white">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow-200">
          Chatbot AI
        </p>
        <h2 className="mt-1 text-2xl font-black">Trợ lý hỏi đáp tìm hiểu truyền thống lực lượng An ninh nhân dân</h2>
      </div>

      <div className="grid min-h-0 flex-1 lg:grid-cols-[1fr_320px]">
        <div className="flex min-h-0 flex-col">
          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-zinc-50 px-4 py-6 sm:px-6">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={[
                    "flex",
                    isUser ? "justify-end" : "justify-start",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "max-w-[82%] rounded-lg px-4 py-3 text-sm leading-7 shadow-sm",
                      isUser
                        ? "bg-red-800 text-white"
                        : "border border-red-100 bg-white text-zinc-800",
                    ].join(" ")}
                  >
                    {message.content}
                  </div>
                </div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-red-100 bg-white p-4"
          >
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Nhập câu hỏi..."
                className="min-h-12 flex-1 rounded-md border border-red-100 px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-700 focus:ring-4 focus:ring-red-100"
              />
              <button
                type="submit"
                className="rounded-md bg-red-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-100"
              >
                Gửi
              </button>
            </div>
          </form>
        </div>

        <aside className="min-h-0 overflow-y-auto border-t border-red-100 bg-white p-5 lg:border-l lg:border-t-0">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-800">
            Gợi ý câu hỏi
          </p>
          <div className="mt-4 grid gap-3">
            {quickQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => sendMessage(question)}
                className="rounded-md border border-red-100 bg-red-50 px-4 py-3 text-left text-sm font-semibold leading-6 text-red-900 transition hover:border-yellow-300 hover:bg-yellow-50"
              >
                {question}
              </button>
            ))}
          </div>
        </aside>
      </div>
      </div>
    </div>
  );
}
