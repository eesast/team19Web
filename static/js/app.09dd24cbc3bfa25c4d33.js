webpackJsonp([1],{0:function(t,e){},"16Ty":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),t._v(" "),n("router-view")],1)},r=[],o={render:a,staticRenderFns:r};e.a=o},"1Bh2":function(t,e){},"1d+E":function(t,e){},"3Cn6":function(t,e,n){"use strict";var a=n("Pfph");e.a={name:"Login",data:function(){return{}},components:{},computed:{count:function(){return this.$store.state.count}},methods:{jump:function(t){t.$router.push("/home")},login:function(){var t=this.username,e=this.password,n=(this.$router,{name:t,pwd:e});a.a.login(this,n,this.jump)},register:function(){var t=this.username,e=this.password,n=this.email,r={name:t,pwd:e,email:n};a.a.register(this,r),console.log("trigger register")}}}},"3G2q":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.files,function(e){return n("el-card",{key:e.id},[n("h2",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),n("p",[t._v(" "+t._s(e.intro)+" ")]),t._v(" "),n("el-button",{attrs:{type:"primary"}},[n("a",{attrs:{href:e.address}},[t._v("download")])])],1)}))},r=[],o={render:a,staticRenderFns:r};e.a=o},"6r/K":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/"}},[t._v(" index ")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{attrs:{to:"/home"}},[t._v(" fakehome ")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("router-link",{attrs:{to:"/file"}},[t._v(" 文件 ")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"4"}},[t._v(" 选项4 ")]),t._v(" "),n("router-link",{attrs:{to:"/login"}},[n("el-menu-item",{attrs:{index:"5",id:"log"}},[t._v(" 登录|注册 ")])],1)],1)},r=[],o={render:a,staticRenderFns:r};e.a=o},Bbhf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},r=[],o={render:a,staticRenderFns:r};e.a=o},C2TQ:function(t,e){},"Eo/i":function(t,e,n){"use strict";e.a={name:"NavBar",data:function(){return{activeIndex:"1"}}}},K31e:function(t,e,n){"use strict";function a(t){n("C2TQ")}var r=n("3Cn6"),o=n("nlyC"),s=n("Z0/y"),i=a,u=s(r.a,o.a,!1,i,"data-v-354af0ec",null);e.a=u.exports},M93x:function(t,e,n){"use strict";function a(t){n("h1eq")}var r=n("pYh0"),o=n("16Ty"),s=n("Z0/y"),i=a,u=s(r.a,o.a,!1,i,null,null);e.a=u.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("VCXJ"),r=n("M93x"),o=n("5KA/"),s=n.n(o),i=n("wW0W"),u=(n.n(i),n("YaEn")),l=n("l+I4"),c=n("foln");a.default.config.productionTip=!1,a.default.use(c.a),a.default.use(s.a),new a.default({el:"#app",render:function(t){return t(r.a)},store:l.a,router:u.a,template:"<App/>",components:{App:r.a}}),u.a.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requireAuth})?localStorage.length&&"undefined"!=localStorage.getItem("teamstyle_name")&&"undefined"!=localStorage.getItem("teamstyle_pwd")?n():n({path:"/login"}):n()})},Pfph:function(t,e,n){"use strict";e.a={name:"authSrv",register:function(t,e){return t.$http({url:"/api/login",method:"post",params:e}).then(function(t){alert("Congratulations! You have created your account."),console.log(t.status)},function(t){alert(t.status)})},login:function(t,e,n){var t=t,n=n;return t.$http({url:"/api/login",method:"get",params:e}).then(function(a){console.log(a),e.name==t.$store.state.userInfo.name&&e.pwd==t.$store.state.userInfo.pwd||(t.$store.commit("updateUserInfo",e),localStorage.setItem("teamstyle_name",e.name),localStorage.setItem("teamstyle_pwd",e.pwd)),alert("登录成功"),"function"==typeof n&&(console.log("回调"),n(t))},function(a){localStorage.setItem("teamstyle_name",e.name),localStorage.setItem("teamstyle_pwd",e.pwd),console.log("更新"),alert(a.status),"function"==typeof n&&(console.log("回调"),n(t))})},logout:function(t){localStorage.clear(),t.$store.commit("clearUserInfo")},query:function(t,e){return t.$http({url:"/api/login",params:e})},modify:function(t,e){return t.$http({url:"/api/login",method:"post",data:e})}}},RKj2:function(t,e,n){"use strict";var a=n("xUlW"),r=n("Bbhf"),o=n("Z0/y"),s=o(a.a,r.a,!1,null,null,null);e.a=s.exports},SQrV:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" "+t._s(t.message)+" ")]),t._v(" "),n("login-reg"),t._v(" "),n("dish-menu")],1)},r=[],o={render:a,staticRenderFns:r};e.a=o},UA8P:function(t,e,n){"use strict";var a=n("VX/p");e.a={name:"File",data:function(){return{files:[]}},created:function(){a.a.loadFile(this)},components:{},methods:{}}},"VX/p":function(t,e,n){"use strict";var a=n("phcV");n.n(a);e.a={name:"fileSrv",loadFile:function(t){return console.log("loading"),t.$http({url:"api/files"}).then(function(e){console.log("success"),t.data.title=e.title,t.data.intro=e.intro,t.data.address=e.address},function(e){console.log("gg"),t.title="faketitle",t.intro="fakeintro",t.address="fakeaddr.xx",t.files=[{id:0,title:"faketitle0",intro:"fakeintro0",address:"fakeaddr0.xx"},{id:1,title:"faketitle1",intro:"fakeintro1",address:"fakeaddr1.xx"}]})}}},WzXd:function(t,e){},XsMz:function(t,e){},YaEn:function(t,e,n){"use strict";var a=n("VCXJ"),r=n("cigS"),o=n("gORT"),s=n("wUZA"),i=n("K31e"),u=n("RKj2"),l=n("xWEe");a.default.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:o.a},{path:"/home",name:"MyHome",component:s.a,meta:{requireAuth:!0}},{path:"/login",name:"Login",component:i.a},{path:"/reg",name:"Reg",component:u.a},{path:"/file",name:"File",component:l.a}]})},cRXz:function(t,e,n){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},e1rU:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],o={render:a,staticRenderFns:r};e.a=o},eKtB:function(t,e){},"g2+m":function(t,e,n){"use strict";function a(t){n("WzXd")}var r=n("Eo/i"),o=n("6r/K"),s=n("Z0/y"),i=a,u=s(r.a,o.a,!1,i,"data-v-64ef9402",null);e.a=u.exports},gORT:function(t,e,n){"use strict";function a(t){n("1d+E")}var r=n("cRXz"),o=n("e1rU"),s=n("Z0/y"),i=a,u=s(r.a,o.a,!1,i,"data-v-40f39daa",null);e.a=u.exports},h1eq:function(t,e){},hUUn:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.dishes,function(e){return n("li",{key:e.id},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v(t._s(e.price))]),t._v(" "),n("button",{on:{click:t.highlight}},[t._v("order")])])}))},r=[],o={render:a,staticRenderFns:r};e.a=o},"l+I4":function(t,e,n){"use strict";var a=n("VCXJ"),r=n("9rMa");a.default.use(r.a),e.a=new r.a.Store({state:{count:1,userInfo:{name:localStorage.getItem("teamstyle_name"),pwd:localStorage.getItem("teamstyle_pwd")}},getters:{},mutations:{increment:function(t){t.count++,console.log(t.count)},updateUserInfo:function(t,e){t.userInfo=e,console.log(t.userInfo)},clearUserInfo:function(t){t.userInfo=null,console.log("User Logout")}}})},nSLz:function(t,e,n){"use strict";var a=n("zIkb"),r=n("K31e");e.a={name:"Home",data:function(){return{message:"Welcome to my first vue app"}},components:{DishMenu:a.a,Login:r.a}}},nlyC:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("el-form",{attrs:{model:t.form,"label-position":"left","label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.login}},[t._v("登陆")]),t._v(" "),n("p",[t._v("没有账号？点击注册")])],1)],1)],1)},r=[],o={render:a,staticRenderFns:r};e.a=o},pYh0:function(t,e,n){"use strict";var a=n("g2+m");e.a={name:"app",components:{NavBar:a.a}}},wUZA:function(t,e,n){"use strict";function a(t){n("1Bh2")}var r=n("nSLz"),o=n("SQrV"),s=n("Z0/y"),i=a,u=s(r.a,o.a,!1,i,"data-v-2cc24f4a",null);e.a=u.exports},wW0W:function(t,e){},xUlW:function(t,e,n){"use strict";e.a={name:"Reg"}},xWEe:function(t,e,n){"use strict";function a(t){n("XsMz")}var r=n("UA8P"),o=n("3G2q"),s=n("Z0/y"),i=a,u=s(r.a,o.a,!1,i,"data-v-60ac4e5b",null);e.a=u.exports},xhFM:function(t,e,n){"use strict";e.a={name:"DishMenu",data:function(){return{dishes:[{id:1,name:"pizza",price:50},{id:2,name:"bread",price:10}]}},methods:{highlight:function(t){t.target.style.background="red"}}}},zIkb:function(t,e,n){"use strict";function a(t){n("eKtB")}var r=n("xhFM"),o=n("hUUn"),s=n("Z0/y"),i=a,u=s(r.a,o.a,!1,i,"data-v-1a454f2c",null);e.a=u.exports}},["NHnr"]);
//# sourceMappingURL=app.09dd24cbc3bfa25c4d33.js.map