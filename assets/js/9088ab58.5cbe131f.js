"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1878],{7868:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"2023/copyrights/updates/2023-08-30","title":"Week 14","description":"\x3c!--","source":"@site/docs/2023/copyrights/updates/2023-08-30.md","sourceDirName":"2023/copyrights/updates","slug":"/2023/copyrights/updates/2023-08-30","permalink":"/gsoc/docs/2023/copyrights/updates/2023-08-30","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2023/copyrights/updates/2023-08-30.md","tags":[],"version":"current","frontMatter":{"title":"Week 14","author":"Abdelrahman Jamal"},"sidebar":"2023","previous":{"title":"Week 13","permalink":"/gsoc/docs/2023/copyrights/updates/2023-08-23"},"next":{"title":"Week 15","permalink":"/gsoc/docs/2023/copyrights/updates/2023-09-06"}}');var s=i(74848),a=i(28453);const l={title:"Week 14",author:"Abdelrahman Jamal"},r=void 0,d={},o=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates:",id:"updates",level:2},{value:"1. Revisiting SpaCy NER:",id:"1-revisiting-spacy-ner",level:3},{value:"2. Insights on SpaCy&#39;s NER Model:",id:"2-insights-on-spacys-ner-model",level:3},{value:"3. SpaCy vs. Tiny BERT:",id:"3-spacy-vs-tiny-bert",level:3},{value:"4. Refining Entity Recognition:",id:"4-refining-entity-recognition",level:3},{value:"5. Labeling and Fine-tuning:",id:"5-labeling-and-fine-tuning",level:3},{value:"6. Process Optimization:",id:"6-process-optimization",level:3},{value:"Conclusion and Future Plans:",id:"conclusion-and-future-plans",level:2},{value:"1. Enhancing the NER Labeling and Training:",id:"1-enhancing-the-ner-labeling-and-training",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(August,30,2023)"})}),"\n",(0,s.jsx)(n.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Hero2323",children:"Abdelrahman"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/hastagAB",children:"Ayush"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/GMishx",children:"Gaurav"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"updates",children:"Updates:"}),"\n",(0,s.jsx)(n.h3,{id:"1-revisiting-spacy-ner",children:"1. Revisiting SpaCy NER:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Opted to retest the SpaCy NER for several reasons:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Earlier attempts lacked proper visualization, making it hard to assess performance on my dataset."}),"\n",(0,s.jsxs)(n.li,{children:["Training a SpaCy model is simplified with well-documented commands:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dataset Labeling"}),": This is a time-intensive step. I utilized visual annotation tools like ",(0,s.jsx)(n.code,{children:"doccano"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Transformation"}),": Converting datasets into a SpaCy-compatible format is straightforward."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Encountered difficulties while coding for the tiny BERT model training."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-insights-on-spacys-ner-model",children:"2. Insights on SpaCy's NER Model:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SpaCy's NER model is trained on the ",(0,s.jsx)(n.a,{href:"https://catalog.ldc.upenn.edu/LDC2013T19",children:"OntoNotes 5"})," dataset. This dataset, released in late 2013, features 18 entities in contrast to the four in the conll2003 dataset."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-spacy-vs-tiny-bert",children:"3. SpaCy vs. Tiny BERT:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For a fair comparison, I trained the SpaCy model from scratch on the conll2003 dataset:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tiny BERT achieved an F1 score of 0.8177, while SpaCy reached 0.8182 \u2014 nearly identical performance."}),"\n",(0,s.jsxs)(n.li,{children:["NER entity visualization in SpaCy is straightforward via the ",(0,s.jsx)(n.code,{children:"displacy"})," module."]}),"\n",(0,s.jsx)(n.li,{children:"Chose SpaCy due to its ease of use, training, visualization, and a smaller model size compared to tiny BERT."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-refining-entity-recognition",children:"4. Refining Entity Recognition:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Realized that distinguishing between PER and ORG entities was non-essential. My primary goal is identifying copyright holder entities. Decided to merge them for future training."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-labeling-and-fine-tuning",children:"5. Labeling and Fine-tuning:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Labeled 750 examples from my dataset using ",(0,s.jsx)(n.code,{children:"doccano"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Fine-tuned the SpaCy model trained on conll2003 with this data."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6-process-optimization",children:"6. Process Optimization:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Continually working to enhance the process. Will present NER labeled sentences in the coming update."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion-and-future-plans",children:"Conclusion and Future Plans:"}),"\n",(0,s.jsx)(n.h3,{id:"1-enhancing-the-ner-labeling-and-training",children:"1. Enhancing the NER Labeling and Training:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Merge the PER and ORG entities from the conll2003 dataset during training and ignore the other entities as they're not relevant to my goals."}),"\n",(0,s.jsx)(n.li,{children:"Increase the labeled samples from the copyrights dataset to generate a more extensive dataset for training and refinement."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);