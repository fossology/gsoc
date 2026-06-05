---
sidebar_position: 6
title: Introduction
slug: /2026/enhance-reuse/
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2026 Saksham Mishra <sakshammishra112@gmail.com>
-->

## Author

[Saksham Mishra](https://github.com/sakshammishra112)

## Contact info

- [Email](mailto:sakshammishra112@gmail.com)
- [GitHub](https://github.com/sakshammishra112)

## Project title

Enhanced Reuse Agent for Intelligent License Reuse

## What's the project about?

This project enhances FOSSology's Reuse Agent to intelligently select and apply license reuse decisions by:

1. **Auto-selecting reusable components** from the FOSSology database by matching upload metadata (component name, uploader/groups) and comparing pfile fingerprints against existing clearing decisions.
2. **Falling back gracefully** when no match is found, with a clear "nothing found" notification.
3. **Processing file type mismatches** — handling file-type mismatches so that reused decisions can be applied even when the target is of a different file type from the source.

## What should be done?

### 1) Intelligent Auto-Select for Reuse

- Provide a UI option to enable **auto-select** for reusable components.
- When auto-select is enabled, the Reuse Agent searches the FOSSology database for the nearest matching upload using:
  - **Component name**
  - **Uploader identity / uploader groups**
- If the name is unavailable, compare the **pfile** (file fingerprint) of the uploaded component against the database (`clearing_decision` table).
- If a matching component is found:
  - Reuse all available clearing decisions (including **bulk** reuse).
- If no match is found:
  - The Reuse Agent reports **"nothing found"** and does not apply any decisions.

### 2) Enhanced Reuse Agent for Unidentified Files

This is a **separate agent** that reads files not identified by the standard Reuse Agent or bulk scan.

- Integrate **Nirjas** comment extraction to pull license comments from both the source and target files.
- Use **basic similarity and fuzzy logic** to match license comments from files that:
  - Share the same relative path.
  - Have the same detected license.
- If the comments match, apply the clearing decision.
- If the comments differ, **no decision is applied** (conservative fallback).

### 3) Reuse UI Enhancements

- Display a **histogram** comparing license counts between **v1** (old upload) and **v2** (new upload).
- Highlight in **different colors**:
  - Newly introduced licenses.
  - Licenses whose status changed between uploads.
- Show **statistics** — percentage of new licenses added relative to the scanner findings in the old upload.

### 4) REST-Level Transparency

All features across auto-select, enhanced reuse agent, and reuse UI must be accessible and observable through **REST APIs**, ensuring full transparency and enabling integration with external tools.

## Expected outcomes

- Intelligent, automated selection of reusable components reducing manual effort.
- Graceful handling of missing component metadata via pfile-based matching.
- File-type mismatch awareness enabling wider application of reuse decisions.
- Improved identification of reusable license decisions in files missed by standard reuse/bulk scan.
- Clear, confidence-driven fallback when comments do not match.
- Rich comparative UI with histograms, color-coded deltas, and adoption statistics.
- Full REST API coverage for all new features.
