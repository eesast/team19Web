webpackJsonp([0],{"+upk":function(t,e){},0:function(t,e){},"1Bh2":function(t,e){},"1d+E":function(t,e){},"1oF2":function(t,e){},"3Cn6":function(t,e,a){"use strict";var n=a("Pfph");e.a={name:"Login",data:function(){return{faded1:!1,faded2:!0}},components:{},computed:{count:function(){return this.$store.state.count}},methods:{login:function(){var t=this.username,e=this.password,a=(this.$router,{name:t,pwd:e});n.a.login(this,a)},register:function(){var t=this.username,e=this.password,a=this.email,r={name:t,pwd:e,email:a};n.a.register(this,r),console.log("trigger register")},fade1:function(){this.faded1=!1,this.faded2=!0},fade2:function(){this.faded1=!0,this.faded2=!1}}}},Dmvz:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar"),t._v(" "),a("router-view")],1)},r=[],s={render:n,staticRenderFns:r};e.a=s},"Eo/i":function(t,e,a){"use strict";e.a={name:"NavBar"}},K31e:function(t,e,a){"use strict";function n(t){a("Tz2N")}var r=a("3Cn6"),s=a("XdT2"),o=a("Z0/y"),i=n,u=o(r.a,s.a,!1,i,"data-v-dc2b016c",null);e.a=u.exports},M93x:function(t,e,a){"use strict";function n(t){a("1oF2")}var r=a("pYh0"),s=a("Dmvz"),o=a("Z0/y"),i=n,u=o(r.a,s.a,!1,i,null,null);e.a=u.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("VCXJ"),r=a("M93x"),s=a("YaEn"),o=a("l+I4"),i=a("foln");n.a.config.productionTip=!1,n.a.use(i.a),new n.a({el:"#app",store:o.a,router:s.a,template:"<App/>",components:{App:r.a}}),s.a.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requireAuth})?localStorage.length&&localStorage.getItem("teamstyle_name")&&localStorage.getItem("teamstyle_pwd")?a():a({path:"/login"}):a()})},Pfph:function(t,e,a){"use strict";e.a={name:"authSrv",register:function(t,e){return t.$http({url:"/api/login",method:"post",params:e}).then(function(t){console.log(t.status)},function(t){alert(t.status)})},login:function(t,e){return t.$http({url:"/api/login",method:"get",params:e}).then(function(a){console.log(a),e.name==t.$store.state.userInfo.name&&e.pwd==t.$store.state.userInfo.pwd||(t.$store.commit("updateUserInfo",e),localStorage.setItem("teamstyle_name",e.name),localStorage.setItem("teamstyle_pwd",e.pwd)),alert("登录成功"),t.$router.push("home")},function(e){t.$store.commit("clearUserInfo"),localStorage.removeItem("teamstyle_name"),localStorage.removeItem("teamstyle_pwd"),alert(e.status)})},logout:function(t){localStorage.clear(),t.$store.commit("clearUserInfo")},query:function(t,e){return t.$http({url:"/api/login",params:e})},modify:function(t,e){return t.$http({url:"/api/login",method:"post",data:e})}}},SQrV:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v(" "+t._s(t.message)+" ")]),t._v(" "),a("login-reg"),t._v(" "),a("dish-menu")],1)},r=[],s={render:n,staticRenderFns:r};e.a=s},Tz2N:function(t,e){},XdT2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"title"},[a("span",{class:{fonts:t.faded1},attrs:{id:"log-but"},on:{click:t.fade1}},[t._v("登陆")]),t._v(" "),a("span",{class:{fonts:t.faded2},attrs:{id:"reg-but"},on:{click:t.fade2}},[t._v("注册")])]),t._v(" "),a("div",{staticClass:"log-form",class:{hide:t.faded1}},[a("div",{staticClass:"input-line"},[a("i",{staticClass:"fa fa-user-circle-o fa-lg"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-line"},[a("i",{staticClass:"fa fa-key fa-lg"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"submit",on:{click:t.login}},[t._v("提交")])]),t._v(" "),a("div",{staticClass:"reg-form",class:{hide:t.faded2}},[a("div",{staticClass:"input-line"},[a("i",{staticClass:"fa fa-user-circle-o fa-lg"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-line"},[a("i",{staticClass:"fa fa-key fa-lg"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),a("button",{on:{click:t.register}},[t._v("注册")])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-line"},[a("i",{staticClass:"fa fa-envelope fa-lg"}),t._v(" "),a("input",{attrs:{type:"email",placeholder:"邮箱地址"}})])}],s={render:n,staticRenderFns:r};e.a=s},YaEn:function(t,e,a){"use strict";var n=a("VCXJ"),r=a("cigS"),s=a("gORT"),o=a("wUZA"),i=a("K31e");n.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:s.a},{path:"/home",name:"MyHome",component:o.a,meta:{requireAuth:!0}},{path:"/login",name:"Login",component:i.a}]})},aZwy:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{attrs:{href:"/"}},[a("span",{attrs:{id:"no1"}},[t._v("1")])]),t._v(" "),a("span",{attrs:{id:"no2"}},[t._v("2")]),t._v(" "),a("span",{attrs:{id:"no3"}},[t._v("3")]),t._v(" "),a("span",{attrs:{id:"no4"}},[t._v("4")]),t._v(" "),a("a",{attrs:{href:"/login"}},[a("span",{attrs:{id:"log"}},[t._v("登陆/注册")])])])}],s={render:n,staticRenderFns:r};e.a=s},cRXz:function(t,e,a){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},e1rU:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],s={render:n,staticRenderFns:r};e.a=s},eKtB:function(t,e){},"g2+m":function(t,e,a){"use strict";function n(t){a("+upk")}var r=a("Eo/i"),s=a("aZwy"),o=a("Z0/y"),i=n,u=o(r.a,s.a,!1,i,"data-v-18bcb8e3",null);e.a=u.exports},gORT:function(t,e,a){"use strict";function n(t){a("1d+E")}var r=a("cRXz"),s=a("e1rU"),o=a("Z0/y"),i=n,u=o(r.a,s.a,!1,i,"data-v-40f39daa",null);e.a=u.exports},hUUn:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.dishes,function(e){return a("li",{key:e.id},[a("p",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v(t._s(e.price))]),t._v(" "),a("button",{on:{click:t.highlight}},[t._v("order")])])}))},r=[],s={render:n,staticRenderFns:r};e.a=s},"l+I4":function(t,e,a){"use strict";var n=a("VCXJ"),r=a("9rMa");n.a.use(r.a),e.a=new r.a.Store({state:{count:1,userInfo:{name:localStorage.getItem("teamstyle_name"),pwd:localStorage.getItem("teamstyle_pwd")}},getters:{},mutations:{increment:function(t){t.count++,console.log(t.count)},updateUserInfo:function(t,e){t.userInfo=e,console.log(t.userInfo)},clearUserInfo:function(t){t.userInfo=null,console.log("User Logout")}}})},nSLz:function(t,e,a){"use strict";var n=a("zIkb"),r=a("K31e");e.a={name:"Home",data:function(){return{message:"Welcome to my first vue app"}},components:{DishMenu:n.a,Login:r.a}}},pYh0:function(t,e,a){"use strict";var n=a("g2+m");e.a={name:"app",components:{NavBar:n.a}}},wUZA:function(t,e,a){"use strict";function n(t){a("1Bh2")}var r=a("nSLz"),s=a("SQrV"),o=a("Z0/y"),i=n,u=o(r.a,s.a,!1,i,"data-v-2cc24f4a",null);e.a=u.exports},xhFM:function(t,e,a){"use strict";e.a={name:"DishMenu",data:function(){return{dishes:[{id:1,name:"pizza",price:50},{id:2,name:"bread",price:10}]}},methods:{highlight:function(t){t.target.style.background="red"}}}},zIkb:function(t,e,a){"use strict";function n(t){a("eKtB")}var r=a("xhFM"),s=a("hUUn"),o=a("Z0/y"),i=n,u=o(r.a,s.a,!1,i,"data-v-1a454f2c",null);e.a=u.exports}},["NHnr"]);
//# sourceMappingURL=app.18c45dfe5d614c9861c5.js.map