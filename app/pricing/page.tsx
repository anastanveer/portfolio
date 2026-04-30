import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { PricingCard } from "@/components/ui/PricingCard";
import { pricing } from "@/data/site";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pricing | Laravel, WordPress & Shopify Packages",
  description: "Pricing for website, ecommerce, Laravel platform, dashboard, ERP, Shopify, WordPress, SEO, speed and support problems.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/pricing")} id="pricing-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Engagement options"
            title="Project Options Based on the Problem You Need Solved."
            description="Starting points for businesses that need a credible website, ecommerce improvements, a custom Laravel platform, dashboard, ERP workflow, SEO-ready rebuild or monthly technical support."
            image="/images/contact-pricing.webp"
            imageAlt="Premium pricing and project consultation visual"
            label="Share the scope, platform, timeline, features and expected outcome."
            points={["Website credibility", "Lead generation", "Ecommerce conversion", "Custom systems"]}
          />
          <div className="mobile-rail mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <PricingCard key={plan.title} plan={plan} index={index} />
            ))}
          </div>
          <p className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-7 text-silver/72 light:border-slate-900/10 light:bg-white light:text-slate-600">
            Final pricing depends on scope, features, integrations, timeline, and platform.
          </p>
        </div>
      </section>
      <CTASection
        title="Not sure which package fits?"
        text="Send the current pain point, platform, required features, integrations, and deadline. I’ll help you choose a practical path instead of overselling the wrong build."
      />
    </>
  );
}
