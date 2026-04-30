import type { Metadata } from "next";
import { Code2, Database, Gauge, Linkedin, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { ValueGrid } from "@/components/sections/ValueGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/data/site";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Anas Tanveer | Premium Full-Stack Developer in Dubai",
  description: "Meet Anas Tanveer, a Dubai web problem solver for Laravel, WordPress, Shopify, dashboards, APIs, ERP and SEO-ready systems.",
  path: "/about"
});

const focusAreas = [
  { icon: Code2, label: "Laravel / PHP platforms", text: "Custom backend logic, APIs, dashboards, roles and admin workflows." },
  { icon: Database, label: "Business systems", text: "ERP, CRM, reporting, database structure and process automation." },
  { icon: Gauge, label: "Speed + SEO readiness", text: "Core Web Vitals, clean structure, metadata, schema and crawl-ready pages." },
  { icon: ShieldCheck, label: "Reliable delivery", text: "Clear scope, practical communication, testing and launch support." }
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/about")} id="about-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="About Anas Tanveer"
            title="A Full-Stack Developer Who Solves Business Web Problems."
            description="I help clients, agencies and recruiters turn unclear websites, manual operations, slow pages, ecommerce friction and weak backend workflows into clean digital systems."
            image="/images/about-resume-brand.webp"
            imageAlt="Anas Tanveer premium developer brand visual"
            label="Anas Tanveer: Laravel, WordPress, Shopify, dashboards, APIs and SEO-ready systems."
            points={["7+ years experience", "Dubai, UAE", "Laravel / WordPress / Shopify", "Dashboards, APIs, ecommerce"]}
          />
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Profile strengths" title="Why teams and clients trust me with business-critical web work." />
          <ValueGrid />
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl px-5">
          <div className="about-profile-shell overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 light:border-slate-900/10 light:bg-white md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Professional Profile</p>
                <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-white light:text-slate-950 md:text-5xl">
                  A developer profile built around diagnosis, delivery, and business outcomes.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-8 text-silver/74 light:text-slate-600">
                  <p>
                    I work with clients, agencies, recruiters, and founders who need more than a nice interface: they need
                    a website or platform that explains value clearly, loads fast, supports search, and makes daily work easier.
                  </p>
                  <p>
                    My work usually sits between product thinking and engineering: I identify what is slowing the business down,
                    then translate that into Laravel applications, WordPress business websites, Shopify improvements, dashboards,
                    APIs, ERP workflows, technical SEO, and performance fixes.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <MagneticButton href="/resume">View Resume</MagneticButton>
                  <MagneticButton href="/contact" variant="secondary">Contact Me</MagneticButton>
                </div>
              </div>

              <div className="relative">
                <div className="about-orbit pointer-events-none absolute inset-0 opacity-75" aria-hidden="true" />
                <div className="relative grid gap-4">
                  {focusAreas.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        className="premium-card rounded-2xl border border-white/10 bg-ink/62 p-4 light:border-slate-900/10 light:bg-slate-50 md:p-5"
                        key={item.label}
                        style={{ animationDelay: `${index * 110}ms` }}
                      >
                        <div className="flex gap-4">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                            <Icon size={19} />
                          </span>
                          <div>
                            <h3 className="font-display text-lg font-semibold text-white light:text-slate-950">{item.label}</h3>
                            <p className="mt-2 text-sm leading-6 text-silver/70 light:text-slate-600">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 light:border-slate-900/10 md:grid-cols-4">
              <a className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-silver/78 transition hover:border-cyan/35 hover:text-cyan light:border-slate-900/10 light:bg-slate-50 light:text-slate-700" href={`mailto:${profile.email}`}>
                <Mail size={18} className="text-cyan" /> Email
              </a>
              <a className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-silver/78 transition hover:border-cyan/35 hover:text-cyan light:border-slate-900/10 light:bg-slate-50 light:text-slate-700" href="https://wa.me/971542435418">
                <MessageCircle size={18} className="text-emerald" /> WhatsApp
              </a>
              <a className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-silver/78 transition hover:border-cyan/35 hover:text-cyan light:border-slate-900/10 light:bg-slate-50 light:text-slate-700" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} className="text-violet" /> LinkedIn
              </a>
              <span className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-silver/78 light:border-slate-900/10 light:bg-slate-50 light:text-slate-700">
                <MapPin size={18} className="text-cyan" /> Dubai, UAE
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
