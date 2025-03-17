"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[2973],{21262:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"2021/ui/updates/shruti/2021-08-03","title":"Week 8","description":"\x3c!--","source":"@site/docs/2021/ui/updates/shruti/2021-08-03.md","sourceDirName":"2021/ui/updates/shruti","slug":"/2021/ui/updates/shruti/2021-08-03","permalink":"/gsoc/docs/2021/ui/updates/shruti/2021-08-03","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2021/ui/updates/shruti/2021-08-03.md","tags":[],"version":"current","frontMatter":{"title":"Week 8","author":"Shruti Agarwal"},"sidebar":"2021","previous":{"title":"Week 7","permalink":"/gsoc/docs/2021/ui/updates/shruti/2021-07-27"},"next":{"title":"Week 9","permalink":"/gsoc/docs/2021/ui/updates/shruti/2021-08-10"}}');var n=i(74848),o=i(28453);const l={title:"Week 8",author:"Shruti Agarwal"},r=void 0,d={},a=[{value:"Screenshots",id:"screenshots",level:2},{value:"Add new Candidate License",id:"add-new-candidate-license",level:3},{value:"Upload From Server",id:"upload-from-server",level:3},{value:"Fix Delete Uploads",id:"fix-delete-uploads",level:3},{value:"Contributions",id:"contributions",level:2}];function c(e){const s={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Added the create new license page for candidate.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Added the endpoint and route for createCandidateLicense in constant folder."}),"\n",(0,n.jsx)(s.li,{children:"Created the function for it in services and api."}),"\n",(0,n.jsx)(s.li,{children:"Shifted the listing of license page in organize/license folder."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Fixed the groups error which leads to logout the user again and again."}),"\n",(0,n.jsxs)(s.li,{children:["Added the upload server page and the required state variables for it.\n",(0,n.jsx)(s.em,{children:"Currently, upload from server api is unavailable."})]}),"\n",(0,n.jsx)(s.li,{children:"Code is getting broken if no upload is selected to delete. Added the error checks in deleteUploads."}),"\n",(0,n.jsx)(s.li,{children:"Fixed the analysis options in vcs. Added the defaultAgentsList function instead of hard coded analysis options."}),"\n",(0,n.jsx)(s.li,{children:"Fixed the user experience for uploads page since uploads page are longer than one page so on clicking the upload button user have to manually scroll to see the snackbar that whether the file is uploaded or not and for the first time user it may be bit confusing."}),"\n",(0,n.jsxs)(s.li,{children:["Created the separate repository for ",(0,n.jsx)(s.a,{href:"https://github.com/Shruti3004/FOSSology-REST-API",children:"fossology rest apis"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Added the open pull requests of rest api in the new repository. Added prs are: ",(0,n.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2064",children:"#2064"})," and ",(0,n.jsx)(s.a,{href:"https://github.com/fossology/fossology/pull/2038",children:"#2038"})]}),"\n",(0,n.jsxs)(s.li,{children:["Opened the issues for required rest apis.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Pagination feature request in the Search api."}),"\n",(0,n.jsx)(s.li,{children:"Single request for the upload and analysis."}),"\n",(0,n.jsx)(s.li,{children:"Edit request for the Uploads."}),"\n",(0,n.jsx)(s.li,{children:"Upload from URL api has missing dependencies."}),"\n",(0,n.jsx)(s.li,{children:"Jobs api is not giving complete data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"screenshots",children:"Screenshots"}),"\n",(0,n.jsx)(s.h3,{id:"add-new-candidate-license",children:"Add new Candidate License"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"add-new-candidate-license",src:i(90484).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"add-new-candidate-success",src:i(23627).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(s.h3,{id:"upload-from-server",children:"Upload From Server"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"upload-from-server",src:i(60081).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(s.h3,{id:"fix-delete-uploads",children:"Fix Delete Uploads"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"fix-delete-uploads",src:i(37993).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(s.h2,{id:"contributions",children:"Contributions"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/120/commits/7478f68434eac3639f0acec28ee422020781aae9",children:"feat(license): added the candidate new license page"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/120/commits/2fc264eb9a6929c454af03c03ea97b05d496316a",children:"fix(ui): fixed the ui changes in create candidate license page"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/120/commits/006c011f8d45f91007f26c78a1916d732cd4664f",children:"fix(groups): fixed the logout error"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/121",children:"feat(upload-server): added the upload server page"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/123",children:"feat(refactor): refactored the codebase"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/126",children:"fix(errors): Added the error checks in deleteUploads"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/127",children:"fix(vcs): fixed the analysis of scanData"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/fossology/FOSSologyUI/pull/132",children:"fix(ux): fixed the ux of upload pages"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/1",children:"REST API: Pagination feature in the Search request"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/2",children:"REST API: Created the single request for the upload and analysis"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/3",children:"REST API: Edit request for the Uploads"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/4",children:"REST API: Upload from URL"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/Shruti3004/FOSSology-REST-API/issues/5",children:"REST API: Jobs api is not giving complete data"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},23627:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/addLicenseSuccess-0d5e2bd7eaa3ff5a21be36554f3d36e0.png"},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>r});var t=i(96540);const n={},o=t.createContext(n);function l(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(o.Provider,{value:s},e.children)}},37993:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/fixDeleteUploads-b9caee8a86a0dafa764817a1916270e1.png"},60081:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/uploadServer-e1676c250c837c7fa8f3b151ad454c73.png"},90484:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/addLicense-c873e5e3c4852e608845c5b955d7bac0.png"}}]);