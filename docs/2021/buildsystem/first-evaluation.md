---
sidebar_position: 4
title: First Evaluation
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Avinal Kumar <avinal.xlvii@gmail.com>
-->

## Updates


In the first phase of GSoC 2021 @ The FOSSology Project, I have completed the desired milestone. As of now, FOSSology can be installed completely via CMake and most of the components are working fine in initial testing.

### List of tasks completed

- Added CMake build configurations for all the C/C++ agents for executables, libraries, and coverages
- Added CMake install configuration for all C/C++ and PHP agents as well as extra components
- Reworked the shell scripts and generated source files to make them more compatible with CMake as well as better in terms of overall compatibility with the latest tools.

## Improvements


- The new CMake build architecture is much more flexible to changes as compared to hard-coded Makefiles.
- CMake generated configurations support parallel build by default, this has led to significant improvement in build time. CMake generated configuration can now build the whole project **within 2 mins** or even faster on more powerful CPUs (Both Ninja and Makefiles with the same number of parallel processes) compared to 4-5 minutes previously. *(These results are averaged from initial testing of new build architecture)*
- CMake supports out-source builds by default, which means the source folders are not touched/modified while building, all build files and residuals get their separate folder and the source tree can be cleaned easily. 
- Developers can now opt for a long list of generators to build FOSSology e.g Makefiles, Ninja as per their needs.
  
## How to test

Instructions to test the new Build system is in [this](https://github.com/avinal/fossology/wiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now) wiki. as well as in [Building FOSSology](build) page.

## Known Issues

- There may be a permission issue with some generated sources while building. This can be bypassed for now by running the `sudo chmod +x <filename>` command.
- Coverage builds may fail.

## Postponed Tasks


- configuration for tests are skipped for now

## Work in Progress

- Currently, I am working on packaging the FOSSology with CMake.