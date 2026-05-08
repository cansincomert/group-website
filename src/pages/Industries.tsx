import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  Zap,
  Building2,
  Factory,
  GraduationCap,
  Hospital,
  Globe2,
} from "lucide-react";
import { useLocalisedClientGroups } from "@/i18n/content";

const list = [
  { key: "distribution", icon: Zap },
  { key: "industry", icon: Factory },
  { key: "education", icon: GraduationCap },
  { key: "healthcare", icon: Hospital },
  { key: "publicSector", icon: Building2 },
  { key: "international", icon: Globe2 },
] as const;

const Industries = () => {
  const { t } = useTranslation();
  const groups = useLocalisedClientGroups();
  return (
    <>
      <PageHero
        eyebrow={t("industries.eyebrow")}
        title={
          <>
            {t("industries.titleA")}{" "}
            <span className="text-gradient">{t("industries.titleHighlight")}</span>
          </>
        }
        subtitle={t("industries.subtitle")}
      />

      <section className="container py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((i) => (
            <article
              key={i.key}
              className="rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/40"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold leading-tight">
                {t(`industries.list.${i.key}.name`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`industries.list.${i.key}.body`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/20 py-20">
        <div className="container">
          <SectionHeader
            eyebrow={t("industries.track.eyebrow")}
            title={
              <>
                {t("industries.track.titleA")}{" "}
                <span className="text-gradient">
                  {t("industries.track.titleHighlight")}
                </span>
              </>
            }
            subtitle={t("industries.track.subtitle")}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {groups.map((g) => (
              <article
                key={g.title}
                className="rounded-2xl border border-border bg-background/60 p-7 shadow-card"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  {g.title}
                </div>
                {g.subtitle && (
                  <div className="mt-1 text-xs text-muted-foreground">
                    {g.subtitle}
                  </div>
                )}
                <ul className="mt-5 space-y-3">
                  {g.items.map((c) => (
                    <li
                      key={c.name}
                      className="flex flex-col rounded-lg border border-border/60 bg-card/40 p-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="font-medium">{c.name}</span>
                      {c.note && (
                        <span className="text-xs text-muted-foreground">
                          {c.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
