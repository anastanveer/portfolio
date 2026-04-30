"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Gauge,
  GitBranch,
  Layers3,
  PlugZap,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StackItem = {
  name: string;
  score: number;
  label: string;
  proof: string;
  icon: LucideIcon;
  color: string;
};

const stack: StackItem[] = [
  { name: "HTML5 / CSS3", score: 9.2, label: "Responsive UI, landing pages, clean layouts", proof: "Frontend delivery", icon: Code2, color: "#22d3ee" },
  { name: "JavaScript ES6+", score: 9, label: "Interactive flows, validation, app behavior", proof: "Client-side logic", icon: Braces, color: "#8b5cf6" },
  { name: "PHP", score: 9, label: "Secure business logic and backend workflows", proof: "Server-side development", icon: FileCode2, color: "#38bdf8" },
  { name: "Laravel", score: 9.1, label: "Custom platforms, APIs, dashboards, portals", proof: "Primary backend stack", icon: ServerCog, color: "#34d399" },
  { name: "MySQL / SQL", score: 8.6, label: "Database design, reports, query optimization", proof: "Data-driven systems", icon: Database, color: "#60a5fa" },
  { name: "REST APIs", score: 8.8, label: "Payments, trading data, CRMs and integrations", proof: "Automation-ready", icon: PlugZap, color: "#a78bfa" },
  { name: "React.js", score: 8.2, label: "Modern dashboards and dynamic interfaces", proof: "Frontend apps", icon: Layers3, color: "#22d3ee" },
  { name: "WordPress", score: 9, label: "SEO-ready business websites and custom themes", proof: "CMS specialist", icon: Workflow, color: "#38bdf8" },
  { name: "Shopify", score: 8.4, label: "Ecommerce UX, product logic, conversion fixes", proof: "Online stores", icon: ShoppingBag, color: "#34d399" },
  { name: "SEO / Core Web Vitals", score: 8.7, label: "Speed, structure, technical SEO foundations", proof: "Performance focus", icon: Gauge, color: "#8b5cf6" },
  { name: "Git / GitHub", score: 8.4, label: "Clean commits, collaboration and release control", proof: "Team workflow", icon: GitBranch, color: "#60a5fa" },
  { name: "Hosting / cPanel", score: 8.1, label: "Deployment, SSL, email, backups and stability", proof: "Launch support", icon: Cloud, color: "#22d3ee" }
];

const categoryBars = [
  { name: "Frontend delivery", value: 92 },
  { name: "Laravel / PHP backend", value: 91 },
  { name: "WordPress / Shopify", value: 89 },
  { name: "APIs / business automation", value: 88 },
  { name: "Speed / SEO readiness", value: 87 }
];

function ScoreRing({ item, index }: { item: StackItem; index: number }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (item.score / 10) * circumference;
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
      className="premium-card group relative rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)] light:border-slate-900/10 light:bg-white light:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100"
        animate={{ x: ["0%", "320%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.6 }}
      />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex min-h-[142px] flex-col items-center justify-between text-center">
        <div className="relative grid h-[88px] w-[88px] place-items-center">
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 96 96" aria-hidden="true">
            <circle cx="48" cy="48" r={radius} fill="none" stroke="currentColor" className="text-white/8 light:text-slate-900/10" strokeWidth="8" />
            <motion.circle
              cx="48"
              cy="48"
              r={radius}
              fill="none"
              stroke={item.color}
              strokeLinecap="round"
              strokeWidth="8"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: progress }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, delay: index * 0.04, ease: "easeOut" }}
            />
            <motion.circle
              cx="48"
              cy="10"
              r="3.5"
              fill={item.color}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10 + index * 0.2, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "48px 48px" }}
            />
          </svg>
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan shadow-[0_0_34px_rgba(34,211,238,0.12)] light:border-blue-500/20 light:bg-blue-50 light:text-blue-700">
            <Icon size={24} />
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-display text-2xl font-semibold text-white light:text-slate-950">{item.score.toFixed(1)}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">/ 10</span>
          </div>
          <h3 className="mt-1 text-base font-semibold text-white light:text-slate-950">{item.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-silver/72 light:text-slate-600">{item.label}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function ResumeStackGraph() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Technical stack</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl light:text-slate-950">
              Skills graph for Laravel, WordPress, Shopify and modern web development.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-silver/74 light:text-slate-600">
            A quick view of the tools I use to build fast websites, custom platforms, ecommerce stores,
            dashboards, APIs and SEO-ready web systems.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.24)] light:border-slate-900/10 light:bg-[linear-gradient(135deg,#ffffff,#f7fbff)] light:shadow-[0_24px_80px_rgba(15,23,42,0.09)] sm:p-4 md:p-5">
          <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-cyan/15 blur-3xl light:bg-blue-400/12" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet/15 blur-3xl light:bg-violet-400/12" />

          <div className="relative grid gap-3 xl:grid-cols-[0.66fr_1.34fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink/45 p-5 light:border-slate-900/10 light:bg-slate-950/[0.03]">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                  <ShieldCheck size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white light:text-slate-950">Stack overview</p>
                  <p className="text-xs text-silver/60 light:text-slate-500">0 to 10 technical confidence score</p>
                </div>
              </div>

              <div className="relative mt-6 h-44 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.025] light:border-slate-900/10 light:bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 176" preserveAspectRatio="none" aria-hidden="true">
                  <motion.path
                    d="M 18 132 C 78 42, 136 128, 204 70 S 320 102, 402 38"
                    fill="none"
                    stroke="rgba(34,211,238,0.18)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M 18 132 C 78 42, 136 128, 204 70 S 320 102, 402 38"
                    fill="none"
                    stroke="url(#resume-graph-gradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray="12 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  {[92, 90, 91, 88, 89].map((value, index) => (
                    <motion.circle
                      key={`${value}-${index}`}
                      cx={42 + index * 84}
                      cy={150 - value}
                      r="5"
                      fill="#22d3ee"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.35, delay: 0.55 + index * 0.08 }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="resume-graph-gradient" x1="0" x2="1">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="55%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-silver/55 light:text-slate-500">
                  <span>Frontend</span>
                  <span>Backend</span>
                  <span>CMS</span>
                  <span>APIs</span>
                  <span>Speed</span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {categoryBars.map((bar, index) => (
                  <div key={bar.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-silver/80 light:text-slate-700">{bar.name}</span>
                      <span className="font-semibold text-cyan">{Math.round(bar.value / 10)}/10</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8 light:bg-slate-900/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-premium-gradient"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-5 rounded-2xl border border-cyan/15 bg-cyan/10 p-4 light:border-blue-500/15 light:bg-blue-50">
                <p className="text-sm leading-7 text-silver/78 light:text-slate-700">
                  Main focus: clean UI, Laravel/PHP backend systems, WordPress and Shopify builds, API integrations,
                  dashboards, database work, speed optimization and launch support.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
              {stack.map((item, index) => (
                <ScoreRing item={item} index={index} key={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
