"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest?.(".premium-card") as HTMLElement | null;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;

      card.style.setProperty("--card-x", `${x}px`);
      card.style.setProperty("--card-y", `${y}px`);
      card.style.setProperty("--card-rx", `${(-py * 4.4).toFixed(2)}deg`);
      card.style.setProperty("--card-ry", `${(px * 4.4).toFixed(2)}deg`);
    };

    const handlePointerLeave = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest?.(".premium-card") as HTMLElement | null;
      if (!card) return;
      card.style.removeProperty("--card-rx");
      card.style.removeProperty("--card-ry");
      card.style.removeProperty("--card-x");
      card.style.removeProperty("--card-y");
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, true);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave, true);
    };
  }, []);

  return children;
}
