(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},r={app:0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("8a23"),r=a.n(i);r.a},"15a5":function(t,e,a){},"17a8":function(t,e,a){"use strict";var i=a("905a"),r=a.n(i);r.a},"1f7c":function(t,e,a){},"41ce":function(t,e,a){"use strict";var i=a("15a5"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"comradeClub"}},[a("Navbar"),a("v-content",[a("router-view")],1),a("Footer")],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"overflow-hidden"},[a("v-snackbar",{attrs:{timeout:5e3,top:"",color:"success"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v("Disclaimer! Site is still under construction")]),a("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){t.snackbar=!1}}},[t._v("CLOSE")])],1),a("v-app-bar",{staticClass:"grey darken-3",attrs:{flat:"",dark:"","elevate-on-scroll":""}},[a("v-spacer"),a("router-link",{staticClass:"navLinks",attrs:{to:"/"}},[a("v-toolbar-title",[t._v("The Comrade Club")])],1),a("v-spacer"),a("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.drawer=!0}}}),a("section",{staticClass:"hidden-xs-only flex"},[a("router-link",{staticClass:"navLinks",attrs:{to:"/showcase"}},[a("v-btn",{attrs:{text:""}},[t._v("ShowCase")])],1),a("router-link",{staticClass:"navLinks",attrs:{to:"/about"}},[a("v-btn",{attrs:{text:""}},[t._v("About")])],1)],1)],1),a("v-navigation-drawer",{staticClass:"grey darken-2",attrs:{absolute:"",right:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"/img/brand.png"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("The Comrade Club")])],1)],1),a("v-list-item",[a("v-row",{attrs:{align:"center",justify:"center"}},[t._v("Empower | Captivate")])],1),a("v-divider"),a("v-list",{attrs:{rounded:""}},t._l(t.links,(function(e,i){return a("v-list-item",{key:i,attrs:{router:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[t._v(t._s(e.title))])],1)})),1)],1)],1)},o=[],c={name:"Navbar",data:function(){return{snackbar:!0,drawer:!1,links:[{title:"Homepage",icon:"mdi-home",route:"/"},{title:"ShowCase",icon:"mdi-collage",route:"/showcase"},{title:"About",icon:"mdi-yin-yang",route:"/about"}]}}},l=c,u=(a("c60c"),a("2877")),d=a("6544"),m=a.n(d),v=a("40dc"),p=a("5bc1"),h=a("8336"),f=a("ce7e"),g=a("132d"),b=a("adda"),w=a("8860"),x=a("da13"),y=a("8270"),_=a("5d23"),C=a("34c3"),k=a("f774"),V=a("0fd9"),q=a("2db4"),j=a("2fa4"),P=a("2a7f"),O=Object(u["a"])(l,n,o,!1,null,"1aacf3e9",null),T=O.exports;m()(O,{VAppBar:v["a"],VAppBarNavIcon:p["a"],VBtn:h["a"],VDivider:f["a"],VIcon:g["a"],VImg:b["a"],VList:w["a"],VListItem:x["a"],VListItemAvatar:y["a"],VListItemContent:_["a"],VListItemIcon:C["a"],VListItemTitle:_["b"],VNavigationDrawer:k["a"],VRow:V["a"],VSnackbar:q["a"],VSpacer:j["a"],VToolbarTitle:P["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:" purple darken-3 white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.socialmedia,(function(e,i){return a("v-btn",{key:i,staticClass:"mx-4 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v("Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("© TheComradeClub")]),a("p",[t._v("theRealBossBaby👑 Productions")])])],1)],1)},S=[],A={data:function(){return{socialmedia:[{icon:"mdi-youtube",route:"https://www.youtube.com/channel/UCZPtg_dgYzqW8iCgT4XRoMg"},{icon:"mdi-twitter",route:"https://twitter.com/theBossBabyKe"},{icon:"mdi-instagram",route:"https://instagram.com/thebossbabyke"},{icon:"mdi-reddit",route:"https://reddit.com/u/bossbabyke"}]}}},D=A,W=a("b0af"),I=a("99d9"),E=a("553a"),B=Object(u["a"])(D,L,S,!1,null,"0a04fad6",null),M=B.exports;m()(B,{VBtn:h["a"],VCard:W["a"],VCardText:I["b"],VDivider:f["a"],VFooter:E["a"],VIcon:g["a"]});var $={name:"App",components:{Navbar:T,Footer:M},data:function(){return{}}},N=$,R=(a("034f"),a("7496")),U=a("a75b"),z=Object(u["a"])(N,r,s,!1,null,null,null),F=z.exports;m()(z,{VApp:R["a"],VContent:U["a"]});var G=a("f309");i["a"].use(G["a"]);var H=new G["a"]({}),J=a("8c4f"),Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clubHome purple darken-3 white--text"},[a("div",[a("v-img",{attrs:{dark:"","min-height":"400","max-height":"700",src:"img/main.jpg",gradient:"to right top, purple, transparent"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-card",{attrs:{dark:""}},[a("v-card-title",[a("v-row",[a("v-col",{attrs:{xs12:"",lg12:"",align:"center"}},[a("span",{staticClass:"center"},[t._v("Welcome to The Comrade Club!!")])])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{href:"#deeds"}},[t._v("What do we do?")]),a("v-btn",{attrs:{href:"#mission"}},[t._v("Our Mission")]),a("v-btn",{attrs:{href:"#members"}},[t._v("Who are we?")])],1)],1)],1)],1)],1),a("v-container",{attrs:{"my-5":""}},[a("v-card",{attrs:{dark:"",tile:""}},[a("v-container",{attrs:{"ma-2":""}},[a("v-row",[a("v-col",{attrs:{xs12:"",lg12:"",align:"center"}},[a("h1",[t._v("Oyaah, uko na connections?")])])],1),a("v-divider",{staticClass:"white"}),a("v-row",[a("v-col",{attrs:{align:"center"}},[a("p",[t._v("Welcome to The Comrade Club!")]),a("p",[t._v("Get your work done by fellow comrades 🤞")])])],1)],1)],1),a("v-card",{attrs:{dark:"",id:"deeds"}},[a("v-card-title",[a("v-col",{attrs:{xs12:"",lg12:""}},[a("h1",{attrs:{align:"center"}},[t._v("What We Do:")])])],1)],1),a("v-row",[a("div",{staticClass:"d-flex flex-wrap"},t._l(t.services,(function(e,i){return a("v-col",{key:i,attrs:{align:"center"}},[a("v-card",{staticClass:"pt-3",attrs:{shaped:"",dark:"","min-width":"200"}},[a("v-icon",{attrs:{size:"70",color:e.color}},[t._v(t._s(e.icon))]),a("br"),a("h4",[t._v(t._s(e.name))]),a("v-card-text",[t._v(t._s(e.text))])],1)],1)})),1)]),a("v-divider",{staticClass:"white"}),a("v-divider",{staticClass:"white"}),a("v-divider",{staticClass:"white"}),a("br"),a("v-card",{staticClass:"pl-3 pr-3",attrs:{dark:"",id:"mission"}},[a("v-card-title",[a("v-col",{attrs:{xs11:"",lg12:"",align:"center"}},[t._v("Lets Grow Together!💪")])],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("h3",[t._v("Our Mission and Vision")]),a("p",[t._v("To build a sustainable organization for empowering young people to inspire change in their community.")]),a("p",[t._v("Our efforts target to increase access to youth-targeted temporary employment programs and to improve youth employability.")])]),a("v-col",{attrs:{sm:"6"}},[a("v-img",{attrs:{contain:"",src:"/img/rocket.jpg"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1),a("v-parallax",{attrs:{height:"300",src:"/img/thebossbaby.png"}}),a("v-card",{attrs:{tile:"",dark:"",id:"members"}},[a("v-container",[a("v-card-title",[a("v-row",[a("v-col",{attrs:{align:"center",justify:"center"}},[a("h1",[t._v("Meet The Team!")])])],1)],1),a("v-card-actions",[a("v-col",[a("div",{staticClass:"text-center"},[a("v-bottom-sheet",{attrs:{inset:"",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"orange",dark:""}},"v-btn",r,!1),i),[t._v("Get Acquainted")])]}}]),model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[a("v-sheet",{staticClass:"text-center",attrs:{dark:"",height:"200px"}},[a("v-btn",{staticClass:"mt-6 navLinks",attrs:{text:"",color:"error"},on:{click:function(e){t.sheet=!t.sheet}}},[a("v-icon",[t._v("mdi-alpha-x-box")])],1),a("div",{staticClass:"my-3"},[t._v("View the Comrades' Profiles on the About Page")]),a("router-link",{attrs:{to:"/about"}},[a("v-btn",{staticClass:"navLinks",attrs:{flat:""}},[t._v("About Page")])],1)],1)],1)],1)])],1)],1)],1),a("v-card",{staticClass:"pa-2",attrs:{dark:"",flat:""}},[a("v-card-title",[a("h2",[t._v("Our Philosophy")])]),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("p",[t._v("We know that greatness in a distruptive era requires bold ambition, curious talent and a culture that believes we're smarter together.")]),a("p",[t._v("We approach every challenge holistically, with best-in-class expertise in data, creativity media, technology, search, social and more. We call this Alchemy. It has the power to build our clients' brands and transform their business. And while it may seem like magic, we've got it down to a science.")])]),a("v-col",{attrs:{sm:"6"}},[a("v-img",{attrs:{src:"/img/phil.png","max-width":"700","max-height":"800"}})],1)],1),a("hr",{staticClass:"my-4"})],1)],1)],1)},K=[],X={computed:{carouselimgs:function(){return this.$store.state.carouselimgs}},data:function(){return{sheet:!1,services:[{name:"Web Design",text:"Let us build your first website for less. We'll help you create a beautiful website to impress and engage new customers and establish your business online.",icon:"mdi-cloud-tags",color:"blue",flex:6},{name:"Beats Production",text:"Choose the right beat for your music! Reach out to our talented and dedicated crew and see why we are the best option for your next music project.",icon:"mdi-music",color:"yellow",flex:6},{name:"Content Marketing",text:"We create amazing content architecture that satisfies search engines and users by publishing placements in social media to get the audience’s attention.",icon:"mdi-shopping-outline",color:"green",flex:6},{name:"Graphics Design",text:"We maintain and improve professional-quality standards for printed products such as banners, clothes, cover designs, wall stickers, flyer design, and brochures.",icon:"mdi-pencil-ruler",color:"pink",flex:6},{name:"Professional Photography",text:"Looking to hire a photographer for an event? Weddings | Parties. Look no further!",icon:"mdi-camera",color:"red",flex:12}]}}},Z=X,Q=(a("41ce"),a("288c")),tt=a("62ad"),et=a("a523"),at=a("8b9c"),it=a("490a"),rt=a("8dd9"),st=Object(u["a"])(Z,Y,K,!1,null,"421399eb",null),nt=st.exports;m()(st,{VBottomSheet:Q["a"],VBtn:h["a"],VCard:W["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:tt["a"],VContainer:et["a"],VDivider:f["a"],VIcon:g["a"],VImg:b["a"],VParallax:at["a"],VProgressCircular:it["a"],VRow:V["a"],VSheet:rt["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery purple darken-3 white--text"},[a("v-container",{staticClass:"my-5"},[a("h1",{staticClass:"heading"},[t._v("The Gallery")])])],1)},ct=[],lt={data:function(){return{show:!0}}},ut=lt,dt=Object(u["a"])(ut,ot,ct,!1,null,"10e524f2",null),mt=dt.exports;m()(dt,{VContainer:et["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about  purple darken-3 white--text"},[a("v-container",{staticClass:"my-5"},[a("h1",{staticClass:"heading white--text"},[t._v("About Us")]),a("v-row",t._l(t.comrades,(function(e){return a("v-flex",{key:e.phone,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",{staticClass:"ma-3 white",attrs:{raised:""}},[a("v-avatar",{attrs:{size:"150"}},[a("v-img",{attrs:{src:e.src}})],1),a("v-card-title",[a("v-divider"),a("div",{staticClass:"subheading"},[t._v(t._s(e.name))]),a("v-divider"),a("br")],1),a("v-card-text",[a("div",{staticClass:"grey--text"},[t._v(t._s(e.role))]),a("span",[t._v(t._s(e.pprofile))])]),a("v-card-actions",[a("v-flex",{staticClass:"mt-2 mb-2"},[a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-icon",[t._v("mdi-whatsapp")]),a("v-icon",[t._v("mdi-instagram")]),a("v-icon",[t._v("mdi-twitter")])],1)],1)],1)],1)],1)})),1)],1)],1)},pt=[],ht={components:{},computed:{comrades:function(){return this.$store.state.comrades}}},ft=ht,gt=(a("17a8"),a("8212")),bt=a("0e8f"),wt=Object(u["a"])(ft,vt,pt,!1,null,"9af64a0a",null),xt=wt.exports;m()(wt,{VAvatar:gt["a"],VCard:W["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VContainer:et["a"],VDivider:f["a"],VFlex:bt["a"],VIcon:g["a"],VImg:b["a"],VRow:V["a"]}),i["a"].use(J["a"]);var yt=[{path:"/",name:"Home",component:nt},{path:"/showcase",name:"ShowCase",component:mt},{path:"/about",name:"About",component:xt}],_t=new J["a"]({mode:"history",routes:yt}),Ct=_t,kt=a("2f62");i["a"].use(kt["a"]);var Vt=new kt["a"].Store({strict:!0,state:{carouselimgs:[{src:"/img/caro1.jpg",title:" Welcome to The Comrade Club! ",subtext:""},{src:"/img/caro2.jpg",title:" View the gallery ",subtext:""},{src:"/img/caro3.jpg",title:" Read about the creators ",subtext:""}],comrades:[{name:"The BossBaby",phone:254798384604,role:"Web Developer",pprofile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",src:"./img/me.png"},{name:"Shammer Photography",phone:254727020253,role:"Professional Photographer",pprofile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",src:"./img/shammer.png"},{name:"404Era",phone:254791847748,role:"Music Producer",pprofile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",src:"./img/404era.png"},{name:"Afrikany",phone:254785664410,role:"Graphics Designer",pprofile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",src:"./img/afrikany.png"},{name:"Nick Fury",phone:254741910263,role:"Content Marketer",pprofile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",src:"./img/nickfury.png"}]}});i["a"].config.productionTip=!1,new i["a"]({vuetify:H,router:Ct,store:Vt,render:function(t){return t(F)}}).$mount("#app")},"8a23":function(t,e,a){},"905a":function(t,e,a){},c60c:function(t,e,a){"use strict";var i=a("1f7c"),r=a.n(i);r.a}});
//# sourceMappingURL=app.8ab6afe3.js.map