import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  MapPin,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Workflow
} from "lucide-react";

export const profile = {
  name: "Anas Tanveer",
  location: "Dubai, UAE",
  role: "Full-Stack Web Developer / Laravel Developer / WordPress Developer / Shopify Developer",
  experience: "7+ years",
  company: "ARS Developer Ltd",
  portfolio: "https://anastanveer.com",
  companyUrl: "https://arsdeveloper.co.uk",
  linkedin: "https://www.linkedin.com/in/anas-fullstackdev/",
  email: "anastanveer557@gmail.com",
  whatsapp: "+971 542435418"
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export const stats = [
  ["7+", "Years Experience"],
  ["100+", "Projects Delivered"],
  ["UAE / UK / Canada", "Client Markets"],
  ["Laravel / WordPress / Shopify", "Specialist Stack"]
];

export const services = [
  {
    icon: Code2,
    title: "Custom Laravel Web Application Development Dubai",
    short: "Laravel systems for companies that need secure workflows, admin control, and room to grow.",
    pain: "Your business is running on spreadsheets, plugin workarounds, or a website that cannot handle real operations.",
    solution: "I map the workflow first, then develop Laravel modules, role-based dashboards, APIs, queues, reports, and clean database structure around the actual business process.",
    impact: "A maintainable platform that reduces manual work, improves control, and gives teams a stronger technical base for growth.",
    technologies: ["Laravel", "PHP", "MySQL", "Livewire", "React", "REST APIs"]
  },
  {
    icon: BarChart3,
    title: "Scalable Business Dashboard & Admin Panel Development",
    short: "Admin panels that help teams see orders, users, finance, reports, and operations clearly.",
    pain: "Decision makers cannot trust the data because reports are manual, scattered, or hidden inside multiple tools.",
    solution: "I create focused dashboards with permissions, filters, exports, charts, notifications, and admin flows that match how the team actually works.",
    impact: "Faster reporting, better visibility, fewer manual mistakes, and a clearer view of business performance.",
    technologies: ["Laravel", "React", "Charts", "MySQL", "Tailwind", "API Integrations"]
  },
  {
    icon: Globe2,
    title: "WordPress Business Website Development SEO Optimized",
    short: "WordPress websites that look credible, load fast, and support lead generation.",
    pain: "Your website looks like a template, does not explain value clearly, and gives visitors no strong reason to contact you.",
    solution: "I rebuild the structure, sections, messaging, forms, technical SEO, schema, speed, and responsive experience around trust and conversion.",
    impact: "A sharper business presence that supports Google visibility, paid traffic, recruiter trust, and better inquiry quality.",
    technologies: ["WordPress", "PHP", "ACF", "Elementor", "Core Web Vitals", "Schema"]
  },
  {
    icon: ShoppingBag,
    title: "Shopify Advanced Customization & Conversion Optimization",
    short: "Shopify improvements for stores that need cleaner product UX and fewer buying doubts.",
    pain: "Customers leave because sizes, variants, product details, trust signals, or mobile shopping flows are confusing.",
    solution: "I customize Liquid sections, metafields, product selectors, conversion blocks, theme performance, and product-page logic.",
    impact: "A smoother store experience that helps customers choose faster, trust the product, and move closer to checkout.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Metafields", "Theme Sections", "Analytics"]
  },
  {
    icon: ServerCog,
    title: "ERP & CRM System Development for Businesses",
    short: "ERP and CRM modules for inventory, customers, staff, orders, invoices, and reports.",
    pain: "Operations slow down when records live in chats, Excel files, paper notes, or disconnected software.",
    solution: "I design digital workflows for approvals, roles, records, reports, customer history, inventory movement, and management dashboards.",
    impact: "Better operational control, cleaner records, faster staff workflows, and less dependency on manual tracking.",
    technologies: ["Laravel", "MySQL", "REST APIs", "Queues", "PDF Reports", "Role Permissions"]
  },
  {
    icon: Rocket,
    title: "SaaS Platform Development Laravel / React Based",
    short: "SaaS foundations for founders who need a real product, not a fragile prototype.",
    pain: "An idea cannot be sold or tested properly until auth, users, roles, dashboards, billing logic, and data structure are reliable.",
    solution: "I build MVP modules, portals, admin areas, APIs, subscriptions, secure database models, and scalable Laravel/React architecture.",
    impact: "A product foundation that can be launched, validated, improved, and expanded with confidence.",
    technologies: ["Laravel", "React", "Next.js", "Stripe", "APIs", "Cloud Hosting"]
  },
  {
    icon: Workflow,
    title: "Custom API Development & Third-Party Integrations",
    short: "APIs and integrations that remove duplicate work between business tools.",
    pain: "Teams waste hours moving data between payment gateways, CRMs, dashboards, maps, email tools, and reporting systems.",
    solution: "I build REST APIs, webhook handling, OAuth flows, payment integrations, CRM links, automation logic, and secure data exchange.",
    impact: "Connected systems, fewer manual handoffs, cleaner data, and faster operational workflows.",
    technologies: ["REST", "Webhooks", "Laravel", "OAuth", "Payment APIs", "CRM APIs"]
  },
  {
    icon: Gauge,
    title: "Website Speed Optimization & Core Web Vitals",
    short: "Speed optimization for websites where slow loading is damaging trust and conversions.",
    pain: "Visitors leave, ads waste budget, and SEO performance suffers when pages feel heavy or unstable on mobile.",
    solution: "I review assets, rendering, caching, fonts, images, queries, hosting, scripts, Core Web Vitals, and page structure.",
    impact: "A faster, cleaner experience that feels more professional and supports search, paid traffic, and lead generation.",
    technologies: ["Next.js", "WordPress", "Caching", "Image Optimization", "Lighthouse", "Technical SEO"]
  },
  {
    icon: Search,
    title: "SEO-Friendly Website Development Dubai",
    short: "Technical SEO foundations for websites that need visibility before marketing spend scales.",
    pain: "Many websites look finished but launch with weak headings, poor metadata, missing schema, slow pages, and unclear service targeting.",
    solution: "I build semantic pages, service-focused content structure, schema, sitemap, canonical URLs, metadata, internal linking, and crawl-friendly UI.",
    impact: "A stronger search foundation for Dubai, UAE, UK, Canada, and international clients before ads or content campaigns begin.",
    technologies: ["Schema", "Metadata", "Sitemap", "Core Web Vitals", "Semantic HTML", "Content Structure"]
  },
  {
    icon: LineChart,
    title: "Trading Platform & Financial Dashboard Development",
    short: "Trading dashboards, calculators, and finance workflows with clear UX and reliable data handling.",
    pain: "Finance and prop-firm users need accurate calculations, fast interfaces, clear reporting, and credible platform flows.",
    solution: "I develop calculators, account flows, data integrations, dashboards, payment flows, admin controls, and reporting features.",
    impact: "A more trusted platform experience for users and a more manageable system for operators.",
    technologies: ["Laravel", "JavaScript", "Charts", "Financial Logic", "Dashboards", "APIs"]
  },
  {
    icon: MapPin,
    title: "Location-Based Web Applications with Maps / Geo Features",
    short: "Map-based workflows for users, assets, deliveries, branches, and service areas.",
    pain: "Businesses lose visibility when location data is stored as plain text and cannot be searched, filtered, or mapped.",
    solution: "I integrate maps, coordinates, geolocation permissions, area filters, user markers, route logic, and admin map views.",
    impact: "Better location visibility, faster decisions, and more useful operational data.",
    technologies: ["Livewire", "Leaflet", "Maps", "Geolocation", "Laravel", "MySQL"]
  },
  {
    icon: Layers3,
    title: "UI/UX Website Redesign & Conversion Optimization",
    short: "Redesigns for businesses that need a stronger first impression and clearer conversion path.",
    pain: "A dated or confusing interface makes visitors doubt the business before they understand the offer.",
    solution: "I redesign page structure, messaging, sections, forms, mobile UX, product pages, landing pages, and trust-building details.",
    impact: "A premium experience that explains value faster and gives visitors a clearer reason to take action.",
    technologies: ["Next.js", "Tailwind", "Framer Motion", "Analytics", "A/B Thinking", "Copy Structure"]
  }
];

export const projects = [
  {
    title: "Trading Platform & Calculator System for Prop Firm",
    category: "Laravel",
    problem: "The business needed a prop-firm platform that felt credible, handled trading-related workflows, and did not depend on scattered manual tools.",
    solution: "Structured the Laravel foundation around calculators, account flows, dashboards, admin controls, payment readiness, and scalable backend logic.",
    stack: ["Laravel", "PHP", "JavaScript", "MySQL", "Dashboard UX"],
    accent: "from-cyan-400 to-violet-500",
    image: "/images/projects-suite-760.webp"
  },
  {
    title: "Business Finance Dashboard & Analytics System",
    category: "Dashboard",
    problem: "Managers needed finance and operations data in one place instead of chasing numbers across spreadsheets and disconnected reports.",
    solution: "Designed dashboard modules with analytics cards, filters, exports, role-aware views, and clear reporting flows.",
    stack: ["Laravel", "Charts", "MySQL", "Tailwind", "Reports"],
    accent: "from-emerald-400 to-cyan-400",
    image: "/images/projects-suite-760.webp"
  },
  {
    title: "Shopify Size Mapping & Conversion Optimization System",
    category: "Shopify",
    problem: "Customers were unsure which size to choose, creating buying friction, hesitation, and avoidable support questions.",
    solution: "Created a Shopify size selector and product-specific mapping workflow using theme logic, metafields, and mobile-friendly UX.",
    stack: ["Shopify", "Liquid", "JavaScript", "Metafields", "UX"],
    accent: "from-violet-400 to-fuchsia-500",
    image: "/images/projects-suite-760.webp"
  },
  {
    title: "SEO-Optimized Laravel Blog CMS",
    category: "SEO",
    problem: "The business needed publishing control without plugin bloat, slow pages, or weak technical SEO foundations.",
    solution: "Built a Laravel CMS with metadata fields, clean slugs, structured content, schema readiness, fast rendering, and admin publishing.",
    stack: ["Laravel", "SEO", "CMS", "MySQL", "Schema"],
    accent: "from-cyan-300 to-emerald-400",
    image: "/images/services-architecture-760.webp"
  },
  {
    title: "Fuel Distribution ERP System for Business Operations",
    category: "ERP",
    problem: "Manual tracking made it hard to manage orders, customers, inventory, staff actions, and business reports reliably.",
    solution: "Resolved the operational gap with ERP modules for records, staff workflows, reporting, approvals, and role-based business controls.",
    stack: ["Laravel", "ERP", "MySQL", "Roles", "Reports"],
    accent: "from-amber-300 to-emerald-500",
    image: "/images/Portfolio/ERP/1.avif"
  },
  {
    title: "Location-Based User Map & Geo Tracking System",
    category: "Laravel",
    problem: "Admins needed to understand user location data visually instead of reading raw coordinates or address fields.",
    solution: "Integrated Livewire and Leaflet with location storage, map rendering, filters, markers, and geo-based interactions.",
    stack: ["Laravel", "Livewire", "Leaflet", "Maps", "Geo"],
    accent: "from-blue-400 to-emerald-400",
    image: "/images/services-architecture-760.webp"
  },
  {
    title: "Premium Software Agency Brand Website",
    category: "WordPress",
    problem: "The agency needed a sharper digital presence that explained services clearly and converted visitors into serious inquiries.",
    solution: "Created a polished agency website structure with service positioning, trust sections, technical SEO, and performance focus.",
    stack: ["WordPress", "PHP", "SEO", "Performance", "Brand UX"],
    accent: "from-silver to-cyan-400",
    image: "/images/about-resume-brand.webp"
  },
  {
    title: "WordPress Business Websites",
    category: "WordPress",
    problem: "Businesses needed credible websites that explain their offer, load quickly, and create trust before a sales conversation.",
    solution: "Delivered WordPress websites with premium sections, responsive layouts, forms, SEO setup, schema, and speed optimization.",
    stack: ["WordPress", "Elementor", "ACF", "SEO", "Core Web Vitals"],
    accent: "from-violet-500 to-cyan-400",
    image: "/images/about-resume-brand.webp"
  }
];

export const portfolioProjects = [
  {
    title: "TLC Plumbing Service Website",
    category: "WordPress",
    problem: "Local service business needed a fast, trust-focused website that clearly presents plumbing, heating and repair services.",
    solution: "Delivered a WordPress service site with clear hero messaging, service navigation, mobile-first sections and local inquiry flow.",
    stack: ["WordPress", "Local SEO", "Service Website", "Lead Forms"],
    accent: "from-blue-500 to-cyan-400",
    image: "/images/Portfolio/WordPress/1.avif"
  },
  {
    title: "Cardiff Pest Control Website",
    category: "WordPress",
    problem: "Pest control visitors needed fast confidence, service clarity and an easy path to request help.",
    solution: "Built a WordPress service platform with trust sections, CTA flow, local SEO structure and responsive content layout.",
    stack: ["WordPress", "SEO", "Service Pages", "CTA UX"],
    accent: "from-emerald-500 to-cyan-400",
    image: "/images/Portfolio/WordPress/2.avif"
  },
  {
    title: "Bathhouse Wellness Website",
    category: "WordPress",
    problem: "The brand needed a polished visual website that makes the wellness experience feel premium and easy to understand.",
    solution: "Structured a WordPress site with strong visual sections, service storytelling, responsive layout and conversion-ready content.",
    stack: ["WordPress", "Wellness", "Brand UX", "Responsive"],
    accent: "from-amber-400 to-violet-500",
    image: "/images/Portfolio/WordPress/3.avif"
  },
  {
    title: "All Paws Veterinary Clinic",
    category: "WordPress",
    problem: "A veterinary clinic needed a warm, credible website that guides pet owners to services and appointment action.",
    solution: "Created a WordPress business website with clear service blocks, contact direction, mobile UX and local trust signals.",
    stack: ["WordPress", "Clinic Website", "Local SEO", "Forms"],
    accent: "from-rose-400 to-cyan-400",
    image: "/images/Portfolio/WordPress/4.avif"
  },
  {
    title: "Beaver Brook Wellness Platform",
    category: "WordPress",
    problem: "The site needed calm branding, service clarity and an approachable experience for wellness visitors.",
    solution: "Delivered a clean WordPress layout with service hierarchy, modern sections and responsive page structure.",
    stack: ["WordPress", "Wellness", "CMS", "Responsive"],
    accent: "from-emerald-300 to-blue-400",
    image: "/images/Portfolio/WordPress/5.avif"
  },
  {
    title: "Colour Lounge Website",
    category: "WordPress",
    problem: "The business needed a premium website presence with service confidence and clean booking-oriented flow.",
    solution: "Built a WordPress service website with branded visuals, clear content sections and mobile-ready layouts.",
    stack: ["WordPress", "Beauty", "Service UX", "SEO"],
    accent: "from-fuchsia-400 to-cyan-400",
    image: "/images/Portfolio/WordPress/6.avif"
  },
  {
    title: "Toronto Real Estate Brand Site",
    category: "WordPress",
    problem: "A real estate brand needed a strong first impression, clear positioning and polished service credibility.",
    solution: "Created a WordPress brand website with elegant visual hierarchy, lead-focused sections and responsive structure.",
    stack: ["WordPress", "Real Estate", "Lead UX", "Brand"],
    accent: "from-slate-400 to-violet-500",
    image: "/images/Portfolio/WordPress/7.avif"
  },
  {
    title: "Halcyon Health Website",
    category: "WordPress",
    problem: "A health service website needed clear messaging, accessible service flow and a smooth appointment path.",
    solution: "Delivered WordPress pages with organized service content, mobile-friendly CTA flow and SEO-ready structure.",
    stack: ["WordPress", "Healthcare", "SEO", "Forms"],
    accent: "from-cyan-300 to-emerald-400",
    image: "/images/Portfolio/WordPress/8.avif"
  },
  {
    title: "Legendary Care Club Website",
    category: "WordPress",
    problem: "The service brand needed a bold site that explains care coverage and converts visitors into inquiries.",
    solution: "Built WordPress pages with high-contrast visuals, service sections, local cues and lead-ready CTAs.",
    stack: ["WordPress", "Local SEO", "Service UX", "Lead Flow"],
    accent: "from-yellow-300 to-blue-500",
    image: "/images/Portfolio/WordPress/9.avif"
  },
  {
    title: "Home Services WordPress Website",
    category: "WordPress",
    problem: "A home services business needed service visibility across heating, plumbing, electrical and air conditioning.",
    solution: "Structured a WordPress website with service category blocks, financing messaging, CTAs and mobile-friendly layout.",
    stack: ["WordPress", "Home Services", "SEO", "CTA UX"],
    accent: "from-sky-400 to-emerald-400",
    image: "/images/Portfolio/WordPress/10.avif"
  },
  {
    title: "Premium Car Detailing Website",
    category: "WordPress",
    problem: "The brand needed a service website that presents detailing quality, convenience and booking confidence.",
    solution: "Delivered WordPress sections for services, trust, location details and conversion-focused contact direction.",
    stack: ["WordPress", "Automotive", "Service Pages", "SEO"],
    accent: "from-zinc-400 to-amber-400",
    image: "/images/Portfolio/WordPress/11.avif"
  },
  {
    title: "Bath Pest Control Website",
    category: "WordPress",
    problem: "A pest control company needed stronger local service visibility and fast inquiry actions.",
    solution: "Built a WordPress website with service-led pages, trust messaging, local SEO and simple contact flow.",
    stack: ["WordPress", "Pest Control", "Local SEO", "Forms"],
    accent: "from-blue-500 to-red-500",
    image: "/images/Portfolio/WordPress/12.avif"
  },
  {
    title: "Style Cosmetics Shopify Store",
    category: "Shopify",
    problem: "A beauty store needed product presentation that feels clean, fast and conversion focused.",
    solution: "Improved Shopify storefront layout with product visuals, collection structure and mobile shopping flow.",
    stack: ["Shopify", "Ecommerce", "Beauty", "Conversion"],
    accent: "from-pink-300 to-violet-400",
    image: "/images/Portfolio/Shopify/1.avif"
  },
  {
    title: "Activewear Shopify Store",
    category: "Shopify",
    problem: "The store needed modern product storytelling and responsive shopping sections for apparel customers.",
    solution: "Built Shopify storefront sections with strong imagery, collection flow and product-page clarity.",
    stack: ["Shopify", "Fashion", "Liquid", "Mobile UX"],
    accent: "from-neutral-400 to-cyan-400",
    image: "/images/Portfolio/Shopify/2.avif"
  },
  {
    title: "ColourPop Style Ecommerce Store",
    category: "Shopify",
    problem: "A cosmetics store needed clearer collection presentation and buying confidence on product pages.",
    solution: "Delivered Shopify theme sections, product blocks, collection UX and responsive ecommerce layout.",
    stack: ["Shopify", "Cosmetics", "Theme UX", "Ecommerce"],
    accent: "from-rose-300 to-amber-300",
    image: "/images/Portfolio/Shopify/3.avif"
  },
  {
    title: "Skincare Collection Store",
    category: "Shopify",
    problem: "Product discovery needed cleaner category flow, stronger visuals and easier mobile browsing.",
    solution: "Customized Shopify collection layouts with product cards, visual hierarchy and conversion-ready sections.",
    stack: ["Shopify", "Skincare", "Collections", "Conversion"],
    accent: "from-violet-300 to-emerald-300",
    image: "/images/Portfolio/Shopify/4.avif"
  },
  {
    title: "Homeware Shopify Store",
    category: "Shopify",
    problem: "A lifestyle ecommerce brand needed a premium homepage that guides users into product discovery.",
    solution: "Built Shopify homepage sections with brand storytelling, collection highlights and clean product navigation.",
    stack: ["Shopify", "Homeware", "Landing Page", "UX"],
    accent: "from-stone-300 to-cyan-400",
    image: "/images/Portfolio/Shopify/5.avif"
  },
  {
    title: "Nerdy Nuts Ecommerce Store",
    category: "Shopify",
    problem: "The food ecommerce store needed vibrant product presentation and a smoother buying path.",
    solution: "Created Shopify storefront sections focused on product discovery, visual trust and mobile conversion.",
    stack: ["Shopify", "Food Ecommerce", "Product UX", "Mobile"],
    accent: "from-yellow-300 to-rose-400",
    image: "/images/Portfolio/Shopify/6.avif"
  },
  {
    title: "Minimal Footwear Shopify Store",
    category: "Shopify",
    problem: "A footwear store needed a clean product experience with less friction and stronger product focus.",
    solution: "Refined Shopify layout, product imagery, collection flow and responsive shopping experience.",
    stack: ["Shopify", "Footwear", "Product UX", "Conversion"],
    accent: "from-slate-300 to-emerald-300",
    image: "/images/Portfolio/Shopify/7.avif"
  },
  {
    title: "Sneaker Ecommerce Store",
    category: "Shopify",
    problem: "The store needed better category browsing and a more reliable product-selection experience.",
    solution: "Improved Shopify product and collection structure with stronger visual hierarchy and mobile-ready UX.",
    stack: ["Shopify", "Sneakers", "Ecommerce", "Liquid"],
    accent: "from-blue-400 to-red-400",
    image: "/images/Portfolio/Shopify/8.avif"
  },
  {
    title: "Nike Inspired Product Store",
    category: "Shopify",
    problem: "A product-focused store needed bold visual presentation and clear shopping direction.",
    solution: "Built Shopify sections with high-impact imagery, product navigation and conversion-focused layout.",
    stack: ["Shopify", "Sportswear", "Product Page", "Ecommerce"],
    accent: "from-orange-400 to-violet-500",
    image: "/images/Portfolio/Shopify/9.avif"
  },
  {
    title: "Dating App Landing Experience",
    category: "Custom Coding",
    problem: "The product needed a bold landing page that communicates the app idea quickly and encourages signups.",
    solution: "Created a custom-coded landing experience with strong hero composition, responsive layout and CTA flow.",
    stack: ["Custom Coding", "Landing Page", "Frontend", "Conversion"],
    accent: "from-yellow-300 to-fuchsia-400",
    image: "/images/Portfolio/Custom/1.avif"
  },
  {
    title: "Events Platform Landing Page",
    category: "Custom Coding",
    problem: "The brand needed a dark, premium landing page for event discovery and user engagement.",
    solution: "Delivered a custom landing design with visual hierarchy, event sections and conversion-focused CTA placement.",
    stack: ["Custom Coding", "Events", "Landing Page", "UI"],
    accent: "from-zinc-500 to-cyan-400",
    image: "/images/Portfolio/Custom/2.avif"
  },
  {
    title: "AI Product Website",
    category: "Custom Coding",
    problem: "An AI product needed a clean website that explains its value without overwhelming users.",
    solution: "Built a focused custom website with product messaging, clean layout and startup-style positioning.",
    stack: ["Custom Coding", "AI", "SaaS", "Landing Page"],
    accent: "from-stone-300 to-emerald-300",
    image: "/images/Portfolio/Custom/3.avif"
  },
  {
    title: "Prop Trading Platform Website",
    category: "Custom Coding",
    problem: "A trading brand needed credible positioning, product clarity and conversion flow for prop-firm users.",
    solution: "Created a custom-coded site with trading-focused sections, trust metrics and performance-oriented UI.",
    stack: ["Custom Coding", "Trading", "Prop Firm", "Conversion"],
    accent: "from-emerald-400 to-cyan-400",
    image: "/images/Portfolio/Custom/4.avif"
  },
  {
    title: "4PropTrader Platform Website",
    category: "Custom Coding",
    problem: "The platform needed a modern website that explains funding, features and user value clearly.",
    solution: "Delivered a custom trading platform website with structured content, responsive layout and CTA strategy.",
    stack: ["Custom Coding", "Trading", "Dashboard UX", "Frontend"],
    accent: "from-violet-400 to-cyan-400",
    image: "/images/Portfolio/Custom/5.avif"
  },
  {
    title: "Travel & Membership Landing Page",
    category: "Custom Coding",
    problem: "The business needed a high-impact landing page for membership and travel-related conversion.",
    solution: "Built a custom landing page with premium visuals, trust messaging and clear conversion actions.",
    stack: ["Custom Coding", "Landing Page", "Travel", "Conversion"],
    accent: "from-amber-400 to-violet-500",
    image: "/images/Portfolio/Custom/6.avif"
  },
  {
    title: "Members Club Landing Page",
    category: "Landing Pages",
    problem: "A lifestyle brand needed a landing page that feels exclusive and guides visitors to join.",
    solution: "Created a focused landing page with strong hero imagery, simple messaging and action-led layout.",
    stack: ["Landing Pages", "Frontend", "CTA UX", "Brand"],
    accent: "from-neutral-500 to-amber-400",
    image: "/images/Portfolio/Landing/1.avif"
  },
  {
    title: "Session Platform Landing Page",
    category: "Landing Pages",
    problem: "A digital product needed a clear page that explains sessions, outcomes and user benefit quickly.",
    solution: "Delivered a bright landing page with concise messaging, product sections and signup-focused flow.",
    stack: ["Landing Pages", "SaaS", "Conversion", "Frontend"],
    accent: "from-yellow-300 to-emerald-400",
    image: "/images/Portfolio/Landing/2.avif"
  },
  {
    title: "Continent Dispo CRM Map Dashboard",
    category: "CRM",
    problem: "The team needed location visibility and CRM data in one admin interface instead of scattered manual tracking.",
    solution: "Built CRM dashboard views with map-based records, operational panels and organized business data.",
    stack: ["CRM", "Dashboard", "Maps", "Business Data"],
    accent: "from-cyan-400 to-emerald-400",
    image: "/images/Portfolio/Crm/continentdispo/crm-1.avif"
  },
  {
    title: "Continent Dispo CRM Record Workflow",
    category: "CRM",
    problem: "Staff needed a cleaner way to manage records, status updates and internal workflow actions.",
    solution: "Designed CRM workflow screens with data forms, admin controls and structured operational views.",
    stack: ["CRM", "Admin Panel", "Workflow", "Records"],
    accent: "from-emerald-400 to-blue-400",
    image: "/images/Portfolio/Crm/continentdispo/crm-2.avif"
  },
  {
    title: "Continent Dispo CRM Overview Dashboard",
    category: "CRM",
    problem: "Managers needed quick access to operational totals, recent activity and business status.",
    solution: "Created dashboard summary screens with metrics, navigation and CRM overview for faster decisions.",
    stack: ["CRM", "Dashboard", "Reports", "Admin UX"],
    accent: "from-violet-400 to-cyan-400",
    image: "/images/Portfolio/Crm/continentdispo/crm-main.avif"
  },
  {
    title: "ERP Operations Control Dashboard",
    category: "ERP",
    problem: "Business teams needed one clear place to manage operational records, daily activity, reporting and internal workflow visibility.",
    solution: "Planned an ERP-style control dashboard that organizes records, actions, reports and team visibility into a cleaner business workflow.",
    stack: ["ERP", "Dashboard", "Operations", "Reports"],
    accent: "from-emerald-400 to-cyan-400",
    image: "/images/Portfolio/ERP/1.avif"
  },
  {
    title: "ERP Business Records & Reporting System",
    category: "ERP",
    problem: "Manual tracking made it difficult to trust business records, follow status changes and understand operational performance quickly.",
    solution: "Structured ERP screens for business data, reporting, status tracking and decision-ready admin visibility.",
    stack: ["ERP", "Admin Panel", "Business Data", "Workflow"],
    accent: "from-cyan-400 to-violet-500",
    image: "/images/Portfolio/ERP/2.avif"
  },
  {
    title: "Cannon University Wix Website",
    category: "Wix",
    problem: "The project needed a quick website presence for conference and informational content.",
    solution: "Built a Wix website layout with event information, visual sections and accessible page structure.",
    stack: ["Wix", "Conference", "Website", "Content"],
    accent: "from-blue-400 to-violet-400",
    image: "/images/Portfolio/Wix/1.avif"
  },
  {
    title: "Design Participation Wix Website",
    category: "Wix",
    problem: "The organization needed a structured informational website with participation and event details.",
    solution: "Created Wix pages with organized content, navigation and clean responsive presentation.",
    stack: ["Wix", "Event Website", "Content", "Responsive"],
    accent: "from-sky-400 to-emerald-400",
    image: "/images/Portfolio/Wix/2.avif"
  },
  {
    title: "Climate Change 2017 Wix Website",
    category: "Wix",
    problem: "The website needed to present long-form climate content in a clear and readable way.",
    solution: "Built a Wix informational site with structured sections, readable typography and responsive layout.",
    stack: ["Wix", "Informational", "Content Layout", "Responsive"],
    accent: "from-indigo-400 to-cyan-400",
    image: "/images/Portfolio/Wix/3.avif"
  },
  {
    title: "International Mathematical Olympiad Webflow Site",
    category: "Webflow",
    problem: "The project needed a clean informational website with event details and organized content.",
    solution: "Delivered a Webflow site structure with clear sections, responsive layout and professional visual hierarchy.",
    stack: ["Webflow", "Event Website", "Responsive", "Content"],
    accent: "from-blue-400 to-cyan-400",
    image: "/images/Portfolio/Webflow/1.avif"
  },
  {
    title: "The Big Rev Webflow Experience",
    category: "Webflow",
    problem: "The brand needed a bold, memorable web presence with a strong visual identity.",
    solution: "Created a Webflow experience with high-impact typography, responsive layout and campaign-style structure.",
    stack: ["Webflow", "Brand Website", "Visual UX", "Responsive"],
    accent: "from-neutral-200 to-violet-400",
    image: "/images/Portfolio/Webflow/2.avif"
  }
];

export const caseStudies = [
  {
    title: "Trading Platform & Calculator System for Prop Firm",
    requirement:
      "The client required a scalable trading platform experience for a prop-firm style business where users could understand funding offers, calculate trading-related values, move through a clear journey and trust the platform before taking action.",
    challenge:
      "The main challenge was turning a complex finance workflow into a clean digital experience. The platform needed strong UX, reliable calculation logic, fast page performance, SEO Friendly Development and a structure that could support future dashboards, admin controls and API integrations without becoming difficult to maintain.",
    goal: "Create a credible Laravel-based trading platform foundation that supports user confidence, internal management, and future product growth.",
    strategy:
      "As a Full Stack Developer UAE project, the work focused on clear user flows, Laravel architecture, conversion-focused landing sections, reusable UI blocks and data-ready platform logic. The build was planned like a Custom Web Solutions Dubai project, not a simple landing page.",
    solution:
      "Built a business-ready platform structure with trading calculators, conversion pages, dashboard-ready architecture, responsive UI, SEO-ready metadata and a code foundation suitable for High Performance Web Applications.",
    features: ["Trading calculator logic", "Dashboard-ready Laravel structure", "Admin control planning", "SEO-ready content pages", "Responsive conversion UI", "API-ready architecture"],
    stack: ["Laravel", "PHP", "JavaScript", "MySQL", "Tailwind"],
    impact: "The result was a clearer, more professional platform journey with stronger trust, better performance, cleaner user decisions and a maintainable backend direction. It positions the project for future Dashboard Development, payment logic, account flows and deeper Laravel Developer Dubai expansion.",
    result: "A business-ready trading web platform with clearer user journeys, practical dashboards, and maintainable code.",
    images: [
      "/images/Portfolio/Custom/4.avif",
      "/images/Portfolio/Custom/5.avif",
      "/images/Portfolio/Custom/6.avif",
      "/images/projects-suite-760.webp",
      "/images/services-architecture-760.webp"
    ]
  },
  {
    title: "Business Finance Dashboard & Analytics System",
    requirement:
      "The client needed a business dashboard where managers could see finance-style summaries, operational records, reports, user activity and key business indicators without depending on spreadsheets or disconnected tools.",
    challenge:
      "The existing workflow had poor data visibility, slow manual reporting and unclear admin flow. Different users needed different access levels, reports had to be readable, and the interface needed to feel practical for daily use rather than looking like decorative charts with no business value.",
    goal: "Give business users a finance dashboard that turns scattered operational numbers into usable decisions.",
    strategy:
      "The project was handled as Dashboard Development and ERP System Development planning: define the data first, map user roles, design reporting modules, then build interface sections around decisions the business actually needs to make.",
    solution:
      "Designed dashboard modules with analytics cards, report filters, table views, export-ready flows, responsive layouts, admin panels and clean data presentation. The structure is suitable for Laravel, REST API expansion and Custom Web Solutions Dubai workflows.",
    features: ["Analytics overview cards", "Report filters and exports", "Role-aware admin views", "Responsive dashboard layouts", "Table and record management", "Data-ready module structure"],
    stack: ["Laravel", "MySQL", "Charts", "REST APIs", "Tailwind"],
    impact: "The final system improved business visibility, reduced manual reporting effort and made operational numbers easier to trust. It supports High Performance Web Applications thinking with clean UI, better workflow clarity and scalable dashboard foundations.",
    result: "A premium dashboard system suitable for finance, operations, and leadership reporting.",
    images: [
      "/images/Portfolio/Crm/continentdispo/crm-main.avif",
      "/images/Portfolio/Crm/continentdispo/crm-1.avif",
      "/images/Portfolio/Crm/continentdispo/crm-2.avif",
      "/images/projects-suite-760.webp",
      "/images/services-architecture-760.webp"
    ]
  },
  {
    title: "Shopify Size Mapping & Conversion Optimization System",
    requirement:
      "The client needed Shopify product-page improvements that helped customers choose the right size, understand product options and move toward checkout with more confidence on mobile and desktop.",
    challenge:
      "The store had buying friction caused by unclear variants, weak size guidance and product-page confusion. Customers could like the product but still hesitate because the page did not answer practical questions quickly. The solution also had to stay lightweight so theme speed and Ecommerce Optimization were not damaged.",
    goal: "Reduce product-size confusion and make the product page easier to trust before checkout.",
    strategy:
      "As a Shopify Customization Expert workflow, the focus was to improve the buying decision without adding heavy apps. Product data, metafields, Liquid sections, JavaScript behavior and responsive UX were planned together.",
    solution:
      "Built a Shopify customization approach with size mapping, product-specific logic, theme integration, mobile-friendly selectors, conversion blocks and performance-aware scripts. The experience feels native to the storefront while supporting SEO Friendly Development and cleaner ecommerce UX.",
    features: ["Product size selector", "Metafield-backed size mapping", "Theme section integration", "Mobile-friendly product UX", "Performance-aware scripts", "Conversion-focused product clarity"],
    stack: ["Shopify", "Liquid", "JavaScript", "Metafields", "Theme Sections"],
    impact: "The improvement reduced customer doubt, made product decisions easier and created a smoother buying path. It supports better conversion, fewer support questions and stronger Ecommerce Optimization without making the Shopify theme feel heavy.",
    result: "A conversion-focused Shopify customization that feels native to the storefront.",
    images: [
      "/images/Portfolio/Shopify/7.avif",
      "/images/Portfolio/Shopify/8.avif",
      "/images/Portfolio/Shopify/9.avif",
      "/images/Portfolio/Shopify/2.avif",
      "/images/Portfolio/Shopify/3.avif"
    ]
  },
  {
    title: "ERP Operations & Business Workflow System",
    requirement:
      "The client needed a practical ERP-style system that could bring operational records, staff activity, reporting, customer information and business visibility into one organized digital workflow instead of relying on scattered manual tracking.",
    challenge:
      "The main issue was not only software design. The business had workflow confusion, repeated data entry, slow reporting, unclear responsibility between users and limited visibility for managers. Any solution had to make daily operations easier while staying scalable enough for future ERP System Development, CRM modules, invoices, inventory, approvals and custom reporting.",
    goal: "Turn manual business operations into a cleaner ERP workflow where records, users, reports and actions are easier to control.",
    strategy:
      "The project was approached as a problem-solving system, not a basic admin panel. I mapped the operational flow first: what teams need to record, who needs access, which reports matter, where mistakes happen and how managers make decisions. From there, the ERP interface was structured around clarity, permission control, reporting speed and future Laravel expansion.",
    solution:
      "Created an ERP-focused digital workflow with dashboard views, record management, reporting screens, status visibility, admin controls and business-data organization. The direction fits Laravel Developer Dubai and Full Stack Developer UAE requirements where the platform must be reliable, maintainable and useful for daily operations.",
    features: ["Operations dashboard", "Business record management", "Report-ready data views", "Role-based workflow planning", "Status tracking screens", "ERP module structure", "Future invoice and inventory readiness"],
    stack: ["Laravel", "PHP", "MySQL", "ERP", "Dashboard", "Reports"],
    impact:
      "The ERP direction gives the business a stronger operational base: fewer scattered records, faster management visibility, clearer staff workflows and a system that can grow into invoices, inventory, CRM, approvals and API integrations. It presents the work as Custom Web Solutions Dubai with real business value instead of a simple website or static admin screen.",
    result: "A solution-focused ERP case study showing how business operations can be organized, tracked, and improved through a maintainable web system.",
    images: [
      "/images/Portfolio/ERP/1.avif",
      "/images/Portfolio/ERP/2.avif",
      "/images/Portfolio/Crm/continentdispo/crm-main.avif",
      "/images/Portfolio/Crm/continentdispo/crm-1.avif",
      "/images/services-architecture-760.webp"
    ]
  }
];

export const pricing = [
  {
    title: "Starter Website",
    price: "Starting from AED 2,500",
    description: "For a business that needs a credible online profile, clear service pages, and a fast way for customers to contact you.",
    features: ["5 core pages", "Mobile-first responsive UI", "SEO basics and metadata", "Contact / WhatsApp flow", "Speed-focused build"]
  },
  {
    title: "Business Website",
    price: "Starting from AED 5,500",
    description: "For companies that need stronger trust, service positioning, lead generation, and technical SEO foundations.",
    features: ["Custom page sections", "Conversion copy structure", "Blog / content setup", "Technical SEO + schema", "Analytics and lead tracking"]
  },
  {
    title: "Ecommerce / Shopify Website",
    price: "Starting from AED 7,500",
    description: "For stores that need product clarity, mobile buying confidence, faster pages, and fewer checkout doubts.",
    features: ["Store setup", "Theme customization", "Product templates", "Payment/shipping setup", "Conversion and speed improvements"]
  },
  {
    title: "Custom Web Platform",
    price: "Custom Quote",
    description: "For businesses that need Laravel, SaaS, ERP, CRM, dashboards, trading tools, APIs, or custom workflows.",
    features: ["Problem discovery", "Architecture planning", "Custom modules", "API integrations", "Testing and scalable launch support"],
    featured: true
  },
  {
    title: "Monthly Support / Retainer",
    price: "Starting from AED 1,500 / month",
    description: "For teams that want ongoing technical help, speed fixes, feature delivery, and practical web consulting.",
    features: ["Priority support", "Performance checks", "Content and SEO updates", "Feature improvements", "Technical consulting"]
  }
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  Backend: ["Laravel", "PHP", "REST APIs", "Livewire", "Authentication", "Queues"],
  "CMS / Ecommerce": ["WordPress", "Shopify", "Liquid", "WooCommerce", "ACF", "Elementor"],
  Database: ["MySQL", "PostgreSQL", "Database Design", "Reports", "Indexes", "Data Imports"],
  "SEO / Performance": ["Core Web Vitals", "Schema", "Metadata", "Caching", "Image Optimization", "Lighthouse"],
  Tools: ["Git", "Figma", "Vercel", "cPanel", "Cloud Hosting", "Analytics"]
};

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  tag: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  seoTitle: string;
  seoDescription: string;
  takeaways: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const blogs: BlogPost[] = [
  {
    title: "When a Business Should Choose Laravel Instead of Another Plugin",
    slug: "choose-laravel-instead-of-plugin",
    excerpt: "A practical guide for companies that need dashboards, portals, ERP workflows, API integrations, or scalable backend logic.",
    tag: "Laravel",
    image: "/images/services-architecture-760.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "6 min read",
    seoTitle: "When to Choose Laravel Instead of a Plugin",
    seoDescription: "Learn when Laravel is better than plugins for dashboards, portals, ERP workflows, APIs and scalable business web systems.",
    takeaways: ["Use Laravel when the workflow is custom", "Avoid plugin stacks for business-critical logic", "Plan dashboards, roles and APIs early"],
    sections: [
      {
        heading: "The real problem is usually workflow control",
        body: [
          "Plugins are useful when the requirement is common and low-risk. They become a problem when the business needs custom roles, approvals, dashboards, payment logic, API integrations or reporting that must work exactly one way.",
          "Laravel is the better choice when the website is no longer only a marketing page. If the platform needs to manage records, users, data, staff actions or business rules, custom application structure becomes safer than forcing plugins to behave like an ERP."
        ]
      },
      {
        heading: "When Laravel is the practical choice",
        body: [
          "Choose Laravel for customer portals, admin panels, CRM modules, ERP workflows, trading tools, booking logic, subscription systems, custom dashboards and integrations with third-party services.",
          "The benefit is not only code control. A clean Laravel build gives the business clearer data, fewer plugin conflicts, stronger security boundaries and a platform that can grow without rebuilding from zero."
        ]
      },
      {
        heading: "How I approach this decision",
        body: [
          "I first check the workflow, users, data structure, integrations, budget and future scale. If WordPress or Shopify can solve it safely, I do not force Laravel. If the requirement is operational and custom, Laravel usually protects the business better.",
          "The goal is to choose the simplest reliable solution, not the most complicated stack."
        ]
      }
    ]
  },
  {
    title: "WordPress vs Custom Laravel: How to Choose the Right Web Solution",
    slug: "wordpress-vs-custom-laravel",
    excerpt: "How to decide between a marketing website, CMS, custom platform, dashboard, or long-term business system.",
    tag: "Strategy",
    image: "/images/about-resume-brand.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "6 min read",
    seoTitle: "WordPress vs Laravel: Choosing the Right Web Solution",
    seoDescription: "Compare WordPress and Laravel for business websites, dashboards, portals, ecommerce, SEO, speed and custom workflows.",
    takeaways: ["WordPress is strong for content and marketing", "Laravel is stronger for custom systems", "The right choice depends on workflow risk"],
    sections: [
      {
        heading: "WordPress is best when content and speed to market matter",
        body: [
          "WordPress is a strong choice for business websites, service pages, blogs, landing pages, local SEO, simple lead generation and content-managed websites.",
          "A well-built WordPress site can look premium, load fast and rank well when the structure, theme, plugins, caching and content hierarchy are handled properly."
        ]
      },
      {
        heading: "Laravel is best when the business logic is custom",
        body: [
          "Laravel is better for dashboards, portals, ERP modules, CRM systems, payment logic, user roles, reporting, API integrations and workflows that are unique to the business.",
          "If the site needs to act like software, Laravel gives better control over database design, permissions, performance and long-term maintainability."
        ]
      },
      {
        heading: "The safest decision framework",
        body: [
          "If your main goal is content, brand trust and search visibility, start with WordPress. If your main goal is operations, data, automation or custom workflows, start with Laravel.",
          "For many businesses, the best solution is a hybrid thinking process: WordPress for marketing pages and Laravel for the platform behind the business."
        ]
      }
    ]
  },
  {
    title: "Shopify Conversion Fixes That Reduce Customer Doubt",
    slug: "shopify-conversion-fixes",
    excerpt: "Practical improvements for product pages, size selectors, mobile UX, trust signals, speed, and checkout confidence.",
    tag: "Shopify",
    image: "/images/projects-suite-760.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "5 min read",
    seoTitle: "Shopify Conversion Fixes That Reduce Customer Doubt",
    seoDescription: "Improve Shopify conversion with better product pages, size selectors, trust signals, mobile UX, speed and checkout clarity.",
    takeaways: ["Reduce product uncertainty", "Improve mobile buying confidence", "Fix speed and theme friction"],
    sections: [
      {
        heading: "Most ecommerce leaks start before checkout",
        body: [
          "A customer usually leaves because the product page does not answer enough questions. Size, material, delivery, returns, payment trust, reviews, product photos and variant logic all affect confidence.",
          "Shopify conversion work should begin on the product page, not only the checkout page."
        ]
      },
      {
        heading: "High-impact Shopify fixes",
        body: [
          "Useful fixes include size mapping, clearer variant selectors, sticky add-to-cart, faster image loading, trust badges, shipping clarity, product-specific FAQs and mobile-first section spacing.",
          "Metafields and custom Liquid sections can solve many conversion issues without making the theme heavy."
        ]
      },
      {
        heading: "What I check first",
        body: [
          "I review the product journey on mobile, then check theme speed, image weight, product data, variant UX, checkout trust and analytics signals.",
          "The aim is to remove doubt so customers can choose faster and buy with more confidence."
        ]
      }
    ]
  },
  {
    title: "Website Speed Optimization Checklist Before Running Ads",
    slug: "website-speed-checklist-before-ads",
    excerpt: "A technical checklist for Core Web Vitals, image weight, scripts, caching, hosting, SEO readiness, and mobile UX.",
    tag: "Performance",
    image: "/images/contact-pricing.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "5 min read",
    seoTitle: "Website Speed Checklist Before Running Ads",
    seoDescription: "Check Core Web Vitals, images, scripts, caching, hosting, SEO and mobile UX before spending on ads.",
    takeaways: ["Fix speed before paid traffic", "Compress images and scripts", "Improve mobile stability"],
    sections: [
      {
        heading: "Slow pages waste paid traffic",
        body: [
          "Before spending on ads, the landing page should load quickly, stay visually stable and make the next action obvious. If the page is slow, users leave before the offer has a chance.",
          "Speed work is not only a technical task. It directly affects trust, conversions and marketing performance."
        ]
      },
      {
        heading: "Checklist before campaigns",
        body: [
          "Compress images, reduce unused scripts, review fonts, enable caching, check hosting response, optimize above-the-fold layout and test mobile Core Web Vitals.",
          "Also check metadata, headings, schema, internal links and form behavior so the page is ready for both search and paid campaigns."
        ]
      },
      {
        heading: "What to fix first",
        body: [
          "Start with the heaviest assets and layout shifts. Images, sliders, video backgrounds, third-party scripts and oversized fonts are common problems.",
          "A clean landing page that loads fast usually beats a visually heavy page that looks premium but loses visitors."
        ]
      }
    ]
  },
  {
    title: "Why SEO-Friendly Development Should Start Before Marketing",
    slug: "seo-friendly-development-before-marketing",
    excerpt: "Why schema, speed, clean headings, service pages, metadata, internal links, and crawlable content matter before campaigns.",
    tag: "SEO",
    image: "/images/services-architecture-760.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "6 min read",
    seoTitle: "Why SEO-Friendly Development Starts Before Marketing",
    seoDescription: "Build SEO foundations before marketing with clean headings, metadata, schema, speed, service pages and crawlable content.",
    takeaways: ["SEO starts during development", "Structure service pages clearly", "Use metadata, schema and speed together"],
    sections: [
      {
        heading: "SEO is not only a marketing task",
        body: [
          "Search performance starts with development choices: page structure, semantic HTML, metadata, internal links, schema, image size, speed and mobile usability.",
          "If these foundations are weak, marketing has to work harder later."
        ]
      },
      {
        heading: "What should exist before launch",
        body: [
          "Every important service should have a clear page, useful heading structure, relevant title tag, concise meta description, crawlable content, optimized images and schema where appropriate.",
          "Technical SEO should feel natural. The page should help the user first, then help search engines understand the content."
        ]
      },
      {
        heading: "How I build SEO-ready pages",
        body: [
          "I structure pages around the user problem, service intent, trust signals and next action. Then I add metadata, JSON-LD, sitemap, robots, canonical URLs and performance optimization.",
          "The result is a website that is easier to understand, easier to crawl and easier for visitors to trust."
        ]
      }
    ]
  },
  {
    title: "How AI Search Changes Website SEO for Dubai Businesses",
    slug: "ai-search-seo-dubai-businesses",
    excerpt: "How businesses can prepare websites for AI-assisted search with clear service pages, helpful answers, schema, speed and trust signals.",
    tag: "AI SEO",
    image: "/images/anas-premium-hero-1100.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "7 min read",
    seoTitle: "AI Search SEO for Dubai Business Websites",
    seoDescription: "Prepare Dubai business websites for AI search with helpful content, schema, service pages, speed and trust signals.",
    takeaways: ["Answer real buyer questions", "Structure service pages clearly", "Use schema, speed and trust signals"],
    sections: [
      {
        heading: "AI search rewards clear, useful answers",
        body: [
          "AI-assisted search experiences try to understand the topic, the problem, and the most useful answer. That means vague pages, thin service content and generic claims are weaker than clear explanations.",
          "For a Dubai business website, each service page should explain who the service is for, what problem it solves, what process is followed and what result the client can expect."
        ]
      },
      {
        heading: "What to improve first",
        body: [
          "Start with service pages, FAQs, schema, internal links, author credibility, local signals, contact clarity, image optimization and mobile speed.",
          "If a user searches for Laravel developer Dubai, Shopify developer Dubai, website speed optimization Dubai or WordPress developer Dubai, the page should directly answer that intent without forcing the visitor to guess."
        ]
      },
      {
        heading: "How I apply this in development",
        body: [
          "I structure content around real search intent and business problems, then support it with metadata, JSON-LD, clean headings, fast images and responsive UI.",
          "The goal is not keyword stuffing. The goal is a website that is easier for humans and search systems to understand."
        ]
      }
    ]
  },
  {
    title: "AI Chatbots for Laravel, WordPress and Shopify: What to Automate First",
    slug: "ai-chatbots-laravel-wordpress-shopify",
    excerpt: "A practical guide to AI chatbot and automation ideas for lead qualification, support, product questions and internal workflows.",
    tag: "AI Automation",
    image: "/images/projects-suite-760.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "7 min read",
    seoTitle: "AI Chatbots for Laravel, WordPress and Shopify",
    seoDescription: "Learn what to automate first with AI chatbots for Laravel, WordPress, Shopify, leads, support and ecommerce.",
    takeaways: ["Start with repetitive questions", "Connect chatbot logic to real business data", "Keep human handoff clear"],
    sections: [
      {
        heading: "AI chatbots work best when the use case is narrow",
        body: [
          "A chatbot should not be added just because AI is popular. It should solve a specific problem: lead qualification, FAQs, order questions, booking guidance, product recommendations or internal support.",
          "The best first automation is usually the repetitive question your team answers every day."
        ]
      },
      {
        heading: "Useful automation examples",
        body: [
          "For WordPress, a chatbot can qualify leads, answer service questions and guide users to the right contact form. For Shopify, it can answer sizing, shipping, return and product questions. For Laravel, it can support dashboards, portals, CRM workflows and internal knowledge tools.",
          "The important part is connecting the chatbot to accurate content and safe workflows."
        ]
      },
      {
        heading: "How to keep it reliable",
        body: [
          "Keep the scope clear, add human handoff, log important inquiries, avoid pretending the bot knows everything and connect it only to data the business can maintain.",
          "A practical AI feature should save time, improve response quality and reduce friction without making the user feel trapped."
        ]
      }
    ]
  },
  {
    title: "AI Website Audit: Find Speed, SEO and Conversion Problems Before Clients Leave",
    slug: "ai-website-audit-speed-seo-conversion",
    excerpt: "How an AI-assisted website audit can help find slow pages, weak SEO structure, confusing UX and conversion blockers before they cost leads.",
    tag: "AI Audit",
    image: "/images/contact-pricing.webp",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "6 min read",
    seoTitle: "AI Website Audit for Speed, SEO and Conversion",
    seoDescription: "Use AI-assisted audits to find website speed, SEO, UX and conversion problems before they cost leads.",
    takeaways: ["Audit before redesigning", "Check speed, SEO and conversion together", "Use AI for diagnosis, not blind decisions"],
    sections: [
      {
        heading: "An audit should connect technical issues to business loss",
        body: [
          "A slow page, unclear headline, missing contact path or weak service structure is not just a design issue. It can cost leads, trust and ad budget.",
          "AI can help organize findings, compare page sections, identify missing questions and summarize patterns, but a developer still needs to verify the technical cause."
        ]
      },
      {
        heading: "What a useful audit should cover",
        body: [
          "Check loading speed, image weight, Core Web Vitals, heading structure, metadata, schema, mobile layout, contact forms, service clarity, product page friction and analytics signals.",
          "The best audit does not produce a long report only. It creates a priority list of fixes that can actually improve user experience."
        ]
      },
      {
        heading: "How I use AI-assisted audits",
        body: [
          "I use AI thinking to speed up content and UX diagnosis, then verify the technical side manually: assets, scripts, layout, database, hosting, forms and SEO implementation.",
          "That combination helps businesses find the real blockers faster and avoid redesigning pages that only needed focused fixes."
        ]
      }
    ]
  }
];

export const industries = [
  "Ecommerce",
  "Trading",
  "Prop Firms",
  "Real Estate",
  "Oil & Gas",
  "ERP",
  "SaaS",
  "Agencies",
  "Startups",
  "Local Businesses",
  "Service Businesses"
];

export const process = ["Discovery", "UI Planning", "Development", "Testing", "SEO / Speed", "Launch", "Support"];

export const resume = [
  "Founder / Developer at ARS Developer Ltd",
  "Full-Stack Laravel Developer",
  "WordPress / Shopify Developer",
  "Frontend Developer",
  "Freelance Web Developer"
];

export const valueBlocks = [
  { icon: ShieldCheck, title: "I start with the business problem", text: "Before code, I look at the workflow, users, trust issues, speed problems, SEO gaps, and the outcome the project must create." },
  { icon: BriefcaseBusiness, title: "I communicate like a delivery partner", text: "Clear scope, realistic decisions, practical updates, testing, and handover so clients and agencies know what is happening." },
  { icon: Database, title: "I build systems, not just screens", text: "Dashboards, APIs, workflows, data structure, integrations, SEO foundations, and automation are treated as part of the product." }
];
