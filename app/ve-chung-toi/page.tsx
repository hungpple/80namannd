import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Giới thiệu Nhóm tác giả Lá Chắn Bình Yên và Lời ngỏ tham gia Cuộc thi tìm hiểu truyền thống 80 năm lực lượng An ninh nhân dân.",
};

const quote = {
  author: "Đồng chí TÔ LÂM",
  roles: [
    "Tổng Bí thư Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam",
    "Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam",
  ],
  text: "Đất nước ta đang đứng trước vận hội mới, vừa là thời cơ đồng thời cũng là thách thức trên con đường phát triển. Dưới sự lãnh đạo của Đảng, với sự đồng lòng, chung sức của toàn Đảng, toàn dân và cả hệ thống chính trị, chúng ta nhất định sẽ thực hiện thành công cuộc cách mạng chuyển đổi số, tạo ra bước đột phá trong phát triển lực lượng sản xuất và hoàn thiện quan hệ sản xuất, đưa đất nước ta, dân tộc ta vươn mình vượt bậc trong kỷ nguyên mới, kỷ nguyên của tiên tiến, văn minh, hiện đại.",
};

const poemLines = [
  "Tám mươi năm, một hành trình rực lửa,",
  "Dưới cờ Đảng, vững bước giữa gian nan.",
  "Từ buổi đầu trong bóng tối nguy nan,",
  "Gieo hạt giống, giữ non sông độc lập.",
  "",
  "Vụ Ôn Như Hầu, mưu sâu bị vạch trần,",
  "Bao tay sai ẩn mình trong bóng tối.",
  "Bằng trí dũng, phá tan từng lớp ngụy,",
  "Giữ Thủ đô yên giữa buổi đầu xuân.",
  "",
  "Lặng thầm bước, không cần ánh hào quang,",
  "Giữa lòng dân, hóa muôn vàn dáng hình.",
  "Tai mắt rộng, giữ thế trận An ninh,",
  "Trong im lặng, làm nên điều phi thường.",
  "",
  "Từ phố thị đến biên cương hải đảo,",
  "Dấu chân in trên mọi nẻo quê hương.",
  "Đêm không ngủ, ngày chẳng quản phong sương,",
  "Giữ bình yên bằng trái tim thép lửa.",
  "",
  "Bao chuyên án, trận tuyến không tiếng súng,",
  "Trí làm gươm, bản lĩnh hóa khiên đồng.",
  "Đối mặt hiểm nguy, không một lần chùn bước,",
  "Vì Tổ quốc, sẵn sàng hiến trọn đời mình.",
  "",
  "Có những người đi mà không trở lại,",
  "Tên không ghi giữa ánh sáng vinh quang.",
  "Nhưng đất nước khắc sâu từng dáng đứng,",
  "Máu các anh nhuộm thắm lá cờ hồng.",
  "",
  "Kỷ nguyên mới, vận hội cùng thách thức,",
  "Biên giới số mở rộng giữa không gian.",
  "An ninh mạng trở thành mặt trận mới,",
  "Đòi trí tuệ, bản lĩnh và tầm nhìn.",
  "",
  "Giữ truyền thống trung thành và tận tụy,",
  "Vững niềm tin theo Đảng, với Nhân dân.",
  "Dẫu thời gian có đổi thay muôn phần,",
  "Lời thề ấy vẫn vẹn nguyên son sắt.",
  "",
  "Là lá chắn giữa muôn trùng biến động,",
  "Là thanh gươm bảo vệ Đảng, bảo vệ dân.",
  "Tám mươi năm tiếp bước những mùa xuân,",
  "An ninh nhân dân sáng mãi bản hùng ca.",
];

const letterParagraphs = [
  "Trước tiên, chúng tôi xin trân trọng bày tỏ lòng cảm ơn sâu sắc tới Ban Tổ chức đã phát động Cuộc thi viết “Tìm hiểu truyền thống 80 năm xây dựng, chiến đấu và trưởng thành của lực lượng An ninh nhân dân” - một hoạt động có ý nghĩa chính trị, lịch sử sâu sắc. Cuộc thi không chỉ là dịp kỷ niệm chặng đường 80 năm vẻ vang của lực lượng An ninh nhân dân, mà còn tạo điều kiện để chúng tôi ôn lại, nhận thức sâu sắc hơn về những chiến công, đóng góp to lớn và những giá trị truyền thống cao đẹp của lực lượng qua các thời kỳ. Qua đó, góp phần bồi đắp niềm tự hào, củng cố bản lĩnh chính trị, đồng thời nâng cao ý thức trách nhiệm của mỗi cá nhân trong sự nghiệp bảo vệ an ninh quốc gia, giữ vững ổn định chính trị và trật tự, an toàn xã hội trong tình hình mới.",
  "Sự kiện này có ý nghĩa đặc biệt sâu sắc trong bối cảnh toàn Đảng, toàn dân và toàn quân ta đang hướng tới kỷ niệm 80 năm xây dựng, chiến đấu và trưởng thành của lực lượng An ninh nhân dân - lực lượng nòng cốt trên mặt trận bảo vệ an ninh quốc gia. Trải qua 80 năm đầy thử thách và vinh quang, dưới sự lãnh đạo của Đảng, các thế hệ cán bộ, chiến sĩ An ninh đã không quản hy sinh, thầm lặng cống hiến, lập nên nhiều chiến công đặc biệt xuất sắc, góp phần giữ vững ổn định chính trị, bảo vệ Đảng, Nhà nước và cuộc sống bình yên của Nhân dân. Những cống hiến to lớn ấy đã hun đúc nên truyền thống vẻ vang: tuyệt đối trung thành, mưu trí, dũng cảm, kiên quyết, khôn khéo trong đấu tranh, không khoan nhượng với mọi âm mưu, hoạt động xâm phạm an ninh quốc gia.",
  "Chúng tôi đặc biệt trân trọng và đánh giá cao sự tâm huyết, trách nhiệm của Ban Tổ chức trong việc xây dựng nội dung và triển khai cuộc thi một cách bài bản, khoa học. Hệ thống câu hỏi và các nội dung dự thi không chỉ giúp người tham gia nâng cao hiểu biết về lịch sử, truyền thống 80 năm xây dựng, chiến đấu và trưởng thành của lực lượng An ninh nhân dân, mà còn góp phần khơi dậy niềm tự hào, bồi đắp lý tưởng và ý thức trách nhiệm trong sự nghiệp bảo vệ an ninh quốc gia, giữ vững ổn định chính trị và trật tự, an toàn xã hội.",
  "Chúng tôi gồm 05 thành viên là giảng viên, học viên Trường Đại học An ninh nhân dân tham gia cuộc thi, đặt tên nhóm là LÁ CHẮN BÌNH YÊN.",
  "Giữa hành trình 80 năm xây dựng, chiến đấu và trưởng thành đầy tự hào của lực lượng An ninh nhân dân, chúng tôi lựa chọn tên nhóm “LÁ CHẮN BÌNH YÊN” như một cách gửi gắm niềm tin, sự trân trọng và nhận thức sâu sắc về vai trò, sứ mệnh thiêng liêng của lực lượng trên mặt trận bảo vệ an ninh quốc gia.",
  "“LÁ CHẮN” là hình ảnh biểu trưng cho sự kiên cường, vững chắc, luôn ở tuyến đầu, sẵn sàng đương đầu và ngăn chặn mọi âm mưu, hoạt động xâm phạm an ninh quốc gia. Ngay từ những ngày đầu đất nước vừa giành được độc lập, trong bối cảnh chính quyền cách mạng còn non trẻ, lực lượng An ninh nhân dân đã nhanh chóng khẳng định vai trò nòng cốt, trở thành “lá chắn thép” bảo vệ Đảng, Nhà nước và thành quả cách mạng. Trải qua các giai đoạn lịch sử đầy cam go như kháng chiến chống thực dân Pháp, kháng chiến chống Mỹ, cứu nước và thời kỳ xây dựng, bảo vệ Tổ quốc, lực lượng luôn đi đầu trong đấu tranh phản gián, phòng chống các thế lực thù địch, giữ vững ổn định chính trị.",
  "“BÌNH YÊN” là mục tiêu cao nhất mà lực lượng An ninh nhân dân hướng tới - đó là sự ổn định, an toàn của đất nước và cuộc sống yên bình của Nhân dân. Đằng sau hai chữ “bình yên” là biết bao chiến công thầm lặng nhưng có ý nghĩa đặc biệt quan trọng: phá nhiều chuyên án gián điệp, phản động; bảo vệ tuyệt đối an toàn các sự kiện chính trị quan trọng; chủ động đấu tranh làm thất bại các chiến lược “diễn biến hòa bình”; đồng thời không ngừng mở rộng sang các lĩnh vực mới như an ninh mạng, an ninh kinh tế trong bối cảnh hội nhập và chuyển đổi số.",
  "Sự kết hợp giữa “LÁ CHẮN” và “BÌNH YÊN” không chỉ khắc họa rõ nét bản lĩnh, trí tuệ và tinh thần tận tụy của lực lượng An ninh nhân dân, mà còn là sự kết tinh của những giá trị truyền thống cao đẹp: tuyệt đối trung thành với Đảng, Tổ quốc và Nhân dân; mưu trí, dũng cảm trong đấu tranh; gắn bó máu thịt với Nhân dân; đoàn kết, kỷ luật và trách nhiệm cao. Đó cũng chính là nền tảng để lực lượng không ngừng đổi mới, vững bước trong kỷ nguyên mới, đáp ứng yêu cầu ngày càng cao của sự nghiệp bảo vệ an ninh quốc gia.",
  "Với tên gọi “LÁ CHẮN BÌNH YÊN”, chúng tôi không chỉ thể hiện sự tri ân đối với những hy sinh, cống hiến thầm lặng của các thế hệ đi trước, mà còn khẳng định trách nhiệm của thế hệ hôm nay trong việc tiếp nối và phát huy truyền thống vẻ vang ấy. Đó là lời nhắc nhở về lý tưởng, là động lực để mỗi chúng tôi không ngừng học tập, rèn luyện, sẵn sàng góp sức mình vào sự nghiệp giữ vững bình yên cho Tổ quốc.",
  "ĐẶC BIỆT, để lan tỏa về ý nghĩa, tầm vóc sự hình thành, phát triển của lực lượng An ninh nhân dân và các chiến công thầm lặng giữ gìn sự bình yên cho đất nước, sự vững mạnh của chế độ, của Nhà nước, Nhóm “LÁ CHẮN BÌNH YÊN” đã xây dựng được 02 sản phẩm số: Chatbot “80 Chiến công An ninh nhân dân” và Website “80 năm Ngày Truyền thống lực lượng An ninh nhân dân” để tuyên truyền, lan tỏa hình ảnh người chiến sĩ An ninh nhân dân trên không gian mạng với mong muốn đóng thêm những dấu ấn nhỏ bé nhằm phát huy truyền thống anh hùng, tự hào và sự quyết tâm học tập, đổi mới, sáng tạo của thế hệ trẻ với các thế hệ chiến sĩ đi trước đã gây dựng sự nghiệp bảo vệ đất nước.",
  "Tham gia Cuộc thi viết “Tìm hiểu truyền thống 80 năm xây dựng, chiến đấu và trưởng thành của lực lượng An ninh nhân dân” với tư cách là những giảng viên, học viên Trường Đại học An ninh nhân dân, mang trong mình tên gọi “LÁ CHẮN BÌNH YÊN”, chúng tôi càng thấm thía sâu sắc giá trị của hai tiếng “BÌNH YÊN” - thành quả được đánh đổi bằng biết bao hy sinh, cống hiến của các thế hệ cán bộ, chiến sĩ An ninh nhân dân.",
  "Với tất cả lòng biết ơn và sự tri ân sâu sắc, chúng tôi xin hứa sẽ tiếp bước truyền thống vẻ vang ấy, không ngừng nỗ lực học tập, rèn luyện, nâng cao bản lĩnh chính trị, trình độ chuyên môn và ý thức trách nhiệm. Mỗi thành viên của “LÁ CHẮN BÌNH YÊN” luôn ý thức rõ rằng: giữ gìn bình yên cho Tổ quốc không chỉ là vinh dự mà còn là sứ mệnh thiêng liêng của thế hệ hôm nay và mai sau. Những kiến thức, bài học quý báu từ Cuộc thi sẽ trở thành hành trang quan trọng, giúp chúng tôi vận dụng vào thực tiễn công tác, góp phần xây dựng “LÁ CHẮN” ngày càng vững chắc hơn, chủ động bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội trong kỷ nguyên mới. Qua đó, chúng tôi nguyện góp sức nhỏ bé của mình để tiếp tục viết nên những trang sử vẻ vang, gìn giữ vững bền hai chữ BÌNH YÊN cho đất nước.",
  "Một lần nữa, chúng tôi xin chân thành cảm ơn Ban Tổ chức và tất cả những người đã hỗ trợ và góp phần vào sự thành công của Cuộc thi. Cuộc thi này sẽ là động lực để tổ chức nhiều hoạt động ý nghĩa hơn nữa trong tương lai, góp phần xây dựng và củng cố lòng yêu nước, tinh thần trách nhiệm và sự gắn bó của toàn dân trong sự nghiệp bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội.",
];

const answerParts = [
  {
    title:
      "Phần thứ nhất. Ngày truyền thống lực lượng An ninh nhân dân - ý nghĩa lịch sử và những phần thưởng cao quý mà Đảng, Nhà nước trao tặng",
    description:
      "Đây là nội dung trả lời cho Câu hỏi số 1. Ngày truyền thống lực lượng An ninh nhân dân được xác định là ngày, tháng, năm nào? Ý nghĩa của việc xác định Ngày truyền thống lực lượng An ninh nhân dân? Những danh hiệu, phần thưởng cao quý mà Đảng, Nhà nước đã tặng thưởng cho lực lượng An ninh nhân dân?",
  },
  {
    title:
      "Phần thứ hai. Lực lượng An ninh nhân dân - những chiến công vẻ vang và dấu ấn trong sự nghiệp bảo vệ an ninh Tổ quốc",
    description:
      "Đây là nội dung trả lời cho Câu hỏi số 2. Hãy lựa chọn và tóm tắt những chiến công, thành tích tiêu biểu ở mỗi thời kỳ cách mạng của lực lượng An ninh nhân dân (1946 - 2026)? Cảm nhận của đồng chí về một chiến công, thành tích xuất sắc nhất của lực lượng An ninh nhân dân (tập thể hoặc cá nhân) trong sự nghiệp bảo vệ an ninh Tổ quốc?",
  },
  {
    title:
      "Phần thứ ba. Nhân dân với sự nghiệp bảo vệ an ninh quốc gia trong tình hình mới",
    description:
      "Đây là nội dung trả lời cho Câu hỏi số 3. Trách nhiệm, nghĩa vụ và quyền lợi của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia hiện nay? Đồng chí có đề xuất, kiến nghị gì để phát huy vai trò của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia trong bối cảnh mới và liên hệ với trách nhiệm của bản thân?",
  },
];

const appendices = [
  "PHỤ LỤC 80 chiến công của lực lượng An ninh nhân dân",
  "PHỤ LỤC Kế hoạch CM12 - Chiến thắng đỉnh cao của nghệ thuật phản gián",
  "SỔ GHI CẢM TƯỞNG của 80 học viên về các chiến công tiêu biểu của lực lượng An ninh nhân dân phát hiện, đấu tranh và xử lý.",
  "SỔ GHI CẢM TƯỞNG của 80 học viên về những mô hình, ý tưởng phát huy vai trò của Nhân dân trong sự nghiệp bảo vệ an ninh quốc gia.",
];

const digitalProducts = [
  "Chatbot “80 Chiến công An ninh nhân dân” là một sản phẩm ứng dụng công nghệ số, được xây dựng trên nền tảng nhóm tác giả lựa chọn 80 chiến công tiêu biểu của lực lượng An ninh nhân dân nhằm tái hiện sinh động chặng đường vẻ vang của lực lượng An ninh nhân dân Việt Nam. Thông qua giao diện thân thiện, nội dung được số hóa và hệ thống hóa khoa học, Chatbot giúp người dùng dễ dàng tra cứu, tìm hiểu các chiến công tiêu biểu gắn với từng giai đoạn lịch sử, từ những năm tháng đấu tranh giành độc lập đến thời kỳ bảo vệ an ninh quốc gia trong bối cảnh hội nhập. Không chỉ cung cấp thông tin, Chatbot còn góp phần lan tỏa giá trị truyền thống, hun đúc niềm tự hào, tinh thần trách nhiệm và ý thức bảo vệ Tổ quốc trong mỗi người dùng, đặc biệt là thế hệ trẻ trong lực lượng Công an nhân dân nói chung và lực lượng An ninh nhân dân nói riêng.",
  "Website “80 năm Ngày Truyền thống lực lượng An ninh nhân dân” được xây dựng như một không gian số tái hiện toàn diện hành trình vẻ vang của lực lượng An ninh nhân dân Việt Nam suốt 80 năm xây dựng, chiến đấu và trưởng thành. Với thiết kế hiện đại, giao diện thân thiện, website tích hợp nhiều chuyên mục nổi bật cùng hệ thống tra cứu thông tin thông minh, giúp người dùng dễ dàng tiếp cận và khám phá các dấu mốc quan trọng của lực lượng An ninh qua từng giai đoạn. Không chỉ là nơi lưu giữ và lan tỏa giá trị truyền thống, website còn ứng dụng công nghệ số để nâng cao tính tương tác, cho phép người dùng trải nghiệm nội dung một cách trực quan, sinh động. Qua đó, góp phần khơi dậy niềm tự hào, bồi đắp lý tưởng cách mạng và nâng cao ý thức trách nhiệm trong sự nghiệp bảo vệ an ninh quốc gia, đặc biệt đối với thế hệ trẻ trong lực lượng Công an nhân dân nói chung và lực lượng An ninh nói riêng. Đây cũng là minh chứng cho sự đổi mới, hiện đại hóa công tác tuyên truyền, giáo dục truyền thống trong thời đại chuyển đổi số.",
];

type AuthorImage = {
  src: string;
  alt: string;
  style?: CSSProperties;
};

const authorRows: AuthorImage[][] = [
  [
    {
      src: "/images/ve-chung-toi/tac-gia-1.png",
      alt: "Tác giả 1",
      style: {
        transform: "translateY(-2%) scale(1.14)",
        transformOrigin: "center center",
      },
    },
    {
      src: "/images/ve-chung-toi/tac-gia-2.png",
      alt: "Tác giả 2",
    },
  ],
  [
    {
      src: "/images/ve-chung-toi/tac-gia-3.png",
      alt: "Tác giả 3",
    },
    {
      src: "/images/ve-chung-toi/tac-gia-4.png",
      alt: "Tác giả 4",
    },
    {
      src: "/images/ve-chung-toi/tac-gia-5.png",
      alt: "Tác giả 5",
      style: {
        transform: "translateY(3.25%)",
      },
    },
  ],
];

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <p key={item} className="text-justify text-base leading-8 text-zinc-800">
          {item}
        </p>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#fffdf8]">
      <section className="flex h-[calc(100svh-56px)] overflow-hidden bg-red-950 px-4 py-4 sm:px-6 sm:py-5 lg:h-[calc(100svh-64px)] lg:px-8 lg:py-6">
        <div className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col items-center justify-center gap-3 sm:gap-4 lg:gap-5">
          <Image
            src="/images/ve-chung-toi/ten-nhom.png"
            alt="Tên nhóm Lá Chắn Bình Yên"
            width={1676}
            height={314}
            className="h-auto max-h-[clamp(52px,13svh,132px)] w-full max-w-4xl shrink-0 object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
            priority
          />

          <div className="grid min-h-0 w-full flex-1 grid-rows-2 gap-3 sm:gap-4 lg:gap-5">
            {authorRows.map((row, rowIndex) => (
              <div
                key={`author-row-${rowIndex}`}
                className={[
                  "mx-auto grid min-h-0 w-full items-center justify-center gap-3 sm:gap-4 lg:gap-5",
                  row.length === 2
                    ? "max-w-4xl grid-cols-2 px-[6%] sm:px-[10%]"
                    : "max-w-6xl grid-cols-3",
                ].join(" ")}
              >
                {row.map((author) => (
                  <div
                    key={author.src}
                    className="flex h-full min-h-0 items-center justify-center"
                  >
                    <Image
                      src={author.src}
                      alt={author.alt}
                      width={6157}
                      height={6250}
                      className="max-h-full w-auto max-w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.34)]"
                      priority={rowIndex === 0}
                      style={author.style}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <header className="border-b border-red-200 pb-8 text-center">
            {/* <p className="text-sm font-bold uppercase text-red-800">
              Về chúng tôi
            </p> */}
            <h1 className="mt-3 text-4xl font-black leading-tight text-red-950 md:text-5xl">
              Lời ngỏ
            </h1>
            {/* <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-650">
              Nhóm tác giả Lá Chắn Bình Yên tham gia Cuộc thi viết “Tìm hiểu
              truyền thống 80 năm xây dựng, chiến đấu và trưởng thành của lực
              lượng An ninh nhân dân”.
            </p> */}
          </header>

          <div className="mt-10 space-y-10">
            <blockquote className="rounded-lg border-l-4 border-red-800 bg-red-50 px-6 py-6">
              <p className="font-serif text-xl font-bold leading-9 text-red-950">
                “{quote.text}”
              </p>
              <footer className="mt-5 text-sm leading-7 text-zinc-700">
                <p className="font-bold uppercase text-red-900">
                  {quote.author}
                </p>
                {quote.roles.map((role) => (
                  <p key={role}>{role}</p>
                ))}
              </footer>
            </blockquote>

            <section className="rounded-lg border border-yellow-200 bg-yellow-50 px-6 py-8 text-center">
              <h2 className="font-serif text-2xl font-black leading-tight text-red-950">
                80 năm - viết tiếp bản hùng ca tiến vào kỷ nguyên mới
              </h2>
              <div className="mt-6 space-y-1 text-base font-medium leading-8 text-zinc-800">
                {poemLines.map((line, index) =>
                  line ? (
                    <p key={`${line}-${index}`}>{line}</p>
                  ) : (
                    <div key={`space-${index}`} className="h-3" />
                  ),
                )}
              </div>
              <p className="mt-6 font-semibold text-red-900">Nhóm tác giả</p>
            </section>

            <section className="space-y-6">
              <p className="text-center text-base font-bold leading-8 text-red-950">
                Kính gửi: Ban Tổ chức Cuộc thi viết “Tìm hiểu truyền thống 80
                năm xây dựng, chiến đấu và trưởng thành của lực lượng An ninh
                nhân dân”
              </p>
              <Paragraphs items={letterParagraphs.slice(0, 9)} />
            </section>

            <section className="rounded-lg border border-red-100 bg-white px-6 py-8 shadow-sm">
              <h2 className="font-serif text-2xl font-black text-red-950">
                Cấu trúc bài dự thi
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-800">
                Nhóm LÁ CHẮN BÌNH YÊN tham gia trả lời 03 câu hỏi của Cuộc thi
                đã biên tập thành 01 tập - 200 trang - gồm 03 phần:
              </p>
              <div className="mt-6 space-y-6">
                {answerParts.map((part, index) => (
                  <div key={part.title} className="border-t border-red-100 pt-5">
                    <p className="text-sm font-black uppercase text-red-800">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-7 text-zinc-950">
                      {part.title}
                    </h3>
                    <p className="mt-2 text-base leading-8 text-zinc-700">
                      {part.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-red-100 bg-white px-6 py-8 shadow-sm">
              <h2 className="font-serif text-2xl font-black text-red-950">
                Nội dung kèm theo
              </h2>
              <ul className="mt-5 space-y-3">
                {appendices.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-yellow-500 pl-4 text-base leading-8 text-zinc-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-5">
              <Paragraphs items={[letterParagraphs[9]]} />
              <div className="space-y-4">
                {digitalProducts.map((item) => (
                  <p
                    key={item}
                    className="rounded-lg border border-yellow-200 bg-yellow-50 px-5 py-5 text-justify text-base leading-8 text-zinc-800"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <Paragraphs items={letterParagraphs.slice(10)} />
              <p className="text-right text-base font-bold text-red-950">
                Xin trân trọng cảm ơn!
              </p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}
