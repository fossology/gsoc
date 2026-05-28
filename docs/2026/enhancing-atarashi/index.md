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

2. **Atarashi upgrade**
   - Move from broad full-file matching to a **signal-driven retrieval + classification approach**.
   - Support confidence-aware predictions and a safer **`UNKNOWN` / abstain** behavior for weak evidence.

The data and model work is backed by an upgraded Minerva-style dataset pipeline, with balanced task-specific datasets for both Nirjas and Atarashi.

## What should be done?

### 1) Tree-sitter based Nirjas extraction pipeline

- Generalize the existing Tree-sitter proof-of-concept into a reusable extraction architecture.
- Build language-pack management and parser compatibility validation.
- Maintain a normalized extraction contract for downstream consumers.
- Add fallback behavior for unsupported/incompatible parsers.

### 2) Dataset generation for Nirjas and Atarashi

- Use a unified data pipeline over multiple sources (e.g. license corpora + non-license comments).
- Build train/validation/test splits for:
  - **Nirjas** (`license_comment` vs `non_license_comment`)
  - **Atarashi** (`license_id` multiclass)
- Include hard negatives, augmentation, and near-dedup for better generalization.

### 3) Nirjas classifier

- Select strong teacher embeddings using benchmark context + task evaluations.
- Distill to lightweight `model2vec` representations.
- Train a binary classifier optimized for high-throughput CPU inference.

### 4) Atarashi model path selection

- Implement and compare two tracks:
  - Distilled `model2vec` retrieval/classification path.
  - Fine-tuned + quantized embedding baseline for CPU-first deployment.
- Select production path using quality/latency trade-offs on held-out data.

### 5) Confidence-aware output and integration

- Add confidence scoring and `UNKNOWN` behavior in low-evidence cases.
- Integrate Nirjas → Atarashi flow end-to-end.
- Add tests, documentation, and reproducible evaluation steps.

## Expected outcomes

- More accurate and robust extraction of license-relevant comments from real-world source files.
- Faster and more reliable license prediction on high-signal fragments.
- Better scalability and maintainability for FOSSology's license detection workflows.
- Clearer model outputs for compliance workflows with confidence and abstention support.
