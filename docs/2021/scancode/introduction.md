---
sidebar_position: 1
title: Introduction
slug: /2021/scancode/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Sarita Singh <saritasingh.0425@gmail.com>
-->

### Author

- [Sarita Singh](https://github.com/itssingh)

### Contact info

- [Email](mailto:saritasingh.0425@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/s-sarita/)

### Integrating ScanCode to FOSSology

**Nomos** and **Monk** are the two leading scanners FOSSology uses for license detection and Copyright for scanning *`copyright, URL, emails`*, and *`holders`* name. FOSSology approach is to detect licenses with either a large (large: 2500 regexes) dataset of regex patterns (nomos) or a full string comparison against license full texts (large: ~400 texts) (monk). **Atarashi** license scanner implements multiple text statistics and information retrieval algorithms.

**ScanCode Toolkit** is a very established license scanner similar to Nomos or Monk. It is a simple python based command line scanner that runs on Windows, Linux, and Mac. It implements a number of different approaches and integrates these into one application for identifying and classifying license-relevant content in packages.

The **basic idea** is to use the command line interface from the ScanCode package in order to be called right from the FOSSology application. FOSSology will pass a single file and take the result from the ScanCode command line call. Scan result will include license name, the SPDX key, Score, Copyright and Holder name, Emails, and URLs present in the given code and as requested by the user.

### Check out

- [Proposed Timeline](https://itssingh.github.io/gsoc-blog/timeline.html)
- [Installation steps](installation)
