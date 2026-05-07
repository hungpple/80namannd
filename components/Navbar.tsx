"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderNavItem = {
  label: string;
  lines: string[];
  href: string;
  external?: boolean;
  homeIcon?: boolean;
};

const headerNavItems: HeaderNavItem[] = [
  {
    label: "Trang chủ",
    lines: ["Trang chủ"],
    href: "/",
    homeIcon: true,
  },
  {
    label: "Cổng TTĐT Bộ Công an",
    lines: ["Cổng TTĐT", "Bộ Công an"],
    href: "https://bocongan.gov.vn",
    external: true,
  },
  {
    label: "Chuyên đề 80 năm ANND",
    lines: ["Chuyên đề", "80 năm ANND"],
    href: "/chuyen-de-80-nam-annd",
  },
  // {
  //   label: "Chặng đường lịch sử",
  //   lines: ["Chặng đường", "lịch sử"],
  //   href: "/chang-duong-lich-su",
  // },
  {
    label: "Các chiến công nổi bật",
    lines: ["Các chiến công", "nổi bật"],
    href: "/chien-cong-noi-bat",
  },
  {
    label: "Về chúng tôi",
    lines: ["Về", "chúng tôi"],
    href: "/ve-chung-toi",
  },
  {
    label: "Chatbot AI",
    lines: ["Chatbot", "AI"],
    href: "/chatbot-ai",
  },
];

function isInternalActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function HomeIcon({
  active,
  isHome,
}: {
  active: boolean;
  isHome: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={[
        "h-8 w-8 transition-colors",
        isHome
          ? active
            ? "text-red-800"
            : "text-red-700 group-hover:text-red-900"
          : active
            ? "text-yellow-200"
            : "text-red-50 group-hover:text-yellow-200",
      ].join(" ")}
      fill="currentColor"
    >
      <path d="M3 11.2 12 3l9 8.2v9.3a.5.5 0 0 1-.5.5h-5.2a.5.5 0 0 1-.5-.5v-5.8H9.2v5.8a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-9.3Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [logoAvailable, setLogoAvailable] = useState(true);
  const [searchOpen] = useState(false);
  const [isHomeScrolled, setIsHomeScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    let frameId = window.requestAnimationFrame(() => {
      setIsHomeScrolled(window.scrollY > 8);
    });

    function updateScrolledState() {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(() => {
        setIsHomeScrolled(window.scrollY > 8);
      });
    }

    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, [isHome]);

  const headerClass = isHome
    ? [
        "fixed inset-x-0 top-0 z-50 text-zinc-950 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        isHomeScrolled
          ? "border-b border-white/40 bg-white/60 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-0",
      ].join(" ")
    : "dong-son-bg sticky top-0 z-50 border-b border-yellow-300/30 text-white shadow-lg shadow-red-950/20";

  const navItemBase =
    "group relative inline-flex min-h-10 items-center justify-center rounded-md px-1.5 text-center text-[10px] font-black uppercase leading-4 transition";

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex min-h-[56px] max-w-[1840px] items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:min-h-[64px] lg:px-8">
        <Link
          href="/"
          className={[
            "group flex min-w-0 shrink-0 items-center gap-2",
            !isHome ? "rounded-md px-2 py-1" : "",
          ].join(" ")}
          onClick={() => setIsOpen(false)}
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full lg:h-12 lg:w-12">
            {logoAvailable ? (
              <Image
                src="/images/Vietnam_People's_Public_Security_Emblem.png"
                alt="Logo Công an nhân dân"
                width={96}
                height={96}
                className="h-full w-full object-contain"
                priority
                onError={() => setLogoAvailable(false)}
              />
            ) : (
              <span className="text-sm font-black text-red-800 lg:text-base">
                80
              </span>
            )}
          </span>

          <span
            className={[
              "min-w-[190px] font-serif leading-tight sm:min-w-[230px] lg:min-w-0",
              isHome ? "text-red-800" : "text-white",
            ].join(" ")}
          >
            <span className="block text-[10px] font-black uppercase sm:text-[11px] lg:text-xs">
              Bộ Công an
            </span>
            <span className="block text-[10px] font-black uppercase sm:text-[11px] lg:text-base">
              Truyền thống, thành tựu
            </span>
            <span className="block whitespace-nowrap text-[10px] font-black uppercase sm:text-[11px] lg:text-base">
              An ninh nhân dân Việt Nam
            </span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-1 min-[1320px]:flex">
          {headerNavItems.map((item) => {
            const active =
              !item.external && isInternalActive(pathname, item.href);

            const className = [
              navItemBase,
              isHome
                ? active
                  ? "text-red-800"
                  : "text-zinc-950 hover:text-red-800"
                : active
                  ? "bg-yellow-300 text-red-950 shadow-sm"
                  : "text-red-50 hover:bg-white/10 hover:text-yellow-200",
            ].join(" ");

            const content = item.homeIcon ? (
              <>
                <HomeIcon active={active} isHome={isHome} />
                <span className="sr-only">{item.label}</span>
              </>
            ) : (
              <span>
                {item.lines.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </span>
            );

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {content}
                  {isHome ? (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-red-800 transition-all group-hover:w-10" />
                  ) : null}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={className}
              >
                {content}
                {isHome ? (
                  <span
                    className={[
                      "absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 bg-red-800 transition-all",
                      active ? "w-11" : "w-0 group-hover:w-10",
                    ].join(" ")}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {searchOpen ? (
            <label className="hidden items-center rounded-full border border-red-200 bg-white/90 px-3 py-2 shadow-sm md:flex">
              <span className="sr-only">Tìm kiếm</span>
              <input
                autoFocus
                placeholder="Tìm kiếm..."
                className="w-40 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-500"
              />
            </label>
          ) : null}

          <button
            type="button"
            aria-label="Mở menu điều hướng"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-md border transition min-[1320px]:hidden",
              isHome
                ? "border-red-200 bg-white/80 hover:bg-red-50"
                : "border-yellow-300/50 bg-red-800 hover:bg-red-700",
            ].join(" ")}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4.5 flex-col gap-1.5">
              <span
                className={[
                  "h-0.5 rounded-full",
                  isHome ? "bg-red-800" : "bg-yellow-200",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 rounded-full",
                  isHome ? "bg-red-800" : "bg-yellow-200",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 rounded-full",
                  isHome ? "bg-red-800" : "bg-yellow-200",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          className={[
            "border-t px-4 pb-4 pt-2 shadow-xl min-[1320px]:hidden",
            isHome
              ? "border-red-100 bg-white/95 text-red-950 backdrop-blur"
              : "dong-son-bg relative border-yellow-300/30 text-white",
          ].join(" ")}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {headerNavItems.map((item) => {
              const active =
                !item.external && isInternalActive(pathname, item.href);
              const className = [
                "rounded-md px-4 py-3 text-sm font-black uppercase leading-6 transition",
                isHome
                  ? active
                    ? "bg-red-800 text-white"
                    : "text-red-950 hover:bg-yellow-50 hover:text-red-800"
                  : active
                    ? "bg-yellow-300 text-red-950"
                    : "text-red-50 hover:bg-white/10 hover:text-yellow-200",
              ].join(" ");

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={className}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={className}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
