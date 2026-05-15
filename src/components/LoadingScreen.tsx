"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const PHASES = [
  "A preparar materiais",
  "A montar o estaleiro",
  "A afinar os acabamentos",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("df-loaded") === "1") {
      setDone(true);
      setHidden(true);
      return;
    }
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const minDuration = 1700;
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, (elapsed / minDuration) * 100);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
      }
    };
    raf = requestAnimationFrame(tick);

    const phaseTimer = setInterval(() => {
      setPhase((p) => (p + 1) % PHASES.length);
    }, 700);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(phaseTimer);
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      sessionStorage.setItem("df-loaded", "1");
      document.documentElement.style.overflow = "";
      setHidden(true);
    }, 650);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-[600ms] ease-out ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "radial-gradient(ellipse at center, #10121d 0%, #05060b 75%)" }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(195,154,85,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(195,154,85,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 30%, transparent 70%)",
        }}
      />

      {/* Animated blueprint cross-hairs */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(195,154,85,0.25)" strokeWidth="0.08" strokeDasharray="1.2 1.2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(195,154,85,0.25)" strokeWidth="0.08" strokeDasharray="1.2 1.2" />
      </svg>

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Logo with reveal mask */}
        <div className="relative overflow-hidden" style={{ height: 96 }}>
          <Image
            src="/logo.png"
            alt=""
            width={260}
            height={96}
            priority
            className="h-24 w-auto invert brightness-0 contrast-200 loader-logo"
          />
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="loader-tick" />
          <span className="text-[10px] uppercase tracking-loose2 text-gold-300">
            Destino Firme Empreendimentos
          </span>
          <span className="loader-tick" />
        </div>

        {/* Progress bar */}
        <div className="mt-10 w-72 max-w-[80vw]">
          <div className="relative h-px w-full bg-white/10 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500"
              style={{ width: `${progress}%`, transition: "width 80ms linear" }}
            />
            <div
              className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{
                left: `calc(${progress}% - 64px)`,
                transition: "left 80ms linear",
                opacity: progress > 4 && progress < 99 ? 1 : 0,
              }}
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-loose2 text-bone/50">
            <span className="loader-phase">{PHASES[phase]}…</span>
            <span className="font-mono tabular-nums text-gold-300">
              {Math.round(progress).toString().padStart(2, "0")}%
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .loader-logo {
          animation: logoReveal 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(8px);
        }
        @keyframes logoReveal {
          to { opacity: 1; transform: translateY(0); }
        }
        .loader-tick {
          display: inline-block;
          width: 22px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(195,154,85,0.7), transparent);
        }
        .loader-phase {
          animation: phaseFade 700ms ease-out;
        }
        @keyframes phaseFade {
          from { opacity: 0; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
