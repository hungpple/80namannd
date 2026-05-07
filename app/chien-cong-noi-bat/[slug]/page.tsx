import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AchievementArticleRenderer } from "@/components/achievements/AchievementArticleRenderer";
import { RelatedAchievements } from "@/components/achievements/RelatedAchievements";
import { ReadingProgressBar } from "@/components/article/ReadingProgressBar";
import { ScrollReveal } from "@/components/article/ScrollReveal";
import {
  featuredAchievements,
  getAdjacentAchievements,
  getFeaturedAchievementBySlug,
} from "@/data/chienCongNoiBat";

type AchievementDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPeriodLabel(period: string) {
  return period === "1975-nay" ? "1975 - nay" : period.replace("-", " - ");
}

export function generateStaticParams() {
  return featuredAchievements.map((achievement) => ({
    slug: achievement.slug,
  }));
}

export async function generateMetadata({
  params,
}: AchievementDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const achievement = getFeaturedAchievementBySlug(slug);

  if (!achievement) {
    return {
      title: "Không tìm thấy chiến công",
    };
  }

  return {
    title: achievement.title,
    description: achievement.summary,
  };
}

export default async function AchievementDetailPage({
  params,
}: AchievementDetailPageProps) {
  const { slug } = await params;
  const achievement = getFeaturedAchievementBySlug(slug);

  if (!achievement) {
    notFound();
  }

  const adjacent = getAdjacentAchievements(achievement.id);
  const related = featuredAchievements
    .filter(
      (item) =>
        item.period === achievement.period && item.slug !== achievement.slug,
    )
    .slice(0, 3);
  const firstCoverBlockIndex = achievement.content.findIndex(
    (block) =>
      block.type === "image" && block.src === achievement.coverImage,
  );
  const bodyBlocks = achievement.content.filter(
    (_, index) => index !== firstCoverBlockIndex,
  );

  return (
    <main>
      <ReadingProgressBar />

      <section className="relative isolate overflow-hidden bg-red-950 px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
        {achievement.coverImage ? (
          <Image
            src={achievement.coverImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
          />
        ) : (
          <Image
            src="/images/hero/hero-3.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(69,10,10,0.94),rgba(127,29,29,0.84)_52%,rgba(69,10,10,0.76))]" />

        <div className="relative mx-auto max-w-5xl">
          <ScrollReveal>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm font-bold text-yellow-100"
            >
              <Link href="/" className="transition hover:text-white">
                Trang chủ
              </Link>
              <span aria-hidden="true" className="text-yellow-300">
                /
              </span>
              <Link
                href="/chien-cong-noi-bat"
                className="transition hover:text-white"
              >
                Các chiến công nổi bật
              </Link>
              <span aria-hidden="true" className="text-yellow-300">
                /
              </span>
              <span className="max-w-full truncate">{achievement.title}</span>
            </nav>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-yellow-300 px-3 py-2 text-sm font-black text-red-950">
                Chiến công #{String(achievement.id).padStart(2, "0")}
              </span>
              <span className="rounded-md border border-yellow-200/50 bg-red-900/70 px-3 py-2 text-sm font-black text-yellow-100">
                {getPeriodLabel(achievement.period)}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-black leading-tight text-yellow-100 md:text-6xl">
              {achievement.title}
            </h1>
            <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-red-50">
              {achievement.summary}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#fff8e7] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <Link
              href="/chien-cong-noi-bat"
              className="inline-flex min-h-11 items-center rounded-md border border-red-200 bg-white px-4 py-2 text-sm font-black text-red-800 shadow-sm transition hover:border-red-800 hover:bg-red-800 hover:text-white"
            >
              Quay lại Các chiến công nổi bật
            </Link>
          </ScrollReveal>

          {achievement.coverImage ? (
            <ScrollReveal className="mt-8">
              <figure>
                <div className="overflow-hidden rounded-lg border border-red-100 bg-white p-2 shadow-xl shadow-red-950/10">
                  <Image
                    src={achievement.coverImage}
                    alt={achievement.title}
                    width={1200}
                    height={800}
                    sizes="(min-width: 1280px) 900px, 100vw"
                    className="h-auto max-h-[620px] w-full object-contain"
                    priority
                  />
                </div>
                {achievement.images[0]?.caption ? (
                  <figcaption className="mt-3 text-center text-sm leading-6 text-zinc-600">
                    {achievement.images[0].caption}
                  </figcaption>
                ) : null}
              </figure>
            </ScrollReveal>
          ) : null}

          <div className="mt-10">
            <AchievementArticleRenderer blocks={bodyBlocks} />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {adjacent.previous ? (
            <Link
              href={`/chien-cong-noi-bat/${adjacent.previous.slug}`}
              className="rounded-lg border border-red-100 p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              <p className="text-sm font-black text-red-800">
                Chiến công trước
              </p>
              <p className="mt-2 font-bold leading-7 text-zinc-950">
                {adjacent.previous.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {adjacent.next ? (
            <Link
              href={`/chien-cong-noi-bat/${adjacent.next.slug}`}
              className="rounded-lg border border-red-100 p-5 text-right shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              <p className="text-sm font-black text-red-800">
                Chiến công tiếp theo
              </p>
              <p className="mt-2 font-bold leading-7 text-zinc-950">
                {adjacent.next.title}
              </p>
            </Link>
          ) : null}
        </div>
      </section>

      <RelatedAchievements achievements={related} />
    </main>
  );
}
