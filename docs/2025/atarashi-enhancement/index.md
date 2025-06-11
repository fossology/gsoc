---
sidebar_position: 1
title: Introduction
slug: /2025/atarashi-enhancement/
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2025 Rajul Jha <rajuljha49@gmail.com>
-->

## Author

[Rajul Jha](https://github.com/rajuljha)

## Contact info

- [Email](mailto:rajuljha49@gmail.com)
- [LinkedIn](https://linkedin.com/in/rajuljha)

## Project title

Enhancing Atarashi License Scanner

## What's the project about?

[Atarashi](https://github.com/fossology/atarashi) is a modern, information-retrieval-based license scanner integrated into the FOSSology ecosystem. It utilizes statistical techniques such as TF-IDF, cosine similarity, Damerau-Levenshtein distance, and N-gram distance to identify licenses in source code files. While Atarashi demonstrates promising performance with an accuracy of around 80%, this project aims to significantly improve both the accuracy and robustness of its predictions.

The main objectives of this project include:
- Adding a keyword-based pre-filtering mechanism to improve match precision and reduce the redundant time spent by the agents scanning.
- Enhancing the existing classifier with better similarity metrics and model tuning.
- Incorporating fallback logic to handle ambiguous or low-confidence license predictions.
- Utilizing the Minerva license dataset to train and evaluate the model more effectively.
- Ensuring seamless integration of improvements into the existing open pull request [#1634](https://github.com/fossology/fossology/pull/1634).

## What should be done?

### Integrating a keyword-based pre-filtering model
- Develop a pre-filtering module that leverages a configurable keyword list.
- This filter will help reduce candidate licenses for better focus in classification.
- Document the keyword matching logic and make the keywords configurable.
- Move towards ML based approach for keyword prefiltering.

### Improving the classifier
- Analyze the current classifier’s performance using Minerva as a benchmark.
- Explore enhancements to the similarity metrics or switching to more robust statistical models.
- Retrain and validate the model with improved datasets and parameters.

### Fallback mechanism for ambiguous predictions
- Define thresholds for low-confidence matches.
- In cases where confidence is below the threshold, add a secondary mechanism such as fuzzy match fallback or keyword-only fallback.
- Clearly log fallback occurrences for later analysis.

### Utilize Minerva dataset for training and evaluation
- Integrate the Minerva dataset into the Atarashi pipeline for model refinement.
- Apply data pre-processing and augmentation where necessary.
- Compare performance with and without Minerva enhancement.

### Seamless integration with FOSSology pull request
- All changes must be backward compatible and align with the architecture in [PR #1634](https://github.com/fossology/fossology/pull/1634).
- Create a Atarashi wrapper for FOSSology and introduce it as a FOSSology agent. 
- Write tests with good test coverage.
