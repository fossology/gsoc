"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1521],{21219:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(74848),t=n(28453);const r={title:"Week 3",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},l=void 0,o={id:"2021/buildsystem/updates/2021-06-22",title:"Week 3",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-06-22.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-06-22",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-22",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-06-22.md",tags:[{inline:!0,label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{inline:!0,label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{inline:!0,label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{inline:!0,label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Week 3",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Week 2",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-18"},next:{title:"Week 4",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-29"}},a={},c=[{value:"Meeting 5",id:"meeting-5",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Week 3 Progress",id:"week-3-progress",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"meeting-5",children:"Meeting 5"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"(June 22nd, 2021)"})}),"\n",(0,i.jsx)(s.p,{children:"In this fifth meeting, question related to versioning and obtaining commit hash were discussed, this was a short meeting."}),"\n",(0,i.jsx)(s.h3,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/mcjaeger",children:"Michael C. Jaeger"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/itssingh",children:"Sarita Singh"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"week-3-progress",children:"Week 3 Progress"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Version file Implementation"}),"\n",(0,i.jsx)(s.li,{children:"Initial functions on obtaining commit and branch info"}),"\n",(0,i.jsxs)(s.li,{children:["To test the current progress, follow the instructions ",(0,i.jsx)("a",{href:"https://github.com/avinal/FOSSology/wiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"discussions",children:"Discussions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"What is the regex expression used for obtaining version information?"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The regex has recently been modified to cover recent versions. The latest form is as below:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"([[:digit:]]+.[[:digit:]]+.[[:digit:]]+)(-?rc[[:digit:]]+)?-?([[:digit:]]*)-?[[:alnum:]]*\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"You can also try alternatives to regex if possible for CMake."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Should I use"})," ",(0,i.jsx)(s.code,{children:"git describe --tags"})," ",(0,i.jsx)(s.strong,{children:"or"})," ",(0,i.jsx)(s.code,{children:"git describe --always HEAD"})," ",(0,i.jsx)(s.strong,{children:"for obtaining version information?"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["In FOSSology we always use ",(0,i.jsx)(s.code,{children:"git describe --tags"}),", no exception whatsoever."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["CMake provides a preset configuration for the install path on GNU systems, you can see the description ",(0,i.jsx)(s.a,{href:"https://cmake.org/cmake/help/v3.10/module/GNUInstallDirs.html",children:"here"})," based on the ",(0,i.jsx)(s.a,{href:"https://www.gnu.org/prep/standards/html_node/Directory-Variables.html",children:"configuration"})," suggested by the GNU After comparing the variables defined in Makefile.conf with these, it seems directly taken from GNU standards. So I wanted to ask if this would be okay to stick to the presets, instead of manually declaring the same paths? The former step will reduce the number of variables we are currently caching and will make it flexible for different installation scenarios."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Using the GNU standards is the ideal situation but FOSSology uses slightly different locations. For example, all agents end up under ",(0,i.jsx)(s.code,{children:"/usr/local/share/fossology/"})," with their individual folders instead of going to ",(0,i.jsx)(s.code,{children:"/usr/local/bin/"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["If the same results can be achieved by using the ",(0,i.jsx)(s.code,{children:"CMAKE_INSTALL_<dir>"})," and ",(0,i.jsx)(s.code,{children:"CMAKE_INSTALL_PREFIX"})," then yeah, it will be preferred."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Try adding the version and commit hash info."}),"\n",(0,i.jsx)(s.li,{children:"Implement writing version files for each build."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);