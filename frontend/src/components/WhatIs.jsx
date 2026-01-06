import helloBetterLogo from "../assets/hellobetter.svg";
import { useTranslation } from "react-i18next";

export default function WhatIs() {
  const { t } = useTranslation();

  const bullets = t("whatIs.bullets", { returnObjects: true });

  return (
    <section id="was-ist" className="container grid-2">
      <article className="card">
        <h2>{t("whatIs.title")}</h2>

        <p>{t("whatIs.text")}</p>

        <ul className="list">
          {Array.isArray(bullets) &&
            bullets.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </article>

      <aside className="card tip">
        <h3>{t("whatIs.selfCheckTitle")}</h3>

        <p className="small">{t("whatIs.selfCheckText")}</p>

        <a
          href="https://hellobetter.de/rezept/service/"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "12px",
          }}
        >
          <img
            src={helloBetterLogo}
            alt="HelloBetter Logo"
            style={{ height: "18px" }}
          />
        </a>

        <p className="small" style={{ marginTop: "12px", opacity: 0.9 }}>
          <strong>{t("whatIs.helloBetterText")}</strong>
        </p>

        <p className="small" style={{ marginTop: "12px", opacity: 0.85 }}>
          {t("whatIs.germanNote")}
        </p>
      </aside>
    </section>
  );
}
