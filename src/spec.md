# Specification

## Summary
**Goal:** Fix production deployment blockers and successfully launch the existing proposal site to production.

**Planned changes:**
- Replace the invalid production domain value `"for_my_YELLOW"` with a platform-valid domain string (letters/numbers/hyphens only) and retry deployment.
- Investigate and resolve the generic production deployment failure so the current Version 3 build can deploy successfully.
- Verify all UI-referenced static assets load from their expected production paths (hero image, mascot image, background music), and fix any missing files or incorrect paths.

**User-visible outcome:** The site deploys successfully to production, loads the full proposal flow end-to-end (asking → yes → envelope → accepted), and all referenced images and background music load/play without errors.
