---
sidebar_position: 6
title: Introduction
slug: /2025/oss-review-toolkit/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Prakash Mishra <prakashmishra9921@gmail.com>
-->

## Author:

[Prakash Mishra](https://github.com/Prakash-Mishra-9ghz)

## Contact Info:

- [Email](mailto:prakashmishra9921@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/prakash-mishra-0a56472b9/)

## Project Title:

Integrating OSS Review Toolkit with FOSSology

## What's the project about?

This project aims to integrate FOSSology — a powerful license scanning tool — into the OSS Review Toolkit (ORT), a platform widely used for analyzing software dependencies.
By developing a dedicated scanner plugin within ORT, the integration will enable users to seamlessly leverage FOSSology’s license detection capabilities as part of ORT’s automated workflows.


## Key Deliverables

The project scope includes the following key tasks:

### Introduce NOMOS as an ORT Scanner Plugin ###
Implement a new scanner plugin in ORT that integrates NOMOS, FOSSology’s primary license analysis agent.
Ensure the plugin adheres to ORT's existing scanner interface and lifecycle.

### Configure Scanning Parameters ###
Define and expose configuration options in ORT to support custom NOMOS parameters (e.g., scanning modes, agent-specific options).
Ensure the scanning behavior is easily customizable by end users via configuration files.

###  Integration with FOSSology Server ###
Implement communication with a standalone FOSSology server using its REST API in ORT.
Handle job creation, status polling, and result retrieval through HTTP endpoints.
Ensure reliable handling of asynchronous scan jobs and large file uploads.

### Enable Customizable FOSSology Integration ###
Allow users to configure: Server URL and credentials


### Add Unit Tests ###
Write comprehensive unit test cases to validate plugin functionality.
Conform to ORT's test architecture and quality standards.


## Related Issues

- [FOSSology Tracking Issue](https://github.com/fossology/fossology/issues/3064) – Maintained by the FOSSology organization to oversee project progress during GSoC.

- [ORT Integration Issue](https://github.com/oss-review-toolkit/ort/issues/10488) – Opened to coordinate and discuss the integration work within the OSS Review Toolkit repository.
