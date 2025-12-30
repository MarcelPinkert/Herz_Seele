import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [ttsOn, setTtsOn] = useState(false);
  const menuRef = useRef(null);

  // Popup schließen bei Klick außerhalb
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Bei Seitenwechsel: Popup schließen & Vorlesen stoppen
  useEffect(() => {
    setMenuOpen(false);
    window.speechSynthesis?.cancel();
    setTtsOn(false);
  }, [location.pathname]);

  function startReading() {
    const main = document.getElementById("main");
    const text = (main?.innerText || "").trim();
    if (!text) return;

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);

    // Sprache automatisch anhand der UI-Sprache
    utter.lang = i18n.language === "en" ? "en-US" : "de-DE";
    utter.rate = 1;
    utter.pitch = 1;

    utter.onend = () => setTtsOn(false);
    utter.onerror = () => setTtsOn(false);

    window.speechSynthesis.speak(utter);
    setTtsOn(true);
  }

  function stopReading() {
    window.speechSynthesis.cancel();
    setTtsOn(false);
  }

  function toggleLanguage() {
    const next = i18n.language === "de" ? "en" : "de";
    i18n.changeLanguage(next);
    stopReading(); // wichtig: sonst Mischsprache
  }

  return (
    <header className="site-header glass">
      <div className="container header-inner">
        {/* Logo → Startseite */}
        <Link to="/" className="brand" aria-label="Zur Startseite">
          <span className="logo" aria-hidden="true">🌿</span>
          <span className="brand-name">Herz&Seele</span>
        </Link>

        <div className="header-right">
          {/* Navigation */}
          <nav className="nav" aria-label="Hauptnavigation">
            <a href="#was-ist" className="nav-link">{t("nav.whatIs")}</a>
            <a href="#zeichen" className="nav-link">{t("nav.signs")}</a>
            <a href="#hilfe" className="nav-link">{t("nav.help")}</a>
            <a href="#ressourcen" className="nav-link">{t("nav.contacts")}</a>
          </nav>

          {/* Sprachumschalter */}
          <button
            type="button"
            className="nav-link lang-btn"
            onClick={toggleLanguage}
            aria-label={t("lang.label")}
            title={t("lang.label")}
          >
            {i18n.language === "de" ? t("lang.en") : t("lang.de")}
          </button>

          {/* Barrierefreiheit / TTS */}
          <div className="accessibility" ref={menuRef}>
            <button
              type="button"
              className="nav-link a11y-btn"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
            >
              🔊 {t("nav.a11y")}
            </button>

            {menuOpen && (
              <div className="a11y-menu" role="menu" aria-label={t("nav.a11y")}>
                <p className="a11y-title">{t("nav.ttsTitle")}</p>

                {!ttsOn ? (
                  <button
                    className="btn btn-primary a11y-action"
                    onClick={startReading}
                  >
                    ▶ {t("nav.ttsStart")}
                  </button>
                ) : (
                  <button
                    className="btn btn-outline a11y-action"
                    onClick={stopReading}
                  >
                    ■ {t("nav.ttsStop")}
                  </button>
                )}

                <p className="small" style={{ marginTop: 10, opacity: 0.9 }}>
                  {t("nav.ttsHint")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
