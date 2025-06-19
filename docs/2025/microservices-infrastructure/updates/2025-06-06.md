---
title: Week 1
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, microservices, infrastructure, devops]

---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 1

*(June 2, 2025 - June 9, 2025)*

## Setup and Initial Configuration

I kicked off the 1st week by setting up a local development environment on Ubuntu 24.04. I installed Docker (v27.5.1) for building container images, Minikube for running a local Kubernetes cluster, and kubectl for managing the cluster. I cloned Omar’s [branch](https://github.com/OmarAbdelSamea/fossology) from GitHub. My goal was to rebase his Microservices Architecture onto the current codebase, make sure it works with recent updates. I followed all the installation [instructions](https://github.com/OmarAbdelSamea/fossology/wiki/02-Installation) for setup and found couple of challenges.


## Challenges Encountered

- **Docker build errors**: I updated <code>debian/changelog</code> to resolve version conflicts and rebuild the base image, to make sure all .deb files were included. I adjusted <code>Dockerfile.pkg</code> and <code>fo-build</code> to fix dependency issues, switching from outdated scripts to current build contexts. To address the web UI issue, I verified file paths and updated the web Dockerfile.

- **Etcd Pods**: I switched from <code>quay.io/coreos/etcd:latest</code> to <code>v3.5.15</code> and reloaded the image into Minikube.

- **Kubernetes API Issues**: Faced intermittent Kubernetes API issues (no route to host on *192.168.49.2:8443*), requiring Minikube restarts.

- **Docker Build Failures**: The provided list of [images](https://github.com/OmarAbdelSamea/fossology/wiki/18-List-of-Docker-Images) causes failed and not build successfully.

- **Web UI Issue**: The UI at http://192.168.49.2:31623 shows the default Apache2 Debian page, not Fossology’s UI, despite <code>index.php</code> in <code>/var/www/html/</code>.


## Meeting 1

*(June 4, 2025)*

I had weekly meet with my mentors, [Avinal](https://github.com/avinal) and [Shaheem](https://github.com/shaheemazmalmmd). I shared my screen to show the errors I was facing, the Docker build failures, pod issues and by default debain screen issue. They suggested switching from <code>buster-slim</code> to <code>bookworm-slim</code> as a Debian base image, because <code>buster-slim</code> reached its end of life in 2023. However, as per initial guidance of [Shaheem](https://github.com/shaheemazmalmmd), I had started with <code>buster-slim</code>. [Avinal](https://github.com/avinal) gave me two weeks time to complete the setup and troubleshoot, setting a clear timeline.

## Meeting 2

*(On June 5, 2025)*

I attended the weekly community meeting with contributors and mentors. I shared my progress, including the intensive setup efforts and challenges like the Debian default screen and etcd issues. I also sent a detailed message to my mentor (included above) to discuss during the meeting, asking for guidance on fixing the UI, etcd setup and pod stability. The community provided valuable insights and suggestions.

## Planning Next Week

For Week 2, I plan to:-

- Build all Docker images successfully.

- Complete the setup process.

- Identify and resolve new issues, particularly the UI and database errors.

- Test the scheduler
