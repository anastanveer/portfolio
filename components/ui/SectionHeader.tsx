import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("mb-12", align === "center" && "mx-auto max-w-3xl text-center")}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-normal text-white md:text-5xl light:text-slate-950">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-8 text-silver/72 md:text-lg light:text-slate-600">{description}</p>
      ) : null}
    </Reveal>
  );
}

