"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[270],{57225:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var i=n(74848),t=n(28453);const d={title:"Week 3",author:"Omar AbdelSamea"},r="Coding Week 3",a={id:"2021/microservice/updates/2021-06-22",title:"Week 3",description:"\x3c!--",source:"@site/docs/2021/microservice/updates/2021-06-22.md",sourceDirName:"2021/microservice/updates",slug:"/2021/microservice/updates/2021-06-22",permalink:"/gsoc/docs/2021/microservice/updates/2021-06-22",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-06-22.md",tags:[],version:"current",frontMatter:{title:"Week 3",author:"Omar AbdelSamea"},sidebar:"2021",previous:{title:"Week 2",permalink:"/gsoc/docs/2021/microservice/updates/2021-06-15"},next:{title:"Week 4",permalink:"/gsoc/docs/2021/microservice/updates/2021-06-29"}},l={},c=[{value:"Meeting 0",id:"meeting-0",level:2},{value:"Organizer",id:"organizer",level:3},{value:"Attendees",id:"attendees",level:3},{value:"Outcomes",id:"outcomes",level:3},{value:"Meeting 1",id:"meeting-1",level:2},{value:"Organizer",id:"organizer-1",level:3},{value:"Attendees",id:"attendees-1",level:3},{value:"Outcomes",id:"outcomes-1",level:3},{value:"End of the week results",id:"end-of-the-week-results",level:2},{value:"Diagrams",id:"diagrams",level:2},{value:"using ClusterIP with agents",id:"using-clusterip-with-agents",level:3},{value:"using headless services with agents",id:"using-headless-services-with-agents",level:3}];function o(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"coding-week-3",children:"Coding Week 3"})}),"\n",(0,i.jsx)(s.h2,{id:"meeting-0",children:"Meeting 0"}),"\n",(0,i.jsx)(s.h3,{id:"organizer",children:"Organizer"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"outcomes",children:"Outcomes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Traced source code to see how the scheduler should be modified to accept single agent on each host."}),"\n",(0,i.jsx)(s.li,{children:"we found that:"}),"\n",(0,i.jsxs)(s.li,{children:["function ",(0,i.jsx)(s.a,{href:"https://github.com/OmarAbdelSamea/fossology/blob/master/src/scheduler/agent/agent.c#L249",children:"agent_test"})," should be modified to only test the agent found inside the host"]}),"\n",(0,i.jsx)(s.li,{children:"to get the agent type inside the host a new parameter should be added in fossology.conf"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"meeting-1",children:"Meeting 1"}),"\n",(0,i.jsx)(s.h3,{id:"organizer-1",children:"Organizer"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"attendees-1",children:"Attendees"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Anupam Ghosh"}),"\n",(0,i.jsx)(s.li,{children:"Ayush Bharadwaj"}),"\n",(0,i.jsx)(s.li,{children:"Vasudev Maduri"}),"\n",(0,i.jsx)(s.li,{children:"Kaushlendra Singh"}),"\n",(0,i.jsx)(s.li,{children:"Shreya Pratap"}),"\n",(0,i.jsx)(s.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"outcomes-1",children:"Outcomes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Presented some enhancement on adding a single service for all agents."}),"\n",(0,i.jsx)(s.li,{children:"Discussed the Scheduler Host problem and how it could be implemented in the next week."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"end-of-the-week-results",children:"End of the week results"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Implemented headless services instead of ClusterIP for each agent."}),"\n",(0,i.jsx)(s.li,{children:"Used headless service for scheduler instead of ClusterIP."}),"\n",(0,i.jsx)(s.li,{children:"Used ClusterIP with database instead of NodePort as the database doesn't need to be exposed."}),"\n",(0,i.jsx)(s.li,{children:"Added Config Maps and Secrets for database."}),"\n",(0,i.jsx)(s.li,{children:"Fixed a bug in Dockerfiles (debian package version was hardcoded, solution was replacing version with *)"}),"\n",(0,i.jsx)(s.li,{children:"Enhanced scheduler Dockerfile, instead of installing web.deb to get chore-schema.dat just copied it from source code."}),"\n",(0,i.jsx)(s.li,{children:"Used stateful set with database instead of deployment."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Links: ",(0,i.jsx)(s.a,{href:"https://github.com/OmarAbdelSamea/fossology/tree/OmarAbdelSamea/GSoC/Microservices/k8s",children:"https://github.com/OmarAbdelSamea/fossology/tree/OmarAbdelSamea/GSoC/Microservices/k8s"})]}),"\n",(0,i.jsx)(s.h2,{id:"diagrams",children:"Diagrams"}),"\n",(0,i.jsx)(s.h3,{id:"using-clusterip-with-agents",children:"using ClusterIP with agents"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image",src:n(35091).A+"",width:"618",height:"409"})}),"\n",(0,i.jsx)(s.h3,{id:"using-headless-services-with-agents",children:"using headless services with agents"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image",src:n(65686).A+"",width:"743",height:"474"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},65686:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/124268388-b9196480-db39-11eb-84c1-d5ebd57009e0-c96bec95f404ab217baead93b4ff9dec.png"},35091:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/124268824-58d6f280-db3a-11eb-85fd-e377f932ec8a-b57b0ccc31a2fa0c34e55b27165c24fa.png"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var i=n(96540);const t={},d=i.createContext(t);function r(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);