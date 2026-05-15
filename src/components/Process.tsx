import SectionHeader from "./SectionHeader";
import { PhoneCall, ClipboardCheck, FileText, Hammer } from "lucide-react";

const STEPS = [
  { icon: PhoneCall, title: "Contacto inicial", desc: "Fala connosco por WhatsApp, telefone ou email. Ouvimos as suas necessidades." },
  { icon: ClipboardCheck, title: "Avaliação do serviço", desc: "Visitamos o espaço ou avaliamos o projecto para perceber o âmbito real." },
  { icon: FileText, title: "Orçamento personalizado", desc: "Apresentamos uma proposta clara: preço, prazos e materiais — sem surpresas." },
  { icon: Hammer, title: "Execução com qualidade", desc: "Trabalho organizado, prazos cumpridos e acabamento profissional do início ao fim." },
];

export default function Process() {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-navy-900/40 border-y border-white/5">
      <div className="container-prem">
        <SectionHeader
          kicker="Como trabalhamos"
          title={<>Um processo <span className="gold-text">claro</span>, do primeiro contacto à entrega.</>}
        />

        <ol className="mt-16 relative grid gap-10 md:gap-6 md:grid-cols-4">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              data-reveal
              data-reveal-delay={i * 120}
              className="relative"
            >
              <div className="relative flex items-center md:block">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold-400/40 bg-navy-950 text-gold-300">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <span className="ml-5 md:ml-0 md:absolute md:top-0 md:right-0 font-display text-5xl font-bold text-white/5">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bone/65 max-w-xs">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
