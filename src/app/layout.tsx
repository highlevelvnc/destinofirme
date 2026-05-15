import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const display = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://destinofirme.pt"),
  title: {
    default: "Destino Firme Empreendimentos | Remodelações, Pladur e Pintura em Portugal",
    template: "%s | Destino Firme Empreendimentos",
  },
  description:
    "Especialistas em remodelações, pladur, pintura interior e exterior, barramentos e acabamentos profissionais. Orçamentos personalizados em Portugal. Peça já o seu orçamento.",
  keywords: [
    "remodelações Portugal",
    "remodelações em geral",
    "pladur",
    "pintura interior e exterior",
    "barramentos",
    "acabamentos profissionais",
    "remodelação apartamentos",
    "obras Portugal",
    "empresa de remodelações",
  ],
  authors: [{ name: "Destino Firme Empreendimentos" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://destinofirme.pt",
    siteName: "Destino Firme Empreendimentos",
    title: "Destino Firme Empreendimentos | Remodelações e Acabamentos Profissionais",
    description:
      "Remodelações, pladur, pintura, barramentos e acabamentos com qualidade, confiança e atenção aos detalhes.",
  },
  alternates: { canonical: "https://destinofirme.pt" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0c14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
