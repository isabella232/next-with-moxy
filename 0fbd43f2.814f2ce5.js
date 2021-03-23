(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),i=(n(0),n(96)),r={id:"conventions",title:"Conventions",sidebar_label:"Conventions"},l={unversionedId:"welcome/conventions",id:"welcome/conventions",isDocsHomePage:!1,title:"Conventions",description:"This boilerplate establishes some conventions that the team executing the project should follow.",source:"@site/docs/welcome/conventions.md",permalink:"/docs/welcome/conventions",sidebar_label:"Conventions",sidebar:"docs",previous:{title:"Instructions",permalink:"/docs/welcome/instructions"},next:{title:"Available scripts",permalink:"/docs/what-is-included/available-scripts"}},s=[{value:"Folder structure",id:"folder-structure",children:[]},{value:"Data Files",id:"data-files",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This boilerplate establishes some conventions that the team executing the project should follow."),Object(i.b)("h2",{id:"folder-structure"},"Folder structure"),Object(i.b)("p",null,"The folder-structure convention favours co-location of assets and their requesters. Here's how it looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u251c\u2500\u2500 _app.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.js\n\u2514\u2500\u2500 www\n \xa0\xa0 \u251c\u2500\u2500 app\n \xa0\xa0 \u251c\u2500\u2500 pages\n    \u2502   \u2514\u2500\u2500 home\n    \u2502   \u2502   \u251c\u2500\u2500 index.js\n    \u2502   \u2502   \u251c\u2500\u2500 Home.js\n    \u2502   \u2502   \u251c\u2500\u2500 Home.test.js\n    \u2502   \u2502   \u251c\u2500\u2500 Home.data.js\n    \u2502   \u2502   \u251c\u2500\u2500 Home.module.css\n    \u2502   \u2502   \u251c\u2500\u2500 hero\n    \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.js\n    \u2502   \u2502   \u2502   \u251c\u2500\u2500 Hero.js\n    \u2502   \u2502   \u2502   \u251c\u2500\u2500 Hero.test.js\n    \u2502   \u2502   \u2502   \u2514\u2500\u2500 Hero.module.css\n    \u2502   \u2502   \u2514\u2500\u2500 ...\n    \u2502   \u2514\u2500\u2500 ...\n \xa0\xa0 \u2514\u2500\u2500 shared\n        \u2514\u2500\u2500 modules\n        \u2502   \u251c\u2500\u2500 api-sdk\n        \u2502   \u251c\u2500\u2500 google-tag-manager\n        \u2514\u2500\u2500 react\n        \u2502   \u251c\u2500\u2500 button\n        \u2502   \u251c\u2500\u2500 card\n        \u2502   \u251c\u2500\u2500 progress-bar\n        \u2502   \u251c\u2500\u2500 icons\n        \u2502   \u2502   \u251c\u2500\u2500 svgs\n        \u2502   \u2502   \u2514\u2500\u2500 index.js\n        \u2502   \u2514\u2500\u2500 ...\n        \u2514\u2500\u2500 media\n        \u2502   \u2514\u2500\u2500 fonts\n        \u2502   \u2514\u2500\u2500 images\n        |   \u2514\u2500\u2500 ...\n        \u2514\u2500\u2500 styles\n")),Object(i.b)("p",null,"...where:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pages"),": This folder is necessary for Next.js since we're taking advantage of its file system routing, and this is where Next.js will search for files to route to by default."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"www"),": Where the code for your application will be.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"app"),": Where your App component will be."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pages"),": Where you can store the source code of your pages. Every file in ",Object(i.b)("inlineCode",{parentName:"li"},"/pages")," will import a component from here. We use this method since we only use ",Object(i.b)("inlineCode",{parentName:"li"},"/pages")," for routing and ",Object(i.b)("inlineCode",{parentName:"li"},"www")," for code that will be compiled. Usually, a page is a set of sections and each section can be a set of another sections or a set of components. You have enough freedom to create logical groups according to the page composition. However, make sure the file structure chosen inside ",Object(i.b)("inlineCode",{parentName:"li"},"www/pages")," reflects it and is clear to every other developer.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"home"),": This an example of a component and the structure you'll find inside. Commonly, you'll find the following files here:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"index.js"),": This file will simply export your component file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Home.js"),": This is your component file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Home.test.js"),": This is the test file corresponding to this component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Home.data.js"),": This is where you'll find data that will be used by this component. You can find a more in depth explanation of this file convention further below."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Home.module.css"),": This is where you'll have styles that are only used in this component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hero"),": This is an example of a section for the ",Object(i.b)("inlineCode",{parentName:"li"},"Home")," page. The folder should follow the same common structure:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"index.js"),": This file will export the section component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Hero.js"),": This is your component file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Hero.test.js"),": This is the test file corresponding to this component."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Hero.module.css"),": This is where you'll have styles that are only used in this component."))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"shared"),": Where you can put content that is shared between pages and cannot be directly co-located with its interested parties.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"modules"),": The folder for modules that are shared between pages. Here you can store components, services such as your web API clients, etc. You can find an example in the diagram above of what files this folder might have. Please note that every module should have a good prefix for better understandability. For example, a react based module should have ",Object(i.b)("inlineCode",{parentName:"li"},"react-")," as a prefix."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"media"),": The folder for media (images, fonts, etc.) that is shared between many components.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"favicons"),": This is where you can store your favicons."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fonts"),": This is where you can store your font files."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"images"),": This is where you can store image files."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"styles"),":  The folder for ",Object(i.b)("inlineCode",{parentName:"li"},".css")," files that are shared between many components.")))))),Object(i.b)("h2",{id:"data-files"},"Data Files"),Object(i.b)("p",null,"One of our file naming conventions is for when you can extract data from a file that needs it and co-locate it with the ",Object(i.b)("inlineCode",{parentName:"p"},".data.")," suffix."),Object(i.b)("p",null,"For example, let's say you have data in your ",Object(i.b)("inlineCode",{parentName:"p"},"Contacts.js")," component that you can extract to another file, you'd extract it to a file named Contacts.data.js that would be placed right next to the original file."))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);