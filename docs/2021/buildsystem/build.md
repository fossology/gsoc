---
sidebar_position: 3
title: Building FOSSology
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Avinal Kumar <avinal.xlvii@gmail.com>
-->

Install CMake if you haven't already (minimum 3.10 required)

```bash
    sudo apt install CMake # for Debian based systems
```

1.  Since the new build system is still in review. You must fork
    FOSSology and pull the
    [\#2075](https://github.com/fossology/fossology/pull/2075) pull
    request branch. Once you are in FOSSology root, run these commands.

    ```bash
    git fetch https://github.com/avinal/fossology avinal/feat/buildsystem:buildsystem
    git checkout buildsystem
    ```

2.  The first step towards building is to create a temporary directory
    for storing intermediate files and build artifacts. By convention we
    use a directory named `build`, but you can use any
    name. (**NOTE: For testing do not use other names**)

    ```bash
    mkdir build
    cd build
    ```

3.  In the next steps, we will configure the CMake project and generate
    the required configurations. You can use several flags to control
    the build. Given below are the flags available for this project.

| CMake Flags            | Description                  | Default     |
| --- | --- | --- |
| **-DCMAKE_INSTALL_PREFIX=\<path\>** | Sets the install prefix. | `/usr/local` |
| **-DAGENTS="agent1;agent2..."** | Only configure these agents. | ALL AGENTS  |
| **-DOFFLINE=\<ON/OFF\>** | Controls vendor generation, ON=NO  | **OFF**     |
| **-DCMAKE_BUILD_TYPE=\<type\>** | -   `Debug`, `Release`, `RelWithDebInfo`,`MinSizeRel`     | `Debug` |
| **-DTESTING=\<ON/OFF\>** | Controls testing config generation    | **OFF**   |
| **-DMONOPACK=\<ON/OFF\>** | Package adj2nest and ununpack seperately        | **OFF**     |
| **-GNinja**            | Use Ninja instead of Unix Makefiles   | *Unix MakeFiles*      |

There are lots of inbuilt CMake command-line options you can see them in the official [documentation](https://cmake.org/cmake/help/v3.10/manual/cmake.1.html). Once you have chosen your flags we can now configure the project using the following commands.

```bash
# From build folder
cd <name-of-build-directory>
cmake <flags> ..
```

4 .  The next step is to build the project. You can use parallel jobs to build faster. For more options you can type `cmake --help` or `make --help` or `ninja --help`.

```bash
# Common build command for all generators,
# Default number of parallel builds depends on generator used
cmake --build . --parallel <no-of-processes>

# For Unix Makefiles, no parallel build by default
make -j <no-of-processes>

# For Ninja, 8+ parallel build by default (depends on system)
ninja -j <no-of-processes>
```

5.  Installing is also as easy as building. You can choose to install
    only certain components even if you have built the whole project. If
    you directly invoke the install command without building the
    project, it will automatically build the project first.

    ```bash
    # For Unix Makefiles
    make install

    # For Ninja
    ninja install
    ```

6.  While testing has some issues, but most of the testing is working
    fine. For now, you must build and run any test from the FOSSology
    root directory only. You can choose to configure a single agent if
    you want to test one agent only. See `ctest --help` for
    controlling test runs.

    ```bash
    # Common testing command
    ctest --parallel <no-of-processes>

    # For Unix Makefiles
    make test

    # For Ninja
    ninja test
    ```

7.  You can package FOSSology, the packaging currently lacks copyright
    and conf files. But for testing purposes, you can use the following
    commands. Similar to installing, if you run the package command
    without building the project, it will automatically build the
    project first. See `cpack --help` for more packaging
    options.

    ```bash
    # Common testing command
    cpack

    # For Unix Makefiles
    make package

    # For Ninja
    ninja package
    ```
8. Some targets are not built by default, you can manually trigger their build by running `make ,target-name>` or `ninja <target-name>`. You can list all the targets by running `make help` or `ninja -t targets`.

9. You can also use [CMake EXtension for VS Code](https://code.visualstudio.com/docs/cpp/cmake-linux) for seamlessly populating and building targets. Can also use gitpod.io for quick setup
