---
sidebar_position: 1
title: Introduction
slug: /2024/scheduler/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2024 Aditya Singh <email.here>
-->

## Author

[Aaditya Singh](https://github.com/Aaditya-Singh78)

## Contact info

- [Email](mailto:singh.aaditya889@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/aadi-singh/)
- [Twitter](https://twitter.com/__Aadityasingh)

## OVERHAULING SCHEDULER DESIGN
The Fossology Scheduler, essential for managing tasks in the Fossology Application, is hindered by its outdated C programming, which lacks error handling and the ability to manage multiple tasks at once. The current design doesn't effectively manage job execution, especially for jobs that need to run independently for each upload but instead block other unrelated tasks. 

![Linear Queue](./static/img/linear_queue.png)


## What's the project about?

The project aims to overhaul the Fossology Scheduler, which is critical for managing tasks within the Fossology Application. The current scheduler, developed in C, lacks robust error handling and does not efficiently manage multiple tasks, especially when tasks need to run independently & mutually exclusive. This leads to significant issues in job execution, where independent jobs block each other unnecessarily. The proposal focuses on transitioning the scheduler from C Programming language to Go language, integrating scheduling algorithms & architecture to enhance flexibility, error handling, and task management.

## What should be done?

The plan for the project involves several key steps:

1. **Refactoring the Current Scheduler**: The existing C-based scheduler will be refactored into Go. This shift not only improves readability and maintainability but also integrates built-in exception handling which C lacks. Go's ability for achieving concurrency, better memory management & dynamic handling of garbage collection, will provide a more robust foundation for the scheduler.

2. **Improving Queue Management**: The current linear queue system will be replaced with a more sophisticated management system using a Priority based scheduling algorithm. This approach will allow to adapt data based stratergy for building premptive type or non-prempitive scheduling.

3. **Adopting new Architecture**: Adopting a Multi-Level Feedback Queue approach enhances the system by incorporating the principles of a finite state machine, which adds the capability of integrating data pre-processing for thorough error analysis.

4. **Extensive Testing and Documentation**: Alongside development, the project will include comprehensive testing using Go's library Documentation will be updated to reflect the new scheduler system, ensuring that all features and functionalities are well-documented for current and future development needs.

5. **Deployment and Monitoring**: Before full integration, the new scheduler will be deployed in a staged environment to monitor its performance and make necessary adjustments based on real-world usage.