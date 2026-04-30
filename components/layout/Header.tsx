"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, FileText, Home, Linkedin, Menu, Send, X } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const dockItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/work", label: "Work", icon: BriefcaseBusiness },
    { href: "/resume", label: "CV", icon: FileText },
    { href: "/contact", label: "Contact", icon: Send }
  ];

  return (
    <>
    <header className="fixed inset-x-3 top-3 z-50 rounded-2xl border border-white/10 bg-ink/82 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl light:border-slate-900/10 light:bg-white/90 lg:inset-x-0 lg:top-0 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:bg-ink/72 lg:shadow-none lg:light:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 lg:h-20 lg:px-5">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Anas Tanveer home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan/30 bg-white/10 font-display text-xs font-bold text-white light:bg-slate-900 light:text-white lg:h-10 lg:w-10 lg:rounded-lg lg:text-sm">
            AT
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-semibold text-white light:text-slate-950 lg:text-base">Anas Tanveer</span>
            <span className="block truncate text-[11px] text-silver/70 light:text-slate-600 lg:text-xs">Dubai Web Problem Solver</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm text-silver/74 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-900/5 light:hover:text-slate-950",
                pathname === item.href && "bg-white/10 text-white light:bg-slate-900/8 light:text-slate-950"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <MagneticButton href="/contact" size="sm">
            Hire Me
          </MagneticButton>
        </div>

        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/8 text-white light:text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink/96 px-3 py-3 backdrop-blur-xl lg:hidden light:bg-white/96">
          <nav className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl border border-white/8 bg-white/[0.035] px-4 py-3 text-sm text-silver light:border-slate-900/8 light:bg-slate-900/[0.03] light:text-slate-700",
                  pathname === item.href && "border-cyan/35 bg-cyan/10 text-cyan"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/anas-fullstackdev/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan/20 bg-cyan/10 px-4 py-3 text-sm font-medium text-cyan"
            >
              LinkedIn Profile
            </a>
            <div className="col-span-2 flex items-center justify-between px-2 pt-3">
              <ThemeToggle />
              <MagneticButton href="/contact" size="sm">Hire Me</MagneticButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
    <nav className="fixed inset-x-4 bottom-4 z-50 grid grid-cols-5 rounded-2xl border border-white/10 bg-ink/88 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl light:border-slate-900/10 light:bg-white/92 lg:hidden" aria-label="Mobile quick navigation">
      {dockItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "grid min-h-12 place-items-center rounded-xl text-[11px] font-medium text-silver/70 transition light:text-slate-600",
              active && "bg-cyan/12 text-cyan"
            )}
          >
            <Icon size={17} />
            <span className="mt-0.5">{item.label}</span>
          </Link>
        );
      })}
      <a
        href="https://www.linkedin.com/in/anas-fullstackdev/"
        target="_blank"
        rel="noreferrer"
        className="grid min-h-12 place-items-center rounded-xl text-[11px] font-medium text-silver/70 transition hover:bg-cyan/10 hover:text-cyan light:text-slate-600"
      >
        <Linkedin size={17} />
        <span className="mt-0.5">LinkedIn</span>
      </a>
    </nav>
    </>
  );
}
