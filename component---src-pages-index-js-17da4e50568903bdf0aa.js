(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{228:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(244),i=t(323);e.default=function(){return o.a.createElement(i.a,null,o.a.createElement("h1",null,"edikit"),o.a.createElement("p",null,"edikit is a toolkit aiming to build IDE like UIs, it provides several components, state management helpers."),o.a.createElement("p",null,"Have a look at the ",o.a.createElement(r.Link,{to:"/docs/getting-started/installation/"},"documentation")," for usage."))}},244:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return m}),t.d(e,"StaticQueryContext",function(){return f}),t.d(e,"StaticQuery",function(){return p});var a=t(0),o=t.n(a),r=t(9),i=t.n(r),l=t(240),c=t.n(l);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var u=t(245),d=t.n(u);t.d(e,"PageRenderer",function(){return d.a});var s=t(47);t.d(e,"parsePath",function(){return s.a});var f=o.a.createContext({}),p=function(n){return o.a.createElement(f.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},245:function(n,e,t){var a;n.exports=(a=t(257))&&a.default||a},255:function(n,e,t){"use strict";var a=t(256),o=t(0),r=t.n(o),i=t(238),l=t(244),c=t(119),u=i.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;width:100%;z-index:1000000;height:",";display:flex;justify-content:space-between;align-items:center;background:#255fbc;padding:0 ",";"],Object(c.rhythm)(2),Object(c.rhythm)(1)),d=i.default.nav.withConfig({displayName:"Header__Nav"})(["display:flex;align-items:center;"]),s=Object(i.default)(l.Link).withConfig({displayName:"Header__Project"})(["color:#fff;font-weight:bolder;"]),f=function(n){return Object(i.default)(n).withConfig({displayName:"Header"})(["color:#fff;text-transform:uppercase;font-size:13px;font-weight:bold;margin-left:16px;"])},p=f(l.Link),m=f("a");e.a=function(){return r.a.createElement(l.StaticQuery,{query:"3717006906",render:function(n){return r.a.createElement(u,null,r.a.createElement(s,{to:"/"},n.site.siteMetadata.title),r.a.createElement(d,null,r.a.createElement(p,{to:"/docs/getting-started/installation/"},"Docs"),r.a.createElement(p,{to:"/showcase/"},"Showcase"),r.a.createElement(m,{href:"https://github.com/plouc/edikit",target:"_blank"},"GitHub")))},data:a})}},256:function(n){n.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},257:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(9),i=t.n(r),l=t(48),c=t(1),u=function(n){var e=n.location,t=c.a.getResourcesForPathname(e.pathname);return o.a.createElement(l.a,{location:e,pageResources:t})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},258:function(n,e,t){"use strict";var a=t(0),o=t.n(a),r=t(238),i=t(244),l=t(119),c=r.default.footer.withConfig({displayName:"Footer__Container"})(["width:100%;background:#1c2738;color:#f7f8fd;border-top:1px solid #eaecf3;font-size:14px;a{color:#b6f1e2;font-weight:bold;}"]),u=r.default.div.withConfig({displayName:"Footer__Inner"})(["max-width:840px;margin:0 auto;padding:"," ",";display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:",";"],Object(l.rhythm)(1.5),Object(l.rhythm)(1),Object(l.rhythm)(1));e.a=function(){return o.a.createElement(c,null,o.a.createElement(u,null,o.a.createElement("div",null,"Copyright © 2018 Raphaël Benitte"),o.a.createElement("div",null,o.a.createElement(i.Link,{to:"/docs/getting-started/installation/"},"Documentation")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/plouc/edikit"},"GitHub"))))}},259:function(n,e,t){"use strict";var a=t(252),o=t.n(a),r=t(238);function i(){var n=o()(["\npre {\n  background: ",";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\npre > code[class*="language-"] {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 17px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\npre + pre {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return i=function(){return n},n}var l="#c5a5c5",c="#8dc891";function u(){var n=o()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n    text-shadow: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\ncode:not([class*="language-"]) {\n    background: #b6f1e2;\n    padding: 2px 6px;\n    border-radius: 2px;\n}\n']);return u=function(){return n},n}Object(r.injectGlobal)(i(),"#282c34","#ffffff","#14161a",l,"#999999","#5a9bcf","#ff8b50","#fc929e",c,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",c,l,"#FAC863"),Object(r.injectGlobal)(u())},323:function(n,e,t){"use strict";var a=t(0),o=t.n(a),r=t(238),i=t(119),l=t(255),c=t(258),u=(t(259),r.default.div.withConfig({displayName:"Layout__Container"})(["padding-top:",";"],Object(i.rhythm)(2))),d=r.default.div.withConfig({displayName:"Layout__Content"})([""]),s=r.default.div.withConfig({displayName:"Layout__InnerContent"})(["max-width:920px;margin:0 auto;padding:"," ",";"],Object(i.rhythm)(2),Object(i.rhythm)(1));e.a=function(n){var e=n.children;return o.a.createElement("div",null,o.a.createElement(l.a,null),o.a.createElement(u,null,o.a.createElement(d,null,o.a.createElement(s,null,e),o.a.createElement(c.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-17da4e50568903bdf0aa.js.map