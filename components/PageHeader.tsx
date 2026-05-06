type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-red-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(250,204,21,0.25),transparent_28%),linear-gradient(135deg,#5f090d,#991b1b)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-yellow-200">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-red-50">
          {description}
        </p>
      </div>
    </section>
  );
}
