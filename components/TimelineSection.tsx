import { TimelineItem } from "@/lib/content";
import { PlaceholderVisual } from "./PlaceholderVisual";

type TimelineSectionProps = {
  items: TimelineItem[];
  compact?: boolean;
};

export function TimelineSection({ items, compact = false }: TimelineSectionProps) {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-yellow-300 via-red-200 to-transparent md:block" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <article
            key={item.period}
            className="grid gap-5 rounded-lg border border-red-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[0.9fr_1.1fr] md:p-6"
          >
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-800 text-sm font-black text-yellow-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-md bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-red-900">
                  {item.tag}
                </span>
              </div>
              <p className="text-3xl font-black text-red-900">{item.period}</p>
              <h3 className="mt-3 text-2xl font-bold leading-8 text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-650">
                {item.description}
              </p>
            </div>
            <PlaceholderVisual
              compact={compact}
              label={item.period}
              eyebrow="Tư liệu minh họa"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
