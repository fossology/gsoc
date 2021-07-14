---
title: First Evaluation
author: Sarita
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Sarita Singh <saritasingh.0425@gmail.com>
-->

## First Evaluation Report

`Date:2021-07-14`

### Updates
**List of task completed**
- Created a jinja template for ScanCode required output
- Integrated ScanCode for license scanning
    - Display name of license with percentage matched
    - Insert new license to `license_ref` table
    - Highlight matched text for license scanned

    ![image](/img/scancode/license_scanning.png)

- Integrated ScanCode for Copyright and Author 
    - Created following tables in the database
        - scancode_copyright
        - scancode_author
        - scancode_copyright_event
        - scancode_author_event
    - Able to insert scancode scanned output in these tables.
    - Added a tab named ScanCode Findings in copyright browser and modified Copyright findings by Fossology to FOSSology Findings.

    ![image](/img/scancode/scan_copy_browser.png)

**List of commits**
- [feat(scancode): Initial commit ](https://github.com/itssingh/fossology/commit/e450950e6e39b1b3647c79c07737d3877e419cc6)
    - This commit will add makefile, configure, and dependencies to run scancode toolkit.
- [feat(scancode/agent): Add scancode agent](https://github.com/itssingh/fossology/commit/bd38dd70e092a8700547883e497f7861e3cc48b8)
    - Add scancode agent to scan a file
    - Add name and percentage of licenses to fossology database.
- [feat(scancode/ui): Add scancode agent UI](https://github.com/itssingh/fossology/commit/af0dce1adb49db0497a951c9616ae7cace9efca4) 
    - Add UI for license scanning by scancode-toolkit.
- [style(scancode): Update scancode agent](https://github.com/itssingh/fossology/commit/0e461522b0d2d795d263cb7455c1d4b95c58ed8a)
    - Update scancode key with spdx-key, datatype of percentage license match from float(returned by scancode) to int(fossology need).
- [feat(scancode/highlight): Add license highlight](https://github.com/itssingh/fossology/commit/b9ad6d8ed488bf0a932734e7d331247b8e7b4ab1)
    - Highlight license relevant text for licenses scanned by scancode-toolkit
- [feat(scancode): Add text_url and license full name ](https://github.com/itssingh/fossology/commit/3a16fd2638967a7dc2d39e320cca2830268db9a7)
    - This commit will add text_url and license full name for new licenses inserted into FOSSology database.
- [feat(scancode): Add copyright & author info in DB](https://github.com/itssingh/fossology/commit/ed83a98db32d2abcd0508af9e2650771a27ed615)
    - Removed UI glitch from license highlighting.
    - This glitch was due to not inserting only unique entries in the license_file and hightlight tables.
- [feat(scancode):Create copyright and author table](https://github.com/itssingh/fossology/commit/c823ecf7a5d59fbfe243281c41598ea161e04435) 
- [feat(scancode/copyrightUI):Add scancode tab](https://github.com/itssingh/fossology/commit/f7d0053fb78539875aac04b62345f9fd9863e9da)
    - Added a tab named ScanCode Findings in copyright browser and modified Copyright findings by Fossology to FOSSology Findings.
- [feat(scancode):Add event table, comments, license](https://github.com/itssingh/fossology/commit/a88cca652b25aa0705c58de2d451078ef14ce08a)
    - Create tables for scancode_copyright_event and scancode_author_event
    - Add copyright and license text in source code
    - Add comments for source code
    - Merge LicenseMatch and Match class

### How to test
- Fetch [feat/newagent/scancode-toolkit](https://github.com/itssingh/fossology/tree/feat/newagent%2Fscancode-toolkit) branch to your local.
- [Install Fossology from source](https://github.com/fossology/fossology/wiki/Install-from-Source) 

**Note** Incase facing problem in scancode installation, Install scancode manually with pip(checkout [installation page](installation) for scancode).

### Work in progress
- Adding scancode copyright to UI
- [Add emails and urls to HTML output](https://github.com/nexB/scancode-toolkit/pull/2539)

### Postponed tasks
- Writing Tests for license integration.
- Create a ScanCode plugin to extract license-text.
    - Will do after integrating scancode copyright/author.

