---
sidebar_position: 1
title: Introduction
slug: /2024/ci-scanner/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2024 Rajul Jha <rajuljha49@gmail.com>
-->

## Author

[Rajul Jha](https://github.com/rajuljha)

## Contact info

- [Email](mailto:rajuljha49@gmail.com)
- [LinkedIn](https://linkedin.com/in/rajuljha)

## Project title

CI Scanner Improvements

## What's the project about?

To be able to easily and continuously scan packages with 
fossology checks in CI pipelines, a docker image [fossology/fossology:scanner](https://hub.docker.com/layers/fossology/fossology/scanner/images/sha256-a625b1b10832b98d47429387c18b4fb042f7b09f912b50da14da61fddb11a2ff?context=explore) capable of running license checks (using nomos or ojo) and keyword and copyright scans is available. 

The main aims of this projects is to improve the CI pipeline with various quality of life improvements like:
- Highlight the exact location of violations in the results.
- Enable customization of keywords used by the scanner.
- Allow whitelisting from a custom location.
- Provide the ability to download and scan dependencies.


## What should be done?

### Reporting line numbers for violations
- For calculating the previous and new line number from the diff scan output, an algorithm has to be made. 
- The line number start byte and end byte information is spit out by all scanners except nomos in json output. That has to be fixed.
- Add the line number calculated to the finding log information as well as write it in results file.

### Keyword scanning using custom keyword.conf
- Currently, the keyword scanner uses a predefined set of keywords stored at `/usr/local/share/fossology/keyword/agent/keyword.conf.`
- To support this, we also need to document the regex-like format used for specifying these keywords.
- Decision to be made : Should custom `keyword.conf` overwrite the previous one? 

### Providing allowlist.json from a different path
- Currently, the `allowlist.json` is located at the root of the project.
- We want to allow users to optionally specify a different path, using a CLI argument, like --allowlist

### Allow users to download and scan dependencies
- Currently, the project only scans the source code of the project either in repo/diff manner.
- We additionally want to allow the functionality to scan and dependencies of the project.

#### Steps to achieve this:
    - With the [CycloneDX](https://cyclonedx.org/tool-center/) tool center, we can generate SBOM which contains the dependency download url.
    - The SBOM format specifies the package URL (purl) for each dependency. 
    - Using the [python-packageurl](https://github.com/package-url/packageurl-python#purl-to-url) tool, we can extract the download url from the purl for this purpose.