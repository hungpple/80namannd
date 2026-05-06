import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-lg border border-red-100 bg-red-900 shadow-xl shadow-red-950/10">
        <div className="relative isolate px-6 py-10 text-white md:px-10 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(250,204,21,0.25),transparent_26%),linear-gradient(135deg,#7f1d1d,#b91c1c)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow-200">
                Tiếp tục khám phá
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-8 text-red-50">
                {description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-md bg-yellow-300 px-6 py-3 text-sm font-bold text-red-950 transition hover:bg-yellow-200"
              >
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 hover:text-yellow-100"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
