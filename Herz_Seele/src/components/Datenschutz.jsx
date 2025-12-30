import { useTranslation } from "react-i18next";

export default function Datenschutz() {
  const { t } = useTranslation();

  return (
    <section className="container card" style={{ margin: "24px auto" }}>
      <h1>{t("privacy.title")}</h1>

      <h3>1. {t("privacy.overviewTitle")}</h3>
      <p>
        {t("privacy.overviewText")}
        <br /><br />
        <strong>{t("privacy.noticeTitle")}</strong>{" "}
        {t("privacy.noticeText")}
      </p>

      <h3>2. {t("privacy.controllerTitle")}</h3>
      <p className="small" style={{ color: "var(--text)" }}>
        Herz&Seele – Projektarbeit<br />
        Marcel Pinkert<br />
        Theodor von Brentano<br /><br />
        Musterstraße 12<br />
        12345 Musterstadt<br />
        Deutschland<br /><br />
        E-Mail: kontakt@herzundseele-projekt.de
      </p>

      <h3>3. {t("privacy.dataCollectionTitle")}</h3>
      <p>{t("privacy.dataCollectionText")}</p>

      <h3>4. {t("privacy.sslTitle")}</h3>
      <p>{t("privacy.sslText")}</p>

      <h3>5. {t("privacy.disclaimerTitle")}</h3>
      <p>{t("privacy.disclaimerText")}</p>

      <h3>6. {t("privacy.rightsTitle")}</h3>
      <p>{t("privacy.rightsText")}</p>
    </section>
  );
}
