import Image from "next/image";
import Link from "next/link";
import type { FeaturedAchievement } from "@/data/chienCongNoiBat";
import { ScrollReveal } from "@/components/article/ScrollReveal";

type RelatedAchievementsProps = {
  achievements: FeaturedAchievement[];
};

export function RelatedAchievements({ achievements }: RelatedAchievementsProps) {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <section className="bg-red-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-black text-red-800">
              Cùng giai đoạn
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-zinc-950 md:text-4xl">
              Gợi ý đọc tiếp
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {achievements.map((achievement) => (
            <ScrollReveal key={achievement.slug}>
              <Link
                href={`/chien-cong-noi-bat/${achievement.slug}`}
                className="group block h-full overflow-hidden rounded-lg border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-red-950">
                  {achievement.coverImage ? (
                    <Image
                      src={achievement.coverImage}
                      alt={achievement.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-red-900 p-6">
                      <Image
                        src="/images/Vietnam_People's_Public_Security_Emblem.png"
                        alt=""
                        width={96}
                        height={96}
                        className="h-20 w-20 object-contain opacity-90"
                      />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-sm font-black text-red-800">
                    #{String(achievement.id).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-black leading-7 text-zinc-950">
                    {achievement.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
