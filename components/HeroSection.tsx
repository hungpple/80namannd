"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate h-[100svh] min-h-[560px] w-full overflow-hidden bg-amber-50">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#fff8e1_0%,#fef3c7_42%,#fee2e2_100%)]" />

      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={[
              "object-cover object-center transition-opacity duration-1000 ease-in-out",
              index === activeIndex ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.55),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(127,29,29,0.08)_76%,rgba(127,29,29,0.34)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full min-h-inherit w-full max-w-7xl items-start justify-center px-4 pt-[120px] text-center sm:px-6 sm:pt-[144px] lg:px-8 lg:pt-[134px]">
        <div className="anniversary-shadow relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[680px]">
          <Image
            src="/images/hero/logo-hero.png"
            alt="Logo kỷ niệm ngày truyền thống lực lượng An ninh nhân dân"
            width={680}
            height={286}
            priority
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-24 z-30 flex justify-center gap-2 sm:bottom-28">
        {heroImages.map((src, index) => {
          const active = activeIndex === index;

          return (
            <button
              key={src}
              type="button"
              aria-label={`Chuyển tới ảnh hero ${index + 1}`}
              aria-current={active}
              onClick={() => setActiveIndex(index)}
              className={[
                "h-2.5 rounded-full border border-white/80 shadow-sm transition-all",
                active
                  ? "w-9 bg-red-800"
                  : "w-2.5 bg-white/75 hover:bg-yellow-300",
              ].join(" ")}
            />
          );
        })}
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[112px] w-full text-red-900 sm:h-[128px]"
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 72C170 34 315 36 470 70C632 105 780 122 960 82C1134 44 1279 48 1440 86V128H0V72Z"
          fill="currentColor"
        />
        <path
          d="M0 68C170 30 315 32 470 66C632 101 780 118 960 78C1134 40 1279 44 1440 82"
          fill="none"
          stroke="#facc15"
          strokeWidth="4"
        />
      </svg>
    </section>
  );
}
