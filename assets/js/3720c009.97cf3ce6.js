"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[4787],{28400:(t,e,s)=>{s.d(e,{Q:()=>l,b:()=>r});var a=s(59979);const r=()=>(0,a.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}},51191:(t,e,s)=>{s.d(e,{A:()=>o});s(96540);var a=s(28400),r=s(61871),l=s(24861);const n={tag:"tag_Nnez"};var c=s(74848);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.A,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.A,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function o(t){let{tags:e}=t;const s=(0,a.Q)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},61871:(t,e,s)=>{s.d(e,{A:()=>c});s(96540);var a=s(34164),r=s(7634);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(74848);function c(t){let{permalink:e,label:s,count:c,description:i}=t;return(0,n.jsxs)(r.A,{href:e,title:i,className:(0,a.A)(l.tag,c?l.tagWithCount:l.tagRegular),children:[s,c&&(0,n.jsx)("span",{children:c})]})}},81478:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});s(96540);var a=s(34164),r=s(7918),l=s(90811),n=s(28400),c=s(51191),i=s(87907),o=s(24861),g=s(74848);function u(t){let{title:e}=t;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:e}),(0,g.jsx)(i.A,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:s}=t;return(0,g.jsx)(r.e3,{className:(0,a.A)(l.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.A,{as:"h1",children:s}),(0,g.jsx)(c.A,{tags:e})]})})})})}function d(t){const e=(0,n.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...t,title:e}),(0,g.jsx)(h,{...t,title:e})]})}}}]);