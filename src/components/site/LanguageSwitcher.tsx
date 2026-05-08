import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
] as const;

export const LanguageSwitcher = ({
  className = "",
}: {
  className?: string;
}) => {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language ?? "en")
    .toString()
    .slice(0, 2)
    .toLowerCase();

  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  return (
    <div
      role="group"
      aria-label={i18n.t("language.label")}
      className={`inline-flex items-center gap-1 rounded-md border border-white/20 bg-white/5 px-1 py-0.5 text-xs ${className}`}
    >
      <Globe className="ml-1 h-3.5 w-3.5 text-slate-300" aria-hidden />
      {languages.map((l) => {
        const active = current === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => i18n.changeLanguage(l.code)}
            aria-pressed={active}
            className={`rounded-sm px-2 py-1 font-medium transition-colors ${
              active
                ? "bg-white text-[#011140]"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
};
