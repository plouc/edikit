(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{242:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",function(){return l});var r=t(275),o=t.n(r),a=t(0),c=t.n(a),i=t(268),u=t(266);e.default=function(n){var e=n.components,t=o()(n,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:u.a,layoutProps:t,components:e},c.a.createElement(i.MDXTag,{name:"h1",components:e},"Form"))};var l={}},257:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return m}),t.d(e,"StaticQueryContext",function(){return f}),t.d(e,"StaticQuery",function(){return p});var r=t(0),o=t.n(r),a=t(16),c=t.n(a),i=t(253),u=t.n(i);t.d(e,"Link",function(){return u.a}),t.d(e,"withPrefix",function(){return i.withPrefix}),t.d(e,"navigate",function(){return i.navigate}),t.d(e,"push",function(){return i.push}),t.d(e,"replace",function(){return i.replace}),t.d(e,"navigateTo",function(){return i.navigateTo});var l=t(258),d=t.n(l);t.d(e,"PageRenderer",function(){return d.a});var s=t(56);t.d(e,"parsePath",function(){return s.a});var f=o.a.createContext({}),p=function(n){return o.a.createElement(f.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},258:function(n,e,t){var r;n.exports=(r=t(264))&&r.default||r},261:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.withMDXComponents=void 0;var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o=i(t(0)),a=i(t(83)),c=i(t(16));function i(n){return n&&n.__esModule?n:{default:n}}var u=(0,a.default)({}),l=u.Provider,d=u.Consumer;e.withMDXComponents=function(n){return function(e){var t=e.components,a=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}(e,["components"]);return o.default.createElement(d,null,function(e){return o.default.createElement(n,r({components:t||e},a))})}};var s=function(n){var e=n.components,t=n.children;return o.default.createElement(l,{value:e},t)};s.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},e.default=s},262:function(n,e,t){"use strict";var r=t(256),o=t.n(r),a=t(263),c=t(0),i=t.n(c),u=t(254),l=t(257),d=t(130);function s(){var n=o()(["\n    position: fixed;\n    background: blue;\n    width: 100%;\n    z-index: 100000;\n    height: ",";\n    display: flex;\n    align-items: center;\n    background: #255fbc;\n    padding: 0 ",";\n"]);return s=function(){return n},n}var f=u.default.div(s(),Object(d.rhythm)(2),Object(d.rhythm)(1));e.a=function(){return i.a.createElement(l.StaticQuery,{query:"3717006906",render:function(n){return i.a.createElement(f,null,i.a.createElement(l.Link,{to:"/"},n.site.siteMetadata.title))},data:a})}},263:function(n){n.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},264:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(16),c=t.n(a),i=t(57),u=t(2),l=function(n){var e=n.location,t=u.a.getResourcesForPathname(e.pathname);return o.a.createElement(i.a,{location:e,pageResources:t})};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=l},265:function(n,e,t){"use strict";var r=t(256),o=t.n(r),a=t(0),c=t.n(a),i=t(254),u=t(257),l=t(130);function d(){var n=o()(["\n    margin-top: ",";\n    margin-bottom: ",";\n"]);return d=function(){return n},n}function s(){var n=o()(["\n    display: block;\n    text-decoration: none;\n    color: #666;\n    padding-left: ",';\n    border-right: 3px solid transparent;\n    margin-right: -1px;\n\n    &[aria-current*="page"] {\n        color: #000;\n        border-right-color: #417db9;\n    }\n']);return s=function(){return n},n}function f(){var n=o()(["\n    padding-left: ",";\n"]);return f=function(){return n},n}function p(){var n=o()(["\n    position: fixed;\n    width: calc("," - 1px);\n    top: ",";\n    bottom: 0;\n    left: 0;\n    z-index: 10;\n    background: #f7f8fd;\n    border-right: 1px solid #eaecf3;\n    padding: "," 0;\n"]);return p=function(){return n},n}var m=i.default.div(p(),Object(l.rhythm)(10),Object(l.rhythm)(2),Object(l.rhythm)(1)),h=i.default.div(f(),Object(l.rhythm)(1)),b=Object(i.default)(u.Link)(s(),Object(l.rhythm)(1.5)),g=i.default.div(d(),Object(l.rhythm)(.5),Object(l.rhythm)(1));e.a=function(){return c.a.createElement(m,null,c.a.createElement(h,null,"Getting started"),c.a.createElement(g,null,c.a.createElement(b,{to:"/docs/getting-started/installation/"},"Installation"),c.a.createElement(b,{to:"/docs/getting-started/redux/"},"Redux"),c.a.createElement(b,{to:"/docs/getting-started/typescript/"},"Typescript")),c.a.createElement(h,null,"Components"),c.a.createElement(g,null,c.a.createElement(b,{to:"/docs/components/builder/"},"Builder"),c.a.createElement(b,{to:"/docs/components/buttons/"},"Buttons"),c.a.createElement(b,{to:"/docs/components/form/"},"Form"),c.a.createElement(b,{to:"/docs/components/notifications/"},"Notifications"),c.a.createElement(b,{to:"/docs/components/panes/"},"Panes"),c.a.createElement(b,{to:"/docs/components/tree/"},"Tree")),c.a.createElement(h,null,"Guides"),c.a.createElement(g,null,c.a.createElement(b,{to:"/docs/guides/theming/"},"Theming")))}},266:function(n,e,t){"use strict";var r=t(256),o=t.n(r),a=t(0),c=t.n(a),i=t(254),u=t(130),l=t(262),d=t(265);function s(){var n=o()(["\n    max-width: 840px;\n    margin: 0 auto;\n    padding: "," ",";\n"]);return s=function(){return n},n}function f(){var n=o()(["\n    padding-left: ",";\n"]);return f=function(){return n},n}function p(){var n=o()(["\n    padding-top: ",";\n"]);return p=function(){return n},n}function m(){var n=o()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\npre {\n  background: ',";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\npre > code[class*="language-"] {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 17px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\npre + pre {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return m=function(){return n},n}var h="#c5a5c5",b="#8dc891";Object(i.injectGlobal)(m(),"#282c34","#ffffff","#14161a",h,"#999999","#5a9bcf","#ff8b50","#fc929e",b,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",b,h,"#FAC863");var g=i.default.div(p(),Object(u.rhythm)(2)),y=i.default.div(f(),Object(u.rhythm)(12)),v=i.default.div(s(),Object(u.rhythm)(2),Object(u.rhythm)(1));e.a=function(n){var e=n.children;return c.a.createElement("div",null,c.a.createElement(l.a,null),c.a.createElement(g,null,c.a.createElement(y,null,c.a.createElement(v,null,e)),c.a.createElement(d.a,null)))}},268:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(270);Object.defineProperty(e,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=t(261);function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},270:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),a=t(0),c=l(a),i=l(t(277)),u=t(261);function l(n){return n&&n.__esModule?n:{default:n}}var d={inlineCode:"code",wrapper:"div"},s=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,a.Component),o(e,[{key:"render",value:function(){var n=this.props,e=n.name,t=n.parentName,o=n.props,a=void 0===o?{}:o,u=n.children,l=n.components,s=void 0===l?{}:l,f=n.Layout,p=n.layoutProps,m=s[t+"."+e]||s[e]||d[e]||e;return f?((0,i.default)(this,f),c.default.createElement(f,r({components:s},p),c.default.createElement(m,a,u))):c.default.createElement(m,a,u)}}]),e}();e.default=(0,u.withMDXComponents)(s)}}]);
//# sourceMappingURL=component---src-pages-docs-components-form-mdx-dfc1d39348629cc63688.js.map