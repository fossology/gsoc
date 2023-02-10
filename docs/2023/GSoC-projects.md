---
sidebar_position: 2
title: Google Summer of Code Proposals 2023
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Gaurav Mishra <mishra.gaurav@siemens.com>
SPDX-FileCopyrightText: 2023 Siemens AG
-->

Welcome to the main page for all GSoC 2023 related information.

- Check https://github.com/fossology/fossology/wiki/Google-Summer-of-Code-Proposals-2023

## Intro

We from the fossology project would like to apply for GSOC. Please see two main
resources for finding out more FOSSology in general:

- https://www.fossology.org
- https://fossology.github.io/gsoc/

Meetings: Checkout the [Meetings table](/docs/2023/#meetings-table)

## Interested in Application? - Getting Grip

If you are interested in an application - great! We encourage your application. So the question is how to get started with the topic, just a few points:

- Check https://www.fossology.org and these Github pages https://github.com/fossology/fossology/wiki
- Maybe check some initial intro at https://github.com/fossology/fossology/wiki/New-at-FOSSology%2C-You-Could-...
  - https://www.fossology.org/get-started/basic-workflow/
  - https://www.fossology.org/get-started/basic-training/
  - https://fossology.github.io/
- Try to install fossology, either using vagrant or docker
  - ~~Check out our YouTube video for installation from source: https://youtu.be/q12KwmPYZG4 (Outdated)~~
- Read the proposed topics
- Use the mailing list fossology-devel@fossology.org or contact proposed mentors for further steps
- [Slack invite link](https://join.slack.com/t/fossology/shared_invite/enQtNzI0OTEzMTk0MjYzLTYyZWQxNDc0N2JiZGU2YmI3YmI1NjE4NDVjOGYxMTVjNGY3Y2MzZmM1OGZmMWI5NTRjMzJlNjExZGU2N2I5NGY)
- [GitHub discussion](https://github.com/fossology/fossology/discussions/2371)
- If you are interested in trying to make contributions, see out issues with the label [good first issue](https://github.com/fossology/fossology/contribute). Maybe you could sort out the workflow and make a first pull request.

## Examples from past programs

In 2020, we were awarded seven slots, please see here what was the result of it:

- Ayush and Kaushlendra's work on the [Atarashi](https://github.com/fossology/atarashi) license scanner and [Nirjas](https://github.com/fossology/Nirjas)
  - https://github.com/hastagAB/GSoC-2020
  - https://github.com/Kaushl2208/GSoC-2020
- Darshan's work on Dashboard: https://github.com/darshank15/GSoC_2020_FOSSOlogy/wiki

Also - very much fun - There are some YouTube videos created:

- Ayush made a YouTube video / interview style of his experience: https://youtu.be/C8f_etew-yc
- Hypnos invited Darshan for an interview: https://youtu.be/_KbQ83JK7Q0

In 2021, the GSoC program awarded the fossology project with 7 slots. It was a lot bigger and a lot of fun for 2021, a dedicated page has been set up. Please see the GSoC works [here](../2021/index.md).

From this page you can also get an idea about the work being carried out: check the weekly reporting, [for example for the UI project](../2021/ui).

You can check out our GSoC 2022 projects with 8 slots. The dedicated page can be found [here](../2022/index.md).

## Mentors

Interested in becoming a mentor? Please reach out to us!

#### Proposals so far:

- [Kaushlendra Pratap](https://github.com/Kaushl2208)
- [Anupam Ghosh](https://github.com/ag4ums)
- [Gaurav Mishra](https://github.com/GMishx)
- [Ayush Bhardwaj](https://github.com/hastagAB)
- [Shaheem Azmal M MD](https://github.com/shaheemazmalmmd)
- [Vivek Kumar](https://github.com/viv9k)

## Topic Proposals

Please reach out to us to add more proposals for GSoC 2023.

Currently, discussion happening on https://github.com/fossology/fossology/discussions/2371

## Topic Proposals from 2023

1. [REST API improvements](#rest-api-improvements)
2. [Integrating Open Source Review Toolkit](#integrating-open-source-review-toolkit)
3. [Reducing false positive copyrights](#reducing-false-positive-copyrights)
4. [Support CycloneDX report](#support-cyclonedx-report)
5. [Support conf file & UI for NOMOS agent](#support-conf-file--ui-for-nomos-agent)
6. [Support text phrases scanning for MONK agent](#support-text-phrases-scanning-for-monk-agent)
7. [New project to estimate clearing effort](#new-project-to-estimate-clearing-effort)
8. [Main license detection for components](#main-license-detection-for-components)
9. [License as service](#license-as-service)
10. [Obligation as service](#obligation-as-service)
11. [Improving FOSSology CI scanner image](#improving-fossology-ci-scanner-image)
12. [Support dynamic CSS class of bootstrap in FOSSology](#support-dynamic-css-class-of-bootstrap-in-fossology)

### REST API improvements

**Goal:** Making all data from current UI available on REST API

- Writing test cases for all the existing and new functionalities.
- Improve REST API and expose more endpoints
    - Update REST API to v2
    - https://github.com/fossology/fossology/issues?q=is%3Aissue+is%3Aopen+REST
    - https://github.com/Shruti3004/FOSSology-REST-API/issues

| Category | Rating |
|:--|:--|
| Low Hanging Fruit | - |
| Risk/Exploratory | * |
| Fun/Peripheral | ** |
| Core Development | *** |
| Project Infrastructure | ** |
| Project size | Large |
| Preferred contributor | Student/Professional |

### Integrating Open Source Review Toolkit

**Goal:** Using ORT to fetch dependencies and generate SBOM

Build systems fetch the required dependencies (library/artifact) for a project while building the project. Its important to get an insight of these dependencies for license compliance check.

The [OSS Review Toolkit](https://github.com/oss-review-toolkit/ort) is an open source project helps to find dependencies in a project.

The goal of this project is to render the project dependencies created by ort and display those in the fossology-UI. Dependencies can be scheduled directly from the UI and scan with fossology.

| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | - |
| Risk/Exploratory | - |
| Fun/Peripheral | ** |
| Core Development | *** |
| Project Infrastructure | * |
| Project size | Large |
| Preferred contributor | Student/Professional |

#### Comment
- Or use the [other approach recommended](https://github.com/fossology/fossology/discussions/2140#discussioncomment-2112774) by [@sameer1046](https://github.com/sameer1046)

### Reducing false positive copyrights

**Goal:** Improving copyright agent by reducing false positives

In GSoC 2021, [@Kaushl2208](https://github.com/Kaushl2208) worked on an ML script to tag and cleanup false positive copyrights detected by FOSSology. The goal is to continue on the work and improve the script. Alternatively, the copyright agent of FOSSology itself can be improved to achieve better results.
Known issues:
- The script currently works only for English names.
- The clutter removal changes the casing of text.
- Low accuracy of the agent overall.

Links:
- GSoC report: https://github.com/Kaushl2208/GSoC2021
- Pull request: https://github.com/fossology/fossology/pull/2083

| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | *** |
| Fun/Peripheral | ** |
| Core Development | * |
| Project Infrastructure | ** |
| Project size | Large |
| Preferred contributor | Student |

### Support CycloneDX report

**Goal:** Creating CycloneDX reports along with SPDX and other formats

CycloneDX is another popular format for generating SBOMs. Having FOSSology generate reports in CycloneDX along with SPDX will enable integration with more tools.

Links:
- https://packagist.org/packages/cyclonedx/cyclonedx-library
- https://cyclonedx.org/

As a small enhancement, other reporting formats from SPDX can be implemented as well including JSON and YAML.

| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | * |
| Fun/Peripheral | ** |
| Core Development | * |
| Project Infrastructure | ** |
| Project size | Large |
| Preferred contributor | Student |

### Support conf file & UI for NOMOS agent

**Goal:** Adding text phrases from UI or from .conf file should enble nomos to scan for new text phrases(Added) for licenses

FLOW : Create a UI Where user can add multiple text phrases associated with license(FROM FOSSology License Database)
<br />This text phrases should get converted in to regex and stored in a conf.
<br />Should provide ability to NOMOS to copy regex and associated license from conf to search for a license.
<br />Test cases needs to be provided as well.


| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | * |
| Fun/Peripheral | ** |
| Core Development | * |
| Project Infrastructure | ** |
| Project size | Large |
| Preferred contributor | Student/professional |

### Support text phrases scanning for MONK agent

**Goal:** Adding text phrases from UI to database and provide ability to scan them using MONK.

FLOW : Create a UI Where user can add multiple text phrases associated with license(FROM FOSSology License Database)
<br />Should enable MONK to scan from phrases table.
<br />Test cases needs to be provided as well.


| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | * |
| Fun/Peripheral | ** |
| Core Development | * |
| Project Infrastructure | ** |
| Project size | Medium |
| Preferred contributor | Student/professional |

### New project to estimate clearing effort

**Goal:** Create a new project using bootstrap and php to estimate time to clear the given number of components.


FLOW : Create a UI Where user can upload CSV/json
<br />Read all the components in the given file and search them in FOSSology & SW360 Database.
<br />List the components that were already cleared in fossology AND sw360.
<br />List all the components that were cleared with other versions.
<br />List all the components that are not matched with any of the components.
<br />And also list a ESTIMATED TIME to finish the upload based upon size.


| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | * |
| Fun/Peripheral | ** |
| Core Development | * |
| Project Infrastructure | ** |
| Project size | Medium |
| Preferred contributor | Student/professional |

### Main license detection for components

**Goal:** Automatically detect main license for a component/package

Fetch main license of the component/package from package-list/package repo, this will help the users to reach quick decide on the license situation based on the main license and license histogram of the package.

| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | - |
| Risk/Exploratory | - |
| Fun/Peripheral | ** |
| Core Development | *** |
| Project Infrastructure | * |
| Project size | Large |
| Preferred contributor | Student/Professional |

### License as service

**Goal:** License repository that can be used by other project/s

Idea is to create a license database similar to what fossology uses and expose it over an API which can then be used by other projects like fossology and sw360 as source of license text, risk, etc.

| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | - |
| Risk/Exploratory | - |
| Fun/Peripheral | ** |
| Core Development | *** |
| Project Infrastructure | * |
| Project size | Large |
| Preferred contributor | Student/Professional |

### Obligation as service

**Goal:** Obligation repository that can be used by other project/s

Idea is to create a obligations database similar to what fossology uses and expose it over an API which can then be used by other projects like fossology and sw360 as source of obligations for given license(s).

| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | - |
| Risk/Exploratory | - |
| Fun/Peripheral | ** |
| Core Development | *** |
| Project Infrastructure | * |
| Project size | Large |
| Preferred contributor | Student/Professional |

### Improving FOSSology CI scanner image

**Goal:** Enhancing current scanner image with new reports and features
As a fun project, FOSSology started combining scanners in a simple and small Docker image which can be run on CI providers. The image is currently capable of understanding build environment (GitLab/GitHub Actions/Travis) and use their API's to fetch diff of a branch or scan the complete repo. The capabilities of image include license scanning with Nomos and ojo scanners, copyright and keyword scanning with respective scanners. The image makes use of a Python script to perform all the tasks.

1. The script, however, currently prints report in text format on console and generate the same as an artifact. It can be improved by generating reports in other formats like SPDX reports. See [their Python API](https://github.com/spdx/tools-python).
2. The integration with GitHub Actions can be improved by reporting line number where a license violation is found.
3. Allowing user to provide a different list of Keywords for scanning (currently stored at `/usr/local/share/fossology/keyword/agent/keyword.conf`).
4. Improving on [whitelist format](https://github.com/fossology/fossology/wiki/FOSSology-scanners-in-CI#explanation) with feature to provide it from other sources, currently it is read from a file which is expected to be in the root of repo being scanned.
5. Ability to down a dependency for scan (path provided at pipeline trigger).

Additionally, the JSON output of nomos needs to be enhanced providing highlight and line information in the output.

| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | - |
| Risk/Exploratory | ** |
| Fun/Peripheral | *** |
| Core Development | ** |
| Project Infrastructure | *** |
| Project size | Large |
| Preferred contributor | Student/Professional |

### Support dynamic CSS class of bootstrap in FOSSology

**Goal:** Create a PHP page and define all the CSS classes of bootstrap that are been used inside of project

FLOW:
1. Create a PHP page and define all the CSS classes of bootstrap that are been used inside of project.
2. Also beautify the existing FOSSology UI with Bootstrap.
3. We can easily change from versions of bootstrap if we have all the classes in one place.


| Category | Rating |
| :-- | :-- |
| Low Hanging Fruit | ** |
| Risk/Exploratory | * |
| Fun/Peripheral | *** |
| Core Development | * |
| Project Infrastructure | ** |
| Project size | Medium |
| Preferred contributor | Student |
