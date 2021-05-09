(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"Highlight",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),c=n(8),o=(n(0),n(98)),r={id:"reconciliation",title:"Reconciliation"},i={unversionedId:"reconciliation",id:"reconciliation",isDocsHomePage:!1,title:"Reconciliation",description:"You can find a list of request body parameters and possible outcomes here.",source:"@site/docs/reconciliation.md",slug:"/reconciliation",permalink:"/checkout-sdk-node/reconciliation",version:"current",sidebar:"someSidebar",previous:{title:"Files",permalink:"/checkout-sdk-node/files"},next:{title:"Customers",permalink:"/checkout-sdk-node/customers"}},s=[{value:"Get JSON payments report",id:"get-json-payments-report",children:[]},{value:"Paginate the payments JSON report",id:"paginate-the-payments-json-report",children:[]},{value:"Get JSON single payment report",id:"get-json-single-payment-report",children:[]},{value:"Get CSV payments report",id:"get-csv-payments-report",children:[]},{value:"Get JSON statements report",id:"get-json-statements-report",children:[]},{value:"Get CSV single statement report",id:"get-csv-single-statement-report",children:[]},{value:"Get Payments Actions",id:"get-payments-actions",children:[]},{value:"Get Payments Action",id:"get-payments-action",children:[]},{value:"Get Payments Actions CSV",id:"get-payments-actions-csv",children:[]},{value:"Get Action",id:"get-action",children:[]},{value:"Example Buffer usage",id:"example-buffer-usage",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(o.b)("span",{style:{color:n,padding:"0.2rem"}},t)},p={toc:s,Highlight:l};function m(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(o.b)("a",{parentName:"p",href:"https://api-reference.checkout.com/#tag/Reconciliation"},"here"),"."),Object(o.b)("h2",{id:"get-json-payments-report"},"Get JSON payments report"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const reconciliation = await cko.reconciliation.getPayments({\n    from: '2019-05-17T16:48:52Z',\n    to: '2019-06-17T16:48:52Z',\n});\n")),Object(o.b)("h2",{id:"paginate-the-payments-json-report"},"Paginate the payments JSON report"),Object(o.b)("p",null,'The API response can be paginated, either by you setting the "limit" parameter, or by having more then 500 records in the response.\nHere you have an example of how you would handle the pagination:'),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In case the API response contains a",Object(o.b)(l,{color:"#a45200",mdxType:"Highlight"},"next page"),", the page identifier will be injected in the response object as ",Object(o.b)(l,{color:"#5A522C",mdxType:"Highlight"},'"page"'),'.\nYou can then use that value in a subsequent call to move to the next page. (by using the "after" parameter)'))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let page;\n\n// Iterate until there is no longer a page to go to\ndo {\n    const reconciliation = await cko.reconciliation.getPayments({\n        from: '2020-07-07T17:51:42Z',\n        to: '2020-07-07T17:51:59Z',\n        limit: 10,\n        after: page, // in case you saw a page already, skip it\n    });\n    // the next page you can go to\n    page = reconciliation.page;\n    console.log(reconciliation);\n} while (page);\n")),Object(o.b)("h2",{id:"get-json-single-payment-report"},"Get JSON single payment report"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const reconciliation = await cko.reconciliation.getPayment('pay_nezg6bx2k22utmk4xm5s2ughxi');\n")),Object(o.b)("h2",{id:"get-csv-payments-report"},"Get CSV payments report"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const reconciliation = await cko.reconciliation.getPaymentsCsv({\n    from: '2019-05-17T16:48:52Z',\n    to: '2019-06-17T16:48:52Z',\n});\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This API call returns a Buffer."))),Object(o.b)("h2",{id:"get-json-statements-report"},"Get JSON statements report"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const statements = await cko.reconciliation.getStatements({\n    from: '2019-05-17T16:48:52Z',\n    to: '2019-06-17T16:48:52Z',\n});\n")),Object(o.b)("h2",{id:"get-csv-single-statement-report"},"Get CSV single statement report"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const statement = await cko.reconciliation.getStatementCsv('155613B100981');\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This API call returns a Buffer."))),Object(o.b)("h2",{id:"get-payments-actions"},"Get Payments Actions"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const reconciliation = await cko.reconciliation.getPaymentsActions({\n    requested_from: '2020-08-17T16:48:52Z',\n    requested_to: '2020-09-17T16:48:52Z',\n});\n")),Object(o.b)("h2",{id:"get-payments-action"},"Get Payments Action"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const reconciliation = await cko.reconciliation.getPaymentsAction('act_guvhr46cw2kurd6lknczrsh7ma');\n")),Object(o.b)("h2",{id:"get-payments-actions-csv"},"Get Payments Actions CSV"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const reconciliation = await cko.reconciliation.getPaymentsActionsCsv({\n    requested_from: '2020-08-17T16:48:52Z',\n    requested_to: '2020-09-17T16:48:52Z',\n});\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This API call returns a Buffer."))),Object(o.b)("h2",{id:"get-action"},"Get Action"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const reconciliation = await cko.reconciliation.getAction('act_h45qukswryqejptltkcylnwgwe');\n")),Object(o.b)("h2",{id:"example-buffer-usage"},"Example Buffer usage"),Object(o.b)("p",null,"Here you have an example of an Express route that will trigger the CSV download when accessed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"app.get('/getCsv', async (req, res) => {\n    const csv = await cko.reconciliation.getPaymentsCsv({\n        from: '2019-05-17T16:48:52Z',\n        to: '2019-07-17T16:48:52Z',\n    });\n    res.setHeader('Content-disposition', `attachment; filename=Payments.csv`);\n    res.set('Content-Type', 'text/csv');\n    res.end(csv, 'binary');\n});\n")))}m.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),c=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(r,".").concat(d)]||m[d]||b[d]||o;return n?c.a.createElement(u,i(i({ref:t},l),{},{components:n})):c.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);