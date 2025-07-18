---
title: Week 6
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, microservices, infrastructure, devops]

---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 6

*(July 08, 2025 - July 14, 2025)*

## Fixing Pod Connectivity Issues:

This week, I mainly worked on solving the issue with the web pod not connecting to the database. I spent time checking logs, going through the PHP config files, and trying different ways to fix the problem. I focused on both the web and scheduler pods to understand what was going wrong and how to make them talk to each other properly.

The goal was to make sure everything inside the infrastructure connects smoothly, especially the web UI and the backend.

## Moving from Make to CMake:

During our call, we decided to move from using Make to CMake for building the project. The older system was based on Make, but it's not ideal anymore. CMake is better because it’s more modern, flexible and easier to maintain.

Switching to CMake should make it easier to build, test and add new changes in the future. It's a big step toward improving how the system is set up.

## Meeting 1:

*(July 08, 2025)*

I had a call with my mentors [Avinal](https://github.com/avinal) and [Shaheem](https://github.com/shaheemazmalmmd). where we mainly discussed the database issue happening in the web pod. [Avinal](https://github.com/avinal) also tried building the recent changes and checked how things look after rebasing with my commit. During the call, he talked about some future improvements and explained how we can move from Make to CMake. He also shared some earlier documentation to help me understand CMake better and start working on the switch.

## Meeting 2:

*(July 09, 2025)*

In community weekly meeting I shared my progress with community and talked about the new web pod issue and about my lastest commit.

## What’s Next for Week 7:

- Try to fully fix the database issue in the web pod

- Start testing the new build system using CMake

- Go through the Kubernetes files and clean up anything outdated