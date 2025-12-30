import { useTranslation } from "react-i18next";

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <section className="container card" style={{ margin: "40px auto" }}>
      <h1>{t("imprint.title")}</h1>

      <p><strong>{t("imprint.legal")}</strong></p>

      <p>
        <strong>{t("imprint.project")}</strong><br />
        Marcel Pinkert<br />
        Theodor von Brentano
      </p>

      <p>
        Musterstraße 12<br />
        12345 Musterstadt<br />
        Deutschland
      </p>

      <p>
        <strong>{t("imprint.contact")}</strong><br />
        {t("imprint.email")} kontakt@herzundseele-projekt.de
      </p>

      <p className="small" style={{ marginTop: "20px" }}>
        {t("imprint.note")}
      </p>

    </section>
  );
}