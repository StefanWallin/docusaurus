"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["27591"],{72581:function(e,n,s){s.d(n,{Z:()=>r});let r=s.p+"assets/images/social-card-3239a62bb56c9529ff255bc2c72e94f6.png"},20788:function(e,n,s){s.d(n,{Z:()=>r});let r=s.p+"assets/images/navbar-error-15eefab8e8d77aa4d605939956987164.jpg"},92539:function(e,n,s){s.d(n,{Z:()=>r});let r=s.p+"assets/images/sidebar-item-description-f38981b17f486bc09fb811c6992ef668.jpg"},17414:function(e,n,s){s.d(n,{Z:()=>r});let r=s.p+"assets/images/social-card-3239a62bb56c9529ff255bc2c72e94f6.png"},77543:function(e,n,s){s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>r,toc:()=>g});var r=s(68707),t=s(85893),a=s(80980),i=s(15398),l=s(58636),o=s(14522),c=s(51118),u=s(39468);let d={title:"Docusaurus 2.4",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2023-03-23T00:00:00.000Z")},h=void 0,p={image:s(72581).Z,authorsImageUrls:[void 0]},g=[{value:"Highlights",id:"highlights",level:2},{value:"Sidebar item description",id:"sidebar-item-description",level:3},{value:"Theme Query String",id:"theme-query-string",level:3},{value:"Remark plugin npm2yarn upgrade",id:"remark-plugin-npm2yarn-upgrade",level:3},{value:"gtag support for multiple tracking IDs",id:"gtag-support-for-multiple-tracking-ids",level:3},{value:"Developer Experience",id:"developer-experience",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function m(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["We are happy to announce ",(0,t.jsx)(n.strong,{children:"Docusaurus 2.4"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The upgrade should be easy: as explained in our ",(0,t.jsx)(n.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docusaurus blog post social card",src:s(17414).Z+"",width:"1200",height:"600"})}),"\n","\n",(0,t.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsx)(n.h3,{id:"sidebar-item-description",children:"Sidebar item description"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8236",children:"#8236"}),", we made it possible to provide a new ",(0,t.jsx)(n.code,{children:"description"})," attribute for docs sidebar items of type ",(0,t.jsx)(n.code,{children:"link"})," and ",(0,t.jsx)(n.code,{children:"category"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="sidebars.js"',children:"[\n  {\n    type: 'link',\n    label: 'Link with description',\n    href: 'https://docusaurus.io',\n    // highlight-next-line\n    description: 'Some link description',\n  },\n  {\n    type: 'category',\n    label: 'Category with description',\n    // highlight-next-line\n    description: 'Some category description',\n    items: [],\n  },\n];\n"})}),"\n",(0,t.jsx)(n.p,{children:"These descriptions will be used in category generated index pages."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Show sidebar category generated index with custom descriptions",src:s(92539).Z+"",width:"1400",height:"691"})}),"\n",(0,t.jsx)(n.h3,{id:"theme-query-string",children:"Theme Query String"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8708",children:"#8708"}),", we added the possibility to force Docusaurus to initialize itself in ",(0,t.jsx)(n.code,{children:"light"})," or ",(0,t.jsx)(n.code,{children:"dark"})," mode through a new ",(0,t.jsx)(n.code,{children:"docusaurus-theme"})," query-string parameter."]}),"\n",(0,t.jsx)(n.p,{children:"This is useful to ensure a consistent theme when embedding an existing Docusaurus page into an iframe or WebView."}),"\n",(0,t.jsx)(c.Z,{url:"/docs/?docusaurus-theme=light"}),"\n",(0,t.jsx)(c.Z,{url:"/docs/?docusaurus-theme=dark"}),"\n",(0,t.jsx)(n.h3,{id:"remark-plugin-npm2yarn-upgrade",children:"Remark plugin npm2yarn upgrade"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8690",children:"#8690"}),", we upgraded our Remark plugin ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages/docusaurus-remark-plugin-npm2yarn",children:"@docusaurus/remark-plugin-npm2yarn"})," with many conversion bug fixes, first-class support for pnpm, and the ability to register custom converters producing new tabs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"Run these commands!\n\n```bash npm2yarn\nnpm install\nnpm run build\nnpm run myCustomScript -- --some-arg\n```\n"})}),"\n",(0,t.jsx)(o.Z,{children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install\nnpm run build\nnpm run myCustomScript -- --some-arg\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install\nyarn build\nyarn myCustomScript --some-arg\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm install\npnpm run build\npnpm run myCustomScript --some-arg\n"})})})]})}),"\n",(0,t.jsx)(n.h3,{id:"gtag-support-for-multiple-tracking-ids",children:"gtag support for multiple tracking IDs"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8620",children:"#8620"})," we added support for the ",(0,t.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag",children:"@docusaurus/plugin-google-gtag"})," plugin to declare multiple tracking IDs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        gtag: {\n          trackingID: [\n            // highlight-next-line\n            'G-<YOUR-NEW-GA4-ID>',\n            // highlight-next-line\n            'UA-<YOUR-OLD-UA-ID>',\n          ],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Google is sunsetting Universal Analytics",type:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"Google will sunset its Universal Analytics"})})," on ",(0,t.jsx)(n.strong,{children:"July 1, 2023"}),"."]}),(0,t.jsxs)(n.p,{children:["Docusaurus users should migrate to Google Analytics 4. Google ",(0,t.jsx)(n.strong,{children:"does not permit to migrate your existing Universal Analytics data"})," to your new Google Analytics 4 property."]}),(0,t.jsxs)(n.p,{children:["To preserve the continuity of your analytics, we temporarily recommend that you report events to 2 tracking IDs at the same time: the old one (",(0,t.jsx)(n.code,{children:"UA-*"}),") and new one (",(0,t.jsx)(n.code,{children:"G-*"}),"). Refer to the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"dedicated issue"})})," for details."]})]}),"\n",(0,t.jsx)(n.h3,{id:"developer-experience",children:"Developer Experience"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8736",children:"#8736"}),", we improved how we render error messages and added initial support to render the full causal chain of an error (see ",(0,t.jsx)(n.a,{href:"https://h3manth.com/ES2022/#error-cause",children:"ES2022 Error Cause"}),")."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["To see it in action, click here: ",(0,t.jsx)(u.Z,{cause:"Probably undefined is not a function \uD83D\uDE04"})]})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8735",children:"#8735"})," we also made navbar-related error messages clearer to help users understand what they did wrong."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docusaurus navbar error message screenshot",src:s(20788).Z+"",width:"1676",height:"1614"})}),"\n",(0,t.jsx)(n.h3,{id:"translations",children:"Translations"}),"\n",(0,t.jsx)(n.p,{children:"We made it possible to translate some new elements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8677",children:"#8677"})," introduces a new ",(0,t.jsx)(n.code,{children:"process.env.DOCUSAURUS_CURRENT_LOCALE"})," (experimental) allowing you to localize your config file, including site title, tagline, announcement bar, baseUrl..."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8616",children:"#8616"})," allows to translate the navbar and footer logo alt text"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We added default theme translation support for multiple languages:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\uD83C\uDDED\uD83C\uDDFA ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8668",children:"#8668"}),": Hungarian"]}),"\n",(0,t.jsxs)(n.li,{children:["\uD83C\uDDF3\uD83C\uDDF4 ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8631",children:"#8631"}),": Norwegian (Bokm\xe5l)"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Completing theme translations is an ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsx)(n.p,{children:"Other notable changes include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8674",children:"#8674"}),": respect ",(0,t.jsx)(n.code,{children:"prefers-reduced-motion: reduce"})," media query"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8712",children:"#8712"}),": use a navbar item of type ",(0,t.jsx)(n.code,{children:"docSidebar"})," in template"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8801",children:"#8801"}),": allow tabs children to be falsy"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8757",children:"#8757"}),": make search page react to external query-string changes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8803",children:"#8803"}),": fix code block buttons position in RTL"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8615",children:"#8615"}),": fix color mode toggle when using dark navbar"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8699",children:"#8699"}),": fix navbar dropdown tab focus bug"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/changelog/2.4.0",children:"2.4.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function f(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},58636:function(e,n,s){s.d(n,{Z:()=>a});var r=s(85893);s(67294);var t=s(90496);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)("tabItem_pnkT",a),hidden:s,children:n})}},15398:function(e,n,s){s.d(n,{Z:()=>x});var r=s(85893),t=s(67294),a=s(90496),i=s(54947),l=s(3620),o=s(844),c=s(97486),u=s(32263),d=s(16971);function h(e){return t.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||t.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var g=s(71607);function m(e){let{className:n,block:s,selectedValue:t,selectValue:l,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,s=o[c.indexOf(n)].value;s!==t&&(u(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1]}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},n),children:o.map(e=>{let{value:n,label:s,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item","tabItem_AQgk",i?.className,{"tabs__item--active":t===n}),children:s??n},n)})})}function f(e){let{lazy:n,children:s,selectedValue:i}=e,l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===i);return e?(0,t.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:r}=e,a=function(e){let{values:n,children:s}=e;return(0,t.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[i,g]=(0,t.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let r=s.find(e=>e.default)??s[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:a})),[m,f]=function(e){let{queryString:n=!1,groupId:s}=e,r=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(a),(0,t.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})},[a,r])]}({queryString:s,groupId:r}),[b,x]=function(e){let{groupId:n}=e,s=n?`docusaurus.tab.${n}`:null,[r,a]=(0,d.Nk)(s);return[r,(0,t.useCallback)(e=>{s&&a.set(e)},[s,a])]}({groupId:r}),j=(()=>{let e=m??b;return p({value:e,tabValues:a})?e:null})();return(0,o.Z)(()=>{j&&g(j)},[j]),{selectedValue:i,selectValue:(0,t.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);g(e),f(e),x(e)},[f,x,a]),tabValues:a}}(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(m,{...n,...e}),(0,r.jsx)(f,{...n,...e})]})}function x(e){let n=(0,g.Z)();return(0,r.jsx)(b,{...e,children:h(e.children)},String(n))}},51118:function(e,n,s){s.d(n,{Z:()=>a});var r=s(85893);s(67294);var t=s(14522);function a(e){let{url:n}=e;return(0,r.jsx)("div",{style:{padding:10},children:(0,r.jsx)(t.Z,{url:n,style:{minWidth:"min(100%,45vw)",width:800,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,r.jsx)("iframe",{src:n,title:n,style:{display:"block",width:"100%",height:300}})})})}},14522:function(e,n,s){s.d(n,{Z:()=>l});var r=s(85893);s(67294);var t=s(90496);let a="dot_giz1",i="bar_rrRL";function l(e){let{children:n,minHeight:s,url:l="http://localhost:3000",style:o,bodyStyle:c}=e;return(0,r.jsxs)("div",{className:"browserWindow_my1Q",style:{...o,minHeight:s},children:[(0,r.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,r.jsxs)("div",{className:"buttons_uHc7",children:[(0,r.jsx)("span",{className:a,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:a,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:a,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,t.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:l}),(0,r.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:i}),(0,r.jsx)("span",{className:i}),(0,r.jsx)("span",{className:i})]})})]}),(0,r.jsx)("div",{className:"browserWindowBody_Idgs",style:c,children:n})]})}},39468:function(e,n,s){s.d(n,{Z:()=>a});var r=s(85893),t=s(67294);function a(e){let{children:n="Boom!",message:s="Boom!\nSomething bad happened, but you can try again!",cause:a}=e,[i,l]=(0,t.useState)(!1);if(i)throw Error(s,{cause:a?Error(a):void 0});return(0,r.jsx)("button",{className:"button button--danger",type:"button",onClick:()=>l(!0),children:n})}},80980:function(e,n,s){s.d(n,{Z:()=>l,a:()=>i});var r=s(67294);let t={},a=r.createContext(t);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}},68707:function(e){e.exports=JSON.parse('{"permalink":"/blog/releases/2.4","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.4/index.mdx","source":"@site/blog/releases/2.4/index.mdx","title":"Docusaurus 2.4","description":"We are happy to announce Docusaurus 2.4.","date":"2023-03-23T00:00:00.000Z","tags":[{"inline":false,"label":"Release","permalink":"/blog/tags/release","description":"Blog posts about Docusaurus\' new releases"}],"readingTime":3.05,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer, This Week In React editor","url":"https://thisweekinreact.com","page":{"permalink":"/blog/authors/slorber"},"description":"A freelance React and React-Native developer near Paris and Docusaurus maintainer. Also runs ThisWeekInReact.com, a newsletter to stay updated with the React ecosystem.","socials":{"bluesky":"https://bsky.app/profile/sebastienlorber.com","x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","instagram":"https://www.instagram.com/thisweekinreact","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"Docusaurus 2.4","authors":["slorber"],"tags":["release"],"image":"./img/social-card.png","date":"2023-03-23T00:00:00.000Z"},"unlisted":false,"lastUpdatedAt":1737988330000,"lastUpdatedBy":"Tatsunori Uchino","prevItem":{"title":"Upgrading frontend dependencies with confidence","permalink":"/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing"},"nextItem":{"title":"Docusaurus 2.3","permalink":"/blog/releases/2.3"}}')}}]);