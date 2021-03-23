(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(96)),o={id:"rest-api",title:"Adding a simple REST API",sidebar_label:"Simple REST API"},p={unversionedId:"recipes/rest-api",id:"recipes/rest-api",isDocsHomePage:!1,title:"Adding a simple REST API",description:"Sometimes a project may require a simple REST API (e.g. to send an email). Next.js brought API routes support in v9, but you have to provide your own implementation for handling different HTTP methods, validation, error handling and so on. We have created @moxy/next-rest-api to solve these problems, so that you can focus on writing your business logic.",source:"@site/docs/recipes/rest-api.md",permalink:"/docs/recipes/rest-api",sidebar_label:"Simple REST API",sidebar:"docs",previous:{title:"And everything that comes with Next.js",permalink:"/docs/what-is-included/everything-else"},next:{title:"Proper vh CSS unit on Mobile",permalink:"/docs/recipes/inner-vh"}},c=[{value:"Walk-through",id:"walk-through",children:[{value:"1. Install <code>@moxy/next-rest-api</code>",id:"1-install-moxynext-rest-api",children:[]},{value:"2. Create <code>/api/my-endpoint.js</code> file",id:"2-create-apimy-endpointjs-file",children:[]},{value:"3. Map <code>/api/my-endpoint.js</code> to <code>/pages/api/my-endpoint.js</code>",id:"3-map-apimy-endpointjs-to-pagesapimy-endpointjs",children:[]},{value:"4. Access your API at <code>/api/my-endpoint</code>",id:"4-access-your-api-at-apimy-endpoint",children:[]}]}],s={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes a project may require a simple REST API (e.g. to send an email). Next.js brought API routes support in v9, but you have to provide your own implementation for handling different HTTP methods, validation, error handling and so on. We have created ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/moxystudio/next-rest-api/"}),Object(i.b)("inlineCode",{parentName:"a"},"@moxy/next-rest-api"))," to solve these problems, so that you can focus on writing your business logic."),Object(i.b)("p",null,"Besides getting familiar with the ",Object(i.b)("inlineCode",{parentName:"p"},"@moxy/next-rest-api"),", you might want to give a quick read over Next.js ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://nextjs.org/docs#api-routes"}),"API routes")," documentation. Next.js extends Node.js ",Object(i.b)("inlineCode",{parentName:"p"},"req")," and ",Object(i.b)("inlineCode",{parentName:"p"},"res")," objects with additional functionality and ships with built-in middleware."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please note that if you require more than a simple API with one or two endpoints, it's better if you create a separate project (and repository) for it.")),Object(i.b)("h2",{id:"walk-through"},"Walk-through"),Object(i.b)("h3",{id:"1-install-moxynext-rest-api"},"1. Install ",Object(i.b)("inlineCode",{parentName:"h3"},"@moxy/next-rest-api")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i @moxy/next-rest-api @hapi/joi @hapi/boom\n")),Object(i.b)("h3",{id:"2-create-apimy-endpointjs-file"},"2. Create ",Object(i.b)("inlineCode",{parentName:"h3"},"/api/my-endpoint.js")," file"),Object(i.b)("p",null,"Similarly to ",Object(i.b)("inlineCode",{parentName:"p"},"/www"),", which is where our frontend code lives, we have a convention to put all our API code into the ",Object(i.b)("inlineCode",{parentName:"p"},"/api")," folder."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import withRest from '@moxy/next-rest-api';\n\nexport default withRest({\n    GET: async (req, res) => {\n        // Do something..\n\n        return { hello: 'world' };\n    },\n});\n")),Object(i.b)("h3",{id:"3-map-apimy-endpointjs-to-pagesapimy-endpointjs"},"3. Map ",Object(i.b)("inlineCode",{parentName:"h3"},"/api/my-endpoint.js")," to ",Object(i.b)("inlineCode",{parentName:"h3"},"/pages/api/my-endpoint.js")),Object(i.b)("p",null,"Next.js requires pages to be defined in ",Object(i.b)("inlineCode",{parentName:"p"},"pages/")," so we must create ",Object(i.b)("inlineCode",{parentName:"p"},"pages/api/my-endpoint.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export { default } from '../../api/my-endpoint';\n")),Object(i.b)("h3",{id:"4-access-your-api-at-apimy-endpoint"},"4. Access your API at ",Object(i.b)("inlineCode",{parentName:"h3"},"/api/my-endpoint")),Object(i.b)("p",null,"Next.js will map every file in ",Object(i.b)("inlineCode",{parentName:"p"},"/pages/api")," to a corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"/api/...")," URL. For example, the file ",Object(i.b)("inlineCode",{parentName:"p"},"/pages/api/products.js")," will map to the ",Object(i.b)("inlineCode",{parentName:"p"},"/api/products")," URL."))}l.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(m,p(p({ref:t},s),{},{components:n})):a.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);