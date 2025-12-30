import { useTranslation } from "react-i18next";

export default function Help() {
  const { t } = useTranslation();

  return (
    <section id="hilfe" className="container grid-2">
      <article className="card help-card">
        <div>
          <h2>{t("help.title")}</h2>

          <ol className="steps">
            <li>
              <strong>{t("help.steps.talk")}</strong>
            </li>
            <li>
              <strong>{t("help.steps.appointment")}</strong>
            </li>
            <li>
              <strong>{t("help.steps.selfcare")}</strong>
            </li>
          </ol>
        </div>

        <div className="cta-stack">
          <a className="btn btn-primary" href="tel:116117">
            {t("help.medicalService")}
          </a>
          <a
            className="btn btn-outline"
            href="https://www.116117-termine.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("help.appointmentSearch")}
          </a>
        </div>
      </article>

      <aside className="card soothing help-card">
        <div>
          <h2>{t("help.supportTitle")}</h2>
          <p className="small">{t("help.supportText")}</p>
        </div>

        <div className="cta-stack">
          <a href="#" className="btn btn-primary">
            {t("help.prevention")}
          </a>
          <a href="#" className="btn btn-outline">
            {t("help.loneliness")}
          </a>
          <a href="#" className="btn btn-secondary">
            {t("help.crisis")}
          </a>
        </div>
      </aside>
    </section>
  );
}
