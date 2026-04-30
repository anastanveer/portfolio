"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  project,
  index = 0
}: {
  project: {
    title: string;
    category: string;
    problem: string;
    solution: string;
    stack: string[];
    accent: string;
    image?: string;
  };
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.04, 0.2) }}
      className="premium-card group glass h-full overflow-hidden rounded-lg"
    >
      <div className={`relative h-56 bg-gradient-to-br ${project.accent}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project visual`}
            width={900}
            height={520}
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px)] bg-[size:28px_28px] opacity-24" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/20 bg-black/35 p-4 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.22em] text-white/68">{project.category}</p>
          <p className="mt-2 font-display text-xl font-semibold leading-tight text-white">{project.title}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-7 text-silver/70 light:text-slate-600">
          <span className="font-semibold text-white light:text-slate-950">Problem:</span> {project.problem}
        </p>
        <p className="mt-3 text-sm leading-7 text-silver/70 light:text-slate-600">
          <span className="font-semibold text-white light:text-slate-950">Solution:</span> {project.solution}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-silver/70 light:border-slate-900/10 light:bg-slate-900/5 light:text-slate-600">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/case-studies" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-cyan light:bg-slate-950 light:text-white light:hover:bg-blue-700">
            View Case Study
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
