# Mega Content Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Expand the KI-Kompass from 74 to 112+ tools across 16 categories, add persona tags to every tool, and expand Praxis prompts from 8 to 16.

**Architecture:** Single-file expansion of `ai-evolution-guide-de.html`. All changes are additive — new data entries in existing JS arrays/objects, new filter buttons in HTML, minor rendering updates in `renderToolCard()` and `renderModal()`. No new dependencies.

**Tech Stack:** Vanilla HTML/CSS/JS, Three.js r128 (unchanged)

**File:** `/home/joel/Lunolabs-External/Mythen/AI-2026/ai-evolution-guide-de.html` (3168 lines)

---

### Task 1: Add New Category Infrastructure

**Files:**
- Modify: `ai-evolution-guide-de.html:620-631` (filter buttons HTML)
- Modify: `ai-evolution-guide-de.html:831-833` (CAT_LABELS)
- Modify: `ai-evolution-guide-de.html` (CAT_COLORS — find near CAT_LABELS)

**Step 1: Add 6 new filter buttons after the existing aggregator button (line ~630)**

```html
<button class="filter-btn" data-cat="dreid">🧊 3D-KI</button>
<button class="filter-btn" data-cat="design">🎨 Design-KI</button>
<button class="filter-btn" data-cat="schreiben">✍️ Schreiben</button>
<button class="filter-btn" data-cat="daten">📊 Daten-KI</button>
<button class="filter-btn" data-cat="bildung">🎓 Bildung</button>
<button class="filter-btn" data-cat="wissenschaft">🔬 Wissenschaft</button>
```

**Step 2: Add new entries to CAT_LABELS (line ~831-833)**

Add to the object: `dreid:'3D-KI',design:'Design-KI',schreiben:'Schreiben',daten:'Daten-KI',bildung:'Bildung',wissenschaft:'Wissenschaft'`

**Step 3: Add new entries to CAT_COLORS**

Find `CAT_COLORS` (should be near CAT_LABELS). Add colors:
```js
dreid:'#14b8a6',design:'#f472b6',schreiben:'#fb923c',daten:'#38bdf8',bildung:'#a3e635',wissenschaft:'#c084fc'
```

**Step 4: Verify filter bar renders**

Open in browser, confirm 16 filter buttons appear and are scrollable on mobile.

**Step 5: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: add 6 new tool categories (3D, Design, Schreiben, Daten, Bildung, Wissenschaft)"
```

---

### Task 2: Add bestFor Field to All Existing 74 Tools

**Files:**
- Modify: `ai-evolution-guide-de.html:969-1557` (TOOLS array)

**Step 1: Add `bestFor` array to every existing tool entry**

Each tool gets a `bestFor` property with 1-3 values from: `'Einsteiger'`, `'Entwickler'`, `'Kreative'`, `'Business'`

Mapping for all 74 existing tools:

**Assistenten:**
- chatgpt: `['Einsteiger','Kreative','Business']`
- claude: `['Entwickler','Kreative','Business']`
- gemini: `['Einsteiger','Entwickler','Business']`
- grok: `['Entwickler','Business']`
- mscopilot: `['Einsteiger','Business']`

**Coding:**
- copilot: `['Entwickler']`
- cursor: `['Entwickler']`
- claudecode: `['Entwickler']`
- cline: `['Entwickler']`
- continue: `['Entwickler']`
- aider: `['Entwickler']`
- windsurf: `['Entwickler']`
- boltnew: `['Einsteiger','Kreative']`
- lovable: `['Einsteiger','Kreative']`
- v0dev: `['Entwickler','Kreative']`
- replitagent: `['Einsteiger','Entwickler']`
- geminicli: `['Entwickler']`
- codex: `['Entwickler']`

**Bild:**
- nanobanana: `['Entwickler','Kreative']`
- midjourney: `['Kreative']`
- dalle3: `['Einsteiger','Kreative']`
- stablediffusion: `['Entwickler','Kreative']`
- flux2: `['Entwickler','Kreative']`
- ideogram: `['Kreative','Business']`

**Video:**
- sora: `['Kreative']`
- runway: `['Kreative']`
- kling: `['Kreative']`
- pika: `['Einsteiger','Kreative']`
- heygen: `['Business','Kreative']`
- synthesia: `['Business']`
- veo3: `['Kreative']`
- lumaray3: `['Kreative']`
- hailuo: `['Einsteiger','Kreative']`
- viggle: `['Einsteiger','Kreative']`
- ltx2: `['Entwickler','Kreative']`

**Audio:**
- suno: `['Einsteiger','Kreative']`
- elevenlabs: `['Kreative','Business']`
- udio: `['Kreative']`
- descript: `['Kreative','Business']`

**Produktivitaet:**
- notionai: `['Business','Kreative']`
- otterai: `['Business']`
- zapier: `['Business','Entwickler']`
- perplexity: `['Einsteiger','Business']`
- notebooklm: `['Einsteiger','Business']`
- n8n: `['Entwickler','Business']`
- gamma: `['Business','Kreative']`
- canvaai: `['Einsteiger','Kreative','Business']`
- poe: `['Einsteiger']`

**Lokal/OSS:**
- ollama: `['Entwickler']`
- llama4: `['Entwickler']`
- mistral3: `['Entwickler']`
- deepseek: `['Entwickler']`
- qwen3: `['Entwickler']`
- lmstudio: `['Einsteiger','Entwickler']`

**Frameworks:**
- langchain: `['Entwickler']`
- llamaindex: `['Entwickler']`
- huggingface: `['Entwickler']`
- crewai: `['Entwickler']`
- comfyui: `['Entwickler','Kreative']`
- vllm: `['Entwickler']`
- groq: `['Entwickler']`
- openclaw: `['Entwickler']`
- openhands: `['Entwickler']`
- openwebui: `['Entwickler']`
- dify: `['Entwickler','Business']`
- autogen: `['Entwickler']`
- anythingllm: `['Entwickler']`
- litellm: `['Entwickler']`

**Aggregator:**
- openrouter: `['Entwickler']`
- abacus: `['Business','Entwickler']`
- t3chat: `['Einsteiger','Entwickler']`
- chathub: `['Einsteiger']`
- typingmind: `['Entwickler']`
- msty: `['Einsteiger','Entwickler']`

**Step 2: Verify no syntax errors**

Open in browser, check console for JS errors. Confirm tool grid still renders.

**Step 3: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: add bestFor persona tags to all 74 existing tools"
```

---

### Task 3: Update renderToolCard() and renderModal() for Persona Chips

**Files:**
- Modify: `ai-evolution-guide-de.html:2441-2467` (renderToolCard)
- Modify: `ai-evolution-guide-de.html:2469-2524` (renderModal)
- Modify: `ai-evolution-guide-de.html` (CSS section — add persona chip styles)

**Step 1: Add CSS for persona chips**

Find the tool-card CSS section and add:

```css
.persona-chips{display:flex;gap:4px;flex-wrap:wrap;margin-top:6px}
.persona-chip{font-size:.65rem;padding:2px 8px;border-radius:var(--r-full);font-weight:600;letter-spacing:0.02em}
.persona-chip.einsteiger{background:rgba(163,230,53,0.15);color:#a3e635}
.persona-chip.entwickler{background:rgba(168,85,247,0.15);color:#a855f7}
.persona-chip.kreative{background:rgba(236,72,153,0.15);color:#ec4899}
.persona-chip.business{background:rgba(34,197,94,0.15);color:#22c55e}
```

**Step 2: Update renderToolCard() to show persona chips**

Inside the template literal returned by `renderToolCard()`, after the level badge line, add:

```js
${tool.bestFor ? `<div class="persona-chips">${tool.bestFor.map(p => `<span class="persona-chip ${p.toLowerCase()}">${p}</span>`).join('')}</div>` : ''}
```

**Step 3: Update renderModal() to show "Ideal fuer" section**

Inside the modal template, after the level/category info, add:

```js
${tool.bestFor ? `<div style="margin:var(--s-md) 0"><strong>Ideal fuer:</strong> <span class="persona-chips" style="display:inline-flex">${tool.bestFor.map(p => `<span class="persona-chip ${p.toLowerCase()}">${p}</span>`).join('')}</span></div>` : ''}
```

**Step 4: Verify in browser**

Open tool grid, confirm persona chips appear on cards. Open a modal, confirm "Ideal fuer" section shows.

**Step 5: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: render persona chips on tool cards and modals"
```

---

### Task 4: Add 3D-KI and Design-KI Tools (6 tools)

**Files:**
- Modify: `ai-evolution-guide-de.html:969-1557` (TOOLS array — append after last entry)
- Modify: `ai-evolution-guide-de.html:858-909` (TOOL_LEVELS)

**Step 1: Add tool entries to TOOLS array**

Append after the last tool entry (before the closing `];`):

```js
// === 3D-KI ===
{id:'tripo',name:'Tripo AI',icon:'🧊',cat:'dreid',stars:4,
 desc:'Text/Bild zu 3D in 10 Sekunden. PBR-Texturierung, automatisches Rigging und Animation. Export als GLB, FBX, OBJ.',
 price:'Free-$199/Mo',priceLabel:'ab Free',
 strengths:['10-Sekunden Generierung — extrem schnell','Komplette Pipeline: Generation → Textur → Rig → Animation','PBR-Materialien fuer realistische Rendering-Ergebnisse','Export in alle gaengigen Formate (GLB, FBX, OBJ)','API fuer Batch-Verarbeitung verfuegbar'],
 weaknesses:['Feindetails bei komplexen organischen Formen begrenzt','Free-Tier hat eingeschraenkte Aufloesung','Community kleiner als bei etablierten 3D-Tools'],
 prices:[['Free','300 Credits bei Anmeldung'],['Lite','$9.90/Mo'],['Pro','$49.90/Mo'],['Studio','$199/Mo']],
 bestFor:['Entwickler','Kreative'],
 links:[['Website','https://www.tripo3d.ai'],['API Docs','https://www.tripo3d.ai/docs']]},

{id:'meshy',name:'Meshy AI',icon:'🧊',cat:'dreid',stars:4,
 desc:'Text-to-3D und Image-to-3D mit sauberer Quad-Topologie. Optimiert fuer Unreal, Unity und Blender.',
 price:'Free-$120/Mo',priceLabel:'ab Free',
 strengths:['Saubere Quad-Topologie — direkt verwendbar in Game-Engines','AI Texture Generator fuer existierende 3D-Modelle','Batch-API fuer Studios und Pipelines','Regelmaessige Modell-Updates mit steigender Qualitaet'],
 weaknesses:['Komplexe Szenen mit mehreren Objekten noch schwierig','Free-Tier auf 100 Credits/Monat limitiert','Rigging muss extern erfolgen'],
 prices:[['Free','100 Credits/Mo'],['Pro','$20/Mo (100 Assets)'],['Max','$60/Mo (400 Assets)'],['Unlimited','$120/Mo']],
 bestFor:['Entwickler','Kreative'],
 links:[['Website','https://www.meshy.ai'],['Docs','https://docs.meshy.ai']]},

// === Design-KI ===
{id:'framer',name:'Framer AI',icon:'🎨',cat:'design',stars:4,
 desc:'Prompt → komplette interaktive Website mit Animationen. AI Layout Generation, AI Translation, Workshop fuer Komponenten.',
 price:'Free-$40/Mo',priceLabel:'ab Free',
 strengths:['Komplette Website aus einem Prompt — inkl. Animationen und Responsiveness','AI Translation: gesamte Website automatisch uebersetzen','Workshop: Komponenten generieren ohne Code','Figma MCP Server fuer Design-to-Code Pipeline'],
 weaknesses:['Fuer komplexe Web-Apps (Dashboards, SaaS) weniger geeignet','Custom-Code-Integration hat Grenzen','Templates koennen generisch wirken ohne Anpassung'],
 prices:[['Free','Begrenzte Features'],['Personal','$20/Mo'],['Business','$40/Mo pro Locale']],
 bestFor:['Kreative','Business'],
 links:[['Website','https://www.framer.com'],['AI Features','https://www.framer.com/ai/']]},

{id:'figmaai',name:'Figma AI',icon:'🎨',cat:'design',stars:5,
 desc:'Industrie-Standard Design-Tool (150M+ Nutzer) mit tiefer KI-Integration. Make, Sites, Buzz — von Prototyp bis Produktion.',
 price:'$0-75/Mo',priceLabel:'ab Free',
 strengths:['Figma Make: High-Fidelity Prototypen aus Prompts generieren','Figma Sites: Interaktive Websites direkt publizieren','MCP Server: Designs direkt in Cursor, Windsurf, Claude Code uebergeben','150M+ Nutzer — groesstes Design-Oekosystem weltweit','AI Image Editing (Objekte entfernen, erweitern)'],
 weaknesses:['Volle KI-Features nur in teureren Plänen','Starke Abhaengigkeit vom Figma-Oekosystem','Lernkurve fuer Einsteiger ohne Design-Erfahrung'],
 prices:[['Starter','$15/Mo'],['Professional','$45/Mo'],['Organization','$75/Mo']],
 bestFor:['Entwickler','Kreative','Business'],
 links:[['Website','https://www.figma.com'],['AI Features','https://www.figma.com/ai/']]},

{id:'uizard',name:'Uizard',icon:'🎨',cat:'design',stars:3,
 desc:'KI-nativer UI/UX Editor fuer Nicht-Designer. Generiere App-Mockups aus Text, Skizzen oder Screenshots.',
 price:'Free-$19/Mo',priceLabel:'ab Free',
 strengths:['Extrem niedrige Einstiegshuerde — kein Design-Wissen noetig','Hand-Skizze fotografieren → digitales Wireframe','Multi-Screen Mockups fuer Mobile und Web','Ideal fuer schnelle Prototypen und Stakeholder-Praesentationen'],
 weaknesses:['Fuer produktionsreife Designs nicht detailliert genug','Begrenzte Anpassungsmoeglichkeiten im Vergleich zu Figma','Export-Optionen eingeschraenkt'],
 prices:[['Free','Begrenzter Zugang'],['Pro','$19/Mo']],
 bestFor:['Business','Einsteiger'],
 links:[['Website','https://uizard.io']]},

{id:'relume',name:'Relume',icon:'🎨',cat:'design',stars:4,
 desc:'Sitemap + Wireframes aus einem Prompt. 1000+ wiederverwendbare Webflow/Figma-Komponenten.',
 price:'$26-58/Mo',priceLabel:'ab $26/Mo',
 strengths:['Komplette Website-Struktur (Sitemap + Wireframes) aus einem Prompt','1000+ getestete Komponenten fuer Webflow und Figma','Ideal fuer Agenturen mit wiederkehrenden Website-Projekten','Schneller Weg vom Konzept zur fertigen Seite'],
 weaknesses:['Stark auf Webflow-Oekosystem fokussiert','Kein Free-Tier verfuegbar','Fuer nicht-Marketing-Websites weniger nuetzlich'],
 prices:[['Starter','$26/Mo'],['Pro','$58/Mo']],
 bestFor:['Kreative','Entwickler'],
 links:[['Website','https://www.relume.io']]}
```

**Step 2: Add TOOL_LEVELS entries**

```js
tripo:'Fortgeschritten',meshy:'Fortgeschritten',framer:'Einsteiger',figmaai:'Fortgeschritten',uizard:'Einsteiger',relume:'Fortgeschritten',
```

**Step 3: Add to NEW_TOOLS if applicable**

Tripo and Meshy are not brand-new 2025-2026 releases — skip. Figma AI features are recent — optionally add `'figmaai'`.

**Step 4: Verify — filter by 3D-KI shows 2 tools, Design-KI shows 4 tools**

**Step 5: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: add 6 tools — Tripo, Meshy, Framer, Figma AI, Uizard, Relume"
```

---

### Task 5: Add Schreiben-KI, Daten-KI, Bildung, Wissenschaft Tools (10 tools)

**Files:**
- Modify: `ai-evolution-guide-de.html` (TOOLS array, TOOL_LEVELS)

**Step 1: Append to TOOLS array**

```js
// === Schreiben-KI ===
{id:'jasper',name:'Jasper AI',icon:'✍️',cat:'schreiben',stars:4,
 desc:'Marketing-fokussierte KI-Schreibplattform. Brand Voice, SEO-Integration, 50+ Templates fuer Teams.',
 price:'$39-59/Mo',priceLabel:'ab $39/Mo',
 strengths:['Brand Voice: trainiert auf eure Markenrichtlinien und Tonalitaet','SEO-Integration via Surfer SEO — Inhalte direkt optimiert','50+ Templates fuer Ads, Blogs, E-Mails, Landing Pages','AI App Builder fuer individuelle Marketing-Workflows','Team-Collaboration mit Approval-Workflows'],
 weaknesses:['Kein Free-Tier — relativ teurer Einstieg','Fuer technische/akademische Texte weniger optimiert','Qualitaet variiert stark je nach Template und Prompt'],
 prices:[['Creator','$39/Mo'],['Pro','$59/Mo'],['Business','Individuell']],
 bestFor:['Business','Kreative'],
 links:[['Website','https://www.jasper.ai']]},

{id:'copyai',name:'Copy.ai',icon:'✍️',cat:'schreiben',stars:3,
 desc:'Go-to-Market KI-Plattform. 90+ Templates fuer Ads, E-Mails, Social Media. Workflow-Automatisierung.',
 price:'Free-$186/Mo',priceLabel:'ab Free',
 strengths:['Free-Tier mit brauchbarem Funktionsumfang','90+ Templates fuer kurze Marketing-Texte','Workflows automatisieren komplette Content-Pipelines','Niedriger Einstieg — kein Vorwissen noetig'],
 weaknesses:['Langform-Texte (Blogartikel, Whitepaper) schwaecher als Jasper','Workflows erst ab teurem Advanced-Plan','Output braucht oft manuelles Nachbearbeiten'],
 prices:[['Free','Begrenzt'],['Starter','$36/Mo'],['Advanced','$186/Mo']],
 bestFor:['Business','Einsteiger'],
 links:[['Website','https://www.copy.ai']]},

{id:'writesonic',name:'Writesonic',icon:'✍️',cat:'schreiben',stars:3,
 desc:'KI-Writer mit Chatsonic (Web-Suche) und AI Article Writer mit SEO-Optimierung. 80+ Templates.',
 price:'Free-$19/Mo',priceLabel:'ab Free',
 strengths:['Chatsonic: Chatbot mit Echtzeit-Websuche integriert','SEO Article Writer generiert optimierte Blogartikel','80+ Templates fuer verschiedene Content-Typen','Gutes Preis-Leistungs-Verhaeltnis'],
 weaknesses:['Free-Tier stark limitiert (10K Woerter)','Brand Voice weniger ausgereift als bei Jasper','Bulk-Content kann repetitiv wirken'],
 prices:[['Free','10K Woerter'],['Individual','$20/Mo'],['Teams','$19/User/Mo']],
 bestFor:['Business','Kreative'],
 links:[['Website','https://writesonic.com']]},

// === Daten-KI ===
{id:'julius',name:'Julius AI',icon:'📊',cat:'daten',stars:4,
 desc:'ChatGPT fuer Datenanalyse. CSV/Datenbank hochladen, Fragen stellen, Charts und Zusammenfassungen erhalten.',
 price:'Free-$40/Mo',priceLabel:'ab Free',
 strengths:['Natuerliche Sprache → Datenanalyse ohne Python/SQL-Kenntnisse','Dateien bis 32GB analysierbar (vs. ChatGPT 512MB)','Live-Datenbankverbindung (Snowflake, BigQuery, Postgres) auf Pro','Automatische Visualisierungen und Zusammenfassungen','50% Rabatt fuer Studierende und Lehrende'],
 weaknesses:['Free-Tier auf 15 Nachrichten/Monat begrenzt','Komplexe statistische Analysen brauchen Nachpruefung','Datenschutz: Daten werden in die Cloud geladen'],
 prices:[['Free','15 Nachrichten/Mo'],['Plus','~$20/Mo'],['Pro','~$40/Mo']],
 bestFor:['Business','Entwickler'],
 links:[['Website','https://julius.ai']]},

{id:'powerbi',name:'Power BI + Copilot',icon:'📊',cat:'daten',stars:4,
 desc:'Marktfuehrendes BI-Tool mit Copilot-KI-Layer. Natural Language Queries, Auto-Insights, Anomalie-Erkennung.',
 price:'$14-44/User/Mo',priceLabel:'ab $14/Mo',
 strengths:['Gartner Magic Quadrant Leader 2025 — branchenfuehrendes BI-Tool','Copilot: natuerlichsprachliche Abfragen direkt im Dashboard','Automatische Anomalie-Erkennung und Erklaerungen','Tiefe Microsoft-365-Integration (Excel, Teams, SharePoint)','Enterprise-Governance und Sicherheitskontrollen'],
 weaknesses:['Copilot Add-on kostet extra ($30/User/Mo)','Starke Abhaengigkeit vom Microsoft-Oekosystem','Lernkurve fuer Einsteiger ohne BI-Erfahrung'],
 prices:[['Pro','$14/User/Mo'],['Pro + Copilot','$44/User/Mo'],['Premium','Ab $20/User/Mo + Fabric']],
 bestFor:['Business'],
 links:[['Website','https://powerbi.microsoft.com']]},

// === Bildung ===
{id:'khanmigo',name:'Khanmigo',icon:'🎓',cat:'bildung',stars:4,
 desc:'KI-Tutor der Khan Academy. Sokratische Methode — fuehrt durch Probleme statt Antworten zu geben. Gratis fuer Lehrer.',
 price:'Free-$4/Mo',priceLabel:'ab Free',
 strengths:['Sokratische Methode: leitet zum Verstehen statt Loesungen vorzugeben','Kostenlos fuer Lehrkraefte — inkl. Unterrichtsplanung und Bewertungen','K-12 Abdeckung: Mathe, Naturwissenschaften, Geisteswissenschaften, Coding','1.4M+ Nutzer, 380+ Schuldistrikt-Partner','Paedagogisch fundiert — keine beliebigen ChatGPT-Antworten'],
 weaknesses:['Primaer auf englischsprachige Inhalte ausgerichtet','Fortgeschrittene Themen (Uni-Niveau) nur begrenzt abgedeckt','Abhaengig von Khan Academy Curriculum-Struktur'],
 prices:[['Lehrer','Kostenlos'],['Eltern/Schueler','$4/Mo']],
 bestFor:['Einsteiger','Business'],
 links:[['Website','https://www.khanmigo.ai']]},

{id:'duolingomax',name:'Duolingo Max',icon:'🎓',cat:'bildung',stars:3,
 desc:'KI-erweitertes Sprachenlernen. Roleplay-Gespraeche mit KI-Charakteren und personalisierte Grammatik-Erklaerungen.',
 price:'$29.99/Mo',priceLabel:'$29.99/Mo',
 strengths:['Roleplay: Gespraeche ueben in realistischen Szenarien (Restaurant, Flughafen)','Explain My Answer: personalisierte Grammatik-Erklaerungen nach jeder Uebung','500M+ Duolingo-Nutzer weltweit — bewaehrte Plattform','Gamification motiviert zum Dranbleiben'],
 weaknesses:['Deutlich teurer als Standard-Duolingo ($7/Mo)','Max-Features nur fuer ausgewaehlte Sprachen verfuegbar','KI-Roleplay kann bei komplexen Gespraechen holprig werden'],
 prices:[['Max','$29.99/Mo'],['Max Jahresabo','$168/Jahr']],
 bestFor:['Einsteiger'],
 links:[['Website','https://www.duolingo.com']]},

// === Wissenschaft ===
{id:'alphafold',name:'AlphaFold 3',icon:'🔬',cat:'wissenschaft',stars:5,
 desc:'Google DeepMinds Protein-Strukturvorhersage. Sagt 3D-Struktur von Proteinen, DNA, RNA und Liganden voraus.',
 price:'Free (Forschung)',priceLabel:'Free',
 strengths:['50% genauer als beste physikbasierte Methoden','3M+ Forscher in 190+ Laendern nutzen AlphaFold','Code Open-Source seit Feb 2025 (nicht-kommerziell)','Revolutioniert Medikamentenentwicklung — Isomorphic Labs fuehrt klinische Studien','Vorhersage von Protein-Protein, Protein-DNA und Protein-Ligand Interaktionen'],
 weaknesses:['Primaer fuer akademische/nicht-kommerzielle Nutzung','Vorhersagen ersetzen nicht experimentelle Validierung','Sehr spezialisiert — nur fuer Biochemie/Pharma relevant'],
 prices:[['AlphaFold Server','Kostenlos (nicht-kommerziell)'],['Kommerziell','Via Isomorphic Labs']],
 bestFor:['Entwickler'],
 links:[['Website','https://alphafold.ebi.ac.uk'],['DeepMind','https://deepmind.google/technologies/alphafold/']]},

{id:'medgemma',name:'MedGemma',icon:'🔬',cat:'wissenschaft',stars:4,
 desc:'Open-Source medizinische KI-Modellfamilie von Google. 91.1% auf MedQA. Fuer Healthcare-Entwickler und Forscher.',
 price:'Free (Open Source)',priceLabel:'Free',
 strengths:['91.1% auf MedQA (USMLE-Benchmark) — medizinisches Expertenwissen','Open Source via Hugging Face und Vertex AI','Drei Varianten: 4B multimodal, 27B text, 27B multimodal','Designed als Basis fuer klinische KI-Anwendungen'],
 weaknesses:['Nicht fuer direkte Patientenberatung gedacht — nur als Entwickler-Basis','Erfordert medizinisches Domaenenwissen fuer sinnvolle Anwendung','Regulatorische Huerden fuer klinischen Einsatz bleiben'],
 prices:[['Open Source','Kostenlos (Hugging Face)'],['Vertex AI','Pay-per-Use']],
 bestFor:['Entwickler'],
 links:[['Hugging Face','https://huggingface.co/google/medgemma'],['Google Blog','https://blog.google/technology/health/medgemma/']]}
```

**Step 2: Add TOOL_LEVELS**

```js
jasper:'Einsteiger',copyai:'Einsteiger',writesonic:'Einsteiger',julius:'Einsteiger',powerbi:'Fortgeschritten',khanmigo:'Einsteiger',duolingomax:'Einsteiger',alphafold:'Experte',medgemma:'Experte',
```

**Step 3: Verify filters — Schreiben shows 3, Daten shows 2, Bildung shows 2, Wissenschaft shows 2**

**Step 4: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: add 10 tools — Schreiben-KI, Daten-KI, Bildung, Wissenschaft categories"
```

---

### Task 6: Add Coding, Audio, Produktivitaet, Security Tools (12 tools)

**Files:**
- Modify: `ai-evolution-guide-de.html` (TOOLS array, TOOL_LEVELS, NEW_TOOLS)

**Step 1: Append to TOOLS array**

```js
// === Coding ===
{id:'devin',name:'Devin 2.0',icon:'💻',cat:'coding',stars:4,
 desc:'Erster autonomer KI-Software-Engineer. Plant, schreibt Code, debuggt und liefert fertige Pull Requests.',
 price:'$20/Mo+',priceLabel:'ab $20/Mo',
 strengths:['Vollstaendig autonome Entwicklung — Plant, codet, testet, liefert PRs','13.86% reale GitHub-Issues End-to-End geloest (7x besser als Vorgaenger)','Von $500/Mo auf $20/Mo gesenkt — drastisch zugaenglicher','$73M ARR in unter einem Jahr — starke Traktion','Ideal fuer Bug-Fixes, Feature-Branches, Refactoring'],
 weaknesses:['Autonome Ergebnisse brauchen Code-Review — nicht blind vertrauen','Komplexe Architekturentscheidungen ueberfordern das System','Credits-basiert: 1 ACU ≈ 15 Min Arbeit, kann teuer werden bei intensiver Nutzung'],
 prices:[['Core','$20/Mo (min, $2.25/ACU)'],['Teams','250 ACU, $2/ACU']],
 bestFor:['Entwickler','Business'],
 links:[['Website','https://devin.ai']]},

// === Audio/Musik ===
{id:'aiva',name:'AIVA',icon:'🎵',cat:'audio',stars:4,
 desc:'SACEM-anerkannter KI-Komponist. Spezialisiert auf Orchester-, Film- und klassische Musik. 250+ Stile.',
 price:'Free-€49/Mo',priceLabel:'ab Free',
 strengths:['SACEM-anerkannt als offizieller Komponist — einzigartiger rechtlicher Status','Spezialisiert auf Orchester und Filmmusik — beste Qualitaet in diesem Genre','250+ Stile mit vollstaendigem MIDI-Editing','Pro-Tier: volles Copyright-Eigentum an generierten Werken','WAV-Export in Studioqualitaet'],
 weaknesses:['Free-Tier: nur 3 Downloads/Monat, kein Copyright','Weniger geeignet fuer Pop/Electronic/Hip-Hop','Lernkurve bei erweiterten Kompositionsoptionen'],
 prices:[['Free','3 Downloads/Mo'],['Standard','€15/Mo'],['Pro','€49/Mo (volles Copyright)']],
 bestFor:['Kreative'],
 links:[['Website','https://www.aiva.ai']]},

{id:'soundraw',name:'Soundraw',icon:'🎵',cat:'audio',stars:3,
 desc:'Klick-basierter Musikgenerator. Genre, Stimmung und Laenge waehlen → 6 Tracks generiert. Royalty-free.',
 price:'$11/Mo+',priceLabel:'ab $11/Mo',
 strengths:['Nur auf eigens produzierter Musik trainiert — keine Copyright-Probleme','Lizenz gilt permanent, auch nach Kuendigung','Einfachste Bedienung: Genre + Mood + Laenge → fertig','Stems-Download fuer individuelle Anpassung'],
 weaknesses:['Kein Free-Tier verfuegbar','Begrenzte Vielfalt im Vergleich zu Suno/Udio','Eher Hintergrundmusik als eigenstaendige Songs'],
 prices:[['Creator','$11/Mo'],['Artist Unlimited','$22/Mo (WAV + Stems)']],
 bestFor:['Kreative','Einsteiger'],
 links:[['Website','https://soundraw.io']]},

{id:'boomy',name:'Boomy',icon:'🎵',cat:'audio',stars:3,
 desc:'Song in 30 Sekunden generieren und direkt auf Spotify, Apple Music und 40+ Plattformen veroeffentlichen.',
 price:'Free-$29.99/Mo',priceLabel:'ab Free',
 strengths:['Niedrigste Huerde: Song in unter 30 Sekunden erstellen','Direkte Distribution zu Spotify, Apple Music, TikTok, 40+ Plattformen','80% Streaming-Revenue fuer Nutzer','20M+ Songs erstellt — groesste KI-Musik-Community'],
 weaknesses:['Musikqualitaet deutlich unter Suno/AIVA-Niveau','Sehr begrenzte Anpassungsmoeglichkeiten','Free-Tier: nur 5 Saves und 1 Release'],
 prices:[['Free','5 Saves, 1 Release'],['Creator','$9.99/Mo'],['Pro','$29.99/Mo']],
 bestFor:['Einsteiger','Kreative'],
 links:[['Website','https://boomy.com']]},

{id:'murf',name:'Murf AI',icon:'🎵',cat:'audio',stars:4,
 desc:'Professionelles KI-Voiceover-Studio. 200+ Stimmen in 20+ Sprachen, Voice Cloning, Video-Synchronisation.',
 price:'Free-$99/Mo',priceLabel:'ab Free',
 strengths:['200+ realistische KI-Stimmen in 20+ Sprachen','Voice Cloning: eigene Stimme als KI-Stimme nutzen','Direkte Video-Integration — Narration zu Slides/Video synchronisieren','Studioqualitaet ohne Tonstudio oder Sprecher'],
 weaknesses:['Free-Tier: nur 10 Minuten','Emotionale Nuancen bei langen Texten noch begrenzt','Voice Cloning erfordert hochwertige Audio-Samples'],
 prices:[['Free','10 Min'],['Creator','$29/Mo'],['Business','$99/Mo']],
 bestFor:['Kreative','Business'],
 links:[['Website','https://murf.ai']]},

// === Produktivitaet ===
{id:'deepl',name:'DeepL Pro',icon:'⚡',cat:'produktivitaet',stars:5,
 desc:'Neuronale Uebersetzung spezialisiert auf europaeische Sprachen. Uebertrifft Google Translate in Blindtests.',
 price:'Free-€49.99/Mo',priceLabel:'ab Free',
 strengths:['Beste Uebersetzungsqualitaet fuer europaeische Sprachen — bestaetigt in Blindtests','Formell/Informell-Umschaltung (Du/Sie) — ideal fuer DACH-Region','Dokument-Uebersetzung: PDF, Word, PowerPoint mit Layout-Erhalt','Glossare fuer konsistente Fachterminologie','API-Zugang fuer Automatisierung und Integration'],
 weaknesses:['30 Sprachen — deutlich weniger als Google Translate (130+)','Free-Tier: 500K Zeichen/Mo und keine Dokumente','Asiatische Sprachen schwaecher als bei spezialisierten Alternativen'],
 prices:[['Free','500K Zeichen/Mo'],['Starter','€5.99/Mo'],['Advanced','€22.99/Mo'],['Ultimate','€49.99/Mo']],
 bestFor:['Business','Kreative'],
 links:[['Website','https://www.deepl.com'],['API','https://www.deepl.com/pro-api']]},

{id:'youcom',name:'You.com',icon:'⚡',cat:'produktivitaet',stars:4,
 desc:'KI-Suchmaschine mit ARI Deep Research Agent. Scannt 400+ Quellen gleichzeitig, liefert Berichte mit Zitaten.',
 price:'Free-$20/Mo',priceLabel:'ab Free',
 strengths:['ARI Agent: autonome Deep-Research mit 400+ Quellen gleichzeitig','Mehrere Modi: Research, Code, Writing — jeweils optimiert','Berichte mit verifizierten Zitaten, Charts und Visualisierungen','TIME Best Inventions 2025 — anerkannte Innovation','$1.5B Bewertung (Series C Sep 2025)'],
 weaknesses:['Kleinere Nutzerbasis als Perplexity — weniger Community-Feedback','ARI-Qualitaet schwankt bei sehr spezialisierten Themen','Noch kein etabliertes Oekosystem (Plugins, Integrationen)'],
 prices:[['Free','Begrenzter Zugang'],['YouPro','$20/Mo']],
 bestFor:['Business'],
 links:[['Website','https://you.com']]},

{id:'exa',name:'Exa (Neural Search)',icon:'⚡',cat:'produktivitaet',stars:4,
 desc:'Neuronale Such-API fuer KI-Pipelines. Sucht nach Bedeutung statt Keywords. Strukturierter JSON-Output.',
 price:'Pay-per-Use',priceLabel:'API-basiert',
 strengths:['Semantische Suche: findet Inhalte nach Bedeutung, nicht nur Keywords','Strukturierter JSON-Output — direkt verwendbar in RAG und Agenten','Designed als Such-Layer fuer KI-Produkte','Alternative zu Tavily/Brave Search API — oft praeziser'],
 weaknesses:['Nur API — kein Endnutzer-Interface','Erfordert Entwickler-Kenntnisse fuer Integration','Preismodell kann bei hohem Volumen teuer werden'],
 prices:[['API','Pay-per-Use (Credits)']],
 bestFor:['Entwickler'],
 links:[['Website','https://exa.ai'],['Docs','https://docs.exa.ai']]},

// === Frameworks/Security ===
{id:'darktrace',name:'Darktrace',icon:'🔧',cat:'frameworks',stars:4,
 desc:'Selbstlernende Cybersecurity-KI. Erkennt und bekaempft Bedrohungen autonom durch Verhaltensanalyse.',
 price:'Enterprise',priceLabel:'Enterprise',
 strengths:['Selbstlernend: baut Verhaltensbaseline fuer jedes Geraet/jeden Nutzer','Autonome Reaktion: kann Bedrohungen ohne menschliches Eingreifen isolieren','Abdeckung: Cloud, E-Mail, Endpoint, Netzwerk, OT','9400+ Organisationen weltweit geschuetzt'],
 weaknesses:['Enterprise-only Preismodell — nicht fuer Einzelpersonen/kleine Teams','False Positives moeglich bei ungewoehnlichem aber legitimem Verhalten','Erfordert Netzwerkintegration — kein einfaches SaaS-Setup'],
 prices:[['Enterprise','Individuell (Thoma Bravo Akquisition: $5.3B)']],
 bestFor:['Business'],
 links:[['Website','https://darktrace.com']]},

{id:'crowdstrike',name:'CrowdStrike Falcon',icon:'🔧',cat:'frameworks',stars:4,
 desc:'Cloud-native Endpoint-Schutz mit KI. Charlotte AI beantwortet Sicherheitsfragen in natuerlicher Sprache.',
 price:'Ab $6.99/Endpoint/Mo',priceLabel:'ab $6.99/Mo',
 strengths:['KI trainiert auf Billionen von Sicherheitsereignissen woechentlich','Charlotte AI: Sicherheitsfragen in natuerlicher Sprache stellen','Cloud-nativ — kein On-Premise-Setup noetig','29000+ Kunden inkl. Fortune 100','Falcon Fusion fuer SOAR-Automatisierung'],
 weaknesses:['Primaer Enterprise-fokussiert — Overkill fuer Einzelnutzer','Preismodell pro Endpoint kann bei grossen Flotten teuer werden','Dashboard-Komplexitaet erfordert Security-Expertise'],
 prices:[['Falcon Go','Ab $6.99/Endpoint/Mo'],['Falcon Pro','Individuell'],['Enterprise','Individuell']],
 bestFor:['Business'],
 links:[['Website','https://www.crowdstrike.com']]}
```

**Step 2: Add TOOL_LEVELS**

```js
devin:'Fortgeschritten',aiva:'Fortgeschritten',soundraw:'Einsteiger',boomy:'Einsteiger',murf:'Einsteiger',deepl:'Einsteiger',youcom:'Einsteiger',exa:'Experte',darktrace:'Experte',crowdstrike:'Experte',
```

**Step 3: Add to NEW_TOOLS Set**

```js
'devin',    // Devin 2.0 — 2025-2026
```

**Step 4: Verify filter counts — Audio now has 8, Produktivitaet has 11, Coding has 14**

**Step 5: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: add 12 tools — Devin, AIVA, Soundraw, Boomy, Murf, DeepL, You.com, Exa, Darktrace, CrowdStrike"
```

---

### Task 7: Update Subtitle and Tool Count

**Files:**
- Modify: `ai-evolution-guide-de.html:617` (subtitle text)

**Step 1: Update subtitle**

Change line 617 from `75+ KI-Tools` to `110+ KI-Tools`:

```html
<p class="section-subtitle">110+ KI-Tools im ehrlichen Vergleich — mit Bewertungen, Preisen und konkreten Empfehlungen fuer verschiedene Erfahrungslevel.</p>
```

**Step 2: Verify in browser**

**Step 3: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: update tool count to 110+"
```

---

### Task 8: Expand PRAXIS_DATA (8 → 16 prompts)

**Files:**
- Modify: `ai-evolution-guide-de.html:2631-2656` (PRAXIS_DATA array)

**Step 1: Append 8 new entries to PRAXIS_DATA**

```js
{icon:'📝',title:'Blog-Artikel',tag:'Content',
 desc:'Strukturierten Blogartikel generieren lassen.',
 prompt:'Schreibe einen 500-Wort Blogartikel ueber [THEMA]. Zielgruppe: [ZIELGRUPPE]. Ton: informativ aber zugaenglich. Struktur: Einleitung mit Hook, 3 Hauptpunkte mit konkreten Beispielen, Fazit mit Call-to-Action.'},

{icon:'📋',title:'Bewerbung',tag:'Karriere',
 desc:'Lebenslauf oder Anschreiben fuer eine Stelle optimieren.',
 prompt:'Optimiere diesen Lebenslauf fuer die Stelle als [POSITION] bei [FIRMA]. Hebe relevante Erfahrungen hervor, verwende Keywords aus der Stellenausschreibung, und formuliere Erfolge mit messbaren Ergebnissen. Hier mein aktueller CV: [CV EINFUEGEN]'},

{icon:'🎯',title:'Praesentation',tag:'Business',
 desc:'Struktur fuer eine ueberzeugende Praesentation erstellen.',
 prompt:'Erstelle eine Gliederung fuer eine 10-Minuten Praesentation ueber [THEMA]. Zielgruppe: [WER]. Ziel: [WAS SOLL DAS PUBLIKUM MITNEHMEN]. Struktur: starker Einstieg, 3-4 Kernbotschaften mit Beispielen, praegnantes Fazit.'},

{icon:'📱',title:'Social Media Plan',tag:'Marketing',
 desc:'Content-Plan fuer eine Woche erstellen lassen.',
 prompt:'Erstelle einen 1-Wochen Content-Plan fuer [PLATTFORM: Instagram/LinkedIn/TikTok]. Branche: [BRANCHE]. Ziel: [REICHWEITE/ENGAGEMENT/LEADS]. Pro Tag: Thema, Format (Reel/Carousel/Post), Caption-Entwurf, beste Posting-Zeit, 3 Hashtags.'},

{icon:'🔍',title:'SWOT-Analyse',tag:'Strategie',
 desc:'Strukturierte Staerken-Schwaechen-Analyse durchfuehren.',
 prompt:'Fuehre eine SWOT-Analyse durch fuer [UNTERNEHMEN/PRODUKT/IDEE]. Kontext: [BRANCHE, MARKTLAGE]. Pro Quadrant (Staerken, Schwaechen, Chancen, Risiken): mindestens 3 konkrete Punkte mit kurzer Erklaerung. Schliesse mit 2 strategischen Empfehlungen ab.'},

{icon:'📚',title:'Lernplan',tag:'Bildung',
 desc:'Strukturierten Lernplan fuer ein neues Thema erstellen.',
 prompt:'Erstelle einen 30-Tage Lernplan fuer [THEMA]. Mein Niveau: [ANFAENGER/FORTGESCHRITTEN]. Verfuegbare Zeit: [X] Stunden pro Woche. Struktur: Wochenziele, taegliche Aufgaben (max 30 Min), empfohlene Ressourcen (kostenlos bevorzugt), Meilensteine zur Selbstkontrolle.'},

{icon:'💬',title:'Kundenantwort',tag:'Support',
 desc:'Professionelle Antwort auf Kundenfeedback formulieren.',
 prompt:'Formuliere eine professionelle, empathische Antwort auf diese Kundenbeschwerde: [BESCHWERDE EINFUEGEN]. Ton: verstaendnisvoll aber loesungsorientiert. Struktur: 1) Verstaendnis zeigen, 2) Problem anerkennen, 3) konkrete Loesung/naechste Schritte anbieten, 4) positiver Abschluss.'},

{icon:'🖼️',title:'Bildanalyse',tag:'Vision',
 desc:'Ein Bild analysieren und beschreiben lassen.',
 prompt:'Analysiere dieses Bild detailliert: [BILD HOCHLADEN]. Beschreibe: 1) Was ist zu sehen (Objekte, Personen, Szene)? 2) Komposition und Stil, 3) Stimmung/Atmosphaere, 4) Moeglicher Kontext/Verwendungszweck. Falls Text im Bild: transkribiere ihn.'}
```

**Step 2: Verify in browser — 16 prompt cards visible, copy-to-clipboard works**

**Step 3: Commit**

```bash
git add ai-evolution-guide-de.html
git commit -m "feat: expand Praxis prompts from 8 to 16 categories"
```

---

### Task 9: Final Verification and Context Update

**Files:**
- Modify: `docs/context/THOUGHTS.md`

**Step 1: Open browser, verify:**
- [ ] 16 filter buttons visible and scrollable
- [ ] 112+ tools render in grid
- [ ] Each new category filter shows correct tool count
- [ ] Persona chips visible on all tool cards
- [ ] Modal shows "Ideal fuer" section
- [ ] New tools have correct level badges
- [ ] Neu 2026 badge on Devin
- [ ] 16 Praxis prompts visible and copyable
- [ ] Subtitle says "110+ KI-Tools"
- [ ] No console errors (besides known favicon/WebGL warnings)
- [ ] Mobile responsive — filters scroll horizontally

**Step 2: Update THOUGHTS.md with new section about this expansion**

**Step 3: Final commit**

```bash
git add docs/context/THOUGHTS.md
git commit -m "docs: update THOUGHTS.md with mega content expansion notes"
```
