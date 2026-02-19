# Working Thoughts

## Current Focus: KI-Kompass 2026 — Interaktiver Leitfaden (COMPLETE)

### Was wurde erstellt
- **Datei:** `/home/joel/Lunolabs-External/Mythen/AI-2026/ai-evolution-guide-de.html`
- **Kompletter Rewrite** der alten Tab-basierten Seite
- Standalone HTML (~1330 Zeilen) mit eingebettetem CSS/JS
- Three.js r128 AI-Universum Hero
- Dark-Mode Glassmorphism Design
- Responsive Layout (Mobile-First)

### Architektur
- **10 Scroll-Sections** statt Tabs (narrativer Flow)
- **Datengetrieben:** BIG_THREE, TOOLS (~31 Items), TRENDS_DATA, TIMELINE_DATA, RESOURCES_DATA, LEARNING_PATH JS-Objekte
- **Rendering:** Template Literals → innerHTML (kein Framework)
- **3D:** Three.js r128 via CDN — Nodes fuer KI-Zentrum, 9 Kategorien, ~31 Tools
- **Persistenz:** localStorage fuer Lernpfad-Fortschritt

### Sections (alle implementiert & getestet)
1. **Hero** — Three.js AI-Universum, "Die neue Industrialisierung hat begonnen"
2. **Was ist KI?** — Stat-Counter (85%, 41%, 800M, 3.5x), Industrielle-Revolution-Vergleichstabelle
3. **Persona Router** — 4 klickbare Karten (Einsteiger/Entwickler/Kreative/Business)
4. **Die Grossen Drei** — ChatGPT vs Claude vs Gemini Vergleichstabelle + Detail-Cards
5. **Tool-Universum** — 31 Tool-Cards mit Filter (8 Kategorien) + Suchfunktion + Detail-Modals
6. **Trends** — 5 Trend-Cards (Agentic AI, MCP, Multimodal, Effizienz, Edge AI)
7. **Zukunft** — Timeline (Ende 2024 → 2026 Ausblick) + Kernzitat
8. **Ressourcen** — 6 Kategorien mit direkten Links (Tools, GitHub, Docs)
9. **Lernpfad** — 3 Levels (Einsteiger/Fortgeschritten/Experte) x 5 Steps mit localStorage
10. **Footer** — Quick-Links, Attribution, Quellen-Hinweis

### Tools mit Detail-Modals (31 Stueck)
**Assistenten (Big Three):** ChatGPT (GPT-5.2), Claude (Opus 4.6), Gemini (2.5/3 Pro)
**Coding (6):** GitHub Copilot, Cursor IDE, Claude Code CLI, Cline, Continue, Aider
**Bild-KI (3):** Midjourney v6/v7, DALL-E 3, Stable Diffusion 3
**Video-KI (4):** Sora 2, Runway Gen-4.5, Kling AI 2.1, Pika Labs 2.5
**Audio (3):** Suno AI, ElevenLabs/Eleven Music, Udio
**Produktivitaet (3):** Notion AI, Otter.ai, Zapier AI
**Lokal/OSS (5):** Ollama, Llama 4, Mistral 3, DeepSeek V3.2, LM Studio
**Frameworks (6):** LangChain, LlamaIndex, Hugging Face Transformers, CrewAI, ComfyUI, vLLM

### Interaktive Features (alle getestet)
- [x] Three.js 3D Hero mit Auto-Rotation, Drag, Zoom
- [x] Sticky Navigation mit Scroll-Tracking
- [x] Stat-Counter Animation (IntersectionObserver)
- [x] Persona Router → scrollt zu relevanter Section
- [x] 8-Kategorie Filter-Bar (Alle/Coding/Bild/Video/Audio/Produktivitaet/Lokal/Frameworks)
- [x] Echtzeit-Suchfunktion (Name + Beschreibung)
- [x] Detail-Modals mit Staerken, Schwaechen, Preistabelle, Links
- [x] Lernpfad mit localStorage Progress-Tracking (Toggle on/off, Counter-Update)
- [x] Fade-in Scroll-Animationen
- [x] Responsive Design (768px + 480px Breakpoints)

### Playwright-Testergebnisse
- Alle 10 Sections rendern korrekt
- Modal oeffnet/schliesst (getestet: GitHub Copilot)
- Filter funktioniert (getestet: Bild-KI → 3 Cards)
- Suche funktioniert (getestet: "Ollama" → 2 Cards)
- localStorage Persistenz funktioniert (toggle on: 1/5, toggle off: 0/5)
- Stat-Counter animieren zu Zielwerten
- Keine kritischen Console-Errors (nur WebGL Driver Warnings + favicon.ico)

### Datenquellen
Alle Inhalte aus strukturierter Recherche:
- `docs/research/llm-models/comparison-matrix.md`
- `docs/research/llm-models/frontier-models.md`
- `docs/research/llm-models/open-source-models.md`
- `docs/research/coding-tools/coding-assistants.md`
- `docs/research/image-video-ai/creative-ai.md`
- `docs/research/audio-music-ai/audio-music.md`
- `docs/research/open-source-frameworks/frameworks.md`
- `docs/research/trends-2025-2026/trends.md`

### Server
```bash
cd /home/joel/Lunolabs-External/Mythen/AI-2026
python3 -m http.server 8888
# Oeffne: http://localhost:8888/ai-evolution-guide-de.html
```

### Moegliche Erweiterungen
- [ ] Mehrsprachigkeit (DE/EN Toggle)
- [ ] Export/PDF-Funktion
- [ ] Dark/Light Mode Toggle
- [ ] Weitere Tools hinzufuegen (z.B. Perplexity, Replit Agent)

## Update: Mehrwert fuer Einsteiger bis Experten (2026-02-12)

- Datei `ai-evolution-guide-de.html` erweitert um neue Sektion **Start hier** mit drei klaren Einstiegspfaden:
  - Einsteiger (30-45 Minuten)
  - Fortgeschritten (60-90 Minuten)
  - Experte (2-3 Stunden)
- Tool-Bereich verbessert mit **zweiter Filterebene nach Erfahrungslevel** (`Einsteiger`, `Fortgeschritten`, `Experte`) zusaetzlich zu Kategorien und Suche.
- Tool-Cards + Modal enthalten jetzt sichtbares **Einstiegslevel-Badge** inkl. kurzer Einordnung fuer Erwartungsmanagement.
- Such-/Filterlogik auf kombiniertes State-Modell umgestellt, inkl. Empty-State bei 0 Treffern.
- Navigation und Footer um `Start hier` erweitert, damit Nutzer schneller zum passenden Pfad finden.
- Hinweis: Kein lokaler Test-Runner im Repo vorhanden (`check-quality` nicht verfuegbar), Lint fuer geaenderte Datei ist sauber.


## Update: Klarheit plus Expert Deep Dive 2026-02-12

- Inhalt in `ai-evolution-guide-de.html` fuer Einsteiger und Experten geschaerft.
- Neuer Jargon Decoder in Die Grossen Drei mit einfachen Begriffserklaerungen.
- Trends auf zwei Ebenen aufgebaut: Kurz erklaert und Expert Deep Dive.
- Experten erhalten zusaetzliche Deep Dive Hinweise in Tool Modals.

## Update: Tonalitaet entschaerft 2026-02-12

- Mehrere Aussagen von Defizit-/Drucksprache auf konstruktive, chancenorientierte Sprache umgestellt.
- Kernbotschaft bleibt erhalten: Veraenderung passiert jetzt, Orientierung und fruehe Uebung schaffen Vorteile.
- Konkrete Anpassungen in `was-ist-ki`, Vergleichstabelle und `2026 Ausblick`-Timeline.

## Update: Waehlbare Tonalitaet 2026-02-12

- In `ai-evolution-guide-de.html` wurde ein Ton-Switch im Hero hinzugefuegt: `Neutral`, `Motivierend`, `Lernfokus`.
- Ton-sensitive Kerntexte werden dynamisch umgeschaltet (Hero, Einstiegs-Section, zentrale Beispiele, Zukunfts-Quote, 2026-Ausblick).
- Auswahl wird in `localStorage` gespeichert und beim Laden wiederhergestellt.
- Beim Umbau wurde ein fehlerhaft doppeltes HTML-Dateiende bereinigt und JavaScript-Syntax validiert.

## Update: Tool-Universum von 30 auf 45+ erweitert (2026-02-12)

- 15 neue Tools hinzugefuegt (Tier 1 + Tier 2 aus Recherche).
- **Coding (+5):** Windsurf (Codeium), Bolt.new, Lovable.dev, v0 (Vercel), Replit Agent
- **Video (+2):** HeyGen, Synthesia
- **Audio (+1):** Descript
- **Produktivitaet (+5):** Perplexity AI, NotebookLM (Google), n8n, Gamma.app, Poe (Quora)
- **Frameworks (+2):** Groq, OpenRouter
- Subtitle aktualisiert auf "45+ KI-Tools im ehrlichen Vergleich".
- TOOL_LEVELS fuer alle 15 neuen Eintraege gesetzt.
- Alle neuen Tools mit vollstaendigen Daten: Beschreibung, Staerken, Schwaechen, Preise, Links, Level.
- JS-Syntax validiert, keine doppelten IDs, Icons dedupliziert.

## Update: Three.js Visual Overhaul (2026-02-16)

### Fixes
- **White boxes around orbits entfernt:** Halos verwendeten vorher `SpriteMaterial` ohne Textur (= rechteckige Sprites). Jetzt wird eine Canvas-basierte radiale Gradient-Textur (`haloTexture`) verwendet, die weiche kreisfoermige Glows erzeugt.
- **Vertikale Verzerrung (Squeeze) behoben:** Die CSS `transform: scale(sx, sy)` im `updateCanvasTransition()` komprimierte die 3D-Szene vertikal (sy≈0.7). Loesung: CSS-Skalierung komplett entfernt. Canvas bleibt `position:fixed` im vollen Viewport. Z-Index-Layering (`#content-bg` z-index:2 opak, `#ai-universum` transparent) regelt die Sichtbarkeit natuerlich.

### Visuelle Verbesserungen
- **Multi-Layer Glow fuer Center-Node:** Zwei Glow-Spheren (r=1.2, r=1.8) + groesserer Halo-Sprite (5/6 units) statt einer einzigen Glow-Schicht.
- **Orbit-Ringe:** `RingGeometry` um Center-Node und alle 9 Kategorie-Nodes. Ringe rotieren langsam in der Animate-Loop.
- **Verbesserte Materialien:** Hoehere `emissiveIntensity` (0.45 statt 0.15 bei Kategorien, 0.55 statt 0.2 beim Center), niedrigere `roughness`, hoehere `metalness` fuer glanzvolle Orbs.
- **Soft-Circle Partikel:** Statt quadratischer `PointsMaterial` wird jetzt eine Canvas-basierte Kreis-Textur (`particleTexture`) verwendet. Groesser (0.4 statt 0.25) und sichtbarer.
- **Tool-Nodes aufgewertet:** Leicht groesser (0.22 statt 0.2), staerkeres Emissive (0.3 statt 0.12).
- **`setClusterFocus()` aktualisiert:** Opacity-Werte an neue Enhanced-Defaults angepasst, Ring-Opacity wird bei Hover gedimmt/gehighlighted.

### Technische Details
- `#canvas-wrapper` CSS vereinfacht: `transform-origin` und `will-change:transform` entfernt (nicht mehr noetig).
- `updateCanvasTransition()` drastisch vereinfacht: nur noch Camera-Z-Interpolation + `interactive`-Klassen-Toggle.
- Keine neuen Abhaengigkeiten. Alle Texturen werden per Canvas 2D Context generiert.
- Playwright-Test: Keine JS-Errors (nur favicon.ico 404 + WebGL Driver Warnings im headless Browser).


## Update: KI-Grundlagen, Faehigkeiten & Grenzen Sections (2026-02-18)

### Neue Sections
- **3 neue inhaltliche Sections** zwischen "Was ist KI?" und "Wer bist du?" eingefuegt:
  1. **#ki-grundlagen** "Wie funktioniert KI?" — Interaktive Hierarchie (KI→ML→DL→Transformer→LLM), KI-Dreieck (Compute/Daten/Algorithmen), 12 Meilensteine (2012-2026)
  2. **#ki-kann** "Was kann KI bereits?" — 8 Capability-Cards mit konkreten Zahlen, Stat-Badges, expandierbaren Details (Code, Text, Bild, Video, Audio, Medizin, Business, Robotik)
  3. **#ki-grenzen** "Wo sind die Grenzen?" — 8 Limit-Cards mit Severity-Badges (Hoch/Mittel/Ungeklaert), Stat-Badges, Detail-Texte (Halluzinationen, Reasoning, Kontext, Reproduzierbarkeit, Bias, Umwelt, Urheberrecht, KI-Blase)

### Zukunft-Section erweitert
- Timeline von 6 auf 8 Eintraege erweitert (neu: "2027 Prognose" und "2028-2030")
- Expertenstimmen-Block hinzugefuegt (Altman, Amodei, Hassabis, LeCun)
- Statisches Zitat am Ende ergaenzt

### Tone-Switch komplett entfernt
- Kommunikations-Ton Switch (Neutral/Motivierend/Lernfokus) samt CSS, HTML, JS-Daten (TONE_CONTENT) und Funktionen (applyTone, initToneSwitch, setToneHtml) entfernt
- Neutrale Texte als statische Inhalte beibehalten

### Research-Basis
Neue Dateien in `docs/research/ki-grundlagen/`:
- `foundations-and-outlook.md` (~34KB) — Grundpfeiler, Marktdaten, Benchmarks, Akteure
- `capabilities-examples.md` (~22KB) — Konkrete Anwendungsbeispiele mit Zahlen
- `limits-and-challenges.md` (~31KB) — Technische Limits, Ethik, Regulierung, Umwelt
- `future-outlook-2026-2030.md` (~42KB) — Kurzfristig/Mittelfristig/Langfristig, Experten, DACH

### Navigation
- 12 Nav-Links (3 neue: Grundpfeiler, Was kann KI?, Grenzen)
- Footer mit neuen Links aktualisiert
- Section-Tracking fuer Scroll-Navigation erweitert

### Interaktive Features
- Pillar-Hierarchie: Klick oeffnet Detail-Beschreibung, nur eine gleichzeitig offen
- Capability-Cards: "Mehr erfahren" / "Weniger" Toggle fuer Detail-Texte
- Severity-Badges: Farbcodiert (Rot=Hoch, Orange=Mittel, Blau=Ungeklaert)
- Stat-Badges: Kernzahl auf einen Blick pro Limit-Card

### Playwright-Test
- 0 JS-Errors, alle Sections rendern, Interaktionen funktionieren
