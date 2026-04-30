import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anas Tanveer - Full-Stack Developer Dubai",
    short_name: "Anas Tanveer",
    description: "Laravel, WordPress, Shopify, dashboard, ecommerce and SEO-ready web development portfolio.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#05070d",
    theme_color: "#05070d",
    categories: ["business", "productivity", "developer"],
    lang: "en-AE",
    screenshots: [
      {
        src: "/images/anas-premium-hero.webp",
        sizes: "1400x788",
        type: "image/webp",
        form_factor: "wide"
      }
    ]
  };
}
