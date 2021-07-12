---
sidebar_position: 1
title: Introduction
slug: /2021/scancode/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Sarita Singh <saritasingh.0425@gmail.com>
-->

<p>
<strong>Nomos</strong> and <strong>Monk</strong> are the two leading scanners FOSSology uses for license detection and Copyright for scanning <code><em>copyright</em>, <em>URL</em>, <em>emails,</em></code> and <code><em>holders</em></code> name. FOSSology approach is to detect licenses with either a large (large: 2500 regexes) dataset of regex patterns (nomos) or a full string comparison against license full texts (large: ~400 texts) (monk). <strong>Atarashi</strong> license scanner implements multiple text statistics and information retrieval algorithms. 
</p>
<p>
<strong>ScanCode Toolkit</strong> is a very established license scanner similar to Nomos or Monk. It is a simple python based command line scanner that runs on Windows, Linux, and Mac. It implements a number of different approaches and integrates these into one application for identifying and classifying license-relevant content in packages.
</p>
<p>
The <strong> basic idea </strong> is to use the command line interface from the ScanCode package in order to be called right from the FOSSology application. FOSSology will pass a single file and take the result from the ScanCode command line call. Scan result will include license name, the SPDX key, Score, Copyright and Holder name, Emails, and URLs present in the given code and as requested by the user.
</p>

Check out
- [Proposed Timeline](https://itssingh.github.io/gsoc-blog/timeline.html)
- [installation steps](installation)
