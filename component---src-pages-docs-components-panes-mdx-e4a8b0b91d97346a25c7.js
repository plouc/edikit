(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{234:function(e,a,n){"use strict";n.r(a);var t=n(260),o=n.n(t),p=n(0),s=n.n(p),m=n(249),c=n(254),r=(n(122),n(19)),l=n.n(r),N=n(238),i=n(264),d=n(274),u=N.default.div.withConfig({displayName:"Panes__Container"})(["height:200px;position:relative;"]),g=N.default.span.withConfig({displayName:"Panes__Icon"})(["font-size:12px;font-weight:bolder;color:",";"],function(e){return e.theme.colors.accent}),D=N.default.div.withConfig({displayName:"Panes__DemoPane"})(["padding:16px;font-size:13px;height:100%;background:",";"],function(e){return e.theme.pane.body.background}),T=[{id:"demo",renderButton:function(e){return"content "+e.content.id},renderIcon:function(){return s.a.createElement(g,null,"C")},renderPane:function(e){return s.a.createElement(D,null,"Demo pane content ",e.content.id)}}],E=function(e){function a(a){var n;return(n=e.call(this,a)||this).setCurrentPane=function(e){n.setState({panes:Object(i.setCurrentPane)(n.state.panes,e)})},n.setPaneCurrentContent=function(e,a){n.setState({panes:Object(i.setPaneCurrentContent)(n.state.panes,e,a)})},n.removePaneContent=function(e,a){n.setState({panes:Object(i.removePaneContent)(n.state.panes,e,a)})},n.splitPane=function(e,a){n.setState({panes:Object(i.splitPane)(n.state.panes,e,a)})},n.state={panes:[{id:"a",contents:[],split:!0,splitAxis:"vertical",children:["b","c"]},{id:"b",childOf:"a",isCurrent:!0,contents:[{id:"a",type:"demo",isCurrent:!0,isUnique:!1},{id:"b",type:"demo",isCurrent:!1,isUnique:!1}],children:[]},{id:"c",childOf:"a",contents:[{id:"c",type:"demo",isCurrent:!1,isUnique:!1},{id:"d",type:"demo",isCurrent:!0,isUnique:!1}],children:[]}]},n}return l()(a,e),a.prototype.render=function(){return s.a.createElement(d.a,{disableContentPadding:!0},s.a.createElement(u,null,s.a.createElement(i.PaneManager,{init:function(){},panes:this.state.panes,root:this.state.panes.find(function(e){return void 0===e.childOf}),contentTypes:T,setCurrentPane:this.setCurrentPane,setPaneCurrentContent:this.setPaneCurrentContent,removePaneContent:this.removePaneContent,splitPane:this.splitPane})))},a}(s.a.Component);n.d(a,"_frontmatter",function(){return M}),a.default=function(e){var a=e.components,n=o()(e,["components"]);return s.a.createElement(m.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:a},s.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"panes"}},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h1",props:{ariaHidden:"true",href:"#panes"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Panes"),s.a.createElement(m.MDXTag,{name:"p",components:a},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#models"}},"models")," |\n",s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#content-types"}},"content types")," |\n",s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#operations"}},"operations")," |\n",s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#redux-integration"}},"redux integration")," |\n",s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#pane-manager"}},"pane manager")),s.a.createElement(m.MDXTag,{name:"p",components:a},"Panes helps arranging your app into several views, they can be split and resized."),s.a.createElement(E,null),s.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"models"}},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{ariaHidden:"true",href:"#models"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Models"),s.a.createElement(m.MDXTag,{name:"p",components:a},"The pane system is built upon two models: ",s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Pane")," and ",s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"PaneContent"),"."),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-typescript"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"interface")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"IPane"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    id",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"         ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"string"),"        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// unique identifier of the pane"),"\n    isCurrent",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"  ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"boolean"),"\n    split",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"      ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"boolean"),"\n    splitAxis",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," PaneSplitAxis ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// 'vertical' or 'horizontal'"),"\n    childOf",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"   ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"string"),"        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// parent pane id"),"\n    children",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"   ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"string"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"      ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// ids of child panes"),"\n    contents",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"   ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"Array"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"IPaneContent",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">>"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n\n",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"interface")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"IPaneContent"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    id",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"string"),"\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"type"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"      ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"string"),"  ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// id of the content type used for rendering"),"\n    isCurrent",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"boolean"),"\n    isUnique",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"  ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"boolean"),"\n    data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"     Data\n",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"))),s.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"content-types"}},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{ariaHidden:"true",href:"#content-types"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Content types"),s.a.createElement(m.MDXTag,{name:"p",components:a},"Content types define how a pane content should be rendered and must expose:"),s.a.createElement(m.MDXTag,{name:"ul",components:a},s.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"An ",s.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"id")," used to identify the content type, e.g. ",s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"settings")," could be used\nfor a content type rendering a settings control pane.\nThis is what you'll use for the ",s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"type")," property of pane contents."),s.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"A ",s.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"renderButton")," function used to render the content's button label used in pane header,\nit will receive the rendering context."),s.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"A ",s.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"renderIcon")," function used to render the content's icon in pane header,\nit will also receive the rendering context."),s.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"And the most important one, the ",s.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"li"},"renderPane")," function used to render the content itself,\nit will also receive the rendering context.  ")),s.a.createElement(m.MDXTag,{name:"p",components:a},"Definitions:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-typescript"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"interface")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"IContentRenderContext"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    content",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," IPaneContent",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),"\n    pane",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"    IPane",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),"\n    extra",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        close",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"void"),"\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n\n",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"interface")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"IContentType"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    id",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token builtin"}},"string"),"\n    renderButton",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"context",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," IContentRenderContext",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," React",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ReactNode\n    renderIcon",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"   ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"context",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," IContentRenderContext",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," React",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ReactNode\n    renderPane",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":"),"   ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"context",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," IContentRenderContext",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"Data",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," React",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ReactNode\n",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"))),s.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"operations"}},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{ariaHidden:"true",href:"#operations"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Operations"),s.a.createElement(m.MDXTag,{name:"p",components:a},"When working with panes, you'll deal with an array of pane items, and render the top pane\n(the one without any parent) which will then handle the rendering of the whole tree.\nManipulating this collection of pane can be tedious, and for optimal performance,\nwe must keep it immutable, that's why ",s.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"edikit")," provides helpers (aka. operations)\nwhich ease the process:"),s.a.createElement(m.MDXTag,{name:"table",components:a},s.a.createElement(m.MDXTag,{name:"thead",components:a,parentName:"table"},s.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"thead"},s.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"operation"),s.a.createElement(m.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"description"))),s.a.createElement(m.MDXTag,{name:"tbody",components:a,parentName:"table"},s.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"addContentToCurrentPane")),s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Append a content to current pane and set it as current content")),s.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"setPaneCurrentContent")),s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Set an existing pane content as current")),s.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"setCurrentPane")),s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Set pane as current")),s.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"removePaneContent")),s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Remove a pane's content")),s.a.createElement(m.MDXTag,{name:"tr",components:a,parentName:"tbody"},s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},s.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"splitPane")),s.a.createElement(m.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Split a pane into two sub panes")))),s.a.createElement(m.MDXTag,{name:"p",components:a},"If you plan to use ",s.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"edikit")," without redux, you can use a top component, store panes\ninside its state and bind operations to this component:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-javascript"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"class")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"MyCustomPaneManager")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"extends")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"React",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"."),"Component")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"constructor"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"props",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"super"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"props",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n\n        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n            panes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n                id",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'root'"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n                isCurrent",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n                contents",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n                split",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n                splitAxis",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'vertical'"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n                children",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n            ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),"\n        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function-variable function"}},"setCurrentPane")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," paneId ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"setState"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n            panes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"setCurrentPane"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"panes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," paneId",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// you can use the same approach for all other operations "),"\n\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"render"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"return")," ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"\n            ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"PaneManager\n                panes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"panes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n                root",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"panes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"find"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"pane ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," pane",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"childOf ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"===")," undefined",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n                contentTypes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"contentTypes",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n                setCurrentPane",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"setCurrentPane",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n                ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// other bound operations"),"\n            ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"/"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),"\n        ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n    ",s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"))),s.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"redux-integration"}},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{ariaHidden:"true",href:"#redux-integration"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Redux integration"),s.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"pane-manager"}},s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{ariaHidden:"true",href:"#pane-manager"}},s.a.createElement(m.MDXTag,{name:"span",components:a,parentName:"a",props:{className:"icon icon-link"}})),"Pane manager"))};var M={}}}]);
//# sourceMappingURL=component---src-pages-docs-components-panes-mdx-e4a8b0b91d97346a25c7.js.map