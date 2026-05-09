import { uc } from "@/lib/text";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs tracking-[0.18em] text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
    {typeof children === "string" ? uc(children) : children}
  </div>
);

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
  </div>
);
