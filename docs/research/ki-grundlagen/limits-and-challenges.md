# KI-Grenzen, Risiken und Herausforderungen (Stand: Anfang 2026)

> Recherche-Dokument fuer den KI-Kompass 2026 Leitfaden.
> Ziel: Ehrliche, faktenbasierte Darstellung — weder Panikmache noch Beschoenigung.
> Alle Zahlen mit Quellenangaben. Letzte Aktualisierung: Februar 2026.

---

## 1. Technische Limits

### 1.1 Halluzinationen (erfundene Fakten)

KI-Modelle generieren regelmaessig plausibel klingende, aber faktisch falsche Aussagen. Die Raten variieren stark je nach Modell und Aufgabentyp:

**Aktuelle Halluzinationsraten (Vectara Leaderboard / AllAboutAI, Stand Anfang 2026):**

| Modell | Halluzinationsrate (Zusammenfassungen) |
|--------|----------------------------------------|
| Gemini 2.0 Flash | ~0.7% (Spitzenreiter) |
| GPT-4o | ~1.5% |
| Mittlere Gruppe (div. Modelle) | 2–5% |
| Claude Sonnet | ~4.4% |
| Claude Opus | ~10.1% |

**Wichtiger Kontext:** Diese Raten gelten fuer einfache Zusammenfassungsaufgaben. Bei komplexeren Aufgaben steigen sie dramatisch:
- OpenAI o3 erreicht auf PersonQA/SimpleQA Halluzinationsraten von **33–51%** — mehr als doppelt so hoch wie das Vorgaengermodell o1 (~16%).
- In der Praxis bedeutet eine 2–5%-Rate: Bei 100 Interaktionen enthalten 2–5 faktische Fehler.

**Kernproblem:** LLMs sind darauf trainiert, die statistisch wahrscheinlichste Antwort zu liefern — nicht, ihre eigene Unsicherheit einzuschaetzen. Ohne ein Belohnungssystem fuer "Ich weiss es nicht" raten Modelle lieber, als Unwissen zuzugeben (Duke University Libraries, 2026).

### 1.2 Reasoning-Schwaechen

Trotz beeindruckender Fortschritte scheitern aktuelle Modelle an bestimmten Aufgabentypen systematisch:

**Dokumentierte Schwaechen (arXiv:2602.06176, Nature, Emergent Mind):**
- **Multi-Step-Logik:** Modelle exzellieren bei einfachen Schlussfolgerungen, versagen aber bei Aufgaben mit mehreren Abhaengigkeiten.
- **Fragilitaet:** Kleine Aenderungen am Prompt (Zahlenwerte aendern, Reihenfolge tauschen) koennen die Genauigkeit um bis zu **54 Prozentpunkte** senken.
- **Multiple-Choice-Anfaelligkeit:** Die Reihenfolge der Antwortmoeglichkeiten verschiebt Ergebnisse um 10–20 Punkte.
- **Medizinisches Reasoning:** In klinischen Szenarien schneiden alle getesteten Modelle (o1, Gemini, Claude, DeepSeek) deutlich schlechter ab als Aerzte — besonders beim Erkennen von Denkfehlern (Einstellung-Effekt).
- **Mathematik:** Zwar verbessert, aber Berechnungsfehler bleiben haeufig, besonders bei mehrstufigen Aufgaben.

**Grundursachen:**
- Next-Token-Vorhersage optimiert lokale Muster, nicht globale logische Planung.
- Tokenisierung erzeugt Artefakte: Modelle "bearbeiten" manchmal Tokens semantisch, ohne den tatsaechlichen Text zu veraendern (Phantom-Edit-Problem).
- Modelle lernen Abkuerzungsmuster statt echtes Verstaendnis.

### 1.3 Kontextfenster — Theorie vs. Praxis

Modelle werben mit immer groesseren Kontextfenstern (128K, 1M, sogar 10M Tokens). Die effektive Nutzbarkeit liegt deutlich darunter:

| Beworbenes Kontextfenster | Effektive Nutzbarkeit |
|---------------------------|----------------------|
| 200.000 Tokens | ~130.000 Tokens (65%) |
| 1.000.000 Tokens | Deutlich weniger, mit ploetzlichen Leistungseinbruechen |

**Forschungsergebnisse (Hong et al., 2025 — "Context Rot"):**
- 18 getestete LLMs nutzen ihren Kontext nicht gleichmaessig — die Leistung wird mit zunehmender Eingabelaenge immer unzuverlaessiger.
- Einige Top-Modelle zeigten bereits ab **100 Tokens** Fehler; die meisten hatten ab 1.000 Tokens spuerbare Genauigkeitsverluste.
- Typische effektive Kapazitaet: **60–70%** des beworbenen Maximums.

**Praktische Auswirkungen:**
- Mehrteilige Gespraeche sammeln Verlauf an, der irgendwann das Fenster sprengt.
- Bei Dokumentenanalyse gehen Informationen verloren, die das Fenster uebersteigen.
- Bei Kontextueberlauf muss das System entscheiden, was behalten und was verworfen wird — schlechte Entscheidungen kaskadieren durch die gesamte Antwort.

### 1.4 Trainingsdaten-Cutoff

Jedes Modell hat einen Wissensstichtag. Alles danach ist dem Modell unbekannt:
- Modelle koennen ueber aktuelle Ereignisse nur spekulieren oder halluzinieren.
- Retrieval-Augmented Generation (RAG) und Web-Suche mildern das Problem, loesen es aber nicht vollstaendig (Latenz, Qualitaet der Quellen, Kontextintegration).
- Feintuning auf neuere Daten ist teuer und zeitaufwendig.

### 1.5 Multimodale Luecken

Trotz Fortschritten bei Vision-Language-Modellen bestehen fundamentale Schwaechen:

**Getestete Schwaechen (Nature Machine Intelligence, aimultiple.com):**
- **Raeumliches Verstaendnis:** Modelle verstehen Diagramme (79% Genauigkeit bei Charts), versagen aber bei visueller Logik (44%).
- **Physik und Kausalitaet:** "Nahezu zufaellige Genauigkeit" beim Unterscheiden von Bewegungstrajektorien.
- **Vision-Action-Gap:** Die meisten Systeme koennen sehen und beschreiben, aber nicht kohaerent handeln — echte Vision-Language-Action-Integration fehlt weitgehend.
- **Speicherbedarf:** Ein einziges hochaufgeloestes Bild verbraucht so viel Speicher wie Tausende Texttoken.

### 1.6 Reproduzierbarkeit

Gleicher Prompt, unterschiedliche Ergebnisse — ein fundamentales Problem:

- LLMs sind probabilistisch: Jeder Token wird aus einer Wahrscheinlichkeitsverteilung gesampelt.
- Selbst bei Temperature=0 liefern Cloud-APIs keine deterministischen Ergebnisse (Batching, Scheduling, numerische Rundungsfehler).
- **Weniger als ein Drittel** der KI-Forschung ist reproduzierbar (Semmelrock et al., 2025).
- Praktische Konsequenz: Ein Prompt kann heute eine korrekte, morgen eine falsche Antwort liefern.

### 1.7 Geschwindigkeit und Latenz

- Groessere Modelle (o3, GPT-5.2 Deep Research) brauchen deutlich laenger fuer Antworten.
- Reasoning-Modelle denken sichtbar "nach" — das kostet Zeit und Rechenressourcen.
- Echtzeit-Anwendungen (Robotik, Fahrassistenz) stossen an Latenzgrenzen.
- Edge-Deployment ist moeglich, aber mit Qualitaetseinbussen verbunden.

---

## 2. Ethische Herausforderungen

### 2.1 Bias in Trainingsdaten und Ausgaben

KI-Systeme reproduzieren und verstaerken gesellschaftliche Vorurteile. Dokumentierte Beispiele:

**Gesundheitswesen:**
- Fuehrende LLMs (Claude, ChatGPT, Gemini) generieren weniger wirksame Behandlungsempfehlungen, wenn die Patientenrasse als "Afro-Amerikanisch" angegeben wird.
- Roentgen-KI diagnostiziert historisch benachteiligte Gruppen (insb. Schwarze Frauen) systematisch schlechter.

**Arbeitsmarkt:**
- Amazons KI-Recruiting-Tool bewertete Lebenslaeufe mit Hinweisen auf weibliche Identitaet systematisch schlechter.
- University of Melbourne (2025): KI-Bewerbungstools bewerten Kandidaten mit Sprachbehinderungen oder starkem Akzent ungenau.
- EEOC-Klage: iTutorGroups KI-Recruiting lehnte automatisch Frauen ab 55 und Maenner ab 60 Jahren ab (200+ qualifizierte Bewerber betroffen).

**Pflegebewertung:**
- LSE-Studie: Googles Gemma beschrieb Maenner in Pflegeberichten ueberproportional mit Begriffen wie "behindert", "unfaehig", "komplex" — ein messbarer Gender-Bias.

**Bildgenerierung:**
- Biases in Trainingsdaten werden bei Text- und Bildgenerierung verstaerkt: Geschlechter- und Rassenstereotype werden reproduziert, ohne explizit programmiert zu sein.

### 2.2 Deepfakes und Desinformation

Die Deepfake-Bedrohung waechst exponentiell:

- **Volumen:** Von 500.000 Deepfake-Dateien (2023) auf geschaetzt 8 Millionen (2025) — **900% jaehrliches Wachstum**.
- **Europol-Prognose:** Bis 2026 koennten **90% der Online-Inhalte** synthetisch generiert sein.
- **Finanzbetrug:** Deloitte prognostiziert einen Anstieg von Betrugsschaeden in den USA von $12,3 Mrd. (2023) auf $40 Mrd. (2027).
- **Konkrete Faelle:** Im Januar 2024 wurden $25 Mio. durch einen Deepfake-Videocall gestohlen (CFO-Imitation). Im Februar 2024 verlor ein UK-Unternehmen 20 Mio. GBP durch KI-generierten CEO-Betrug.
- **Erkennungsluecke:** Menschen erkennen hochwertige Deepfake-Videos nur zu **24,5%** korrekt.

### 2.3 Datenschutz und Privatspaere

- **64%** der Befragten sorgen sich um unbeabsichtigte Weitergabe sensibler Daten an KI-Tools, doch **50%** geben trotzdem persoenliche oder nicht-oeffentliche Daten ein (Cisco 2025).
- KI-Modelle werden auf oeffentlichen Quellen, proprietaeren Datenbanken und Nutzer-Interaktionen trainiert — oft **ohne Wissen oder Zustimmung** der betroffenen Personen.
- Modelle koennen Trainingsdaten unbeabsichtigt reproduzieren, einschliesslich Gesundheitsdaten, Finanzdaten und privater Gespraeche.
- Brasilien geht rechtlich gegen Social-Media-Unternehmen vor, die persoenliche Daten ohne Einwilligung fuer KI-Training nutzen.
- Meta und xAI nutzen Social-Media-Inhalte zunehmend fuer Modelltraining — Widerspruchsmoeglichkeiten sind begrenzt.

### 2.4 Urheberrecht

Der groesste ungeloeste Rechtsstreit der KI-Aera. Stand Anfang 2026:

**Laufende Klagen (51+ weltweit, Stand Oktober 2025):**
- **New York Times vs. OpenAI/Microsoft** (eingereicht Dez. 2023): Weiterhin anhaengig. Ueber ein Dutzend aehnliche Faelle wurden beim Southern District of New York zusammengefasst.
- **Neue Klagen (Ende 2025):** Pulitzer-Preistraeger John Carreyrou und weitere Autoren klagen gegen sechs KI-Unternehmen wegen Nutzung piratierter Buchkopien.
- **Fair-Use-Entscheidung:** Kein Gericht wird vor **Sommer 2026** ueber Fair Use bei KI-Training entscheiden.

**Vergleiche und Lizenzdeals:**
- Bartz vs. Anthropic: **$1,5 Mrd.** Vergleich (groesster KI-Copyright-Fall 2025).
- Warner Music + Suno: Vergleich und Lizenzpartnerschaft.
- UMG + Udio: Vergleich mit Lizenzvereinbarung und geplantem gemeinsamen Service fuer 2026.

### 2.5 Arbeitsmarkt: Verlagern, nicht nur Verdraengen

Die Debatte ist differenzierter als "KI nimmt alle Jobs weg":

**Zahlen:**
- Prognose bis 2030: **85–92 Mio. Jobs verdraengt**, aber **97–170 Mio. neue Rollen geschaffen** (WEF, Goldman Sachs).
- Erste Haelfte 2025: **77.999 Tech-Jobs** direkt durch KI abgebaut.
- **14%** aller Arbeitnehmer berichten, bereits durch KI verdraengt worden zu sein.

**Besonders betroffene Bereiche:**
- Kundenservice: 80% Automatisierungsrisiko (2,24 von 2,8 Mio. US-Jobs).
- Paralegals: 80% Automatisierungsrisiko bis 2026.
- Dateneingabe/Administration: 7,5 Mio. Jobs bis 2027 gefaehrdet.

**Ungleiche Verteilung:**
- **79%** der berufstaetigen Frauen in den USA arbeiten in Berufen mit hohem Automatisierungsrisiko (vs. 58% der Maenner).
- Juengere Arbeitnehmer (18–24) sorgen sich 129% haeufiger als Ueber-65-Jaehrige.

**Wachstumsbereiche:**
- Gesundheitsberufe (Pflegekraefte +52% Wachstum 2023–2033).
- KI-bezogene Rollen: Prompt Engineering, KI-Ethik, Datenaufbereitung.
- Handwerk und Berufe mit physischer Praesenz bleiben weitgehend geschuetzt.

### 2.6 Digitale Kluft und Zugangsungleichheit

KI verstaerkt bestehende globale Ungleichheiten:

- **Afrika:** Weniger als 1% der globalen Rechenzentrumskapazitaet — trotz 18% der Weltbevoelkerung.
- **Konzentration bei reichen Laendern:** 87% der bedeutenden KI-Modelle, 86% der KI-Startups, 91% des Risikokapitals — bei nur 17% der Weltbevoelkerung.
- **Daten-Bias:** KI-Systeme werden mit westlichen Daten trainiert, die Beduerfnisse, Sprachen und kulturelle Kontexte des Globalen Suedens oft nicht abbilden.
- **Lichtblick:** Ueber 40% des globalen ChatGPT-Traffics kam Mitte 2025 aus Schwellenlaendern (Brasilien, Indien, Indonesien, Vietnam).

---

## 3. Regulierung

### 3.1 EU AI Act — Europas Vorreiterrolle

Das weltweit erste umfassende KI-Gesetz. Zeitplan:

| Datum | Massnahme |
|-------|-----------|
| 1. Aug. 2024 | Inkrafttreten des EU AI Act |
| **2. Feb. 2025** | Verbot von KI mit "unakzeptablem Risiko" (Social Scoring, Massen-Biometrie, manipulative KI) |
| **2. Aug. 2025** | Pflichten fuer General-Purpose AI (GPAI), Governance-Strukturen (AI Board, Scientific Panel) |
| **2. Aug. 2026** | Vollstaendige Anwendung: Hochrisiko-KI (Annex III), Transparenzpflichten, Regulierungs-Sandboxen |
| 2. Aug. 2027 | Hochrisiko-KI in regulierten Produkten (Medizinprodukte, Fahrzeuge) |

**Strafen:** Bis zu **35 Mio. Euro oder 7% des Jahresumsatzes** bei verbotenen KI-Systemen.

**Digital Omnibus (geplant):** Die EU-Kommission plant Vereinfachungen und verlaengerte Fristen — Hochrisiko-Regeln koennten auf Dezember 2027 bzw. August 2028 verschoben werden.

### 3.2 USA — Freiwillige Leitlinien, Bundesstaaten preschen vor

- Der US-Ansatz setzt auf den **Privatsektor als Motor** und Regierungen als unterstuetzende Kraft.
- Bundesebene: Fokus auf bestehende Behoerdenkompetenzen, freiwillige Verpflichtungen der Industrie und Evaluierungsberichte.
- **Kalifornien:** SB 53 (Transparency in Frontier AI Act) wandelt freiwillige Unternehmenszusagen in **durchsetzbare Pflichten** um: Sicherheits-Frameworks, Incident Reporting, Whistleblower-Schutz.
- **Colorado:** Algorithmic Accountability Law (ab Feb. 2026): Transparenzpflichten fuer Hochrisiko-KI in Beschaeftigung, Gesundheit und Bildung.
- **California AB 2013** (ab Jan. 2026): Pflicht zur Offenlegung, ob Trainingsdaten urheberrechtlich geschuetztes Material oder PII enthalten.
- Chipexport-Kontrollen: Restriktive Politik gegenueber China bei Advanced-AI-Chips (H200, MI325X), seit Januar 2026 teilweise gelockert (Einzelfallpruefung statt Pauschalverbot).

### 3.3 China — Agile, sektorale Regulierung

- **Oktober 2025:** Aenderung des Cybersecurity Law — KI erstmals in nationalem Gesetz verankert (ab 1. Jan. 2026).
- **AI Plus Action Plan** (Aug. 2025): Nationale KI-Strategie mit Ziel 70% KI-Durchdringung in Schluesselsektoren bis 2027, 90% bis 2030.
- Ansatz: Pilotprojekte, Standards und gezielte Regeln statt umfassendem Rahmengesetz.
- **30+ neue Standards** fuer KI-Agenten, Datensaetze und digitale Transformation erwartet in 2026.
- Staerkere Kontrolle von Deepfakes und synthetischen Inhalten als im Westen.

### 3.4 Selbstregulierung der Industrie

- Historisch wichtig (Voluntary Commitments 2023, Responsible AI Principles), aber zunehmend als unzureichend bewertet.
- **Trend 2025/26:** Uebergang von freiwilligen Zusagen zu **durchsetzbaren Anforderungen**.
- Versicherungsbranche als neuer Treiber: "AI Security Riders" verlangen dokumentiertes Red-Teaming und Risikobewertungen als Voraussetzung fuer Versicherungsschutz.
- Zusammenfassung: "Das Zeitalter der freiwilligen KI-Ethik endet; das Zeitalter der durchsetzbaren KI-Integritaet beginnt."

---

## 4. Umweltauswirkungen

### 4.1 Energieverbrauch

**Training grosser Modelle:**

| Modell | Trainingsenergie | Vergleich |
|--------|-----------------|-----------|
| GPT-3 | ~1.287 MWh | |
| GPT-4 | ~50.000 MWh (50 GWh) | San Francisco 3 Tage versorgen |
| GPT-5 (geschaetzt) | Deutlich hoeher | Pro Anfrage ~8,6x mehr als GPT-4 |

**Pro Anfrage (Inferenz):**

| Modell | Energieverbrauch pro Anfrage |
|--------|------------------------------|
| GPT-4o | ~2,12 Wh |
| GPT-5.2 | ~18 Wh (Durchschnitt), bis 40 Wh (1.000 Token) |
| Google-Suche | ~0,3 Wh |

**Hochrechnung:** Wuerden alle 2,5 Mrd. taeglichen ChatGPT-Anfragen mit GPT-5 bearbeitet, waeren das **45 GWh pro Tag** — der Output von 2–3 Kernkraftwerken, genug fuer 1,5 Mio. US-Haushalte.

**Globale Perspektive:**
- Rechenzentren weltweit: ~1.050 TWh bis 2026 (vs. 460 TWh in 2022).
- KI-spezifisch (USA): 53–76 TWh (2024), prognostiziert 165–326 TWh bis 2028.
- Generative KI insgesamt: ~15 TWh (2025), prognostiziert 347 TWh bis 2030.

### 4.2 Wasserverbrauch

- **Pro ChatGPT-Anfrage:** 0,3 ml laut Sam Altman / 519 ml laut UC Riverside-Studie (inkl. indirektem Verbrauch). Die Wahrheit liegt dazwischen — die Diskrepanz zeigt, wie unterschiedlich gemessen wird.
- **Google Gemini:** ~0,26 ml pro Anfrage (5 Tropfen), laut Google selbst.
- **Taeglicher ChatGPT-Verbrauch global:** ~39 Mio. Gallonen (~148 Mio. Liter).
- Manche Rechenzentren verbrauchen bis zu **19 Mio. Liter pro Tag** — so viel wie eine Kleinstadt.

### 4.3 CO2-Fussabdruck

- **GPT-3 Training:** ~552 Tonnen CO2.
- **KI-Rechenzentren (Aug. 2025–Aug. 2026):** 105 Mio. Tonnen CO2 — **mehr als die Luftfahrtindustrie**, 2,18% der nationalen US-Emissionen.
- **Gesamtprognose 2025:** 32,6–79,7 Mio. Tonnen CO2 allein durch KI-Systeme.

### 4.4 Effizienzfortschritte (die gute Nachricht)

- Google berichtet: Energie- und CO2-Fussabdruck einer Gemini-Textanfrage sank innerhalb von 12 Monaten um **33x bzw. 44x**.
- Kleinere, effizientere Modelle (Destillation, Quantisierung) reduzieren den Ressourcenbedarf deutlich.
- Edge-KI und lokale Modelle (Ollama, LM Studio) vermeiden Rechenzentrumskosten fuer viele Anwendungsfaelle.

---

## 5. Wirtschaftliche Risiken

### 5.1 KI-Blase?

Die Investitionen in KI sind historisch beispiellos — und die Parallelen zu frueheren Spekulationsblasen sind unuebersehbar:

**Zahlen:**
- KI-Startups sammelten **$192,7 Mrd.** in 2025 ein.
- Geplante US-KI-Investitionen: Ueber **$500 Mrd.** in 2026 und 2027.
- **Aber:** Amerikanische Verbraucher geben nur **$12 Mrd. pro Jahr** fuer KI-Dienste aus.
- MIT Media Lab: **95% der Organisationen** erzielen bei $30–40 Mrd. Enterprise-KI-Investition **null Return**.

**Marktkonzentration:**
- Ende 2025: 30% des S&P 500 und 20% des MSCI World bestanden aus nur **fuenf Unternehmen** — groesste Konzentration seit einem halben Jahrhundert.
- Bewertungen auf dem Niveau der Dotcom-Blase.

**Experteneinschaetzungen:**
- Sam Altman (OpenAI CEO) raeumt ein, dass eine KI-Blase existiert.
- Jamie Dimon (JPMorgan CEO): "KI ist real", aber ein Teil der Investitionen wird verloren gehen; Wahrscheinlichkeit eines deutlichen Aktieneinbruchs hoeher als vom Markt eingepreist.
- OECD-Bericht (Dez. 2025): KI-Blase als "zentrales Abwaertsrisiko" fuer die US-Wirtschaft.

### 5.2 Machtkonzentration

- Lieferketten fuer KI-Infrastruktur sind hochkonzentriert: **Nvidia** (Chips) und **TSMC** (Fertigung) als Single Points of Failure.
- Wenige Unternehmen (OpenAI, Google, Meta, Microsoft, Anthropic) kontrollieren die leistungsfaehigsten Modelle.
- Open-Source-Alternativen (Llama, Mistral, DeepSeek) schaffen teilweise Gegengewicht, haben aber weniger Ressourcen fuer Sicherheit und Alignment.

### 5.3 Vendor Lock-in und Abhaengigkeit

- **94%** der IT-Fuehrungskraefte sorgen sich um Vendor Lock-in (Parallels Survey, Feb. 2026).
- KI-Pipelines sind selten eigenstaendig — sie haengen an verschraenkten Oekosystemen aus Datenquellen, APIs und Cloud-Infrastruktur.
- Anbieterwechsel ist teuer und riskant: Proprietaere Datenformate, fehlende Portabilitaet, undokumentierte Abhaengigkeiten.
- "Neoclouds" (GPU-Vermietungsfirmen) haben erhebliche Schulden auf Basis hypothetischer zukuenftiger Einnahmen aufgenommen.

### 5.4 Kosten der KI-Einfuehrung fuer Unternehmen

- **82%** der Kleinstunternehmen (<5 Mitarbeiter) halten KI fuer irrelevant fuer ihr Geschaeft.
- **51%** der Fuehrungskraefte identifizieren unzureichendes KI-Wissen als Hauptbarriere.
- **40%** der Arbeitgeber in Finanz- und Fertigungssektor berichten von erheblichen Kompetenzluecken.
- Anfang 2026: 78% der Organisationen nutzen KI, aber nur **~1% haben ausgereifte Deployments** mit echtem Mehrwert.
- Viele Unternehmen berichten von unter 10% Kostenersparnis und unter 5% Umsatzsteigerung — trotz erheblicher Investitionen.

---

## 6. Was KI NICHT kann

### 6.1 Echtes Verstaendnis und Bewusstsein

- KI-Modelle verarbeiten statistische Muster — sie "verstehen" im menschlichen Sinne nichts.
- Die Werkzeuge, um maschinelles Bewusstsein zu testen, **existieren nicht** (University of Cambridge, 2025).
- Weder Alltagsverstand noch Wissenschaft koennen derzeit klaeren, ob KI bewusst ist oder sein kann.
- Der wissenschaftliche Konsens: **Agnostizismus** — wir wissen es schlicht nicht und werden es auf absehbare Zeit nicht wissen.
- Nature (2025): "Es gibt kein bewusstes kuenstliches Intelligenzsystem" — aktuelle KI erzeugt lediglich die **Illusion** von Bewusstsein.

### 6.2 Gesunder Menschenverstand (Common Sense)

- Common Sense ist das Produkt einer langen Evolutionsgeschichte und bleibt fuer KI ein ungeloestes Problem (arXiv:2501.06642).
- KI-Systeme koennen ohne Common Sense keine zuverlaessigen Entscheidungen in dynamischen, realen oder abstrakten Kontexten treffen.
- Beispiel: Ein Kleinkind versteht intuitiv, dass Wasser nach unten fliesst und Glas zerbricht. Ein LLM "weiss" das nur statistisch und versagt bei ungewoehnlichen Szenarien.

### 6.3 Echte Kreativitaet vs. Rekombination

- KI generiert neue Kombinationen aus bekannten Mustern — das wirkt kreativ, ist aber fundamental anders als menschliche kreative Innovation.
- KI kann keinen kuenstlerischen "Durchbruch" erzeugen, der auf persoenlicher Erfahrung, Emotion oder kulturellem Kontext basiert.
- Die Qualitaet von KI-generierten Inhalten ist hoch, aber die Originalitaet begrenzt: Es handelt sich um hochentwickelte Interpolation, nicht um echte Extrapolation.

### 6.4 Physische Interaktion

- Robotik-KI hat Fortschritte gemacht, ist aber weit von menschlicher Geschicklichkeit entfernt.
- Manipulation unbekannter Objekte, Arbeiten in unstrukturierten Umgebungen und Anpassung an unerwartete physische Bedingungen bleiben grosse Herausforderungen.
- Die Vision-Language-Action-Luecke (siehe 1.5) verhindert nahtlose Integration von Sehen, Verstehen und Handeln.

### 6.5 Emotionale Intelligenz

- KI kann Emotionen in Text und Stimme erkennen (Sentiment Analysis) — sie **empfindet** nichts.
- Empathie, Mitgefuehl und echtes emotionales Verstaendnis sind nicht vorhanden.
- In sensiblen Kontexten (Therapie, Trauerbegleitung, Krisenintervention) kann simulierte Empathie sogar schaedlich sein, wenn Nutzer sie fuer echt halten.

### 6.6 Langfristige Planung und Strategie

- Aktuelle KI optimiert auf Einzelanfragen oder kurze Sequenzen.
- Echte strategische Planung — mit Abwaegung von Tradeoffs, Risikobewertung ueber Monate/Jahre und Anpassung an veraenderte Umstaende — uebersteigt die Faehigkeiten aktueller Modelle.
- Agentic AI macht Fortschritte, operiert aber innerhalb eng definierter Rahmen und benoetigt menschliche Aufsicht fuer strategische Entscheidungen.

---

## Fazit fuer den Leitfaden

KI ist ein maechitges Werkzeug mit realen Grenzen. Die ehrliche Auseinandersetzung mit diesen Grenzen ist kein Argument gegen KI — sondern die Voraussetzung fuer ihren verantwortungsvollen Einsatz.

**Drei Kernbotschaften:**
1. **Vertrauen, aber verifizieren:** KI-Ausgaben immer kritisch pruefen, besonders bei Fakten, Zahlen und Empfehlungen.
2. **Kontext verstehen:** Wer die Grenzen kennt, kann KI besser einsetzen — und weiss, wann menschliches Urteil unverzichtbar ist.
3. **Entwicklung beobachten:** Viele dieser Limitierungen werden sich verbessern — aber nicht alle. Echtes Verstaendnis und Bewusstsein bleiben offene Forschungsfragen.

---

## Quellen und weiterfuehrende Links

### Halluzinationen
- [AllAboutAI: AI Hallucination Report 2026](https://www.allaboutai.com/resources/ai-statistics/ai-hallucinations/)
- [Vectara Hallucination Leaderboard (GitHub)](https://github.com/vectara/hallucination-leaderboard)
- [Duke University: Why Are LLMs Still Hallucinating? (2026)](https://blogs.library.duke.edu/blog/2026/01/05/its-2026-why-are-llms-still-hallucinating/)
- [Visual Capitalist: AI Hallucination Rates by Model](https://www.visualcapitalist.com/sp/ter02-ranked-ai-hallucination-rates-by-model/)

### Reasoning und technische Limits
- [arXiv:2602.06176 — Large Language Model Reasoning Failures](https://arxiv.org/abs/2602.06176)
- [Nature: Inflexible Reasoning in Clinical Problem-Solving](https://www.nature.com/articles/s41598-025-22940-0)
- [Sebastian Raschka: State of LLMs 2025](https://magazine.sebastianraschka.com/p/state-of-llms-2025)
- [Simon Willison: 2025 — The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)

### Kontextfenster
- [Factory.ai: The Context Window Problem](https://factory.ai/news/context-window-problem)
- [Hong et al., 2025: Context Rot Research](https://www.oajaiml.com/uploads/archivepdf/643561268.pdf)

### Reproduzierbarkeit
- [Keywords AI: LLM Consistency 2025](https://www.keywordsai.co/blog/llm_consistency_2025)
- [Wiley: Reproducibility in ML Research (2025)](https://onlinelibrary.wiley.com/doi/10.1002/aaai.70002)
- [FlowHunt: Defeating Non-Determinism in LLMs](https://www.flowhunt.io/blog/defeating-non-determinism-in-llms/)

### Bias
- [HBR: When AI Amplifies the Biases of Its Users (2026)](https://hbr.org/2026/01/when-ai-amplifies-the-biases-of-its-users)
- [AllAboutAI: AI Bias Statistics 2026](https://www.allaboutai.com/resources/ai-statistics/ai-bias/)
- [aimultiple: Bias in AI — Examples and Fixes](https://research.aimultiple.com/ai-bias/)

### Deepfakes
- [UNESCO: Deepfakes and the Crisis of Knowing](https://www.unesco.org/en/articles/deepfakes-and-crisis-knowing)
- [Keepnet: Deepfake Statistics & Trends 2026](https://keepnetlabs.com/blog/deepfake-statistics-and-trends)
- [SEC: AI, Deepfakes, and Financial Deception](https://www.sec.gov/files/carpenter-sec-statements-march2025.pdf)

### Urheberrecht
- [Copyright Alliance: AI Lawsuit Developments 2025](https://copyrightalliance.org/ai-copyright-lawsuit-developments-2025/)
- [AI Business: AI Lawsuits in 2026](https://aibusiness.com/generative-ai/ai-lawsuits-in-2026-settlements-licensing-deals-litigation)
- [ChatGPT Is Eating the World: Status of 51 Lawsuits](https://chatgptiseatingtheworld.com/2025/10/08/status-of-all-51-copyright-lawsuits-v-ai-oct-8-2025-no-more-decisions-on-fair-use-in-2025/)

### Arbeitsmarkt
- [WEF / Goldman Sachs: How Will AI Affect the Global Workforce](https://www.goldmansachs.com/insights/articles/how-will-ai-affect-the-global-workforce)
- [Yale Budget Lab: Impact of AI on the Labor Market](https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs)
- [DemandSage: AI Job Replacement Statistics 2026](https://www.demandsage.com/ai-job-replacement-stats/)
- [National University: 59 AI Job Statistics](https://www.nu.edu/blog/ai-job-statistics/)

### Datenschutz
- [Incogni: Gen AI and LLM Privacy Ranking 2025](https://blog.incogni.com/ai-llm-privacy-ranking-2025/)
- [Kiteworks: AI Data Privacy Risks — Stanford 2025 AI Index](https://www.kiteworks.com/cybersecurity-risk-management/ai-data-privacy-risks-stanford-index-report-2025/)
- [Private AI: International AI Safety Report 2025 — Privacy Risks](https://www.private-ai.com/en/blog/ai-safety-report-2025-privacy-risks)

### Digitale Kluft
- [UNDP: The Next Great Divergence](https://www.undp.org/asia-pacific/next-great-divergence)
- [UN: Mind the AI Divide](https://www.un.org/digital-emerging-technologies/sites/www.un.org.techenvoy/files/MindtheAIDivide.pdf)
- [World Bank: Strengthening AI Foundations](https://www.worldbank.org/en/news/factsheet/2025/11/21/strengthening-ai-foundations-emerging-opportunities-for-developing-countries)

### Regulierung
- [EU AI Act: Implementation Timeline](https://artificialintelligenceact.eu/implementation-timeline/)
- [Cooley: Digital Omnibus on AI](https://www.cooley.com/news/insight/2025/2025-11-24-eu-ai-act-proposed-digital-omnibus-on-ai-will-impact-businesses-ai-compliance-roadmaps)
- [Holistic AI: AI Regulation in 2026](https://www.holisticai.com/blog/ai-regulation-in-2026-navigating-an-uncertain-landscape)
- [IAPP: Global AI Governance — China](https://iapp.org/resources/article/global-ai-governance-china)
- [Congress.gov: Regulating AI — US and International Approaches](https://www.congress.gov/crs-product/R48555)

### Umwelt
- [MIT News: Generative AI's Environmental Impact](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117)
- [Carbon Brief: AI Data Centre Energy Use](https://www.carbonbrief.org/ai-five-charts-that-put-data-centre-energy-use-and-emissions-into-context/)
- [Tom's Hardware: GPT-5 Power Consumption](https://www.tomshardware.com/tech-industry/artificial-intelligence/chatgpt-5-power-consumption-could-be-as-much-as-eight-times-higher-than-gpt-4-research-institute-estimates-medium-sized-gpt-5-response-can-consume-up-to-40-watt-hours-of-electricity)
- [AllAboutAI: AI Environment Statistics 2026](https://www.allaboutai.com/resources/ai-statistics/ai-environment/)
- [Google Cloud: Measuring Environmental Impact of AI Inference](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference)

### KI-Blase und Wirtschaft
- [OECD / Axios: AI Bubble a Key Downside Risk](https://www.axios.com/2025/12/02/ai-bubble-stock-market-forecast-oecd)
- [Yale Insights: How the AI Bubble Bursts](https://insights.som.yale.edu/insights/this-is-how-the-ai-bubble-bursts)
- [Harvard Gazette: Should US Be Worried About AI Bubble?](https://news.harvard.edu/gazette/story/2025/12/should-u-s-be-worried-about-ai-bubble/)
- [WEF Global Risks Report 2026](https://www.weforum.org/publications/global-risks-report-2026/in-full/global-risks-report-2026-chapter-2/)
- [PCWorld: 8 Signs the AI Bubble May Pop in 2026](https://www.pcworld.com/article/3026273/signs-the-ai-bubble-may-pop-in-2026.html)

### Vendor Lock-in
- [Parallels Survey: 94% Fear Vendor Lock-In (Feb. 2026)](https://www.globenewswire.com/news-release/2026/02/17/3239335/0/en/94-of-IT-Leaders-Fear-Vendor-Lock-In-as-AI-Reality-Check-Forces-EUC-Strategy-Reset-Parallels-Survey-Finds.html)
- [IAPP: Hidden Fragility of AI Supply Chains](https://iapp.org/news/a/the-hidden-fragility-of-ai-supply-chains-why-traditional-risk-management-falls-short)

### KI-Bewusstsein und Grenzen
- [University of Cambridge: We May Never Tell if AI Becomes Conscious](https://www.cam.ac.uk/research/news/we-may-never-be-able-to-tell-if-ai-becomes-conscious-argues-philosopher)
- [Nature: There Is No Conscious AI](https://www.nature.com/articles/s41599-025-05868-8)
- [arXiv:2501.06642 — Common Sense Is All You Need](https://arxiv.org/abs/2501.06642)
- [Science: Illusions of AI Consciousness](https://www.science.org/doi/10.1126/science.adn4935)

### Multimodale Limits
- [Nature Machine Intelligence: Visual Cognition in Multimodal LLMs](https://www.nature.com/articles/s42256-024-00963-y)
- [aimultiple: Compare Multimodal AI Models on Visual Reasoning](https://research.aimultiple.com/visual-reasoning/)
- [Scientific American: World Models — Next AI Revolution](https://www.scientificamerican.com/article/world-models-could-unlock-the-next-revolution-in-artificial-intelligence/)

### KI-Adoption und Kosten
- [OECD: AI Adoption by SMEs (2025)](https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/12/ai-adoption-by-small-and-medium-sized-enterprises_9c48eae6/426399c1-en.pdf)
- [BigSur AI: AI Adoption Statistics — SMB vs Enterprise](https://bigsur.ai/blog/ai-adoption-statistics-smb-vs-enterprise)
- [SBA: AI in Business — Small Firms Closing In](https://advocacy.sba.gov/wp-content/uploads/2025/09/Research-Spotlight-AI-in-Business-Small-Firms-Closing-In_-092425.pdf)
