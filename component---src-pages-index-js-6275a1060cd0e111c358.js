(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{247:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(273),i=t.n(r),c=t(252),l=t(129),d=t(259),u=t(262);function s(){var e=i()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\n.gatsby-highlight {\n  background: ',";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\n.gatsby-highlight code[class*="language-"],\n.gatsby-highlight pre[class*="language-"],\n.gatsby-highlight pre.prism-code {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 19px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\n.gatsby-highlight + .gatsby-highlight {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return s=function(){return e},e}var m="#c5a5c5",p="#8dc891";Object(c.injectGlobal)(s(),"#282c34","#ffffff","#14161a",m,"#999999","#5a9bcf","#ff8b50","#fc929e",p,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",p,m,"#FAC863");var h=c.default.div.withConfig({displayName:"Layout__Container"})(["padding-top:",";"],Object(l.rhythm)(2)),g=c.default.div.withConfig({displayName:"Layout__Content"})(["padding-left:",";"],Object(l.rhythm)(12)),f=c.default.div.withConfig({displayName:"Layout__InnerContent"})(["max-width:840px;margin:0 auto;padding:"," ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1)),b=function(e){var n=e.children;return o.a.createElement("div",null,o.a.createElement(d.a,null),o.a.createElement(h,null,o.a.createElement(g,null,o.a.createElement(f,null,n)),o.a.createElement(u.a,null)))};n.default=function(){return o.a.createElement(b,null,o.a.createElement("h1",null,"Richard Hamming on Luck"),o.a.createElement("div",null,o.a.createElement("p",null,"From Richard Hamming’s classic and must-read talk, “",o.a.createElement("a",{href:"http://www.cs.virginia.edu/~robins/YouAndYourResearch.html"},"You and Your Research"),"”."),o.a.createElement("blockquote",null,o.a.createElement("p",null,"There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds something important and does it. So yes, it is luck."," ",o.a.createElement("em",null,"The particular thing you do is luck, but that you do something is not.")))),o.a.createElement("p",null,"Posted April 09, 2011"))}},254:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return p});var a=t(0),o=t.n(a),r=t(16),i=t.n(r),c=t(251),l=t.n(c);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var d=t(255),u=t.n(d);t.d(n,"PageRenderer",function(){return u.a});var s=t(56);t.d(n,"parsePath",function(){return s.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},255:function(e,n,t){var a;e.exports=(a=t(261))&&a.default||a},259:function(e,n,t){"use strict";var a=t(260),o=t(0),r=t.n(o),i=t(252),c=t(254),l=t(129),d=i.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;background:blue;width:100%;z-index:100000;height:",";display:flex;align-items:center;background:#255fbc;padding:0 ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1));n.a=function(){return r.a.createElement(c.StaticQuery,{query:"3717006906",render:function(e){return r.a.createElement(d,null,r.a.createElement(c.Link,{to:"/"},e.site.siteMetadata.title))},data:a})}},260:function(e){e.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},261:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(16),i=t.n(r),c=t(57),l=t(4),d=function(e){var n=e.location,t=l.a.getResourcesForPathname(n.pathname);return o.a.createElement(c.a,{location:n,pageResources:t})};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=d},262:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(252),i=t(254),c=t(129),l=r.default.div.withConfig({displayName:"Sidebar__Wrapper"})(["position:fixed;width:calc("," - 1px);top:",";bottom:0;left:0;z-index:10;background:#f7f8fd;border-right:1px solid #eaecf3;padding:"," 0;"],Object(c.rhythm)(10),Object(c.rhythm)(2),Object(c.rhythm)(1)),d=r.default.div.withConfig({displayName:"Sidebar__SectionTitle"})(["padding-left:",";"],Object(c.rhythm)(1)),u=Object(r.default)(i.Link).withConfig({displayName:"Sidebar__LinkItem"})(["display:block;text-decoration:none;color:#666;padding-left:",';border-right:3px solid transparent;margin-right:-1px;&[aria-current*="page"]{color:#000;border-right-color:#417db9;}'],Object(c.rhythm)(1.5)),s=r.default.div.withConfig({displayName:"Sidebar__SubNav"})(["margin-top:",";margin-bottom:",";"],Object(c.rhythm)(.5),Object(c.rhythm)(1));n.a=function(){return o.a.createElement(l,null,o.a.createElement(d,null,"Getting started"),o.a.createElement(s,null,o.a.createElement(u,{to:"/docs/getting-started/installation/"},"Installation"),o.a.createElement(u,{to:"/docs/getting-started/redux/"},"Redux"),o.a.createElement(u,{to:"/docs/getting-started/typescript/"},"Typescript")),o.a.createElement(d,null,"Components"),o.a.createElement(s,null,o.a.createElement(u,{to:"/docs/components/builder/"},"Builder"),o.a.createElement(u,{to:"/docs/components/buttons/"},"Buttons"),o.a.createElement(u,{to:"/docs/components/form/"},"Form"),o.a.createElement(u,{to:"/docs/components/notifications/"},"Notifications"),o.a.createElement(u,{to:"/docs/components/panes/"},"Panes"),o.a.createElement(u,{to:"/docs/components/tree/"},"Tree")),o.a.createElement(d,null,"Guides"),o.a.createElement(s,null,o.a.createElement(u,{to:"/docs/guides/theming/"},"Theming")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6275a1060cd0e111c358.js.map