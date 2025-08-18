---
title: Week 9
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, cmake, infrastructure, devops]

---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 9

*(July 29, 2025 – August 04, 2025)*

## Database Column Fixes
Earlier, the infrastructure was causing issues on running it locally at http://192.168.49.2:32035/ showing errors.![Database missing Column Issues](< databaseColumnIssues.png>)

I focused on resolving these missing database columns to make it running. I worked on adding some missing columns that were critical for the Web Agent to function correctly. After making these fixes, I also rebuilt the container images with the latest changes to keep everything up to date.
The missing columns are:

- `create_sysconfig.sql`
- `create_uploadtree.sql`
- `populate_sysconfig.sql`
- `additional_tables.sql`
- `create_additional_tables.sql`

## Scheduler Agent & Dependencies

Our main focus is currently on the Scheduler Agent, which plays a key role in coordinating other agents like `Ojo` and `Nomos`. In our weekly call, we discussed ways to strengthen its integration with these dependent agents. The scheduler tracks available agents, and for now, we’ve decided to continue with the **curl-based** approach, where it pings the master node to check agent status.

## Meeting 1:

*(July 30, 2025)*

### Attendees:

- [Avinal](https://github.com/avinal)
- [Shaheem Azmal M MD](https://github.com/shaheemazmalmmd)
- [Gaurav](https://github.com/gmishx)
- [Muhammad Salman](https://github.com/SalmanDeveloperz)

### Scheduler and Agent Tracking:

- The scheduler’s role is to keep track of which agents are available.

- We discussed replacing the current **curl-based** ping to the master node with a shared resource approach (shared volume).

- Curl approach → supports dynamic reloading (scheduler detects automatically).

- Shared volume approach → requires manual or controller-based reloads.

- Final agreement: for now, continue with **curl** since it’s working, then later explore shared volume.

### Focus on Getting Curl Running First:

[Avinal](https://github.com/avinal) asked whether we should continue making **curl-based** scheduling work. [Gaurav](https://github.com/gmishx) suggested to first get it into a running state with **curl**. Once stable, we can think about alternatives.

### Service Issues:

- [Avinal](https://github.com/avinal) pointed out a problem where installing certain dependencies starts services automatically.

- We discussed how this affects the setup, especially with PostgreSQL and other services.

### Binary vs. Services Approach:

- I suggested compiling agents as standalone binaries instead of depending on PostgreSQL inside the container.

- This would remove service requirements from each Dockerfile but needs significant rework.

- We also noted and understand by help of [Gaurav](https://github.com/gmishx) how environment variables and entrypoint scripts currently generate config files for agents.

### Dockerfile Updates:

- [Avinal](https://github.com/avinal) asked me to write a cleaner, optimal and updated **Dockerfile.ojo** , so he can tested on his end.

- I worked on **Dockerfile.ojo** and sent updated one after testing that on my end and fully compatible with the current **curl-based** scheduler setup to [Avinal](https://github.com/avinal) for testing.

## Meeting 2:  

*(July 24, 2025)*

In the community call, I explained about fixing the database issues, mainly adding the missing columns needed for the Web agent. I also rebuilt the images with these changes. Right now, our main blocker is still the **scheduler** agent and dependent agents like **ojo** and **nomos** and some other. We also discussed keeping **curl-based** checks for the agents’ status, and maybe simplifying the setup later, like using a standalone binary instead of relying on PostgreSQL inside the containers. 

## What’s Next for Week 10

- Get feedback of **Dockerfile.ojo** which I sent to mentor for testing with **curl-based** setup.
- Fix the scheduler pod’s database connectivity  
- Connect with mentors for planning final phase of work  
- Test all pods, agents and the UI in Minikube to confirm everything’s rock-solid.