---
title: Final Evaluation
author: Kavya Shukla
author_url: https://github.com/k-avy
tags: [license as a service, open source licensing]
---

<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Kavya Shukla <kavyuushukla59@gmail.com>
-->

## License as a Service

FOSSology is an open-source license compliance software system and toolkit. You
can run license, copyright, and export control scans from the command line as a
toolkit. We can also use it online where we can upload files or upload through a URL
where we can get a license from the repository or file.

License as a service provides a convenient and effective way for organizations to
manage their use of open-source licenses. With the growing popularity of open-source
software, organizations are finding it more difficult to keep track of the various
licenses and terms under which they are permitted to use open-source components.
Open-source licenses can be complicated, making it difficult to understand how they
apply to a specific piece of software or interact with other licenses. It can be
used for various purposes by organizations and tools like FOSSology and SW360 like
license identification, filtering, and managing licenses. There are benefits of this
service such as increasing flexibility, a faster time-to-access, and managing the database.

## What I did

### Project Structure

```bash
.
├── pkg                     
│   ├── utils               # folder for basic utilities of project
│   ├── models              # folder has a file that contains all the structs required in the project
│   ├── db                  # It has a file that connects and migerates the database
│   ├── auth                # It has all the functions related to authentication and users
│   └── api                 # It contains all the functions related to API endpoints.
└── cmd                     # This is the entry point of project 
    └── laas               
        └── main.go         # This function contains code to migrate db and run router function
```

### Database

I have made a database that has licenses, obligations, obligation map, users, their audits
and changes.

- License table has list of licenses and all the data related to the licenses.
- Obligations table has the list of obligations that are related to the licenses.
- Obligation map table that maps obligations to their respective licenses.
- User table has the user that are associated with the licenses.
- Audit table has the data of audits that are done in obligations or licenses
- Change log table has all the change history of a particular audit.

![alt text](./assets/fossy.png)

### APIs

There are various API endpoints that are of licenses, obligations, user and audit
endpoints.

### API endpoints

| #   | Method    | API Endpoints                      | Examples                              | Descriptions                                                                          |
| --- | --------- | ---------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------- |
| 1   | **GET**   | `/api/licenses/:shortname`         | /api/licenses/MIT                     | Gets all data related to licenses by their shortname                                  |
| 2   | **GET**   | `/api/licenses/`                   | /api/licenses/copyleft="t"&active="t" | Get filter the licenses as per the filters                                            |
| 3   | **POST**  | `/api/licenses`                    | /api/licenses                         | Create a license with unique shortname                                                |
| 4   | **POST**  | `/api/licenses/search`             | /api/licenses/search                  | Get the licenses with the post request where we put field, search term and type       |
| 5   | **PATCH** | `/api/licenses/:shortname`         | /api/licenses/MIT                     | It updates the particular fields as requested of the license with shortname           |
| 6   | **GET**   | `/api/users`                       | /api/users                            | Get all the users and their data                                                      |
| 7   | **GET**   | `/api/users/:id`                   | /api/users/1                          | Get data relate to user by its id                                                     |
| 8   | **POST**  | `/api/users`                       | /api/users                            | Create a user with unique data                                                        |
| 9   | **GET**   | `/api/obligations`                 | /api/obligations                      | Get all the obligations                                                               |
| 10  | **GET**   | `/api/obligation/:topic`           | /api/obligation/topic                 | Gets all data related to obligations by their topic                                   |
| 11  | **POST**  | `/api/obligations`                 | /api/obligations                      | Create an obligation as well as add it to obligation map                              |
| 12  | **PATCH** | `/api/obligations/:topic`          | /api/obligations                      | It updates the particular fields as requested of the obligation with topic            |
| 13  | **GET**   | `/api/audit`                       | /api/audit                            | Get the audit history of all the licenses and obligations                             |
| 14  | **GET**   | `/api/audit/:audit_id`             | /api/audit/1                          | Get the data of a particular audit by its id                                          |
| 15  | **GET**   | `/api/audit/:audit_id/changes`     | /api/audit/1/changes                  | Get the change logs of the particular audit id                                        |
| 16  | **GET**   | `/api/audit/:audit_id/changes/:id` | /api/audit/1/changes/2                | Get a particular change log of the particular audit id                                |

## Deliverables

- The project in which I was working is under FOSSology organization the repository is [LicenseDb](https://github.com/fossology/LicenseDb)
- Pull requests that I got merged are:
  - [Basic project structure is made.](https://github.com/fossology/LicenseDb/pull/2)
  - [chores: Added README.md and basic CI.](https://github.com/fossology/LicenseDb/pull/4)
  - [feat: added GET endpoints](https://github.com/fossology/LicenseDb/pull/9)
  - [feat: added create and update endpoints.](https://github.com/fossology/LicenseDb/pull/11)
  - [feat: added authentication in API and search endpoint.](https://github.com/fossology/LicenseDb/pull/12)
- Pull requests I am working on:
  - [feat: updated project structure and added basic test cases to project](https://github.com/fossology/LicenseDb/pull/13)
  - [feat: created audit and added change history.](https://github.com/fossology/LicenseDb/pull/14)
- Issues that I have worked on:
  - [Add migration code for populating database from json file.](https://github.com/fossology/LicenseDb/issues/5)
  - [Create basic CI and add the compilation instruction.](https://github.com/fossology/LicenseDb/issues/3)
  - [Basic endpoint requirements](https://github.com/fossology/LicenseDb/issues/1)
- [Weekly reports](https://fossology.github.io/gsoc/docs/2023/laas)
- All the proposed goals have been completed as well as I have also attempted the stretch goals.

## How to use this project

### Prerequisite

Please [install and set-up Golang](https://go.dev/doc/install) on your system
in advance.

### Build and install

- Clone this Project and Navigate to the folder.

``` bash
git clone https://github.com/fossology/LicenseDb.git
cd LicenseDb
```

- Build the project using following command.

```bash
go build ./cmd/laas
```

- Run the executable.

```bash
./laas
```

- You can directly run it by the following command.

```bash
go run ./cmd/laas
```

## What I have learned

During my participation in the Google Summer of Code (GSoC), I've gained valuable experience
in open-source development and collaboration. I've honed my coding skills, learned to work with
version control systems like Git, and become proficient in communicating with mentors and
the wider developer community. Through tackling real-world coding challenges, I've
deepened my understanding of software development best practices and gained insights
into project management.

The projects as whole was challenging as I have worked with basic APIs and have basic
knowledge databases. Then working with the database was much newer for me. As well as
Working with complex APIs and creating various endpoints was a difficult task as well.

Learned about database queries, different searches, authentication, complex API endpoints
and much more. Overall it was a great experience and lots of learning during the project.

## Acknowledgement

Google Summer of Code has been an incredibly transformative experience for me this year.
As I reflect on this journey, I am overwhelmed with gratitude for the people who
have been instrumental in my success and growth during this period.

First and foremost, I extend my heartfelt appreciation to my mentors: [Gaurav Mishra](https://github.com/GMishx),
[Sahil Jha](https://github.com/sjha2048), [Avinal Kumar](https://github.com/avinal),
and [Anupam Ghosh](https://github.com/ag4ums). Without their unwavering guidance, support,
and expertise, I truly believe that I would not have been able to achieve what I have.
Their patience, deep knowledge, and willingness to help have been the pillars upon which
I've built my progress. Their mentorship has not only imparted technical skills but
has also instilled in me a sense of confidence and direction.

A special mention goes to my college senior, [Avinal Kumar](https://github.com/avinal). Your consistent motivation
and belief in my abilities have been a driving force throughout this journey. Your insights
and encouragement have been invaluable, and I am grateful for your role in shaping my path.

The connections I've made with incredible developers from around the world have expanded my horizons,
and I look forward to the possibility of future collaborations. In all, Google Summer of Code
has been a transformative chapter in my life, and I am truly grateful for the collective
efforts of these outstanding individuals who have made it possible.