import { Reveal } from "@/components/animations/Reveal";
import {
  BadgeCheck,
  Compass,
  Gauge,
  Layers3,
  LifeBuoy,
  Rocket,
  ShieldCheck
} from "lucide-react";

const process = [
  {
    title: "Discovery",
    text: "Goals, users, risks, scope and business outcome.",
    icon: Compass
  },
  {
    title: "UI Planning",
    text: "Premium structure, conversion flow and responsive UX.",
    icon: Layers3
  },
  {
    title: "Development",
    text: "Clean Laravel, WordPress, Shopify, React and APIs.",
    icon: ShieldCheck
  },
  {
    title: "Testing",
    text: "Forms, permissions, mobile states and launch blockers.",
    icon: BadgeCheck
  },
  {
    title: "SEO / Speed",
    text: "Metadata, schema, Core Web Vitals and speed.",
    icon: Gauge
  },
  {
    title: "Launch",
    text: "Deployment, domain, analytics, backups and handover.",
    icon: Rocket
  },
  {
    title: "Support",
    text: "Improvements, fixes, consulting and new features.",
    icon: LifeBuoy
  }
];

export function Process() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.02))] p-4 shadow-premium light:border-slate-900/10 light:bg-white md:p-5 xl:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_20%,rgba(38,217,255,0.14),transparent_24rem),radial-gradient(circle_at_78%_70%,rgba(139,92,246,0.12),transparent_26rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50 light:bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan/45 to-transparent" />

      <div className="relative hidden xl:block">
        <svg className="absolute inset-x-14 top-24 h-28 w-[calc(100%-7rem)]" viewBox="0 0 1200 150" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M20 96 C150 20 260 132 390 72 C520 18 650 132 780 72 C910 20 1035 126 1180 48"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M20 96 C150 20 260 132 390 72 C520 18 650 132 780 72 C910 20 1035 126 1180 48"
            fill="none"
            stroke="url(#process-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="12 14"
          />
          <defs>
            <linearGradient id="process-gradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#26d9ff" />
              <stop offset="52%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative grid min-h-[310px] grid-cols-7 items-end gap-3 pt-16">
          {process.map((step, index) => {
            const Icon = step.icon;
            const lift = [34, 74, 24, 84, 30, 70, 28][index];

            return (
              <Reveal key={step.title} delay={index * 0.04} className="h-full">
                <div className="group relative flex h-full flex-col justify-end" style={{ paddingBottom: lift }}>
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan shadow-glow backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:scale-110 light:border-blue-500/30 light:bg-blue-50 light:text-blue-700">
                    <Icon size={20} />
                  </div>
                  <div className="premium-card rounded-2xl border border-white/10 bg-black/28 p-4 text-center backdrop-blur-xl light:border-slate-900/10 light:bg-white/86">
                    <span className="mx-auto block w-max rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold text-cyan light:border-slate-900/10 light:bg-slate-50 light:text-blue-700">
                      0{index + 1}
                    </span>
                    <p className="mt-3 font-display text-base font-semibold leading-tight text-white light:text-slate-950">{step.title}</p>
                    <p className="mt-2 text-xs leading-5 text-silver/70 light:text-slate-600">{step.text}</p>
                    <div className="mx-auto mt-4 h-1 w-16 overflow-hidden rounded-full bg-white/10 light:bg-slate-200">
                      <div className="h-full w-2/3 rounded-full bg-premium-gradient transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="relative grid gap-4 xl:hidden">
        {process.map((step, index) => {
          const Icon = step.icon;

          return (
            <Reveal key={step.title} delay={index * 0.04}>
              <div className="premium-card group relative flex h-full min-h-36 gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 light:border-slate-900/10 light:bg-slate-50 md:min-h-40 xl:block xl:min-h-52 xl:p-4 xl:text-center">
                <div className="relative shrink-0 xl:mx-auto xl:mb-5 xl:flex xl:w-full xl:justify-center">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan transition group-hover:scale-105 light:border-blue-500/25 light:bg-blue-50 light:text-blue-700">
                    <Icon size={20} />
                  </span>
                  {index < process.length - 1 ? (
                    <span className="absolute left-7 top-14 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-cyan/45 to-transparent md:hidden" />
                  ) : null}
                </div>

                <div className="min-w-0 flex-1">
                  <span className="block w-max rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold text-cyan light:border-slate-900/10 light:bg-white light:text-blue-700 xl:mx-auto">
                    0{index + 1}
                  </span>
                  <p className="mt-3 font-display text-lg font-semibold leading-tight text-white light:text-slate-950 xl:mt-4">{step.title}</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-silver/72 light:text-slate-600 xl:mx-auto xl:max-w-[10.5rem]">
                    {step.text}
                  </p>
                  <div className="mt-4 h-1 w-20 rounded-full bg-white/10 light:bg-slate-200 xl:mx-auto">
                    <div className="h-full rounded-full bg-premium-gradient transition-all duration-500 group-hover:w-full" style={{ width: "58%" }} />
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
