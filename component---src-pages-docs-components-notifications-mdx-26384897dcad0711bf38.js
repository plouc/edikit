(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{248:function(e,n,a){"use strict";a.r(n);var t=a(272),o=a.n(t),p=a(0),c=a.n(p),s=a(265),m=a(263),r=a(252),i=a(280),l=a(293),d=r.default.div.withConfig({displayName:"Notifications__Container"})(["position:relative;height:210px;"]),u=function(){return c.a.createElement(l.a,null,c.a.createElement(d,null,c.a.createElement(i.Notifications,{notifications:[{id:"default",type:"default",content:"default notification"},{id:"success",type:"success",content:"success notification"},{id:"warning",type:"warning",content:"warning notification"},{id:"danger",type:"danger",content:"danger notification"}]})))};a.d(n,"_frontmatter",function(){return N}),n.default=function(e){var n=e.components,a=o()(e,["components"]);return c.a.createElement(s.MDXTag,{name:"wrapper",Layout:m.a,layoutProps:a,components:n},c.a.createElement(s.MDXTag,{name:"h1",components:n},"Notifications"),c.a.createElement(s.MDXTag,{name:"p",components:n},c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#model"}},"model")," |\n",c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#component"}},"component")," |\n",c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#redux-integration"}},"redux integration")," |\n",c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#trigger-notifications-using-provided-action-creators"}},"action creators")," |\n",c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#trigger-notifications-from-actions-meta"}},"action meta")),c.a.createElement(s.MDXTag,{name:"p",components:n},c.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"edikit")," provides a simple notification system, it offers various notification types and optionally supports TTL (ttl only works when using ",c.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#redux-integration"}},"redux"),")."),c.a.createElement(u,null),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Model"),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"interface")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token class-name"}},"INotification")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    id",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token builtin"}},"string")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token comment"}},"// auto-generated when using redux"),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"type"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'default'")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"|")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'success'")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"|")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'warning'")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"|")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'danger'"),"\n    content",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ReactNode\n    ttl",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"?"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token builtin"}},"number"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"))),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Component"),c.a.createElement(s.MDXTag,{name:"p",components:n},"You can use the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Notifications")," component, it accepts an array of notifications."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"import")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{")," Notifications ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"from")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'edikit'"),"\n\n",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"const")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function-variable function"}},"MyNotifications")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=>")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"const")," notifications ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"["),"\n        ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n            type",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'danger'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n            content",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'Something bad happened :/'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n        ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"]"),"\n\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"return")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),"\n        ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"<"),"Notifications\n            notifications",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"="),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"notifications",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),"\n        ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"/"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},">"),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"))),c.a.createElement(s.MDXTag,{name:"h2",components:n},"Redux integration"),c.a.createElement(s.MDXTag,{name:"p",components:n},"In order to integrate the notification system to redux, you'll have to install three\ncomponents, ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"notificationsReducer"),", ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"notificationsEpic")," and ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"notificationsMiddleware"),"."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"import")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{")," combineReducers ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"from")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'redux'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"import")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{")," combineEpics",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},",")," createEpicMiddleware ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"from")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'redux-observable'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"import")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    notificationsReducer",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    notificationsEpic",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    notificationsMiddleware",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"from")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'edikit'"),"\n\n",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"const")," rootEpic ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"combineEpics"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token comment"}},"// …other epics"),"\n    notificationsEpic\n",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"),"\n\n",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"const")," rootReducer ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"combineReducers"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token comment"}},"// …other reducers"),"\n    notifications",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," notificationsReducer",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"),"\n\n",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"const")," epicMiddleware ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"createEpicMiddleware"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"const")," middlewares ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"["),"\n    epicMiddleware",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    notificationsMiddleware",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"]"),"\n\n",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"const")," store ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"createStore"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),"\n    rootReducer",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"applyMiddleware"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token operator"}},"..."),"middlewares",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"))),c.a.createElement(s.MDXTag,{name:"p",components:n},"Once you've setup redux to work with the notification system, you can\nuse the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ConnectedNotifications")," component instead of ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Notifications"),"."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"import")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{")," ConnectedNotifications ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"from")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'edikit'"))),c.a.createElement(s.MDXTag,{name:"h3",components:n},"Trigger notifications using provided action creators"),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"import")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{")," triggerNotification ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token keyword"}},"from")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'edikit'"),"\n\nstore",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"dispatch"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"triggerNotification"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    type",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'danger'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    content",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'Something bad happened :/'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    ttl",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token number"}},"2000"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"))),c.a.createElement(s.MDXTag,{name:"h3",components:n},"Trigger notifications from actions meta"),c.a.createElement(s.MDXTag,{name:"p",components:n},"Once you've installed the ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"notificationsMiddleware"),", you'll be able to add a ",c.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"meta.notification")," object to your actions in order to trigger a notification.\nIt can be used to notify user after important events like save, delete, error…\nwithout having to trigger extra action."),c.a.createElement(s.MDXTag,{name:"pre",components:n},c.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"store",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token function"}},"dispatch"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    type",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'something/CREATE_REQUEST_SUCCESS'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    payload",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," something",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    meta",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        notification",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"{"),"\n            type",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token string"}},"'success'"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n            content",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token template-string"}},c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"token string"}},"`"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"token interpolation"}},c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"token interpolation-punctuation punctuation"}},"${"),"something",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"token punctuation"}},"."),"name",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"token interpolation-punctuation punctuation"}},"}")),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"span",props:{className:"token string"}}," successfully created`")),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n            ttl",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token number"}},"2000"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n        ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),"\n    ",c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},","),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"code",props:{className:"token punctuation"}},")"))))};var N={}},254:function(e,n,a){"use strict";a.r(n),a.d(n,"graphql",function(){return N}),a.d(n,"StaticQueryContext",function(){return d}),a.d(n,"StaticQuery",function(){return u});var t=a(0),o=a.n(t),p=a(16),c=a.n(p),s=a(251),m=a.n(s);a.d(n,"Link",function(){return m.a}),a.d(n,"withPrefix",function(){return s.withPrefix}),a.d(n,"navigate",function(){return s.navigate}),a.d(n,"push",function(){return s.push}),a.d(n,"replace",function(){return s.replace}),a.d(n,"navigateTo",function(){return s.navigateTo});var r=a(255),i=a.n(r);a.d(n,"PageRenderer",function(){return i.a});var l=a(56);a.d(n,"parsePath",function(){return l.a});var d=o.a.createContext({}),u=function(e){return o.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function N(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},255:function(e,n,a){var t;e.exports=(t=a(261))&&t.default||t},259:function(e,n,a){"use strict";var t=a(260),o=a(0),p=a.n(o),c=a(252),s=a(254),m=a(129),r=c.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;background:blue;width:100%;z-index:100000;height:",";display:flex;align-items:center;background:#255fbc;padding:0 ",";"],Object(m.rhythm)(2),Object(m.rhythm)(1));n.a=function(){return p.a.createElement(s.StaticQuery,{query:"3717006906",render:function(e){return p.a.createElement(r,null,p.a.createElement(s.Link,{to:"/"},e.site.siteMetadata.title))},data:t})}},260:function(e){e.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},261:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),p=a(16),c=a.n(p),s=a(57),m=a(4),r=function(e){var n=e.location,a=m.a.getResourcesForPathname(n.pathname);return o.a.createElement(s.a,{location:n,pageResources:a})};r.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},n.default=r},262:function(e,n,a){"use strict";var t=a(0),o=a.n(t),p=a(252),c=a(254),s=a(129),m=p.default.div.withConfig({displayName:"Sidebar__Wrapper"})(["position:fixed;width:calc("," - 1px);top:",";bottom:0;left:0;z-index:10;background:#f7f8fd;border-right:1px solid #eaecf3;padding:"," 0;"],Object(s.rhythm)(10),Object(s.rhythm)(2),Object(s.rhythm)(1)),r=p.default.div.withConfig({displayName:"Sidebar__SectionTitle"})(["padding-left:",";"],Object(s.rhythm)(1)),i=Object(p.default)(c.Link).withConfig({displayName:"Sidebar__LinkItem"})(["display:block;text-decoration:none;color:#666;padding-left:",';border-right:3px solid transparent;margin-right:-1px;&[aria-current*="page"]{color:#000;border-right-color:#417db9;}'],Object(s.rhythm)(1.5)),l=p.default.div.withConfig({displayName:"Sidebar__SubNav"})(["margin-top:",";margin-bottom:",";"],Object(s.rhythm)(.5),Object(s.rhythm)(1));n.a=function(){return o.a.createElement(m,null,o.a.createElement(r,null,"Getting started"),o.a.createElement(l,null,o.a.createElement(i,{to:"/docs/getting-started/installation/"},"Installation"),o.a.createElement(i,{to:"/docs/getting-started/redux/"},"Redux"),o.a.createElement(i,{to:"/docs/getting-started/typescript/"},"Typescript")),o.a.createElement(r,null,"Components"),o.a.createElement(l,null,o.a.createElement(i,{to:"/docs/components/builder/"},"Builder"),o.a.createElement(i,{to:"/docs/components/buttons/"},"Buttons"),o.a.createElement(i,{to:"/docs/components/form/"},"Form"),o.a.createElement(i,{to:"/docs/components/notifications/"},"Notifications"),o.a.createElement(i,{to:"/docs/components/panes/"},"Panes"),o.a.createElement(i,{to:"/docs/components/tree/"},"Tree")),o.a.createElement(r,null,"Guides"),o.a.createElement(l,null,o.a.createElement(i,{to:"/docs/guides/theming/"},"Theming")))}},263:function(e,n,a){"use strict";var t=a(273),o=a.n(t),p=a(0),c=a.n(p),s=a(252),m=a(129),r=a(259),i=a(262);function l(){var e=o()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\npre {\n  background: ',";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\npre > code[class*="language-"] {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 17px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\npre + pre {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return l=function(){return e},e}var d="#c5a5c5",u="#8dc891";Object(s.injectGlobal)(l(),"#282c34","#ffffff","#14161a",d,"#999999","#5a9bcf","#ff8b50","#fc929e",u,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",u,d,"#FAC863");var N=s.default.div.withConfig({displayName:"DocLayout__Container"})(["padding-top:",";"],Object(m.rhythm)(2)),g=s.default.div.withConfig({displayName:"DocLayout__Content"})(["padding-left:",";"],Object(m.rhythm)(12)),k=s.default.div.withConfig({displayName:"DocLayout__InnerContent"})(["max-width:840px;margin:0 auto;padding:"," ",";"],Object(m.rhythm)(2),Object(m.rhythm)(1));n.a=function(e){var n=e.children;return c.a.createElement("div",null,c.a.createElement(r.a,null),c.a.createElement(N,null,c.a.createElement(g,null,c.a.createElement(k,null,n)),c.a.createElement(i.a,null)))}},293:function(e,n,a){"use strict";a.d(n,"a",function(){return N});var t=a(24),o=a.n(t),p=a(0),c=a.n(p),s=a(252),m=a(280),r={black:m.blackTheme,solarizedDark:m.solarizedDarkTheme,white:m.whiteTheme},i=s.default.div.withConfig({displayName:"ThemableDemo__Header"})(["height:46px;display:flex;justify-content:flex-start;padding:0 16px;align-items:center;font-size:13px;border-radius:3px 3px 0 0;background:",";color:",";"],function(e){return e.theme.colors.background},function(e){return e.theme.colors.text}),l=s.default.span.withConfig({displayName:"ThemableDemo__ThemeLabel"})(["margin-right:12px;cursor:pointer;color:",";height:22px;"],function(e){return e.theme.colors.text}),d=s.default.span.withConfig({displayName:"ThemableDemo__ThemeButton"})(["position:relative;margin-right:12px;cursor:pointer;color:",';height:22px;&:after{content:"";height:2px;background:',";bottom:0;position:absolute;left:0;right:0;transition:opacity 600ms;opacity:",";}"],function(e){return e.isActive?e.theme.colors.text:e.theme.colors.muted},function(e){return e.theme.colors.accent},function(e){return e.isActive?1:0}),u=s.default.div.withConfig({displayName:"ThemableDemo__Container"})(["background:",";color:",";overflow:hidden;padding:9px 12px 22px 12px;border-radius:0 0 3px 3px;"],function(e){return e.theme.colors.background},function(e){return e.theme.colors.text}),N=function(e){function n(n){var a;return(a=e.call(this,n)||this).setTheme=function(e){a.setState({theme:e})},a.state={theme:"white"},a}return o()(n,e),n.prototype.render=function(){var e=this,n=r[this.state.theme];return c.a.createElement(s.ThemeProvider,{theme:n},c.a.createElement("div",null,c.a.createElement(i,null,c.a.createElement(l,null,"theme:"),c.a.createElement(d,{onClick:function(){e.setTheme("black")},isActive:"black"===this.state.theme},"black"),c.a.createElement(d,{onClick:function(){e.setTheme("solarizedDark")},isActive:"solarizedDark"===this.state.theme},"solarized dark"),c.a.createElement(d,{onClick:function(){e.setTheme("white")},isActive:"white"===this.state.theme},"white")),c.a.createElement(u,null,this.props.children)))},n}(c.a.Component)}}]);
//# sourceMappingURL=component---src-pages-docs-components-notifications-mdx-26384897dcad0711bf38.js.map