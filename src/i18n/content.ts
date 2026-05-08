import { useTranslation } from "react-i18next";
import { solutions as rawSolutions, type Solution } from "@/data/solutions";
import { partners as rawPartners, type Partner } from "@/data/partners";
import { products as rawProducts, type Product } from "@/data/products";
import { milestones as rawMilestones } from "@/data/history";
import { clientGroups as rawClientGroups, headlineStats as rawHeadlineStats } from "@/data/clients";

type Localised<T> = T & {
  /** Original English fields, kept for fallback / search. */
  _en: T;
};

export type LocalisedSolution = Localised<Solution>;
export type LocalisedPartner = Localised<Partner>;
export type LocalisedProduct = Localised<Product>;

/**
 * Hook helpers below merge static data (slugs, icons, links, partner
 * relationships) with translated copy keyed by slug. They always fall
 * back to the English source when a translation is missing.
 */

const stringFallback = (
  v: unknown,
  fallback: string,
): string => (typeof v === "string" ? v : fallback);

const arrayFallback = (v: unknown, fallback: string[]): string[] =>
  Array.isArray(v) ? (v.filter((x) => typeof x === "string") as string[]) : fallback;

export const useLocalisedSolutions = (): LocalisedSolution[] => {
  const { t } = useTranslation();
  return rawSolutions.map((s) => ({
    ...s,
    short: stringFallback(t(`solutions.${s.slug}.short`, { defaultValue: s.short }), s.short),
    tagline: stringFallback(t(`solutions.${s.slug}.tagline`, { defaultValue: s.tagline }), s.tagline),
    description: stringFallback(
      t(`solutions.${s.slug}.description`, { defaultValue: s.description }),
      s.description,
    ),
    capabilities: arrayFallback(
      t(`solutions.${s.slug}.capabilities`, { defaultValue: s.capabilities, returnObjects: true }),
      s.capabilities,
    ),
    outcomes: arrayFallback(
      t(`solutions.${s.slug}.outcomes`, { defaultValue: s.outcomes, returnObjects: true }),
      s.outcomes,
    ),
    _en: s,
  }));
};

export const useLocalisedSolution = (slug: string | undefined): LocalisedSolution | undefined => {
  const list = useLocalisedSolutions();
  return slug ? list.find((s) => s.slug === slug) : undefined;
};

export const useLocalisedPartners = (): LocalisedPartner[] => {
  const { t } = useTranslation();
  return rawPartners.map((p) => ({
    ...p,
    hq: stringFallback(t(`partnerData.${p.slug}.hq`, { defaultValue: p.hq }), p.hq),
    role: stringFallback(t(`partnerData.${p.slug}.role`, { defaultValue: p.role }), p.role),
    domain: stringFallback(t(`partnerData.${p.slug}.domain`, { defaultValue: p.domain }), p.domain),
    description: stringFallback(
      t(`partnerData.${p.slug}.description`, { defaultValue: p.description }),
      p.description,
    ),
    highlights: arrayFallback(
      t(`partnerData.${p.slug}.highlights`, { defaultValue: p.highlights, returnObjects: true }),
      p.highlights,
    ),
    _en: p,
  }));
};

export const useLocalisedPartner = (slug: string | undefined): LocalisedPartner | undefined => {
  const list = useLocalisedPartners();
  return slug ? list.find((p) => p.slug === slug) : undefined;
};

export const useLocalisedProducts = (): LocalisedProduct[] => {
  const { t } = useTranslation();
  return rawProducts.map((p) => ({
    ...p,
    family: stringFallback(t(`productData.${p.slug}.family`, { defaultValue: p.family }), p.family),
    tagline: stringFallback(
      t(`productData.${p.slug}.tagline`, { defaultValue: p.tagline }),
      p.tagline,
    ),
    description: stringFallback(
      t(`productData.${p.slug}.description`, { defaultValue: p.description }),
      p.description,
    ),
    features: arrayFallback(
      t(`productData.${p.slug}.features`, { defaultValue: p.features, returnObjects: true }),
      p.features,
    ),
    _en: p,
  }));
};

export const useLocalisedProduct = (slug: string | undefined): LocalisedProduct | undefined => {
  const list = useLocalisedProducts();
  return slug ? list.find((p) => p.slug === slug) : undefined;
};

export const useLocalisedMilestones = () => {
  const { t } = useTranslation();
  return rawMilestones.map((m) => ({
    year: m.year,
    title: stringFallback(t(`history.${m.year}.title`, { defaultValue: m.title }), m.title),
    body: stringFallback(t(`history.${m.year}.body`, { defaultValue: m.body }), m.body),
  }));
};

const groupKeyByIndex = ["active", "public", "industrial", "past", "international"] as const;

export const useLocalisedClientGroups = () => {
  const { t } = useTranslation();
  return rawClientGroups.map((g, idx) => {
    const key = groupKeyByIndex[idx];
    return {
      title: key
        ? stringFallback(t(`clientGroups.${key}.title`, { defaultValue: g.title }), g.title)
        : g.title,
      subtitle: g.subtitle
        ? key
          ? stringFallback(
              t(`clientGroups.${key}.subtitle`, { defaultValue: g.subtitle }),
              g.subtitle,
            )
          : g.subtitle
        : undefined,
      items: g.items,
    };
  });
};

const statKeyByIndex = ["years", "dsos", "export", "continents"] as const;

export const useLocalisedHeadlineStats = () => {
  const { t } = useTranslation();
  return rawHeadlineStats.map((s, idx) => {
    const key = statKeyByIndex[idx];
    return {
      value: s.value,
      label: key
        ? stringFallback(t(`stats.${key}Label`, { defaultValue: s.label }), s.label)
        : s.label,
      body: key
        ? stringFallback(t(`stats.${key}Body`, { defaultValue: s.body }), s.body)
        : s.body,
    };
  });
};
