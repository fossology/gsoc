"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[5015],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},72735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"2023/copyrights/updates/2023-10-18","title":"Week 21","description":"\x3c!--","source":"@site/docs/2023/copyrights/updates/2023-10-18.md","sourceDirName":"2023/copyrights/updates","slug":"/2023/copyrights/updates/2023-10-18","permalink":"/gsoc/docs/2023/copyrights/updates/2023-10-18","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2023/copyrights/updates/2023-10-18.md","tags":[],"version":"current","frontMatter":{"title":"Week 21","author":"Abdelrahman Jamal"},"sidebar":"2023","previous":{"title":"Week 20","permalink":"/gsoc/docs/2023/copyrights/updates/2023-10-11"},"next":{"title":"Week 22","permalink":"/gsoc/docs/2023/copyrights/updates/2023-10-25"}}');var s=n(74848),r=n(28453);const o={title:"Week 21",author:"Abdelrahman Jamal"},l=void 0,a={},d=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates:",id:"updates",level:2},{value:"1. <strong>Re-evaluation of the Existing Model</strong>:",id:"1-re-evaluation-of-the-existing-model",level:3},{value:"2. <strong>Data Labeling and Refinement</strong>:",id:"2-data-labeling-and-refinement",level:3},{value:"3. <strong>Optimization Strategy</strong>:",id:"3-optimization-strategy",level:3},{value:"4. <strong>Putting the Model to Test</strong>:",id:"4-putting-the-model-to-test",level:3},{value:"Conclusion and further plans:",id:"conclusion-and-further-plans",level:2},{value:"1. Decluttering Improvements",id:"1-decluttering-improvements",level:3},{value:"2. Documentation",id:"2-documentation",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"(October,18,2023)"})}),"\n",(0,s.jsx)(t.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Hero2323",children:"Abdelrahman"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"updates",children:"Updates:"}),"\n",(0,s.jsxs)(t.h3,{id:"1-re-evaluation-of-the-existing-model",children:["1. ",(0,s.jsx)(t.strong,{children:"Re-evaluation of the Existing Model"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Upon a thorough review of the previously developed decluttering model, I identified a significant issue in the approach I adopted. Specifically, the semi-supervised learning technique utilized earlier had not been applied with adequate scrutiny to the dataset. As a result, the dataset contained an excessive number of inaccurately labeled examples, adversely affecting the model's performance."}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"2-data-labeling-and-refinement",children:["2. ",(0,s.jsx)(t.strong,{children:"Data Labeling and Refinement"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"To rectify the identified discrepancies, I undertook the task of labeling a new dataset comprising 4,000 diverse examples. This process was assisted by the model to ensure the accuracy of labels. The objective was to establish a robust dataset, devoid of labeling errors, which could be reliably used to gauge the model's performance."}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"3-optimization-strategy",children:["3. ",(0,s.jsx)(t.strong,{children:"Optimization Strategy"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"During this labeling phase, I adopted a systematic strategy to mitigate the recurrence of previously observed issues, particularly the repetitive copyright statements. Consequently, this dataset, though numbering 4,000 examples, effectively offers the richness of approximately 6,000 to 7,000 samples when benchmarked against the former labeling methodology."}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"4-putting-the-model-to-test",children:["4. ",(0,s.jsx)(t.strong,{children:"Putting the Model to Test"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"I decided to evaluate the refined model on new datasets - copyrights from ansible, cassandra, and vscode repositories:"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Ansible"}),": Here, the results were mixed. While the model performed reasonably in some cases, it exhibited challenges in accurately identifying GNU license instances:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"'Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>'"})," Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed."]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Copyright 2019 Ansible Project GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"(c) 2014, James Tanner <tanner.jc@gmail.com>"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"(c) 2017 Ansible Project GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt) from __future__ import (absolute_import, division, print_function) metaclass__"})," = type"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"(c) 2013, bleader Written by bleader <bleader@ratonland.org> Based on"})," pkgin module written by Shaun Zinck\nthat was based on pacman module written by Afterburn <",(0,s.jsx)(t.a,{href:"https://github.com/afterburn",children:"https://github.com/afterburn"}),"> that was based on apt\nmodule written by Matthew Williams <matthew@flowrout>"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cassandra"}),": Again, the model demonstrated varied performance. While it succeeded in some instances, it missed out on others, particularly the ones with repeated patterns:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"(c) 2005, 2014 jQuery Foundation, Inc."})," | jquery.org/license */"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"(c) Steven Levithan <stevenlevithan.com>"})," MIT License"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Copyright 2005-2008 The Android Open Source Project This product includes software developed as part of The Android Open Source Project"})," (",(0,s.jsx)(t.a,{href:"http://source.android.com",children:"http://source.android.com"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Copyright \xa9 2020 Jeff Carpenter, Eben Hewitt."})," All rights reserved. Used with permission._"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Copyright &amp;copy; 2009- The Apache Software Foundation"}),' " useexternalfile="yes" encoding="UTF-8"\nfailonerror="false" maxmemory="256m" additionalparam="${jdk11plus-javadoc-exports}"> filesets/> javadoc>\nfail message="javadoc failed"> condition>']}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:'\xa9 2018 DataStax", "", "\\n", "\\0", "\\0\\0", "\\001", "0", "0\\0", "00", "1") forEach(stringConsumer)'})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"copyright to Philip Koopman"})," , which he licenses under the Creative Commons Attribution 4.0 International License (",(0,s.jsx)(t.a,{href:"https://creativecommons.org/licenses/by/4.0",children:"https://creativecommons.org/licenses/by/4.0"}),")"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"Copyright (c) 1998 Hewlett-Packard CompanydescsRGB IEC61966-2.1sRGB IEC61966-2.1XYZ \xf3Q \xccXYZ XYZ o\xa28\xf5XYZ b\xb7\xdaXYZ $ \xb6\xcfdescIEC http://www.iec.chIEC"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"VScode"}),": A similar trend was observed here. Some instances were accurately identified, whereas others were overlooked:","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Copyright (c) Microsoft Corporation."})," All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information."]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:'Copyright (c) textmate-diff.tmbundle project authors",'})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"copyrightCopyright Apple Inc., 2016\xc8\xf4(FtEXticc:descriptionDisplay \xb8IEND\xaeB"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'Copyright (c) 2002-2020 K.Kosako <kkosako0@gmail.com> "'}),', All rights reserved.",']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Copyright (C) Microsoft Corporation."})," All rights reserved. \xb1 t ",(0,s.jsx)(t.code,{children:"Copyright (C) Microsoft Corporation."})," All rights reserved. l\xff\xfc \xff\xfc C=------------------------------------------------------------- \xb1"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Copyright (c) 2011 Fabrice Bellard The original design remains. The terminal itself has been extended to include xterm CSI codes, among other features"})," ."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Copyright \xa9 2015 W3C\xae (MIT, ERCIM, Keio, Beihang)"}),' . This software or document includes material copied ", from or derived from HTML 5.1 W3C Working Draft (',(0,s.jsx)(t.a,{href:"http://www.w3.org/TR/2015/WD-html51-20151008/",children:"http://www.w3.org/TR/2015/WD-html51-20151008/"}),'.)",']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Feedback Session"}),": After showcasing these outcomes to Kaushlendra, he articulated that the model would greatly benefit from an even more expansive dataset. A corpus larger than the current 4,000 examples is essential for the model to effectively generalize across diverse variations."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion-and-further-plans",children:"Conclusion and further plans:"}),"\n",(0,s.jsx)(t.h3,{id:"1-decluttering-improvements",children:"1. Decluttering Improvements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Improve the decluttering model as much as I can while working on the documentation"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"2-documentation",children:"2. Documentation"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Work on finilzating the weekly documentation as GSoC is coming to an end."}),"\n",(0,s.jsx)(t.li,{children:"Start working on the GSoC final report."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);