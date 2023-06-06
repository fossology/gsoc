---
sidebar_position: 1
title: Introduction
slug: /2023/copyrights/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Abdelrahman Jamal <abdelrahmanjamal5565@gmail.com>
-->

## Author

[Abdelrahman Jamal](https://github.com/Hero2323)

## Contact info

- [Email](mailto:abdelrahmanjamal5565@gmail.com)
- [LinkedIn](https://linkedin.com/in/abdelrahmanjamal)

## What's the project about?
This project’s goal is to improve the accuracy of Fossology’s copyright detection system using machine learning. This functionality was originally implemented in 2021 to improve the two-step process of copyright detection used by most copyright detection software; using Regex and then human intervention. The machine learning approach uses Named Entity Recognition (NER) and Part of Speech (POS) tagging to figure out which statements contain copyright and which do not. I’ll be working on improving all parts of the project; starting from the dataset & preprocessing, then working my way to the NER hypothesis until the machine learning model used and the final integration.

## What should be done?

1. Dataset creation which involves:

* Choosing the open-source repositories to include (and other
sources as needed)
* Labeling the dataset with the help of pre-trained NER models
(such as SpaCy) for the labeling of (PERSON, ORG & DATE)
entities as they are all common entities.
* Labeling the COPYRIGHT entity manually with the help of
annotation tools (like Doccano).
* This is an iterative process. More and more data will keep
getting added until the desired accuracy (precision and
recall & F1) is reached.

2. Choosing machine Learning approach to follow

3. Choosing the best machine learning models to implement.
   
4. Research into clutter removal and the best ways to implement it.
