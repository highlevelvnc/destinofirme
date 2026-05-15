import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-cream-50">
      <div className="container-prem grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div data-reveal="left" className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80"
              alt="Trabalho de remodelação Destino Firme"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div className="surface-card gold-border-top rounded-lg p-6 w-64 shadow-card">
              <p className="text-[11px] uppercase tracking-loose2 text-gold-600">Compromisso</p>
              <p className="mt-2 font-display text-lg text-navy-900 leading-snug">
                Cada projecto tratado com a seriedade que merece.
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -left-6 hidden lg:block w-24 h-24 border border-gold-500/40 rounded-sm" />
        </div>

        <div className="lg:col-span-6">
          <p data-reveal className="kicker">Sobre a empresa</p>
          <h2
            data-reveal
            data-reveal-delay="100"
            className="mt-5 font-display text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.05] tracking-tightish text-navy-900"
          >
            Construímos <span className="gold-text">espaços que duram</span> — com responsabilidade e detalhe.
          </h2>
          <div data-reveal data-reveal-delay="200" className="mt-6 space-y-5 text-navy-700/85 text-lg leading-relaxed">
            <p>
              A <strong className="text-navy-900 font-semibold">Destino Firme Empreendimentos</strong> actua na área de
              remodelações, pladur, pintura, barramentos e acabamentos, oferecendo soluções
              completas para transformar espaços com qualidade, responsabilidade e atenção
              aos detalhes.
            </p>
            <p>
              Cada projecto é tratado com seriedade, desde o primeiro contacto até à entrega
              final. Trabalhamos com método, materiais adequados e equipas próprias — o que
              nos permite garantir o nível de execução que apresentamos.
            </p>
          </div>

          <div data-reveal data-reveal-delay="300" className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "100%", v: "Foco em qualidade" },
              { k: "A→Z", v: "Soluções completas" },
              { k: "PT", v: "Equipa local" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-gold-500/60 pl-4">
                <p className="font-display text-3xl font-bold text-navy-900">{s.k}</p>
                <p className="mt-1 text-xs uppercase tracking-loose2 text-navy-700/60">{s.v}</p>
              </div>
            ))}
          </div>

          <div data-reveal data-reveal-delay="400" className="mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              <MessageCircle className="h-5 w-5" /> Falar com a equipa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
