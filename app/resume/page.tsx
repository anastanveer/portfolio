import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { ResumeStackGraph } from "@/components/sections/ResumeStackGraph";
import { JsonLd } from "@/components/seo/JsonLd";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Resume | Anas Tanveer Full-Stack Developer Dubai",
  description:
    "Resume of Anas Tanveer, Dubai full-stack developer for Laravel, PHP, React, WordPress, Shopify, dashboards, APIs, ecommerce and ERP.",
  path: "/resume"
});

const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "Taki Global Marketing",
    period: "11/2023 - Current",
    location: "Dubai",
    points: [
      "Solved platform scaling and trading workflow problems by developing Laravel, React, JavaScript and MySQL modules for a prop-trading platform.",
      "Integrated Rithmic and DXFeed REST APIs for real-time trading data workflows, reducing manual dependency on disconnected tools.",
      "Built trader dashboards, account management systems, secure backend APIs, Stripe and PayPal payment flows.",
      "Improved speed, backend reliability and server response through refactoring, query review, security improvements and cleaner architecture."
    ]
  },
  {
    role: "Senior Web Developer",
    company: "AUSPEXSOFT",
    period: "09/2022 - 08/2023",
    location: "Lahore",
    points: [
      "Delivered Laravel, PHP, MySQL and WordPress solutions for ecommerce, fintech and international client projects with practical business requirements.",
      "Built REST APIs, full-stack applications, admin flows and database-backed platforms where templates or plugins were not enough.",
      "Improved frontend speed, SEO structure and responsive UX using React, Bootstrap and clean UI implementation.",
      "Solved performance and reliability issues through MySQL query optimization, SSL improvements and better hosting setup."
    ]
  },
  {
    role: "Full Stack WordPress Web Developer",
    company: "CYBEXO INC.",
    period: "11/2021 - 12/2022",
    location: "Canada (Remote)",
    points: [
      "Built and deployed custom WordPress websites for small businesses, ecommerce brands and remote international clients that needed credibility and leads.",
      "Developed tailored themes, plugin-level customization, landing pages, forms and conversion-focused business pages around the client's offer.",
      "Integrated Stripe and PayPal payment flows for ecommerce and service-based websites.",
      "Improved website performance, search visibility, database response, SSL configuration and hosting stability."
    ]
  }
];

const projects = [
  {
    name: "4PropTrader Platform",
    period: "2024 - Current",
    text: "Prop trading platform built with Laravel, PHP, React and MySQL. Solved trading workflow, account management, payment and data integration needs through Rithmic/DXFeed APIs, dashboards and secure backend architecture."
  },
  {
    name: "Traivend",
    period: "2025 - Current",
    text: "CRM and LMS platform for trading education. Built course management, live classes, training modules, admin dashboards and secure APIs to organize learning, users and trading education operations."
  },
  {
    name: "ReviseMRCEM Medical Platform",
    period: "2025 - 2026",
    text: "Medical exam preparation platform with MCQ exams, course modules, live training classes, progress analytics, question management and admin controls for content and student workflows."
  }
];

const skillGroups = [
  ["Frontend", ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Redux / Flux", "Bootstrap", "Responsive UI", "Conversion UI"]],
  ["Backend", ["PHP", "Laravel", "REST APIs", "MVC Architecture", "MySQL / SQL", "Secure Backends", "Dashboard Logic"]],
  ["CMS & Platforms", ["WordPress", "Custom Themes", "Plugins", "Shopify", "Ecommerce", "SEO Optimization", "Speed Optimization"]],
  ["Tools", ["Git / GitHub", "Webpack", "cPanel", "Hosting", "Payment Gateways", "API Integrations", "Reusable Libraries"]]
];

const solverPoints = [
  "I turn old, slow or confusing websites into faster, cleaner and more trustworthy Laravel, WordPress or Shopify systems.",
  "I replace manual work with custom APIs, admin dashboards, CRM/LMS flows, payment systems and backend automation.",
  "I improve speed, security, database performance, responsive UI, SEO structure and Core Web Vitals foundations.",
  "I help recruiters, agencies, founders and UAE clients work with one developer who can understand the problem, build the solution, and support delivery."
];

const uaeFit = [
  "Web Developer UAE",
  "Laravel Developer Dubai",
  "PHP Developer UAE",
  "WordPress Developer Dubai",
  "Shopify Developer Dubai",
  "Business Dashboard Developer",
  "Ecommerce Website Developer Dubai",
  "ERP / CRM Web Application Developer",
  "Trading Platform Developer",
  "SEO Friendly Website Development"
];

const problemAreas = [
  {
    title: "When a website looks outdated",
    text: "I rebuild structure, UI, responsive layout, service messaging, forms and performance foundations so the business looks credible to UAE, UK, Canada and international visitors."
  },
  {
    title: "When plugins are not enough",
    text: "I build custom Laravel logic, REST APIs, dashboards, payment integrations, roles, reports and admin workflows instead of forcing plugins to handle business-specific systems."
  },
  {
    title: "When performance is hurting trust",
    text: "I review frontend assets, database queries, hosting setup, image weight, page structure, caching and SEO basics to make the experience faster, cleaner and easier to trust."
  }
];

export default function ResumePage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/resume")} id="resume-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
            <div className="glass overflow-hidden rounded-3xl p-4">
              <div className="relative mx-auto max-w-[240px] overflow-hidden rounded-2xl border border-white/12 bg-white light:border-slate-900/10">
                <Image
                  src="/images/anas-resume.webp"
                  alt="Anas Tanveer full-stack web developer"
                  width={700}
                  height={700}
                  priority
                  className="aspect-square w-full object-cover object-center"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-2xl font-semibold text-white light:text-slate-950">Anas Tanveer</p>
                <p className="mt-2 text-sm text-silver/70 light:text-slate-600">Full Stack Web Developer</p>
                <p className="mt-1 text-sm text-cyan">Dubai, UAE</p>
              </div>
            </div>

            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan">
                <Sparkles size={16} /> Resume & developer profile
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl light:text-slate-950">
                Web problem solver for UAE-ready Laravel, WordPress, Shopify, dashboards, APIs and ecommerce systems.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-silver/76 light:text-slate-600">
                I build practical web systems that solve real business and hiring problems: slow websites, weak admin
                panels, missing integrations, manual operations, poor performance, ecommerce friction and platforms that cannot scale.
                My experience covers PHP, Laravel, React, WordPress, Shopify, REST APIs, MySQL, trading platforms,
                ecommerce, dashboards and SEO-ready web applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/files/anas-tanveer-web-developer-cv.pdf"
                  download
                  className="premium-button-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition"
                >
                  Download CV <Download size={16} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 px-6 text-sm font-semibold text-white transition hover:border-cyan/45 light:border-slate-900/15 light:text-slate-950"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-silver/72 light:text-slate-600 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2"><Mail size={16} className="text-cyan" /> anastanveer557@gmail.com</span>
                <span className="inline-flex items-center gap-2"><Phone size={16} className="text-cyan" /> +971 542435418</span>
                <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan" /> Dubai, UAE</span>
                <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={16} className="text-cyan" /> ARS Developer Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Solution profile</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl light:text-slate-950">
              What I solve for clients, agencies and product teams.
            </h2>
          </div>
          <div className="mobile-rail grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solverPoints.map((point, index) => (
              <div className="premium-card glass rounded-2xl p-6" key={point}>
                <CheckCircle2 className="text-emerald" size={22} />
                <p className="mt-4 text-sm leading-7 text-silver/74 light:text-slate-600">{point}</p>
                <p className="mt-5 text-xs font-semibold text-cyan">0{index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">UAE market fit</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl light:text-slate-950">
                Built for clients and teams who need someone to understand the issue, then execute.
              </h2>
              <p className="mt-5 text-base leading-8 text-silver/74 light:text-slate-600">
                UAE companies, agencies and recruiters usually need someone who can understand the business requirement,
                write clean code, integrate APIs, handle dashboards, improve speed, prepare SEO foundations and communicate
                clearly. That is the profile this resume is built around: practical problem solving with full-stack delivery.
              </p>
            </div>
            <div className="mobile-rail grid gap-4 md:grid-cols-3">
              {problemAreas.map((item) => (
                <div className="premium-card glass rounded-2xl p-6" key={item.title}>
                  <Target className="text-cyan" size={22} />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white light:text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-silver/74 light:text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ResumeStackGraph />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Experience</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl light:text-slate-950">
              Work history written around problems solved, not just tasks completed.
            </h2>
          </div>
          <div className="grid gap-5">
            {experiences.map((item) => (
              <article className="premium-card glass rounded-2xl p-6" key={`${item.company}-${item.role}`}>
                <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
                  <div>
                    <p className="font-display text-2xl font-semibold text-white light:text-slate-950">{item.role}</p>
                    <p className="mt-2 text-cyan">{item.company}</p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm text-silver/68 light:text-slate-600">
                      <CalendarDays size={16} /> {item.period} • {item.location}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    {item.points.map((point) => (
                      <p className="flex gap-3 text-sm leading-7 text-silver/74 light:text-slate-600" key={point}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Projects</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl light:text-slate-950">
              CV projects with real workflow, platform and business context.
            </h2>
          </div>
          <div className="mobile-rail grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article className="premium-card glass rounded-2xl p-6" key={project.name}>
                <p className="text-sm font-semibold text-cyan">{project.period}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white light:text-slate-950">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-silver/74 light:text-slate-600">{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <div className="premium-card glass rounded-2xl p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <TrendingUp className="text-cyan" size={28} />
                <h2 className="mt-5 font-display text-3xl font-semibold text-white light:text-slate-950">
                  Search and hiring keywords this resume is aligned with.
                </h2>
                <p className="mt-4 text-sm leading-7 text-silver/74 light:text-slate-600">
                  These keywords describe the roles, freelance projects and client work where my experience is strongest.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {uaeFit.map((keyword) => (
                  <span
                    className="rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan light:border-blue-500/20 light:bg-blue-50 light:text-blue-700"
                    key={keyword}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="premium-card glass rounded-2xl p-6">
              <GraduationCap className="text-cyan" size={26} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-white light:text-slate-950">Education</h2>
              <p className="mt-4 text-sm leading-7 text-silver/74 light:text-slate-600">
                Bachelor in Computer Science, National College of Business Administration & Economics, Pakistan.
                01/2018 - 01/2022. GPA: 3.2/4.0.
              </p>
              <Award className="mt-8 text-emerald" size={26} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-white light:text-slate-950">Certifications</h2>
              <p className="mt-4 text-sm leading-7 text-silver/74 light:text-slate-600">
                Front-End Development Course, LinkedIn Learning. Full Stack Web Development Training, PNY Training Institute.
              </p>
            </div>
            <div className="mobile-rail grid gap-5 md:grid-cols-2">
              {skillGroups.map(([group, items]) => (
                <div className="premium-card glass rounded-2xl p-6" key={group as string}>
                  <ShieldCheck className="text-cyan" size={22} />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white light:text-slate-950">{group}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(items as string[]).map((skill) => (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-silver/72 light:border-slate-900/10 light:bg-slate-900/5 light:text-slate-600" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want my CV or want to discuss a problem your team needs solved?"
        text="Download my PDF resume or contact me directly for Laravel, WordPress, Shopify, dashboard, ecommerce, trading platform, REST API, ERP/CRM, SEO, speed or full-stack web development work in Dubai, UAE or remote."
      />
    </>
  );
}
