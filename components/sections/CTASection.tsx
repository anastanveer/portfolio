import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTASection({
  title = "Have a web problem that needs a practical solution?",
  text = "Send the current issue, platform, goal, and timeline. I’ll review the context and reply with a clear next step for Laravel, WordPress, Shopify, dashboards, APIs, SEO, speed, ecommerce, or custom web systems."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5">
        <div className="glass overflow-hidden rounded-lg p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Discuss the problem</p>
              <h2 className="font-display text-3xl font-semibold text-white md:text-5xl light:text-slate-950">{title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-silver/72 light:text-slate-600">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <MagneticButton href="/contact">Hire Me</MagneticButton>
              <MagneticButton href="https://wa.me/971542435418" variant="secondary">WhatsApp</MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
