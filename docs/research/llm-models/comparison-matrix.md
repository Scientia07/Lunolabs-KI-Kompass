# LLM Vergleichsmatrix (Stand: Februar 2026)

> Kompakte Uebersicht aller Modelle - ideal fuer Context-Recovery

## Meta
| Key | Value |
|-----|-------|
| Recherche-Datum | 2026-02-10 |
| Zweck | Schnellreferenz fuer HTML-Erstellung |

---

## Frontier Models

| | ChatGPT (GPT-5.2) | Claude (Opus 4.6) | Gemini (2.5/3 Pro) |
|---|---|---|---|
| **Reasoning** | ⭐⭐⭐⭐⭐ (52.9% ARC-AGI-2) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Coding** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ (80.9% SWE-bench) | ⭐⭐⭐⭐ |
| **Context** | ⭐⭐⭐ (128K) | ⭐⭐⭐⭐⭐ (1M) | ⭐⭐⭐⭐⭐ (2M exp.) |
| **Multimodal** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ (nativ) |
| **Preis (Input)** | ~$2.50/MTok | $5-10/MTok | $0.10/MTok |
| **Nutzer** | 800M/Woche | Wachsend | Wachsend |
| **Best For** | Allrounder, Marktfuehrer | Code, Lange Docs | Multimodal, Guenstig |

## Open Source Models

| | Llama 4 | Mistral 3 | DeepSeek V3.2 |
|---|---|---|---|
| **Parameter** | ~405B | 41B aktiv (675B MoE) | ~671B MoE |
| **Context** | 128K | 256K | 128K |
| **Lizenz** | Community | Apache 2.0 | MIT |
| **Edge/Mobile** | Nein | Ja (3B-14B) | Nein |
| **Datenschutz** | ✅ OK | ✅ OK | ⚠️ China/DSGVO |
| **Best For** | Lokaler Allrounder | Edge, Multilingual | Math, Budget |

## Gesamtuebersicht nach Kategorie

| Kategorie | #1 | #2 | OSS Alternative |
|-----------|-----|-----|-----------------|
| Reasoning | GPT-5.2 | Claude Opus 4.6 | DeepSeek V3.2 |
| Coding | Claude Opus 4.6 | Gemini 2.5 Pro | Llama 4, Cline |
| Long Context | Claude Opus 4.6 (1M) | Gemini Pro (2M) | Mistral Large 3 (256K) |
| Kosteneffizienz | Gemini Flash | DeepSeek | Mistral Ministral |
| Multimodal | Gemini 2.5 | Claude Opus 4.6 | Llama 4, Mistral 3 |
| Bild (Kunst) | Midjourney v6 | DALL-E 3 | Stable Diffusion 3 |
| Video | Sora 2 / Runway Gen-4.5 | Kling 2.1 | - |
| Musik (Legal) | Eleven Music | Suno AI | - |
| Coding IDE | GitHub Copilot | Cursor | Cline (frei) |
| Agenten | CrewAI | LangChain | AutoGPT, Goose |
| Lokal | Ollama | vLLM | LM Studio |
