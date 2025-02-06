"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["46154"],{87877:function(e,n,t){t.d(n,{Z:()=>a});let a=t.p+"assets/images/docusaurus-asset-example-banner-63decf1180b7949f4c3d0f7b7ecfd162.png"},78569:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>c});var a=JSON.parse('{"id":"seo","title":"Search engine optimization (SEO)","description":"How to make your Docusaurus site maximally search-engine-friendly.","source":"@site/docs/seo.mdx","sourceDirName":".","slug":"/seo","permalink":"/docs/seo","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/seo.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1738843713000,"frontMatter":{"description":"How to make your Docusaurus site maximally search-engine-friendly.","sidebar_label":"SEO","keywords":["seo","positioning"]},"sidebar":"docs","previous":{"title":"Browser support","permalink":"/docs/browser-support"},"next":{"title":"Using Plugins","permalink":"/docs/using-plugins"}}'),s=t(85893),o=t(80980),i=t(14522);let r={description:"How to make your Docusaurus site maximally search-engine-friendly.",sidebar_label:"SEO",keywords:["seo","positioning"]},c="Search engine optimization (SEO)",d={},l=[{value:"Global metadata",id:"global-metadata",level:2},{value:"Single page metadata",id:"single-page-metadata",level:2},{value:"Static HTML generation",id:"static-html-generation",level:2},{value:"Image meta description",id:"image-meta-description",level:2},{value:"Rich search information",id:"rich-search-information",level:2},{value:"Robots file",id:"robots-file",level:2},{value:"Sitemap file",id:"sitemap-file",level:2},{value:"Human readable links",id:"human-readable-links",level:2},{value:"Structured content",id:"structured-content",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"search-engine-optimization-seo",children:"Search engine optimization (SEO)"})}),"\n","\n",(0,s.jsx)(n.p,{children:"Docusaurus supports search engine optimization in a variety of ways."}),"\n",(0,s.jsx)(n.h2,{id:"global-metadata",children:"Global metadata"}),"\n",(0,s.jsxs)(n.p,{children:["Provide global meta attributes for the entire site through the ",(0,s.jsx)(n.a,{href:"/docs/configuration#site-metadata",children:"site configuration"}),". The metadata will all be rendered in the HTML ",(0,s.jsx)(n.code,{children:"<head>"})," using the key-value pairs as the prop name and value. The ",(0,s.jsx)(n.code,{children:"metadata"})," attribute is a convenient shortcut to declare ",(0,s.jsx)(n.code,{children:"<meta>"})," tags, but it is also possible to inject arbitrary tags in ",(0,s.jsx)(n.code,{children:"<head>"})," with the ",(0,s.jsx)(n.code,{children:"headTags"})," attribute."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // Declare some <meta> tags\n    metadata: [\n      {name: 'keywords', content: 'cooking, blog'},\n      {name: 'twitter:card', content: 'summary_large_image'},\n    ],\n  },\n  headTags: [\n    // Declare a <link> preconnect tag\n    {\n      tagName: 'link',\n      attributes: {\n        rel: 'preconnect',\n        href: 'https://example.com',\n      },\n    },\n    // Declare some json-ld structured data\n    {\n      tagName: 'script',\n      attributes: {\n        type: 'application/ld+json',\n      },\n      innerHTML: JSON.stringify({\n        '@context': 'https://schema.org/',\n        '@type': 'Organization',\n        name: 'Meta Open Source',\n        url: 'https://opensource.fb.com/',\n        logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',\n      }),\n    },\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus adds some metadata out-of-the-box. For example, if you have configured ",(0,s.jsx)(n.a,{href:"/docs/i18n/introduction",children:"i18n"}),", you will get a ",(0,s.jsx)(n.a,{href:"https://developers.google.com/search/docs/advanced/crawling/localized-versions",children:(0,s.jsx)(n.code,{children:"hreflang"})})," alternate link."]}),"\n",(0,s.jsxs)(n.p,{children:["To read more about types of meta tags, visit ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",children:"the MDN docs"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"single-page-metadata",children:"Single page metadata"}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.a,{href:"#global-metadata",children:"global metadata"}),", Docusaurus also allows for the addition of meta-information to individual pages. Follow ",(0,s.jsx)(n.a,{href:"/docs/markdown-features/head-metadata",children:"this guide"})," for configuring the ",(0,s.jsx)(n.code,{children:"<head>"})," tag. In short:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="my-markdown-page.mdx"',children:"# A cooking guide\n\n<head>\n  <meta name=\"keywords\" content=\"cooking, blog\" />\n  <meta name=\"twitter:card\" content=\"summary_large_image\" />\n  <link rel=\"preconnect\" href=\"https://example.com\" />\n  <script type=\"application/ld+json\">\n    {JSON.stringify({\n      '@context': 'https://schema.org/',\n      '@type': 'Organization',\n      name: 'Meta Open Source',\n      url: 'https://opensource.fb.com/',\n      logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',\n    })}\n  <\/script>\n</head>\n\nSome content...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus automatically adds ",(0,s.jsx)(n.code,{children:"description"}),", ",(0,s.jsx)(n.code,{children:"title"}),", canonical URL links, and other useful metadata to each Markdown page. They are configurable through ",(0,s.jsx)(n.a,{href:"/docs/markdown-features#front-matter",children:"front matter"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\ntitle: Title for search engines; can be different from the actual heading\ndescription: A short description of this page\nimage: a thumbnail image to be shown in social media cards\nkeywords: [keywords, describing, the main topics]\n---\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When creating your React page, adding these fields in ",(0,s.jsx)(n.code,{children:"Layout"})," would also improve SEO."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Prefer to use ",(0,s.jsx)(n.a,{href:"/docs/markdown-features#front-matter",children:"front matter"})," for fields like ",(0,s.jsx)(n.code,{children:"description"})," and ",(0,s.jsx)(n.code,{children:"keywords"}),": Docusaurus will automatically apply this to both ",(0,s.jsx)(n.code,{children:"description"})," and ",(0,s.jsx)(n.code,{children:"og:description"}),", while you would have to manually declare two metadata tags when using the ",(0,s.jsx)(n.code,{children:"<head>"})," tag."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The official plugins all support the following ",(0,s.jsx)(n.a,{href:"/docs/markdown-features#front-matter",children:"front matter"}),": ",(0,s.jsx)(n.code,{children:"title"}),", ",(0,s.jsx)(n.code,{children:"description"}),", ",(0,s.jsx)(n.code,{children:"keywords"})," and ",(0,s.jsx)(n.code,{children:"image"}),". Refer to their respective API documentation for additional ",(0,s.jsx)(n.a,{href:"/docs/markdown-features#front-matter",children:"front matter"})," support:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter",children:"Docs front matter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter",children:"Blog front matter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-pages#markdown-front-matter",children:"Pages front matter"})}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["For JSX pages, you can use the Docusaurus ",(0,s.jsx)(n.a,{href:"/docs/docusaurus-core#head",children:(0,s.jsx)(n.code,{children:"<Head>"})})," component."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="my-react-page.jsx"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\nimport Head from '@docusaurus/Head';\n\nexport default function page() {\n  return (\n    <Layout title=\"Page\" description=\"A React page demo\">\n      <Head>\n        <meta property=\"og:image\" content=\"image.png\" />\n        <meta name=\"twitter:card\" content=\"summary_large_image\" />\n        <link rel=\"preconnect\" href=\"https://example.com\" />\n        <script type=\"application/ld+json\">\n          {JSON.stringify({\n            '@context': 'https://schema.org/',\n            '@type': 'Organization',\n            name: 'Meta Open Source',\n            url: 'https://opensource.fb.com/',\n            logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',\n          })}\n        <\/script>\n      </Head>\n      {/* ... */}\n    </Layout>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["For convenience, the default theme ",(0,s.jsx)(n.code,{children:"<Layout>"})," component accept ",(0,s.jsx)(n.code,{children:"title"})," and ",(0,s.jsx)(n.code,{children:"description"})," as props."]})}),"\n",(0,s.jsx)(n.h2,{id:"static-html-generation",children:"Static HTML generation"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus is a static site generator\u2014HTML files are statically generated for every URL route, which helps search engines discover your content more easily."}),"\n",(0,s.jsx)(n.h2,{id:"image-meta-description",children:"Image meta description"}),"\n",(0,s.jsx)(n.p,{children:"The alt tag for an image tells the search engine what the image is about, and is used when the image can't be visually seen, e.g. when using a screen reader, or when the image is broken. Alt tags are commonly supported in Markdown."}),"\n",(0,s.jsx)(n.p,{children:"You may also add a title for your image\u2014this doesn't impact SEO much but is displayed as a tooltip when hovering above the image, usually used to provide hints."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"![Docusaurus banner](./assets/docusaurus-asset-example-banner.png 'Image title')\n"})}),"\n",(0,s.jsx)(i.Z,{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Docusaurus banner",src:t(87877).Z+"",title:"Image title",width:"422",height:"110"})})}),"\n",(0,s.jsx)(n.h2,{id:"rich-search-information",children:"Rich search information"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus blogs support ",(0,s.jsx)(n.a,{href:"https://search.google.com/test/rich-results",children:"rich search results"})," out-of-the-box to get maximum search engine experience. The information is created depending on your meta information in blog/global configuration. In order to get the benefits of the rich search information, fill in the information about the post's publish date, authors, and image, etc. Read more about the meta-information ",(0,s.jsx)(n.a,{href:"/docs/blog",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"robots-file",children:"Robots file"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"robots.txt"})," file regulates search engines' behavior about which should be displayed and which shouldn't. You can provide it as ",(0,s.jsx)(n.a,{href:"/docs/static-assets",children:"static asset"}),". The following would allow access to all sub-pages from all requests:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="static/robots.txt"',children:"User-agent: *\nDisallow:\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Read more about the robots file in ",(0,s.jsx)(n.a,{href:"https://developers.google.com/search/docs/advanced/robots/intro",children:"the Google documentation"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important"}),": the ",(0,s.jsx)(n.code,{children:"robots.txt"})," file does ",(0,s.jsx)(n.strong,{children:"not"})," prevent HTML pages from being indexed."]}),(0,s.jsxs)(n.p,{children:["To prevent your whole Docusaurus site from being indexed, use the ",(0,s.jsx)(n.a,{href:"/docs/api/docusaurus-config#noIndex",children:(0,s.jsx)(n.code,{children:"noIndex"})})," site config. Some ",(0,s.jsx)(n.a,{href:"/docs/deployment",children:"hosting providers"})," may also let you configure a ",(0,s.jsx)(n.code,{children:"X-Robots-Tag: noindex"})," HTTP header (GitHub Pages does not support this)."]}),(0,s.jsxs)(n.p,{children:["To prevent a single page from being indexed, use ",(0,s.jsx)(n.code,{children:'<meta name="robots" content="noindex">'})," as ",(0,s.jsx)(n.a,{href:"#single-page-metadata",children:"page metadata"}),". Read more about the ",(0,s.jsx)(n.a,{href:"https://developers.google.com/search/docs/advanced/robots/robots_meta_tag",children:"robots meta tag"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"sitemap-file",children:"Sitemap file"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus provides the ",(0,s.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-sitemap",children:(0,s.jsx)(n.code,{children:"@docusaurus/plugin-sitemap"})})," plugin, which is shipped with ",(0,s.jsx)(n.code,{children:"preset-classic"})," by default. It autogenerates a ",(0,s.jsx)(n.code,{children:"sitemap.xml"})," file which will be available at ",(0,s.jsx)(n.code,{children:"https://example.com/[baseUrl]/sitemap.xml"})," after the production build. This sitemap metadata helps search engine crawlers crawl your site more accurately."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["The sitemap plugin automatically filters pages containing a ",(0,s.jsx)(n.code,{children:"noindex"})," ",(0,s.jsx)(n.a,{href:"https://developers.google.com/search/docs/advanced/robots/robots_meta_tag",children:"robots meta directive"}),"."]}),(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.a,{href:"/examples/noIndex",children:(0,s.jsx)(n.code,{children:"/examples/noIndex"})})," is not included in the ",(0,s.jsx)(n.a,{href:"pathname:///sitemap.xml",children:"Docusaurus sitemap.xml file"})," because it contains the following ",(0,s.jsx)(n.a,{href:"#single-page-metadata",children:"page metadata"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<head>\n  <meta name="robots" content="noindex, nofollow" />\n</head>\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"human-readable-links",children:"Human readable links"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus uses your file names as links, but you can always change that using slugs, see this ",(0,s.jsx)(n.a,{href:"/docs/create-doc#document-id",children:"tutorial"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"structured-content",children:"Structured content"}),"\n",(0,s.jsxs)(n.p,{children:["Search engines rely on the HTML markup such as ",(0,s.jsx)(n.code,{children:"<h2>"}),", ",(0,s.jsx)(n.code,{children:"<table>"}),", etc., to understand the structure of your webpage. When Docusaurus renders your pages, semantic markup, e.g. ",(0,s.jsx)(n.code,{children:"<aside>"}),", ",(0,s.jsx)(n.code,{children:"<nav>"}),", ",(0,s.jsx)(n.code,{children:"<main>"}),", are used to divide the different sections of the page, helping the search engine to locate parts like sidebar, navbar, and the main page content."]}),"\n",(0,s.jsxs)(n.p,{children:["Most ",(0,s.jsx)(n.a,{href:"https://spec.commonmark.org/0.30/#atx-headings",children:"CommonMark"})," syntaxes have their corresponding HTML tags. By using Markdown consistently in your project, you will make it easier for search engines to understand your page content."]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},14522:function(e,n,t){t.d(n,{Z:()=>r});var a=t(85893);t(67294);var s=t(90496);let o="dot_giz1",i="bar_rrRL";function r(e){let{children:n,minHeight:t,url:r="http://localhost:3000",style:c,bodyStyle:d}=e;return(0,a.jsxs)("div",{className:"browserWindow_my1Q",style:{...c,minHeight:t},children:[(0,a.jsxs)("div",{className:"browserWindowHeader_jXSR",children:[(0,a.jsxs)("div",{className:"buttons_uHc7",children:[(0,a.jsx)("span",{className:o,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:o,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:o,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,s.Z)("browserWindowAddressBar_Pd8y","text--truncate"),children:r}),(0,a.jsx)("div",{className:"browserWindowMenuIcon_Vhuh",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:i}),(0,a.jsx)("span",{className:i}),(0,a.jsx)("span",{className:i})]})})]}),(0,a.jsx)("div",{className:"browserWindowBody_Idgs",style:d,children:n})]})}},80980:function(e,n,t){t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);let s={},o=a.createContext(s);function i(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);