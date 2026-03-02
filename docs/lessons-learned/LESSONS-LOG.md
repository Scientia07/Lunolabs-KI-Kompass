# Lessons Learned Log

---

## Session: KI-Kompass Feature Expansion — 2026-03-01

### [TOOLING] Service Worker caching requires active cache-busting strategy
When deploying updates to a PWA with a cache-first Service Worker, users will not see changes until the SW is updated and the old cache is invalidated. During development, this caused confusion when newly added tools didn't appear. Solution: bump `CACHE_NAME` version on every deploy, or use a network-first strategy for the HTML file.

### [CODE-PATTERN] Use a Set for feature flags over per-item boolean properties
The `NEW_TOOLS` Set pattern cleanly separates "which tools are new" from the tool data itself. This avoids polluting every tool object with a `isNew` flag and makes additions/removals a single-line change. Works well for any temporary categorization.

### [INSIGHT] Fact-check AI-generated statistics before publishing
The original Grenzen section contained several cherry-picked or unverifiable statistics (e.g. "51% hallucination rate" as a general claim, "CO2 emissions exceed aviation"). These were plausible-sounding but either outdated, context-dependent, or false. Always cross-reference AI-generated numbers with primary sources before including them in educational content.

### [PROCESS] Pre-commit hooks enforce metadata headers — plan for them
The `@ai-generated` metadata header requirement in pre-commit hooks blocked the first commit attempt on `sw.js`. When adding new JS files to a repo with metadata-checking hooks, add the header block immediately during file creation.

---

## Session: KI-Kompass Mega Content Expansion (Brainstorming) — 2026-03-02

### [INSIGHT] Separate brainstorming from implementation sessions
When scope is large (38 new tools, 6 categories, persona tags, Praxis expansion), the brainstorming/research phase consumes significant context — multiple Q&A rounds, agent research results, line number analysis. By the time the implementation plan was complete, context was heavy enough that a handoff to a fresh session was the right call. Treat design and implementation as separate sessions for big expansions.

### [PROCESS] Research-heavy tasks benefit from agent parallelism
Researching 40+ AI tools across 13 categories was done by dispatching a research agent in parallel with a codebase exploration agent. This cut the research phase significantly. Use parallel agents whenever tasks are independent and don't share state.

### [CODE-PATTERN] Data-driven single-file apps scale with careful structure
At 3168 lines and 74 tools, the single HTML file remains maintainable because all content lives in JS data arrays with consistent structure. Adding 38 more tools is mechanical — append to array, add levels, done. The pattern holds to 110+ entries without refactoring.

### [ARCHITECTURE] New filter categories need three touch-points
Adding a category requires: (1) HTML filter button, (2) CAT_LABELS entry, (3) CAT_COLORS entry. Missing any one causes silent failures. Always document all touch-points when extending a data-driven UI system.
