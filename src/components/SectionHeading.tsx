import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, dark, center }: Props) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-ember">
          {center && <span className="hidden" />}
          <span
            className={`inline-block h-px w-8 bg-ember ${center ? "mx-auto hidden" : ""}`}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? "text-cream/70" : "text-ink/70"
          } ${center ? "mx-auto" : ""}`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}
