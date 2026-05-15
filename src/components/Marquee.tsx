const ITEMS = [
  "Remodelações",
  "Pladur",
  "Pintura Interior",
  "Pintura Exterior",
  "Barramentos",
  "Acabamentos",
  "Reparações",
  "Tectos Falsos",
  "Divisórias",
  "Chave-na-mão",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-b border-white/5 bg-navy-950 py-6">
      <div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        style={{ animation: "marquee 38s linear infinite" }}
      >
        {loop.map((it, i) => (
          <span key={`${it}-${i}`} className="inline-flex items-center gap-12 font-display text-2xl md:text-3xl font-semibold tracking-tight text-bone/15 hover:text-gold-300/80 transition-colors">
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400/50" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-950 to-transparent" />
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
