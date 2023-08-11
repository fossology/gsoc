---
title: Week 7
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(July,13,2023)*

### Updates:

- This week I have started working on the scanning speed improvement of
  [scancode
  agent](https://github.com/fossology/fossology/tree/master/src/scancode).
- Explored different approaches for running ScanCode with varied parameters.
- Successfully integrated changes to execute ScanCode through its API.
- Discovered that the API execution is notably faster (13 seconds) compared to
  the CLI (23 seconds).

### Conclusion and further plans:

- Refine the process of reading output from the Python script.
- Work on enhancing the integration with the database to ensure accurate updates.
- Also, to work on changes requested on CDX PR
  [#2507](https://github.com/fossology/fossology/pull/2507)