"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Globe2,
  MapPin,
  Sparkles,
  Workflow
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { stats } from "@/data/site";

const trustItems = [
  "Dubai Based",
  "7+ Years Solving Web Problems",
  "100+ Projects Delivered"
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28">
      <div className="absolute left-1/2 top-16 -z-10 h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl light:bg-blue-300/24" />
      <div className="absolute right-0 top-28 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet/12 blur-3xl light:bg-violet-300/24" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-12">
        <div className="min-w-0">
          <motion.div
            initial={false}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm text-cyan shadow-glow light:border-blue-500/25 light:bg-blue-50 light:text-blue-700"
          >
            <Sparkles size={16} /> Problem-solving developer profile
          </motion.div>

          <p className="mb-3 font-display text-lg font-semibold premium-text md:text-xl">
            Anas Tanveer
          </p>

          <motion.h1
            initial={false}
            className="max-w-[14ch] break-words font-display text-4xl font-semibold leading-[1.03] tracking-normal text-white min-[430px]:text-5xl lg:text-6xl light:text-slate-950"
          >
            Full-Stack Developer for Business Web Systems in Dubai
          </motion.h1>

          <motion.div initial={false} className="mt-5 flex max-w-xl flex-wrap items-center gap-2">
            {["Laravel", "Dashboards", "Ecommerce", "SEO-ready websites"].map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-silver/78 light:border-slate-900/10 light:bg-white light:text-slate-700"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div initial={false} className="mt-6 max-w-xl border-l border-cyan/35 pl-5 light:border-blue-500/40">
            <p className="text-base leading-7 text-silver/82 md:text-lg md:leading-8 light:text-slate-600">
              I help businesses build faster Laravel platforms, WordPress websites, Shopify stores, dashboards and SEO-ready systems that solve real workflow and conversion problems.
            </p>
          </motion.div>

          <motion.div initial={false} className="mt-7 max-w-xl">
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton href="/work">View Portfolio</MagneticButton>
              <MagneticButton href="/contact" variant="secondary">Hire Me</MagneticButton>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-silver/72 light:text-slate-600">
              {trustItems.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(38,217,255,0.75)]" />
                  {badge}
                </span>
              ))}
              <a href="/files/anas-tanveer-web-developer-cv.pdf" download className="inline-flex items-center gap-2 font-medium text-cyan hover:text-white light:hover:text-blue-700">
                <Download size={15} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={false} className="relative min-w-0 lg:pl-2">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/anas-premium-hero-1100.webp"
              alt="Premium full-stack developer command center visual"
              width={1100}
              height={619}
              priority
              className="h-[18rem] w-full rounded-2xl object-cover sm:h-[24rem] lg:h-[30rem] xl:h-[33rem]"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="absolute left-3 right-3 top-3 overflow-hidden rounded-full border border-white/18 bg-black/42 px-3 py-2 text-white shadow-glow backdrop-blur-xl light:border-white/50 light:bg-slate-950/70 sm:left-5 sm:right-auto sm:top-5 sm:px-4 sm:py-2.5"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-y-0 left-[-45%] w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["0%", "460%"] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative flex items-center gap-2 text-xs font-semibold sm:text-sm">
                <Workflow size={16} className="text-cyan" />
                Laravel • Dashboards • Ecommerce • SEO
              </span>
            </motion.div>

            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/14 bg-black/50 p-3 backdrop-blur-xl light:border-white/30 light:bg-slate-950/70 sm:bottom-5 sm:left-5 sm:right-5 sm:p-4 sm:shadow-premium">
              <div className="grid grid-cols-3 gap-3">
              {stats.slice(0, 3).map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-base font-semibold leading-tight text-white sm:text-xl">{value}</p>
                  <p className="mt-1 line-clamp-1 text-[10px] text-white/68 sm:text-xs">{label}</p>
                </div>
              ))}
              </div>
              <div className="mt-3 flex w-max max-w-full items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1.5 text-xs font-semibold text-cyan sm:mt-4 sm:py-2">
                <MapPin size={15} />
                Dubai, UAE
                <span className="hidden items-center gap-1 text-white/58 sm:inline-flex">
                  <Globe2 size={13} /> UAE / UK / Canada
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
