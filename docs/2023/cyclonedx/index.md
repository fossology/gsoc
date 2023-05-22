---
sidebar_position: 1
title: Introduction
slug: /2023/cyclonedx/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

## Author

[Sushant Kumar](https://github.com/its-sushant)

## Contact info

- [Email](mailto:sushantmishra02102002@gmail.com)
- [LinkedIn](https://linkedin.com/in/its-sushant)

## Project title

Support CycloneDX report

## What's the project about?

Currently, [FOSSology](https://www.fossology.org/) generates
[SBOM](https://www.synopsys.com/blogs/software-security/software-bill-of-materials-bom/)
in [SPDX](https://spdx.dev/) format, which allows for integration with various
tools. However, [CycloneDX](https://cyclonedx.org/) is another popular format
for generating SBOMs. By integrating CycloneDX report generation in FOSSology,
it will be possible to work with other tools that use CycloneDX. Although a [PHP
library](https://github.com/CycloneDX/cyclonedx-php-library) exists for
generating CycloneDX reports, it cannot be used because it is licensed under
Apache-2.0, while FOSSology is under GPL-2.0. Therefore, a custom implementation
of CycloneDX report generation in FOSSology is necessary. So the main goal of
this project focuses on the implementation of CycloneDX report generation in
FOSSology.

## What should be done?

There are two main components of this project:

- First part is all about generating CycloneDx report in FOSSology. Now for
  report generation we need to follow these steps:

  - **Retrieve the data from the FOSSology DAO layer:** FOSSology has a database
    layer called the
    [DAO](https://github.com/fossology/fossology/tree/master/src/lib/php/Dao)
    (Data Access Object) layer that is used for accessing data from FOSSology's
    database. We can use the FOSSology DAO layer to fetch the required data from
    the database.
  - **Create a CycloneDX agent:** Develop a custom agent that interacts with the
    FOSSology DAO layer and retrieves the necessary data for generating the
    CycloneDX report. This agent will act as a bridge between FOSSology and the
    CycloneDX report generation process.
  - **Extract the required information:** Using the CycloneDX agent, retrieve
    the license and copyright information for each file from the FOSSology scan
    data. The specific information needed will depend on the requirements and
    the level of detail that needed to be include in the report.
  - **Implement a CycloneDX validator:** Develop a validator that can verify if
    a CycloneDX report adheres to the schema. 
  - **Generate the CycloneDX report:** Once collected the relevant data from
    database with validated CycloneDX schema, we can generate the CycloneDX
    report.

- Second is support import of CycloneDx reports in FOSSology:
  - **Extend the FOSSology reportimport agent:** The FOSSology
    [reportimport](https://github.com/fossology/fossology/tree/master/src/reportImport)
    agent allows importing reports from various formats. To add support for
    importing CycloneDX reports, we need to extend the agent's capabilities.
    This involves modifying the reportimport agent's codebase to include
    CycloneDX as an accepted format and validate report using custom validator.
  - **Validate the CycloneDX report:** When importing a CycloneDX report, invoke
    the CycloneDX validator to check if the report conforms to the schema. The
    validator will analyze the report's structure, fields, and content to ensure
    compliance with the CycloneDX standard. 
  - **Import the validated CycloneDX report:** After successfully validating the
    CycloneDX report, import it into the FOSSology database using the
    reportimport agent. The agent will parse the report's data and store it in
    database.

The main functionality that needs to be implemented is to successfully generate
and import a CycloneDx report in FOSSology. In addition, the UI code of
FOSSology also needs to be modified to display options for generating and
importing CycloneDx reports.
