"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[7758],{51906:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=i(74848),l=i(28453);const t={title:"Week 4",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},r=void 0,o={id:"2021/buildsystem/updates/2021-06-29",title:"Week 4",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-06-29.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-06-29",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-29",draft:!1,unlisted:!1,editUrl:"https://github.com/fossology/gsoc/edit/main/docs/2021/buildsystem/updates/2021-06-29.md",tags:[{inline:!0,label:"gsoc21",permalink:"/gsoc/docs/tags/gsoc-21"},{inline:!0,label:"buildsystem",permalink:"/gsoc/docs/tags/buildsystem"},{inline:!0,label:"ci/cd",permalink:"/gsoc/docs/tags/ci-cd"},{inline:!0,label:"cmake",permalink:"/gsoc/docs/tags/cmake"}],version:"current",frontMatter:{title:"Week 4",author:"Avinal Kumar",author_url:"https://github.com/avinal",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["gsoc21","buildsystem","ci/cd","cmake"]},sidebar:"2021",previous:{title:"Week 3",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-22"},next:{title:"Week 5",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-07-09"}},c={},a=[{value:"Meeting 7",id:"meeting-7",level:2},{value:"Attendees",id:"attendees",level:3},{value:"Week 4 Progress",id:"week-4-progress",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3},{value:"Meeting 8",id:"meeting-8",level:2},{value:"Attendees",id:"attendees-1",level:3},{value:"Discussions",id:"discussions-1",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans-1",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"meeting-7",children:"Meeting 7"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(June 29th, 2021)"})}),"\n",(0,s.jsx)(n.p,{children:"In this seventh meeting question related to installing the FOSSology were discussed."}),"\n",(0,s.jsx)(n.h3,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/mcjaeger",children:"Michael C. Jaeger"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita Singh"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"week-4-progress",children:"Week 4 Progress"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CMake configuration files have been refactored to make each agent as a separate sub-project."}),"\n",(0,s.jsx)(n.li,{children:"VERSION files can be generated now during configure step"}),"\n",(0,s.jsx)(n.li,{children:"Version parsing logic implemented."}),"\n",(0,s.jsx)(n.li,{children:"VERSION and COMMIT_HASH added to every executables."}),"\n",(0,s.jsxs)(n.li,{children:["Installing part is complete except ",(0,s.jsx)("code",{children:"cli"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Symbolic Links are installing and working fine."}),"\n",(0,s.jsxs)(n.li,{children:["Version, Symbolic Links, ",(0,s.jsx)("code",{children:"VERSION"})," file generation, ",(0,s.jsx)("code",{children:"version.php"})," generation are now more modular and called via a single function for each agent"]}),"\n",(0,s.jsx)(n.li,{children:"Most dependencies are now moved to single configuration file."}),"\n",(0,s.jsx)(n.li,{children:"Vendor directory generation and installing are now working."}),"\n",(0,s.jsxs)(n.li,{children:["To test the current progress, follow the instructions ",(0,s.jsx)("a",{href:"https://github.com/avinal/FOSSology/wiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now",children:"here"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"discussions",children:"Discussions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"There are two types of replacements CMake can configure file with."})," ",(0,s.jsx)(n.code,{children:"@VARIABLE@"})," ",(0,s.jsx)(n.strong,{children:"and"})," ",(0,s.jsx)(n.code,{children:"${VARIABLE}"}),"\n",(0,s.jsx)(n.strong,{children:". Since in PHP"})," ",(0,s.jsx)(n.code,{children:"$variable"})," ",(0,s.jsx)(n.strong,{children:"is used, it may create problem for CMake replacements. So may I replace them?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Yeah sure, go ahead. It will be more robust."}),"\n",(0,s.jsxs)(n.li,{children:["The replacement of ",(0,s.jsx)(n.code,{children:"$VARIABLE"})," can be stopped by using ",(0,s.jsx)(n.code,{children:"@ONLY"})," option in ",(0,s.jsx)(n.code,{children:"configure_file(...)"})," command."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"How to generate vendor directory?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The code for generating vendor directory is in ",(0,s.jsx)(n.code,{children:"src/Makefile"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Before executing code for the generation, make sure to copy ",(0,s.jsx)(n.code,{children:"composer.json"})," and ",(0,s.jsx)(n.code,{children:"composer.lock"})," to the target directory."]}),"\n",(0,s.jsx)(n.li,{children:"There is also a patch that FOSSology needs to function as intended. Make sure to run that patch to check and apply."}),"\n",(0,s.jsxs)(n.li,{children:["For now, we generate ",(0,s.jsx)(n.em,{children:"vendor"})," while building, but it would be nice if it can be generated in the build step."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Currently I am generating the VERSION file in configure step itself. Should I move it to the build or install step?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Yeah, please move it to the build step. As in configure step the data might be outdated."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Is there any configuration for Release that we can use to install or test?"})," ",(0,s.jsx)(n.em,{children:"(Michael)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Yeah, there are 4 inbuilt configurations for various levels of optimization and can be applied to tests and installation."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Is the VERSION file is generated for each agent or whole project at once? Because in the latter case, the VERSION file can be generated as the last step."})," ",(0,s.jsx)(n.em,{children:"(Sarita)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No agent has a VERSION file along with the main VERSION file for FOSSology."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"How I can build and install a single agent or component?"})," ",(0,s.jsx)(n.em,{children:"(Sarita)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"There are two ways you can build and install a specific agent or component only."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The first one is quite simple. Just change your directory to the specific agent's directory and run all the usual commands for building and installing."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The second one is a bit for typing work. This can be used directly from the top-level directory. After configuring the CMake, you can run the following command to install the specific component."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# for Unix Makefiles\nmake list_install_component # this will list all the available components\ncmake -DCOMPONENT=<component-name> -P cmake_install.cmake\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["I am writing a macro that will let us install a component by simply running ",(0,s.jsx)(n.code,{children:"make install component"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Implement generation of vendor directory."}),"\n",(0,s.jsx)(n.li,{children:"Move VERSION file generation to build step."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"meeting-8",children:"Meeting 8"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(July 2nd, 2021)"})}),"\n",(0,s.jsx)(n.p,{children:"In this eighth meeting questions related to post install generation were asked. This was a short meeting."}),"\n",(0,s.jsx)(n.h3,{id:"attendees-1",children:"Attendees"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita Singh"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"discussions-1",children:"Discussions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Why all the symbolic links in cli points to"})," ",(0,s.jsx)(n.code,{children:"fo_wrapper"})," ",(0,s.jsx)(n.strong,{children:"script?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"fo_wrapper"})," script calls the PHP script on the symbolic link that called the fo_wrapper. It also initializes any requirement before calling the scripts."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"How to generate all the other configuration in"})," ",(0,s.jsx)(n.code,{children:"/usr/local/etc/fossology"})," ",(0,s.jsx)(n.strong,{children:"directory?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can find the input files for all these configurations in the ",(0,s.jsx)(n.code,{children:"install/defcon"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"What are"})," ",(0,s.jsx)(n.code,{children:"OBSOLETEFILES"})," ",(0,s.jsx)(n.strong,{children:"in"})," ",(0,s.jsx)(n.code,{children:"www/ui/Makefile"})," ",(0,s.jsx)(n.strong,{children:"?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"They are kept for compatibility purposes. Although they have been removed in the current versions of FOSSology, if a user installs a new version on top of an older instance, then we should explicitly remove those files."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"I have created a separate folder for generating vendor directory. Is that okay?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Yeah, it should be fine, But it would be better to rename it to something else. Or even better if moved to ",(0,s.jsx)(n.em,{children:"www"})," itself. Since these files are used by ",(0,s.jsx)(n.a,{href:"http://www",children:"www"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion-and-further-plans-1",children:"Conclusion and Further Plans"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Move ",(0,s.jsx)(n.code,{children:"vendor"})," scripts to ",(0,s.jsx)(n.code,{children:"www"})," directory."]}),"\n",(0,s.jsx)(n.li,{children:"Implement installing for FOSSology cli."}),"\n",(0,s.jsx)(n.li,{children:"Implement installing configuration scripts."}),"\n",(0,s.jsx)(n.li,{children:"Finish installation for testing"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(96540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);