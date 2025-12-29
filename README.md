# Hilfe bei Depressionen — Projektübersicht

**Kurzbeschreibung**
Dieses Repository enthält ein kleines Web-Projekt zur Information über Depressionen und zur einfachen Suche lokaler Hilfsangebote. Es besteht aus einem Backend (Node + Postgres) und mehreren Frontend-Varianten (React/Vite sowie ältere statische Versionen).

---

## Projektstruktur 📁
- `backend/`
  - `server.js` — Express-API, DB-Initialisierung & Endpunkte (`/api/health`, `/api/anlaufstellen`)
  - `db.js` — PostgreSQL-Pool-Konfiguration
  - `seed.sql` — Seed-Daten für Tabelle `anlaufstellen`
  - `.env` — lokale Umgebungsvariablen (nicht committed)
  - `package.json`
- `Herz_Seele/` — modernes Frontend (Vite + React)
  - `src/` — Komponenten, Styles; `package.json` mit `dev`, `build` und `lint` scripts
- `altes_frontend_1/` und `Altes_Frontend/` — ältere, statische Seiten (`index.html`, `style.css`)
- `docker-compose.yml` — Container-Setup (Postgres service)

---

## Voraussetzungen
- Node.js (-> LTS empfohlen)
- npm oder pnpm
- Docker & Docker Compose (für lokale DB-Instanz)

---

## Quickstart — lokal (ohne Docker)
### 1) Backend (API)

```bash
cd backend
npm install
# sicherstellen: Postgres ist erreichbar und Umgebungsvariablen sind gesetzt (z.B. in backend/.env)
node server.js
```

API-Endpoints:
- `GET /api/health` — Health-Check
- `GET /api/anlaufstellen?plz=...&stadt=...` — Suche nach PLZ oder Stadt

Wichtig: Das Backend versucht beim ersten Start `seed.sql` auszuführen, wenn die Tabelle leer ist.

### 2) Frontend (Vite)

```bash
cd Herz_Seele
npm install
npm run dev
# öffne im Browser die angezeigte Vite-URL (meist http://localhost:5173)
```

### 3) Statische Frontends
Für `altes_frontend_1/` bzw. `Altes_Frontend/` reicht, die `index.html` im Browser zu öffnen oder einen lokalen Server zu starten (`npx serve .` oder `python -m http.server`).

---

## Quickstart — mit Docker (empfohlen für neue Setups)
1. Erstelle eine `.env` im Projekt-Root mit mindestens diesen Werten:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=anlaufstellen
```

2. Starte Compose:

```bash
docker-compose up -d
```

3. Prüfe Logs (falls Probleme):

```bash
docker-compose logs postgres --tail=200
```

4. Sobald die DB läuft: `cd backend && node server.js` starten.

---

## Wichtige Umgebungsvariablen
- `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` — für den Postgres-Container
- In `backend/.env` (oder System-Env): `PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`

---

## Häufige Probleme & Troubleshooting ⚠️
- ECONNREFUSED: Postgres nicht erreichbar (Container nicht gestartet oder falscher Host/Port).
- Init- oder Auth-Fehler: `password authentication failed for user "..."` → Prüfe `POSTGRES_*` und `PG*` Variablen.
- Docker-Init bricht ab: `POSTGRES_PASSWORD` fehlt → in `.env` setzen oder `POSTGRES_HOST_AUTH_METHOD=trust` (nicht empfohlen).
- SQL-Fehler beim Seed: Prüfe `backend/seed.sql` auf fehlende Kommata/abschließende Klammern.

---

## Linting & Tests
- Frontend (`Herz_Seele`) hat ESLint-Script: `npm run lint`.
- Es empfiehlt sich, CI für Linting, Accessibility-Checks und ggf. Unit-/Integrationstests einzurichten.

---
## In Arbeit
- Azure Grundsetup (Bicep)
- Mehrsprachigkeit