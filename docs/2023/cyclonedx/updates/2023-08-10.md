---
title: Week 11
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(August,10,2023)*

### Updates:

- This past week, my focus was on implementing a method to simultaneously scan
  all files, streamlining the scanning process.
- The following procedure was followed to achieve this objective:
  - **File Location Retrieval:**
    - Utilized the Fossology ScanCode agent to gather the file locations for
      each individual file.
    - Stored these file locations in a temporary text file.
  - **Python Script Integration:** 
    - Passed the path of the temporary text file containing file locations to a
      dedicated Python script which will scan result using scancode api.
  - **Parallel Scanning Script:** 
    - Developed a Python script responsible for the concurrent scanning of
      files.
    - Employed a loop to iterate through each file location stored in the text
      file.
    - For each file location, invoked the ScanCode API to initiate scanning.
    - Captured the resulting output and appended it to a JSON file.
  - **Updating results to database:**
    - Following the script's completion, extracted the data from the generated
      JSON file.
    - Leveraged the ScanCode agent to retrieve the data and subsequently saved
      it to the Fossology database.
  - **Clean-up Process:**
    - Concluded the process by erasing both the temporary text file and the
      generated JSON file.
- This strategic shift offers notable advantages:
  - Drastically reducing the time spent on ScanCode's bootstrapping process. 
  - Optimizing the utilization of the ScanCode toolkit within the Fossology
framework.
- Raised a [pull request](https://github.com/fossology/fossology/pull/2569)
  after making all these changes.

### Conclusion and further plans:

- In the coming weeks, I will start making my final report for final
  evaluation.
- Will also work on this [PR](https://github.com/fossology/fossology/pull/2569),
  if any changes are required.