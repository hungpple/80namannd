import type { Metadata } from "next";
import { AchievementGrid } from "@/components/AchievementGrid";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Các chiến công nổi bật",
  description:
    "Danh sách card placeholder về các chiến công và thành tựu nổi bật.",
};

export default function AchievementsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Các chiến công nổi bật"
        title="Những câu chuyện tiêu biểu được trình bày theo nhóm nội dung"
        description="Bố cục dạng lưới giúp người xem quét nhanh chủ đề, thời gian và mô tả ngắn theo từng nhóm nội dung."
      />

      <section className="bg-red-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <SectionHeader
              eyebrow="Danh sách"
              title="Bộ lọc đơn giản theo nhóm"
              description="Người xem có thể chuyển nhanh giữa các nhóm như an ninh, trật tự, vì nhân dân và chuyển đổi số."
            />
          </div>
          <AchievementGrid />
        </div>
      </section>

      <CTASection
        title="Muốn hiểu các mốc lịch sử trước khi xem từng câu chuyện?"
        description="Trang timeline giúp đặt các nội dung nổi bật vào bối cảnh phát triển dài hạn của lực lượng."
        primaryHref="/chang-duong-lich-su"
        primaryLabel="Xem chặng đường lịch sử"
        secondaryHref="/ve-chung-toi"
        secondaryLabel="Về chúng tôi"
      />
    </main>
  );
}
