import { Eyebrow } from "./SectionHeader";

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) => (
  <section className="relative overflow-hidden border-b border-border/60 bg-hero">
    <div className="absolute inset-0 bg-grid opacity-40" />
    <div className="container relative py-20 md:py-28">
      <div className="max-w-3xl animate-fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  </section>
);