---
sidebar_position: 1
title: Introduction
slug: /2024/license-detection/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2024 Abdelrahman Jamal <abdelrahmanjamal5565@gmail.com>
-->

## Author

[Abdelrahman Jamal](https://github.com/Hero2323)

## Contact info

- [Email](mailto:abdelrahmanjamal5565@gmail.com)
- [LinkedIn](https://linkedin.com/in/abdelrahmanjamal)

## Project title

AI Powered License Scanner

## What's the project about?

One of Fossology's primary features is extracting licenses and license text
from files. Traditional methods like text comparison, regular expressions,
and SPDX identifiers can result in false positives, often requiring human
review.

This project harnesses the power of Large Language Models (LLMs) like Gemini-Pro, ChatGPT-3.5, and GPT-4. These models demonstrate exceptional accuracy in license recognition and conversion tasks.

**Key Goals:**

-   **License Detection/Identification:**  Accurately pinpoint licenses within files.
-   **License Conversion:**  Convert licenses to SPDX and other standard formats.
-   **Explainable AI:**  Provide clear reasoning behind license identification and conversion decisions.
-   **TBD:** (Potential for additional features - could be expanded later)
-   **Advanced Licen
se Analysis:** Explore the use of LLMs for:
    -   Obligation Conversion: Translate license obligations into actionable steps.
    -   Outbound License Determination: Assess the licenses applicable to derivative works.
    -   License Compatibility Checks: Identify potential conflicts or compatibility issues between licenses.

## What should be done?

1.  **Semantic Search Preprocessing:** Utilize semantic search to pinpoint sections of code most likely to contain license information. This serves several purposes:
    -   Cost Reduction: Minimize the amount of text processed by the LLM.
    -   Speed Enhancement: Accelerate license identification by focusing on relevant sections.
    -   Initial License Matching: Identify potential licenses based on the content of extracted sections.

2.  **LLM-Powered Decision Making:**  This phase involves a thorough evaluation process to select the most suitable LLM for the task. Multiple LLMs (e.g., LLama 3 8b, Mistral 7b, Gemma 1/2) will be tested on license identification and conversion tasks, considering factors such as:
    - Accuracy: Ability to correctly identify and convert licenses.
    - Explainability: Clarity and detail of explanations for decisions.
    - Efficiency: Performance and computational resource requirements.
    - Adaptability: Potential for fine-tuning or customization for license-specific tasks.

    Extensive prompt engineering will be conducted to optimize the input provided to the LLM, ensuring it receives the most relevant information from the pre-selected code sections and potential license matches. This will include experimenting with different prompt structures, formats, and the inclusion of additional context (e.g., project metadata) to enhance the LLM's performance and decision-making capabilities.

3.  **Handling Complex Cases:** Extend the LLM's capabilities to address scenarios where:
    -   Licenses are located in external files (e.g., LICENSE file in a project's root directory).
    -   Multiple files contribute to a project's overall licensing.