"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HistoryPeriod = {
  period: string;
  title: string;
  description: string;
  image: string;
};

const historyPeriods: HistoryPeriod[] = [
  {
    period: "1945 - 1954",
    title:
      "Lực lượng An ninh nhân dân ra đời, bảo vệ chính quyền cách mạng và kháng chiến chống thực dân Pháp xâm lược",
    description:
      "Lực lượng An ninh nhân dân ra đời trong bối cảnh cách mạng mới thành công, thực hiện nhiệm vụ bảo vệ chính quyền cách mạng non trẻ, đấu tranh chống phản cách mạng, gián điệp, mật thám và các âm mưu phá hoại của thực dân xâm lược.",
    image: "/images/history/gd1.png",
  },
  {
    period: "1954 - 1975",
    title:
      "Lực lượng An ninh nhân dân trong sự nghiệp xây dựng và bảo vệ miền Bắc xã hội chủ nghĩa, đấu tranh giải phóng miền Nam, thống nhất đất nước",
    description:
      "Trong giai đoạn đất nước tạm thời chia cắt, lực lượng An ninh nhân dân vừa bảo vệ miền Bắc xã hội chủ nghĩa, vừa tham gia đấu tranh chống gián điệp, phản động, bảo vệ phong trào cách mạng và góp phần vào sự nghiệp giải phóng miền Nam, thống nhất đất nước.",
    image: "/images/history/gd2.png",
  },
  {
    period: "1975 - nay",
    title:
      "Lực lượng An ninh nhân dân trong sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa",
    description:
      "Sau ngày đất nước thống nhất, lực lượng An ninh nhân dân tiếp tục phát huy truyền thống vẻ vang, chủ động đấu tranh phòng, chống các âm mưu, hoạt động xâm phạm an ninh quốc gia, bảo vệ Đảng, Nhà nước, Nhân dân và chế độ xã hội chủ nghĩa trong tình hình mới.",
    image: "/images/history/gd3.png",
  },
];

export function HomeHistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activePeriod = historyPeriods[activeIndex];

  function selectPeriod(nextIndex: number) {
    if (nextIndex === activeIndex) {
      return;
    }

    setDirection(nextIndex > activeIndex ? "right" : "left");
    setActiveIndex(nextIndex);
  }

  function goToPrevious() {
    const nextIndex =
      (activeIndex - 1 + historyPeriods.length) % historyPeriods.length;
    setDirection("left");
    setActiveIndex(nextIndex);
  }

  function goToNext() {
    const nextIndex = (activeIndex + 1) % historyPeriods.length;
    setDirection("right");
    setActiveIndex(nextIndex);
  }

  return (
    <section className="home-history-paper relative overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-black uppercase tracking-[0.02em] text-zinc-950 sm:text-3xl">
            Chặng đường lịch sử
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-40 bg-red-800" />
        </div>

        <div className="mx-auto mt-8 w-full max-w-4xl pb-3">
          <div className="relative mx-auto grid w-full grid-cols-3 items-start px-2 pt-1 sm:px-6 md:px-10">
            <div className="absolute left-[17%] right-[17%] top-[36px] h-px bg-zinc-500/60 sm:left-[18%] sm:right-[18%]" />
            <div
              className="absolute left-[17%] top-[36px] h-px bg-red-800 transition-all duration-500 sm:left-[18%]"
              style={{
                width: `calc(66% * ${activeIndex / (historyPeriods.length - 1)})`,
              }}
            />

            {historyPeriods.map((item, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={item.period}
                  type="button"
                  onClick={() => selectPeriod(index)}
                  className="group relative z-10 flex min-w-0 flex-col items-center text-center"
                >
                  <span
                    className={[
                      "text-[11px] font-black transition-colors sm:text-sm",
                      active
                        ? "text-red-800"
                        : "text-zinc-700 group-hover:text-red-800",
                    ].join(" ")}
                  >
                    {item.period}
                  </span>
                  <span
                    className={[
                      "mt-3 rounded-full border bg-[#efe3bf] transition-all",
                      active
                        ? "h-4 w-4 border-red-800 bg-red-800 shadow-[0_0_0_5px_rgba(127,29,29,0.12)]"
                        : "h-3 w-3 border-zinc-500 group-hover:border-red-800",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={activePeriod.period}
          className={[
            "history-slide mx-auto mt-8 max-w-5xl text-center",
            direction === "right"
              ? "history-slide-from-right"
              : "history-slide-from-left",
          ].join(" ")}
        >
          <h3 className="mx-auto max-w-4xl font-serif text-base font-black uppercase leading-7 text-zinc-950 sm:text-lg md:text-xl md:leading-9">
            {activePeriod.title}
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-7 text-zinc-700 md:text-base">
            {activePeriod.description}
          </p>
          <Link
            href="/chang-duong-lich-su"
            className="mt-4 inline-flex text-sm font-bold text-red-800 underline decoration-red-800/40 underline-offset-4 transition hover:text-red-950"
          >
            Tìm hiểu thêm
          </Link>

          <div className="relative mx-auto mt-8 w-full max-w-[860px] px-8 sm:px-12 md:px-14">
            <button
              type="button"
              aria-label="Giai đoạn trước"
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-red-800 text-white shadow-lg transition hover:scale-105 hover:bg-red-900 sm:h-10 sm:w-10 md:h-11 md:w-11"
            >
              <span aria-hidden="true" className="text-3xl leading-none">
                ‹
              </span>
            </button>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-[820px] overflow-hidden rounded-lg border border-red-900/10 bg-zinc-200 shadow-xl shadow-zinc-900/10 sm:aspect-[16/9] md:aspect-[16/7]">
              {failedImages[activePeriod.image] ? (
                <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#d7d2c3,#f3ead0)] px-6 text-center text-sm font-semibold uppercase tracking-[0.08em] text-zinc-600">
                  Ảnh lịch sử đang chờ cập nhật
                </div>
              ) : (
                <Image
                  src={activePeriod.image}
                  alt={activePeriod.title}
                  fill
                  sizes="(min-width: 1024px) 860px, 100vw"
                  className="object-cover object-center grayscale"
                  onError={() =>
                    setFailedImages((current) => ({
                      ...current,
                      [activePeriod.image]: true,
                    }))
                  }
                />
              )}
            </div>

            <button
              type="button"
              aria-label="Giai đoạn tiếp theo"
              onClick={goToNext}
              className="absolute right-0 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-red-800 text-white shadow-lg transition hover:scale-105 hover:bg-red-900 sm:h-10 sm:w-10 md:h-11 md:w-11"
            >
              <span aria-hidden="true" className="text-3xl leading-none">
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
