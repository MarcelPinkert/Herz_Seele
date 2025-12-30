import { useTranslation } from "react-i18next";

export default function Urheberrecht_Nutzungsbedingungen() {
  const { t } = useTranslation();

  const list = t("copyright.s3List", { returnObjects: true });

  return (
    <section className="container card" style={{ margin: "24px auto" }}>
      <h1>{t("copyright.title")}</h1>

      <h3>{t("copyright.s1Title")}</h3>
      <p>{t("copyright.s1Text1")}</p>
      <p>{t("copyright.s1Text2")}</p>

      <h3>{t("copyright.s2Title")}</h3>
      <p>{t("copyright.s2Text1")}</p>
      <p>{t("copyright.s2Text2")}</p>

      <h3>{t("copyright.s3Title")}</h3>
      <p>{t("copyright.s3Text")}</p>

      <ul className="list">
        {Array.isArray(list) &&
          list.map((item, i) => (
            <li key={i}>
              <strong>{item}</strong>
            </li>
          ))}
      </ul>

      <p className="small">{t("copyright.s3Note")}</p>

      <h3>{t("copyright.s4Title")}</h3>
      <p>{t("copyright.s4Text")}</p>
    </section>
  );
}
