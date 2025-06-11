---
sidebar_position: 7
title: Introduction
slug: /2025/osselot/
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0
SPDX-FileCopyright Text: 2025 Vaibhav Sahu <sahusv4527@gmail.com>
-->

## Author:

[Vaibhav Sahu](https://github.com/Vaibhavsahu2810)

## Contact Info:

- [Email](mailto:sahusv4527@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/vaibhav-sahu-93664a28a/)

## Project Title:

Reuse of clearing decisions using reports from OSSelot project and improve stability and performance of scancode integration using multi threads.

## What's the project about?

This project aims to enhance FOSSology by making the ScanCode integration faster and more stable through multithreading. Here we are going to add a feature on the upload page that allows users to select OSSelot reports for reuse during analysis, using the existing Spasht implementation to fetch folder details from OSSelot. The Import Dump and Export Dump workflows are extended to support reuse based on those reports. A new interface will be created which enables contribution of FOSSology-generated reports back to the OSSelot project via GitHub pull requests.Comprehensive test cases will validate the reliability of both import and export functionality.

## Key Deliverables

The project scope includes the following key tasks:

### Refactor the ScanCode Agent for Multithreading

- I will explore approaches to enable parallel scanning of multiple files (using ScanCode’s Python API) to improve performance.

### Extend Upload-Page to reuse OSSelot Reports

- On the upload page, include a “Reuse from OSSelot” choice that shows fields for package name and version so users can pick which report to use.

- Once chosen, the system fetches that OSSelot report behind the scenes and merges its license decisions into the new upload.

### Enhance existing Import Dump & Export Dump for OSSelot‐Based Reuse

- The end goal is to make the import and export dumps work with OSSelot reports so we can reuse it.

### New View/page to contribute from FOSSology(reports) to OSSelot Project(Created as Pull Request).

- I will create a “Contribute to OSSelot” page that guides users through preparing their report and raising a pull request.

### Test cases for fossology dump export and fossology dump import.

- To ensure the reliability and correctness of the enhanced dump functionality, I will write test cases for both FOSSology dump export and import.

### Using current spasht implementation to fetch the details of the folder from OSSelot.(extended)

-  I will explore the current Spasht implementation to understand how it fetches folder details to reuse it for fetching the details of the folder from OSSelot.








