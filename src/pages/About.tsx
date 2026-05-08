import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Layers, Compass, Sparkles, Building2, Users } from "lucide-react";
import { useLocalisedMilestones } from "@/i18n/content";

const pointKeys = [
  { key: "who", icon: Layers },
  { key: "why", icon: Compass },
  { key: "different", icon: Sparkles },
] as const;

const founderKeys = ["kaya", "comert"] as const;

const About = () => {
  const { t } = useTranslation();
  const milestones = useLocalisedMilestones();

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={
          <>
            {t("about.titleA")}{" "}
            <span className="text-gradient">{t("about.titleHighlight")}</span>
          </>
        }
        subtitle={t("about.subtitle")}
      />

      <section className="container py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pointKeys.map((p) => (
            <article
              key={p.key}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">
                {t(`about.points.${p.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`about.points.${p.key}.body`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/20 py-20">
        <div className="container">
          <SectionHeader
            eyebrow={t("about.operating.eyebrow")}
            title={
              <>
                {t("about.operating.titleA")}{" "}
                <span className="text-gradient">
                  {t("about.operating.titleHighlight")}
                </span>
              </>
            }
            subtitle={t("about.operating.subtitle")}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-background/60 p-7 shadow-card">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">
                {t("about.operating.infiniumTitle")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("about.operating.infiniumBody")}
              </p>
              <Link
                to="/partners"
                className="mt-5 inline-flex text-sm text-primary hover:underline"
              >
                {t("about.operating.infiniumLink")}
              </Link>
            </article>
            <article className="rounded-2xl border border-border bg-background/60 p-7 shadow-card">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">
                {t("about.operating.partnersTitle")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("about.operating.partnersBody")}
              </p>
              <Link
                to="/solutions"
                className="mt-5 inline-flex text-sm text-primary hover:underline"
              >
                {t("about.operating.partnersLink")}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeader
          eyebrow={t("about.founders.eyebrow")}
          title={t("about.founders.title")}
          subtitle={t("about.founders.subtitle")}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {founderKeys.map((k) => (
            <article
              key={k}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                {t(`about.founders.${k}.role`)}
              </div>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {t(`about.founders.${k}.name`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`about.founders.${k}.body`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/20 py-20">
        <div className="container">
          <SectionHeader
            eyebrow={t("about.history.eyebrow")}
            title={
              <>
                {t("about.history.titleA")}{" "}
                <span className="text-gradient">
                  {t("about.history.titleHighlight")}
                </span>
              </>
            }
            subtitle={t("about.history.subtitle")}
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="rounded-2xl border border-border bg-background/60 p-6 shadow-card"
              >
                <div className="font-display text-3xl font-semibold text-gradient">
                  {m.year}
                </div>
                <div className="mt-2 text-sm font-medium">{m.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default About;
