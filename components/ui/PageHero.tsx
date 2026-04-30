import { ArrowRight, Sparkles } from "lucide-react";
import { VisualPanel } from "@/components/ui/VisualPanel";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  label,
  points = [],
  visualClassName
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  label: string;
  points?: string[];
  visualClassName?: string;
}) {
  return (
    <div className="grid items-center gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3.5 py-2 text-sm font-medium text-cyan shadow-glow light:border-blue-500/25 light:bg-blue-50 light:text-blue-700">
          <Sparkles size={15} /> {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.06] text-white min-[390px]:text-4xl md:text-5xl xl:text-6xl light:text-slate-950">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-silver/76 md:text-lg md:leading-8 light:text-slate-600">
          {description}
        </p>
        {points.length ? (
          <div className="mt-6 grid grid-cols-2 gap-3 md:mt-7">
            {points.map((point, index) => (
              <div
                className={cn(
                  "flex min-w-0 items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-2.5 text-sm font-medium leading-5 text-silver/78 light:border-slate-900/10 light:bg-white light:text-slate-700 sm:gap-3 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:light:bg-transparent",
                  index > 1 && "col-span-2 sm:col-span-1"
                )}
                key={point}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cyan/20 bg-cyan/10 text-cyan">
                  <ArrowRight size={14} />
                </span>
                <span className="min-w-0">{point}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <VisualPanel src={image} alt={imageAlt} label={label} priority className={cn("hidden md:block", visualClassName)} />
    </div>
  );
}
