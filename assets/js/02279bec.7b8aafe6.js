"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[1593],{15879:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"2023/copyrights/updates/2023-07-26","title":"Week 9","description":"\x3c!--","source":"@site/docs/2023/copyrights/updates/2023-07-26.md","sourceDirName":"2023/copyrights/updates","slug":"/2023/copyrights/updates/2023-07-26","permalink":"/gsoc/docs/2023/copyrights/updates/2023-07-26","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2023/copyrights/updates/2023-07-26.md","tags":[],"version":"current","frontMatter":{"title":"Week 9","author":"Abdelrahman Jamal"},"sidebar":"2023","previous":{"title":"Week 8","permalink":"/gsoc/docs/2023/copyrights/updates/2023-07-19"},"next":{"title":"Week 10","permalink":"/gsoc/docs/2023/copyrights/updates/2023-08-02"}}');var t=s(74848),r=s(28453);const o={title:"Week 9",author:"Abdelrahman Jamal"},d=void 0,l={},a=[{value:"Attendees:",id:"attendees",level:2},{value:"Updates:",id:"updates",level:2},{value:"SVM Testing on Vectorization Algorithms and Pre-trained Word Embeddings",id:"svm-testing-on-vectorization-algorithms-and-pre-trained-word-embeddings",level:3},{value:"Results from Vectorization and Embeddings",id:"results-from-vectorization-and-embeddings",level:3},{value:"TF-IDF Model Performance",id:"tf-idf-model-performance",level:3},{value:"Datasets Explained",id:"datasets-explained",level:3},{value:"Why TF-IDF and BoW Outperformed",id:"why-tf-idf-and-bow-outperformed",level:3},{value:"SVM&#39;s <code>predict_proba</code> method",id:"svms-predict_proba-method",level:3},{value:"Problems and Solutions",id:"problems-and-solutions",level:2},{value:"Problem 1",id:"problem-1",level:3},{value:"Solution 1",id:"solution-1",level:3},{value:"Conclusion and Further Plans:",id:"conclusion-and-further-plans",level:2},{value:"Text Preprocessing",id:"text-preprocessing",level:3},{value:"<code>predict_proba</code> SVM method",id:"predict_proba-svm-method",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(July,26,2023)"})}),"\n",(0,t.jsx)(n.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Hero2323",children:"Abdelrahman"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/hastagAB",children:"Ayush"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ag4ums",children:"Anupam"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"updates",children:"Updates:"}),"\n",(0,t.jsx)(n.h3,{id:"svm-testing-on-vectorization-algorithms-and-pre-trained-word-embeddings",children:"SVM Testing on Vectorization Algorithms and Pre-trained Word Embeddings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Vectorizers and Embeddings Tested"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bag of Words (BoW)"}),"\n",(0,t.jsx)(n.li,{children:"Term Frequency - Inverse Document Frequency (TF-IDF)"}),"\n",(0,t.jsx)(n.li,{children:"GloVe (averaging word vectors for each sentence)"}),"\n",(0,t.jsx)(n.li,{children:"FastText"}),"\n",(0,t.jsx)(n.li,{children:"Sentence Transformers"}),"\n",(0,t.jsx)(n.li,{children:"Word2Vec"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"results-from-vectorization-and-embeddings",children:"Results from Vectorization and Embeddings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"BoW and TF-IDF yielded the most promising results both in terms of accuracy."}),"\n",(0,t.jsx)(n.li,{children:"GloVe embeddings were tested across four dimensions: 50, 100, 200, and 300. The best-performing 300-dimensional embeddings still underperformed TF-IDF by around 4% for both classes 0 and 1."}),"\n",(0,t.jsx)(n.li,{children:"FastText's pre-trained embeddings (sourced from Wikipedia) were larger than 7GB, making it impractical to load them. Hence, I decided to train the embedder from scratch using our dataset, resulting in slightly inferior performance than FastText."}),"\n",(0,t.jsx)(n.li,{children:"Other embedders lagged even further in performance."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tf-idf-model-performance",children:"TF-IDF Model Performance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Precision\n|      |        0 |        1 |\n|:-----|---------:|---------:|\n| 0    | 0.991262 | 0.967086 |\n| 1    | 0.97284  | 0.703488 |\n| 2    | 0.945312 | 0.892562 |\n| 3    | 0.991701 | 0.911765 |\n| 4    | 0.995004 | 0.974809 |\n| Mean | 0.979224 | 0.889942 |\n\nRecall\n|      |        0 |        1 |\n|:-----|---------:|---------:|\n| 0    | 0.988153 | 0.975586 |\n| 1    | 0.885393 | 0.916667 |\n| 2    | 0.902985 | 0.93913  |\n| 3    | 0.980312 | 0.96124  |\n| 4    | 0.990982 | 0.985943 |\n| Mean | 0.949565 | 0.955713 |\n\nF1-score\n|      |        0 |        1 |\n|:-----|---------:|---------:|\n| 0    | 0.989705 | 0.971317 |\n| 1    | 0.927059 | 0.796053 |\n| 2    | 0.923664 | 0.915254 |\n| 3    | 0.985974 | 0.935849 |\n| 4    | 0.992989 | 0.980344 |\n| Mean | 0.963878 | 0.919764 |\n"})}),"\n",(0,t.jsx)(n.h3,{id:"datasets-explained",children:"Datasets Explained"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"0 corresponds to the test dataset (20% of the Fossology dataset), with training performed on the remaining 80%."}),"\n",(0,t.jsx)(n.li,{children:"1 represents the Kubernetes dataset."}),"\n",(0,t.jsx)(n.li,{children:"2 stands for the Tensorflow dataset."}),"\n",(0,t.jsx)(n.li,{children:"3 is identified as the Fossology-provided-dataset-1."}),"\n",(0,t.jsx)(n.li,{children:"4 comprises a merged set of all aforementioned datasets, including the training data."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"why-tf-idf-and-bow-outperformed",children:"Why TF-IDF and BoW Outperformed"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The dataset size may not be large enough to realize the benefits of more advanced embeddings."}),"\n",(0,t.jsx)(n.li,{children:"Copyright classification differs from conventional text classification due to the presence of code snippets and other unique features."}),"\n",(0,t.jsx)(n.li,{children:"The absence of text preprocessing in the current iteration might be a limiting factor."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"svms-predict_proba-method",children:["SVM's ",(0,t.jsx)(n.code,{children:"predict_proba"})," method"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Discussions with Anupam led to a consensus on continuing the tests using SVM, leveraging its ",(0,t.jsx)(n.code,{children:"predict_proba"})," method. This technique provides the probability associated with each SVM prediction, offering insight into the model's confidence. A threshold can be set on this confidence factor to potentially enhance recall, even if it results in reduced precision."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"problems-and-solutions",children:"Problems and Solutions"}),"\n",(0,t.jsx)(n.h3,{id:"problem-1",children:"Problem 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Classification reports were overly verbose, consuming excess space, and included redundant information."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"solution-1",children:"Solution 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Developed a function to streamline reports for each dataset, displaying precision up to more than two decimal places."}),"\n",(0,t.jsx)(n.li,{children:"This function computes the average precision, recall, and F1-scores, providing a comprehensive yet concise view of model performance across datasets, irrespective of their sizes."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion-and-further-plans",children:"Conclusion and Further Plans:"}),"\n",(0,t.jsx)(n.h3,{id:"text-preprocessing",children:"Text Preprocessing"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Aim to evaluate the efficacy of each vectorization method post-text preprocessing."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"predict_proba-svm-method",children:[(0,t.jsx)(n.code,{children:"predict_proba"})," SVM method"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Assess the performance of the ",(0,t.jsx)(n.code,{children:"predict_proba"})," method within the SVM framework."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);