---
title: Week 13
author: Muhammad Salman
author_url: https://github.com/SalmanDeveloperz
tags: [gsoc25, scheduler, infrastructure, devops]
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyright Text: 2025 Muhammad Salman <chsalmanramzan422@gmail.com>
-->

# Week 13

*(August 26, 2025 – September 01, 2025)*

## Work Done
- Reviewed **Scheduler functionality** in both setups:
  - Rebased and partially ran the Scheduler from **Omar’s previous setup**.  
  - Started testing the Scheduler in the **new setup** with the latest branch as per decided with [Avinal](https://github.com/avinal).  
- Analyzed the **services, logs, and configuration flows** from the old setup and attempted to configure them similarly in the new setup.  
- Discovered that the **latest master branch** introduced changes:
  - Database migration issues.  
  - Agent-related errors.  
  - These prevent the Scheduler from running properly.  
- Continued working on the **Final Evaluation Documentation**, writing down:
  - Steps we tried.  
  - Issues discovered.  
  - Comparisons between setups.  

All changes are pushed to Omar’s forked repository under the following branch:

* https://github.com/SalmanDeveloperz/fossology/tree/OmarAbdelSamea/GSoC/Microservices

The associated commit can be viewed here:

* https://github.com/SalmanDeveloperz/fossology/commit/4fd4787936081c0c8db7df8e40d57e76e123a51a
---

## Meeting 1:

*(August 27, 2025)*

Meeting was missed because [Avinal](https://github.com/avinal) was unavailable (he was away from home). He asked me to prepare a document outlining the issues we have discovered so far and send it to them for feedback. 

## Meeting 2:

*(August 28, 2025)*

I presented my progress (detailed above) and explained the challenges with Scheduler, database migrations and agents in current state of infrastructure.


## Challenges
- Major differences between **previous setup vs. latest branch** made Scheduler migration harder.  
- **Database and agent issues** are blockers preventing smooth execution.  
- Need more time to design and implement a stable solution.

## Next Steps
Although the GSoC timeline has ended, I plan to:  
- Continue contributing to **FOSSology Microservices Infrastructure**.  
- Focus on solving the **Scheduler migration challenges**.  
- Work on **database migration and agent issues**.  
- Improve and refine **documentation** for new contributors.  
- Collaborate with the community to **design and implement** the pending parts of the project after critical evaluation.

---
## Final Note
While this report concludes my **official GSoC period**, it does not conclude my journey with **FOSSology**.  
The Microservices Infrastructure project is critical and still has a long way to go. I am fully determined to **keep contributing**, **improving** and **finishing what was started**.  

This is just the **end of GSoC**, not the end of my contributions 🚀.