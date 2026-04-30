"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, ChevronDown, Loader2, Send, Sparkles, XCircle } from "lucide-react";

const fieldClass =
  "peer w-full rounded-xl border border-white/12 bg-black/18 px-4 pb-3 pt-6 text-sm text-white outline-none transition duration-300 placeholder:text-transparent focus:border-cyan/55 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(38,217,255,0.08)] light:border-slate-900/12 light:bg-white light:text-slate-950 light:focus:border-blue-500/55";

const primaryEmail = "info@anastanveer.com";
const secondaryEmail = "anastanveer557@gmail.com";
const rateLimitKey = "anas-contact-form-submissions";
const rateLimitWindow = 10 * 60 * 1000;
const minimumSubmitGap = 20 * 1000;
const maxSubmissionsPerWindow = 3;

function Field({
  label,
  children,
  className = ""
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`group relative block ${className}`}>
      {children}
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan/80 transition group-focus-within:text-cyan light:text-blue-700">
        {label}
      </span>
    </label>
  );
}

function SelectField({
  label,
  name,
  options
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Field label={label}>
      <input type="hidden" name={name} value={value} readOnly />
      <button
        aria-expanded={open}
        className={`${fieldClass} flex min-h-[58px] items-end justify-between pr-10 text-left`}
        type="button"
        onBlur={() => window.setTimeout(() => setOpen(false), 120)}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={value ? "text-white light:text-slate-950" : "text-silver/62 light:text-slate-500"}>
          {value || "Select"}
        </span>
      </button>
      <ChevronDown className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-silver/60 transition group-focus-within:text-cyan light:text-slate-500 ${open ? "rotate-180 text-cyan" : ""}`} size={18} />
      {open ? (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-cyan/20 bg-[#080d16]/95 p-1.5 shadow-[0_22px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl light:border-blue-500/20 light:bg-white/95 light:shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
          {options.map((option) => (
            <button
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-silver/82 transition hover:bg-cyan/10 hover:text-white light:text-slate-700 light:hover:bg-blue-50 light:hover:text-slate-950"
              key={option}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
            >
              <span>{option}</span>
              {value === option ? <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </Field>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const isRateLimited = () => {
    try {
      const now = Date.now();
      const recentAttempts = JSON.parse(localStorage.getItem(rateLimitKey) || "[]")
        .filter((time: unknown) => typeof time === "number" && now - time < rateLimitWindow) as number[];
      const lastAttempt = recentAttempts.length > 0 ? recentAttempts[recentAttempts.length - 1] : 0;

      if (now - lastAttempt < minimumSubmitGap || recentAttempts.length >= maxSubmissionsPerWindow) {
        return true;
      }

      localStorage.setItem(rateLimitKey, JSON.stringify([...recentAttempts, now]));
      return false;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get("_honey") || "").trim()) return;

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message || !emailPattern.test(email)) {
      setStatus("error");
      setFeedback("Please add your name, a valid email, and project details.");
      return;
    }

    if (isRateLimited()) {
      setStatus("error");
      setFeedback("Please wait a moment before sending another inquiry.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    const submittedAt = new Date().toLocaleString("en-AE", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Dubai"
    });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${primaryEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _subject: "New Project Inquiry from Portfolio Website",
          _cc: secondaryEmail,
          _captcha: "false",
          _template: "table",
          _honey: "",
          name,
          email,
          phone: phone || "Not provided",
          project_type: projectType || "Not selected",
          budget: budget || "Not selected",
          message,
          source: "anastanveer.com",
          timestamp: submittedAt
        })
      });

      if (!response.ok) throw new Error("FormSubmit request failed");

      setStatus("success");
      setFeedback("Thank you! Your message has been sent successfully.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Message could not be sent right now. Please try again or email me directly.");
    }
  };

  return (
    <form className="glass relative grid gap-4 overflow-hidden rounded-2xl p-5 md:gap-5 md:p-7" onSubmit={handleSubmit} noValidate>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-premium-gradient" />
      <input className="hidden" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
            <Sparkles size={14} /> Project inquiry
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-white light:text-slate-950">Send the problem, goal, and platform.</h2>
        </div>
        <span className="rounded-full border border-emerald/25 bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald">
          Dubai, UAE
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name">
          <input className={fieldClass} placeholder="Your name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Email address">
          <input className={fieldClass} placeholder="Email address" name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Phone / WhatsApp" className="md:col-span-2">
          <input className={fieldClass} placeholder="Phone / WhatsApp" name="phone" type="tel" autoComplete="tel" />
        </Field>
      </div>
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <SelectField label="Project type" name="projectType" options={["Laravel Web Application", "WordPress Business Website", "Shopify / Ecommerce", "Dashboard / ERP System", "API Integration", "SEO / Speed Optimization"]} />
        <SelectField label="Budget range" name="budget" options={["AED 2.5k - 5k", "AED 5k - 10k", "AED 10k - 25k", "AED 25k+", "Custom quote"]} />
      </div>
      <Field label="Project details">
        <textarea className={`${fieldClass} min-h-44 resize-none`} placeholder="Project details" name="message" required />
      </Field>
      {feedback ? (
        <p
          className={`flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald/25 bg-emerald/10 text-emerald"
              : "border-red-400/25 bg-red-500/10 text-red-200 light:text-red-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {status === "success" ? <CheckCircle2 className="mt-0.5 shrink-0" size={16} /> : <XCircle className="mt-0.5 shrink-0" size={16} />}
          <span>{feedback}</span>
        </p>
      ) : null}
      <button
        className="premium-button-gradient group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={status === "sending"}
      >
        <span>{status === "sending" ? "Sending Inquiry..." : "Send Project Inquiry"}</span>
        {status === "sending" ? (
          <Loader2 className="animate-spin" size={16} />
        ) : (
          <Send className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} />
        )}
      </button>
    </form>
  );
}
