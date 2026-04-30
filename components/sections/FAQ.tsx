import { Reveal } from "@/components/animations/Reveal";

const faqs = [
  ["How do you understand the real problem before coding?", "I ask about the business goal, users, current pain, platform, workflow, integrations, SEO needs, timeline, and what success should look like. Then I suggest the simplest reliable path."],
  ["Do you work with UAE, UK, Canada, and international clients?", "Yes. I support Dubai, UAE, UK, Canada and remote clients, agencies, recruiters, founders, ecommerce stores, service businesses, SaaS teams and local companies."],
  ["Can you handle both design and development?", "Yes. I can plan UX, structure conversion copy, build the frontend, develop Laravel/WordPress/Shopify features, and prepare the site for speed, SEO and launch."],
  ["Do you build custom dashboards and ERP systems?", "Yes. I build Laravel dashboards, admin panels, ERP/CRM modules, reports, user roles, API integrations, automation workflows and business-specific tools."],
  ["Is SEO included in development?", "Technical SEO foundations are planned in premium builds: semantic headings, metadata, schema, page speed, responsive UX, internal structure and crawl-friendly content architecture."],
  ["What makes your work different from a normal template setup?", "I do not just place sections on a page. I connect design, content, performance, backend logic, integrations and business workflow so the final product solves a real problem."]
];

export function FAQ() {
  return (
    <div className="mobile-rail grid gap-4 md:grid-cols-2">
      {faqs.map(([question, answer], index) => (
        <Reveal key={question} delay={index * 0.04}>
          <div className="premium-card glass h-full rounded-lg p-6">
            <h3 className="font-display text-lg font-semibold text-white light:text-slate-950">{question}</h3>
            <p className="mt-3 text-sm leading-7 text-silver/72 light:text-slate-600">{answer}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
