---
sidebar_position: 5
title: Introduction
slug: /2026/enhancing-atarashi/
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2026 Swapnil Dutta <swapnil@rycerz.es>
-->

## Author

[Swapnil Dutta](https://github.com/rycerzes)

## Contact info

- [Email](mailto:swapnil@rycerz.es)
- [LinkedIn](https://www.linkedin.com/in/swapnildutta1)

## Project title

Enhancing Nirjas & Atarashi for Accurate, Scalable License Intelligence

## What's the project about?

This project improves FOSSology's license intelligence pipeline in two connected parts:

1. **Nirjas revamp**
   - Move from regex-heavy extraction to **Tree-sitter based parsing** for robust, language-aware comment extraction.
   - Build a scalable multi-language extraction flow using language packs and compatibility checks.
   - Add a **recall-first ML gate** that decides whether an extracted comment is license-related at all.

2. **Atarashi upgrade**
   - Move from broad full-file matching to a **deterministic lexical cascade** over a short-notice reference index, with a **learned ranker** ordering the candidates it retrieves.
   - Report the **matched span** as character offsets, so a reviewer can see the evidence in the file as written.
   - Support confidence-aware predictions and a safer **`UNKNOWN` / abstain** behavior for weak evidence.

The two halves compose: Nirjas decides *whether* a comment is license-related, Atarashi answers *which* license.

The data work is backed by an upgraded Minerva-style dataset pipeline, with task-specific datasets for both models.

## Reports

Both benchmark reports are published here, and each one records the measurements behind a decision rather than only its outcome:

- **[Nirjas Comment Classifier — Model Benchmark & Selection Report](./updates/nirjas-benchmark-report.md)** — every modeling approach benchmarked for the binary gate, and why `model2vec`'s trainable classifier was selected over both a fine-tuned encoder and a naive static baseline.
- **[Atarashi License Identification — Engine Report](./updates/atarashi-engine-report.md)** — the cascade, the four corpora it is measured on, the head-to-head against ScanCode Toolkit, and an explicit account of what is still unsolved.

Datasets and models are published to the Hugging Face Hub:
[`rycerzes/nirjas-dataset`](https://huggingface.co/datasets/rycerzes/nirjas-dataset),
[`rycerzes/atarashi-dep5`](https://huggingface.co/datasets/rycerzes/atarashi-dep5),
[`rycerzes/nirjas-gate`](https://huggingface.co/rycerzes/nirjas-gate).

## What should be done?

### 1) Tree-sitter based Nirjas extraction pipeline

- Generalize the existing Tree-sitter proof-of-concept into a reusable extraction architecture.
- Build language-pack management and parser compatibility validation.
- Maintain a normalized extraction contract for downstream consumers.
- Add fallback behavior for unsupported/incompatible parsers.

### 2) Dataset generation for Nirjas and Atarashi

- Use a unified data pipeline over multiple sources (license corpora + non-license comments).
- Build train/validation/test splits for **Nirjas** (`license_comment` vs `non_license_comment`).
- Build non-circular evaluation corpora for **Atarashi**, labelled from sources independent of the engine: Debian DEP-5 records, author-declared SPDX tags, and human-annotated Software Heritage license blobs.
- Include hard negatives, augmentation, and near-dedup for better generalization.

### 3) Nirjas classifier

- Select strong teacher embeddings using benchmark context + task evaluations.
- Distill to lightweight `model2vec` representations.
- Train a binary classifier optimized for high-throughput CPU inference.

### 4) Atarashi matching and ranking path

- Compare candidate approaches on held-out data and select on quality/latency trade-offs.
- Build the retrieval layer against the register real files actually carry — short notices and one-line references, not license bodies.
- Learn the *ordering* of retrieved candidates, and the decision of whether to answer at all.

> **This item changed on measurement, and the change is the finding.** The original plan was to
> choose between two embedding paths for Atarashi — a distilled `model2vec` retrieval/classification
> path and a fine-tuned + quantized baseline. The measured answer was **neither**. No text model
> reads license text to choose between variants in the shipped engine, because that failure mode —
> a short decisive span inside otherwise identical text — is exactly `GPL-2.0` vs `GPL-3.0`, and it
> is where these models are weakest. The evidence, and what replaced them, is in
> [§6 of the engine report](./updates/atarashi-engine-report.md). An earlier multiclass
> `license_id` classifier dataset was built for that approach and then abandoned; nothing in the
> shipped engine derives from it.

### 5) Confidence-aware output and integration

- Add confidence scoring and `UNKNOWN` behavior in low-evidence cases.
- Report ambiguity as a *set* when the evidence does not separate two licenses, rather than picking one silently.
- Integrate Nirjas → Atarashi flow end-to-end.
- Add tests, documentation, and reproducible evaluation steps.

## Current status

**Nirjas**

| | PR | state |
|---|---|---|
| Tree-Sitter migration across all supported languages | [#76](https://github.com/fossology/nirjas/pull/76) | merged |
| pyproject/poetry + ruff/pyright | [#77](https://github.com/fossology/nirjas/pull/77) | merged |
| Test suite rebuilt on committed fixtures and a real corpus | [#82](https://github.com/fossology/nirjas/pull/82) | open |
| Recall-first ML license gate | [#78](https://github.com/fossology/nirjas/pull/78) | open (stacks on #82) |

The gate is a `model2vec` classifier on `potion-base-32M`, run at a **recall-first threshold of 0.20** rather than argmax — missing a license is expensive, since it escapes Atarashi entirely, while a false positive only wastes one Atarashi call. License recall **0.9952**, FPR 0.0227, ~12k samples/s on CPU, no GPU.

**Atarashi** — a three-PR stack, merging bottom-up:

| | PR | state |
|---|---|---|
| SPDX-first cascade + notice reference index | [#130](https://github.com/fossology/atarashi/pull/130) | open |
| Learned candidate ranker + SPDX 3.0 GPL bridge | [#131](https://github.com/fossology/atarashi/pull/131) | draft (stacks on #130) |
| Compound license expressions + matcher tuning | [#132](https://github.com/fossology/atarashi/pull/132) | draft (stacks on #131) |

Engine results at the shipped configuration:

| corpus | n | regime | R@1 | exact-set |
|---|---|---|---|---|
| DEP-5 | 671 | notice | 0.8718 | 0.8714 |
| SPDX-tag | 266 | notice | 0.9586 | 0.9122 |
| **Software Heritage, prevalence-weighted** | **11,680** | verbatim | **0.9770** | **0.9737** |
| Software Heritage, one blob per license | 66 | verbatim | 0.8333 | — |

20.7 ms/query on CPU, no GPU. Against ScanCode Toolkit the engine is **level, and ahead on nothing the data can resolve** — the report is explicit that this comparison predates the most recent changes and needs re-running before any claim about the current gap.

Most of the distance came from **fixing defects rather than modelling**: DEP-5 precision moved 0.652 → 0.885 over the rebuild, and the learned ranker accounts for roughly the last 0.04.

## Expected outcomes

- More accurate and robust extraction of license-relevant comments from real-world source files.
- Faster and more reliable license prediction on high-signal fragments.
- Better scalability and maintainability for FOSSology's license detection workflows.
- Clearer model outputs for compliance workflows with confidence and abstention support.
- Benchmarks and reports that record what was measured, including the approaches that were tried and rejected, so the decisions can be audited and re-run.
