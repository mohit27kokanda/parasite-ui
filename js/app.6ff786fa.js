(function(t){function e(e){for(var a,o,l=e[0],c=e[1],i=e[2],v=0,f=[];v<l.length;v++)o=l[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{flat:""}},[n("AppBar"),n("v-main",{attrs:{app:""}},[n("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:""}},[n("router-link",{attrs:{to:"/"}},[t._v(" logo here ")]),n("v-spacer"),n("div",{staticClass:"d-flex"},[n("router-link",{staticClass:"mx-2",attrs:{to:"/services"}},[t._v(" Services ")]),n("router-link",{staticClass:"mx-2",attrs:{to:"/docs"}},[t._v(" Docs ")]),n("router-link",{staticClass:"mx-2",attrs:{to:"/api"}},[t._v(" API ")])],1),n("v-spacer"),n("div",{staticClass:"d-flex"},[n("UserDropDown")],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":"","nudge-left":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),a),[t._v(" Login "),n("v-icon",{attrs:{right:""}},[t._v(" mdi-arrow-drop-down ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-card",[n("div",[n("v-btn",[t._v(" github-login ")]),n("v-btn",[t._v(" google-login ")])],1),t.loggedIn?n("div",[n("v-list",[n("v-list-item",[t._v(" something ")])],1)],1):t._e()])],1)},i=[],u={data:function(){return{menu:!1,loggedIn:!1}}},v=u,f=n("2877"),p=n("6544"),d=n.n(p),m=n("8336"),h=n("b0af"),_=n("132d"),g=n("8860"),b=n("da13"),C=n("e449"),w=Object(f["a"])(v,c,i,!1,null,null,null),V=w.exports;d()(w,{VBtn:m["a"],VCard:h["a"],VIcon:_["a"],VList:g["a"],VListItem:b["a"],VMenu:C["a"]});var y={components:{UserDropDown:V}},x=y,j=n("40dc"),O=n("2fa4"),k=Object(f["a"])(x,o,l,!1,null,null,null),E=k.exports;d()(k,{VAppBar:j["a"],VSpacer:O["a"]});var $={components:{AppBar:E}},S=$,A=n("7496"),I=n("f6c4"),P=Object(f["a"])(S,r,s,!1,null,null,null),R=P.exports;d()(P,{VApp:A["a"],VMain:I["a"]});var T=n("9483");Object(T["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var B=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"blue",attrs:{cols:"12"}},[n("Header")],1),n("v-col",{staticClass:"green",attrs:{cols:"12"}},[n("Working")],1),n("v-col",{staticClass:"pink",attrs:{cols:"12"}},[n("Stats")],1)],1)],1),n("Footer")],1)},q=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"pink",attrs:{cols:"4"}},[n("h1",[t._v("An unified API service for machine learning models")])]),n("v-col",{staticClass:"d-flex yellow justify-center align-center",attrs:{cols:"6"}},[t._v(" [do some showoff here] ")])],1)},F=[],M=n("62ad"),N=n("0fd9"),W={},U=Object(f["a"])(W,L,F,!1,null,null,null),H=U.exports;d()(U,{VCol:M["a"],VRow:N["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"grey"},[n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[t._v(" How does it work? ")])],1),n("v-row",{staticClass:"red"},[n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"6"}},[t._v(" [description] ")]),n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"6"}},[t._v(" [image] ")])],1),n("v-row",{staticClass:"purple"},[n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"6"}},[t._v(" [image] ")]),n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"6"}},[t._v(" [description] ")])],1),n("v-row",{staticClass:"yellow"},[n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"6"}},[t._v(" [description] ")]),n("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"6"}},[t._v(" [image] ")])],1)],1)},J=[],K=n("a523"),z={},Q=Object(f["a"])(z,G,J,!1,null,null,null),X=Q.exports;d()(Q,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" [Put some cards and show statistics about performance and results here.] ")])},Z=[],tt={},et=Object(f["a"])(tt,Y,Z,!1,null,null,null),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"blue"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("div",[t._v("Parasite UI")])]),n("v-col",{attrs:{cols:"4"}},[n("ul",[n("li",[t._v("something")]),n("li",[t._v("something")])])]),n("v-col",{attrs:{cols:"4"}},[n("ul",[n("li",[t._v("something")]),n("li",[t._v("something")])])])],1)],1)},rt=[],st={},ot=Object(f["a"])(st,at,rt,!1,null,null,null),lt=ot.exports;d()(ot,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var ct={components:{Header:H,Working:X,Stats:nt,Footer:lt}},it=ct,ut=Object(f["a"])(it,D,q,!1,null,null,null),vt=ut.exports;d()(ut,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("SearchBar")],1),n("v-col",{attrs:{cols:"12"}},[n("ServiceList")],1),n("v-col",{attrs:{cols:"12"}},[n("ServiceRequest")],1)],1)],1)},pt=[],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-10 mx-10 px-12"},[n("v-text-field",{attrs:{placeholder:"Search for a service...",solo:""}})],1)},mt=[],ht=n("8654"),_t={},gt=Object(f["a"])(_t,dt,mt,!1,null,null,null),bt=gt.exports;d()(gt,{VTextField:ht["a"]});var Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},t._l(4,(function(e){return n("v-col",{key:e,attrs:{cols:"3"}},[n("v-card",{attrs:{to:"/request"}},[n("v-card-title",[t._v(" [service name here.] ")]),n("v-card-text",[t._v(" [service img here.] ")]),n("v-card-actions",[t._v(" [service description bulleted here.] ")])],1)],1)})),1)},wt=[],Vt=n("99d9"),yt={},xt=Object(f["a"])(yt,Ct,wt,!1,null,null,null),jt=xt.exports;d()(xt,{VCard:h["a"],VCardActions:Vt["a"],VCardText:Vt["b"],VCardTitle:Vt["c"],VCol:M["a"],VRow:N["a"]});var Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",[t._v(" Didn't find what you're looking for? Write to us. ")]),n("v-form",{staticClass:"px-10"},[n("v-text-field",{attrs:{solo:"",placeholder:"write something"}}),n("v-text-field",{attrs:{solo:"",placeholder:"write somethin"}})],1)],1)],1)},kt=[],Et=n("4bd4"),$t={},St=Object(f["a"])($t,Ot,kt,!1,null,null,null),At=St.exports;d()(St,{VCard:h["a"],VCardTitle:Vt["c"],VForm:Et["a"],VTextField:ht["a"]});var It={components:{SearchBar:bt,ServiceList:jt,ServiceRequest:At}},Pt=It,Rt=Object(f["a"])(Pt,ft,pt,!1,null,null,null),Tt=Rt.exports;d()(Rt,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("KeysInfo")],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("UsageInfo")],1)],1)],1)},Dt=[],qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[t._v(" Private keys for programmatic access ")])],1),n("v-row",[n("v-col",{staticClass:"yellow",attrs:{cols:"6"}},[t._v(" [some api keys here.] ")]),n("v-col",{staticClass:"pink",attrs:{cols:"6"}},[t._v(" [some api keys here.] ")])],1)],1)},Lt=[],Ft={},Mt=Object(f["a"])(Ft,qt,Lt,!1,null,null,null),Nt=Mt.exports;d()(Mt,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"yellow",attrs:{cols:"5"}},[t._v(" [some graph here about quota.] ")]),n("v-col",{staticClass:"pink",attrs:{cols:"5"}},[t._v(" [another graph here about quota.] ")])],1),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"grey",attrs:{cols:"12"}},[t._v(" [a table or list that shows past api calls and status.] ")])],1)],1)},Ut=[],Ht={},Gt=Object(f["a"])(Ht,Wt,Ut,!1,null,null,null),Jt=Gt.exports;d()(Gt,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var Kt={components:{KeysInfo:Nt,UsageInfo:Jt}},zt=Kt,Qt=Object(f["a"])(zt,Bt,Dt,!1,null,null,null),Xt=Qt.exports;d()(Qt,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{staticClass:"pink",attrs:{cols:"3"}},[n("NavBar")],1),n("v-col",{attrs:{cols:"9"}},[n("Pages")],1)],1)],1)},Zt=[],te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{staticClass:"green",attrs:{permanent:"",floating:""}},[n("v-list",[n("v-list-item",[n("v-list-item-title",[t._v(" Programmatic Access ")])],1),n("v-list-item",[n("v-list-item-title",[t._v(" Web Interface ")])],1)],1)],1)],1)},ee=[],ne=n("5d23"),ae=n("f774"),re={},se=Object(f["a"])(re,te,ee,!1,null,null,null),oe=se.exports;d()(se,{VList:g["a"],VListItem:b["a"],VListItemTitle:ne["a"],VNavigationDrawer:ae["a"]});var le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5"},[n("div",[t._v(" [Write something] ")]),n("div",[t._v(" [Write something] ")])])},ce=[],ie={},ue=Object(f["a"])(ie,le,ce,!1,null,null,null),ve=ue.exports;d()(ue,{VContainer:K["a"]});var fe={components:{NavBar:oe,Pages:ve}},pe=fe,de=Object(f["a"])(pe,Yt,Zt,!1,null,null,null),me=de.exports;d()(de,{VCol:M["a"],VContainer:K["a"],VRow:N["a"]});var he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("DataInput"),n("Guide"),n("About")],1)},_e=[],ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5 my-5"},[n("v-row",[t._v(" [This takes input of a service and check for sanity.] ")]),n("v-row",[n("v-btn",{attrs:{to:"/result"}},[t._v(" submit ")])],1)],1)},be=[],Ce={},we=Object(f["a"])(Ce,ge,be,!1,null,null,null),Ve=we.exports;d()(we,{VBtn:m["a"],VContainer:K["a"],VRow:N["a"]});var ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5 my-5"},[t._v(" [This section has a guide on how to use this service, using ui and programmatically.] ")])},xe=[],je={},Oe=Object(f["a"])(je,ye,xe,!1,null,null,null),ke=Oe.exports;d()(Oe,{VContainer:K["a"]});var Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5 my-5"},[t._v(" [This section has info about a particular service.] ")])},$e=[],Se={},Ae=Object(f["a"])(Se,Ee,$e,!1,null,null,null),Ie=Ae.exports;d()(Ae,{VContainer:K["a"]});var Pe={components:{DataInput:Ve,Guide:ke,About:Ie}},Re=Pe,Te=Object(f["a"])(Re,he,_e,!1,null,null,null),Be=Te.exports;d()(Te,{VContainer:K["a"]});var De=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("Analysis"),n("Response")],1)},qe=[],Le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5 my-5"},[t._v(" [Show some charts and graphs about the results.] ")])},Fe=[],Me={},Ne=Object(f["a"])(Me,Le,Fe,!1,null,null,null),We=Ne.exports;d()(Ne,{VContainer:K["a"]});var Ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"elevation-5 my-5"},[t._v(" [Show the response received from the server here.] ")])},He=[],Ge={},Je=Object(f["a"])(Ge,Ue,He,!1,null,null,null),Ke=Je.exports;d()(Je,{VContainer:K["a"]});var ze={components:{Analysis:We,Response:Ke}},Qe=ze,Xe=Object(f["a"])(Qe,De,qe,!1,null,null,null),Ye=Xe.exports;d()(Xe,{VContainer:K["a"]}),a["a"].use(B["a"]);var Ze=[{path:"/",name:"landing",component:vt},{path:"/services",name:"services",component:Tt},{path:"/api",name:"api",component:Xt},{path:"/docs",name:"docs",component:me},{path:"/request",name:"request",component:Be},{path:"/result",name:"result",component:Ye}],tn=new B["a"]({routes:Ze}),en=tn,nn=n("2f62"),an={},rn={},sn={};a["a"].use(nn["a"]);var on=new nn["a"].Store({state:an,mutations:rn,actions:sn,modules:{}}),ln=n("f309");a["a"].use(ln["a"]);var cn=new ln["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:en,store:on,vuetify:cn,render:function(t){return t(R)}}).$mount("#app")}});
//# sourceMappingURL=app.6ff786fa.js.map