"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63134],{15995:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(62540);t(63696);var r=t(11750);function i({children:e,hidden:n,className:t}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)("tabItem_pnkT",t),hidden:n,children:e})}},27446:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(62540),r=t(63696),i=t(11750),o=t(7846),s=t(49519),l=t(96439),c=t(19739),d=t(66904),u=t(79244);function m(e){var n,t;return null!==(t=null===(n=r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h({value:e,tabValues:n}){return n.some(n=>n.value===e)}var p=t(10709);function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){var a;a=t[n],n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a})}return e}function f(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t.push.apply(t,a)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function v({className:e,block:n,selectedValue:t,selectValue:r,tabValues:s}){let l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{let n=e.currentTarget,a=s[l.indexOf(n)].value;a!==t&&(c(n),r(a))},u=e=>{var n,t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;a=null!==(n=l[t])&&void 0!==n?n:l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;a=null!==(t=l[n])&&void 0!==t?t:l[l.length-1]}}null==a||a.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},e),children:s.map(({value:e,label:n,attributes:r})=>(0,a.jsx)("li",f(g({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:u,onClick:d},r),{className:(0,i.A)("tabs__item","tabItem_AQgk",null==r?void 0:r.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e))})}function b({lazy:e,children:n,selectedValue:t}){let o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===t);return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function y(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:a}=e,i=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=null!=n?n:m(t).map(({props:{value:e,label:n,attributes:t,default:a}})=>({value:e,label:n,attributes:t,default:a}));return!function(e){let n=(0,d.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[o,p]=(0,r.useState)(()=>(function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let a=null!==(t=n.find(e=>e.default))&&void 0!==t?t:n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:i})),[g,f]=function({queryString:e=!1,groupId:n}){let t=(0,s.W6)(),a=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)(e=>{var n,r;if(!a)return;let i=new URLSearchParams(t.location.search);i.set(a,e),t.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){var a;a=t[n],n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a})}return e}({},t.location),r=r={search:i.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t.push.apply(t,a)}return t})(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),n))},[a,t])]}({queryString:t,groupId:a}),[v,b]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[t,a]=(0,u.Dv)(n);return[t,(0,r.useCallback)(e=>{n&&a.set(e)},[n,a])]}({groupId:a}),y=(()=>{let e=null!=g?g:v;return h({value:e,tabValues:i})?e:null})();return(0,l.A)(()=>{y&&p(y)},[y]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),b(e)},[f,b,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.A)("tabs-container","tabList_Qoir"),children:[(0,a.jsx)(v,g({},n,e)),(0,a.jsx)(b,g({},n,e))]})}function x(e){let n=(0,p.A)();return(0,a.jsx)(y,f(g({},e),{children:m(e.children)}),String(n))}},88359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>u});let a=JSON.parse('{"type":"mdx","permalink":"/tests/pages/diagrams","source":"@site/_dogfooding/_pages tests/diagrams.mdx","title":"Diagram Examples","description":"Invalid Diagrams","frontMatter":{},"lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1727435993000,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/diagrams.mdx","unlisted":false}');var r=t(62540),i=t(43023),o=t(27446),s=t(15995);let l={},c="Diagram Examples",d={},u=[{value:"Invalid Diagrams",id:"invalid-diagrams",level:2},{value:"Invalid type",id:"invalid-type",level:3},{value:"Invalid content",id:"invalid-content",level:3},{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Sequence Diagram (forest theme directive)",id:"sequence-diagram-forest-theme-directive",level:2},{value:"Gantt Chart",id:"gantt-chart",level:2},{value:"Flow Chart",id:"flow-chart",level:2},{value:"With Markdown:",id:"with-markdown",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"State Diagram",id:"state-diagram",level:2},{value:"Entity Relationship Diagram",id:"entity-relationship-diagram",level:2},{value:"User Journey",id:"user-journey",level:2},{value:"Pie Chart",id:"pie-chart",level:2},{value:"Requirement Diagram",id:"requirement-diagram",level:2},{value:"Gitgraph (Git) Diagram",id:"gitgraph-git-diagram",level:2},{value:"Mermaid in tabs",id:"mermaid-in-tabs",level:2},{value:"Mindmap",id:"mindmap",level:2},{value:"Quadrant Chart",id:"quadrant-chart",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2}];function m(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"diagram-examples",children:"Diagram Examples"})}),"\n",(0,r.jsx)(n.h2,{id:"invalid-diagrams",children:"Invalid Diagrams"}),"\n",(0,r.jsx)(n.p,{children:"Those errors should not crash the whole page"}),"\n",(0,r.jsx)(n.h3,{id:"invalid-type",children:"Invalid type"}),"\n",(0,r.jsx)(n.mermaid,{value:"badType\n    participant Alice\n    participant Bob"}),"\n",(0,r.jsx)(n.h3,{id:"invalid-content",children:"Invalid content"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    badInstruction Alice\n    participant Bob"}),"\n",(0,r.jsx)(n.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John-->>Alice: Great!\n    John->>Bob: How about you?\n    Bob-->>John: Jolly good!"}),"\n",(0,r.jsx)(n.h2,{id:"sequence-diagram-forest-theme-directive",children:"Sequence Diagram (forest theme directive)"}),"\n",(0,r.jsx)(n.p,{children:"It is possible to override default config locally with Mermaid text directives such as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'%%{init: { "theme": "forest" } }%%\n'})}),"\n",(0,r.jsx)(n.mermaid,{value:'%%{init: { "theme": "forest" } }%%\n\nsequenceDiagram\n    participant Alice\n    participant Bob\n    Alice->>John: Hello John, how are you?\n    loop Health check\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts <br/>prevail!\n    John-->>Alice: Great!\n    John->>Bob: How about you?\n    Bob-->>John: Jolly good!'}),"\n",(0,r.jsx)(n.h2,{id:"gantt-chart",children:"Gantt Chart"}),"\n",(0,r.jsx)(n.mermaid,{value:"gantt\ndateFormat  YYYY-MM-DD\ntitle Adding GANTT diagram to mermaid\nexcludes weekdays 2014-01-10\n\nsection A section\nCompleted task            :done,    des1, 2014-01-06,2014-01-08\nActive task               :active,  des2, 2014-01-09, 3d\nFuture task               :         des3, after des2, 5d\nFuture task2               :         des4, after des3, 5d"}),"\n",(0,r.jsx)(n.h2,{id:"flow-chart",children:"Flow Chart"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart TD\n    A[Start] --> B{Is it?}\n    B -->|Yes| C[OK]\n    C --> D[Rethink]\n    D --> B\n    B ---->|No| E[End]"}),"\n",(0,r.jsx)(n.h3,{id:"with-markdown",children:"With Markdown:"}),"\n",(0,r.jsx)(n.mermaid,{value:'flowchart LR\n    markdown["`This **is** _Markdown_`"]\n    newLines["`Line1\n    Line 2\n    Line 3`"]\n    markdown --> newLines'}),"\n",(0,r.jsx)(n.h2,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:" classDiagram\n      Animal <|-- Duck\n      Animal <|-- Fish\n      Animal <|-- Zebra\n      Animal : +int age\n      Animal : +String gender\n      Animal: +isMammal()\n      Animal: +mate()\n      class Duck{\n          +String beakColor\n          +swim()\n          +quack()\n      }\n      class Fish{\n          -int sizeInFeet\n          -canEat()\n      }\n      class Zebra{\n          +bool is_wild\n          +run()\n      }"}),"\n",(0,r.jsx)(n.h2,{id:"state-diagram",children:"State Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:"stateDiagram-v2\n    [*] --> Active\n\n    state Active {\n        [*] --> NumLockOff\n        NumLockOff --> NumLockOn : EvNumLockPressed\n        NumLockOn --> NumLockOff : EvNumLockPressed\n        --\n        [*] --> CapsLockOff\n        CapsLockOff --> CapsLockOn : EvCapsLockPressed\n        CapsLockOn --> CapsLockOff : EvCapsLockPressed\n        --\n        [*] --> ScrollLockOff\n        ScrollLockOff --> ScrollLockOn : EvScrollLockPressed\n        ScrollLockOn --> ScrollLockOff : EvScrollLockPressed\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"entity-relationship-diagram",children:"Entity Relationship Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:"erDiagram\n    CAR ||--o{ NAMED-DRIVER : allows\n    CAR {\n        string registrationNumber\n        string make\n        string model\n    }\n    PERSON ||--o{ NAMED-DRIVER : is\n    PERSON {\n        string firstName\n        string lastName\n        int age\n    }"}),"\n",(0,r.jsx)(n.h2,{id:"user-journey",children:"User Journey"}),"\n",(0,r.jsx)(n.mermaid,{value:"journey\n    title My working day\n    section Go to work\n      Make tea: 5: Me\n      Go upstairs: 3: Me\n      Do work: 1: Me, Cat\n    section Go home\n      Go downstairs: 5: Me\n      Sit down: 5: Me"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["If there's too much space above it's due to a ",(0,r.jsx)(n.a,{href:"https://github.com/mermaid-js/mermaid/issues/3501",children:"Mermaid bug"})]})}),"\n",(0,r.jsx)(n.h2,{id:"pie-chart",children:"Pie Chart"}),"\n",(0,r.jsx)(n.mermaid,{value:'pie showData\n    title Key elements in Product X\n    "Calcium" : 42.96\n    "Potassium" : 50.05\n    "Magnesium" : 10.01\n    "Iron" :  5'}),"\n",(0,r.jsx)(n.h2,{id:"requirement-diagram",children:"Requirement Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:'    requirementDiagram\n\n    requirement test_req {\n    id: 1\n    text: the test text.\n    risk: high\n    verifymethod: test\n    }\n\n    functionalRequirement test_req2 {\n    id: 1.1\n    text: the second test text.\n    risk: low\n    verifymethod: inspection\n    }\n\n    performanceRequirement test_req3 {\n    id: 1.2\n    text: the third test text.\n    risk: medium\n    verifymethod: demonstration\n    }\n\n    interfaceRequirement test_req4 {\n    id: 1.2.1\n    text: the fourth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    physicalRequirement test_req5 {\n    id: 1.2.2\n    text: the fifth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    designConstraint test_req6 {\n    id: 1.2.3\n    text: the sixth test text.\n    risk: medium\n    verifymethod: analysis\n    }\n\n    element test_entity {\n    type: simulation\n    }\n\n    element test_entity2 {\n    type: word doc\n    docRef: reqs/test_entity\n    }\n\n    element test_entity3 {\n    type: "test suite"\n    docRef: github.com/all_the_tests\n    }\n\n\n    test_entity - satisfies -> test_req2\n    test_req - traces -> test_req2\n    test_req - contains -> test_req3\n    test_req3 - contains -> test_req4\n    test_req4 - derives -> test_req5\n    test_req5 - refines -> test_req6\n    test_entity3 - verifies -> test_req5\n    test_req <- copies - test_entity2'}),"\n",(0,r.jsx)(n.h2,{id:"gitgraph-git-diagram",children:"Gitgraph (Git) Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:"%%{init: { 'logLevel': 'debug', 'theme': 'base' } }%%\n      gitGraph\n        commit\n        branch hotfix\n        checkout hotfix\n        commit\n        branch develop\n        checkout develop\n        commit id:\"ash\" tag:\"abc\"\n        branch featureB\n        checkout featureB\n        commit type:HIGHLIGHT\n        checkout main\n        checkout hotfix\n        commit type:NORMAL\n        checkout develop\n        commit type:REVERSE\n        checkout featureB\n        commit\n        checkout main\n        merge hotfix\n        checkout featureB\n        commit\n        checkout develop\n        branch featureA\n        commit\n        checkout develop\n        merge hotfix\n        checkout featureA\n        commit\n        checkout featureB\n        commit\n        checkout develop\n        merge featureA\n        branch release\n        checkout release\n        commit\n        checkout main\n        commit\n        checkout release\n        merge main\n        checkout develop\n        merge release"}),"\n",(0,r.jsx)(n.h2,{id:"mermaid-in-tabs",children:"Mermaid in tabs"}),"\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(s.A,{value:"tab-a",children:[(0,r.jsx)(n.p,{children:"The following mermaid diagram is shown:"}),(0,r.jsx)(n.mermaid,{value:"graph LR\n  a ---> c(10)\n  b ---> c(10)"})]}),(0,r.jsxs)(s.A,{value:"tab-b",children:[(0,r.jsx)(n.p,{children:"This mermaid diagram is not displayed:"}),(0,r.jsx)(n.mermaid,{value:"graph LR\n  d ---> z(42)\n  e ---> z(42)"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"mindmap",children:"Mindmap"}),"\n",(0,r.jsx)(n.mermaid,{value:"mindmap\n  root((conda-forge))\n    (Repos)\n        (Package building)\n            [*-feedstock]\n            [staged-recipes]\n            [cdt-builds]\n            [msys2-recipes]\n        (Maintenance)\n            [admin-requests]\n            [repodata-patches]\n        (Configuration)\n            [.github]\n            [.cirun]\n            [conda-forge-pinning]\n            [conda-forge-ci-setup]\n            [docker-images]\n            [conda-smithy]\n        (Automations)\n            [admin-migrations]\n            [artifact-validation]\n            [regro/cf-scripts]\n            [conda-forge-webservices]\n            [regro/cf-graph-countyfair]\n            [regro/libcfgraph + regro/libcflib]\n            [feedstock-outputs]\n        (Communications)\n            [conda-forge.github.io]\n            [blog]\n            [status]\n            [by-the-numbers]\n            [conda-forge-status-monitor]\n            [feedstocks]\n    (Bots & apps)\n        [conda-forge-admin]\n        [conda-forge-bot]\n        [conda-forge-coordinator]\n        [conda-forge-daemon]\n        [conda-forge-linter]\n        [conda-forge-manager]\n        [conda-forge-status]\n        [regro-cf-autotick-bot]\n        [conda-forge-curator]\n        [conda-forge-webservices]\n    (Delivery)\n        [anaconda.org]\n        [ghcr.io]\n        [quay.io]\n    (Installers)\n        Miniforge\n        Mambaforge\n    (CI for builds)\n        Azure Pipelines\n        Travis CI\n        cirun.io\n    (Infra)\n        Heroku\n        Github Actions\n        Circle CI"}),"\n",(0,r.jsx)(n.h2,{id:"quadrant-chart",children:"Quadrant Chart"}),"\n",(0,r.jsx)(n.mermaid,{value:"quadrantChart\n    title Reach and engagement of campaigns\n    x-axis Low Reach --> High Reach\n    y-axis Low Engagement --> High Engagement\n    quadrant-1 We should expand\n    quadrant-2 Need to promote\n    quadrant-3 Re-evaluate\n    quadrant-4 May be improved\n    Campaign A: [0.3, 0.6]\n    Campaign B: [0.45, 0.23]\n    Campaign C: [0.57, 0.69]\n    Campaign D: [0.78, 0.34]\n    Campaign E: [0.40, 0.34]\n    Campaign F: [0.35, 0.78]"}),"\n",(0,r.jsx)(n.h2,{id:"architecture-diagram",children:"Architecture Diagram"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.a,{href:"https://mermaid.js.org/syntax/architecture",children:"https://mermaid.js.org/syntax/architecture"})]}),"\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/discussions/10508",children:"https://github.com/facebook/docusaurus/discussions/10508"})]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"architecture-beta\n    group api(cloud)[API]\n\n    service db(database)[Database] in api\n    service disk1(disk)[Storage] in api\n    service disk2(disk)[Storage] in api\n    service server(server)[Server] in api\n\n    db:L -- R:server\n    disk1:T -- B:server\n    disk2:T -- B:db"})]})}function h(e={}){let{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(63696);let r={},i=a.createContext(r);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);