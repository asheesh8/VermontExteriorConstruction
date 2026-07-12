"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CircleAlert,
  Clock,
  ExternalLink,
  Eye,
  EyeOff,
  Hammer,
  Images,
  Inbox,
  Layers,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  RotateCcw,
  Save,
  ShieldAlert,
  Star,
  Settings as SettingsIcon,
  TrendingUp,
} from "lucide-react";
import { gallery, site, testimonials } from "@/lib/site";
import { services } from "@/lib/services";
import { counties, towns } from "@/lib/areas";

const AUTH_KEY = "vce_admin_auth";
const SETTINGS_KEY = "vce_admin_settings";

type Section = "overview" | "leads" | "reviews" | "content" | "settings";

export default function AdminApp() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(AUTH_KEY) === "1");
    setReady(true);
  }, []);

  if (!ready) return <div className="min-h-dvh bg-pine-deep" />;
  if (!authed) return <Login onSuccess={() => setAuthed(true)} />;
  return <Dashboard onLogout={() => setAuthed(false)} />;
}

/* ------------------------------------------------------------------ */
/* Login                                                               */
/* ------------------------------------------------------------------ */

function Login({ onSuccess }: { onSuccess: () => void }) {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === "admin") {
      sessionStorage.setItem(AUTH_KEY, "1");
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="grain relative flex min-h-dvh items-center justify-center overflow-hidden bg-pine-deep px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-pine-mid/40 to-transparent" />
      <div className="relative w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/logo.png"
            alt="Vermont Custom Exteriors"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full ring-1 ring-white/20"
          />
          <h1 className="font-display mt-4 text-2xl font-semibold text-cream">
            Vermont Custom Exteriors
          </h1>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-ember">
            Admin Console
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
        >
          <label
            htmlFor="admin-pw"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-cream/50"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40" />
            <input
              id="admin-pw"
              type={show ? "text" : "password"}
              value={pw}
              autoFocus
              onChange={(e) => {
                setPw(e.target.value);
                setError(false);
              }}
              placeholder="Enter admin password"
              className={`w-full rounded-xl border bg-pine-deep/60 py-3.5 pl-11 pr-11 text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-400/60 focus:ring-red-400/30"
                  : "border-white/15 focus:border-ember focus:ring-ember/30"
              }`}
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-cream/40 hover:text-cream"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {error && (
            <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-red-300">
              <CircleAlert className="h-3.5 w-3.5" />
              Incorrect password. Try again.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-ember py-3.5 text-sm font-bold text-white transition-colors hover:bg-ember-deep"
          >
            Sign In
          </button>

          <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 text-[11px] leading-relaxed text-cream/50">
            <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400/80" />
            Demo console — client-side gate only, not secure authentication. Wire up a real
            auth backend before storing anything sensitive here.
          </p>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cream/40 hover:text-cream"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard                                                           */
/* ------------------------------------------------------------------ */

const NAV: { key: Section; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "leads", label: "Leads", icon: Inbox },
  { key: "reviews", label: "Reviews", icon: Star },
  { key: "content", label: "Content", icon: Layers },
  { key: "settings", label: "Settings", icon: SettingsIcon },
];

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [section, setSection] = useState<Section>("overview");

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    onLogout();
  };

  return (
    <div className="flex min-h-dvh flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="grain relative flex shrink-0 flex-col border-b border-white/10 bg-pine-deep lg:h-dvh lg:w-64 lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-3 px-5 py-5">
          <Image
            src="/images/logo.png"
            alt=""
            width={38}
            height={38}
            className="h-9 w-9 rounded-full ring-1 ring-white/20"
          />
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-cream">VCE Admin</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ember">
              Console
            </p>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-3 lg:py-2">
          {NAV.map((item) => {
            const active = section === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setSection(item.key)}
                className={`flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-ember text-white"
                    : "text-cream/60 hover:bg-white/[0.06] hover:text-cream"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden gap-2 border-t border-white/10 p-3 lg:flex lg:flex-col">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-cream/60 transition-colors hover:bg-white/[0.06] hover:text-cream"
          >
            <ExternalLink className="h-4 w-4" />
            View site
          </Link>
          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-cream/60 transition-colors hover:bg-white/[0.06] hover:text-cream"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-y-auto bg-cream">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-cream/85 px-5 py-4 backdrop-blur sm:px-8">
          <div>
            <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              {NAV.find((n) => n.key === section)?.label}
            </h1>
            <p className="text-xs text-ink/50">Vermont Custom Exteriors · Williston, VT</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-bold text-ink/70 transition-colors hover:border-ember hover:text-ember lg:hidden"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </button>
        </header>

        <div className="p-5 sm:p-8">
          <DemoBanner />
          {section === "overview" && <Overview onJump={setSection} />}
          {section === "leads" && <Leads />}
          {section === "reviews" && <Reviews />}
          {section === "content" && <Content />}
          {section === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}

function DemoBanner() {
  return (
    <div className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] p-4 text-sm">
      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
      <p className="text-ink/70">
        <strong className="text-ink">Demo console.</strong> Content is managed in the site
        code; edits here are saved to this browser only as a preview. Connect a CMS or backend
        (and real authentication) to publish changes and receive live leads.
      </p>
    </div>
  );
}

/* ------------------------------- Overview ------------------------------- */

function Overview({ onJump }: { onJump: (s: Section) => void }) {
  const stats = [
    { label: "Services", value: services.length, icon: Hammer, section: "content" as const },
    {
      label: "Service areas",
      value: counties.length + towns.length,
      icon: MapPinned,
      section: "content" as const,
    },
    { label: "Gallery photos", value: gallery.length, icon: Images, section: "content" as const },
    {
      label: "Google reviews",
      value: site.googleReviewCount,
      icon: Star,
      section: "reviews" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <button
            key={s.label}
            onClick={() => onJump(s.section)}
            className="group rounded-2xl border border-line bg-paper p-5 text-left transition-all hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember/10 text-ember">
                <s.icon className="h-5 w-5" />
              </span>
              <TrendingUp className="h-4 w-4 text-ink/20 transition-colors group-hover:text-ember" />
            </div>
            <p className="font-display mt-4 text-3xl font-semibold text-ink">{s.value}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/50">
              {s.label}
            </p>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-display text-lg font-semibold text-ink">Business snapshot</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {[
              { icon: Star, label: "Rating", value: `5.0 · ${site.googleReviewCount} reviews` },
              { icon: Phone, label: "Phone", value: site.phone },
              { icon: Mail, label: "Email", value: site.email },
              { icon: MapPin, label: "Office", value: `${site.address.city}, ${site.address.state}` },
              { icon: Clock, label: "Hours", value: site.hours },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <row.icon className="h-4 w-4 shrink-0 text-ember" />
                <dt className="w-20 shrink-0 text-xs font-bold uppercase tracking-wide text-ink/40">
                  {row.label}
                </dt>
                <dd className="truncate font-medium text-ink/80">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-6">
          <h2 className="font-display text-lg font-semibold text-ink">Quick actions</h2>
          <div className="mt-4 grid gap-2.5">
            <QuickAction icon={Inbox} label="Check leads inbox" onClick={() => onJump("leads")} />
            <QuickAction icon={Star} label="Manage reviews" onClick={() => onJump("reviews")} />
            <QuickAction
              icon={SettingsIcon}
              label="Update business info"
              onClick={() => onJump("settings")}
            />
            <a
              href="/"
              target="_blank"
              className="flex items-center justify-between rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink/75 transition-colors hover:border-ember/40 hover:bg-cream"
            >
              <span className="flex items-center gap-2.5">
                <ExternalLink className="h-4 w-4 text-ember" />
                Open live website
              </span>
              <span className="text-ink/30">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickAction({
  icon: Icon,
  label,
  onClick,
}: {
  icon: typeof Inbox;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between rounded-xl border border-line px-4 py-3 text-sm font-semibold text-ink/75 transition-colors hover:border-ember/40 hover:bg-cream"
    >
      <span className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-ember" />
        {label}
      </span>
      <span className="text-ink/30">→</span>
    </button>
  );
}

/* ------------------------------- Leads ------------------------------- */

function Leads() {
  return (
    <div className="rounded-2xl border border-line bg-paper p-8 text-center sm:p-12">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ember/10 text-ember">
        <Inbox className="h-7 w-7" />
      </div>
      <h2 className="font-display mt-5 text-xl font-semibold text-ink">No leads yet</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/60">
        The contact form currently opens the visitor&apos;s email app with a pre-filled message.
        Connect a form backend (Formspree, Resend, or a database) and submissions will stream
        into this inbox automatically — name, phone, service, and message, ready to action.
      </p>
      <Link
        href="/contact-us"
        target="_blank"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-bold text-ink/70 transition-colors hover:border-ember hover:text-ember"
      >
        <ExternalLink className="h-4 w-4" />
        View contact form
      </Link>
    </div>
  );
}

/* ------------------------------- Reviews ------------------------------- */

function Reviews() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-paper p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4285F4]/10 font-display text-xl font-bold text-[#4285F4]">
          G
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-display text-lg font-bold text-ink">5.0</span>
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </span>
          </div>
          <p className="text-xs text-ink/55">
            {site.googleReviewCount} Google reviews · {testimonials.length} featured on site
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-line bg-paper p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine font-display text-sm font-bold uppercase text-cream">
                  {t.name[0]}
                </span>
                <div>
                  <p className="text-sm font-bold capitalize text-ink">{t.name}</p>
                  <p className="text-[11px] text-ink/45">Verified {t.date}</p>
                </div>
              </div>
              <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green-700">
                Live
              </span>
            </div>
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- Content ------------------------------- */

function Content() {
  const groups = useMemo(() => {
    const byGroup: Record<string, string[]> = {};
    for (const s of services) {
      (byGroup[s.group] ||= []).push(s.title);
    }
    return byGroup;
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-line bg-paper p-6">
        <div className="mb-4 flex items-center gap-2">
          <Hammer className="h-4 w-4 text-ember" />
          <h2 className="font-display text-lg font-semibold text-ink">
            Services ({services.length})
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-line bg-cream/60 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-ember">{group}</p>
              <ul className="mt-2 space-y-1.5">
                {items.map((title) => (
                  <li key={title} className="flex items-center gap-2 text-sm text-ink/75">
                    <Check className="h-3.5 w-3.5 shrink-0 text-sage" />
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-paper p-6">
          <div className="mb-4 flex items-center gap-2">
            <MapPinned className="h-4 w-4 text-ember" />
            <h2 className="font-display text-lg font-semibold text-ink">
              Service areas ({counties.length + towns.length})
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[...counties, ...towns].map((a) => (
              <span
                key={a.slug}
                className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-semibold text-ink/70"
              >
                {a.name}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-6">
          <div className="mb-4 flex items-center gap-2">
            <Images className="h-4 w-4 text-ember" />
            <h2 className="font-display text-lg font-semibold text-ink">
              Gallery ({gallery.length})
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
            {gallery.slice(0, 12).map((g) => (
              <div key={g.src} className="relative aspect-square overflow-hidden rounded-lg">
                <Image src={g.src} alt={g.alt} fill sizes="80px" className="object-cover" />
              </div>
            ))}
          </div>
          <Link
            href="/gallery"
            target="_blank"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-ember hover:text-ember-deep"
          >
            View all {gallery.length} photos <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Settings ------------------------------- */

type BizSettings = {
  phone: string;
  emergencyPhone: string;
  email: string;
  hours: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

const defaultSettings: BizSettings = {
  phone: site.phone,
  emergencyPhone: site.emergencyPhone,
  email: site.email,
  hours: site.hours,
  street: site.address.street,
  city: site.address.city,
  state: site.address.state,
  zip: site.address.zip,
};

function Settings() {
  const [form, setForm] = useState<BizSettings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      try {
        setForm({ ...defaultSettings, ...JSON.parse(stored) });
      } catch {
        /* ignore malformed */
      }
    }
  }, []);

  const update = (key: keyof BizSettings) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setSaved(false);
  };

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(form));
    setSaved(true);
  };

  const reset = () => {
    localStorage.removeItem(SETTINGS_KEY);
    setForm(defaultSettings);
    setSaved(false);
  };

  const field =
    "w-full rounded-xl border border-line bg-cream/50 px-4 py-3 text-sm text-ink focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20";
  const labelCls = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/50";

  return (
    <form onSubmit={save} className="max-w-3xl space-y-6">
      <div className="rounded-2xl border border-line bg-paper p-6">
        <h2 className="font-display text-lg font-semibold text-ink">Contact details</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="s-phone">Main phone</label>
            <input id="s-phone" className={field} value={form.phone} onChange={update("phone")} />
          </div>
          <div>
            <label className={labelCls} htmlFor="s-ephone">Emergency phone</label>
            <input
              id="s-ephone"
              className={field}
              value={form.emergencyPhone}
              onChange={update("emergencyPhone")}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="s-email">Email</label>
            <input id="s-email" className={field} value={form.email} onChange={update("email")} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="s-hours">Work hours</label>
            <input id="s-hours" className={field} value={form.hours} onChange={update("hours")} />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-paper p-6">
        <h2 className="font-display text-lg font-semibold text-ink">Office address</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="s-street">Street</label>
            <input id="s-street" className={field} value={form.street} onChange={update("street")} />
          </div>
          <div>
            <label className={labelCls} htmlFor="s-city">City</label>
            <input id="s-city" className={field} value={form.city} onChange={update("city")} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls} htmlFor="s-state">State</label>
              <input id="s-state" className={field} value={form.state} onChange={update("state")} />
            </div>
            <div>
              <label className={labelCls} htmlFor="s-zip">ZIP</label>
              <input id="s-zip" className={field} value={form.zip} onChange={update("zip")} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ember-deep"
        >
          <Save className="h-4 w-4" />
          Save changes
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-bold text-ink/70 transition-colors hover:border-ink/30"
        >
          <RotateCcw className="h-4 w-4" />
          Reset to defaults
        </button>
        {saved && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700">
            <Check className="h-4 w-4" />
            Saved to this browser (local preview)
          </span>
        )}
      </div>
    </form>
  );
}
