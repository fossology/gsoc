---
sidebar_position: 2
title: Introduction
slug: /2025/data-pipeline/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2025 Abdulsobur Oyewale <oyewaleabdulsobur@gmail.com>
-->

## Author

[Abdulsobur Oyewale](https://github.com/smilingprogrammer)

## Contact info

- [Email](mailto:oyewaleabdulsobur@gmail.com)

## Project title

Data Pipelining For Safaa

## What's the project about?

Currently, Safaa provides a strong framework designed to deal with copyright notices particularly focusing on the identification and reduction of false positives, as well as streamlining the decluttering procedure to remove unnecessary content. Key features of Safaa include:
1. Model Flexibility
2. Integration with scikit-learn
3. spaCy Integration
4. Preprocessing Tools

However, Currently in the Safaa Project, data is manually curated And we see that most of the things are manual here. 
This project will concentrate on creating a pipeline, Utilizing LLMs if required to increase the accuracy, or use deep learning techniques to improve. 

Writing scripts to copy copyright data automatically(group's data or some users data) from fossology instance to train the model.


## What should be done?

Here are the key tasks planned for the project:

1. Create Scripts to fetch the copyright data from FOSSology Server copyright table (localhost)
2. Clean and preprocess fetched copyright data (utilize prewritten processing functions)
   - Preprocess data should have label and clean text.
3. Split data for training/validation/test.
4. Train false/positive model as well as declutter model (utilize prewritten train functions)
5. Model evaluation (check for precision, recall etc..)
6. Model versioning and release.
7. Should work for both Gitlab and Github.
   - Manual trigger.
   - Should also have a functionality to work as cron job.