import { AchievementItem } from "@/lib/content";
import { PlaceholderVisual } from "./PlaceholderVisual";

type AchievementCardProps = {
  item: AchievementItem;
};

export function AchievementCard({ item }: AchievementCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <PlaceholderVisual
        compact
        label={item.category}
        eyebrow={item.period}
        className="rounded-none border-0"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-md bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-red-800">
            {item.category}
          </span>
          <span className="text-xs font-semibold text-zinc-500">
            {item.period}
          </span>
        </div>
        <h3 className="text-xl font-bold leading-7 text-zinc-950">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-zinc-650">
          {item.description}
        </p>
        <button
          type="button"
          className="mt-5 inline-flex w-fit items-center rounded-md border border-red-200 px-4 py-2 text-sm font-bold text-red-800 transition group-hover:border-red-800 group-hover:bg-red-800 group-hover:text-white"
        >
          Xem chi tiết
        </button>
      </div>
    </article>
  );
}
