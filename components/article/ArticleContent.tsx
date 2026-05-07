import type {
  ArticleBlock,
  ArticleImageBlock,
} from "@/data/chuyenDe80NamAnnd";
import { ArticleBlockRenderer } from "@/components/article/ArticleBlockRenderer";
import { ArticleImageGallery } from "@/components/article/ArticleImageGallery";

type ArticleContentProps = {
  blocks: ArticleBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  const groupedBlocks: (ArticleBlock | ArticleImageBlock[])[] = [];

  for (let index = 0; index < blocks.length; index++) {
    const block = blocks[index];

    if (block.type !== "image") {
      groupedBlocks.push(block);
      continue;
    }

    const images: ArticleImageBlock[] = [block];

    while (blocks[index + 1]?.type === "image") {
      images.push(blocks[index + 1] as ArticleImageBlock);
      index++;
    }

    groupedBlocks.push(images.length > 1 ? images : block);
  }

  return (
    <article className="min-w-0 space-y-7">
      {groupedBlocks.map((block, index) =>
        Array.isArray(block) ? (
          <ArticleImageGallery
            key={`image-gallery-${block.map((image) => image.src).join("-")}`}
            images={block}
          />
        ) : (
          <ArticleBlockRenderer
            key={`${block.type}-${"id" in block ? block.id : index}`}
            block={block}
          />
        ),
      )}
    </article>
  );
}
