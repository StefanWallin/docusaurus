"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["57301"],{10317:function(e,r,t){t.r(r),t.d(r,{metadata:()=>a,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>u});var a=JSON.parse('{"id":"api/themes/theme-mermaid","title":"\uD83D\uDCE6 theme-mermaid","description":"This theme provides a @theme/Mermaid component that is powered by mermaid. You can read more on diagrams documentation.","source":"@site/docs/api/themes/theme-mermaid.mdx","sourceDirName":"api/themes","slug":"/api/themes/@docusaurus/theme-mermaid","permalink":"/docs/api/themes/@docusaurus/theme-mermaid","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-mermaid.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1731072798000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"slug":"/api/themes/@docusaurus/theme-mermaid"},"sidebar":"api","previous":{"title":"\uD83D\uDCE6 theme-search-algolia","permalink":"/docs/api/themes/@docusaurus/theme-search-algolia"},"next":{"title":"\uD83D\uDCE6 create-docusaurus","permalink":"/docs/api/misc/create-docusaurus"}}'),n=t("24246"),s=t("80980"),i=t("15398"),o=t("58636");let u={sidebar_position:5,slug:"/api/themes/@docusaurus/theme-mermaid"},l="\uD83D\uDCE6 theme-mermaid",c={},d=[{value:"Configuration",id:"configuration",level:2}];function m(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"-theme-mermaid",children:"\uD83D\uDCE6 theme-mermaid"})}),"\n",(0,n.jsxs)(r.p,{children:["This theme provides a ",(0,n.jsx)(r.code,{children:"@theme/Mermaid"})," component that is powered by ",(0,n.jsx)(r.a,{href:"https://mermaid-js.github.io/",children:"mermaid"}),". You can read more on ",(0,n.jsx)(r.a,{href:"/docs/markdown-features/diagrams",children:"diagrams"})," documentation."]}),"\n",(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themes: ['@docusaurus/theme-mermaid'],\n  // In order for Mermaid code blocks in Markdown to work,\n  // you also need to enable the Remark plugin with this option\n  markdown: {\n    mermaid: true,\n  },\n};\n"})})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},58636:function(e,r,t){t.d(r,{Z:()=>i});var a=t("24246");t("27378");var n=t("90496");let s="tabItem_pnkT";function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s,i),hidden:t,children:r})}},15398:function(e,r,t){t.d(r,{Z:()=>j});var a=t("24246"),n=t("27378"),s=t("90496"),i=t("54947"),o=t("3620"),u=t("844"),l=t("97486"),c=t("32263"),d=t("16971");function m(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||n.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:r,tabValues:t}=e;return t.some(e=>e.value===r)}var p=t("71607");let f="tabList_Qoir",b="tabItem_AQgk";function v(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:u}=e,l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{let r=e.currentTarget,t=u[l.indexOf(r)].value;t!==n&&(c(r),o(t))},m=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{let t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r),children:u.map(e=>{let{value:r,label:t,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:m,onClick:d,...i,className:(0,s.Z)("tabs__item",b,i?.className,{"tabs__item--active":n===r}),children:t??r},r)})})}function g(e){let{lazy:r,children:t,selectedValue:i}=e,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){let e=o.find(e=>e.props.value===i);return e?(0,n.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function x(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,s=function(e){let{values:r,children:t}=e;return(0,n.useMemo)(()=>{let e=r??m(t).map(e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}});return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,p]=(0,n.useState)(()=>(function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:s})),[f,b]=function(e){let{queryString:r=!1,groupId:t}=e,a=(0,o.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t}),i=(0,l._X)(s);return[i,(0,n.useCallback)(e=>{if(!s)return;let r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})},[s,a])]}({queryString:t,groupId:a}),[v,g]=function(e){var r;let{groupId:t}=e;let a=(r=t)?`docusaurus.tab.${r}`:null,[s,i]=(0,d.Nk)(a);return[s,(0,n.useCallback)(e=>{if(!!a)i.set(e)},[a,i])]}({groupId:a}),x=(()=>{let e=f??v;return h({value:e,tabValues:s})?e:null})();return(0,u.Z)(()=>{x&&p(x)},[x]),{selectedValue:i,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);p(e),b(e),g(e)},[b,g,s]),tabValues:s}}(e);return(0,a.jsxs)("div",{className:(0,s.Z)("tabs-container",f),children:[(0,a.jsx)(v,{...r,...e}),(0,a.jsx)(g,{...r,...e})]})}function j(e){let r=(0,p.Z)();return(0,a.jsx)(x,{...e,children:m(e.children)},String(r))}},80980:function(e,r,t){t.d(r,{Z:function(){return o},a:function(){return i}});var a=t(27378);let n={},s=a.createContext(n);function i(e){let r=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);