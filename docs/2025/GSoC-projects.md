---
sidebar_position: 2
title: Google Summer of Code Proposals 2025
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2025 Kaushlendra Pratap <kaushlendra-pratap.singh@siemens.com>
SPDX-FileCopyrightText: 2025 Siemens AG
-->

Welcome to the main page for all GSoC 2025 related information.

- Check https://github.com/fossology/fossology/discussions/2908

## Intro

We from the fossology project would like to apply for GSoC 2025. Please see two
main resources for finding out more FOSSology in general:

- https://www.fossology.org
- https://fossology.github.io/gsoc/

Meetings: Checkout the [Meetings table](/docs/2025#meetings-table)

## Interested in Application? - Getting Grip

If you are interested in an application - great! We encourage your application.
So the question is how to get started with the topic, just a few points:

- Check [our guidelines for GSoC](/docs/guidelines/index.md)
- Check https://www.fossology.org and these GitHub pages
  https://github.com/fossology/fossology/wiki
- Maybe check some [initial intro](https://github.com/fossology/fossology/wiki/New-at-FOSSology%2C-You-Could-...)
    - https://youtu.be/TZqU5ZALI7U
    - https://fossology.github.io/
- Try to install fossology, either using vagrant or docker
    - https://github.com/fossology/fossology/wiki/Install-from-Source
- Read the proposed topics
- Use the mailing list fossology-devel@fossology.org or contact proposed mentors
  for further steps
- [Slack invite link](https://join.slack.com/t/fossology/shared_invite/enQtNzI0OTEzMTk0MjYzLTYyZWQxNDc0N2JiZGU2YmI3YmI1NjE4NDVjOGYxMTVjNGY3Y2MzZmM1OGZmMWI5NTRjMzJlNjExZGU2N2I5NGY)
- [GitHub discussion](https://github.com/fossology/fossology/discussions/2908)
- If you are interested in trying to make contributions, see out issues with the
  label [good first issue](https://github.com/fossology/fossology/contribute).
  Maybe you could sort out the workflow and make a first pull request.

## Examples from past programs

In 2020, we were awarded seven slots, please see here what was the result of it:

- Ayush and Kaushlendra's work on the
  [Atarashi](https://github.com/fossology/atarashi) license scanner and
  [Nirjas](https://github.com/fossology/Nirjas)
    - https://github.com/hastagAB/GSoC-2020
    - https://github.com/Kaushl2208/GSoC-2020
- Darshan's work on Dashboard: https://github.com/darshank15/GSoC_2020_FOSSOlogy/wiki

Also - very much fun - There are some YouTube videos created:

- Ayush made a YouTube video / interview style of his experience:
  https://youtu.be/C8f_etew-yc
- Hypnos invited Darshan for an interview: https://youtu.be/_KbQ83JK7Q0

In 2021, the GSoC program awarded the fossology project with 7 slots. It was a
lot bigger and a lot of fun for 2021, a dedicated page has been set up. Please
see the GSoC works [here](../2021/index.md).

From this page you can also get an idea about the work being carried out: check
the weekly reporting, [for example for the UI project](../2021/ui).

You can check out our GSoC 2022 projects with 8 slots. The dedicated page can be
found [here](../2022/index.md).

You can check out our GSoC 2023 projects with 5 slots. The dedicated pages can be
found [GSoC 2023](../2023/index.md).

The recent participation in GSOC 2024 also came to an end with 8 slots. The dedicated
pages can be found [GSoC 2024](../2024/index.md).

## Mentors

Interested in becoming a mentor? Please reach out to us!

#### Volunteers so far:

- [Kaushlendra Pratap](https://github.com/Kaushl2208)
- [Gaurav Mishra](https://github.com/GMishx)
- [Shaheem Azmal M MD](https://github.com/shaheemazmalmmd)
- [Katharina Ettinger](https://github.com/EttingerK)
- [Ayush Bhardwaj](https://github.com/hastagAB)
- [Avinal Kumar](https://github.com/avinal)
- [Sushant Kumar](https://github.com/its-sushant)

## Topic Proposals

Please reach out to us to add more proposals for GSoC 2025.

Currently, discussion happening on
https://github.com/fossology/fossology/discussions/2908

## Topic Proposals from 2025

1. [Data pipelining for safaa project](#data-pipelining-for-safaa-project)
2. [License Detection Using Large Language Models](#license-detection-using-large-language-models)
3. [Transforming Nirjas into a Technical Documentation tool Using Large Language Models (LLMs)](#transforming-nirjas-into-a-technical-documentation-tool-using-large-language-models-llms)
4. [Overhauling scheduler design](#overhauling-scheduler-design)
5. [Debian packaging for Debian repository](#debian-packaging-for-debian-repository)
6. [User & Developer Assistant Chatbot using Large Language Models](#user--developer-assistant-chatbot-using-large-language-models)
7. [Support text phrases and bulk based scanning for MONK a like agent](#support-text-phrases-and-bulk-based-scanning-for-monk-a-like-agent)
8. [Enhance atarashi ability](#enhance-atarashi-ability)
9. [Integrating Open Source Review Toolkit](#integrating-open-source-review-toolkit)
10. [Complete microservices infrastructure for FOSSology](#complete-microservices-infrastructure-for-fossology)
11. [Rewrite FOSSology UI using React](#rewrite-fossology-ui-using-react)
12. [FOSSology UX and UI design](#fossology-ux-and-ui-design)
13. [New single file view page to accommodate license + copyright clearing](#new-single-file-view-page-to-accommodate-license--copyright-clearing)

### Data pipelining for safaa project

**Goal:** Automate the process of model training using pipelining.

Currently in [Safaa Project](https://github.com/fossology/safaa) data was manually curated And we see that most of the things are manual here. the project should concentrate on creating a pipeline, Utilizing LLMS if required to increase the accuracy, use deep learning techniques to improve.

Scripts to copy copyright data automatically(group's data or some users data) from fossology instance to train the model.

<br />Test cases needs to be provided as well.


| Category               | Rating                               |
|:-----------------------|:-------------------------------------|
| Low Hanging Fruit      | **                                   |
| Risk/Exploratory       | *                                    |
| Fun/Peripheral         | **                                   |
| Core Development       | *                                    |
| Project Infrastructure | **                                   |
| Project size           | Large                                |
| Preferred contributor  | Student/professional                 |
| Skills needed          | Python, ML And Data                  |
| Contact                | @Kaushl2208 @GMishx @shaheemazmalmmd |


### License Detection Using Large Language Models

**Goal:**  To automate license detection using license dataset and ensure accurate and up-to-date results by leveraging a Retrieval-Augmented Generation (RAG) approach.

We have previously tried semantic similarity approach for license detection [#104-Atarashi](https://github.com/fossology/atarashi/pull/104). Which used text processing and prompt engineering. We have tried multiple LLM models for license statement types. Visit [Weekly Reports](https://fossology.github.io/gsoc/docs/2024/license-detection) for more performance details

**What we want to achieve?**
- Utilize [SPDX ](https://spdx.org/licenses/)or [SAFAA](https://github.com/fossology/safaa) Database for licenses.
- To create RAG knowledge Base, For model to understand specifics of licenses.
- High Accuracy on Random license texts(Input provided need not to be a full fledged statement). Confidence score if necessary
- Needs to be a Language Agnostic Solution.
- Pipeline to Fetch New License Data (If available) from SPDX Database or SAFAA so RAG Knowledge Base should always be up to date.


| Category               | Rating                                   |
|:-----------------------|:-----------------------------------------|
| Low Hanging Fruit      | **                                       |
| Risk/Exploratory       | *                                        |
| Fun/Peripheral         | **                                       |
| Core Development       | *                                        |
| Project Infrastructure | **                                       |
| Project size           | Medium/Large                             |
| Preferred contributor  | Student/professional                     |
| Skills needed          | Python, LLMs, Fine-tuning, Documentation |
| Contact                | @Kaushl2208 @GMishx @shaheemazmalmmd     |


### Transforming Nirjas into a Technical Documentation tool Using Large Language Models (LLMs)

**Goal:** To transform [Nirjas](https://github.com/fossology/Nirjas) into a comprehensive technical documentation tool using LLMs by automatically generating, improving, and structuring documentation for source code files. This will include comments, function documentation, and metadata extracted using Nirjas, ensuring consistency, clarity, and quality in technical documentation.

We have previously worked on extracting metadata and comments using regex-based approaches in Nirjas. While this method provided structured results, it can also be used to generate high-quality documentation. Leveraging LLMs with metadata extraction from Nirjas.

**What we want to achieve?**

1. Integrate LLMs for Documentation Generation
2. Use Existing Knowledge Sources for Training
3. Implement a Retrieval-Augmented Generation (RAG) Approach
4. Automatic Summarization and Quality Scoring
5. Seamless Integration with Existing Tools

| **Category**           | **Rating**                                                           |
|------------------------|----------------------------------------------------------------------|
| Low Hanging Fruit      | **                                                                   |
| Risk/Exploratory       | *                                                                    |
| Fun/Peripheral         | **                                                                   |
| Core Development       | **                                                                   |
| Project Infrastructure | **                                                                   |
| Project Size           | Medium/Large                                                         |
| Preferred Contributor  | Student/Professional                                                 |
| Skills Needed          | Python, LLMs, Fine-tuning, Data Engineering, Documentation Standards |
| Contact                | @hastagAB @GMishx @Kaushl2208                                        |


### Overhauling scheduler design

**Goal:** Improving FOSSology scheduler or replacing with OTS solution

The existing scheduler design is causing new issues which need to be addressed.
Moreover, existing scheduler design is not touched in years.

**Concerning points**
1. The scheduler is written in C which makes it next to impossible to find cause
   of a failure.
2. The C language does not support exception handling out of the box. It makes
   code less readable and prone to errors.
3. The linear queue design causes issue when there should be only one instance
   of an agent running for an upload, but overall the agent is not mutually
   exclusive.
   > For example, if the monkbulk has a limit set to 1, it should be implied for
   > only single upload. But with linear queue, this monkbulk job will block all
   > other agents from executing even when they are not effected by the results
   > of monkbulk.
   >
   > This essentially makes the agent mutually exclusive even though, there is a
   > special flag EXCLUSIVE for the very same purpose:
   > https://github.com/fossology/fossology/wiki/Job-Scheduler#agentconfs

- One idea on redesigning the queue, it can be broken into buckets per upload
  each maintaining its own priority queue. There can be another queue for
  global operations like maintenance, delagent, etc.
- Doing so, each bucket can be traversed in round-robin and pick first pending
  job and check against host limit. This will eliminate the scenario mentioned
  in point 3. Also, exclusive agents can be sent to global queue.
  ```
    upload specific queue
  |-<upload_2> -> nomos, copyright, ojo, keyword
  |-<upload_3> -> monkbulk, decider, monkbulk, decider
  |-<upload_4> -> reuser, decider
  
  global queue
  -> delagent,
  ```
4. Since the FOSSology is released, there can be number of new scheduling
   libraries being released which needs to be explored. They can be a nice
   addition to the project.
5. There have been some work already done in GSoC 2024, Can be visited [here](https://fossology.github.io/gsoc/docs/2024/scheduler/)

| Category               | Rating                                       |
|:-----------------------|:---------------------------------------------|
| Low Hanging Fruit      | -                                            |
| Risk/Exploratory       | **                                           |
| Fun/Peripheral         | ***                                          |
| Core Development       | ***                                          |
| Project Infrastructure | *                                            |
| Project size           | Large                                        |
| Preferred contributor  | Professional                                 |
| Skills needed          | Go                                           |
| Contact                | @GMishx @Kaushl2208 @avinal @shaheemazmalmmd |


### Debian packaging for Debian repository

**Goal:** Improve Debian packaging and make it acceptable for APT

The existing effort to put FOSSology under Debian packaging list needs to be
taken forward. A repository under Debian Salsa was setup initially but not
maintained any more: https://salsa.debian.org/fossology-team/fossology
It is configured to use
[gbp](https://honk.sigxcpu.org/piki/projects/git-buildpackage/).

**Blockers**

1. The Debian building mechanism does not allow installation from sources other
   than apt. The Composer packages need to be packed as Debian packages and
   shipped with FOSSology.
2. Packaging and shipping other tools needs to satisfy their licensing terms.
3. The versions of packages in APT and actual versions used are different.
4. APT also provides JS libraries like JQuery and DataTables but RHL does not.

**See also**
* https://github.com/fossology/fossology/pull/2075
* https://wiki.debian.org/PackagingWithGit
* https://wiki.debian.org/SimplePackagingTutorial
* https://wiki.debian.org/Diagrams
* https://wiki.debian.org/PHP
* https://peertube.debian.social/videos/watch/0fb2dbc4-f43d-477e-8b14-20c426f970de

| Category               | Rating                               |
|:-----------------------|:-------------------------------------|
| Low Hanging Fruit      | *                                    |
| Risk/Exploratory       | **                                   |
| Fun/Peripheral         | ***                                  |
| Core Development       | *                                    |
| Project Infrastructure | ***                                  |
| Project size           | Small                                |
| Preferred contributor  | Student/Professional                 |
| Skills needed          | Debian, APT, CMake                   |
| Contact                | @GMishx @shaheemazmalmmd @Kaushl2208 |


### User & Developer Assistant Chatbot using Large Language Models

**Goal:** To develop an intelligent assistant chatbot that leverages Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) techniques to provide comprehensive support for both end-users and developers of our tool. The assistant will bridge the gap between users, documentation, and the codebase to ensure an interactive and efficient problem-solving experience.

The chatbot will be designed to interactively assist new and existing users with various aspects of the tool, including:

1. Feature Discovery:
    - Answer questions about available features, their functionalities, and usage.
    - Provide contextual information derived from the tool's wiki and feature documentation.

2. Problem Resolution and Recommendations:
    - Assist users during the project setup phase by identifying common setup errors.
    - Provide troubleshooting steps for known issues by integrating knowledge from GitHub issues.

3. Developer Support:
    - Answer codebase-related queries by identifying relevant classes, methods, or functions.
    - Enhance developers' understanding of the project by linking features to the corresponding implementation in the code.

The chatbot will utilize **LangChain**, **RAG**, and a **Vector Database** for retrieval, enabling contextual conversations. A seamless pipeline will integrate multiple data sources, including documentation, GitHub issues, and the codebase.

**What We Want to Achieve:**

1. **For End-Users**:
    - **Improved Onboarding**:
        - Enable new users to quickly understand the tool's features and capabilities through interactive conversations.
    - **Efficient Problem Resolution**:
        - Provide real-time recommendations for known issues encountered during project setup.
        - Reduce reliance on manual troubleshooting by surfacing relevant GitHub issues.
    -  **Enhanced User Engagement**:
        - Increase user satisfaction by offering a conversational interface that adapts to their queries and knowledge level.

2. **For Developers**:
    - **Codebase Exploration**:
        - Allow developers to query the codebase for insights into specific classes or functions, fostering faster understanding and debugging.
    - **Knowledge Consolidation**:
        - Create a unified interface where feature descriptions, documentation, and implementation details converge.

3. **Broader Objectives**:
    - Reduce the time spent on documentation searches.

PS: *There are some features which aligns with the goal but not be possible in short time interval. Topics like: Knowledge Consolidation & Codebase Exploration but the development should be done by taking all this in mind*

| Category               | Rating                                |
|:-----------------------|:--------------------------------------|
| Low Hanging Fruit      | *                                     |
| Risk/Exploratory       | *                                     |
| Fun/Peripheral         | ***                                   |
| Core Development       | *                                     |
| Project Infrastructure | **                                    |
| Project size           | Large                                 |
| Preferred contributor  | Student/professional                  |
| Skills needed          | Python, LLMs, Documentation Standards |
| Contact                | @Kaushl2208 @GMishx @shaheemazmalmmd  |


### Support text phrases and bulk based scanning for MONK a like agent

**Goal:** Adding text phrases from UI to database and use existing bulk phrases and provide ability to scan them using MONK and identify files if the match is 100%

FLOW :
* Create a UI Where user can add multiple text phrases associated with license(FROM FOSSology License Database).
* Use existing bulk phrases table from database.
* Create a new agent like existing MONK agent which not only identifies the matches but also decides the files.
* Test cases needs to be provided as well.


| Category               | Rating                   |
|:-----------------------|:-------------------------|
| Low Hanging Fruit      | **                       |
| Risk/Exploratory       | *                        |
| Fun/Peripheral         | **                       |
| Core Development       | *                        |
| Project Infrastructure | **                       |
| Project size           | Medium                   |
| Preferred contributor  | Student/professional     |
| Skills needed          | PHP, C++                 |
| Contact                | @GMishx @shaheemazmalmmd |


### Enhance atarashi ability

**Goal:** Improve license identification of atarashi

* Improve existing model which have 80 % accuracy.
* Use some model to identify the license-possibility using keywords.
* Once there is some license possibility pass this to existing trained model to identify the accurate license.
* If the trained model miss to find the license then add license-possibility to file so that users checks the file and clarify.
* Work on the existing branch(https://github.com/fossology/fossology/pull/1634) and make sure that this gets merged.
* Know more about [atarashi](https://fossology.github.io/atarashi/).

| Category               | Rating                                         |
|:-----------------------|:-----------------------------------------------|
| Low Hanging Fruit      | *                                              |
| Risk/Exploratory       | **                                             |
| Fun/Peripheral         | ***                                            |
| Core Development       | *                                              |
| Project Infrastructure | ***                                            |
| Project size           | Small                                          |
| Preferred contributor  | Student/Professional                           |
| Skills needed          | Python, ML , CMake                             |
| Contact                | @GMishx @shaheemazmalmmd @Kaushl2208 @hastagAB |


### Integrating Open Source Review Toolkit

**Goal:**  Using ORT to fetch dependencies and generate SBOM

Build systems fetch the required dependencies (library/artifact) for a project while building the project. Its important to get an insight of these dependencies for license compliance check.

The [OSS Review Toolkit](https://github.com/oss-review-toolkit/ort) is an open source project helps to find dependencies in a project.

The goal of this project is to render the project dependencies created by ort and display those in the fossology-UI. Dependencies can be scheduled directly from the UI and scan with fossology.

Also vice versa integrate FOSSology to ORT to scan the opensource dependencies.

| Category               | Rating                               |
|:-----------------------|:-------------------------------------|
| Low Hanging Fruit      | -                                    |
| Risk/Exploratory       | -                                    |
| Fun/Peripheral         | **                                   |
| Core Development       | ***                                  |
| Project Infrastructure | *                                    |
| Project size           | Large                                |
| Preferred contributor  | Student/Professional                 |
| Skills Needed          | PHP, Cmake, Kotlin                   |
| Contact                | @GMishx @shaheemazmalmmd @Kaushl2208 |


### Complete microservices infrastructure for FOSSology

**Goal:** Continue the work from previous GSoC and bring FOSSology to a working state on Kubernetes

As part of [GSoC 2021](https://summerofcode.withgoogle.com/archive/2021/projects/4661860250419200), a large portion of work was done to bring FOSSology to work on Kubernetes.  Since then, there have been countless changes to the codebase and the build system. Here are a few objectives we expect to be achieved:

1. Go through the changes in the codebase and devise strategies for integrating them
2. Inspect the changes in #2086 and complete the work
3. By the end, we should have a fully working FOSSology installation on Kubernetes
4. Create documentation for setting up FOSSology on a cluster and all the options available
5. Stretch goal: Create an all-in-one script for easy Kubernetes setup with FOSSology
6. Stretch goal: Add mechanism for health checks of the installation
7. Stretch goal: Expose usage and performance metrics

#### References
- #2086
- #2075
- https://summerofcode.withgoogle.com/archive/2021/projects/4661860250419200

| Category               | Rating                                       |
|------------------------|----------------------------------------------|
| Low Hanging Fruit      | -                                            |
| Risk/Exploratory       | ***                                          |
| Fun/Peripheral         | *                                            |
| Core Development       | *                                            |
| Project Infrastructure | ***                                          |
| Project Size           | Medium/Large                                 |
| Preferred Contributor  | Professional                                 |
| Skills Needed          | Kubernetes, Docker/Podman, CMake, Bash       |
| Contact                | @avinal @GMishx @shaheemazmalmmd @Kaushl2208 |



### Rewrite FOSSology UI using React

**Goal:** Rewrite FOSSologyUI using react.

* Existing [code](https://github.com/fossology/fossologyUI) is old. and needs a fix.
* Implementation of new API'S to existing code.
* Implementation designed templates.

| Category               | Rating                                       |
|:-----------------------|:---------------------------------------------|
| Low Hanging Fruit      | *                                            |
| Risk/Exploratory       | **                                           |
| Fun/Peripheral         | ***                                          |
| Core Development       | *                                            |
| Project Infrastructure | ***                                          |
| Project size           | Small                                        |
| Preferred contributor  | Student/Professional                         |
| Skills needed          | php, react, CMake                            |
| Contact                | @GMishx @shaheemazmalmmd @Kaushl2208 @deo002 |


### FOSSology UX and UI design

**Goal:** Redesign the FOSSology UX and UI to modernize its interface and enhance user-friendliness.

#### Understand the Primary Users
- **Identify user personas**: Determine who the key users of FOSSology are, such as developers, compliance officers, or open-source contributors.
- **Analyze pain points**: Conduct surveys, interviews, or user studies to understand the challenges users face while using the current system.

#### Analyze the Current Interface
- **Evaluate usability issues**: Identify areas where the current interface is difficult to use or navigate.
- **Highlight outdated design elements**: Assess visual components and workflows that no longer align with modern design standards or user expectations.

#### Identify Redesign Requirements
- **Define goals**: Establish clear objectives for the redesign, such as improving efficiency, accessibility, or ease of use.
- **Prioritize features**: Focus on addressing critical pain points and implementing high-impact improvements.

#### Design Reusable Components
- **Catalog interface elements**: List existing components and determine which can be updated or replaced.
- **Ensure consistency**: Create reusable design components to maintain a cohesive user experience and simplify scalability.

#### Draft Layouts and Workflows
- **Streamline user journeys**: Map out key workflows to reduce complexity and improve navigation.
- **Prototype layouts**: Create wireframes or mockups to visualize potential improvements and gather early feedback.

#### Establish a Cohesive Design System
- **Define visual guidelines**: Standardize elements such as colors, typography, and spacing for a unified aesthetic.
- **Componentize the UI**: Build a library of modular components for easier development and maintenance.

#### Gather Feedback and Refine
- **Conduct usability testing**: Engage users to validate the new designs and identify areas for improvement.
- **Iterate based on feedback**: Refine layouts, workflows, and components to ensure the redesign meets user needs effectively.

| Category               | Rating                                          |
|:-----------------------|:------------------------------------------------|
| Low Hanging Fruit      | *                                               |
| Risk/Exploratory       | **                                              |
| Fun/Peripheral         | ***                                             |
| Core Development       | *                                               |
| Project Infrastructure | ***                                             |
| Project size           | Medium/Large                                    |
| Preferred contributor  | Student/Professional                            |
| Skills needed          | wireframe and other design techniques           |
| Contact                | @EttingerK @GMishx @shaheemazmalmmd @Kaushl2208 |





### New single file view page to accommodate license + copyright clearing

**Goal:** To Redesign & develop new single file view page accommodate all the clearings.

* Have a folder tree with blue & red buttons to indicate the clearing.
* Integrate drag and drop functionality to copy the clearing decisions from one file to another.
* Have a histogram feature to accommodate license groups in the current upload.
* Have a file view page with highlights of all the findings (licenses + copyrights + keywords + ECC).

#### Refer the screenshot of the design.
![screenShot154](https://github.com/user-attachments/assets/3b40629a-fd18-4c10-9dcd-5ef6c81468ac)


| Category               | Rating                                          |
|:-----------------------|:------------------------------------------------|
| Low Hanging Fruit      | *                                               |
| Risk/Exploratory       | **                                              |
| Fun/Peripheral         | ***                                             |
| Core Development       | *                                               |
| Project Infrastructure | ***                                             |
| Project size           | Small                                           |
| Preferred contributor  | Student/Professional                            |
| Skills needed          | wireframe and other design techniques           |
| Contact                | @EttingerK @GMishx @shaheemazmalmmd @Kaushl2208 |