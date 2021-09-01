---
sidebar_position: 1
title: Introduction
slug: /2021/copyrights/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Kaushlendra Pratap <kaushlendrapratap.9837@gmail.com>
-->

## Author

[Kaushlendra Pratap](https://github.com/Kaushl2208)

## Contact info

- [Email](mailto:kaushlendrapratap.9837@gmail.com)
- [LinkedIn](https://linkedin.com/in/kaushl2208)

## What's the project about?

Fossology's copyright detection agent uses a rule-based approach to detect copyright statements but like all the rule based approaches the edge cases in the stock of copyrights statements are increasing day by day thus the agent is showing a lot of False Positives result. 

Eg:
- "copyright (c) 2021, Kaushlendra Pratap < kaushlendrapratap.9837@gmail.com >"   # *Seems like a valid copyright statement.*
But,
- "copyright is something which should be present in the code/software provided by Kaushlendra."    #  *Has been tagged as copyright by current agent but it is a False Positive*

## What should be done?

Just like any other detection technique, we need to build a complete process/pipeline through which the copyright statements will go and the detector will classify it as True Positive or a False Positive.

Interesting? Let's discuss about the ways we can do it:

- **Developing NLP drived rule based multi-layered checks**
- **Introducing a Machine learning based classifier which will train on existing manually classified copyright statements**

## What is that I am doing right now?

Copyrights are more of a specifically structured statements which can be understood by the entities and Positions of each word. I am implementing  **NER Model** and **POS Tagging** and through the results of each of it, I will be postulating a multilayered checking which will give good accuracy over detection.Applying checks on multiple levels and limiting it down to only the part where only the copyright statement is present will definitely help in detection of False Positives.