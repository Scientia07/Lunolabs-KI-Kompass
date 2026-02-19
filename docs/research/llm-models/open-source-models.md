# Open Source LLM Models (Stand: Februar 2026)

> Frei verfuegbare Modelle zum Selbsthosten und Anpassen

## Meta
| Key | Value |
|-----|-------|
| Recherche-Datum | 2026-02-10 |
| Quellen-Anzahl | 7 |
| Relevanz | Hoch - Open Source als Alternative zu Cloud-APIs |

---

## Meta Llama 4

**Release:** 2025 | **Lizenz:** Community License (frei fuer <700M User)

### Staerken
- 128K Context Window
- Multimodal (Text + Bild Input)
- Verbesserter Multilingual Support
- Uebertrifft Gemini bei Zusammenfassungen & Dokument-Verstaendnis
- Kostenlos nutzbar und anpassbar

### Schwaechen
- Erfordert praezises Prompt Engineering
- GPU-intensiv (Enterprise-Grade Hardware noetig)
- Leicht hinter GPT-4/Claude Opus bei komplexem Reasoning

### Best For
- Lokales Deployment
- Anpassung/Fine-Tuning
- Kostenfreies Experimentieren
- Dokumentverarbeitung

### Links
- GitHub: https://github.com/meta-llama/llama
- Hugging Face: https://huggingface.co/meta-llama

### Quellen
- [10 Best Open-Source LLM Models 2025](https://huggingface.co/blog/daya-shankar/open-source-llms)
- [Llama 3 vs GPT-4](https://blog.promptlayer.com/llama-3-vs-gpt-4/)

---

## Mistral 3 Family

**Release:** 2025 | **Lizenz:** Apache 2.0

### Modelle
| Modell | Parameter | Context | Besonderheit |
|--------|-----------|---------|-------------|
| Mistral Large 3 | 41B aktiv (675B total) | 256K | MoE Architektur |
| Ministral 14B | 14B | 128K | Reasoning (~85% AIME 2025) |
| Ministral 8B | 8B | 32K | Edge/Mobile |
| Ministral 3B | 3B | 32K | Kleinste Variante |

### Staerken
- #2 OSS non-reasoning auf LMArena Leaderboard
- Multimodal + Multilingual
- Ministral-Serie fuer Edge-Geraete
- Alle Apache 2.0 lizenziert (volle kommerzielle Freiheit)

### Schwaechen
- MoE-Architektur erhoeht Komplexitaet
- Juenger als Llama-Oekosystem

### Best For
- Edge Computing / lokale Inferenz
- Multilingual Workflows
- Reasoning-Tasks
- Mobile Anwendungen (3B/8B)

### Links
- Website: https://mistral.ai
- GitHub: https://github.com/mistralai
- Hugging Face: https://huggingface.co/mistralai

### Quellen
- [Mistral 3 Model Family](https://mistral.ai/news/mistral-3)
- [TechCrunch Mistral 3 Analysis](https://techcrunch.com/2025/12/02/mistral-closes-in-on-big-ai-rivals-with-mistral-3-open-weight-frontier-and-small-models/)

---

## DeepSeek V3.2

**Release:** 2025 | **Lizenz:** MIT (Open Source)

### Staerken
- Exzellentes Reasoning & Mathematik (97.5% AIME 2025)
- Ultra-guenstig: $0.14/MTok Input (vs. OpenAI $2.50)
- Transparenter Denkprozess
- Open Source und anpassbar
- Stark bei Programmierung

### Schwaechen
- ⚠️ U.S.-Modelle loesen 20%+ mehr Software-Engineering-Tasks
- ⚠️ 12x anfaelliger fuer Agent-Hijacking-Attacken
- ⚠️ **DSGVO-Verstoss** (Datentransfer nach China ohne Sicherheiten)
- Limitiert multimodal
- Schlechte kreative Schreibfaehigkeiten
- Unklare Datenschutzrichtlinie

### Best For
- Mathematisches Reasoning
- Programmierung (interne Projekte)
- Kostenempfindliche Deployments

### ⚠️ Vorsicht
Sicherheits- und Datenschutzbedenken fuer sensitive Workflows. Nicht empfohlen fuer personenbezogene Daten oder geschaeftskritische Anwendungen.

### Links
- Website: https://deepseek.com
- GitHub: https://github.com/deepseek-ai

### Quellen
- [DeepSeek AI Technical Review Q1 2025](https://www.preprints.org/manuscript/202504.1676)
- [NIST CAISI Evaluation DeepSeek](https://www.nist.gov/news-events/news/2025/09/caisi-evaluation-deepseek-ai-models-finds-shortcomings-and-risks)
- [DigitalOcean DeepSeek Pros and Cons](https://www.digitalocean.com/resources/articles/deepseek-pros-and-cons)

---

## Conclusion

| Modell | Staerke | Schwaeche | Empfehlung |
|--------|---------|-----------|------------|
| Llama 4 | Vielseitig, gross | GPU-hungrig | Allrounder fuer Lokales |
| Mistral 3 | Edge-faehig, Apache 2.0 | Juengeres Oeko | Beste Lizenz, Edge/Mobile |
| DeepSeek V3.2 | Guenstig, starkes Math | Datenschutz! | Nur intern, nicht fuer EU-Daten |
