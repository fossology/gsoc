"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[8503],{13734:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"2021/microservice/updates/2021-06-15","title":"Week 2","description":"\x3c!--","source":"@site/docs/2021/microservice/updates/2021-06-15.md","sourceDirName":"2021/microservice/updates","slug":"/2021/microservice/updates/2021-06-15","permalink":"/gsoc/docs/2021/microservice/updates/2021-06-15","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-06-15.md","tags":[],"version":"current","frontMatter":{"title":"Week 2","author":"Omar AbdelSamea"},"sidebar":"2021","previous":{"title":"Week 1","permalink":"/gsoc/docs/2021/microservice/updates/2021-06-07"},"next":{"title":"Week 3","permalink":"/gsoc/docs/2021/microservice/updates/2021-06-22"}}');var r=n(74848),t=n(28453);const l={title:"Week 2",author:"Omar AbdelSamea"},d="Coding Week 2",o={},c=[{value:"Meeting 0",id:"meeting-0",level:2},{value:"Organizer",id:"organizer",level:3},{value:"Attendees",id:"attendees",level:3},{value:"Outcomes",id:"outcomes",level:3},{value:"Meeting 0",id:"meeting-0-1",level:2},{value:"Organizer",id:"organizer-1",level:3},{value:"Attendees",id:"attendees-1",level:3},{value:"Outcomes",id:"outcomes-1",level:3},{value:"End of the week results",id:"end-of-the-week-results",level:2},{value:"Created the following deployments for Kubernetes",id:"created-the-following-deployments-for-kubernetes",level:3},{value:"Created the following services",id:"created-the-following-services",level:3}];function a(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"coding-week-2",children:"Coding Week 2"})}),"\n",(0,r.jsx)(s.h2,{id:"meeting-0",children:"Meeting 0"}),"\n",(0,r.jsx)(s.h3,{id:"organizer",children:"Organizer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"attendees",children:"Attendees"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ayush Bharadwaj"}),"\n",(0,r.jsx)(s.li,{children:"Vasudev Maduri"}),"\n",(0,r.jsx)(s.li,{children:"Kaushlendra Singh"}),"\n",(0,r.jsx)(s.li,{children:"Shreya Pratap"}),"\n",(0,r.jsx)(s.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"outcomes",children:"Outcomes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Omar AbdelSamea (Me) presented the initial implementation of Kubernetes cluster, config files and deployments."}),"\n",(0,r.jsx)(s.li,{children:"Gaurav suggested to schedule a meeting on Sunday to discuss how to modify schedule logic to work with single agent on each host instead of full set of agents on each host"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"meeting-0-1",children:"Meeting 0"}),"\n",(0,r.jsx)(s.h3,{id:"organizer-1",children:"Organizer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Vasudev Maduri"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"attendees-1",children:"Attendees"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"outcomes-1",children:"Outcomes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Discussed cluster architecture."}),"\n",(0,r.jsx)(s.li,{children:"Vasudev stated that creating a separate Kubernetes service for each agent won't be suitable with FOSSology"}),"\n",(0,r.jsxs)(s.li,{children:["Discussed an alternative of using ClusterIP service for each agent which is using ",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/",children:"Kubernetes pods DNS"})," and ",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",children:"headless services"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"end-of-the-week-results",children:"End of the week results"}),"\n",(0,r.jsx)(s.h3,{id:"created-the-following-deployments-for-kubernetes",children:"Created the following deployments for Kubernetes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Web"}),"\n",(0,r.jsx)(s.li,{children:"Scheduler"}),"\n",(0,r.jsx)(s.li,{children:"Database"}),"\n",(0,r.jsx)(s.li,{children:"nomos"}),"\n",(0,r.jsx)(s.li,{children:"copyright"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"created-the-following-services",children:"Created the following services"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"NodePort service for DB"}),"\n",(0,r.jsx)(s.li,{children:"ClusterIP service for scheduler"}),"\n",(0,r.jsx)(s.li,{children:"ClusterIP for nomos"}),"\n",(0,r.jsx)(s.li,{children:"ClusterIP for copyright"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Links: ",(0,r.jsx)(s.a,{href:"https://github.com/OmarAbdelSamea/fossology/tree/OmarAbdelSamea/GSoC/K8s/k8s",children:"https://github.com/OmarAbdelSamea/fossology/tree/OmarAbdelSamea/GSoC/K8s/k8s"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var i=n(96540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);