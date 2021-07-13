---
sidebar_position: 3
title: Installation
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Aman Dwivedi <aman.dwivedi5@gmail.com>
SPDX-FileCopyrightText: 2021 Shruti Agarwal <mail2shruti.ag@gmail.com>
-->
## Requirements :scroll:

1. Your machine should have [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (preferable) or [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

2. A working [FOSSology](https://github.com/fossology/fossology#installation) setup.

3. Setup CORS in FOSSology 
- Open FOSSology and go to Admin > Customize.
- Look out for "Allowed origins for REST API"
- Set the value to "http://localhost:3000"

![image](/img/reactUI/installation/CorsSetup.png)

## Installation Steps :walking:

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [FOSSologyUI](https://github.com/fossology/FOSSologyUI) by using the <kbd><b>Fork</b></kbd> button.

[![Fork Button](/img/reactUI/installation/forkButton.jpg)](https://github.com/fossology/FOSSologyUI)

### 2. Clone it :busts_in_silhouette:

You need to clone (download) it to a local machine using

```sh
git clone https://github.com/Your_Username/FOSSologyUI.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `FOSSologyUI` repository in GitHub, move to that folder first using the change directory command.

```sh
# This will change directory to a folder FOSSologyUI
cd FOSSologyUI
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that _your local copy_ has a reference to _your forked remote repository_ in GitHub :octocat:

```sh
git remote -v
origin  https://github.com/Your_Username/FOSSologyUI.git (fetch)
origin  https://github.com/Your_Username/FOSSologyUI.git (push)
```

Now, add a reference to the original [FOSSologyUI](https://github.com/fossology/FOSSologyUI) repository using

```sh
git remote add upstream https://github.com/fossology/FOSSologyUI.git
```

> This adds a new remote named **_upstream_**.

See the changes using

```sh
git remote -v
origin    https://github.com/Your_Username/FOSSologyUI.git (fetch)
origin    https://github.com/Your_Username/FOSSologyUI.git (push)
upstream  https://github.com/fossology/FOSSologyUI.git (fetch)
upstream  https://github.com/fossology/FOSSologyUI.git (push)
```

### 4. Run it :checkered_flag:

Using Yarn (preferable)
```sh
# To install all the dependencies
yarn install

# To start the application
yarn start
```

**OR** 

using NPM
```sh
# To install all the dependencies
npm install

# To start the application
npm start
```
The React application will start on port 3000.
Go to: http://localhost:3000
