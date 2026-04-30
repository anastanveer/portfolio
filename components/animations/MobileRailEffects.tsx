"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MobileRailEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    if (!media.matches) {
      return;
    }

    let frame = 0;
    const cleanups: Array<() => void> = [];

    const setupRails = () => {
      const rails = Array.from(document.querySelectorAll<HTMLElement>(".mobile-rail"));

      rails.forEach((rail) => {
        const cards = Array.from(rail.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

        if (!cards.length) {
          return;
        }

        const updateActive = () => {
          const railBox = rail.getBoundingClientRect();
          const focusX = railBox.left + railBox.width * 0.42;
          let active = cards[0];
          let distance = Number.POSITIVE_INFINITY;

          cards.forEach((card) => {
            const box = card.getBoundingClientRect();
            const cardCenter = box.left + box.width / 2;
            const nextDistance = Math.abs(cardCenter - focusX);

            if (nextDistance < distance) {
              active = card;
              distance = nextDistance;
            }
          });

          cards.forEach((card) => {
            card.dataset.railActive = card === active ? "true" : "false";
          });

          rail.dataset.railReady = "true";
        };

        const requestUpdate = () => {
          if (frame) {
            return;
          }

          frame = window.requestAnimationFrame(() => {
            frame = 0;
            updateActive();
          });
        };

        updateActive();
        rail.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);

        cleanups.push(() => {
          rail.removeEventListener("scroll", requestUpdate);
          window.removeEventListener("resize", requestUpdate);
          cards.forEach((card) => {
            delete card.dataset.railActive;
          });
          delete rail.dataset.railReady;
        });
      });
    };

    const timeout = window.setTimeout(setupRails, 60);

    return () => {
      window.clearTimeout(timeout);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
