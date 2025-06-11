---
sidebar_position: 5
title: Introduction
slug: /2025/microservices-infrastructure/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

## Author:

[Muhammad Salman](https://github.com/SalmanDeveloperz)

## Contact Info:

- [Email](mailto:chsalmanramzan422@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/msalman199/)

## Project Title:

Complete Microservices Infrastructure for FOSSology

## What's the project about?

This project aims to complete the microservices infrastructure for FOSSology by continuing the work from GSoC 2021, with a goal to fully deploy FOSSology on Kubernetes. Over the past few years, multiple changes have been made to the codebase and the build system, requiring updates and integration strategies. Key deliverables include: - Reviewing and aligning the legacy GSoC Kubernetes setup with the current codebase - Completing pending work from pull request #2086 - Providing a fully working FOSSology Kubernetes deployment - Creating comprehensive documentation for Kubernetes setup - (Stretch Goals): Creating a single setup script, implementing health checks, and exposing usage/performance metrics This project ensures easier deployment, better scalability, and modern DevOps practices for FOSSology’s infrastructure. 

## Key Deliverables

The project scope includes the following key tasks:

### Analyze Codebase Changes ###

Since 2021, various updates have been made to the FOSSology codebase: 
- The build system transitioned to CMake.
- New agents were introduced that may require corresponding Dockerfiles and Kubernetes manifests.
- Expansion of REST APIs.

I will analyze these changes and formulate strategies to integrate them effectively into the Kubernetes setup.

### Inspect and Update Previous Work ###
Pull Request [#2086](hhttps://github.com/fossology/fossology/pull/2086) is currently in draft status, indicating incomplete testing, missing features (e.g., health checks, metrics), and some potential bugs. Additionally, ETCD integration might require enhancements for improved scalability.
I will thoroughly inspect the previous work, resolve any issues, and bring the PR to completion. 

### Deploy FOSSology on Kubernetes ###

The end goal is to have a fully functional and production-ready deployment of FOSSology on Kubernetes. This will mark the completion of the core infrastructure development phase.

### Create Documentation ###

I will create detailed documentation for:
- Setting up FOSSology on Kubernetes.
- Configuration options and deployment instructions.
- Troubleshooting and operational notes.

### Stretch Goals and CI/CD ### 

Stretch goals will be including:-
- A single setup script for streamlined Kubernetes deployment.
- Health check mechanisms to monitor the state of deployed services.
- Metrics endpoints to provide insights into usage and performance.
