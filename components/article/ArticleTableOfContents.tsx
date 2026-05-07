"use client";

import { useState } from "react";

export type TocChild = {
  id: string;
  title: string;
  level: 2 | 3 | 4;
};

export type TocPart = {
  id: string;
  label: string;
  title: string;
  children: TocChild[];
};

type ArticleTableOfContentsProps = {
  items: TocPart[];
};

export function ArticleTableOfContents({
  items,
}: ArticleTableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavigate() {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setIsOpen(false);
    }
  }

  return (
    <aside
      className={[
        "fixed bottom-5 left-0 top-24 z-40 w-[min(22rem,calc(100vw-4.75rem))] transform-gpu transition-transform duration-500 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
      aria-label="Mục lục chuyên đề"
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="chuyen-de-toc"
        onClick={() => setIsOpen((value) => !value)}
        className="absolute right-0 top-8 inline-flex h-28 w-11 translate-x-full items-center justify-center rounded-r-2xl border border-l-0 border-white/40 bg-red-900/90 text-xs font-black uppercase text-yellow-100 shadow-xl shadow-red-950/25 backdrop-blur transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        <span className="-rotate-90 whitespace-nowrap">
          {isOpen ? "Thu gọn" : "Mục lục"}
        </span>
      </button>

      <div
        id="chuyen-de-toc"
        className="h-full overflow-hidden rounded-r-3xl border border-l-0 border-white/45 bg-white/70 shadow-2xl shadow-red-950/20 backdrop-blur-xl"
      >
        <div className="h-full bg-gradient-to-br from-white/75 via-yellow-50/60 to-red-100/45 p-5">
          <div className="border-b border-red-900/15 pb-4">
            <p className="text-xs font-black uppercase text-red-800">
              Mục lục
            </p>
            <h2 className="mt-1 font-serif text-xl font-black leading-tight text-red-950">
              Chuyên đề 80 năm ANND
            </h2>
          </div>

          <nav
            aria-label="Mục lục chuyên đề 80 năm An ninh nhân dân"
            className="mt-4 max-h-[calc(100vh-15rem)] space-y-3 overflow-y-auto overscroll-contain pr-2 [scrollbar-color:rgba(153,27,27,0.55)_rgba(255,255,255,0.25)] [scrollbar-width:thin]"
          >
            {items.map((item) => (
              <section
                key={item.id}
                className="rounded-2xl border border-white/55 bg-white/55 p-3 shadow-sm shadow-red-950/5"
              >
                <a
                  href={`#${item.id}`}
                  onClick={handleNavigate}
                  className="group block rounded-xl border-l-4 border-red-800 bg-red-50/80 px-3 py-3 transition hover:bg-yellow-100/90"
                >
                  <span className="text-[11px] font-black uppercase text-red-800">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm font-black leading-6 text-zinc-950 group-hover:text-red-950">
                    {item.title}
                  </span>
                </a>

                {item.children.length > 0 ? (
                  <div className="mt-3 space-y-1.5 pl-3">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={`#${child.id}`}
                        onClick={handleNavigate}
                        className={[
                          "block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-zinc-700 transition hover:bg-white/70 hover:text-red-800",
                          child.level === 2 ? "border-l border-red-200" : "",
                        ].join(" ")}
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
