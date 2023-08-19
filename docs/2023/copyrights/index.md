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

## Github Repository
- [Link](https://github.com/Hero2323/Fossology-Reducing-Copyrights)


## What's the project about?
This project’s goal is to improve the accuracy of Fossology’s copyright detection system using machine learning. This functionality was originally implemented in 2021 to improve the two-step process of copyright detection used by most copyright detection software; using Regex and then human intervention. The machine learning approach uses Named Entity Recognition (NER) and Part of Speech (POS) tagging to figure out which statements contain copyright and which do not. I’ll be working on improving all parts of the project; starting from the dataset & preprocessing, then working my way to the NER hypothesis until the machine learning model used and the final integration.

## What should be done?

1. Dataset creation which involves:

   * Choosing the open-source repositories to include (and other
   sources as needed)
   * Labeling the initial dataset is the hardest part as it involves using the Fossology API to extract Fossology's output and checking for the false positives and labeling them as such.
   * Following that, I can use the model that is trained on the initial dataset to help me label further datasets.

2. Choosing machine Learning approach to follow
   * Testing out the different approaches
     * Embedding or vectorizing words and sentences
       * Test out the different vectorization and embedding methods
     * Extracting features from each sentence

3. Choosing the best machine learning models to implement
   * Testing out the various machine and deep learning models and choosing the best performing one.
     * Support Vector Machines (SVM)
     * Random Forest (RF)
     * Naive Bayes (NB)
     * Recurrent Neural Networks (RNN)
       * Long Short Term Memory (LSTM)
       * Bidirectional Long Short Term Memory (Bi-LSTM)
     * BERT (and it's variants)
   
4. Research into clutter removal and the best ways to implement it.
