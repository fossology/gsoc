"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[5457],{8637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const r={title:"Week 16",author:"Abdelrahman Jamal"},l=void 0,o={id:"2023/copyrights/updates/2023-09-13",title:"Week 16",description:"\x3c!--",source:"@site/docs/2023/copyrights/updates/2023-09-13.md",sourceDirName:"2023/copyrights/updates",slug:"/2023/copyrights/updates/2023-09-13",permalink:"/gsoc/docs/2023/copyrights/updates/2023-09-13",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/copyrights/updates/2023-09-13.md",tags:[],version:"current",frontMatter:{title:"Week 16",author:"Abdelrahman Jamal"},sidebar:"2023",previous:{title:"Week 15",permalink:"/gsoc/docs/2023/copyrights/updates/2023-09-06"},next:{title:"Week 17",permalink:"/gsoc/docs/2023/copyrights/updates/2023-09-20"}},d={},c=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates:",id:"updates",level:2},{value:"1. Dataset Cleanup:",id:"1-dataset-cleanup",level:3},{value:"2. Fine-tuning and Testing:",id:"2-fine-tuning-and-testing",level:3},{value:"Conclusion and Future Plans:",id:"conclusion-and-future-plans",level:2},{value:"1. Fossology Integration:",id:"1-fossology-integration",level:3},{value:"2. Decluttering Process:",id:"2-decluttering-process",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(September,13,2023)"})}),"\n",(0,i.jsx)(n.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Hero2323",children:"Abdelrahman"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/hastagAB",children:"Ayush"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updates",children:"Updates:"}),"\n",(0,i.jsx)(n.h3,{id:"1-dataset-cleanup",children:"1. Dataset Cleanup:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Initiated code to clean the conll2003 dataset as mentioned in week 14:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Merged ",(0,i.jsx)(n.code,{children:"PER"})," and ",(0,i.jsx)(n.code,{children:"ORG"})," entities."]}),"\n",(0,i.jsxs)(n.li,{children:["Discarded ",(0,i.jsx)(n.code,{children:"LOC"})," and ",(0,i.jsx)(n.code,{children:"MISC"})," entities since they are not pertinent to my requirements."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-fine-tuning-and-testing",children:"2. Fine-tuning and Testing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Conducted another round of fine-tuning using 750 examples from my dataset and assessed the NER model's performance within my preprocessing function.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Noticed a slight dip in performance due to obfuscation of repetitive copyright holder names in the dataset."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Labeled an additional 750 examples, totaling slightly over 1500, and fine-tuned the primary model with this data.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The model, while proficient, occasionally mislabeled non-copyright sentences as ",(0,i.jsx)(n.code,{children:"ENT"})," (the copyright holder entity), potentially increasing false positives."]}),"\n",(0,i.jsxs)(n.li,{children:["Below are some detection results using the dataset from the feature extraction paper to test on unseen examples (detected entities are highlighted):","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Copyright (C) 2017 ",(0,i.jsx)(n.code,{children:"DENX Software Engineering"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copyright (C) ",(0,i.jsx)(n.code,{children:"IBM Corporation"})," 2016"]}),"\n",(0,i.jsxs)(n.li,{children:["Copyright (c) 2000-2005 ",(0,i.jsx)(n.code,{children:"Vojtech Pavlik"})," <",(0,i.jsx)(n.a,{href:"mailto:vojtech@suse.cz",children:"vojtech@suse.cz"}),">"]}),"\n",(0,i.jsxs)(n.li,{children:["Copyright (c) 2009, ",(0,i.jsx)(n.code,{children:"Microsoft Corporation"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Copyright (C) ST-Ericsson 2010 - 2013 (Entity missed)"}),"\n",(0,i.jsxs)(n.li,{children:["Copyright (c) 2012 ",(0,i.jsx)(n.code,{children:"Steffen Trumtrar"})," <",(0,i.jsx)(n.a,{href:"mailto:s.trumtrar@pengutronix.de",children:"s.trumtrar@pengutronix.de"}),">, ",(0,i.jsx)(n.code,{children:"Pengutronix"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copyright 2008 ",(0,i.jsx)(n.code,{children:"GE Intelligent Platforms Embedded Systems"}),", Inc."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"The model detected the majority of entities, missing less than 5%."}),"\n",(0,i.jsx)(n.li,{children:"Adopted semi-supervised training by using the preceding model to label the entire dataset and trained on it. This refined model, now in use, missed under 1% of the copyright holder entities in the same test set."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion-and-future-plans",children:"Conclusion and Future Plans:"}),"\n",(0,i.jsx)(n.h3,{id:"1-fossology-integration",children:"1. Fossology Integration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Aim to integrate the false positive copyright detection code into Fossology."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-decluttering-process",children:"2. Decluttering Process:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Initiate the decluttering procedure, which will bear similarities to the copyright holder entity detection process."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);