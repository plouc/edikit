(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{244:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return l});var r=t(273),a=t.n(r),o=t(0),i=t.n(o),c=t(268),u=t(329);n.default=function(e){var n=e.components,t=a()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:function(e){return i.a.createElement(u.a,e)},layoutProps:t,components:n},i.a.createElement(c.MDXTag,{name:"h1",components:n,props:{id:"showcase"}},i.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"h1",props:{ariaHidden:"true",href:"#showcase"}},i.a.createElement(c.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon icon-link"}})),"Showcase"))};var l={}},254:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return m}),t.d(n,"StaticQueryContext",function(){return f}),t.d(n,"StaticQuery",function(){return p});var r=t(0),a=t.n(r),o=t(15),i=t.n(o),c=t(253),u=t.n(c);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var l=t(256),d=t.n(l);t.d(n,"PageRenderer",function(){return d.a});var s=t(56);t.d(n,"parsePath",function(){return s.a});var f=a.a.createContext({}),p=function(e){return a.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},256:function(e,n,t){var r;e.exports=(r=t(262))&&r.default||r},260:function(e,n,t){"use strict";var r=t(261),a=t(0),o=t.n(a),i=t(251),c=t(254),u=t(129),l=i.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;width:100%;z-index:1000000;height:",";display:flex;justify-content:space-between;align-items:center;background:#255fbc;padding:0 ",";"],Object(u.rhythm)(2),Object(u.rhythm)(1)),d=i.default.nav.withConfig({displayName:"Header__Nav"})(["display:flex;align-items:center;"]),s=Object(i.default)(c.Link).withConfig({displayName:"Header__Project"})(["color:#fff;font-weight:bolder;"]),f=function(e){return Object(i.default)(e).withConfig({displayName:"Header"})(["color:#fff;text-transform:uppercase;font-size:13px;font-weight:bold;margin-left:16px;"])},p=f(c.Link),m=f("a");n.a=function(){return o.a.createElement(c.StaticQuery,{query:"3717006906",render:function(e){return o.a.createElement(l,null,o.a.createElement(s,{to:"/"},e.site.siteMetadata.title),o.a.createElement(d,null,o.a.createElement(p,{to:"/docs/getting-started/installation/"},"Docs"),o.a.createElement(p,{to:"/showcase/"},"Showcase"),o.a.createElement(m,{href:"https://github.com/plouc/edikit",target:"_blank"},"GitHub")))},data:r})}},261:function(e){e.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},262:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(15),i=t.n(o),c=t(57),u=t(4),l=function(e){var n=e.location,t=u.a.getResourcesForPathname(n.pathname);return a.a.createElement(c.a,{location:n,pageResources:t})};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=l},263:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(251),i=t(254),c=t(129),u=o.default.footer.withConfig({displayName:"Footer__Container"})(["width:100%;background:#1c2738;color:#f7f8fd;border-top:1px solid #eaecf3;font-size:14px;a{color:#b6f1e2;font-weight:bold;}"]),l=o.default.div.withConfig({displayName:"Footer__Inner"})(["max-width:840px;margin:0 auto;padding:"," ",";display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:",";"],Object(c.rhythm)(1.5),Object(c.rhythm)(1),Object(c.rhythm)(1));n.a=function(){return a.a.createElement(u,null,a.a.createElement(l,null,a.a.createElement("div",null,"Copyright © 2018 Raphaël Benitte"),a.a.createElement("div",null,a.a.createElement(i.Link,{to:"/docs/getting-started/installation/"},"Documentation")),a.a.createElement("div",null,a.a.createElement("a",{href:"https://github.com/plouc/edikit"},"GitHub"))))}},264:function(e,n,t){"use strict";var r=t(259),a=t.n(r),o=t(251);function i(){var e=a()(["\npre {\n  background: ",";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\npre > code[class*="language-"] {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 17px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\npre + pre {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return i=function(){return e},e}var c="#c5a5c5",u="#8dc891";function l(){var e=a()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n    text-shadow: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\ncode:not([class*="language-"]) {\n    background: #b6f1e2;\n    padding: 2px 6px;\n    border-radius: 2px;\n}\n']);return l=function(){return e},e}Object(o.injectGlobal)(i(),"#282c34","#ffffff","#14161a",c,"#999999","#5a9bcf","#ff8b50","#fc929e",u,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",u,c,"#FAC863"),Object(o.injectGlobal)(l())},265:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=c(t(0)),o=c(t(83)),i=c(t(15));function c(e){return e&&e.__esModule?e:{default:e}}var u=(0,o.default)({}),l=u.Provider,d=u.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,o=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(n,["components"]);return a.default.createElement(d,null,function(n){return a.default.createElement(e,r({components:t||n},o))})}};var s=function(e){var n=e.components,t=e.children;return a.default.createElement(l,{value:n},t)};s.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},n.default=s},268:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(272);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=t(265);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},272:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(0),i=l(o),c=l(t(279)),u=t(265);function l(e){return e&&e.__esModule?e:{default:e}}var d={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),a(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,o=void 0===a?{}:a,u=e.children,l=e.components,s=void 0===l?{}:l,f=e.Layout,p=e.layoutProps,m=s[t+"."+n]||s[n]||d[n]||n;return f?((0,c.default)(this,f),i.default.createElement(f,r({components:s},p),i.default.createElement(m,o,u))):i.default.createElement(m,o,u)}}]),n}();n.default=(0,u.withMDXComponents)(s)},329:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(251),i=t(129),c=t(260),u=t(263),l=(t(264),o.default.div.withConfig({displayName:"Layout__Container"})(["padding-top:",";"],Object(i.rhythm)(2))),d=o.default.div.withConfig({displayName:"Layout__Content"})([""]),s=o.default.div.withConfig({displayName:"Layout__InnerContent"})(["max-width:840px;margin:0 auto;padding:"," ",";"],Object(i.rhythm)(2),Object(i.rhythm)(1));n.a=function(e){var n=e.children;return a.a.createElement("div",null,a.a.createElement(c.a,null),a.a.createElement(l,null,a.a.createElement(d,null,a.a.createElement(s,null,n),a.a.createElement(u.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-showcase-mdx-25fe391cdbede80489bc.js.map