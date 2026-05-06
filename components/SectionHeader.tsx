type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={[
        "mx-auto max-w-3xl",
        isCenter ? "text-center" : "text-left",
      ].join(" ")}
    >
      {eyebrow ? (
        <p
          className={[
            "mb-3 text-sm font-bold uppercase tracking-[0.12em]",
            isDark ? "text-yellow-200" : "text-red-800",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={[
          "text-3xl font-bold leading-tight md:text-4xl",
          isDark ? "text-white" : "text-zinc-950",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-4 text-base leading-8 md:text-lg",
            isDark ? "text-red-50" : "text-zinc-650",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
