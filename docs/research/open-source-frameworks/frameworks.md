# Open Source AI Frameworks (Stand: Februar 2026)

> Frameworks & Tools zum Selbstbauen von KI-Anwendungen

## Meta
| Key | Value |
|-----|-------|
| Recherche-Datum | 2026-02-10 |
| Quellen-Anzahl | 8 |
| Zielgruppe | Entwickler, fortgeschrittene Nutzer |
| Alle Links | Verifizierte GitHub-URLs |

---

## LLM Application Frameworks

### LangChain
- **GitHub:** https://github.com/langchain-ai/langchain
- **Stars:** 100K+
- **Zweck:** LLM-Workflow-Orchestrierung, Chain-Builder fuer Multi-Step-Apps
- **Sprache:** Python, JavaScript/TypeScript
- **Staerken:** Flexibilitaet, umfangreiche Integrationen, Multi-Step Reasoning
- **Best For:** Komplexe Workflows, RAG, Agenten
- **Docs:** https://python.langchain.com/

### LlamaIndex
- **GitHub:** https://github.com/run-llama/llama_index
- **Stars:** 40K+
- **Zweck:** Daten-Indexierung & Retrieval, RAG-Workflows
- **Sprache:** Python
- **Staerken:** RAG-Einfachheit, Skalierbarkeit, externe Datenanbindung
- **Best For:** RAG, Dokument-Verstaendnis, private Datenabfragen
- **Docs:** https://docs.llamaindex.ai/

### Hugging Face Transformers
- **GitHub:** https://github.com/huggingface/transformers
- **Stars:** 140K+
- **Zweck:** Vortrainierte NLP-Modelle, Model Hub, Transfer Learning
- **Sprache:** Python
- **Staerken:** Hunderte vortrainierte Modelle, einfaches Fine-Tuning, Community
- **Best For:** Modellzugang, Transfer Learning, NLP-Tasks
- **Docs:** https://huggingface.co/docs/transformers/

---

## Lokale Inferenz & Modell-Management

### Ollama
- **GitHub:** https://github.com/ollama/ollama
- **Stars:** 120K+
- **Zweck:** LLMs lokal ausfuehren, einfaches Modell-Management
- **Unterstuetzte Modelle:** Llama, Mistral, DeepSeek, Qwen, Gemma, Phi
- **Staerken:** Einfaches lokales Setup, Privacy, Offline-Faehig
- **Best For:** Lokale Entwicklung, datenschutzsensitive Workflows
- **Docs:** https://ollama.ai
- **Modelle:** https://ollama.ai/library

### vLLM
- **GitHub:** https://github.com/vllm-project/vllm
- **Stars:** 40K+
- **Zweck:** Blitzschnelle LLM-Inferenz, GPU-Optimierung
- **Staerken:** Schneller als Ollama, OpenAI-kompatible API, Advanced Batching
- **Best For:** High-Throughput Inferenz, Produktions-Deployments
- **Docs:** https://docs.vllm.ai/

### LM Studio
- **Website:** https://lmstudio.ai
- **Zweck:** Desktop-App fuer lokale LLMs (GUI)
- **Staerken:** Benutzerfreundlich, keine CLI noetig, Chat-Interface
- **Best For:** Einsteiger, nicht-technische Nutzer

---

## Agentic AI Frameworks

### CrewAI
- **GitHub:** https://github.com/crewAIInc/crewAI
- **Stars:** 25K+
- **Zweck:** Multi-Agenten-Orchestrierung, rollenbasierte Teams
- **Staerken:** Crews & Flows Architektur, lokal + Cloud, schlanke Architektur
- **Best For:** Multi-Agenten-Systeme, kollaborative Workflows
- **Docs:** https://docs.crewai.com/

### AutoGPT
- **GitHub:** https://github.com/Significant-Gravitas/Auto-GPT
- **Stars:** 170K+
- **Zweck:** Autonome Task-Ausfuehrung
- **Staerken:** Community-driven, Task-Zerlegung, Langzeit-Autonomie
- **Best For:** Autonome Workflows, Open-Source Agent-Entwicklung

### Goose (Block/Square)
- **GitHub:** https://github.com/block/goose
- **Zweck:** Erweiterbares AI-Agent-Framework, Local-First
- **Staerken:** Von Fintech-Unternehmen gebaut, Erweiterbarkeit
- **Best For:** Erweiterbare Agent-Pipelines, Privacy-First

---

## Bild-Generierung (Open Source)

### ComfyUI
- **GitHub:** https://github.com/comfyanonymous/ComfyUI
- **Stars:** 70K+
- **Zweck:** Node-basierter Stable Diffusion Workflow Editor
- **Staerken:** Visuell, modular, erweiterbar
- **Best For:** Komplexe Bild-Workflows, Automatisierung

### Automatic1111 WebUI
- **GitHub:** https://github.com/AUTOMATIC1111/stable-diffusion-webui
- **Stars:** 150K+
- **Zweck:** Web-Interface fuer Stable Diffusion
- **Staerken:** Feature-reich, grosse Community, viele Extensions
- **Best For:** Einstieg in Stable Diffusion

---

## Empfohlener Lernpfad

```
Einsteiger:
  1. Ollama installieren → Lokales LLM testen
  2. Hugging Face erkunden → Modelle entdecken
  3. LM Studio → GUI fuer lokale Modelle

Fortgeschritten:
  4. LangChain → Erste RAG-App bauen
  5. LlamaIndex → Eigene Daten anbinden
  6. ComfyUI → Bilder generieren

Experte:
  7. CrewAI → Multi-Agenten-System
  8. vLLM → Production Inference
  9. Fine-Tuning mit Transformers
```

---

## Conclusion

| Kategorie | Empfehlung | GitHub Stars | Einstiegslevel |
|-----------|------------|-------------|----------------|
| LLM Lokal | Ollama | 120K+ | Einsteiger |
| LLM Framework | LangChain | 100K+ | Fortgeschritten |
| RAG | LlamaIndex | 40K+ | Fortgeschritten |
| Modelle | HF Transformers | 140K+ | Fortgeschritten |
| Agenten | CrewAI | 25K+ | Experte |
| Bilder | ComfyUI | 70K+ | Fortgeschritten |
| Production | vLLM | 40K+ | Experte |

### Quellen
- [LangChain vs LlamaIndex](https://www.deepchecks.com/langchain-vs-llamaindex-depth-comparison-use/)
- [Ollama Models Guide 2025](https://practicalwebtools.com/blog/ollama-models-complete-guide-2025)
- [Top 11 Open-Source Agents 2025](https://cline.bot/blog/top-11-open-source-autonomous-agents-frameworks-in-2025)
