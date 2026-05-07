import Image from "next/image";
import Link from "next/link";
import {
  featuredAchievementCards,
  type AchievementCardItem,
} from "@/data/chienCongNoiBatIndex";

const homeFeaturedAchievementIds = [6, 37, 56] as const;

const homeFeaturedAchievements = homeFeaturedAchievementIds
  .map((id) =>
    featuredAchievementCards.find((achievement) => achievement.id === id),
  )
  .filter(
    (achievement): achievement is AchievementCardItem =>
      typeof achievement !== "undefined",
  );

function getPeriodLabel(period: AchievementCardItem["period"]) {
  if (period === "1975-nay") {
    return "1975 - nay";
  }

  return period.replace("-", " - ");
}

export function HomeFeaturedAchievements() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {homeFeaturedAchievements.map((achievement) => (
        <article
          key={achievement.slug}
          className="group flex h-full flex-col overflow-hidden rounded-lg border border-red-100 bg-white shadow-sm shadow-red-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/10"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-red-950">
            {achievement.coverImage ? (
              <Image
                src={achievement.coverImage}
                alt={achievement.title}
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#7f1d1d,#991b1b_48%,#fef3c7)] p-8">
                <Image
                  src="/images/Vietnam_People's_Public_Security_Emblem.png"
                  alt=""
                  width={120}
                  height={120}
                  className="h-24 w-24 object-contain opacity-90"
                />
              </div>
            )}

            <div className="absolute left-4 top-4 rounded-md bg-yellow-300 px-3 py-2 text-sm font-black text-red-950 shadow-md">
              #{String(achievement.id).padStart(2, "0")}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <p className="text-sm font-black text-red-800">
              {getPeriodLabel(achievement.period)}
            </p>
            <h3 className="mt-3 text-xl font-black leading-7 text-zinc-950">
              {achievement.title}
            </h3>
            <p className="mt-3 flex-1 overflow-hidden text-sm leading-7 text-zinc-650 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
              {achievement.summary}
            </p>
            <Link
              href={`/chien-cong-noi-bat/${achievement.slug}`}
              className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-md border border-red-200 px-4 py-2 text-sm font-black text-red-800 transition group-hover:border-red-800 group-hover:bg-red-800 group-hover:text-white"
            >
              Xem chi tiết
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
