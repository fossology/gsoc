"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[8018],{20150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"2023/minutes/2023-07-06","title":"Week 6","description":"\x3c!--","source":"@site/docs/2023/minutes/2023-07-06.md","sourceDirName":"2023/minutes","slug":"/2023/minutes/2023-07-06","permalink":"/gsoc/docs/2023/minutes/2023-07-06","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2023/minutes/2023-07-06.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"Week 6"},"sidebar":"2023","previous":{"title":"Week 5","permalink":"/gsoc/docs/2023/minutes/2023-06-29"},"next":{"title":"Week 7","permalink":"/gsoc/docs/2023/minutes/2023-07-20"}}');var t=s(74848),r=s(28453);const o={sidebar_position:9,title:"Week 6"},l=void 0,h={},c=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates from contributors",id:"updates-from-contributors",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Hero2323",children:"Abdelrahman jamal"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/soham4abc",children:"Soham Banerjee"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/k-avy",children:"Kavya Shukla"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"mailto:katharina.ettinger@siemens.com",children:"Katharina Ettinger"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/dushimsam",children:"Samuel Dushimimana"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/HastagAB",children:"Ayush Bhardwaj"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updates-from-contributors",children:"Updates from contributors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/k-avy",children:"Kavya Shukla"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Done authentication for endpoints."}),"\n",(0,t.jsxs)(n.li,{children:["Added auth for all endpoints.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Suggestion is to add authentication for non ",(0,t.jsx)(n.code,{children:"GET"})," endpoints like create license, update, get user, create users, etc."]}),"\n",(0,t.jsx)(n.li,{children:"The endpoints to get all licenses, license by shortname, search license should not have authentication."}),"\n",(0,t.jsxs)(n.li,{children:["Please check response status code and response body should have same code (like ",(0,t.jsx)(n.code,{children:"401"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"Cleanup the code a bit."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Merge conflict resolution required for ",(0,t.jsx)(n.a,{href:"https://github.com/fossology/LicenseDb/pull/11",children:"#11"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Hero2323",children:"Abdelrahman jamal"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tried to generate dataset using FOSSology (instead of ChatGPT)."}),"\n",(0,t.jsx)(n.li,{children:"Scanned opensource projects to get data. But needed manual annotation, which is time consuming."}),"\n",(0,t.jsxs)(n.li,{children:["Could use ",(0,t.jsx)(n.a,{href:"https://github.com/nexB/scancode-toolkit",children:"scancode-toolkit"})," instead to annotate copyrights instead."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/soham4abc",children:"Soham Banerjee"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Focused on updating PR with changes requested."}),"\n",(0,t.jsxs)(n.li,{children:["Working on new endpoints for Customize page. Created ",(0,t.jsx)(n.code,{children:"GET"})," endpoint, had discussion with mentor and will incorporate the changes suggested."]}),"\n",(0,t.jsx)(n.li,{children:"Worked on Conf endpoints as well. Need review from mentors."}),"\n",(0,t.jsxs)(n.li,{children:["Made the changes to have pagination in Copyright fetch endpoint ",(0,t.jsx)(n.a,{href:"https://github.com/fossology/fossology/2475",children:"#2475"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Suggestion from Avinal is to add some more descriptions to the issues created for the REST API project.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Could work more on the title (they currently have only short names)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/dushimsam",children:"Samuel Dushimimana"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create endpoints for Standard License Comments and Acknowledgements."}),"\n",(0,t.jsx)(n.li,{children:"Working on endpoint for Candidate license Merge and Dashboards."}),"\n",(0,t.jsx)(n.li,{children:"Presented how the current pages looks like in the UI and what different endpoints will be needed to achieve the same results."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/its-sushant",children:"Sushant Kumar"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Absent."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);