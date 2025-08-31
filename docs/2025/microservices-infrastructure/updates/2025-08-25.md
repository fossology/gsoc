---
title: Week 12
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, scheduler, infrastructure, devops]
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 12

*(August 19, 2025 – August 25, 2025)*

## Scheduler Agent Work

This week, despite exploring multiple approaches, the scheduler is **still not fully functioning as expected**. This has been the main challenge and blocker in pushing other dependent services forward.  

### Key Challenges Faced:
- Path mismatches related to **`fo_scheduler` install paths**, which created uncertainty in the setup.  
- Deciding between continuing with the **existing scheduler implementation** or starting **fresh from scratch** to avoid legacy issues.  
- Lack of clarity on **evaluation metrics**, e.g., whether to focus on *job queue performance*, *agent execution times* or *resource usage* in a containerized setup.  

At this point, I am leaning towards **rebuilding the scheduler from scratch** as it seems like the more sustainable path forward, but I am awaiting mentor guidance to ensure alignment.  

Overall, while the scheduler has not yet reached a running state, the time invested has helped surface **important blockers and open questions** that must be addressed before progress can be made.

## Open Questions / Confusions

During my work this week, I noted down a couple of key confusions that need mentor input:

> 📌 Based on my research in the wiki and older methods for scheduler, what is the correct handling of **install path mismatches** for **`fo_scheduler`**?  

> 📌 What **metrics** should we prioritize (e.g., job queue performance, task throughput, resource usage) to evaluate the scheduler in a containerized microservices setup?  

Resolving these will help me focus my efforts in the upcoming weeks and avoid wasting time in the wrong direction.

## Kustomization & Infrastructure

While the bulk of my time was on the scheduler, I continued revisiting my **Kustomization setup** from Week 11. This structure will be useful once the scheduler stabilizes, as it ensures we can maintain both **dev** and **prod** overlays with cleaner configurations.

I also reviewed some Dockerfiles, but this work will be resumed in later weeks once the scheduler issue is clarified.

## Collaboration and Mentorship

- I actively discussed progress and blockers with [Avinal](https://github.com/avinal). We explored different approaches for the scheduler (**Reuse vs. Rebuild**). The consensus so far is to carefully evaluate before committing to a rebuild.  
- [Omar](https://github.com/OmarAbdelSamea) is still pending to respond, but his past GSoC experience could bring valuable input. 

## Meeting 1

*(August 20, 2025)*  

The call did not take place due to the unavailability of [Avinal](https://github.com/avinal).  

## Meeting 2

*(August 21, 2025)*  

In the weekly community meeting call, I shared my updates:

- Tried different approaches but it is still not working as expected  
- Dedicated time to make the **Scheduler pod** run  
- Raised confusions regarding **install paths** and **evaluation metrics**  
- Suggested that a **fresh rebuild of the scheduler** might be more reasonable moving forward  
- Highlighted that I am still seeking guidance to refine my direction  

I concluded my update by handing over to [Avinal](https://github.com/avinal) for further discussion.  

