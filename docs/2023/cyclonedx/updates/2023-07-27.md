---
title: Week 9
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(July,27,2023)*

### Updates:

- During this week, my focus was on leveraging the [ScanCode
  API](https://github.com/nexB/scancode-toolkit/blob/develop/src/scancode/api.py)
  within the ScanCode agent to efficiently retrieve licenses and copyrights
  information from files. The API has demonstrated faster results compared to
  the command line interface (CLI).
- I've also made improvements in how the output from Python scripts, invoked by
  the ScanCode agent, is processed and utilized.
- Notably, the current process lacks the inclusion of emails and URLs identified
  in a file when invoking ScanCode via CLI. To address this, I have made changes
  to add the missing information to the database for each file.
- A compilation of all the changes made this week and in preceding weeks
  regarding scancode agent can be reviewed
  [here](https://github.com/its-sushant/fossology/commit/649807f54f02453850c7043f53af7cea4c0fb250).


### Conclusion and further plans:

- In the coming weeks, I will continue to try different approaches to improve
  the ScanCode agent in FOSSology.