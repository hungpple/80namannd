import type {
  ArticleBlock,
  ArticleData,
  ArticleHeadingBlock,
  ArticleImageBlock,
  ArticlePartBlock,
  ArticleParagraphBlock,
} from "@/data/chuyenDe80NamAnnd";
import { ArticleContent } from "@/components/article/ArticleContent";
import {
  ArticleTableOfContents,
  type TocPart,
} from "@/components/article/ArticleTableOfContents";
import { ScrollReveal } from "@/components/article/ScrollReveal";

type ArticleSection = {
  part: ArticlePartBlock;
  blocks: ArticleBlock[];
  quote: string;
};

const sectionQuotes: Record<string, string> = {
  "phan-i":
    "\u0022Trong dòng chảy hào hùng của lịch sử dân tộc Việt Nam, lực lượng An ninh nhân dân luôn giữ vai trò đặc biệt quan trọng trong sự nghiệp bảo vệ Đảng, bảo vệ Nhà nước, bảo vệ chế độ xã hội chủ nghĩa và cuộc sống bình yên của Nhân dân.\u0022",
  "phan-ii":
    "\u0022Trải qua các thời kỳ cách mạng, các thế hệ cán bộ, chiến sĩ luôn tuyệt đối trung thành với Đảng, kiên cường, mưu trí, không quản ngại hy sinh, gian khổ, gắn bó máu thịt với Nhân dân.\u0022",
  "phan-iii":
    "\u0022Nhân dân không chỉ là đối tượng được bảo vệ mà còn là nền tảng, là “gốc” của thế trận an ninh nhân dân, là nhân tố quyết định đến sự vững mạnh của nền an ninh quốc gia trong mọi tình huống.\u0022",
};

function isDecorativeChapterImage(
  block: ArticleBlock,
): block is ArticleImageBlock {
  return (
    block.type === "image" &&
    !block.caption &&
    block.width >= 2400 &&
    block.height >= 1700
  );
}

function removeTrailingChapterImage(blocks: ArticleBlock[]) {
  while (blocks.length > 0 && isDecorativeChapterImage(blocks.at(-1)!)) {
    blocks.pop();
  }
}

function splitArticle(blocks: ArticleBlock[]) {
  const introBlocks: ArticleBlock[] = [];
  const sections: ArticleSection[] = [];
  let currentSection: ArticleSection | null = null;

  for (const block of blocks) {
    if (block.type === "part") {
      if (currentSection) {
        removeTrailingChapterImage(currentSection.blocks);
      } else {
        removeTrailingChapterImage(introBlocks);
      }

      currentSection = {
        part: block,
        blocks: [],
        quote: sectionQuotes[block.id] ?? block.title,
      };
      sections.push(currentSection);
      continue;
    }

    if (currentSection) {
      currentSection.blocks.push(block);
    } else {
      introBlocks.push(block);
    }
  }

  if (currentSection) {
    removeTrailingChapterImage(currentSection.blocks);
  }

  const introParagraphs = introBlocks
    .filter((block): block is ArticleParagraphBlock => block.type === "paragraph")
    .map((block) => block.text);

  return { introParagraphs, sections };
}

function isLevelTwoHeading(block: ArticleBlock): block is ArticleHeadingBlock {
  return block.type === "heading" && block.level === 2;
}

function isConclusionHeading(block: ArticleBlock): block is ArticleHeadingBlock {
  return isLevelTwoHeading(block) && block.id === "ket-luan";
}

function buildTableOfContents(sections: ArticleSection[]): TocPart[] {
  const items = sections.map((section) => ({
    id: section.part.id,
    label: section.part.label,
    title: section.part.title,
    children: section.blocks
      .filter(
        (block): block is ArticleHeadingBlock =>
          isLevelTwoHeading(block) && !isConclusionHeading(block),
      )
      .map((heading) => ({
        id: heading.id,
        title: heading.text,
        level: heading.level,
      })),
  }));

  const conclusionHeading = sections
    .flatMap((section) => section.blocks)
    .find(isConclusionHeading);

  if (conclusionHeading) {
    items.push({
      id: conclusionHeading.id,
      label: "Kết luận",
      title: conclusionHeading.text,
      children: [],
    });
  }

  return items;
}

type ArticleLayoutProps = {
  article: ArticleData;
};

export function ArticleLayout({ article }: ArticleLayoutProps) {
  const { sections } = splitArticle(article.blocks);
  const tocItems = buildTableOfContents(sections);

  return (
    <>
      <ArticleTableOfContents items={tocItems} />
      <ArticleJumpButtons />
      {sections.map((section) => (
        <ArticleSectionView key={section.part.id} section={section} />
      ))}
    </>
  );
}

export function getArticleIntroParagraphs(article: ArticleData) {
  return splitArticle(article.blocks).introParagraphs;
}

function ArticleJumpButtons() {
  const articleLinks = [
    { label: "Bài dự thi điện tử", href: "https://online.fliphtml5.com/zjgoi/ybvq/#p=1" },
    { label: "Phụ lục 1", href: "https://online.fliphtml5.com/zjgoi/xdxi/#p=6" },
    { label: "Phụ lục 2", href: "https://online.fliphtml5.com/zjgoi/lscb/#p=1" },
  ];

  const sectionLinks = [
    { label: "Phần I", href: "#phan-i" },
    { label: "Phần II", href: "#phan-ii" },
    { label: "Phần III", href: "#phan-iii" },
  ];

  return (
    <section className="bg-red-800 px-4 py-5 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {articleLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-700 px-5 py-2 text-center text-sm font-black shadow-sm shadow-red-950/20 transition hover:bg-yellow-300 hover:text-red-950"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {sectionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-red-950/50 px-5 py-2 text-center text-sm font-black shadow-sm shadow-red-950/20 transition hover:bg-yellow-300 hover:text-red-950"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleSectionView({ section }: { section: ArticleSection }) {
  return (
    <>
      <section
        id={section.part.id}
        className="scroll-mt-28 bg-[#fffdf8] px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase text-red-800">
              {section.part.label}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-black italic leading-tight text-zinc-950 md:text-5xl">
              {section.part.title}
            </h2>
          </div>
        </ScrollReveal>
      </section>

      <section
        id={`${section.part.id}-content`}
        className="relative isolate overflow-hidden"
      >
        <div className="relative bg-red-900 px-4 py-10 text-center text-yellow-200 sm:px-6 lg:px-8">
          <div className="absolute inset-0 opacity-20 [background-image:url('/images/trong-dong.svg')] [background-position:center] [background-repeat:no-repeat] [background-size:min(90vw,900px)]" />
          <ScrollReveal>
            <p className="relative mx-auto max-w-4xl font-serif text-2xl font-black italic leading-snug md:text-4xl">
              {section.quote}
            </p>
          </ScrollReveal>
        </div>

        <div className="relative bg-[#fff8e7] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(90deg,rgba(127,29,29,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(127,29,29,0.04)_1px,transparent_1px)] [background-size:56px_56px]" />
          <div className="relative mx-auto max-w-[900px]">
            <ArticleContent blocks={section.blocks} />
          </div>
        </div>
      </section>
    </>
  );
}
