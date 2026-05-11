export const FEATURED_ACHIEVEMENTS_SOURCE_DOCUMENT =
  "80 CHIẾN CÔNG CỦA LLANND.docx";

export type FeaturedAchievementStageKey =
  | "1945-1954"
  | "1954-1975"
  | "1975-nay";

export type FeaturedAchievement = {
  number: number;
  stageKey: FeaturedAchievementStageKey;
  stage: string;
  title: string;
};

export const FEATURED_ACHIEVEMENT_STAGES: Record<
  FeaturedAchievementStageKey,
  string
> = {
  "1945-1954":
    "Phần thứ nhất: Lực lượng An ninh nhân dân ra đời, bảo vệ chính quyền cách mạng và kháng chiến chống thực dân Pháp xâm lược (1945 - 1954)",
  "1954-1975":
    "Phần thứ hai: Lực lượng An ninh nhân dân trong sự nghiệp xây dựng và bảo vệ miền Bắc xã hội chủ nghĩa, đấu tranh giải phóng miền Nam, thống nhất đất nước (1954 - 1975)",
  "1975-nay":
    "Phần thứ ba: Lực lượng An ninh nhân dân trong sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa (1975 đến nay)",
};

const FIRST_STAGE = FEATURED_ACHIEVEMENT_STAGES["1945-1954"];
const SECOND_STAGE = FEATURED_ACHIEVEMENT_STAGES["1954-1975"];
const THIRD_STAGE = FEATURED_ACHIEVEMENT_STAGES["1975-nay"];

export const FEATURED_ACHIEVEMENTS = [
  {
    number: 1,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title: "ĐÁNH CHIẾM PHỦ KHÂM SAI NGÀY 19/8/1945",
  },
  {
    number: 2,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH VÀ LỄ TUYÊN NGÔN ĐỘC LẬP TẠI QUẢNG TRƯỜNG BA ĐÌNH NGÀY 2-9-1945",
  },
  {
    number: 3,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH VÀ CÁC ĐẠI BIỂU TẠI KỲ HỌP THỨ NHẤT QUỐC HỘI NĂM 1946",
  },
  {
    number: 4,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH TẠI BUỔI MÍT TINH CỦA NHÂN DÂN THỦ ĐÔ Ở SÂN VẬN ĐỘNG PHÚC TÂN, HÀ NỘI (THÁNG 3-1946)",
  },
  {
    number: 5,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "BẢO VỆ AN TOÀN CÁC ĐIỂM BỎ PHIẾU BẦU ĐẠI BIỂU QUỐC HỘI KHÓA I TẠI SÀI GÒN (NGÀY 06/01/1946)",
  },
  {
    number: 6,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title: "VỤ ÁN ÔN NHƯ HẦU VÀ MỐC SON CỦA LỰC LƯỢNG AN NINH NHÂN DÂN",
  },
  {
    number: 7,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH NÓI CHUYỆN VỚI ĐỒNG BÀO THỦ ĐÔ TẠI GA HÀNG CỎ, HÀ NỘI (THÁNG 10/1946)",
  },
  {
    number: 8,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "CÔNG AN XÃ TAM HƯNG TỔ CHỨC CANH GÁC, GIỮ VỮNG AN NINH LÀNG XÃ, CHỐNG ĐỊCH CÀN QUÉT (HUYỆN THANH OAI, TỈNH HÀ ĐÔNG - NAY THUỘC HÀ NỘI)",
  },
  {
    number: 9,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "BẮT GIỮ BỌN TAY SAI, CHỈ ĐIỂM TRONG ĐỢT TỔNG PHÁ TỀ, PHÁ CHÍNH QUYỀN CƠ SỞ CỦA ĐỊCH",
  },
  {
    number: 10,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "PHỤC KÍCH, CHẶN ĐÁNH QUÂN PHÁP CỦA ĐƠN VỊ QUỐC VỆ ĐỘI TRÊN QUỐC LỘ TẠI CHIẾN TRƯỜNG NAM KHU V (NĂM 1947)",
  },
  {
    number: 11,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "CÔNG AN XUNG PHONG SÀI GÒN - CHỢ LỚN TIÊU DIỆT NGUYỄN VĂN SÂM, CHỦ TỊCH “MẶT TRẬN QUỐC GIA LIÊN HIỆP” (NGÀY 10-10-1947)",
  },
  {
    number: 12,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "LỰC LƯỢNG AN NINH SÀI GÒN - CHỢ LỚN TIÊU DIỆT TÊN BA ZIN, CHÁNH SỞ MẬT THÁM NAM KỲ (NGÀY 28-4-1950)",
  },
  {
    number: 13,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "LỰC LƯỢNG CÔNG AN QUẢNG NAM - ĐÀ NẴNG XÃ HỘI HÓA, THÂM NHẬP VÙNG ĐỊCH KIỂM SOÁT (NĂM 1948)",
  },
  {
    number: 14,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "TRINH SÁT BẢO VỆ CHÍNH TRỊ KHÁM XÉT NƠI Ở CỦA TOÁN GIÁN ĐIỆP DO CƠ QUAN GCMA (PHÁP) ĐÁNH VÀO VÙNG THỦ ĐÔ KHÁNG CHIẾN CỦA TA, NĂM 1953. (CÁC ĐỐI TƯỢNG CHU THỊ LAN, CHU THỊ HƯƠNG VÀ LÊ THỊ TÂN)",
  },
  {
    number: 15,
    stageKey: "1945-1954",
    stage: FIRST_STAGE,
    title:
      "BAN CHUYÊN ÁN KHAI QUẬT ĐỊA ĐIỂM CHÔN GIẤU PHƯƠNG TIỆN HOẠT ĐỘNG CỦA BỌN GIÁN ĐIỆP TRONG CHUYÊN ÁN TN25 TẠI PHỐ ĐỘI CẤN, HÀ NỘI",
  },
  {
    number: 16,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH THAM GIA ĐOÀN “CHỐNG CƯỠNG ÉP DI CƯ” TẠI TIỀN HẢI, THÁI BÌNH (NĂM 1955)",
  },
  {
    number: 17,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title: "CÔNG AN TỈNH TUYÊN QUANG PHÁ TỔ CHỨC PHẢN ĐỘNG “NHẤT TÂN DÂN TỘC” (NĂM 1958)",
  },
  {
    number: 18,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH TỈNH QUẢNG BÌNH BẮT GIỮ CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN CÁCH MẠNG “VIỆT HƯNG PHỤC QUỐC ĐẢNG” TẠI VĨNH LỘC, QUẢNG TRẠCH (NĂM 1958)",
  },
  {
    number: 19,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHỐI HỢP VỚI QUÂN ĐỘI NHÂN DÂN TRUY QUÉT PHỈ, GIỮ VỮNG AN NINH VÙNG NÚI PHÍA BẮC (TIÊU BIỂU VỤ ĐỒNG VĂN, HÀ GIANG)",
  },
  {
    number: 20,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH NAM ĐỊNH BẮT GIỮ VŨ ĐÌNH ĐÍCH - ĐỐI TƯỢNG CHỦ CHỐT TRONG CHUYÊN ÁN C30",
  },
  {
    number: 21,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHỐI HỢP CÔNG AN VŨ TRANG QUÁN TRIỆT, TỔ CHỨC TRUY LÙNG GIÁN ĐIỆP BIỆT KÍCH TẠI CÁC ĐỊA PHƯƠNG",
  },
  {
    number: 22,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHỐI HỢP NHÂN DÂN TỈNH HÒA BÌNH VÂY BẮT GIÁN ĐIỆP BIỆT KÍCH",
  },
  {
    number: 23,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "TRUY BẮT LÒ VĂN PÉNG - NHÂN VIÊN TRUYỀN TIN CỦA TOÁN CASTOR TRONG CHUYÊN ÁN PY27 TẠI SƠN LA (THÁNG 5-1961)",
  },
  {
    number: 24,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH ĐẤU TRANH, VÔ HIỆU HÓA CÁC ĐỐI TƯỢNG CHỦ CHỐT ÂU TRẠCH NIÊN, ÂU CẦN TIÊN TRONG CHUYÊN ÁN GIÁN ĐIỆP BÍ SỐ ED69",
  },
  {
    number: 25,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHỐI HỢP BẢO VỆ AN TOÀN CÁC ĐOÀN TÀU VẬN TẢI QUÂN SỰ CHI VIỆN VŨ KHÍ CHO CHIẾN TRƯỜNG MIỀN NAM",
  },
  {
    number: 26,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH KHU IX VẬN ĐỘNG NHÂN DÂN ĐẤU TRANH GIẢI TÁN TRẠI TẬP TRUNG, PHÁ “ẤP CHIẾN LƯỢC”",
  },
  {
    number: 27,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "ĐƠN VỊ TRINH SÁT VŨ TRANG HÀNH QUÂN CHIẾN ĐẤU, BẢO VỆ AN TOÀN CĂN CỨ CÁCH MẠNG",
  },
  {
    number: 28,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH VŨ TRANG TỔ CHỨC PHÒNG NGỪA, TUẦN TRA VÀ ĐÁNH ĐUỔI GIÁN ĐIỆP BIỆT KÍCH XÂM NHẬP KHU VÀNH ĐAI CĂN CỨ TRUNG ƯƠNG CỤC",
  },
  {
    number: 29,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH VŨ TRANG THAM GIA TIẾN CÔNG ĐỊCH TẠI THỊ XÃ VĨNH LONG TRONG TỔNG TIẾN CÔNG VÀ NỔI DẬY TẾT MẬU THÂN NĂM 1968",
  },
  {
    number: 30,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH VŨ TRANG TIẾN CÔNG, ĐÁNH CHIẾM CĂN CỨ CỦA ĐỊCH",
  },
  {
    number: 31,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "KHAI THÁC TIN TÌNH BÁO TRINH SÁT KỸ THUẬT, CHỈ ĐẠO ĐÁNH TAN SƯ ĐOÀN 9 NGỤY, LÀM THẤT BẠI ÂM MƯU THAM GIA CUỘC HÀNH QUÂN JUNCTION CITY (NĂM 1967)",
  },
  {
    number: 32,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH BẢO VỆ AN TOÀN NỮ NHÀ BÁO MADELEINE RIFFAUD THĂM VÙNG GIẢI PHÓNG MIỀN NAM VIỆT NAM",
  },
  {
    number: 33,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH BÌNH PHƯỚC BẮT GIỮ BIỆT KÍCH, THÁM BÁO XÂM NHẬP VÙNG GIẢI PHÓNG LỘC NINH",
  },
  {
    number: 34,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH VŨ TRANG T4 TIÊU DIỆT NGUYỄN VĂN BÔNG TRÊN ĐƯỜNG PHỐ SÀI GÒN (GIỮA BAN NGÀY)",
  },
  {
    number: 35,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHÚ YÊN PHỐI HỢP GIẢI THOÁT LUẬT SƯ NGUYỄN HỮU THỌ (NGÀY 30-10-1961)",
  },
  {
    number: 36,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG TRINH SÁT VŨ TRANG AN NINH T4 ĐÁNH HỎNG XE Ô TÔ CỦA NGUYỄN VĂN KIỂM - THIẾU TƯỚNG TƯ LỆNH BIỆT BỘ PHỦ TỔNG THỐNG NGỤY (NGÀY 1-2-1969)",
  },
  {
    number: 37,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH T4 HÀNH QUÂN VỀ SÀI GÒN THAM GIA CHIẾN DỊCH HỒ CHÍ MINH (MÙA XUÂN NĂM 1975)",
  },
  {
    number: 38,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH ĐÀ NẴNG THU HỒI TÀI LIỆU CỦA ĐỊCH SAU GIẢI PHÓNG THÀNH PHỐ",
  },
  {
    number: 39,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHỐI HỢP ỦY BAN QUÂN QUẢN TỔ CHỨC TRÌNH DIỆN, PHÂN LOẠI VÀ QUẢN LÝ CÁC ĐỐI TƯỢNG LIÊN QUAN ĐẾN CHÍNH QUYỀN CŨ SAU GIẢI PHÓNG",
  },
  {
    number: 40,
    stageKey: "1954-1975",
    stage: SECOND_STAGE,
    title:
      "TIỂU BAN BẢO VỆ CHÍNH TRỊ HƯỚNG DẪN LỰC LƯỢNG AN NINH CÁC TỈNH THU GOM VŨ KHÍ, VẬT LIỆU NỔ SAU NGÀY MIỀN NAM HOÀN TOÀN GIẢI PHÓNG",
  },
  {
    number: 41,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "ĐẤU TRANH, ĐƯA RA XÉT XỬ VỤ NỘI GIÁN NGUYỄN THÚC TUÂN TẠI TÒA ÁN NHÂN DÂN TỈNH THỪA THIÊN HUẾ (NGÀY 27-4-1980)",
  },
  {
    number: 42,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "ĐẤU TRANH, TRIỆT PHÁ VÀ ĐƯA RA XÉT XỬ TỔ CHỨC PHẢN ĐỘNG “DÂN QUÂN PHỤC QUỐC” TẠI THÀNH PHỐ HỒ CHÍ MINH (NGÀY 13-9-1976)",
  },
  {
    number: 43,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHÁT HIỆN, BẮT GIỮ NGÔ ĐỨC TÙNG VÀ CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN ĐỘNG “ĐẢNG BẢO VỆ NHÂN QUYỀN” TẠI KON TUM",
  },
  {
    number: 44,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH KHÁM XÉT, BÓC GỠ HOẠT ĐỘNG GIÁN ĐIỆP CỦA RICHARD WHITE, THU GIỮ PHƯƠNG TIỆN VÀ TÀI LIỆU TÌNH BÁO",
  },
  {
    number: 45,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "ĐẤU TRANH, ĐƯA RA XÉT XỬ CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN ĐỘNG “DÂN QUÂN PHỤC QUỐC” (NĂM 1985)",
  },
  {
    number: 46,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH BẾN TRE KHÁM PHÁ VỤ ÁN PHẢN ĐỘNG “MẶT TRẬN QUỐC GIA LIÊN KẾT”, BẮT GIỮ ĐỐI TƯỢNG VÀ THU PHƯƠNG TIỆN HOẠT ĐỘNG (NGÀY 5-2-1978)",
  },
  {
    number: 47,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHÁT HIỆN, BÓC GỠ VỤ ÁN NC82 LIÊN QUAN ĐẾN CÁC ĐỐI TƯỢNG VĂN NGHỆ SĨ MÓC NỐI VỚI NHÂN VIÊN HCR TẠI THÀNH PHỐ HỒ CHÍ MINH",
  },
  {
    number: 48,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH TỈNH BÌNH THUẬN TỔ CHỨC BẮT GỌN CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN ĐỘNG “MẶT TRẬN PHỤC QUỐC CỨU NGUY DÂN TỘC” (NGÀY 18-1-1977)",
  },
  {
    number: 49,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH PHÁT HIỆN, ĐẨY ĐUỔI CÁC ĐỐI TƯỢNG GIÁN ĐIỆP NƯỚC NGOÀI NÚP BÓNG TÔN GIÁO HOẠT ĐỘNG CHỐNG PHÁ SAU NGÀY MIỀN NAM GIẢI PHÓNG",
  },
  {
    number: 50,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH KON TUM TRỤC XUẤT CÁC GIÁO SĨ CÓ HÀNH VI CHỐNG PHÁ CHÍNH QUYỀN TẠI TÒA GIÁM MỤC KON TUM (THÁNG 5-1975)",
  },
  {
    number: 51,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH BẮT GIỮ CÁC ĐỐI TƯỢNG THÁM BÁO XÂM NHẬP TẠI MA LY PHO, SÌN HỒ, LAI CHÂU (NGÀY 4/4/1981)",
  },
  {
    number: 52,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title: "LỰC LƯỢNG AN NINH THU HỒI HỒ SƠ, TÀI LIỆU CỦA ĐỊCH ĐỂ LẠI",
  },
  {
    number: 53,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH THỪA THIÊN HUẾ LẬP KẾ HOẠCH BÓC GỠ ĐẦU MỐI NỘI GIÁN NGUYỄN THÚC TUÂN (NĂM 1978)",
  },
  {
    number: 54,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH BÌNH THUẬN GẶP GỠ, GIÁO DỤC, CẢM HÓA CỐT CÁN FULRO TRỞ VỀ VỚI CÁCH MẠNG",
  },
  {
    number: 55,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH BẮT GIỮ BÙI VĂN LAM SƠN (K14) - MẬT CỨ TRƯỞNG XÂM NHẬP TẠI XÃ KHÁNH HẢI (ĐÊM 23-3-1983)",
  },
  {
    number: 56,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH BẮT GIỮ TRẦN VĂN BÁ (K09) - MẬT CỨ TRƯỞNG CHỈ HUY CHUYẾN XÂM NHẬP TẠI ĐẢO HÒN ĐÁ BẠC (ĐÊM 9-9-1984)",
  },
  {
    number: 57,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH TRONG TRẬN ĐÁNH CUỐI CÙNG KẾ HOẠCH ĐN10 TẠI ĐẢO KÔ KÔNG KANG, BẮT GIỮ ĐỐI TƯỢNG VÀ THU NHIỀU VŨ KHÍ, PHƯƠNG TIỆN",
  },
  {
    number: 58,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH TỔ CHỨC KIỂM TRA, PHÁT HIỆN VÀ THU HỒI CÁC ẤN PHẨM VĂN HÓA PHẢN ĐỘNG",
  },
  {
    number: 59,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title: "LỰC LƯỢNG AN NINH TỈNH BẮC KẠN KHÁM PHÁ VỤ ÁN VẬN CHUYỂN, TIÊU THỤ TIỀN GIẢ",
  },
  {
    number: 60,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH THI HÀNH LỆNH TRỤC XUẤT LÊ QUỐC QUÂN TRONG CHUYÊN ÁN HM26, TRƯỚC SỰ CHỨNG KIẾN CỦA ĐẠI DIỆN ĐẠI SỨ QUÁN HOA KỲ",
  },
  {
    number: 61,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN HÀ NỘI ĐẤU TRANH, LÀM RÕ HOẠT ĐỘNG GIÁN ĐIỆP CỦA MIRIAM TRONG GIỚI HỌC SINH, SINH VIÊN",
  },
  {
    number: 62,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH ĐÓN LÕNG TRÊN TUYẾN BIÊN GIỚI VIỆT NAM - CAMPUCHIA, THU GIỮ TÀI LIỆU VÀ PHƯƠNG TIỆN HOẠT ĐỘNG CỦA CÁC TỔ CHỨC PHẢN CÁCH MẠNG",
  },
  {
    number: 63,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH CÔNG AN TỈNH LẠNG SƠN THU GIỮ HƠN 10.000 BĂNG ĐĨA LẬU (NGÀY 20/4/2011)",
  },
  {
    number: 64,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH CÔNG AN THÀNH PHỐ HỒ CHÍ MINH BẮT GIỮ CÁC ĐỐI TƯỢNG NGƯỜI NƯỚC NGOÀI SỬ DỤNG CÔNG NGHỆ CAO LỪA ĐẢO QUA MẠNG (NĂM 2011)",
  },
  {
    number: 65,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH CÔNG AN TỈNH THỪA THIÊN - HUẾ THU GIỮ TANG VẬT VI PHẠM TRONG LĨNH VỰC TRUYỀN THÔNG (NĂM 2011)",
  },
  {
    number: 66,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH CÔNG AN TỈNH LAI CHÂU PHÁT HIỆN, XỬ LÝ CÁC ĐỐI TƯỢNG TUYÊN TRUYỀN TRÁI PHÁP LUẬT LIÊN QUAN “HỘI THÁNH ĐỨC CHÚA TRỜI” (NĂM 2018)",
  },
  {
    number: 67,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CỤC NGOẠI TUYẾN PHỐI HỢP TRIỆT PHÁ ĐƯỜNG DÂY LÀM GIẢ VĂN BẰNG, CHỨNG CHỈ TRONG CÁC CHUYÊN ÁN H338, H339 TẠI HÀ NỘI (THÁNG 1-2018)",
  },
  {
    number: 68,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN TỈNH PHÚ THỌ KHÁM PHÁ, ĐƯA RA XÉT XỬ VỤ ÁN NGUYỄN VĂN DƯƠNG - CẦM ĐẦU ĐƯỜNG DÂY ĐÁNH BẠC NGHÌN TỶ TRÊN MẠNG (NĂM 2018)",
  },
  {
    number: 69,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH CÔNG AN TỈNH THÁI NGUYÊN BẮT GIỮ NGUYỄN VĂN TRƯỜNG VỀ HÀNH VI LỢI DỤNG QUYỀN TỰ DO DÂN CHỦ XÂM PHẠM LỢI ÍCH NHÀ NƯỚC (NĂM 2018)",
  },
  {
    number: 70,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CỤC A05 TRIỆT PHÁ Ổ NHÓM GẦN 400 ĐỐI TƯỢNG SỬ DỤNG CÔNG NGHỆ CAO HOẠT ĐỘNG PHẠM TỘI TẠI KHU ĐÔ THỊ OUR CITY, HẢI PHÒNG (NĂM 2019)",
  },
  {
    number: 71,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN TỈNH LÂM ĐỒNG BẮT GIỮ NGUYỄN ĐỨC QUỐC VƯỢNG VỀ HÀNH VI TUYÊN TRUYỀN CHỐNG NHÀ NƯỚC (NGÀY 23-9-2019)",
  },
  {
    number: 72,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CƠ QUAN AN NINH CÔNG AN TỈNH AN GIANG KHÁM XÉT, THU GIỮ TANG VẬT TẠI NƠI Ở CỦA NGUYỄN VĂN PHƯỚC VỀ HÀNH VI CHỐNG PHÁ NHÀ NƯỚC (NGÀY 20-4-2019)",
  },
  {
    number: 73,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH CÔNG AN TỈNH GIA LAI TỔ CHỨC KIỂM ĐIỂM, GIÁO DỤC CÁC ĐỐI TƯỢNG LIÊN QUAN “TIN LÀNH ĐỀ-GA” TẠI ĐỊA PHƯƠNG (NĂM 2018)",
  },
  {
    number: 74,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH HÀ TĨNH TRIỆT PHÁ ĐƯỜNG DÂY LỪA ĐẢO CHIẾM ĐOẠT HƠN 100 TỶ ĐỒNG TRÊN KHÔNG GIAN MẠNG (NĂM 2023)",
  },
  {
    number: 75,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CỤC AN NINH MẠNG VÀ PHÒNG, CHỐNG TỘI PHẠM SỬ DỤNG CÔNG NGHỆ CAO PHỐI HỢP CÔNG AN TỈNH PHÚ YÊN TRIỆT PHÁ ĐƯỜNG DÂY ĐÁNH BẠC TRÊN MẠNG QUY MÔ KHOẢNG 1.000 TỶ ĐỒNG (NĂM 2024)",
  },
  {
    number: 76,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN TỈNH BẮC NINH TRIỆT PHÁ ĐƯỜNG DÂY SẢN XUẤT, BUÔN BÁN SÁCH GIÁO KHOA GIẢ LIÊN TỈNH (NĂM 2025)",
  },
  {
    number: 77,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH ĐẮK LẮK PHỐI HỢP CỤC AN NINH MẠNG TRIỆT PHÁ ĐƯỜNG DÂY LỪA ĐẢO CHIẾM ĐOẠT TÀI SẢN QUY MÔ LỚN TRÊN KHÔNG GIAN MẠNG (NĂM 2025)",
  },
  {
    number: 78,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "LỰC LƯỢNG AN NINH NHÂN DÂN THAM GIA DIỄU BINH, DIỄU HÀNH VÀ BẢO VỆ TUYỆT ĐỐI AN NINH, AN TOÀN ĐẠI LỄ KỶ NIỆM 80 NĂM CÁCH MẠNG THÁNG TÁM NĂM 1945 VÀ QUỐC KHÁNH 2-9 (A80) NĂM 2025",
  },
  {
    number: 79,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH KHÁNH HÒA PHÁT HIỆN, BẮT GIỮ TỘI PHẠM TRUY NÃ ĐỎ QUỐC TẾ ĐẶC BIỆT NGUY HIỂM",
  },
  {
    number: 80,
    stageKey: "1975-nay",
    stage: THIRD_STAGE,
    title:
      "CÔNG AN TỈNH QUẢNG TRỊ PHỐI HỢP LỰC LƯỢNG AN NINH TRIỆT PHÁ CHUYÊN ÁN CHIẾM ĐOẠT TÀI SẢN VÀ RỬA TIỀN TRÊN KHÔNG GIAN MẠNG (NĂM 2026)",
  },
] as const satisfies readonly FeaturedAchievement[];
