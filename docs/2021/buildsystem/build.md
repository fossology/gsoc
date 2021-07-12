---
sidebar_position: 3
title: Building FOSSology
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Avinal Kumar <avinal.xlvii@gmail.com>
-->

1. Install CMake if you haven't already (minimum 3.10 required)

```bash
    sudo apt install CMake # for Debian based systems
```
2. check out the development branch (avinal/feat/cmake-buildsystem) inside fossology repo

```bash
    git checkout avinal/feat/cmake-buildsystem
```
3. Run the following commands in succession
```bash
    mkdir build && cd build
    cmake .. # default on most systems is make
    make -j<no-of-parallel-process> # default is zero
```

or with ninja
```bash
    mkdir build && cd build
    cmake .. -GNinja
    ninja -j<no-of-parallel-process> # default is 10
```

4. Or you can directly run the following command to build and install
```bash
    mkdir build && cd build
    cmake .. # default on most systems is make
    make install -j<no-of-parallel-process> # default is zero
```

or with ninja
```bash
    mkdir build && cd build
    cmake .. -GNinja
    ninja install -j<no-of-parallel-process> # default depends on system (10+ generally)
```
**NOTE:** The targets will be installed in the `/usr/local` directory. To change that run the configuration step with `-DCMAKE_INSTALL_PREFIX=<your-install-path>` option

5. Some targets are not built by default, you can manually trigger their build by running `make ,target-name>` or `ninja <target-name>`. You can list all the targets by running `make help` or `ninja -t targets`.  

6. You can also use [CMake EXtension for VS Code](https://code.visualstudio.com/docs/cpp/cmake-linux) for seamlessly populating and building targets. Can also use gitpod.io for quick setup

