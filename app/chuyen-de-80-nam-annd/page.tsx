import type { Metadata } from "next";
import { ArticleHero } from "@/components/article/ArticleHero";
import {
  ArticleLayout,
  getArticleIntroParagraphs,
} from "@/components/article/ArticleLayout";
import { ReadingProgressBar } from "@/components/article/ReadingProgressBar";
import { chuyenDe80NamAnndArticle } from "@/data/chuyenDe80NamAnnd";

export const metadata: Metadata = {
  title: "Chuyên đề 80 năm ANND",
  description:
    "Bài chuyên đề điện tử về 80 năm truyền thống lực lượng An ninh nhân dân Việt Nam.",
};

export default function ChuyenDe80NamAnndPage() {
  const introParagraphs = getArticleIntroParagraphs(chuyenDe80NamAnndArticle);

  return (
    <main>
      <ReadingProgressBar />
      <ArticleHero introParagraphs={introParagraphs} />
      <ArticleLayout article={chuyenDe80NamAnndArticle} />
    </main>
  );
}
