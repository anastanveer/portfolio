import type { Metadata } from "next";
import { absoluteUrl, siteUrl } from "@/lib/utils";

const keywords = [
  "Full Stack Developer Dubai",
  "Laravel Developer Dubai",
  "PHP Developer Dubai",
  "WordPress Developer Dubai",
  "Shopify Developer Dubai",
  "Web Developer UAE",
  "Freelance Web Developer Dubai",
  "Custom Website Development Dubai",
  "Ecommerce Website Developer Dubai",
  "Business Dashboard Developer",
  "ERP Developer UAE",
  "Website Speed Optimization Dubai",
  "SEO Friendly Website Development Dubai",
  "Laravel Web Application Developer Dubai",
  "Custom Dashboard Developer UAE",
  "Business Automation Developer Dubai",
  "Shopify Conversion Optimization Dubai",
  "WordPress SEO Developer Dubai",
  "SaaS Platform Developer UAE",
  "API Integration Developer Dubai",
  "Trading Platform Developer Dubai",
  "Core Web Vitals Optimization UAE",
  "Technical SEO Web Developer Dubai"
];

export const routes = [
  { path: "/", name: "Home", priority: 1, changeFrequency: "weekly" },
  { path: "/about", name: "About", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", name: "Services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/work", name: "Work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/portfolio", name: "Portfolio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/case-studies", name: "Case Studies", priority: 0.85, changeFrequency: "monthly" },
  { path: "/pricing", name: "Pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resume", name: "Resume", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", name: "Blog", priority: 0.75, changeFrequency: "weekly" },
  { path: "/contact", name: "Contact", priority: 0.9, changeFrequency: "monthly" }
] as const;

export function pageMetadata({
  title,
  description,
  path = "/",
  extraKeywords = [],
  image = "/images/anas-premium-hero.webp"
}: {
  title: string;
  description: string;
  path?: string;
  extraKeywords?: string[];
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: "Anas Tanveer Portfolio",
    authors: [{ name: "Anas Tanveer", url: siteUrl }],
    creator: "Anas Tanveer",
    publisher: "ARS Developer Ltd",
    category: "Web Development",
    classification: "Full-Stack Web Developer Portfolio",
    referrer: "origin-when-cross-origin",
    keywords: [...keywords, ...extraKeywords],
    alternates: {
      canonical: url,
      languages: {
        "en-AE": url,
        "x-default": url
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Anas Tanveer",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1400,
          height: 788,
          alt: "Anas Tanveer premium full-stack developer brand visual"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    verification: {
      other: {
        "geo.region": "AE-DU",
        "geo.placename": "Dubai",
        "ICBM": "25.2048,55.2708"
      }
    }
  };
}

export function jsonLdForPage(path: string, breadcrumbs: Array<{ name: string; url: string }> = []) {
  const pageUrl = absoluteUrl(path);
  const defaultBreadcrumbs = breadcrumbs.length
    ? breadcrumbs
    : [
        { name: "Home", url: absoluteUrl("/") },
        ...(path === "/" ? [] : [{ name: routes.find((route) => route.path === path)?.name ?? "Page", url: pageUrl }])
      ];

  return {
    "@context": "https://schema.org",
    "@graph": [
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: "Anas Tanveer",
      alternateName: "Anas Full Stack Developer",
      jobTitle: ["Full-Stack Web Developer", "Laravel Developer", "WordPress Developer", "Shopify Developer", "Business Web Problem Solver"],
      url: siteUrl,
      image: absoluteUrl("/images/anas-resume.webp"),
      email: "mailto:info@anastanveer.com",
      telephone: "+971542435418",
      nationality: "Pakistani",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      worksFor: {
        "@type": "Organization",
        "@id": "https://arsdeveloper.co.uk/#organization",
        name: "ARS Developer Ltd",
        url: "https://arsdeveloper.co.uk"
      },
      sameAs: ["https://www.linkedin.com/in/anas-fullstackdev/"],
      knowsAbout: [
        ...keywords,
        "REST API Integration",
        "Custom Dashboard Development",
        "Ecommerce Development",
        "Trading Platform Development",
        "Core Web Vitals",
        "Technical SEO",
        "Business Automation",
        "Website Problem Solving",
        "Shopify Conversion Optimization",
        "Laravel Dashboard Development"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#professional-service"),
      name: "Anas Tanveer Full-Stack Development",
      url: siteUrl,
      image: absoluteUrl("/images/anas-premium-hero.webp"),
      telephone: "+971542435418",
      email: "mailto:info@anastanveer.com",
      priceRange: "$$",
      founder: { "@id": absoluteUrl("/#person") },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" }
      ],
      serviceType: [
        "Laravel Web Application Development",
        "PHP Web Development",
        "WordPress Website Development",
        "Shopify Customization",
        "Ecommerce Website Development",
        "Business Dashboard Development",
        "ERP and CRM Development",
        "REST API Integration",
        "SEO Friendly Website Development",
        "Website Speed Optimization",
        "Business Web Problem Solving",
        "Shopify Conversion Optimization",
        "Custom Dashboard Development",
        "Business Automation Development"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Business Web Problem Solving Services",
        itemListElement: [
          "Laravel Web Applications",
          "WordPress Business Websites",
          "Shopify Ecommerce Stores",
          "Business Dashboards",
          "ERP and CRM Systems",
          "Website Speed Optimization",
          "Business Automation",
          "Technical SEO Foundations"
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name
          }
        }))
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#local-business"),
      name: "Anas Tanveer",
      image: absoluteUrl("/images/anas-premium-hero.webp"),
      url: siteUrl,
      telephone: "+971542435418",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2048,
        longitude: 55.2708
      }
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "Anas Tanveer",
      url: siteUrl,
      inLanguage: "en-AE",
      publisher: { "@id": absoluteUrl("/#person") },
      description:
        "Dubai-based full-stack web problem solver portfolio for Laravel, WordPress, Shopify, ecommerce, dashboards, ERP, APIs, speed optimization and SEO-friendly web applications.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: routes.find((route) => route.path === path)?.name ?? "Anas Tanveer",
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#person") },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/anas-premium-hero.webp"),
        width: 1400,
        height: 788
      },
      inLanguage: "en-AE"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: defaultBreadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    },
    {
      "@type": "SiteNavigationElement",
      "@id": absoluteUrl("/#site-navigation"),
      name: routes.map((route) => route.name),
      url: routes.map((route) => absoluteUrl(route.path))
    },
    path === "/blog"
      ? {
          "@type": "Blog",
          "@id": absoluteUrl("/blog#blog"),
          name: "Anas Tanveer Web Development Insights",
          url: absoluteUrl("/blog")
        }
      : null
    ].filter(Boolean)
  };
}

export function siteJsonLd() {
  const graph = jsonLdForPage("/")["@graph"].filter((item) => {
    if (!item || typeof item !== "object" || !("@type" in item)) return false;
    return !["WebPage", "BreadcrumbList", "Blog"].includes(String(item["@type"]));
  });

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
