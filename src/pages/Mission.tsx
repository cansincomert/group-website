import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { Target, Telescope, Compass } from "lucide-react";

const Mission = () => {
  const { t } = useTranslation();
  const principleItems = t("mission.principles.items", {
    returnObjects: true,
    defaultValue: [],
  }) as { title: string; body: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("mission.eyebrow")}
        title={
          <>
            {t("mission.titleA")}{" "}
            <span className="text-gradient">{t("mission.titleHighlight")}</span>
          </>
        }
        subtitle={t("mission.subtitle")}
      />
      <section className="container py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <Target className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("mission.missionLabel")}
              </div>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                {t("mission.missionTitle")}
              </h2>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
            <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <Telescope className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("mission.visionLabel")}
              </div>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
                {t("mission.visionTitle")}
              </h2>
            </div>
          </article>
        </div>

        <article className="mt-6 overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t("mission.principles.eyebrow")}
              </div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {principleItems.map((p) => (
                  <li
                    key={p.title}
                    className="rounded-xl border border-border bg-background/40 p-4 text-sm"
                  >
                    <span className="font-medium">{p.title}</span>{" "}
                    {p.body}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Mission;
