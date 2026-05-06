import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Truyền thống, thành tựu Công an nhân dân Việt Nam",
    template: "%s | Truyền thống CAND",
  },
  description:
    "Website chuyên đề mẫu về truyền thống, thành tựu Công an nhân dân Việt Nam, xây dựng bằng Next.js App Router, TypeScript và TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
