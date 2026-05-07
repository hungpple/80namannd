import type { Metadata } from "next";
import Image from "next/image";
import { AchievementExplorer } from "@/components/achievements/AchievementExplorer";
import { ScrollReveal } from "@/components/article/ScrollReveal";
import {
  achievementPeriods,
  featuredAchievementCards,
} from "@/data/chienCongNoiBatIndex";

export const metadata: Metadata = {
  title: "80 chiến công nổi bật của lực lượng An ninh nhân dân",
  description:
    "Tổng hợp những chiến công, thành tích tiêu biểu gắn với chặng đường xây dựng, chiến đấu và trưởng thành của lực lượng An ninh nhân dân Việt Nam.",
};

export default function AchievementsPage() {
  return (
    <main>
      <section className="relative isolate flex min-h-[calc(100svh-56px)] items-center overflow-hidden bg-red-950 px-4 py-12 text-white sm:px-6 lg:min-h-[calc(100svh-64px)] lg:px-8 lg:py-16">
        <Image
          src="/images/hero/hero-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(69,10,10,0.9),rgba(127,29,29,0.76)_52%,rgba(69,10,10,0.66))]" />
        <div className="absolute inset-0 opacity-20 [background-image:url('/images/trong-dong.svg')] [background-position:right_center] [background-repeat:no-repeat] [background-size:min(92vw,920px)]" />

        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="max-w-4xl">
              {/* <p className="text-sm font-black text-yellow-200">
                Các chiến công nổi bật
              </p> */}
              <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-yellow-100 md:text-6xl">
                80 chiến công nổi bật của lực lượng An ninh nhân dân
              </h1>
              <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-red-50 md:text-xl">
                Tổng hợp những chiến công, thành tích tiêu biểu gắn với chặng
                đường xây dựng, chiến đấu và trưởng thành của lực lượng An
                ninh nhân dân Việt Nam.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {achievementPeriods.map((period) => (
              <ScrollReveal key={period.key}>
                <a
                  href={`#${period.anchor}`}
                  className="block min-h-full rounded-lg border border-yellow-200/40 bg-red-900/70 p-5 shadow-lg shadow-red-950/20 backdrop-blur-sm transition hover:-translate-y-1 hover:border-yellow-200 hover:bg-red-800"
                >
                  <p className="text-sm font-black text-yellow-200">
                    {period.key === "1975-nay"
                      ? "1975 - nay"
                      : period.key.replace("-", " - ")}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-red-50">
                    {period.title}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8e7] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-black text-red-800">Danh sách</p>
              <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-zinc-950 md:text-4xl">
                Tra cứu theo giai đoạn lịch sử
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-700">
                Lọc theo ba giai đoạn phát triển của lực lượng ANND hoặc tìm
                nhanh theo tên chiến công.
              </p>
            </div>
          </ScrollReveal>

          <AchievementExplorer
            achievements={featuredAchievementCards}
            periods={achievementPeriods}
          />
        </div>
      </section>
    </main>
  );
}
