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
- [LinkedIn](https://linkedin.com/in/aadi-singh)
- [Twitter](https://twitter.com/__Aadityasingh)

## Project title

Scheduler overhaul

## What's the project about?

This project aims to enhance the job scheduling capabilities of [FOSSology](https://github.com/fossology/fossology) by transitioning from a C-based implementation to a Go-based system. The overhaul focuses on leveraging Go's modern language features to improve concurrency, performance, and maintainability. This transition addresses the scalability and system *throughput* challenges in the current scheduler.


### Architecture Overview
![C-architecture](./asset/c_arch.jpg)

**The Current architecture** utilises the a multi-threaded approach to manage job scheduling & execution.It is structured around several key *components*:

1. **Main Thread**: Acts as the scheduler's control unit, managing worker threads and overseeing system operations like resource allocation and health monitoring.

2. **Job Execution Queue**: Holds and manages incoming job requests, facilitating efficient job processing and priority control.

3. **Worker Threads**: Executes jobs from the queue under the main thread’s management, optimizing resource use and performance.

4. **Scheduler Logic**: Determines the execution order of jobs based on priority and resource availability, ensuring systematic and efficient processing.

5. **Database Interaction**: Handles storage of job logs and results, supporting tracking, auditing, and data persistence.

6. **Error Handling Mechanism**: Manages job execution errors to ensure stability and prevent system-wide impacts from failures.

7. **Resource Allocation**: Distributes resources across jobs and threads to avoid contention and ensure efficient execution.

**Key Challenges**:

1. *Concurrency and Synchronization*: Ensuring that multiple worker threads operate without interfering with each other requires meticulous management of resources and synchronization.

2. *Efficiency and Throughput*: The system must optimize the processing of jobs to minimize wait times and maximize the throughput of the scheduler.

3. *Scalability*: As the number of jobs increases, the system must scale appropriately to handle the increased load without degradation in performance.

4. *Flexibility*: Adapting to varied job types and changing operational conditions while maintaining performance and reliability.

## What should be done?

What are the plans for the project?

1. **Refactor Existing Code**: Transitioning the existing C codebase to Go, restructuring components to fit the Go idiom.

   > **Why Go?**

    - *Concurrency and Performance*: Go's native goroutine and channel-based concurrency model is highly efficient for processes that require concurrent execution, which is critical for job scheduling.

    - *Memory Safety*: Automatic memory management and garbage collection in Go reduce the risk of memory-related errors, a common challenge in C due to its manual memory handling.

    - *Simplicity and Productivity*: Go's clean and concise syntax, along with its powerful standard library, enables rapid development and easier maintenance compared to the verbose and complex C code.

    - *Robust Tooling*: The Go toolchain provides out-of-the-box support for testing, formatting, and documentation, enhancing development workflow and product quality.

    - *Cross-Platform Compatibility*: Go simplifies the build process with its strong support for cross-platform compilation, making it easier to manage and deploy on various systems without code changes.

2. **Optimize Concurrency Handling**: Implementing a robust concurrency model using goroutines and channels to handle multiple jobs efficiently.

    > **How it would be achieved ?**

    - The *new scheduler architecture* will utilise:

        ![architecture](./asset/golang_arch.png)

        - **Go Routines for Task Management**: Efficiently handling multiple jobs in parallel to optimize resource usage.

        - **Channels for Communication**: Using channels to manage job queues and worker communication, ensuring thread-safe operations.

        - **Modular Design**: Structuring the scheduler with clear separation of concerns, allowing for easier updates and maintenance.

    - To ensure consistency and maintainability of the codebase, the following *coding standards* will be applied:

        - *Format and Style*: using `gofmt` and `golint` for formatting and linting the code.

        - *Error Handling*: Follow Go's idiomatic way of error handling. Always check for errors where they can occur and handle them gracefully.
        
        - *Commenting and Documentation*: Write clear comments for all public functions and methods, using Godoc conventions. Document all packages and provide examples where necessary.
        
        - *Concurrency Practices*: Use goroutines and channels appropriately. Avoid common pitfalls like race conditions by using synchronization primitives from the `sync` package when needed.
        
        - *Testing*: Write comprehensive unit tests for all components using Go's built-in `testing` package. Aim for a high level of test coverage to ensure reliability and facilitate future changes.

3. **Enhance Error Handling**: Utilizing Go's built-in error handling to create a more reliable and fault-tolerant scheduler.

4. **Integrate with Existing Systems**: Ensuring the new Go-based scheduler integrates seamlessly with the current FOSSology ecosystem.

5. **Test and Deploy**: Thoroughly test the new system for performance and reliability before full deployment.

6. **Document the System**: Provide comprehensive documentation to support future development and use of the scheduler.

