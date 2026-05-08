"use client";

import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { quickQuestions } from "@/lib/content";

type Source = {
  id: string;
  document: string;
  chunkIndex: number;
  snippet: string;
  score: number;
};

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  sources?: Source[];
  warning?: string;
  isTyping?: boolean;
};

type ApiChatbotResponse = {
  answer?: string;
  sources?: Source[];
  warning?: string;
  error?: string;
};

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "bot",
    content:
      "Xin chào. Tôi là Trợ lý AI hỗ trợ tra cứu tư liệu về lịch sử, truyền thống và chiến công của lực lượng An ninh nhân dân Việt Nam trong 80 năm qua.",
  },
];

const processingSteps = [
  {
    title: "Tìm kiếm tài liệu",
    activeTitle: "Đang tìm kiếm tài liệu",
    description: "Đang rà soát kho tư liệu Word để tìm các đoạn liên quan...",
  },
  {
    title: "Phân tích ngữ cảnh",
    activeTitle: "Đang phân tích ngữ cảnh",
    description: "Đang chọn lọc nguồn, đối chiếu câu hỏi và tư liệu truy xuất...",
  },
  {
    title: "Soạn câu trả lời",
    activeTitle: "Đang soạn câu trả lời",
    description:
      "Đang tổng hợp thông tin và soạn câu trả lời chi tiết, dễ hiểu cho câu hỏi của bạn...",
  },
] as const;

const relatedQuestionGroups = [
  {
    keywords: ["12/7", "12-7", "ôn như hầu", "quốc dân đảng"],
    questions: [
      "Vì sao ngày 12/7/1946 được chọn là Ngày truyền thống lực lượng An ninh nhân dân?",
      "Vụ án Ôn Như Hầu có ý nghĩa như thế nào?",
      "Chiến công ngày 12/7/1946 bảo vệ chính quyền cách mạng ra sao?",
    ],
  },
  {
    keywords: ["kháng chiến", "thực dân pháp", "1954"],
    questions: [
      "Lực lượng An ninh nhân dân có nhiệm vụ gì trong kháng chiến chống Pháp?",
      "Những chiến công tiêu biểu giai đoạn 1946-1954 là gì?",
      "Bài học truyền thống nổi bật trong thời kỳ kháng chiến chống Pháp là gì?",
    ],
  },
  {
    keywords: ["chiến công", "tiêu biểu", "thành tích"],
    questions: [
      "Có thể phân nhóm các chiến công tiêu biểu theo giai đoạn nào?",
      "Chiến công nào thể hiện rõ tinh thần mưu trí, dũng cảm?",
      "Các chiến công đó đóng góp gì cho sự nghiệp bảo vệ Tổ quốc?",
    ],
  },
  {
    keywords: ["truyền thống", "đóng góp", "bảo vệ tổ quốc"],
    questions: [
      "Những phẩm chất truyền thống nổi bật của lực lượng An ninh nhân dân là gì?",
      "Lực lượng An ninh nhân dân đã đóng góp gì trong 80 năm qua?",
      "Có thể rút ra bài học giáo dục truyền thống nào từ nội dung này?",
    ],
  },
];

const markdownComponents: Components = {
  p({ children }) {
    return <p className="mb-3 last:mb-0">{children}</p>;
  },
  strong({ children }) {
    return <strong className="font-bold text-red-950">{children}</strong>;
  },
  em({ children }) {
    return <em className="italic text-zinc-700">{children}</em>;
  },
  ul({ children }) {
    return <ul className="mb-3 ml-5 list-disc space-y-1 last:mb-0">{children}</ul>;
  },
  ol({ children }) {
    return (
      <ol className="mb-3 ml-5 list-decimal space-y-1 last:mb-0">{children}</ol>
    );
  },
  li({ children }) {
    return <li className="pl-1">{children}</li>;
  },
  table({ children }) {
    return (
      <div className="my-3 overflow-x-auto rounded-md border border-red-100">
        <table className="min-w-full border-collapse text-left text-xs">
          {children}
        </table>
      </div>
    );
  },
  thead({ children }) {
    return <thead className="bg-red-50 text-red-950">{children}</thead>;
  },
  th({ children }) {
    return <th className="border-b border-red-100 px-3 py-2 font-bold">{children}</th>;
  },
  td({ children }) {
    return <td className="border-b border-red-50 px-3 py-2 align-top">{children}</td>;
  },
  code({ children, className }) {
    const isBlock = Boolean(className);

    if (isBlock) {
      return (
        <code className="block overflow-x-auto rounded-md bg-zinc-950 px-3 py-2 text-xs leading-6 text-zinc-50">
          {children}
        </code>
      );
    }

    return (
      <code className="rounded bg-red-50 px-1.5 py-0.5 text-[0.92em] font-semibold text-red-900">
        {children}
      </code>
    );
  },
  pre({ children }) {
    return <pre className="my-3 overflow-x-auto">{children}</pre>;
  },
  blockquote({ children }) {
    return (
      <blockquote className="my-3 border-l-4 border-yellow-300 bg-yellow-50 px-4 py-3 text-zinc-700">
        {children}
      </blockquote>
    );
  },
};

export function ChatbotUI() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [latestSources, setLatestSources] = useState<Source[]>([]);
  const [isReferencePanelOpen, setIsReferencePanelOpen] = useState(false);
  const chatShellRef = useRef<HTMLDivElement>(null);
  const scrollPanelRef = useRef<HTMLDivElement>(null);
  const processingTimersRef = useRef<number[]>([]);
  const typingTimerRef = useRef<number | null>(null);
  const referencePanelTouchedRef = useRef(false);

  const isBusy = isProcessing || typingMessageId !== null;
  const showInitialSuggestions = messages.length === 1 && !isProcessing;

  const clearProcessingTimers = useCallback(() => {
    for (const timer of processingTimersRef.current) {
      window.clearTimeout(timer);
    }

    processingTimersRef.current = [];
  }, []);

  const scrollPanelToBottom = useCallback((behavior: ScrollBehavior) => {
    const panel = scrollPanelRef.current;

    if (!panel) {
      return;
    }

    panel.scrollTo({
      top: panel.scrollHeight,
      behavior,
    });
  }, []);

  const scrollMessageToTop = useCallback((messageId: string) => {
    const panel = scrollPanelRef.current;
    const message = panel?.querySelector<HTMLElement>(
      `[data-message-id="${messageId}"]`
    );

    if (!panel || !message) {
      return;
    }

    panel.scrollTo({
      top: Math.max(0, message.offsetTop - 16),
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const shell = chatShellRef.current;

      if (!shell) {
        return;
      }

      const rect = shell.getBoundingClientRect();
      const shellCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const delta = shellCenter - viewportCenter;

      if (Math.abs(delta) > 72) {
        window.scrollBy({ top: delta, behavior: "smooth" });
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (isProcessing) {
      scrollPanelToBottom("smooth");
    }
  }, [isProcessing, processingStep, scrollPanelToBottom]);

  useEffect(() => {
    return () => {
      clearProcessingTimers();

      if (typingTimerRef.current !== null) {
        window.clearTimeout(typingTimerRef.current);
      }
    };
  }, [clearProcessingTimers]);

  async function sendMessage(value: string) {
    const trimmed = value.trim();

    if (!trimmed || isBusy) {
      return;
    }

    const history = messages
      .slice(-8)
      .map((message) => ({
        role: message.role === "bot" ? "assistant" : "user",
        content: message.content,
      }));

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
    };

    clearProcessingTimers();
    setLatestSources([]);
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setProcessingStep(0);
    setIsProcessing(true);
    scheduleProcessingSteps();

    window.requestAnimationFrame(() => scrollPanelToBottom("smooth"));

    try {
      const response = await fetch("/api/chatbot-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          history,
        }),
      });
      const payload = (await response.json()) as ApiChatbotResponse;

      if (!response.ok) {
        throw new Error(payload.error ?? "Không thể xử lý câu hỏi.");
      }

      const sources = payload.sources ?? [];
      const botMessageId = createId();
      const fullAnswer =
        payload.answer ?? "Tôi chưa nhận được nội dung trả lời từ hệ thống RAG.";

      clearProcessingTimers();
      setIsProcessing(false);
      setLatestSources(sources);
      openReferencePanelForNewSources(sources);
      setMessages((current) => [
        ...current,
        {
          id: botMessageId,
          role: "bot",
          content: "",
          sources,
          warning: payload.warning,
          isTyping: true,
        },
      ]);

      window.requestAnimationFrame(() => scrollMessageToTop(botMessageId));
      await revealBotMessage(botMessageId, fullAnswer);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Đã xảy ra lỗi khi gửi câu hỏi.";

      clearProcessingTimers();
      setIsProcessing(false);
      setMessages((current) => [
        ...current,
        {
          id: createId(),
          role: "bot",
          content: errorMessage,
        },
      ]);
      window.requestAnimationFrame(() => scrollPanelToBottom("smooth"));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  function scheduleProcessingSteps() {
    processingTimersRef.current = [
      window.setTimeout(() => setProcessingStep(1), 900),
      window.setTimeout(() => setProcessingStep(2), 2200),
    ];
  }

  function openReferencePanelForNewSources(sources: Source[]) {
    if (sources.length === 0 || referencePanelTouchedRef.current) {
      return;
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
      setIsReferencePanelOpen(true);
    }
  }

  function toggleReferencePanel() {
    referencePanelTouchedRef.current = true;
    setIsReferencePanelOpen((current) => !current);
  }

  function closeReferencePanel() {
    referencePanelTouchedRef.current = true;
    setIsReferencePanelOpen(false);
  }

  async function revealBotMessage(messageId: string, fullContent: string) {
    setTypingMessageId(messageId);

    await new Promise<void>((resolve) => {
      let visibleLength = 0;
      const charsPerTick = fullContent.length > 1800 ? 8 : 5;

      function tick() {
        visibleLength = Math.min(
          fullContent.length,
          visibleLength + charsPerTick
        );

        setMessages((current) =>
          current.map((message) =>
            message.id === messageId
              ? {
                  ...message,
                  content: fullContent.slice(0, visibleLength),
                  isTyping: visibleLength < fullContent.length,
                }
              : message
          )
        );

        if (visibleLength >= fullContent.length) {
          resolve();
          return;
        }

        typingTimerRef.current = window.setTimeout(tick, 18);
      }

      tick();
    });

    typingTimerRef.current = null;
    setTypingMessageId(null);
  }

  return (
    <>
      <div
        ref={chatShellRef}
        className={[
          "relative mx-auto flex h-[min(780px,calc(100svh-150px))] min-h-[560px] w-full max-w-[960px] items-stretch transition-transform duration-300",
          isReferencePanelOpen ? "lg:-translate-x-[190px]" : "lg:translate-x-0",
        ].join(" ")}
      >
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-red-100 bg-white shadow-xl shadow-red-950/10 transition-[max-width] duration-300">
        <div className="flex items-start gap-4 border-b border-red-100 bg-red-900 px-5 py-4 text-white">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow-200">
              Trợ lý AI
            </p>
            <h2 className="mt-1 text-2xl font-black leading-tight">
              Tìm hiểu 80 năm truyền thống lực lượng An ninh nhân dân
            </h2>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 bg-zinc-50">
          <div className="flex min-w-0 flex-1 flex-col">
            <div
              ref={scrollPanelRef}
              aria-live="polite"
              className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-6"
            >
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  disabled={isBusy}
                  showSuggestions={message.role === "bot" && message.id !== "welcome"}
                  onSuggestionClick={sendMessage}
                />
              ))}

              {showInitialSuggestions ? (
                <InlineSuggestionGroup
                  title="Câu hỏi gợi ý cho bạn"
                  questions={quickQuestions}
                  disabled={isBusy}
                  onSelect={sendMessage}
                />
              ) : null}

              {isProcessing ? (
                <ProcessingProgress currentStep={processingStep} />
              ) : null}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-red-100 bg-white p-4"
            >
              <div className="flex gap-3">
                <textarea
                  value={input}
                  rows={1}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Nhập câu hỏi..."
                  className="max-h-32 min-h-12 flex-1 resize-none rounded-md border border-red-100 px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-zinc-400 focus:border-red-700 focus:ring-4 focus:ring-red-100"
                />
                <button
                  type="submit"
                  disabled={isBusy || input.trim().length === 0}
                  className="h-12 rounded-md bg-red-800 px-5 text-sm font-bold text-white transition hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-600"
                >
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
      <ReferenceSidePanel
        isOpen={isReferencePanelOpen}
        sources={latestSources}
        onClose={closeReferencePanel}
        onToggle={toggleReferencePanel}
      />
    </>
  );
}

function ProcessingProgress({ currentStep }: { currentStep: number }) {
  const activeStep = processingSteps[currentStep] ?? processingSteps[0];

  return (
    <div className="flex justify-start">
      <div className="w-full max-w-[86%] rounded-lg border border-red-100 bg-white px-4 py-4 shadow-sm shadow-red-950/5">
        <div className="flex items-center gap-2 text-sm font-bold text-zinc-700">
          <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-black text-yellow-700">
            AI
          </span>
          <span>Tiến trình xử lý</span>
          <span className="ml-auto text-xs font-semibold text-zinc-400">
            Đang chạy
          </span>
        </div>

        <div className="mt-4 rounded-md border border-zinc-200 bg-zinc-50 px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <p className="font-bold text-zinc-900">{activeStep.activeTitle}</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-650">
            {activeStep.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold">
            {processingSteps.map((step, index) => {
              const isDone = index <= currentStep;

              return (
                <div
                  key={step.title}
                  className="flex items-center gap-2 text-emerald-600"
                >
                  <span
                    className={[
                      "h-2.5 w-2.5 rounded-full",
                      isDone ? "bg-emerald-500" : "bg-zinc-300",
                    ].join(" ")}
                  />
                  <span className={isDone ? "text-emerald-600" : "text-zinc-400"}>
                    {step.title}
                  </span>
                  {index < processingSteps.length - 1 ? (
                    <span className="text-zinc-300">-&gt;</span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 rounded-md border border-blue-100 bg-blue-50/40 px-4 py-3 text-sm font-semibold text-blue-700">
          Đang truy xuất nguồn tham khảo
        </div>
      </div>
    </div>
  );
}

function MessageBubble({
  message,
  disabled,
  showSuggestions,
  onSuggestionClick,
}: {
  message: Message;
  disabled: boolean;
  showSuggestions: boolean;
  onSuggestionClick: (question: string) => void;
}) {
  const isUser = message.role === "user";
  const relatedQuestions = getRelatedSuggestions(message.content);

  return (
    <div
      data-message-id={message.id}
      className={["flex", isUser ? "justify-end" : "justify-start"].join(" ")}
    >
      <div
        className={[
          "max-w-[88%] rounded-lg px-4 py-3 text-sm leading-7 shadow-sm sm:max-w-[86%]",
          isUser
            ? "bg-red-800 text-white"
            : "border border-red-100 bg-white text-zinc-800",
        ].join(" ")}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{message.content}</p>
        ) : (
          <MarkdownContent content={message.content} isTyping={message.isTyping} />
        )}

        {!isUser && showSuggestions && !message.isTyping ? (
          <InlineSuggestionGroup
            title="Câu hỏi gợi ý liên quan"
            questions={relatedQuestions}
            disabled={disabled}
            compact
            onSelect={onSuggestionClick}
          />
        ) : null}

        {!isUser && message.warning ? (
          <p className="mt-3 border-t border-red-100 pt-3 text-xs leading-5 text-red-800">
            {message.warning}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function InlineSuggestionGroup({
  title,
  questions,
  disabled,
  compact = false,
  onSelect,
}: {
  title: string;
  questions: readonly string[];
  disabled: boolean;
  compact?: boolean;
  onSelect: (question: string) => void;
}) {
  return (
    <div
      className={[
        compact
          ? "mt-4 border-t border-red-100 pt-3"
          : "ml-0 w-full max-w-4xl rounded-lg border border-blue-100 bg-blue-50/80 p-4 shadow-sm shadow-blue-950/5",
      ].join(" ")}
    >
      <div className="flex items-center gap-2 text-sm font-black text-blue-950">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-white text-xs text-blue-800">
          ?
        </span>
        <p>{title}</p>
      </div>
      <div className="mt-4 grid gap-3">
        {questions.map((question) => (
          <button
            key={question}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(question)}
            className={[
              "group flex w-full items-center gap-3 rounded-md border border-blue-200 bg-white/90 px-4 py-3 text-left text-sm font-semibold leading-6 text-zinc-700 shadow-sm shadow-blue-950/5 transition hover:border-red-200 hover:bg-white hover:text-red-900 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60",
              compact ? "text-xs sm:text-sm" : "",
            ].join(" ")}
          >
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-yellow-300 bg-yellow-50 text-xs font-black text-yellow-700 transition group-hover:border-red-200 group-hover:text-red-800">
              i
            </span>
            <span className="min-w-0 flex-1">{question}</span>
            <span className="text-blue-300 transition group-hover:text-red-400">
              -&gt;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function ReferenceSidePanel({
  isOpen,
  sources,
  onClose,
  onToggle,
}: {
  isOpen: boolean;
  sources: Source[];
  onClose: () => void;
  onToggle: () => void;
}) {
  return (
    <aside
      id="chatbot-reference-panel"
      className={[
        "fixed bottom-0 right-0 top-[72px] z-[40] w-[min(92vw,380px)] transition-transform duration-300 ease-out lg:top-[80px] lg:w-[360px]",
        isOpen ? "translate-x-0" : "translate-x-full",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onToggle}
        className="absolute left-0 top-1/2 z-10 h-28 w-11 -translate-x-full -translate-y-1/2 overflow-visible rounded-l-md bg-red-700 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-red-950/25 transition hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-100"
        aria-label={
          isOpen
            ? "Thu gọn panel tài liệu tham khảo"
            : "Mở panel tài liệu tham khảo"
        }
        aria-controls="chatbot-reference-panel"
          aria-expanded={isOpen}
      >
        <span className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap leading-none">
          Nguồn
        </span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm leading-none">
          {isOpen ? ">" : "<"}
        </span>
      </button>

      <div
        className={[
          "h-full overflow-hidden rounded-l-lg border-l border-red-100 bg-white shadow-2xl shadow-red-950/15 transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        role="dialog"
        aria-modal="false"
        aria-label="Tài liệu tham khảo"
      >
        <ReferencePanel sources={sources} onClose={onClose} />
      </div>
    </aside>
  );
}

function ReferencePanel({
  sources,
  onClose,
}: {
  sources: Source[];
  onClose: () => void;
}) {
  const sourceListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sourceListRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [sources]);

  return (
    <div className="flex h-full min-h-0 w-full flex-col bg-white">
      <div className="flex min-h-[58px] shrink-0 items-center gap-3 border-b border-zinc-100 px-4 py-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-700">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H7a3 3 0 0 0-3 3V5.5Z" />
            <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
          </svg>
        </span>
        <h3 className="min-w-0 flex-1 text-base font-black text-zinc-950">
          Tài liệu tham khảo
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-2xl font-light leading-none text-zinc-400 transition hover:bg-zinc-50 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-100"
          aria-label="Đóng panel tài liệu tham khảo"
        >
          ×
        </button>
      </div>

      <div
        ref={sourceListRef}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 [scrollbar-gutter:stable]"
      >
        {sources.length > 0 ? (
          <div className="space-y-3">
            {sources.map((source) => (
              <article
                key={`${source.document}-${source.chunkIndex}`}
                className="rounded-md border border-zinc-100 bg-white p-3 shadow-sm shadow-zinc-950/5 transition hover:border-red-100 hover:shadow-md"
              >
                <div className="flex items-start gap-2">
                  <span className="rounded bg-red-50 px-2 py-1 text-xs font-bold text-red-800">
                    [{source.id}]
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="break-words text-sm font-bold leading-5 text-zinc-950">
                      {source.document}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-zinc-500">
                      Đoạn {source.chunkIndex} · Điểm {source.score}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-zinc-650">
                  {source.snippet}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full text-zinc-300">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-14 w-14"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="M14 3v5a2 2 0 0 0 2 2h5" />
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l7 7v9a2 2 0 0 1-2 2h-1" />
                <circle cx="10" cy="15" r="2.5" />
                <path d="m12 17 2 2" />
              </svg>
            </span>
            <p className="mt-4 text-base font-bold text-zinc-400">
              Chưa có tài liệu tham khảo.
            </p>
            <p className="mt-2 text-sm font-medium text-zinc-300">
              Hãy đặt câu hỏi để xem nguồn tài liệu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function MarkdownContent({
  content,
  isTyping,
}: {
  content: string;
  isTyping?: boolean;
}) {
  return (
    <div className="chatbot-markdown">
      {content ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      ) : null}
      {isTyping ? (
        <span className="ml-0.5 inline-block h-4 w-1 translate-y-0.5 animate-pulse rounded-full bg-red-700" />
      ) : null}
    </div>
  );
}

function getRelatedSuggestions(content: string) {
  const normalizedContent = normalizeForSuggestions(content);
  const matchedGroup = relatedQuestionGroups.find((group) =>
    group.keywords.some((keyword) =>
      normalizedContent.includes(normalizeForSuggestions(keyword))
    )
  );
  const questions = matchedGroup?.questions ?? quickQuestions;

  return dedupeQuestions([...questions, ...quickQuestions]).slice(0, 4);
}

function dedupeQuestions(questions: readonly string[]) {
  return Array.from(new Set(questions));
}

function normalizeForSuggestions(value: string) {
  return value
    .toLowerCase()
    .replace(/đ/g, "d")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function createId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
}
