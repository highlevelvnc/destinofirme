import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import LoadingScreen from "@/components/LoadingScreen";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import ParallaxQuote from "@/components/ParallaxQuote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealMount from "@/components/RevealMount";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <RevealMount />
      <Header />
      <main>
        <Hero />
        <Authority />
        <Marquee />
        <Services />
        <WhyUs />
        <About />
        <Process />
        <Gallery />
        <ParallaxQuote />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
