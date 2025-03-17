"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[5496],{28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}},94629:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"2024/GSoC-projects","title":"Google Summer of Code Proposals 2024","description":"\x3c!--","source":"@site/docs/2024/GSoC-projects.md","sourceDirName":"2024","slug":"/2024/GSoC-projects","permalink":"/gsoc/docs/2024/GSoC-projects","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2024/GSoC-projects.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Google Summer of Code Proposals 2024"},"sidebar":"2024","previous":{"title":"GSoC\'24 @ FOSSology","permalink":"/gsoc/docs/2024"},"next":{"title":"Introduction","permalink":"/gsoc/docs/2024/scheduler/"}}');var l=s(74848),i=s(28453);const r={sidebar_position:2,title:"Google Summer of Code Proposals 2024"},o=void 0,d={},h=[{value:"Intro",id:"intro",level:2},{value:"Interested in Application? - Getting Grip",id:"interested-in-application---getting-grip",level:2},{value:"Examples from past programs",id:"examples-from-past-programs",level:2},{value:"Mentors",id:"mentors",level:2},{value:"Proposals so far:",id:"proposals-so-far",level:4},{value:"Topic Proposals",id:"topic-proposals",level:2},{value:"Topic Proposals from 2024",id:"topic-proposals-from-2024",level:2},{value:"Improving FOSSology CI scanner image",id:"improving-fossology-ci-scanner-image",level:3},{value:"Support text phrases and bulk based scanning for MONK a like agent",id:"support-text-phrases-and-bulk-based-scanning-for-monk-a-like-agent",level:3},{value:"SPDX license expression support",id:"spdx-license-expression-support",level:3},{value:"Overhauling scheduler design",id:"overhauling-scheduler-design",level:3},{value:"Debian packaging for Debian repository",id:"debian-packaging-for-debian-repository",level:3},{value:"REST API improvements",id:"rest-api-improvements",level:3},{value:"New Artificial Intelligence based copyright and license scanner agent",id:"new-artificial-intelligence-based-copyright-and-license-scanner-agent",level:3},{value:"Support SPDX 3.0 reports",id:"support-spdx-30-reports",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Welcome to the main page for all GSoC 2024 related information."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Check ",(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/discussions/2663",children:"https://github.com/fossology/fossology/discussions/2663"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,l.jsx)(t.p,{children:"We from the fossology project would like to apply for GSoC 2024. Please see two\nmain resources for finding out more FOSSology in general:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://www.fossology.org",children:"https://www.fossology.org"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://fossology.github.io/gsoc/",children:"https://fossology.github.io/gsoc/"})}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["Meetings: Checkout the ",(0,l.jsx)(t.a,{href:"/docs/2024#meetings-table",children:"Meetings table"})]}),"\n",(0,l.jsx)(t.h2,{id:"interested-in-application---getting-grip",children:"Interested in Application? - Getting Grip"}),"\n",(0,l.jsx)(t.p,{children:"If you are interested in an application - great! We encourage your application.\nSo the question is how to get started with the topic, just a few points:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Check ",(0,l.jsx)(t.a,{href:"/gsoc/docs/guidelines/",children:"our guidelines for GSoC"})]}),"\n",(0,l.jsxs)(t.li,{children:["Check ",(0,l.jsx)(t.a,{href:"https://www.fossology.org",children:"https://www.fossology.org"})," and these GitHub pages\n",(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/wiki",children:"https://github.com/fossology/fossology/wiki"})]}),"\n",(0,l.jsxs)(t.li,{children:["Maybe check some ",(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/wiki/New-at-FOSSology%2C-You-Could-...",children:"initial intro"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://youtu.be/TZqU5ZALI7U",children:"https://youtu.be/TZqU5ZALI7U"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://fossology.github.io/",children:"https://fossology.github.io/"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["Try to install fossology, either using vagrant or docker","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/wiki/Install-from-Source",children:"https://github.com/fossology/fossology/wiki/Install-from-Source"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.li,{children:"Read the proposed topics"}),"\n",(0,l.jsxs)(t.li,{children:["Use the mailing list ",(0,l.jsx)(t.a,{href:"mailto:fossology-devel@fossology.org",children:"fossology-devel@fossology.org"})," or contact proposed mentors\nfor further steps"]}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://join.slack.com/t/fossology/shared_invite/enQtNzI0OTEzMTk0MjYzLTYyZWQxNDc0N2JiZGU2YmI3YmI1NjE4NDVjOGYxMTVjNGY3Y2MzZmM1OGZmMWI5NTRjMzJlNjExZGU2N2I5NGY",children:"Slack invite link"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/discussions/2663",children:"GitHub discussion"})}),"\n",(0,l.jsxs)(t.li,{children:["If you are interested in trying to make contributions, see out issues with the\nlabel ",(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/contribute",children:"good first issue"}),".\nMaybe you could sort out the workflow and make a first pull request."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"examples-from-past-programs",children:"Examples from past programs"}),"\n",(0,l.jsx)(t.p,{children:"In 2020, we were awarded seven slots, please see here what was the result of it:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Ayush and Kaushlendra's work on the\n",(0,l.jsx)(t.a,{href:"https://github.com/fossology/atarashi",children:"Atarashi"})," license scanner and\n",(0,l.jsx)(t.a,{href:"https://github.com/fossology/Nirjas",children:"Nirjas"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/hastagAB/GSoC-2020",children:"https://github.com/hastagAB/GSoC-2020"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/Kaushl2208/GSoC-2020",children:"https://github.com/Kaushl2208/GSoC-2020"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["Darshan's work on Dashboard: ",(0,l.jsx)(t.a,{href:"https://github.com/darshank15/GSoC_2020_FOSSOlogy/wiki",children:"https://github.com/darshank15/GSoC_2020_FOSSOlogy/wiki"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Also - very much fun - There are some YouTube videos created:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Ayush made a YouTube video / interview style of his experience:\n",(0,l.jsx)(t.a,{href:"https://youtu.be/C8f_etew-yc",children:"https://youtu.be/C8f_etew-yc"})]}),"\n",(0,l.jsxs)(t.li,{children:["Hypnos invited Darshan for an interview: ",(0,l.jsx)(t.a,{href:"https://youtu.be/_KbQ83JK7Q0",children:"https://youtu.be/_KbQ83JK7Q0"})]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["In 2021, the GSoC program awarded the fossology project with 7 slots. It was a\nlot bigger and a lot of fun for 2021, a dedicated page has been set up. Please\nsee the GSoC works ",(0,l.jsx)(t.a,{href:"/gsoc/docs/2021",children:"here"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["From this page you can also get an idea about the work being carried out: check\nthe weekly reporting, ",(0,l.jsx)(t.a,{href:"../2021/ui",children:"for example for the UI project"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["You can check out our GSoC 2022 projects with 8 slots. The dedicated page can be\nfound ",(0,l.jsx)(t.a,{href:"/gsoc/docs/2022",children:"here"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["The recent participation in GSoC 2023 also came to an end. You can check out the\nprojects with 5 slots at the dedicated page for ",(0,l.jsx)(t.a,{href:"/gsoc/docs/2023",children:"GSoC 2023"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"mentors",children:"Mentors"}),"\n",(0,l.jsx)(t.p,{children:"Interested in becoming a mentor? Please reach out to us!"}),"\n",(0,l.jsx)(t.h4,{id:"proposals-so-far",children:"Proposals so far:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"})}),"\n",(0,l.jsx)(t.li,{children:"Katharina Ettinger"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"topic-proposals",children:"Topic Proposals"}),"\n",(0,l.jsx)(t.p,{children:"Please reach out to us to add more proposals for GSoC 2024."}),"\n",(0,l.jsxs)(t.p,{children:["Currently, discussion happening on\n",(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/discussions/2663",children:"https://github.com/fossology/fossology/discussions/2663"})]}),"\n",(0,l.jsx)(t.h2,{id:"topic-proposals-from-2024",children:"Topic Proposals from 2024"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#improving-fossology-ci-scanner-image",children:"Improving FOSSology CI scanner image"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#support-text-phrases-and-bulk-based-scanning-for-monk-a-like-agent",children:"Support text phrases and bulk based scanning for MONK a like\nagent"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#spdx-license-expression-support",children:"SPDX license expression support"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#overhauling-scheduler-design",children:"Overhauling scheduler design"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#debian-packaging-for-debian-repository",children:"Debian packaging for Debian\nrepository"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#rest-api-improvements",children:"REST API improvements"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#new-artificial-intelligence-based-copyright-and-license-scanner-agent",children:"New Artificial Intelligence based copyright and license scanner\nagent"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#support-spdx-30-reports",children:"Support SPDX 3.0 reports"})}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"improving-fossology-ci-scanner-image",children:"Improving FOSSology CI scanner image"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Enhancing current scanner image with new reports and features"]}),"\n",(0,l.jsx)(t.p,{children:"As a fun project, FOSSology started combining scanners in a simple and small\nDocker image which can be run on CI providers. The image is currently capable of\nunderstanding build environment (GitLab/GitHub Actions/Travis) and use their\nAPI's to fetch diff of a branch or scan the complete repo. The capabilities of\nimage include license scanning with Nomos and ojo scanners, copyright and\nkeyword scanning with respective scanners. The image makes use of a Python\nscript to perform all the tasks."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"The integration with GitHub Actions can be improved by reporting line number\nwhere a license violation is found."}),"\n",(0,l.jsxs)(t.li,{children:["Allowing user to provide a different list of Keywords for scanning (currently\nstored at ",(0,l.jsx)(t.code,{children:"/usr/local/share/fossology/keyword/agent/keyword.conf"}),")."]}),"\n",(0,l.jsxs)(t.li,{children:["Improving on ",(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/wiki/FOSSology-scanners-in-CI#explanation",children:"whitelist format"}),"\nwith feature to provide it from other sources, currently it is read from a\nfile which is expected to be in the root of repo being scanned."]}),"\n",(0,l.jsx)(t.li,{children:"Ability to download a dependency for scan (path provided at pipeline\ntrigger)."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Additionally, the JSON output of nomos needs to be enhanced providing highlight\nand line information in the output."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Periphial"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Student/Professional"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skills needed"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Docker, Python"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@GMishx @shaheemazmalmmd"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"support-text-phrases-and-bulk-based-scanning-for-monk-a-like-agent",children:"Support text phrases and bulk based scanning for MONK a like agent"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Adding text phrases from UI to database and use existing bulk phrases\nand provide ability to scan them using MONK and identify files if the match is\n100%."]}),"\n",(0,l.jsx)(t.p,{children:"FLOW :"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Create a UI Where user can add multiple text phrases associated with license\n(FROM FOSSology License Database)."}),"\n",(0,l.jsx)(t.li,{children:"Use existing bulk phrases table from database."}),"\n",(0,l.jsx)(t.li,{children:"Create a new agent like existing MONK agent which not only identifies the\nmatches but also decides the files."}),"\n",(0,l.jsx)(t.li,{children:"Test cases needs to be provided as well."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Periphial"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Student/professional"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skills needed"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"PHP, C++"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@GMishx @shaheemazmalmmd"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"spdx-license-expression-support",children:"SPDX license expression support"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Support SPDX license expression detection and reporting"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Support SPDX license expressions in FOSSology such as\n",(0,l.jsx)(t.code,{children:"MIT AND (GPL-2.0-only OR BSD-2-Clause)"}),"."]}),"\n",(0,l.jsx)(t.li,{children:"Differentiate SPDX licenses with exceptions. FOSSology currently stores\nlicense exceptions as licenses."}),"\n",(0,l.jsx)(t.li,{children:"Scanning SPDX Expressions with ojo as step 1."}),"\n",(0,l.jsx)(t.li,{children:"UI components to create and see license expressions in file clearing page."}),"\n",(0,l.jsx)(t.li,{children:"Updating reports to export the expressions correctly."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Periphial"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skills needed"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"PHP, C/C++"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@GMishx @shaheemazmalmmd"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"overhauling-scheduler-design",children:"Overhauling scheduler design"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Improving FOSSology scheduler or replacing with OTS solution"]}),"\n",(0,l.jsx)(t.p,{children:"The existing scheduler design is causing new issues which need to be addressed.\nMoreover, existing scheduler design is not touched in years."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Concerning points"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"The scheduler is written in C which makes it next to impossible to find cause\nof a failure."}),"\n",(0,l.jsx)(t.li,{children:"The C language does not support exception handling out of the box. It makes\ncode less readable and prone to errors."}),"\n",(0,l.jsxs)(t.li,{children:["The linear queue design causes issue when there should be only one instance\nof an agent running for an upload, but overall the agent is not mutually\nexclusive.","\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"For example, if the monkbulk has a limit set to 1, it should be implied for\nonly single upload. But with linear queue, this monkbulk job will block all\nother agents from executing even when they are not effected by the results\nof monkbulk."}),"\n",(0,l.jsxs)(t.p,{children:["This essentially makes the agent mutually exclusive even though, there is a\nspecial flag EXCLUSIVE for the very same purpose:\n",(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/wiki/Job-Scheduler#agentconfs",children:"https://github.com/fossology/fossology/wiki/Job-Scheduler#agentconfs"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"One idea on redesigning the queue, it can be broken into buckets per upload\neach maintaining its own priority queue. There can be another queue for\nglobal operations like maintenance, delagent, etc."}),"\n",(0,l.jsx)(t.li,{children:"Doing so, each bucket can be traversed in round-robin and pick first pending\njob and check against host limit. This will eliminate the scenario mentioned\nin point 3. Also, exclusive agents can be sent to global queue."}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"  upload specific queue\n|-<upload_2> -> nomos, copyright, ojo, keyword\n|-<upload_3> -> monkbulk, decider, monkbulk, decider\n|-<upload_4> -> reuser, decider\n\nglobal queue\n-> delagent,\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"Since the FOSSology is released, there can be number of new scheduling\nlibraries being released which needs to be explored. They can be a nice\naddition to the project."}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Periphial"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Professional"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skills needed"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"C/C++, Go, any fast language"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@GMishx @ag4ums @avinal"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"debian-packaging-for-debian-repository",children:"Debian packaging for Debian repository"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Improve Debian packaging and make it acceptable for APT"]}),"\n",(0,l.jsxs)(t.p,{children:["The existing effort to put FOSSology under Debian packaging list needs to be\ntaken forward. A repository under Debian Salsa was setup initially but not\nmaintained any more: ",(0,l.jsx)(t.a,{href:"https://salsa.debian.org/fossology-team/fossology",children:"https://salsa.debian.org/fossology-team/fossology"}),"\nIt is configured to use\n",(0,l.jsx)(t.a,{href:"https://honk.sigxcpu.org/piki/projects/git-buildpackage/",children:"gbp"}),"."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Blockers"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"The Debian building mechanism does not allow installation from sources other\nthan apt. The Composer packages need to be packed as Debian packages and\nshipped with FOSSology."}),"\n",(0,l.jsx)(t.li,{children:"Packaging and shipping other tools needs to satisfy their licensing terms."}),"\n",(0,l.jsx)(t.li,{children:"The versions of packages in APT and actual versions used are different."}),"\n",(0,l.jsx)(t.li,{children:"APT also provides JS libraries like JQuery and DataTables but RHL does not."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"See also"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/pull/2075",children:"https://github.com/fossology/fossology/pull/2075"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://wiki.debian.org/PackagingWithGit",children:"https://wiki.debian.org/PackagingWithGit"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://wiki.debian.org/SimplePackagingTutorial",children:"https://wiki.debian.org/SimplePackagingTutorial"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://wiki.debian.org/Diagrams",children:"https://wiki.debian.org/Diagrams"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://wiki.debian.org/PHP",children:"https://wiki.debian.org/PHP"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://peertube.debian.social/videos/watch/0fb2dbc4-f43d-477e-8b14-20c426f970de",children:"https://peertube.debian.social/videos/watch/0fb2dbc4-f43d-477e-8b14-20c426f970de"})}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Periphial"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Small"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Student/Professional"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skills needed"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Debian, APT, CMake"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@GMishx @shaheemazmalmmd"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"rest-api-improvements",children:"REST API improvements"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Completing REST API implementation and migrate to v2"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Writing test cases for all the existing and new functionalities."}),"\n",(0,l.jsxs)(t.li,{children:["Improve REST API and expose more endpoints","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Update REST API to v2"}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/pull/2617",children:"https://github.com/fossology/fossology/pull/2617"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/pull/2633",children:"https://github.com/fossology/fossology/pull/2633"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/pull/2634",children:"https://github.com/fossology/fossology/pull/2634"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/orgs/fossology/projects/2/views/2",children:"https://github.com/orgs/fossology/projects/2/views/2"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Periphial"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Student/Professional"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skills needed"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"PHP, Slim framework"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@GMishx @shaheemazmalmmd"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"new-artificial-intelligence-based-copyright-and-license-scanner-agent",children:"New Artificial Intelligence based copyright and license scanner agent"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Integrate new AI capabilities to improve the scanners"]}),"\n",(0,l.jsx)(t.p,{children:"A quick ChatGPT 3.5 test shows it's pretty good at spotting the correct licenses\nand expressing them as SPDX expressions."}),"\n",(0,l.jsx)(t.p,{children:"One idea would be integrate a similar technology into a FOSSology agent -\nhowever not by relying on external proprietary services but by building a\ndedicated LLM model based on existing open source solutions."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Peripheral"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"***"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Student/Professional"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@NicolasToussaint @ag4ums"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"support-spdx-30-reports",children:"Support SPDX 3.0 reports"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Goal:"})," Support reading and generating SPDX 3.0 reports"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Support generation of SPDX 3.0 reports in different formats."}),"\n",(0,l.jsx)(t.li,{children:"Start with Core, Software and Licensing profiles. Increase if needed."}),"\n",(0,l.jsx)(t.li,{children:"Support generation of SPDX reports in JSON format."}),"\n",(0,l.jsx)(t.li,{children:"Support ingestion of SPDX 3.0 reports"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Refs:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/spdx/spdx-3-model/",children:"https://github.com/spdx/spdx-3-model/"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/tree/master/src/spdx2",children:"https://github.com/fossology/fossology/tree/master/src/spdx2"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"https://github.com/fossology/fossology/tree/master/src/reportImport",children:"https://github.com/fossology/fossology/tree/master/src/reportImport"})}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Category"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Rating"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Low Hanging Fruit"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Risk/Exploratory"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Fun/Periphial"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Core Development"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"**"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project Infrastructure"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"*"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Project size"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preferred contributor"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Student/Professional"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Skills needed"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"PHP, Twig"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Contact"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"@GMishx @shaheemazmalmmd"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);