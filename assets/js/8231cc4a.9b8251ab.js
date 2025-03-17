"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[3650],{21150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"2022/ui/updates/krishna/2022-09-04","title":"Week 12","description":"\x3c!--","source":"@site/docs/2022/ui/updates/krishna/2022-09-04.md","sourceDirName":"2022/ui/updates/krishna","slug":"/2022/ui/updates/krishna/2022-09-04","permalink":"/gsoc/docs/2022/ui/updates/krishna/2022-09-04","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2022/ui/updates/krishna/2022-09-04.md","tags":[{"inline":true,"label":"gsoc22","permalink":"/gsoc/docs/tags/gsoc-22"},{"inline":true,"label":"react","permalink":"/gsoc/docs/tags/react"},{"inline":true,"label":"Week 12","permalink":"/gsoc/docs/tags/week-12"}],"version":"current","frontMatter":{"title":"Week 12","author":"Krishna Mahato","author_url":"https://github.com/krishna9304","last_updated":"04th September, 2022","author_image_url":"https://avatars.githubusercontent.com/u/71918441?v=4","tags":["gsoc22","react","Week 12"]},"sidebar":"2022","previous":{"title":"Week 11","permalink":"/gsoc/docs/2022/ui/updates/krishna/2022-08-28"},"next":{"title":"Week 1","permalink":"/gsoc/docs/2022/ui/updates/samuel/2021-06-24"}}');var o=s(74848),i=s(28453);const a={title:"Week 12",author:"Krishna Mahato",author_url:"https://github.com/krishna9304",last_updated:"04th September, 2022",author_image_url:"https://avatars.githubusercontent.com/u/71918441?v=4",tags:["gsoc22","react","Week 12"]},d=void 0,r={},l=[{value:"Goals for the week",id:"goals-for-the-week",level:2},{value:"Designing <code>GET uploads/{id}/history</code>",id:"designing-get-uploadsidhistory",level:2},{value:"API PR Link : feat(API): /jobs/{id}/history GET route to get the history of all the jobs queued based on an upload #2307",id:"api-pr-link--featapi-jobsidhistory-get-route-to-get-the-history-of-all-the-jobs-queued-based-on-an-upload-2307",level:3},{value:"Testing <code>GET jobs/{id}/history</code>",id:"testing-get-jobsidhistory",level:2},{value:"Implementing the <code>Show jobs</code> page in the react UI (with API)",id:"implementing-the-show-jobs-page-in-the-react-ui-with-api",level:2},{value:"UI PR Link : feat(UI): added show jobs page to view all the jobs queued for the upload #256",id:"ui-pr-link--featui-added-show-jobs-page-to-view-all-the-jobs-queued-for-the-upload-256",level:3},{value:"Working Demo <code>Show jobs Page</code>",id:"working-demo-show-jobs-page",level:2},{value:"Conclusions and further plans",id:"conclusions-and-further-plans",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"goals-for-the-week",children:"Goals for the week"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Sl. No."}),(0,o.jsx)(n.th,{children:"Initial Goals"}),(0,o.jsx)(n.th,{children:"Completed"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"1."}),(0,o.jsx)(n.td,{children:"Solve requested changes on existing PRs"}),(0,o.jsx)(n.td,{children:"Done"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"2."}),(0,o.jsx)(n.td,{children:"Update the GSOC progress report repository"}),(0,o.jsx)(n.td,{children:"Done"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"3."}),(0,o.jsxs)(n.td,{children:["Design the show jobs API in ",(0,o.jsx)(n.code,{children:"openapi.yaml "})]}),(0,o.jsx)(n.td,{children:"Done"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"4."}),(0,o.jsx)(n.td,{children:"Implementing the show jobs page in the react UI (with API)"}),(0,o.jsx)(n.td,{children:"Done"})]})]})]}),"\n",(0,o.jsxs)(n.h2,{id:"designing-get-uploadsidhistory",children:["Designing ",(0,o.jsx)(n.code,{children:"GET uploads/{id}/history"})]}),"\n",(0,o.jsx)(n.p,{children:"The API design is something like mentioned below"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"/jobs/{id}/history:\n    parameters:\n      - name: id\n        required: true\n        description: Id of the upload\n        in: path\n        schema:\n          type: integer\n    get:\n      operationId: getJobsHistory\n      tags:\n      - Job\n      summary: Get the history of all the jobs queued based on an upload\n      description: Returns the history of all the jobs queued based on an upload\n      responses:\n        '200':\n          description: OK\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  $ref: '#/components/schemas/ShowJob'\n        '403':\n          description: Upload is not accessible\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/Info'\n        '404':\n          description: Upload does not exist\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/Info'\n        default:\n            $ref: '#/components/responses/defaultResponse'\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"api-pr-link--featapi-jobsidhistory-get-route-to-get-the-history-of-all-the-jobs-queued-based-on-an-upload-2307",children:["API PR Link : ",(0,o.jsx)(n.a,{href:"https://github.com/fossology/fossology/pull/2307",children:"feat(API): /jobs/{id}/history GET route to get the history of all the jobs queued based on an upload #2307"})]}),"\n",(0,o.jsxs)(n.h2,{id:"testing-get-jobsidhistory",children:["Testing ",(0,o.jsx)(n.code,{children:"GET jobs/{id}/history"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use any API platform like postman."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Pull the changes from the above PR."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If the upload id exists, you, can expect a response like this"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    [\n    {\n        "jobId": "7",\n        "jobName": "Nirjas-master.zip",\n        "jobQueue": [\n            {\n                "jq_pk": "11",\n                "jq_job_fk": "7",\n                "jq_type": "ununpack",\n                "jq_args": "3",\n                "jq_starttime": "2022-08-17 11:50:07",\n                "jq_endtime": "2022-08-17 11:50:08",\n                "jq_endtext": "Completed",\n                "jq_itemsprocessed": "88",\n                "jdep_jq_depends_fk": null,\n                "depends": [\n                    null\n                ],\n                "itemsPerSec": 88,\n                "canDoActions": true,\n                "isInProgress": false,\n                "isReady": true,\n                "download": ""\n            },\n            {\n                "jq_pk": "12",\n                "jq_job_fk": "7",\n                "jq_type": "adj2nest",\n                "jq_args": "3",\n                "jq_starttime": "2022-08-17 11:50:08",\n                "jq_endtime": "2022-08-17 11:50:08",\n                "jq_endtext": "Completed",\n                "jq_itemsprocessed": "88",\n                "jdep_jq_depends_fk": "11",\n                "depends": [\n                    "11"\n                ],\n                "itemsPerSec": 88,\n                "canDoActions": true,\n                "isInProgress": false,\n                "isReady": true,\n                "download": ""\n            },\n            {\n                "jq_pk": "13",\n                "jq_job_fk": "7",\n                "jq_type": "monk",\n                "jq_args": "3",\n                "jq_starttime": "2022-08-17 11:50:09",\n                "jq_endtime": "2022-08-17 11:50:12",\n                "jq_endtext": "Completed",\n                "jq_itemsprocessed": "77",\n                "jdep_jq_depends_fk": "12",\n                "depends": [\n                    "12"\n                ],\n                "itemsPerSec": 25.666666666666668,\n                "canDoActions": true,\n                "isInProgress": false,\n                "isReady": true,\n                "download": ""\n            },\n            {\n                "jq_pk": "14",\n                "jq_job_fk": "7",\n                "jq_type": "nomos",\n                "jq_args": "3",\n                "jq_starttime": "2022-08-17 11:50:09",\n                "jq_endtime": "2022-08-17 11:50:20",\n                "jq_endtext": "Completed",\n                "jq_itemsprocessed": "77",\n                "jdep_jq_depends_fk": "12",\n                "depends": [\n                    "12"\n                ],\n                "itemsPerSec": 7,\n                "canDoActions": true,\n                "isInProgress": false,\n                "isReady": true,\n                "download": ""\n            },\n            {\n                "jq_pk": "15",\n                "jq_job_fk": "7",\n                "jq_type": "ojo",\n                "jq_args": "3",\n                "jq_starttime": "2022-08-17 11:50:09",\n                "jq_endtime": "2022-08-17 11:50:09",\n                "jq_endtext": "Completed",\n                "jq_itemsprocessed": "77",\n                "jdep_jq_depends_fk": "12",\n                "depends": [\n                    "12"\n                ],\n                "itemsPerSec": 77,\n                "canDoActions": true,\n                "isInProgress": false,\n                "isReady": true,\n                "download": ""\n            }\n        ],\n        "upload": {\n            "uploadName": "Nirjas-master.zip",\n            "uploadId": "3",\n            "uploadDesc": "Test Zip",\n            "uploadItem": "3",\n            "uploadEta": ""\n        }\n    }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"implementing-the-show-jobs-page-in-the-react-ui-with-api",children:["Implementing the ",(0,o.jsx)(n.code,{children:"Show jobs"})," page in the react UI (with API)"]}),"\n",(0,o.jsxs)(n.h3,{id:"ui-pr-link--featui-added-show-jobs-page-to-view-all-the-jobs-queued-for-the-upload-256",children:["UI PR Link : ",(0,o.jsx)(n.a,{href:"https://github.com/fossology/FOSSologyUI/pull/256",children:"feat(UI): added show jobs page to view all the jobs queued for the upload #256"})]}),"\n",(0,o.jsx)(n.p,{children:"This PR contains two tasks"}),"\n",(0,o.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Creation of a new page that will show all the jobs queued for an upload and all other useful information.","\n",(0,o.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Create the static UI using reusable components."]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Integrate the API from ",(0,o.jsx)(n.a,{href:"https://github.com/fossology/fossology/pull/2307",children:"https://github.com/fossology/fossology/pull/2307"})]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Test Everything."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{className:"task-list-item",children:[(0,o.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","Reading the main licenses and status parameter from the backend and showing it in the browse table for each upload."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"working-demo-show-jobs-page",children:["Working Demo ",(0,o.jsx)(n.code,{children:"Show jobs Page"})]}),"\n",(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://user-images.githubusercontent.com/71918441/188309415-6d9ff002-a01c-44d5-8998-c6f200678415.mp4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(n.h2,{id:"conclusions-and-further-plans",children:"Conclusions and further plans"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Implement the report import functionality via REST API."}),"\n",(0,o.jsx)(n.li,{children:"Create the Report Import page in react UI."}),"\n",(0,o.jsxs)(n.li,{children:["Write a blog decribing the journey of ",(0,o.jsx)(n.strong,{children:"GSOC'2022"})," and contributions made during the tenure."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var t=s(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);