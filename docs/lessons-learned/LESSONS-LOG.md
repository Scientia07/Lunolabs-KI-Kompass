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
