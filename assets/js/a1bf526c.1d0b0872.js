"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[4961],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const a={},t=i.createContext(a);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(t.Provider,{value:n},e.children)}},75988:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"2023/laas/updates/2023-06-09","title":"Coding Period","description":"\x3c!--","source":"@site/docs/2023/laas/updates/2023-06-09.md","sourceDirName":"2023/laas/updates","slug":"/2023/laas/updates/2023-06-09","permalink":"/gsoc/docs/2023/laas/updates/2023-06-09","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2023/laas/updates/2023-06-09.md","tags":[{"inline":true,"label":"license as a service","permalink":"/gsoc/docs/tags/license-as-a-service"},{"inline":true,"label":"open source licensing","permalink":"/gsoc/docs/tags/open-source-licensing"}],"version":"current","frontMatter":{"title":"Coding Period","author":"Kavya Shukla","author_url":"https://github.com/k-avy","tags":["license as a service","open source licensing"]},"sidebar":"2023","previous":{"title":"Coding Period","permalink":"/gsoc/docs/2023/laas/updates/2023-06-02"},"next":{"title":"Coding Period","permalink":"/gsoc/docs/2023/laas/updates/2023-06-16"}}');var a=s(74848),t=s(28453);const l={title:"Coding Period",author:"Kavya Shukla",author_url:"https://github.com/k-avy",tags:["license as a service","open source licensing"]},r="Week 2",d={},o=[{value:"Attendees",id:"attendees",level:2},{value:"Update",id:"update",level:2},{value:"Discussions",id:"discussions",level:2},{value:"General",id:"general",level:2},{value:"Conclusion and Future Plan",id:"conclusion-and-future-plan",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"week-2",children:"Week 2"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"(June, 09, 2023)"})}),"\n",(0,a.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/sjha2048",children:"Sahil"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/k-avy",children:"Kavya"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,a.jsx)(n.p,{children:"Added code to populate data from JSON file to the database:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"added automigration capability"}),"\n",(0,a.jsx)(n.li,{children:"added CLI arguments for database connection"}),"\n",(0,a.jsx)(n.li,{children:"database can be populated with json file etc"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"discussions",children:"Discussions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Shaheem suggested to discuss it with Anupam and Gaurav for License Candidate file.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"For now we will use License database of license."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"If the data in database is not same as that in json file we will migrate it from\njson file. For ths we have RF flag in fossology, this flag refers if the data is\nfrom UI or from json."}),"\n",(0,a.jsx)(n.li,{children:"Marydone is field for candidate license flag."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Do we want plain log or structured log?","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"We need keep structured, as structured are easy to parse to extend we can start\nputting logs."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Use fatalf for error format instead of panic."}),"\n",(0,a.jsx)(n.li,{children:"Create Signed commit"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion-and-future-plan",children:"Conclusion and Future Plan"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Get endpoints to be done."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"  GET METHOD:  /api/licenses      // get all licenses \n  GET METHOD:  /api/license/:shortname        // get licenses by shortname\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Evaluate both fuzzy search and fulltext in PostgreSQL."}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);