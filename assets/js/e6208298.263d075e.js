"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[7234],{58484:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=i(74848),t=i(28453);const d={title:"Week 6",author:"Omar AbdelSamea"},r="Coding Week 6",l={id:"2021/microservice/updates/2021-07-13",title:"Week 6",description:"\x3c!--",source:"@site/docs/2021/microservice/updates/2021-07-13.md",sourceDirName:"2021/microservice/updates",slug:"/2021/microservice/updates/2021-07-13",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-13",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-07-13.md",tags:[],version:"current",frontMatter:{title:"Week 6",author:"Omar AbdelSamea"},sidebar:"2021",previous:{title:"Week 5",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-06"},next:{title:"Week 7",permalink:"/gsoc/docs/2021/microservice/updates/2021-07-20"}},c={},a=[{value:"Meeting 0",id:"meeting-0",level:2},{value:"Organizer",id:"organizer",level:3},{value:"Attendees",id:"attendees",level:3},{value:"Outcomes",id:"outcomes",level:3},{value:"Meeting 1",id:"meeting-1",level:2},{value:"Organizer",id:"organizer-1",level:3},{value:"Attendees",id:"attendees-1",level:3},{value:"Organizer",id:"organizer-2",level:3},{value:"Attendees",id:"attendees-2",level:3},{value:"Outcomes",id:"outcomes-1",level:3},{value:"Migrating configurations from conf files to etcd",id:"migrating-configurations-from-conf-files-to-etcd",level:2},{value:"End of the week result",id:"end-of-the-week-result",level:2},{value:"Diagrams and screenshots",id:"diagrams-and-screenshots",level:2},{value:"Interface between k8s, scheduler and etcd.",id:"interface-between-k8s-scheduler-and-etcd",level:3},{value:"First scanned file using microservice architecture",id:"first-scanned-file-using-microservice-architecture",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"coding-week-6",children:"Coding Week 6"})}),"\n",(0,s.jsx)(n.h2,{id:"meeting-0",children:"Meeting 0"}),"\n",(0,s.jsx)(n.h3,{id:"organizer",children:"Organizer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Anupam Ghosh"}),"\n",(0,s.jsx)(n.li,{children:"Shaheem Azmal"}),"\n",(0,s.jsx)(n.li,{children:"Vasudev Maduri"}),"\n",(0,s.jsx)(n.li,{children:"Klaus Gmeinwieser"}),"\n",(0,s.jsx)(n.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"outcomes",children:"Outcomes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Discussed the issue of having agents conf seperating between containers and the idle solution would be to add all agents conf to a database."}),"\n",(0,s.jsx)(n.li,{children:"for database system discussed two options etcd and reddis."}),"\n",(0,s.jsx)(n.li,{children:"Discussed how etcd should be used (seperate high availblity cluster vs deployment) and the discision was using a deployment as the seperate cluster for etcd only will be an overkill"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"meeting-1",children:"Meeting 1"}),"\n",(0,s.jsx)(n.h3,{id:"organizer-1",children:"Organizer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attendees-1",children:"Attendees"}),"\n",(0,s.jsx)(n.h3,{id:"organizer-2",children:"Organizer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attendees-2",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Anupam Ghosh"}),"\n",(0,s.jsx)(n.li,{children:"Vasudev"}),"\n",(0,s.jsx)(n.li,{children:"Ayush Bharadwaj"}),"\n",(0,s.jsx)(n.li,{children:"Shreya Singh"}),"\n",(0,s.jsx)(n.li,{children:"Kaushlendra Pratap Singh"}),"\n",(0,s.jsx)(n.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"outcomes-1",children:"Outcomes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Made a small demo for working FOSSology installation applied with some hacks (agents conf and web UI)"}),"\n",(0,s.jsx)(n.li,{children:"Presented manifest of etcd (deployment, service and pvc)."}),"\n",(0,s.jsx)(n.li,{children:"Presented a concept of how etcd will be used inside scheduler code."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"migrating-configurations-from-conf-files-to-etcd",children:"Migrating configurations from conf files to etcd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For microservice architecture each agent has it's own conf file inside it's pod."}),"\n",(0,s.jsx)(n.li,{children:"FOSSology hosts needs to be hardcoded before deployment."}),"\n",(0,s.jsxs)(n.li,{children:["To solve this all conf files will be added to a key value pair database. The selected db system is ",(0,s.jsx)(n.a,{href:"https://etcd.io/",children:"etcd"})]}),"\n",(0,s.jsx)(n.li,{children:"for each new agent added, it'll interface with etcd using RESTful API. The agent will open it's conf file and start making proper PUT request to add configuration in etcd and the agent will add the host details."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"end-of-the-week-result",children:"End of the week result"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Succesfully scaned files using copyright and nomos (some hacks are applied to get it working)"}),"\n",(0,s.jsx)(n.li,{children:"Compared etcd vs redis and at the end etcd will be used"}),"\n",(0,s.jsxs)(n.li,{children:["Started migrating Hosts part from FOSSology conf to etcd by modfying ",(0,s.jsx)(n.code,{children:"scheduler_foss_config"})," in ",(0,s.jsx)(n.a,{href:"https://github.com/OmarAbdelSamea/fossology/blob/OmarAbdelSamea/GSoC/Microservices/src/scheduler/agent/scheduler.c#L971",children:"scheduler"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"diagrams-and-screenshots",children:"Diagrams and screenshots"}),"\n",(0,s.jsx)(n.h3,{id:"interface-between-k8s-scheduler-and-etcd",children:"Interface between k8s, scheduler and etcd."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(33397).A+"",width:"647",height:"472"})}),"\n",(0,s.jsx)(n.h3,{id:"first-scanned-file-using-microservice-architecture",children:"First scanned file using microservice architecture"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image",src:i(99791).A+"",width:"1359",height:"230"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},33397:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/128032268-0fb2777b-70f5-4ae7-bc44-0786114fe277-990f220295cc7f5b9fa9a6947f75105a.png"},99791:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/128032535-c5941727-5ba3-492f-9662-a566ac4c350b-3e2ac3344c85416166b2e473c94f240d.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const t={},d=s.createContext(t);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);