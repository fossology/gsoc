"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[6713],{19271:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/scancodecopyrightdelete-8411de94f798fcf287f1244095b8793d.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(96540);const t={},d=i.createContext(t);function c(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(d.Provider,{value:s},e.children)}},38016:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/scancodecopyrightget-f938cc8a1df1ca3830eb1e30a8d7c605.png"},54215:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/scancodecopyrightput-66096664001b8d527bb4199864700b13.png"},59259:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"2024/rest/updates/Divij/2024-06-25","title":"Week 5","description":"\x3c!--","source":"@site/docs/2024/rest/updates/Divij/2024-06-25.md","sourceDirName":"2024/rest/updates/Divij","slug":"/2024/rest/updates/Divij/2024-06-25","permalink":"/gsoc/docs/2024/rest/updates/Divij/2024-06-25","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2024/rest/updates/Divij/2024-06-25.md","tags":[{"inline":true,"label":"gsoc24","permalink":"/gsoc/docs/tags/gsoc-24"},{"inline":true,"label":"rest","permalink":"/gsoc/docs/tags/rest"}],"version":"current","frontMatter":{"title":"Week 5","author":"Divij Sharma","tags":["gsoc24","rest"]},"sidebar":"2024","previous":{"title":"Week 4","permalink":"/gsoc/docs/2024/rest/updates/Divij/2024-06-18"},"next":{"title":"Week 6","permalink":"/gsoc/docs/2024/rest/updates/Divij/2024-07-02"}}');var t=n(74848),d=n(28453);const c={title:"Week 5",author:"Divij Sharma",tags:["gsoc24","rest"]},o="Week 5 meeting and activities",r={},a=[{value:"Attendees",id:"attendees",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Activities",id:"activities",level:2},{value:"Screenshots",id:"screenshots",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"week-5-meeting-and-activities",children:"Week 5 meeting and activities"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"(June 25,2024)"})}),"\n",(0,t.jsx)(s.h2,{id:"attendees",children:"Attendees"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/dvjsharma",children:"Divij Sharma"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,t.jsx)(s.li,{children:"Katharina Ettinger"}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"discussion",children:"Discussion"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"One Shot Analysis"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Showed demo on the One Shot Analysis endpoints. The endpoints are used to run Nomos, Monk and CEU scans on the uploaded file."}),"\n",(0,t.jsxs)(s.li,{children:["Raised a concern about ",(0,t.jsx)(s.code,{children:"start"})," and ",(0,t.jsx)(s.code,{children:"end"})," parameters in the highlights object are casted as string in the response. Got a suggestion to cast them as integer."]}),"\n",(0,t.jsx)(s.li,{children:"Shared that the endpoints don't return the scanned text, as passing it in the response will make the server slow and is not a requirement either. Scanned text can always be processed on the client side. Got positive feedback on this."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"User Copyright Findings"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Showed screenshots of the new endpoints to get/delete/restore/update/count user copyright findings. The endpoints are used to manage the user copyright findings."}),"\n",(0,t.jsx)(s.li,{children:"No concerns were raised about these endpoints."}),"\n",(0,t.jsx)(s.li,{children:"Will need to implement similar endpoints for scancode findings for copyright, email, author and URL."}),"\n",(0,t.jsxs)(s.li,{children:["Asked about the necessity of ",(0,t.jsx)(s.code,{children:"count"})," endpoint. It can be skipped as of now as it was a user request specifically for ",(0,t.jsx)(s.code,{children:"copyright"})," endpoint, which is already implemented."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"OAuth 2.0 Authorization Code Flow"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Showed a demo on the OAuth 2.0 Authorization Code Flow. The endpoints are used to get the authorization redirect URL from the server and exchange the authorization code for an access token."}),"\n",(0,t.jsxs)(s.li,{children:["Following concerns were raised:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Since the flow type is Authorization Code, the user should not add the client in their list of active clients. The client should be added by the server admin in FOSSology configuration only."}),"\n",(0,t.jsx)(s.li,{children:"Since the client is no longer added by the user, the current auth flow will not work as we were authorizing the client based on the client id they have added."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Got a suggestion to use the ",(0,t.jsx)(s.code,{children:"/userinfo"})," endpoint to get the user details based on the access token and then authorize the client based on the user details."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"activities",children:"Activities"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Added 12 new endpoints to expose operations for scancode findings for copyright, email, author and URL."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Added the following new endpoints for scancode copyright findings."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["GET ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights"})," : To retrieve scancode copyright findings."]}),"\n",(0,t.jsxs)(s.li,{children:["DELETE ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights/{hash}"})," : To deactivate scancode copyright."]}),"\n",(0,t.jsxs)(s.li,{children:["PATCH ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights/{hash}"})," : To restore deactivated scancode copyright."]}),"\n",(0,t.jsxs)(s.li,{children:["PUT ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights/{hash}"})," : To update scancode copyright."]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Added the following new endpoints for scancode email findings."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["GET ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-emails"})," : To retrieve scancode email findings."]}),"\n",(0,t.jsxs)(s.li,{children:["DELETE ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-emails/{hash}"})," : To deactivate scancode email."]}),"\n",(0,t.jsxs)(s.li,{children:["PATCH ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-emails/{hash}"})," : To restore deactivated scancode email."]}),"\n",(0,t.jsxs)(s.li,{children:["PUT ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-emails/{hash}"})," : To update scancode email."]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Added the following new endpoints for scancode url findings."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["GET ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-urls"})," : To retrieve scancode url findings."]}),"\n",(0,t.jsxs)(s.li,{children:["DELETE ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-urls/{hash}"})," : To deactivate scancode url."]}),"\n",(0,t.jsxs)(s.li,{children:["PATCH ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-urls/{hash}"})," : To restore deactivated scancode url."]}),"\n",(0,t.jsxs)(s.li,{children:["PUT ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-urls/{hash}"})," : To update scancode url."]}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Added the following new endpoints for scancode author findings."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["GET ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-authors"})," : To retrieve scancode author findings."]}),"\n",(0,t.jsxs)(s.li,{children:["DELETE ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-authors/{hash}"})," : To deactivate scancode author."]}),"\n",(0,t.jsxs)(s.li,{children:["PATCH ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-authors/{hash}"})," : To restore deactivated scancode author."]}),"\n",(0,t.jsxs)(s.li,{children:["PUT ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-authors/{hash}"})," : To update scancode author."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Uplink PR ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2772",children:"feat(api): New endpoints to get/delete/restore/update scancode copyright, email, author, url findings"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Updated the ",(0,t.jsx)(s.code,{children:"start"})," and ",(0,t.jsx)(s.code,{children:"end"})," parameters in the highlights object to be casted as integer in the response."]}),"\n",(0,t.jsxs)(s.p,{children:["Uplink PR ",(0,t.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2768",children:"feat(api): Added OneShot analysis endpoints for license & copyright"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"screenshots",children:"Screenshots"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["GET ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights"})," : To retrieve scancode copyright findings.\n",(0,t.jsx)(s.img,{alt:"get",src:n(38016).A+"",width:"2194",height:"1099"})]}),"\n",(0,t.jsxs)(s.li,{children:["DELETE ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights/{hash}"})," : To deactivate scancode copyright.\n",(0,t.jsx)(s.img,{alt:"delete",src:n(19271).A+"",width:"2194",height:"748"})]}),"\n",(0,t.jsxs)(s.li,{children:["PATCH ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights/{hash}"})," : To restore deactivated scancode copyright.\n",(0,t.jsx)(s.img,{alt:"patch",src:n(82674).A+"",width:"2194",height:"748"})]}),"\n",(0,t.jsxs)(s.li,{children:["PUT ",(0,t.jsx)(s.code,{children:"uploads/{id}/item/{itemId}/scancode-copyrights/{hash}"})," : To update scancode copyright.\n",(0,t.jsx)(s.img,{alt:"put",src:n(54215).A+"",width:"2194",height:"907"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.em,{children:["Screenshots are similar for ",(0,t.jsx)(s.code,{children:"email"}),", ",(0,t.jsx)(s.code,{children:"url"})," and ",(0,t.jsx)(s.code,{children:"author"})," endpoints."]})})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},82674:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/scancodecopyrightpatch-8480e4bc266ea5609d32b202909dd74e.png"}}]);