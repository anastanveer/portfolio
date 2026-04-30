import type { MetadataRoute } from "next";
import { blogs } from "@/data/site";
import { routes } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function canonicalPath(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...routes.map((route) => ({
      url: absoluteUrl(canonicalPath(route.path)),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
    ...blogs.map((post) => ({
      url: absoluteUrl(canonicalPath(`/blog/${post.slug}`)),
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.72
    }))
  ];
}
