"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/article/ScrollReveal";
import type {
  AchievementCardItem,
  achievementPeriods,
} from "@/data/chienCongNoiBatIndex";
import type { AchievementPeriodKey } from "@/data/chienCongNoiBat";

type PeriodFilter = "all" | AchievementPeriodKey;

type AchievementExplorerProps = {
  achievements: AchievementCardItem[];
  periods: typeof achievementPeriods;
};

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function getPeriodLabel(period: PeriodFilter) {
  if (period === "all") {
    return "Tất cả";
  }

  if (period === "1975-nay") {
    return "1975 - nay";
  }

  return period.replace("-", " - ");
}

export function AchievementExplorer({
  achievements,
  periods,
}: AchievementExplorerProps) {
  const [activePeriod, setActivePeriod] = useState<PeriodFilter>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    return achievements.reduce<Record<string, number>>(
      (result, item) => {
        result.all += 1;
        result[item.period] = (result[item.period] ?? 0) + 1;
        return result;
      },
      { all: 0 },
    );
  }, [achievements]);

  const filteredAchievements = useMemo(() => {
    const normalizedQuery = normalizeSearch(query);

    return achievements.filter((item) => {
      const matchesPeriod =
        activePeriod === "all" || item.period === activePeriod;
      const matchesQuery =
        !normalizedQuery ||
        normalizeSearch(`${item.title} ${item.summary}`).includes(
          normalizedQuery,
        );

      return matchesPeriod && matchesQuery;
    });
  }, [achievements, activePeriod, query]);

  const filterOptions = [
    { key: "all" as const, title: "Tất cả", anchor: "tat-ca" },
    ...periods,
  ];

  return (
    <div className="space-y-10">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
        <div className="rounded-lg border border-red-100 bg-white p-3 shadow-sm shadow-red-950/5">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((period) => {
              const key = period.key as PeriodFilter;
              const active = activePeriod === key;

              return (
                <button
                  key={period.key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActivePeriod(key)}
                  className={[
                    "min-h-11 rounded-md border px-4 py-2 text-sm font-bold transition",
                    active
                      ? "border-red-800 bg-red-800 text-white shadow-sm"
                      : "border-red-100 bg-white text-red-900 hover:border-yellow-300 hover:bg-yellow-50",
                  ].join(" ")}
                >
                  {getPeriodLabel(key)}
                  <span
                    className={[
                      "ml-2 rounded bg-white/15 px-2 py-0.5 text-xs",
                      active ? "text-yellow-100" : "bg-red-50 text-red-800",
                    ].join(" ")}
                  >
                    {counts[key] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-red-950">
            Tìm kiếm chiến công
          </span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nhập tên chiến công..."
            className="h-12 w-full rounded-md border border-red-100 bg-white px-4 text-sm font-semibold text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-red-700 focus:ring-4 focus:ring-red-100"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {periods.map((period) => (
          <a
            id={period.anchor}
            key={period.key}
            href={`#${period.anchor}`}
            onClick={(event) => {
              event.preventDefault();
              setActivePeriod(period.key);
            }}
            className="rounded-lg border border-yellow-200 bg-yellow-50/80 p-5 text-red-950 shadow-sm transition hover:-translate-y-0.5 hover:border-yellow-300 hover:bg-yellow-50"
          >
            <p className="text-sm font-black">{getPeriodLabel(period.key)}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-zinc-700">
              {period.title}
            </p>
          </a>
        ))}
      </div>

      <div aria-live="polite" className="text-sm font-bold text-zinc-600">
        Hiển thị {filteredAchievements.length} / {achievements.length} chiến
        công
      </div>

      {filteredAchievements.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredAchievements.map((achievement, index) => (
            <ScrollReveal key={achievement.slug}>
              <AchievementCard achievement={achievement} index={index} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-red-100 bg-white px-6 py-12 text-center shadow-sm">
          <p className="font-bold text-red-950">
            Không tìm thấy chiến công phù hợp.
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Hãy thử rút ngắn từ khóa hoặc chuyển về bộ lọc “Tất cả”.
          </p>
        </div>
      )}
    </div>
  );
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: AchievementCardItem;
  index: number;
}) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-red-100 bg-white shadow-sm shadow-red-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/10"
      style={{ transitionDelay: `${Math.min(index, 8) * 20}ms` }}
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
        <h2 className="mt-3 text-xl font-black leading-7 text-zinc-950">
          {achievement.title}
        </h2>
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
  );
}
