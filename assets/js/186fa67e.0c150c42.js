"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[2189],{8650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"2021/scancode/copyright","title":"Copyright UI","description":"\x3c!--","source":"@site/docs/2021/scancode/copyright.md","sourceDirName":"2021/scancode","slug":"/2021/scancode/copyright","permalink":"/gsoc/docs/2021/scancode/copyright","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2021/scancode/copyright.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Copyright UI","author":"Sarita"},"sidebar":"2021","previous":{"title":"Installing scancode","permalink":"/gsoc/docs/2021/scancode/installation"},"next":{"title":"First Evaluation","permalink":"/gsoc/docs/2021/scancode/first_evaluation"}}');var i=t(74848),o=t(28453);const a={sidebar_position:4,title:"Copyright UI",author:"Sarita"},r=void 0,c={},l=[{value:"Attendees",id:"attendees",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Date:2021-06-28"})}),"\n",(0,i.jsx)(n.h3,{id:"attendees",children:"Attendees"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra "})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh "})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/mcjaeger",children:"Michael C. Jaeger"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal "})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/hastagAB",children:"Ayush Bhardwaj "})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/avinal",children:"Avinal Kumar "})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/itssingh",children:"Sarita Singh "})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"discussions",children:"Discussions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["About Copyright UI (Explained by Gaurav)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Starting with copyright-hist, there are two types of content ",(0,i.jsx)(n.code,{children:"statement"}),", coming from the copyright agent and ",(0,i.jsx)(n.code,{children:"copyFindings"})," which is manual finding added by user form fossology UI."]}),"\n",(0,i.jsx)(n.li,{children:"HistogramBase is the base class for copyright-hist as well as email-hist."}),"\n",(0,i.jsxs)(n.li,{children:["In template there is ",(0,i.jsx)(n.code,{children:"DataTables"})," plug-in used which add some advanced feature to HTML tables like Pagination, Instant search, sorting, Use almost any data source."]}),"\n",(0,i.jsxs)(n.li,{children:["ajax-copyright-hist has collection of functions for different task like update, delete, undo and depending upon the call, function returns ",(0,i.jsx)(n.code,{children:"JsonResponse"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"When there is an API call(GET/POST request), JavaScript functions in the template folder calls ajax and depending upon type of action, ajax fetch data from database and return in JSON response. These JSON responses are rendered on UI."}),"\n",(0,i.jsxs)(n.li,{children:["Like c/cpp main function, FOSSology has ",(0,i.jsx)(n.a,{href:"https://github.com/fossology/fossology/blob/master/src/copyright/ui/HistogramBase.php#L187-L287",children:"Output function"})," which defines the entry point. We check in this function that what is the thing that user wants to do."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["About Copyright and Author table for ScanCode","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Two separate tables would be good."}),"\n",(0,i.jsx)(n.li,{children:"Number of agent scanning copyright is increasing."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"agent_fk"})," in the copyright table is used to  know the version of copyright agent."]}),"\n",(0,i.jsx)(n.li,{children:"Functionality to disable copyright should be there."}),"\n",(0,i.jsx)(n.li,{children:"Using same table, reporting would be straight away but using different table would be hectic to add reporting."}),"\n",(0,i.jsx)(n.li,{children:"There would be speed, reporting issues."}),"\n",(0,i.jsx)(n.li,{children:"In case of different tables there could be repetition in the copyright data in fossology finding and scancode finding."}),"\n",(0,i.jsx)(n.li,{children:"Growing data over years could be one of the main reason to keep table separate."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Start with copyright-hist and email-hist then move to ajax and template."}),"\n",(0,i.jsx)(n.li,{children:"FOSSology uses Output function as the main function(entry point)."}),"\n",(0,i.jsx)(n.li,{children:"In Initial development we can keep separate tables for fossology copyright and scancode copyright, users can select which agent report they want to see. Later on, based on the performance of these agents we can think of removing redundant data by merging these tables or any other idea."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);