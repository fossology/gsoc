---
sidebar_position: 1
title: Introduction
slug: /2022/spasht/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2022 Gaurav Mishra <mishra.gaurav@siemens.com>
SPDX-FileCopyrightTest: 2022 Siemens AG
-->

### Author

- [Thanvi Lahari Pendyala](https://github.com/Pendyala-thanvi)

### Contact info

- [Email](mailto:)
- [LinkedIn](https://linkedin.com/)

## Enhancement with ClearlyDefined.io (spasht)
The Spasht agent is used to fetch the metadata of licenses and copyrights of
any uploaded package or project. The fetched data from the ClearlyDefined.io is
stored in the spasht database and displayed using license and copyright tables.

To send or push the curated data back to ClearlyDefined.io, According to
ClearlyDefined, we have to send an HTTP request with or without the PR segment.
If any PR number is mentioned in the HTTP request, the information regarding
that PR is fetched. Otherwise, the data is fetched for the default branch
"master". The curated data is updated as ClearlyDescribed and ClearlyLicensed.
The ClearlyDescribed contains the data of properties like source location,
issues, Project website, and release dates, whereas the ClearlyLicensed
includes the data of properties like license, attribution, and number of files.

The full curation of a project is returned to Spasht, and the curated data of
the selected project revision is pushed back to ClearlyDefined.io via patches.
Patches contain the licensed and described data of the project. The figure
below shows us a set of curations that contains the patches.
