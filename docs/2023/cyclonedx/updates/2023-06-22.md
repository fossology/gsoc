---
title: Week 4
author: Sushant Kumar
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2023 Sushant Kumar <sushantmishra02102002@gmail.com>
-->

*(June,22,2023)*

### Updates:

- This week, I successfully implemented the CycloneDX agent in Fossology.
- At the moment, I am able to add copyright information for file components in
  the report. However, I still need to implement the license part.
- A single component in the report looks like:
  ```json
        {
            "type": "file",
            "name": "Nirjas-master.zip/Nirjas-master/nirjas/languages/dart.py",
            "mime-type": "text/plain",
            "bomref": "55",
            "scope": "required",
            "hashes": [
                {
                    "alg": "SHA-1",
                    "content": "9EA23964D0840F9A9F2D1D5EB9AE317C7CFB9C72"
                },
                {
                    "alg": "MD5",
                    "content": "9B1050AAFB39D68A19467C969F3BDE5F"
                },
                {
                    "alg": "SHA-256",
                    "content": "61A1C1D4B00252D403EE0B60BE5C13A5B58795D702677B6E1973B084C5351992"
                }
            ],
            "copyright": "Copyright (C) 2020 Aman Dwivedi (aman.dwivedi5@gmail.com)"
        }
  ```

### Conclusion and further plans:

- In the upcoming weeks, I will work on adding license information for file
  components in the report.