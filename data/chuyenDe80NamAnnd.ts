export type ArticlePartBlock = {
  type: "part";
  id: string;
  label: string;
  title: string;
};

export type ArticleHeadingBlock = {
  type: "heading";
  id: string;
  level: 2 | 3 | 4;
  text: string;
};

export type ArticleParagraphBlock = {
  type: "paragraph";
  text: string;
  className?: string;
};

export type ArticleImageBlock = {
  type: "image";
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string | null;
  note?: string | null;
};

export type ArticleListBlock = {
  type: "list";
  ordered: boolean;
  items: string[];
};

export type ArticleBlock =
  | ArticlePartBlock
  | ArticleHeadingBlock
  | ArticleParagraphBlock
  | ArticleImageBlock
  | ArticleListBlock;

export type ArticleData = {
  title: string;
  description: string;
  source: string;
  imageDirectory: string;
  blocks: ArticleBlock[];
};

// Generated from documents/NỘI DUNG.docx. Image blocks with `note` need a quick manual review because DOCX stores some images inside the same paragraph as body text.
export const chuyenDe80NamAnndArticle: ArticleData = {
    "title":  "Chuyên đề 80 năm truyền thống lực lượng An ninh nhân dân",
    "description":  "Tìm hiểu chặng đường hình thành, chiến đấu, xây dựng và trưởng thành của lực lượng An ninh nhân dân Việt Nam.",
    "source":  "documents/NỘI DUNG.docx",
    "imageDirectory":  "/images/chuyen-de-80-nam-annd",
    "blocks":  [
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "loi-noi-dau",
                       "text":  "LỜI NÓI ĐẦU"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng An ninh nhân dân là lực lượng nòng cốt của Công an nhân dân Việt Nam, được Đảng, Nhà nước và Nhân dân tin cậy giao trọng trách bảo vệ Đảng, bảo vệ chính quyền cách mạng và bảo vệ an ninh quốc gia. Ra đời trong khí thế Cách mạng Tháng Tám năm 1945, lực lượng An ninh đã lập nhiều chiến công xuất sắc, tiêu biểu là cuộc tổng trấn áp Quốc dân đảng ngày 12/7/1946, góp phần bảo vệ chính quyền cách mạng non trẻ và nền độc lập dân tộc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trải qua 80 năm chiến đấu, xây dựng và trưởng thành, các thế hệ cán bộ, chiến sĩ An ninh luôn giữ vững phẩm chất “Tận trung với Đảng, đoàn kết hiệp đồng, mưu trí sáng tạo, quyết thắng”, không ngại gian khổ, hy sinh, hoàn thành xuất sắc nhiệm vụ được giao. Với truyền thống vẻ vang đó, lực lượng An ninh nhân dân tiếp tục là “lá chắn bình yên”, bảo vệ Đảng, Nhà nước, Nhân dân và sự phát triển bền vững của đất nước."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-01.png",
                       "width":  2580,
                       "height":  1824,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "part",
                       "id":  "phan-i",
                       "label":  "Phần I",
                       "title":  "NGÀY TRUYỀN THỐNG LỰC LƯỢNG AN NINH NHÂN DÂN – Ý NGHĨA LỊCH SỬ VÀ NHỮNG PHẦN THƯỞNG CAO QUÝ MÀ ĐẢNG, NHÀ NƯỚC TRAO TẶNG"
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "ngay-truyen-thong-cua-luc-luong-an-ninh-nhan-dan",
                       "text":  "I. NGÀY TRUYỀN THỐNG CỦA LỰC LƯỢNG AN NINH NHÂN DÂN"
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "boi-canh-lich-su",
                       "text":  "1. BỐI CẢNH LỊCH SỬ"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-02.jpg",
                       "width":  640,
                       "height":  431,
                       "alt":  "Những người trong vụ Hà thành đầu độc bị thực dân Pháp bắt giam tại Hà Nội.",
                       "caption":  "Những người trong vụ Hà thành đầu độc bị thực dân Pháp bắt giam tại Hà Nội.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cuối thế kỷ XIX, triều đình nhà Nguyễn để đất nước rơi vào tay thực dân Pháp. Dưới ách thống trị của thực dân Pháp, các tầng lớp, giai cấp trong xã hội Việt Nam không chỉ bị bóc lột về kinh tế mà còn chịu nỗi nhục của người dân mất nước. Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp và phản động tay sai ngày càng sâu sắc. Độc lập, tự do là khát vọng của cả dân tộc Việt Nam. Nhiệm vụ cứu nước được đặt ra vô cùng cấp thiết. Các phong trào yêu nước, chống thực dân Pháp của nhân dân Việt Nam đã diễn ra sôi nổi, mạnh mẽ, quyết liệt. Cuối thế kỷ XIX, phong trào Cần vương (1885 - 1896) - một phong trào đấu tranh vũ trang dưới ngọn cờ phong kiến diễn ra trong suốt 1 thập kỷ. Sang đầu thế kỷ XX, các phong trào yêu nước tiếp thu hệ tư tưởng dân chủ tư sản xuất hiện. Lịch sử dân tộc chứng kiến những nỗ lực không mệt mỏi của cácNhun sĩ phu yêu nước như Phan Bội Châu, Phan Châu Trinh... Các tiền bối đã vượt qua hạn chế về nguồn gốc xuất thân (chế độ phong kiến), tiếp thu tư tưởng mới, gắn cứu nước với cứu dân. Tuy nhiên, cho đến những năm 20 của thế kỷ XX, các phong trào đấu tranh chống thực dân Pháp đều thất bại. Nguyên nhân chính là do thiếu giai cấp lãnh đạo tiên tiến, thiếu khả năng tổ chức, thiếu đường lối đấu tranh đúng đắn. Phong trào yêu nước ở Việt Nam rơi vào tình trạng khủng hoảng “đen tối như không có đường ra”."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-03.jpg",
                       "width":  1052,
                       "height":  709,
                       "alt":  "Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3-2-1930. Nguồn: TTXVN.",
                       "caption":  "Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3-2-1930. Nguồn: TTXVN.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bước ngoặt có ý nghĩa quyết định đối với tiến trình phát triển của cách mạng Việt Nam xuất hiện khi Đảng Cộng sản Đông Dương ra đời vào đầu năm 1930 dưới sự sáng lập và lãnh đạo của Hồ Chí Minh. Đây là sự kiện lịch sử đặc biệt quan trọng, đánh dấu bước chuyển biến căn bản trong phong trào đấu tranh giải phóng dân tộc của nhân dân Việt Nam. Trước đó, mặc dù tinh thần yêu nước của nhân dân ta luôn dâng cao và nhiều phong trào đấu tranh chống thực dân Pháp đã nổ ra mạnh mẽ, song các phong trào ấy vẫn chưa thể giành được thắng lợi cuối cùng do thiếu một đường lối cách mạng đúng đắn, thiếu một tổ chức lãnh đạo thống nhất và một hệ tư tưởng cách mạng khoa học soi đường. Sự ra đời của Đảng đã chấm dứt tình trạng khủng hoảng về đường lối cứu nước kéo dài trong xã hội Việt Nam đầu thế kỷ XX, đồng thời mở ra một con đường phát triển mới cho cách mạng Việt Nam – con đường giải phóng dân tộc gắn liền với giải phóng giai cấp và tiến lên chủ nghĩa xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngay từ khi thành lập, Đảng đã xác định rõ nhiệm vụ chiến lược của cách mạng Việt Nam là đánh đổ ách thống trị của chủ nghĩa thực dân, lật đổ chế độ phong kiến tay sai, giành độc lập dân tộc và mang lại quyền làm chủ cho nhân dân lao động. Dưới sự lãnh đạo của Đảng, phong trào cách mạng của quần chúng nhân dân nhanh chóng phát triển mạnh mẽ trên phạm vi cả nước, thu hút đông đảo các tầng lớp nhân dân tham gia, từ công nhân, nông dân đến trí thức, tiểu thương và các tầng lớp yêu nước khác. Những năm đầu sau khi Đảng ra đời đã chứng kiến sự bùng nổ của phong trào đấu tranh cách mạng với quy mô rộng lớn và khí thế sôi nổi."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-04.png",
                       "width":  641,
                       "height":  344,
                       "alt":  "Phong trò Xô viết Nghệ - Tĩnh (1930 – 1931). Ảnh: Tranh sơn dầu",
                       "caption":  "Phong trào Xô viết Nghệ - Tĩnh (1930 – 1931). Ảnh: Tranh sơn dầu",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tiêu biểu cho cao trào cách mạng giai đoạn này là phong trào Xô viết Nghệ - Tĩnh (1930 - 1931). Đây là cuộc đấu tranh cách mạng mạnh mẽ của công nhân và nông dân hai tỉnh Nghệ An và Hà Tĩnh dưới sự lãnh đạo trực tiếp của Đảng. Trong phong trào này, quần chúng nhân dân đã nổi dậy đấu tranh chống lại chính quyền thực dân phong kiến, thành lập các chính quyền cách mạng ở nhiều địa phương, thực hiện nhiều chính sách tiến bộ như giảm sưu thuế, chia ruộng đất cho nông dân nghèo, xây dựng đời sống mới cho nhân dân lao động. Mặc dù phong trào bị thực dân Pháp đàn áp khốc liệt và tạm thời thất bại, nhưng Xô viết Nghệ - Tĩnh đã trở thành minh chứng sinh động cho sức mạnh to lớn của quần chúng nhân dân khi được tổ chức và lãnh đạo đúng đắn, đồng thời khẳng định vai trò lãnh đạo của Đảng đối với cách mạng Việt Nam."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-05.png",
                       "width":  600,
                       "height":  300,
                       "alt":  "Phong trào dân chủ từ 1936 đến 1939 phát triển mạnh mẽ và tổ chức dưới sự lãnh đạo của Đảng. Ảnh: Tư liệu.",
                       "caption":  "Phong trào dân chủ từ 1936 đến 1939 phát triển mạnh mẽ và tổ chức dưới sự lãnh đạo của Đảng. Ảnh: Tư liệu.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sau giai đoạn đấu tranh quyết liệt đầu những năm 1930, phong trào cách mạng tiếp tục phát triển trong điều kiện mới. Từ năm 1936 đến năm 1939, trước những biến chuyển của tình hình thế giới và trong nước, Đảng đã kịp thời điều chỉnh chiến lược và phương pháp đấu tranh, phát động phong trào dân chủ rộng lớn trong cả nước. Phong trào này hướng tới mục tiêu chống phát xít, chống chiến tranh, đòi các quyền tự do dân chủ, cải thiện đời sống cho nhân dân. Hàng loạt cuộc vận động chính trị, các cuộc mít tinh, biểu tình và đấu tranh nghị trường đã diễn ra sôi nổi, thu hút đông đảo quần chúng tham gia. Phong trào dân chủ không chỉ góp phần nâng cao nhận thức chính trị của nhân dân mà còn mở rộng lực lượng cách mạng, tạo tiền đề quan trọng cho những bước phát triển tiếp theo của phong trào giải phóng dân tộc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong bối cảnh Chiến tranh thế giới thứ hai bùng nổ và ngày càng lan rộng trên phạm vi toàn cầu, tình hình chính trị – xã hội tại Đông Dương nói chung và Việt Nam nói riêng đã có những biến động sâu sắc. Cuộc chiến tranh giữa các cường quốc đế quốc không chỉ làm thay đổi cục diện thế giới mà còn tác động trực tiếp đến các nước thuộc địa, trong đó có Việt Nam. Thực dân Pháp vốn đang nắm quyền cai trị tại Đông Dương ngày càng suy yếu trước sức ép của chiến tranh và những biến động quốc tế. Trong bối cảnh đó, các thế lực phát xít, đặc biệt là Nhật Bản, đã tìm cách mở rộng ảnh hưởng và chiếm đóng nhiều khu vực ở châu Á nhằm phục vụ cho tham vọng bành trướng của mình."
                   },
                    {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-06.jpg",
                       "width":  600,
                       "height":  600,
                       "alt":  "Các đơn vị quân đội Nhật vào Lạng Sơn, tháng 9-1940. Ảnh: Tư liệu.",
                       "caption":  "Các đơn vị quân đội Nhật vào Lạng Sơn, tháng 9-1940. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Năm 1940, phát xít Nhật tiến quân vào Đông Dương và buộc chính quyền thực dân Pháp tại đây phải chấp nhận cho quân đội Nhật đóng quân và sử dụng Đông Dương làm căn cứ quân sự phục vụ chiến tranh. Từ thời điểm đó, nhân dân Việt Nam rơi vào tình cảnh đặc biệt đau thương khi phải chịu sự áp bức, bóc lột của hai thế lực thống trị cùng lúc: một bên là thực dân Pháp với bộ máy cai trị lâu đời, một bên là phát xít Nhật với chính sách vơ vét tàn bạo nhằm phục vụ cho chiến tranh. Tình cảnh này thường được nhân dân gọi là “một cổ hai tròng”, phản ánh rõ sự chồng chất của hai ách thống trị ngoại bang trên đất nước Việt Nam."
                    },
                    {
                        "type":  "image",
                        "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-07.jpg",
                        "width":  1023,
                        "height":  783,
                        "alt":  "Nạn đói năm 1945. Ảnh: Tư liệu.",
                        "caption":  "Nạn đói năm 1945. Ảnh: Tư liệu.",
                        "note":  null
                    },
                   {
                       "type":  "paragraph",
                       "text":  "Dưới sự thống trị của cả thực dân Pháp và phát xít Nhật, nền kinh tế vốn đã lạc hậu và lệ thuộc của Việt Nam lại càng bị khai thác đến kiệt quệ. Thực dân Pháp tiếp tục duy trì hệ thống sưu cao thuế nặng và bóc lột tàn nhẫn đối với nhân dân lao động, trong khi phát xít Nhật tiến hành vơ vét lương thực, nguyên liệu và nhân lực để phục vụ cho guồng máy chiến tranh của mình. Nhiều diện tích đất trồng lúa của nông dân bị buộc phải chuyển sang trồng cây công nghiệp như đay và bông để cung cấp nguyên liệu cho Nhật. Hệ thống vận tải và lương thực bị kiểm soát chặt chẽ, khiến việc lưu thông hàng hóa trở nên khó khăn, đời sống nhân dân ngày càng lâm vào cảnh thiếu thốn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Những chính sách bóc lột tàn bạo ấy đã dẫn đến hậu quả đặc biệt nghiêm trọng đối với đời sống nhân dân Việt Nam. Đỉnh điểm của sự khủng hoảng là Nạn đói năm 1945 ở Việt Nam, một trong những thảm họa nhân đạo lớn nhất trong lịch sử dân tộc. Chỉ trong một thời gian ngắn, nạn đói đã cướp đi sinh mạng của hơn hai triệu người dân vô tội, chủ yếu tập trung ở các tỉnh miền Bắc và miền Trung. Hình ảnh những đoàn người đói khát lang thang khắp nơi, những xác người chết đói nằm bên đường, trên bờ ruộng hay trước cửa chợ đã trở thành nỗi ám ảnh đau thương trong ký ức của cả dân tộc. Đây không chỉ là hậu quả của thiên tai mà chủ yếu là do chính sách bóc lột và vơ vét tàn nhẫn của thực dân Pháp và phát xít Nhật đối với nhân dân Việt Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chính trong hoàn cảnh vô cùng khắc nghiệt ấy, tinh thần yêu nước và ý chí đấu tranh của nhân dân Việt Nam càng được hun đúc mạnh mẽ hơn bao giờ hết. Nỗi căm phẫn trước sự áp bức, bóc lột của các thế lực xâm lược đã trở thành động lực mạnh mẽ thúc đẩy quần chúng nhân dân đứng lên đấu tranh giành lại quyền sống, quyền tự do và quyền làm chủ vận mệnh của mình. Khát vọng độc lập dân tộc, khát vọng thoát khỏi ách thống trị của ngoại bang đã lan rộng trong mọi tầng lớp xã hội, từ công nhân, nông dân đến trí thức và các tầng lớp yêu nước khác. Tất cả đã tạo nên một làn sóng đấu tranh mạnh mẽ, chuẩn bị những điều kiện quan trọng cả về tinh thần và lực lượng cho cuộc tổng khởi nghĩa giành chính quyền sau này."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đầu năm 1945, tình hình thế giới và trong nước có những chuyển biến hết sức nhanh chóng và mang tính quyết định đối với vận mệnh của dân tộc Việt Nam. Khi Chiến tranh thế giới thứ hai bước vào giai đoạn cuối, cục diện chiến tranh nghiêng hẳn về phía phe Đồng minh, các nước phát xít lần lượt lâm vào thế thất bại. Những biến động to lớn của tình hình quốc tế đã tác động trực tiếp đến khu vực Đông Dương, làm cho bộ máy cai trị của các thế lực thực dân và phát xít tại đây rơi vào tình trạng khủng hoảng nghiêm trọng. Đây chính là tiền đề quan trọng tạo ra thời cơ thuận lợi cho phong trào cách mạng ở Việt Nam phát triển mạnh mẽ."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-08.jpg",
                       "width":  480,
                       "height":  480,
                       "alt":  "Toàn quyền Đông Dương Đờ Cu đón tướng Nhật sau ngày Nhật đảo chính Pháp.",
                       "caption":  "Toàn quyền Đông Dương Đờ Cu đón tướng Nhật sau ngày Nhật đảo chính Pháp.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 9 tháng 3 năm 1945, phát xít Nhật bất ngờ tiến hành cuộc Đảo chính Nhật – Pháp tại Đông Dương năm 1945, lật đổ hoàn toàn bộ máy thống trị của thực dân Pháp vốn đã tồn tại ở Đông Dương suốt nhiều thập kỷ. Chỉ trong một thời gian rất ngắn, toàn bộ hệ thống chính quyền của thực dân Pháp bị tan rã, nhiều quan chức và binh lính Pháp bị bắt giữ hoặc buộc phải đầu hàng. Sau cuộc đảo chính này, phát xít Nhật độc chiếm Đông Dương và dựng lên một chính quyền bù nhìn nhằm phục vụ cho mục đích thống trị và khai thác của mình. Tuy nhiên, do đang ở giai đoạn suy yếu của chiến tranh, chính quyền Nhật tại Đông Dương không đủ khả năng kiểm soát chặt chẽ tình hình như trước. Bộ máy cai trị trở nên rệu rã, quyền lực thực tế ở nhiều địa phương bị suy giảm nghiêm trọng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trước tình hình mới đó, phong trào cách mạng Việt Nam đã có những bước chuyển biến mạnh mẽ. Dưới sự lãnh đạo của Đảng Cộng sản Đông Dương và Hồ Chí Minh, chủ trương phát động cao trào kháng Nhật cứu nước đã nhanh chóng được triển khai rộng khắp trong cả nước. Các lực lượng cách mạng được củng cố và phát triển, nhiều căn cứ cách mạng được xây dựng, lực lượng quần chúng ngày càng được tổ chức chặt chẽ và sẵn sàng cho cuộc đấu tranh giành chính quyền. Tinh thần đấu tranh của nhân dân ngày càng dâng cao, tạo nên một khí thế cách mạng sôi nổi trên khắp các vùng miền của đất nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đến tháng 8 năm 1945, tình hình thế giới tiếp tục có những biến chuyển có lợi cho cách mạng Việt Nam. Sau những thất bại liên tiếp trên chiến trường, ngày 15/8/1945, phát xít Nhật chính thức tuyên bố đầu hàng Đồng minh vô điều kiện. Sự kiện này đã làm cho chính quyền tay sai của Nhật tại Đông Dương hoàn toàn rơi vào tình trạng tê liệt, tạo ra một khoảng trống quyền lực lớn trong toàn bộ hệ thống chính trị. Trong khi đó, các thế lực thực dân cũ chưa kịp quay trở lại, còn bộ máy cai trị của Nhật thì mất khả năng điều hành xã hội. Đây chính là thời điểm đặc biệt thuận lợi cho cách mạng Việt Nam tiến hành cuộc tổng khởi nghĩa giành chính quyền."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nắm bắt đúng thời cơ lịch sử “ngàn năm có một”, Đảng Cộng sản Đông Dương và Hồ Chí Minh đã kịp thời đưa ra quyết định phát động Tổng khởi nghĩa Tháng Tám năm 1945 trên phạm vi toàn quốc. Lời hiệu triệu của Đảng và lãnh tụ Hồ Chí Minh đã nhanh chóng được nhân dân cả nước hưởng ứng mạnh mẽ. Từ nông thôn đến thành thị, từ miền núi đến đồng bằng, hàng triệu quần chúng nhân dân đã nhất tề đứng lên đấu tranh giành chính quyền. Chỉ trong một thời gian ngắn, chính quyền cách mạng đã lần lượt được thiết lập ở nhiều địa phương, mở ra bước ngoặt vĩ đại trong lịch sử dân tộc Việt Nam. Có thể nói rằng, những chuyển biến to lớn của tình hình quốc tế và trong nước vào đầu năm 1945 đã tạo ra thời cơ đặc biệt thuận lợi cho cách mạng Việt Nam. Với sự lãnh đạo sáng suốt của Đảng và Hồ Chí Minh, cùng với tinh thần đoàn kết và ý chí đấu tranh mạnh mẽ của toàn thể nhân dân, dân tộc Việt Nam đã tận dụng thành công thời cơ lịch sử để đứng lên giành lại chính quyền, mở đường cho sự ra đời của nhà nước mới – nhà nước của nhân dân, do nhân dân và vì nhân dân."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-09.jpg",
                       "width":  900,
                       "height":  600,
                       "alt":  "Chỉ trong vòng 15 ngày cuối tháng 8/1945, cuộc tổng khởi nghĩa đã giành thắng lợi hoàn toàn, chính quyền trong cả nước về tay nhân dân.",
                       "caption":  "Chỉ trong vòng 15 ngày cuối tháng 8/1945, cuộc tổng khởi nghĩa đã giành thắng lợi hoàn toàn, chính quyền trong cả nước về tay nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chỉ trong một thời gian ngắn của tháng Tám năm 1945, dưới sự lãnh đạo sáng suốt của Đảng Cộng sản Đông Dương và Hồ Chí Minh, cuộc Cách mạng Tháng Tám năm 1945 đã diễn ra với khí thế sôi nổi và lan rộng khắp cả nước. Từ các thành thị lớn đến nông thôn, từ miền xuôi đến miền ngược, hàng triệu quần chúng nhân dân đã đồng loạt đứng lên tham gia khởi nghĩa, giành chính quyền về tay mình. Trong bầu không khí cách mạng dâng cao, các cuộc biểu tình, mít tinh và nổi dậy của quần chúng diễn ra liên tiếp, làm cho bộ máy chính quyền tay sai của phát xít Nhật nhanh chóng sụp đổ."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-10.jpg",
                       "width":  800,
                       "height":  527,
                       "alt":  "Nhân dân tham gia mít tinh và biểu tình tại quảng trường Nhà hát Lớn. Ảnh: Tư liệu.",
                       "caption":  "Nhân dân tham gia mít tinh và biểu tình tại quảng trường Nhà hát Lớn. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tại Hà Nội, ngày 19 tháng 8 năm 1945, hàng chục vạn nhân dân đã xuống đường tham gia mít tinh và biểu tình tại quảng trường Nhà hát Lớn, sau đó tiến hành chiếm giữ các cơ quan quan trọng của chính quyền cũ, đánh dấu thắng lợi của cuộc khởi nghĩa ở thủ đô. Sự kiện này có ý nghĩa đặc biệt quan trọng, cổ vũ mạnh mẽ phong trào cách mạng trên phạm vi toàn quốc. Ngay sau đó, phong trào khởi nghĩa tiếp tục lan rộng và giành thắng lợi ở nhiều địa phương khác. Tại Huế, trung tâm của triều đình phong kiến nhà Nguyễn, nhân dân và lực lượng cách mạng đã giành chính quyền vào ngày 23/8/1945, buộc triều đình phong kiến phải tuyên bố thoái vị, chấm dứt hàng nghìn năm chế độ quân chủ ở Việt Nam. Tiếp đó, ngày 25/ 8/1945, chính quyền cách mạng cũng được thiết lập tại Sài Gòn và nhiều tỉnh thành khác ở Nam Bộ. Chỉ trong vòng nửa tháng, chính quyền cách mạng đã được thành lập ở hầu khắp các địa phương trên cả nước, đánh dấu thắng lợi trọn vẹn của cuộc tổng khởi nghĩa."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-11.jpg",
                       "width":  870,
                       "height":  452,
                       "alt":  "Ngày 2-9-1945, tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh đọc bản “Tuyên ngôn độc lập”, khai sinh ra nước Việt Nam Dân chủ Cộng hòa. Ảnh tư liệu",
                       "caption":  "Ngày 2-9-1945, tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh đọc bản “Tuyên ngôn độc lập”, khai sinh ra nước Việt Nam Dân chủ Cộng hòa. Ảnh tư liệu",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thắng lợi của Cách mạng Tháng Tám năm 1945 là một bước ngoặt vĩ đại trong lịch sử dân tộc Việt Nam. Cuộc cách mạng đã lật đổ hoàn toàn ách thống trị của thực dân và chế độ phong kiến tồn tại trong nhiều thập kỷ, mở ra một kỷ nguyên mới cho đất nước kỷ nguyên độc lập dân tộc và tự do cho nhân dân. Từ đây, nhân dân Việt Nam không còn là những người dân mất nước phải sống dưới ách áp bức của ngoại bang, mà đã trở thành những người làm chủ đất nước, làm chủ vận mệnh của chính mình. Đây cũng là thắng lợi của tinh thần đoàn kết toàn dân tộc, của truyền thống yêu nước bất khuất và ý chí đấu tranh kiên cường của nhân dân Việt Nam dưới sự lãnh đạo của Đảng. Sau thắng lợi của cuộc khởi nghĩa, nhiệm vụ cấp bách đặt ra là phải nhanh chóng tuyên bố nền độc lập của dân tộc trước toàn thể nhân dân trong nước và bạn bè quốc tế. Ngày 2/9/1945, tại Quảng trường Ba Đình, trước hàng chục vạn đồng bào từ khắp mọi miền đất nước tụ họp về thủ đô, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời long trọng đọc Tuyên ngôn Độc lập, tuyên bố trước toàn thể quốc dân và thế giới rằng: “Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã trở thành một nước tự do độc lập”. Bản tuyên ngôn lịch sử không chỉ khẳng định quyền độc lập, tự do của dân tộc Việt Nam mà còn thể hiện ý chí sắt đá của toàn dân tộc trong việc bảo vệ nền độc lập ấy."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chính quyền cách mạng vừa ra đời lập tức phải đối diện với tình thế vô cùng hiểm nghèo: Bộ máy thống trị cũ tuy bị đánh đổ nhưng lực lượng phản cách mạng chưa bị quét sạch; các đảng phái phản động, tay sai, mật thám, lưu manh chính trị còn nhiều; thù trong, giặc ngoài cấu kết; bộ máy nhà nước mới còn non trẻ; nền tài chính kiệt quệ; nạn đói, nạn dốt đe dọa; quân Tưởng kéo vào miền Bắc, thực dân Pháp âm mưu quay trở lại. Trong tình thế đó, việc nhanh chóng thành lập một lực lượng đủ sức bảo vệ Đảng, bảo vệ chính quyền, trấn áp phản cách mạng, giữ gìn an ninh, trật tự là một yêu cầu cấp bách mang tính sống còn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đập tan các cơ quan đàn áp của địch và thiết lập chính quyền cách mạng trong cả nước, các tổ chức đầu tiên của lực lượng Công an nhân dân đã ra đời ở cả ba miền. Theo các tài liệu chính thức của Bộ Công an, ở Bắc Bộ thành lập Sở Liêm phóng Bắc Bộ; ở Trung Bộ thành lập Sở Trinh sát Trung Bộ; ở Nam Bộ thành lập Quốc gia tự vệ cuộc Nam Bộ. Đây là những tổ chức Công an đầu tiên của Nhà nước cách mạng Việt Nam, được thành lập phù hợp với điều kiện lịch sử, chính trị và tổ chức của từng miền, nhưng đều có chung nhiệm vụ là bảo vệ chính quyền cách mạng, trấn áp phản cách mạng, giữ gìn an ninh, trật tự và bảo vệ cuộc sống bình yên của Nhân dân. Ở giai đoạn này, dù chưa có tên gọi thống nhất trên phạm vi cả nước, song về thực chất, đó chính là những tổ chức đầu tiên của lực lượng Công an nhân dân Việt Nam. Việc hình thành đồng thời các tổ chức đó ở ba miền cho thấy chính quyền cách mạng ngay từ đầu đã nhận thức rất rõ tầm quan trọng của công tác an ninh, trật tự và chủ động xây dựng lực lượng chuyên trách làm nhiệm vụ ấy."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-12.jpg",
                       "width":  940,
                       "height":  389,
                       "alt":  "Đội Tự vệ đỏ ở Hòa Quân, Đông Sở, Nghệ An trong cao trào Xô viết Nghệ - Tĩnh năm 1930.",
                       "caption":  "Đội Tự vệ đỏ ở Hòa Quân, Đông Sở, Nghệ An trong cao trào Xô viết Nghệ - Tĩnh năm 1930.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-13.jpg",
                       "width":  507,
                       "height":  651,
                       "alt":  "Sắc lệnh số 23/SL, hợp nhất các lực lượng cảnh sát và liêm phóng thành Việt Nam Công an vụ, đặt dưới quyền quản lý của Bộ Nội vụ. Ảnh: Tư liệu.",
                       "caption":  "Sắc lệnh số 23/SL, hợp nhất các lực lượng cảnh sát và liêm phóng thành Việt Nam Công an vụ, đặt dưới quyền quản lý của Bộ Nội vụ. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sự ra đời của Sở Liêm phóng, Sở Trinh sát và Quốc gia tự vệ cuộc có ý nghĩa hết sức to lớn. Một mặt, nó đáp ứng yêu cầu tức thời của chính quyền cách mạng non trẻ là phải có lực lượng đủ năng lực trấn áp phản cách mạng, bảo vệ cơ quan Đảng, chính quyền, bảo vệ cán bộ, bảo vệ các địa bàn trọng yếu. Mặt khác, về lâu dài, đó là bước khởi đầu của quá trình hình thành một lực lượng vũ trang cách mạng mang tính nhà nước, có chức năng đặc biệt trong việc giữ gìn an ninh quốc gia và trật tự xã hội. Điều này càng có ý nghĩa khi ta thấy rằng ngay lúc ấy, đất nước ta chưa có đủ điều kiện để xây dựng một bộ máy hoàn chỉnh, nhưng chính quyền cách mạng vẫn ưu tiên tổ chức lực lượng công an bởi an ninh chính trị và trật tự xã hội là điều kiện tiên quyết để giữ vững chính quyền. Như vậy, ngay trong phút đầu của Nhà nước cách mạng, lực lượng Công an nhân dân đã được đặt đúng vị trí là một lực lượng trọng yếu trong bộ máy quyền lực của nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng Công an cách mạng phát triển bền vững, không chỉ cần có các tổ chức sơ khai ở ba miền mà còn cần có một cơ sở pháp lý, một mô hình tổ chức thống nhất trên phạm vi cả nước. Thực tiễn đấu tranh cuối năm 1945 và đầu năm 1946 cho thấy, nếu không sớm thống nhất về tổ chức, chỉ huy và chức năng nhiệm vụ, thì lực lượng sẽ khó đáp ứng yêu cầu bảo vệ chính quyền cách mạng trong bối cảnh tình hình ngày càng phức tạp. Trên cơ sở đó, ngày 21/2/1946, Chủ tịch Hồ Chí Minh ký Sắc lệnh số 23/SL, hợp nhất các lực lượng cảnh sát và liêm phóng thành Việt Nam Công an vụ, đặt dưới quyền quản lý của Bộ Nội vụ. Đây là một bước ngoặt có ý nghĩa rất quan trọng, bởi từ đây lực lượng Công an cách mạng được xác lập thành một tổ chức thống nhất về mặt tên gọi và hệ thống quản lý ở cấp trung ương."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-14.jpg",
                       "width":  876,
                       "height":  614,
                       "alt":  "Ảnh: Nghị định số 121-NgĐ ngày 18/4/1946 của Bộ Nội Vụ.",
                       "caption":  "Ảnh: Nghị định số 121-NgĐ ngày 18/4/1946 của Bộ Nội Vụ.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 18/4/1946, Bộ Nội vụ ban hành Nghị định số 121-NV/NĐ về tổ chức Việt Nam Công an vụ. Theo nghị định này, bộ máy Công an được tổ chức thành ba cấp: Công an Việt Nam ở trung ương, Công an kỳ ở Bắc, Trung, Nam và Công an tỉnh ở địa phương. Một số tài liệu của Bộ Công an diễn giải cụ thể hơn: ở Trung ương gọi là Nha Công an Việt Nam, ở Bắc, Trung, Nam gọi là Sở Công an, còn ở tỉnh là Ty Công an. Đây là văn bản pháp lý có ý nghĩa nền tảng trong lịch sử ra đời và phát triển của Công an nhân dân Việt Nam, vì lần đầu tiên lực lượng Công an được quy định một cách tương đối đầy đủ về cơ cấu tổ chức, sự chỉ huy và phạm vi hoạt động trên phạm vi cả nước. Có thể nói, nếu như thắng lợi của Cách mạng Tháng Tám và sự ra đời của các tổ chức Sở Liêm phóng, Sở Trinh sát, Quốc gia tự vệ cuộc là bước ra đời trong thực tiễn, thì Sắc lệnh 23/SL và Nghị định 121-NV/NĐ là sự xác lập về mặt pháp lý, tổ chức và nhà nước đối với lực lượng CAND Việt Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sự kiện ban hành Sắc lệnh số 23/SL và Nghị định số 121-NV/NĐ không chỉ có giá trị về mặt hành chính, mà còn có ý nghĩa chiến lược đối với sự nghiệp bảo vệ Nhà nước cách mạng. Từ đây, lực lượng Công an nhân dân có điều kiện phát triển theo hướng chính quy hơn, có sự chỉ huy thống nhất hơn và có cơ sở để mở rộng hoạt động trên toàn quốc. Trong điều kiện cả nước chuẩn bị bước vào cuộc kháng chiến lâu dài chống thực dân Pháp xâm lược trở lại, việc có một lực lượng công an thống nhất là cực kỳ quan trọng để bảo vệ an ninh chính trị nội bộ, bảo vệ cơ quan đầu não, bảo vệ bí mật quốc gia, đấu tranh chống phản động, gián điệp, phá hoại và giữ gìn trật tự trong vùng tự do cũng như vùng mới giải phóng. Nhờ có nền tảng tổ chức ấy, Công an nhân dân mới có thể đồng hành cùng toàn dân, toàn quân bảo vệ thành quả cách mạng trong những năm tháng đầy thử thách tiếp theo."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Khi viết về sự ra đời của Công an nhân dân, cũng cần nhấn mạnh rằng trong lòng lực lượng Công an cách mạng ngay từ buổi đầu đã hàm chứa những nội dung rất cốt lõi của công tác an ninh. Ngay từ Sở Liêm phóng, Sở Trinh sát hay Quốc gia tự vệ cuộc, nhiệm vụ bảo vệ chính trị, nắm tình hình phản động, chống gián điệp, trấn áp phản cách mạng, bảo vệ cơ quan Đảng và chính quyền đã là nhiệm vụ trung tâm. Chính từ thực tiễn ấy, lực lượng An ninh nhân dân về sau được hình thành như một bộ phận nòng cốt, trực tiếp chiến đấu trên mặt trận bảo vệ an ninh quốc gia. Nói cách khác, sự ra đời của Công an nhân dân chính là cái nôi tổ chức, cái nền lịch sử và pháp lý để lực lượng An ninh nhân dân ra đời, trưởng thành và phát triển. Vì thế, muốn hiểu đúng về sự ra đời của lực lượng An ninh nhân dân, trước hết phải hiểu đầy đủ bối cảnh lịch sử, các tổ chức tiền thân và tiến trình ra đời của Công an nhân dân Việt Nam."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-15.jpg",
                       "width":  940,
                       "height":  469,
                       "alt":  "Lực lượng Liêm phóng và Cảnh sát tự vệ Bắc Bộ bảo vệ lễ Tuyên ngôn độc lập tại Quảng trường Ba Đình ngày 2/9/1945. Ảnh tư liệu.",
                       "caption":  "Lực lượng Liêm phóng và Cảnh sát tự vệ Bắc Bộ bảo vệ lễ Tuyên ngôn độc lập tại Quảng trường Ba Đình ngày 2/9/1945. Ảnh tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhìn từ toàn bộ tiến trình lịch sử, có thể thấy rõ một logic rất chặt chẽ. Từ sự ra đời của Đảng Cộng sản Việt Nam năm 1930, cách mạng Việt Nam có lực lượng lãnh đạo và đường lối đúng đắn; từ đó hình thành các tổ chức quần chúng và bán vũ trang làm nhiệm vụ bảo vệ phong trào; thắng lợi của Cách mạng Tháng Tám 1945 đặt ra yêu cầu phải xây dựng ngay bộ máy chuyên trách bảo vệ chính quyền cách mạng; các tổ chức Sở Liêm phóng, Sở Trinh sát, Quốc gia tự vệ cuộc ra đời ở ba miền là bước phát triển trực tiếp; tiếp đến Sắc lệnh 23/SL ngày 21/2/1946 và Nghị định 121-NV/NĐ ngày 18/4/1946 hoàn thiện bước đầu về mặt pháp lý và tổ chức. Toàn bộ tiến trình đó chứng minh rằng Công an nhân dân Việt Nam ra đời là một tất yếu lịch sử, vừa bắt nguồn từ yêu cầu khách quan của sự nghiệp cách mạng, vừa là kết quả của tầm nhìn chiến lược và sự lãnh đạo sáng suốt của Đảng, Chính phủ cách mạng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Các thế hệ hôm nay thấy rõ rằng lực lượng Công an nhân dân không sinh ra trong hòa bình, càng không ra đời để đảm nhiệm những công việc hành chính đơn thuần, mà xuất hiện từ những đòi hỏi khốc liệt nhất của cách mạng Việt Nam: phải bảo vệ Đảng, bảo vệ chính quyền, bảo vệ nhân dân ngay trong lúc vận mệnh dân tộc ở vào tình thế vô cùng hiểm nghèo. Vì vậy, trong bản chất của mình, Công an nhân dân là lực lượng của Đảng, của Nhà nước, từ Nhân dân mà ra, vì Nhân dân mà chiến đấu. Chính cội nguồn lịch sử ấy tạo nên truyền thống tuyệt đối trung thành, mưu trí, dũng cảm, kiên quyết tiến công, dựa vào dân và gắn bó máu thịt với dân của lực lượng suốt 80 năm qua."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Các tổ chức tiền thân và sự ra đời của Công an nhân dân không chỉ là phần mở đầu về lịch sử tổ chức, mà còn là phần có ý nghĩa nền tảng về nhận thức. Nó giúp đặt đúng vị trí của lực lượng Công an nhân dân trong tiến trình cách mạng Việt Nam; làm rõ rằng lực lượng này ra đời từ yêu cầu khách quan của việc giành và giữ chính quyền cách mạng; đồng thời chỉ ra cội nguồn hình thành của các lực lượng chuyên trách bên trong Công an nhân dân, trong đó có lực lượng An ninh nhân dân. Chính từ nền tảng ấy, các lực lượng của Công an nhân dân mới từng bước phát triển, lớn mạnh, lập nên nhiều chiến công xuất sắc trong sự nghiệp bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội và bảo vệ cuộc sống bình yên của Nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nếu kể từ ngày 1-9-1858, khi thực dân Pháp chính thức nổ súng mở đầu xâm lược nước ta tại bán đảo Sơn Trà (Đà Nẵng) đến ngày 2-9-1945, khi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, đất nước ta đã trải qua 87 năm dưới ách đô hộ của thực dân Pháp và phát xít Nhật. Đó là quãng thời gian Việt Nam bị nước ngoài đô hộ dài nhất kể từ năm 938, khi Ngô Quyền đánh thắng quân xâm lược Nam Hán, khôi phục nền độc lập. Trong thời kỳ thuộc địa, chủ quyền đất nước đã mất, tên nước không còn trên bản đồ thế giới, lẫn vào địa danh “xứ Đông Dương thuộc Pháp”. Tổ quốc bị chia thành ba miền với ba chế độ chính trị khác nhau để thực dân Pháp dễ bề cai trị. Các cuộc khởi nghĩa, đấu tranh đòi độc lập, quyền tự chủ cho đất nước đều bị dìm trong bể máu. Chính hoàn cảnh lịch sử ấy đã khẳng định tầm vóc vĩ đại, giá trị vô cùng to lớn của cuộc hồi sinh nền độc lập, tự do của dân tộc mà Cách mạng Tháng Tám là mốc son chói lọi. Trên địa đồ thế giới, tên nước ta đã bị xóa nhòa dưới bốn chữ “Đông Dương thuộc Pháp”. Thực dân Pháp gọi đồng bào ta là lũ Annamít dơ bẩn. Thiên hạ gọi chúng ta là vong quốc nô... Trong tình cảnh nước mất nhà tan đó, Đảng ta đã vượt biết bao hy sinh, nguy hiểm để tổ chức, đoàn kết và lãnh đạo nhân dân ta nổi lên chiến đấu. Cách mạng Tháng Tám thành công. Nước Việt Nam Dân chủ Cộng hòa ra đời. Kháng chiến chống thực dân Pháp thắng lợi. Nhân dân ta tự làm chủ vận mạng của mình. Tên tuổi của nước ta lại lẫy lừng khắp năm châu, bốn biển”."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "su-ra-doi-cua-luc-luong-an-ninh-nhan-dan-ngay-12-7-1946",
                       "text":  "2. SỰ RA ĐỜI CỦA LỰC LƯỢNG AN NINH NHÂN DÂN NGÀY 12/7/1946"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-16.jpg",
                       "width":  800,
                       "height":  566,
                       "alt":  "Hưởng ứng lời kêu gọi của Chủ tịch Hồ Chí Minh, người dân trong cả nước đã tích cực góp gạo cứu đói cho đồng bào. Ảnh: Tư liệu.",
                       "caption":  "Hưởng ứng lời kêu gọi của Chủ tịch Hồ Chí Minh, người dân trong cả nước đã tích cực góp gạo cứu đói cho đồng bào. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sự kiện lịch sử ngày 2/9/1945 đã chính thức khai sinh ra nhà nước Việt Nam Dân chủ Cộng hòa, nhà nước công nông đầu tiên ở khu vực Đông Nam Á. Đây là nhà nước của nhân dân, do nhân dân và vì nhân dân, được xây dựng trên nền tảng của khối đại đoàn kết toàn dân tộc và lý tưởng độc lập dân tộc gắn liền với chủ nghĩa xã hội. Sự ra đời của nước Việt Nam Dân chủ Cộng hòa không chỉ có ý nghĩa to lớn đối với lịch sử dân tộc Việt Nam mà còn cổ vũ mạnh mẽ phong trào đấu tranh giải phóng dân tộc ở nhiều quốc gia thuộc địa trên thế giới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Khi chính quyền cách mạng vừa được thành lập, đất nước ta phải đối mặt với vô vàn khó khăn và thử thách. Nhà nước cách mạng còn rất non trẻ, nền kinh tế kiệt quệ sau nhiều năm chiến tranh và áp bức, trong khi đó các thế lực phản động trong và ngoài nước không ngừng tìm cách chống phá nhằm lật đổ chính quyền mới thành lập. Chính vì vậy, yêu cầu cấp thiết đặt ra là phải nhanh chóng xây dựng một lực lượng chuyên trách có đủ bản lĩnh, trí tuệ và lòng trung thành tuyệt đối để bảo vệ Đảng, bảo vệ chính quyền cách mạng và bảo vệ thành quả cách mạng của nhân dân."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-17.jpg",
                       "width":  800,
                       "height":  438,
                       "alt":  "Kỳ họp thứ nhất Quốc hội khóa I của nước Việt Nam Dân chủ Cộng hòa diễn ra ngày 2/3/1946 tại Nhà hát Lớn Hà Nội. (Ảnh tư liệu).",
                       "caption":  "Kỳ họp thứ nhất Quốc hội khóa I của nước Việt Nam Dân chủ Cộng hòa diễn ra ngày 2/3/1946 tại Nhà hát Lớn Hà Nội. (Ảnh tư liệu).",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ở Bắc Bộ, quân đội Trưởng Giới Thạch ngay khi đặt chân đến Hà Nội đã ngang nhiên chiếm quyền giữ gìn trật tự, trị an; chiếm đóng các địa điểm quan trọng, kiểm soát các cửa ô lớn ra vào thành phố; giúp Việt quốc, Việt cách củng cố tổ chức, phát triển cơ sở, tập hợp lực lượng chống phá chính quyền cách mạng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Để tránh cùng một lúc phải đối phó với nhiều kẻ thù, Đảng ta, đứng đầu là Chủ tịch Hồ Chí Minh đã thực hiện sách lược tạm thời hòa hoãn với quân đội Trung Hoa Dân Quốc theo khẩu hiệu “Hoa - Việt thân thiện”, tập trung chống thực dân Pháp xâm lược. Ở những nơi có quân đội Trung Hoa Dân Quốc đóng, ta thành lập “Ban Liên lạc Việt Hoa”. Lực lượng Liêm phóng, Trinh sát nhiều nơi đã cử cán bộ tham gia Ban này để nắm tình hình và hòa giải khi có việc rắc rối giữa quân đội Trung Hoa Dân Quốc với ta."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-18.jpg",
                       "width":  888,
                       "height":  539,
                       "alt":  "Lực lượng cảnh sát hộ tống đoàn xe chở Chủ tịch Hồ Chí Minh và các thành viên chính phủ lâm thời tiến vào Quảng trường Ba Đình. Ảnh: Tư liệu.",
                       "caption":  "Lực lượng cảnh sát hộ tống đoàn xe chở Chủ tịch Hồ Chí Minh và các thành viên chính phủ lâm thời tiến vào Quảng trường Ba Đình. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng Liêm phóng Bắc Bộ và Trinh sát Trung Bộ đã cùng các ngành, đoàn thể cứu quốc vạch trần âm mưu của phản động tay sai, nghiêm khắc lên án những hành động bắt cóc, tống tiền, giết người của chúng ở Hà Nội và các nơi khác. Đồng thời sử dụng các biện pháp quản lý công khai, trinh sát bí mật, kịp thời ngăn chặn, bắt một số cầm đầu đảng phái phản động, tay sai của Pháp, như: Nguyễn Xuân Chữ, cầm đầu bù nhìn trong “Ủy ban Chính trị”; Cung Đình Vận, Tuần phủ Thái Nguyên; Nguyễn Thế Nghiệp, Nguyễn Ngọc Sơn, thủ lĩnh Quốc dân đảng và Đại Việt quốc gia. Ngày 20/11/1945, lực lượng Liêm phóng Kiến An, có sự hỗ trợ của Cảnh sát xung phong Hải Phòng, đã trấn áp phản động Việt Nam Quốc dân đảng ở nhà Bảo Hương, bắt 43 tên, thu 24 súng, đập tan âm mưu gây bạo loạn. Cuối năm 1945, Liêm phóng Bắc Bộ ngăn chặn kịp thời hoạt động phá hoại của Quốc dân đảng ở Ngân hàng Đông Dương."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-19.png",
                       "width":  1661,
                       "height":  1342,
                       "alt":  "Một số địa điểm bọn phản động Quốc dân đảng chiếm giữ, công khai lập trụ sở và làm nơi giam cầm, tra tấn cán bộ và nhân dân ta. Ảnh: Tư liệu.",
                       "caption":  "Một số địa điểm bọn phản động Quốc dân đảng chiếm giữ, công khai lập trụ sở và làm nơi giam cầm, tra tấn cán bộ và nhân dân ta. Ảnh: Tư liệu.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhiệm vụ bảo vệ chính quyền cách mạng, bảo vệ Nhân dân vốn đã khó khăn lại càng khó khăn bội phần khi lực lượng còn quá mỏng, nghiệp vụ đánh địch còn đơn giản. Nhưng thế hệ cán bộ, chiến sĩ đầu tiên của lực lượng An ninh nhân dân đã vượt qua hoàn cảnh khó khăn, dựa vào Nhân dân; sau gần một năm kiên trì đấu tranh, đã khéo léo vận dụng pháp luật, trấn áp nhiều tổ chức phản động manh động chống chính quyền, bắt và trừng trị nhiều tay sai chỉ điểm, từng bước vô hiệu hoá hoạt động chống phá của các thế lực nội phản câu kết với giặc ngoại xâm. Kết quả đó đã góp phần từng bước đây lùi âm mưu của các thế lực nội phản; phá vỡ thế liên kết giữa thù trong với giặc ngoài; tạo điều kiện để Chính phủ triển khai những chính sách mới, củng cố chính quyền cơ sở, nâng cao một bước đời sống vật chất và giác ngộ chính trị cho Nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngay sau khi nền độc lập được tuyên bố, dưới sự lãnh đạo trực tiếp của Hồ Chí Minh và Đảng, các tổ chức bảo vệ an ninh cách mạng đã nhanh chóng được hình thành và từng bước củng cố. Trong những ngày đầu của chính quyền cách mạng, nhiều tổ chức tiền thân của lực lượng an ninh như Sở Liêm phóng, Sở Cảnh sát, các Ban trinh sát đặc biệt và các tổ chức bảo vệ chính quyền ở địa phương đã được thành lập. Nhiệm vụ chủ yếu của các lực lượng này là phát hiện, ngăn chặn và đấu tranh với các hoạt động chống phá của các tổ chức phản cách mạng, bảo vệ an toàn cho các cơ quan lãnh đạo của Đảng và Nhà nước, đồng thời giữ gìn trật tự, ổn định xã hội trong bối cảnh tình hình chính trị còn rất phức tạp."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong giai đoạn đầu của chính quyền cách mạng, các thế lực phản động trong nước cấu kết với các thế lực bên ngoài đã ra sức thực hiện nhiều âm mưu phá hoại, gây rối loạn chính trị, kích động bạo loạn và âm mưu lật đổ chính quyền nhân dân. Chúng lợi dụng tình hình khó khăn của đất nước để tuyên truyền chống phá, tổ chức các hoạt động gián điệp, khủng bố và kích động chia rẽ khối đại đoàn kết dân tộc. Trước tình hình đó, lực lượng bảo vệ an ninh cách mạng tuy còn non trẻ, thiếu thốn về lực lượng, phương tiện và kinh nghiệm, nhưng với tinh thần cách mạng kiên cường, tuyệt đối trung thành với Đảng và nhân dân, các cán bộ, chiến sĩ đã nhanh chóng tổ chức đấu tranh, từng bước làm thất bại nhiều âm mưu chống phá của các thế lực thù địch."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một dấu mốc đặc biệt quan trọng trong quá trình hình thành và trưởng thành của lực lượng an ninh là chiến công khám phá và triệt phá Vụ án Ôn Như Hầu năm 1946. Ngày 12 tháng 7 năm 1946, lực lượng công an cách mạng đã phát hiện và đập tan âm mưu đảo chính của các tổ chức phản động, thu giữ nhiều tài liệu và chứng cứ quan trọng chứng minh những hoạt động chống phá chính quyền cách mạng. Chiến công này không chỉ góp phần bảo vệ vững chắc chính quyền non trẻ của nước Việt Nam Dân chủ Cộng hòa mà còn khẳng định bản lĩnh, trí tuệ và sự trưởng thành nhanh chóng của lực lượng bảo vệ an ninh cách mạng. Từ sự kiện này, ngày 12 tháng 7 hằng năm được xác định là Ngày truyền thống của lực lượng An ninh nhân dân."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-20.jpg",
                       "width":  500,
                       "height":  262,
                       "alt":  "Trụ sở Quốc dân đảng ở số 7 phố Ôn Như Hầu (nay là phố Nguyễn Gia Thiều, Hà Nội), nơi ta tìm thấy 6 xác người bị chúng thủ tiêu và nhiều dụng cụ tra tấn khác. Ảnh: Tư liệu.",
                       "caption":  "Trụ sở Quốc dân đảng ở số 7 phố Ôn Như Hầu (nay là phố Nguyễn Gia Thiều, Hà Nội), nơi ta tìm thấy 6 xác người bị chúng thủ tiêu và nhiều dụng cụ tra tấn khác. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong những ngày đầu lập quốc, khi Hà Nội còn chìm trong không khí căng thẳng của năm 1946, lực lượng An ninh nhân dân, với tinh thần thép và bản lĩnh kiên cường, bất ngờ phong tỏa số 7 phố Ôn Như Hầu, nay là phố Nguyễn Gia Thiều. Chỉ trong vài giờ, lực lượng An ninh nhân dân triệt phá thành công âm mưu đảo chính của các đảng phái phản động với sự hậu thuẫn từ các thế lực thù địch, đế quốc bên ngoài, nhằm lật đổ chính quyền cách mạng non trẻ do Chủ tịch Hồ Chí Minh dẫn dắt. Hơn 300 đối tượng bị bắt giữ, hàng chục súng ngắn, lựu đạn, hàng trăm truyền đơn kêu gọi lật đổ chính quyền, cùng tài liệu mật liên kết với quân Tưởng và thực dân Pháp bị thu giữ. Những bằng chứng tội ác như dụng cụ tra tấn và bảy xác chết chôn sau sân nhà được phơi bày, hé lộ sự tàn bạo của những kẻ phản bội khát vọng độc lập dân tộc. Chiến thắng ấy là cột mốc vàng son trong lịch sử lực lượng An ninh nhân dân, minh chứng rực rỡ cho bản lĩnh, trí tuệ, và lòng trung thành tuyệt đối với Tổ quốc và dân tộc Việt Nam trong thời khắc hiểm nghèo. Hơn bảy thập kỷ trôi qua, khi Việt Nam vươn mình mạnh mẽ giữa cơn lốc địa chính trị toàn cầu, di sản 12/7/1946 vẫn tỏa sáng, soi đường cho công cuộc bảo vệ an ninh quốc gia và xây dựng đất nước hùng cường."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "boi-canh-lich-su-vu-an-on-nhu-hau",
                       "text":  "Bối cảnh lịch sử của vụ án Ôn Như Hầu"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Hậu Thế chiến thứ hai, thế giới rơi vào trạng thái hỗn loạn, với các cường quốc như Mỹ, Anh, Pháp, và Trung Hoa Dân Quốc của Tưởng Giới Thạch tranh giành ảnh hưởng để tái định hình trật tự toàn cầu. Đông Dương, trong đó có Việt Nam, trở thành tâm điểm của những toan tính địa chính trị. Thỏa ước Yalta và Hội nghị Potsdam 7/1945 phân chia Đông Nam Á vào phạm vi kiểm soát của phe Đồng minh, đẩy Việt Nam vào vòng xoáy của các thế lực ngoại bang. Quân đội Tưởng Giới Thạch, với hơn 180.000 quân, tràn vào miền Bắc Việt Nam, danh nghĩa giải giáp quân Nhật, nhưng thực chất nhằm thiết lập một chính quyền tay sai, phục vụ lợi ích của Trung Hoa Dân Quốc. Quân Tưởng tổ chức các cuộc biểu tình và tuần hành tại Hà Nội, phối hợp với các đảng phái phản động để gây áp lực, tạo cớ lật đổ chính quyền cách mạng. Ở miền Nam, quân Anh, với sự hậu thuẫn ngầm của Mỹ, hỗ trợ thực dân Pháp tái chiếm Nam Kỳ, dập tắt ngọn lửa cách mạng vừa nhen nhóm."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-21.jpg",
                       "width":  1000,
                       "height":  667,
                       "alt":  "Trụ sở của Việt Nam Quốc dân đảng tại nhà số 132 Bùi Thị Xuân. Ảnh: Tư liệu.",
                       "caption":  "Trụ sở của Việt Nam Quốc dân đảng tại nhà số 132 Bùi Thị Xuân. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong bối cảnh ấy, 2/9/1945, tại Quảng trường Ba Đình, Bác Hồ, với tầm nhìn chiến lược và ý chí bất khuất, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa, đánh dấu bước ngoặt lịch sử đưa dân tộc Việt Nam từ thân phận nô lệ bước lên vị thế độc lập."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhưng chính quyền cách mạng non trẻ đối mặt với muôn vàn thử thách, tựa như ngọn đèn trước gió. Ở miền Bắc, quân Tưởng uy hiếp trực tiếp, ép buộc Việt Minh nhượng bộ, chia sẻ quyền lực với các đảng phái phản động như Việt Nam Quốc dân Đảng (Việt Quốc) và Đồng Minh Hội (Việt Cách). Các đảng phái này, được Tưởng hậu thuẫn về tài chính và vũ khí, âm mưu lật đổ chính quyền cách mạng, lập ra một chính phủ thân ngoại bang. Ở miền Nam, 23/9/1945, quân Pháp, được quân Anh - Ấn hỗ trợ, dùng vũ lực lật đổ chính quyền Việt Minh tại Sài Gòn, mở đầu cho cuộc tái xâm lược tàn bạo. Giữa muôn vàn khó khăn, nhân dân Hà Nội vẫn một lòng hướng về Bác Hồ và Việt Minh, tụ họp đông đảo tại các cuộc mít-tinh, giương cao cờ đỏ sao vàng, thể hiện niềm tin mãnh liệt vào chính quyền cách mạng. Sự đoàn kết ấy là nền tảng vững chắc cho những chiến thắng lịch sử, trong đó có vụ án Ôn Như Hầu."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong “Bình Ngô Đại cáo”, Anh hùng dân tộc Nguyễn Trãi đã có câu: “Tuy mạnh yếu từng lúc khác nhau, song hào kiệt đời nào cũng có”. Thật vậy, khi vận mệnh dân tộc tựa như “ngàn cân treo sợi tóc”, Hồ Chủ tịch đã thể hiện bản lĩnh ngoại giao phi thường. Quyết định ký Hiệp định Sơ bộ 6/3/1946 với Pháp, dù gây tranh cãi, là một nước cờ táo bạo để loại bỏ quân Tưởng - mối đe dọa trực tiếp hơn - đồng thời kéo dài thời gian chuẩn bị cho cuộc kháng chiến lâu dài. Quyết định này đòi hỏi sự đánh đổi lớn lao, khi Bác Hồ đối mặt với những lời vu khống từ các đảng phái phản động, cáo buộc Người “bán nước”!? Trong một khoảnh khắc kịch tính, 7/3/1946, trước 100.000 đồng bào Hà Nội, một quả lựu đạn nổ ngay trên bục tam cấp trước khi Hồ Chủ tịch bước tới micro. Với sự kiên định, Người khẳng định: “Tôi thà chết chứ quyết không bán nước”. Lời tuyên bố ấy lay động lòng dân, củng cố niềm tin mãnh liệt vào chính quyền cách mạng, dập tan những luận điệu xuyên tạc."
                   },
                    {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-22.jpg",
                       "width":  441,
                       "height":  345,
                       "alt":  "Nhà số 7 tại phố Ôn Như Hầu. Ảnh: Tư liệu.",
                       "caption":  "Nhà số 7 tại phố Ôn Như Hầu. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chính trong bối cảnh rối ren ấy, âm mưu đảo chính tại số 7 phố Ôn Như Hầu bùng nổ như một mối đe dọa trực tiếp. Âm mưu này, được chuẩn bị từ cuối 1945, do các thế lực phản động, được quân Tưởng hậu thuẫn và phối hợp ngầm với thực dân Pháp, dự định lợi dụng 14/7/1946, ngày Quốc khánh Pháp, để ném lựu đạn vào quân Pháp đang diễu binh tại Hà Nội, tạo cớ cho Pháp tấn công các cơ quan trung ương, bắt giữ lãnh đạo Việt Minh, và dựng lên một chính phủ thân ngoại bang. Âm mưu này không chỉ nhằm lật đổ chính quyền mà còn là sự thách thức trắng trợn đối với khát vọng độc lập của dân tộc. Dưới sự chỉ đạo của quyền Chủ tịch nước Huỳnh Thúc Kháng và Bộ trưởng Nội vụ Võ Nguyên Giáp, lực lượng An ninh nhân dân, dù mới thành lập với nguồn lực hạn chế, đã thể hiện năng lực tình báo và phản gián xuất sắc. Bộ trưởng Võ Nguyên Giáp, với sự quyết đoán và tầm nhìn chiến lược, trực tiếp chỉ đạo chuyên án, đảm bảo hành động nhanh gọn, chính xác. Qua nhiều tháng theo dõi sát sao, lực lượng An ninh nhân dân, với sự nhạy bén và cảnh giác cách mạng, thu thập được những chứng cứ xác thực, từ danh sách đối tượng đến các kế hoạch chi tiết."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-23.jpg",
                       "width":  470,
                       "height":  306,
                       "alt":  "Đội trinh sát đặc biệt, đơn vị chủ chốt trấn áp bọn phản động Quốc dân đảng ngày 12-7-1946. Ảnh: Tư liệu.",
                       "caption":  "Đội trinh sát đặc biệt, đơn vị chủ chốt trấn áp bọn phản động Quốc dân đảng ngày 12-7-1946. Ảnh: Tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sáng 12/7/1946, lực lượng An ninh phong tỏa 41 điểm tại Hà Nội, bắt giữ hơn 300 đối tượng, bao gồm Phan Kích Nam - Bí thư đệ nhất khu của Việt Quốc. Chỉ 48 giờ trước khi quân Pháp diễu binh, âm mưu đảo chính bị đập tan, các đảng phái phản động tan rã, nhiều kẻ tháo chạy sang Trung Quốc. Chiến thắng này bảo vệ chính quyền cách mạng, khẳng định vai trò của lực lượng An ninh nhân dân như “lá chắn thép” của dân tộc, đặt nền móng cho Ngày truyền thống An ninh nhân dân - 12/7."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "di-san-lich-su-doi-voi-an-ninh-quoc-gia-trong-thoi-dai-moi",
                       "text":  "Di sản lịch sử đối với an ninh quốc gia trong thời đại mới"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chiến thắng 12/7/1946 là minh chứng rực rỡ cho bản lĩnh ngoại giao của Chủ tịch Hồ Chí Minh, khi Người tận dụng mâu thuẫn giữa các cường quốc để bảo vệ chính quyền non trẻ. Tinh thần ấy là kim chỉ nam cho Việt Nam trong kỷ nguyên vươn mình hôm nay. Giữa một thế giới đầy biến động, xung đột Nga - Ukraine làm gián đoạn chuỗi cung ứng năng lượng và lương thực, đẩy Việt Nam vào thách thức duy trì ổn định kinh tế, trong khi căng thẳng Iran - Israel gây lo ngại về an ninh khu vực Trung Đông, ảnh hưởng đến thị trường dầu mỏ toàn cầu. Việt Nam, với chính sách đối ngoại “cây tre Việt Nam” - mềm dẻo nhưng kiên cường - khéo léo cân bằng quan hệ với các cường quốc, tận dụng thời cơ để vươn lên. Việc tham gia các hiệp định thương mại như CPTPP và RCEP, củng cố vai trò trong ASEAN, và thúc đẩy hợp tác với các nước láng giềng như Thái Lan, Campuchia trong giải quyết hòa bình các tranh chấp biên giới, thể hiện bản lĩnh ngoại giao kế thừa từ Hồ Chủ tịch. Bất ổn ở Bangladesh, với các cuộc biểu tình và rối loạn chính trị gần đây, nhắc nhở rằng sự ổn định chính trị, “giữ vững bên trong” là yếu tố then chốt để phát triển. Việt Nam, với lịch sử vượt qua những thử thách như 12/7/1946, hiểu rõ giá trị của đoàn kết dân tộc và sự linh hoạt trong bối cảnh biến động khu vực và toàn cầu."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-24.png",
                       "width":  760,
                       "height":  511,
                       "alt":  "Mệnh lệnh sự vụ liên quan vụ án “Ôn Như Hầu”. (Ảnh tư liệu)",
                       "caption":  "Mệnh lệnh sự vụ liên quan vụ án “Ôn Như Hầu”. (Ảnh tư liệu)",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sự kiện 12/7/1946 còn là bài học sống động về sự nguy hiểm của các thế lực thù địch và phản động, được hậu thuẫn từ bên ngoài, nhằm lật đổ chính quyền cách mạng. Lực lượng An ninh nhân dân, với sự nhạy bén và cảnh giác cách mạng, đã ngăn chặn thành công một thảm họa chính trị, bảo vệ nền độc lập non trẻ. Bước vào kỷ nguyên số, khi các mối đe dọa an ninh mang những hình thái mới, bài học này càng trở nên cấp thiết. Các thế lực thù địch không ngừng thực hiện chiến lược “diễn biến hòa bình”, thúc đẩy “cách mạng màu”, kích động phá rối an ninh, bạo loạn, khủng bố, và các hoạt động phá hoại nhằm gây mất ổn định chính trị và chia rẽ nội bộ. Chiến tranh mạng, thông tin sai lệch trên mạng xã hội, và gián điệp công nghệ trở thành những thách thức toàn cầu. Xung đột Nga - Ukraine cho thấy vai trò của chiến tranh thông tin trong việc định hình dư luận, trong khi bất ổn ở các nước trong khu vực phản ánh nguy cơ từ các chiến dịch tuyên truyền xuyên tạc, kích động bạo lực. Như tinh thần Tổng Bí thư Tô Lâm quán triệt tại Hội nghị toàn quốc ngày 18/5/2025, theo đó, chúng ta cần phát huy tinh thần đoàn kết, ý chí cách mạng, và sự cảnh giác cao độ, biến những thách thức thành cơ hội để đưa đất nước vươn lên mạnh mẽ, bảo đảm an ninh quốc gia và phát triển bền vững. Lực lượng An ninh nhân dân Việt Nam, với truyền thống cách mạng được hun đúc từ 12/7/1946, tiếp tục nâng cao năng lực bảo vệ an ninh quốc gia, ngăn chặn từ sớm, từ xa các âm mưu “diễn biến hòa bình” và “cách mạng màu”, chiến tranh mạng, đảm bảo sự ổn định cho đất nước giữa những cơn lốc địa chính trị."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-25.jpg",
                       "width":  700,
                       "height":  253,
                       "alt":  "Ảnh: Tư liệu",
                       "caption":  "Ảnh: Tư liệu",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chiến thắng 12/7/1946 là kết quả của sự đoàn kết sắt son giữa Đảng, chính quyền, và nhân dân. Niềm tin của quần chúng vào Việt Minh, cùng sự lãnh đạo tài tình của Bác Hồ đã tạo nên sức mạnh vượt qua những thử thách tưởng chừng không thể. Trong kỷ nguyên vươn mình, khi Việt Nam từ một quốc gia nghèo nàn, lạc hậu đang từng bước vững chắc vươn lên với tham vọng trở thành trung tâm công nghiệp và công nghệ của khu vực, tinh thần đoàn kết và tự lực, tự cường càng trở nên quan trọng. Giữa những biến động toàn cầu, từ gián đoạn chuỗi cung ứng do các xung đột Nga – Ukraine, căng thẳng Iran - Israel, đến cuộc đua công nghệ AI và 5G, Việt Nam đầu tư mạnh mẽ vào giáo dục, khoa học công nghệ, và các ngành chiến lược như sản xuất chip bán dẫn, đồng thời thúc đẩy năng lượng tái tạo để giảm phụ thuộc vào nguồn cung bên ngoài. Tinh thần tự lực, tự cường, được hun đúc từ những ngày tháng khó khăn 12/7/1946, đang giúp Việt Nam viết nên những trang sử mới, khẳng định vị thế trên trường quốc tế."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngay từ những ngày đầu thành lập, lực lượng An ninh nhân dân Việt Nam đã đảm nhận một sứ mệnh đặc biệt quan trọng: bảo vệ Đảng, bảo vệ Nhà nước, bảo vệ nhân dân và giữ vững nền độc lập, chủ quyền của đất nước. Đây là một nhiệm vụ hết sức nặng nề nhưng cũng vô cùng vẻ vang. Trong điều kiện đất nước còn nhiều khó khăn, chiến tranh và thù địch luôn rình rập, các cán bộ, chiến sĩ an ninh đã phải hoạt động trong hoàn cảnh hết sức gian khổ, thậm chí phải chấp nhận hy sinh thầm lặng để bảo vệ sự bình yên của Tổ quốc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Từ những tổ chức ban đầu còn rất đơn sơ, lực lượng An ninh nhân dân đã không ngừng trưởng thành và lớn mạnh cùng với sự phát triển của cách mạng Việt Nam. Qua các thời kỳ lịch sử, từ kháng chiến chống thực dân Pháp, kháng chiến chống đế quốc Mỹ cho đến thời kỳ xây dựng và bảo vệ Tổ quốc trong hòa bình, lực lượng an ninh luôn là lực lượng nòng cốt trên mặt trận bảo vệ an ninh quốc gia. Các thế hệ cán bộ, chiến sĩ an ninh đã lập nên nhiều chiến công xuất sắc trong đấu tranh phòng, chống gián điệp, phản động, bảo vệ bí mật quốc gia, bảo vệ an toàn các cơ quan đầu não của Đảng và Nhà nước, góp phần giữ vững ổn định chính trị và trật tự an toàn xã hội."
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "y-nghia-cua-viec-xac-dinh-ngay-truyen-thong-luc-luong-an-ninh-nhan-dan",
                       "text":  "II. Ý NGHĨA CỦA VIỆC XÁC ĐỊNH NGÀY TRUYỀN THỐNG LỰC LƯỢNG AN NINH NHÂN DÂN"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ nhất, Ngày truyền thống của lực lượng An ninh nhân dân Việt Nam mang ý nghĩa chính trị, tư tưởng sâu sắc, là dấu mốc lịch sử quan trọng ghi nhận sự ra đời và quá trình phát triển của một lực lượng vũ trang cách mạng nòng cốt trong hệ thống bảo vệ an ninh quốc gia của Đảng và Nhà nước. Việc xác lập ngày truyền thống không chỉ có ý nghĩa tôn vinh lịch sử hình thành của lực lượng an ninh mà còn khẳng định vị trí, vai trò đặc biệt quan trọng của lực lượng này trong sự nghiệp bảo vệ Đảng, bảo vệ Nhà nước, bảo vệ nhân dân và bảo vệ chế độ xã hội chủ nghĩa."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-26.jpg",
                       "width":  900,
                       "height":  600,
                       "alt":  "Khối nữ học viên An ninh nhân dân.",
                       "caption":  "Khối nữ học viên An ninh nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong tiến trình lịch sử cách mạng Việt Nam, sự ra đời của lực lượng an ninh gắn liền với yêu cầu khách quan của nhiệm vụ bảo vệ chính quyền cách mạng ngay sau thắng lợi của Cách mạng Tháng Tám năm 1945 và sự thành lập của Nhà nước Việt Nam Dân chủ Cộng hòa. Trong bối cảnh chính quyền cách mạng vừa được thiết lập, đất nước đứng trước nhiều nguy cơ từ các thế lực phản động trong và ngoài nước, việc xây dựng một lực lượng chuyên trách bảo vệ an ninh chính trị, trật tự an toàn xã hội trở thành nhiệm vụ cấp thiết mang tính chiến lược. Sự hình thành của lực lượng an ninh thể hiện tầm nhìn đúng đắn của Đảng trong việc xây dựng công cụ bảo vệ chế độ, bảo đảm sự ổn định chính trị – yếu tố nền tảng cho sự tồn tại và phát triển của Nhà nước cách mạng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày truyền thống của lực lượng An ninh nhân dân Việt Nam là sự ghi nhận quá trình trưởng thành liên tục của lực lượng an ninh qua các giai đoạn lịch sử của đất nước. Từ những tổ chức ban đầu còn đơn giản về tổ chức, hạn chế về lực lượng và phương tiện, lực lượng an ninh đã từng bước được củng cố, hoàn thiện và phát triển thành lực lượng chuyên trách có bản lĩnh chính trị vững vàng, nghiệp vụ sắc bén, giữ vai trò nòng cốt trên mặt trận đấu tranh bảo vệ an ninh quốc gia. Thực tiễn lịch sử chứng minh rằng lực lượng an ninh luôn đi đầu trong phát hiện, đấu tranh và làm thất bại các âm mưu, hoạt động chống phá của các thế lực thù địch, góp phần giữ vững ổn định chính trị, bảo vệ thành quả cách mạng và tạo môi trường hòa bình, ổn định cho sự phát triển của đất nước."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-27.jpg",
                       "width":  1156,
                       "height":  735,
                       "alt":  "Lực lượng An ninh nhân dân diễu binh.",
                       "caption":  "Lực lượng An ninh nhân dân diễu binh.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ý nghĩa tư tưởng của ngày truyền thống thể hiện ở giá trị giáo dục sâu sắc đối với mỗi cán bộ, chiến sĩ trong lực lượng an ninh nhân dân. Việc ôn lại truyền thống vẻ vang của lực lượng giúp củng cố bản lĩnh chính trị, nâng cao nhận thức về sứ mệnh và trách nhiệm trong sự nghiệp bảo vệ an ninh quốc gia. Qua đó khẳng định nguyên tắc xuyên suốt trong quá trình xây dựng và chiến đấu của lực lượng an ninh: tuyệt đối trung thành với Đảng, tận tụy phục vụ nhân dân, kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày truyền thống vì vậy không chỉ mang giá trị lịch sử mà còn có ý nghĩa chính trị lâu dài đối với sự nghiệp bảo vệ chế độ. Sự trưởng thành và phát triển vững mạnh của lực lượng An ninh nhân dân Việt Nam gắn chặt với nhiệm vụ bảo vệ nền tảng chính trị của Nhà nước, đấu tranh làm thất bại mọi âm mưu phá hoại của các thế lực thù địch, bảo đảm sự ổn định của hệ thống chính trị và sự trường tồn của chế độ xã hội chủ nghĩa ở Việt Nam. Đây chính là giá trị cốt lõi làm nên ý nghĩa chính trị, tư tưởng sâu sắc của Ngày truyền thống lực lượng an ninh nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ hai, Ngày truyền thống của lực lượng An ninh nhân dân Việt Nam thể hiện sự ghi nhận sâu sắc và trân trọng của Đảng, Nhà nước và Nhân dân đối với những cống hiến to lớn của lực lượng an ninh trong sự nghiệp bảo vệ an ninh quốc gia và giữ gìn trật tự, an toàn xã hội. Trong tiến trình lịch sử cách mạng Việt Nam, mỗi giai đoạn phát triển của đất nước đều gắn liền với những nhiệm vụ bảo vệ an ninh chính trị và ổn định xã hội hết sức nặng nề. Lực lượng an ninh nhân dân luôn giữ vai trò tuyến đầu trong cuộc đấu tranh bảo vệ nền tảng chính trị của chế độ, bảo vệ sự lãnh đạo của Đảng và bảo vệ lợi ích căn bản của quốc gia, dân tộc. Việc xác lập Ngày truyền thống vì vậy mang ý nghĩa tôn vinh những đóng góp bền bỉ, thầm lặng nhưng có giá trị đặc biệt quan trọng của lực lượng an ninh đối với sự nghiệp cách mạng."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-28.jpg",
                       "width":  777,
                       "height":  518,
                       "alt":  "Khối nam Sỹ quan An ninh nhân dân trong lễ diễu binh A50.",
                       "caption":  "Khối nam Sỹ quan An ninh nhân dân trong lễ diễu binh A50.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trải qua hơn tám mươi năm xây dựng, chiến đấu và trưởng thành kể từ sau thắng lợi của Cách mạng Tháng Tám năm 1945, lực lượng An ninh nhân dân Việt Nam đã không ngừng được củng cố và phát triển, từng bước hoàn thiện về tổ chức, nâng cao về bản lĩnh chính trị và trình độ nghiệp vụ. Trong mọi hoàn cảnh, lực lượng an ninh luôn chủ động nắm chắc tình hình, kịp thời phát hiện và đấu tranh làm thất bại nhiều âm mưu, hoạt động chống phá của các thế lực thù địch. Thực tiễn lịch sử cho thấy, ở bất kỳ thời kỳ nào, nhiệm vụ bảo vệ an ninh quốc gia cũng gắn chặt với nhiệm vụ bảo vệ sự ổn định của hệ thống chính trị. Lực lượng an ninh nhân dân đã thực hiện hiệu quả vai trò nòng cốt trên mặt trận này, góp phần quan trọng giữ vững môi trường chính trị – xã hội ổn định, tạo tiền đề cho sự phát triển của đất nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ý nghĩa của Ngày truyền thống cũng thể hiện ở việc khẳng định những thành tựu to lớn mà lực lượng an ninh đã đạt được trong quá trình thực hiện nhiệm vụ bảo vệ an ninh quốc gia. Bằng tinh thần cảnh giác cách mạng cao độ, phương pháp công tác khoa học và sự kiên quyết trong đấu tranh, lực lượng an ninh đã kịp thời phát hiện, ngăn chặn và vô hiệu hóa nhiều âm mưu chống phá từ bên ngoài cũng như từ bên trong. Nhiều hoạt động gián điệp, phá hoại, kích động gây rối, chia rẽ khối đại đoàn kết dân tộc đã bị phát hiện và xử lý nghiêm minh, góp phần bảo vệ vững chắc nền tảng chính trị của Nhà nước và giữ gìn trật tự, an toàn xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Những thành tựu đó không chỉ phản ánh bản lĩnh chính trị vững vàng, sự mưu trí, sắc bén của lực lượng An ninh nhân dân Việt Nam, mà còn thể hiện sự hy sinh thầm lặng của nhiều thế hệ cán bộ, chiến sĩ trên mặt trận bảo vệ an ninh Tổ quốc. Chính sự cống hiến bền bỉ đó đã góp phần quan trọng làm thất bại mọi âm mưu đen tối của các thế lực thù địch nhằm gây mất ổn định chính trị và tiến tới lật đổ chế độ xã hội chủ nghĩa ở Việt Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ ba, việc xác định ngày truyền thống của lực lượng An ninh nhân dân có ý nghĩa quan trọng trong việc giáo dục truyền thống cách mạng, ý chí kiên cường, vượt qua gian khổ cho cán bộ, chiến sỹ trong lực lượng An ninh nhân dân, để qua đó góp phần tăng cường, củng cố vững chắc niềm tin, lòng trung thành của lực lượng An ninh nhân dân đối với sự lãnh đạo của Đảng và Nhà nước. Những hoạt động như vậy nhằm động viên cán bộ, chiến sĩ không ngừng nâng cao cảnh giác, ra sức rèn luyện bản lĩnh chính trị và trình độ nghiệp vụ, không ngại gian khổ, vượt qua khó khăn, trong mọi hoàn cảnh để hoàn thành tốt nhiệm vụ."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-29.jpg",
                       "width":  1177,
                       "height":  785,
                       "alt":  "Khối Sỹ quan An ninh nhân dân. Ảnh: VOV.",
                       "caption":  "Khối Sỹ quan An ninh nhân dân. Ảnh: VOV.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trải qua nhiều giai đoạn lịch sử của đất nước, lực lượng An ninh nhân dân đã không ngừng trưởng thành, vượt qua nhiều thử thách khắc nghiệt để hoàn thành sứ mệnh bảo vệ Đảng, Nhà nước và Nhân dân. Chính vì vậy, việc xác định Ngày truyền thống không chỉ đơn thuần là một dấu mốc kỷ niệm, mà còn là phương thức quan trọng để giáo dục truyền thống, giúp các thế hệ cán bộ, chiến sĩ hiểu rõ hơn về quá trình hình thành, chiến đấu và phát triển của lực lượng. Qua đó, mỗi cán bộ, chiến sĩ càng thêm trân trọng những hy sinh, đóng góp của các thế hệ đi trước, đồng thời nhận thức rõ hơn trách nhiệm của mình trong việc tiếp nối và phát huy truyền thống vẻ vang đó."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bên cạnh ý nghĩa giáo dục truyền thống, Ngày truyền thống An ninh nhân dân còn góp phần khơi dậy niềm tự hào nghề nghiệp và tình cảm cách mạng sâu sắc đối với mỗi cán bộ, chiến sĩ. Công tác an ninh vốn là lĩnh vực đặc thù, nhiều nhiệm vụ diễn ra trong thầm lặng và đòi hỏi sự kiên trì, bản lĩnh cũng như tinh thần trách nhiệm rất cao. Trong quá trình thực hiện nhiệm vụ, các cán bộ, chiến sĩ phải đối mặt với không ít khó khăn, thử thách, thậm chí có lúc phải hy sinh lợi ích cá nhân vì lợi ích chung của đất nước. Chính vì vậy, việc thường xuyên nhắc nhớ về truyền thống vẻ vang của lực lượng sẽ giúp mỗi cán bộ, chiến sĩ thêm vững vàng về tư tưởng, thêm tự hào về nghề nghiệp mà mình đã lựa chọn. Ngày truyền thống còn là nguồn động lực tinh thần to lớn để bồi dưỡng và nâng cao ý chí kiên cường, tinh thần dũng cảm cho toàn lực lượng. Trong bối cảnh tình hình thế giới và khu vực có nhiều diễn biến phức tạp, các âm mưu và hoạt động chống phá ngày càng tinh vi, nhiệm vụ bảo vệ an ninh quốc gia đặt ra nhiều yêu cầu mới đối với lực lượng an ninh."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thông qua việc giáo dục truyền thống và bồi dưỡng lý tưởng cách mạng, Ngày truyền thống cũng góp phần củng cố niềm tin và lòng trung thành tuyệt đối của lực lượng An ninh nhân dân đối với sự lãnh đạo của Đảng Cộng sản Việt Nam và sự quản lý của Nhà nước. Đồng thời, đó cũng là cơ sở để tăng cường mối quan hệ gắn bó giữa lực lượng an ninh với nhân dân nguồn sức mạnh to lớn giúp lực lượng hoàn thành tốt nhiệm vụ của mình. Có thể nói rằng, Ngày truyền thống của lực lượng An ninh nhân dân không chỉ là dịp để ôn lại những trang sử vẻ vang mà còn là một hình thức giáo dục chính trị, tư tưởng sâu sắc, góp phần xây dựng lực lượng ngày càng vững mạnh về bản lĩnh, tư tưởng và tinh thần trách nhiệm. Từ đó, mỗi cán bộ, chiến sĩ sẽ tiếp tục phát huy truyền thống tốt đẹp của lực lượng, nỗ lực phấn đấu, hoàn thành xuất sắc mọi nhiệm vụ được giao, xứng đáng với niềm tin yêu và kỳ vọng của Đảng, Nhà nước và Nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ tư, hàng năm thông qua tổ chức kỷ niệm ngày truyền thống của lực lượng An ninh nhân dân, Công an các đơn vị, địa phương đánh giá, tổng kết những thành tựu đã đạt được và chỉ ra những hạn chế, thiếu sót trong công cuộc bảo vệ an ninh tổ quốc và giữ gìn trật tự an toàn xã hội, rút kinh nghiệm để nâng cao hiệu quả công tác đấu tranh phòng, chống tội phạm trong tình hình mới."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-30.jpg",
                       "width":  1868,
                       "height":  1246,
                       "alt":  "Khối sỹ quan nam An ninh nhân dân.",
                       "caption":  "Khối sỹ quan nam An ninh nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thông qua các hoạt động kỷ niệm, lực lượng An ninh ở các đơn vị, địa phương có điều kiện đánh giá một cách toàn diện những kết quả đạt được trong công tác bảo vệ an ninh quốc gia, đồng thời nghiêm túc nhìn nhận những hạn chế, thiếu sót còn tồn tại để từ đó rút ra những bài học kinh nghiệm quý báu cho quá trình công tác trong thời gian tiếp theo. Việc tổng kết, đánh giá kết quả công tác thông qua các dịp kỷ niệm Ngày truyền thống có ý nghĩa rất lớn trong việc nâng cao chất lượng và hiệu quả hoạt động của lực lượng. Qua quá trình nhìn lại những thành tựu đã đạt được, các đơn vị có thể khẳng định những phương pháp, cách làm hiệu quả cần tiếp tục phát huy; đồng thời phát hiện những vấn đề còn hạn chế để kịp thời điều chỉnh, bổ sung cho phù hợp với yêu cầu nhiệm vụ trong tình hình mới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bên cạnh việc tổng kết thực tiễn, Ngày truyền thống còn là dịp để các đơn vị trong Công an nhân dân Việt Nam xác định rõ hơn mục tiêu, phương hướng và nhiệm vụ trọng tâm trong từng giai đoạn phát triển. Từ những bài học kinh nghiệm rút ra trong thực tiễn công tác, lực lượng An ninh nhân dân có thể xây dựng các giải pháp cụ thể nhằm nâng cao hiệu quả đấu tranh phòng, chống các hoạt động xâm phạm an ninh quốc gia, đồng thời chủ động ứng phó với những thách thức mới trong bối cảnh tình hình thế giới và khu vực có nhiều biến động phức tạp."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thông qua các hoạt động tổng kết, đánh giá và định hướng phát triển, lực lượng An ninh nhân dân có thể đề ra những mục tiêu và giải pháp thiết thực nhằm xây dựng lực lượng ngày càng trong sạch, vững mạnh, chính quy, tinh nhuệ và hiện đại. Đây cũng là yêu cầu tất yếu để lực lượng đáp ứng tốt hơn nhiệm vụ bảo vệ an ninh quốc gia trong bối cảnh đất nước đang bước vào giai đoạn phát triển mới."
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "nhung-danh-hieu-phan-thuong-cao-quy-ma-dang-nha-nuoc-da-tang-thuong-cho",
                       "text":  "III. NHỮNG DANH HIỆU, PHẦN THƯỞNG CAO QUÝ MÀ ĐẢNG, NHÀ NƯỚC ĐÃ TẶNG THƯỞNG CHO LỰC LƯỢNG AN NINH NHÂN DÂN"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-31.png",
                       "width":  1359,
                       "height":  1813,
                       "alt":  "Lực lượng An ninh nhân dân được tặng thưởng Huân chương Sao Vàng, năm 1996. Ảnh: Bộ Công an.",
                       "caption":  "Lực lượng An ninh nhân dân được tặng thưởng Huân chương Sao Vàng, năm 1996. Ảnh: Bộ Công an.",
                       "note":  null
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-32.png",
                       "width":  1652,
                       "height":  2204,
                       "alt":  "Lễ đón nhận Huân chương Hồ Chí Minh của Tổng cục An ninh nhân dân, tháng 8/1985. Ảnh: Bộ Công an",
                       "caption":  "Lễ đón nhận Huân chương Hồ Chí Minh của Tổng cục An ninh nhân dân, tháng 8/1985. Ảnh: Bộ Công an",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trải qua chặng đường xây dựng, chiến đấu và trưởng thành đầy gian khổ nhưng cũng hết sức vẻ vang, lực lượng An ninh nhân dân Việt Nam đã lập nên nhiều chiến công đặc biệt xuất sắc, góp phần giữ vững an ninh quốc gia, bảo vệ Đảng, Nhà nước và cuộc sống bình yên của nhân dân. Những cống hiến to lớn, thầm lặng mà bền bỉ ấy không chỉ được khẳng định trong thực tiễn lịch sử, mà còn được ghi nhận bằng những danh hiệu cao quý, những phần thưởng cao nhất do Đảng và Nhà nước trao tặng. Đây không chỉ là sự tôn vinh đối với những thành tích đặc biệt xuất sắc, mà còn là minh chứng sinh động cho lòng trung thành tuyệt đối, tinh thần mưu trí, dũng cảm và sự hy sinh to lớn của các thế hệ cán bộ, chiến sĩ An ninh nhân dân trong sự nghiệp bảo vệ Tổ quốc."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-33.png",
                       "width":  1226,
                       "height":  1636,
                       "alt":  "Lực lượng An ninh nhân dân được tuyên dương An hùng lực lượng vũ trang nhân dân, ngày 12/7/2001. Ảnh: Bộ Công an.",
                       "caption":  "Lực lượng An ninh nhân dân được tuyên dương An hùng lực lượng vũ trang nhân dân, ngày 12/7/2001. Ảnh: Bộ Công an.",
                       "note":  null
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-34.png",
                       "width":  1182,
                       "height":  1577,
                       "alt":  "Tiểu ban Bảo vệ Chính trị thuộc Ban An ninh TW Cục miền Nam được tuyên dương Anh hùng LLVTND, ngày 9/8/2005.",
                       "caption":  "Tiểu ban Bảo vệ Chính trị thuộc Ban An ninh TW Cục miền Nam được tuyên dương Anh hùng LLVTND, ngày 9/8/2005.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ghi nhận những thành tích xuất sắc của lực lượng An ninh nhân dân trong sự nghiệp bảo vệ an ninh, trật tự, Đảng, Nhà nước đã tặng thưởng nhiều danh hiệu, phần thường cao quý cho các tập thể, cá nhân thuộc lực lượng An ninh nhân dân: Huân chương Sao Vàng tặng lực lượng An ninh nhân dân (1996), Tổng cục An ninh (2006), Lực lượng Bảo vệ chính trị (2008), Học viện An ninh nhân dân (2011)...; Huân chương Hồ Chí Minh tặng Tổng cục An ninh (1985), Tổng cục An ninh 1 (2011), Tổng cục An ninh II (2011), Lực lượng Ngoại tuyến (2009), Lực lượng Điều tra (2011), Lực lượng kỹ thuật nghiệp vụ (2009, 2010).., nhiều tập thể được tuyên dương Anh hùng Lực lượng vũ trang nhân dân: Lực lượng An ninh nhân dân (2001), Tiểu ban Bảo vệ chính trị thuộc Ban An ninh Trung ương Cục miền Nam (2005), Cục Kỹ thuật nghiệp vụ (1985, 2011, 2015), Cục Ngoại tuyến (2010, 2025), Cục An ninh kinh tế (2013), Cục An ninh chính trị nội bộ (2013), Cục Quản lý xuất nhập cảnh (2013), Tổng cục An ninh (2016), Cục An ninh Điều tra (2020), Cục An ninh đối ngoại (2025), Cục An ninh mạng (2025)..."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-35.png",
                       "width":  1256,
                       "height":  1676,
                       "alt":  "Tổng cục An ninh được tặng thưởng Huân chương Sao Vàng, ngày 12/7/2006. Ảnh: Bộ Công an.",
                       "caption":  "Tổng cục An ninh được tặng thưởng Huân chương Sao Vàng, ngày 12/7/2006. Ảnh: Bộ Công an.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-36.png",
                       "width":  1260,
                       "height":  1680,
                       "alt":  "Tổng cục An ninh được tuyên dương Anh hùng LLVTND, ngày 12/7/2016.",
                       "caption":  "Tổng cục An ninh được tuyên dương Anh hùng LLVTND, ngày 12/7/2016.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-37.jpg",
                       "width":  777,
                       "height":  550,
                       "alt":  "Thủ tướng Nguyễn Tấn Dũng gắn Huân chương Sao Vàng lên lá cờ truyền thống của Học viện An ninh nhân dân.Ảnh: Chinhphu.vn.",
                       "caption":  "Thủ tướng Nguyễn Tấn Dũng gắn Huân chương Sao Vàng lên lá cờ truyền thống của Học viện An ninh nhân dân.Ảnh: Chinhphu.vn.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-38.jpg",
                       "width":  1209,
                       "height":  829,
                       "alt":  "Tổng Bí thư Tô Lâm gắn Huân chương Hồ Chí Minh lên Lá cờ truyền thống của lực lượng Tình báo CAND. Ảnh: Công an nhân dân.",
                       "caption":  "Tổng Bí thư Tô Lâm gắn Huân chương Hồ Chí Minh lên Lá cờ truyền thống của lực lượng Tình báo CAND. Ảnh: Công an nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   


                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-39.jpg",
                       "width":  1404,
                       "height":  938,
                       "alt":  "Thừa ủy quyền, Bộ trưởng Lương Tam Quang gắn và trao Huân chương Bảo vệ Tổ quốc hạng Nhất tặng Cục Viễn thông và Cơ yếu. Ảnh: Công an nhân dân.",
                       "caption":  "Thừa ủy quyền, Bộ trưởng Lương Tam Quang gắn và trao Huân chương Bảo vệ Tổ quốc hạng Nhất tặng Cục Viễn thông và Cơ yếu. Ảnh: Công an nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-40.jpg",
                       "width":  1244,
                       "height":  884,
                       "alt":  "Tổng Bí thư, Chủ tịch nước Tô Lâm trao danh hiệu Anh hùng lực lượng vũ trang nhân dân tặng Văn phòng Bộ Công an.Ảnh: Công an nhân dân.",
                       "caption":  "Tổng Bí thư, Chủ tịch nước Tô Lâm trao danh hiệu Anh hùng lực lượng vũ trang nhân dân tặng Văn phòng Bộ Công an.Ảnh: Công an nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "su-quan-tam-chi-dao-cua-dang-nha-nuoc-va-bo-cong-an",
                       "text":  "SỰ QUAN TÂM CHỈ ĐẠO CỦA ĐẢNG, NHÀ NƯỚC VÀ BỘ CÔNG AN VỚI LỰC LƯỢNG AN NINH NHÂN DÂN"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chủ tịch Hồ Chí Minh đã dạy: “Công an có bao nhiêu người? Dù có vài ba nghìn hay năm bảy vạn đi nữa thì lực lượng ấy vẫn còn ít lắm bên cạnh lực lượng nhân dân. Năm vạn người thì chỉ có 5 vạn cặp mắt, 5 vạn đôi bàn tay. Phải làm sao có hàng chục triệu cặp mắt và đôi tai mới được. Muốn như vậy phải dựa vào nhân dân, không được xa rời nhân dân. Nếu không thế thì sẽ thất bại. Khi nhân dân giúp đỡ ta nhiều thì thành công nhiều, giúp đỡ ta ít thì thành công ít, giúp đỡ ta hoàn toàn thì thắng lợi hoàn toàn”."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-41.png",
                       "width":  1596,
                       "height":  2128,
                       "alt":  "Chủ tịch Hồ Chí Minh nói chuyện với học viên Công an Khóa Tổng phản công tại Chiến khu Việt Bắc, tháng 4/1950.",
                       "caption":  "Chủ tịch Hồ Chí Minh nói chuyện với học viên Công an Khóa Tổng phản công tại Chiến khu Việt Bắc, tháng 4/1950.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                  
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-42.png",
                       "width":  1533,
                       "height":  2044,
                       "alt":  "Chủ tịch Hồ Chí Minh với đồng chí Phạm Thái Bường, Trưởng ban An ninh Trung ương Cục miền Nam, năm 1969.",
                       "caption":  "Chủ tịch Hồ Chí Minh với đồng chí Phạm Thái Bường, Trưởng ban An ninh Trung ương Cục miền Nam, năm 1969.",
                       "note":  null
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-43.png",
                       "width":  1458,
                       "height":  1944,
                       "alt":  "Chủ tịch Tôn Đức Thắng tiễn đoàn cán bộ An ninh chi viện chiến trường miền Nam.",
                       "caption":  "Chủ tịch Tôn Đức Thắng tiễn đoàn cán bộ An ninh chi viện chiến trường miền Nam.",
                       "note":  null
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-44.png",
                       "width":  1590,
                       "height":  2120,
                       "alt":  "Đồng chí Lê Duẫn – Bí thư thứ Nhất ban Chấp hành Trung ương Đảng nói chuyện tại Hội nghị Công an toàn quốc lần thứ 17, tháng 2/1963.",
                       "caption":  "Đồng chí Lê Duẫn – Bí thư thứ Nhất ban Chấp hành Trung ương Đảng nói chuyện tại Hội nghị Công an toàn quốc lần thứ 17, tháng 2/1963.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-45.jpg",
                       "width":  692,
                       "height":  257,
                       "alt":  "Thủ tướng Chính phủ Phạm Văn Đồng phát biểu tại Hội nghị Tổng kết Phong trào Bảo vệ ANTQ 1975 - 1979 do Bộ Nội vụ tổ chức, năm 1979.",
                       "caption":  "Thủ tướng Chính phủ Phạm Văn Đồng phát biểu tại Hội nghị Tổng kết Phong trào Bảo vệ ANTQ 1975 - 1979 do Bộ Nội vụ tổ chức, năm 1979.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-46.jpg",
                       "width":  859,
                       "height":  592,
                       "alt":  "Đồng chí Võ Nguyên Giáp, đồng chí Nguyễn Tấn Dũng, Thứ trưởng Bộ Nội vụ và các đồng chí Lê Giản, Lê Hữu Qua, Nguyễn Tài tại buổi tọa đàm về Vụ án ở số 7 phố Ôn Như Hầu - Hà Nội, tháng 3/1995.",
                       "caption":  "Đồng chí Võ Nguyên Giáp, đồng chí Nguyễn Tấn Dũng, Thứ trưởng Bộ Nội vụ và các đồng chí Lê Giản, Lê Hữu Qua, Nguyễn Tài tại buổi tọa đàm về Vụ án ở số 7 phố Ôn Như Hầu - Hà Nội, tháng 3/1995.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-47.jpg",
                       "width":  882,
                       "height":  414,
                       "alt":  "Hội đồng Nhà nước thông qua Pháp lệnh về lực lượng An ninh nhân dân Việt Nam, năm 1987.",
                       "caption":  "Hội đồng Nhà nước thông qua Pháp lệnh về lực lượng An ninh nhân dân Việt Nam, năm 1987.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "part",
                       "id":  "phan-ii",
                       "label":  "Phần II",
                       "title":  "LỰC LƯỢNG AN NINH NHÂN DÂN – NHỮNG CHIẾN CÔNG VẺ VANG VÀ DẤU ẤN TRONG SỰ NGHIỆP BẢO VỆ AN NINH TỔ QUỐC"
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "i-tom-tat-nhung-chien-cong-thanh-tich-tieu-bieu-o-moi-giai-doan-cach-man",
                       "text":  "I. TÓM TẮT NHỮNG CHIẾN CÔNG, THÀNH TÍCH TIÊU BIỂU Ở MỖI GIAI ĐOẠN CÁCH MẠNG"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-49.jpg",
                       "width":  800,
                       "height":  533,
                       "alt":  "Khối nam sĩ quan ANND tại lễ diễu binh, diễu hành mừng 80 năm Cách mạng Tháng Tám thành công và Quốc khánh 2/9 (Nguồn: Báo CAND điện tử)",
                       "caption":  "Khối nam sĩ quan ANND tại lễ diễu binh, diễu hành mừng 80 năm Cách mạng Tháng Tám thành công và Quốc khánh 2/9 (Nguồn: Báo CAND điện tử)",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng An ninh nhân dân là lực lượng nòng cốt của Công an nhân dân Việt Nam, luôn được Đảng, Bác Hồ và ngành Công an quan tâm chăm lo, giáo dục, rèn luyện; được Nhân dân tin yêu, đùm bọc, giúp đỡ. Trải qua các thời kỳ cách mạng, các thế hệ cán bộ, chiến sĩ luôn tuyệt đối trung thành với Đảng, kiên cường, mưu trí, không quản ngại hy sinh, gian khổ, gắn bó máu thịt với Nhân dân, lập nên nhiều chiến công đặc biệt xuất sắc trong sự nghiệp bảo vệ Đảng, bảo vệ cách mạng và vững bước trong công cuộc đổi mới, xây dựng, phát triển đất nước."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "1-dau-tranh-tran-ap-phan-cach-mang-bao-ve-chinh-quyen-nhan-dan-truoc-tin",
                       "text":  "1. ĐẤU TRANH TRẤN ÁP PHẢN CÁCH MẠNG, BẢO VỆ CHÍNH QUYỀN NHÂN DÂN TRƯỚC TÌNH THẾ “NGÀN CÂN TREO SỢI TÓC”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngay từ khi ra đời và trong suốt quá trình lãnh đạo cách mạng Việt Nam, Đảng ta luôn quan tâm xây dựng lực lượng Công an nhân dân. Trong cao trào Xô Viết Nghệ Tĩnh (1930 - 1931), “Đội Tự vệ đỏ” được thành lập, làm nòng cốt hỗ trợ, bảo vệ quần chúng nổi dậy phá nhà giam, đốt huyện đường, vây đồn lính, trừng trị bọn hào lý, từng bước làm tan rã chính quyền tay sai của đế quốc ở cơ sở; đồng thời bảo vệ cán bộ, bảo vệ các phiên tòa Xô Viết - Công Nông xét xử phản cách mạng, giữ vững an ninh, trật tự tại những địa bàn có chính quyền Xô Viết."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-50.jpg",
                       "width":  480,
                       "height":  317,
                       "alt":  "Đội tự vệ đỏ ở Hòa Quân - Đông Sớ - Nghệ An trong cao trào Xô Viết Nghệ - Tĩnh 1930 - 1931Nguồn: Ảnh tư liệu.",
                       "caption":  "Đội tự vệ đỏ ở Hòa Quân - Đông Sớ - Nghệ An trong cao trào Xô Viết Nghệ - Tĩnh 1930 - 1931Nguồn: Ảnh tư liệu.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tháng 9-1939, khi Chiến tranh thế giới thứ hai bùng nổ, thực dân Pháp đẩy mạnh đàn áp phong trào cách mạng Việt Nam, hàng nghìn cán bộ, đảng viên bị bắt, tù đày, buộc Đảng ta phải rút vào hoạt động bí mật. Đầu năm 1940, Trung ương Đảng chủ trương thành lập “Ban Công tác đội” làm nhiệm vụ bảo vệ An toàn khu (ATK), bảo vệ cán bộ cao cấp của Đảng, đồng thời tổ chức giải thoát cán bộ khi bị địch bắt; lực lượng này đặt dưới sự chỉ đạo trực tiếp của Trung ương, được trang bị vũ khí và huấn luyện. Ngày 15-5-1945, Xứ ủy Bắc Kỳ thành lập “Đội Danh dự trừ gian” do Xứ ủy trực tiếp lãnh đạo, thực hiện nhiệm vụ trừ diệt bọn Việt gian đầu sỏ, kết hợp vũ trang tuyên truyền và sẵn sàng chiến đấu. Ngày 04-6-1945, Tổng bộ Việt Minh tuyên bố thành lập Khu giải phóng, gồm 6 tỉnh: Cao Bằng, Bắc Kạn, Lạng Sơn, Hà Giang, Tuyên Quang, Thái Nguyên và một số vùng phụ cận thuộc các tỉnh Bắc Giang, Vĩnh Yên, Phú Thọ, Yên Bái; đồng thời công bố 10 chính sách lớn của Việt Minh. Ngay sau đó, các tổ chức “Đội trinh sát”, “Đội hộ lương diệt ác”, lần lượt ra đời cùng với “Đội tự vệ đỏ”, “Ban Công tác đội” và “Đội danh dự trừ gian” làm nhiệm vụ thủ tiêu lực lượng của Nhật, phát hiện, trừng trị Việt gian, phần tử phản động, bảo vệ chính quyền cách mạng và góp phần thực hiện hiệu quả 10 chính sách lớn của Việt Minh."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 19-8-1945, cuộc Tổng khởi nghĩa giành thắng lợi ở Hà Nội, cùng với việc đập tan các cơ quan đàn áp của địch, thiết lập chính quyền cách mạng, các tổ chức đầu tiên của lực lượng CAND ra đời: ở Bắc Bộ thành lập Sở Liêm phóng, ở Trung Bộ thành lập Sở Trinh sát và ở Nam Bộ thành lập Quốc gia Tự vệ cuộc. Tuy tên gọi ở ba miền khác nhau nhưng các tổ chức đầu tiên của CAND Việt Nam đều có chung nhiệm vụ là trấn áp phản cách mạng, giữ gìn an ninh, trật tự, bảo vệ Đảng, bảo vệ chính quyền cách mạng, bảo vệ tính mạng và tài sản của Nhân dân. Trước tình thế vận mệnh dân tộc như “ngàn cân treo sợi tóc”: các thế lực ngoại xâm lần lượt kéo vào nước ta dưới danh nghĩa đồng minh vào giải giáp quân Nhật nhưng thực chất đều thực hiện dã tâm xâm lược nước ta. Các cơ quan tình báo, gián điệp nước ngoài cấu kết với các tổ chức, đảng phái phản động trong nước thành liên minh phản cách mạng nguy hiểm; đất nước vừa thoát khỏi ách đô hộ, đời sống kinh tế vô cùng khó khăn, tàn dư của chế độ cũ còn hết sức nặng nề càng làm cho tình hình xã hội trầm trọng hơn... Nhiệm vụ bảo vệ chính quyền cách mạng, bảo vệ Nhân dân vốn đã khó khăn lại càng khó khăn bội phần khi lực lượng còn quá mỏng, nghiệp vụ đánh địch còn đơn giản. Nhưng thế hệ cán bộ, chiến sĩ đầu tiên của lực lượng An ninh nhân dân đã vượt qua hoàn cảnh khó khăn, dựa vào Nhân dân; sau gần một năm kiên trì đấu tranh, đã khéo léo vận dụng pháp luật, trấn áp nhiều tổ chức phản động manh động chống chính quyền, bắt và trừng trị nhiều tay sai chỉ điểm, từng bước vô hiệu hóa hoạt động chống phá của các thế lực nội phản câu kết với giặc ngoại xâm. Kết quả đó đã góp phần từng bước đẩy lùi âm mưu của các thế lực nội phản; phá vỡ thế liên kết giữa thù trong với giặc ngoài; tạo điều kiện để Chính phủ triển khai những chính sách mới, củng cố chính quyền cơ sở, nâng cao một bước đời sống vật chất và giác ngộ chính trị cho Nhân dân."
                   },
                                      {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-51.jpg",
                       "width":  471,
                       "height":  604,
                       "alt":  "Mệnh lệnh sự vụ ngày 12-7-1946 của sở Công an Bắc Bộ, lệnh cho đồng chí Nguyễn Bá Hùng và Đội Trinh sát đặc biệt đến khám phá số 7 Ôn Như bắt Pha Kích Nam và bọn Quốc dân đảng. Nguồn: Ảnh tư liệu.",
                       "caption":  "Mệnh lệnh sự vụ ngày 12-7-1946 của sở Công an Bắc Bộ, lệnh cho đồng chí Nguyễn Bá Hùng và Đội Trinh sát đặc biệt đến khám phá số 7 Ôn Như bắt Pha Kích Nam và bọn Quốc dân đảng. Nguồn: Ảnh tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đặc biệt, ngày 12-7-1946, Nha Công an Trung ương đã khám phá Vụ án phản cách mạng ở số 7, phố Ôn Như Hầu (nay là phố Nguyễn Gia Thiều), Hà Nội; phối hợp với các lực lượng vũ trang và Nhân dân đồng loạt tấn công, bóc gỡ 41 trụ sở Quốc dân đảng công khai, bí mật; bắt gần 300 tên phản động; thu toàn bộ phương tiện, tài liệu phản cách mạng; đập tan âm mưu đảo chính, lật đổ chính quyền cách mạng của thực dân Pháp và các đối tượng phản động."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trước đó, tổ chức Quốc dân đảng luôn có dã tâm lật đổ chính quyền cách mạng, liên tục chống phá cách mạng. Nhân cơ hội Hiệp ước Hoa - Pháp ký kết, quân Pháp thay chân Tưởng chiếm đóng Bắc Bộ, các đối tượng đã xúc tiến kế hoạch đảo chính, thành lập chính quyền làm tay sai cho Pháp. Được quân Pháp giúp sức, Quốc dân đảng vạch kế hoạch: lợi dụng quân Pháp tổ chức diễu binh mừng ngày Quốc khánh Pháp (14-7), khi đi qua Bắc Bộ phủ sẽ ném lựu đạn để gây đổ máu; với lý do này, Pháp sẽ đổ lỗi cho ta, kéo ngay vào Bắc Bộ phủ bắt các thành viên Chính phủ, tuyên bố thành lập chính quyền mới của Quốc dân đảng. Trinh sát chính trị của Sở Công an Bắc Bộ và Nha Công an đã theo dõi, bí mật bắt một số tên, khai thác và nắm được âm mưu đảo chính của Quốc dân Đảng từ trước; đồng thời tiến hành thu thập tài liệu và xây dựng được 02 cơ sở đánh vào trụ sở quan trọng nhất của chúng là số 132 Đuy-vi-nhô (Rue Duvigneau, nay là phố Bùi Thị Xuân, Hà Nội) cung cấp cho ta nhiều tin tức rất giá trị về âm mưu, hoạt động của Trương Tử Anh và đồng bọn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đêm 11-7, ta nắm được các đối tượng đã in xong các loại truyền đơn, lời hiệu triệu, một số đã chuyển đi các tỉnh, sáng sớm ngày 12-7 các trụ sở ở Hà Nội sẽ rút vào bí mật để thực hiện giai đoạn cuối cùng là lật đổ chính quyền cách mạng. Ngay sau đó, lãnh đạo Nha Công an và lãnh đạo Sở Công an Bắc Bộ tiến hành 3 cuộc họp liên tục để bàn kế sách trấn áp. Cuộc họp cuối cùng diễn ra vào 12 giờ đêm và thống nhất quyết định: phải đột kích vào trụ sở 132 Đuy-vi-nhô, thu chứng cứ trình Chính phủ để xin được mở cuộc trấn áp Quốc dân đảng; nếu không sẽ không còn thời cơ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Mờ sáng ngày 12-7, một tiểu đội Công an xung phong và trinh sát chính trị bất ngờ đột kích vào số 132 phố Đuy-vi-nhô. Khi ấy, hơn 20 tên Quốc dân đảng còn đang nằm ngủ la liệt trên sàn nhà, bên những đống truyền đơn, tài liệu đã đóng gói. Cuộc đột kích thắng lợi, ta thu một xe cam-nhông tài liệu phản động và cả máy in, bắt hết các đối tượng. Quyền Chủ tịch nước Huỳnh Thúc Kháng lập tức ra lệnh cho phép lực lượng An ninh mở cuộc trấn áp tất cả các trụ sở công khai và bí mật của Quốc dân đảng."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-52.jpg",
                       "width":  470,
                       "height":  306,
                       "alt":  "Đội trinh sát đặc biệt, đơn vị chủ chốt trấn áp bọn phản động Quốc dân đảng ngày 12-7-1946. Nguồn: Ảnh tư liệu.",
                       "caption":  "Đội trinh sát đặc biệt, đơn vị chủ chốt trấn áp bọn phản động Quốc dân đảng ngày 12-7-1946. Nguồn: Ảnh tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Được Nhân dân ủng hộ, giúp đỡ, trong 2 ngày 12 và 13-7-1946 ta khám xét 41 điểm là trụ sở công khai và bí mật của bọn phản động, bắt hơn 300 tên, trong đó có Phan Kích Nam là Bí thư Đệ nhất khu, y còn có chân trong Quốc hội. Trong khi trấn áp, ta còn mở một cuộc triển lãm về tội ác của chúng tại số 7 phố Ôn Như Hầu, hàng vạn đồng bào ở Hà Nội đến xem, càng nhận rõ bộ mặt quốc gia giả hiệu của Quốc dân đảng. Vì thế đồng bào càng tích cực giúp đỡ, tạo ra áp lực chính trị mạnh mẽ, làm cho quân đội Pháp không dám can thiệp."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đồng thời với các cuộc khám xét ở Hà Nội, Nha Công an đã chỉ đạo lực lượng Công an các tỉnh đồng loạt mở cuộc trấn áp Quôc dân đảng ở các địa phương (Lào Cai, Yên Bái, Phú Thọ,...), phá tan chính quyền của chúng ở một số xã, củng cố một bước chính quyền cách mạng. Đây là quyết định sáng suốt, có tác dụng to lớn vì qua đó chúng ta công khai trấn áp trên toàn quốc, làm tan rã lực lượng của một đảng chính trị phản động nhất, có thực lực nhất lúc bây giờ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Khám phá vụ án phản cách mạng ở số 7, phố Ôn Như Hầu đã đập tan cuộc đảo chính phản cách mạng của Quốc dân đảng ở Hà Nội và các địa phương, phá tan thế liên kết giữa thế lực nội phản với giặc ngoại xâm; góp phần giữ vững chính quyền cách mạng trước muôn vàn khó khăn, thử thách, trong tình thế “ngàn cân treo sợi tóc”. Chiến công đó khẳng định sự lãnh đạo sáng suốt của Đảng và vị trí, vai trò của lực lượng Công an nhân dân trong sự nghiệp bảo vệ an ninh, trật tự; thể hiện sự trung thành tuyệt đối với Đảng, tinh thần mưu trí, sáng tạo và quyết thắng của cán bộ, chiến sĩ Công an nhân dân; sự phối hợp, hiệp đồng tác chiến của các lực lượng và sự hỗ trợ đắc lực của quần chúng nhân dân trong đấu tranh chống phản cách mạng. Đây không những là mốc son vẻ vang của CAND Việt Nam mà còn là dấu mốc quan trọng trong hành trình lịch sử cách mạng của dân tộc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đánh giá về vụ án này, đồng chí Tổng Bí thư Trường Chinh đã viết: “những vụ khám bắt trên đây có một tác dụng vô cùng quan trọng; nó lột mặt bọn phản động bên trong, tay sai của bọn phản động bên ngoài... Nó lôi ra ánh sáng dư luận một bọn giả danh quốc gia dân tộc... Mấy cuộc khám bắt gần đây cắm một cái mốc trên con đường thống nhất dân tộc và biểu lộ sức mạnh, uy tín của chính quyền nhân dân...” (Trường Chinh: “Nhân mấy vụ xét bắt mới đây”, Báo Sự thật, số 45, ngày 19-7-1946)."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-53.png",
                       "width":  480,
                       "height":  326,
                       "alt":  "Đồng chí Tổng Bí thư Trường Chinh.",
                       "caption":  "Đồng chí Tổng Bí thư Trường Chinh.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 12-7-1946 trở thành mốc lịch sử vẻ vang - Ngày truyền thống của lực lượng An ninh nhân dân anh hùng. Ngày 24-5-2001, Bộ trưởng Bộ Công an đã ký Quyết định số 457/2001/QĐ-BCA(X11) công nhận ngày 12-7-1946 là Ngày truyền thống lực lượng An ninh nhân dân."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "2-luc-luong-an-ninh-nhan-dan-trong-cuoc-khang-chien-chong-thuc-dan-phap",
                       "text":  "2. LỰC LƯỢNG AN NINH NHÂN DÂN TRONG CUỘC KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP (1946 - 1954)"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bước vào cuộc kháng chiến toàn quốc chống thực dân Pháp xâm lược, nhiệm vụ của lực lượng Công an là nhanh chóng di chuyển hồ sơ, tài liệu; di chuyển trại giam; bảo vệ các đồng chí lãnh đạo Đảng, Nhà nước; bảo vệ cơ quan, kho tàng; bảo vệ tính mạng và tài sản của Nhân dân; theo dõi, đuổi các đối tượng có nguy hại cho an ninh ra khỏi khu vực có thể xảy ra chiến sự; bắt, đưa đi an trí những đối tượng xét thấy nguy hại cho cuộc kháng chiến; bảo vệ bí mật quân sự, đồng thời tăng cường công tác nắm tình hình địch; giữ gìn an ninh, trật tự ở những vùng nông thôn hậu phương. Ở những nơi địch chiếm đóng, một bộ phận công an ở lại xây dựng và phát triển cơ sở để tổ chức đấu tranh chống phá chính quyền địch."
                   },
                    {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-54.jpg",
                       "width":  450,
                       "height":  578,
                       "alt":  "Sắc lệnh số 23/SL của Chủ tịch Hồ Chí Minh ngày 21/02/1946 v/v thành lập Việt Nam Công an Vụ thuộc Bộ Nội vụ. Nguồn: Trung tâm Lưu trữ quốc gia III, phông Phủ Thủ tướng, hồ sơ 02.",
                       "caption":  "Sắc lệnh số 23/SL của Chủ tịch Hồ Chí Minh ngày 21/02/1946 v/v thành lập Việt Nam Công an Vụ thuộc Bộ Nội vụ. Nguồn: Trung tâm Lưu trữ quốc gia III, phông Phủ Thủ tướng, hồ sơ 02.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong giai đoạn này, Chủ tịch Hồ Chí Minh ký Sắc lệnh số 23/SL, ngày 21/2/1946, hợp nhất các Sở Cảnh sát và các Sở Liêm phóng toàn quốc thành “Việt Nam Công an vụ”. Ngày 18/4/1946, thực hiện Sắc lệnh số 23/SL, Bộ Nội vụ ban hành Nghị định số 121-NV/NĐ về tổ chức Việt Nam Công an vụ, gồm ba cấp: Công an Việt Nam, Công an kỳ, Công an tỉnh. Ở Trung ương gọi là Nha Công an Việt Nam; ở ba miền Bắc, Trung, Nam gọi là Sở Công an; ở tỉnh gọi là Ty Công an. Theo đó, hệ thống ngành dọc của lực lượng Chính trị (An ninh nhân dân) gồm: tại Nha Công an và Sở Công an kỳ có Phòng Chính trị; tại Ty Công an tỉnh có Ban Chính trị. Ngày 29/01/1947, Nha Công an ra Quyết định số A00092 về tổ chức và chương trình hoạt động của bộ máy Công an thời chiến. Theo quyết định này, Phòng Chính trị tại Nha Công an phát triển thành Ty Chính trị (sau này là Tổng cục An ninh). Ty Chính trị chỉ đạo nghiệp vụ ở Bắc Bộ và Trung Bộ; địa bàn Nam Bộ do Sở Công an Nam Bộ chỉ đạo. Ngày 05/4/1948, Bộ Nội vụ ra Nghị định số 219-NV/NĐ về “Tổ chức Nha Công an Việt Nam”. Theo đó, hệ thống ngành dọc của lực lượng Trinh sát chính trị gồm: ở Nha Công an Việt Nam có Ty Chính trị thực hiện công tác an ninh; ở các Sở Công an có Phòng Chính trị; ở Ty Công an tỉnh có Ban Chính trị; ở Công an quận có bộ phận Trinh sát chính trị. Ngày 16/02/1953, Chủ tịch Hồ Chí Minh ký Sắc lệnh số 141/SL, đổi tên Nha Công an Việt Nam thành Thứ Bộ Công an. Theo sắc lệnh, Thứ Bộ Công an có 07 đầu mối trực thuộc, trong đó Vụ Bảo vệ chính trị thực hiện công tác an ninh. Triển khai Sắc lệnh số 141/SL, ngày 13/5/1953, Thứ Bộ Công an ra Nghị định số 74-NgĐ quy định tổ chức từ Thứ Bộ đến các khu, sở, ty công an. Theo đó, ở Thứ Bộ Công an có Vụ Bảo vệ chính trị, gồm: Bộ phận Văn thư, Phòng Điều tra nghiên cứu, Phòng Trinh sát, Phòng Trinh sát địch hậu; ở liên khu có Phòng Bảo vệ chính trị; ở tỉnh có Ban Bảo vệ chính trị. Cuối năm 1954, Bộ Công an ra Chỉ thị số 373/CT-CA quy định bổ sung nhiệm vụ và cơ cấu tổ chức ở các vụ, cục thuộc Bộ. Vụ Bảo vệ chính trị gồm 5 đầu mối: Phòng Trinh sát địch hậu đổi thành Phòng Phái khiển; Phòng Trinh sát được chia thành 03 phòng (Phòng Trinh sát ngoại quốc, Phòng Trinh sát nội địa, Phòng Trinh sát ngoại tuyến) và Phòng Bảo vệ cơ quan nội chính, văn xã."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Dù mô hình tổ chức giai đoạn này có sự điều chỉnh, song phát huy thắng lợi từ chặng đường đầu tiên, trong chín năm kháng chiến chống thực dân Pháp, lực lượng An ninh nhân dân đã dựa vào nhân dân, sát cánh cùng lực lượng vũ trang, vừa triển khai thắng lợi các nhiệm vụ đấu tranh chống phản cách mạng, vừa vũ trang chiến đấu, góp phần cùng quân và dân ta dánh lùi từng bước, đánh đổ từng bộ phận kẻ thù để đi đến thắng lợi hoàn toàn. Trinh sát hoạt động ở vùng địch kiểm soát đã xây dựng được hàng chục ngàn cơ sở bí mật trong đó có hàng trăm cơ sở thâm nhập vào các cơ quan đầu não của địch ở trung ương cũng như cơ sở, thu được nhiều tin tình báo có giá trị. Trinh sát vũ trang phối hợp với lực lượng cách mạng tại chỗ, liên tục tiến hành các chiến dịch phá tề, trừ gian, phá chính quyền cơ sở của địch. Hệ thống chính quyền cơ sở của địch, nhất là ở vùng nông thôn bị phá vỡ từng mảng hoặc trở thành chính quyền “hai mang”; hàng trăm đối tượng cầm đầu gian ác như Trương Đình Chi - Chủ tịch “Hội đồng an dân Bắc Việt”, “Nguyễn Văn Sâm” - Chủ tịch mặt trận “Quốc gia liên hiệp” tại Nam Kỳ ... bị tiêu diệt ngay tại trụ sở làm việc và trên đường phố là những chiến công gây tiếng vang lớn, đẩy bọn tay sai vào tình thế hoang mang. Chiến công trên lĩnh vực này vừa khích lệ tinh thần cách mạng của quần chúng nhân dân, vừa là đòn cảnh cáo làm cho kẻ thù hoang mang, dao động. Những tấm gương cán bộ, chiến sĩ lực lượng An ninh hy sinh anh dũng, như Võ Thị Sáu, Lê Bình, Tôn Thất Cảnh, Bùi Thị Cúc, Trần Quý Lý ... đã nêu cao chí khí cách mạng, kiên cường, dũng cảm và mưu trí, ngời sáng cho các thế hệ chiến sĩ An ninh nhân dân trong suốt những chặng đường chiến đấu trưởng thành 80 năm qua."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tại các vùng hậu phương, căn cứ của ta, lực lượng An ninh nhân dân là nòng cốt tổ chức và chỉ đạo các phong trào “Ngũ gia liên bảo”, “Thập gia liên bảo”, “Bảo mật phòng gian” nhằm củng cố vững chắc chính quyền, xây dựng hậu phương vững mạnh để cung cấp nhân lực, vật lực cho kháng chiến. Thông qua phong trào quần chúng kết hợp với các biện pháp nghiệp vụ, lực lượng An ninh nhân dân cùng các lực lượng khác đã làm tốt công tác bảo vệ các chiến dịch, nhất là chiến dịch Biên giới, bảo vệ Đại hội đại biểu lần thứ II của Đảng (tháng 02/1951), bảo vệ nội bộ các cơ quan, đơn vị, bảo vệ xóm làng, tạo thế trận thiên la, địa võng bịt tai che mắt kẻ thù. Trinh sát bảo vệ chính trị ở các tỉnh chú trọng công tác bóc gỡ các đầu mối nội gián, gián điệp cài cắm, gián điệp trá hàng, gián điệp đôi, gián điệp đội lốt là con buôn, cũng như trừng trị những tên tay sai chỉ điểm. Do tiến hành đồng bộ các mặt công tác lại được nhân dân hết lòng ủng hộ nên lực lượng An ninh đã khám phá hàng chục vụ nội gián, hàng trăm ổ nhóm gián điệp, trấn áp các tổ chức phản động, đập tan âm mưu cài cắm mạng lưới gián điệp chỉ điểm của Pháp vào hậu phương ta."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong chiến cuộc Đông Xuân 1953 - 1954, đỉnh cao là chiến dịch lịch sử Điện Biên Phủ, lực lượng An ninh nhân dân cùng các lực lượng khác đã đập tan âm mưu, hoạt động của bọn tình báo gián điệp và phản động tay sai, góp phần bảo vệ bí mật chiến dịch đến giờ phút nổ súng. Trên khắp các chiến trường, lực lượng An ninh nhân dân phối hợp chặt chẽ với Quân đội nhân dân, cùng với kết quả của phong trào quần chúng “Phòng gian bảo mật” và triển khai nhuần nhuyễn các biện pháp nghiệp vụ, đã khám phá thành công các vụ án gián điệp, bắt gọn nhiều toán biệt kích của địch; trấn áp nhiều tổ chức phản động, làm tan rã nhiều tổ chức phỉ ở vùng núi Tây Bắc, Đông Bắc như: chiến dịch tiễu phỉ ở Thuận Châu của Công an khu Tây Bắc và Công an tỉnh Lai Châu ..."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-55.png",
                       "width":  1065,
                       "height":  622,
                       "alt":  "Nguồn: Báo Dân trí.",
                       "caption":  "Nguồn: Báo Dân trí.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 06/12/1953, Trung ương Đảng quyết định mở chiến dịch Điện Biên Phủ. Lực lượng An ninh tham gia bảo vệ các cuộc hành quân, trú quân của bộ đội, dân công, bảo vệ kho tàng, bảo vệ lực lượng vũ trang. Cùng với công tác bảo vệ, lực lượng An ninh nhân dân ở nhiều nơi đã bắt hầu hết các toán gián điệp biệt kích do địch tung xuống để điều tra phá hoại kho tàng, cầu cống, nơi xung yếu trên các tuyến đường giao thông quan trọng từ Thanh Hóa, Nam Định, Ninh Bình, Hà Nam, Hòa Bình lên Điện Biên Phủ. Đặc biệt, lực lượng phản gián đã phát hiện và lập chuyên án (bí số TN25) đấu tranh với toán gián điệp Pháp ở Thái Nguyên do tên Bôca điều khiển."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nếu như vụ án Ôn Như Hầu ghi một dấu son trong lịch sử lực lượng Công an nhân dân ngày đầu thành lập thì Chuyên án TN25 được coi là một chiến công xuất sắc của lực lượng An ninh nói riêng, Công an nhân dân nói chung thời kỳ kháng chiến chống Pháp."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyên án TN25 kéo dài 6 năm (1953-1958). Ta sử dụng điệp viên của địch, phương tiện liên lạc của địch để dẫn dụ chúng vào “trò chơi nghiệp vụ”, từ đó điều khiển, đập tan âm mưu của cơ quan tình báo Pháp đưa điệp viên thâm nhập vào vùng tự do và thủ đô kháng chiến, bóc gỡ nhiều đầu mối gián điệp địch cài cắm. Đặc biệt từ TN25, lực lượng Công an nhân dân đã thu được nhiều kinh nghiệm trong đánh gián điệp biệt kích Mỹ sau này…"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-56.jpg",
                       "width":  1280,
                       "height":  720,
                       "alt":  "Chuyên án TN25 và cuộc đấu trí hơn 2.000 ngày. Nguồn: Ảnh tư liệu.",
                       "caption":  "Chuyên án TN25 và cuộc đấu trí hơn 2.000 ngày. Nguồn: Ảnh tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 7/4/1951, Cao ủy kiêm Tổng tư lệnh quân viễn chinh Pháp tại Đông Dương De Lattre ký Quyết định số 174 thành lập Cơ quan tác chiến trực thuộc đại diện Tình báo chiến lược Pháp (SDECE) tại Đông Dương. Lực lượng gián điệp biệt kích này được ngụy trang dưới cái tên Binh đoàn Biệt kích Hỗn hợp nhảy dù (Groupement de Commandó Mixtes Aeroprtes, viết tắt là GCMA) do tên Thiếu tá Grall chỉ huy. Grall nguyên là Tiểu đoàn trưởng Tiểu đoàn biệt kích nhảy dù thuộc địa số 5 (5e BCCP), Tham mưu trưởng tác chiến của Binh chủng Nhảy dù Đông Dương. Hắn có nhiều kinh nghiệm trong hoạt động gián điệp biệt kích và chiến tranh du kích. Chính vì vậy, khi được cất nhắc lên vị trí chỉ huy lực lượng GCMA, Grall đã ồ ạt triển khai chi nhánh hoạt động ở các vùng trọng điểm nhằm tăng cường do thám quân sự để điều tra tình hình về cơ quan đầu não, kháng chiến, các đơn vị bộ đội chủ lực và các mục tiêu chiến lược, chiến thuật của ta. Mục tiêu trọng tâm của tình báo Pháp trong thời gian này là điều tra về bố phòng, nơi “cắm chân” của các cơ quan Đảng, Chính phủ và các đại đoàn chủ lực; sự viện trợ của các nước bạn cho Việt Nam; tình hình vận tải vũ khí, lương thực, quân sự ở vùng “thủ đô kháng chiến”, ATK… Thủ đoạn phổ biến của chúng là lợi dụng người buôn bán giữa vùng tự do với vùng tạm chiếm để mua chuộc, sử dụng họ làm gián điệp. GCMA cùng Phòng Nhì (2B) đẩy mạnh hoạt động tuyển chọn điệp viên, đưa đi huấn luyện từ 3 đến 6 tháng rồi tung vào vùng tự do hoạt động."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sau một thời gian tuyển chọn, GCMA đã “chấm” được 3 phụ nữ trẻ, xinh đẹp, nhanh nhẹn quê ở Tam Canh, huyện Bình Xuyên, Vĩnh Yên (nay là Vĩnh Phúc), đó là Chu Thị Lan, 25 tuổi; Chu Thị Hương 22 tuổi; Lê Thị Tân 18 tuổi. 3 đối tượng này được tình báo Pháp bí mật đưa đào tạo hơn 6 tháng ở một cơ sở bí mật để chuẩn bị hoạt động lâu dài. Tháng 12/1952, dưới sự điều khiển của tên quan hai Bô-ca (Brocard), Trưởng chi nhánh GCMA ở Phúc Yên (Bô-ca nói tiếng Việt giỏi như người Việt và cũng là một chuyên gia tình báo lão luyện) toán gián điệp này được phái ra vùng Đại Từ, Thái Nguyên và Bắc Giang để hoạt động, thu thập tin tức."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-57.jpg",
                       "width":  660,
                       "height":  860,
                       "alt":  "Thiếu tướng Nguyễn Quang Phòng, nguyên Tổng cục phó Tổng cục An ninh nhân dân.",
                       "caption":  "Thiếu tướng Nguyễn Quang Phòng, nguyên Tổng cục phó Tổng cục An ninh nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sau khi nghe ngóng tình hình, nhóm gián điệp này đã thuê một người dân địa phương là bà Lê Thị Hài đưa đường đến Ba Giăng, Đại Từ làm ăn để ngụy trang hoạt động. Thời gian này, lực lượng Công an nhân dân đã trưởng thành về mọi mặt, công tác nghiệp vụ được triển khai đồng bộ. Qua nguồn tin của quần chúng kết hợp với công tác trinh sát, lực lượng Công an đã phát hiện nhóm buôn bán khả nghi. Sau khi xác minh, điều tra, lực lượng Công an có đủ cơ sở để chứng minh hoạt động gián điệp của nhóm này."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thiếu tướng Nguyễn Quang Phòng, nguyên Phó Tổng cục trưởng Tổng cục An ninh thời điểm đó là Trưởng ban Nghiên cứu địch tình thuộc Bộ Công an kể lại, ngay sau khi nhận được tin báo, trực tiếp Thứ trưởng Thứ bộ Công an Trần Quốc Hoàn đã nghe lãnh đạo Vụ Bảo vệ chính trị báo cáo vụ việc. Sau khi chọn thời cơ chín muồi, cuối tháng 12/1952, đồng chí Trần Quốc Hoàn chỉ đạo cho bắt cả 3 đối tượng là Chu Thị Lan, Chu Thị Hương và Lê Thị Tân. “Sau khi bắt giữ 3 đối tượng này, đồng chí Trần Quốc Hoàn đã triệu tập cuộc họp với lãnh đạo chủ chốt các ban của Vụ Bảo vệ chính trị như: đồng chí Ngô Ngọc Du (Vụ trưởng), Tạ Khắc Diu, Tống Văn Tiếp, Nguyễn Hoàn Thành, Nguyễn Quang Phòng… (sau này đều trở thành những tướng lĩnh, lãnh đạo thuộc Tổng cục An ninh nhân dân, Bộ Công an) để họp bàn phương án đấu tranh. Với tầm nhìn chiến lược xuất sắc, đồng chí Trần Quốc Hoàn đã chỉ đạo phải “tương kế tựu kế”, dùng địch đánh lại địch” - Thiếu tướng Nguyễn Quang Phòng kể lại."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-58.jpg",
                       "width":  660,
                       "height":  495,
                       "alt":  "Máy phát động quay tay nhóm gián điệp TN25 sử dụng dưới sự khống chế của ta. (Ảnh: Bảo tàng CAND).",
                       "caption":  "Máy phát động quay tay nhóm gián điệp TN25 sử dụng dưới sự khống chế của ta. (Ảnh: Bảo tàng CAND).",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngay sau cuộc họp, từ Thứ bộ Công an, các đồng chí Tạ Khắc Diu, Tống Văn Tiếp, Nguyễn Hoàn Thành cùng nhiều trinh sát giỏi khác (trong đó có ông Đoàn Xuân Thanh) trực tiếp xuống lấy lời khai 3 nữ gián điệp vừa bị ta bắt tại Đại Từ, Thái Nguyên. Do ta có đủ chứng cứ trong tay nên qua đấu tranh khai thác, cả 3 nữ điệp viên này đều khai báo thành khẩn. Toán gián điệp do Chu Thị Lan làm nhóm trưởng có nhiệm vụ xâm nhập vào vùng hậu phương của ta, thu thập các tin tức về cơ quan đầu não kháng chiến, về địa điểm đóng quân, những biến động di chuyển của các đơn vị bộ đội chủ lực, kho tàng, bến bãiv.v..., để chỉ điểm cho máy bay bắn phá. Đặc biệt, toán gián điệp này được Bô-ca giao nhiệm vụ bằng mọi cách thu thập tình hình, di biến động của ta liên quan đến kế hoạch đánh chiếm Nà Sản (Sơn La) và phản ứng, động thái của các binh đoàn chủ lực khi Pháp chuẩn bị nhảy dù chiếm đóng và xây dựng tập đoàn cứ điểm Điện Biên Phủ. Cũng theo lời khai của 3 nữ gián điệp này, tình báo Pháp “trả công” rất hậu hĩnh nếu họ cung cấp những thông tin có giá trị. Ngoài khoản lương bổng hằng tháng, nếu báo tin, vẽ sơ đồ, vị trí đóng quân và sự di chuyển của các đại đoàn chủ lực thì nhóm này sẽ được thưởng từ 5 đến 20 vạn đồng (tiền Đông Dương); chỉ điểm cho máy bay bắn phá cầu đường quan trọng được thưởng 5 vạn đồng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thực hiện âm mưu phá hoại căn cứ kháng chiến, phá hoại các cơ quan đầu não của cách mạng, tình báo Pháp thực hiện sử dụng thủ đoạn “gián điệp trá hàng” nhằm đưa người của chúng vào vùng tự do, xâm nhập vào nội bộ ta. Trong 2 năm 1952 - 1953, lực lượng Công an đã khám phá 15 vụ gián điệp, kết luận rõ 11 vụ “gián điệp trá hàng” ở các liên khu, tỉnh. Kết quả này đem lại nhiều bài học kinh nghiệm của lực lượng phản gián trong đấu tranh chống “nội gián” ở thời kỳ sau này."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một trong những thắng lợi của Chuyên án TN25 sau năm 1954 là ta phát hiện, bóc gỡ một tổ chức gián điệp hoạt động tại Quảng Ninh do tên Nguyễn Công Năm cầm đầu. Năm nguyên là công nhân Xí nghiệp gạch Giếng Đáy, được GCMA Pháp tuyển dụng, huấn luyện. Sau này, Năm câu kết, lôi kéo được Nguyễn Đăng Nhiên, Dương Công Chỉnh và Nguyễn Văn Điều. Nhóm gián điệp trực tiếp do quan ba Phòng Nhì Camille Gouvernec chỉ huy đã cài mìn, âm mưu làm nổ phá hoại nhà máy gạch. Tuy nhiên, âm mưu hoạt động của chúng đã bị ta phá ngay từ trong trứng nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tháng 1/1958, đáp ứng yêu cầu nhiệm vụ trong tình hình cách mạng mới, Bộ trưởng Trần Quốc Hoàn (Thứ bộ Công an được đổi thành Bộ Công an tháng 8-1953) chỉ đạo chủ động kết thúc Chuyên án TN25. 6 năm với 2.190 ngày đấu trí căng thẳng giữa một bên là Phòng Nhì - cơ quan Tình báo quốc phòng hải ngoại của Pháp (Deuxième Bureau de l\u0027État-major général, Deuxième Bureau) có lịch sử hoạt động từ năm 1871 với một bên là lực lượng CAND non trẻ ra đời trong bão táp Cách mạng Tháng 8/1945. Trong cuộc đối đầu này, phần thắng đã thuộc về chúng ta. Chiến thuật “dùng người của địch, phương tiện của địch để đánh lại địch” cùng những mưu mẹo trong “trò chơi nghiệp vụ” đã nâng tầm thành nghệ thuật đánh địch, để lại nhiều bài học kinh nghiệm quý trong công tác đấu tranh chống GĐBK Mỹ những năm sau này…"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tháng 1/1958, TAND TP Hà Nội đã mở phiên tòa công khai xét xử vụ án gián điệp trong Chuyên án TN25. Tòa đã tuyên phạt Nguyễn Công Năm và Nguyễn Văn Điều 10 năm tù, Dương Công Chỉnh 3 năm tù… Riêng Chu Thị Lan và các thành viên trong nhóm, do đã ăn năn hối cải, lập công chuộc tội nên Tòa án miễn truy cứu trách nhiệm hình sự, giao cho chính quyền địa phương tạo công ăn việc làm để họ ổn định cuộc sống, hòa nhập cộng đồng…"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Những thắng lợi trên trận tuyến đấu tranh bảo vệ an ninh của lực lượng An ninh có ý nghĩa quan trọng, không chỉ phá vỡ thế liên minh giữa giặc ngoại xâm với thế lực nội gián, mà còn hỗ trợ đắc lực cho lực lượng vũ trang đánh bại các chiến dịch quân sự của địch, góp phần quan trọng vào chiến thắng lịch sử Điện Biên Phủ, đưa cuộc kháng chiến chống thực dân Pháp của nhân dân ta đến thắng lợi hoàn toàn. Ngày 21/7/1954, Hiệp định Giơnevơ về kết thúc chiến tranh, lập lại hòa bình ở Đông Dương được ký kết, cách mạng nước ta chuyển sang giai đoạn mới."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "3-luc-luong-an-ninh-nhan-dan-trong-su-nghiep-xay-dung-chu-nghia-xa-hoi-o",
                       "text":  "3. LỰC LƯỢNG AN NINH NHÂN DÂN TRONG SỰ NGHIỆP XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở MIỀN BẮC, ĐẤU TRANH GIẢI PHÓNG MIỀN NAM THỐNG NHẤT ĐẤT NƯỚC (1954 - 1975)"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thắng lợi của cuộc kháng chiến chống thực dân Pháp đã đưa cách mạng Việt Nam chuyển sang giai đoạn mới với những yêu cầu mới. Dưới sự lãnh đạo của Đảng, nhân dân ta tiến hành đồng thời hai nhiệm vụ chiến lược: cách mạng xã hội chủ nghĩa ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam nhằm mục tiêu chung là hoàn thành cách mạng dân tộc, dân chủ nhân dân trên phạm vi cả nước, thực hiện thống nhất nước nhà. Trước tình hình, nhiệm vụ, yêu cầu mới của cách mạng, mặt trận đấu tranh chống phản cách mạng vẫn luôn nóng bỏng, phức tạp vì đối tượng đấu tranh của ta là một nước đế quốc có tiềm lực mạnh, có nền khoa học vượt trội, âm mưu thâm độc, thủ đoạn tinh vi, được vũ trang hùng hậu ... Để đánh thắng kẻ thù, lực lượng An ninh nhân dân đã triển khai quyết liệt công tác nắm tình hình, xác định đường lối, phương châm, nguyên tắc, biện pháp đấu tranh và tổ chức lực lượng tham gia đấu tranh chống phản cách mạng. Dưới sự chỉ đạo sáng suốt của Đảng, ngay sau khi Hiệp định Giơnevơ được ký kết, lực lượng An ninh nhân dân ở hai miền Nam, Bắc đã chủ động triển khai thắng lợi những công tác vừa mang tính cấp bách, vừa mang tính chiến lược."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ở miền Bắc, sau khi Hiệp định Giơnevơ được ký kết, mặc dù quân đội Pháp phải rút về nước song vẫn nuôi dã tâm quay trở lại xâm lược nước ta. Thực hiện âm mưu đó, Pháp ráo riết cài cắm điệp viên, chôn giấu vũ khí và phương tiện hoạt động tại các địa bàn chúng còn kiểm soát, đặc biệt là những địa bàn quy định thời gian chuyển quân tập kết. Tại các tỉnh vùng núi, Pháp cài cắm hàng ngàn tên gián điệp biệt kích hỗn hợp nhảy dù (GCMA) nhằm xây dựng các “khu an toàn” và làm lực lượng nòng cốt cho các tổ chức phỉ. Bên cạnh thực dân Pháp, đế quốc Mỹ ráo riết triển khai âm mưu thế chân Pháp bằng việc mua chuộc bọn phản động lợi dụng tôn giáo, tiến hành kế hoạch kích động, dụ dỗ, cưỡng ép số nhân viên ngụy quân, ngụy quyền của chế độ cũ và đồng bào Công giáo di cư vào Nam nhằm gây rối an ninh, trật tự miền Bắc; tuyển chọn bọn Đại Việt đưa đi đào tạo gián điệp và đánh trở lại trong thời kỳ 300 ngày. Dưới sức ép của Mỹ, Pháp phải chuyển giao nhiều đối tượng cầm đầu các đảng phái, bọn 2B cho tình báo Mỹ sử dụng. Song song với hoạt động của Pháp và Mỹ, số ngụy quân, ngụy quyền và các đảng phái phản động do quyền lợi của chúng từng gắn chặt với ngoại xâm, nay bị tước bỏ nên chúng thâm thù với cách mạng, tìm mọi cách co cụm thành những tổ chức phản động, manh động chống phá nhằm phục hồi chế độ cũ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Căn cứ yêu cầu, nhiệm vụ của công tác an ninh trong bối cảnh lịch sử mới, Vụ Bảo vệ chính trị đã bố trí lại lực lượng theo hướng chuyên sâu và theo hệ loại đối tượng. Trên cơ sở đó, hệ thống An ninh Công an các tỉnh, thành phố cũng được củng cố cơ bản. Tháng 5/1958, Bộ Công an trình Chính phủ đề án về tổ chức mới, theo đó, tách Phòng Bảo vệ cơ quan nội chính văn xã thành lập Cục Bảo vệ cơ quan và văn hóa; tách Phòng Trinh sát ngoại tuyến trực thuộc Bộ trưởng; thành lập Cục Bảo vệ kinh tế. Ngày 22/4/1960, Bộ trưởng Bộ Công an quyết định thành lập Cục Kỹ thuật nghiệp vụ. Ngày 29/9/1961, Hội đồng Chính phủ ra Nghị định số 132/CP quy định nhiệm vụ, quyền hạn và tổ chức bộ máy của Bộ Công an. Theo đó, hệ thống tổ chức lực lượng An ninh nhân dân gồm các đơn vị: Cục Bảo vệ chính trị 1 (Phái khiển); Cục Bảo vệ chính trị 2 (Chống gián điệp và phản động); Cục Bảo vệ chính trị 3 (nghiệp vụ và kỹ thuật); Cục Bảo vệ cơ quan và văn hóa; Cục Bảo vệ kinh tế 1; Cục Bảo vệ kinh tế 2; Cục Ngoại tuyến và các cục Trinh sát hợp thành hệ Bảo vệ Chính trị. Ngày 22/2/1973, Hội đồng Chính phủ ban hành Nghị định số 32/CP sửa đổi tổ chức bộ máy của Bộ Công an. Theo đó, hệ Bảo vệ Chính trị (An ninh) có: Cục Ngoại tuyến; Cục Bảo vệ cơ quan và văn hóa; Cục Chống gián điệp (Bảo vệ chính trị 1); Cục Chống phản động (Bảo vệ chính trị 2); Cục Bảo vệ kinh tế 1; Cục Bảo vệ kinh tế 2; Cục Bảo vệ kinh tế 3; Cục Kỹ thuật 1; Cục Kỹ thuật 2; Cục Kỹ thuật 3."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Dưới sự lãnh đạo của Đảng, lực lượng An ninh phối hợp chặt chẽ với các lực lượng vũ trang và được sự cộng tác chặt chẽ của chính quyền cơ sở đã đồng loạt triển khai có hiệu quả nhiều công tác cơ bản vừa mang tính cấp bách, vừa mang tính chiến lược. Hơn 400 cán bộ, chiến sĩ được cử tham gia các đoàn công tác chống cưỡng ép di cư theo Chỉ thị số 91-CT/TW của Trung ương, hoạt động chủ yếu tại các địa bàn trọng điểm là Hải Phòng, Nam Định, Thái Bình, Thanh Hóa, Nghệ An, Quảng Bình. Lực lượng An ninh vừa tham gia vận động quần chúng rời bỏ nơi tập trung trở về quê quán, vừa tổ chức khám phá các ổ nhóm phản động làm tay sai cho Mỹ, Diệm, dụ dỗ cưỡng bức đồng bào di cư. Đã giải tán được khu tập trung gồm hơn 5.000 người ở Thái Bình cùng nhiều khu tập trung nhỏ khác; trấn áp cuộc bạo loạn ở Ba Làng, tỉnh Thanh Hóa, Trù Sơn ở Nghệ An; khám phá đường dây làm giả giấy tờ để đưa sinh viên trốn đi miền Nam ở nhà thờ Nam Đồng, Hà Nội... Hàng trăm tên phản động khoác áo tu sĩ ở các khu vực hoành hành dữ dội đã bị bắt hoặc bị cảnh cáo làm cho bọn a dua, côn đồ, bọn tay sai không dám ngang nhiên chống phá. Hoạt động có hiệu quả của lực lượng An ninh đã góp phần làm thất bại âm mưu đưa hơn 2 triệu đồng bào ta vào Nam để gây khó khăn cho miền Bắc và xây dựng chính quyền Công giáo ở miền Nam của Mỹ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngay trong thời kỳ kháng chiến chống thực dân Pháp, lực lượng An ninh đã phát hiện và nắm được âm mưu của cơ quan GCMA tung gián điệp vào các tỉnh vùng núi phía Bắc để kích động đồng bào dân tộc nổi phỉ, xây dựng các khu an toàn chờ cơ hội quay trở lại. Do triển khai tốt công tác nắm tình hình và phối hợp đồng bộ các lực lượng nên chỉ trong sáu năm ta đã tiến hành trấn áp dứt điểm các hang ổ phỉ ở các tỉnh phía Bắc Trung Bộ và phía Bắc. Chỉ tính từ tháng 7/1954 đến tháng 4/1956, tại vùng núi phía đông sông Thao ta đã bắt và diệt 483 tên GCMA, gọi hàng 4.336 tên phỉ, thu 3.796 khẩu súng. Từ năm 1955 đến năm 1959, lực lượng An ninh đã phối hợp chặt chẽ với Quân đội nhân dân và chính quyền các địa phương lần lượt giải quyết dứt điểm nạn nổi phỉ ở các tỉnh vùng núi phía Tây Bắc, Đông Bắc. Một số trinh sát được giao nhiệm vụ xâm nhập vào bộ chỉ huy đầu não của tổ chức phỉ, đã mưu trí điều được hàng chục tên tướng phỉ ra ngoài để lực lượng đón lõng bắt gọn, góp phần nhanh chóng làm tan rã tổ chức phỉ, giảm thiểu thiệt hại cho lực lượng ta. Năm 1960, hang ổ phỉ cuối cùng tại Đồng Văn bị xóa sổ, tình hình an ninh ở các tỉnh vùng núi được ổn định. Giải quyết dứt điểm nạn nổi phỉ không chỉ bảo đảm cho đồng bào các dân tộc phát triển sản xuất, cải thiện đời sống vật chất và tinh thần, mà còn tạo ra địa bàn an ninh thuận lợi để lực lượng An ninh xây dựng thế trận, đón đánh bọn gián điệp Mỹ - ngụy xâm nhập sau này."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhằm chủ động bóc gỡ mạng lưới gián điệp do Pháp, Mỹ cài lại, Vụ Bảo vệ chính trị chỉ đạo Công an các tỉnh, đặc biệt là các tỉnh nằm trong khu vực chuyển quân tập kết tăng cường công tác trinh sát, công tác khai thác hồ sơ để nắm vững vụ việc và con người có nghi vấn chính trị. Qua đó phát hiện nhiều đối tượng là ngụy quân, ngụy quyền, đảng viên phản động nhận làm việc cho các cơ quan gián điệp Pháp và Mỹ. Kết hợp với việc tiếp tục sử dụng 3 nữ điệp viên trong Chuyên án TN25, lực lượng An ninh nắm được một số mạng lưới cài cắm của chúng. Từ năm 1954 đến năm 1965, đã tiến hành đấu tranh 15 chuyên án gián điệp, bắt gần 100 tên, khai quật hàng chục kho vũ khí bí mật trong nhà dân, trong nghĩa địa, làm phương tiện hoạt động lâu dài của đội quân ngầm, có kho vũ khí đủ trang bị cho cả 01 trung đoàn. Điển hình là Chuyên án C30, được xác định là một chiến dịch phản gián hoàn hảo của lực lượng An ninh Việt Nam trong trận đầu đọ sức với cơ quan tình báo Mỹ. Chuyên án C30, một vụ án kinh điển trong đấu tranh chống gián điệp của lực lượng An ninh - Công an Việt Nam đã thể hiện quyết tâm ấy: Dám đánh Mỹ và đánh thắng giặc Mỹ ngay trong lòng miền Bắc đang xây dựng chủ nghĩa xã hội."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "xac-lap-chuyen-an-c30",
                       "text":  "XÁC LẬP CHUYÊN ÁN C30"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-59.jpg",
                       "width":  350,
                       "height":  227,
                       "alt":  "Trần Minh Châu gặp đồng bọn. Ảnh do trinh sát chụp.",
                       "caption":  "Trần Minh Châu gặp đồng bọn. Ảnh do trinh sát chụp.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cụ Ấm Di ở phố Lê Lợi (nay là Bà Triệu), Hà Nội, có anh con rể tên Nguyễn Đình Long. Tay này kẻng trai, nhưng hay huênh hoang và có thái độ ăn chơi phung phí. Vào khoảng tháng 8-1954, một hôm Long rỉ tai cho cả nhà biết: Anh ta sắp sửa được đi học tình báo ở nước ngoài. Nguồn tin này nhanh chóng được cụ Ấm Di báo cho Công an ta. Lực lượng Bảo vệ chính trị - Công an Hà Nội khẩn trương điều tra về Long, các mối quan hệ của hắn, lập hồ sơ theo dõi và có đủ cơ sở kết luận: Tên Long và một số phần tử Đại Việt đang có hoạt động phản cách mạng dưới sự chỉ đạo của cơ quan tình báo nước ngoài, cụ thể là đế quốc Mỹ. Thật “trùng khớp”, vào khoảng tháng 2-1955, khi tên Long “đi học” trở về thì cũng là lúc Công an Hải Phòng thấy Phạm Rật Đức, trú tại 47 - Phố Gas au một thời gian vắng bóng bỗng xuất hiện. Trước đó, Đức cũng bảo với mọi người là đi học ở nước ngoài. Khai thác hồ sơ và thẩm tra tin báo của cơ sở, Công an Hải Phòng phát hiện Đức và một số tên có quan hệ với hắn như Long, Lẫm, Bùi Văn Tiềm đã bị cơ quan tình báo nước ngoài tuyển dụng làm gián điệp."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-60.jpg",
                       "width":  660,
                       "height":  495,
                       "alt":  "Ban chuyên án C30 khai quật địa điểm giấu vũ khí, phương tiện hoạt động của tổ chức gián điệp do Trần Minh Châu cầm đầu (năm 1957). Ảnh tư liệu.",
                       "caption":  "Ban chuyên án C30 khai quật địa điểm giấu vũ khí, phương tiện hoạt động của tổ chức gián điệp do Trần Minh Châu cầm đầu (năm 1957). Ảnh tư liệu.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cũng trong khoảng thời gian này, các trinh sát xã hội hóa của ta là Đỗ Văn Kha (bí số T31) và Lê Huy Thái (bí số T20) được điều vào hoạt động bí mật trong tổ chức Đại Việt nắm được tin: Bọn cầm đầu tổ chức này đã tuyển lựa cho cơ quan tình báo nước ngoài một số tên đưa đi đào tạo, huấn luyện để tung trở lại miền Bắc hoạt động. Đồng thời, chúng còn móc nối gây dựng một số cơ sở ở lại miền Bắc, chờ số đã huấn luyện trở về để phối hợp hành động."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua công tác trinh sát, Công an Hà Nội phát hiện tên Phạm Văn Lan có nhiều biểu hiện nghi vấn. Hiệu cắt tóc của hắn ở phố Hàng Mành có nhiều đối tượng là người của Đại Việt và nhiều người lạ mặt thường xuyên lui tới. Cùng là “người trong tổ chức”, ông Kha đã tiếp cận được với Lan và tên này cho biết: Cao Xuân Tuyến lãnh đạo đảng Đại Việt trước khi di cư vào Nam đã đưa 5.000 đồng Đông Dương cho Lan để mở hiệu cắt tóc tạo vỏ bọc, che giấu hoạt động sẵn sàng đón người ở trong Nam ra phối hợp hành động. Từ những thông tin ban đầu hết sức quan trọng trên, lực lượng An ninh của ta có đủ cơ sở kết luận: Cơ quan tình báo Mỹ đang tiến hành tung gián điệp vào miền Bắc! Đúng như dự báo: Ngày 3-2-1955, toán đầu tiên xâm nhập về Hải Phòng trong đó có tên Long. Ngày 22-3-1955, toán thứ 2 xâm nhập trong đó có tên Trần Minh Châu (tức Cập). Toán cuối cùng xâm nhập vào cuối tháng 3-1955, trong đó có tên Xuyến."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Căn cứ kết quả điều tra, lãnh đạo Vụ Bảo vệ chính trị kịp thời báo cáo Đảng Đoàn Bộ Công an và xin lập chuyên án gián điệp để mở rộng đấu tranh. Đảng Đoàn Bộ Công an đồng ý đề nghị của Vụ và xác định chuyên án phải đặt dưới sự chỉ huy thống nhất, chặt chẽ của Bộ và phải đạt được các mục tiêu: Mở rộng điều tra, phát hiện bằng hết số đầu mối của địch; ngăn chặn âm mưu phát triển ngầm và đưa người trốn vào Nam; nắm chắc từng đối tượng, quản lý chặt các kho vũ khí và hạn chế giao thông liên lạc của chúng với trung tâm chỉ huy. Quán triệt ý kiến chỉ đạo trên, ngày 3-6-1955, Vụ Bảo vệ chính trị quyết định lập chuyên án gián điệp, đặt bí số C30 để thống nhất chỉ đạo hành động."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua các biện pháp trinh sát nghiệp vụ, Công an Hà Nội, Hải Phòng và Nam Định đã nhanh chóng làm rõ các đối tượng trong tổ chức gián điệp này, làm rõ quá trình huấn luyện của chúng ở nước ngoài."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bọn chúng gồm 16 tên được CIA huấn luyện tại đảo Guam, mỗi tên học một chuyên ngành cụ thể, thành thạo về kỹ năng hoạt động cũng như kỹ năng sử dụng phương tiện và vũ khí. Chúng tổ chức tham gia giao thông liên lạc rất đa dạng và tiến hành các quan hệ móc nối phức tạp. Hệ thống tổ chức của chúng có thể hình dung như sau: Trung tâm chỉ huy “Hải Âu” tại Sài Gòn đứng đầu là chuyên gia tình báo nước ngoài có tên Việt Nam là “Tư Cụt”, gồm 4 tên khác do Đặng Văn Sung và Cao Văn Tuyên chỉ huy."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chúng lập trạm Nam bến Hải gồm 5 tên do tên Danh cầm đầu làm nơi liên lạc với toán xâm nhập miền Bắc và đưa người từ Nam ra Bắc. Toán đánh trở lại miền Bắc do tên Trần Minh Châu (tức Cập) cầm đầu gồm 7 tên chia thành 3 tổ. Tổ ở Hải Phòng gọi là “Hải Âu” do tên Đức làm tổ trưởng. Tổ ở Hà Nội gọi là khu “An Trạch” do Cập trực tiếp làm tổ trưởng. Tổ ở Nam Định gọi là “Đồng Văn” do tên Vũ Đình Đích làm tổ trưởng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Với âm mưu thu thập các tin tức tình báo, đẩy mạnh hoạt động phá hoại, phát triển lực lượng chuẩn bị địa bàn sẵn sàng đợi thời cơ đón quân Mỹ - Diệm Bắc tiến. Để phục vụ kế hoạch “hậu chiến” này, trước đó, Trung tâm chỉ huy địch ở Sài Gòn đã sử dụng một số đảng viên Đại Việt đang sinh sống ở Hà Nội, Hải Phòng, Nam Định lập sẵn 4 hộp thư làm địa điểm liên lạc; chôn giấu bí mật vũ khí, điện đài ở 8 địa điểm trên địa bàn các tỉnh, thành trên."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Khi xâm nhập trở lại miền Bắc, lúc đầu mỗi tên làm một nghề tự do để ngụy trang, che giấu thân phận. Dần dần, chúng tìm mọi cách chui vào các cơ quan, các cơ sở sản xuất của Nhà nước để tạo vỏ bọc và chuẩn bị cho các hoạt động phá hoại. Chẳng hạn: tên Đích làm nghề sửa xe đạp ở 101 ngõ Hoa Kiều; tên Rịu mở hiệu cắt tóc ở số 7, Đồng Khánh, cùng tỉnh Nam Định; tên Long được điều về trú tại số 36 Hàng Dầu và xin vào làm tại nhà máy xay Nam Định.v.v…"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngoài thu thập tình báo, tổ chức gián điệp này còn âm mưu tiến hành nhiều vụ phá hoại các công trình kinh tế, nhà ga, bến cảng. Trong đó, chúng đã tổ chức 2 vụ đặt chất nổ nhằm phá hoại công trình thủy lợi Bắc Hưng Hải và Ga xe lửa Hải Phòng. Nghiêm trọng hơn, Cập còn chỉ đạo cho đồng bọn chuẩn bị kế hoạch đón tàu ngầm của Mỹ tiến vào vùng biển Quảng Ninh."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cập và đồng bọn đã tổ chức 5 lần vượt tuyến vào Nam báo cáo, nhận chỉ thị và kinh tài của địch. Chúng đã móc nối với 25 đầu mối ở địa bàn Hà Nội, Hải Phòng, Nam Định, Ninh Bình, Thanh Hóa, Hòa Bình, Quảng Ninh nhằm phát triển lực lượng ngầm. Tên Đích còn lên Phú Thọ tìm địa điểm chuẩn bị cho gián điệp biệt kích nhảy dù, lập chiến khu v.v.."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Khi ta biết Cập có kế hoạch phát triển lực lượng ngầm, nhằm vào số đảng viên Đại Việt, ngụy quân, ngụy quyền, Ban Chuyên án đã phối hợp với các đơn vị chức năng nhân việc đăng ký hộ tịch, hộ khẩu đã gọi hỏi, khai thác, rung dọa tất cả những đối tượng bọn Cập có thể móc nối. Do đó, Cập không thể nào phát triển lực lượng theo ý đồ của Sài Gòn, đẩy tổ chức gián điệp C30 ngày càng lâm vào tình thế khó khăn, tạo điều kiện thuận lợi cho ta “đánh” cơ sở vào hoặc “kéo” người trong tổ chức địch ra đánh lại chúng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chẳng hạn như trường hợp ông Phạm Đăng Hào vốn là cán bộ biệt động đội bị kỷ luật bỏ đơn vị vào nội thành nhưng không làm gì chống lại cách mạng và đã từng giúp đỡ trinh sát xã hội hóa của ta hoạt động trong lòng địch. Ông tham gia Đại Việt, hoạt động trong Công đoàn vàng, được Tuyên lựa chọn đi đào tạo gián điệp tại Guam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Khi về Hà Nội, ổn định chỗ ở cho đồng bọn xong xuôi, ông Hào quyết định quay về Hải Dương tìm gặp đồng chí Tự-Công an Hải Dương là người quen biết cũ nhờ liên hệ báo cáo về tổ chức gián điệp này. Do được làm tốt công tác giáo dục, cảm hóa, ông Hào trở thành người tin cậy hoàn toàn của ta và là một trong những cơ sở phát huy tác dụng tốt. Ông và ông Kha là những người được Ban chuyên án cho xâm nhập vào Trung tâm chỉ huy của địch ở Sài Gòn, dưới danh nghĩa là liên lạc của nhóm gián điệp C30."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Các ông đã trực diện đấu trí với bọn cầm đầu tại hang ổ của chúng, không những vượt qua mọi thử thách mà còn khéo léo đặt vấn đề yêu cầu chúng cấp cho một lượng lớn tài chính. Đồng thời cũng giúp ta nắm được âm mưu mở rộng hoạt động ra một số tỉnh ở miền Bắc, chuyển hướng hoạt động sang Hồng Kông của chúng, các tin tức về hoạt động biệt kích, điều chỉnh hoạt động của Cập… Đặc biệt, khi chúng đặt mìn định phá hoại Ga xe lửa Hải Phòng và công trình thủy lợi Bắc Hưng Hải, ông Hào đã kịp thời báo cáo để ta vô hiệu hóa các khối thuốc nổ, ngăn chặn âm mưu phá hoại."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Do làm tốt công tác hiệp đồng, khéo léo triển khai các chiến thuật thích hợp nên ta đã hóa giải thành công nhiều tình huống bất ngờ và bất lợi xuất hiện, bảo đảm bí mật trong suốt quá trình điều tra đấu tranh chuyên án. Một trong những tình huống đó là: Tên Panh ở trạm Nam Bến Hải có điện cho Cập, yêu cầu chuyển gấp số vũ khí ở 120G ngõ Đông An (Hải Phòng) đi nơi khác. Biết tin này, ta đã nóng vội bắt, khám xét tên Xuyến và tên Tiềm."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tình huống đó làm Cập và tên Long nghi ngờ, bí mật xuống Hải Phòng kiểm tra. Để xóa lộ, Ban chuyên án đã sử dụng ông Hào công khai tranh luận với Cập, làm cho Cập tin việc khám xét là do cơ quan thuế vụ tình cờ phát hiện, còn Xuyến và Tiềm bị bắt là do dính đến hàng cấm, nếu không có gì to tát thể nào cũng được thả. Với lý do thuyết phục đó, khi Xuyến được trả tự do, Cập vẫn tin dùng và giao cho Xuyến giữ liên lạc V.T.Đ với Sài Gòn"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Có thể thấy gần 4 năm đấu tranh chuyên án C30, Ban chuyên án đã liên tục triển khai những chiến thuật đánh địch dài ngày, áp dụng các biện pháp nghiệp vụ sắc bén và có tính tổng hợp trên địa bàn rộng lớn ở nhiều tỉnh của miền Bắc, trải dài tới Trung tâm chỉ huy của địch tại Sài Gòn. Cùng một lúc chúng ta đấu tranh với hơn 30 đối tượng là số đã được huấn luyện và các đầu mối chúng móc nối. Việc vô hiệu hóa hoàn toàn hoạt động của ổ gián điệp này, đấu tranh thắng lợi chuyên án C30, tất cả đã được thực hiện bởi một chiến dịch phản gián hoàn hảo."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 11-11-1958, Vụ Bảo vệ chính trị ra lệnh đồng loạt phá án. Công an Hà Nội, Hải Phòng, Nam Định đã bắt tổng số 12 đối tượng, khai quật 8 kho vũ khí, thu giữ 171 súng các loại (tiểu liên giảm thanh, các-bin, Thomson, súng lục, súng ám sát), 5 hòm với hàng tram viên mìn (hình dáng tựa than kíp-lê), mìn điện và dây cháy nổ, hàng nghìn chông 4 cạnh, 8 bộ điện đài, 4 la bàn, 4 ống nhóm, hàng nghìn viên đạn."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-61.jpg",
                       "width":  350,
                       "height":  230,
                       "alt":  "Phiên tòa xử vụ án C30. Ảnh tư liệu",
                       "caption":  "Phiên tòa xử vụ án C30. Ảnh tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 4-4-1959, Tòa án nhân dân Hà Nội đưa 10 tên ra công khai xét xử, tuyên phạt: Trần Minh Châu (tức Cập) tử hình, Bùi Văn Tiềm 15 năm tù, Nguyễn Đình Long 20 năm tù, Nguyễn Sỹ Hoàng 10 năm tù, Vũ Đình Bích 7 năm tù, Phạm Văn Lan 5 năm tù, Nguyễn Thị Nghĩa 3 năm tù treo… Đến lúc này, Trung tâm chỉ huy của địch ở Sài Gòn mới biết tổ chức gián điệp C30 mà chúng rất kỳ vọng cho hậu chiến để mưu đồ Bắc tiến đã bị cộng sản xóa sổ!"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đối với Chuyên án GM65, lực lượng An ninh các tỉnh Hải Phòng, Hà Đông, Sơn Tây, Phú Thọ và Hà Nội đã phối hợp chặt chẽ, làm rõ sự câu móc giữa gián điệp với phản động, phá tan âm mưu liên kết của hai loại đối tượng này hòng xây dựng lực lượng ngầm chờ quân Mỹ bắc tiến để nổi dậy làm hậu thuẫn. Chiến công bóc gỡ mạng lưới gián điệp cài cắm không chỉ có ý nghĩa đánh bại âm mưu đánh ta sau chiến tranh của cơ quan tình báo Mỹ, mà còn góp phần quan trọng vào nhiệm vụ củng cố an ninh chính trị ở miền Bắc ngày càng vững chắc, xây dựng miền Bắc thành hậu phương lớn của tiền tuyến lớn miền Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Dự đoán được âm mưu mở rộng chiến tranh ra miền Bắc của đế quốc Mỹ, lực lượng An ninh chủ động tham mưu với Đảng và Chính phủ triển khai nhiều biện pháp đấu tranh mang tính chủ động và chiến lược. Một trong những công tác đó là lực lượng An ninh phối hợp với các cấp chính quyền, các ngành tiến hành công tác “khoanh vùng trấn phản”, công tác cải tạo tại chỗ và tập trung cải tạo, nhằm quét vét hết mạng lưới tay sai cũng như cơ sở xã hội chúng có thể lợi dụng. Từ năm 1961 đến năm 1973, đã lần lượt đưa hàng ngàn đối tượng nguy hiểm cho an ninh xã hội đi tập trung cải tạo; tổ chức cải tạo tại chỗ đối với hàng ngàn đối tượng ít nguy hiểm hơn. Do đó, đã loại trừ các cuộc manh động gây bạo loạn, góp phần củng cố vững chắc các vùng xung yếu, địa bàn trọng điểm cũng như củng cố một bước hệ thống chính quyền cơ sở. Các tổ chức phản động lợi dụng tôn giáo, dân tộc, trong số ngụy quân, ngụy quyền manh động chống chính quyền cũng lần lượt bị trấn áp: dập tắt vụ xưng vua, đón vua ở Sin Hồ; trấn áp tổ chức phản động “Nhất tân dân tộc” ở Tuyên Quang, “Mặt trận thống nhất Tây Bắc” ở Văn Chấn; vụ Dào San, vụ Hồ Thầu ở Phong Thổ (Lai Châu), đặc biệt là vụ bạo loạn ở Đồng Văn (Hà Giang) cuối năm 1959, đầu năm 1960; phối hợp với bạn Lào truy quét phỉ Vàng Pao hoạt động ở vùng biên giới Việt - Lào; trừng trị linh mục phản động Lương Huy Hân ở Nam Định ... Với tinh thần kiên quyết và bền bỉ, lực lượng An ninh đã góp phần xóa bỏ cơ sở xã hội cũng như những điều kiện kẻ thù có thể lợi dụng trong âm mưu tung gián điệp, gián điệp biệt kích, tiến hành cuộc chiến tranh bí mật để mở rộng chiến tranh xâm lược ra miền Bắc."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-62.png",
                       "width":  173,
                       "height":  260,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Từ năm 1961, cơ quan tình báo Mỹ và ngụy quyền Sài Gòn đã ráo riết phát động cuộc “Chiến tranh gián điệp biệt kích” với phương châm “đánh cộng sản trong lòng cộng sản” nhằm làm cho miền Bắc suy yếu để dễ dàng thực hiện âm mưu xâm lược toàn cõi Đông Dương. Do dự đoán được âm mưu địch và chủ động chuẩn bị địa bàn đón đợi nên ngay từ toán đầu tiên ta đã bắt gọn và tiến hành “trò chơi nghiệp vụ”, đấu trí, điều khiển hoạt động của trung tâm địch. Hơn 10 năm đấu tranh bí mật với các cơ quan tình báo Mỹ, ngụy, lực lượng An ninh luôn quán triệt phương châm “quét sạch nhà để đón khách không mời mà đến”, “giữ bên trong là chính, giữ bên dưới là chính” bằng việc xây dựng thế trận an ninh toàn dân. Kết hợp nhịp nhàng giữa đấu tranh chuyên án với việc tổ chức toàn dân phòng, chống biệt kích, từ đó không những làm thất bại âm mưu địch mà còn tương kế tựu kế dụ chúng vào bẫy giương sẵn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Toán biệt kích đầu tiên nhảy dù xuống châu Phù Yên, tỉnh Sơn La đêm 27/5/1961 bị lực lượng An ninh bắt gọn và lập Chuyên án có bí số PY27. Đây là chuyên án mở đầu và là chuyên án tạo nguồn cho cuộc đấu trí, đấu mưu của lực lượng An ninh hơn 10 năm."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trước năm 1954, cơ quan Tình báo Pháp đã xây dựng mạng lưới cơ sở ở các tỉnh miền núi. Trước khi rút quân khỏi nước ta, chúng đã huấn luyện và cài lại hàng nghìn tên biệt kích ở các tỉnh vùng núi phía bắc, hòng biến số này thành lực lượng nòng cốt cho các tổ chức phỉ. Vì thế, khi Mỹ - ngụy phát động chiến tranh GÐBK ra miền bắc thật sự là một đòn ác hiểm, đe dọa trực tiếp đến ANCT và TTATXH, đến thực hiện nhiệm vụ chiến lược của toàn Ðảng, toàn dân ta là, xây dựng miền bắc XHCN, đấu tranh giải phóng miền nam, thống nhất đất nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ðảng ta đã nhận rõ âm mưu của kẻ thù từ rất sớm. Ngay sau khi Hiệp định Genève được ký kết vào tháng 7-1954, Trung ương Ðảng đã mở Hội nghị bất thường, kết luận: “Pháp đang ráo riết huấn luyện và cài GÐBK để hỗ trợ cho hoạt động phỉ; Mỹ sẽ tăng cường tung gián điệp vào các tỉnh miền núi để móc nối cơ sở, thực hiện âm mưu đánh sau lưng ta”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Từ đó, Ðảng đề ra chủ trương: “Khoanh vùng trấn phản”, “Truy bắt GÐBK, đồng thời với tiễu Phỉ”, xóa bỏ cơ sở xã hội mà kẻ địch có thể lợi dụng. Với quyết tâm đánh bại âm mưu chiến lược của kẻ thù, Trung ương Ðảng đề ra đường lối, các phương châm, nguyên tắc đấu tranh, thông qua Chỉ thị số 20-CT/T.Ư và Chỉ thị số 66-CT/T.Ư: “Phòng phải đi đôi với chống; vai trò của cấp xã là hết sức quan trọng, có vị trí chiến lược. Công tác phòng chống biệt kích là một bộ phận của cuộc đấu tranh chống phản cách mạng và ngành Công an phải là nòng cốt giúp cấp ủy trong công tác này”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Quán triệt đường lối đó, Khu ủy khu Tây Bắc chủ động tổ chức lực lượng phòng, chống GÐBK với ba nội dung cơ bản. Từ nhận thức muốn phòng, chống tốt thì phải dựa vào phong trào bảo vệ trị an vững chắc, lực lượng CAND khẩn trương triển khai công tác điều tra cơ bản, thuyết phục, giáo dục cơ sở xã hội mà kẻ địch có thể lợi dụng thành tâm cộng tác với chính quyền. Cán bộ, chiến sĩ CAND và QÐND đóng trên địa bàn đã trực tiếp hướng dẫn đồng bào các dân tộc cách nhận biết tiếng động cơ máy bay, nhận diện người khả nghi, dấu vết và cách thức liên lạc khi phát hiện nghi vấn..."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Những cuộc diễn tập truy lùng GÐBK xâm nhập được tập dượt đều đặn và thuần thục. Mọi người hừng hực khí thế vào trận như ngày hội biểu dương khí thế cách mạng tấn công địch của quần chúng do ta biết phát huy cao độ tinh thần yêu nước và cảnh giác cách mạng của mọi tầng lớp nhân dân. Ðến giữa năm 1961, công tác chuẩn bị chiến trường phòng, chống GÐBK của Mỹ ngụy trên địa bàn Tây Bắc và phụ cận đã hoàn tất, sẵn sàng chờ giặc tới, đúng như phương châm chỉ đạo của Ðảng: “Quét sạch nhà để đón khách không mời mà đến”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "22 giờ 5 phút ngày 27-5-1961, trạm cảnh giới ở khu vực châu Phù Yên (Nghĩa Lộ) phát hiện tiếng máy bay lạ đã lập tức báo động. Lực lượng quân đội, công an, dân quân cùng đông đảo nhân dân địa phương khẩn trương tổ chức truy lùng GÐBK theo kế hoạch. Ðiểm cao 828 thuộc bản Hỳ (Phiêng Ban, Phù Yên) được xác định là nơi GÐBK nhảy dù đã bị bao vây chặt. Sáng sớm ngày 28-5, tên Lò Văn Piếng, trung sĩ nhất truyền tin bị bắt khi đang chuẩn bị máy vô tuyến điện định liên lạc về trung tâm chỉ huy địch."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngay sau đó, các tên Quách Thức, Lò Văn Phéng và Hà Văn Chấp (toán trưởng toán GÐBK) lần lượt bị bắt. Sau ba ngày truy lùng khẩn trương, ta đã bắt toàn bộ toán GÐBK gồm bốn tên, thu toàn bộ phương tiện hoạt động khi chúng chưa kịp liên lạc về trung tâm. Qua khai thác toán Castor (mật danh của toán GÐBK này), ta đã nắm được các mật khẩu an ninh và quy ước liên lạc với trung tâm chỉ huy địch. Toán trưởng Hà Văn Chấp và nhân viên truyền tin Lò Văn Piếng tỏ ra ăn năn và tình nguyện lập công chuộc tội. Khống chế được toán trưởng và nhân viên truyền tin là điều kiện tiên quyết để ta mở hướng đấu tranh mới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sau khi nghe lãnh đạo Cục Bảo vệ Chính trị trực tiếp báo cáo về vụ Castor, Bộ trưởng Công an Trần Quốc Hoàn chỉ đạo: “Lập chuyên án đấu tranh nhằm đi sâu tìm hiểu âm mưu địch từ cơ quan đầu não của chúng; nắm cho được số biệt kích chúng đang huấn luyện; dụ chúng đưa hết số biệt kích đã huấn luyện ra bắc để bắt”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lúc 12 giờ 30 phút ngày 9-6-1961, ta cho liên lạc phiên đầu tiên với trung tâm chỉ huy địch. Nhận được thông tin từ nhóm Castor, Bộ chỉ huy địch ở Sài Gòn mừng rơn vì cho là Castor an toàn, hẹn đêm 1-7-1961 sẽ tiếp tế hàng và tăng thêm người."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Quân dịch hý hửng dùng máy bay C47 thực hiện chuyến tiếp tế đầu tiên cho Castor. Nhưng đã xảy ra tình huống ngoài dự kiến khi chiếc C47 bị bắn rơi tại Ninh Bình. Trung tâm chỉ huy địch nghi ngờ Castor bị ta khống chế cho nên đã tiến hành hàng loạt các biện pháp kiểm tra an ninh trong suốt tám tháng liên tục. Ban chuyên án đã khôn khéo thỏa mãn các yêu cầu của địch, buộc chúng tin rằng Castor vẫn an toàn. Kể từ đây, mọi hoạt động của trung tâm chỉ huy địch tại Sài Gòn đều nằm trong vòng kiểm soát và điều khiển của Cơ quan An ninh ta. Trung tâm chỉ huy địch thông báo cho Castor sẽ tăng cường thêm người và tiếp tế hàng theo yêu cầu."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Từ toán Castor, ta đã sử dụng “trò chơi nghiệp vụ” câu nhử địch để mở rộng tiếp ba chuyên án khác; bắt và tiêu diệt 55 tên GÐBK, thu 140 kiện hàng (trong đó có nhiều phương tiện hoạt động GÐBK hiện đại), góp phần phá hủy hai máy bay địch. Toàn bộ phương tiện hoạt động GÐBK thu được ta đã chuyển ngay vào miền nam để lực lượng an ninh tập kích vào các cơ quan ngụy quân, ngụy quyền địch."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Khai thác số GÐBK bị bắt, ta không chỉ nắm được căn bản âm mưu của địch mà còn nắm được cụ thể tên tuổi, quê quán số biệt kích đang được huấn luyện, sắp được tung ra miền bắc. Có nhiều toán ta biết trước cả thời gian và địa bàn chúng sẽ xâm nhập để tổ chức đón bắt. Sau gần sáu năm đấu tranh, chuyên án GÐBK có bí số PY27 kết thúc. Theo kế hoạch của ta, ngày 4-7-1967, Castor thực hiện phiên liên lạc cuối cùng và nửa chừng bỏ máy."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyên án kết thúc. Ðến lúc đó kẻ địch vẫn không hay biết chúng đã mắc bẫy “trò chơi nghiệp vụ” của lực lượng An ninh ta. Vì thế, các chuyên án đấu tranh chống GÐBK khác vẫn được Cơ quan An ninh tiếp tục đến năm 1973 bảo đảm bí mật tuyệt đối."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Từ năm 1961 đến năm 1973, lực lượng An ninh tổ chức đấu tranh 27 chuyên án theo chiến thuật “trò chơi nghiệp vụ”, góp phần bắt và diệt hơn 103 toán gián điệp biệt kích gồm 885 tên xâm nhập bằng đường không; thu hàng trăm tấn vũ khí hiện đại, thuốc nổ, máy thông tin, phương tiện chiến tranh tối tân. Song song với đón bắt, truy lùng biệt kích xâm nhập bằng đường không, lực lượng An ninh xây dựng phòng tuyến an ninh vững chắc đối với các tỉnh duyên hải và các tỉnh giáp biên giới với Lào thành thế trận an ninh toàn dân phòng, chống biệt hải, phòng, chống biệt kích xâm nhập qua biên giới. Từ năm 1964 đến năm 1973, đã đánh đuổi 75 toán biệt hải xâm nhập, không để chúng phá hoại được bất kỳ công trình quốc phòng, giao thông nào; đánh đuổi 135 toán xâm nhập qua biên giới, đập tan âm mưu móc nối với người Mông xây dựng lực lượng ngầm trên tuyến biên giới Việt - Lào. Chiến công trong phòng, chống biệt kích khẳng định giá trị to lớn của phong trào quần chúng bảo vệ an ninh Tổ quốc; khẳng định chiến thuật “dùng người của địch, phương tiện của địch để đánh lại địch” đã được nâng lên thành nghệ thuật."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cùng với đánh bại cuộc chiến tranh gián điệp biệt kích, lực lượng An ninh khám phá hàng chục chuyên án gián điệp Mỹ và đồng minh; đánh bại hoàn toàn chiến thuật đánh gián điệp con thoi, vượt biên, vượt tuyến và sử dụng điệp viên là người của nước thứ ba cài cắm vào nội bộ ta. Trong đó đã phát hiện, vô hiệu hóa hàng chục đầu mối đánh vào nội bộ ta qua con đường Việt kiều hồi hương về xây dựng Tổ quốc hoặc học sinh và cán bộ miền Nam ra Bắc học tập, công tác, một số vụ án điệp viên của đối phương đã thâm nhập vào các cơ quan Đảng và chính quyền."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cũng trong giai đoạn này, Đảng và Nhà nước mở rộng hợp tác quốc tế, các đoàn lâm thời, thường trú của các nước xã hội chủ nghĩa, trung lập, kể cả tổ chức phi chính phủ của các nước tư bản vào nước ta ngày một tăng. Nhân viên của một số nước đã bị Mỹ lợi dụng để tổ chức hoạt động gián điệp thông qua phương thức lâm thời và thường trú. Lực lượng An ninh đã tổ chức quần chúng, xây dựng thế trận bao vây, giám sát mọi hoạt động của địch. Qua đó, đã phát hiện hàng chục đầu mối gián điệp hoạt động theo phương thức lâm thời, thường trú, lần lượt lập án đấu tranh, vô hiệu hóa âm mưu địch nhưng vẫn bảo đảm yêu cầu đối ngoại của Đảng và Nhà nước. Đặc biệt, từ năm 1961 đến năm 1973, lực lượng An ninh tiến hành 3 kế hoạch phản gián có bí số B12, M1 và M2 để đấu tranh với cơ quan tình báo đối phương. Với sự phối hợp hiệp đồng chặt chẽ, đồng bộ giữa các lực lượng Trinh sát, 3 kế hoạch được triển khai có hiệu quả, bảo đảm tuyệt đối bí mật, thu hàng ngàn tin tình báo rất có giá trị, có tính thời sự, kịp thời báo cáo Trung ương Đảng và Chủ tịch Hồ Chí Minh. Những tài liệu thu được đã góp phần quan trọng để Đảng ta hoạch định chiến lược, sách lược trong đối ngoại cũng như lãnh đạo cuộc kháng chiến chống Mỹ, cứu nước thắng lợi."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đặc biệt, kế hoạch khống chế đường giao thông và khu vực hoạt động của tổ chức gián điệp đế quốc “Kế hoạch M” được triển khai gồm các thế hệ cán bộ, chiến sĩ đầu tiên của nhiều đơn vị An ninh (được đặt tên là 19/5 vinh dự mang ngày sinh của Chủ tịch Hồ Chí Minh kính yêu). Trong suốt 14 năm thực hiện “Kế hoạch M” từ năm 1963, lực lượng trinh sát kỹ thuật đã vượt qua nhiều khó khăn, tận tụy, mưu trí, sáng tạo, xâm nhập hàng trăm đợt, thức trắng 500 đêm, thu thập, xử lý hàng vạn trang tài liệu vô cùng quý giá phục vụ cho cuộc kháng chiến. “Kế hoạch M” là một chiến công xuất sắc của ngành Công an nói chung và lực lượng An ninh nhân dân nói riêng do được sử dụng tổng hợp sức mạnh của nhiều lực lượng nghiệp vụ trinh sát, sự mưu trí kết hợp tinh thần sáng tạo và sử dụng thành thạo phương tiện kỹ thuật."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trên lĩnh vực bảo vệ Đảng, lực lượng An ninh phát hiện sớm, quản lý chặt hai loại đối tượng câu móc với một số cán bộ cao cấp nhằm điều chỉnh đường lối của Đảng ta để có lợi cho họ. Nhờ đó, Đảng đề ra đối sách vô hiệu hóa âm mưu của các đối tượng này. Năm 1969, được sự đồng ý của Bộ Chính trị, lực lượng An ninh bắt những đối tượng chính, trục xuất kẻ chỉ đạo có thân phận ngoại giao, làm thất bại hoàn toàn kế hoạch đấu tranh trên nghị trường."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ở miền Nam, sau khi Hiệp định Giơnevơ ký kết, số cán bộ, chiến sĩ chưa bị lộ được lệnh tiếp tục ở lại hoạt động trong lòng địch. Thời gian này kẻ thù tiến hành những chính sách đàn áp dã man và truy bức tinh thần của nhân dân ta hòng tách cán bộ cách mạng ra khỏi quần chúng. Để duy trì hoạt động của các cơ quan, lực lượng An ninh tập trung tiến hành công tác xây dựng cơ sở và chắp nối liên lạc. Năm 1955, các Ban Địch tình của Đảng được thành lập. Hầu hết các chiến sĩ An ninh đang hoạt động bí mật được chuyển sang các Ban Địch tình, vừa làm công tác bảo vệ các đồng chí lãnh đạo, các cơ quan của Đảng, vừa tiến hành công tác nắm tình hình địch phục vụ yêu cầu chỉ đạo đấu tranh chính trị của các tổ chức cơ sở đảng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Năm 1961, Ban An ninh Trung ương Cục miền Nam được thành lập và năm 1962, An ninh Trung ương Cục ra quyết định thành lập “Tiểu ban Bảo vệ chính trị”. Sau Hội nghị An ninh toàn miền lần thứ nhất, ngày 21/3/1963, lực lượng “Bảo vệ chính trị” thuộc Ban An ninh các tỉnh lần lượt được thành lập với nhiệm vụ chủ yếu là “Thu thập tin tức âm mưu, hoạt động của địch để bảo vệ các tổ chức cơ sở đảng, bảo vệ đoàn thể cách mạng, bảo vệ quần chúng nhân dân; thâm nhập vào các cơ quan đầu não, tổ chức đánh địch trong lòng địch”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cùng với quá trình phát triển lực lượng tại chỗ, lực lượng Bảo vệ chính trị còn được An ninh miền Bắc chi viện kịp thời hàng ngàn cán bộ dày dạn kinh nghiệm, các loại phương tiện, tài liệu nghiệp vụ, giáo trình giảng dạy. Có sự chi viện toàn diện của An ninh miền Bắc, lực lượng Bảo vệ chính trị toàn miền Nam đã triển khai các mặt công tác kịp thời và có hiệu quả: Nắm được kế hoạch nhiều cuộc hành quân của địch để thông báo tới các cơ quan kháng chiến chủ động sơ tán; khám phá nhiều đầu mối, kế hoạch cài cắm nội gián của Mỹ, ngụy vào các cơ quan, đoàn thể kháng chiến; diệt ác trừ gian, bảo đảm an toàn và thông suốt cho các tuyến giao thông, kể cả những thời điểm khó khăn nhất. Lực lượng Bảo vệ chính trị toàn miền đã xây dựng được hàng ngàn cơ sở trong các cơ quan tình báo, cảnh sát; có nhiều cơ sở thâm nhập vào những vị trí quan trọng, thiết yếu trong bộ máy chính quyền ngụy. Tin tức thu được đã góp phần quan trọng giúp Trung ương Cục chỉ đạo cuộc kháng chiến, nhất là giúp các cơ quan ứng phó kịp thời với hoạt động của địch. Từ năm 1961 đến năm 1965, lực lượng An ninh miền Nam đã khám phá 458 vụ nội gián; phát động 19.463.606 lượt quần chúng đứng lên đấu tranh, phá 4.248 ấp chiến lược, 10 khu trù mật ở 87 xã, giải phóng hàng chục vạn dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng Bảo vệ chính trị ở các vùng giải phóng xây dựng và củng cố vững chắc phong trào quần chúng bảo vệ an ninh, trật tự; phối hợp với các cơ quan, đoàn thể trừ gian, đánh đuổi biệt kích, bảo vệ xóm làng làm căn cứ địa và địa bàn an toàn cho lực lượng vũ trang ta hoạt động. Tiểu ban Bảo vệ chính trị xây dựng kế hoạch và chỉ đạo lực lượng Bảo vệ chính trị toàn miền, lần lượt làm thất bại 2 kế hoạch tình báo chiến lược của Mỹ là: “Tình báo đại chúng” từ 1964 đến năm 1968; “Kế hoạch Phượng Hoàng” từ năm 1968 đến năm 1975. An ninh miền Nam không những đã tham mưu với Đảng từng bước đánh bại 2 kế hoạch trên, mà còn “tương kế tựu kế” đưa cơ sở ta vào hàng ngũ địch. Từ năm 1965, Tiểu ban Bảo vệ chính trị mở các lớp đào tạo, bồi dưỡng nghiệp vụ cho cán bộ, chiến sĩ An ninh toàn miền, góp phần bổ sung lực lượng tại chỗ, có trình độ nghiệp vụ đủ sức đáp ứng yêu cầu công tác và chiến đấu. Hàng ngàn cán bộ, chiến sĩ được đào tạo ngắn hạn và dài hạn, khi trở về địa phương đều là đội ngũ cốt cán, phát huy tác dụng tốt."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975, lực lượng Bảo vệ chính trị nhanh chóng chiếm các cơ quan tình báo, cảnh sát của địch; thu hồi hầu hết hồ sơ tài liệu của chúng phục vụ công tác đánh địch lâu dài. Đã phối hợp với các lực lượng vũ trang tổ chức cho ngụy quân, ngụy quyền trình diện; phân loại đối tượng, tổ chức cho họ học tập cải tạo theo quy định của Ủy ban Quân quản. Lực lượng An ninh các tỉnh phối hợp chặt chẽ với Quân đội nhân dân, tiến hành truy bắt hơn 50.000 đối tượng trốn trình diện, trấn áp hơn 500 toán vũ trang co cụm trong rừng, trấn áp một số tổ chức phản động là tàn dư của ngụy quân, ngụy quyền manh động bạo loạn. Mặc dù phải tập trung lực lượng để giữ gìn an ninh, trật tự, bảo đảm cho đồng bào ổn định cuộc sống trong thời gian đầu mới giải phóng, nhưng lực lượng An ninh các tỉnh phía Nam đã hoàn thành xuất sắc những nhiệm vụ cơ bản, cấp bách, phục vụ cho công tác đánh địch trước mắt và lâu dài."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trải qua 21 năm vừa kháng chiến chống đế quốc Mỹ, vừa xây dựng chủ nghĩa xã hội, lực lượng Công an nhân dân trong đó có lực lượng An ninh nhân dân đã đồng hành cùng dân tộc tiến hành cuộc đấu tranh khẩn trương, quyết liệt, phức tạp, gay go, đánh bại cuộc chiến tranh gián điệp, chiến tranh tâm lý của đế quốc Mỹ và tay sai; bảo vệ sự đoàn kết, thống nhất trong Đảng, bảo vệ tài sản xã hội chủ nghĩa, bảo vệ tính mạng, tài sản của nhân dân; trấn áp các hoạt động phá hoại, gây rối của bọn phản cách mạng và tội phạm khác; giữ vững an ninh, chính trị và trật tự xã hội ở miền Bắc trong điều kiện có chiến tranh phá hoại vô cùng ác liệt. Ở miền Nam, lực lượng An ninh nhân dân đã kiên trì bám đất, bám dân, diệt ác, phá kìm, đấu tranh kiên cường chống lại cuộc chiến tranh bình định, chiến tranh tâm lý, các hoạt động chiêu hồi, tình báo của địch, góp phần vào thắng lợi của cuộc kháng chiến chống Mỹ, cứu nước, giải phóng hoàn toàn miền Nam, thống nhất Tổ quốc."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "4-luc-luong-an-ninh-trong-nhung-nam-dau-xay-dung-bao-ve-to-quoc-viet-nam",
                       "text":  "4. LỰC LƯỢNG AN NINH TRONG NHỮNG NĂM ĐẦU XÂY DỰNG, BẢO VỆ TỔ QUỐC VIỆT NAM XÃ HỘI CHỦ NGHĨA (1975 - 1986)"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975 mà đỉnh cao là chiến dịch Hồ Chí Minh lịch sử thắng lợi đã đưa cách mạng nước ta chuyển sang giai đoạn mới với những thuận lợi và thách thức mới: Cả nước thực hiện nhiệm vụ xây dựng và bảo vệ Tổ quốc xã hội chủ nghĩa."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tuy đất nước đã hòa bình nhưng nhiệm vụ bảo vệ an ninh lại đặt ra những yêu cầu mới, thách thức mới cam go, phức tạp. Mặc dù hệ thống chính quyền cơ sở được củng cố nhanh chóng, nhưng nhiều vấn đề bức xúc đã xuất hiện, cần được giải quyết. Sau ngày giải phóng, toàn miền Nam có hơn 1 triệu ngụy quân, ngụy quyền, hơn 2 triệu đảng viên thuộc các đảng phái chính trị phản động tan rã tại chỗ. Một số không nhỏ, có thâm thù với cách mạng, trốn trình diện, trốn cải tạo. Chúng thay đổi địa bàn sinh sống, che giấu lý lịch và trà trộn trong dân; một lực lượng không nhỏ trốn trong rừng, co cụm thành những ổ nhóm vũ trang manh động chống chính quyền. Mấy năm sau giải phóng, bọn tàn dư của chế độ cũ đã nhen nhóm tới 1.182 tổ chức phản động. Tại các tỉnh Tây Nguyên, số người chạy vào rừng theo FULRO ngày càng đông, với nhiều thành phần khác nhau. Lực lượng FULRO ở trong rừng cũng thành lập bộ khung chính quyền và có tới hàng ngàn tay súng. Chúng tập kích trên các tuyến đường, tấn công trụ sở cơ quan, khống chế chính quyền ở nhiều buôn, ấp. Dần dần FULRO phát triển tới khu vực Nam Trung Bộ, trong dân tộc Chăm, Khơme. Bọn tình báo, cảnh sát ngụy cũ đã từng gây nhiều tội ác và hận thù với cách mạng tìm mọi cách móc nối với bọn gián điệp cài lại, số điệp viên khoác áo tu sĩ “kẹt lại” và một số đầu mối nội gián trong kế hoạch hậu chiến ... Nhiều tên đã móc nối với tổ chức phản động, gây bạo loạn ở một số địa bàn. Tình hình an ninh chính trị ở miền Nam sau giải phóng diễn biến hết sức phức tạp, điều kiện kinh tế ngày càng khó khăn, dẫn đến nhiều vấn đề gây bức xúc, đã xuất hiện những nguy cơ bất ổn và ngày càng trầm trọng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trước diễn biến phức tạp của tình hình, cuối năm 1975, đầu năm 1976, Bộ Công an triệu tập Hội nghị Công an toàn quốc lần thứ 30 tại Hà Nội, thống nhất lực lượng Công an nhân dân trên toàn quốc, thành lập Công an các tỉnh phía Nam. Hội nghị đề ra 8 nhiệm vụ chủ yếu đối với công tác công an, trong đó nhấn mạnh: “Nhiệm vụ trong năm 1976 là đấu tranh có hiệu quả với các loại phản cách mạng và các loại tội phạm hình sự, giữ vững an ninh chính trị và trật tự an toàn xã hội trên cả nước…”. Quán triệt tinh thần của Hội nghị, lực lượng An ninh miền Bắc tiếp tục tăng cường cán bộ có kinh nghiệm, luân phiên cử các đồng chí lãnh đạo trong hệ bảo vệ chính trị, bảo vệ nội bộ vào các tỉnh phía Nam để tập trung đấu tranh chuyên án. Bộ thành lập Phòng Chống nội gián, đặt tại KE3, thành lập các đội chống nội gián tại các tỉnh trọng điểm nhằm bóc gỡ hết mạng lưới nội gián do Mỹ - ngụy cài lại theo Chỉ thị số 17-CT/TW của Trung ương Đảng; thành lập An ninh cụm II đặt tại Lâm Đồng để chỉ đạo và tổ chức đấu tranh chống FULRO theo Chỉ thị số 04-CT/TW, ngày 02/02/1977 của Ban Bí thư Trung ương Đảng; thành lập An ninh cụm III đặt tại Thành phố Hồ Chí Minh để trực tiếp chỉ đạo và tổ chức đấu tranh chống phản động, gián điệp, bảo vệ nội bộ tại Thành phố Hồ Chí Minh và các tỉnh Nam Bộ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đồng thời, lực lượng An ninh đã chủ động điều chỉnh tổ chức, bố trí lại lực lượng theo hướng chuyên sâu, tập trung vào những địa bàn trọng điểm (Ngày 12/6/1981, Hội đồng Chính phủ ban hành Nghị định số 250/CP quy định nhiệm vụ, quyền hạn và tổ chức của Bộ Nội vụ, theo đó, thành lập Tổng cục An ninh nhân dân, gồm 12 đơn vị: Cục Tham mưu ANND (A12); Cục Tình báo (A13); Cục Chống gián điệp TQ (A14); Cục Chống gián điệp Mỹ và gián điệp khác (A15); Cục Chống phản động (A16); Cục An ninh kinh tế, văn hóa, tư tưởng (A17); Cục Quản lý người nước ngoài và xuất cảnh, nhập cảnh (A18); Cục Quản lý cửa khẩu (A19); Cục Ngoại tuyến (A21); Cục Kỹ thuật nghiệp vụ 1 (A22); Cục Kỹ thuật nghiệp vụ 2 (A23); Cục An ninh điều tra xét hỏi (A24)), đổi mới các biện pháp nghiệp vụ với phương châm “Nắm địch từ xa, đánh địch từ nơi chúng xuất phát” nhằm vô hiệu hóa, đẩy lùi, đập tan mọi kế hoạch và hoạt động của kẻ thù; chú trọng công tác xây dựng, củng cố, đổi mới phong trào “Bảo vệ an ninh Tổ quốc” có bề rộng và có chiều sâu. Các cơ quan, đơn vị và nhân dân đều tham gia tích cực công tác an ninh, tạo thành thế trận phòng và chống có hiệu quả."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong đấu tranh chống gián điệp, phản động, lực lượng An ninh tập trung rà soát, phân loại số nhân viên tình báo, tay sai cũ và làm rõ những đầu mối gián điệp cài lại hoặc ở lại với vỏ bọc hợp pháp. Trong năm 1978, đã đẩy đuổi hơn 100 gián điệp ngoại quốc khoác áo linh mục “bị kẹt lại” (Richard White, Harry Lemeiter, Paul Seiist ... ); bắt hàng trăm tên gián điệp cài lại, tay sai cũ nhận nhiệm vụ hoạt động cho địch sau chiến tranh. Từ năm 1976 đến năm 1986, lực lượng An ninh chú trọng thực hiện công tác chống nội gián; khai thác hàng chục ngàn hồ sơ, thẩm tra hàng trăm tên nguyên là sĩ quan điều khiển; bóc gỡ hàng trăm đầu mối, kế hoạch nội gián, có những đầu mối đã chui sâu vào nội bộ ta trong các cơ quan đảng, chính quyền và lực lượng vũ trang; đã giải oan hàng chục trường hợp là cán bộ cách mạng trung kiên bị địch lập hồ sơ giả để bôi lem. Điển hình, như: Công an tỉnh Bình Định phát hiện vụ nội gián trong kế hoạch Hải Triều của Cảnh sát đặc biệt đánh vào Thị ủy Quy Nhơn do Võ Tám cầm đầu; Ty Công an Đồng Nai điều tra phát hiện và bóc gỡ mạng lưới nội gián tại Xí nghiệp dệt Phong Phú do Nguyễn Tấn Thời cầm đầu ..."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sau thất bại trong hai cuộc chiến tranh ở biên giới Tây Nam và phía Bắc, bọn phản động quốc tế phát động “kiểu chiến tranh phá hoại nhiều mặt”, các thế lực phản động quốc tế câu kết với những phần tử chống đối bên trong huấn luyện gián điệp, biệt kích từ bên ngoài về, tổ chức đưa lực lượng, vũ khí, chất nổ xâm nhập vào trong nước lập căn cứ, phát triển tổ chức, móc nối với phản động nội địa tiến hành vũ trang bạo loạn nhằm lật đổ chính quyền. Thời kỳ này, tình hình kinh tế, xã hội đất nước ta đang có nhiều khó khăn, an ninh chính trị và trật tự, an toàn xã hội diễn biến phức tạp và phát triển theo chiều hướng xấu. Bọn phản động lưu vong cho là thời cơ lật đổ chính quyền cách mạng đã đến, chúng tập hợp thành hơn 200 tổ chức (ở một số nước như Mỹ, Pháp, Canada, Cộng hòa Liên bang Đức, Ôxtrâylia ... ), móc nối với bọn phản động quốc tế để nhận tài trợ và chỉ đạo; đồng thời khuếch trương thanh thế để phát triển lực lượng. Dần dần, chúng chuyển về các nước trong khu vực, xây dựng căn cứ làm bàn đạp và tổ chức xâm nhập về nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Quán triệt Nghị quyết số 03-NQ/TW, ngày 26/06/1980 của Bộ Chính trị về “Toàn Đảng, toàn dân đánh thắng kiểu chiến tranh phá hoại nhiều mặt của các thế lực thù địch”, chủ động tiến hành công tác điều tra cơ bản, được nhân dân hỗ trợ, có sự phối hợp chặt chẽ của Quân đội nhân dân và đặc biệt là sự hợp tác của các nước trong khu vực, lực lượng An ninh đã phát hiện âm mưu địch ngay khi chúng tập hợp lực lượng, tổ chức đánh địch ngay từ căn cứ bàn đạp. Trong quá trình đánh địch, ta dự đoán được hướng xâm nhập, kể cả mục tiêu và đối tượng chúng sẽ móc nối nên chủ động xây dựng thế trận đón đợi, buộc địch phải hoạt động trong sự điều khiển của ta. Từ năm 1980 đến năm 1986, lực lượng An ninh đã phối hợp đồng bộ giữa Trung ương và địa phương để triển khai các biện pháp nghiệp vụ; huy động các đơn vị trinh sát chuyên ngành, tập trung chỉ huy chỉ đạo để thực hiện thắng lợi nhiều chiến dịch phản gián dài ngày với hàng ngàn đối tượng ở trong nước và nước ngoài, trên địa bàn rộng. Do đó đã bắt và diệt toàn bộ số biệt kích xâm nhập, thu toàn bộ vũ khí, phương tiện chúng chuyển vào nội địa; có chiến dịch, ta bắt và diệt 151 tên, gồm cả những tên cầm đầu tổ chức. Bộ Công an xác định: “Thắng lợi của Kế hoạch CM12 là một trong những trận đánh hay nhất, lớn nhất và an toàn nhất của lực lượng Công an Nhân dân Việt Nam kể từ sau ngày miền Nam hoàn toàn giải phóng. Là thắng lợi của trí tuệ, bản lĩnh và sự sáng tạo tuyệt vời của lực lượng CAND; trong đó, chủ công là lực lượng An ninh Nhân dân”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bí số CM12 (Kế hoạch phản gián CM12) do đồng chí Phạm Hùng - Chủ tịch Hội đồng Bộ trưởng (nay là Chính phủ), Bộ trưởng Bộ Nội vụ (nay là Bộ Công an) đặt tên trong kế hoạch đấu tranh với tổ chức phản động “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam” do Lê Quốc Túy (SN 1929) và Mai Văn Hạnh (SN 1928) cầm đầu, kéo dài ròng rã 3 năm trời (tháng 9/1981 - 9/1984). Trung tâm chỉ huy kế hoạch phản gián tại Hòn Đá Bạc (thuộc xã Khánh Bình Tây, H.Trần Văn Thời, tỉnh Cà Mau). Hiện địa danh này được Bộ Văn hóa - Thể thao và Du lịch công nhận là di tích lịch sử - văn hóa Quốc gia. Nơi đây có Nhà truyền thống, Tượng đài chiến thắng CM12."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Vào những năm đầu thập niên 80 của thế kỷ 20, không cam chịu thất bại sau năm 1975, các tổ chức phản động được hậu thuẫn của ngoại bang tìm mọi cách chống phá quyết liệt. Trong đó, nổi cộm nhất là tổ chức “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam” (gọi tắt là “mặt trận”) do Lê Quốc Túy và Mai Văn Hạnh cầm đầu. Chúng cài cắm “chân rết” hoạt động chống phá tại khắp các tỉnh phía Nam, vươn ra các nước trong khu vực và trải dọc biển Đông đến vùng đảo cực Bắc Tổ quốc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đầu năm 1981, Lê Quốc Túy và Mai Văn Hạnh tổ chức cho một toán biệt kích gián điệp lấy tên là “Minh Vương 1” gồm 23 tên xâm nhập vào nước ta bằng đường bộ. Đây là toán xâm nhập mở đầu cho một “kế hoạch lớn” của Túy và Hạnh cùng bọn phản động quốc tế. Tuy nhiên, vừa đến khu vực rừng U Minh Thượng, nhóm này bị ta phát hiện, truy lùng, bắt gần hết, một số tên bị tiêu diệt. Ta thu giữ điện đài, vũ khí cùng nhiều phương tiện hoạt động của chúng. Từ thời điểm này, Bộ Nội vụ (nay là Bộ Công an) đã chỉ đạo lập kế hoạch đấu tranh. Kế hoạch CM12 ra đời. CM là Cà Mau, 12 là ngày 12/5/1981 - địch khởi động chiến dịch “Minh Vương 1”)."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-63.jpg",
                       "width":  1000,
                       "height":  707,
                       "alt":  "Hình ảnh của đối tượng Lê Quốc Túy và Mai Văn Hạnh.",
                       "caption":  "Hình ảnh của đối tượng Lê Quốc Túy và Mai Văn Hạnh.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Túy, Hạnh không hề biết các toán biệt kích “mở đường” từ đầu năm 1981, kể cả toán “Minh Vương 1” đều đã bị ta bắt gọn, khống chế, thuyết phục một số đối tượng quan trọng để dùng vào “trò chơi nghiệp vụ” phát về “trung tâm” (đặt ở nước ngoài) những bức điện “tươi sáng” nên chúng hí hửng lập kế hoạch “Minh Vương 2”. Lần này chúng không di chuyển bằng đường bộ mà thâm nhập bằng đường biển. Toán này có nhiệm vụ luồn sâu vào rừng U Minh Thượng lập mật cứ kháng chiến để tiếp nhận vũ khí, thuốc men, lương thực, tiền bạc từ các chuyến tàu biển chuyển đến sau đó. Chúng còn có nhiệm vụ nghiên cứu, lập ra những biệt đội ám sát, dùng chất nổ phá hoại những mục tiêu quan trọng ở các tỉnh, đặc biệt là TPHCM để gây tiếng vang rồi từng bước đưa cái gọi là “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam” ra công khai, nhằm lật đổ chính quyền cách mạng. Song song đó, chúng lập các chiến dịch “Hồng Kông 1”, “Hồng Kông 2”... với hàng ngàn quân xâm nhập vào Việt Nam đánh phá."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thực hiện chỉ đạo của Bộ trưởng Bộ Nội vụ, Ban chỉ đạo kế hoạch phản gián CM12 quyết định cử một số trinh sát của ta thâm nhập vào các tổ chức của địch, với những vai diễn là “đặc phái viên” và “cơ sở” của chúng. Trong đó, có các đồng chí Thượng úy Trần Phương Thế (tự Tám Thậm, khi đó là Trưởng Công an H.Trần Văn Thời, tỉnh Cà Mau; bí danh hoạt động do bọn Túy - Hạnh đặt là NK.A1; sau là Phó Tổng Cục trưởng Tổng cục an ninh); đồng chí Hồ Việt Lắm (tự Mười Lắm, khi đó là Phó Công an H.Trần Văn Thời; bí danh hoạt động do địch tin tưởng đặt là NK.A2; sau là Thiếu tướng - Giám đốc Công an tỉnh Cà Mau)... và rất nhiều chiến sĩ Công an khác thâm nhập vào tổ chức đầu não của địch để hoạt động. Những người giữ vai trò quan trọng, chỉ đạo, chỉ huy Kế hoạch CM12 còn có các đồng chí: Thứ trưởng Bộ Nội vụ Cao Đăng Chiếm, đồng chí Nguyễn Phước Tân (tự Hai Tân, Phó Cục trưởng Cục Bảo vệ chính trị 2, sau là Phó Tổng cục trưởng Tổng cục an ninh... Chuyên án kết thúc, 3 đồng chí và 2 tập thể sau đó được phong tặng danh hiệu Anh hùng lực lượng vũ trang nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhắc đến Kế hoạch CM12, các đồng chí tham gia chuyên án kể nhiều về những đóng góp của người dân, những nông dân chân chất làm vườn ruộng, những ngư dân trên sông nước, biển cả, những người bán hàng quán... và lực lượng bộ đội, du kích, cán bộ chính quyền các cấp... đã phối hợp, giúp đỡ rất nhiều cho lực lượng Công an phá án để làm nên một thành công rực rỡ là chiến thắng Kế hoạch CM12."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-64.jpg",
                       "width":  1000,
                       "height":  671,
                       "alt":  "Các đồng chí trong Ban chỉ đạo KHCM12 tại “Tổng hành dinh” dã chiến, chỉ đạo triển khai kế hoạch đón bắt bọn phản động lưu vong, năm 1983 tại huyện Trần Văn Thời, Cà Mau. (Ảnh tư liệu)",
                       "caption":  "Các đồng chí trong Ban chỉ đạo KHCM12 tại “Tổng hành dinh” dã chiến, chỉ đạo triển khai kế hoạch đón bắt bọn phản động lưu vong, năm 1983 tại huyện Trần Văn Thời, Cà Mau. (Ảnh tư liệu)",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Triển khai đồng bộ nhiều kế hoạch phản gián liên hoàn, từ ngày 9/9/1981 đến 9/9/1984, lực lượng an ninh của ta đã câu nhử và “đón” tại Hòn Đá Bạc được 18 chuyến xâm nhập của tổ chức do Lê Quốc Túy, Mai Văn Hạnh làm chóp bu. Mỗi chuyến chúng chuyên chở hàng chục tấn vũ khí, thuốc nổ cực mạnh, gián điệp biệt kích và đều thực hiện đúng ý đồ, đúng địa điểm do ta chuẩn bị trước. Trong đó, Mai Văn Hạnh nhiều lần trực tiếp xâm nhập về nước để kiểm tra “kho tàng”, “mật cứ”, gặp gỡ số gián điệp biệt kích đã xâm nhập từ trước cùng với những tên cầm đầu các tổ chức phản động trong nước vạch các kế hoạch đánh phá cách mạng. Ngày 9/9/1984, 2 con tàu xâm nhập cuối cùng đổ bộ vào Việt Nam đã bị bắt giữ cùng 2 “thủ lĩnh” Mai Văn Hạnh và Trần Văn Bá, riêng Lê Quốc Túy do bệnh nặng đã không đi trong chuyến này. Sau khi câu nhử hầu hết số gián điệp biệt kích đã được huấn luyện với vũ khí, phương tiện đưa về nước, lực lượng An ninh Việt Nam quyết định kết thúc Kế hoạch CM12 bằng trận đánh cuối cùng đúng vào đêm 9/9/1984 tại Hòn Đá Bạc."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-65.jpg",
                       "width":  1000,
                       "height":  750,
                       "alt":  "Bộ Văn hóa, Thể thao và Du lịch đã công nhận di tích Hòn Đá Bạc - Trung tâm chỉ huy kế hoạch phản gián CM12 là Di tích lịch sử Quốc gia.",
                       "caption":  "Bộ Văn hóa, Thể thao và Du lịch đã công nhận di tích Hòn Đá Bạc - Trung tâm chỉ huy kế hoạch phản gián CM12 là Di tích lịch sử Quốc gia.",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Như vậy, sau hơn 3 năm từ 1981 đến ngày 9/9/1984, kế hoạch phản gián CM12 của lực lượng CAND Việt Nam đã thành công rực rỡ. Lực lượng Công an đã bắt được 189 tên phản động lưu vong, thu giữ 143 tấn vũ khí, 90 tấn đạn dược, 1,2 tấn chất nổ, 14 tấn tiền giả; bắt và tiêu diệt hàng trăm tên gián điệp, biệt kích, thu hàng trăm tấn vũ khí, nhiều phương tiện chiến tranh. Phá tan hàng chục tổ chức phản động trong nước, làm phá sản toàn bộ hoạt động vũ trang và xâm nhập từ bên ngoài vào Việt Nam hòng gây bạo loạn, lật đổ... Qua thực hiện Kế hoạch CM12, lực lượng an ninh của ta còn phát hiện, đấu tranh bóc gỡ 10 tổ chức phản động do địch cài lại trong nội địa, bắt hàng ngàn tên đang ẩn nấp trong các vỏ bọc khác nhau ở miền Trung, miền Đông và miền Tây Nam bộ..."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ghi nhận, đánh giá cao chiến công đặc biệt xuất sắc của các lực lượng tham gia thực hiện thắng lợi Kế hoạch CM12, Đảng, Nhà nước đã phong tặng danh hiệu Anh hùng LLVTND cho 2 tập thể và 3 cá nhân thuộc CAND và nhiều phần thưởng cao quý khác. Để ghi lại dấu ấn lịch sử Hòn Đá Bạc - địa danh đã thực hiện thắng lợi Kế hoạch CM12 trở thành khu Di tích lịch sử quốc gia Hòn Đá Bạc và Tượng đài bảo vệ An ninh Tổ quốc."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-66.png",
                       "width":  857,
                       "height":  399,
                       "alt":  "Bộ trưởng Bộ Nội vụ Trần Quốc Hoàn chủ trì cuộc họp với lãnh đạo Công an các tỉnh Tây Nguyên triển khai kế hoạch đấu tranh truy quét lực lượng FULRO ở Tây Nguyên và nam Khu V cũ, năm 1978. Ảnh: Tư liệu/Bộ Công an.",
                       "caption":  "Bộ trưởng Bộ Nội vụ Trần Quốc Hoàn chủ trì cuộc họp với lãnh đạo Công an các tỉnh Tây Nguyên triển khai kế hoạch đấu tranh truy quét lực lượng FULRO ở Tây Nguyên và nam Khu V cũ, năm 1978. Ảnh: Tư liệu/Bộ Công an.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thực hiện Chỉ thị số 04-CT/TW, ngày 02/02/1977 của Ban Bí thư Trung ương Đảng về “Giải quyết vấn đề FULRO”, lực lượng An ninh làm nòng cốt đã tham mưu, đề xuất các cấp ủy đảng ban hành chủ trương, biện pháp giải quyết, trong đó kết hợp công tác truy quét với thực hiện chính sách của Đảng về dân tộc, tôn giáo, coi trọng tập quán địa phương, chăm lo cải thiện đời sống nhân dân; đồng thời phát động phong trào quần chúng bảo vệ an ninh Tổ quốc sâu rộng ở các tỉnh Tây Nguyên và nam Khu V cũ; tranh thủ các già làng, trưởng bản, trí thức có uy tín kêu gọi FULRO trở về làm ăn lương thiện; tổ chức đấu tranh chuyên án, phối hợp với các lực lượng truy quét các toán, nhóm vũ trang, tiêu diệt số cầm đầu, ngoan cố, chống đối, làm tan rã chính quyền bất hợp pháp của FULRO, bảo vệ nhân dân và chính quyền cơ sở."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-67.jpg",
                       "width":  900,
                       "height":  613,
                       "alt":  "Các trinh sát An ninh Công an tỉnh Gia Lai bàn phương án đấu tranh truy bắt FULRO (ảnh chụp năm 1984).",
                       "caption":  "Các trinh sát An ninh Công an tỉnh Gia Lai bàn phương án đấu tranh truy bắt FULRO (ảnh chụp năm 1984).",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng An ninh trên địa bàn Tây Nguyên đã tổ chức đấu tranh hàng chục chuyên án, trong đó có 6 chuyên án lớn làm tan rã bộ khung của chính quyền FULRO từ cấp quân khu tới cơ sở đang ẩn nấp trong rừng. Do triển khai đồng bộ các công tác cơ bản nên tình hình an ninh chính trị ở Tây Nguyên dần được ổn định. An ninh chính trị ở Tây Nguyên từ đây được củng cố vững chắc, tạo đà cho đồng bào các dân tộc từng bước cải thiện đời sống kinh tế, xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Quán triệt phương châm “chủ động phòng ngừa và liên tục tấn công”, “bóp chết tổ chức ngay từ trong trứng”, kết hợp chính sách trấn áp phù hợp để cô lập, phân hóa, không để nảy sinh phản động, từ năm 1985 - 1986, Công an các địa phương triệt phá các tổ chức phản động, như “Lực lượng phục quốc nội biên Việt Nam” do Trương Văn Lân cầm đầu, tổ chức phản động “Mặt trận cách mạng chân chính Việt Nam tỉnh Thanh Hóa” do Lương Mạnh Hòa cầm đầu."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "5-luc-luong-an-ninh-trong-thoi-ky-doi-moi-hoi-nhap-cung-ca-nuoc-buoc-vao",
                       "text":  "5. LỰC LƯỢNG AN NINH TRONG THỜI KỲ ĐỔI MỚI, HỘI NHẬP, CÙNG CẢ NƯỚC BƯỚC VÀO KỶ NGUYÊN PHÁT TRIỂN MỚI (1986 - 2026)"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-68.jpg",
                       "width":  1123,
                       "height":  771,
                       "alt":  "Khối nam sĩ quan An ninh nhân dân tại Lễ kỷ niệm 70 năm Chiến thắng Điện Biên Phủ. Nguồn: Báo Nhân dân.",
                       "caption":  "Khối nam sĩ quan An ninh nhân dân tại Lễ kỷ niệm 70 năm Chiến thắng Điện Biên Phủ. Nguồn: Báo Nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thập niên 90 của thế kỷ XX, hệ thống các nước xã hội chủ nghĩa lâm vào tình trạng khủng hoảng trầm trọng; Liên Xô và một số nước xã hội chủ nghĩa khác lần lượt tan rã. Trong bối cảnh đó, Đảng Cộng sản Việt Nam vẫn kiên định con đường cách mạng theo chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh. Đại hội lần thứ VI của Đảng (tháng 12/1986) đã đề ra đường lối đổi mới toàn diện nhằm đưa đất nước thoát khỏi tình trạng khủng hoảng, tiếp tục phát triển đi lên. Chính vì thế, các thế lực thù địch coi Việt Nam là thành trì của chủ nghĩa xã hội và ráo riết tiến hành chiến lược “diễn biến hòa bình” nhằm xóa bỏ tư tưởng cộng sản, xóa bỏ chế độ xã hội chủ nghĩa ở nước ta. Chúng ráo riết tấn công trên mọi lĩnh vực, một trong những hướng tấn công chủ yếu là tuyên truyền đa nguyên, đa đảng, gây bạo loạn làm mất ổn định chính trị; lợi dụng các vấn đề dân tộc, tôn giáo, dân chủ, nhân quyền, thành lập các tổ chức chính trị đối lập và kích động biểu tình để phá hoại sự nghiệp xây dựng và bảo vệ Tổ quốc của nhân dân ta."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Kiên định đường lối đổi mới của Đảng, trong thời kỳ này, lực lượng Công an nhân dân đã đổi mới mạnh mẽ về tư duy, biện pháp công tác nghiệp vụ và xây dựng lực lượng; chủ động tham mưu cho Đảng, Nhà nước nhiều chủ trương, chính sách quan trọng chiến lược về bảo vệ an ninh, trật tự và xây dựng lực lượng Công an nhân dân; góp phần hình thành, phát triển, hoàn thiện đường lối đổi mới, bảo đảm lợi ích, an ninh quốc gia, mở rộng quan hệ đối ngoại, phát triển kinh tế - xã hội của đất nước; thực hiện tốt vai trò đơn vị Thường trực Ban Chỉ đạo thực hiện Chương trình quốc gia phòng, chống tội phạm (Ban Chỉ đạo 138)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng An ninh được kiện toàn, thống nhất và điều chỉnh hệ thống tổ chức bộ máy để phù hợp với tình hình, nhiệm vụ ở giai đoạn này, cụ thể: Tháng 12/1988, Tổng cục An ninh nhân dân gồm 13 đầu mối: Cục Tham mưu ANND (A12); Cục Chống gián điệp TQ (A14); Cục Chống gián điệp Mỹ và gián điệp khác (A15); Cục Chống phản động (A16); Cục Bảo vệ Nội bộ (A17); Cục Quản lý cửa khẩu, quản lý người nước ngoài và xuất cảnh, nhập cảnh (A18); Cục Ngoại tuyến (A21); Cục Kỹ thuật nghiệp vụ 1 (A22); Cục Kỹ thuật nghiệp vụ II (A23); Cục An ninh điều tra xét hỏi (A24); Cục Hồ sơ nghiệp vụ an ninh (A27); Cục Chính trị an ninh nhân dân (A28); Phòng Hậu cần an ninh nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 31/1/1989, Hội đồng Bộ trưởng ra Nghị định số 11/HĐBT về sửa đổi, bổ sung tổ chức của Bộ Nội vụ, trong đó đổi tên Tổng cục An ninh nhân dân thành Tổng cục Phản gián; thành lập Tổng cục Tình báo và Bộ Tư lệnh Cảnh vệ thuộc Bộ Nội vụ. Thực hiện Nghị định số 11/HĐBT, ngày 27/11/1989, Bộ trưởng Bộ Nội vụ ban hành Quyết định số 164-QĐ/BNV quy định chức năng, nhiệm vụ, quyền hạn và tổ chức bộ máy của Tổng cục Phản gián, gồm 14 đầu mối, trong đó giữ nguyên 10 đầu mối từ A12 đến A23 và A27, đổi tên 02 đơn vị là Cục An ninh điều tra xét hỏi (A24) thành Cục An ninh điều tra (A24), Cục Chính trị an ninh nhân dân (A28) thành Cục Chính trị phản gián (A28), nâng Phòng Hậu cần an ninh nhân dân thành Cục Hậu cần phản gián (A29) và bổ sung các trường Đại học, Trung học An ninh nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tháng 6/1998, bộ máy của Tổng cục Phản gián được điều chỉnh thành 15 cục trực thuộc, gồm: Cục Tham mưu (A12); Cục Bảo vệ kinh tế (A17); Cục Quản lý xuất cảnh, nhập cảnh (A18); Cục Ngoại tuyến (A21); Cục Kỹ thuật nghiệp vụ 1 (A22); Cục Kỹ thuật nghiệp vụ 2 (A23); Cục An ninh điều tra (A24); Cục Bảo vệ an ninh văn hóa, tư tưởng (A25); Cục Hồ sơ an ninh nhân dân (A27); Cục Chính trị phản gián (A28); Cục Hậu cần phản gián (A29); Cục Bảo vệ chính trị I (A35); Cục Bảo vệ chính trị 2 (A36); Cục Bảo vệ chính trị 3 (A37); Cục Bảo vệ chính trị 4 (A38). Ngày 09/6/1998, Chính phủ ban hành Nghị định số 37/1998/NĐ-CP về chức năng, nhiệm vụ, quyền hạn và tổ chức bộ máy Bộ Công an, trong đó, đổi tên từ Tổng cục Phản gián thành Tổng cục An ninh. Đến tháng 10/2003, bộ máy của Tổng cục An ninh được điều chỉnh thành 16 cục trực thuộc: trong đó giữ nguyên 14 đầu mối từ A12 đến A37, đổi phiên hiệu Cục Bảo vệ chính trị 4 từ A38 thành A41; thành lập mới Cục Bảo vệ chính trị V (A42)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 14/11/2003, Chính phủ ban hành Nghị định số 136/2003/NĐ-CP quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Công an. Thực hiện Nghị định số 136/2003/NĐ-CP, ngày 14/12/2004, Bộ Công an ban hành Quyết định số 1437/2004/QĐ-BCA(X13) quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Tổng cục An ninh, gồm 18 đầu mối: giữ nguyên các cục từ A12 đến A42, thành lập thêm Cục An ninh Tây Nguyên (A43); Cục An ninh Tây Nam Bộ (A44). Đến 2005, thành lập thêm Cục An ninh Tây Bắc (A45), năm 2006 thành lập Văn phòng Thường trực Ban Chỉ đạo về nhân quyền trực thuộc Tổng cục. Ngày 15/9/2009, Chính phủ ban hành Nghị định số 77/2009/NĐ-CP quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Công an, theo đó Tổng cục An ninh được tách thành Tổng cục An ninh I và Tổng cục An ninh II."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thực hiện Nghị định số 77/2009/NĐ-CP, ngày 11/12/2009, Bộ trưởng Bộ Công an ban hành Quyết định số 4045/QĐ-BCA quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Tổng cục An ninh I, gồm các đơn vị: Cục Tham mưu an ninh I (A62); Cục Bảo vệ chính trị II (A63); Cục Bảo vệ chính trị III (A64); Cục Bảo vệ chính trị IV (A65); Cục Bảo vệ chính trị V (A66); Cục Bảo vệ chính trị VII (A67); Cục Bảo vệ chính trị VIII (A68); Cục Ngoại tuyến (A69); Cục Kỹ thuật nghiệp vụ I (A70); Cục Kỹ thuật nghiệp vụ II (A71); Cục Quản lý xuất, nhập cảnh (A72); Cục Chính trị, hậu cần an ninh I (A73); Văn phòng Thường trực Ban Chỉ đạo về nhân quyền (A74); Thanh tra Tổng cục An ninh I (A75); Cơ quan UBKT Tổng cục An ninh I (A76). Tổng cục An ninh II, gồm các đơn vị: Cục Tham mưu an ninh II (A82); Cục An ninh chính trị nội bộ (A83); Cục An ninh tài chính, tiền tệ, đầu tư (A84); Cục An ninh kinh tế tổng hợp (A85); Cục An ninh nông thôn (A86); Cục An ninh thông tin, truyền thông (A87); Cục An ninh xã hội (A88); Cục An ninh Tây Bắc (A89); Cục An ninh Tây Nguyên (A90); Cục An ninh Tây Nam Bộ (A91); Cục An ninh điều tra (A92); Cục Hồ sơ nghiệp vụ an ninh (A93); Cục Chính trị an ninh II (A94); Cục Hậu cần an ninh II (A95); Thanh tra Tổng cục An ninh II (A96); Cơ quan UBKT Tổng cục An ninh II (A97)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 17/11/2014, Chính phủ ban hành Nghị định số 106/2014/NĐ-CP quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Công an. Tổng cục An ninh 1 và Tổng cụe An ninh II hợp nhất thành Tổng cục An ninh, gồm các đơn vị: Cục Tham mưu An ninh (A62); Cục Bảo vệ chính trị 1 (A63); Cục Bảo vệ chính trị II (A65); Cục Bảo vệ chính trị III (A64); Cục Bảo vệ chính trị IV (A66); Cục Bảo vệ chính trị V (A67); Cục Ngoại tuyến (A69); Cục Kỹ thuật nghiệp vụ I (A70); Cục Kỹ thuật nghiệp vụ II (A71); Cục Quản lý xuất nhập cảnh (A72); Cục Chính trị An ninh (A73); Văn phòng thường trực Ban Chỉ đạo về nhân quyền (A74); Thanh tra Tổng cục (A74); Cục Hậu cần An ninh (A77); Cục An ninh chính trị nội bộ (A83); Cục An ninh tài chính, tiền tệ và đầu tư (A84); Cục An ninh kinh tế tổng hợp (A85); Cục An ninh kinh tế nông, lâm, ngư nghiệp (A86); Cục An ninh văn hóa, thông tin truyền thông (A87); Cục An ninh xã hội (A88); Cục An ninh Tây Bắc (A89); Cục Bảo An ninh Tây Nguyên (A90); Cục An ninh Tây Nam Bộ (A91); Cục An ninh điều tra (A92); Cục Hồ sơ nghiệp vụ an ninh (A93); Cục An ninh cửa khẩu (A98)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 06/8/2018, Chính phủ ban hành Nghị định số 01/2018/NĐ-CP quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Công an. Theo đó, lực lượng An ninh nhân dân gồm các đơn vị: Cục An ninh đối ngoại (A01); Cục An ninh nội địa (A02); Cục An ninh chính trị nội bộ (A03); Cục An ninh kinh tế (A04); Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05); Cục Kỹ thuật nghiệp vụ (A06); Cục Ngoại tuyến (A07); Cục Quản lý xuất nhập cảnh (A08); Cục An ninh điều tra (A09)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tuy mỗi giai đoạn, hệ thống tổ chức bộ máy lực lượng An ninh có sự điều chỉnh song xuyên suốt trong mọi giai đoạn cách mạng, lực lượng An ninh đều phát huy tinh thần độc lập, tự chủ, tự lực, tự cường, tận tụy với công việc, vượt qua mọi khó khăn, thử thách, hoàn thành xuất sắc nhiệm vụ bảo vệ an ninh quốc gia, đấu tranh làm thất bại âm mưu, hoạt động của thế lực thù địch, bảo vệ an toàn tuyệt đối Đảng, nhà nước và chế độ xã hội chủ nghĩa."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trên lĩnh vực đấu tranh chống gián điệp, phản động, tháng 02/1987, lực lượng An ninh đón bắt toán cuối cùng tại đảo Ko Kông Kang, xóa số tổ chức phản động do Lê Quốc Túy và Mai Văn Hạnh cầm đầu. Trong Chuyên án HM29 đấu tranh với tổ chức phản động lưu vong “Mặt trận quốc gia giải phóng Việt Nam” do Hoàng Cơ Minh (nguyên Phó đô đốc Hải quân quân đội Sài Gòn) và Trần Quang Đô cầm đầu (tháng 9/1987) - tổ chức phản động người Việt lưu vong được Mỹ, Thái Lan tài trợ, đã tập hợp khoảng 350 đối tượng; lực lượng An ninh phối hợp với quân đội Lào đón đánh 23 cuộc “Hành quân Đông Tiến”, diệt và bắt 269 tên, xóa sổ tổ chức phản động này. Xóa bỏ tổ chức phản động trên là một thắng lợi có ý nghĩa quốc tế của ba nước Đông Dương, đồng thời khẳng định sự đúng đắn của quan điểm “chủ động phòng ngừa, chủ động tiến công đánh địch từ xa” trong cuộc đấu tranh bảo vệ an ninh quốc gia."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong bối cảnh các thế lực thù địch đẩy mạnh thực hiện âm mưu “diễn biến hòa bình”, tăng cường hoạt động bạo loạn, lật đổ, ngày 29/6/1992, Ban Chấp hành Trung ương Đảng ra Nghị quyết số 03-NQ/HNTW xác định 8 nhiệm vụ, trong đó trọng tâm là bảo vệ an ninh chính trị nội bộ, tăng cường công tác nắm tình hình, chủ động và liên tục tấn công tội phạm, giữ vững an ninh quốc gia và bảo đảm trật tự, an toàn xã hội. Với tinh thần chủ động, sáng tạo, nắm địch từ xa, đánh địch từ nơi chúng xuất phát, lực lượng An ninh đã tăng cường công tác nắm tình hình, phát động phong trào quần chúng bảo vệ an ninh Tổ quốc, phối hợp chặt chẽ với các lực lượng đẩy lùi, vô hiệu hóa và đập tan hoạt động xâm nhập của địch, kiểm soát, vô hiệu hóa các chiến dịch phá hoại tư tưởng; ngăn chặn kịp thời hoạt động của các tổ chức chính trị đối lập, các thế lực thù địch, chống đối trong và ngoài nước. Đã khám phá hàng chục chuyên án lớn (LH90, PQ55, HC96, SB36, HM29 ... ); trục xuất các đối tượng lợi dụng mở cửa hợp tác quốc tế vào nước ta để phá hoại tư tưởng và hoạt động gián điệp (Miriam, Manoli, Đàm Văn Toại ... ); ngăn chặn và đập tan hàng chục chiến dịch gây nổ, gây bạo loạn, thành lập các tổ chức chính trị đối lập mang tên “Chiến dịch Đông Xuân”, “Chiến dịch Hoa Lan”, “Chiến dịch Hoa Phượng”, “Chiến dịch Hòa Bình” ... của các tổ chức phản động lưu vong danh xưng “Liên đảng cách mạng Việt Nam” do Hoàng Việt Cương cầm đầu; “Đảng nhân dân hành động” do Nguyễn Sĩ Bình cầm đầu, “Chính phủ Việt Nam tự do” do Nguyễn Hữu Chánh cầm đầu; tổ chức “Việt Tân” ...; tác động, vô hiệu hoá và đẩy lùi hàng chục chiến dịch gây nổ khác khi các đối tượng đang trong quá trình chuẩn bị; làm rõ thủ phạm gây nổ tại trụ sở Công an phường 12, quận Tân Bình, Thành phố Hồ Chí Minh năm 2018; vụ đốt cây xăng tại Khánh Hòa năm 2017; vụ gây nổ tại cổng sau Công an tỉnh Hậu Giang năm 2018; vụ gây nổ tại Cục thuế tỉnh Bình Dương năm 2019 ... Đấu tranh, ngăn chặn, làm thất bại âm mưu, hoạt động tổ chức hàng chục cuộc biểu tình chống Nhà nước, không để các đối tượng lợi dụng, biến các cuộc biểu tình tự phát của người dân thành ngòi nổ tiến hành cách mạng màu, cách mạng đường phố ở Việt Nam; bắt, xử lý hình sự hơn 80 đối tượng; đấu tranh, bóc gỡ, vô hiệu hóa gần 2.000 đối tượng, hơn 3.000 cơ sở nội địa và đối tượng liên quan phản động ở địa phương, đẩy đuổi hàng trăm tên xâm nhập về nước, thu giữ phương tiện chèn cướp sóng đài phát thanh, hàng trăm kg chất nổ, hàng nghìn kíp mìn, hàng trăm cờ ngụy cũ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đối với địa bàn chiến lược, lực lượng An ninh đã tham mưu với Bộ báo cáo, đề xuất lãnh đạo Đảng, Nhà nước củng cố hệ thống chính trị cơ sở, “kết hợp quốc phòng, an ninh với kinh tế, kinh tế với quốc phòng, an ninh”, nâng cao đời sống nhân dân. Tại Tây Bắc, lực lượng An ninh đã đấu tranh, ngăn chặn, giải tán hoạt động tụ tập đông người “xưng vua”, lập “vương quốc Mông” tại huyện Mường Nhé, tỉnh Điện Biên các năm 2011, 2014, 2015; đấu tranh xóa bỏ hoàn toàn “tổ chức bất hợp pháp Dương Văn Mình” đã tồn tại nhức nhối hơn 30 năm trong vùng đồng bào dân tộc Mông. Tại Tây Nguyên, kịp thời tham mưu giải quyết thành công bạo loạn ở Tây Nguyên các năm 2001, 2004; đấu tranh ngăn chặn hoạt động kích động ly khai, tự trị, thành lập “Nhà nước Đêga” của tổ chức “Quỹ người Thượng - MFI”, số đối tượng chống đối hoạt động tại Campuchia, Thái Lan; xác minh, ngăn chặn nhiều đối tượng kích động người dân tộc thiểu số trốn sang Campuchia, Thái Lan. Ở Tây Nam Bộ, lực lượng An ninh vô hiệu hóa hầu hết các hoạt động chống đối của số cực đoan trong dân tộc, Phật giáo Nam tông Khmer và số Khmer Campuchia Krom bên ngoài."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng An ninh đã tham mưu giải quyết có hiệu quả các điểm nóng, các vụ tranh chấp khiếu kiện, như: vụ gây rối trật tự công cộng, cố ý hủy hoại tài sản xã hội chủ nghĩa, tài sản công dân, cổ ý gây thương tích tại các huyện Thái Thụy, Quỳnh Phụ, tỉnh Thái Bình; vụ tập trung đông người, biểu tình, gây rối an ninh, trật tự tại Hà Tĩnh năm 2016, tại tỉnh Bình Thuận năm 2018, tại huyện Đồng Tâm (Hà Nội) năm 2020 ...; dập tan ý đồ thành lập “Hiệp hội dân oan Việt Nam” và âm mưu lợi dụng danh nghĩa “dân oan” để thành lập các hội, nhóm nhằm tập hợp lực lượng khiếu kiện toàn quốc. Một số đối tượng bất mãn, quá khích, lợi dụng dân chủ, nhân quyền, tôn giáo và dân tộc, cố tình đi ngược lại quyền lợi của quốc gia dân tộc như Nguyễn Hộ, Lê Quang Liêm, Nguyễn Văn Lý, Cù Huy Hà Vũ, Nguyễn Ngọc Như Quỳnh, Nguyễn Văn Đài, Nguyễn Trung Tôn, Phạm Đoan Trang, Lê Văn Dũng, Nguyễn Lân Thắng, Phạm Chí Dũng, Phan Thanh Hải, Vi Đức Hồi ... bị nghiêm trị, qua đó đấu tranh vô hiệu hóa, làm tan rã hàng chục hội, nhóm chống đối như Nhóm “Câu lạc bộ trí thức”, “Hội Anh em dân chủ”, “Mạng lưới Blogger Việt Nam” ... vừa giúp cho đồng chí, đồng bào thêm cảnh giác, vừa khẳng định luật pháp của Việt Nam không chỉ nghiêm minh mà còn tạo cơ hội để họ phục thiện."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đối với các tổ chức phản động lưu vong câu kết với số đối tượng chống đối trong nước, lực lượng An ninh tăng cường công tác nắm tình hình, vô hiệu hóa âm mưu hoạt động khủng bố, phá hoại, nổi bật là đấu tranh, cơ bản phá rã tổ chức “Triều đại Việt”; phân hóa, hạn chế hoạt động của “Chính phủ quốc gia Việt Nam lâm thời”; ngăn chặn ý đồ xâm nhập về nước hoạt động của tổ chức “Việt Tân”, “Lao động Việt” ... Tăng cường công tác đấu tranh ngoại giao, thực hiện các biện pháp, đối sách linh hoạt, mềm dẻo, tác động Mỹ, EU, Ôxtrâylia có đánh giá khách quan, tính cực về tình hình dân chủ, nhân quyền và tự do tôn giáo tại Việt Nam; hạn chế đến mức thấp nhất việc can thiệp về vấn đề nhân quyền trên lĩnh vực tôn giáo trong quá trình đàm phán tham gia Tổ chức Thương mại thế giới (WTO), Hiệp định thương mại Việt - Mỹ (BTA) và các Hiệp định thương mại gần đây như: CPTPP, EVFTA ... Bảo đảm an ninh tôn giáo, tham mưu giải quyết các vụ việc phức tạp, tranh chấp nhà, đất liên quan tôn giáo, giải quyết những phức tạp liên quan hoạt động tín ngưỡng, tôn giáo mới, tà đạo, các cá nhân, tổ chức phản động núp bóng lợi dụng tín ngưỡng, tôn giáo; tranh thủ chức sắc, chức việc trong bảo đảm an ninh tôn giáo."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong giai đoạn từ 2018 đến nay, lực lượng An ninh đã chủ động nắm, đánh giá, dự báo sát, đúng tình hình, kịp thời tham mưu với Đảng, Nhà nước để ra và lãnh đạo thực hiện thắng lợi đường lối, chủ trương, quan điểm về bảo vệ an ninh quốc gia, góp phần khai thác tối đa cơ hội, hóa giải kịp thời thách thức, giảm thiểu tác động tiêu cực từ những biến động phức tạp của cục diện an ninh - chính trị thế giới, khu vực, xử lý có hiệu quả những vấn đề phức tạp nảy sinh, tạo môi trường hòa bình, ổn định, thuận lợi để phát triển kinh tế - xã hội, mở rộng đối ngoại và nâng tầm vị thế đất nước. Lực lượng An ninh đối ngoại đã làm tốt công tác phòng ngừa, phát hiện, đấu tranh hiệu quả với hoạt động của các đối tượng tình báo gián điệp; kịp thời phát hiện, vô hiệu hóa hoạt động thu thập tình báo, thâm nhập nội bộ, xây dựng cơ sở cài cắm nội gián. Triển khai hàng nghìn kế hoạch nghiệp vụ, hàng trăm chuyên án trinh sát với hàng trăm đối tượng tình báo gián điệp; phát hiện, xác minh, bóc gỡ, vô hiệu hóa hàng nghìn đầu mối nội gián, cơ sở gián điệp của cơ quan đặc biệt nước ngoài; ngăn chặn, kiềm tỏa hoạt động hà hơi, tiếp sức cho số đối tượng chống đối của các thế lực thù địch. Chủ động phối hợp với cơ quan an ninh, tình báo các nước duy trì bảo đảm an ninh từ xa, tạo vành đai bảo vệ an ninh, lợi ích của Việt Nam từ ngoài biên giới lãnh thổ. Phối hợp với các bộ, ngành, địa phương xử lý các vụ việc phát sinh ở biên giới đất liền giữa Việt Nam và các nước; nắm tình hình, tham mưu xử lý có hiệu quả những tình hình phức tạp về an ninh biên giới, biển đảo góp phần giữ vững chủ quyền, thống nhất, toàn vẹn lãnh thổ. Phòng ngừa, ngăn chặn các thể lực thủ địch lợi dụng các địa bàn giáp biên để đứng chân, xâm nhập, chống phá. Thúc đẩy hiệu quả công tác bảo hộ công dân Việt Nam ở nước ngoài, nhất là vấn đề giấy tờ pháp lý cho người Việt tại Campuchia."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-69.png",
                       "width":  700,
                       "height":  504,
                       "alt":  "Bộ trưởng Tô Lâm (nay là Tổng Bí thư Ban Chấp hành Trung ương Đảng, Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam) phát biểu tại Hội nghị tổng kết công tác đấu tranh chống gián điệp. Nguồn: Báo Công an nhân dân.",
                       "caption":  "Bộ trưởng Tô Lâm (nay là Tổng Bí thư Ban Chấp hành Trung ương Đảng, Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam) phát biểu tại Hội nghị tổng kết công tác đấu tranh chống gián điệp. Nguồn: Báo Công an nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lực lượng An ninh tham gia tích cực triển khai các phương án, kế hoạch bảo vệ an ninh, an toàn tuyệt đối các hoạt động, sự kiện chính trị quan trọng của đất nước như Đại hội Đảng lần thứ XI (tháng 01/2011), lần thứ XII (tháng 01/2016), lần thứ XIII (tháng 01/2021), bầu cử đại biểu Quốc hội khóa XIII, XIV, XV ..., các hội nghị, chuyến thăm của chính khách các nước lớn đến Việt Nam (APEC 2017, Hội nghị Thượng đỉnh Mỹ - Triều lần thứ 2, Đại lễ Vesak 2019, Hội nghị cấp cao ASEAN lần thứ 36, 37, Hội nghị AIPA 41 và các hoạt động liên quan đến Năm Chủ tịch ASEAN 2020 ... ), góp phần nâng cao uy tín và vị thế của Việt Nam trên trường quốc tế, xây dựng hình ảnh nước Việt Nam hòa bình, hữu nghị."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-70.png",
                       "width":  840,
                       "height":  525,
                       "alt":  "Tổng Bí thư Tô Lâm phát biểu tại buổi buổi thăm và gặp mặt các cán bộ chiến sĩ Cục An ninh chính trị nội bộ, Bộ Công an nhân kỷ niệm 80 năm Ngày truyền thống Công an nhân dân. Ảnh: Bộ Công an.",
                       "caption":  "Tổng Bí thư Tô Lâm phát biểu tại buổi buổi thăm và gặp mặt các cán bộ chiến sĩ Cục An ninh chính trị nội bộ, Bộ Công an nhân kỷ niệm 80 năm Ngày truyền thống Công an nhân dân. Ảnh: Bộ Công an.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số kết quả trên lĩnh vực an ninh chính trị nội bộ, an ninh văn hóa, tư tưởng, công tác bảo vệ chính trị nội bộ tập trung đấu tranh phòng, chống tác động chuyển hóa nội bộ của các thế lực thủ địch. Từ năm 1998 đến nay, xác định đấu tranh, chống suy thoái về đạo đức, lối sống “tự diễn biến”, “tự chuyển hóa” trong nội bộ là vấn đề mang tính quyết định, lực lượng An ninh đã kịp thời phát hiện, đấu tranh làm thất bại nhiều âm mưu, hoạt ộng phá hoại, thâm nhập nội gián, tác động chuyển hóa nội bộ của các thế lực thù địch, phản động, tạo thế chủ động chiến lược trong phòng ngừa, bảo vệ an ninh nội bộ. Tổ chức xác minh nhân sự phục vụ công tác quy hoạch Bộ Chính trị, Ban Bí thư, Ban Chấp hành Trung ương khóa XII, XIII, XIV; luân chuyển, điều động và bổ nhiệm lãnh đạo cấp cao của Đảng, Nhà nước. Kịp thời kiến nghị giải pháp, biện pháp phòng ngừa, ngăn chặn, xử lý các vụ việc, cá nhân có dấu hiệu, hành vi xâm phạm an ninh quốc gia, an ninh chính trị nội bộ, lộ lọt bí mật nhà nước; đặc biệt là âm mưu, ý đồ tác động, chuyển hóa nội bộ, xây dựng ngọn cờ, tập hợp lực lượng chính trị đối lập của các thế lực thù địch. Triển khai đồng bộ các biện pháp, đấu tranh mạnh với số đối tượng có biểu hiện “tự diễn biến”, “tự chuyển hóa”, tham nhũng, tiêu cực và các nhóm đối tượng trong nước tạo lập hệ thống kênh truyền thông mạng xã hội chống Đảng, Nhà nước. Qua công tác đấu tranh, lực lượng An ninh đã phát hiện một số cán bộ trong diện Trung ương quản lý có thân nhân liên quan đến các tổ chức phản động lưu vong, quan hệ phức tạp với nước ngoài, che giấu lý lịch để làm việc trong các cơ quan thiết yếu, cơ mật và số có vấn đề chính trị tham gia nhân sự cấp ủy các cấp, tham gia ứng cử đại biểu Quốc hội, đại biểu Hội đồng nhân dân. Phát hiện, xác minh làm rõ và chuyển cơ quan điều tra khởi tố hàng chục vụ án hình sự “làm giả con dấu, tài liệu của cơ quan, tổ chức; sử dụng con dấu hoặc tài liệu giả của cơ quan, tổ chức”, khởi tố hàng trăm đối tượng có liên quan để điều tra theo quy định của pháp luật."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Công tác đấu tranh chống địch phá hoại tư tưởng, bảo vệ nền tảng tư tưởng của Đảng được thực hiện thường xuyên, bài bản, có trọng tâm, trọng điểm, chiến dịch cụ thể đối với từng sự kiện lớn, quan trọng, xử lý các vụ việc được dư luận đặc biệt quan tâm. Phát huy hiệu quả hoạt động của Ban Chỉ đạo 35 Công an các đơn vị, địa phương. Từ năm 2015 đến nay, Ban Chỉ đạo 35 Công an các đơn vị, địa phương đã xây dựng gần 10.000 chuyên mục, trên 9.000.000 tin, bài, phóng sự, với nhiều “chiến dịch truyền thông” quy mô lớn thông qua 10.000 cổng/trang thông tin điện tử, trang mạng xã hội thu hút hàng trăm triệu lượt tiếp cận, tương tác, đấu tranh vạch mặt âm mưu, thủ đoạn kích động của các thế lực thù địch. Tổ chức tấn công ngăn chặn và yêu cầu nhà mạng gỡ bỏ, ngăn chặn trên 10.000 trang mạng có nội dung sai sự thật, xấu độc, máy chủ đặt tại nước ngoài; phá rã trên 410 hội, nhóm, kênh truyền thông; vô hiệu hóa trên 80.000 tài khoản, bài viết, hơn 100 triệu lượt tán phát thông tin xấu, độc, tin giả, sai sự thật; gần 500 cổng thông tin điện tử, trang, tài khoản facebook giả mạo, lấy tên các đồng chí lãnh đạo Đảng, Nhà nước. Chỉ đạo xử lý hình sự trên 800 đối tượng; xử lý vi phạm hành chính trên 5.000 đối tượng; gọi hỏi, răn đe hơn 6.000 trường hợp, yêu cầu cam kết không tái phạm, gỡ bỏ tin giả, sai sự thật, góp phần quan trọng giải quyết nhiều vụ việc phức tạp, phòng ngừa, ngăn chặn, xử lý nguy cơ khủng hoảng, điểm nóng về truyền thông, ảnh hưởng tiêu cực tới an ninh trật tự nói chung, an ninh chính trị nội bộ, an ninh thông tin truyền thông, an ninh văn hóa tư tưởng nói riêng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số kết quả trên lĩnh vực an ninh nội địa, an ninh tôn giáo, dân tộc, lực lượng An ninh đã tham mưu Đảng ủy Công an Trung ương triển khai hiệu quả các chủ trương, chính sách lớn của Đảng, Nhà nước, như tham mưu chủ trương đàm phán nâng cao quan hệ ngoại giao Việt Nam - Vatican từ mức Đặc phái viên không thường trú lên Đại diện thường trú (năm 2024); hỗ trợ Giáo hội Phật giáo Việt Nam tổ chức các hoạt động trong khuôn khổ Đại lễ Vesak Liên hợp quốc 2019, 2025 ... Thực hiện tốt công tác tiếp xúc, tranh thủ hàng nghìn chức sắc, người có uy tín trong tôn giáo, dân tộc, tác động, hướng lái các tổ chức tôn giáo hoạt động thuần túy, tuân thủ pháp luật. Tham mưu giải quyết các vụ việc phức tạp, ngăn chặn, xử lý kịp thời những hiện tượng “tín ngưỡng”, “tôn giáo mới”, không để phát sinh tình hình phức tạp về an ninh, trật tự; tập trung đấu tranh, kiềm tỏa, vô hiệu hóa hoạt động chống đối của số chức sắc cực đoan trong tôn giáo, các tổ chức, cá nhân phản động núp bóng lợi dụng tín ngưỡng, tôn giáo ở vùng dân tộc thiểu số như “tà đạo Hà Mòn”, “Tin lành Đega”, “Giê Sùa”, “Bà Cô Dợ”, “Tin lành Đấng Christ” ...; điều tra, xử lý nghiêm các đối tượng là chức sắc trong tôn giáo, số giáo dân Công giáo là thành viên của các tổ chức, hội, nhóm, cơ sở nội địa các tổ chức phản động lưu vong và đồng bọn, không để số này tập hợp, phát triển lực lượng, công khai hóa tổ chức phản động trong nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số kết quả trên lĩnh vực an ninh kinh tế, lực lượng An ninh đã tham mưu với Nhà nước, các cơ quan, ban, ngành kịp thời hoạch định chính sách cũng như đề ra các biện pháp quản lý kinh tế phù hợp với môi trường sản xuất kinh doanh mới. Phối hợp chặt chẽ với các lực lượng chức năng, chủ động phòng ngừa kết hợp với khám phá hàng chục chuyên án điển hình về buôn lậu, tham nhũng, hoàn thuế VAT, trộm cước viễn thông, làm và vận chuyển tiền giả; bóc gỡ mạng lưới tội phạm xuyên quốc gia, phá vỡ mối liên kết các ổ, nhóm tội phạm mang tính quốc tế và nhiều vụ án kinh tế lớn, góp phần hạn chế thiệt hại cho Nhà nước hàng ngàn tỉ đồng. Điển hình là các vụ án: Nguyễn Đức Tâm sử dụng công nghệ cao trộm cắp cước viễn thông, vụ cố ý làm trái quy định và tham ô tại Công ty dệt Nam Định, Công ty Tamexco (1996), vụ buôn lậu hàng hóa trái phép của Công ty Tân Trường Sanh (1997) ... đưa các đối tượng ra xét xử, đồng thời tuyên truyền để răn đe giáo dục."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua công tác bảo đảm an ninh kinh tế, kịp thời tham mưu sửa đổi, bổ sung, khắc phục những sơ hở, bất cập, mâu thuẫn, chồng chéo, khó khăn, vướng mắc trong hệ thống văn bản quy phạm pháp luật, cơ chế, chính sách và công tác quản lý nhà nước về kinh tế, góp phần phòng ngừa và ngăn chặn kịp thời các nguy cơ về an ninh kinh tế; xây dựng, sửa đổi, bổ sung hệ thống các luật, nghị định và văn bản hướng dẫn thực hiện về bảo vệ bí mật nhà nước, ngân hàng, các tổ chức tín dụng, phòng, chống rửa tiền, đất đai, bảo vệ môi trường, đầu tư, đầu tư công, đầu tư theo phương thức đối tác công tư, chứng khoán, doanh nghiệp, thuế giá trị gia tăng ..."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-71.jpg",
                       "width":  800,
                       "height":  533,
                       "alt":  "Bộ trưởng Tô Lâm (nay là Tổng Bí thư Ban Chấp hành Trung ương Đảng, Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam) phát biểu tại buổi làm việc với Đảng ủy Cục An ninh kinh tế. Nguồn: Báo Công an nhân dân.",
                       "caption":  "Bộ trưởng Tô Lâm (nay là Tổng Bí thư Ban Chấp hành Trung ương Đảng, Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam) phát biểu tại buổi làm việc với Đảng ủy Cục An ninh kinh tế. Nguồn: Báo Công an nhân dân.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tham mưu chấn chỉnh, sửa đổi các cơ chế, chính sách về thăm dò, khai thác tài nguyên khoáng sản, quản lý phân bón, bất ổn đe dọa an ninh kinh tế trên các lĩnh vực kinh tế trọng điểm như ngân hàng, tài chính, chứng khoán, trái phiếu, năng lượng, hàng không, bất động sản ...; tình hình phức tạp trong cổ phần hóa, thoái vốn, cơ cấu lại doanh nghiệp nhà nước; tiêu cực, tham nhũng tại các dự án kinh tế lớn, quản lý sử dụng đất đai, nhất là 12 dự án, doanh nghiệp yếu kém ngành Công Thương, sai phạm tại các dự án BOT giao thông ... Bảo đảm tuyệt đối an ninh công nhân. Thẩm định về bảo đảm yêu cầu an ninh, trật tự đối với hàng nghìn hồ sơ dự án đầu tư nước ngoài, dự án phát triển kinh tế - xã hội trọng điểm; tham gia giải quyết 14 vụ khiếu kiện tranh chấp đầu tư quốc tế. Từ năm 2011 đến nay, an ninh kinh tế đã chuyển cơ quan điều tra tiến hành điều tra, xử lý theo thẩm quyền trên 1.000 vụ án, khởi tố hàng nghìn bị can (đặc biệt trong đó có nhiều lãnh đạo, cán bộ chủ chốt của các bộ, ngành), thu hồi hàng chục nghìn tỷ đồng, hàng trăm triệu đô la Mỹ, hàng chục nghìn viên ma túy tổng hợp và nhiều tài liệu, thiết bị, hàng hóa khác."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-72.jpg",
                       "width":  777,
                       "height":  777,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số kết quả trên lĩnh vực an ninh thông tin, an ninh mạng, Bộ Công an thành lập Cục An ninh mạng, kịp thời tham mưu với Đảng, Nhà nước nhiều chủ trương, quyết sách về bảo vệ an ninh mạng, hoàn thiện quy định pháp luật về bảo đảm An ninh mạng, như: Chiến lược An ninh mạng quốc gia, Luật An ninh mạng, Luật Bảo vệ dữ liệu cá nhân và các nghị định; đồng thời triển khai các biện pháp nghiệp vụ, phối hợp với Bộ Thông tin và Truyền thông ngăn chặn truy cập hàng nghìn trang web, blog có máy chủ đặt tại nước ngoài; chỉ đạo lực lượng chức năng tổ chức nhiều đợt tấn công, vô hiệu hóa hàng trăm diễn đàn, blog, trang tin điện tử của tổ chức, cá nhân phản động, chống đối trong và ngoài nước; phản bác các quan điểm sai trái, thù địch, định hướng dư luận, vạch mặt các đối tượng chống phá; phát hiện và giải quyết hàng chục vụ việc trên mạng Facebook kêu gọi, kích động biểu tình, xử lý trước pháp luật nhiều đối tượng cực đoan, vi phạm pháp luật, góp phần kiềm chế hoạt động của các đối tượng, đảm bảo an ninh trên không gian mạng và an ninh xã hội. Bảo đảm tuyệt đối an ninh, an toàn hệ thống mạng thông tin quốc gia, thường trực giám sát, khắc phục sự cố tại các hệ thống thông tin trọng yếu kết nối Trung tâm An ninh mạng quốc gia; điều tra, truy vết, ngăn chặn hoạt động tấn công mạng, gián điệp đặc biệt nguy hiểm nhằm vào các hệ thống trọng yếu, các cơ quan của Đảng, Nhà nước ...; chủ động phòng ngừa và xử lý kịp thời các nguy cơ mất an ninh trong triển khai Đề án 06 của Chính phủ. Đấu tranh phòng, chống tội phạm sử dụng công nghệ cao, từ năm 2010 đến nay đã phát hiện, xác minh điều tra hàng ngàn vụ việc, khởi tố hàng nghìn bị can, thu hồi tiền và hàng ngàn máy tính xách tay, điện thoại di động, linh kiện điện tử, các loại hàng hoa và máy móc thiết bị chuyên dụng trị giá hàng ngàn tỷ đồng. Phát hiện, xử lý hình sự nhiều đối tượng tổ chức đánh bạc trực tuyến trên mạng Internet với số tiền giao dịch lên tới hàng nghìn tỷ đồng."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-73.png",
                       "width":  309,
                       "height":  309,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Với sự hy sinh, cống hiến thầm lặng của lực lượng trinh sát kỹ thuật nghiệp vụ và trinh sát ngoại tuyến, tiềm lực bảo vệ an ninh quốc gia, đấu tranh phòng, chống tội phạm của lực lượng ngày càng được tăng cường, góp phần đấu tranh có hiệu quả với những âm mưu, hoạt động xâm phạm an ninh quốc gia của các thế lực thù dịch, cơ quan đặc biệt nước ngoài, các loại đối tượng phản động, chống đối, cơ hội chính trị, đấu tranh phòng, chống tội phạm, bảo đảm trật tự, an toàn xã hội. Mọi chiến công, thành tích của lực lượng An ninh nhân dân đều có đóng góp quan trọng của lực lượng kỹ thuật nghiệp vụ, lực lượng ngoại tuyến."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số kết quả trên lĩnh vực quản lý xuất nhập cảnh, quản lý người nước ngoài, dấu ấn nổi bật của lực lượng Quản lý xuất nhập cảnh là đã tham mưu, xây dựng đồng bộ hệ thống quy phạm pháp luật về xuất nhập cảnh, thể chế hóa đầy đủ, kịp thời đường lối, chính sách của Đảng, quy định của Hiến pháp về quyền đi lại của công dân, cụ thể hóa chủ trương mở cửa, hội nhập, thể hiện sự đổi mới mạnh mẽ, toàn diện chính sách về xuất nhập cảnh, góp phần thu hút người nước ngoài vào Việt Nam đầu tư, du lịch ... , tạo điều kiện thuận lợi cho công dân xuất cảnh, nhập cảnh, đáp ứng yêu cầu sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế; đồng thời bảo đảm công khai, minh bạch nền hành chính công, giảm thời gian, chi phí, đi lại trong giải quyết các thủ tục hành chính lĩnh vực xuất nhập cảnh. Từ năm 1986 đến nay, lực lượng Quản lý xuất nhập cảnh đã tham mưu Bộ đề xuất Chính phủ ban hành Nghị định số 136/2007/NĐ-CP, ngày 17/8/2007, Nghị định số 65/2012/NĐ-CP, ngày 06/9/2012, Nghị định số 94/2015/NĐ-CP, ngày 16/10/2015 của Chính phủ về xuất cảnh, nhập cảnh của công dân Việt Nam; các nghị định Chính phủ, quyết định của Thủ tướng Chính phủ về Quy chế miễn thị thực cho người Việt Nam định cư ở nước ngoài và người nước ngoài là vợ, chồng, con của người Việt Nam định cư nước ngoài hoặc của công dân Việt Nam; Luật Xuất cảnh, nhập cảnh của công dân Việt Nam; Luật Nhập cảnh, xuất cảnh, quá cảnh, cư trú của người nước ngoài tại Việt Nam; Nghị định số 07/2017/NĐ- CP, ngày 25/01/2017, quy định trình tự, thủ tục thực hiện thí điểm cấp thị thực điện tử cho người nước ngoài nhập cảnh Việt Nam ..."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Triệt để ứng dụng công nghệ thông tin trong quản lý xuất nhập cảnh rút ngắn thời gian làm thủ tục nhập và xuất cảnh, giảm tình trạng ùn tắc ở sân bay (thực hiện thí điểm cấp thị thực điện tử; triển khai hệ thống khai báo tiếp nhận và quản lý thông tin tạm trú của người nước ngoài qua Internet; khai, tiếp nhận hồ sơ và làm thủ tục cấp, đổi hộ chiếu phổ thông trực tuyến ... ) và giảm 40% thủ tục về xuất nhập cảnh theo Đề án 30 của Chính phủ là minh chứng thể hiện sự gương mẫu, đi đầu của lực lượng Quản lý xuất nhập cảnh về cải cách hành chính, với nhiều thủ tục thông thoáng, thuận tiện, tạo điều kiện thuận lợi cho công dân xuất cảnh, nhập cảnh và người nước ngoài vào Việt Nam được các cơ quan, tổ chức, cá nhân trong, ngoài nước ghi nhận và đánh giá cao về tính minh bạch, chuyên nghiệp, hiện đại, thuận lợi, dễ dàng cho người xuất nhập cảnh. Thông qua việc tăng cường công tác kiểm tra, kiểm soát công tác xuất, nhập cảnh tại các cảng hàng không quốc tế, lực lượng quản lý xuất nhập cảnh đã kịp thời hỗ trợ các đơn vị nghiệp vụ nắm thông tin về đối tượng cần chú ý; phát hiện, ngăn chặn, xử lý các hành vi vi phạm pháp luật của người nước ngoài và công dân Việt Nam; phát hiện, bắt giữ liên tiếp hàng chục vụ vận chuyển ma túy quốc tế qua đường hàng không. Đặc biệt, từ ngày 01/3/2025, lực lượng Quản lý xuất nhập cảnh tiếp nhận nhiệm vụ quản lý nhà nước về bảo đảm an ninh hàng không và cung cấp dịch vụ bảo đảm an ninh hàng không tại cảng hàng không, sân bay và cơ sở xử lý hàng hoa, bưu gửi để đưa lên tàu bay đã tạo sự gắn kết, liên thông, khắc phục tình trạng chia cắt, một việc do nhiều cơ quan đảm nhiệm trước đây, giảm các cơ chế phối hợp, nâng cao hiệu lực quản lý nhà nước, hiệu quả phục vụ nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số kết quả trên lĩnh vực điều tra tội phạm xâm phạm an ninh quốc gia, lực lượng An ninh điều tra tích cực phối hợp với các đơn vị nghiệp vụ an ninh, thu thập, củng cố tài liệu, chứng cứ vững chắc; xây dựng hồ sơ pháp lý chặt chẽ, áp dụng linh hoạt, sáng tạo các quy định của pháp luật, điều tra, truy tố, xét xử hàng trăm vụ án xâm phạm an ninh quốc gia. Đặc biệt, lực lượng An ninh điều tra đã được giao điều tra các vụ án, vụ việc thuộc diện Ban Chỉ đạo Trung ương về phòng, chống tham nhũng theo dõi, chỉ đạo, các vụ án, vụ việc thường xin ý kiến chỉ đạo của Bộ Chính trị, Ban Bí thư, Ban Thường vụ Tỉnh ủy, Thường trực Thành ủy. Điển hình như các vụ án: “Cố ý làm trái quy định của Nhà nước về quản lý kinh tế gây hậu quả nghiêm trọng xảy ra tại Tập đoàn Công nghiệp tàu thủy Việt Nam” (Vinashin) năm 2010; “Giang Kim Đạt và đồng phạm tham ô tài sản, rửa tiền xảy ra tại Công ty TNHH Một thành viên Vận tải Viễn Dương Vinashin” (Vinashinlines) năm 2014; Đinh La Thăng, Trịnh Xuân Thanh cùng đồng phạm cố ý làm trái các quy định của Nhà nước về quản lý kinh tế gây hậu quả nghiêm trọng, tham ô tài sản, xảy ra tại Tập đoàn Dầu khí Việt Nam (PVN) và Tổng công ty cổ phần Xây lắp dầu khí Việt Nam (PVC) năm 2017 ..."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số kết quả trên lĩnh vực đối ngoại về an ninh, cùng với lực lượng Tình báo, lực lượng An ninh thông qua hợp tác về an ninh đã chủ động trao đổi với các nước về quan điểm, chủ trương của Việt Nam trong xử lý các vấn đề quan hệ quốc tế, quan hệ song phương và vấn đề dân chủ, nhân quyền, tôn giáo, thu hẹp những khoảng cách bất đồng và hạn chế những yếu tố tiêu cực trong chính sách của một số đối tác đối với Việt Nam. Đồng thời, kiên quyết đấu tranh với những luận điệu chống Việt Nam, can thiệp vào nội bộ Việt Nam của Mỹ, EU và các thế lực thù địch, góp phần làm giảm áp lực từ bên ngoài, đẩy lùi âm mưu lợi dụng vấn đề “dân chủ”, “nhân quyền” hoạt động gây mất ổn định an ninh, trật tự đối với Việt Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chủ động thiết lập, củng cố phòng tuyến bảo vệ an ninh quốc gia từ xa, phối hợp với các đối tác tăng cường công tác trao đổi tình hình, chia sẻ thông tin về hoạt động của các thế lực thủ địch và các loại tội phạm để ngăn chặn kịp thời. Trao đổi, phối hợp với các cơ quan thực thi pháp luật của Lào, Campuchia, Thái Lan ngăn chặn kịp thời một số tổ chức phản động người Việt lưu vong đưa người xâm nhập về Việt Nam, ngăn chặn hoạt động tuyên truyền lôi kéo lập “Vương quốc Mông”, hình thành tổ chức chính trị đối lập; giải quyết vấn đề người dân tộc thiểu số ở Tây Nguyên vượt biên trái phép; phối hợp với cơ quan tình báo Thái Lan ngăn chặn số đối tượng phản động người Việt lưu vong nhập cảnh Thái Lan tiến hành các hoạt động tuyên truyền chống nhà nước ta; phối hợp với Malaysia ngăn chặn có hiệu quả các tổ chức phản động người Việt lưu vong tổ chức “Hội nghị về người lao động Việt Nam” tại Malaysia; phối hợp với đối tác Hàn Quốc tác động ngăn chặn không trao “Giải nhân quyền Gwangju” cho số đối tượng chống đối trong nước ... Tiến hành các hình thức, biện pháp đấu tranh thích hợp, góp phần làm thất bại âm mưu, ý đồ hoạt động và ảo tưởng của một số đối tượng phản động trông chờ vào sự giúp sức, can thiệp từ bên ngoài."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đã thiết lập quan hệ hợp tác với 28 nước về đấu tranh phòng, chống khủng bố, góp phần phòng ngừa, đấu tranh, ngăn chặn nhiều âm mưu, hoạt động khủng bố của các thế lực thù địch, phản động; thông báo và đề nghị các tổ chức quốc tế, cơ quan An ninh, Tình báo, Cảnh sát các nước phối hợp đấu tranh với các tổ chức phản động lưu vong có hoạt động khủng bố; đấu tranh ngoại giao, bao vây, cô lập, đẩy đuổi không để số cầm đầu, cốt cán các tổ chức phản động lưu vong lợi dụng địa bàn các nước Thái Lan, Campuchia, Malaysia, Hàn Quốc ... hoạt động chống phá Việt Nam. Qua đó, đã tiếp nhận danh sách số đối tượng khủng bố quốc tế do cơ quan An ninh, Tình báo, Cảnh sát các nước trao đổi; duy trì “đường dây nóng” phòng, chống khủng bố với nhiều đại sứ quán các nước tại Việt Nam; tổ chức điều tra, xác minh đối tượng, vụ việc nghi liên quan khủng bố tại Việt Nam; cung cấp cho phía Mỹ, Hàn Quốc nhiều tài liệu, chứng cứ liên quan đến hoạt động khủng bố của các tổ chức phản động người Việt lưu vong với danh xưng “Chính phủ Việt Nam tự do”, “Việt Tân”, “Ủy ban cứu người vượt biên” ..."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Quyết liệt triển khai, tạo được bước tiến đột phá trong thực hiện Đề án 05 về Công an nhân dân tham gia lực lượng Gìn giữ hòa bình Liên hợp quốc từ tháng 8/2022 đến nay, trong đó tham mưu thành lập Văn phòng thường trực Bộ Công an về Gìn giữ hòa bình Liên hợp quốc; hoàn thiện thủ tục cử 22 cán bộ tham gia lực lượng phái bộ Gìn giữ hòa bình Liên hợp quốc tại Mỹ và Nam Sudan. Đây là lần đầu tiên Bộ Công an có sĩ quan tham gia lực lượng Gìn giữ hòa bình Liên hợp quốc, góp phần nâng cao hình ảnh, vị thế của Bộ Công an trên trường quốc tế; khẳng định đường lối, chính sách đối ngoại nhất quán và cam kết của Đảng, Nhà nước Việt Nam tích cực tham gia cùng Liên hợp quốc và cộng đồng quốc tế duy trì hòa bình, ổn định, hợp tác, phát triển trên thế giới."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-74.jpg",
                       "width":  1000,
                       "height":  666,
                       "alt":  "Sáng 20/02/2025, tại Hà Nội, Văn phòng Thường trực Bộ Công an về gìn giữ hòa bình Liên Hợp Quốc tổ chức Hội nghị triển khai công tác năm 2025. Thiếu tướng Nguyễn Sỹ Quang, Chánh Văn phòng Thường trực Bộ Công an về GGHB LHQ chủ trì Hội nghị.",
                       "caption":  "Sáng 20/02/2025, tại Hà Nội, Văn phòng Thường trực Bộ Công an về gìn giữ hòa bình Liên Hợp Quốc tổ chức Hội nghị triển khai công tác năm 2025. Thiếu tướng Nguyễn Sỹ Quang, Chánh Văn phòng Thường trực Bộ Công an về GGHB LHQ chủ trì Hội nghị.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "ii-cam-nhan-ve-chien-cong-xuat-sac-nhat-cua-luc-luong-an-ninh-nhan-dan",
                       "text":  "II. CẢM NHẬN VỀ CHIẾN CÔNG XUẤT SẮC NHẤT CỦA LỰC LƯỢNG AN NINH NHÂN DÂN:"
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "thang-loi-ke-hoach-phan-gian-cm12",
                       "text":  "THẮNG LỢI KẾ HOẠCH PHẢN GIÁN CM12"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-75.png",
                       "width":  670,
                       "height":  977,
                       "alt":  "Báo cáo số 01/BVCT ngày 20/01/1981 của Ty Công an Kiên Giang về danh sách 23 gián điệp biệt kích xâm nhập vào Việt Nam, ngày 06/01/1981.",
                       "caption":  "Báo cáo số 01/BVCT ngày 20/01/1981 của Ty Công an Kiên Giang về danh sách 23 gián điệp biệt kích xâm nhập vào Việt Nam, ngày 06/01/1981.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Kế hoạch CM12 là một chiến dịch phản gián của lực lượng An ninh Việt Nam. Chiến dịch này kéo dài từ năm 1981 đến năm 1988 nhằm làm thất bại kế hoạch của tổ chức “Mặt trận thống nhất các lực lượng yêu nước giải phóng miền Nam Việt Nam” do Lê Quốc Túy và Mai Văn Hạnh cầm đầu (Mục tiêu chiến lược tổ chức khi mới thành lập là “giải phóng miền Nam Việt Nam” và sau này khi thấy “đủ lực lượng” mục tiêu là “giải phóng Việt Nam”, chúng đổi tên là “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam”). Tổ chức này cùng với sự hỗ trợ của tình báo Thái Lan và Trung Quốc, bí mật đưa gián điệp biệt kích, vũ khí từ nước ngoài vào, liên kết với các tổ chức chống chính quyền trong nội địa, tiến hành gây bạo loạn cướp chính quyền từng vùng để đi đến bạo loạn cướp chính quyền trên cả nước. Tháng 10 năm 1980, Lê Quốc Túy nhất quyết tung toán “Minh Vương 1” về nước bằng đường bộ qua đất Campuchia xâm nhập về chống phá nước ta, nhận được tin về việc có một toán gián điệp biệt kích nguời Việt lưu vong xâm nhập Việt Nam qua đường Campuchia. Lãnh dạo bộ nội vụ đã chỉ đạo cho Công an tỉnh An Giang, Đồng Tháp, Kiên Giang yêu cầu thực hiện nghiêm túc chỉ thị của Bộ trưởng, triển khai phương án truy tìm gián điệp biệt kích. Thực hiện ý kiến chỉ đạo của Lãnh đạo, đoàn cán bộ Công an tỉnh An Giang đã sang Campuchia phối hợp các chuyên gia an ninh Campuchia trực tiếp xét hỏi đối tượng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 22/12/1980, toán gián điệp biệt kích đến Tà Lọt (Campuchia) giáp kinh Vĩnh Tế, An Giang, 02 tên vào Châu Đốc liên lạc với Lê Chơn Tình cầm đầu tổ chức phản động. Do không thực hiện được kế hoạch đã bàn với Lê Quốc Túy, toán gián điệp chia làm 2 cánh: tám tên do Trần Ngọc Minh (K18) toán trưởng quay lại nước ngoài báo cáo với “Tổng hành dinh”, mười lăm tên do Lê Hồng Ngự (K34) chỉ huy tiếp tục xâm nhập về nước tìm nơi chú ẩn chờ chỉ thị."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 18/01/1981, sau khi được lệnh của toán trưởng cho phân tán, Trần Mình Hiếu về quê ở An Biên, Kiên Giang được gia đình vận động ra đầu thú khai nhận là một trong số 23 tên gián điệp biệt kích của tổ chức “Mặt trận thống nhất của lực lượng yêu nước giải phóng Việt Nam”, quá trình xâm nhập của toán “Minh Vương 1” như thế nào, ngày và nơi hẹn định kỳ, nơi ở ẩn náu của toán trưởng Lê Hồng Dự. Ngày 20/01/1981 Công an tỉnh Kiên Giang và Công an Hậu Giang đã tổ chức bắt giữ Lê Hồng Dự tại quầy sách của Châu ở Cần Thơ, đồng thời tạm giữ Lê Hồng Châu. Dự bị bắt và nhận thấy không còn đường nào khác là phải khai báo thật thà để được hưởng sự khoan hồng, Dự khai nhận quá trình xâm nhập và hiểu biết của hắn về tổ chức “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Từ những tin tức và tài liệu thu thập được, ngày 27/01/1981 Bộ trưởng Phạm Hùng chủ trì một cuộc họp tại thành phố Hồ Chí Minh để bàn kế hoạch đấu tranh với tổ chức của Lê Quốc Túy. Cuộc họp đã đánh giá kết quả công tác đấu tranh ban đầu, xác định chủ trương đối phó của ta phải đối phó toàn diện, trung ương phối hợp với địa phương, thống nhất hành động, truy quét và khai thác. Chỉ đạo cách thức, biện pháp tổ chức thực hiện tập trung về một đầu mối, giao nhiệm vụ cụ thể cho Công an từng tỉnh có liên quan để thực hiện."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cuộc họp thống nhất đặt ký hiệu cho chuyên án này là AB-27 (AB viết tắt của từ An Biên, địa danh nơi ta bắt tên biệt kích đầu tiên trong vụ này; 27 tức là ngày 27/01/1981, thời điển diễn ra cuộc họp quan trọng quyết định xác lập chuyên án). Từ sau cuộc họp, tổ an ninh K2 chính thức vào cuộc, công an một số địa phương An Giang, Kiêng Giang, Hậu giang…tổ chức truy lùng ở các khu vực. Đúng ngày 30/1 Huỳnh Phúc Nam - K17 đi lên Cần Thơ và bị các trinh sát ập đến bắt một cách nhanh chóng và bí mật. Tiếp đó Bộ Nội vụ ra lệnh truy nã những tên còn lại của toán “Minh Vương 1” như Nguyễn Văn Ninh (K15), Nguyễn Thanh Vân (K26), Nguyễn Văn Cụm (K23), Thành (K16), Sơn Văn Tài (K31), Nguyễn Văn Dũng (k39), Tô Văn Hườn (K38)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tổ chuyên trách của Đại tá Hồ Khiết chịu trách nhiệm giáo dục, cảm hóa toán trưởng “Minh Vương 1” Lê Hồng Dự (K34) và truyền tin Huỳnh Phúc Kháng (K17). Sau khi được cảm hóa K34 và K17 đã khai báo thành khẩn những hiểu biết của mình về Lê Quốc Túy, Mai Văn Hạnh và tổ chức “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam”, quá trình hoạt động ở Thái lan, Campuchia, và vai trò của y thay Trần Ngọc Minh, sẵn sàng thực hiện khi được yêu cầu sử dụng điện đài liên lạc với “Tổng hành dinh”. Đến ngày 18/3/1981 sau hơn một tháng rưỡi chuẩn bị chuyên án AB-27 quyết định cho điện đài “Minh vương 1”. Qua theo dõi của ta, từ ngày 06/1 đến ngày 24/2/1981 đài “Tổng hành dinh” ở trung tâm Bangkok đã lên máy liên tục để bắt liên lạc với đài của toán “Minh vương 1” nhưng đài của K17 bặt vô âm tín. Do không liên lạc được với toán quân xâm nhập nên trung tâm ngừng liên lạc. Sau đó “Tổng hành dinh” còn lên máy một đợt nữa từ ngày 7/3 đến ngày 12/3/191 mà vẫn không bắt được liên lạc nên ngừng liên lạc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua chuyên án AB-27 ta đã truy bắt toàn bộ bọn xâm nhập, làm thất bại bước đầu kế hoạch của chúng, âm mưu liên kết của bọn phản động lưu vong và bọn phản động trong nước. Quá trình đấu tranh khai thác bọn xâm nhập, tổng hợp các nguồn tin, đã giúp lực lượng Công an phát hiện thêm một số đối tượng phản động, một số đầu mối cài cắm của địch và đặc biệt là biết được âm mưu, thực lực của chúng ở nước ngoài, từ đó chủ động xây dựng thế trận, tổ chức đấu tranh."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua lời khai của số gián điệp biệt kích bị bắt trong chuyến xâm nhập vào An Giang vào tháng 12/1980 và lời khai của Lê Chơn Tình về ý đồ xây dựng căn cứ của Lê Quốc Tuý, ta phán đoán thời gian tới địch sẽ chuyển hướng, thay đổi đường xâm nhập về Việt Nam bằng đường biển. Từ nhận định đó, ngày 12/5/1981, Bộ trưởng Phạm Hùng triệu tập một hội nghị đặc biệt tại TP. Hồ Chí Minh gồm những người đứng đầu cơ quan Công an các tỉnh duyên hải Nam Bộ để bàn biện pháp tăng cường công tác phòng ngừa gián điệp biệt kích xâm nhập (họp từ ngày 12/5-15/5/1981). Ngày 12/5/1981, hội nghị phòng, chống gián điệp biệt kích khai mạc, cũng chính ngày này Lê Quốc Tuý ra lệnh cho tàu B2 mang theo vũ khí và gián điệp biệt kích xâm nhập bằng đường biển vào nước ta."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thực hiện chỉ đạo của Bộ nội vụ: tổ chức đấu tranh để tấn công lại địch, các lực lượng liên quan đã tiến hành nhiều biện pháp, quyết tâm thực hiện phiên liên lạc đầu tiên với trung tâm địch đúng ngày 22/5/1981 như địch chỉ định. Đối với nhân viện điện đài (K27), rút kinh nghiệm từ chuyên án AB27, ban chuyên án chuẩn bị mọi điều kiện thuận lợi để K2 yên tâm làm chủ máy móc. Đúng quy ước chiều ngày 22 tháng 5 năm 1981, phiên liên lạc địch được thực hiện, phiên liên lạc thành công đã mỡ ra hướng đấu tranh mới. Đồng chí Thứ trưởng Cao Đăng Chiếm tổ chức ngay cuộc họp tại trại “Cây Gừa” quyết định lập chuyên án đấu tranh với trung tâm địch. Nhiệm vụ của chuyên án lúc này là:"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "(1) Tương kế tựu kế, dùng địch đánh địch; giương bẫy bắt gọn các toán gián điệp xâm nhập, thu toàn bộ vũ khí, phương tiện. Bằng mọi cách buộc địch xâm nhập theo kế hoạch của ta, buộc chúng phải đi đường biển, đúng nơi ta chuẩn bị sẵn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "(2) Thông qua việc địch ở nước ngoài móc nối mạng lưới trong nội địa, ta có kế hoạch điều tra, bóc gỡ toàn bộ mạng lưới của địch."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "(3) Từng bước tìm hiểu âm mưu chiến lược, âm mưu cụ thể và kế hoạch hành động của địch để chủ động đối phó, ngăn chặn địch thực hiện âm mưu cụ thể, tiến hành trấn áp trước khi chúng hành động phá hoại."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-76.png",
                       "width":  1105,
                       "height":  709,
                       "alt":  "Đồng chí Phạm Hùng, Phó Chủ tịch Hội đồng Bộ trưởng kiêm Bộ trưởng Bộ Nội vụ gặp mặt các đồng chí trong Ban Chỉ đạo KH.CM12. Nguồn: Ảnh tư liệu.",
                       "caption":  "Đồng chí Phạm Hùng, Phó Chủ tịch Hội đồng Bộ trưởng kiêm Bộ trưởng Bộ Nội vụ gặp mặt các đồng chí trong Ban Chỉ đạo KH.CM12. Nguồn: Ảnh tư liệu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Để thực hiện 3 nhiệm vụ trên, Bộ Nội vụ tiến hành kế hoạch lấy tên là Kế hoạch CM12. Đồng chí Bộ trưởng Phạm Hùng chỉ đạo: không gọi chuyên án, gọi là Kế hoạch CM12, viết tắt là “KH.CM12”. KH.CM12 là một đơn vị đặc biệt, hoạt động mang tính độc lập không trực thuộc một đơn vị nghiệp vụ hay một ty Công an nào; chọn lựa, huy động cán bộ từ nhiều lực lượng nghiệp vụ của các Vụ, Cục và Công an các tỉnh miền Nam. “KH.CM12” được triển khai trên địa bàn rộng lớn từ Minh Hải, Kiên Giang, Hậu Giang đến TP. Hồ Chí Minh, Đồng Nai, Tây Ninh và các tỉnh miền Trung cho đến nước ngoài. Trong quá trình đấu tranh, yêu cầu phát triển đến đâu lực lượng được đáp ứng đến đó. KH.CM12 đặt dưới sự chỉ đạo trực tiếp của Bộ trưởng Phạm Hùng và Thứ trưởng Cao Đăng Chiếm. Mọi hoạt động của các lực lượng tham gia KH.CM12 đều theo một chương trình thống nhất dưới sự chỉ huy, chỉ đạo trực tiếp, tập trung của một ban chỉ đạo gồm các đồng chí lãnh đạo cao cấp, có năng lực, giàu kinh nghiệm. Các chuyên án, các đầu mối có liên quan đến KH.CM12 đều phải phục tùng, phục vụ cho KH.CM12, như: chuyên án TK09 đấu tranh với bọn cầm đầu phản động trong một tổ chức tôn giáo; chuyên án TQ42 đấu tranh với tổ chức phản động “Mặt trận quốc gia Việt Nam” do Lê Quốc Quân cầm đầu; chuyên án H82 đấu tranh với Huỳnh Vĩnh Sanh, Chủ tịch “Mặt trận” phụ trách quốc nội của địch; chuyên án PK07 đấu tranh với tổ chức phản động tại địa bàn Phú Khánh."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "dien-bien-cua-ke-hoach-phan-gian-cm12-kh-cm12",
                       "text":  "DIỄN BIẾN CỦA KẾ HOẠCH PHẢN GIÁN CM12 (KH.CM12)"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong lúc Bộ trưởng Phạm Hùng triệu tập một hội nghị đặc biệt tại TP. Hồ Chí Minh để bàn biện pháp tăng cường công tác phòng ngừa gián điệp biệt kích xâm nhập. Vào ngày 15 tháng 5 năm 1981, lực lượng của ta đã phát hiện hoạt động của tổ chức “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam”, xác định một tàu lạ ở vùng biển phía tây đảo Thổ Chu, cách vùng biển Cà Mau 130 Hải lý. Cơ quan trinh sát kỹ thuật nhận định bọn gián điệp biệt kích của Lê Quốc Túy đã xâm nhập vùng biển Minh Hải, kết quả phát hiện đã mở màn cho chuyên án mới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nguồn tin trên chưa kịp xác minh làm rõ thì ngày 16/5/1981, một người dân ở Rạch Lăng thuộc huyện Trần Văn Thời, Minh Hải dẫn con rể là Phạm Thanh Danh (K64), người trốn về nhà đêm 15/5 đến gặp Chủ tịch huyện Trần Văn Thời tự thú là gián điệp biệt kích mới xâm nhập về. Đồng chí Chủ tịch triệu tập gấp cuộc họp và tổ chức truy bắt gián điệp biệt kích xâm nhập. Vào thời điểm đó, Phó Trưởng công an xã Khánh Hải báo cáo Công an huyện về việc người dân phát hiện một số thùng vũ khí được chôn giấu cở vàm kênh Bảy Ghe. Phối hợp với nguồn tin Công an tỉnh thông báo, Công an huyện Trần Văn Thời kết luận đây là một toán gián điệp biệt kích đã xâm nhập vào bờ ở khu vực vàm kênh Bãi Ghe (nay gọi là Bảy Ghe) và lập nhanh phương án truy bắt. Tiếp đó, tên Trịnh Văn Kiếm (K59) đã đến Công an đầu thú, Công an huyện Trần Văn Thời đã đưa K64 và K59 đến địa điểm gián điệp biệt kích ẩn náu để kêu gọi toán trưởng và tên điện tín viên ra hàng. Trong vòng hai ngày toàn bộ nhóm gián điệp gồm chính tên đã bị bắt, công an thu giữ điện đài và cho dẫn dãi cả toán về Công an huyện. Sau đó, các lực lượng của huyện Trần Văn Thời tiếp tục ra bờ biển thu giữ vũ khí. Đến khoản 3 giờ chiều ngày 17/5/1981 thì vớt được hết 3,5 tấn vũ khí và đưa toàn bộ về công an huyện. Từ kết quả đó, đồng chí Cao Đăng Chiếm, Thứ trưởng Bộ Nội vụ đã chỉ đạo tổ chức lập kế hoạch đấu tranh tấn công lại địch."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Các đối tượng bị bắt khai báo: Theo sự chỉ đạo của Túy, Hạnh toán xâm nhập do Nguyễn Văn Thạnh (K44) cầm đầu sẽ ẩn náu tại tỉnh Minh Hải, thành lập “Tổ đặc biệt” (tổ tiếp vận kinh tài) ở Cà Mau để làm cầu nối tiếp nhận vũ khí, phương tiện, gián điệp biệt kích xâm nhập về bằng đường biển. “Tổ đặc biệt” gồm 4 tên: Phạm Thanh Danh (K64) phụ trách chung; Bùi Xuân Huy (K27) phụ trách điện đài liên lạc với trung tâm và đội tàu; Trịnh Văn Kiếm (K59) và Doãn Văn Dũng (K61); ngoài “Tổ đặc biệt”, mỗi tên có nhiệm vụ riêng. Toán K44 xâm nhập là mở đầu cho một kế hoạch lớn của Tuý, Hạnh; sau toán K44 sẽ là các toán xâm nhập khác cùng các loại vũ khí, phương tiện làm bộ khung vũ trang và trang bị cho lực lượng phản động trong nước hình thành đội quân phản cách mạng. Trong số 8 tên bị bắt, trừ 3 tên đầu thú, số còn lại đều có thái độ khai báo thành khẩn. Riêng K27 là nhân viên điện đài lúc đầu rất ngoan cố, lực lượng công an kiên trì giáo dục cuối cùng K27 đã khai rõ quy ước liên lạc và tự nguyện xin lập công chuộc tội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sau chuyến xâm nhập đầu tiên ngày 15/5/1981 vào Bãi Ghe, Sống Đốc, Minh Hải do K44 làm toán trưởng và 08 tên gián điệp biệt kích (ta đã bắt sống 08 tên, tiêu diệt 01 tên, thu 3,5 tấn vũ khí, 01 máy truyền tin). Qua tổ chức liên lạc bằng điện đài với Trung tâm địch thành công, ta đã nắm được ý đồ xâm nhập của địch, từ đó chủ động triển khai kế hoạch, bố trí đón bắt các chuyến xâm nhập."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập lần thứ hai: Ngày 6/9/1981 hai chiếc tàu của địch gọi là B1 và B2 mang biển hiệu QK7 (Quân khu 7) và Phù Khánh của Việt Nam chở 16 tấn vũ khí, 3.800USD, 21.694 đồng; 01 bộ mật mã mới và 06 tên “cán bộ thành” do Trần Ngọc Điền (K55) chỉ huy tăng tốc, xâm nhập vùng biển Việt Nam. Khoảng 19h ngày 09/9/1981 hai tàu xâm nhập vào vùng biển Bãi Ghe, ta bắt gọn 06 tên gián điệp và thu giữ toàn bộ vũ khí. Việc bắt giữ 06 tên “cán bộ thành”, thu giữ toàn bộ vũ khí diễn ra nhanh gọn, không một tiếng súng. Sau một tuần thuyết phục, cảm hóa, động viên các đối tưởng đã khai mục đích hoạt động xâm nhập về nước nhằm thành lập Liên tỉnh xứ, hoạt động tại các địa bàn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua thư của Lê Quốc Túy gửi “Tổ đặc biệt” và kết quả khai thác số gián điệp biệt kích mới xâm nhập, cùng với thông tin của lực lượng trinh sát kỹ thuật, Ban chỉ đạo kế hoạch CM-12 nắm được khá đầy đủ ý đồ và kế hoạch của Lê Quốc Túy như sau: Sáu “cán bộ thành” sẽ hoạt động do K55 phụ trách, HK175 làm toán phó và 04 nhân viên là K42, HK168, HK143, HK145. Địa bàn hoạt động của tổ K55 là các vùng Sài Gòn, Phan Rang, Phú Khánh, Cần Thơ, Rạch Gía. Ngoài ra tổ K55 còn có nhiệm vụ ám sát cán bộ. Những bước đầu chủ yếu là móc nối gây cơ sở, chưa được hành động phá hoại. “Tổ đặc biệt” có toàn quyền chỉ huy các K và HK ở quốc nội. Mục tiêu phá hoại kho xăng Nhà Bè, kho Long Bình, cầu Sài Gòn, cầu Bến Lức, Nhà Thờ Đức Bà, Nhà hát TP. Hồ Chí Minh và một số cơ sở kinh tế khác,... Lê Quốc Túy chủ trương trong tháng 9 sẽ vào ba chuyến, sau đó sẽ chuyển hết 500 tấn vũ khí về nước với 10 chuyến tiếp theo ở các vùng Minh Hải và vùng biển Phú Khánh."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Căn cứ vào nhiệm vụ trung tâm của từng tên, lãnh đạo Bộ nội vụ hội ý nhanh về kế hoạch CM-12. Phân tích tình hình, diễn biến và nhận địch sắp tới là “Địch chắc chắn sẽ cho vào chuyến thứ hai và thứ ba vì chúng muốn tăng cường lực lượng người và vũ khí để có thể hoạt động còn những chuyến trong tháng 11 và 12 cần theo dõi và xem xét tình hình mới đánh giá được”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập lần thứ 3: Ông Phạm Hùng dự đoán là chuyến thứ ba địch sẽ đưa người vào để nắm lấy căn cứ, trực tiếp chỉ huy dùng tàu để trực tiếp vận chuyển vũ khí và người. Ngày 21/9/1981, địch đưa hai tàu chở mười bốn tấn vũ khí vào nước ta và mười một tên gián điệp biệt kích do Trần Ngọc Minh (K18) làm toán trưởng. Tất cả mọi diễn biến hoạt động của “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam” ở nước ngoài, Ban chỉ đạo CM12 đã nắm được hầu hết. Việc chúng chuẩn bị cho số gián điệp biệt kích vào lần này cũng đã được biết trước và chủ trương của ta sẽ không tiếp người, cuối cùng bọn chúng phải quay lại nước ngoài. Số vũ khí mang theo được thả xuống biển, tuy nhiên gặp bão nên trôi dạt khắp nơi, ta tổ chức vớt được một số vũ khí. Ban chỉ đạo Kế hoạch CM12 tổ chức rút kinh nghiệm và đánh giá, yêu cầu đặt ra đối với chuyến này đạt kết quả tốt, đúng kế hoạch."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thành công trong “chiến thuật” tạm đẩy toán gián điệp biệt kích của K18 trở lại mà không tham bắt là để tính toán “làm ăn lâu dài”, nghĩa là thu hút cho hết lượng của địch ở nước ngoài về trong nước như chỉ đạo của lãnh đạo bộ nội vụ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua khai thác số gián điệp biệt kích xâm nhập bị bắt, ta biết được bản tính độc đoán, chuyên quyền, thích được nịnh của Lê Quốc Túy. Lợi dụng điểm này ta đã cho “Tổ đặc biệt” khéo léo dùng lời lẽ trong các bức điện làm cho Túy càng tin tưởng vào “Tổ đặc biệt”, buộc chúng thực hiện theo kế hoạch của ta. Tin tưởng vào “Tổ đặc biệt”, Lê Quốc Túy đã bộc lộ một số cơ sở của Túy đã xây dựng từ trước. Trong tuần tháng 11/1981, Lê Quốc Túy lại chỉ thị cho K64 “Bằng mọi cách phải chuẩn bị địa điểm cư trú quân tạm thời cho khoảng 30 người và chuẩn bị đón 06 “cán bộ thành”, lo sẵn phương tiện và cơ sở để nuôi quân tạm thời trong một tháng ở vùng Gành Hào hoặc từ Đá Bạc đến Tiểu Dừa”. Đến ngày 19/11/1981, trung tâm địch thông báo cho “Tổ đặc biệt” là chuyến tới có 4 tàu chở hàng (khoảng 25 tấn) 30 quân và 6 “Cán bộ thành” cùng một truyền tin phụ cho K27. Ngày 21/11/1981, “Tổ đặc biệt” vẫn kiên quyết từ chối khéo việc đổ bộ một lúc 30 quân nhằm đảm bảo thực hiện đúng chủ trương chiến lượt là kéo địch vào dần dần. Đồng thời đề nghị đưa “cán bộ thành” vào trước và trong chuyến này để lại 2 tàu cho “Tổ đặc biệt”, địa điểm xâm nhập là vàm Bãi Ghe."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập lần thứ 4: Ngày 18/01/1982, đài “Tổng hành dinh” cho biết là “chiến dịch không thay đổi, Đại đội 124 sẽ vào chuyến này gồm có 50 K”, trước khi xuất phát để khích lệ “kháng chiến quân” xâm nhập Việt Nam, Lê Quốc Túy tuyên bố nâng cấp “Đại đội 124” thành Tiểu đoàn 124”. Ngày 29/1/1982 “Tiểu đoàn 124” rời khỏi mật cứ “Tự trắng” hành quân tập kết ở Đồn 506 của Sở đặt nhiệm Biên phòng Thái Lan. Tiểu đoàn 124 có 45 kháng chiến quân chứ không phải 50K như lúc đầu, đúng 04 giờ sáng ngày 30/01/1982, hai tàu B1 và B2 rời cảng Rayon để xâm nhập Việt Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trước đó, Ban chỉ đạo Kế hoạch CM12 đã biết địch chuẩn bị cho chuyến xâm nhập sắp tới. Bộ phận chỉ huy tiền phương họp bàn kế hoạch đón hàng trong chiến dịch mới, mục đích của ta là bắt sống toàn bộ toán này, trong trường hợp chúng kháng cự thì mới tiêu diệt. Đến ngày 01/02/1982 vào đất liền, bọn chúng được trang bị vũ khí mạnh, lương thực thực phẩm đầy đủ, tuy nhiên lực lượng của ta đã có sự chuẩn bị từ trước, chúng ta bao vây, cho phát loa kêu gọi đầu hàng. Chúng có mang vũ khí như B40, RPD, AK47…nên ngoan cố nổ súng bắn trả, quân ta nổ súng bắn thẳng vào bọn biệt kích, 07 tên bị bắn chết, bắt sống 38 tên, thu toàn bộ vũ khí, phương tiện."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ năm: Sau chuyến đổ bộ “Tiểu đoàn 124”, Lê Quốc túy và Mai Văn Hạnh tổ chức thêm ba chuyến xâm nhập bằng tàu biển vào bờ biển Minh Hải. Các chuyến này cũng do ta chủ động bố trí bãi đổ, do có kinh nghiệm qua các chuyến trước, thực hiện phương pháp sang hàng nhanh hơn. Sau chuyến đổ hàng và “Tiểu đoàn 124” đêm 01/02/1982 chuyến xâm nhập lần thứ năm kể từ chuyến xâm nhập đầu tiên của địch (năm 1981), đổ hàng trong đêm 8/2/1982. Chuyến này hai tàu xâm nhập vào hòn đá bạc, “Tổ đặc biệt” đưa 2 tàu ra cp mạn tàu xâp nhập, các “thủy thủ đoàn” phối hợp các “thủy thủ nội địa” bốc dỡ hàng rất nhanh, đảm bảo 9.496 kg vũ khí các loại như súng AK, súng trường bán tự động, lựu đạn và đạn B40."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ sáu: Ngày 18/02/1982, hai tàu xâm nhập của địch đã vào Hòn Đá Bạc, ta đưa tàu ra tiếp nhận trên 9 tấn vũ khí các loại. Trong thời gian này, địch yêu cầu “Tổ đặc biệt” liên lạc với đại đội 124, cung cấp cho đại đội này tiền, bổ sung điện đài và yêu cầu gọi HK122 và K43 sang nước ngoài nhận chỉ thị; chuyển chất nổ cho HK175 và HK145 mang về Sài Gòn tổ chức phá hoại."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ bảy: Ngày 27/2/1982 chuyến xâm nhập thứ 7 bằng đường biển cũng vào Hòn Đá Bạc lần này số vũ khí, đạn dược nhiều hơn với 11.528 kg vũ khí, đạn dược được tiếp nhận an toàn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua các chuyến xâm nhập của địch, ta thu giữ được 38,2 tấn vũ khí, chất nổ; 04 tấn hàng, 05 máy phát điện Honda xách tay, 4 máy nổ Yanmar, 01 máy thu phát VTĐ của nhật sản xuất; 51,5 cây vàng. Ta đã bắt sống, tiêu diệt toàn bộ bọn gián điệp biệt kích, tổng cộng đến thời điểm cuối tháng 02/1982 là 97 tên; tịch thu trên 70 tấn vũ khí, 06 điện đài, nhiều tài liệu quan trọng và một số hàng hóa, tiền, vàng."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ta đã phát hiện được mạng lưới cơ sở nội địa của quần chúng (gần 50 cơ sở), đặc biệt có các đầu mối quan trọng như Hồ Tấn Khoa, Huỳnh Vĩnh Sanh và Lê Quốc Quân. Ta nắm được âm mưu, ý đồ trước mắt và lâu dài của địch để có kế hoạch đối phó."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đầu tháng 4/1982, để chuẩn bị cho công tác thực hiện nhiệm vụ sắp tới, bộ phận chỉ huy tiền phương của Ban chỉ đạo Kế hoạch CM12 triển khai thực hiện việc thành lập một “Đại đội Cảnh sát đặc biệt vũ trang” theo chỉ thị của Bộ trưởng Phạm Hùng. Công an Minh Hải rà soát, lựa chọn cán bộ, chiến sĩ cảnh sát cấp bậc thượng sĩ trở lên, và một số cán bộ chiến sĩ công an địa phương thông thạo địa hình khu vực bờ biển U Minh, có phẩm chất đạo đức tốt, có sức khỏe để có thể hoàn thành nhiệm vụ đặc biệt của Kế hoạch CM12, đại đội gồm 105 cán bộ. Tin thần của anh em cán bộ, chiến sĩ đại đội cảnh sát đặc biệt rất cao, sẵn sàng chiến đấu và nhận nhiệm vụ bất kể tình huống nào, kể cả trường hợp có thể nguy hiểm đến tính mạng. Ban chỉ đạo CM-12 bố trí một bộ phận lực lượng “Đại đội đặc biệt” đóng quân trên Hòn Đá Bạc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ tám: Theo kế hoạch ngày 13/4/1982, Mai văn Hạnh (C5) sẽ vào kiểm tra tình hình và ở lại khoảng 4 - 5 ngày, yêu cầu tổ đặc biệt mời ông S (tức Huỳnh Vĩnh Sanh), HK122, K43, K55, HK175, HK145 và Lê Quốc Quân đến gặp. Ta nhận định đáng giá chuyến vào lần này của C5 nhằm kiểm tra, đánh giá kết quả hoạt động của số đã xâm nhập vừa qua và chỉ thị công tác sắp tới đối với các toán đã xâm nhập. Không loại trừ khả năng tìm hiểu sự mất tích của K44 và toán Minh Vương 1; gặp các đầu mối bí mật trong nước như Huỳnh Vĩnh Sanh, Lê Văn Quân, Hồ Thái Bạch.. đây là bước chuẩn bị cho Lê Quốc Túy (C4) vào kiểm tra và dự kiến khả năng chuyển sang giai đoạn 2. Từ dó, Ban chỉ đạo KH.CM12 đã có kết hoạch cụ thể để chống việc kiểm tra của C5 đối với “Tổ đặc biệt”, các K và HK đã về nước nhằm yêu cầu làm cho Túy và Hạnh không nghi ngờ, củng cố lòng tin của chúng đối với “Tổ đặc biệt”. Qua đó, buộc chúng bộc lộ âm mưu và kế hoạch hành động sắp tới. Bố trí chu đáo cho C5 gặp các cơ sở bí mật của chúng, làm cho lòng tin của các cơ sở trong nội địa như Nguyễn Vĩnh Sanh, Lê Quốc Quân… đối với tổ đặc biệt được củng cố, ta có điều kiện tiếp tục công tác trinh sát để bóc gỡ mạng lưới của chúng ở trong nước mà ta chưa nắm được. Đồng thời nắm thêm những cơ sở bí mật khác có thể bị bộc lộ trong các cuộc gặp gỡ với C5 cũng như âm mưu, ý đò mới của chúng. Bằng sự tác động của ta, thông qua các cuộc gặp gỡ giữa C5 với các K, HK, ngăn chặn không cho chúng chuyển sang giai đoạn 2."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc chuẩn bị cho kế hoạch đón và àm việc với C5 được ta thực hiện chu đáo. Lãnh đạo tổ an ninh trực tiếp gặp gỡ, hướng dẫn, giáo dục, bồi dưỡng kiến thức cần thiết cho K, HK được bố trí gặp Mai Văn Hạnh lần này. Các phương án giám sát được bố trí một cách khéo léo và có các phương án xử lý khi có sự cố xảy ra ngoài ý muốn. Công an Minh Hải bố trí một số điểm kiểm soát giả dọc tuyến đường vào để làm cho Mai Văn Hạnh có cảm giác là hoạt động ở trong nước không dễ dàng, đồng thời tin tưởng thêm vào tổ đặc biệt. Tối ngày 13/4/1982, hai tàu xâm nhập của địch vào tới Đồng Cùng, trong chuyến này ta tiếp nhận gần sáu tấn đạn B40."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ chín: Đến ngày 19/4/1982, hai tàu địch xâm nhập vào Hòn Đá Bạc, ta tổ chức đưa Mai Văn Hạnh về nước ngoài theo tàu xâm nhập an toàn và tiếp nhận gần 10 tấn vũ khí gồm đạn AK và B40. Kế hoạch đưa đón “đồng chí chủ tịch” Mai Văn Hạnh tức C5 được thực hiện thắng lợi."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười: Qua những nội dung mà Mai Văn Hạnh chỉ thị cho Huỳnh Vĩnh Sanh, Lê Quốc Quân và các toán trong nước, Ban chỉ đạo kế hoạch CM12 nhận định địch chưa chuyển giai đoạn mà vẫn làm theo ý đồ của ta. Vào ngày 23/5/1982 “Tổ đặc biệt” nhận được thông báo của “Tổng hành dinh” cho biết C4 đến trước với 10 “cán bộ thành”, C5 vào sau hai ngày với phân bố như đã hứa. Việc C4, C5 không cùng vào là tình huống nằm ngoài dự kiến của ta. Vì vậy, Ban chỉ đạo Kế hoạch CM-12 kiên quyết không để chúng thực hiện ý định này. Tuy nhiên, thực tế không diễn ra như mong muốn của ta và cả Lê Quốc Túy. Tàu của Mai Văn Hạnh đi đảo Hải Nam về trễ hơn dự kiến, Túy liên tục hẹn vào tối 02/6 rồi 03/6 và cuối cùng ấn định chắc chắn là tối 04/6/1982. Ta tổ chức tiếp nhận quân và mười tấn tiền giả, một điện đài."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười một: 20 giờ ngày 12/6/1982, tàu xâm nhập của địch vào Lung Tràm, Minh Hải, ta đưa Lê Quốc Túy, Mai Văn Hạnh lên tàu và tổ chức tiếp nhận 12 tên gián điệp biệt kích xâm nhập do Đàm Quang Bảy (HK123) làm toán trưởng và 09 tấn vũ khí."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sau chuyến xâm nhập Việt Nam “thành công”, về đến Bangkok, Lê Quốc Túy phấn khởi gửi ngay một bức điện khen ngợi “Tổ đặc biệt” trong “đợt công tác” vừa qua. Ngày 22/6/1082 Thứ trưởng Cao Đăng Chiếm chủ trì cuộc họp với lãnh đạo tổ an ninh, Giám đốc công an Thành phố Hồ Chí Minh và Giám đốc Công an Đồng Nai. Nội dung nhằm đánh giá tình hình diễn biến của cuộc đấu tranh và kết quả hơn một năm thực hiện Kế hoạch CM-12, đặc biệt là hai chiến dịch tháng 4 và tháng 6 cho Lê Quốc Túy và Mai Văn Hạnh xâm nhập. Ban chỉ đạo Kế hoạch CM-12 quyết định “kiên quyết bằng mọi biện pháp duy trì kế hoạch, đạt mục đích chính trị do Bộ trưởng đề ra. Trước đó, lực lượng của ta đã bắt giữ Lê Quốc Quân và tiến hành khai thác ngay. Trước những bằng chứng không thể chối cãi, Lê Quốc Quân không thể không khai báo về những hoạt động và mạng lưới tổ chức của hắn."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười hai: 20h ngày 10/2/1983, 02 tàu xâm nhập vào Vàm Kinh Mới, Minh Hải. Ta tổ chức tiếp nhận 14 tên gián điệp biệt kích do Huỳnh Văn Phước (K94) làm toán trưởng và hơn 9 tấn vũ khí. Qua nghiên cứu các chỉ thị của địch và khai thác số bị bắt, ta nắm được địch dự kiến đưa căn cứ huấn luyện vào nội địa, xây dựng thêm căn cứ ven biển, huấn luyện và mở rộng tầm hoạt động, mua chuộc cán bộ ta, khi có điều kiện tổ chức đánh chiếm, cướp chính quyền ở các tỉnh miền Tây; mở thêm quân khu C gồm các tỉnh Rạch Giá, Hà Tiên, Long Xuyên, Châu Đốc và Sa Đéc. Kế hoạch nói trên của địch đã nằm trong dự kiến của ta và đã có kế hoạch đối phó."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười ba: 20 giờ 25 phút ngày 01/3/1983, 02 tàu của địch vào Vàm Đồng Cùng, Minh Hải. Ta đưa tàu ra tiếp nhận 10 tên gián điệp biệt kích do Lê Văn Tư (HK214) làm toán trưởng và hơn 11 tấn vũ khí. Qua khai thác số bị bắt được biết, sau khi toán HK214 về nước, mật cứ 37 Ngô Văn Viên đóng cửa, HK214 đốt hết giấy tờ có chữ viết Việt Nam và xóa hết dấu vết liên quan đến việc ăn, ở sinh hoạt tại mật cứ. Việc đóng cửa mật cứ này phù hợp với ý đồ chuyển mật cứ về nội địa."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười bốn: Đúng 20 giờ ngày 23/3/1983, 02 tàu xâm nhập vào Vàm Đồng Cùng thuộc tỉnh Minh Hải “Tổ đặc biệt” cho 2 tàu ra tiếp nhận 10.788 kg vũ khí, số hàng hóa và 4.000 đô la tiền mặt cùng 3 tên gián điệp biệt kích gồm K14- Bùi Lê Vân Sơn và 2 tên khác là K104 VÀ HK201. Bộ trưởng Phạm Hùng hiểu rằng khó có thể ngăn chặn được hoàn toàn tin tức về những vụ “Minh Vương 1” và “Tiểu đoàn 124” bị bể, nhưng nghiên cứu kỹ toàn bộ các bức điện chỉ đạo và hành động của Túy, Hạnh cho đến thời điểm này, ông nhất trí với nhận định của Ban chỉ đạo Kế hoạch CM-12 cho rằng chúng vẫn tin tưởng vào “Tổ đặc biệt” và toán K55. Ông kiên định với chủ trương “Tương kế tựu kế, dùng địch đánh địch”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười lăm: Lúc 20 giờ ngày 24/5/1983 hai tàu địch vào vàm Đồng Cùng, ta đưa tàu ra nhận hàng do đẩy lùi được C4, C5 và K09 chưa vào lần này nên việc tiếp nhận “hàng đặc biệt” diễn ra nhanh chóng và đảm bảo an toàn. Lần này “Tổ đặc biệt” tiếp nhận 04 tấn “Hàng đặc biệt” (loại giấy bạc 50 đồng, tổng số 200 triệu), 170kg thuốc tân dược bao gồm thuốc chống sốt rét, cảm cúm, viatmin C và 5 máy điện đài liên lạc tầm xa do Trung Quốc chế tạo."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Qua một số chuyến xâm nhập, nhất là sau chuyến xâm nhập vừa qua, Lê Quốc Túy tỏ ra lạc quan vì đã có cơ sở vật chất, phương tiện, lực lượng ở trong nước. Ngoài quan hệ chặt với các thế lực phản động quốc tế, chúng đã tiếp xúc được với Mỹ, có dò thêm mối quan hệ với Nhật. Sau một bước “tung hàng đặc biệt” chúng sẽ bắt đầu hoạt động đồng loạt nhưng vẫn theo đường lối bành chướng một số vùng rừng núi, nông thôn làm căn cứ, chưa thể gây bạo loạn chung ở Miền Nam được. Tuy nhiên,qua chiến dịch tác động của ta vừa qua, nhất là việc phá các tổ chức phản động lợi dụng đạo Cao Đài đã có tác động nhất định đến tư tưởng của Lê Quốc Túy. Chúng đã chấp nhận lùi một bước để có thêm thời gian chuẩn bị."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười sáu: Đến ngày 11/6/1983, địch tiến hành xâm nhập lần thứ 16 chuyến này địch chỉ đưa vũ khí vào mà không có quân. Ban chỉ đạo Kế hoạch CM-12 cho “Tổ đặc biệt” đồng ý tiếp nhận. Trước đó, vào lúc 20 giờ 10 phút ngày 8/6/1983, trung tâm địch điện cho “Tổ đặc biệt” thông báo “Đêm 11/6 hai cá sẽ đến điểm hẹn”. Theo kế hoạch, Ban chỉ đạo kế hoạch CM-12 bố trí cho hai tàu xâm nhập vào vàm Kinh Mới, hai tàu của ta ra tiếp nhận 13.091 kg vũ khí, súng đạn (bao gồm súng đạn đại liên, súng AK, lựu đạn, đạn B40 và đạn đại liên). Việc tiếp nhận được thực hiện theo kế hoạch, hàng được vận chuyển về kho bảo quản an toàn tuyệt đối."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười bảy: Đến ngày 9/5/1984 “Tổng hành dinh” chuyển bức điện cho “Tổ đặc biệt”: “vào lúc 20 giờ ngày 20/5/1984 hai tàu của địch xâm nhập vào Hòn Đá Bạc”. Đến 20 giờ ngày 20/5/1984, 02 tàu địch xâm nhập vào Hòn Đá Bạc, Minh Hải, ta tổ chức tiếp nhận 681 kg vũ khí, tiền giả; đồng thời chuyển báo cáo của các “cơ sở” nội địa cho K09 trình C5 nhằm tác động để Lê Quốc Túy, MaiVăn Hạnh vào chuyến sau."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Chuyến xâm nhập thứ mười tám: Cuối tháng 8/1984 Lê Quốc Túy thông báo cho cơ sở trong “quốc nội” trong khoảng thời gian đầu tháng 9 thì Mai Văn Hạnh sẽ vào. Nhận được tin, Bộ trưởng Phạm Hùng và thứ trưởng Cao Đăng Chiếm phân công ông Bùi Thiện Ngộ, lúc này “đặc phái viên” của Bộ trưởng và ông Lê Minh Học xuống Minh Hải cùng ông Hai Tân trực tiếp chỉ đạo và tổ chức thực hiện chiến dịch. Có thể gọi đây Ban chỉ huy tiền phương của chiến dịch kết thúc Kế hoạch CM-12. Ngày 01/9/1984 “Tổng hành dinh” thông báo cho “Tổ đặc biệt” dự trù cá sẽ tới điểm hẹn khoảng tối mùng 7,8,9. Chiều ngày 09/9/1984 Ban chỉ huy tiền phương ra Hòn Đá Bạc, 20 giờ kém 15 phút, qua máy bộ đàm K64 tàu địch xuất hiện. Hai tàu của ta áp sát 2 tàu của địch, anh Tám Thậm và một người của “Tổ đặc biệt” xuống đón Mai Văn Hạnh đưa vào đất liền. Sau đó, người của “Tổ đặc biệt” dụ Trần Văn Bá và truyền tin Hậu lên đảo và tiến hành bắt giữ trong bí mật. Trong khi đó, trên các tàu công việc sang “hàng” từ tàu địch sang tàu ta vẫn tiến hành như thường lệ. Đúng như kế hoạch sau khi sang hàng khoảng một tiếng, K64 đã khai hỏa bằng một loạt đạn AK-47. Quân ta đồng loạt nổ súng áp đảo bọn gián điệp biệt kích làm chúng chở tay không kịp, trận đánh chỉ diễn ra trong 2 phút 7 giây. Bọn gián điệp biệt kích bị ta tiêu diệt tại trận 12 tên, còn 07 tên khác bị bắt sống. Cơ quan an ninh thu 02 tàu xâm nhập cùng toàn bộ vũ khí, phương tiện và kết thúc thắng lợi trận đánh quyết định."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngày 11/9/1984, Sáu Thanh (K64) đưa Mai Văn Hạnh về thị xã Cà Mau theo kế hoạch và bị tổ trinh sát vũ trang của ta ập vào bắt giữ. Tiếp đó, Hồ Thái Bạch cũng bị bắt khi đang viết thư trao đổi công việc với Lê Quốc Túy. Trận đánh kết thúc Kế hoạch CM-12 tiến hành nhanh gọn theo đúng yêu cầu và phương án tác chiến đã đề ra."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Kết thúc KH.CM12, lực lượng CAND đã bắt gọn 18 chuyến xâm nhập, bắt 146 tên gián điệp biệt kích, thu 02 tàu vận tải, hơn 143 tấn vũ khí các loại, 12 bộ điện đài, 9.300USD, gần 300 triệu tiền Ngân hàng Việt Nam giả . Song song với chiến thuật dụ địch ở nước ngoài về nước để bắt, lực lượng Công an còn thúc đẩy làm cho các đối tượng phản động ở trong nước đang hoạt động bí mật phải bộc lộ để trấn áp. Từ năm 1982 đến 1984, lực lượng Công an các tỉnh phía Nam lần lượt trấn áp 10 tổ chức phản động trong nội địa liên quan đến KH.CM12, bắt toàn bộ số cầm đầu cốt cán, giáo dục tại chỗ những người vì cả tin hoặc bị lừa gạt mà theo chúng. Nhờ đó, lực lượng CAND đã chủ động ngăn chặn các cuộc vũ trang bạo loạn manh động chống chính quyền vào các năm 1982, 1983, 1984, bẻ gãy hướng tấn công chủ yếu của phản động quốc tế."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tháng 12/1984, Toà án tối cao tại thành phố Hồ Chí Minh công khai xét xử các đối tượng, tuyên 04 án tử hình và gần 100 bản án khác, với sự chứng kiến của nhiều phóng viên trong nước và quốc tế, cùng với cuộc triển lãm phương tiện chiến tranh, hoạt động gián điệp cho hàng chục vạn người tham gia nhưng các đối tượng cầm đầu ở nước ngoài vẫn không biết sự thật; đến năm 1987 chúng tiếp tục tổ chức xâm nhập bằng đường bộ, đường biển về nước và đều bị ta bắt gọn. Sau thất bại này, Lê Quốc Tuý, kẻ cầm đầu tổ chức gián điệp bị đột tử ở nước ngoài, những tên còn lại ở mật cứ phải tự giải tán. Tổ chức gián điệp do Lê Quốc Tuý, Mai Văn Hạnh cầm đầu - những tên lính xung kích trong “Chiến tranh phá hoại nhiều mặt” của các đối tượng phản động quốc tế bị xoá sổ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một chiến dịch phản gián với 07 năm đấu mưu, đọ trí và thắng lợi to lớn là những đòn đánh mạnh, đánh trúng, đánh hiểm của lực lượng CAND đối với các đối tượng phản cách mạng ở trong nước và nước ngoài, trở thành mốc son mới trên bước đường trưởng thành của mình, làm dày thêm truyền thống vẻ vang của CAND Việt Nam. Ghi nhận, đánh giá chiến công đặc biệt xuất sắc của các lực lượng tham gia thực hiện thắng lợi KH.CM12, Đảng, Nhà nước đã phong tặng danh hiệu Anh hùng lực lượng vũ trang nhân dân cho 2 tập thể, 3 cá nhân và nhiều phần thưởng cao quý khác cho các đơn vị, cá nhân đã tham gia KH.CM12. Để ghi lại dấu ấn lịch sử Hòn Đá Bạc - địa danh trong thắng lợi KH.CM12, ngày 22/6/2009, Bộ Văn hóa, Thể thao và Du lịch đã công nhận Hòn Đá Bạc - Trung tâm Kế hoạch phản gián CM12 (09/9/1981 - 09/9/1984) là di tích lịch sử - văn hóa Quốc gia."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Kế hoạch phản gián CM12 đã thắng lợi hoàn toàn là mốc son chói lọi, tô đậm truyền thống vẻ vang của lực lượng Công an nhân dân. Kết thúc KH.CM12, lực lượng CAND đã bắt gọn 18 chuyến xâm nhập, bắt 146 tên gián điệp biệt kích, thu 02 tàu vận tải, hơn 143 tấn vũ khí các loại, 12 bộ điện đài, 9.300USD, gần 300 triệu tiền Ngân hàng Việt Nam giả. Song song với chiến thuật dụ địch ở nước ngoài về nước để bắt, lực lượng Công an còn thúc đẩy làm cho các đối tượng phản động ở trong nước đang hoạt động bí mật phải bộc lộ để trấn áp. Từ năm 1982 đến 1984, lực lượng Công an các tỉnh phía Nam lần lượt trấn áp 10 tổ chức phản động trong nội địa liên quan đến KH.CM12, bắt toàn bộ số cầm đầu cốt cán, giáo dục tại chỗ những người vì cả tin hoặc bị lừa gạt mà theo chúng. Nhờ đó, lực lượng CAND đã chủ động ngăn chặn các cuộc vũ trang bạo loạn manh động chống chính quyền vào các năm 1982, 1983, 1984, bẻ gãy hướng tấn công chủ yếu của phản động quốc tế."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "ke-hoach-phan-gian-cm12-mang-nhung-y-nghia-lich-su",
                       "text":  "KẾ HOẠCH PHẢN GIÁN CM12 MANG NHỮNG Ý NGHĨA LỊCH SỬ:"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ nhất, thắng lợi của KH.CM12 là thắng lợi to lớn, toàn diện cả về quân sự, chính trị, an ninh. Vạch trần âm mưu, hoạt động của tổ chức “Mặt trận thống nhất các lực lượng yêu nước giải phóng Việt Nam”; và các nước thù địch trước dư luận quốc tế; làm rõ mối quan hệ của các tổ chức phản cách mạng với một số tổ chức của nước ngoài có âm mưu, chiến lược chống phá Việt Nam; góp phần nâng cao được uy tín của Việt Nam trên trường quốc tế."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ hai, thắng lợi của KH.CM12 là thắng lợi của trí tuệ, bản lĩnh và sáng tạo của lực lượng CAND, có ý nghĩa rất lớn, mang tầm chiến lược, không chỉ về mặt nghiệp vụ mà còn có giá trị lịch sử quan trọng trong sự nghiệp bảo vệ an ninh quốc gia; là thắng lợi của tinh thần cách mạng, nguyên tắc chỉ đạo tập trung, sáng suốt, tiến công, mưu trí, sáng tạo, anh dũng và sự chấp nhận hy sinh, khắc phục khó khăn, gian khổ của lực lượng CAND Việt Nam - nhạy bén trước âm mưu của địch. Khẳng định lực lượng CAND đã có những bước tiến quan trọng trong việc vận dụng linh hoạt các biện pháp, phương châm, nguyên tắc đấu tranh; có vai trò tiên quyết trong việc phát hiện, đấu tranh, ngăn chặn âm mưu, hoạt động chống phá của các thế lực thù địch; bảo vệ vững chắc an ninh quốc gia, giúp Đảng và Nhà nước triển khai các chính sách mới vượt qua giải đoạn lịch sử vô cùng khó khăn để khởi xướng và thực hiện thắng lợi đường lối đổi mới của Đất nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ ba, thắng lợi của KH.CM12 đã làm thất bại và phá sản phương thức hoạt động nguy hiểm của địch, góp phần quan trọng trong việc giữ vững an ninh chính trị ở miền Nam nước ta. Đây không chỉ là xóa sổ một tổ chức của bọn phản động lưu vong, mà còn làm thất bại chiến tranh phá hoại nhiều mặt của cơ quan đặc việt nước ngoài, làm phá sản toàn bộ hoạt động tập hợp lực lượng, huấn luyện vũ trang và xâm nhập từ bên ngoài vào, câu kết, kích động lực lượng bên trong nổi dậy, ngăn chặn có hiệu quả âm mưu bạo loạn, lật đổ chế độ xã hội chủ nghĩa của các thế lực thù địch và đối tượng phản động trong và ngoài nước."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ tư, thắng lợi của KH.CM12 là thắng lợi của việc vận dụng sáng tạo, hiệu quả các bài học kinh nghiệm về nhiều mặt mà lực lượng CAND đã tích lũy được trong lịch sử đấu tranh chống thù trong giặc ngoài vào công tác đánh địch với loại đối tượng có những đặc điểm mới, trong điều kiện hoàn cảnh mới với phạm vi không gian rộng lớn, thời gian kéo dài, góp phần quan trọng vào việc bổ sung lý luận CAND."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ năm, thắng lợi của KH.CM12 góp phần tuyên truyền, giáo dục cho quần chúng nhân dân, các cơ quan Đảng, Nhà nước, các tổ chức chính trị, xã hội, tổ chức tôn giáo, dân tộc về tinh thần cảnh giác cách mạng, đấu tranh không khoan nhượng với các đối tượng và tổ chức phản động; nâng cao uy tín, hình ảnh của lực lượng CAND trong công cuộc bảo vệ an ninh quốc gia."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "bai-hoc-kinh-nghiem-tu-ke-hoach-phan-gian-cm12",
                       "text":  "BÀI HỌC KINH NGHIỆM TỪ KẾ HOẠCH PHẢN GIÁN CM12:"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ nhất, bài học kinh nghiệm trong lãnh đạo, chỉ huy bảo đảm thắng lợi. Qua thực hiện KH.CM12 cho thấy yêu cầu trong công tác lãnh đạo, chỉ huy khi thực hiện nhiệm vụ là sự tập trung, thống nhất, xuyên suốt, chỉ đạo trực tiếp. Muốn thắng lợi phải có nhận thức đúng đắn về tình hình, nhiệm vụ, chuẩn bị về lực lượng, phương tiện bảo đảm sự chỉ huy, chỉ đạo. Phải đặt dưới sự chỉ huy, chỉ đạo trực tiếp, toàn diện của các cấp lãnh đạo; nắm bắt kịp thời về âm mưu, phương thức, thủ đoạn, hoạt động mới của các loại đối tượng trong từng thời kỳ để chủ động biện pháp đấu tranh, ngăn chặn kịp thời, hiệu quả. Đấu tranh phải quán triệt và thực hiện đúng chủ trương, đường lối của Đảng, chính sách, pháp luật của Nhà nước, phương châm, nguyên tắc của lực lượng CAND; phát huy sức mạnh tổng hợp và có cơ chế phối hợp, đồng bộ, chặt chẽ, thường xuyên giữa các lực lượng đấu tranh."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thắng lợi của KH.CM12 là thắng lợi của sự lãnh đạo, chỉ đạo trực tiếp, thống nhất của lãnh đạo Bộ, Ban Chỉ đạo kế hoạch. Nhờ có sự lãnh đạo, chỉ đạo tập trung thống nhất mà lực lượng CAND có đủ điều kiện huy động lực lượng tinh nhuệ, cán bộ, chiến sĩ dày dặn kinh nghiệm, chấp hành nghiêm mệnh lệnh và thống nhất hành động trong thời gian dài; nhờ đó mà các lực lượng tham gia kế hoạch cũng như Công an các tỉnh đã liên tục tổ chức điều tra, bóc gỡ những tổ chức phản động lớn, nhưng vẫn đảm bảo bí mật cho kế hoạch chung; góp phần giữ vững ổn định chính trị, giữ vững độc lập, chủ quyền và toàn vẹn lãnh thổ Tổ quốc Việt Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ hai, bài học kinh nghiệm trong công tác vận động quần chúng, tiếp tục dựa vào nhân dân để hoàn thành nhiệm vụ, xây dựng nòng cốt, hỗ trợ lực lượng CAND phát hiện, vây bắt đối tượng; đặc biệt, dựa vào quần chúng nhân dân để được cung cấp thông tin giá trị về các đối tượng phản động trong và ngoài nước muốn chống phá Nhà nước Việt Nam."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ ba, bài học kinh nghiệm sử dụng các biện pháp đấu tranh. Lực lượng CAND đã dự báo, dự đoán chính xác tình hình, lãnh đạo, chỉ huy tập trung thống nhất, hiệp đồng tác chiến đồng bộ và nhịp nhàng, linh hoạt, sáng tạo khi triển khai các kế hoạch đấu tranh, nhờ đó lực lượng Công an đã đánh mạnh, đánh đúng, đánh trúng; tìm tòi, phát huy sáng kiến, triển khai các biện pháp đấu tranh, các chiến thuật đánh địch, đấu trí thắng lợi với các đối tượng phản động quốc tế. “Sử dụng địch để đánh địch”, xâm nhập vào các tổ chức địch để làm rõ âm mưu, tổ chức, lực lượng, phương tiện hoạt động của địch."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thứ tư, thắng lợi của KH.CM12 đã góp phần để lại nhiều vấn đề lý luận nghiệp vụ CAND cũng như trình độ chỉ huy, chỉ đạo và tổ chức thực hiện, trở thành kinh nghiệm quý báu, có giá trị thực tiễn cao, góp phần hoàn thiện, bổ sung hệ thống lý luận nghiệp vụ Công an về đấu tranh bảo vệ an ninh quốc gia, bảo đảm trật tự an toàn xã hội."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "lien-he-trach-nhiem-ban-than-tu-ke-hoach-phan-gian-cm12",
                       "text":  "LIÊN HỆ TRÁCH NHIỆM BẢN THÂN TỪ KẾ HOẠCH PHẢN GIÁN CM12:"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhóm tác giả chúng tôi là những Giảng viên và Học viên Trường Đại học An ninh nhân dân - những người được đào tạo bài bản, chuyên sâu về lý luận và nghiệp vụ trinh sát an ninh, đặc biệt là lĩnh vực đấu tranh chống gián điệp. Trên cơ sở nghiên cứu hệ thống các tài liệu lý luận, tổng kết thực tiễn và các điển hình tiêu biểu của lực lượng An ninh nhân dân, trong đó có thắng lợi của Kế hoạch phản gián CM12, chúng tôi nhận thức sâu sắc giá trị lịch sử, ý nghĩa lý luận cũng như những bài học kinh nghiệm có tính nguyên tắc trong công tác bảo vệ an ninh quốc gia."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tiếp nối truyền thống cách mạng hào hùng ấy, trong bối cảnh đất nước đang đẩy mạnh toàn cầu hóa, hội nhập quốc tế sâu rộng, nhiệm vụ bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội đang đặt ra nhiều yêu cầu mới, với không ít khó khăn, thách thức. Các thế lực thù địch không ngừng thay đổi phương thức, thủ đoạn hoạt động ngày càng tinh vi, phức tạp, đặc biệt trên không gian mạng và các lĩnh vực phi truyền thống. Do đó, việc phát huy giá trị của chiến công Kế hoạch CM12 không chỉ mang ý nghĩa kế thừa truyền thống mà còn là cơ sở để vận dụng sáng tạo vào thực tiễn công tác và giảng dạy trong tình hình mới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trên cơ sở đó, nhóm tác giả xác định trách nhiệm của mình trong thời gian tới cần tập trung vào một số nội dung trọng tâm. Trước hết là không ngừng học tập, rèn luyện bản lĩnh chính trị, phẩm chất đạo đức cách mạng, giữ vững kỷ luật, kỷ cương, tuyệt đối trung thành với Đảng, Nhà nước và Nhân dân. Trong vai trò giảng viên, chúng tôi phải là lực lượng nòng cốt trong việc truyền thụ tri thức, bồi dưỡng lý tưởng cách mạng, hun đúc bản lĩnh chính trị cho học viên; còn với vai trò học viên, cần phát huy tinh thần tự học, tự rèn, không ngừng nâng cao trình độ để đáp ứng yêu cầu nhiệm vụ ngày càng cao."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bên cạnh đó, chúng tôi luôn đề cao tinh thần đoàn kết, gắn bó trong tập thể; xây dựng môi trường học tập, công tác lành mạnh, hỗ trợ lẫn nhau cùng tiến bộ, góp phần xây dựng tổ chức Đảng, chi bộ trong sạch, vững mạnh. Việc phát huy sức mạnh tập thể, kết hợp chặt chẽ giữa giảng dạy, học tập và nghiên cứu khoa học là yếu tố quan trọng nhằm nâng cao chất lượng đào tạo của nhà trường."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đồng thời, nhóm tác giả xác định phải luôn nêu cao tinh thần cảnh giác cách mạng, chủ động nghiên cứu, nắm chắc tình hình an ninh trong và ngoài nước; kịp thời cập nhật những phương thức, thủ đoạn hoạt động mới của các thế lực thù địch để tích hợp vào nội dung giảng dạy, góp phần nâng cao năng lực nhận diện, phòng ngừa và đấu tranh cho học viên. Tinh thần “chủ động tiến công”, “lấy địch đánh địch” - bài học cốt lõi từ Kế hoạch CM12 - cần được quán triệt và vận dụng linh hoạt trong cả nghiên cứu lý luận và thực tiễn công tác."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Song song đó, chúng tôi luôn đề cao tinh thần cầu thị, sẵn sàng lắng nghe, chia sẻ kinh nghiệm, học hỏi lẫn nhau giữa giảng viên và học viên; xây dựng môi trường học thuật cởi mở, gắn kết, qua đó nâng cao chất lượng đào tạo và nghiên cứu. Mỗi thành viên đều ý thức rõ trách nhiệm cá nhân, tận tụy với công việc, chủ động xây dựng kế hoạch học tập, giảng dạy, nghiên cứu khoa học một cách khoa học, bài bản."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đặc biệt, từ kinh nghiệm thực tiễn cơ sở, chúng tôi nhận thức rõ vai trò quan trọng của công tác nắm tình hình địa bàn, gắn bó mật thiết với nhân dân. Do đó, trong quá trình giảng dạy, luôn chú trọng truyền đạt phương châm “bám cơ sở, sát địa bàn”, coi quần chúng nhân dân là nền tảng vững chắc của công tác bảo vệ an ninh trật tự. Đồng thời, khuyến khích học viên vận dụng kiến thức đã học vào thực tiễn, nâng cao năng lực tham mưu, đề xuất và xử lý tình huống ngay từ cơ sở."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngoài ra, nhóm tác giả luôn duy trì tác phong làm việc khoa học, có chương trình, kế hoạch cụ thể, rõ ràng; thực hiện nghiêm túc chế độ thông tin, báo cáo; tích cực tham gia các nhiệm vụ chung của nhà trường, sẵn sàng nhận và hoàn thành tốt mọi nhiệm vụ được giao."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Từ những nhận thức và hành động đó, nhóm tác giả khẳng định sẽ tiếp tục kế thừa, phát huy truyền thống anh hùng của lực lượng An ninh nhân dân, vận dụng sáng tạo những bài học kinh nghiệm từ Kế hoạch phản gián CM12 vào công tác giảng dạy, học tập và nghiên cứu khoa học. Qua đó, góp phần đào tạo đội ngũ chiến sĩ An ninh có bản lĩnh chính trị vững vàng, trình độ chuyên môn cao, đáp ứng yêu cầu bảo vệ vững chắc an ninh quốc gia, giữ gìn trật tự, an toàn xã hội trong tình hình mới."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-77.jpg",
                       "width":  1020,
                       "height":  686,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-78.jpg",
                       "width":  1005,
                       "height":  675,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong không khí hân hoan cùng Bộ Công an, Trường Đại học An ninh nhân dân tổ chức các hoạt động kỷ niệm 40 năm thắng lợi Kế hoạch phản gián CM12 (09/9/1984 - 09/9/2024), Khoa An ninh đối ngoại đã xây dựng Kế hoạch số 01/KH-K5 ngày 15/8/2024 về việc tổ chức báo cáo chuyên đề kỷ niệm 40 năm thắng lợi Kế hoạch phản gián CM12 (09/9/1984 - 09/9/2024)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đồng chí Thiếu tướng, Anh hùng Lực lượng vũ trang nhân dân Hồ Việt Lắm báo cáo toàn bộ diễn biến quá trình phát hiện, tổ chức đấu tranh, cùng với những thắng lợi, bài học kinh nghiệm rút ra từ tổ chức Kế hoạch phản gián CM12, đồng thời nhấn mạnh thắng lợi Kế hoạch phản gián CM12 là đỉnh cao nghệ thuật công tác an ninh với sự tham gia, giúp đỡ của Nhân dân. Trên cơ sở nội dung báo cáo, học viên các trung đội đặt câu hỏi trao đổi làm rõ hơn nhiều vấn đề liên quan đến biện pháp, công tác nghiệp vụ an ninh đã triển khai và bài học kinh nghiệm."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-79.png",
                       "width":  2570,
                       "height":  1817,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "part",
                       "id":  "phan-iii",
                       "label":  "Phần III",
                       "title":  "NHÂN DÂN VỚI SỰ NGHIỆP BẢO VỆ AN NINH QUỐC GIA TRONG TÌNH HÌNH MỚI"
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "i-trach-nhiem-nghia-vu-va-quyen-loi-cua-nhan-dan-trong-su-nghiep-bao-ve",
                       "text":  "I. TRÁCH NHIỆM, NGHĨA VỤ VÀ QUYỀN LỢI CỦA NHÂN DÂN TRONG SỰ NGHIỆP BẢO VỆ AN NINH QUỐC GIA HIỆN NAY"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong sự nghiệp bảo vệ an ninh quốc gia hiện nay, Nhân dân giữ vị trí trung tâm, vừa là chủ thể của mọi hoạt động bảo vệ an ninh, vừa là lực lượng trực tiếp tham gia, đồng thời cũng là đối tượng thụ hưởng thành quả của nền an ninh quốc gia. Quan điểm này được khẳng định nhất quán trong Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013 khi quy định rõ: bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của công dân, đồng thời Nhà nước có trách nhiệm bảo đảm an ninh, trật tự, an toàn xã hội, bảo vệ quyền con người, quyền công dân. Như vậy, Nhân dân không chỉ là đối tượng được bảo vệ mà còn là nền tảng, là “gốc” của thế trận an ninh nhân dân, là nhân tố quyết định đến sự vững mạnh của nền an ninh quốc gia trong mọi tình huống."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trên cơ sở đó, trách nhiệm của mỗi người dân trước hết thể hiện ở bản lĩnh chính trị vững vàng, ý thức công dân sâu sắc và tinh thần cảnh giác cách mạng cao độ trước mọi âm mưu, thủ đoạn của các thế lực thù địch và các loại tội phạm. Trong bối cảnh tình hình thế giới và khu vực diễn biến phức tạp, các nguy cơ an ninh truyền thống và phi truyền thống đan xen, đặc biệt là sự gia tăng của các hoạt động lợi dụng không gian mạng để chống phá Nhà nước, thì trách nhiệm của Nhân dân càng phải được nâng lên một tầm cao mới. Mỗi người dân cần chủ động tham gia phong trào Toàn dân bảo vệ an ninh Tổ quốc, tích cực phối hợp với lực lượng Công an nhân dân trong công tác nắm tình hình, phát hiện, tố giác tội phạm và các hành vi vi phạm pháp luật; đồng thời kiên quyết không tham gia, không tiếp tay, không bị lôi kéo vào các hoạt động xâm phạm an ninh quốc gia dưới bất kỳ hình thức nào."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Không chỉ dừng lại ở việc chấp hành, trách nhiệm của Nhân dân còn thể hiện ở vai trò chủ động, sáng tạo trong xây dựng môi trường xã hội an toàn, lành mạnh ngay từ cơ sở. Điều này bao gồm việc giữ gìn khối đại đoàn kết toàn dân tộc, xây dựng đời sống văn hóa, chấp hành nghiêm các quy định của pháp luật, tích cực tham gia các mô hình tự quản về an ninh, trật tự ở địa phương. Thực tiễn đã chứng minh rằng, ở đâu Nhân dân có ý thức trách nhiệm cao, ở đó tình hình an ninh, trật tự được giữ vững; ngược lại, nếu thiếu sự tham gia tích cực của Nhân dân thì mọi biện pháp nghiệp vụ của lực lượng chuyên trách cũng khó có thể đạt hiệu quả bền vững."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Như vậy, trách nhiệm của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia không chỉ mang tính tự giác mà còn mang ý nghĩa chính trị - xã hội sâu sắc, là biểu hiện của lòng yêu nước, của sự gắn bó giữa Nhân dân với Đảng, Nhà nước và chế độ xã hội chủ nghĩa. Phát huy tốt vai trò, trách nhiệm đó chính là yếu tố then chốt để xây dựng thế trận an ninh nhân dân vững chắc, tạo nền tảng ổn định cho phát triển kinh tế - xã hội và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa trong tình hình mới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bên cạnh trách nhiệm mang tính tự giác, nghĩa vụ của Nhân dân trong bảo vệ an ninh quốc gia được quy định chặt chẽ trong hệ thống pháp luật, tạo thành khuôn khổ pháp lý bắt buộc mà mọi công dân phải nghiêm chỉnh chấp hành, tiêu biểu là Luật An ninh quốc gia năm 2004 và Luật An ninh mạng năm 2018. Theo đó, công dân có nghĩa vụ tuyệt đối tuân thủ Hiến pháp và pháp luật, chấp hành nghiêm các quy định về bảo vệ an ninh quốc gia; chủ động tham gia xây dựng nền an ninh nhân dân vững chắc, gắn với thế trận quốc phòng toàn dân; kịp thời cung cấp thông tin, tài liệu có liên quan đến an ninh quốc gia cho cơ quan có thẩm quyền; đồng thời kiên quyết không tham gia, không bao che, không tiếp tay cho các hành vi xâm hại đến lợi ích của Nhà nước, quyền và lợi ích hợp pháp của tổ chức, cá nhân."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-80.jpg",
                       "width":  1240,
                       "height":  724,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong điều kiện hiện nay, nghĩa vụ này còn được mở rộng và cụ thể hóa trên nhiều lĩnh vực, nhất là trong không gian mạng - nơi đang trở thành một “mặt trận” mới của công tác bảo vệ an ninh quốc gia. Mỗi công dân không chỉ có nghĩa vụ sử dụng không gian mạng một cách văn minh, tuân thủ pháp luật, mà còn phải có trách nhiệm nhận diện, đấu tranh với các thông tin xấu độc, sai sự thật, không chia sẻ, phát tán các nội dung gây phương hại đến an ninh quốc gia, trật tự an toàn xã hội. Đồng thời, công dân còn có nghĩa vụ thực hiện bảo vệ Tổ quốc theo quy định của pháp luật như tham gia nghĩa vụ quân sự, dân quân tự vệ, dự bị động viên; sẵn sàng chấp hành các quyết định, biện pháp của Nhà nước trong tình huống khẩn cấp về quốc phòng, an ninh hoặc khi có nguy cơ đe dọa đến chủ quyền, toàn vẹn lãnh thổ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Những nghĩa vụ này không chỉ mang tính bắt buộc về mặt pháp lý mà còn thể hiện mối quan hệ trách nhiệm hai chiều giữa Nhà nước và công dân trong sự nghiệp bảo vệ an ninh quốc gia. Việc thực hiện đầy đủ, nghiêm túc các nghĩa vụ đó chính là cơ sở quan trọng để củng cố kỷ cương pháp luật, tăng cường sức mạnh tổng hợp của cả hệ thống chính trị và toàn dân trong bảo vệ an ninh quốc gia, góp phần giữ vững ổn định chính trị - xã hội và tạo môi trường thuận lợi cho phát triển đất nước trong tình hình mới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Song song với trách nhiệm và nghĩa vụ, Nhân dân được bảo đảm đầy đủ các quyền lợi chính đáng trong lĩnh vực an ninh quốc gia, thể hiện rõ bản chất tốt đẹp của Nhà nước ta là Nhà nước của Nhân dân, do Nhân dân và vì Nhân dân. Những quyền lợi này trước hết được ghi nhận trong Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013, theo đó công dân có quyền được sống trong môi trường hòa bình, độc lập, ổn định; được Nhà nước bảo vệ tính mạng, sức khỏe, tài sản, danh dự và nhân phẩm; được bảo đảm các quyền cơ bản về con người và quyền công dân. Đây không chỉ là những quyền mang tính hiến định mà còn là mục tiêu xuyên suốt của sự nghiệp bảo vệ an ninh quốc gia."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bên cạnh đó, hệ thống pháp luật chuyên ngành tiếp tục cụ thể hóa và bảo đảm thực thi các quyền lợi này trong thực tiễn. Theo Luật Tố cáo năm 2018, công dân khi phát hiện và tố giác hành vi vi phạm pháp luật, xâm phạm an ninh quốc gia được Nhà nước bảo vệ bí mật thông tin cá nhân, bảo vệ tính mạng, sức khỏe, danh dự, nhân phẩm và các quyền, lợi ích hợp pháp khác; đồng thời được xem xét khen thưởng nếu có thành tích. Tương tự, Luật Thi đua, khen thưởng năm 2022 quy định rõ việc ghi nhận, tôn vinh, khen thưởng kịp thời các cá nhân, tập thể có đóng góp xuất sắc trong phong trào toàn dân bảo vệ an ninh Tổ quốc, qua đó tạo động lực khuyến khích Nhân dân tích cực tham gia vào sự nghiệp chung."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Không chỉ dừng lại ở việc thụ hưởng, các quyền lợi của Nhân dân còn gắn liền với quyền tham gia quản lý nhà nước và xã hội trong lĩnh vực an ninh, trật tự. Công dân có quyền được cung cấp thông tin cần thiết về tình hình an ninh; được tham gia góp ý, giám sát hoạt động của các cơ quan chức năng; được hướng dẫn các biện pháp phòng ngừa, đấu tranh với tội phạm và các hành vi vi phạm pháp luật. Điều này thể hiện rõ tính dân chủ, công khai và minh bạch trong hoạt động bảo vệ an ninh quốc gia, đồng thời phát huy vai trò chủ động, tích cực của Nhân dân trong xây dựng thế trận an ninh nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Như vậy, việc bảo đảm các quyền lợi của Nhân dân không chỉ là nghĩa vụ của Nhà nước mà còn là điều kiện tiên quyết để huy động sức mạnh tổng hợp của toàn xã hội trong bảo vệ an ninh quốc gia. Khi quyền và lợi ích hợp pháp của Nhân dân được tôn trọng và bảo vệ, Nhân dân sẽ càng tin tưởng, gắn bó với Đảng và Nhà nước, từ đó tự giác, tích cực tham gia vào sự nghiệp bảo vệ an ninh Tổ quốc, góp phần giữ vững ổn định chính trị - xã hội và phát triển bền vững đất nước trong tình hình mới."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Như vậy, trách nhiệm, nghĩa vụ và quyền lợi của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia không tồn tại tách rời mà có mối quan hệ biện chứng, gắn bó chặt chẽ và thống nhất với nhau, tạo thành nền tảng vững chắc cho việc phát huy sức mạnh tổng hợp của toàn dân tộc. Quyền lợi chính đáng của Nhân dân, được ghi nhận trong Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam năm 2013 và các văn bản pháp luật liên quan, chính là cơ sở để Nhân dân yên tâm, tin tưởng và tích cực tham gia vào sự nghiệp bảo vệ an ninh quốc gia; nghĩa vụ pháp lý, được quy định trong Luật An ninh quốc gia năm 2004 và Luật An ninh mạng năm 2018, là khuôn khổ bắt buộc nhằm bảo đảm mọi hành vi của công dân đều hướng tới mục tiêu bảo vệ lợi ích quốc gia, dân tộc; còn trách nhiệm mang tính tự giác, xuất phát từ ý thức chính trị, lòng yêu nước và niềm tin vào chế độ, lại chính là động lực sâu xa, bền vững, quyết định hiệu quả thực chất của toàn bộ quá trình tham gia của Nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong bối cảnh hiện nay, khi tình hình thế giới và khu vực diễn biến nhanh chóng, phức tạp, các mối đe dọa an ninh truyền thống và phi truyền thống đan xen, đặc biệt là sự nổi lên của các thách thức như an ninh mạng, an ninh kinh tế, an ninh thông tin và các hoạt động chống phá trên không gian mạng, thì yêu cầu phát huy vai trò của Nhân dân càng trở nên cấp thiết hơn bao giờ hết. Thực tiễn đã khẳng định rằng, không có một lực lượng chuyên trách nào có thể thay thế vai trò của Nhân dân trong việc phát hiện sớm, ngăn chặn kịp thời các nguy cơ đe dọa an ninh quốc gia. Nhân dân chính là “tai mắt”, là “lá chắn” vững chắc từ cơ sở, là nền tảng để xây dựng thế trận an ninh nhân dân gắn với thế trận quốc phòng toàn dân ngày càng vững chắc."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Do đó, việc nhận thức đầy đủ và thực hiện nghiêm túc, đồng bộ giữa trách nhiệm, nghĩa vụ và quyền lợi không chỉ là yêu cầu đối với mỗi công dân mà còn là điều kiện tiên quyết để củng cố niềm tin của Nhân dân đối với Đảng và Nhà nước, tăng cường khối đại đoàn kết toàn dân tộc. Khi mỗi người dân đều ý thức rõ vai trò, vị trí của mình và tích cực, tự giác tham gia vào sự nghiệp bảo vệ an ninh quốc gia, thì đó chính là nhân tố quyết định bảo đảm giữ vững ổn định chính trị - xã hội, tạo môi trường hòa bình, an toàn, thuận lợi cho phát triển kinh tế - xã hội, đồng thời góp phần bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa trong mọi tình huống."
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "ii-de-xuat-phat-huy-vai-tro-cua-nhan-dan-trong-su-nghiep-bao-ve-an-ninh",
                       "text":  "II. ĐỀ XUẤT PHÁT HUY VAI TRÒ CỦA NHÂN DÂN TRONG SỰ NGHIỆP BẢO VỆ AN NINH QUỐC GIA TRONG BỐI CẢNH MỚI VÀ LIÊN HỆ VỚI TRÁCH NHIỆM CỦA BẢN THÂN"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Phát huy sức mạnh to lớn của Nhân dân là yếu tố quyết định thành công của sự nghiệp bảo vệ an ninh quốc gia. Dưới sự lãnh đạo toàn diện của Đảng, lực lượng An ninh đã và đang phấn đấu thực hiện tốt nhiệm vụ quan trọng đó, góp phần vào thành công của sự nghiệp xây dựng và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-81.jpg",
                       "width":  1335,
                       "height":  867,
                       "alt":  "Đại tướng Tô Lâm, Ủy viên Bộ Chính trị, Bộ trưởng Bộ Công an (nay là Tổng Bí thư Ban Chấp hành Trung ương Đảng, Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam) dự Ngày hội Văn hoá, thể thao và du lịch các dân tộc vùng Tây Nguyên lần thứ I, năm 2023. Nguồn: baokontum.com.vn.",
                       "caption":  "Đại tướng Tô Lâm, Ủy viên Bộ Chính trị, Bộ trưởng Bộ Công an (nay là Tổng Bí thư Ban Chấp hành Trung ương Đảng, Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam) dự Ngày hội Văn hoá, thể thao và du lịch các dân tộc vùng Tây Nguyên lần thứ I, năm 2023. Nguồn: baokontum.com.vn.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "1-vai-tro-cua-nhan-dan-trong-su-nghiep-bao-ve-an-ninh-quoc-gia",
                       "text":  "1. Vai trò của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Lý luận của chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh và thực tiễn lịch sử đấu tranh dựng nước và giữ nước của dân tộc ta đã khẳng định: Quần chúng Nhân dân là chủ thể sáng tạo nên lịch sử, là lực lượng quyết định sự thành bại của cách mạng. Khi nói đến Nhân dân, Chủ tịch Hồ Chí Minh khẳng định: Trong bầu trời không gì quý bằng Nhân dân, “Lực lượng toàn dân là lực lượng vĩ đại hơn hết. Không ai chiến thắng được lực lượng đó”. Nhân dân có sức sáng tạo và sức mạnh vô địch: “Dễ mười lần không dân cũng chịu,/ Khó trăm lần dân liệu cũng xong”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong sự nghiệp bảo vệ an ninh quốc gia, quần chúng nhân dân được xác định là nền tảng, là cội nguồn sức mạnh vô song, là nhân tố quyết định thắng lợi của cuộc đấu tranh với các thế lực thù địch, các loại tội phạm và vi phạm pháp luật. Chủ tịch Hồ Chí Minh - người sáng lập và rèn luyện lực lượng Công an nhân dân - khẳng định: “Giữ gìn trật tự, an ninh trước hết là việc của công an, bộ đội, cảnh sát”, nhưng để đạt hiệu quả cao thì “Việc giữ gìn trật tự, an ninh càng phải dựa vào sáng kiến và lực lượng của Nhân dân”. Lực lượng Công an có hạn, nên công tác bảo vệ an ninh, trật tự không thể thực hiện chỉ bằng nghiệp vụ chuyên môn đơn thuần, mà phải làm tốt công tác vận động quần chúng nhân dân, bởi “Khi Nhân dân giúp đỡ ta nhiều thì thành công nhiều, giúp đỡ ta ít thì thành công ít, giúp đỡ ta hoàn toàn thì thắng lợi hoàn toàn”. Người dặn dò cán bộ, chiến sĩ Công an khi thực hiện nhiệm vụ “Phải gần gũi Nhân dân, dựa vào lực lượng của Nhân dân, xa rời Nhân dân thì tài tình mấy cũng không làm gì được. Nhân dân có hàng triệu tai mắt. Nếu Công an biết dựa vào Nhân dân, thì Nhân dân sẽ là người giúp việc rất đắc lực của Công an”. Người cũng chỉ rõ trách nhiệm và nghĩa vụ của Nhân dân: “Mọi người công dân, bất kỳ già trẻ gái trai, bất kỳ làm việc gì, đều có nhiệm vụ giúp chính quyền giữ gìn trật tự an ninh, vì trật tự, an ninh trực tiếp quan hệ đến lợi ích bản thân của mọi người”."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Kế thừa tư tưởng của Chủ tịch Hồ Chí Minh, trong quá trình lãnh đạo công cuộc xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa, Đảng ta luôn quán triệt tư tưởng lấy dân làm gốc, khẳng định sự nghiệp cách mạng là của Nhân dân, do Nhân dân và vì Nhân dân; luôn đề cao vai trò, vị thế, sức mạnh của Nhân dân, xác định Nhân dân là chủ thể, động lực và mục tiêu của phát triển đất nước; quyền làm chủ của Nhân dân được thực hiện theo phương châm “Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng”; vận động và phát huy vai trò của Nhân dân là nhiệm vụ công tác trọng tâm có tính chiến lược của sự nghiệp xây dựng và bảo vệ Tổ quốc nói chung, bảo vệ an ninh quốc gia nói riêng và đã đề ra nhiều chủ trương, biện pháp lãnh đạo, tổ chức nhiều hình thức tập hợp Nhân dân, phát huy vai trò to lớn của Nhân dân tham gia bảo vệ an ninh quốc gia. Ban Bí thư đã ban hành các văn bản: Chỉ thị số 09-CT/TW, ngày 1-12-2011, “Về tăng cường sự lãnh đạo của Đảng đối với phong trào toàn dân bảo vệ an ninh Tổ quốc trong tình hình mới”; Kết luận số 44-KL/TW, ngày 22-1-2019, “Về việc tiếp tục đẩy mạnh thực hiện Chỉ thị số 09-CT/TW của Ban Bí thư khóa XI về tăng cường sự lãnh đạo của Đảng đối với Phong trào Toàn dân bảo vệ an ninh Tổ quốc trong tình hình mới”. Dưới sự lãnh đạo của Đảng, sự quản lý của chính quyền các cấp, sự hướng dẫn và vai trò nòng cốt của lực lượng Công an (đặc biệt trong đó là lực lượng An ninh nhân dân), các tầng lớp Nhân dân trong cả nước đã phát huy vai trò làm chủ và sức mạnh tiềm tàng, thực sự là “tai mắt”, là chỗ dựa tin cậy giúp lực lượng An ninh đấu tranh làm thất bại mọi âm mưu và hoạt động phá hoại của các thế lực thù địch và tội phạm, bảo vệ vững chắc an ninh quốc gia, bảo đảm trật tự, an toàn xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trải qua 80 năm xây dựng, chiến đấu và trưởng thành, lực lượng An ninh luôn quán triệt, vận dụng đúng đắn, sáng tạo chủ nghĩa Mác - Lê-nin, tư tưởng Hồ Chí Minh và chủ trương, đường lối của Đảng về phát huy vai trò và sức mạnh to lớn của quần chúng Nhân dân. Dù trong hoàn cảnh chiến tranh hay trong thời kỳ hòa bình, hội nhập quốc tế, dưới sự lãnh đạo của Đảng, lực lượng An ninh luôn biết dựa vào Nhân dân để công tác, chiến đấu và xây dựng lực lượng, có nhiều hình thức, biện pháp khơi dậy tiềm năng, sức mạnh, sáng kiến của Nhân dân, vận động Nhân dân tham gia tích cực, hiệu quả vào sự nghiệp bảo vệ an ninh quốc gia. Lịch sử xây dựng, chiến đấu và trưởng thành của lực lượng An ninh luôn gắn liền với những hình thức tổ chức và tập hợp quần chúng nhân dân, khơi dậy lòng yêu nước, tinh thần đoàn kết, khả năng sáng tạo, ý thức và trách nhiệm của các tầng lớp Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia. Các phong trào “Ba không”, “Ngũ gia liên bảo”, “Thập gia liên bảo” trong thời kỳ chống thực dân Pháp, phong trào “Bảo vệ trị an”, “Bảo mật phòng gian” trong thời kỳ chống đế quốc Mỹ và hiện nay là phong trào “Toàn dân bảo vệ an ninh Tổ quốc” được ngành Công an xác định là nội dung quan trọng của biện pháp vận động quần chúng, là biện pháp nghiệp vụ cơ bản để lực lượng Công an tập hợp và phát huy sức mạnh của quần chúng nhân dân trong khối đại đoàn kết toàn dân tộc tham gia bảo vệ an ninh quốc gia. Những chiến công và thành tích của lực lượng Công an (đặc biệt trong đó có lực lượng An ninh) từ khi thành lập đến nay luôn có sự giúp đỡ, ủng hộ to lớn của các ban, bộ, ngành, đoàn thể và đông đảo tầng lớp Nhân dân; không có sự ủng hộ, giúp đỡ của các tầng lớp Nhân dân, lực lượng công an không thể hoàn thành xuất sắc nhiệm vụ bảo vệ an ninh quốc gia."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Để phát huy vai trò to lớn của Nhân dân, Bộ Công an đã tham mưu với Thủ tướng Chính phủ ban hành Quyết định số 521/2005/QĐ-TTg, ngày 13-6-2005, theo đó lấy ngày 19 tháng 8 hằng năm (Ngày truyền thống của lực lượng Công an nhân dân) là “Ngày hội Toàn dân bảo vệ an ninh Tổ quốc”. Điều này không chỉ nhằm biểu dương sức mạnh của toàn dân, tôn vinh vai trò to lớn của Nhân dân trong sự nghiệp bảo vệ an ninh, trật tự của Tổ quốc, mà còn thể hiện truyền thống đoàn kết, gắn bó giữa lực lượng Công an với Nhân dân. Phong trào “Toàn dân bảo vệ an ninh Tổ quốc” đã được thực hiện thường xuyên, liên tục, đồng bộ trên các mặt, phù hợp với yêu cầu, nhiệm vụ, đặc điểm từng vùng, miền, nhóm đối tượng, địa bàn, tầng lớp dân cư và tình hình thực tế của các đơn vị, địa phương; nhờ đó, vai trò và sức mạnh to lớn của Nhân dân đã được tập hợp, phát huy tối đa. Thông qua phong trào “Toàn dân bảo vệ an ninh Tổ quốc”, các mô hình tự quản phòng, chống tội phạm, giữ gìn an ninh, trật tự ở cơ sở phát triển mạnh mẽ. Các tầng lớp Nhân dân đã tích cực tham gia báo tin, tố giác tội phạm, phòng, chống “diễn biến hòa bình”; phát hiện, hỗ trợ lực lượng Công an đấu tranh với các loại tội phạm, tệ nạn xã hội; cảm hóa, giáo dục, giúp đỡ người lầm lỗi tại gia đình và cộng đồng dân cư; giữ gìn trật tự công cộng, trật tự, an toàn giao thông, phòng, chống cháy nổ... Bên cạnh đó, Nhân dân còn tích cực tham gia góp ý xây dựng lực lượng Công an trong sạch, vững mạnh thông qua các hoạt động trưng cầu ý kiến, điều tra xã hội, diễn đàn “Công an lắng nghe ý kiến Nhân dân”, việc cán bộ và Nhân dân ở cơ sở đánh giá lực lượng Công an về lễ tiết, tác phong, đạo đức, lối sống, thái độ phục vụ khi giải quyết thủ tục hành chính; về tinh thần trách nhiệm trong đấu tranh phòng, chống tội phạm. Nhờ sự góp ý của Nhân dân, lực lượng công an đã chấn chỉnh, khắc phục hạn chế, khuyết điểm; đổi mới các mặt công tác, nêu cao tinh thần trách nhiệm với công việc theo phương châm Lúc dân cần, lúc dân khó có công an; qua đó, củng cố niềm tin của Nhân dân và cấp ủy, chính quyền các cấp với lực lượng Công an, góp phần xây dựng thế trận an ninh nhân dân, thế trận “lòng dân” vững chắc trong bảo vệ an ninh quốc gia."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-82.jpg",
                       "width":  882,
                       "height":  576,
                       "alt":  "Chiến sĩ công an Nhân dân cùng đồng bào gói bánh chưng tại Chương trình “10 nghìn bánh chưng xanh” cho hộ nghèo xuân Giáp Thìn 2024 ở huyện Nậm Pồ, tỉnh Điện Biên. Nguồn: nhandan.vn.",
                       "caption":  "Chiến sĩ công an Nhân dân cùng đồng bào gói bánh chưng tại Chương trình “10 nghìn bánh chưng xanh” cho hộ nghèo xuân Giáp Thìn 2024 ở huyện Nậm Pồ, tỉnh Điện Biên. Nguồn: nhandan.vn.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "2-boi-canh-tinh-hinh-moi-tac-dong-anh-huong-den-viec-phat-huy-suc-manh-c",
                       "text":  "2. Bối cảnh tình hình mới tác động, ảnh hưởng đến việc phát huy sức mạnh của Nhân dân"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sự nghiệp xây dựng và bảo vệ Tổ quốc của chúng ta trong giai đoạn tới diễn ra trong bối cảnh, tình hình, cục diện của thế giới, khu vực có nhiều diễn biến tác động, ảnh hưởng gồm cả thuận lợi và khó khăn đan xen. Thế giới đã và đang vận động theo xu hướng từ đơn cực chuyển sang đa cực, đa trung tâm, vừa hợp tác, vừa cạnh tranh, trong đó mặt cạnh tranh đậm nét hơn, toàn diện, phức tạp và quyết liệt hơn, nổi lên là cạnh tranh chiến lược giữa các nước lớn ngày càng gay gắt và quyết liệt; chiến dịch quân sự đặc biệt của Nga ở U-crai-na làm cho xu hướng hội nhập quốc tế bị chững lại, đã tác động rất tiêu cực đến kinh tế, chính trị, an ninh thế giới, trong đó có Việt Nam. Cuộc Cách mạng công nghiệp lần thứ tư tập trung vào công nghệ kỹ thuật số từ vài thập niên gần đây đã tác động sâu rộng, đưa tới những chuyển biến sâu sắc về mọi mặt của đời sống xã hội, trong đó có lĩnh vực quốc phòng - an ninh, bảo vệ Tổ quốc. Biển Đông là khu vực liên quan đến lợi ích của Việt Nam, đã và đang có nhiều diễn biến phức tạp, trong khi ASEAN và các quốc gia thành viên chưa có cơ chế để giải quyết."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ở trong nước, bên cạnh những thành tựu to lớn về phát triển kinh tế, xã hội, đối ngoại, chúng ta vẫn phải đối mặt với không ít khó khăn, thách thức. Các thế lực thù địch và phản động tăng cường chống phá Đảng, Nhà nước và chế độ xã hội chủ nghĩa; chúng đưa nhiều thông tin xấu, độc, thông tin sai sự thật gây hoang mang, dao động, gây nghi ngờ, chia rẽ trong nội bộ. Tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống trong một bộ phận cán bộ, đảng viên chưa được đẩy lùi triệt để; vấn đề “tự diễn biến”, “tự chuyển hóa” vẫn chưa được ngăn chặn hiệu quả... Tình trạng cán bộ, đảng viên không gương mẫu, quan liêu, xa dân, không làm tròn bổn phận trước Nhân dân, thậm chí có hành vi tham nhũng, tiêu cực, lãng phí còn xảy ra trên nhiều lĩnh vực, nhiều cấp, nhiều ngành làm suy giảm lòng tin của Nhân dân. Đại dịch COVID-19 khiến cho tốc độ phát triển kinh tế của đất nước cũng như đời sống, việc làm của Nhân dân bị ảnh hưởng nghiêm trọng; đến nay, vẫn tác động đến quá trình phục hồi và phát triển. Đặc biệt, tệ nạn tham nhũng, lãng phí, hối lộ, lợi dụng chức vụ, quyền hạn để bòn rút của cải của Nhà nước và Nhân dân trong đại dịch đã và đang gây ra những hậu quả hết sức nghiêm trọng, ảnh hưởng không nhỏ đến niềm tin của Nhân dân với một bộ phận trong đội ngũ cán bộ, đảng viên, đến các chính sách tốt đẹp và nhân văn của Đảng và Nhà nước ta."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong lực lượng Công an, một số cán bộ, chiến sĩ, trong đó có cả những cán bộ lãnh đạo, chỉ huy, sĩ quan cao cấp thiếu tu dưỡng, rèn luyện, vi phạm đạo đức, lối sống, vi phạm pháp luật, kỷ luật, điều lệnh Công an nhân dân, đã tác động tiêu cực đến dư luận xã hội và niềm tin của Nhân dân, ảnh hưởng xấu đến uy tín, danh dự và truyền thống của lực lượng Công an. Đời sống của không ít cán bộ, chiến sĩ còn gặp nhiều khó khăn, trong khi đó, nhiệm vụ của lực lượng Công an ngày càng nặng nề, nguy hiểm, phức tạp, chịu nhiều tác động bởi sự cám dỗ, mua chuộc của tội phạm."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Hiện nay, điều kiện kinh tế, xã hội, văn hóa và nhất là môi trường sống đã có những thay đổi vượt bậc, trình độ dân trí được nâng cao, Nhân dân được tiếp cận với nhiều nguồn thông tin do sự mở rộng và phát triển của internet, nhất là mạng xã hội. Bên cạnh thông tin chính thống tích cực, thì thông tin xấu, độc, sai sự thật của các thế lực thù địch và phần tử cơ hội chính trị, thông tin nhảm nhí, không phù hợp với văn hóa truyền thống tốt đẹp, với văn minh tiến bộ đã và đang tác động làm cho không ít người dân, nhất là tầng lớp thanh niên, thiếu niên bị lôi kéo, mua chuộc, xúi giục; từ đó, có những hành vi xâm phạm an ninh quốc gia, gây mất trật tự, an toàn xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một số tình hình nổi bật nêu trên đã, đang và sẽ tác động đến hiệu quả công tác dân vận của Đảng, ảnh hưởng không tốt tới việc xây dựng sự đồng thuận xã hội, xây dựng khối đại đoàn kết toàn dân tộc; làm cản trở tới việc phát huy sức mạnh của Nhân dân trong xây dựng và bảo vệ Tổ quốc. Do đó, yêu cầu đặt ra là cần có sự đổi mới tư duy và hành động, tăng cường xây dựng khối đại đoàn kết ở trong và ngoài nước; phát huy nội lực và năng lực sáng tạo của các tầng lớp Nhân dân tham gia bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "3-mot-so-de-xuat-va-trach-nhiem-ban-than-phat-huy-suc-manh-to-lon-cua-nh",
                       "text":  "3. Một số đề xuất và trách nhiệm bản thân phát huy sức mạnh to lớn của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một là, tiếp tục nâng cao nhận thức và hành động về vai trò, sức mạnh của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia. Sức mạnh tổng hợp để bảo vệ Tổ quốc trong tình hình mới được xác định là sức mạnh của khối đại đoàn kết toàn dân tộc dưới sự lãnh đạo của Đảng, là sức mạnh từ sự kết hợp giữa các yếu tố con người, kinh tế, văn hóa, xã hội, đối ngoại; từ sự kết hợp giữa nội lực của dân tộc với sức mạnh của thời đại và hợp tác quốc tế ngày càng sâu rộng. Trong đó, vai trò của Nhân dân, sức mạnh tinh thần và vật chất của Nhân dân là nguồn sức mạnh nội sinh quan trọng nhất, có ý nghĩa quyết định với sự nghiệp bảo vệ an ninh quốc gia. Sự nghiệp bảo vệ an ninh quốc gia là nhiệm vụ của cả hệ thống chính trị và của toàn dân, trong đó lực lượng An ninh nhân dân làm nòng cốt, đòi hỏi tiếp tục huy động được sức mạnh tổng hợp trên cơ sở thực hiện đại đoàn kết toàn dân tộc, phát huy vai trò của cả hệ thống chính trị, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội; dựa vào Nhân dân, lấy yên dân làm nền tảng, kết hợp chặt chẽ giữa thế trận an ninh nhân dân với thế trận quốc phòng toàn dân, thế trận “lòng dân” vững chắc. Cần tiếp tục quán triệt và thực hiện tốt chủ trương, đường lối của Đảng về huy động các nguồn lực phục vụ quốc phòng, an ninh, phát huy giá trị văn hóa, sức mạnh con người Việt Nam, tinh thần đoàn kết, tự hào dân tộc trong sự nghiệp xây dựng và bảo vệ Tổ quốc theo phương châm “Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng”; bảo đảm mọi đường lối, chính sách của Đảng và Nhà nước đều vì lợi ích của Nhân dân, lấy hạnh phúc của Nhân dân làm mục tiêu phấn đấu. Cấp ủy và chính quyền các cấp cần quan tâm chăm lo đời sống vật chất và tinh thần của Nhân dân, tạo môi trường, điều kiện thuận lợi để Nhân dân phát triển kinh tế. Đây là nền tảng quan trọng để yên dân, thu phục nhân tâm, củng cố khối đại đoàn kết toàn dân tộc; qua đó, phát huy được sức mạnh tinh thần, vật chất và tiềm năng của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Hai là, quán triệt và thực hiện tốt chủ trương, đường lối của Đảng về công tác dân vận và xây dựng phong trào “Toàn dân bảo vệ an ninh Tổ quốc”. Công tác dân vận là nhiệm vụ có ý nghĩa chiến lược, góp phần quan trọng củng cố mối quan hệ máu thịt giữa Đảng và lực lượng An ninh với Nhân dân, xây dựng khối đại đoàn kết toàn dân tộc, động viên Nhân dân tích cực tham gia vào sự nghiệp xây dựng, bảo vệ Tổ quốc. Vận động quần chúng nhân dân tham gia phong trào “Toàn dân bảo vệ an ninh Tổ quốc” là một bộ phận của công tác dân vận, là biện pháp để huy động được nhiều nguồn lực về con người và vật chất tham gia vào công tác bảo vệ an ninh, trật tự từ cơ sở; huy động sức mạnh của Nhân dân trong phòng ngừa, phát hiện, ngăn chặn, đấu tranh với các loại tội phạm, bảo vệ an ninh chính trị, giữ gìn trật tự, an toàn xã hội và phục vụ đắc lực việc thực hiện nhiệm vụ chính trị của Đảng, gắn với các cuộc vận động lớn do Đảng, Nhà nước, các ban, bộ, ngành, đoàn thể và địa phương phát động. Do vậy, cần tiếp tục thực hiện tốt các nhiệm vụ, giải pháp được xác định trong Nghị quyết Đại hội XIII của Đảng; Kết luận số 43-KL/TW, ngày 7-1-2019, của Ban Bí thư, “Về tiếp tục thực hiện Nghị quyết số 25-NQ/TW về “Tăng cường và đổi mới sự lãnh đạo của Đảng đối với công tác dân vận trong tình hình mới””; quan tâm củng cố, phát triển vững mạnh các mô hình trong phong trào “Toàn dân bảo vệ an ninh Tổ quốc” tại địa bàn cơ sở, nhất là địa bàn chiến lược, vùng núi, vùng sâu, vùng xa, vùng biên giới, hải đảo, vùng đồng bào dân tộc thiểu số, gắn với thực hiện đề án “Xây dựng thế trận an ninh Nhân dân gắn với thế trận quốc phòng toàn dân vững chắc” của Đảng ủy Công an Trung ương."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Hiện nay, không gian mạng, nhất là mạng xã hội đã trở thành “không gian sống” quan trọng của Nhân dân trong nhiều hoạt động, như học tập, giải trí, thương mại... Do vậy, việc thực hiện phong trào “Toàn dân bảo vệ an ninh Tổ quốc” trong tình hình mới cần có bước thay đổi để thích nghi với xu thế, đặc điểm tình hình. Thực hiện phong trào “Toàn dân bảo vệ an ninh Tổ quốc” trên không gian mạng cần được quan tâm đặc biệt trong thời gian tới để nâng cao hiệu quả công tác dân vận, phát huy vai trò của “cư dân mạng” trong đấu tranh bảo vệ an ninh quốc gia làm thất bại âm mưu “diễn biến hòa bình”, bạo loạn, lật đổ của các thế lực thù địch; đấu tranh phòng, chống các loại tội phạm hoạt động trên không gian mạng, góp phần bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ba là, tích cực, chủ động phòng ngừa, đấu tranh hiệu quả với các loại tội phạm, bảo đảm an ninh, an toàn con người, tài sản, cuộc sống bình yên và hạnh phúc của Nhân dân. Một trong những nhân tố làm suy giảm lòng tin của Nhân dân, ảnh hưởng tiêu cực đến việc huy động sức mạnh của Nhân dân là tình trạng tham nhũng, tiêu cực. Do vậy, lực lượng An ninh nhân dân tiếp tục quán triệt và thực hiện nhất quán quan điểm, chủ trương của Đảng về đấu tranh phòng, chống tham nhũng, lãng phí theo tinh thần kiên quyết, kiên trì, quyết tâm cao, hành động mạnh mẽ và hiệu quả hơn, nhằm làm trong sạch Đảng và hệ thống chính trị. Trong đó, kết hợp giữa tích cực phòng ngừa với chủ động phát hiện, điều tra làm rõ, phối hợp với cơ quan tư pháp xử lý nghiêm minh, kịp thời hành vi tham nhũng, lãng phí, bao che, tiếp tay cho tham nhũng, can thiệp, cản trở việc chống tham nhũng, lãng phí; quán triệt nghiêm túc quan điểm xử lý “không có vùng cấm, không có ngoại lệ” trong các vụ án, vụ việc liên quan đến đấu tranh phòng, chống tham nhũng theo chức năng của Công an nhân dân. Đẩy mạnh công tác phòng ngừa, trấn áp các loại tội phạm, triệt phá các băng, nhóm tội phạm nguy hiểm và các tụ điểm phức tạp về trật tự xã hội, tạo môi trường an toàn, lành mạnh để Nhân dân yên tâm phát triển kinh tế, xã hội. Tiếp tục đẩy mạnh cải cách thủ tục hành chính gắn với nâng cao trách nhiệm của đội ngũ cán bộ với tinh thần vì Nhân dân phục vụ, “việc gì có lợi cho dân phải hết sức làm, việc gì có hại cho dân phải hết sức tránh” như lời căn dặn của Chủ tịch Hồ Chí Minh để nuôi dưỡng, củng cố vững chắc lòng tin của Nhân dân với lực lượng Công an."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Bốn là, xây dựng lực lượng An ninh nhân dân thật sự trong sạch, vững mạnh gắn với nâng cao đạo đức công vụ, văn hóa ứng xử của cán bộ, chiến sĩ An ninh với Nhân dân. Cán bộ, chiến sĩ thường xuyên công tác, chiến đấu trong môi trường phức tạp, nguy hiểm, có nhiều sự cám dỗ và sự tác động của các yếu tố tiêu cực; do vậy, cấp ủy, lãnh đạo công an các cấp cần đẩy mạnh giáo dục đạo đức cách mạng; thực hiện thường xuyên, sâu rộng, hiệu quả việc học tập, làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh; phát huy vai trò nêu gương, đề cao sự gương mẫu của đội ngũ lãnh đạo, chỉ huy, người đứng đầu trong học tập, tu dưỡng, rèn luyện và trong công tác, chiến đấu. Coi trọng công tác kiểm tra, giám sát trong Đảng kết hợp với phát huy vai trò giám sát, phản biện xã hội của báo chí và Nhân dân đối với cán bộ, đảng viên Công an trong việc thực hiện các quy định về trách nhiệm nêu gương. Mỗi cán bộ, chiến sĩ cần có lòng yêu nghề, tận tụy với công việc, tôn trọng Nhân dân, tận tụy phục vụ Nhân dân, lắng nghe ý kiến của Nhân dân, chịu sự giám sát của Nhân dân; đồng thời, phải luôn tu dưỡng, phấn đấu trở thành một tấm gương tốt, hình ảnh đẹp trong mắt người dân về phẩm chất đạo đức, tinh thần trách nhiệm với công việc và văn hóa ứng xử."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đạo đức công vụ và văn hóa ứng xử của cán bộ, chiến sĩ sẽ là nhân tố quan trọng tạo dựng và củng cố niềm tin của Nhân dân với lực lượng An ninh, nên cần tăng cường công tác bồi dưỡng, giáo dục đạo đức người chiến sĩ cách mạng và nâng cao văn hóa ứng xử cho cán bộ, chiến sĩ để kịp thời thay đổi từ tư duy, hành động, phương pháp làm việc, cho đến cách thức vận động quần chúng và tương tác với Nhân dân. Tăng cường liên hệ, xây dựng mối quan hệ gắn bó mật thiết, gần gũi, chân tình, cởi mở của cán bộ, chiến sĩ với Nhân dân thông qua các hình thức cùng ăn, cùng ở, cùng làm, giúp đỡ Nhân dân phát triển kinh tế, xóa đói, giảm nghèo, xây dựng đời sống văn hóa ở khu dân cư, xây dựng nông thôn mới văn minh, hiện đại. Thông qua đó để nâng cao hiệu quả công tác vận động, phát huy vai trò và sức mạnh của Nhân dân tham gia phong trào “Toàn dân bảo vệ an ninh Tổ quốc”, góp phần tạo dựng hình ảnh đẹp của người chiến sĩ An ninh vì nước quên thân, vì dân phục vụ."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Năm là, phát huy vai trò, sức mạnh của cộng đồng người Việt Nam ở nước ngoài trong khối đại đoàn kết toàn dân tộc, vì sự nghiệp bảo vệ an ninh quốc gia. Đảng ta xác định: “Người Việt Nam ở nước ngoài là một bộ phận không tách rời và là một nguồn lực của cộng đồng dân tộc Việt Nam, là nhân tố quan trọng góp phần tăng cường quan hệ hợp tác, hữu nghị giữa nước ta với các nước”. Vì vậy, Đảng ta đã thực hiện nhiều biện pháp, trong đó đẩy mạnh thông tin tuyên truyền để đồng bào ta ở nước ngoài hướng về Tổ quốc, có nhận thức và hành động phù hợp với lợi ích quốc gia - dân tộc, có đóng góp tích cực cho sự nghiệp xây dựng và bảo vệ Tổ quốc, qua đó củng cố vững chắc khối đại đoàn kết toàn dân tộc. Thời gian tới, cần thực hiện tốt và hiệu quả hơn các văn bản của Đảng và Nhà nước về công tác đối với người Việt Nam ở nước ngoài; tiếp tục đa dạng hóa hình thức tập hợp, động viên, khích lệ cộng đồng người Việt Nam ở nước ngoài đóng góp tích cực vào sự nghiệp bảo vệ an ninh quốc gia, góp phần thiết lập thế trận an ninh liên hoàn bên trong và bên ngoài biên giới quốc gia, để phát huy sức mạnh tổng hợp của khối đại đoàn kết toàn dân tộc trong bảo vệ an ninh quốc gia từ sớm, từ xa, từ bên ngoài lãnh thổ; chủ động đấu tranh với các hành vi xâm phạm lợi ích quốc gia - dân tộc, phá hoại quan hệ giữa Việt Nam với các nước, các hành vi gây chia rẽ cộng đồng người Việt Nam ở trong nước và ở nước ngoài. Xây dựng, thực thi hiệu quả chính sách thu hút, đãi ngộ thỏa đáng đối với chuyên gia, trí thức người Việt Nam, đồng bào ta ở nước ngoài tham gia công tác bảo vệ an ninh quốc gia; tăng cường tranh thủ, vận động các nước, các tổ chức và cá nhân nước ngoài ủng hộ Việt Nam trong bảo vệ chủ quyền lãnh thổ và xử lý tình hình phức tạp về an ninh, trật tự trong nước."
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "iii-kien-nghi-giai-phap-phat-huy-vai-tro-cua-nhan-dan-voi-su-nghiep-an-n",
                       "text":  "III. KIẾN NGHỊ GIẢI PHÁP PHÁT HUY VAI TRÒ CỦA NHÂN DÂN VỚI SỰ NGHIỆP AN NINH QUỐC GIA, TRẬT TỰ AN TOÀN XÃ HỘI - ĐỀ XUẤT BỔ SUNG, PHÁT TRIỂN TIỆN ÍCH VNEID - NHẰM ĐẨY MẠNH KHAI THÁC “KHÔNG GIAN SỐ” PHÒNG NGỪA, PHÁT HIỆN TỘI PHẠM TRONG THỜI GIAN TỚI"
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "1-su-ra-doi-thang-9-2021-giua-boi-canh-dich-covid-19-bung-phat-dien-bien",
                       "text":  "1. Sự ra đời"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tháng 9-2021, giữa bối cảnh dịch COVID-19 bùng phát diễn biến phức tạp, Bộ Công an đã ra mắt ứng dụng định danh điện tử VNeID với hai tính năng chính là khai báo y tế và di chuyển nội địa. Đến nay VNeID đã tích hợp nhiều tiện ích trên các lĩnh vực và được kỳ vọng sẽ trở thành siêu ứng dụng chuyển đổi số quốc gia."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-83.jpg",
                       "width":  1200,
                       "height":  628,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-84.png",
                       "width":  512,
                       "height":  512,
                       "alt":  "VNeID (viết tắt của từ Vietnam Electronic Identification) do Trung tâm dữ liệu quốc gia về dân cư (Cục Cảnh sát quản lý hành chính về trật tự xã hội - C06, Bộ Công an) phát triển.",
                       "caption":  null,
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "VNeID (viết tắt của từ Vietnam Electronic Identification) do Trung tâm dữ liệu quốc gia về dân cư (Cục Cảnh sát quản lý hành chính về trật tự xã hội - C06, Bộ Công an) phát triển. Đây là một ứng dụng trên thiết bị di động. VNeID được xây dựng trên nền tảng cơ sở dữ liệu về định danh, dân cư và xác thực điện tử, kết nối với các cơ quan hành chính nhà nước và các tổ chức xã hội."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đến nay, Bộ Công an đã cấp hơn 87,9 triệu căn cước công dân (nay là căn cước) gắn chip. Thu nhận hơn 79,8 triệu hồ sơ định danh điện tử và đã kích hoạt hơn 58,3 triệu tài khoản. Theo ước tính trung bình mỗi ngày có khoảng 1,5 triệu lượt sử dụng tài khoản định danh điện tử VNeID."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ứng dụng VNeID được thiết kế để quản lý thông tin cá nhân và cung cấp các dịch vụ công trực tuyến. VNeID được kỳ vọng sẽ giúp giảm thời gian và chi phí cho cả người dân và cơ quan hành chính nhà nước. Đồng thời đảm bảo tính minh bạch, chống gian lận trong quá trình cung cấp và sử dụng dịch vụ công."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "VNeID ra đời có thể thay thế các loại giấy tờ truyền thống. Nghĩa là, thay vì phải xuất trình các loại giấy tờ như CCCD gắn chip, giấy khai sinh, thẻ bảo hiểm, giấy phép lái xe… thì người yêu cầu có thể kiểm tra trực tiếp thông tin của bạn qua app VNeID khi được cấp phép."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-85.jpg",
                       "width":  1024,
                       "height":  614,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong bối cảnh chuyển đổi số đang diễn ra mạnh mẽ trên toàn cầu, Việt Nam cũng không nằm ngoài xu thế đó khi từng bước xây dựng Chính phủ số, xã hội số và công dân số. Một trong những công cụ quan trọng hỗ trợ tiến trình này là ứng dụng định danh điện tử quốc gia VNeID - do Bộ Công an phát triển và quản lý. VNeID không chỉ đơn thuần là một ứng dụng quản lý thông tin cá nhân, mà còn là giải pháp tích hợp các loại giấy tờ thiết yếu vào môi trường số, giúp công dân dễ dàng thực hiện các thủ tục hành chính, giao dịch dân sự và tham gia vào hệ sinh thái số một cách thuận tiện, an toàn và hợp pháp. Việc lựa chọn sử dụng VNeID không chỉ mang lại lợi ích thiết thực cho mỗi cá nhân, mà còn góp phần thúc đẩy quá trình hiện đại hóa quản lý nhà nước, nâng cao hiệu quả phục vụ người dân và doanh nghiệp trong thời đại công nghệ số."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "dap-ung-yeu-cau-cua-mot-xa-hoi-so-hanh-chinh-so",
                       "text":  "Đáp ứng yêu cầu của một xã hội số, hành chính số"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong bối cảnh chuyển đổi số quốc gia đang được đẩy mạnh, mọi lĩnh vực của đời sống - từ giáo dục, y tế, giao thông, ngân hàng đến dịch vụ công - đều đang tiến tới ứng dụng công nghệ số. VNeID chính là “cánh cổng số” đưa công dân hòa nhập vào môi trường số một cách hợp pháp và an toàn. Đây không đơn thuần là một ứng dụng tiện ích, mà là một công cụ định danh điện tử có tính pháp lý cao, được phát triển bởi Bộ Công an, nhằm xác minh danh tính và tích hợp các loại giấy tờ cá nhân một cách chính thức."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "2-vai-tro-tien-ich-su-dung-vneid-cung-dong-nghia-voi-viec-cong-dan-dang",
                       "text":  "2. Vai trò, tiện ích"
                   },
                                      {
                       "type":  "paragraph",
                       "text":  "Sử dụng VNeID cũng đồng nghĩa với việc công dân đang chủ động tham gia vào hệ sinh thái số của quốc gia, từng bước rút ngắn khoảng cách giữa người dân và chính quyền số, thúc đẩy các giao dịch không giấy tờ, không tiếp xúc, không tốn thời gian."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "don-gian-hoa-thu-tuc-hanh-chinh-mot-trong-nhung-loi-ich-ro-ret-nhat",
                       "text":  "Đơn giản hóa thủ tục hành chính - một trong những lợi ích rõ rệt nhất"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trước đây, khi làm một thủ tục hành chính như đăng ký xe, xin cấp lại giấy tờ, nộp hồ sơ học tập hay y tế, người dân cần mang theo nhiều giấy tờ như Căn cước công dân, hộ khẩu, giấy khai sinh, bảo hiểm y tế, bảo hiểm xã hội, bằng lái xe,... Sự thiếu sót một trong các giấy tờ đó có thể khiến hồ sơ bị từ chối, yêu cầu bổ sung, gây mất thời gian."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Với VNeID, các loại giấy tờ này được tích hợp điện tử, đồng bộ dữ liệu và xác minh từ các cơ quan chức năng. Điều này giúp người dân chỉ cần dùng ứng dụng để xác thực danh tính một lần mà vẫn đảm bảo đầy đủ thông tin cần thiết cho các thủ tục hành chính khác nhau. Đây là sự tiện lợi chưa từng có, nhất là trong bối cảnh nhu cầu giải quyết công việc ngày càng nhanh, chính xác và linh hoạt."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "gia-tri-phap-ly-ro-rang-dam-bao-tinh-chinh-thong",
                       "text":  "Giá trị pháp lý rõ ràng, đảm bảo tính chính thống"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một trong những lý do quan trọng khiến người dân nên sử dụng VNeID là vì tính pháp lý được Nhà nước công nhận. Theo Thông tư số 32/2023/TT-BCA, nếu giấy phép lái xe, đăng ký xe đã được tích hợp trên tài khoản VNeID, thì việc xuất trình các thông tin này trên ứng dụng có giá trị pháp lý tương đương với bản giấy. Điều đó có nghĩa là, trong các tình huống kiểm tra hành chính, người dân không bắt buộc phải mang theo giấy tờ gốc, chỉ cần trình ứng dụng VNeID là đủ cơ sở để xác minh."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đây là bước chuyển rất quan trọng từ “xác thực giấy tờ” sang “xác thực điện tử”, phù hợp với định hướng phát triển một xã hội không giấy tờ và không tiếp xúc trong thời kỳ cách mạng công nghiệp 4.0."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "an-toan-bao-mat-cao-niem-tin-trong-su-dung",
                       "text":  "An toàn, bảo mật cao - niềm tin trong sử dụng"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Một trong những trở ngại lớn khiến người dân e dè với ứng dụng số là nỗi lo rò rỉ thông tin cá nhân. Tuy nhiên, với VNeID - ứng dụng do Bộ Công an trực tiếp phát triển và quản lý - dữ liệu người dùng được mã hóa, bảo vệ bằng các công nghệ bảo mật tiên tiến nhất, đạt chuẩn quốc gia về an toàn thông tin."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ứng dụng yêu cầu xác thực qua nhiều lớp như sinh trắc học, mã OTP, mã PIN,... nên người khác không thể truy cập trái phép. Việc xác thực khuôn mặt và giọng nói càng đảm bảo rằng dữ liệu cá nhân chỉ thuộc về chính chủ sở hữu. Đây là ưu điểm vượt trội so với các hình thức lưu trữ giấy tờ truyền thống dễ bị mất mát, hư hỏng hoặc làm giả."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tich-hop-du-lieu-lien-nganh-tao-nen-tang-cho-xa-hoi-lien-thong",
                       "text":  "Tích hợp dữ liệu liên ngành - tạo nền tảng cho xã hội liên thông"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc lựa chọn sử dụng VNeID không chỉ mang lại tiện ích cá nhân mà còn có ý nghĩa ở tầm hệ thống. Khi người dân sử dụng VNeID đồng nghĩa với việc đang góp phần xây dựng một hệ cơ sở dữ liệu dân cư toàn quốc thống nhất, liên thông và đồng bộ giữa các ngành, các cấp."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Với VNeID, dữ liệu từ Bộ Công an, Bộ Y tế, Bộ Giao thông, Bộ Tài chính,… được liên kết lại trên cùng một nền tảng. Điều này giúp các cơ quan dễ dàng xác minh thông tin, hạn chế tình trạng gian lận hồ sơ, và đưa ra quyết sách dựa trên dữ liệu thực tiễn. Người dân không phải kê khai lại nhiều lần, tránh sự chồng chéo, mâu thuẫn thông tin."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "huong-toi-cong-dan-so-xa-hoi-khong-dung-giay-to",
                       "text":  "Hướng tới công dân số, xã hội không dùng giấy tờ"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sử dụng VNeID là bước đầu tiên để người dân trở thành “công dân số” thực thụ. Khi tất cả giấy tờ được số hóa, thủ tục được điện tử hóa, và giao dịch được số hóa, mỗi công dân có thể thực hiện mọi thủ tục từ xa: đăng ký tạm trú, khai sinh con, khám chữa bệnh, gia hạn bảo hiểm, thậm chí bỏ phiếu bầu cử online trong tương lai."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Điều này không chỉ giúp tiết kiệm thời gian và chi phí cho người dân mà còn góp phần bảo vệ môi trường, tiết kiệm nguồn lực xã hội, giảm thiểu chi phí in ấn, vận chuyển, lưu trữ giấy tờ vật lý."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc lựa chọn sử dụng VNeID là một quyết định đúng đắn, chủ động và phù hợp với xu thế tất yếu của thời đại số. Ứng dụng này không chỉ phục vụ nhu cầu thiết thực cá nhân mà còn góp phần xây dựng một xã hội số hiện đại, minh bạch và hiệu quả. Sử dụng VNeID là hành động thể hiện tinh thần công dân tích cực, thích ứng với sự thay đổi của công nghệ, góp phần vào công cuộc chuyển đổi số quốc gia một cách sâu rộng và bền vững."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-86.jpg",
                       "width":  700,
                       "height":  427,
                       "alt":  "Một số tính năng nổi bậc của ứng dụng VNeID",
                       "caption":  "Một số tính năng nổi bậc của ứng dụng VNeID.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-1",
                       "text":  "(1) Tích hợp các loại giấy tờ cá nhân từ bản giấy sang dữ liệu điện tử"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cho đến nay đã có rất nhiều giấy tờ cá nhân của công dân được tích hợp trên ứng dụng VNeID, đây được xem là tính năng quan trọng nhất đối với người dùng VNeID. Vì các thông tin trên VNeID sẽ được dùng để đối chiếu khi thực hiện thủ tục hành chính."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ứng dụng này hiện có thể tích hợp thông tin trên thẻ Căn cước, BHXH, BHYT, bằng lái xe các loại, thông tin đăng ký xe, tài khoản ngân hàng,.."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-87.jpg",
                       "width":  667,
                       "height":  1141,
                       "alt":  "Ngoài ra, theo điểm a khoản 2 Điều 12 Thông tư 32/2023/TT-BCA, các thông tin về giấy phép lái xe, đăng ký xe… nếu đã được tích hợp vào tài khoản VNeID thì sẽ có giá trị như việc CSGT kiểm tra trực tiếp.",
                       "caption":  "Ngoài ra, theo điểm a khoản 2 Điều 12 Thông tư 32/2023/TT-BCA, các thông tin về giấy phép lái xe, đăng ký xe… nếu đã được tích hợp vào tài khoản VNeID thì sẽ có giá trị như việc CSGT kiểm tra trực tiếp.",
                       "note":  null
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "2-khai-bao-y-te-qua-ung-dung-vneid",
                       "text":  "(2) Khai báo y tế qua ứng dụng VNeID"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong các thời điểm chống dịch bệnh, người dân có thể sử dụng VNeID để khai báo y tế toàn dân giúp nhà nước dễ dàng truy ra dấu vết các bệnh nhân dễ dàng quản lý và hạn chế được sự bùng nổ dịch bệnh. Ứng dụng giúp bạn dễ dàng khai báo y tế dù đang ở bất kỳ đâu."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "3-dang-ky-thuong-tru-tam-tru-tam-vang-o-bat-ky-dau",
                       "text":  "(3) Đăng ký thường trú, tạm trú, tạm vắng ở bất kỳ đâu"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trước đây để đăng ký thường trú, tạm vắng hay tạm trú cần yêu cầu công dân phải lên Công an để khai báo. Nhưng từ khi có cài đặt ứng dụng VNeID bạn có thể thực hiện thủ tục ngay tại nhà với những thao tác dễ dàng và nhanh chóng."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "4-ung-dung-vneid-ho-tro-giao-dich-truc-tuyen",
                       "text":  "(4) Ứng dụng VNeID hỗ trợ giao dịch trực tuyến"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Với nhu cầu mua sắm online đang ngày càng phát triển kéo theo các giao dịch trực tuyến tăng. Theo đó, ứng dụng VNeID cũng hỗ trợ tốt đối với các giao dịch này. Đặc biệt, với một nền tảng lớn từ Bộ Công an phát hành giúp bảo đảm an toàn về quyền lợi cũng như tính bảo mật tối đa."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "5-to-giac-toi-pham-qua-ung-dung-vneid",
                       "text":  "(5) Tố giác tội phạm qua ứng dụng VNeID"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Được quản lý trực tiếp bởi Bộ Công an, VNeID cũng hỗ trợ trong việc tố giác các tội phạm gần khu vực bạn. Trong đó, ứng dụng mang đến những hướng dẫn chi tiết, rõ ràng dành cho người người muốn tố giác và mang tính bảo mật tuyệt đối 100%."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-88.png",
                       "width":  1109,
                       "height":  778,
                       "alt":  "Đặc biệt, thời gian vừa qua VNeID là một công cụ hiện đại góp phần phát huy dân chủ trong góp ý sửa đổi Hiến pháp năm 2013",
                       "caption":  "Đặc biệt, thời gian vừa qua VNeID là một công cụ hiện đại góp phần phát huy dân chủ trong góp ý sửa đổi Hiến pháp năm 2013",
                       "note":  null
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-89.jpg",
                       "width":  742,
                       "height":  800,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong quá trình sửa đổi, bổ sung Hiến pháp - đạo luật gốc của quốc gia, việc lấy ý kiến rộng rãi của Nhân dân không chỉ là yêu cầu mang tính pháp lý mà còn là biểu hiện cụ thể của tinh thần dân chủ, thể hiện quyền làm chủ của người dân đối với bộ máy nhà nước và thể chế chính trị. Trước đây, hoạt động lấy ý kiến góp ý Hiến pháp thường được tổ chức qua hội nghị, hội thảo, phiếu lấy ý kiến bằng văn bản,… Tuy nhiên, với sự phát triển mạnh mẽ của công nghệ và chuyển đổi số quốc gia, việc tích hợp chức năng góp ý Hiến pháp trực tiếp trên ứng dụng VNeID đã tạo ra bước chuyển đổi mang tính đột phá. Ứng dụng này đóng vai trò đặc biệt quan trọng trên nhiều khía cạnh:"
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "mot-la-khang-dinh-vai-tro-la-kenh-gop-y-chinh-thong-bao-dam-tinh-phap-ly",
                       "text":  "Một là, khẳng định vai trò là kênh góp ý chính thống, bảo đảm tính pháp lý và minh bạch"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "VNeID là nền tảng định danh điện tử quốc gia duy nhất hiện nay do Bộ Công an quản lý, có khả năng xác thực chính xác danh tính người dùng. Việc góp ý Hiến pháp thông qua VNeID đồng nghĩa với việc ý kiến phản ánh đến cơ quan chức năng là của những công dân thật, có đủ tư cách pháp lý, không nặc danh, không giả mạo, góp phần nâng cao chất lượng phản hồi và hạn chế các hành vi lợi dụng để xuyên tạc, phá hoại. Tính hợp pháp, minh bạch và rõ ràng của các ý kiến góp ý trên VNeID tạo điều kiện thuận lợi để các cơ quan chức năng có cơ sở tin cậy trong việc tổng hợp, phân tích và tiếp thu ý kiến Nhân dân một cách khách quan và khoa học."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "hai-la-mo-rong-quyen-tham-gia-chinh-tri-cua-nguoi-dan-thuc-hanh-dan-chu",
                       "text":  "Hai là, mở rộng quyền tham gia chính trị của người dân - Thực hành dân chủ điện tử"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc góp ý Hiến pháp qua VNeID không chỉ đơn thuần là một tính năng kỹ thuật, mà còn là một hình thức dân chủ trực tiếp thời đại số, nơi người dân có thể thực hiện quyền chính trị quan trọng nhất - quyền tham gia xây dựng đạo luật tối cao của đất nước - thông qua thiết bị di động của mình. Họ có thể truy cập dự thảo Hiến pháp, đọc, phân tích và đưa ra ý kiến phản hồi ở bất cứ đâu, bất kỳ lúc nào."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Điều này đặc biệt ý nghĩa đối với những người dân ở vùng sâu, vùng xa, người cao tuổi, người khuyết tật, hay những người không thể tham dự các hội nghị tập trung. Nhờ VNeID, mọi công dân đều có điều kiện bình đẳng để bày tỏ chính kiến, đóng góp ý tưởng, thể hiện trách nhiệm công dân trong quá trình xây dựng thể chế nhà nước."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "ba-la-thuc-day-hieu-qua-quan-ly-nha-nuoc-va-tang-cuong-ket-noi-giua-chin",
                       "text":  "Ba là, thúc đẩy hiệu quả quản lý nhà nước và tăng cường kết nối giữa chính quyền và nhân dân"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc tích hợp chức năng góp ý Hiến pháp vào VNeID còn giúp các cơ quan lập pháp nắm bắt nhanh chóng, chính xác và đầy đủ hơn ý kiến của người dân trên quy mô toàn quốc. Hệ thống có thể tự động phân tích, thống kê, tổng hợp các nhóm nội dung được quan tâm, từ đó giúp Quốc hội, Chính phủ và các cơ quan có liên quan điều chỉnh dự thảo Hiến pháp theo hướng sát thực tiễn, phản ánh đúng nguyện vọng của Nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Mặt khác, đây cũng là biểu hiện rõ nét của một nền hành chính công khai, minh bạch, thân thiện - khi chính quyền chủ động lắng nghe người dân và tạo điều kiện cho người dân thể hiện tiếng nói chính đáng của mình bằng phương tiện hiện đại."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "bon-la-gop-phan-hien-thuc-hoa-chinh-phu-so-quoc-hoi-so-va-cong-dan-so",
                       "text":  "Bốn là, góp phần hiện thực hóa Chính phủ số, Quốc hội số và công dân số"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Sử dụng VNeID để góp ý sửa Hiến pháp là một bước tiến quan trọng trong lộ trình xây dựng Chính phủ số và Quốc hội số - nơi các hoạt động quản lý, điều hành, lập pháp không chỉ được số hóa mà còn gắn chặt với sự tham gia của công dân thông qua nền tảng số. Đây là biểu hiện sinh động của mô hình công dân số - không chỉ sử dụng công nghệ để sống và làm việc, mà còn để thực hiện quyền và nghĩa vụ chính trị của mình một cách chủ động, hiện đại, văn minh và có trách nhiệm."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Với vai trò là nền tảng định danh điện tử quốc gia, VNeID không chỉ phục vụ mục tiêu quản lý dữ liệu công dân, tích hợp giấy tờ hành chính mà còn mở rộng vai trò trong lĩnh vực dân chủ và pháp lý, đặc biệt là trong việc góp ý sửa đổi Hiến pháp. Việc sử dụng VNeID để thực hiện quyền góp ý Hiến pháp thể hiện bước tiến quan trọng trong xây dựng một nền dân chủ hiện đại, minh bạch và hiệu quả. Đây là công cụ giúp người dân thực sự trở thành chủ thể của quá trình xây dựng pháp luật, góp phần tạo ra một bản Hiến pháp phản ánh đúng thực tiễn, đáp ứng nguyện vọng và lợi ích chính đáng của Nhân dân trong thời kỳ chuyển đổi số."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc bổ sung, phát triển tiện ích VNeID về phản ánh ANTT tạo điều kiện thuận lợi cho người dân trong việc gửi phản ánh, kiến nghị đến cơ quan công an một cách nhanh chóng, minh bạch và bảo mật. Nhờ ứng dụng công nghệ số, người dân có thể phản ánh sự việc kèm theo hình ảnh, video, địa điểm chính xác, giúp lực lượng chức năng xử lý kịp thời, hiệu quả."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tiện ích này còn góp phần tăng cường mối quan hệ gắn bó giữa nhân dân và lực lượng công an, phát huy vai trò của người dân trong phong trào toàn dân bảo vệ an ninh Tổ quốc. Thông qua đó, người dân trở thành “tai mắt” tại cơ sở, góp phần phát hiện, ngăn chặn sớm các hành vi vi phạm pháp luật."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngoài ra, việc tích hợp chức năng này vào VNeID giúp giảm tải các thủ tục hành chính, tiết kiệm thời gian, chi phí cho cả người dân và cơ quan chức năng. Đồng thời, dữ liệu thu thập được cũng hỗ trợ công tác nắm tình hình, phân tích, dự báo tình hình ANTT tại địa phương."
                   },
                   {
                       "type":  "heading",
                       "level":  3,
                       "id":  "3-de-xuat-trong-thoi-gian-toi-tu-viec-nghien-cuu-tien-ich-vneid-ve-phan",
                       "text":  "3. Đề xuất trong thời gian tới"
                   },
                    {
                       "type":  "paragraph",
                       "text":  "Từ việc nghiên cứu Tiện ích VNeID về phản ánh ANTT, Nhóm tác giả đề xuất bổ sung, phát triển thêm 8 TÍNH NĂNG về phản ánh ANTT nhằm nâng cao hiệu quả của tiện ích này trong phong trào “Toàn dân bảo vệ an ninh Tổ quốc” để có thể mang lại hiệu quả hơn và giúp người dân thuận tiện hơn phản ánh ANTT."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-1-tai-tien-ich-kien-nghi-phan-anh-ve-an-ninh-trat-tu-bo-sung-m",
                       "text":  "Tính năng 1. Tại tiện ích kiến nghị, phản ánh về an ninh, trật tự, bổ sung mục video hướng dẫn tạo yêu cầu"
                   },
                    {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-90.png",
                       "width":  1023,
                       "height":  552,
                       "alt":  "Bổ sung thêm mục “Video hướng dẫn tạo yêu cầu.",
                       "caption":  "Bổ sung thêm mục “Video hướng dẫn tạo yêu cầu.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Đối với những cá nhân, tổ chức lần đầu sử dụng hoặc chưa thông thạo trong sử dụng tiện ích này sẽ gặp khó khăn trong những lần đầu sử dụng do đó cần Bổ sung video hướng dẫn tạo yêu cầu kiến nghị, phản án về an ninh, trật tự để cá nhân, tổ chức thuận lợi trong việc tạo yêu cầu kiến nghị, phản ánh. Bên cạnh đó việc tạo video hướng dẫn còn giúp người dân thực hiện nhanh chóng, chính xác và đầy đủ các nội dung cần thiết việc này sẽ giúp cho cơ quan chức năng nắm bắt được diễn biến, địa điểm của vụ việc bị phản ánh, từ đó sẽ triển khai lực lượng, phương tiện, biện pháp giải quyết nhanh chóng, kịp thời, góp phần đảm bảo an ninh trật tự trên địa bàn."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-2-tai-muc-thong-tin-nguoi-kien-nghi-thay-muc-an-danh-bang-yeu",
                       "text":  "Tính năng 2. Tại mục Thông tin người kiến nghị thay mục ẩn danh bằng yêu cầu không công khai thông tin cá nhân."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-91.png",
                       "width":  1848,
                       "height":  1103,
                       "alt":  "Thay đổi mục “Ẩn danh””",
                       "caption":  "Thay đổi mục “Ẩn danh” thành “Yêu cầu không công khai thông tin cá nhân”",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Thay đổi mục “Ẩn danh” thành “Yêu cầu không công khai thông tin cá nhân”Thay đổi mục “Ẩn danh” thành “Yêu cầu không công khai thông tin cá nhân”Nhằm ngăn chặn hành vi phá rối, báo tin sai sự thật hoặc những hành vi tiêu cực khác nhằm mục đích gây khó khăn cho cơ quan chức năng, nhóm tác giả kiến nghị cần thay đổi mục “Ẩn danh” thành “Yêu cầu không công khai thông tin cá nhân”. Việc thay đổi này sẽ đảm bảo cho thông tin cá nhân của các cá nhân, tổ chức báo tin được cơ quan chức năng bảo mật tuyệt đối, tránh được sự trả thù, gây rối của những cá nhân, tổ chức bị kiến nghị, phản ánh. Bên cạnh đó cơ quan chức năng cũng sẽ xác định được thông tin cá nhân của các cá nhân, tổ chức báo tin, từ đó sẽ có biện pháp xử lý phù hợp đối với những cá nhân, tổ chức cố tính báo tin sai sự thật nhằm mục đích gây rối, gây khó khăn cho cơ quan chức năng."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-3-tai-noi-dung-hanh-vi-trong-muc-thong-tin-vu-viec-bo-sung-tin",
                       "text":  "Tính năng 3. Tại nội dung “Hành vi” trong mục “Thông tin vụ việc” bổ sung tính năng ghi âm phản ánh về an ninh, trật tự."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-92.png",
                       "width":  1400,
                       "height":  788,
                       "alt":  "Bổ sung tính năng ghi âm",
                       "caption":  "Bổ sung tính năng ghi âm.",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Trong nội dung “Hành vi” hầu hết là các tội trong Bộ Luật hình sự hiện hành và việc người dân xác định chính xác đó là tội nào là rất khó khăn đối với những người chưa am hiểu về luật và việc tìm kiếm “Hành vi” đúng với diễn biến khách quan của diễn biến sự việc ngoài thực tế là rất khó khăn và mất thời gian từ đó sẽ làm giảm hiệu quả trong giải quyết của cơ quan chức năng đối với những vụ việc cấp bách cần phải giải quyết ngay. Vì vậy việc Bổ sung tính năng ghi âm sẽ giúp người dân mô tả đầy đủ, nhanh chóng các tình tiết của vụ việc và những vấn đề có liên quan khác giúp cơ quan chức năng nhận định được tính huống cần phải giải quyết từ đó sẽ thuận lợi trong triển khai lực lượng, phương tiện, biện pháp"
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-4-tai-muc-dia-diem-xay-ra-vu-viec-bo-sung-tinh-nang-chia-se-vi",
                       "text":  "Tính năng 4. Tại mục địa điểm xảy ra vụ việc, bổ sung tính năng Chia sẻ vị trí để xác định chính xác vị trí vụ việc về an ninh, trật tự xảy ra và bỏ mục không rõ địa điểm xảy ra vụ việc."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-93.png",
                       "width":  6000,
                       "height":  3375,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc thay đổi trên sẽ giúp xác định được vị trí chính xác của vụ việc xảy ra và thao tác nhanh chóng và dễ dàng. Ngoài việc chia sẻ vị trí thì các cá nhân, tổ chức kiến nghị, phản ánh cũng có thể chọn vị trí cụ thể trên bản đồ nếu chưa xác định được địa chỉ cụ thể của vụ việc đã, đang xảy ra."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-5-tai-muc-tang-vat-tai-lieu-lien-quan-hinh-anh-bo-sung-tinh-na",
                       "text":  "Tính năng 5. Tại mục tang vật, tài liệu liên quan (hình ảnh) bổ sung tính năng gửi video vụ việc về an ninh, trật tự."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Ngoài việc gửi hình ảnh cần bổ sung thêm mục gửi video để chủ thể kiến nghị, phản ánh gửi video nội dung, tang vật, tài liệu có liên quan việc này sẽ giúp cơ quan chức năng nắm bắt được chính xác, đầy đủ diễn biến của vụ việc"
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-94.png",
                       "width":  1961,
                       "height":  1103,
                       "alt":  "",
                       "caption":  "",
                       "note":  null
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-6-tai-muc-gui-yeu-cau-bo-sung-quy-dinh-khen-thuong-doi-voi-kie",
                       "text":  "Tính năng 6. Tại mục gửi yêu cầu, bổ sung quy định khen thưởng đối với kiến nghị, phản ánh"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Cần bổ sung quy định khen thưởng đối với những kiế n nghị, phản ánh đúng sự thật và nhanh nhất góp phần đảm bảo an ninh, trật tự trên địa bàn, việc này sẽ khích lệ người dân, tổ chức trong kiến nghị, phản ánh về an ninh, trật tự. Căn cứ vào Quyết định 04/2019/QĐ-TTg ngày 22/1/2019 của Thủ tướng Chính phủ về việc thành lập, quản lý và sử dụng Quỹ phòng, chống tội phạm Nhóm tác giả đề xuất các hình thức và mức khen thưởng cụ thể như sau:"
                   },

                    {
                        "type": "paragraph",
                        "text": "- Tặng Bằng khen, Giấy khen."
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Tặng Giấy khen của UBND và Công an Xã đối với những kiến nghị, phản ánh về tội phạm ít nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Tặng Bằng khen của UBND tỉnh và Giấy khen của Công an Tỉnh đối với những kiến nghị, phản ánh về tội phạm nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Tặng Bằng khen của Bộ Công an đối với những kiến nghị, phản ánh về tội phạm rất nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Tặng Bằng khen của Thủ tướng đối với những kiến nghị, phản ánh về tội phạm đặc biệt nghiêm trọng."
                    },
                    {
                        "type": "paragraph",
                        "text": "- Tặng tiền thưởng"
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Đối với cá nhân"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 5 triệu đồng đối với những kiến nghị, phản ánh về tội phạm đặc biệt nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 4 triệu đồng đối với những kiến nghị, phản ánh về tội phạm rất nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 3 triệu đồng đối với những kiến nghị, phản ánh về tội phạm nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 2 triệu đồng đối với những kiến nghị, phản ánh về tội phạm ít nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Đối với Tập thể"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 20 triệu đồng đối với những kiến nghị, phản ánh về tội phạm đặc biệt nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 15 triệu đồng đối với những kiến nghị, phản ánh về tội phạm rất nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 10 triệu đồng đối với những kiến nghị, phản ánh về tội phạm nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "* Tặng 5 triệu đồng đối với những kiến nghị, phản ánh về tội phạm ít nghiêm trọng"
                    },
                    {
                        "type": "paragraph",
                        "text": "- Tặng danh hiệu “Công dân gương mẫu”. Đối với những cá nhân, tổ chức đạt được các danh hiệu Công dân gương mẫu để ưu tiên trong giải quyết các hoạt động hành chính."
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Hạng vàng: Đối với những cá nhân, tổ chức có 5 kiến nghị, phản ánh về an ninh trật tự"
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Hạng bạc: Đối với những cá nhân, tổ chức có 4 kiến nghị, phản ánh về an ninh trật tự"
                    },
                    {
                        "type": "paragraph",
                        "text": "+ Hạng đồng: Đối với những cá nhân, tổ chức có 3 kiến nghị, phản ánh về an ninh trật tự"
                    },



                  
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-95.png",
                       "width":  1434,
                       "height":  752,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                  
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-7-bo-sung-tinh-nang-tien-do-giai-quyet-yeu-cau-kien-nghi-phan",
                       "text":  "Tính năng 7. Bổ sung tính năng “Tiến độ giải quyết yêu cầu kiến nghị, phản ánh về an ninh, trật tự” (Đã tiếp nhận =\u003e Đang xử lý =\u003e Hoàn tất)."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhằm tạo điều kiện cho chủ thể kiến nghị, phản ánh theo dõi được quá trình, tiến độ giải quyết của cơ quan chức năng."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-96.png",
                       "width":  1917,
                       "height":  1078,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  null,
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   },
                   {
                       "type":  "heading",
                       "level":  4,
                       "id":  "tinh-nang-8-bo-sung-tinh-nang-thong-bao-cua-co-quan-chuc-nang-voi-ca-nha",
                       "text":  "Tính năng 8. Bổ sung tính năng Thông báo của cơ quan chức năng với cá nhân, tổ chức kiến nghị, phản ánh về an ninh, trật tự (Mức điểm cộng, tiền thưởng, giấy khen, những vấn đề cần chú ý,…)"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Việc bổ sung này giúp cho cá nhân, tổ chức gửi kiến nghị, phản ảnh nắm được mức khen thưởng và những vấn đề cần chú ý, cải thiện trong những lần gửi kiến nghị, phản ánh sau."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-97.png",
                       "width":  2357,
                       "height":  1326,
                       "alt":  "",
                       "caption":  "",
                       "note":  null
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Tóm lại, tiện ích phản ánh, kiến nghị về ANTT trên VNeID không chỉ là công cụ hỗ trợ hiện đại, mà còn là minh chứng cho việc ứng dụng chuyển đổi số vào công tác đảm bảo ANTT, góp phần xây dựng xã hội an toàn, văn minh, phát huy hiệu quả vai trò của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia, trật tự an toàn xã hội và thời gian tới được bổ sung, hoàn thiện sẽ là một ứng dụng hiệu quả, tạo nên thế trận an ninh nhân dân trên không gian mạng góp phần hữu hiệu bảo vệ an ninh quốc gia ở nuớc ta hiện nay."
                   },
                   {
                       "type":  "heading",
                       "level":  2,
                       "id":  "ket-luan",
                       "text":  "KẾT LUẬN"
                   },
                   {
                       "type":  "paragraph",
                       "text":  "80 năm vừa chiến đấu, vừa xây dựng và phát triển, mặc dù trải qua các giai đoạn lịch sử với tổ chức, bộ máy, tên gọi khác nhau, tuy nhiên chức năng, nhiệm vụ của lực lượng An ninh nhân dân không thay đổi. Các thế hệ cán bộ, chiến sĩ An ninh nhân dân luôn giữ vững phẩm chất cách mạng: Tuyệt đối trung thành với Tổ quốc, với Đảng, Nhà nước và Nhân dân; suốt đời phấn đấu, hy sinh vì độc lập, tự do, chủ quyền và toàn vẹn lãnh thổ, vì an ninh Tổ quốc; vì Nhân dân phục vụ, dựa vào Nhân dân để công tác và chiến đấu thắng lợi; có bản lĩnh chính trị vững vàng, mưu trí, dũng cảm trong đấu tranh chống tội phạm, giữ gìn an ninh, trật tự, tận trung trong công tác; đoàn kết, thống nhất, dân chủ, kỷ luật nghiêm minh, chủ động phối hợp chặt chẽ với các cấp, các ngành, các lực lượng, hoàn thành xuất sắc mọi nhiệm vụ; không ngừng học tập nâng cao trình độ chính trị, nghiệp vụ, năng lực công tác; tiếp thu, vận dụng sáng tạo, hiệu quả thành tựu khoa học, kỹ thuật và công nghệ phục vụ công tác, chiến đấu; nêu cao tinh thần doàn kết quốc tế."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Hàng ngàn gương điển hình tiên tiến của cá nhân và tập thể ở mọi lĩnh vực công tác, ở cơ quan Bộ cũng như địa phương được nhân rộng thành phong trào thi đua thiết thực. Đặc biệt là việc nghiên cứu, thấm nhuần sâu sắc và làm theo Sáu điều Bác Hồ dạy Công an nhân dân đã trở thành phong trảo có sức sống lâu bền nhất, thiết thực nhất trong lực lượng An ninh nhân dân."
                   },
                   {
                       "type":  "paragraph",
                       "text":  "Nhiệm vụ bảo đảm an ninh quốc gia trong KỶ NGUYÊN MỚI của đất nước, trách nhiệm của lực lượng An ninh nhân dân rất nặng nề nhưng vô cùng vinh quang. Với truyền thống 80 năm xây dựng, chiến đấu, trưởng thành, với quyết tâm, bản lĩnh, trách nhiệm, ý chí, toàn lực lượng An ninh sẽ tận trung với Đảng, bảo vệ Đảng, bảo vệ chế độ xã hội chủ nghĩa, bảo vệ nhân dân, cùng các lực lượng khác cung cấp sự bảo đảm vững chắc thực hiện thắng lợi Nghị quyết Đại hội XIV và các chủ trương chiến lược của Đảng trong kỷ nguyên phát triển mới của đất nước."
                   },
                   {
                       "type":  "image",
                       "src":  "/images/chuyen-de-80-nam-annd/chuyen-de-98.jpg",
                       "width":  787,
                       "height":  473,
                       "alt":  "Ảnh trong chuyên đề 80 năm An ninh nhân dân",
                       "caption":  "Khối nam Sỹ quan An ninh nhân dân",
                       "note":  "DOCX đặt ảnh cùng đoạn hoặc không có caption tách biệt; kiểm tra lại vị trí/caption nếu cần."
                   }
               ]
};

