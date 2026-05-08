import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Logo = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 ${className}`}
      aria-label={t("common.homeAria")}
    >
      <img
        src="/logo.png"
        alt={t("common.siteLogo")}
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
};
