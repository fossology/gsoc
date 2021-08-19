---
sidebar_position: 4
title: Docker Images
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Omar AbdelSamea <omarmohamed168@gmail.com>
-->

### Base Image
#### Tag
fossology/packages
#### Build Command 
`docker build -f Dockerfile.pkg . -t fossology/packages:latest`

### Scheduler
#### Tag
fossology/scheduler
#### Build Command 
`docker build -f Dockerfile.scheduler . -t fossology/scheduler:latest`

### web
#### Tag
fossology/web
#### Build Command 
`docker build -f Dockerfile.web . -t fossology/web:latest`

### Agents
- #### ununpack
##### Tag
fossology/ununpack
##### Build Command 
`docker build -f Dockerfile.ununpack . -t fossology/ununpack:latest`
- #### wget_agent
##### Tag
fossology/wgetagent
##### Build Command 
`docker build -f Dockerfile.wgetagnet . -t fossology/wgetagent:latest`
- #### nomos
##### Tag
fossology/nomos
##### Build Command 
`docker build -f Dockerfile.nomos . -t fossology/nomos:latest`
- #### copyright
##### Tag
fossology/copyright
##### Build Command 
`docker build -f Dockerfile.copyright . -t fossology/copyright:latest`
- #### ojo
##### Tag
fossology/ojo
##### Build Command 
`docker build -f Dockerfile.ojo . -t fossology/ojo:latest`