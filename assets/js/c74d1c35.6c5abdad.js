"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97125],{15995:(e,n,t)=>{t.d(n,{A:()=>l});var s=t(62540);t(63696);var r=t(11750);function l({children:e,hidden:n,className:t}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)("tabItem_pnkT",t),hidden:n,children:e})}},27446:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(62540),r=t(63696),l=t(11750),a=t(7846),i=t(49519),o=t(96439),c=t(19739),d=t(66904),u=t(79244);function h(e){var n,t;return null!==(t=null===(n=r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function p({value:e,tabValues:n}){return n.some(n=>n.value===e)}var m=t(10709);function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.forEach(function(n){var s;s=t[n],n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s})}return e}function j(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t.push.apply(t,s)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function x({className:e,block:n,selectedValue:t,selectValue:r,tabValues:i}){let o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{let n=e.currentTarget,s=i[o.indexOf(n)].value;s!==t&&(c(n),r(s))},u=e=>{var n,t;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;s=null!==(n=o[t])&&void 0!==n?n:o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;s=null!==(t=o[n])&&void 0!==t?t:o[o.length-1]}}null==s||s.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:i.map(({value:e,label:n,attributes:r})=>(0,s.jsx)("li",j(g({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:u,onClick:d},r),{className:(0,l.A)("tabs__item","tabItem_AQgk",null==r?void 0:r.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e))})}function f({lazy:e,children:n,selectedValue:t}){let a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=a.find(e=>e.props.value===t);return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:s}=e,l=function(e){let{values:n,children:t}=e;return(0,r.useMemo)(()=>{let e=null!=n?n:h(t).map(({props:{value:e,label:n,attributes:t,default:s}})=>({value:e,label:n,attributes:t,default:s}));return!function(e){let n=(0,d.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[a,m]=(0,r.useState)(()=>(function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let s=null!==(t=n.find(e=>e.default))&&void 0!==t?t:n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:n,tabValues:l})),[g,j]=function({queryString:e=!1,groupId:n}){let t=(0,i.W6)(),s=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)(e=>{var n,r;if(!s)return;let l=new URLSearchParams(t.location.search);l.set(s,e),t.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.forEach(function(n){var s;s=t[n],n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s})}return e}({},t.location),r=r={search:l.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t.push.apply(t,s)}return t})(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),n))},[s,t])]}({queryString:t,groupId:s}),[x,f]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[t,s]=(0,u.Dv)(n);return[t,(0,r.useCallback)(e=>{n&&s.set(e)},[n,s])]}({groupId:s}),b=(()=>{let e=null!=g?g:x;return p({value:e,tabValues:l})?e:null})();return(0,o.A)(()=>{b&&m(b)},[b]),{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),j(e),f(e)},[j,f,l]),tabValues:l}}(e);return(0,s.jsxs)("div",{className:(0,l.A)("tabs-container","tabList_Qoir"),children:[(0,s.jsx)(x,g({},n,e)),(0,s.jsx)(f,g({},n,e))]})}function y(e){let n=(0,m.A)();return(0,s.jsx)(b,j(g({},e),{children:h(e.children)}),String(n))}},91938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});let s=JSON.parse('{"id":"i18n/tutorial","title":"i18n - Tutorial","description":"This tutorial will walk you through the basics of the Docusaurus i18n system.","source":"@site/docs/i18n/i18n-tutorial.mdx","sourceDirName":"i18n","slug":"/i18n/tutorial","permalink":"/docs/i18n/tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/i18n/i18n-tutorial.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1727435993000,"frontMatter":{"id":"tutorial","description":"This tutorial will walk you through the basics of the Docusaurus i18n system.","slug":"/i18n/tutorial"},"sidebar":"docs","previous":{"title":"i18n - Introduction","permalink":"/docs/i18n/introduction"},"next":{"title":"Using Git","permalink":"/docs/i18n/git"}}');var r=t(62540),l=t(43023),a=t(27446),i=t(15995);let o={id:"tutorial",description:"This tutorial will walk you through the basics of the Docusaurus i18n system.",slug:"/i18n/tutorial"},c="i18n - Tutorial",d={},u=[{value:"Configure your site",id:"configure-your-site",level:2},{value:"Site configuration",id:"site-configuration",level:3},{value:"Theme configuration",id:"theme-configuration",level:3},{value:"Start your site",id:"start-your-site",level:3},{value:"Translate your site",id:"translate-your-site",level:2},{value:"Translate your React code",id:"translate-your-react-code",level:3},{value:"Pluralization",id:"pluralization",level:4},{value:"Translate plugin data",id:"translate-plugin-data",level:3},{value:"Translate Markdown files",id:"translate-markdown-files",level:3},{value:"Translate the docs",id:"translate-the-docs",level:4},{value:"Translate the blog",id:"translate-the-blog",level:4},{value:"Translate the pages",id:"translate-the-pages",level:4},{value:"Deploy your site",id:"deploy-your-site",level:2},{value:"Single-domain deployment",id:"single-domain-deployment",level:3},{value:"Multi-domain deployment",id:"multi-domain-deployment",level:3},{value:"Hybrid",id:"hybrid",level:3},{value:"Managing translations",id:"managing-translations",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"i18n---tutorial",children:"i18n - Tutorial"})}),"\n","\n",(0,r.jsxs)(n.p,{children:["This tutorial will walk you through the basics of the ",(0,r.jsx)(n.strong,{children:"Docusaurus i18n system"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["We will add ",(0,r.jsx)(n.strong,{children:"French"})," translations to a ",(0,r.jsx)(n.strong,{children:"newly initialized English Docusaurus website"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Initialize a new site with ",(0,r.jsx)(n.code,{children:"npx create-docusaurus@latest website classic"})," (like ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/examples/classic",children:"this one"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-your-site",children:"Configure your site"}),"\n",(0,r.jsxs)(n.p,{children:["Modify ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," to add the i18n support for the French language."]}),"\n",(0,r.jsx)(n.h3,{id:"site-configuration",children:"Site configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/api/docusaurus-config#i18n",children:"site i18n configuration"})," to declare the i18n locales:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr', 'fa'],\n    localeConfigs: {\n      en: {\n        htmlLang: 'en-GB',\n      },\n      // You can omit a locale (e.g. fr) if you don't need to override the defaults\n      fa: {\n        direction: 'rtl',\n      },\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"The locale names are used for the translation files' locations, as well as your translated locales' base URL. When building all locales, only the default locale will have its name omitted in the base URL."}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus uses the locale names to provide ",(0,r.jsx)(n.strong,{children:"sensible defaults"}),": the ",(0,r.jsx)(n.code,{children:'<html lang="...">'})," attribute, locale label, calendar format, etc. You can customize these defaults with the ",(0,r.jsx)(n.code,{children:"localeConfigs"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"theme-configuration",children:"Theme configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.strong,{children:"navbar item"})," of type ",(0,r.jsx)(n.code,{children:"localeDropdown"})," so that users can select the locale they want:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n          position: 'left',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["You can pass a query parameter that will be appended to the URL when a user changes the locale using the dropdown (e.g. ",(0,r.jsx)(n.code,{children:"queryString: '?persistLocale=true'"}),")."]}),(0,r.jsx)(n.p,{children:"This is useful for implementing an automatic locale detection on your server. For example, you can use this parameter to store the user's preferred locale in a cookie."})]}),"\n",(0,r.jsx)(n.h3,{id:"start-your-site",children:"Start your site"}),"\n",(0,r.jsx)(n.p,{children:"Start your localized site in dev mode, using the locale of your choice:"}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})})}),(0,r.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn run start --locale fr\n"})})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run start --locale fr\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Your site is accessible at ",(0,r.jsx)(n.a,{href:"http://localhost:3000/fr/",children:(0,r.jsx)(n.code,{children:"http://localhost:3000/fr/"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We haven't provided any translation yet, so the site is mostly untranslated."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Docusaurus provides ",(0,r.jsx)(n.strong,{children:"default translations"}),' for generic theme labels, such as "Next" and "Previous" for the pagination.']}),(0,r.jsxs)(n.p,{children:["Please help us complete those ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-theme-translations/locales",children:"default translations"})}),"."]})]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Each locale is a ",(0,r.jsx)(n.strong,{children:"distinct standalone single-page application"}),": it is not possible to start the Docusaurus sites in all locales at the same time."]})}),"\n",(0,r.jsx)(n.h2,{id:"translate-your-site",children:"Translate your site"}),"\n",(0,r.jsxs)(n.p,{children:["All translation data for the French locale is stored in ",(0,r.jsx)(n.code,{children:"website/i18n/fr"}),". Each plugin sources its own translated content under the corresponding folder, while the ",(0,r.jsx)(n.code,{children:"code.json"})," file defines all text labels used in the React code."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["After copying files around, restart your site with ",(0,r.jsx)(n.code,{children:"npm run start -- --locale fr"}),". Hot-reload will work better when editing existing files."]})}),"\n",(0,r.jsx)(n.h3,{id:"translate-your-react-code",children:"Translate your React code"}),"\n",(0,r.jsxs)(n.p,{children:["For any React code you've written yourself: React pages, React components, etc., you will use the ",(0,r.jsx)(n.a,{href:"/docs/docusaurus-core#translate",children:(0,r.jsx)(n.strong,{children:"translation APIs"})}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Locate all text labels in your React code that will be visible to your users, and mark them with the translation APIs. There are two kinds of APIs:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"<Translate>"})," component wraps a string as a JSX element;"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"translate()"})," callback takes a message and returns a string."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Use the one that better fits the context semantically. For example, the ",(0,r.jsx)(n.code,{children:"<Translate>"})," can be used as React children, while for props that expect a string, the callback can be used."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["A JSX element is an ",(0,r.jsx)(n.em,{children:"object"}),", not a string. Using it in contexts expecting strings (such as the children of ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option",children:(0,r.jsx)(n.code,{children:"<option>"})}),") would ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",children:"coerce it to a string"}),", which returns ",(0,r.jsx)(n.code,{children:'"[object Object]"'}),". While we encourage you to use ",(0,r.jsx)(n.code,{children:"<Translate>"})," as JSX children, only use the element form when it actually works."]})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"Before",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\nimport Link from '@docusaurus/Link';\n\nexport default function Home() {\n  return (\n    <Layout>\n      {/* highlight-next-line */}\n      <h1>Welcome to my website</h1>\n      <main>\n        {/* highlight-start */}\n        You can also visit my\n        <Link to=\"https://docusaurus.io/blog\">blog</Link>\n        {/* highlight-end */}\n        <img\n          src=\"/img/home.png\"\n          // highlight-next-line\n          alt=\"Home icon\"\n        />\n      </main>\n    </Layout>\n  );\n}\n"})})}),(0,r.jsx)(i.A,{value:"After",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="src/pages/index.js"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\nimport Link from '@docusaurus/Link';\n\n// highlight-next-line\nimport Translate, {translate} from '@docusaurus/Translate';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1>\n        {/* highlight-next-line */}\n        <Translate>Welcome to my website</Translate>\n      </h1>\n      <main>\n        {/* highlight-start */}\n        <Translate\n          id=\"homepage.visitMyBlog\"\n          description=\"The homepage message to ask the user to visit my blog\"\n          values={{\n            blogLink: (\n              <Link to=\"https://docusaurus.io/blog\">\n                <Translate\n                  id=\"homepage.visitMyBlog.linkLabel\"\n                  description=\"The label for the link to my blog\">\n                  blog\n                </Translate>\n              </Link>\n            ),\n          }}>\n          {'You can also visit my {blogLink}'}\n        </Translate>\n        {/* highlight-end */}\n\n        <img\n          src=\"/img/home.png\"\n          alt={\n            // highlight-start\n            translate({\n              message: 'Home icon',\n              description: 'The homepage icon alt message',\n            })\n            // highlight-end\n          }\n        />\n      </main>\n    </Layout>\n  );\n}\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Docusaurus provides a ",(0,r.jsx)(n.strong,{children:"very small and lightweight translation runtime"})," on purpose, and only supports basic ",(0,r.jsx)(n.a,{href:"/docs/docusaurus-core#interpolate",children:"placeholders interpolation"}),", using a subset of the ",(0,r.jsx)(n.a,{href:"https://formatjs.io/docs/core-concepts/icu-syntax/",children:"ICU Message Format"}),"."]}),(0,r.jsxs)(n.p,{children:["Most documentation websites are generally ",(0,r.jsx)(n.strong,{children:"static"})," and don't need advanced i18n features (",(0,r.jsx)(n.strong,{children:"plurals"}),", ",(0,r.jsx)(n.strong,{children:"genders"}),", etc.). Use a library like ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/react-intl",children:"react-intl"})," for more advanced use-cases."]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"docusaurus write-translations"})," command will statically analyze all React code files used in your site, extract calls to these APIs, and aggregate them in the ",(0,r.jsx)(n.code,{children:"code.json"})," file. The translation files will be stored as maps from IDs to translation message objects (including the translated label and the description of the label). In your calls to the translation APIs (",(0,r.jsx)(n.code,{children:"<Translate>"})," or ",(0,r.jsx)(n.code,{children:"translate()"}),"), you need to specify either the default untranslated message or the ID, in order for Docusaurus to correctly correlate each translation entry to the API call."]}),"\n",(0,r.jsxs)(n.admonition,{title:"text labels must be static",type:"warning",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"docusaurus write-translations"})," command only does ",(0,r.jsx)(n.strong,{children:"static analysis"})," of your code. It doesn't actually run your site. Therefore, dynamic messages can't be extracted, as the message is an ",(0,r.jsx)(n.em,{children:"expression"}),", not a ",(0,r.jsx)(n.em,{children:"string"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const items = [\n  {id: 1, title: 'Hello'},\n  {id: 2, title: 'World'},\n];\n\nfunction ItemsList() {\n  return (\n    <ul>\n      {/* DON'T DO THIS: doesn't work with the write-translations command */}\n      {items.map((item) => (\n        <li key={item.id}>\n          <Translate>{item.title}</Translate>\n        </li>\n      ))}\n    <ul>\n  );\n}\n"})}),(0,r.jsx)(n.p,{children:'This still behaves correctly at runtime. However, in the future, we may provide a "no-runtime" mechanism, allowing the translations to be directly inlined in the React code through Babel transformations, instead of calling the APIs at runtime. Therefore, to be future-proof, you should always prefer statically analyzable messages. For example, we can refactor the code above to:'}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const items = [\n  {id: 1, title: <Translate>Hello</Translate>},\n  {id: 2, title: <Translate>World</Translate>},\n];\n\nfunction ItemsList() {\n  return (\n    <ul>\n      {/* The titles are now already translated when rendering! */}\n      {items.map((item) => (\n        <li key={item.id}>{item.title}</li>\n      ))}\n    <ul>\n  );\n}\n"})}),(0,r.jsxs)(n.p,{children:["You can see the calls to the translation APIs as purely ",(0,r.jsx)(n.em,{children:"markers"}),' that tell Docusaurus that "here\'s a text label to be replaced with a translated message".']})]}),"\n",(0,r.jsx)(n.h4,{id:"pluralization",children:"Pluralization"}),"\n",(0,r.jsxs)(n.p,{children:["When you run ",(0,r.jsx)(n.code,{children:"write-translations"}),", you will notice that some labels are pluralized:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="i18n/en/code.json"',children:'{\n  // ...\n  "theme.blog.post.plurals": "One post|{count} posts"\n  // ...\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Every language will have a list of ",(0,r.jsx)(n.a,{href:"https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html",children:"possible plural categories"}),". Docusaurus will arrange them in the order of ",(0,r.jsx)(n.code,{children:'["zero", "one", "two", "few", "many", "other"]'}),". For example, because English (",(0,r.jsx)(n.code,{children:"en"}),') has two plural forms ("one" and "other"), the translation message has two labels separated by a pipe (',(0,r.jsx)(n.code,{children:"|"}),"). For Polish (",(0,r.jsx)(n.code,{children:"pl"}),') which has three plural forms ("one", "few", and "many"), you would provide three labels in that order, joined by pipes.']}),"\n",(0,r.jsx)(n.p,{children:"You can pluralize your own code's messages as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import {translate} from '@docusaurus/Translate';\nimport {usePluralForm} from '@docusaurus/theme-common';\n\nfunction ItemsList({items}) {\n  // `usePluralForm` will provide the plural selector for the current locale\n  const {selectMessage} = usePluralForm();\n  // Select the appropriate pluralized label based on `items.length`\n  const message = selectMessage(\n    items.length,\n    translate(\n      {message: 'One item|{count} items'},\n      {count: items.length},\n    ),\n  );\n  return (\n    <>\n      <h2>{message}</h2>\n      <ul>{items.map((item) => <li key={item.id}>{item.title}</li>)}<ul>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Docusaurus uses ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules",children:(0,r.jsx)(n.code,{children:"Intl.PluralRules"})})," to resolve and select plural forms. It is important to provide the right number of plural forms in the right order for ",(0,r.jsx)(n.code,{children:"selectMessage"})," to work."]})}),"\n",(0,r.jsx)(n.h3,{id:"translate-plugin-data",children:"Translate plugin data"}),"\n",(0,r.jsx)(n.p,{children:"JSON translation files are used for everything that is interspersed in your code:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"React code, including the translated labels you have marked above"}),"\n",(0,r.jsx)(n.li,{children:"Navbar and footer labels in theme config"}),"\n",(0,r.jsxs)(n.li,{children:["Docs sidebar category labels in ",(0,r.jsx)(n.code,{children:"sidebars.js"})]}),"\n",(0,r.jsx)(n.li,{children:"Blog sidebar title in plugin options"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Run the ",(0,r.jsx)(n.a,{href:"/docs/cli#docusaurus-write-translations-sitedir",children:"write-translations"})," command:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run write-translations -- --locale fr\n"})})}),(0,r.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn write-translations --locale fr\n"})})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run write-translations --locale fr\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["It will extract and initialize the JSON translation files that you need to translate. The ",(0,r.jsx)(n.code,{children:"code.json"})," file at the root includes all translation API calls extracted from the source code, which could either be written by you or provided by the themes, some of which may already be translated by default."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="i18n/fr/code.json"',children:'{\n  // No ID for the <Translate> component: the default message is used as ID\n  "Welcome to my website": {\n    "message": "Welcome to my website"\n  },\n  "home.visitMyBlog": {\n    "message": "You can also visit my {blog}",\n    "description": "The homepage message to ask the user to visit my blog"\n  },\n  "homepage.visitMyBlog.linkLabel": {\n    "message": "Blog",\n    "description": "The label for the link to my blog"\n  },\n  "Home icon": {\n    "message": "Home icon",\n    "description": "The homepage icon alt message"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Plugins and themes will also write their own JSON translation files, such as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="i18n/fr/docusaurus-theme-classic/navbar.json"',children:'{\n  "title": {\n    "message": "My Site",\n    "description": "The title in the navbar"\n  },\n  "item.label.Docs": {\n    "message": "Docs",\n    "description": "Navbar item with label Docs"\n  },\n  "item.label.Blog": {\n    "message": "Blog",\n    "description": "Navbar item with label Blog"\n  },\n  "item.label.GitHub": {\n    "message": "GitHub",\n    "description": "Navbar item with label GitHub"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Translate the ",(0,r.jsx)(n.code,{children:"message"})," attribute in the JSON files of ",(0,r.jsx)(n.code,{children:"i18n/fr"}),", and your site layout and homepage should now be translated."]}),"\n",(0,r.jsx)(n.h3,{id:"translate-markdown-files",children:"Translate Markdown files"}),"\n",(0,r.jsx)(n.p,{children:"Official Docusaurus content plugins extensively use Markdown/MDX files and allow you to translate them."}),"\n",(0,r.jsx)(n.h4,{id:"translate-the-docs",children:"Translate the docs"}),"\n",(0,r.jsxs)(n.p,{children:["Copy your docs Markdown files from ",(0,r.jsx)(n.code,{children:"docs/"})," to ",(0,r.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current"}),", and translate them:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current\ncp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Notice that the ",(0,r.jsx)(n.code,{children:"docusaurus-plugin-content-docs"})," plugin always divides its content by versions. The data in ",(0,r.jsx)(n.code,{children:"./docs"})," folder will be translated in the ",(0,r.jsx)(n.code,{children:"current"})," subfolder and ",(0,r.jsx)(n.code,{children:"current.json"})," file. See ",(0,r.jsx)(n.a,{href:"/docs/versioning#terminology",children:"the doc versioning guide"}),' for more information about what "current" means.']})}),"\n",(0,r.jsx)(n.h4,{id:"translate-the-blog",children:"Translate the blog"}),"\n",(0,r.jsxs)(n.p,{children:["Copy your blog Markdown files to ",(0,r.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-blog"}),", and translate them:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-blog\ncp -r blog/** i18n/fr/docusaurus-plugin-content-blog\n"})}),"\n",(0,r.jsx)(n.h4,{id:"translate-the-pages",children:"Translate the pages"}),"\n",(0,r.jsxs)(n.p,{children:["Copy your pages Markdown files to ",(0,r.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-pages"}),", and translate them:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages\ncp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["We only copy ",(0,r.jsx)(n.code,{children:".md"})," and ",(0,r.jsx)(n.code,{children:".mdx"})," files, as React pages are translated through JSON translation files already."]})}),"\n",(0,r.jsxs)(n.admonition,{title:"Use explicit heading IDs",type:"tip",children:[(0,r.jsxs)(n.p,{children:["By default, a Markdown heading ",(0,r.jsx)(n.code,{children:"### Hello World"})," will have a generated ID ",(0,r.jsx)(n.code,{children:"hello-world"}),". Other documents can link it with ",(0,r.jsx)(n.code,{children:"[link](#hello-world)"}),". However, after translation, the heading becomes ",(0,r.jsx)(n.code,{children:"### Bonjour le Monde"}),", with ID ",(0,r.jsx)(n.code,{children:"bonjour-le-monde"}),"."]}),(0,r.jsx)(n.p,{children:"Generated IDs are not always a good fit for localized sites, as it requires you to localize all the anchor links:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"- [link](#hello-world).\n+ [link](#bonjour-le-monde)\n"})}),(0,r.jsxs)(n.p,{children:["For localized sites, it is recommended to use ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/markdown-features/toc#heading-ids",children:"explicit heading IDs"})}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"deploy-your-site",children:"Deploy your site"}),"\n",(0,r.jsxs)(n.p,{children:["You can choose to deploy your site under a ",(0,r.jsx)(n.strong,{children:"single domain"})," or use ",(0,r.jsx)(n.strong,{children:"multiple (sub)domains"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"single-domain-deployment",children:"Single-domain deployment"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})}),(0,r.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus will build ",(0,r.jsx)(n.strong,{children:"one single-page application per locale"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"website/build"}),": for the default, English language"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"website/build/fr"}),": for the French language"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You can now ",(0,r.jsx)(n.a,{href:"/docs/deployment",children:"deploy"})," the ",(0,r.jsx)(n.code,{children:"build"})," folder to the static hosting solution of your choice."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"The Docusaurus website uses this strategy:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docusaurus.io",children:(0,r.jsx)(n.code,{children:"https://docusaurus.io"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/fr",children:(0,r.jsx)(n.code,{children:"https://docusaurus.io/fr"})})}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Static hosting providers generally redirect ",(0,r.jsx)(n.code,{children:"/unknown/url"})," to ",(0,r.jsx)(n.code,{children:"/404.html"})," by convention, always showing an ",(0,r.jsx)(n.strong,{children:"English 404 page"}),"."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Localize your 404 pages"})," by configuring your host to redirect ",(0,r.jsx)(n.code,{children:"/fr/*"})," to ",(0,r.jsx)(n.code,{children:"/fr/404.html"}),"."]}),(0,r.jsxs)(n.p,{children:["This is not always possible, and depends on your host: GitHub Pages can't do this, ",(0,r.jsx)(n.a,{href:"https://docs.netlify.com/routing/redirects/redirect-options/#custom-404-page-handling",children:"Netlify"})," can."]})]}),"\n",(0,r.jsx)(n.h3,{id:"multi-domain-deployment",children:"Multi-domain deployment"}),"\n",(0,r.jsx)(n.p,{children:"You can also build your site for a single locale:"}),"\n",(0,r.jsxs)(a.A,{groupId:"npm2yarn",children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build -- --locale fr\n"})})}),(0,r.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn build --locale fr\n"})})}),(0,r.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run build --locale fr\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus will not add the ",(0,r.jsx)(n.code,{children:"/fr/"})," URL prefix."]}),"\n",(0,r.jsxs)(n.p,{children:["On your ",(0,r.jsx)(n.a,{href:"/docs/deployment",children:"static hosting provider"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"create one deployment per locale"}),"\n",(0,r.jsxs)(n.li,{children:["configure the appropriate build command, using the ",(0,r.jsx)(n.code,{children:"--locale"})," option"]}),"\n",(0,r.jsx)(n.li,{children:"configure the (sub)domain of your choice for each deployment"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["This strategy is ",(0,r.jsx)(n.strong,{children:"not possible"})," with GitHub Pages, as it is only possible to ",(0,r.jsx)(n.strong,{children:"have a single deployment"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"hybrid",children:"Hybrid"}),"\n",(0,r.jsx)(n.p,{children:"It is possible to have some locales using sub-paths, and others using subdomains."}),"\n",(0,r.jsx)(n.p,{children:"It is also possible to deploy each locale as a separate subdomain, assemble the subdomains in a single unified domain at the CDN level:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Deploy your site as ",(0,r.jsx)(n.code,{children:"fr.docusaurus.io"})]}),"\n",(0,r.jsxs)(n.li,{children:["Configure a CDN to serve it from ",(0,r.jsx)(n.code,{children:"docusaurus.io/fr"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"managing-translations",children:"Managing translations"}),"\n",(0,r.jsx)(n.p,{children:"Docusaurus doesn't care about how you manage your translations: all it needs is that all translation files (JSON, Markdown, or other data files) are available in the file system during building. However, as site creators, you would need to consider how translations are managed so your translation contributors could collaborate well."}),"\n",(0,r.jsxs)(n.p,{children:["We will share two common translation collaboration strategies: ",(0,r.jsx)(n.a,{href:"/docs/i18n/git",children:(0,r.jsx)(n.strong,{children:"using git"})})," and ",(0,r.jsx)(n.a,{href:"/docs/i18n/crowdin",children:(0,r.jsx)(n.strong,{children:"using Crowdin"})}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(63696);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);