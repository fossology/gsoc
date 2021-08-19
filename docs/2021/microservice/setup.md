---
sidebar_position: 3
title: Setup
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Omar AbdelSamea <omarmohamed168@gmail.com>
-->

1. Install and run Kubernetes 
   1. install [minikube](https://minikube.sigs.k8s.io/docs/start/) or any alternative (k3s, kind, etc..)
   2. after succesful installation: 
      1. run `minikube start`
      2. run `eval $(minikube -p minikube docker-env)`
2. clone forked fossology repo https://github.com/OmarAbdelSamea/fossology
3. checkout to OmarAbdelSamea/GSoC/Microservices branch
4. Add all images to your machine
   - Option 1 (Suggested for testing)
     1. Download `fossology_images.tar` from [here](https://drive.google.com/file/d/16lMpzCzTCGyDzh3z2ebQ56sK2a9SoWjt/view?usp=sharing)
     2. run `docker load -i fossology_images.tar`
   - Option 2
     1. `cd Docker`
     2. Build all docker images. the list of all docker images will be found in [Docker Images](/gsoc/docs/2021/microservice/dockerImages) wiki page
     3. `cd ..`

5. run `kubectl apply -f k8s/`
6. got to UI
   - if you are using minikube run `minikube service web` and the UI will be opened in the default browser
7. to delete an agent from the cluster run `bash k8s/fo_delete.sh -a <agent-name>`
