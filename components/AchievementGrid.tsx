"use client";

import { useMemo, useState } from "react";
import { achievements, achievementCategories } from "@/lib/content";
import type { AchievementCategory } from "@/lib/content";
import { AchievementCard } from "./AchievementCard";

type CategoryFilter = (typeof achievementCategories)[number];

export function AchievementGrid() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("Tất cả");

  const filteredAchievements = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return achievements;
    }

    return achievements.filter(
      (item) => item.category === (activeCategory as AchievementCategory),
    );
  }, [activeCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {achievementCategories.map((category) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
              className={[
                "rounded-md border px-4 py-2 text-sm font-bold transition",
                active
                  ? "border-red-800 bg-red-800 text-white shadow-sm"
                  : "border-red-100 bg-white text-red-800 hover:border-yellow-300 hover:bg-yellow-50",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredAchievements.map((item) => (
          <AchievementCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
