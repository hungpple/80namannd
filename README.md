# 80 năm ANND - Website chuyên đề mẫu

Project website Next.js mô phỏng phong cách tổng thể của một cổng thông tin
chuyên đề trang trọng, hiện đại, dùng màu chủ đạo đỏ, vàng và trắng. Toàn bộ
source code, nội dung, hình minh họa đều là code mới và placeholder, không sao
chép logo, hình ảnh, dữ liệu hoặc tài nguyên có bản quyền từ trang tham khảo.

## Công nghệ

- Next.js App Router
- TypeScript
- TailwindCSS
- Responsive desktop, tablet, mobile
- Component tách rõ, dễ thay thế dữ liệu

## Cấu trúc chính

- `app/page.tsx`: Trang chủ
- `app/chang-duong-lich-su/page.tsx`: Timeline lịch sử
- `app/chien-cong-noi-bat/page.tsx`: Card/grid chiến công nổi bật
- `app/ve-chung-toi/page.tsx`: Mục đích, sứ mệnh, giá trị, định hướng
- `app/chatbot-ai/page.tsx`: Giao diện Trợ lý AI RAG
- `app/api/chatbot-ai/route.ts`: API hỏi đáp RAG dùng Qwen2.5:7B qua Ollama
- `components/`: Navbar, Footer, HeroSection, TimelineSection, AchievementCard,
  ChatbotUI, CTASection và các component hỗ trợ
- `lib/content.ts`: Dữ liệu placeholder dùng cho các trang

## Chạy project

Cài dependencies:

```bash
npm install
```

Chạy môi trường dev:

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

### Cấu hình RAG chatbot

Chatbot mặc định đọc tài liệu Word `.docx` từ thư mục `resources` ở root project:

```text
resources
```

Các biến môi trường có thể dùng khi cần đổi cấu hình:

```bash
RAG_DOCUMENTS_DIR="D:\JSONFolder\Master of Software Engineering\Study\80namANND\80-nam-annd\resources"
OLLAMA_BASE_URL="http://127.0.0.1:11434"
OLLAMA_MODEL="qwen2.5:7b"
RAG_TOP_K="10"
OLLAMA_TIMEOUT_MS="900000"
OLLAMA_NUM_CTX="8192"
OLLAMA_NUM_PREDICT="800"
```

Trước khi hỏi đáp, chạy Ollama và bảo đảm model đã có sẵn:

```bash
ollama pull qwen2.5:7b
ollama serve
```

Build kiểm tra production:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Thay nội dung

Các mảng `timelineItems`, `achievements`, `aboutHighlights` và
`quickQuestions` nằm trong `lib/content.ts`. Khi có tư liệu chính thức, chỉ cần
thay dữ liệu tại đây hoặc mở rộng thành API/CMS.

Chatbot hiện gọi API `/api/chatbot-ai`, truy xuất nội dung trong các tài liệu
Word và gửi ngữ cảnh sang Qwen2.5:7B để tổng hợp câu trả lời.

## Ghi chú

Project chỉ tái tạo phong cách tổng thể, bố cục và cảm giác giao diện bằng code
mới. Không sử dụng tài nguyên gốc từ website tham khảo.
