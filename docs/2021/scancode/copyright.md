---
sidebar_position: 4
title: Copyright UI 
author: Sarita
---
<!--
SPDX-License-Identifier: CC-BY-SA-4.0

SPDX-FileCopyrightText: 2021 Sarita Singh <saritasingh.0425@gmail.com>
-->

`Date:2021-06-28`

### Attendees

- [Gaurav Mishra ](https://github.com/GMishx)
- [Anupam Ghosh ](https://github.com/ag4ums)
- [Michael C. Jaeger](https://github.com/mcjaeger)
- [Shaheem Azmal ](https://github.com/shaheemazmalmmd)
- [Ayush Bhardwaj ](https://github.com/hastagAB)
- [Avinal Kumar ](https://github.com/avinal)
- [Sarita Singh ](https://github.com/itssingh)

### Discussions

- About Copyright UI (Explained by Gaurav)
    - Starting with copyright-hist, there are two types of content `statement`, coming from the copyright agent and `copyFindings` which is manual finding added by user form fossology UI.
    - HistogramBase is the base class for copyright-hist as well as email-hist.
    - In template there is `DataTables` plug-in used which add some advanced feature to HTML tables like Pagination, Instant search, sorting, Use almost any data source.
    - ajax-copyright-hist has collection of functions for different task like update, delete, undo and depending upon the call, function returns `JsonResponse`.
    - When there is an API call(GET/POST request), JavaScript functions in the template folder calls ajax and depending upon type of action, ajax fetch data from database and return in JSON response. These JSON responses are rendered on UI.
    - Like c/cpp main function, FOSSology has <a href= "https://github.com/fossology/fossology/blob/master/src/copyright/ui/HistogramBase.php#L187-L287"> Output function</a> which defines the entry point. We check in this function that what is the thing that user wants to do.
- About Copyright and Author table for ScanCode
    - Two separate tables would be good.
    - Number of agent scanning copyright is increasing.
    - `agent_fk` in the copyright table is used to  know the version of copyright agent.
    - Functionality to disable copyright should be there.
    - Using same table, reporting would be straight away but using different table would be hectic to add reporting.
    - There would be speed, reporting issues.
    - In case of different tables there could be repetition in the copyright data in fossology finding and scancode finding.
    - Growing data over years could be one of the main reason to keep table separate.

### Conclusion and Further Plans

- Start with copyright-hist and email-hist then move to ajax and template.
- FOSSology uses Output function as the main function(entry point).
- In Initial development we can keep separate tables for fossology copyright and scancode copyright, users can select which agent report they want to see. Later on, based on the performance of these agents we can think of removing redundant data by merging these tables or any other idea.
