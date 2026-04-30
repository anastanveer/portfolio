"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailOneRef = useRef<HTMLDivElement>(null);
  const trailTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const glow = glowRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const trailOne = trailOneRef.current;
    const trailTwo = trailTwoRef.current;
    if (!glow || !ring || !dot || !trailOne || !trailTwo) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let glowX = targetX;
    let glowY = targetY;
    let ringX = targetX;
    let ringY = targetY;
    let trailOneX = targetX;
    let trailOneY = targetY;
    let trailTwoX = targetX;
    let trailTwoY = targetY;
    let isInteractive = false;
    let isPressed = false;
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.dataset.visible = "true";
      ring.dataset.visible = "true";
      dot.dataset.visible = "true";
      trailOne.dataset.visible = "true";
      trailTwo.dataset.visible = "true";

      isInteractive = Boolean(
        (event.target as Element | null)?.closest?.(
          "a, button, input, textarea, select, summary, [role='button'], [data-cursor='link']"
        )
      );

      ring.dataset.state = isInteractive ? "interactive" : "default";
      dot.dataset.state = isInteractive ? "interactive" : "default";
      trailOne.dataset.state = isInteractive ? "interactive" : "default";
      trailTwo.dataset.state = isInteractive ? "interactive" : "default";
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
    };

    const handlePointerLeave = () => {
      glow.dataset.visible = "false";
      ring.dataset.visible = "false";
      dot.dataset.visible = "false";
      trailOne.dataset.visible = "false";
      trailTwo.dataset.visible = "false";
    };

    const handlePointerDown = () => {
      isPressed = true;
      ring.dataset.pressed = "true";
      dot.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      isPressed = false;
      ring.dataset.pressed = "false";
      dot.dataset.pressed = "false";
    };

    const tick = () => {
      glowX += (targetX - glowX) * 0.075;
      glowY += (targetY - glowY) * 0.075;
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      trailOneX += (targetX - trailOneX) * 0.115;
      trailOneY += (targetY - trailOneY) * 0.115;
      trailTwoX += (targetX - trailTwoX) * 0.07;
      trailTwoY += (targetY - trailTwoY) * 0.07;

      const ringScale = isPressed ? 0.86 : isInteractive ? 1.58 : 1;
      const dotScale = isPressed ? 0.72 : isInteractive ? 0.62 : 1;

      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      trailOne.style.transform = `translate3d(${trailOneX}px, ${trailOneY}px, 0) translate(-50%, -50%) scale(${isInteractive ? 0.72 : 1})`;
      trailTwo.style.transform = `translate3d(${trailTwoX}px, ${trailTwoY}px, 0) translate(-50%, -50%) scale(${isInteractive ? 0.58 : 1})`;
      dot.style.setProperty("--cursor-dot-scale", `${dotScale}`);
      frame = requestAnimationFrame(tick);
    };

    document.documentElement.classList.add("has-custom-cursor");
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" data-visible="false" />
      <div ref={trailTwoRef} className="custom-cursor-trail custom-cursor-trail--two" aria-hidden="true" data-visible="false" data-state="default" />
      <div ref={trailOneRef} className="custom-cursor-trail custom-cursor-trail--one" aria-hidden="true" data-visible="false" data-state="default" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" data-visible="false" data-state="default" data-pressed="false" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" data-visible="false" data-state="default" data-pressed="false" />
    </>
  );
}
