"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[2440],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},49146:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/arch_ver.02-06b3ee26b706823713a4d33d6d02410d.png"},98561:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"2024/scheduler/updates/2024-06-07","title":"OVERHAULING SCHEDULER DESIGN (Discussion)","description":"\x3c!--","source":"@site/docs/2024/scheduler/updates/2024-06-07.md","sourceDirName":"2024/scheduler/updates","slug":"/2024/scheduler/updates/2024-06-07","permalink":"/gsoc/docs/2024/scheduler/updates/2024-06-07","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2024/scheduler/updates/2024-06-07.md","tags":[],"version":"current","frontMatter":{"title":"OVERHAULING SCHEDULER DESIGN (Discussion)","author":"Aaditya Singh"},"sidebar":"2024","previous":{"title":"Weekly Updates (Community Bonding)","permalink":"/gsoc/docs/2024/scheduler/updates/2024-06-06"},"next":{"title":"Introduction","permalink":"/gsoc/docs/2024/license-detection/"}}');var t=s(74848),r=s(28453);const a={title:"OVERHAULING SCHEDULER DESIGN (Discussion)",author:"Aaditya Singh"},c="Meeting 8",d={},o=[{value:"Attendees",id:"attendees",level:2},{value:"Discussion",id:"discussion",level:2}];function h(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"meeting-8",children:"Meeting 8"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(June 07, 2024)"})}),"\n",(0,t.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/EttingerK",children:"Katharina Ettinger"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Contributors"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Aaditya-Singh78",children:"Aaditya Singh"}),": Discussing integration and implementation strategies for the new scheduler design."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"architecture-version: 02",src:s(49146).A+"",width:"828",height:"1031"})}),"\n",(0,t.jsxs)(n.p,{children:["It consists of a sophisticated job scheduling system that leverages Go's powerful concurrency features to efficiently manage tasks across two ",(0,t.jsx)(n.em,{children:"primary queues"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Dependent Queue"}),"\n",(0,t.jsx)(n.li,{children:"Independent Queue"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Each queue is managed by a dedicated Global Go-Routine, which orchestrates the distribution and execution of tasks among multiple subordinate Go-Routines. These Go-Routines operate in parallel, each managing its own set of threads to ensure tasks are executed concurrently, ",(0,t.jsx)(n.em,{children:"maximising throughput"})," & ",(0,t.jsx)(n.em,{children:"minimising response time"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Key Components:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Database"}),": Central storage for all job-related data, ensuring durability and consistency across job executions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Dependent Queue"}),": Manages jobs that depend on the completion of other jobs, ensuring correct execution order."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Independent Queue"}),": Handles jobs that can be executed independently, allowing for simultaneous processing and improved efficiency."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Logging"}),": Each thread incorporates logging to track job execution, facilitating debugging and system monitoring."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Termination"}),": Ensures all tasks are either completed or properly terminated before system shutdown, maintaining system integrity."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mentors"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"}),": Questioned whether priority can be implemented in both dependent and independent queues effectively."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"}),": Highlighted considerations for ensuring mutual exclusivity either across dependent or independent queues, with a focus on execution rules and limitations."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap"}),": Inquired about how goroutines can achieve both concurrency and parallelism, and whether they should operate synchronously or asynchronously."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);