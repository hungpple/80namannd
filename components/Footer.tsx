import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="dong-son-bg relative border-t border-yellow-300/40 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/images/Vietnam_People's_Public_Security_Emblem.png"
                alt="Logo Công an nhân dân"
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow-200">
                Website chuyên đề
              </p>
              <p className="mt-1 text-lg font-black uppercase">
                Truyền thống, thành tựu An ninh nhân dân Việt Nam
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white">
            Dự án phục vụ cho bài thi tìm hiểu về 80 năm lực lượng An ninh nhân dân Việt Nam (12/7/1946 - 12/7/2026).
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow-200">
            Điều hướng
          </p>
          <div className="mt-4 grid gap-3 text-sm">
            {navItems
              .filter((item) => !item.external)
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white transition hover:text-yellow-200"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow-200">
            Liên hệ
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-white">
            <p>Đơn vị quản trị: Placeholder</p>
            <p>Email: contact@example.vn</p>
            <p>Nội dung và hình ảnh: Đang chờ cập nhật</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white">
        © 2026 Bản quyền thuộc về Trường Đại học An ninh nhân dân.
      </div>
    </footer>
  );
}
