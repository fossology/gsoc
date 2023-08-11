---
title: Week 10
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(August,03,2023)*

### Updates:

- Throughout this week, my primary focus remained on enhancing the ScanCode agent.
- A significant concern with the agent is its current practice of invoking
  ScanCode through the command line interface (CLI) for each individual file,
  leading to a file-by-file scanning process. Unfortunately, this resulted in a
  considerable amount of time being spent on bootstrapping ScanCode for each
  file.
- As a solution to this inefficiency, I explored a different approach. I
  attempted to leverage the [ScanCode
  API](https://github.com/nexB/scancode-toolkit/blob/develop/src/scancode/api.py)
  to scan all files in a single call, consolidating the results into a unified
  location, potentially a JSON file.
- The intended workflow involves storing the outcomes from the API call in a
centralized JSON file. Subsequently, the data extracted from the JSON results
will be efficiently populated into the database for each file during the upload
process.


### Conclusion and further plans:

- In the coming weeks, I will try to implement the aforementioned workflow in
  FOSSology.