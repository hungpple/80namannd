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
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="lg:hidden">
        <p className="mb-3 text-sm font-black uppercase text-red-800">
          Mục lục
        </p>
        <nav
          aria-label="Mục lục chuyên đề"
          className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-4"
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-flex min-w-[220px] flex-col rounded-md border border-red-200 bg-white px-4 py-3 text-left shadow-sm"
            >
              <span className="text-xs font-black uppercase text-red-800">
                {item.label}
              </span>
              <span className="mt-1 line-clamp-2 text-sm font-bold leading-6 text-zinc-900">
                {item.title}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="hidden rounded-lg border border-red-100 bg-white/90 p-5 shadow-lg shadow-red-950/5 backdrop-blur lg:block">
        <p className="text-sm font-black uppercase text-red-800">Mục lục</p>
        <nav aria-label="Mục lục chuyên đề" className="mt-5 space-y-5">
          {items.map((item) => (
            <div key={item.id}>
              <a
                href={`#${item.id}`}
                className="group block rounded-md border-l-4 border-red-800 bg-red-50 px-3 py-3 transition hover:bg-red-100"
              >
                <span className="text-xs font-black uppercase text-red-800">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm font-black leading-6 text-zinc-950 group-hover:text-red-950">
                  {item.title}
                </span>
              </a>

              {item.children.length > 0 ? (
                <div className="mt-3 space-y-2 pl-4">
                  {item.children.slice(0, 8).map((child) => (
                    <a
                      key={child.id}
                      href={`#${child.id}`}
                      className={[
                        "block text-sm leading-6 text-zinc-650 transition hover:text-red-800",
                        child.level === 3 ? "font-semibold" : "",
                      ].join(" ")}
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
