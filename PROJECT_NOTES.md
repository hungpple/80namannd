# PROJECT_NOTES

Tài liệu này dùng để Codex đọc lại khi context window bị đầy, giúp tiếp tục làm việc trên project mà không phải hỏi lại nhiều.

## Tổng quan

Project là website Next.js App Router + TypeScript + TailwindCSS cho chuyên đề truyền thống, thành tựu lực lượng An ninh nhân dân/Công an nhân dân Việt Nam.

Mục tiêu giao diện:

- Trang trọng, chính thống, đỏ - vàng - trắng.
- Không copy source code, ảnh, logo, dữ liệu từ website tham khảo.
- Chỉ dùng asset local trong `public/images`.
- Nội dung nhiều chỗ vẫn là placeholder để người dùng thay sau.

Project root:

```txt
D:\JSONFolder\Master of Software Engineering\Study\80namANND\80-nam-annd
```

## Công nghệ

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript
- TailwindCSS v4 qua `@import "tailwindcss";`
- App Router trong thư mục `app/`

Chạy lệnh trên Windows PowerShell nên dùng `npm.cmd` vì `npm.ps1` có thể bị chặn execution policy.

```bash
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

`next build` thường cần chạy ngoài sandbox do Next spawn worker TypeScript, nếu trong sandbox có thể lỗi `spawn EPERM`.

## Routes

```txt
/
/chang-duong-lich-su
/chien-cong-noi-bat
/ve-chung-toi
/chatbot-ai
```

Root layout:

- `app/layout.tsx`
- Luôn render `Navbar`, `children`, `Footer`.

Trang chủ:

- `app/page.tsx`
- Gồm:
  - `HeroSection`
  - `HomeHistoryTimeline`
  - Section preview “Chiến công nổi bật”
  - Section preview “Chatbot AI”
- `CTASection` đã được tạm disable khỏi trang chủ. Component vẫn còn trong `components/CTASection.tsx`.

## Assets quan trọng

Các asset được giả định nằm trong `public/images`.

Navbar/footer:

```txt
public/images/Vietnam_People's_Public_Security_Emblem.png
public/images/trong-dong.svg
```

Hero:

```txt
public/images/hero/hero-1.jpg
public/images/hero/hero-2.jpg
public/images/hero/hero-3.jpg
public/images/hero/logo-hero.png
```

History home timeline:

```txt
public/images/history/gd1.png
public/images/history/gd2.png
public/images/history/gd3.png
```

Nếu ảnh bị xóa nhưng vẫn thấy trên web, thường là do browser/Next cache. Hard refresh `Ctrl + F5`, DevTools `Disable cache`, hoặc restart dev server.

## Global CSS

File: `app/globals.css`

Font:

- Body/UI: `Be Vietnam Pro`, fallback `Noto Sans`, `Segoe UI`, `Arial`.
- Heading/serif: `Noto Serif`, fallback `Be Vietnam Pro`, `Times New Roman`.
- Tailwind `font-sans` và `font-serif` đã được map qua CSS variables.

Nền trống đồng:

- Class `.dong-son-bg`
- Dùng cho navbar các trang con, mobile panel trang con, footer.
- Không dùng cho navbar trang chủ.
- Background chính:

```css
background: rgba(186, 10, 46, 1);
```

- Họa tiết trống đồng:

```css
background: rgba(196, 27, 56, 1);
opacity: 0.8;
mask-image: url("/images/trong-dong.svg");
```

Lưu ý: `.dong-son-bg` không được set `position: relative` trực tiếp, vì từng gây ghi đè `sticky` của navbar trang con. Nếu cần pseudo-element đúng stacking, thêm `relative` ở element dùng class đó.

SVG trống đồng:

- File `public/images/trong-dong.svg` từng có circle nền trắng làm mask hiện thành vòng tròn lớn.
- Đã sửa circle `id="path16418"` từ `fill:#ffffff` sang `fill:none`.

Home history paper:

- Class `.home-history-paper` tạo nền giấy cũ/parchment cho section lịch sử trang chủ.
- Có animation `.history-slide-*`.

## Navbar

File: `components/Navbar.tsx`

Là Client Component.

Behavior:

- Trang chủ (`pathname === "/"`):
  - `fixed top-0`
  - Lúc ở top: background trong suốt.
  - Khi scroll xuống hơn 8px: hiện `bg-white/60`, `backdrop-blur-md`, border/shadow nhẹ.
  - Khi scroll về top: trở lại trong suốt.
- Trang con:
  - `sticky top-0`
  - dùng `.dong-son-bg` đỏ trống đồng.

Brand/logo:

- Logo dùng `/images/Vietnam_People's_Public_Security_Emblem.png`.
- Text đủ 3 dòng ở mọi viewport:
  - `Bộ Công an`
  - `Truyền thống, thành tựu`
  - `An ninh nhân dân Việt Nam`
- Mobile đã tăng `min-w` cho cụm text để dòng cuối không wrap:
  - `min-w-[190px]`
  - `sm:min-w-[230px]`
  - dòng cuối có `whitespace-nowrap`.

Kích thước navbar hiện đã được thu nhỏ nhiều:

- `nav`: mobile `min-h-[56px]`, desktop `lg:min-h-[64px]`
- logo: mobile `h-10 w-10`, desktop `lg:h-12 lg:w-12`
- menu font: `text-[10px]`
- brand desktop: `lg:text-base`

Menu:

- Home icon active trên trang chủ dùng `text-red-800`, cùng màu cụm logo.
- Trang con active dùng nền vàng `bg-yellow-300 text-red-950`.
- External link “Cổng TTĐT Bộ Công an” tới `https://bocongan.gov.vn`, target blank.

Search button đang bị comment trong JSX, `searchOpen` state chỉ còn để giữ phần label không hiện. Có thể dọn tiếp nếu muốn.

## HeroSection

File: `components/HeroSection.tsx`

Là Client Component.

Tính năng:

- Full viewport height:

```tsx
h-[100svh] min-h-[560px]
```

- Slideshow ảnh nền:

```ts
const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];
```

- Auto chuyển 5 giây.
- Fade bằng `opacity`.
- Dots indicator ở đáy.
- Wave đỏ/vàng ở đáy hero.
- Logo trung tâm đã được thêm lại:

```txt
/images/hero/logo-hero.png
```

Kích thước logo hero hiện:

- wrapper max width:
  - `max-w-[560px]`
  - `sm:max-w-[620px]`
  - `lg:max-w-[680px]`
- `Image width={680} height={286}`

Nếu gặp warning Next Image:

```txt
Image with src "/images/hero/logo-hero.png" has either width or height modified...
```

thì thêm `style={{ height: "auto" }}` cho Image logo hero.

## HomeHistoryTimeline

File: `components/HomeHistoryTimeline.tsx`

Là Client Component, chỉ dùng cho section “Chặng đường lịch sử” ở trang chủ.

Không ảnh hưởng route `/chang-duong-lich-su`.

Dữ liệu gồm 3 giai đoạn:

1. `1945 - 1954`, image `/images/history/gd1.png`
2. `1954 - 1975`, image `/images/history/gd2.png`
3. `1975 - nay`, image `/images/history/gd3.png`

Tính năng:

- Nền giấy cũ qua `.home-history-paper`.
- Tiêu đề giữa “Chặng đường lịch sử”.
- Timeline ngang 3 mốc.
- Click mốc đổi nội dung.
- Mũi tên trái/phải loop vòng.
- Nội dung đổi bằng animation fade + slide.
- Ảnh có fallback nếu lỗi: “Ảnh lịch sử đang chờ cập nhật”.

Responsive đã chỉnh:

- Không còn `min-w-[620px]`.
- Timeline dùng `grid grid-cols-3`, co theo viewport.
- Line timeline dùng `left-[17%] right-[17%]`.
- Label timeline font nhỏ hơn trên mobile.
- Ảnh:
  - mobile `aspect-[4/3]`
  - sm `aspect-[16/9]`
  - md+ `aspect-[16/7]`
- Nút mũi tên nhỏ hơn trên mobile.

## Chatbot

Route: `app/chatbot-ai/page.tsx`

Đã bỏ `PageHeader` đầu trang vì thừa.

Trang chatbot hiện:

- Section căn giữa khung chat:

```tsx
min-h-[calc(100svh-104px)]
items-center
```

Component: `components/ChatbotUI.tsx`

- Client Component.
- Mock response, chưa có backend.
- Khung chat nằm giữa page.
- Chiều cao giới hạn:

```tsx
h-[min(760px,calc(100svh-150px))]
min-h-[560px]
```

- Vùng hội thoại scroll:

```tsx
overflow-y-auto
```

- Sidebar gợi ý cũng scroll nếu dài.

## Footer

File: `components/Footer.tsx`

- Dùng `.dong-son-bg relative`.
- Nền đỏ + trống đồng.
- Logo footer dùng `/images/Vietnam_People's_Public_Security_Emblem.png` thay cho badge “80”.
- Các text xám đã được đổi sang trắng.
- Tiêu đề nhỏ vẫn màu vàng.

## Các component còn lại

`components/TimelineSection.tsx` vẫn dùng cho route `/chang-duong-lich-su`, không dùng ở trang chủ nữa.

`components/AchievementCard.tsx`, `AchievementGrid.tsx`, `SectionHeader.tsx`, `PlaceholderVisual.tsx`, `PageHeader.tsx` vẫn giữ chức năng cũ.

`components/CTASection.tsx` còn tồn tại nhưng đã disable khỏi trang chủ.

## Dữ liệu placeholder

File: `lib/content.ts`

Chứa:

- `navItems`
- `timelineItems`
- `achievementCategories`
- `achievements`
- `quickQuestions`
- `aboutHighlights`

Lưu ý: Navbar hiện không dùng trực tiếp `navItems`, mà có `headerNavItems` nội bộ trong `Navbar.tsx` để chia dòng menu.

## Lưu ý encoding

Một số file khi đọc bằng PowerShell hiển thị tiếng Việt bị mojibake trong output (`Truyá»n...`). Trong code thực tế có thể vẫn là UTF-8. Nếu sửa text tiếng Việt, dùng `apply_patch` để đảm bảo nội dung đúng.

## RAG/chatbot production pipeline

RAG backend nằm trong `lib/rag/`.

Pipeline hiện tại:

```txt
DOCX resources
-> extract text
-> chunking
-> BM25 sparse index
-> Ollama embedding index
-> persisted vector artifacts in .rag-index/
-> query processing + deterministic expansion
-> query embedding
-> vector search
-> BM25 search
-> RRF hybrid fusion
-> local reranking or external rerank endpoint
-> Qwen/Ollama answer generation
```

Các file chính:

- `lib/rag/retriever.ts`: ingest, BM25, vector search, RRF, reranking.
- `lib/rag/embeddings.ts`: gọi Ollama `/api/embed`, fallback `/api/embeddings`.
- `.rag-index/vectors.json`: vector index fallback của TypeScript runtime.
- `.rag-index/chunks.json`: metadata/content của chunk.
- `.rag-index/manifest.json`: version/hash tài liệu, chunk config, embedding model.
- `.rag-index/embedding-cache.json`: cache embedding theo batch để resume nếu ingest bị ngắt.
- `scripts/build-faiss-index.py`: tạo `.rag-index/faiss.index` từ `vectors.json`.
- `scripts/faiss-search-service.py`: HTTP service `/search` để Next.js query FAISS.
- `requirements-rag.txt`: Python deps cho môi trường FAISS service.

Biến môi trường hữu ích:

```txt
RAG_EMBEDDINGS_ENABLED=true
RAG_REQUIRE_EMBEDDINGS=true
RAG_INDEX_DIR=.rag-index
RAG_FIRST_STAGE_TOP_K=40
RAG_VECTOR_TOP_K=40
RAG_RRF_K=60
RAG_EMBEDDING_BATCH_SIZE=4
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_EMBEDDING_MODEL=bge-m3:latest
RAG_FAISS_SEARCH_ENDPOINT=http://127.0.0.1:8001/search
RAG_RERANK_ENDPOINT=
```

FAISS note:

- Next.js runtime hiện có local cosine vector search để không phụ thuộc native package.
- Muốn dùng FAISS thật trong production: chạy ingest để sinh `.rag-index/vectors.json`, chạy `npm.cmd run rag:install` nếu chưa có `.venv`, chạy `npm.cmd run rag:build-faiss`, chạy `npm.cmd run rag:serve-faiss`, rồi đặt `RAG_FAISS_SEARCH_ENDPOINT=http://127.0.0.1:8001/search`.

## Verification

Các lệnh đã nhiều lần pass:

```bash
npm.cmd run lint
npm.cmd run build
```

Dev server đã từng chạy tại:

```txt
http://127.0.0.1:3000
```

Nếu PowerShell chặn `npm`, dùng `npm.cmd`.

## Các quyết định/ý muốn mới nhất của người dùng

- Navbar trang chủ:
  - ở top trong suốt hoàn toàn;
  - scroll xuống mới hiện nền trắng mờ;
  - scroll về top lại trong suốt;
  - không dùng nền trống đồng.
- Navbar trang con:
  - sticky;
  - dùng nền đỏ trống đồng.
- Footer:
  - dùng nền đỏ trống đồng.
- Hero:
  - chiếm `100svh`;
  - có slideshow ảnh nền;
  - có logo hero `/images/hero/logo-hero.png` nhỏ hơn bản đầu.
- Section lịch sử trang chủ:
  - nền giấy cũ;
  - timeline responsive;
  - ảnh `gd1.png`, `gd2.png`, `gd3.png`.
- CTASection trang chủ:
  - tạm thời disable.
