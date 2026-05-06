type PlaceholderVisualProps = {
  label: string;
  eyebrow?: string;
  className?: string;
  compact?: boolean;
};

export function PlaceholderVisual({
  label,
  eyebrow = "Hình ảnh placeholder",
  className = "",
  compact = false,
}: PlaceholderVisualProps) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden rounded-lg border border-yellow-200/70 bg-red-900 shadow-sm",
        compact ? "min-h-44" : "min-h-64",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,224,130,0.52),transparent_24%),linear-gradient(135deg,#7f0f13_0%,#b91c1c_46%,#f3b313_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(45deg,rgba(255,255,255,0.16)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.16)_50%,rgba(255,255,255,0.16)_75%,transparent_75%,transparent)] [background-size:22px_22px]" />
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-yellow-200/50" />
      <div className="absolute -bottom-16 left-8 h-48 w-48 rounded-full border border-white/20" />
      <div className="relative flex h-full min-h-inherit flex-col justify-end p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-100">
          {eyebrow}
        </p>
        <p className="mt-2 max-w-xs text-xl font-bold leading-7">{label}</p>
      </div>
    </div>
  );
}
