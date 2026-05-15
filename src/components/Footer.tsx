import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL, COMPANY, NAV_LINKS } from "@/lib/constants";

const SERVICES = [
  "Remodelações em geral",
  "Pladur",
  "Pintura interior e exterior",
  "Barramentos",
  "Acabamentos",
  "Reparações e melhorias",
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-bone">
      <div className="container-prem pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image
              src="/logo.png"
              alt="Destino Firme Empreendimentos"
              width={180}
              height={56}
              className="h-12 w-auto [filter:brightness(0)_invert(1)]"
            />
            <p className="mt-6 max-w-md text-bone/65 leading-relaxed">
              {COMPANY.fullName} — remodelações, pladur, pintura, barramentos e
              acabamentos profissionais com qualidade, compromisso e atenção aos
              detalhes em todo o {COMPANY.region}.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary mt-8">
              <MessageCircle className="h-5 w-5" /> Pedir Orçamento
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-loose2 text-gold-300">Navegação</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-bone/75 hover:text-gold-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-loose2 text-gold-300">Serviços</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-bone/75">{s}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-loose2 text-gold-300">Contacto</p>
            <ul className="mt-5 space-y-4 text-bone/75">
              <li>
                <a href={PHONE_TEL} className="flex items-start gap-3 hover:text-gold-200 transition-colors">
                  <Phone className="h-4 w-4 mt-1 shrink-0 text-gold-400" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 hover:text-gold-200 transition-colors break-all">
                  <Mail className="h-4 w-4 mt-1 shrink-0 text-gold-400" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-gold-400" />
                <span>{COMPANY.region}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-bone/45">
            © 2026 {COMPANY.fullName}. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-loose2 text-bone/40">
            Remodelações · Pladur · Pintura · Acabamentos
          </p>
        </div>
      </div>
    </footer>
  );
}
