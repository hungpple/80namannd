import type { Metadata } from "next";
import { ChatbotUI } from "@/components/ChatbotUI";

export const metadata: Metadata = {
  title: "Chatbot AI",
  description:
    "Giao diện chatbot AI mock response cho website chuyên đề truyền thống Công an nhân dân.",
};

export default function ChatbotPage() {
  return (
    <main>
      <section className="flex min-h-[calc(100svh-104px)] items-center bg-red-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <ChatbotUI />
        </div>
      </section>
    </main>
  );
}
