import Link from "next/link";
import { AchievementCard } from "@/components/AchievementCard";
import { HeroSection } from "@/components/HeroSection";
import { HomeHistoryTimeline } from "@/components/HomeHistoryTimeline";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { achievements } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <HomeHistoryTimeline />

      <section className="bg-red-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Chiến công nổi bật"
              title="Các chiến công nổi bật của lực lượng An ninh nhân dân"
              description="Những chiến công của lực lượng An ninh nhân dân Việt Nam trong suốt 80 năm chiến đấu và trưởng thành."
            />
            <Link
              href="/chien-cong-noi-bat"
              className="inline-flex w-fit items-center rounded-md bg-red-800 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-900"
            >
              Xem danh sách
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.slice(0, 3).map((item) => (
              <AchievementCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Chatbot AI"
              title="Kênh hỏi đáp nhanh cho các nội dung chuyên đề"
              description="Trợ lý hội thoại giúp người xem tìm hiểu nhanh các giai đoạn lịch sử, câu chuyện tiêu biểu và thông tin giới thiệu."
            />
            <Link
              href="/chatbot-ai"
              className="mt-7 inline-flex items-center rounded-md bg-yellow-300 px-5 py-3 text-sm font-bold text-red-950 transition hover:bg-yellow-200"
            >
              Trò chuyện với Chatbot AI
            </Link>
          </div>
          <PlaceholderVisual
            label="Không gian hỏi đáp hiện đại"
            eyebrow="Module AI placeholder"
            className="min-h-[360px]"
          />
        </div>
      </section>

    </main>
  );
}
