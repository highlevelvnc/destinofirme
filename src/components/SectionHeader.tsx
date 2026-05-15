export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      <p data-reveal className={`kicker ${align === "center" ? "justify-center" : ""}`}>{kicker}</p>
      <h2
        data-reveal
        data-reveal-delay="100"
        className="mt-5 font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tightish text-white"
      >
        {title}
      </h2>
      {subtitle && (
        <p data-reveal data-reveal-delay="200" className="mt-5 text-base md:text-lg text-bone/70 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
