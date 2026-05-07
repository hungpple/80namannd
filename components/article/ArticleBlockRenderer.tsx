import type { ArticleBlock } from "@/data/chuyenDe80NamAnnd";
import { ArticleImage } from "@/components/article/ArticleImage";
import { ScrollReveal } from "@/components/article/ScrollReveal";

type ArticleBlockRendererProps = {
  block: ArticleBlock;
};

export function ArticleBlockRenderer({ block }: ArticleBlockRendererProps) {
  if (block.type === "part") {
    return (
      <ScrollReveal>
        <section
          id={block.id}
          className="scroll-mt-28 border-y border-red-200 bg-gradient-to-r from-red-900 via-red-800 to-red-950 px-5 py-8 text-white shadow-lg shadow-red-950/10 sm:px-8"
        >
          <p className="text-sm font-black uppercase text-yellow-200">
            {block.label}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            {block.title}
          </h2>
        </section>
      </ScrollReveal>
    );
  }

  if (block.type === "heading") {
    const sharedClass = "scroll-mt-28 font-black text-zinc-950";

    if (block.level === 2) {
      return (
        <ScrollReveal>
          <h2
            id={block.id}
            className={`${sharedClass} mt-12 border-b border-red-200 pb-4 text-3xl leading-tight md:text-4xl`}
          >
            {block.text}
          </h2>
        </ScrollReveal>
      );
    }

    if (block.level === 3) {
      return (
        <ScrollReveal>
          <h3
            id={block.id}
            className={`${sharedClass} mt-10 text-2xl leading-snug text-red-900 md:text-3xl`}
          >
            {block.text}
          </h3>
        </ScrollReveal>
      );
    }

    return (
      <ScrollReveal>
        <h4
          id={block.id}
          className={`${sharedClass} mt-8 text-xl leading-snug text-red-800 md:text-2xl`}
        >
          {block.text}
        </h4>
      </ScrollReveal>
    );
  }

  if (block.type === "paragraph") {
    return (
      <ScrollReveal>
        <p className="text-[17px] leading-9 text-zinc-800 [text-align-last:left] [text-align:justify] md:text-lg">
          {block.text}
        </p>
      </ScrollReveal>
    );
  }

  if (block.type === "image") {
    return (
      <ScrollReveal>
        <ArticleImage block={block} />
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <ul className="space-y-3 rounded-lg border border-yellow-200 bg-yellow-50/70 px-6 py-5 text-[17px] leading-8 text-zinc-800 md:text-lg">
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            <span className="mr-2 text-red-800">•</span>
            {item}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
