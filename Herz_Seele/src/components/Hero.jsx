import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero container card">
      <div className="hero-content">
        <h1>
          {t("hero.titleMain")} <span className="soft">{t("hero.titleSoft")}</span>
        </h1>

        <p className="lead">
          {t("hero.lead")}
        </p>

        <div className="actions">
          <a href="#hilfe" className="btn btn-primary">
            {t("hero.ctaHelp")}
          </a>
          <a href="#was-ist" className="btn btn-ghost">
            {t("hero.ctaMore")}
          </a>
        </div>

        <p className="disclaimer">
          {t("hero.disclaimerLine1")}
          <br />
          {t("hero.disclaimerLine2")}
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="blob"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
}
