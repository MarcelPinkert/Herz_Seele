import { useTranslation } from "react-i18next";

export default function Signs() {
  const { t, i18n } = useTranslation();
  
  return (
    <section id="zeichen" className="section-alt">
      <div className="container">
        <h2>{t("signs.title")}</h2>

        <div className="cards-3">
          <article className="card feature">
            <h3>{t("signs.moodTitle")}</h3>
            <p>
              {t("signs.moodText")}
            </p>
          </article>

          <article className="card feature">
            <h3>{t("signs.energyTitle")}</h3>
            <p>
              {t("signs.energyText")}
            </p>
          </article>

          <article className="card feature">
            <h3>{t("signs.sleepTitle")}</h3>
            <p>
              {t("signs.sleepText")}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
