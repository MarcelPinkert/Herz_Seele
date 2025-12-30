import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} Herz&Seele – {t("footer.copyright")}
        </p>

        <p className="small">
          {t("footer.disclaimer")}
        </p>

        <p className="small">
          <Link to="/impressum" className="footer-link">
            {t("footer.impressum")}
          </Link>
          {" 🌿 "}
          <Link to="/datenschutz" className="footer-link">
            {t("footer.privacy")}
          </Link>
          {" 🌿 "}
          <Link
            to="/urheberrecht-nutzungsbedingungen"
            className="footer-link"
          >
            {t("footer.copyrightLink")}
          </Link>
        </p>
      </div>
    </footer>
  );
}
