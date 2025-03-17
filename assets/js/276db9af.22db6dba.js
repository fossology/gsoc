"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1006],{16639:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/fossy_response-5cad91f1257d7fde183ebfe90812d3a6.png"},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(96540);const o={},i=t.createContext(o);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:s},e.children)}},49400:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/browse_pagination-3e2ff79b59e617faaa35bc8a5b1471ca.png"},66581:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/buggy_response-2236d90eaa295bf17c2d9b754026152d.png"},87881:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"2022/ui/updates/soham/2022-07-7","title":"Week 3","description":"\x3c!--","source":"@site/docs/2022/ui/updates/soham/2022-07-7.md","sourceDirName":"2022/ui/updates/soham","slug":"/2022/ui/updates/soham/2022-07-7","permalink":"/gsoc/docs/2022/ui/updates/soham/2022-07-7","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2022/ui/updates/soham/2022-07-7.md","tags":[{"inline":true,"label":"gsoc22","permalink":"/gsoc/docs/tags/gsoc-22"},{"inline":true,"label":"react","permalink":"/gsoc/docs/tags/react"},{"inline":true,"label":"API","permalink":"/gsoc/docs/tags/api"}],"version":"current","frontMatter":{"title":"Week 3","author":"Soham Banerjee","author_url":"https://github.com/soham4abc","author_image_url":"https://avatars.githubusercontent.com/u/63705023?v=4","tags":["gsoc22","react","API"]},"sidebar":"2022","previous":{"title":"Week 2","permalink":"/gsoc/docs/2022/ui/updates/soham/2022-07-3"},"next":{"title":"Week 4","permalink":"/gsoc/docs/2022/ui/updates/soham/2022-07-8"}}');var o=n(74848),i=n(28453);const a={title:"Week 3",author:"Soham Banerjee",author_url:"https://github.com/soham4abc",author_image_url:"https://avatars.githubusercontent.com/u/63705023?v=4",tags:["gsoc22","react","API"]},r=void 0,l={},c=[{value:"Horizontal Pagination implementation in browse page",id:"horizontal-pagination-implementation-in-browse-page",level:2},{value:"PR link - feat(ui): Pagination in Browse page",id:"pr-link---featui-pagination-in-browse-page",level:3},{value:"/jobs API",id:"jobs-api",level:2},{value:"PR link - feat(API): /jobs returns only logged in user&#39;s jobs",id:"pr-link---featapi-jobs-returns-only-logged-in-users-jobs",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"horizontal-pagination-implementation-in-browse-page",children:"Horizontal Pagination implementation in browse page"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.em,{children:"(July 3rd, 2022)"})}),"\n",(0,o.jsx)(s.p,{children:"Implementation of the horizontal page navigator in the browse page. The pagination module fetches the data from the API on page basis thus reducing the response time of the API in the browse page. This was implemented earlier in the allRecentJobs page."}),"\n",(0,o.jsxs)(s.p,{children:["The Browse page with the new Pagination module: ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(s.img,{alt:"pagination",src:n(49400).A+"",width:"1920",height:"997"})]}),"\n",(0,o.jsxs)(s.h3,{id:"pr-link---featui-pagination-in-browse-page",children:["PR link - ",(0,o.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/237",children:"feat(ui): Pagination in Browse page"})]}),"\n",(0,o.jsx)(s.h2,{id:"jobs-api",children:"/jobs API"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"/jobs"})," endpoint now sends only the jobs created by the logged in user. This API can be called by both the Admin and other users."]}),"\n",(0,o.jsxs)(s.p,{children:["Fossy user Page: ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(s.img,{alt:"jobs_res",src:n(16639).A+"",width:"1920",height:"994"})]}),"\n",(0,o.jsxs)(s.p,{children:["Another user's Page: ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(s.img,{alt:"jobs_res",src:n(66581).A+"",width:"1920",height:"1002"})]}),"\n",(0,o.jsx)(s.p,{children:"Mentors asked to create an flag to get all the jobs irrespective of the user which will only be used by the Admin user."}),"\n",(0,o.jsxs)(s.h3,{id:"pr-link---featapi-jobs-returns-only-logged-in-users-jobs",children:["PR link - ",(0,o.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2252",children:"feat(API): /jobs returns only logged in user's jobs"})]}),"\n",(0,o.jsx)(s.h3,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Implementing the neccesary flags proposed by the mentors in the API."}),"\n",(0,o.jsx)(s.li,{children:"Create any missing API endpoint related to the Jobs module."}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);