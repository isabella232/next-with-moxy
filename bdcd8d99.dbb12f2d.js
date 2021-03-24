(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(98)),i={id:"breakpoints",title:"Breakpoints",sidebar_label:"Breakpoints"},b={unversionedId:"what-is-included/breakpoints",id:"what-is-included/breakpoints",isDocsHomePage:!1,title:"Breakpoints",description:"The boilerplate comes with a standardized set of breakpoints, with the following specs:",source:"@site/docs/what-is-included/breakpoints.md",permalink:"/docs/what-is-included/breakpoints",sidebar_label:"Breakpoints",sidebar:"docs",previous:{title:"CSS Modules with PostCSS",permalink:"/docs/what-is-included/css-modules"},next:{title:"Grid system",permalink:"/docs/what-is-included/grid-system"}},c=[{value:"Targeting breakpoints",id:"targeting-breakpoints",children:[]}],o={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The boilerplate comes with a standardized set of breakpoints, with the following specs:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Breakpoint"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"xxs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u22650"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Normal mobile devices")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"xs"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2265480"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Large mobile devices or tiny tablets")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sm"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u2265768"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Small tablets")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"md"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u22651024"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Large tablets or tiny desktops")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"lg"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u22651280"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Small desktops")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"xl"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u22651440"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Normal desktops")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"xxl"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u22651920"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Large desktops")))),Object(l.b)("h2",{id:"targeting-breakpoints"},"Targeting breakpoints"),Object(l.b)("p",null,"Inside ",Object(l.b)("inlineCode",{parentName:"p"},"www/shared/styles/imports/custom-medias.css"),", you will find ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/postcss/postcss-custom-media"}),"Custom Media Queries")," to target resolutions higher, higher or equal, lower and lower or equal for each breakpoint."),Object(l.b)("p",null,"Here's an example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),'@import "../../shared/styles/imports";\n\n.myPage {\n    padding: 0 25px;\n\n    @media (--lte-sm) {\n        padding: 0 10px;\n    }\n}\n')))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?r.a.createElement(m,b(b({ref:t},o),{},{components:n})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);