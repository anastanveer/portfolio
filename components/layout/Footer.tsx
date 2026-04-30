import Link from "next/link";
import { Building2, ExternalLink, FileText, Home, Linkedin, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { navItems, profile } from "@/data/site";

export function Footer() {
  const pageIcons = [Home, Sparkles, Building2, FileText, ExternalLink, MessageCircle];

  return (
    <footer className="border-t border-white/10 bg-ink/80 light:bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.15fr_1fr] lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:py-14">
        <div>
          <p className="font-display text-2xl font-semibold premium-text">Anas Tanveer</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-silver/72 light:text-slate-600">
            Dubai-based full-stack web problem solver for Laravel platforms, WordPress business websites, Shopify stores,
            dashboards, ERP workflows, APIs, website speed, and SEO-ready digital systems.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-silver/74 light:text-slate-700 sm:flex sm:flex-wrap">
            <span className="inline-flex items-center gap-2"><MapPin size={16} />Dubai, UAE</span>
            <a className="inline-flex items-center gap-2 hover:text-cyan sm:col-span-2" href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
            <a className="inline-flex items-center gap-2 hover:text-cyan" href="https://wa.me/971542435418"><MessageCircle size={16} />WhatsApp</a>
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70 light:text-slate-900">Pages</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {navItems.slice(0, 6).map((item, index) => {
              const Icon = pageIcons[index] ?? ExternalLink;

              return (
              <Link className="inline-flex items-center gap-2 text-sm text-silver/68 hover:text-cyan light:text-slate-600" key={item.href} href={item.href}>
                <Icon size={14} className="text-cyan/80" />
                {item.label}
              </Link>
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70 light:text-slate-900">Brand</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-silver/68 light:text-slate-600 sm:grid-cols-1">
            <a href={profile.companyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan"><Building2 size={14} className="text-cyan/80" />ARS Developer Ltd</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan"><Linkedin size={14} className="text-cyan/80" />LinkedIn Profile</a>
            <a href={profile.portfolio} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-cyan"><ExternalLink size={14} className="text-cyan/80" />anastanveer.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-silver/55 light:text-slate-500">
        © 2026 Anas Tanveer. Built for practical web problem solving, business systems, SEO-ready development, and digital growth.
      </div>
    </footer>
  );
}
