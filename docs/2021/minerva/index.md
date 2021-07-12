---
sidebar_position: 1
title: Introduction
slug: /2021/minerva/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Shreya Singh <shreyaregg@gmail.com>
-->

## A brief introduction about the project, what is the aim and what is the proposed plan.
To implement any Machine learning/Deep learning algorithm we need a better and bigger dataset of SPDX Licences. Due to the lack of dataset currently, all the 10 algorithms which have been tested on Atarashi are restricted to 59% accuracy. There exists no such dataset for open source licenses that could be added to the existing dataset. 

Why do we need to create OSS Dataset - 

1. IRREGULARITY IN THE SIZE OF LICENSE TEXTS - The license texts are of different sizes with huge differences in terms of keywords count. Longer license texts contain most of the unique keywords when compared against the uniqueness of keywords in the smaller license texts. Dynamic Time Warping has the capability to tackle a varying length of array of word-embeddings of different license files.

2. LICENSE TEXTS ARE DIFFERENT THAN TRADITIONAL TEXT CORPORA - Usually, in the traditional corpus, the documents are different to some extent that differentiate them with each other whereas, in license texts, most of the tokens are similar in the majority of the texts. There is a very slight difference in the use of these tokens to create a license statement. The keywords used in these license texts can be found in almost all of them with a slight variation since they all are open-source licenses stating open source softwares and underlying permissions. These similarities in licenses make them tough to be differentiated by any traditional information retrieval algorithm.

So, the idea is to generate SPDX OSS license dataset using FOSSOLOGY NOMOS AGENT STRINGS.in REGEX and other SPDX released Licenses regex using python libraries and NLP algorithms. Now, to proceed with text generation using regex - we don’t need to generate texts from scratch, instead, we can use an existing file as a baseline model for further manipulating and generating texts from those files. Also, we have to specify the length for text generated, because we don't want it to run till infinity. So a seed length will be taken depending on the length of each dataset available in the dataset. Further the idea extends to validation of the generated license files. 

## What is that I am doing right now?
![project-overview](https://user-images.githubusercontent.com/50830709/125211400-b2ba8380-e2c3-11eb-9d44-1bab34547f04.JPG)

Till now, I have been able to fully automate the scripts to generate licenses using NLP algorithms and got them validated using Nomos. I have used "intxeger" for regex to text conversion and markov and n-gram algorithms for regex expansion. Used Nomos as a baseline to validate the generated texts. The script to generate the licenses using multiprocessing is ready and updated and I was able to generate 400000 files. I will be including text-data-augmentation using Augly on the validated files.
I am currently working on improving the existing algorithms that I had implemented to figure out as to why a certain percentage of generated license files have been labeled as "unclassified_licenses" instead of "no_license_found" or "license_headers".
