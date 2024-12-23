"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["64460"],{24383:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"api/plugin-methods/README","title":"Plugin Method References","description":"This section is a work in progress. Anchor links or even URLs are not guaranteed to be stable.","source":"@site/docs/api/plugin-methods/README.mdx","sourceDirName":"api/plugin-methods","slug":"/api/plugin-methods/","permalink":"/docs/api/plugin-methods/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/README.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1734975931000,"frontMatter":{},"sidebar":"api","previous":{"title":"docusaurus.config.js","permalink":"/docs/api/docusaurus-config"},"next":{"title":"Lifecycle APIs","permalink":"/docs/api/plugin-methods/lifecycle-apis"}}'),o=t("24246"),s=t("80980");let a={},r="Plugin Method References",l={},d=[{value:"Plugin module",id:"plugin-module",level:2},{value:"Plugin constructor",id:"plugin-constructor",level:2},{value:"<code>context</code>",id:"context",level:3},{value:"<code>options</code>",id:"options",level:3},{value:"Example",id:"example",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"plugin-method-references",children:"Plugin Method References"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This section is a work in progress. Anchor links or even URLs are not guaranteed to be stable."})}),"\n",(0,o.jsx)(n.p,{children:"Plugin APIs are shared by themes and plugins\u2014themes are loaded just like plugins."}),"\n",(0,o.jsx)(n.h2,{id:"plugin-module",children:"Plugin module"}),"\n",(0,o.jsx)(n.p,{children:"Every plugin is imported as a module. The module is expected to have the following members:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.strong,{children:"default export"}),": the constructor function for the plugin."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Named exports"}),": the ",(0,o.jsx)(n.a,{href:"/docs/api/plugin-methods/static-methods",children:"static methods"})," called before plugins are initialized."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"plugin-constructor",children:"Plugin constructor"}),"\n",(0,o.jsxs)(n.p,{children:["The plugin module's default export is a constructor function with the signature ",(0,o.jsx)(n.code,{children:"(context: LoadContext, options: PluginOptions) => Plugin | Promise<Plugin>"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"context",children:(0,o.jsx)(n.code,{children:"context"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"context"})," is plugin-agnostic, and the same object will be passed into all plugins used for a Docusaurus website. The ",(0,o.jsx)(n.code,{children:"context"})," object contains the following fields:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type LoadContext = {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"options",children:(0,o.jsx)(n.code,{children:"options"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"options"})," are the ",(0,o.jsx)(n.a,{href:"/docs/using-plugins#configuring-plugins",children:"second optional parameter when the plugins are used"}),". ",(0,o.jsx)(n.code,{children:"options"})," are plugin-specific and are specified by users when they use them in ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"}),". If there's a ",(0,o.jsx)(n.a,{href:"/docs/api/plugin-methods/static-methods#validateOptions",children:(0,o.jsx)(n.code,{children:"validateOptions"})})," function exported, the ",(0,o.jsx)(n.code,{children:"options"})," will be validated and normalized beforehand."]}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, if a preset contains the plugin, the preset will then be in charge of passing the correct options into the plugin. It is up to the individual plugin to define what options it takes."}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"Here's a mental model for a presumptuous plugin implementation."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// A JavaScript function that returns an object.\n// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.\n// `opts` is the user-defined options.\nexport default async function myPlugin(context, opts) {\n  return {\n    // A compulsory field used as the namespace for directories to cache\n    // the intermediate data for each plugin.\n    // If you're writing your own local plugin, you will want it to\n    // be unique in order not to potentially conflict with imported plugins.\n    // A good way will be to add your own project name within.\n    name: 'docusaurus-my-project-cool-plugin',\n\n    async loadContent() {\n      // The loadContent hook is executed after siteConfig and env has been loaded.\n      // You can return a JavaScript object that will be passed to contentLoaded hook.\n    },\n\n    async contentLoaded({content, actions}) {\n      // The contentLoaded hook is done after loadContent hook is done.\n      // `actions` are set of functional API provided by Docusaurus (e.g. addRoute)\n    },\n\n    async postBuild(props) {\n      // After docusaurus <build> finish.\n    },\n\n    // TODO\n    async postStart(props) {\n      // docusaurus <start> finish\n    },\n\n    // TODO\n    afterDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverbefore\n    },\n\n    // TODO\n    beforeDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverafter\n    },\n\n    configureWebpack(config, isServer, utils, content) {\n      // Modify internal webpack config. If returned value is an Object, it\n      // will be merged into the final config using webpack-merge;\n      // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.\n    },\n\n    getPathsToWatch() {\n      // Paths to watch.\n    },\n\n    getThemePath() {\n      // Returns the path to the directory where the theme components can\n      // be found.\n    },\n\n    getClientModules() {\n      // Return an array of paths to the modules that are to be imported\n      // in the client bundle. These modules are imported globally before\n      // React even renders the initial UI.\n    },\n\n    extendCli(cli) {\n      // Register an extra command to enhance the CLI of Docusaurus\n    },\n\n    injectHtmlTags({content}) {\n      // Inject head and/or body HTML tags.\n    },\n\n    async getTranslationFiles({content}) {\n      // Return translation files\n    },\n\n    translateContent({content, translationFiles}) {\n      // translate the plugin content here\n    },\n\n    translateThemeConfig({themeConfig, translationFiles}) {\n      // translate the site themeConfig here\n    },\n\n    async getDefaultCodeTranslationMessages() {\n      // return default theme translations here\n    },\n  };\n}\n\nexport function validateOptions({options, validate}) {\n  const validatedOptions = validate(myValidationSchema, options);\n  return validatedOptions;\n}\n\nexport function validateThemeConfig({themeConfig, validate}) {\n  const validatedThemeConfig = validate(myValidationSchema, options);\n  return validatedThemeConfig;\n}\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},80980:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(27378);let o={},s=i.createContext(o);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);