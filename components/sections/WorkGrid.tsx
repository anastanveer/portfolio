"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioProjects } from "@/data/site";
import { cn } from "@/lib/utils";

const categories = ["All", "WordPress", "Shopify", "Wix", "Webflow", "Custom Coding", "Landing Pages", "CRM", "ERP"];

export function WorkGrid() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === active || project.stack.includes(active))),
    [active]
  );

  return (
    <>
      <div className="mb-8 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              active === category
                ? "border-cyan/50 bg-cyan/12 text-cyan"
                : "border-white/12 bg-white/5 text-silver/70 hover:border-cyan/40 light:border-slate-900/10 light:text-slate-700"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mobile-rail grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
