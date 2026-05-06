import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { aboutHighlights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Giới thiệu mục đích, sứ mệnh, giá trị và định hướng phát triển của website chuyên đề mẫu.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Về chúng tôi"
        title="Một không gian số trang trọng cho truyền thống Công an nhân dân"
        description="Website hướng tới việc giới thiệu tư liệu, câu chuyện và thành tựu bằng cách trình bày chuẩn mực, dễ đọc và giàu tính giáo dục."
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Mục đích"
              title="Tuyên truyền, giáo dục truyền thống và lan tỏa hình ảnh đẹp"
              description="Website hướng tới cách trình bày chuẩn mực, dễ đọc, giúp người xem tiếp cận các giai đoạn lịch sử, thành tựu và câu chuyện phụng sự nhân dân trong một trải nghiệm thống nhất."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-red-100 bg-red-50 p-6 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-red-800">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Nguyên tắc nội dung"
            title="Dùng dữ liệu placeholder hôm nay, sẵn sàng thay bằng tư liệu chính thống ngày mai"
            description="Thiết kế ưu tiên sự trang trọng, độ tin cậy, khả năng mở rộng và tính nhất quán khi cập nhật nội dung thật."
            tone="dark"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Tôn trọng nguồn tư liệu, kiểm chứng nội dung trước khi công bố.",
              "Ưu tiên hình ảnh hợp lệ, rõ nguồn gốc và phù hợp bối cảnh.",
              "Trình bày ngắn gọn, chuẩn mực, thuận tiện cho nhiều nhóm độc giả.",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-black text-yellow-200">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-sm font-semibold leading-7 text-zinc-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Trải nghiệm chatbot mẫu để chuẩn bị cho tích hợp AI"
        description="Trợ lý hỏi đáp giúp người xem tiếp cận nhanh các nội dung chính và những câu hỏi thường gặp."
        primaryHref="/chatbot-ai"
        primaryLabel="Mở Chatbot AI"
        secondaryHref="/"
        secondaryLabel="Về trang chủ"
      />
    </main>
  );
}
