import Image from "next/image";
import { ScrollReveal } from "@/components/article/ScrollReveal";
import type { AchievementContentBlock } from "@/data/chienCongNoiBat";

type AchievementArticleRendererProps = {
  blocks: AchievementContentBlock[];
};

export function AchievementArticleRenderer({
  blocks,
}: AchievementArticleRendererProps) {
  return (
    <article className="min-w-0 space-y-7">
      {blocks.map((block, index) => (
        <AchievementBlock key={`${block.type}-${index}`} block={block} />
      ))}
    </article>
  );
}

function AchievementBlock({ block }: { block: AchievementContentBlock }) {
  if (block.type === "heading") {
    const Tag = block.level === 2 ? "h2" : "h3";

    return (
      <ScrollReveal>
        <Tag
          id={block.id}
          className="scroll-mt-28 font-serif text-3xl font-black leading-tight text-red-950 md:text-4xl"
        >
          {block.text}
        </Tag>
      </ScrollReveal>
    );
  }

  if (block.type === "image") {
    return (
      <ScrollReveal>
        <figure className="mx-auto my-10 max-w-[760px]">
          <div className="overflow-hidden rounded-lg border border-red-100 bg-white p-2 shadow-lg shadow-red-950/10">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(min-width: 1280px) 760px, (min-width: 768px) 76vw, 100vw"
              className="mx-auto h-auto max-h-[640px] w-auto max-w-full object-contain"
            />
          </div>
          {block.caption ? (
            <figcaption className="mx-auto mt-3 max-w-3xl text-center text-sm leading-6 text-zinc-600">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <p className="text-[17px] leading-9 text-zinc-800 [text-align-last:left] [text-align:justify] md:text-lg">
        {block.text}
      </p>
    </ScrollReveal>
  );
}
