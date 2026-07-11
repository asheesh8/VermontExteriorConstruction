"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

/**
 * Static-friendly contact form: composes a pre-filled email in the
 * visitor's mail client. Swap the submit handler for a form service
 * (Formspree, Resend, etc.) when a backend is wired up.
 */
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Free estimate request${form.service ? ` — ${form.service}` : ""} (${form.name})`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone && `Phone: ${form.phone}`,
        form.service && `Service: ${form.service}`,
        "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20 transition-shadow";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/60">
            Name *
          </label>
          <input
            id="cf-name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/60">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/60">
            Phone
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="802-555-0100"
            className={inputClass}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/60">
            Service Needed
          </label>
          <select id="cf-service" value={form.service} onChange={update("service")} className={inputClass}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/60">
          Tell us about your project *
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="What's going on with your roof, siding, gutters, or deck?"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 text-base font-bold text-white shadow-lg shadow-ember/25 transition-all hover:scale-[1.01] hover:bg-ember-deep sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Request Free Estimate
      </button>
      {sent && (
        <p className="text-sm font-semibold text-pine">
          Your email app should have opened with your message ready to send. Prefer to talk?{" "}
          <a href={site.phoneHref} className="text-ember underline">
            Call {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
