---
sidebar_position: 1
title: Introduction
slug: /2024/spdx-expression/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2024 Akash Sah <akashsah2003@gmail.com>
-->

## Author

[Akash Sah](https://github.com/AkashSah2003)

## Contact info

- [Email](mailto:akashsah2003@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/akashsah2003/)

## Project title

SPDX License Expression Support

## What's the project about?

This project aims to support the detection and reporting of SPDX License Expressions. Currently, FOSSology uses regular expressions, full-text match, and fuzzy match to scan licenses, stores all types of license expressions as a list of licenses, and wrongly classifies them as conjunctive licenses or disjunctive licenses. It also stores license exceptions as licenses and does not differentiate exceptions from licenses.

In the project, I will be working on scanning license expressions using regular expressions with Ojo, storing them in the database, creating UI components to see license expressions in the file clearing page, and finally updating reports to export the expressions in the correct format.

## What should be done?

1. Detect and validate license expressions
    - Develop algorithms for accurately detecting SPDX license expressions and validating them.

2. Store license expressions and metadata in database
    - Design and implement a database schema to store complete license expressions and associated metadata.
    - Develop mechanisms for efficient retrieval and manipulation of license expression data.

3. Improve User Interface
    - Create intuitive UI components to visualize and manage license expressions.
    - Allow users to interactively create and edit license expressions.

4. Update Report Generation:
    - Enhance and correct SPDX report generation functionality to accurately represent license expressions.