# Design: KI-Kompass 2026 — Mega Content Expansion

**Date:** 2026-03-02
**Status:** Approved
**Scope:** ~38 new tools, 6 new categories, persona tags, Praxis expansion

---

## 1. New Filter Categories (6)

| ID | Icon | Label | Tools |
|---|---|---|---|
| `dreid` | 🧊 | 3D-KI | Tripo AI, Meshy AI |
| `design` | 🎨 | Design-KI | Framer AI, Figma AI, Uizard, Relume |
| `schreiben` | ✍️ | Schreiben | Jasper AI, Copy.ai, Writesonic |
| `daten` | 📊 | Daten-KI | Julius AI, Power BI Copilot |
| `bildung` | 🎓 | Bildung | Khanmigo, Duolingo Max |
| `wissenschaft` | 🔬 | Wissenschaft | AlphaFold 3, MedGemma |

DeepL Pro, You.com, Exa → Produktivität
Darktrace, CrowdStrike → Frameworks (Security sub-label)
Devin 2.0 → Coding
AIVA, Soundraw, Boomy, Murf AI → Audio

## 2. New Tools (~38 additions → 112+ total)

### 3D-KI
- **Tripo AI** — Text/Image to 3D, PBR texturing, rigging, animation. 10s generation. Free 300 credits. Best for: Entwickler, Kreative.
- **Meshy AI** — Text-to-3D with clean quad topology for Unreal/Unity/Blender. Batch API. Best for: Entwickler, Kreative.

### Design-KI
- **Framer AI** — Prompt → complete interactive website with animations. AI Translation. Best for: Kreative, Business.
- **Figma AI** — Figma Make (prototype from prompt), Figma Sites, Figma Buzz. MCP Server. Best for: Entwickler, Kreative, Business.
- **Uizard** — AI mockups from text/sketches for non-designers. Best for: Business, Einsteiger.
- **Relume** — Sitemap + wireframes from prompt, 1000+ Webflow/Figma components. Best for: Kreative, Entwickler.

### Schreiben-KI
- **Jasper AI** — Brand Voice, SEO, 50+ templates, marketing teams. Best for: Business, Kreative.
- **Copy.ai** — GTM platform, 90+ templates, short-form copy. Best for: Business, Einsteiger.
- **Writesonic** — AI writer + Chatsonic + SEO Article Writer. Best for: Business, Kreative.

### Daten-KI
- **Julius AI** — Natural language data analysis, upload CSV/DB, charts + summaries. Best for: Business, Entwickler.
- **Power BI Copilot** — Enterprise BI with Copilot AI layer, natural language queries. Best for: Business.

### Bildung
- **Khanmigo** — AI tutor with Socratic method, K-12, free for teachers. Best for: Einsteiger, Business.
- **Duolingo Max** — AI Roleplay + Explain My Answer for language learning. Best for: Einsteiger.

### Wissenschaft
- **AlphaFold 3** — Protein/DNA/RNA structure prediction, open-sourced. Best for: Experte.
- **MedGemma** — Open-source medical AI, 91.1% MedQA. Best for: Experte, Entwickler.

### Coding (+1)
- **Devin 2.0** — Autonomous AI software engineer, $20/Mo. Best for: Entwickler, Business.

### Audio/Musik (+4)
- **AIVA** — SACEM-recognized AI composer, orchestral/cinematic. Best for: Kreative, Experte.
- **Soundraw** — Click-based music generator, royalty-free, in-house trained. Best for: Kreative, Einsteiger.
- **Boomy** — Generate + distribute to Spotify/Apple Music in minutes. Best for: Einsteiger, Kreative.
- **Murf AI** — Professional AI voice-over, 200+ voices, 20+ languages. Best for: Kreative, Business.

### Produktivität (+3)
- **DeepL Pro** — Neural translation, European languages, document translation. Best for: Business, Kreative.
- **You.com** — AI search with ARI deep research agent. Best for: Fortgeschritten, Business.
- **Exa** — Neural search API for AI pipelines/agents. Best for: Entwickler.

### Frameworks/Security (+2)
- **Darktrace** — Self-learning cybersecurity, autonomous threat detection. Best for: Business, Experte.
- **CrowdStrike Falcon** — AI endpoint protection, Charlotte AI assistant. Best for: Business, Experte.

## 3. Persona Tags (bestFor field)

Add `bestFor` array to ALL tools (existing 74 + new 38):

```js
bestFor: ['Entwickler', 'Kreative']  // example
```

Four personas (matching Persona Router):
- Einsteiger
- Entwickler
- Kreative
- Business

Rendered as colored chips on tool cards + shown in modals.

## 4. Praxis Expansion (8 → 16 prompts)

New prompts:
1. Blog-Artikel
2. Bewerbung
3. Präsentation
4. Social Media Plan
5. Bildanalyse
6. SWOT-Analyse
7. Lernplan
8. Kundenantwort

## 5. Data Model Changes

```js
// Existing tool structure + new field:
{
  id: 'tripo',
  name: 'Tripo AI',
  icon: '🧊',
  cat: 'dreid',
  desc: '...',
  strengths: [...],
  weaknesses: [...],
  prices: [...],
  links: [...],
  level: 'Fortgeschritten',
  bestFor: ['Entwickler', 'Kreative']  // NEW FIELD
}
```

## 6. UI Changes

- Filter bar: 6 new category buttons (horizontal scroll already supported)
- Tool cards: persona chips below category badge
- Modals: "Ideal für:" section with persona chips
- Subtitle: "110+ KI-Tools im ehrlichen Vergleich"
- NEW_TOOLS Set: add any 2025-2026 releases from new tools
