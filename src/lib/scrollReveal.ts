"use client";

export function initScrollReveal() {
  if (typeof window === "undefined") return;
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (els.length === 0) return;

  els.forEach((el) => {
    if (!el.hasAttribute("data-revealed")) el.setAttribute("data-revealed", "false");
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    els.forEach((el) => el.setAttribute("data-revealed", "true"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay || 0);
          window.setTimeout(() => el.setAttribute("data-revealed", "true"), delay);
          io.unobserve(el);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );
  els.forEach((el) => io.observe(el));

  window.setTimeout(() => {
    document
      .querySelectorAll<HTMLElement>('[data-reveal][data-revealed="false"]')
      .forEach((el) => el.setAttribute("data-revealed", "true"));
  }, 3500);
}
