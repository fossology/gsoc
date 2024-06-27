---
sidebar_position: 1
title: Introduction
slug: /2024/text-phrases/
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2024 Valens Niyonsenga <valensniyonsenga2003@gmail.com>
-->

## Author

[Valens NIYONSENGA](https://github.com/valens200)

## Contact info

- [Email](mailto:valensniyonsenga2003@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/valens-niyonsenga-947440228/)

## Project title

Text Phrases Scanning

## What's the project about?

The Monk license scanner within FOSSology is a license scanner designed to detect and differentiate license texts within files. It operates in two modes: Scheduler Mode, which integrates with the FOSSology repository to log results into the database accessible via the web interface, and CLI Mode, which directly matches files against the license database from the command line. Despite its robust functionality, there is a need to enhance its capabilities, particularly in handling text phrases and bulk phrases, to improve user experience and efficiency.

This project aims to enhance the Monk agent capabilities by adding support for text phrases and bulk phrases scanning. This includes the development of a user interface to facilitate the addition and management of text phrases, as well as enabling the Monk agent to scan these phrases effectively.

## What should be done?

This project involves the following tasks:

1. **Creating a User Interface for Text and Bulk Phrases Management:**

   - Develop a UI that allows users to add multiple text phrases associated with licenses to the database..
   - Implement options for users to choose between scanning with bulk license texts or selected phrases.

2. **Supporting Text Phrases Scanning:**

   - Enable the Monk agent to scan files using the text phrases stored in the database.
   - Ensure that users can add comments for license texts through the UI.

3. **Implementing Bulk Phrases Scanning:**
   - Provide a UI tab where users can select bulk phrases for scanning.
   - Implement options to scan using phrases from the whole user base or selected user.
4. **Enhancing Monk Agent Functionality:**
   - Update the Monk agent or create a new similar agent to scan from the phrases tables.
   - Ensure clear integration with the existing FOSSology database and web interface.
5. **Documentation:**
   - Update the documentation to reflect the new functionalities and usage guidelines.
