"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-header py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-prem flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-3" aria-label="Destino Firme">
          <Image
            src="/logo.png"
            alt="Destino Firme Empreendimentos"
            width={180}
            height={56}
            className={`h-10 w-auto md:h-11 transition-all duration-500 ${
              onDark ? "[filter:brightness(0)_invert(1)]" : ""
            }`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                onDark ? "text-white/85 hover:text-gold-200" : "text-navy-700 hover:text-gold-600"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className={`${onDark ? "btn-gold" : "btn-primary"} !py-3 !px-5 !text-[13px]`}
          >
            <MessageCircle className="h-4 w-4" /> Pedir Orçamento
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border transition-colors ${
            onDark ? "border-white/20 text-white" : "border-navy-900/20 text-navy-900"
          }`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-cream-50/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white border-l border-navy-900/10 p-6 flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Image src="/logo.png" alt="Destino Firme" width={140} height={44} className="h-9 w-auto" />
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-900/20 text-navy-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="gold-rule mt-6" />
          <nav className="mt-8 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-xl text-navy-900 hover:text-gold-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary w-full">
              <MessageCircle className="h-4 w-4" /> Pedir Orçamento no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
