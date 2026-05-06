import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { TimelineSection } from "@/components/TimelineSection";
import { timelineItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Chặng đường lịch sử",
  description:
    "Timeline placeholder về các giai đoạn lịch sử của lực lượng Công an nhân dân.",
};

export default function HistoryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Chặng đường lịch sử"
        title="Dòng thời gian truyền thống, xây dựng và trưởng thành"
        description="Trang trình bày các giai đoạn bằng cấu trúc timeline trang trọng, có khu vực minh họa và mô tả ngắn theo từng mốc."
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <SectionHeader
              eyebrow="Timeline"
              title="Năm giai đoạn nội dung mẫu"
              description="Các giai đoạn được sắp xếp theo dòng thời gian, tạo nền tảng cho việc bổ sung tư liệu, hình ảnh và bài viết chuyên sâu."
            />
          </div>
          <TimelineSection items={timelineItems} />
        </div>
      </section>

      <CTASection
        title="Tiếp nối mạch lịch sử bằng các câu chuyện chiến công"
        description="Khu vực chiến công nổi bật giúp chuyển từ dòng thời gian sang các câu chuyện cụ thể, có bộ lọc và card nội dung rõ ràng."
        primaryHref="/chien-cong-noi-bat"
        primaryLabel="Xem chiến công nổi bật"
        secondaryHref="/chatbot-ai"
        secondaryLabel="Hỏi Chatbot AI"
      />
    </main>
  );
}
