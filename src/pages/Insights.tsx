import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";

const postKeys = [
  "groupFormed",
  "gridboxModules",
  "emsGes",
  "sankoCatalca",
  "tubitak",
  "international",
  "mass",
  "meben",
] as const;

const Insights = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHero
        eyebrow={t("insights.eyebrow")}
        title={
          <>
            {t("insights.titleA")}{" "}
            <span className="text-gradient">{t("insights.titleHighlight")}</span>
          </>
        }
        subtitle={t("insights.subtitle")}
      />
      <section className="container py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {postKeys.map((k) => (
            <article
              key={k}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary">
                  {t(`insights.posts.${k}.tag`)}
                </span>
                <span>{t(`insights.posts.${k}.date`)}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                {t(`insights.posts.${k}.title`)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`insights.posts.${k}.excerpt`)}
              </p>
              <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Insights;
