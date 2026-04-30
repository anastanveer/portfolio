"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  href,
  children,
  variant = "primary",
  size = "md",
  download
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  download?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  return (
    <motion.span
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-flex"
    >
      <Link
        href={href}
        download={download}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full border font-medium transition duration-300",
          size === "sm" ? "min-h-10 px-4 text-sm" : "min-h-12 px-5 text-sm md:px-6",
          variant === "primary" &&
            "premium-button-gradient",
          variant === "secondary" &&
            "border-white/16 bg-white/10 text-white hover:border-cyan/45 hover:bg-white/14 light:border-slate-900/18 light:bg-white light:text-slate-950 light:shadow-[0_12px_30px_rgba(15,23,42,0.08)] light:hover:border-blue-500/45 light:hover:bg-blue-50",
          variant === "ghost" &&
            "border-white/12 bg-white/[0.04] text-silver hover:border-cyan/40 hover:bg-cyan/10 hover:text-white light:border-slate-900/12 light:bg-white light:text-slate-800 light:shadow-[0_12px_30px_rgba(15,23,42,0.08)] light:hover:border-blue-500/40 light:hover:bg-blue-50 light:hover:text-blue-700"
        )}
      >
        <span className="inline-flex items-center gap-2">{children}</span>
        <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
      </Link>
    </motion.span>
  );
}
