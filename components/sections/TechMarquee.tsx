import { skills } from "@/data/site";

export function TechMarquee() {
  const items = Object.values(skills).flat();
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/[0.025] py-5 light:border-slate-900/10 light:bg-white/60">
      <div className="flex w-max animate-marquee gap-3">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-full border border-white/10 bg-transparent px-4 py-2 text-sm text-silver/68 light:border-slate-900/10 light:text-slate-600">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
