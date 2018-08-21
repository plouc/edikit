(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return u});var a=n(260),r=n.n(a),o=n(0),i=n.n(o),c=n(249),l=n(254);t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"usage-with-redux"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h1",props:{ariaHidden:"true",href:"#usage-with-redux"}},i.a.createElement(c.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"Usage with redux"))};var u={}},244:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(240),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(245),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(47);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},245:function(e,t,n){var a;e.exports=(a=n(257))&&a.default||a},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=c(n(0)),o=c(n(75)),i=c(n(9));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),u=l.Provider,d=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return r.default.createElement(d,null,function(t){return r.default.createElement(e,a({components:n||t},o))})}};var s=function(e){var t=e.components,n=e.children;return r.default.createElement(u,{value:t},n)};s.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=s},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(263);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(247);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},254:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(238),i=n(119),c=n(255),l=n(244),u=o.default.div.withConfig({displayName:"Sidebar__Wrapper"})(["position:fixed;width:",";top:",";bottom:0;left:0;z-index:10;background:#f7f8fd;border-right:1px solid #eaecf3;padding:"," 0;"],Object(i.rhythm)(10),Object(i.rhythm)(2),Object(i.rhythm)(1)),d=o.default.div.withConfig({displayName:"Sidebar__SectionTitle"})(["padding-left:",";"],Object(i.rhythm)(1)),s=Object(o.default)(l.Link).withConfig({displayName:"Sidebar__LinkItem"})(["display:block;text-decoration:none;color:#666;padding-left:",';border-right:3px solid transparent;margin-right:-1px;&[aria-current*="page"]{color:#000;border-right-color:#417db9;}'],Object(i.rhythm)(1.5)),p=o.default.div.withConfig({displayName:"Sidebar__SubNav"})(["margin-top:",";margin-bottom:",";"],Object(i.rhythm)(.5),Object(i.rhythm)(1)),f=function(){return r.a.createElement(u,null,r.a.createElement(d,null,"Getting started"),r.a.createElement(p,null,r.a.createElement(s,{to:"/docs/getting-started/installation/"},"Installation"),r.a.createElement(s,{to:"/docs/getting-started/redux/"},"Redux"),r.a.createElement(s,{to:"/docs/getting-started/typescript/"},"Typescript")),r.a.createElement(d,null,"Components"),r.a.createElement(p,null,r.a.createElement(s,{to:"/docs/components/builder/"},"Builder"),r.a.createElement(s,{to:"/docs/components/buttons/"},"Buttons"),r.a.createElement(s,{to:"/docs/components/form/"},"Form"),r.a.createElement(s,{to:"/docs/components/notifications/"},"Notifications"),r.a.createElement(s,{to:"/docs/components/panes/"},"Panes"),r.a.createElement(s,{to:"/docs/components/tree/"},"Tree")),r.a.createElement(d,null,"Guides"),r.a.createElement(p,null,r.a.createElement(s,{to:"/docs/guides/theming/"},"Theming")))},m=n(258),h=(n(259),o.default.div.withConfig({displayName:"DocLayout__Container"})(["padding-top:",";"],Object(i.rhythm)(2))),g=o.default.div.withConfig({displayName:"DocLayout__Content"})(["padding-left:",";"],Object(i.rhythm)(10)),b=o.default.div.withConfig({displayName:"DocLayout__InnerContent"})(["max-width:920px;margin:0 auto;padding:"," ",";"],Object(i.rhythm)(2),Object(i.rhythm)(1));t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(h,null,r.a.createElement(g,null,r.a.createElement(b,null,t),r.a.createElement(m.a,null)),r.a.createElement(f,null)))}},255:function(e,t,n){"use strict";var a=n(256),r=n(0),o=n.n(r),i=n(238),c=n(244),l=n(119),u=i.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;width:100%;z-index:1000000;height:",";display:flex;justify-content:space-between;align-items:center;background:#255fbc;padding:0 ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1)),d=i.default.nav.withConfig({displayName:"Header__Nav"})(["display:flex;align-items:center;"]),s=Object(i.default)(c.Link).withConfig({displayName:"Header__Project"})(["color:#fff;font-weight:bolder;"]),p=function(e){return Object(i.default)(e).withConfig({displayName:"Header"})(["color:#fff;text-transform:uppercase;font-size:13px;font-weight:bold;margin-left:16px;"])},f=p(c.Link),m=p("a");t.a=function(){return o.a.createElement(c.StaticQuery,{query:"3717006906",render:function(e){return o.a.createElement(u,null,o.a.createElement(s,{to:"/"},e.site.siteMetadata.title),o.a.createElement(d,null,o.a.createElement(f,{to:"/docs/getting-started/installation/"},"Docs"),o.a.createElement(f,{to:"/showcase/"},"Showcase"),o.a.createElement(m,{href:"https://github.com/plouc/edikit",target:"_blank"},"GitHub")))},data:a})}},256:function(e){e.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},257:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(48),l=n(1),u=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},258:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(238),i=n(244),c=n(119),l=o.default.footer.withConfig({displayName:"Footer__Container"})(["width:100%;background:#1c2738;color:#f7f8fd;border-top:1px solid #eaecf3;font-size:14px;a{color:#b6f1e2;font-weight:bold;}"]),u=o.default.div.withConfig({displayName:"Footer__Inner"})(["max-width:840px;margin:0 auto;padding:"," ",";display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:",";"],Object(c.rhythm)(1.5),Object(c.rhythm)(1),Object(c.rhythm)(1));t.a=function(){return r.a.createElement(l,null,r.a.createElement(u,null,r.a.createElement("div",null,"Copyright © 2018 Raphaël Benitte"),r.a.createElement("div",null,r.a.createElement(i.Link,{to:"/docs/getting-started/installation/"},"Documentation")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/plouc/edikit"},"GitHub"))))}},259:function(e,t,n){"use strict";var a=n(252),r=n.n(a),o=n(238);function i(){var e=r()(["\npre {\n  background: ",";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\npre > code[class*="language-"] {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 17px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\npre + pre {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return i=function(){return e},e}var c="#c5a5c5",l="#8dc891";function u(){var e=r()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n    text-shadow: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\ncode:not([class*="language-"]) {\n    background: #b6f1e2;\n    padding: 2px 6px;\n    border-radius: 2px;\n}\n']);return u=function(){return e},e}Object(o.injectGlobal)(i(),"#282c34","#ffffff","#14161a",c,"#999999","#5a9bcf","#ff8b50","#fc929e",l,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",l,c,"#FAC863"),Object(o.injectGlobal)(u())},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=u(o),c=u(n(267)),l=n(247);function u(e){return e&&e.__esModule?e:{default:e}}var d={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,l=e.children,u=e.components,s=void 0===u?{}:u,p=e.Layout,f=e.layoutProps,m=s[n+"."+t]||s[t]||d[t]||t;return p?((0,c.default)(this,p),i.default.createElement(p,a({components:s},f),i.default.createElement(m,o,l))):i.default.createElement(m,o,l)}}]),t}();t.default=(0,l.withMDXComponents)(s)}}]);
//# sourceMappingURL=component---src-pages-docs-getting-started-redux-mdx-4c879b0272b57280232d.js.map