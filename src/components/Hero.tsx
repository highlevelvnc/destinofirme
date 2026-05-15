"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle, Phone, ArrowDown } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        el.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.08)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Interior remodelado premium"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/60 to-navy-950" />

      {/* Architectural framing lines */}
      <div className="pointer-events-none absolute inset-y-12 left-6 md:left-10 lg:left-16 hidden md:flex flex-col items-center gap-3 z-10">
        <span className="h-20 w-px bg-gradient-to-b from-transparent to-gold-400/60" />
        <span className="text-[10px] uppercase tracking-loose2 text-gold-300/80 [writing-mode:vertical-rl] rotate-180">
          Est. {new Date().getFullYear()} · Portugal
        </span>
        <span className="h-20 w-px bg-gradient-to-b from-gold-400/60 to-transparent" />
      </div>
      <div className="pointer-events-none absolute top-28 right-6 md:right-10 lg:right-16 hidden lg:flex items-center gap-3 z-10">
        <span className="text-[10px] uppercase tracking-loose2 text-gold-300/80">
          Remodelações · Pladur · Pintura
        </span>
        <span className="h-px w-16 bg-gradient-to-r from-gold-400/60 to-transparent" />
      </div>

      <div className="relative container-prem flex min-h-[100svh] flex-col justify-center pt-32 pb-24">
        <div className="max-w-3xl">
          <p data-reveal className="kicker">Destino Firme Empreendimentos</p>
          <h1
            data-reveal
            data-reveal-delay="100"
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tightish text-white"
          >
            Remodelações com{" "}
            <span className="gold-text">qualidade, confiança</span>{" "}
            e acabamento profissional.
          </h1>
          <p
            data-reveal
            data-reveal-delay="200"
            className="mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-bone/75"
          >
            Especialistas em pladur, pintura, barramentos e remodelações em geral para
            transformar casas, apartamentos, lojas e espaços comerciais — com o detalhe que cada projecto merece.
          </p>

          <div data-reveal data-reveal-delay="300" className="mt-10 flex flex-wrap items-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              <MessageCircle className="h-5 w-5" />
              Pedir Orçamento no WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">Ver Serviços</a>
          </div>

          <div data-reveal data-reveal-delay="400" className="mt-12 flex items-center gap-5">
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold-400/70 to-transparent" />
            <div>
              <p className="text-[11px] uppercase tracking-loose2 text-gold-300/90">Contacto directo</p>
              <a href={PHONE_TEL} className="mt-1 inline-flex items-center gap-2 font-display text-xl md:text-2xl font-semibold text-white hover:text-gold-200 transition-colors">
                <Phone className="h-5 w-5 text-gold-300" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <a
          href="#servicos"
          aria-label="Descer"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-bone/60 hover:text-gold-300 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-loose2">Explorar</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
