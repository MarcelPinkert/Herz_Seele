import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FindHelp() {
  const { t } = useTranslation();

  const [plz, setPlz] = useState("");
  const [stadt, setStadt] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  async function search() {
    setStatus("loading");
    setError("");

    const params = new URLSearchParams();
    if (plz.trim()) params.set("plz", plz.trim());
    if (stadt.trim()) params.set("stadt", stadt.trim());

    if (!plz.trim() && !stadt.trim()) {
      setStatus("error");
      setError(t("findHelp.errorEmpty"));
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/anlaufstellen?${params.toString()}`);
      const data = await res.json();

      if (!res.ok) {
        setResults([]);
        setStatus("error");
        setError(data?.error || t("findHelp.errorGeneric"));
        return;
      }

      setResults(data.results || []);
      setStatus("done");
    } catch {
      setResults([]);
      setStatus("error");
      setError(t("findHelp.errorBackend"));
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") search();
  }

  return (
    <section className="container card" style={{ marginBottom: "24px" }}>
      <h2>{t("findHelp.title")}</h2>
      <p className="small">{t("findHelp.subtitle")}</p>
      <p className="small" style={{ opacity: 0.9 }}>
        {t("findHelp.noteDE")}
      </p>

      <div className="cta-stack">
        <input
          className="btn input-plz"
          style={{ borderRadius: "14px" }}
          value={plz}
          onChange={(e) => setPlz(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("findHelp.plzPlaceholder")}
          inputMode="numeric"
        />

        <input
          className="btn"
          style={{ borderRadius: "14px" }}
          value={stadt}
          onChange={(e) => setStadt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("findHelp.cityPlaceholder")}
        />

        <button className="btn btn-primary" onClick={search} disabled={status === "loading"}>
          {status === "loading" ? t("findHelp.loading") : t("findHelp.search")}
        </button>
      </div>

      {status === "error" && (
        <p className="small" style={{ marginTop: "12px" }}>
          {error}
        </p>
      )}

      {status === "done" && results.length === 0 && (
        <p className="small" style={{ marginTop: "12px" }}>
          {t("findHelp.noResults")}
        </p>
      )}

      {results.length > 0 && (
        <div className="cards-3" style={{ marginTop: "16px" }}>
          {results.map((r, i) => (
            <article key={`${r.plz}-${r.name}-${i}`} className="card feature">
              <h3 style={{ marginTop: 0 }}>{r.name}</h3>
              <p className="small">
                <strong>{r.stadt}</strong> • {r.plz}
              </p>
              <p className="small">{r.strasse}</p>
              <a className="btn btn-outline" href={`tel:${String(r.telefon).replace(/\s+/g, "")}`}>
                {r.telefon}
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
