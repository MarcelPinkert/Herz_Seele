import { useTranslation } from "react-i18next";

export default function Resources() {
  const { t } = useTranslation();

  return (
    <section id="ressourcen" className="section-alt">
      <div className="container">
        <h2>{t("resources.title")}</h2>

        <p className="small" style={{ opacity: 0.85, marginBottom: "16px" }}>
          {t("resources.note")}
        </p>

        <div className="cards-3">
          <a
            className="card link-card"
            href="https://www.deutsche-depressionshilfe.de/"
            target="_blank"
            rel="noopener"
          >
            <h3>Stiftung Deutsche Depressionshilfe</h3>
            <p>{t("resources.desc_depressionshilfe")}</p>
            <span className="link-hint">{t("resources.openWebsite")}</span>
          </a>

          <a
            className="card link-card"
            href="https://www.telefonseelsorge.de/"
            target="_blank"
            rel="noopener"
          >
            <h3>TelefonSeelsorge</h3>
            <p>{t("resources.desc_telefonseelsorge")} 0800 111 0 111 / 0800 111 0 222</p>
            <span className="link-hint">{t("resources.openWebsite")}</span>
          </a>

          <a
            className="card link-card"
            href="https://www.116117.de"
            target="_blank"
            rel="noopener"
          >
            <h3>116117</h3>
            <p>{t("resources.desc_116117")}</p>
            <span className="link-hint">{t("resources.openWebsite")}</span>
          </a>

          <a
            className="card link-card"
            href="https://depressionsliga.de/hilfecenter/"
            target="_blank"
            rel="noopener"
          >
            <h3>Deutsche Depressionsliga e.V.</h3>
            <p>{t("resources.desc_depressionsliga")}</p>
            <span className="link-hint">{t("resources.openWebsite")}</span>
          </a>

          <a
            className="card link-card"
            href="https://familienportal.de/"
            target="_blank"
            rel="noopener"
          >
            <h3>Familienportal</h3>
            <p>{t("resources.desc_familienportal")}</p>
            <span className="link-hint">{t("resources.openWebsite")}</span>
          </a>

          <a
            className="card link-card"
            href="https://www.nummergegenkummer.de/"
            target="_blank"
            rel="noopener"
          >
            <h3>Nummer gegen Kummer</h3>
            <p>{t("resources.desc_nummergegenkummer")}</p>
            <span className="link-hint">{t("resources.openWebsite")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
