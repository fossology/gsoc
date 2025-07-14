---
sidebar_position: 3
title: Introduction
slug: /2025/debian-packaging/
---

## Author:

[Ahmed Gamal](https://github.com/Ahmed-Gamal24)

## Contact Info:

- [Email](mailto:ahmed.gamal9541@gmail.com)
- [GitHub](https://github.com/Ahmed-Gamal24)
- [LinkedIn](https://www.linkedin.com/in/ahmed-gamal4/)

## Project Title:

Enhancing Debian Packaging for FOSSology

## What's the project about?

The goal of this project is to improve and modernize the **Debian packaging** of [FOSSology](https://www.fossology.org/), an open-source license compliance software system. The project ensures that FOSSology can be built, installed, and distributed efficiently using native Debian tools and standards.

The final result will be a set of `.deb` packages that can be uploaded to Debian or used internally, making FOSSology easier to install and maintain in Debian-based systems. This includes handling dependencies, restructuring packaging files, adopting CMake build system integration, and ensuring compatibility with tools like `gbp`, `pbuilder`, and `lintian`.

---

## Key Deliverables

### Modernize Debian Packaging Structure

- Integrate the latest **CMake-based build system** with Debian's `dh_auto_*` tools.
- Remove reliance on custom `Makefile` or manual install scripts where possible.
- Replace outdated packaging patterns with streamlined `debhelper` configurations.

### Produce Multiple Binary Packages

- Split FOSSology into modular `.deb` packages (e.g., `fossology-common`, `fossology-web`, `fossology-db`, etc.) for better package management.
- Ensure inter-package dependencies are declared properly via `control` file.

### Clean and Validate Packaging Files

- Audit and update `debian/control`, `rules`, `changelog`, `.install`, and `.patches`.
- Remove unused files and redundant overrides.
- Follow Debian Policy standards and fix all `lintian` warnings.

### Automate and Test the Build Process

- Use tools like `pbuilder` and `gbp buildpackage` to build in a clean chroot environment.
- Ensure reproducible builds.
- Simulate real-world installation and test core functionalities.

### Documentation and Community Updates

- Maintain progress documentation weekly in the [FOSSology GSoC GitHub repo](https://github.com/fossology/gsoc).
- Share insights, blockers, and achievements.
- Contribute helpful guides and notes for future Debian maintainers of FOSSology.

---

## Stretch Goals

- Package PHP and JS dependencies using native Debian packaging techniques (e.g., using `composer` and `npm2deb`).
- Explore integration into Debian's official archive (mentorship permitting).
- Create a user-friendly script or guide to build and install all packages with a single command.

---

> This project bridges FOSSology with the Debian ecosystem, making license compliance tooling more accessible and easier to deploy across free software distributions.