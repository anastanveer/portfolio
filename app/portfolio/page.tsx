import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio | Laravel, WordPress, Shopify Projects Dubai",
  description: "Portfolio of Laravel, WordPress, Shopify, dashboard, ecommerce, ERP, SEO, API and automation problems solved by Anas Tanveer.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/portfolio")} id="portfolio-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Work / Portfolio"
            title="Portfolio Work Built Around Real Problems."
            description="Examples of Laravel platforms, WordPress websites, Shopify systems, dashboards, ecommerce, ERP and SEO-focused work where the goal was business clarity, speed, control and conversion."
            image="/images/projects-suite.webp"
            imageAlt="Premium portfolio project suite visual"
            label="Trading tools, dashboards, Shopify features, ERP systems, CMS builds and agency websites."
            points={["Business pain points", "Custom web systems", "Conversion fixes", "SEO-ready delivery"]}
          />
          <div className="mt-12">
            <WorkGrid />
          </div>
        </div>
      </section>
      <CTASection
        title="See a similar problem in your business?"
        text="Send the platform, pain point, and expected outcome. I’ll help you understand the practical path for a Laravel platform, WordPress rebuild, Shopify improvement, dashboard, ERP module, or SEO-ready website."
      />
    </>
  );
}
