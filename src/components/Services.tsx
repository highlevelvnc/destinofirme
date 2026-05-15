import { Hammer, LayoutPanelTop, PaintBucket, Layers, Sparkles, Wrench, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { WHATSAPP_URL } from "@/lib/constants";

const SERVICES = [
  {
    icon: Hammer,
    title: "Remodelações em Geral",
    desc: "Renovação completa de casas, apartamentos, lojas e espaços comerciais — do projecto à entrega chave-na-mão.",
  },
  {
    icon: LayoutPanelTop,
    title: "Pladur",
    desc: "Tectos falsos, divisórias, sancas e nichos em pladur com execução limpa e geometria perfeita.",
  },
  {
    icon: PaintBucket,
    title: "Pintura Interior e Exterior",
    desc: "Pintura profissional com preparação cuidada de superfícies e acabamentos uniformes que duram.",
  },
  {
    icon: Layers,
    title: "Barramentos",
    desc: "Barramentos finos para paredes e tectos perfeitamente lisos, prontos para acabamento premium.",
  },
  {
    icon: Sparkles,
    title: "Acabamentos",
    desc: "Rodapés, molduras, remates e detalhes finais executados com rigor para um resultado impecável.",
  },
  {
    icon: Wrench,
    title: "Reparações e Melhorias",
    desc: "Pequenas e médias intervenções: reparações, melhorias pontuais e manutenção do seu espaço.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="container-prem">
        <SectionHeader
          kicker="Serviços"
          title={<>Soluções completas, <span className="gold-text">executadas com rigor.</span></>}
          subtitle="Trabalhamos cada projecto como se fosse o nosso espaço — com método, organização e atenção a cada detalhe."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              key={title}
              data-reveal
              data-reveal-delay={i * 70}
              className="group surface-card gold-border-top relative rounded-lg p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/30 hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-md border border-gold-400/30 bg-navy-800/50 text-gold-300 transition-colors group-hover:bg-gold-400/10 group-hover:text-gold-200">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="h-5 w-5 text-bone/30 transition-all duration-300 group-hover:text-gold-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-bone/65">{desc}</p>
              <div className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-loose2 text-gold-300/0 group-hover:text-gold-300 transition-colors">
                Pedir orçamento
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
