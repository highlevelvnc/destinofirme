import { Shield, BadgeCheck, CalendarClock, Receipt, Eye, Boxes } from "lucide-react";
import SectionHeader from "./SectionHeader";

const REASONS = [
  { icon: Shield, title: "Trabalho limpo e organizado", desc: "Obra mantida em ordem do primeiro ao último dia." },
  { icon: BadgeCheck, title: "Acabamento de qualidade", desc: "Standards exigentes em cada remate e superfície." },
  { icon: CalendarClock, title: "Compromisso com prazos", desc: "Planeamos e cumprimos. O seu tempo é respeitado." },
  { icon: Receipt, title: "Orçamentos claros", desc: "Sem letras pequenas: preço, prazo e âmbito definidos." },
  { icon: Eye, title: "Atenção aos detalhes", desc: "Os detalhes são o que separa o bom do excelente." },
  { icon: Boxes, title: "Soluções completas", desc: "Da estrutura ao acabamento — uma equipa, um responsável." },
];

export default function WhyUs() {
  return (
    <section id="porque" className="relative py-24 md:py-32 bg-cream-100 border-y border-navy-900/5">
      <div className="container-prem">
        <SectionHeader
          kicker="Porquê a Destino Firme"
          title={<>Razões para escolher uma equipa que <span className="gold-text">faz bem feito.</span></>}
        />

        <div className="mt-14 grid gap-px bg-navy-900/8 rounded-lg overflow-hidden sm:grid-cols-2 lg:grid-cols-3 shadow-soft">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-reveal
              data-reveal-delay={i * 60}
              className="bg-white p-8 md:p-10 flex flex-col gap-4 group hover:bg-cream-50 transition-colors duration-500"
            >
              <Icon className="h-7 w-7 text-gold-600" strokeWidth={1.4} />
              <h3 className="font-display text-lg font-semibold text-navy-900 tracking-tight">{title}</h3>
              <p className="text-[15px] leading-relaxed text-navy-700/75">{desc}</p>
              <div className="mt-auto h-px w-10 bg-gold-500/50 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
