"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1797],{22173:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(74848),i=s(28453);const r={title:"Week 11",author:"Rajul Jha",tags:["gsoc24","CI"]},a="Week 11",o={id:"2024/ci-scanner/updates/2024-08-15",title:"Week 11",description:"\x3c!--",source:"@site/docs/2024/ci-scanner/updates/2024-08-15.md",sourceDirName:"2024/ci-scanner/updates",slug:"/2024/ci-scanner/updates/2024-08-15",permalink:"/gsoc/docs/2024/ci-scanner/updates/2024-08-15",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2024/ci-scanner/updates/2024-08-15.md",tags:[{inline:!0,label:"gsoc24",permalink:"/gsoc/docs/tags/gsoc-24"},{inline:!0,label:"CI",permalink:"/gsoc/docs/tags/ci"}],version:"current",frontMatter:{title:"Week 11",author:"Rajul Jha",tags:["gsoc24","CI"]},sidebar:"2024",previous:{title:"Week 10",permalink:"/gsoc/docs/2024/ci-scanner/updates/2024-08-08"},next:{title:"Introduction",permalink:"/gsoc/docs/2024/pipeline/"}},l={},c=[{value:"Meeting 1",id:"meeting-1",level:2},{value:"Attendees",id:"attendees",level:2},{value:"Discussions",id:"discussions",level:2},{value:"Work Done",id:"work-done",level:2},{value:"Planning for next week",id:"planning-for-next-week",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"week-11",children:"Week 11"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Aug, 09 2024 - Aug 15, 2024)"})}),"\n",(0,t.jsx)(n.h2,{id:"meeting-1",children:"Meeting 1"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Aug 14, 2024)"})}),"\n",(0,t.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/rajuljha",children:"Rajul Jha"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n",(0,t.jsx)(n.li,{children:"Katharina"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"discussions",children:"Discussions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Showed the demo of the download dependencies feature to ",(0,t.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav"})," and got feedback for the same."]}),"\n",(0,t.jsxs)(n.li,{children:["Discussed using the ",(0,t.jsx)(n.code,{children:"ununpack"})," agent for unpacking the downloaded packages rather than the current dependency on python libraries."]}),"\n",(0,t.jsxs)(n.li,{children:["Rather than taking an input directory as input to the ",(0,t.jsx)(n.code,{children:"--sbom-path"}),", it would be better to take a single file as input.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Software projects only have one ",(0,t.jsx)(n.code,{children:"sbom"})," as a convention. So, if the project is using multiple languages or dependencies, then they are combined to a single sbom file, which can be passed to our scanner."]}),"\n",(0,t.jsx)(n.li,{children:"We want to implement different parsers for different languages. So, we need a parent class of the parsers whose job is to set which parser should handle a particular component."}),"\n",(0,t.jsxs)(n.li,{children:["We can differentiate between languages and which parser to use based on the ",(0,t.jsx)(n.code,{children:"purl"})," for the component."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Got a new feature request in order to allow scanning a particular directory by providing the path to it via CLI."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"work-done",children:"Work Done"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Implemented the feature of scanning dependencies using ",(0,t.jsx)(n.code,{children:"fossologyscanner"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Introduced a module ",(0,t.jsx)(n.code,{children:"ScanDeps"})," that has a Parsers file that contains specific parsers for each supported language."]}),"\n",(0,t.jsxs)(n.li,{children:["Currently, it has ",(0,t.jsx)(n.code,{children:"PythonParser"})," only. Working on ",(0,t.jsx)(n.code,{children:"NPMParser"}),". The job of the parsers is to take the sbom file and extract the download urls from it,\nsave it in a particular format like a tuple of ",(0,t.jsx)(n.code,{children:"(<package_name> , <download_url>)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["These results are then fed to a ",(0,t.jsx)(n.code,{children:"Downloader"})," class that has methods to concurrently download these packages from the urls, and then extract them\nfrom their respective formats to a directory called ",(0,t.jsx)(n.code,{children:"pkg_downloads"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"download_concurrently"})," method improves the speed of downloading and exporting packages significantly by allowing multiple downloads to run on different threads parallelly."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Started working on the new feature and improving the different parsers."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"planning-for-next-week",children:"Planning for next week"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Complete the PythonParser and raise a PR for the same."}),"\n",(0,t.jsx)(n.li,{children:"Complete the directory scan feature and raise a PR."}),"\n",(0,t.jsxs)(n.li,{children:["Start working on ",(0,t.jsx)(n.code,{children:"NPMParser"})," next."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);