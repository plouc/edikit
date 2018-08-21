(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{248:function(e,t,n){"use strict";n.r(t);var a=n(272),r=n.n(a),o=n(0),i=n.n(o),c=n(265),l=n(263),s=n(252),u=n(280),d=n(293),m=s.default.div.withConfig({displayName:"Buttons__Grid"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-column-gap:12px;grid-row-gap:9px;"]),p=function(){return i.a.createElement(d.a,null,i.a.createElement(m,null,i.a.createElement(u.Button,{variant:"default",style:{marginRight:9}},"default"),i.a.createElement(u.Button,{variant:"primary",style:{marginRight:9}},"primary"),i.a.createElement(u.Button,{variant:"success",style:{marginRight:9}},"success"),i.a.createElement(u.Button,{variant:"warning",style:{marginRight:9}},"warning"),i.a.createElement(u.Button,{variant:"danger"},"danger"),i.a.createElement(u.Button,{variant:"default",size:"large",style:{marginRight:9}},"default L"),i.a.createElement(u.Button,{variant:"primary",size:"large",style:{marginRight:9}},"primary L"),i.a.createElement(u.Button,{variant:"success",size:"large",style:{marginRight:9}},"success L"),i.a.createElement(u.Button,{variant:"warning",size:"large",style:{marginRight:9}},"warning L"),i.a.createElement(u.Button,{variant:"danger",size:"large"},"danger L")))};n.d(t,"_frontmatter",function(){return h}),t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"buttons"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h1",props:{ariaHidden:"true",href:"#buttons"}},i.a.createElement(c.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"Buttons"),i.a.createElement(p,null))};var h={}},254:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=n(251),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(255),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(56);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},255:function(e,t,n){var a;e.exports=(a=n(261))&&a.default||a},259:function(e,t,n){"use strict";var a=n(260),r=n(0),o=n.n(r),i=n(252),c=n(254),l=n(129),s=i.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;background:blue;width:100%;z-index:100000;height:",";display:flex;align-items:center;background:#255fbc;padding:0 ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1));t.a=function(){return o.a.createElement(c.StaticQuery,{query:"3717006906",render:function(e){return o.a.createElement(s,null,o.a.createElement(c.Link,{to:"/"},e.site.siteMetadata.title))},data:a})}},260:function(e){e.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=n(57),l=n(4),s=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:n})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},262:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(252),i=n(254),c=n(129),l=o.default.div.withConfig({displayName:"Sidebar__Wrapper"})(["position:fixed;width:calc("," - 1px);top:",";bottom:0;left:0;z-index:10;background:#f7f8fd;border-right:1px solid #eaecf3;padding:"," 0;"],Object(c.rhythm)(10),Object(c.rhythm)(2),Object(c.rhythm)(1)),s=o.default.div.withConfig({displayName:"Sidebar__SectionTitle"})(["padding-left:",";"],Object(c.rhythm)(1)),u=Object(o.default)(i.Link).withConfig({displayName:"Sidebar__LinkItem"})(["display:block;text-decoration:none;color:#666;padding-left:",';border-right:3px solid transparent;margin-right:-1px;&[aria-current*="page"]{color:#000;border-right-color:#417db9;}'],Object(c.rhythm)(1.5)),d=o.default.div.withConfig({displayName:"Sidebar__SubNav"})(["margin-top:",";margin-bottom:",";"],Object(c.rhythm)(.5),Object(c.rhythm)(1));t.a=function(){return r.a.createElement(l,null,r.a.createElement(s,null,"Getting started"),r.a.createElement(d,null,r.a.createElement(u,{to:"/docs/getting-started/installation/"},"Installation"),r.a.createElement(u,{to:"/docs/getting-started/redux/"},"Redux"),r.a.createElement(u,{to:"/docs/getting-started/typescript/"},"Typescript")),r.a.createElement(s,null,"Components"),r.a.createElement(d,null,r.a.createElement(u,{to:"/docs/components/builder/"},"Builder"),r.a.createElement(u,{to:"/docs/components/buttons/"},"Buttons"),r.a.createElement(u,{to:"/docs/components/form/"},"Form"),r.a.createElement(u,{to:"/docs/components/notifications/"},"Notifications"),r.a.createElement(u,{to:"/docs/components/panes/"},"Panes"),r.a.createElement(u,{to:"/docs/components/tree/"},"Tree")),r.a.createElement(s,null,"Guides"),r.a.createElement(d,null,r.a.createElement(u,{to:"/docs/guides/theming/"},"Theming")))}},263:function(e,t,n){"use strict";var a=n(273),r=n.n(a),o=n(0),i=n.n(o),c=n(252),l=n(129),s=n(259),u=n(262);function d(){var e=r()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\ncode:not([class*="language-"]) {\n    background: #dae4f9;\n    padding: 2px 6px;\n    border-radius: 2px;\n}\n\npre {\n  background: ',";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\npre > code[class*="language-"] {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 17px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\npre + pre {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return d=function(){return e},e}var m="#c5a5c5",p="#8dc891";Object(c.injectGlobal)(d(),"#282c34","#ffffff","#14161a",m,"#999999","#5a9bcf","#ff8b50","#fc929e",p,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",p,m,"#FAC863");var h=c.default.div.withConfig({displayName:"DocLayout__Container"})(["padding-top:",";"],Object(l.rhythm)(2)),g=c.default.div.withConfig({displayName:"DocLayout__Content"})(["padding-left:",";"],Object(l.rhythm)(12)),f=c.default.div.withConfig({displayName:"DocLayout__InnerContent"})(["max-width:840px;margin:0 auto;padding:"," ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1));t.a=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(s.a,null),i.a.createElement(h,null,i.a.createElement(g,null,i.a.createElement(f,null,t)),i.a.createElement(u.a,null)))}},293:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(24),r=n.n(a),o=n(0),i=n.n(o),c=n(252),l=n(280),s={black:l.blackTheme,solarizedDark:l.solarizedDarkTheme,white:l.whiteTheme},u=c.default.div.withConfig({displayName:"ThemableDemo__Header"})(["height:46px;display:flex;justify-content:flex-start;padding:0 16px;align-items:center;font-size:13px;border-radius:3px 3px 0 0;background:",";color:",";"],function(e){return e.theme.colors.background},function(e){return e.theme.colors.text}),d=c.default.span.withConfig({displayName:"ThemableDemo__ThemeLabel"})(["margin-right:12px;cursor:pointer;color:",";height:22px;"],function(e){return e.theme.colors.text}),m=c.default.span.withConfig({displayName:"ThemableDemo__ThemeButton"})(["position:relative;margin-right:12px;cursor:pointer;color:",';height:22px;&:after{content:"";height:2px;background:',";bottom:0;position:absolute;left:0;right:0;transition:opacity 600ms;opacity:",";}"],function(e){return e.isActive?e.theme.colors.text:e.theme.colors.muted},function(e){return e.theme.colors.accent},function(e){return e.isActive?1:0}),p=c.default.div.withConfig({displayName:"ThemableDemo__Container"})(["background:",";color:",";overflow:hidden;padding:9px 12px 22px 12px;border-radius:0 0 3px 3px;"],function(e){return e.theme.colors.background},function(e){return e.theme.colors.text}),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).setTheme=function(e){n.setState({theme:e})},n.state={theme:"white"},n}return r()(t,e),t.prototype.render=function(){var e=this,t=s[this.state.theme];return i.a.createElement(c.ThemeProvider,{theme:t},i.a.createElement("div",null,i.a.createElement(u,null,i.a.createElement(d,null,"theme:"),i.a.createElement(m,{onClick:function(){e.setTheme("black")},isActive:"black"===this.state.theme},"black"),i.a.createElement(m,{onClick:function(){e.setTheme("solarizedDark")},isActive:"solarizedDark"===this.state.theme},"solarized dark"),i.a.createElement(m,{onClick:function(){e.setTheme("white")},isActive:"white"===this.state.theme},"white")),i.a.createElement(p,null,this.props.children)))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-docs-components-buttons-mdx-247d4379a5856397c97d.js.map