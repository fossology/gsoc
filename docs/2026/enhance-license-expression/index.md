---
sidebar_position: 8
title: Introduction
slug: /2026/enhance-license-expression/
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2026 Ayushmaan Sharma <ayushmaan.sharma911@gmail.com>
-->

## Author

[Ayushmaan Sharma](https://github.com/ayushmaan-16)

## Contact Info

* [Email](mailto:ayushmaan.sharma911@gmail.com)
* [GitHub](https://github.com/ayushmaan-16)

## Project Title

Enhance License Expression Support in FOSSology

## What's the Project About?

This project focuses on improving how FOSSology detects, stores, displays, concludes, and reports complex SPDX license expressions.

Currently, license scanners can identify simple license findings such as `MIT`, `Apache-2.0`, or `GPL-2.0-only`. However, real-world files often contain SPDX license expressions such as:

* `MIT OR Apache-2.0`
* `MIT AND BSD-2-Clause`
* `GPL-2.0-only WITH Classpath-exception-2.0`
* `(MIT OR Apache-2.0) AND BSD-2-Clause`

These expressions carry legal meaning that is different from simply detecting each license separately. For example, `MIT OR Apache-2.0` means the user may choose either license, while `MIT AND Apache-2.0` means both licenses apply.

The goal of this project is to make license expressions first-class findings inside FOSSology, so that scanner results, clearing decisions, UI views, REST APIs, and generated reports preserve the complete SPDX expression instead of breaking it into unrelated individual licenses.

## What Should Be Done?

### 1. Shared SPDX License Expression Parser

* Define a shared parser contract for SPDX license expressions.
* Maintain a common grammar, AST structure, canonical output format, and test corpus.
* Implement a native C parser for scanner-side usage.
* Keep the design compatible with a future PHP parser implementation for the web/UI layer.
* Ensure expressions using `AND`, `OR`, `WITH`, and parentheses are parsed consistently.

### 2. OJO License Expression Support

* Extend OJO to detect SPDX license identifiers containing complex license expressions.
* Pass detected expressions to the shared C parser for validation and canonicalization.
* Store valid complex expressions as expression findings instead of splitting them into separate license findings.
* Ensure expressions such as `MIT OR Apache-2.0` are shown as one scanner result.

### 3. Nomos License Expression Support

* Extend Nomos to recognize structured SPDX license expressions before its existing license-detection flow.
* Use the same shared C parser used by OJO.
* Avoid conflicts where OJO reports a complete expression but Nomos reports only the member licenses.
* Mask already-handled SPDX expression ranges before running existing Nomos checks, so member licenses from the same expression are not duplicated.
* Preserve normal Nomos behavior for licenses detected elsewhere in the file.

### 4. License Expression Storage and Clearing Support

* Improve how license expressions are stored and retrieved from the database.
* Keep expressions distinct from ordinary license references.
* Support expression findings in file-level clearing views.
* Allow users to conclude license expressions and manage related clearing metadata such as comments, acknowledgements, and license text.
* Ensure expression conclusions are visible consistently across relevant UI views.

### 5. UI, REST API, and Report Support

* Display license expressions clearly in the license browser, file browser, and clearing views.
* Ensure scanner findings and concluded findings correctly represent expressions.
* Extend REST API behavior so expression findings and conclusions can be accessed programmatically.
* Ensure generated reports preserve SPDX expressions instead of exporting only individual member licenses.

### 6. Related Exploration Work

The broader project also includes investigation around related FOSSology capabilities:

* Explore bucket agent behavior for managing files by license type.
* Explore LicenseLynx and LicenseDB integration possibilities.
* Review how license expression support can align with external license metadata sources.
* Explore decoupling copyright, email, and URL agents so copyright can run independently while the remaining agents stay grouped.

## Expected Outcomes

* FOSSology can detect complex SPDX license expressions from scanner results.
* OJO and Nomos produce consistent expression findings for structured SPDX identifiers.
* Expressions are preserved as complete findings instead of being reduced to separate licenses.
* The parser behavior is validated through a shared contract and common test cases.
* License expression findings can be stored, displayed, concluded, and retrieved reliably.
* UI views show license expressions in a way that is understandable for clearing users.
* REST APIs and generated reports include expression information correctly.
* The implementation provides a stable foundation for future PHP parser integration and broader expression handling in FOSSology.
