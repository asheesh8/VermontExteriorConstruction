import { Clock, HandHeart, HardHat, Home, ShieldCheck, Wallet } from "lucide-react";
import { whyChooseUs } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  shield: ShieldCheck,
  home: Home,
  handshake: HandHeart,
  hardhat: HardHat,
  clock: Clock,
  wallet: Wallet,
} as const;

export default function WhyChooseUs({ dark = true }: { dark?: boolean }) {
  return (
    <section className={`relative overflow-hidden ${dark ? "grain bg-pine" : "bg-cream"}`}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What makes us a top choice across Chittenden County?"
          text="Lots of companies talk about being the best. We're here to show it — through the work we do, the people we hire, and the promises we keep."
          dark={dark}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <div
                  className={`group h-full rounded-3xl border p-7 transition-all duration-500 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] hover:border-ember/50 hover:bg-white/[0.07]"
                      : "border-line bg-paper hover:border-ember/40 hover:shadow-lg"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 text-ember transition-all duration-500 group-hover:bg-ember group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`font-display mt-5 text-lg font-semibold ${
                      dark ? "text-cream" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      dark ? "text-cream/60" : "text-ink/65"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
