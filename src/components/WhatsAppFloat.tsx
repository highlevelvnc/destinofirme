"use client";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t1 = setTimeout(() => setTip(true), 1200);
    const t2 = setTimeout(() => setTip(false), 5200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [show]);

  return (
    <div
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center gap-3">
        <div
          className={`hidden sm:block transition-all duration-500 ${
            tip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="rounded-md bg-navy-950 border border-white/10 px-4 py-2 shadow-soft">
            <p className="text-xs font-semibold text-white whitespace-nowrap">Peça o seu orçamento</p>
            <p className="text-[10px] uppercase tracking-loose2 text-gold-300">Resposta rápida</p>
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          aria-label="Falar no WhatsApp"
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] ring-4 ring-white/90 shadow-[0_15px_35px_-5px_rgba(37,211,102,0.55)] transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <svg viewBox="0 0 32 32" className="relative h-7 w-7 text-white" fill="currentColor" aria-hidden>
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.16 0-.385-.07-.65-.232-2.043-1.226-3.347-2.535-4.51-4.422-.292-.473-.79-.94-.78-1.515.013-.788.978-1.13 1.276-1.795.135-.302.075-.561-.073-.81-.146-.245-.722-1.762-1.011-2.39-.385-.84-.985-.74-1.45-.74-.396 0-.81-.069-1.244-.069-.43 0-1.124.155-1.71.787-.586.633-2.235 2.182-2.235 5.32 0 3.137 2.288 6.166 2.605 6.591.314.425 4.494 6.864 10.881 9.354 5.305 2.068 6.385 1.657 7.539 1.552 1.155-.105 3.713-1.515 4.236-2.978.524-1.464.524-2.717.366-2.978-.156-.262-.573-.42-1.198-.733-.626-.313-3.708-1.83-4.282-2.036-.575-.207-.991-.302-1.404.314-.41.617-.989 1.39-1.214 1.39z"/>
            <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.834.752 5.624 2.183 8.075L.5 31.5l7.626-2.099A15.46 15.46 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.06a12.51 12.51 0 0 1-6.385-1.747l-.46-.275-4.521 1.246 1.21-4.408-.3-.467A12.547 12.547 0 0 1 3.44 16c0-6.927 5.633-12.56 12.56-12.56 6.927 0 12.56 5.633 12.56 12.56 0 6.927-5.633 12.56-12.56 12.56z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
