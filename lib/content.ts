export type TimelineItem = {
  period: string;
  title: string;
  description: string;
  tag: string;
};

export type AchievementCategory =
  | "An ninh"
  | "Trật tự"
  | "Vì nhân dân"
  | "Chuyển đổi số";

export type AchievementItem = {
  title: string;
  description: string;
  period: string;
  category: AchievementCategory;
};

export const navItems = [
  { label: "Trang chủ", href: "/", external: false },
  {
    label: "Cổng thông tin điện tử Bộ Công an",
    href: "https://bocongan.gov.vn",
    external: true,
  },
  {
    label: "Chuyên đề 80 năm ANND",
    href: "/chuyen-de-80-nam-annd",
    external: false,
  },
  {
    label: "Các chiến công nổi bật",
    href: "/chien-cong-noi-bat",
    external: false,
  },
  { label: "Về chúng tôi", href: "/ve-chung-toi", external: false },
  { label: "Chatbot AI", href: "/chatbot-ai", external: false },
] as const;

export const timelineItems: TimelineItem[] = [
  {
    period: "1945 - 1954",
    title: "Khởi nguồn trong những ngày đầu bảo vệ chính quyền cách mạng",
    description:
      "Nội dung placeholder về giai đoạn hình thành lực lượng, xây dựng nền tảng tổ chức và bảo vệ cuộc sống bình yên của nhân dân.",
    tag: "Giai đoạn 01",
  },
  {
    period: "1954 - 1975",
    title: "Bền bỉ trong sự nghiệp xây dựng, chiến đấu và thống nhất đất nước",
    description:
      "Nội dung mẫu dành cho các dấu mốc lịch sử, nhấn mạnh tinh thần trung thành, kỷ luật và sự phối hợp của các lực lượng.",
    tag: "Giai đoạn 02",
  },
  {
    period: "1975 - 1986",
    title: "Củng cố lực lượng trong thời kỳ xây dựng và bảo vệ Tổ quốc",
    description:
      "Đoạn mô tả placeholder về nhiệm vụ giữ gìn an ninh, trật tự, phục vụ phát triển kinh tế, xã hội sau ngày đất nước thống nhất.",
    tag: "Giai đoạn 03",
  },
  {
    period: "1986 - 2000",
    title: "Đổi mới phương thức công tác trong thời kỳ hội nhập ban đầu",
    description:
      "Nội dung có thể thay thế bằng tư liệu chính thức về đổi mới nghiệp vụ, ứng dụng khoa học kỹ thuật và xây dựng phong trào toàn dân.",
    tag: "Giai đoạn 04",
  },
  {
    period: "2000 - nay",
    title: "Hiện đại hóa, chuyển đổi số và phụng sự nhân dân",
    description:
      "Văn bản mẫu cho giai đoạn phát triển hiện đại, chú trọng chính quy, tinh nhuệ, công nghệ, dữ liệu và dịch vụ công thân thiện.",
    tag: "Giai đoạn 05",
  },
];

export const achievementCategories = [
  "Tất cả",
  "An ninh",
  "Trật tự",
  "Vì nhân dân",
  "Chuyển đổi số",
] as const;

export const achievements: AchievementItem[] = [
  {
    title: "Bảo vệ an toàn các sự kiện chính trị, văn hóa trọng đại",
    description:
      "Placeholder về công tác tham mưu, phối hợp, bảo đảm tuyệt đối an toàn cho các hoạt động quy mô lớn.",
    period: "Giai đoạn hiện đại",
    category: "An ninh",
  },
  {
    title: "Đấu tranh phòng, chống tội phạm có tổ chức",
    description:
      "Nội dung mẫu mô tả tinh thần kiên quyết, mưu trí và phối hợp liên ngành trong bảo vệ trật tự an toàn xã hội.",
    period: "Nhiều thời kỳ",
    category: "Trật tự",
  },
  {
    title: "Lan tỏa phong trào toàn dân bảo vệ an ninh Tổ quốc",
    description:
      "Phần mô tả placeholder về sự gắn bó giữa lực lượng Công an nhân dân với nhân dân ở cơ sở.",
    period: "Thường xuyên",
    category: "Vì nhân dân",
  },
  {
    title: "Ứng dụng dữ liệu và công nghệ trong phục vụ người dân",
    description:
      "Nội dung mẫu cho các sáng kiến số hóa quy trình, nâng cao trải nghiệm dịch vụ công và quản trị hiện đại.",
    period: "Từ 2020",
    category: "Chuyển đổi số",
  },
  {
    title: "Giữ vững an ninh tại địa bàn chiến lược",
    description:
      "Placeholder dành cho các câu chuyện về bám địa bàn, phòng ngừa rủi ro và bảo vệ đời sống bình yên.",
    period: "Theo chuyên đề",
    category: "An ninh",
  },
  {
    title: "Hỗ trợ nhân dân trong thiên tai, dịch bệnh và tình huống khẩn cấp",
    description:
      "Nội dung mẫu nhấn mạnh tinh thần vì nhân dân phục vụ, kịp thời có mặt tại nơi khó khăn.",
    period: "Theo nhiệm vụ",
    category: "Vì nhân dân",
  },
];

export const quickQuestions = [
  "Tóm tắt các giai đoạn lịch sử chính",
  "Giới thiệu một chiến công tiêu biểu",
  "Website này có thể dùng để tuyên truyền như thế nào?",
  "Gợi ý nội dung thay thế cho trang chủ",
];

export const aboutHighlights = [
  {
    title: "Sứ mệnh",
    description:
      "Xây dựng một không gian số trang trọng để hệ thống hóa tư liệu, giới thiệu truyền thống và khơi dậy niềm tự hào về lực lượng Công an nhân dân.",
  },
  {
    title: "Giá trị",
    description:
      "Đề cao tính chính xác, chuẩn mực, dễ tiếp cận, lấy người xem làm trung tâm và tôn trọng nguồn tư liệu chính thống khi cập nhật nội dung thật.",
  },
  {
    title: "Định hướng phát triển",
    description:
      "Mở rộng kho tư liệu, bổ sung tìm kiếm, tích hợp chatbot AI và các module quản trị nội dung để vận hành lâu dài.",
  },
];
