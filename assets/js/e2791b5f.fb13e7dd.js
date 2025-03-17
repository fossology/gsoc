"use strict";(self.webpackChunkgosc=self.webpackChunkgosc||[]).push([[6094],{28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var i=n(96540);const c={},t=i.createContext(c);function r(s){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function d(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(c):s.components||c:r(s.components),i.createElement(t.Provider,{value:e},s.children)}},40902:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"2024/license-detection/updates/2024-06-06","title":"Week 2","description":"\x3c!--","source":"@site/docs/2024/license-detection/updates/2024-06-06.md","sourceDirName":"2024/license-detection/updates","slug":"/2024/license-detection/updates/2024-06-06","permalink":"/gsoc/docs/2024/license-detection/updates/2024-06-06","draft":false,"unlisted":false,"editUrl":"https://github.com/fossology/gsoc/edit/main/docs/2024/license-detection/updates/2024-06-06.md","tags":[],"version":"current","frontMatter":{"title":"Week 2","author":"Abdelrahman Jamal"},"sidebar":"2024","previous":{"title":"Week 1","permalink":"/gsoc/docs/2024/license-detection/updates/2024-05-30"},"next":{"title":"Week 3","permalink":"/gsoc/docs/2024/license-detection/updates/2024-06-13"}}');var c=n(74848),t=n(28453);const r={title:"Week 2",author:"Abdelrahman Jamal"},d="Meeting 2",l={},h=[{value:"Attendees:",id:"attendees",level:2},{value:"Discussion:",id:"discussion",level:2},{value:"Code Implementation Details",id:"code-implementation-details",level:3},{value:"Key Functions:",id:"key-functions",level:3},{value:"Results Showcase",id:"results-showcase",level:3},{value:"Key Findings",id:"key-findings",level:3},{value:"Next Steps",id:"next-steps",level:2}];function o(s){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...s.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"meeting-2",children:"Meeting 2"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.em,{children:"(June 6,2024)"})}),"\n",(0,c.jsx)(e.h2,{id:"attendees",children:"Attendees:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://github.com/Kaushl2208",children:"Kaushlendra Pratap"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://github.com/ag4ums",children:"Anupam Ghosh"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://github.com/GMishx",children:"Gaurav Mishra"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://github.com/shaheemazmalmmd",children:"Shaheem Azmal M MD"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://github.com/hastagAB",children:"Ayush Bhardwaj"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://github.com/avinal",children:"Avinal Kumar"})}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"discussion",children:"Discussion:"}),"\n",(0,c.jsx)(e.h3,{id:"code-implementation-details",children:"Code Implementation Details"}),"\n",(0,c.jsx)(e.p,{children:"Completed core functionality for automated LLM comparison on datasets. Now able to efficiently process and compare LLM outputs across different models."}),"\n",(0,c.jsx)(e.h3,{id:"key-functions",children:"Key Functions:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"process_dataset"}),": This function is the heart of the LLM comparison process. It:"]}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["Iterates through the dataset (in this case, ",(0,c.jsx)(e.code,{children:"pytorch-main.csv"}),")."]}),"\n",(0,c.jsx)(e.li,{children:"Sends each data point (license text) to the specified LLM API."}),"\n",(0,c.jsx)(e.li,{children:"Handles API requests and responses, including retries for robustness."}),"\n",(0,c.jsxs)(e.li,{children:["Logs progress at specified intervals (",(0,c.jsx)(e.code,{children:"log_every=5"})," means every 5 rows)"]}),"\n",(0,c.jsxs)(e.li,{children:["We can easily swap the ",(0,c.jsx)(e.code,{children:"model=Models.MISTRAL_7b"})," in the process_dataset function call with other models from the Models enum to run the same experiment on a different model."]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"client = LLMClient()\ndf = pd.read_csv('extras/pytorch-main.csv')\nsampled_data_mistral_7b = client.process_dataset(df, df_path='pytorch-main.csv',\n                                    model=Models.MISTRAL_7b,\n                                    prompt_function=prompt_function,\n                                    parser=license_parser,\n                                    extra_file_path='extras',\n                                    log_every=5,\n                                )\n\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"prompt_function"}),": This function creates the prompt template instructing the LLM on how to identify and extract license information."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'def prompt_function(text):\n    return f"""\n    [Task]\n    Carefully analyze the provided text to determine if it contains any software licenses.\n\n    [Guidelines]\n    1.  **License Identification:** If a license is found, clearly state its name and its corresponding SPDX identifier (e.g., MIT License, SPDX-License-Identifier: MIT).\n    2.  **Evidence Extraction:** For each identified license, extract the specific text snippet(s) from the provided text that confirm its presence. Include surrounding context if it helps clarify the license\'s applicability.\n    3.  **No License Scenario:** If no license is detected in the text, explicitly state "No software license found."\n    4.  **Response Format:** Provide the results in the following format:\n        *   **Licenses = [list of identified licenses]** \n        *   **SPDX-IDs = [list of corresponding SPDX identifiers]**\n\n        If no licenses are found, both lists should be empty:\n\n        *   **Licenses = []**\n        *   **SPDX-IDs = []** \n\n    [Text]\n    {text}\n    """\n'})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"Log Output Example:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"2024-06-06 12:37:58.034 | INFO     | helpers.llm_client:process_dataset:173 - Processing index: 0\n2024-06-06 12:38:07.307 | INFO     | helpers.llm_client:process_dataset:173 - Processing index: 5\n2024-06-06 12:38:14.613 | INFO     | helpers.llm_client:process_dataset:173 - Processing index: 10\n2024-06-06 12:38:42.489 | INFO     | helpers.llm_client:process_dataset:173 - Processing index: 15\n2024-06-06 12:38:50.538 | INFO     | helpers.llm_client:process_dataset:173 - Processing index: 20\n2024-06-06 12:39:13.782 | INFO     | helpers.llm_client:process_dataset:173 - Processing index: 25\n2024-06-06 12:39:23.271 | INFO     | helpers.llm_client:process_dataset:173 - Processing index: 30\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"results-showcase",children:"Results Showcase"}),"\n",(0,c.jsxs)(e.table,{children:[(0,c.jsx)(e.thead,{children:(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.th,{children:"scan results_x"}),(0,c.jsx)(e.th,{children:"llama_response"}),(0,c.jsx)(e.th,{children:"mistral_response"}),(0,c.jsx)(e.th,{children:"gemma_response"})]})}),(0,c.jsxs)(e.tbody,{children:[(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"0BSD BSD"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Zero Clause BSD (0BSD)]"}),"\\n**SPD..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Zero Clause BSD (0BSD)]"}),"\\n**SPD..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [ 'Zero Clause BSD (0BSD)' ]"}),"\\n*..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Apache-2.0"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License, Version 2.0]"}),"\\n..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License, Version 2.0]"}),"\\n..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License, Version 2.0]"}),"\\n..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Apache-2.0"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache-2.0]"}),"\\n**SPDX-IDs = [Apa..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache-2.0]"}),"\\n**SPDX-IDs = [Apa..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache-2.0]"}),"\\n**SPDX-IDs = [Apa..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Apache-2.0 BSD-3-Clause BSL-1.0"}),(0,c.jsx)(e.td,{children:"**Licenses = [BSD License, Apache License, Boo..."}),(0,c.jsx)(e.td,{children:"**Licenses = [BSD License, Apache License, Boo..."}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses:"}),"\\n\\n- Licenses = [Early BSD Licen..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"Apache-possibility"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License]"}),"\\n**SPDX-IDs = ..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License]"}),"\\n**SPDX-IDs = ..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License]"}),"\\n**SPDX-IDs = ..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n\\n**SPDX-IDs = [..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n\\n**SPDX-IDs = [..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\n**Expl..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n\\n**SPDX-IDs = [..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-3-Clause"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License 2.0]"}),"\\n**SPDX-ID..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License 2.0]"}),"\\n**SPDX-ID..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n\\n**SPDX-IDs = [..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-3-Clause"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License 2.0]"}),"\\n**SPDX-ID..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License 2.0]"}),"\\n**SPDX-ID..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\n**Conc..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-3-Clause"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License 2.0]"}),"\\n**SPDX-ID..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [Apache License 2.0]"}),"\\n**SPDX-ID..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [SP..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-possibility"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [MI..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [MI..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses:"}),"\\n\\n- ",(0,c.jsx)(e.strong,{children:"Licenses:"})," [MIT License]..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-style"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [SP..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [SP..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n\\n**SPDX-IDs = [..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-style"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-style"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [BS..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n\\n**SPDX-I..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-style"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"BSD-style"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD-style license]"}),"\\n**SPDX-IDs..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [BSD License]"}),"\\n**SPDX-IDs = [SP..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"MIT"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [SP..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [SP..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses:"}),"\\n\\n```\\n- MIT License\\n- SPDX-Li..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"MIT"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [MI..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [MI..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [SP..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"MIT"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [MI..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = [MIT License]"}),"\\n**SPDX-IDs = [MI..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses:"}),"\\n\\n- MIT License\\n\\n**SPDX-IDs:*..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"MIT"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\n**Note..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"NCSA"}),(0,c.jsx)(e.td,{children:"**Licenses = [University of Illinois Open Sour..."}),(0,c.jsx)(e.td,{children:"**Licenses = [University of Illinois Open Sour..."}),(0,c.jsx)(e.td,{children:"**Licenses = [University of Illinois Open Sour..."})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"No_license_found"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\n**Expl..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"No_license_found"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:'Licenses = ["MIT License"]'}),"\\n**SPDX-IDs = [..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:'Licenses = ["MIT License"]'}),"\\n**SPDX-IDs = [..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\n**No s..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"No_license_found"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]})]}),(0,c.jsxs)(e.tr,{children:[(0,c.jsx)(e.td,{children:"No_license_found"}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\nNo sof..."]}),(0,c.jsxs)(e.td,{children:[(0,c.jsx)(e.strong,{children:"Licenses = []"}),"\\n",(0,c.jsx)(e.strong,{children:"SPDX-IDs = []"}),"\\n\\n**No s..."]})]})]})]}),"\n",(0,c.jsx)(e.h3,{id:"key-findings",children:"Key Findings"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Decent Accuracy but Challenges with Complexity: LLMs demonstrated reasonably good accuracy in identifying single, well-known licenses. However, they encountered difficulties when dealing with files containing multiple licenses or licenses with variations."}),"\n",(0,c.jsx)(e.li,{children:"Consistent LLM Errors: We observed similar mistakes across different LLMs."}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Anupam suggested utilizing semantic search to pinpoint license-relevant code snippets and match them to potential licenses based on similarity scores."}),"\n"]})]})}function x(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,c.jsx)(e,{...s,children:(0,c.jsx)(o,{...s})}):o(s)}}}]);