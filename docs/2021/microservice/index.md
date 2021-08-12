---
sidebar_position: 1
title: Introduction
slug: /2021/microservice/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Omar AbdelSamea <omarmohamed168@gmail.com>
-->
# Author
Omar AbdelSamea

# Contact Info
- [Email](mailto:omarmohamed168@gmail.com)
- [Linked In](https://www.linkedin.com/in/omarmohamed1999/)
- [GitHub](https://github.com/OmarAbdelSamea)

# Project Description

FOSSology is designed in modular fashion but it certainly does not follow micro-service architecture. If there is a change in an agent's logic, the whole source code has to be built again and installed. Whereas in micro-service architecture, only this agent needs to be built and installed/deployed.

## Current Draw backs of installing FOSSology in cluster mode

- When adding or removing a node, scheduler needs to be restarted.
- Every node needs to have same set of agents.
- Because of the current version check mechanism on scheduler, for a single change, the whole code base needs to be redeployed to get new version string.

## Project Goal
- Ability to add one agent to each node for easier updating and scaling.
- Dynamically adding new nodes without the need to restart or stop the scheduler
- Kubernetes deployment for easy scaling in or out
