import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { caseStudies } from "@/data/site";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies | Web Problems Solved by Anas Tanveer",
  description: "Case studies on trading platforms, dashboards, Shopify conversion, Laravel, APIs, ERP, ecommerce and SEO-ready web solutions.",
  path: "/case-studies"
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/case-studies")} id="case-studies-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Case Studies"
            title="Case Studies from Problem to Working Solution."
            description="Business-focused examples showing the problem, goal, strategy, features, technology, and outcome behind Laravel platforms, dashboards, Shopify logic and API delivery."
            image="/images/projects-suite-760.webp"
            imageAlt="Premium case study systems visual"
            label="Project planning, technical decisions, implementation and delivery."
            points={["Problem diagnosis", "Technical strategy", "Business impact", "Maintainable delivery"]}
          />
          <div className="mt-12 grid gap-8">
            {caseStudies.map((study, index) => (
              <article className="premium-card glass rounded-lg p-8" key={study.title}>
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-semibold text-cyan">Case Study 0{index + 1}</p>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-white light:text-slate-950">{study.title}</h2>
                    <p className="mt-5 text-sm leading-7 text-silver/72 light:text-slate-600">{study.result}</p>
                  </div>
                  <div className="grid gap-5 text-sm leading-7 text-silver/72 light:text-slate-600">
                    <p><span className="font-semibold text-white light:text-slate-950">Client Requirement:</span> {study.requirement}</p>
                    <p><span className="font-semibold text-white light:text-slate-950">Problem / Challenge:</span> {study.challenge}</p>
                    <p><span className="font-semibold text-white light:text-slate-950">Goal:</span> {study.goal}</p>
                    <p><span className="font-semibold text-white light:text-slate-950">Strategy:</span> {study.strategy}</p>
                    <p><span className="font-semibold text-white light:text-slate-950">Solution:</span> {study.solution}</p>
                    <p><span className="font-semibold text-white light:text-slate-950">Business impact:</span> {study.impact}</p>
                    <div>
                      <p className="font-semibold text-white light:text-slate-950">Features delivered:</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {study.features.map((feature) => (
                          <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs light:border-slate-900/10 light:bg-slate-900/5">{feature}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white light:text-slate-950">Tech stack:</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs text-cyan">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {study.images.map((image, imageIndex) => (
                    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] light:border-slate-900/10 light:bg-white" key={image}>
                      <Image
                        src={image}
                        alt={`${study.title} case study visual ${imageIndex + 1}`}
                        width={900}
                        height={560}
                        className="aspect-[16/10] h-full w-full object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Want your project treated like a case study?"
        text="Send the problem, current platform, business goal, and deadline. I’ll look at the workflow, users, technical risks, SEO needs, and launch path before suggesting a practical solution."
      />
    </>
  );
}
