export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <p data-reveal className={`kicker ${align === "center" ? "justify-center" : ""}`}>{kicker}</p>
      <h2
        data-reveal
        data-reveal-delay="100"
        className={`mt-5 font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tightish ${
          invert ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p data-reveal data-reveal-delay="200" className={`mt-5 text-base md:text-lg leading-relaxed ${invert ? "text-white/75" : "text-navy-700/80"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
