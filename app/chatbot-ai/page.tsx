import type { Metadata } from "next";
import { ChatbotUI } from "@/components/ChatbotUI";

export const metadata: Metadata = {
  title: "Trợ lý AI 80 năm ANND",
  description:
    "Trợ lý AI RAG tra cứu tư liệu về 80 năm Ngày truyền thống lực lượng An ninh nhân dân Việt Nam.",
};

export default function ChatbotPage() {
  return (
    <main>
      <section className="flex min-h-[calc(100svh-104px)] items-center bg-red-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1180px]">
          <ChatbotUI />
        </div>
      </section>
    </main>
  );
}
