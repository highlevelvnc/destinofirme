"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function ParallaxQuote() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const sec = sectionRef.current;
    if (!bg || !sec) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = sec.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const y = (progress - 0.5) * 120;
        bg.style.transform = `translate3d(0, ${y}px, 0) scale(1.15)`;
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
    <section ref={sectionRef} className="relative overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/40 to-navy-950" />

      <div className="relative container-prem py-28 md:py-40 text-center">
        <p data-reveal className="kicker justify-center mx-auto">Compromisso</p>
        <h2
          data-reveal
          data-reveal-delay="100"
          className="mt-6 mx-auto max-w-4xl font-display text-3xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tightish text-white"
        >
          Transformamos espaços com <span className="gold-text">detalhe, compromisso</span> e acabamento profissional.
        </h2>
        <div data-reveal data-reveal-delay="200" className="mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
            <MessageCircle className="h-5 w-5" /> Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
