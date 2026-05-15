import { Hammer, Sparkles, Clock4, FileText } from "lucide-react";

const ITEMS = [
  { icon: Hammer, label: "Remodelações em geral" },
  { icon: Sparkles, label: "Acabamentos profissionais" },
  { icon: Clock4, label: "Atendimento rápido" },
  { icon: FileText, label: "Orçamentos personalizados" },
];

export default function Authority() {
  return (
    <section className="relative border-y border-white/5 bg-navy-900/60">
      <div className="container-prem py-10 md:py-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {ITEMS.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              data-reveal
              data-reveal-delay={i * 80}
              className="flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold-400/30 bg-navy-800/60 text-gold-300">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-display text-sm md:text-base font-semibold text-bone/90 leading-tight">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
