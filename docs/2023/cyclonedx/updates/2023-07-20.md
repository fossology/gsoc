---
title: Week 8
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(July,20,2023)*

### Updates:

- This week, I was mainly working on the modifications requested by
  mentors regarding Pull Request
  [#2507](https://github.com/fossology/fossology/pull/2507).
- Major changes include:
  - Made licenseRefs as license expressions, as CycloneDX schema does not
    support SPDX LicenseRef as valid license identifier.
  - Refactored the SPDX agent code, effectively eliminating the multiple
implementation of same functions being used in both CycloneDX and SPDX agents.
  - Successfully resolved failing test cases within the SPDX agent for the pull
request. 
  - Added download option to download report from UI.


### Conclusion and further plans:

- In upcoming weeks, I will continue working on scancode agent improvement in
  FOSSology.