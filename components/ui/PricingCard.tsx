import { Check } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export function PricingCard({
  plan,
  index = 0
}: {
  plan: { title: string; price: string; description: string; features: string[]; featured?: boolean };
  index?: number;
}) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)} className="h-full">
      <article className={cn("premium-card glass flex h-full flex-col rounded-lg p-6", plan.featured && "border-cyan/45 shadow-glow")}>
        {plan.featured ? <span className="mb-5 w-max rounded-full bg-cyan/12 px-3 py-1 text-xs font-semibold text-cyan">Best for custom systems</span> : null}
        <h3 className="font-display text-2xl font-semibold text-white light:text-slate-950">{plan.title}</h3>
        <p className="mt-3 text-2xl font-semibold premium-text">{plan.price}</p>
        <p className="mt-4 text-sm leading-7 text-silver/72 light:text-slate-600">{plan.description}</p>
        <div className="mt-6 grid gap-3">
          {plan.features.map((feature) => (
            <div className="flex gap-3 text-sm text-silver/75 light:text-slate-600" key={feature}>
              <Check size={17} className="mt-0.5 shrink-0 text-emerald" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <MagneticButton href="/contact" variant={plan.featured ? "primary" : "secondary"}>Request Quote</MagneticButton>
        </div>
      </article>
    </Reveal>
  );
}
