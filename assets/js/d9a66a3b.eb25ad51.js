"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[647],{17962:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"2021/microservice/updates/2021-07-06","title":"Week 5","description":"\x3c!--","source":"@site/docs/2021/microservice/updates/2021-07-06.md","sourceDirName":"2021/microservice/updates","slug":"/2021/microservice/updates/2021-07-06","permalink":"/gsoc/docs/2021/microservice/updates/2021-07-06","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2021/microservice/updates/2021-07-06.md","tags":[],"version":"current","frontMatter":{"title":"Week 5","author":"Omar AbdelSamea"},"sidebar":"2021","previous":{"title":"Week 4","permalink":"/gsoc/docs/2021/microservice/updates/2021-06-29"},"next":{"title":"Week 6","permalink":"/gsoc/docs/2021/microservice/updates/2021-07-13"}}');var o=i(74848),t=i(28453);const r={title:"Week 5",author:"Omar AbdelSamea"},l="Coding Week 5",d={},c=[{value:"Meeting 0",id:"meeting-0",level:2},{value:"Organizer",id:"organizer",level:3},{value:"Attendees",id:"attendees",level:3},{value:"Outcomes",id:"outcomes",level:3},{value:"Spawning agents using <code>kubectl exec</code>",id:"spawning-agents-using-kubectl-exec",level:2},{value:"Issues",id:"issues",level:3},{value:"[copyright]: agent didn&#39;t send version information: &quot;wrong command line arguments&quot;",id:"copyright-agent-didnt-send-version-information-wrong-command-line-arguments",level:4},{value:"Solution",id:"solution",level:5},{value:"[copyright]:  agent didn&#39;t send version information: &quot;cannot open regex definitions in conf: /usr/local/share/fossology/copyright/agent/copyright.conf&quot;",id:"copyright--agent-didnt-send-version-information-cannot-open-regex-definitions-in-conf-usrlocalsharefossologycopyrightagentcopyrightconf",level:4},{value:"Solution",id:"solution-1",level:5},{value:"adj2nest debian package not found",id:"adj2nest-debian-package-not-found",level:4},{value:"Solution",id:"solution-2",level:5},{value:"[php7] [pid 19] [client 172.17.0.1:7237] PHP Fatal error:  Uncaught Exception: unsatisfied dependency &#39;agent_unpack&#39;",id:"php7-pid-19-client-17217017237-php-fatal-error--uncaught-exception-unsatisfied-dependency-agent_unpack",level:4},{value:"Suggested solution",id:"suggested-solution",level:5},{value:"End of the week results",id:"end-of-the-week-results",level:2}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"coding-week-5",children:"Coding Week 5"})}),"\n",(0,o.jsx)(n.h2,{id:"meeting-0",children:"Meeting 0"}),"\n",(0,o.jsx)(n.h3,{id:"organizer",children:"Organizer"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Gaurav Mishra"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"attendees",children:"Attendees"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ayush Bharadwaj"}),"\n",(0,o.jsx)(n.li,{children:"Vasudev Maduri"}),"\n",(0,o.jsx)(n.li,{children:"Kaushlendra Singh"}),"\n",(0,o.jsx)(n.li,{children:"Shreya Pratap"}),"\n",(0,o.jsx)(n.li,{children:"Omar AbdelSamea"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"outcomes",children:"Outcomes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Presented a working method of using ",(0,o.jsx)(n.code,{children:"kubectl exec"})," and tested with agents [ununpack, copyright, nomos]"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"spawning-agents-using-kubectl-exec",children:["Spawning agents using ",(0,o.jsx)(n.code,{children:"kubectl exec"})]}),"\n",(0,o.jsx)(n.h3,{id:"issues",children:"Issues"}),"\n",(0,o.jsx)(n.h4,{id:"copyright-agent-didnt-send-version-information-wrong-command-line-arguments",children:'[copyright]: agent didn\'t send version information: "wrong command line arguments"'}),"\n",(0,o.jsx)(n.p,{children:"command: /etc/fossology/mods-enabled/copyright/agent/copyright --scheduler_start --userID=0 --groupID=0 --scheduler_start --jobId=0"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["argument ",(0,o.jsx)(n.code,{children:"--scheduler_start"})," is present twice found in meta_agent_init() 779 and agent_spawn 701"]}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"solution",children:"Solution"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["removing ",(0,o.jsx)(n.code,{children:"--scheduler_start"})," from agent_spawn() 701"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"copyright--agent-didnt-send-version-information-cannot-open-regex-definitions-in-conf-usrlocalsharefossologycopyrightagentcopyrightconf",children:'[copyright]:  agent didn\'t send version information: "cannot open regex definitions in conf: /usr/local/share/fossology/copyright/agent/copyright.conf"'}),"\n",(0,o.jsx)(n.h5,{id:"solution-1",children:"Solution"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["adding --config /etc/fossology/mods-enabled to the command.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Didn't work If this argument is added it looks for fossology.conf not copyright.conf\n'FATAL libfossscheduler.c.240: unable to open system configuration: unable to open configuration file \"/etc/fossology/mods-enabled/fossology.conf\"'"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["create a soft link from /etc/fossology/mods-enabled/copyright/agent/copyright.conf",(0,o.jsx)(n.br,{}),"\n","to /usr/local/share/fossology/copyright/agent/copyright.conf","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Worked"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"adj2nest-debian-package-not-found",children:"adj2nest debian package not found"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"adj2nest is installed with ununpack package."}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"solution-2",children:"Solution"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"creating adj2nest deployment with ununpack image."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"php7-pid-19-client-17217017237-php-fatal-error--uncaught-exception-unsatisfied-dependency-agent_unpack",children:["[php7",":error","] [pid 19] [client 172.17.0.1:7237] PHP Fatal error:  Uncaught Exception: unsatisfied dependency 'agent_unpack'"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"UI folder from agent is needed inside the web container otherwise it will not load it as a plugin."}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"suggested-solution",children:"Suggested solution"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"bundling UI folders of all agents in the fossology-web package."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"end-of-the-week-results",children:"End of the week results"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Solved presented issues of agent spawning."}),"\n",(0,o.jsxs)(n.li,{children:["Applied some hacks to solve pending issues and proper solution will be provided later","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"for agents conf, Agents folders are copied into the container."}),"\n",(0,o.jsx)(n.li,{children:"for web package missing UI folders, Agents folders are copied into the container."}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);