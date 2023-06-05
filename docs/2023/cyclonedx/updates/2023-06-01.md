---
title: Week 1
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(June,01,2023)*

### Updates:

- I was primarily exploring the
  [SPDX2](https://github.com/fossology/fossology/tree/master/src/spdx2) agent
  codebase while setting up FOSSology and configuring the PHP debugger for
  development.
- During this process, [Gaurav Mishra](https://github.com/GMishx) helped me in
  handling the errors that I encountered and running agents from the command
  line.
- To run an agent from the terminal, we can use the following command:
    - `echo <args> | sudo
      /usr/local/etc/fossology/mods-enabled/<agent>/agent/<agent>
      --jobId=<job_id> --config=/usr/local/etc/fossology --userID=3 --groupID=3
      --scheduler_start`
    - Please replace `<args>`, `<agent>` and `<job_id>` with the appropriate
      values when executing the command.

### Conclusion and further plans:

- I will start working on the CycloneDx agent in the upcoming week.
- For now, my plan is to create a demo agent for CycloneDx and test if it's
  running correctly from the command line.
- Once I have successfully created the agent, I will utilize the [CycloneDx PHP
  library](https://github.com/CycloneDX/cyclonedx-php-library) to generate
  reports for FOSSology.
- After generating the report, I will work on creating a custom implementation
  of CycloneDx to generate our own reports in FOSSology.