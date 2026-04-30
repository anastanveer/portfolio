import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/site";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | Laravel, WordPress & Shopify Dubai",
  description: "Web problem solving in Dubai for Laravel apps, WordPress sites, Shopify stores, dashboards, ERP, API integrations, SEO and speed.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/services")} id="services-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Services"
            title="Services for Businesses That Need Web Problems Solved."
            description="Laravel applications, WordPress websites, Shopify stores, dashboards, APIs, ecommerce, ERP, SEO and speed work planned around the outcome your business needs."
            image="/images/services-architecture.webp"
            imageAlt="Premium service architecture for Laravel WordPress Shopify ERP and SEO"
            label="Laravel, WordPress, Shopify, dashboards, APIs, ecommerce, ERP and technical SEO."
            points={["Manual work to systems", "Slow websites to speed", "Plugin limits to custom logic", "Traffic to better leads"]}
          />
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} detailed index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Questions" title="What clients, agencies, recruiters, and founders usually ask before hiring." />
          <FAQ />
        </div>
      </section>
      <CTASection
        title="Which web problem do you need solved?"
        text="Share the current issue, platform, business goal, and timeline. I’ll help identify whether Laravel, WordPress, Shopify, APIs, dashboards, SEO, speed optimization, or a custom platform is the right direction."
      />
    </>
  );
}
