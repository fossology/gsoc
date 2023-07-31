---
title: Week 5
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(June,29,2023)*

### Updates:

- License Info Retrieval:
  - This week, I successfully retrieved license information for each file from
    the FOSSology database.
  - Noteworthy, if a user designates a license as the main license for an
    upload, it will be added to the main component license in the report.
  - However, if no main license is designated for an upload, the license
    information for the main component will not be added to the report.
  - Additionally, if a user concludes a specific license for a component, only
    the concluded license will be added to the report. Otherwise, all license
    findings for that component will be included.

- CycloneDX Agent UI:
  - I've been working on the UI part for the CycloneDX agent.
  - As of now, the agent is running successfully from the FOSSology UI.

### Conclusion and further plans:

- In the coming weeks, my focus will be on improving the clarity and
  comprehensibility of the code. Once these enhancements are made, I plan to
  submit a PR for adding CycloneDX agent.