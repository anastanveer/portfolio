import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogSeoContent } from "@/data/blogSeo";
import { blogs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return pageMetadata({
      title: "Blog | Anas Tanveer",
      description: "Web development notes by Anas Tanveer.",
      path: "/blog"
    });
  }

  return pageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    extraKeywords: blogSeoContent[post.slug]?.focusKeywords ?? []
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const seoContent = blogSeoContent[post.slug];
  const allSections = [...post.sections, ...(seoContent?.expandedSections ?? [])];
  const actionSection = seoContent
    ? [
        "How to turn this into a real project decision",
        "Start by writing the business problem in one line. For example: the website is slow, the Shopify product page is confusing, the WordPress site does not generate quality leads, or the Laravel dashboard cannot support the workflow anymore. A clear problem statement makes the technical decision easier.",
        "Next, separate the requirement into user experience, backend logic, SEO, speed, integrations and content. This prevents the common mistake of redesigning a page when the real issue is data structure, plugin conflict, weak copy, poor mobile UX or missing automation.",
        "For Dubai, UAE and international clients, the strongest web solution is usually the one that improves trust, reduces manual work, loads fast on mobile and gives visitors a clear reason to contact the business. That is the standard I use when planning Laravel, WordPress, Shopify, ecommerce, dashboard and SEO-focused work."
      ]
    : [];
  const articleText = [
    post.title,
    post.excerpt,
    ...(seoContent?.intro ?? []),
    ...allSections.reduce<string[]>((items, section) => {
      items.push(section.heading, ...section.body);
      return items;
    }, []),
    ...(seoContent?.checklist ?? []),
    ...actionSection,
    ...(seoContent?.faqs.reduce<string[]>((items, item) => {
      items.push(item.question, item.answer);
      return items;
    }, []) ?? [])
  ].join(" ");
  const wordCount = articleText.trim().split(/\s+/).length;
  const readingMinutes = Math.max(4, Math.ceil(wordCount / 175));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    keywords: seoContent?.focusKeywords ?? [],
    articleSection: [post.tag, "Web Development", "SEO", "Business Systems"],
    wordCount,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Anas Tanveer",
      url: absoluteUrl("/about")
    },
    publisher: {
      "@type": "Organization",
      name: "ARS Developer Ltd",
      url: "https://arsdeveloper.co.uk"
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };

  const faqJsonLd =
    seoContent && seoContent.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: seoContent.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }
      : null;

  return (
    <>
      <JsonLd data={jsonLd} id={`${post.slug}-blog-json-ld`} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} id={`${post.slug}-faq-json-ld`} /> : null}
      <section className="section-pad page-start">
        <div className="mx-auto max-w-4xl px-5">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
            <ArrowLeft size={16} /> Back to blog
          </Link>
          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">{post.tag}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white light:text-slate-950 md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-silver/76 light:text-slate-600">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-silver/60 light:text-slate-500">
              <span>{readingMinutes} min read</span>
              <span>{wordCount.toLocaleString("en-AE")} words</span>
              <span>Updated {new Date(post.updatedAt).toLocaleDateString("en-AE", { year: "numeric", month: "short", day: "numeric" })}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={`${post.title} article visual`}
              width={1400}
              height={788}
              priority
              className="aspect-[16/9] w-full object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="glass rounded-2xl p-6 md:p-9">
            {seoContent?.intro?.length ? (
              <div className="mb-10 rounded-2xl border border-cyan/20 bg-cyan/10 p-5 light:border-blue-500/20 light:bg-blue-50">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Practical overview</p>
                <div className="mt-4 space-y-4">
                  {seoContent.intro.map((paragraph) => (
                    <p className="text-base leading-8 text-silver/78 light:text-slate-700" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}

            {allSections.map((section) => (
              <section className="mb-10 last:mb-0" key={section.heading}>
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p className="text-base leading-8 text-silver/74 light:text-slate-600" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {seoContent?.checklist?.length ? (
              <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">Practical checklist</h2>
                <div className="mt-5 grid gap-3">
                  {seoContent.checklist.map((item) => (
                    <p className="flex gap-3 text-base leading-7 text-silver/78 light:text-slate-700" key={item}>
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald" />
                      {item}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {seoContent ? (
              <section className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">
                  How to turn this into a real project decision
                </h2>
                <div className="mt-5 space-y-4">
                  <p className="text-base leading-8 text-silver/74 light:text-slate-600">
                    Start by writing the business problem in one line. For example: the website is slow, the Shopify product page is confusing, the WordPress site does not generate quality leads, or the Laravel dashboard cannot support the workflow anymore. A clear problem statement makes the technical decision easier.
                  </p>
                  <p className="text-base leading-8 text-silver/74 light:text-slate-600">
                    Next, separate the requirement into user experience, backend logic, SEO, speed, integrations and content. This prevents the common mistake of redesigning a page when the real issue is data structure, plugin conflict, weak copy, poor mobile UX or missing automation.
                  </p>
                  <p className="text-base leading-8 text-silver/74 light:text-slate-600">
                    For Dubai, UAE and international clients, the strongest web solution is usually the one that improves trust, reduces manual work, loads fast on mobile and gives visitors a clear reason to contact the business. That is the standard I use when planning Laravel, WordPress, Shopify, ecommerce, dashboard and SEO-focused work.
                  </p>
                </div>
              </section>
            ) : null}

            {seoContent?.faqs?.length ? (
              <section className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">FAQs</h2>
                <div className="mt-5 grid gap-4">
                  {seoContent.faqs.map((item) => (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white" key={item.question}>
                      <h3 className="text-lg font-semibold text-white light:text-slate-950">{item.question}</h3>
                      <p className="mt-3 text-base leading-7 text-silver/74 light:text-slate-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="h-max space-y-5 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-cyan/20 bg-cyan/10 p-5 light:border-blue-500/20 light:bg-blue-50">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Key takeaways</p>
              <div className="mt-5 grid gap-4">
                {post.takeaways.map((item) => (
                  <p className="flex gap-3 text-sm leading-6 text-silver/78 light:text-slate-700" key={item}>
                    <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            {seoContent?.focusKeywords?.length ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Topics covered</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {seoContent.focusKeywords.map((keyword) => (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-silver/72 light:border-slate-200 light:bg-slate-50 light:text-slate-600" key={keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {seoContent?.relatedLinks?.length ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Related pages</p>
                <div className="mt-4 grid gap-3">
                  {seoContent.relatedLinks.map((link) => (
                    <Link className="text-sm font-semibold text-white transition hover:text-cyan light:text-slate-800 light:hover:text-blue-700" href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
      <CTASection
        title="Need help applying this to your website?"
        text="Send your current website, platform, issue and goal. I’ll help you identify the practical fix for speed, SEO, Shopify, WordPress, Laravel, dashboards, APIs or ecommerce workflows."
      />
    </>
  );
}
