---
title: Week 7
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, cmake, infrastructure, devops]

---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 7

*(July 15, 2025 - July 21, 2025)*

## Focusing on CMake:

This week, my main focus was on learning and implementing CMake, since we’re transitioning from Make to CMake across the project. I created a dedicated build folder and used it to build each component individually using CMake.

Most images built successfully, except the scheduler, which still has a few issues that need to be resolved with database issues. Other than that, everything is working smoothly. I’ve been building each image separately using CMake and running them inside the `kind` cluster to ensure compatibility.

## Understanding Docker and Kubernetes Files:

Alongside CMake, I also spent time exploring how Dockerfiles and Kubernetes configuration files are tied to the new build system. And how we can switch the whole infrastructure from make to cmake. I wanted to make sure the new setup doesn’t break any part of the infrastructure and fits well with our workflow.

## Finalizing the CMake Commit:

Once the remaining issues are resolved and the rebase process is complete, I’ll be sending a final commit with the complete CMake-based build system.

## Midterm Evaluation:

The Midterm Evaluation was completed and passed by **July 18, 2025**. I am happy and greatful to my mentors and community. I’m now fully focused on completing and tackling with new issues and the remaining part of the project in the upcoming weeks.

## Meeting 1:

*(July 16, 2025)*

The meeting with [Avinal](https://github.com/avinal) was canceled as discussed earlier. Instead of the call, we stayed focused and continued working on the CMake setup as discussed between us.

## Meeting 2:

*(July 17, 2025)*

In our weekly community call, I shared updates on my progress with CMake, discussed the scheduler build issue and confirmed that most parts are now building successfully with the new system.

## What’s Next for Week 8:

- Fix the database connection issue in the web pod and scheduler pod issue so the full FOSSology UI works smoothly.

- Finalize switching from make to cmake and clean up all related build files.

- Test the full setup in the Kind cluster to make sure everything is stable.

- Push the final CMake changes after testing and rebase ready for review.

- Connect with mentors to start planning work on issue [#3055](https://github.com/fossology/fossology/issues/3055), including checking out API options like REST, gRPC and GraphQL.

