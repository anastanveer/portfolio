import type { MetadataRoute } from "next";
import { blogs } from "@/data/site";
import { routes } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [...routes.map((route) => route.path), ...blogs.map((post) => `/blog/${post.slug}`)],
        disallow: [
          "/api/",
          "/wp-admin/",
          "/wp-login.php",
          "/wp-content/",
          "/wp-includes/",
          "/xmlrpc.php",
          "/*.env$",
          "/*?*utm_*",
          "/*?*fbclid=*",
          "/*?*gclid=*"
        ]
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl
  };
}
