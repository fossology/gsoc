---
sidebar_position: 4
title: Introduction
slug: /2025/licensedb-platform/
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2025 Chayan Das <01chayandas@gmail.com>
-->


## Author

- [Chayan Das](https://github.com/chayandass)
  - [Email](mailto:01chayandas@gmail.com)
  - [LinkedIn](https://www.linkedin.com/in/chayandas0110/)


## Project title


licenseDB platform improvement 
## What the project is about


This project aims to enhance the LicenseDB platform by improving its backend architecture, user experience, and maintainability. It focuses on enabling advanced text comparison features, supporting modern API standards, implementing authentication enhancements, and improving developer workflows with better testing and logging.
## What should be done




1. **Levenshtein Distance Implementation:**
   - Integrate a Levenshtein distance algorithm to compare newly submitted license or obligation texts with existing ones.
   - Return a similarity score and a list of similar licenses/obligations based on a threshold.
   - Display these similarities in the UI for better decision-making.


2. **Database Migration Support:**
   - Integrate [golang-migrate/migrate](https://github.com/golang-migrate/migrate) into the backend for schema versioning.
   - Create migration scripts for initial and incremental schema changes.
   - Document the migration process and setup for contributors.


3. **Email Notification System:**
   - Set up an email notification system to alert admins and creators when a license is updated.
   - Fetch and notify relevant stakeholders, including creators of projects using the affected license.
   - Ensure email templates are clear, localized if necessary, and properly logged.


4. **Monorepo Setup:**
   - Create a new monorepo structure that combines the backend and frontend for easier maintenance.
   - Configure build and deployment pipelines for the monorepo setup.
   - Refactor existing modules to ensure compatibility within the monorepo structure.


5. **Refresh Token Functionality:**
   - Implement refresh token logic to extend session duration securely.
   - Add secure storage and rotation mechanisms for refresh tokens.
   - Update the authentication middleware and client handling to support token refresh.


6. **Swagger 3.0 Support:**
   - Integrate a Swagger 3.0-compatible package for auto-generating API documentation.
   - Ensure all routes are documented with proper request/response formats and error handling.


7. **Endpoint Improvements:**
   - Add changelog support for license and user-related endpoints to track updates.
   - Provide top X licenses or obligations with similar content for comparison.
   - Standardize REST API responses and improve structured logging for better observability.


8. **Test Case Coverage:**
   - Increase unit, functional, and API test coverage across modules.
   - Write test cases for edge scenarios, failure modes, and integration flows.
   - Add continuous integration steps for running tests on each commit or pull request.


9. **Rich Text Editor Integration:** (extra)
    - Integrate a modern rich text editor (e.g., [QuillJS](https://quilljs.com/)) into the license/obligation editing interface.
    - Support formatting features like markdown, bold, italics, and lists.
    - Ensure the backend supports rich text storage and retrieval securely and efficiently.