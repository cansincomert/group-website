import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { partners } from "@/data/partners";

const LogoTile = ({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) => {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <span className="font-display text-base font-semibold tracking-tight text-slate-200">
        {name}
      </span>
    );
  }
  return (
    <img
      src={`/logos/${slug}.png`}
      alt={name}
      loading="lazy"
      className="h-12 w-auto max-w-[180px] object-contain opacity-80 transition-opacity hover:opacity-100"
      onError={() => setErrored(true)}
    />
  );
};

export const PartnerMarquee = () => {
  const { t } = useTranslation();
  // Duplicate the list so the translate animation can loop seamlessly.
  const loop = [...partners, ...partners];

  return (
    <section
      aria-label={t("partnerStrip.title")}
      className="border-y border-white/10 bg-[#020a26] py-10"
    >
      <div className="container mb-6 flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
          {t("partnerStrip.title")}
        </div>
        <Link
          to="/partners"
          className="text-xs uppercase tracking-[0.18em] text-slate-400 hover:text-primary"
        >
          {t("partnerStrip.viewAll")}
        </Link>
      </div>

      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#020a26] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#020a26] to-transparent" />

        <div
          className="flex w-max items-center gap-12 animate-marquee group-hover:[animation-play-state:paused]"
          aria-hidden={false}
        >
          {loop.map((p, idx) => (
            <Link
              key={`${p.slug}-${idx}`}
              to={`/partners/${p.slug}`}
              className="flex shrink-0 items-center justify-center rounded-lg px-4 py-2"
              aria-label={p.name}
            >
              <LogoTile slug={p.slug} name={p.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
