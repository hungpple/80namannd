import type { AchievementPeriodKey } from "./chienCongNoiBat";

export type AchievementCardItem = {
  id: number;
  slug: string;
  title: string;
  period: AchievementPeriodKey;
  periodTitle: string;
  periodAnchor: string;
  summary: string;
  coverImage: string | null;
  imageCount: number;
};

export const achievementPeriods = [
  {
    "key": "1945-1954",
    "title": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "anchor": "giai-doan-1945-1954"
  },
  {
    "key": "1954-1975",
    "title": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "anchor": "giai-doan-1954-1975"
  },
  {
    "key": "1975-nay",
    "title": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "anchor": "giai-doan-1975-nay"
  }
] as const;

export const featuredAchievementCards = [
  {
    "id": 1,
    "slug": "chien-cong-01",
    "title": "CHIẾN CÔNG 1. ĐÁNH CHIẾM PHỦ KHÂM SAI NGÀY 19/8/1945",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Đây là một trong những chiến công tiêu biểu gắn liền với thắng lợi của Cách mạng Tháng Tám năm 1945 tại Hà Nội. Việc lực lượng cách mạng, nòng cốt là các tổ chức tiền thân của lực lượng An ninh nhân dân, nhanh chóng chiếm giữ Phủ Khâm sai - cơ quan đầu não của chính quyền tay sai - đã góp phần làm tê liệt bộ máy cai trị của địch, tạo điều kiện để chính quyền cách mạng được thiết lập trong thời gian rất ngắn.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-01/cover.png",
    "imageCount": 1
  },
  {
    "id": 2,
    "slug": "chien-cong-02",
    "title": "CHIẾN CÔNG 2. BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH VÀ LỄ TUYÊN NGÔN ĐỘC LẬP TẠI QUẢNG TRƯỜNG BA ĐÌNH NGÀY 2-9-1945",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này gắn liền với sự kiện trọng đại là Tuyên ngôn Độc lập Việt Nam 1945, khi Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản tuyên ngôn khai sinh nước Việt Nam Dân chủ Cộng hòa. Trong bối cảnh tình hình chính trị - an ninh hết sức phức tạp, các thế lực thù địch luôn tìm cách phá hoại, lực lượng bảo vệ an ninh đã chủ động nắm tình hình, triển khai các biện pháp nghiệp vụ, kiểm soát chặt chẽ địa bàn, bảo vệ tuyệt đối an toàn lãnh tụ và buổi lễ.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-02/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 3,
    "slug": "chien-cong-03",
    "title": "CHIẾN CÔNG 3. BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH VÀ CÁC ĐẠI BIỂU TẠI KỲ HỌP THỨ NHẤT QUỐC HỘI NĂM 1946",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này gắn với sự kiện lịch sử Kỳ họp thứ nhất Quốc hội Việt Nam năm 1946 - kỳ họp đầu tiên của cơ quan quyền lực nhà nước cao nhất của nước Việt Nam Dân chủ Cộng hòa. Trong bối cảnh chính quyền cách mạng còn non trẻ, thù trong giặc ngoài đan xen, các lực lượng phản động, gián điệp luôn tìm cách phá hoại, lực lượng An ninh nhân dân đã chủ động nắm tình hình, triển khai đồng bộ các biện pháp bảo vệ, đảm bảo tuyệt đối an toàn cho Hồ Chí Minh và các đại biểu Quốc hội.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-03/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 4,
    "slug": "chien-cong-04",
    "title": "CHIẾN CÔNG 4. BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH TẠI BUỔI MÍT TINH CỦA NHÂN DÂN THỦ ĐÔ Ở SÂN VẬN ĐỘNG PHÚC TÂN, HÀ NỘI (THÁNG 3-1946)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này diễn ra trong bối cảnh tình hình an ninh, chính trị ở Thủ đô còn nhiều diễn biến phức tạp sau thắng lợi của Cách mạng Tháng Tám năm 1945. Khi Hồ Chí Minh tham dự và phát biểu trước đông đảo quần chúng nhân dân, lực lượng An ninh nhân dân đã chủ động triển khai các biện pháp bảo vệ chặt chẽ, nắm chắc tình hình, kịp thời phát hiện và ngăn chặn các nguy cơ đe dọa.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-04/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 5,
    "slug": "chien-cong-05",
    "title": "CHIẾN CÔNG 5. BẢO VỆ AN TOÀN CÁC ĐIỂM BỎ PHIẾU BẦU ĐẠI BIỂU QUỐC HỘI KHÓA I TẠI SÀI GÒN (NGÀY 06/01/1946)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này gắn liền với sự kiện Tổng tuyển cử Việt Nam năm 1946 - cuộc tổng tuyển cử dân chủ đầu tiên trong lịch sử nước ta. Trong điều kiện Sài Gòn còn chịu nhiều tác động của các thế lực thù địch, tình hình an ninh diễn biến phức tạp, lực lượng An ninh nhân dân đã chủ động triển khai các phương án bảo vệ, giữ vững trật tự tại các điểm bỏ phiếu, bảo đảm cho Nhân dân thực hiện quyền công dân một cách an toàn, tự do.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-05/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 6,
    "slug": "chien-cong-06",
    "title": "CHIẾN CÔNG 6. VỤ ÁN ÔN NHƯ HẦU VÀ MỐC SON CỦA LỰC LƯỢNG AN NINH NHÂN DÂN",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Đồng chí Nguyễn Bá Hùng và Đội Trinh sát đặc biệt đến khám số 7 phố Ôn Như Hầu bắt Phan Kích Nam và bọn Quốc dân đảng.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-06/cover.jpg",
    "imageCount": 2
  },
  {
    "id": 7,
    "slug": "chien-cong-07",
    "title": "CHIẾN CÔNG 7. BẢO VỆ AN TOÀN CHỦ TỊCH HỒ CHÍ MINH NÓI CHUYỆN VỚI ĐỒNG BÀO THỦ ĐÔ TẠI GA HÀNG CỎ, HÀ NỘI (THÁNG 10/1946)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này diễn ra sau Vụ án Ôn Như Hầu năm 1946, khi tình hình an ninh, trật tự tại Hà Nội cơ bản được ổn định. Nhân dịp Hồ Chí Minh từ Pháp trở về, buổi nói chuyện với đồng bào tại ga Hàng Cỏ đã thu hút đông đảo quần chúng tham gia, tiềm ẩn nhiều yếu tố phức tạp về an ninh.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-07/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 8,
    "slug": "chien-cong-08",
    "title": "CHIẾN CÔNG 8. CÔNG AN XÃ TAM HƯNG TỔ CHỨC CANH GÁC, GIỮ VỮNG AN NINH LÀNG XÃ, CHỐNG ĐỊCH CÀN QUÉT (HUYỆN THANH OAI, TỈNH HÀ ĐÔNG - NAY THUỘC HÀ NỘI)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này thể hiện rõ vai trò nòng cốt của lực lượng Công an cơ sở trong bảo vệ an ninh, trật tự tại địa bàn nông thôn trong những năm đầu kháng chiến chống thực dân Pháp. Trước các cuộc càn quét, lùng sục của địch nhằm phá hoại cơ sở cách mạng, Công an xã Tam Hưng đã chủ động tổ chức lực lượng canh gác, xây dựng hệ thống cảnh giới, phối hợp chặt chẽ với quần chúng Nhân dân để phát hiện, ngăn chặn và đối phó hiệu quả với các hoạt động xâm nhập.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-08/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 9,
    "slug": "chien-cong-09",
    "title": "CHIẾN CÔNG 9. BẮT GIỮ BỌN TAY SAI, CHỈ ĐIỂM TRONG ĐỢT TỔNG PHÁ TỀ, PHÁ CHÍNH QUYỀN CƠ SỞ CỦA ĐỊCH",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này diễn ra trong quá trình đẩy mạnh đấu tranh làm tan rã hệ thống ngụy quyền ở cơ sở, góp phần quan trọng vào việc củng cố thế trận an ninh nhân dân trong kháng chiến. Thông qua đợt tổng phá tề, lực lượng An ninh nhân dân đã chủ động nắm tình hình, phát hiện và bắt giữ nhiều đối tượng tay sai, chỉ điểm, qua đó làm tê liệt mạng lưới phục vụ cho hoạt động kiểm soát, đàn áp của địch.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-09/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 10,
    "slug": "chien-cong-10",
    "title": "CHIẾN CÔNG 10. PHỤC KÍCH, CHẶN ĐÁNH QUÂN PHÁP CỦA ĐƠN VỊ QUỐC VỆ ĐỘI TRÊN QUỐC LỘ TẠI CHIẾN TRƯỜNG NAM KHU V (NĂM 1947)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công thể hiện rõ nghệ thuật tác chiến linh hoạt, chủ động của lực lượng Quốc vệ đội trong việc lựa chọn địa hình, tổ chức phục kích trên các tuyến giao thông quan trọng của địch. Bằng cách đánh trúng các đoàn quân cơ động, đơn vị đã gây thiệt hại đáng kể, làm gián đoạn hoạt động vận chuyển và tiếp tế.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-10/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 11,
    "slug": "chien-cong-11",
    "title": "CHIẾN CÔNG 11. CÔNG AN XUNG PHONG SÀI GÒN - CHỢ LỚN TIÊU DIỆT NGUYỄN VĂN SÂM, CHỦ TỊCH “MẶT TRẬN QUỐC GIA LIÊN HIỆP” (NGÀY 10-10-1947)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này thể hiện tinh thần kiên quyết, mưu trí của lực lượng Công an xung phong trong đấu tranh với các phần tử phản động, tay sai nguy hiểm. Việc tiêu diệt Nguyễn Văn Sâm đã góp phần làm tan rã một tổ chức phản động, gây hoang mang trong hàng ngũ địch, đồng thời củng cố niềm tin của quần chúng vào lực lượng cách mạng.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-11/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 12,
    "slug": "chien-cong-12",
    "title": "CHIẾN CÔNG 12. LỰC LƯỢNG AN NINH SÀI GÒN - CHỢ LỚN TIÊU DIỆT TÊN BA ZIN, CHÁNH SỞ MẬT THÁM NAM KỲ (NGÀY 28-4-1950)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công này thể hiện sự mưu trí, táo bạo và khả năng tổ chức, chỉ huy hiệu quả của lực lượng An ninh trong lòng địch. Dưới sự chỉ huy của Trịnh Khắc Phương, trận đánh đã loại bỏ một tên đầu sỏ mật thám nguy hiểm, góp phần làm suy yếu hệ thống tình báo, đàn áp của địch tại Nam Kỳ.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-12/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 13,
    "slug": "chien-cong-13",
    "title": "CHIẾN CÔNG 13. LỰC LƯỢNG CÔNG AN QUẢNG NAM - ĐÀ NẴNG XÃ HỘI HÓA, THÂM NHẬP VÙNG ĐỊCH KIỂM SOÁT (NĂM 1948)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công thể hiện rõ bản lĩnh, sự mưu trí và tinh thần dũng cảm của cán bộ, chiến sĩ công an khi hoạt động bí mật trong vùng địch kiểm soát. Thông qua hình thức “xã hội hóa” vỏ bọc, lực lượng đã thâm nhập sâu vào nội địa địch, nắm tình hình, xây dựng cơ sở và hỗ trợ hiệu quả cho phong trào cách mạng.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-13/image-01.jpg",
    "imageCount": 1
  },
  {
    "id": 14,
    "slug": "chien-cong-14",
    "title": "CHIẾN CÔNG 14. TRINH SÁT BẢO VỆ CHÍNH TRỊ KHÁM XÉT NƠI Ở CỦA TOÁN GIÁN ĐIỆP DO CƠ QUAN GCMA (PHÁP) ĐÁNH VÀO VÙNG THỦ ĐÔ KHÁNG CHIẾN CỦA TA, NĂM 1953. (CÁC ĐỐI TƯỢNG CHU THỊ LAN, CHU THỊ HƯƠNG VÀ LÊ THỊ TÂN)",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công của lực lượng trinh sát Bảo vệ chính trị trong khám xét nơi ở của toán gián điệp do cơ quan GCMA (Pháp) cài vào vùng Thủ đô kháng chiến năm 1953 thể hiện rõ hiệu quả công tác phản gián. Qua nắm tình hình và tổ chức đấu tranh nghiệp vụ, lực lượng đã phát hiện, bắt giữ các đối tượng như Chu Thị Lan, Chu Thị Hương, Lê Thị Tân, kịp thời bóc gỡ mạng lưới gián điệp, bảo vệ an toàn căn cứ kháng chiến và giữ vững an ninh chính trị.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-14/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 15,
    "slug": "chien-cong-15",
    "title": "CHIẾN CÔNG 15. BAN CHUYÊN ÁN KHAI QUẬT ĐỊA ĐIỂM CHÔN GIẤU PHƯƠNG TIỆN HOẠT ĐỘNG CỦA BỌN GIÁN ĐIỆP TRONG CHUYÊN ÁN TN25 TẠI PHỐ ĐỘI CẤN, HÀ NỘI",
    "period": "1945-1954",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN RA ĐỜI, BẢO VỆ CHÍNH QUYỀN CÁCH MẠNG VÀ KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP XÂM LƯỢC",
    "periodAnchor": "giai-doan-1945-1954",
    "summary": "Chiến công của Ban chuyên án trong Chuyên án TN25 khi khai quật địa điểm chôn giấu phương tiện hoạt động của bọn gián điệp tại phố Đội Cấn thể hiện rõ bản lĩnh, nghiệp vụ sắc bén của lực lượng An ninh. Thông qua công tác trinh sát, đấu tranh khai thác và tổ chức xác minh, lực lượng đã phát hiện, thu giữ nhiều phương tiện hoạt động bí mật, góp phần bóc gỡ mạng lưới gián điệp, bảo vệ vững chắc an ninh chính trị trên địa bàn.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-15/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 16,
    "slug": "chien-cong-16",
    "title": "CHIẾN CÔNG 16. LỰC LƯỢNG AN NINH THAM GIA ĐOÀN “CHỐNG CƯỠNG ÉP DI CƯ” TẠI TIỀN HẢI, THÁI BÌNH (NĂM 1955)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "THỐNG NHẤT ĐẤT NƯỚC (1954 - 1975) Chiến công này gắn với bối cảnh sau Hiệp định Genève 1954, khi các thế lực thù địch lợi dụng vấn đề tôn giáo để cưỡng ép, lôi kéo đồng bào di cư. Tại Tiền Hải, lực lượng An ninh đã phối hợp chặt chẽ với chính quyền và đoàn thể, kiên trì vận động, tuyên truyền, giúp đồng bào Công giáo nhận rõ âm mưu của địch, đấu tranh giải tán các trại tập trung và trở về quê quán.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-16/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 17,
    "slug": "chien-cong-17",
    "title": "CHIẾN CÔNG 17. CÔNG AN TỈNH TUYÊN QUANG PHÁ TỔ CHỨC PHẢN ĐỘNG “NHẤT TÂN DÂN TỘC” (NĂM 1958)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện vai trò chủ động, sắc bén của lực lượng công an trong đấu tranh với các tổ chức phản động hoạt động bí mật. Thông qua việc triển khai kế hoạch nghiệp vụ chặt chẽ, Công an tỉnh Tuyên Quang đã phát hiện, bóc gỡ và làm tan rã tổ chức “Nhất tân dân tộc”, ngăn chặn kịp thời âm mưu chống phá chính quyền.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-17/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 18,
    "slug": "chien-cong-18",
    "title": "CHIẾN CÔNG 18. LỰC LƯỢNG AN NINH TỈNH QUẢNG BÌNH BẮT GIỮ CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN CÁCH MẠNG “VIỆT HƯNG PHỤC QUỐC ĐẢNG” TẠI VĨNH LỘC, QUẢNG TRẠCH (NĂM 1958)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện sự chủ động, kiên quyết của lực lượng An ninh trong đấu tranh làm thất bại âm mưu của các tổ chức phản cách mạng hoạt động bí mật. Tại Quảng Bình, lực lượng An ninh đã phát hiện, thu giữ tang vật và bắt giữ các đối tượng cầm đầu, qua đó bóc gỡ toàn bộ tổ chức “Việt Hưng phục quốc đảng” trên địa bàn. Kết quả này góp phần giữ vững ổn định chính trị, bảo vệ chính quyền cơ sở và củng cố niềm tin của Nhân dân trong giai đoạn xây dựng chủ nghĩa xã hội ở miền Bắc.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-18/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 19,
    "slug": "chien-cong-19",
    "title": "CHIẾN CÔNG 19. LỰC LƯỢNG AN NINH PHỐI HỢP VỚI QUÂN ĐỘI NHÂN DÂN TRUY QUÉT PHỈ, GIỮ VỮNG AN NINH VÙNG NÚI PHÍA BẮC (TIÊU BIỂU VỤ ĐỒNG VĂN, HÀ GIANG)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công thể hiện sự phối hợp chặt chẽ giữa lực lượng An ninh nhân dân và Quân đội nhân dân Việt Nam trong đấu tranh trấn áp các toán phỉ, phản động hoạt động ở địa bàn miền núi. Thông qua các biện pháp nghiệp vụ kết hợp quân sự, các lực lượng đã bóc gỡ, triệt phá nhiều ổ nhóm, làm thất bại âm mưu lợi dụng địa bàn hiểm trở để chống phá sau chiến tranh.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-19/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 20,
    "slug": "chien-cong-20",
    "title": "CHIẾN CÔNG 20. LỰC LƯỢNG AN NINH NAM ĐỊNH BẮT GIỮ VŨ ĐÌNH ĐÍCH - ĐỐI TƯỢNG CHỦ CHỐT TRONG CHUYÊN ÁN C30",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện sự sắc bén trong công tác trinh sát, điều tra của lực lượng An ninh khi đấu tranh với các đối tượng nguy hiểm. Việc bắt giữ Vũ Đình Đích - một trong những đối tượng chính của Chuyên án C30 - đã góp phần quan trọng làm rõ vụ án, bóc gỡ đường dây, ngăn chặn hoạt động chống phá.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-20/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 21,
    "slug": "chien-cong-21",
    "title": "CHIẾN CÔNG 21. LỰC LƯỢNG AN NINH PHỐI HỢP CÔNG AN VŨ TRANG QUÁN TRIỆT, TỔ CHỨC TRUY LÙNG GIÁN ĐIỆP BIỆT KÍCH TẠI CÁC ĐỊA PHƯƠNG",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện vai trò nòng cốt của lực lượng An ninh trong việc chủ động tham mưu, hướng dẫn và phối hợp với Công an vũ trang Việt Nam cùng lực lượng dân quân du kích triển khai nhiệm vụ truy lùng gián điệp biệt kích. Thông qua công tác quán triệt, huấn luyện và xây dựng thế trận an ninh nhân dân rộng khắp, các lực lượng đã nâng cao cảnh giác, kịp thời phát hiện, bao vây và vô hiệu hóa nhiều toán xâm nhập.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-21/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 22,
    "slug": "chien-cong-22",
    "title": "CHIẾN CÔNG 22. LỰC LƯỢNG AN NINH PHỐI HỢP NHÂN DÂN TỈNH HÒA BÌNH VÂY BẮT GIÁN ĐIỆP BIỆT KÍCH",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện sức mạnh của thế trận an ninh nhân dân trong đấu tranh chống chiến tranh gián điệp. Tại Hòa Bình, lực lượng An ninh đã chủ động phối hợp với quần chúng phát hiện, bao vây và bắt giữ các toán gián điệp biệt kích xâm nhập. Kết quả không chỉ góp phần vô hiệu hóa hoạt động phá hoại của địch mà còn khẳng định hiệu quả của phương châm dựa vào dân, giữ vững an ninh, trật tự trên địa bàn.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-22/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 23,
    "slug": "chien-cong-23",
    "title": "CHIẾN CÔNG 23. TRUY BẮT LÒ VĂN PÉNG - NHÂN VIÊN TRUYỀN TIN CỦA TOÁN CASTOR TRONG CHUYÊN ÁN PY27 TẠI SƠN LA (THÁNG 5-1961)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện sự sắc bén, kiên trì của lực lượng An ninh trong đấu tranh chống gián điệp biệt kích. Tại Sơn La, lực lượng An ninh đã tổ chức truy bắt thành công Lò Văn Péng - đối tượng giữ vai trò truyền tin quan trọng trong toán Castor.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-23/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 24,
    "slug": "chien-cong-24",
    "title": "CHIẾN CÔNG 24. LỰC LƯỢNG AN NINH ĐẤU TRANH, VÔ HIỆU HÓA CÁC ĐỐI TƯỢNG CHỦ CHỐT ÂU TRẠCH NIÊN, ÂU CẦN TIÊN TRONG CHUYÊN ÁN GIÁN ĐIỆP BÍ SỐ ED69",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện bản lĩnh, sự mưu trí và hiệu quả của công tác trinh sát an ninh trong đấu tranh chống gián điệp. Việc phát hiện, đấu tranh và vô hiệu hóa Âu Trạch Niên và Âu Cần Tiên - các đối tượng chủ chốt trong Chuyên án ED69 - đã góp phần bóc gỡ đường dây hoạt động bí mật, làm thất bại âm mưu thu thập tin tức, phá hoại của địch.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-24/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 25,
    "slug": "chien-cong-25",
    "title": "CHIẾN CÔNG 25. LỰC LƯỢNG AN NINH PHỐI HỢP BẢO VỆ AN TOÀN CÁC ĐOÀN TÀU VẬN TẢI QUÂN SỰ CHI VIỆN VŨ KHÍ CHO CHIẾN TRƯỜNG MIỀN NAM",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện vai trò quan trọng của lực lượng An ninh trong bảo vệ tuyến vận tải chiến lược, bảo đảm bí mật, an toàn cho hoạt động chi viện. Trong điều kiện địch tăng cường đánh phá, trinh sát và phá hoại, lực lượng An ninh đã chủ động phối hợp với các lực lượng chức năng triển khai nhiều biện pháp nghiệp vụ, giữ vững an ninh trên các tuyến đường sắt",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-25/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 26,
    "slug": "chien-cong-26",
    "title": "CHIẾN CÔNG 26. LỰC LƯỢNG AN NINH KHU IX VẬN ĐỘNG NHÂN DÂN ĐẤU TRANH GIẢI TÁN TRẠI TẬP TRUNG, PHÁ “ẤP CHIẾN LƯỢC”",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện hiệu quả của công tác dân vận và đấu tranh chính trị trong lòng địch. Tại địa bàn Khu IX, lực lượng An ninh đã bám dân, tuyên truyền, tổ chức quần chúng đứng lên đòi giải tán các trại tập trung và hệ thống “ấp chiến lược”, làm thất bại âm mưu dồn dân, kiểm soát của đối phương.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-26/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 27,
    "slug": "chien-cong-27",
    "title": "CHIẾN CÔNG 27. ĐƠN VỊ TRINH SÁT VŨ TRANG HÀNH QUÂN CHIẾN ĐẤU, BẢO VỆ AN TOÀN CĂN CỨ CÁCH MẠNG",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện tinh thần dũng cảm, cơ động và khả năng tác chiến linh hoạt của lực lượng trinh sát vũ trang trong điều kiện chiến trường phức tạp. Thông qua các đợt hành quân chiến đấu, đơn vị đã chủ động phát hiện, đánh địch từ xa, ngăn chặn các cuộc tiến công, bảo vệ vững chắc căn cứ cách mạng.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-27/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 28,
    "slug": "chien-cong-28",
    "title": "CHIẾN CÔNG 28. LỰC LƯỢNG AN NINH VŨ TRANG TỔ CHỨC PHÒNG NGỪA, TUẦN TRA VÀ ĐÁNH ĐUỔI GIÁN ĐIỆP BIỆT KÍCH XÂM NHẬP KHU VÀNH ĐAI CĂN CỨ TRUNG ƯƠNG CỤC",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện tinh thần cảnh giác cao độ và năng lực tổ chức bảo vệ căn cứ đầu não của cách mạng. Lực lượng An ninh vũ trang đã chủ động triển khai tuần tra, kiểm soát, kịp thời phát hiện và đánh đuổi các toán gián điệp biệt kích xâm nhập vào khu vành đai Trung ương Cục miền Nam.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-28/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 29,
    "slug": "chien-cong-29",
    "title": "CHIẾN CÔNG 29. LỰC LƯỢNG AN NINH VŨ TRANG THAM GIA TIẾN CÔNG ĐỊCH TẠI THỊ XÃ VĨNH LONG TRONG TỔNG TIẾN CÔNG VÀ NỔI DẬY TẾT MẬU THÂN NĂM 1968",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này gắn với Tổng tiến công và nổi dậy Tết Mậu Thân 1968, thể hiện sự phối hợp chặt chẽ giữa lực lượng An ninh vũ trang với các lực lượng vũ trang trong tiến công vào đô thị. Tại Vĩnh Long, lực lượng An ninh đã tham gia đánh địch, hỗ trợ dẫn đường, bảo vệ mục tiêu và giữ vững địa bàn sau tiến công.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-29/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 30,
    "slug": "chien-cong-30",
    "title": "CHIẾN CÔNG 30. LỰC LƯỢNG AN NINH VŨ TRANG TIẾN CÔNG, ĐÁNH CHIẾM CĂN CỨ CỦA ĐỊCH",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện tinh thần tiến công, táo bạo và khả năng tác chiến linh hoạt của lực lượng An ninh vũ trang trong điều kiện chiến trường ác liệt. Bằng việc tổ chức lực lượng chặt chẽ, lựa chọn thời cơ phù hợp, các đơn vị đã bất ngờ tiến công, đánh chiếm căn cứ của địch, gây thiệt hại và làm rối loạn hệ thống phòng thủ.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-30/image-01.jpg",
    "imageCount": 2
  },
  {
    "id": 31,
    "slug": "chien-cong-31",
    "title": "CHIẾN CÔNG 31. KHAI THÁC TIN TÌNH BÁO TRINH SÁT KỸ THUẬT, CHỈ ĐẠO ĐÁNH TAN SƯ ĐOÀN 9 NGỤY, LÀM THẤT BẠI ÂM MƯU THAM GIA CUỘC HÀNH QUÂN JUNCTION CITY (NĂM 1967)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện vai trò đặc biệt quan trọng của công tác trinh sát kỹ thuật trong bảo đảm thắng lợi trên chiến trường. Từ nguồn tin tình báo chính xác, Trung ương Cục miền Nam đã kịp thời chỉ đạo các lực lượng vũ trang tổ chức tiến công",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-31/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 32,
    "slug": "chien-cong-32",
    "title": "CHIẾN CÔNG 32. LỰC LƯỢNG AN NINH BẢO VỆ AN TOÀN NỮ NHÀ BÁO MADELEINE RIFFAUD THĂM VÙNG GIẢI PHÓNG MIỀN NAM VIỆT NAM",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện vai trò quan trọng của lực lượng An ninh trong công tác đảm bảo an ninh đối ngoại và đấu tranh trên mặt trận thông tin, tuyên truyền. Trong điều kiện chiến tranh ác liệt, việc bảo đảm an toàn cho nhà báo quốc tế vào thăm vùng giải phóng không chỉ đòi hỏi sự chặt chẽ, bí mật mà còn thể hiện tính chuyên nghiệp, trách nhiệm cao của lực lượng An ninh.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-32/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 33,
    "slug": "chien-cong-33",
    "title": "CHIẾN CÔNG 33. LỰC LƯỢNG AN NINH BÌNH PHƯỚC BẮT GIỮ BIỆT KÍCH, THÁM BÁO XÂM NHẬP VÙNG GIẢI PHÓNG LỘC NINH",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện tinh thần cảnh giác và hiệu quả của công tác an ninh trong vùng giải phóng. Tại khu vực Lộc Ninh, lực lượng An ninh đã kịp thời phát hiện, tổ chức vây bắt các toán biệt kích, thám báo xâm nhập, qua đó vô hiệu hóa âm mưu thu thập tin tức, phá hoại của địch.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-33/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 34,
    "slug": "chien-cong-34",
    "title": "CHIẾN CÔNG 34. LỰC LƯỢNG AN NINH VŨ TRANG T4 TIÊU DIỆT NGUYỄN VĂN BÔNG TRÊN ĐƯỜNG PHỐ SÀI GÒN (GIỮA BAN NGÀY)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện sự táo bạo, mưu trí và khả năng tác chiến ngay trong lòng đô thị của lực lượng An ninh vũ trang. Trong điều kiện địch kiểm soát chặt chẽ, việc tổ chức đánh trúng mục tiêu giữa ban ngày đã gây chấn động lớn, làm suy giảm uy thế của chính quyền đối phương và tạo tác động mạnh về tâm lý.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-34/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 35,
    "slug": "chien-cong-35",
    "title": "CHIẾN CÔNG 35. LỰC LƯỢNG AN NINH PHÚ YÊN PHỐI HỢP GIẢI THOÁT LUẬT SƯ NGUYỄN HỮU THỌ (NGÀY 30-10-1961)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện sự mưu trí, táo bạo và phối hợp chặt chẽ giữa lực lượng An ninh với các lực lượng vũ trang trong hoạt động đặc biệt quan trọng. Việc tổ chức giải thoát thành công luật sư Nguyễn Hữu Thọ - một nhân vật lãnh đạo có uy tín - đã góp phần tăng cường lực lượng cho cách mạng miền Nam, đồng thời tạo tiếng vang lớn về chính trị.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-35/cover.png",
    "imageCount": 1
  },
  {
    "id": 36,
    "slug": "chien-cong-36",
    "title": "CHIẾN CÔNG 36. LỰC LƯỢNG TRINH SÁT VŨ TRANG AN NINH T4 ĐÁNH HỎNG XE Ô TÔ CỦA NGUYỄN VĂN KIỂM - THIẾU TƯỚNG TƯ LỆNH BIỆT BỘ PHỦ TỔNG THỐNG NGỤY (NGÀY 1-2-1969)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện sự táo bạo, chính xác trong hoạt động tác chiến của lực lượng trinh sát vũ trang ngay trong lòng đô thị. Việc đánh trúng mục tiêu là phương tiện của một tướng lĩnh cao cấp không chỉ gây thiệt hại trực tiếp mà còn tác động mạnh đến tâm lý, làm suy giảm uy thế của đối phương.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-36/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 37,
    "slug": "chien-cong-37",
    "title": "CHIẾN CÔNG 37. LỰC LƯỢNG AN NINH T4 HÀNH QUÂN VỀ SÀI GÒN THAM GIA CHIẾN DỊCH HỒ CHÍ MINH (MÙA XUÂN NĂM 1975)",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện tinh thần khẩn trương, quyết tâm cao của lực lượng An ninh T4 trong giai đoạn quyết định của cuộc kháng chiến. Trên đường hành quân về Sài Gòn, cán bộ, chiến sĩ đã sẵn sàng thực hiện nhiệm vụ tiếp quản, bảo vệ mục tiêu trọng yếu và giữ gìn an ninh trật tự khi chiến dịch diễn ra.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-37/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 38,
    "slug": "chien-cong-38",
    "title": "CHIẾN CÔNG 38. LỰC LƯỢNG AN NINH ĐÀ NẴNG THU HỒI TÀI LIỆU CỦA ĐỊCH SAU GIẢI PHÓNG THÀNH PHỐ",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này diễn ra ngay sau khi Đà Nẵng được giải phóng, thể hiện sự nhanh nhạy, kịp thời của lực lượng An ninh trong tiếp quản địa bàn.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-38/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 39,
    "slug": "chien-cong-39",
    "title": "CHIẾN CÔNG 39. LỰC LƯỢNG AN NINH PHỐI HỢP ỦY BAN QUÂN QUẢN TỔ CHỨC TRÌNH DIỆN, PHÂN LOẠI VÀ QUẢN LÝ CÁC ĐỐI TƯỢNG LIÊN QUAN ĐẾN CHÍNH QUYỀN CŨ SAU GIẢI PHÓNG",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện vai trò chủ động, chặt chẽ của lực lượng An ninh trong giai đoạn tiếp quản và ổn định tình hình sau chiến tranh. Thông qua phối hợp với Ủy ban Quân quản, lực lượng An ninh đã tổ chức cho các đối tượng từng cộng tác với địch ra trình diện, tiến hành phân loại, quản lý và đưa vào diện cải tạo theo quy định.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-39/cover.png",
    "imageCount": 1
  },
  {
    "id": 40,
    "slug": "chien-cong-40",
    "title": "CHIẾN CÔNG 40. TIỂU BAN BẢO VỆ CHÍNH TRỊ HƯỚNG DẪN LỰC LƯỢNG AN NINH CÁC TỈNH THU GOM VŨ KHÍ, VẬT LIỆU NỔ SAU NGÀY MIỀN NAM HOÀN TOÀN GIẢI PHÓNG",
    "period": "1954-1975",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ MIỀN BẮC XÃ HỘI CHỦ NGHĨA, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM, THỐNG NHẤT ĐẤT NƯỚC",
    "periodAnchor": "giai-doan-1954-1975",
    "summary": "Chiến công này thể hiện vai trò chỉ đạo, tổ chức kịp thời của lực lượng An ninh trong giai đoạn hậu chiến. Thông qua việc hướng dẫn Ban An ninh các địa phương triển khai đồng bộ các biện pháp thu gom, quản lý vũ khí, vật liệu nổ còn sót lại, đã góp phần loại trừ nguy cơ mất an toàn, ngăn chặn việc sử dụng trái phép.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-40/cover.png",
    "imageCount": 2
  },
  {
    "id": 41,
    "slug": "chien-cong-41",
    "title": "CHIẾN CÔNG 41. ĐẤU TRANH, ĐƯA RA XÉT XỬ VỤ NỘI GIÁN NGUYỄN THÚC TUÂN TẠI TÒA ÁN NHÂN DÂN TỈNH THỪA THIÊN HUẾ (NGÀY 27-4-1980)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện hiệu quả của công tác an ninh trong phát hiện, điều tra và xử lý các đối tượng nội gián, phản bội Tổ quốc. Việc đưa vụ án ra xét xử công khai tại Thừa Thiên Huế đã góp phần răn đe, giáo dục, củng cố niềm tin của Nhân dân vào pháp luật và chính quyền.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-41/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 42,
    "slug": "chien-cong-42",
    "title": "CHIẾN CÔNG 42. ĐẤU TRANH, TRIỆT PHÁ VÀ ĐƯA RA XÉT XỬ TỔ CHỨC PHẢN ĐỘNG “DÂN QUÂN PHỤC QUỐC” TẠI THÀNH PHỐ HỒ CHÍ MINH (NGÀY 13-9-1976)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự kiên quyết của lực lượng An ninh trong đấu tranh với các tổ chức phản động chống phá chính quyền sau giải phóng. Việc đưa các đối tượng cầm đầu ra xét xử tại Thành phố Hồ Chí Minh với những bản án nghiêm khắc đã góp phần răn đe, làm tan rã tổ chức “Dân quân phục quốc”, ngăn chặn nguy cơ gây mất ổn định.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-42/image-01.jpg",
    "imageCount": 1
  },
  {
    "id": 43,
    "slug": "chien-cong-43",
    "title": "CHIẾN CÔNG 43. LỰC LƯỢNG AN NINH PHÁT HIỆN, BẮT GIỮ NGÔ ĐỨC TÙNG VÀ CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN ĐỘNG “ĐẢNG BẢO VỆ NHÂN QUYỀN” TẠI KON TUM",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, kịp thời của lực lượng An ninh trong nắm tình hình, phát hiện và ngăn chặn từ sớm các tổ chức phản động manh nha hình thành. Việc bắt giữ Ngô Đức Tùng cùng các đối tượng liên quan tại Kon Tum đã kịp thời làm tan rã tổ chức ngay từ khi mới nhen nhóm, không để phát triển thành lực lượng chống phá.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-43/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 44,
    "slug": "chien-cong-44",
    "title": "CHIẾN CÔNG 44. LỰC LƯỢNG AN NINH KHÁM XÉT, BÓC GỠ HOẠT ĐỘNG GIÁN ĐIỆP CỦA RICHARD WHITE, THU GIỮ PHƯƠNG TIỆN VÀ TÀI LIỆU TÌNH BÁO",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự sắc bén, chuyên nghiệp của lực lượng An ninh trong công tác phát hiện, đấu tranh với hoạt động gián điệp. Việc khám xét nơi ở của Richard White và thu giữ nhiều phương tiện, tài liệu tình báo đã góp phần làm rõ phương thức, thủ đoạn hoạt động, đồng thời ngăn chặn kịp thời nguy cơ lộ lọt bí mật.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-44/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 45,
    "slug": "chien-cong-45",
    "title": "CHIẾN CÔNG 45. ĐẤU TRANH, ĐƯA RA XÉT XỬ CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN ĐỘNG “DÂN QUÂN PHỤC QUỐC” (NĂM 1985)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự kiên quyết, bền bỉ của lực lượng An ninh trong việc truy quét, làm rõ và xử lý các tổ chức phản động hoạt động chống phá lâu dài. Việc tổ chức xét xử công khai các đối tượng cầm đầu đã góp phần răn đe, giáo dục, làm tan rã hoàn toàn tổ chức “Dân quân phục quốc”.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-45/image-01.jpg",
    "imageCount": 1
  },
  {
    "id": 46,
    "slug": "chien-cong-46",
    "title": "CHIẾN CÔNG 46. CÔNG AN TỈNH BẾN TRE KHÁM PHÁ VỤ ÁN PHẢN ĐỘNG “MẶT TRẬN QUỐC GIA LIÊN KẾT”, BẮT GIỮ ĐỐI TƯỢNG VÀ THU PHƯƠNG TIỆN HOẠT ĐỘNG (NGÀY 5-2-1978)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, sắc bén của lực lượng Công an trong phát hiện, điều tra và triệt phá các tổ chức phản động hoạt động bí mật. Tại Bến Tre, lực lượng An ninh đã kịp thời bóc gỡ tổ chức “Mặt trận quốc gia liên kết”, bắt giữ các đối tượng liên quan và thu giữ nhiều phương tiện phục vụ hoạt động chống phá.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-46/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 47,
    "slug": "chien-cong-47",
    "title": "CHIẾN CÔNG 47. LỰC LƯỢNG AN NINH PHÁT HIỆN, BÓC GỠ VỤ ÁN NC82 LIÊN QUAN ĐẾN CÁC ĐỐI TƯỢNG VĂN NGHỆ SĨ MÓC NỐI VỚI NHÂN VIÊN HCR TẠI THÀNH PHỐ HỒ CHÍ MINH",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự nhạy bén, sâu sát của lực lượng An ninh trong nắm tình hình, phát hiện các mối liên hệ phức tạp giữa một số đối tượng trong nước với yếu tố nước ngoài. Việc kịp thời đấu tranh, làm rõ các đối tượng trong vụ án NC82 móc nối với nhân viên HCR tại Thành phố Hồ Chí Minh đã góp phần ngăn chặn nguy cơ bị lợi dụng để thu thập thông tin, tuyên truyền chống phá.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-47/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 48,
    "slug": "chien-cong-48",
    "title": "CHIẾN CÔNG 48. LỰC LƯỢNG AN NINH TỈNH BÌNH THUẬN TỔ CHỨC BẮT GỌN CÁC ĐỐI TƯỢNG CẦM ĐẦU TỔ CHỨC PHẢN ĐỘNG “MẶT TRẬN PHỤC QUỐC CỨU NGUY DÂN TỘC” (NGÀY 18-1-1977)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự mưu trí, sáng tạo trong đấu tranh nghiệp vụ của lực lượng An ninh. Bằng việc chủ động bố trí phương tiện, tổ chức di chuyển các đối tượng theo kế hoạch, lực lượng An ninh tại Bình Thuận đã tạo thời cơ thuận lợi để bắt giữ toàn bộ các đối tượng cầm đầu một cách gọn, an toàn.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-48/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 49,
    "slug": "chien-cong-49",
    "title": "CHIẾN CÔNG 49. LỰC LƯỢNG AN NINH PHÁT HIỆN, ĐẨY ĐUỔI CÁC ĐỐI TƯỢNG GIÁN ĐIỆP NƯỚC NGOÀI NÚP BÓNG TÔN GIÁO HOẠT ĐỘNG CHỐNG PHÁ SAU NGÀY MIỀN NAM GIẢI PHÓNG",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự cảnh giác, kiên quyết của lực lượng An ninh trong đấu tranh với hoạt động gián điệp, lợi dụng tôn giáo để chống phá chính quyền. Sau ngày miền Nam hoàn toàn giải phóng, lực lượng An ninh đã kịp thời phát hiện và đẩy đuổi hơn 100 đối tượng người nước ngoài núp dưới vỏ bọc chức sắc tôn giáo nhằm thu thập tin tức, móc nối và tiến hành các hoạt động phá hoại.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-49/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 50,
    "slug": "chien-cong-50",
    "title": "CHIẾN CÔNG 50. CÔNG AN TỈNH KON TUM TRỤC XUẤT CÁC GIÁO SĨ CÓ HÀNH VI CHỐNG PHÁ CHÍNH QUYỀN TẠI TÒA GIÁM MỤC KON TUM (THÁNG 5-1975)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự kiên quyết, kịp thời của lực lượng Công an trong xử lý các hoạt động lợi dụng tôn giáo để chống phá chính quyền sau giải phóng. Tại Kon Tum, việc phát hiện và trục xuất 13 giáo sĩ có hành vi vi phạm đã góp phần ngăn chặn nguy cơ gây mất ổn định từ sớm.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-50/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 51,
    "slug": "chien-cong-51",
    "title": "CHIẾN CÔNG 51. LỰC LƯỢNG AN NINH BẮT GIỮ CÁC ĐỐI TƯỢNG THÁM BÁO XÂM NHẬP TẠI MA LY PHO, SÌN HỒ, LAI CHÂU (NGÀY 4/4/1981)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự cảnh giác, chủ động của lực lượng An ninh trong đấu tranh chống xâm nhập từ bên ngoài. Tại khu vực Ma Ly Pho, huyện Sìn Hồ, Lai Châu, lực lượng An ninh đã kịp thời phát hiện và bắt giữ các đối tượng thám báo",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-51/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 52,
    "slug": "chien-cong-52",
    "title": "CHIẾN CÔNG 52. LỰC LƯỢNG AN NINH THU HỒI HỒ SƠ, TÀI LIỆU CỦA ĐỊCH ĐỂ LẠI",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự nhanh nhạy, chủ động của lực lượng An ninh trong công tác tiếp quản và khai thác tài liệu sau các giai đoạn chiến sự. Việc kịp thời thu hồi, bảo quản và nghiên cứu khối hồ sơ, tài liệu do địch để lại đã giúp phục vụ hiệu quả công tác công an.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-52/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 53,
    "slug": "chien-cong-53",
    "title": "CHIẾN CÔNG 53. CÔNG AN TỈNH THỪA THIÊN HUẾ LẬP KẾ HOẠCH BÓC GỠ ĐẦU MỐI NỘI GIÁN NGUYỄN THÚC TUÂN (NĂM 1978)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, sắc bén của lực lượng An ninh trong phát hiện và đấu tranh với hoạt động nội gián sau chiến tranh. Tại Thừa Thiên Huế, lãnh đạo công an cùng lực lượng chuyên trách đã xây dựng kế hoạch nghiệp vụ chặt chẽ, từng bước bóc gỡ đầu mối nội gián Nguyễn Thúc Tuân, làm thất bại âm mưu chống phá lâu dài của đối phương.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-53/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 54,
    "slug": "chien-cong-54",
    "title": "CHIẾN CÔNG 54. CÔNG AN TỈNH BÌNH THUẬN GẶP GỠ, GIÁO DỤC, CẢM HÓA CỐT CÁN FULRO TRỞ VỀ VỚI CÁCH MẠNG",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện hiệu quả của công tác vận động quần chúng, giáo dục, cảm hóa trong đấu tranh với các tổ chức phản động. Tại Bình Thuận, lực lượng công an đã chủ động tiếp cận, gặp gỡ và giáo dục những đối tượng cốt cán của FULRO sau khi họ từ bỏ hoạt động chống phá.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-54/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 55,
    "slug": "chien-cong-55",
    "title": "CHIẾN CÔNG 55. LỰC LƯỢNG AN NINH BẮT GIỮ BÙI VĂN LAM SƠN (K14) - MẬT CỨ TRƯỞNG XÂM NHẬP TẠI XÃ KHÁNH HẢI (ĐÊM 23-3-1983)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự cảnh giác, kịp thời và hiệu quả của lực lượng An ninh trong đấu tranh chống xâm nhập. Khi đối tượng Bùi Văn Lam Sơn vừa thâm nhập vào địa bàn xã Khánh Hải, lực lượng An ninh đã nhanh chóng phát hiện, tổ chức vây bắt ngay tại khu vực mép nước, với sự tham gia trực tiếp của Hồ Viết Lắm.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-55/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 56,
    "slug": "chien-cong-56",
    "title": "CHIẾN CÔNG 56. LỰC LƯỢNG AN NINH BẮT GIỮ TRẦN VĂN BÁ (K09) - MẬT CỨ TRƯỞNG CHỈ HUY CHUYẾN XÂM NHẬP TẠI ĐẢO HÒN ĐÁ BẠC (ĐÊM 9-9-1984)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, sắc bén của lực lượng An ninh trong đấu tranh chống xâm nhập từ bên ngoài. Tại khu vực Hòn Đá Bạc, lực lượng An ninh đã kịp thời phát hiện và tổ chức bắt giữ Trần Văn Bá ngay khi đối tượng vừa chỉ huy chuyến xâm nhập vào địa bàn.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-56/image-01.jpg",
    "imageCount": 1
  },
  {
    "id": 57,
    "slug": "chien-cong-57",
    "title": "CHIẾN CÔNG 57. LỰC LƯỢNG AN NINH TRONG TRẬN ĐÁNH CUỐI CÙNG KẾ HOẠCH ĐN10 TẠI ĐẢO KÔ KÔNG KANG, BẮT GIỮ ĐỐI TƯỢNG VÀ THU NHIỀU VŨ KHÍ, PHƯƠNG TIỆN",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự mưu trí, kiên quyết và hiệu quả trong tổ chức đấu tranh chuyên án của lực lượng An ninh. Tại khu vực Koh Kong, trong trận đánh cuối cùng của Kế hoạch ĐN10, lực lượng An ninh đã phối hợp triển khai lực lượng, bắt giữ 7 đối tượng và thu giữ khoảng 2 tấn vũ khí, phương tiện.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-57/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 58,
    "slug": "chien-cong-58",
    "title": "CHIẾN CÔNG 58. LỰC LƯỢNG AN NINH TỔ CHỨC KIỂM TRA, PHÁT HIỆN VÀ THU HỒI CÁC ẤN PHẨM VĂN HÓA PHẢN ĐỘNG",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, sâu sát của lực lượng An ninh trên mặt trận tư tưởng - văn hóa. Thông qua công tác kiểm tra, rà soát và quản lý địa bàn, lực lượng An ninh đã kịp thời phát hiện, thu hồi nhiều ấn phẩm có nội dung phản động, ngăn chặn việc tuyên truyền, phát tán thông tin xấu độc.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-58/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 59,
    "slug": "chien-cong-59",
    "title": "CHIẾN CÔNG 59. LỰC LƯỢNG AN NINH TỈNH BẮC KẠN KHÁM PHÁ VỤ ÁN VẬN CHUYỂN, TIÊU THỤ TIỀN GIẢ",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự sắc bén, hiệu quả của lực lượng An ninh trong đấu tranh phòng, chống tội phạm kinh tế. Tại Bắc Kạn, lực lượng An ninh đã kịp thời phát hiện, triệt phá đường dây vận chuyển, tiêu thụ tiền giả, ngăn chặn hậu quả đối với nền kinh tế và đời sống xã hội.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-59/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 60,
    "slug": "chien-cong-60",
    "title": "CHIẾN CÔNG 60. LỰC LƯỢNG AN NINH THI HÀNH LỆNH TRỤC XUẤT LÊ QUỐC QUÂN TRONG CHUYÊN ÁN HM26, TRƯỚC SỰ CHỨNG KIẾN CỦA ĐẠI DIỆN ĐẠI SỨ QUÁN HOA KỲ",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự nghiêm minh, đúng pháp luật của cơ quan An ninh Việt Nam trong xử lý các đối tượng liên quan đến tổ chức chống phá. ",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-60/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 61,
    "slug": "chien-cong-61",
    "title": "CHIẾN CÔNG 61. CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN HÀ NỘI ĐẤU TRANH, LÀM RÕ HOẠT ĐỘNG GIÁN ĐIỆP CỦA MIRIAM TRONG GIỚI HỌC SINH, SINH VIÊN",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, kiên quyết của lực lượng An ninh trong đấu tranh trực diện với các đối tượng có hoạt động xâm phạm an ninh quốc gia. Tại Hà Nội, cơ quan an ninh đã tiến hành điều tra, đấu tranh làm rõ hoạt động gián điệp và tuyên truyền phá hoại tư tưởng của đối tượng Miriam trong môi trường học sinh, sinh viên.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-61/cover.jpg",
    "imageCount": 0
  },
  {
    "id": 62,
    "slug": "chien-cong-62",
    "title": "CHIẾN CÔNG 62. LỰC LƯỢNG AN NINH ĐÓN LÕNG TRÊN TUYẾN BIÊN GIỚI VIỆT NAM - CAMPUCHIA, THU GIỮ TÀI LIỆU VÀ PHƯƠNG TIỆN HOẠT ĐỘNG CỦA CÁC TỔ CHỨC PHẢN CÁCH MẠNG",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, kiên quyết của lực lượng An ninh trong đấu tranh ngăn chặn hoạt động xâm nhập từ bên ngoài. Trên tuyến biên giới Việt Nam - Campuchia, lực lượng An ninh đã tổ chức đón lõng, kiểm soát, kịp thời thu giữ toàn bộ tài liệu phản động và phương tiện hoạt động của các tổ chức chống phá khi tìm cách đưa vào nội địa.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-62/image-01.jpg",
    "imageCount": 2
  },
  {
    "id": 63,
    "slug": "chien-cong-63",
    "title": "CHIẾN CÔNG 63. LỰC LƯỢNG AN NINH CÔNG AN TỈNH LẠNG SƠN THU GIỮ HƠN 10.000 BĂNG ĐĨA LẬU (NGÀY 20/4/2011)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, quyết liệt của lực lượng An ninh trong đấu tranh phòng, chống vi phạm trên lĩnh vực văn hóa. Tại Lạng Sơn, việc phát hiện và thu giữ số lượng lớn băng đĩa lậu đã góp phần ngăn chặn hoạt động phát tán sản phẩm vi phạm pháp luật, bảo vệ môi trường văn hóa lành mạnh và quyền lợi của các tổ chức, cá nhân liên quan.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-63/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 64,
    "slug": "chien-cong-64",
    "title": "CHIẾN CÔNG 64. LỰC LƯỢNG AN NINH CÔNG AN THÀNH PHỐ HỒ CHÍ MINH BẮT GIỮ CÁC ĐỐI TƯỢNG NGƯỜI NƯỚC NGOÀI SỬ DỤNG CÔNG NGHỆ CAO LỪA ĐẢO QUA MẠNG (NĂM 2011)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự nhạy bén, kịp thời của lực lượng An ninh trong đấu tranh với tội phạm công nghệ cao. Thông qua công tác nắm tình hình và triển khai các biện pháp nghiệp vụ, lực lượng An ninh đã phát hiện, triệt phá nhóm đối tượng người nước ngoài sử dụng mạng internet để thực hiện hành vi lừa đảo.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-64/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 65,
    "slug": "chien-cong-65",
    "title": "CHIẾN CÔNG 65. LỰC LƯỢNG AN NINH CÔNG AN TỈNH THỪA THIÊN - HUẾ THU GIỮ TANG VẬT VI PHẠM TRONG LĨNH VỰC TRUYỀN THÔNG (NĂM 2011)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, kịp thời của lực lượng An ninh trong quản lý và đấu tranh trên không gian thông tin - truyền thông. Tại Thừa Thiên Huế, việc phát hiện, thu giữ tang vật của các đối tượng vi phạm đã góp phần ngăn chặn hành vi phát tán thông tin trái phép, bảo vệ môi trường thông tin lành mạnh.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-65/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 66,
    "slug": "chien-cong-66",
    "title": "CHIẾN CÔNG 66. LỰC LƯỢNG AN NINH CÔNG AN TỈNH LAI CHÂU PHÁT HIỆN, XỬ LÝ CÁC ĐỐI TƯỢNG TUYÊN TRUYỀN TRÁI PHÁP LUẬT LIÊN QUAN “HỘI THÁNH ĐỨC CHÚA TRỜI” (NĂM 2018)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, kịp thời của lực lượng An ninh trong nắm tình hình, quản lý hoạt động tôn giáo trên địa bàn. Tại Lai Châu, lực lượng An ninh đã phát hiện, thu giữ tang vật và xử lý các đối tượng tuyên truyền trái pháp luật liên quan đến Hội thánh Đức Chúa Trời.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-66/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 67,
    "slug": "chien-cong-67",
    "title": "CHIẾN CÔNG 67. CỤC NGOẠI TUYẾN PHỐI HỢP TRIỆT PHÁ ĐƯỜNG DÂY LÀM GIẢ VĂN BẰNG, CHỨNG CHỈ TRONG CÁC CHUYÊN ÁN H338, H339 TẠI HÀ NỘI (THÁNG 1-2018)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Nguồn: Ảnh tư liệu Chiến công này thể hiện sự phối hợp hiệu quả giữa các đơn vị nghiệp vụ trong đấu tranh với tội phạm có tổ chức. Thông qua triển khai đồng bộ các biện pháp nghiệp vụ, lực lượng an ninh đã bắt giữ, khám xét các đối tượng làm giả văn bằng, chứng chỉ, thu giữ nhiều tang vật liên quan.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-67/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 68,
    "slug": "chien-cong-68",
    "title": "CHIẾN CÔNG 68. CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN TỈNH PHÚ THỌ KHÁM PHÁ, ĐƯA RA XÉT XỬ VỤ ÁN NGUYỄN VĂN DƯƠNG - CẦM ĐẦU ĐƯỜNG DÂY ĐÁNH BẠC NGHÌN TỶ TRÊN MẠNG (NĂM 2018)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự quyết liệt, hiệu quả của lực lượng An ninh trong đấu tranh với tội phạm công nghệ cao quy mô lớn. Tại Phú Thọ, cơ quan an ninh đã điều tra, làm rõ vai trò chủ mưu của Nguyễn Văn Dương trong đường dây đánh bạc trực tuyến với quy mô đặc biệt nghiêm trọng.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-68/image-01.png",
    "imageCount": 1
  },
  {
    "id": 69,
    "slug": "chien-cong-69",
    "title": "CHIẾN CÔNG 69. LỰC LƯỢNG AN NINH CÔNG AN TỈNH THÁI NGUYÊN BẮT GIỮ NGUYỄN VĂN TRƯỜNG VỀ HÀNH VI LỢI DỤNG QUYỀN TỰ DO DÂN CHỦ XÂM PHẠM LỢI ÍCH NHÀ NƯỚC (NĂM 2018)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự kịp thời, kiên quyết của lực lượng An ninh trong đấu tranh với các hành vi vi phạm pháp luật trên không gian xã hội. Tại Thái Nguyên, lực lượng an ninh đã phát hiện, bắt giữ Nguyễn Văn Trường, làm rõ hành vi lợi dụng quyền tự do dân chủ để xâm phạm lợi ích của Nhà nước, tổ chức và cá nhân.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-69/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 70,
    "slug": "chien-cong-70",
    "title": "CHIẾN CÔNG 70. CỤC A05 TRIỆT PHÁ Ổ NHÓM GẦN 400 ĐỐI TƯỢNG SỬ DỤNG CÔNG NGHỆ CAO HOẠT ĐỘNG PHẠM TỘI TẠI KHU ĐÔ THỊ OUR CITY, HẢI PHÒNG (NĂM 2019)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự quyết liệt, chuyên nghiệp của lực lượng An ninh trong đấu tranh với tội phạm công nghệ cao có yếu tố nước ngoài. Tại Hải Phòng, lực lượng chức năng đã phát hiện, đột kích và triệt phá ổ nhóm quy mô lớn hoạt động tại khu đô thị Our City",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-70/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 71,
    "slug": "chien-cong-71",
    "title": "CHIẾN CÔNG 71. CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN TỈNH LÂM ĐỒNG BẮT GIỮ NGUYỄN ĐỨC QUỐC VƯỢNG VỀ HÀNH VI TUYÊN TRUYỀN CHỐNG NHÀ NƯỚC (NGÀY 23-9-2019)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, kiên quyết của lực lượng An ninh trong đấu tranh với các hành vi xâm phạm an ninh quốc gia trên không gian thông tin. Tại Lâm Đồng, cơ quan an ninh đã thi hành lệnh bắt giữ Nguyễn Đức Quốc Vượng, làm rõ hành vi tuyên truyền chống Nhà nước.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-71/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 72,
    "slug": "chien-cong-72",
    "title": "CHIẾN CÔNG 72. CƠ QUAN AN NINH CÔNG AN TỈNH AN GIANG KHÁM XÉT, THU GIỮ TANG VẬT TẠI NƠI Ở CỦA NGUYỄN VĂN PHƯỚC VỀ HÀNH VI CHỐNG PHÁ NHÀ NƯỚC (NGÀY 20-4-2019)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, kịp thời của lực lượng An ninh trong phát hiện, đấu tranh với các hành vi xâm phạm an ninh quốc gia. Tại An Giang, cơ quan an ninh đã tiến hành khám xét, thu giữ nhiều tang vật liên quan, qua đó làm rõ hành vi vi phạm của Nguyễn Văn Phước.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-72/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 73,
    "slug": "chien-cong-73",
    "title": "CHIẾN CÔNG 73. LỰC LƯỢNG AN NINH CÔNG AN TỈNH GIA LAI TỔ CHỨC KIỂM ĐIỂM, GIÁO DỤC CÁC ĐỐI TƯỢNG LIÊN QUAN “TIN LÀNH ĐỀ-GA” TẠI ĐỊA PHƯƠNG (NĂM 2018)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện hiệu quả của công tác dân vận, giáo dục, cảm hóa trong xử lý các vấn đề phức tạp liên quan đến tôn giáo. Tại Gia Lai, lực lượng an ninh đã tổ chức cho các đối tượng hoạt động liên quan Tin lành Đề-ga kiểm điểm, nhận thức rõ sai phạm, từ đó ổn định tình hình tại cơ sở.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-73/image-01.jpg",
    "imageCount": 1
  },
  {
    "id": 74,
    "slug": "chien-cong-74",
    "title": "CHIẾN CÔNG 74. CÔNG AN TỈNH HÀ TĨNH TRIỆT PHÁ ĐƯỜNG DÂY LỪA ĐẢO CHIẾM ĐOẠT HƠN 100 TỶ ĐỒNG TRÊN KHÔNG GIAN MẠNG (NĂM 2023)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự quyết liệt, hiệu quả của lực lượng An ninh trong đấu tranh với tội phạm công nghệ cao. Tại Hà Tĩnh, lực lượng công an đã khám phá chuyên án, triệt phá đường dây lừa đảo qua mạng quy mô lớn, khởi tố nhiều đối tượng, thu giữ nhiều tang vật.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-74/cover.jpg",
    "imageCount": 0
  },
  {
    "id": 75,
    "slug": "chien-cong-75",
    "title": "CHIẾN CÔNG 75. CỤC AN NINH MẠNG VÀ PHÒNG, CHỐNG TỘI PHẠM SỬ DỤNG CÔNG NGHỆ CAO PHỐI HỢP CÔNG AN TỈNH PHÚ YÊN TRIỆT PHÁ ĐƯỜNG DÂY ĐÁNH BẠC TRÊN MẠNG QUY MÔ KHOẢNG 1.000 TỶ ĐỒNG (NĂM 2024)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự quyết liệt, hiệp đồng chặt chẽ của lực lượng An ninh trong đấu tranh với tội phạm công nghệ cao. Tại Phú Yên, lực lượng chức năng đã triệt phá đường dây cá độ bóng đá qua mạng hoạt động tinh vi, với số tiền giao dịch từ tháng 5 đến 7-2024 lên tới khoảng 1.000 tỷ đồng.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-75/image-01.jpg",
    "imageCount": 2
  },
  {
    "id": 76,
    "slug": "chien-cong-76",
    "title": "CHIẾN CÔNG 76. CƠ QUAN AN NINH ĐIỀU TRA CÔNG AN TỈNH BẮC NINH TRIỆT PHÁ ĐƯỜNG DÂY SẢN XUẤT, BUÔN BÁN SÁCH GIÁO KHOA GIẢ LIÊN TỈNH (NĂM 2025)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự chủ động, sắc bén của lực lượng An ninh trong đấu tranh với tội phạm xâm phạm sở hữu trí tuệ và lĩnh vực giáo dục. Tại Bắc Ninh, lực lượng An ninh đã khám phá đường dây sản xuất, buôn bán sách giáo khoa giả quy mô lớn, hoạt động liên tỉnh; khởi tố các đối tượng cầm đầu và thu giữ hơn 185.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-76/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 77,
    "slug": "chien-cong-77",
    "title": "CHIẾN CÔNG 77. CÔNG AN TỈNH ĐẮK LẮK PHỐI HỢP CỤC AN NINH MẠNG TRIỆT PHÁ ĐƯỜNG DÂY LỪA ĐẢO CHIẾM ĐOẠT TÀI SẢN QUY MÔ LỚN TRÊN KHÔNG GIAN MẠNG (NĂM 2025)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự hiệp đồng chặt chẽ, sắc bén của lực lượng An ninh trong đấu tranh với tội phạm công nghệ cao. Tại Đắk Lắk, lực lượng công an đã triệt phá nhóm đối tượng lợi dụng không gian mạng để lừa đảo, giả danh tổ chức tín dụng, chiếm đoạt hàng chục đến hàng nghìn tỷ đồng của người dân; thu giữ nhiều thiết bị, dữ liệu và khởi tố các đối tượng liên quan.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-77/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 78,
    "slug": "chien-cong-78",
    "title": "CHIẾN CÔNG 78. LỰC LƯỢNG AN NINH NHÂN DÂN THAM GIA DIỄU BINH, DIỄU HÀNH VÀ BẢO VỆ TUYỆT ĐỐI AN NINH, AN TOÀN ĐẠI LỄ KỶ NIỆM 80 NĂM CÁCH MẠNG THÁNG TÁM NĂM 1945 VÀ QUỐC KHÁNH 2-9 (A80) NĂM 2025",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện khả năng tổ chức, hiệp đồng và bản lĩnh chính trị vững vàng của lực lượng An ninh trong bảo vệ các sự kiện chính trị đặc biệt quan trọng của đất nước. Trong suốt quá trình chuẩn bị và tổ chức Đại lễ tại Quảng trường Ba Đình, lực lượng An ninh đã chủ động nắm chắc tình hình, triển khai đồng bộ các phương án, kịp thời phát hiện, ngăn chặn mọi nguy cơ, bảo đảm tuyệt đối an ninh, an toàn, không để xảy ra bất kỳ sơ suất nào..",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-78/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 79,
    "slug": "chien-cong-79",
    "title": "CHIẾN CÔNG 79. CÔNG AN TỈNH KHÁNH HÒA PHÁT HIỆN, BẮT GIỮ TỘI PHẠM TRUY NÃ ĐỎ QUỐC TẾ ĐẶC BIỆT NGUY HIỂM",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện bản lĩnh, trình độ nghiệp vụ và tinh thần chủ động của lực lượng An ninh trong đấu tranh với tội phạm xuyên quốc gia. Thông qua công tác quản lý cư trú và nắm tình hình địa bàn, Công an tỉnh Khánh Hòa đã phát hiện, bắt giữ đối tượng Omokeev Ulukbek – tội phạm bị Interpol truy nã đỏ, liên quan đến đường dây vận chuyển khoảng 670kg heroin quốc tế.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-79/cover.jpg",
    "imageCount": 1
  },
  {
    "id": 80,
    "slug": "chien-cong-80",
    "title": "CHIẾN CÔNG 80. CÔNG AN TỈNH QUẢNG TRỊ PHỐI HỢP LỰC LƯỢNG AN NINH TRIỆT PHÁ CHUYÊN ÁN CHIẾM ĐOẠT TÀI SẢN VÀ RỬA TIỀN TRÊN KHÔNG GIAN MẠNG (NĂM 2026)",
    "period": "1975-nay",
    "periodTitle": "LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG VÀ BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA",
    "periodAnchor": "giai-doan-1975-nay",
    "summary": "Chiến công này thể hiện sự sắc bén, chủ động của lực lượng An ninh trong đấu tranh với tội phạm công nghệ cao. Tại Quảng Trị, lực lượng công an đã phối hợp với Cục An ninh mạng phát hiện, bắt giữ 4 đối tượng sử dụng thủ đoạn “đổi sim” để chiếm quyền kiểm soát tài khoản ngân hàng, chiếm đoạt hơn 23 tỷ đồng, sau đó rửa tiền qua tiền điện tử nhằm che giấu nguồn gốc.",
    "coverImage": "/images/chien-cong-noi-bat/chien-cong-80/cover.jpg",
    "imageCount": 1
  }
] satisfies AchievementCardItem[];
