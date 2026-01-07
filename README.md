# Herz & Seele - Hilfe bei Depressionen

Willkommen bei "Herz & Seele"! Dieses Projekt ist eine einfache Website, die Menschen hilft, mehr über Depressionen zu erfahren und lokale Hilfsangebote in ihrer Nähe zu finden. Die Website ist in mehreren Sprachen verfügbar und soll Unterstützung bieten, wenn man sich niedergeschlagen fühlt.

## Was ist dieses Projekt?

"Herz & Seele" besteht aus zwei Hauptteilen:
- **Die Website (Frontend):** Das ist der Teil, den du im Browser siehst. Hier findest du Informationen über Depressionen, Tipps und eine Suchfunktion für Hilfsstellen.
- **Der Server (Backend):** Das ist der "Motor" hinter der Website. Er speichert Daten über Hilfsangebote und stellt sie der Website zur Verfügung.

Das Projekt läuft in sogenannten "Containern" (kleine, isolierte Umgebungen), um es einfach zu starten und zu verwalten.

## Für wen ist diese Website gedacht?

Die Website richtet sich an alle, die Informationen über Depressionen suchen oder Hilfe brauchen. Sie ist besonders nützlich für:
- Menschen, die Anzeichen von Depressionen bei sich oder anderen bemerken.
- Familienmitglieder oder Freunde, die unterstützen möchten.
- Jeder, der mehr über psychische Gesundheit erfahren möchte.

**Wichtig:** Diese Website ersetzt keine professionelle medizinische Beratung. Bei akuten Problemen wende dich bitte an Fachpersonal oder Notdienste.

## Wie starte ich die Website?

Um die Website lokal auf deinem Computer zu starten, folge diesen einfachen Schritten. Du brauchst keine Programmierkenntnisse – alles ist automatisiert.

### Was brauchst du?
- **Docker:** Ein Programm, das "Container" (wie kleine virtuelle Maschinen) auf deinem Computer laufen lässt. Es ist kostenlos und einfach zu installieren. Besuche [docker.com](https://www.docker.com/) und lade die Desktop-Version für Windows herunter.
- **Node.js:** Eine Software, die für die Website benötigt wird. Lade sie von [nodejs.org](https://nodejs.org/) herunter (empfohlen: die LTS-Version).

### Schritt-für-Schritt-Anleitung
1. **Lade das Projekt herunter:** Stelle sicher, dass du alle Dateien aus diesem Ordner hast.

2. **Erstelle eine Konfigurationsdatei:** Erstelle eine neue Datei namens `.env` im Hauptordner (neben der `README.md`). Kopiere diese Zeilen hinein:
   ```
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=anlaufstellen
   ```
   Diese Datei enthält Passwörter für die Datenbank – behandle sie sicher und teile sie nicht.

3. **Starte die Anwendung:** Öffne ein Terminal (z.B. die Eingabeaufforderung oder PowerShell) im Hauptordner und gib ein:
   ```
   docker-compose up -d
   ```
   Das startet die Datenbank und den Server im Hintergrund.

4. **Starte die Website:** Gehe in den Ordner `backend` und gib ein:
   ```
   cd backend
   npm install
   node server.js
   ```
   Das startet den Server.

5. **Öffne die Website:** Gehe in den Ordner `Herz_Seele` und gib ein:
   ```
   cd Herz_Seele
   npm install
   npm run dev
   ```
   Öffne deinen Browser und gehe zu der Adresse, die angezeigt wird (meist `http://localhost:5173`).

Fertig! Die Website sollte nun in deinem Browser laufen.

### Alternative: Ohne Docker (für Fortgeschrittene)
Wenn du Docker nicht verwenden möchtest, kannst du eine lokale Datenbank (z.B. PostgreSQL) installieren. Das ist aber komplizierter und wird hier nicht im Detail erklärt.

## Häufige Probleme und Lösungen

- **Die Website startet nicht:** Stelle sicher, dass Docker läuft und die `.env`-Datei korrekt erstellt wurde.
- **Fehlermeldung mit "Postgres":** Das bedeutet, die Datenbank läuft nicht. Prüfe mit `docker-compose logs postgres`, ob alles in Ordnung ist.
- **Andere Fehler:** Schau in die Logs mit `docker-compose logs`. Wenn du nicht weiterkommst, suche online nach der Fehlermeldung oder frage in einem Forum.

## Mehr Informationen

- Die Website unterstützt mehrere Sprachen: Deutsch, Englisch, Arabisch, Finnisch, Polnisch, Russisch, Türkisch und Ukrainisch.
- Es gibt auch ältere Versionen der Website in den Ordnern `altes_frontend_1` und `Altes_Frontend`, falls du sie ausprobieren möchtest.

Wenn du Fragen hast oder helfen möchtest, das Projekt zu verbessern, melde dich gerne!

---

*Dieses Projekt ist ein Lernprojekt und wird kontinuierlich verbessert.*