---
sidebar_position: 1
title: Introduction
slug: /2024/pipeline/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2024 Shreya Gautam <gautamm.shreya@gmail.com>
-->

## Author

[Shreya Gautam](https://github.com/ShreyaGautamm)

## Contact info

- [Email](mailto:gautamm.shreya@gmail.com)
- [LinkedIn](https://linkedin.com/in/shreyagautamm/)

## Project title

Data Pipelining of Safaa

## What's the project about?

Currently, Safaa provides a strong framework designed to deal with copyright notices particularly focusing on the identification and reduction of false positives, as well as streamlining the decluttering procedure to remove unnecessary content. Key features of Safaa include:
1. Model Flexibility
2. Integration with scikit-learn
3. spaCy Integration
4. Preprocessing Tools
Despite these strengths, the current process of data curation and handling is manual, which can be time-consuming and prone to human error. To address this, I am proposing a data pipeline project aimed at automating the entire workflow. This project will focus on developing an automated data pipeline that will streamline the collection, preprocessing, and preparation of data for model training. By automating these tasks, the project aims to enhance efficiency, scalability, and accuracy in Safaa's operations.

Additionally, the project will involve the creation of a dedicated library for Named Entity Recognition (NER) and Part-of-Speech (POS) tagging. This enhancement will further optimize the process of copyright notice analysis, making Safaa even more effective at reducing false positives.

Ultimately, the project aims to refine and fine-tune Safaa's models post-deployment, using ongoing research and development to continuously improve its performance and capabilities in false positive detection and content management.


## What should be done?

Here are the key tasks planned for the project:

1. **Data Pipeline Focus:** This pipeline will streamline the process of collecting, preprocessing, and preparing data for model training, enhancing efficiency and scalability in Safaa's operations. The project will commence with comprehensive data collection and ingestion from diverse sources. Then there will be robust data cleaning to rectify missing values and outliers, normalising values, and adding supplementary features or external data sources. EDA will be carried out to gain insights into data distribution, guiding further preprocessing strategies for optimal model training. Subsequently. The model training, validating and testing will be carried out.

2. **NER-POS Tagging Library:** I propose the development of a dedicated library for Named Entity Recognition (NER) and Part-of-Speech (POS) tagging, which will serve as a crucial component in Safaa's data pipeline. This library will leverage the capabilities of LLMs for accurately identifying and categorising entities within text data. By integrating this library into Safaa's data pipeline, I aim to automate and optimise the NER and POS tagging process, thereby enhancing the efficiency and effectiveness of copyright notice analysis.
   
3. **Fine-tune the Model:** Post-deployment, I plan to fine-tune the model to further improve its performance. Rigorous model validation and testing techniques are pivotal. I plan on using hyperparameter tuning to fine-tune the model. Leveraging LLMs, I intend to conduct extensive research to enhance Safaa's capabilities and refine its false positive detection mechanisms. Once optimised, the models will be packaged and deployed into production environments. Furthermore, the ongoing model performance will be monitored and maintained including regular performance assessments. Periodically, the model will be retrained with new data.
