import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import de from "./locales/de/translation.json";
import fi from "./locales/fi/translation.json";


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    fi: { translation: fi }
  },
  lng: "de",
  fallbackLng: "de",
  interpolation: { escapeValue: false },
});

export default i18n;