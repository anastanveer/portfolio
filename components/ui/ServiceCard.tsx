import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";

export function ServiceCard({
  service,
  detailed = false,
  index = 0
}: {
  service: {
    icon: LucideIcon;
    title: string;
    short: string;
    pain: string;
    solution: string;
    impact: string;
    technologies: string[];
  };
  detailed?: boolean;
  index?: number;
}) {
  const Icon = service.icon;

  return (
    <Reveal delay={Math.min(index * 0.04, 0.22)} className="h-full">
      <article className="premium-card group glass flex h-full flex-col rounded-lg p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
            <Icon size={22} />
          </span>
          <ArrowUpRight className="text-silver/35 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan" size={20} />
        </div>
        <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-silver/72 light:text-slate-600">{service.short}</p>
        {detailed ? (
          <div className="mt-5 grid gap-3 text-sm leading-7 text-silver/72 light:text-slate-600 md:mt-6 md:gap-4">
            <p><span className="font-semibold text-white light:text-slate-950">Client pain:</span> {service.pain}</p>
            <p className="hidden md:block"><span className="font-semibold text-white light:text-slate-950">Solution:</span> {service.solution}</p>
            <p><span className="font-semibold text-white light:text-slate-950">Business impact:</span> {service.impact}</p>
          </div>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          {service.technologies.slice(0, detailed ? 6 : 4).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver/70 light:border-slate-900/10 light:bg-slate-900/5 light:text-slate-600">
              {tech}
            </span>
          ))}
        </div>
        <Link href="/contact" className="mt-6 inline-flex text-sm font-medium text-cyan hover:text-emerald">
          Discuss this service
        </Link>
      </article>
    </Reveal>
  );
}
