import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import type { BlogPost } from "@/data/site";

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)} className="h-full">
      <article className="premium-card glass group flex h-full flex-col overflow-hidden rounded-lg">
        <Link href={`/blog/${post.slug}`} className="relative block h-44 overflow-hidden" aria-label={post.title}>
          <Image
            src={post.image}
            alt={`${post.title} blog visual`}
            width={900}
            height={520}
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
          <span className="absolute bottom-4 left-4 w-max rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan backdrop-blur-md">
            {post.tag}
          </span>
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">{post.title}</h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-silver/72 light:text-slate-600">{post.excerpt}</p>
          <div className="mt-5 flex items-center justify-between gap-4 text-xs text-silver/55 light:text-slate-500">
            <span>{post.readingTime}</span>
            <span>{new Date(post.updatedAt).getFullYear()}</span>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`} className="mx-6 mb-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
          Read solution <ArrowUpRight size={16} />
        </Link>
      </article>
    </Reveal>
  );
}
