---
title: Week 8
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, cmake, infrastructure, devops]

---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 8

*(July 22, 2025 – July 28, 2025)*

## Nailed the CMake Transition:

I rebuilt all Docker images and Kubernetes pods using the new **CMake** setup. We’re now using **Debian Bookworm** in all images, and the build process is much cleaner and more maintainable. Almost everything is now running on the updated setup.

## Revert to Minikube:

We decided to **switch back from Kind to Minikube** due to some issues and limitations with Kind. I reverted to Minikube and set up a fresh Minikube cluster, redeployed all pods with `kubectl apply -f k8s/`, and confirmed they’re Running with `kubectl get pods`. The FOSSology UI will stable at http://192.168.49.2:30745 once all agents done and Minikube’s keeping things smooth.

## Syncing with Master branch

After the last mentor call, and following [Avinal](https://github.com/avinal)’s suggestions, I updated the `src/` folder to match the latest changes from the master branch. 

**Files Modified:**
- `fossology/src/lib/c/libfossdb.c`  
- `fossology/src/scheduler/agent/agent.c`  
- `fossology/src/scheduler/agent/agent.h`  
- `fossology/src/scheduler/agent/database.c`  
- `fossology/src/scheduler/agent/host.c`  
- `fossology/src/scheduler/agent/host.h`  
- `fossology/src/scheduler/agent/scheduler.c`

After syncing, I rebuilt all images to make sure everything was working properly.

## Writing Docker and Kubernetes Files for Missing Agents

While reviewing `CMakeLists.txt`, We noticed several agents were listed but didn’t have Dockerfiles or Kubernetes configs. These were added back in 2021, but the infrastructure files were missing. So I started writing those for the following to take start:

- `cyclonedx`  
- `deagent`  
- `readmeoss`  
- `scanoss` 

## Scheduler Pod Issue:

Right now, We're mainly focusing on the **scheduler pod**, which has a complex setup due to its connection with the database and most of the agents are dependent on it. We're working to resolve the issues we’re seeing there.

## Meeting 1:

*(July 23, 2025)*

In my weekly call with [Avinal](https://github.com/avinal), We discuss about:

- Rebuilding images using CMake  
- Updating the `src/` folder with the latest master  
- Problems with Kind, and switching back to Minikube  
- Issues with the scheduler pod  

He suggested writing missing Docker and Kubernetes files for the agents mentioned in `CMakeLists.txt`.

## Meeting 2: 

*(July 24, 2025)*

In the community call, I gave a demo of my progress so far. I explained:

- How I moved everything to CMake  
- Dockerfiles and Kubernetes files for missing agents
- Image I build and syncing with master  
- Current scheduler pod issues  

## What’s Next for Week 9

- Finish writing Docker and Kubernetes files for the remaining agents  
- Fix the scheduler pod’s database connectivity  
- Connect with mentors for planning final phase of work  

