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
fossology checks in CI pipelines, a docker image
(fossology/fossology:scanner) capable of running license checks (using
nomos or ojo) and keyword and copyright scans is available.
This project aims to improve the CI Scanner Image in
various aspects and numerous quality of life improvements, like
highlighting the exact location of violation, ability to customize the
keywords used by the scanner, and improving user experience – allow
whitelisting from a custom location and ability to download and scan
dependencies

## What should be done?

1. Highlight the exact location (line number) of a violation during
reporting
2. Allow users to customize keyword scanning using their own
keyword.conf
3. Allow users to store allowlist.json file elsewhere (currently, it is
required to be present at the root of the project)
4. Allow users to download and scan dependencies by providing a path
at CI/CD pipeline trigger.