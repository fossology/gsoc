"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[3133],{26255:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var t=i(74848),n=i(28453);const d={title:"Week 5",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc23","rest"]},c=void 0,l={id:"2023/rest/updates/samuel/2023-06-29",title:"Week 5",description:"\x3c!--",source:"@site/docs/2023/rest/updates/samuel/2023-06-29.md",sourceDirName:"2023/rest/updates/samuel",slug:"/2023/rest/updates/samuel/2023-06-29",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-06-29",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2023/rest/updates/samuel/2023-06-29.md",tags:[{inline:!0,label:"gsoc23",permalink:"/gsoc/docs/tags/gsoc-23"},{inline:!0,label:"rest",permalink:"/gsoc/docs/tags/rest"}],version:"current",frontMatter:{title:"Week 5",author:"Samuel Dushimimana",author_url:"https://github.com/dushimsam",author_image_url:"https://avatars.githubusercontent.com/u/66276301?v=4",tags:["gsoc23","rest"]},sidebar:"2023",previous:{title:"Week 4",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-06-22"},next:{title:"Week 6",permalink:"/gsoc/docs/2023/rest/updates/samuel/2023-07-06"}},o={},a=[{value:"Activities",id:"activities",level:2},{value:"Some Screenshots",id:"some-screenshots",level:3},{value:"1. Clearing progress API <code>/uploads/{id}/clearing-progress</code>",id:"1-clearing-progress-api-uploadsidclearing-progress",level:4},{value:"2. Scanned licenses API <code>/uploads/{id}/licenses/scanned</code>",id:"2-scanned-licenses-api-uploadsidlicensesscanned",level:4},{value:"3. Licenses histogram API <code>/uploads/{id}/licenses/histogram</code>",id:"3-licenses-histogram-api-uploadsidlicenseshistogram",level:4},{value:"4. Edited licenses API <code>/uploads/{id}/licenses/edited</code>",id:"4-edited-licenses-api-uploadsidlicensesedited",level:4},{value:"5. Licenses count summary API <code>/uploads/{id}/licenses/count-summary</code>",id:"5-licenses-count-summary-api-uploadsidlicensescount-summary",level:4},{value:"6. Licenses reuse summary API <code>/uploads/{id}/licenses/reuse-summary</code>",id:"6-licenses-reuse-summary-api-uploadsidlicensesreuse-summary",level:4},{value:"Next week&#39;s expectations",id:"next-weeks-expectations",level:2}];function r(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"activities",children:"Activities"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Added the REST API to get the clearing progress information for the upload: ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2494",children:"#2494"})]}),"\n",(0,t.jsxs)(s.li,{children:["Added the REST API to get a list of the scanned licenses for the upload: ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2495",children:"#2495"})]}),"\n",(0,t.jsxs)(s.li,{children:["Added the REST API to get the licenses histogram for the upload: ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2497",children:"#2497"})]}),"\n",(0,t.jsxs)(s.li,{children:["Added the REST API to get the list of the edited licenses for the upload: ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2498",children:"#2498"})]}),"\n",(0,t.jsxs)(s.li,{children:["Added the REST API to get the licenses count summary: ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2499",children:"#2499"})]}),"\n",(0,t.jsxs)(s.li,{children:["Added the REST API to get the licenses reuse summary list: ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2501",children:"#2501"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"some-screenshots",children:"Some Screenshots"}),"\n",(0,t.jsxs)(s.h4,{id:"1-clearing-progress-api-uploadsidclearing-progress",children:["1. Clearing progress API ",(0,t.jsx)(s.code,{children:"/uploads/{id}/clearing-progress"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"clearing-progress",src:i(15816).A+"",width:"1505",height:"298"})}),"\n",(0,t.jsxs)(s.h4,{id:"2-scanned-licenses-api-uploadsidlicensesscanned",children:["2. Scanned licenses API ",(0,t.jsx)(s.code,{children:"/uploads/{id}/licenses/scanned"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"scanned-licenses",src:i(18342).A+"",width:"854",height:"789"})}),"\n",(0,t.jsxs)(s.h4,{id:"3-licenses-histogram-api-uploadsidlicenseshistogram",children:["3. Licenses histogram API ",(0,t.jsx)(s.code,{children:"/uploads/{id}/licenses/histogram"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"licenses-histogram",src:i(48894).A+"",width:"778",height:"792"})}),"\n",(0,t.jsxs)(s.h4,{id:"4-edited-licenses-api-uploadsidlicensesedited",children:["4. Edited licenses API ",(0,t.jsx)(s.code,{children:"/uploads/{id}/licenses/edited"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"edited-licenses",src:i(93267).A+"",width:"1465",height:"569"})}),"\n",(0,t.jsxs)(s.h4,{id:"5-licenses-count-summary-api-uploadsidlicensescount-summary",children:["5. Licenses count summary API ",(0,t.jsx)(s.code,{children:"/uploads/{id}/licenses/count-summary"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"licenses-count-summary",src:i(97044).A+"",width:"1388",height:"458"})}),"\n",(0,t.jsxs)(s.h4,{id:"6-licenses-reuse-summary-api-uploadsidlicensesreuse-summary",children:["6. Licenses reuse summary API ",(0,t.jsx)(s.code,{children:"/uploads/{id}/licenses/reuse-summary"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"licenses-reuse-summary",src:i(63049).A+"",width:"1385",height:"729"})}),"\n",(0,t.jsx)(s.h2,{id:"next-weeks-expectations",children:"Next week's expectations"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Add the REST API to get the agents' list for the upload."}),"\n",(0,t.jsx)(s.li,{children:"Add the REST API to get the agents revision for the upload."}),"\n",(0,t.jsx)(s.li,{children:"Add the REST API that merges the Add, Edit & delete requests for the license decision."}),"\n",(0,t.jsx)(s.li,{children:"Add the REST APIs for managing the Add, Edit, and enable requests for the acknowledgements."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},15816:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/get_clearing_progress-f74dcad5df2a77c002cac74cede1e052.png"},93267:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/get_edited_licenses-e8aefc3e60cfda4c070549126906a981.png"},97044:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/get_licenses_count_summary-9e2b0cec62490375a1d10a6360f7a799.png"},48894:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/get_licenses_histogram-c2f9802e9e44718de1f383e6f184c17e.png"},63049:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/get_licenses_reuse_summary-7e10e68d6251f329829cf4691122693e.png"},18342:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/get_scanned_licenses-c468b61ecf8fe8efc96e745d1c3459dc.png"},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>l});var t=i(96540);const n={},d=t.createContext(n);function c(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);