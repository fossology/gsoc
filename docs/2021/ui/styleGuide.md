---
sidebar_position: 4
title: Style Guide
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Aman Dwivedi <aman.dwivedi5@gmail.com>
-->

We are following the [Airbnb JavaScript Style Guide](https://airbnb.io/javascript/react/) for the FOSSology UI project.

[ESlint](https://eslint.org/docs/rules/) (a pluggable and configurable linter tool) and [Prettier](https://prettier.io/docs/en/) (an opinionated code formatter) are used to enforce the style guide.

## Coding Conventions

- All files using JSX syntax should have `.jsx` extension.

- Use Pascal case for naming React components.

- Use Camel case for the function name and variable name.

- Prefer using default export.

- Prefer using arrow functions.

- Prefer using functional components.

- Avoid using `PropTypes.array` or `PropTypes.object`. Instead use `PropTypes.arrayOf(PropTypes.string)` or `PropTypes.shape({id: PropTypes.number})` respectively.

## General Naming Convention

In the code and documentation prefer using non-offensive terminology, for example:

- `allowlist` / `denylist` (instead of `whitelist` / `blacklist`).
- `primary` / `replica` (instead of `master` / `slave`).
- `openbox` / `closedbox` (instead of `whitebox` / `blackbox`).

## Before making any pull request one should:

- Run `yarn fix:all` to fix all auto fixable errors and warnings.

- Run `yarn test` to run all react tests.

- Ensure that your commit contains a Signed-off-by line, also known as the **[Developer Certificate of Origin (DCO)](https://www.kernel.org/doc/Documentation/process/submitting-patches.rst)**.

- Ensure that you have added your name and email in the license headers of all the files that you have modified.