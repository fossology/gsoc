"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[3351],{97538:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(74848),t=s(28453);const r={title:"week-08",author:"Aaditya Singh"},a="Meeting 14",c={id:"2024/scheduler/updates/Discussion/2024-06-28",title:"week-08",description:"\x3c!--",source:"@site/docs/2024/scheduler/updates/Discussion/2024-06-28.md",sourceDirName:"2024/scheduler/updates/Discussion",slug:"/2024/scheduler/updates/Discussion/2024-06-28",permalink:"/gsoc/docs/2024/scheduler/updates/Discussion/2024-06-28",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2024/scheduler/updates/Discussion/2024-06-28.md",tags:[],version:"current",frontMatter:{title:"week-08",author:"Aaditya Singh"},sidebar:"2024",previous:{title:"week-07",permalink:"/gsoc/docs/2024/scheduler/updates/Discussion/2024-06-21"},next:{title:"week-09",permalink:"/gsoc/docs/2024/scheduler/updates/Discussion/2024-07-05"}},h={},d=[{value:"Attendees:",id:"attendees",level:2},{value:"Discussion:",id:"discussion",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"meeting-14",children:"Meeting 14"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(June 28,2024)"})}),"\n",(0,i.jsx)(n.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/EttingerK",children:"Katharina Ettinger"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"discussion",children:"Discussion:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"Shared the updated architecture of the Scheduler via this link for team review:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(34811).A+"",children:"Scheduler Architecture"})}),"\n",(0,i.jsx)(n.p,{children:"Detailed enhancements to overcome specific challenges:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Deadlock handling through channels facilitating communication between two semaphores, intended to transmit data structures, ideally integers representing user IDs or group IDs."}),"\n",(0,i.jsx)(n.li,{children:"Addressing race conditions among go-routines."}),"\n",(0,i.jsx)(n.li,{children:"Implementing a heartbeat mechanism between go-routines and a load balancer, utilizing channels to check the state of go-routines, returning a boolean value to minimize overhead in frequent signaling."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"}),": Emphasized the importance of package size as a critical parameter in Fossology, suggesting communication to users about partitioning large packages or providing a UI page for package size-related settings."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(21915).A+"",children:"Admin Scheduler"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/EttingerK",children:"Katharina Ettinger"}),": Questioned the criteria for determining whether packages are of larger or smaller size before processing begins."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"}),": Clarified that the ",(0,i.jsx)(n.code,{children:"Unpackage"})," agent determines the package size, stating that the current setup looks promising and encouraged starting coding for further enhancements."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/EttingerK",children:"Katharina Ettinger"}),": Inquired about the possibility of pausing smaller packages as a form of context switching."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"}),": Noted that context switching is currently handled under go-routines, which are synchronized per user, making pausing not feasible at the moment."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"}),": Suggested the development of a web page to make informed decisions based on package size."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"}),": Complimented the improvements from the previous version and recommended proceeding with coding."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},34811:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/golang_arch-845b2fcaba867fd8c16c3061cf774283.png"},21915:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/set_priority-eb0c34d744c59123327d1bb5aa8ca510.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);