import { Reveal } from "@/components/animations/Reveal";
import { industries, valueBlocks } from "@/data/site";

export function ValueGrid() {
  return (
    <div className="mobile-rail grid gap-5 lg:grid-cols-3">
      {valueBlocks.map((block, index) => {
        const Icon = block.icon;
        return (
          <Reveal key={block.title} delay={index * 0.05}>
            <div className="premium-card glass h-full rounded-lg p-6">
              <Icon className="text-cyan" size={26} />
              <h3 className="mt-5 font-display text-xl font-semibold text-white light:text-slate-950">{block.title}</h3>
              <p className="mt-3 text-sm leading-7 text-silver/72 light:text-slate-600">{block.text}</p>
            </div>
          </Reveal>
        );
      })}
      <Reveal className="lg:col-span-3">
        <div className="premium-card glass rounded-lg p-6">
          <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">Industries I Work With</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span key={industry} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-silver/72 light:border-slate-900/10 light:bg-slate-900/5 light:text-slate-600">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
