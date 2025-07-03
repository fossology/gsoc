---
title: Week 4
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, microservices, infrastructure, devops]

---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 4

*(June 24, 2025 - June 30, 2025)*

## Meeting 1: 

*(June 25, 2025)*

In our weekly sync-up call with [Avinal](https://github.com/avinal) and [Shaheem](https://github.com/shaheemazmalmmd), we discussed several important updates and next steps:

- Decided to switching from Minikube to Kind for a smoother, faster and more stable local development experience.

- Explored the root cause of the scheduler pod’s <code>CrashLoopBackOff</code> and potential fixes.

- We finalized the agenda for upcoming weeks, which includes stabilizing the scheduler pod, refining the microservices setup, and polishing deployments for long-term maintainability.

- My mentors introduced me to rebasing in version control. They explained its significance in maintaining a clean Git history and walked me through how to rebase, resolve conflicts and prepare a clean commit for review.

- After this meeting, I successfully applied the guidance, created a clean commit and pushed the updated microservices configuration to the forked repository for mentor review.



## Submitted a Functional Kubernetes-Based FOSSology Setup

I finalized and submitted a fully working version of the FOSSology microservices-based setup. After addressing deployment issues over the past weeks, I bundled all the required configuration files, updated manifests and Dockerfiles into a single, functional version and then sent to my Mentor for review. 

All changes were pushed to Omar’s forked repository under the following branch:

* https://github.com/SalmanDeveloperz/fossology/tree/OmarAbdelSamea/GSoC/Microservices

The associated commit can be viewed here:

* https://github.com/SalmanDeveloperz/fossology/commit/1af934a48c449a2aacdb3bdec285a79534488db4

### Highlights of the Commit:

- Polished Dockerfiles and .yaml files for successful image builds

- Web and scheduler pod configuration fixes

- Init containers added to manage PostgreSQL readiness

- Verified end-to-end setup with FOSSology UI loading successfully



## Switching from Minikube to Kind:

Initially, Minikube was used for Kubernetes orchestration, but we decided to switch to Kind due to several limitations:


| **Minikube**                                 | **Kind**                                    |
|----------------------------------------------|---------------------------------------------|
| Uses Virtual Machines (VMs)                  | Uses Docker containers                      |
| Slower startup and resource-heavy            | Lightweight and faster startup              |
| Port forwarding can be inconsistent          | Easier and more reliable port handling      |
| Persistent volumes sometimes reset on reboot | More stable volume management               |
| Difficult to debug inside container network  | Easier debugging with native Docker tooling |


## Deep Dive into Scheduler Pod CrashLoopBackOff

A significant part of the week was spent troubleshooting why the scheduler pod was crashing repeatedly. With Kind in place, I could gather more reliable logs and iterate quickly.

Areas investigated:-

- PostgreSQL schema migration errors

- Improper environment variables

- Readiness and liveness probes

- Docker image and startup sequences

While a final fix is still pending, we’ve narrowed down the potential issues and documented our findings to streamline the next round of debugging.

## Meeting 2:

*(June 26, 2025)*

During the second weekly community call, I shared:

- Progress on the repository and successful UI

- The decision and rationale for moving to Kind

- Troubleshooting steps taken for the scheduler

## What's next for Week 5:

For Week 5, I’m ready to dive in and:

- Fix the scheduler pod’s <code>CrashLoopBackOff</code> by resolving the PostgreSQL schema error and making database updates work perfectly.

- Get the upload and copyright features working on the FOSSology UI so everything runs smoothly.

- Clean up all my changes in files, making them neat and work on Mentor's feedback.
