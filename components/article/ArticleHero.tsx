import Image from "next/image";
import Link from "next/link";

type ArticleHeroProps = {
  introParagraphs: string[];
};

export function ArticleHero({ introParagraphs }: ArticleHeroProps) {
  return (
    <section
      id="loi-mo-dau"
      className="relative isolate overflow-hidden bg-red-950 px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16"
    >
      <Image
        src="/images/hero/hero-1.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(69,10,10,0.82),rgba(127,29,29,0.72)_48%,rgba(69,10,10,0.62))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(250,204,21,0.22)_1px,transparent_1px),linear-gradient(0deg,rgba(250,204,21,0.16)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div className="max-w-3xl bg-red-950/55 px-5 py-6 shadow-2xl shadow-red-950/30 backdrop-blur-sm sm:px-7 lg:ml-auto">
          {/* <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm font-bold text-yellow-100"
          >
            <Link href="/" className="transition hover:text-white">
              Trang chủ
            </Link>
            <span aria-hidden="true" className="text-yellow-300">
              /
            </span>
            <span>Chuyên đề 80 năm ANND</span>
          </nav> */}

          <h1 className="mt-8 font-serif text-4xl font-black italic leading-tight text-yellow-200 md:text-5xl">
            Lời mở đầu
          </h1>
          <div className="mt-5 space-y-4 text-base font-semibold leading-8 text-red-50 md:text-[17px]">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["80 năm", "Truyền thống lực lượng An ninh nhân dân"],
            ["Bản lĩnh", "Tận trung với Đảng, vì Nhân dân phục vụ"],
            ["Tiếp nối", "Xây dựng, chiến đấu và trưởng thành"],
          ].map(([eyebrow, title]) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-lg border border-yellow-200/40 bg-red-800/90 px-5 py-6 shadow-xl shadow-red-950/30"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-yellow-300/20" />
              <p className="text-sm font-black uppercase text-yellow-200">
                {eyebrow}
              </p>
              <p className="mt-4 font-serif text-xl font-black leading-snug text-white">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
