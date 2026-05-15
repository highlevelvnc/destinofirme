import Image from "next/image";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=80", title: "Pintura interior", tag: "Pintura" },
  { src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=80", title: "Tecto em pladur", tag: "Pladur" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80", title: "Remodelação de sala", tag: "Remodelação" },
  { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=80", title: "Acabamento de cozinha", tag: "Acabamentos" },
  { src: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=1400&q=80", title: "Interior renovado", tag: "Interiores" },
  { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80", title: "Obra concluída", tag: "Obras" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-24 md:py-32 bg-cream-50">
      <div className="container-prem">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            kicker="Galeria"
            title={<>Trabalhos que falam por <span className="gold-text">si mesmos.</span></>}
            subtitle="Uma amostra de remodelações, pintura, pladur e acabamentos onde o detalhe faz a diferença."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ITEMS.map((it, i) => (
            <figure
              key={it.title}
              data-reveal
              data-reveal-delay={i * 80}
              className={`group relative overflow-hidden rounded-lg border border-navy-900/10 shadow-soft ${
                i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={it.src}
                alt={it.title}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/30 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                <p className="text-[10px] uppercase tracking-loose2 text-gold-300">{it.tag}</p>
                <p className="mt-2 font-display text-xl md:text-2xl font-semibold text-white">{it.title}</p>
                <div className="mt-3 h-px w-8 bg-gold-400 transition-all duration-500 group-hover:w-20" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
