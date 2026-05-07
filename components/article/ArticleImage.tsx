import Image from "next/image";
import type { ArticleImageBlock } from "@/data/chuyenDe80NamAnnd";

type ArticleImageProps = {
  block: ArticleImageBlock;
  compact?: boolean;
};

export function ArticleImage({
  block,
  compact = false,
}: ArticleImageProps) {
  if (compact) {
    return (
      <figure className="min-w-0">
        <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-red-100 bg-white p-2 shadow-md shadow-red-950/10">
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            sizes="(min-width: 1280px) 280px, (min-width: 768px) 42vw, 100vw"
            className="max-h-full w-full object-contain"
          />
        </div>
        {block.caption ? (
          <figcaption className="mt-2 text-center text-xs leading-5 text-zinc-600">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="mx-auto my-10 max-w-[720px]">
      <div className="overflow-hidden rounded-lg border border-red-100 bg-white p-2 shadow-lg shadow-red-950/10">
        <Image
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          sizes="(min-width: 1280px) 720px, (min-width: 768px) 72vw, 100vw"
          className="mx-auto h-auto max-h-[620px] w-auto max-w-full object-contain"
        />
      </div>
      {block.caption ? (
        <figcaption className="mx-auto mt-3 max-w-3xl text-center text-sm leading-6 text-zinc-600">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
