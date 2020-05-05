(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"RedirectButton",(function(){return u})),n.d(t,"Highlight",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),o=(n(207),n(0),n(162)),c={id:"getting_started",title:"Getting Started",sidebar_label:"Getting Started"},i={id:"getting_started",title:"Getting Started",description:"[![codecov](https://codecov.io/gh/checkout/checkout-sdk-node/branch/master/graph/badge.svg)](https://codecov.io/gh/checkout/checkout-sdk-node)",source:"@site/docs/getting_started.md",permalink:"/checkout-sdk-node/getting_started",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"Install",permalink:"/checkout-sdk-node/install"}},s=[{value:"Get a test account",id:"get-a-test-account",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Payload and Responses",id:"payload-and-responses",children:[]}],u=function(e){var t=e.text,n=e.link;return Object(o.b)("a",{href:n,target:"\\_blank",className:"get-test-account"},t)},d=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={rightToc:s,RedirectButton:u,Highlight:d};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codecov.io/gh/checkout/checkout-sdk-node"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://codecov.io/gh/checkout/checkout-sdk-node/branch/master/graph/badge.svg",alt:"codecov"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://travis-ci.orgcheckout/checkout-sdk-node"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://travis-ci.org/checkout/checkout-sdk-node.svg?branch=master",alt:"Build Status"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://codebeat.co/projects/github-com-ioan-ghisoi-cko-checkout-node-sdk-remake"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://codebeat.co/badges/b41734ff-7fb5-4867-94d3-ab0729bb6b69",alt:"codebeat badge"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://npm.runkit.com/checkout-sdk-node"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://badge.runkitcdn.com/checkout-sdk-node.svg",alt:"Try it on RunKit"})))),Object(o.b)("p",null,"The Checkout.com Node.JS SDK makes it easy to interact with the Unified Payments API. You can easily accept payments from cards, digital wallets and the most popular alternative payment methods, as well as pay out to a variety of destinations, all using the same integration."),Object(o.b)("h2",{id:"get-a-test-account"},"Get a test account"),Object(o.b)("p",null,"If you are starting the integration process, and you want to start interacting with Checkout.com's API, you will need a test account, so you can get your API keys."),Object(o.b)(u,{text:"Get a test account",link:"https://www.checkout.com/get-test-account",mdxType:"RedirectButton"}),Object(o.b)("h2",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"When you sign up for an account, you are given a secret and public API key pair. They will be used to initialise the SDK so you can interact with the various endpoints. You can find the keys by navigating to the Checkout.com's Hub ",Object(o.b)(d,{color:"#1877F2",mdxType:"Highlight"},"Settings > Channels > API keys Section"),"."),Object(o.b)("p",null,"Unless required, most of the endpoints covered by the SDK only need the secret key, without the public key. If you do not use one of those endpoints that require the public key, you do not have to specify it when initializing the SDK."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Never share your secret keys. Keep them guarded and secure."))),Object(o.b)("h2",{id:"payload-and-responses"},"Payload and Responses"),Object(o.b)("p",null,"The SDK makes use of dynamic payloads both for the requests and for the API responses. If you want to see all the parameters that you can provide, as well as examples of possible responses, please follow the Checkout.com ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://api-reference.checkout.com/"}),"API Reference"),"."))}l.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,h=p["".concat(c,".").concat(b)]||p[b]||l[b]||o;return n?r.a.createElement(h,i({ref:t},u,{components:n})):r.a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";n(208)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},208:function(e,t,n){var a=n(12),r=n(14),o=n(28),c=/"/g,i=function(e,t,n,a){var r=String(o(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);