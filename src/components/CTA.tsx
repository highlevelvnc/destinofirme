import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-cream-50">
      <div className="container-prem">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl border border-gold-500/30 px-8 py-16 md:px-16 md:py-24"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #f8f4ea 60%, #f0ead8 100%)",
          }}
        >
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold-300/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy-900/8 blur-3xl" />
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="kicker">Pronto para começar</p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tightish text-navy-900">
                Precisa <span className="gold-text">remodelar</span> o seu espaço?
              </h2>
              <p className="mt-6 max-w-xl text-lg text-navy-700/80 leading-relaxed">
                Fale connosco agora e peça um orçamento <strong className="text-navy-900">sem compromisso</strong>.
                Respondemos rapidamente e damos-lhe uma proposta clara para o seu projecto.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-wa !py-5 !text-base">
                <MessageCircle className="h-6 w-6" />
                Chamar no WhatsApp
              </a>
              <a href={PHONE_TEL} className="btn-primary !py-5">
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <p className="text-center text-xs uppercase tracking-loose2 text-navy-700/55 mt-2">
                Atendimento rápido · Orçamentos personalizados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
