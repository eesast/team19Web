webpackJsonp([1],{0:function(e,t){},"16Ty":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav-bar"),e._v(" "),r("router-view")],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},"1Bh2":function(e,t){},"1d+E":function(e,t){},"3Cn6":function(e,t,r){"use strict";var n=r("Pfph");t.a={name:"Login",data:function(){return{form:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名"}],password:[{required:!0,message:"请输入密码"}]}}},components:{},computed:{count:function(){return this.$store.state.count}},methods:{jump:function(e){e.$router.push("/home")},login:function(){var e=this.username,t=this.password,r=(this.$router,{name:e,pwd:t});n.a.login(this,r,this.jump)},register:function(){var e=this.username,t=this.password,r=this.email,a={name:e,pwd:t,email:r};n.a.register(this,a),console.log("trigger register")}}}},"3G2q":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.files,function(t){return r("el-card",{key:t.id},[r("h2",[e._v(" "+e._s(t.title)+" ")]),e._v(" "),r("p",[e._v(" "+e._s(t.intro)+" ")]),e._v(" "),r("el-button",{attrs:{type:"primary"}},[r("a",{attrs:{href:t.address}},[e._v("download")])])],1)}))},a=[],o={render:n,staticRenderFns:a};t.a=o},"5X9Y":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"wrap"}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.login}},[e._v("注册")]),e._v(" "),r("router-link",{attrs:{to:"/login"}},[r("p",[e._v("已有账号？点击登陆")])])],1)],1)],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},"9K/J":function(e,t){},"Eo/i":function(e,t,r){"use strict";t.a={name:"NavBar",data:function(){return{activeIndex:"1"}}}},GEyH:function(e,t){},K31e:function(e,t,r){"use strict";function n(e){r("Pgce")}var a=r("3Cn6"),o=r("YlaO"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,"data-v-29ef6190",null);t.a=u.exports},M93x:function(e,t,r){"use strict";function n(e){r("h1eq")}var a=r("pYh0"),o=r("16Ty"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("VCXJ"),a=r("M93x"),o=r("5KA/"),s=r.n(o),i=r("wW0W"),u=(r.n(i),r("YaEn")),l=r("l+I4"),c=r("foln");n.default.config.productionTip=!1,n.default.use(c.a),n.default.use(s.a),new n.default({el:"#app",render:function(e){return e(a.a)},store:l.a,router:u.a,template:"<App/>",components:{App:a.a}}),u.a.beforeEach(function(e,t,r){e.matched.some(function(e){return e.meta.requireAuth})?localStorage.length&&"undefined"!=localStorage.getItem("teamstyle_name")&&"undefined"!=localStorage.getItem("teamstyle_pwd")?r():r({path:"/login"}):r()})},Pfph:function(e,t,r){"use strict";t.a={name:"authSrv",register:function(e,t){return e.$http({url:"/api/login",method:"post",params:t}).then(function(e){alert("Congratulations! You have created your account."),console.log(e.status)},function(e){alert(e.status)})},login:function(e,t,r){var e=e,r=r;return e.$http({url:"/api/login",method:"get",params:t}).then(function(n){console.log(n),t.name==e.$store.state.userInfo.name&&t.pwd==e.$store.state.userInfo.pwd||(e.$store.commit("updateUserInfo",t),localStorage.setItem("teamstyle_name",t.name),localStorage.setItem("teamstyle_pwd",t.pwd)),alert("登录成功"),"function"==typeof r&&(console.log("回调"),r(e))},function(n){localStorage.setItem("teamstyle_name",t.name),localStorage.setItem("teamstyle_pwd",t.pwd),console.log("更新"),alert(n.status),"function"==typeof r&&(console.log("回调"),r(e))})},logout:function(e){localStorage.clear(),e.$store.commit("clearUserInfo")},query:function(e,t){return e.$http({url:"/api/login",params:t})},modify:function(e,t){return e.$http({url:"/api/login",method:"post",data:t})}}},Pgce:function(e,t){},RKj2:function(e,t,r){"use strict";function n(e){r("GEyH")}var a=r("xUlW"),o=r("5X9Y"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,"data-v-de4cbea8",null);t.a=u.exports},SQrV:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(" "+e._s(e.message)+" ")]),e._v(" "),r("login-reg"),e._v(" "),r("dish-menu")],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},UA8P:function(e,t,r){"use strict";var n=r("VX/p");t.a={name:"File",data:function(){return{files:[]}},created:function(){n.a.loadFile(this)},components:{},methods:{}}},"VX/p":function(e,t,r){"use strict";var n=r("phcV");r.n(n);t.a={name:"fileSrv",loadFile:function(e){return console.log("loading"),e.$http({url:"api/files"}).then(function(t){console.log("success"),e.data.title=t.title,e.data.intro=t.intro,e.data.address=t.address},function(t){console.log("gg"),e.title="faketitle",e.intro="fakeintro",e.address="fakeaddr.xx",e.files=[{id:0,title:"faketitle0",intro:"fakeintro0",address:"fakeaddr0.xx"},{id:1,title:"faketitle1",intro:"fakeintro1",address:"fakeaddr1.xx"}]})}}},XsMz:function(e,t){},YaEn:function(e,t,r){"use strict";var n=r("VCXJ"),a=r("cigS"),o=r("gORT"),s=r("wUZA"),i=r("K31e"),u=r("RKj2"),l=r("xWEe");n.default.use(a.a),t.a=new a.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:o.a},{path:"/home",name:"MyHome",component:s.a,meta:{requireAuth:!0}},{path:"/login",name:"Login",component:i.a},{path:"/reg",name:"Reg",component:u.a},{path:"/file",name:"File",component:l.a}]})},YlaO:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"wrap"}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.login}},[e._v("登陆")]),e._v(" "),r("router-link",{attrs:{to:"/reg"}},[r("p",[e._v("没有账号？点击注册")])])],1)],1)],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},cRXz:function(e,t,r){"use strict";t.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},e1rU:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}],o={render:n,staticRenderFns:a};t.a=o},eKtB:function(e,t){},"g2+m":function(e,t,r){"use strict";function n(e){r("9K/J")}var a=r("Eo/i"),o=r("qScR"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,"data-v-5d7c0032",null);t.a=u.exports},gORT:function(e,t,r){"use strict";function n(e){r("1d+E")}var a=r("cRXz"),o=r("e1rU"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,"data-v-40f39daa",null);t.a=u.exports},h1eq:function(e,t){},hUUn:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.dishes,function(t){return r("li",{key:t.id},[r("p",[e._v(e._s(t.name))]),e._v(" "),r("p",[e._v(e._s(t.price))]),e._v(" "),r("button",{on:{click:e.highlight}},[e._v("order")])])}))},a=[],o={render:n,staticRenderFns:a};t.a=o},"l+I4":function(e,t,r){"use strict";var n=r("VCXJ"),a=r("9rMa");n.default.use(a.a),t.a=new a.a.Store({state:{count:1,userInfo:{name:localStorage.getItem("teamstyle_name"),pwd:localStorage.getItem("teamstyle_pwd")}},getters:{},mutations:{increment:function(e){e.count++,console.log(e.count)},updateUserInfo:function(e,t){e.userInfo=t,console.log(e.userInfo)},clearUserInfo:function(e){e.userInfo=null,console.log("User Logout")}}})},nSLz:function(e,t,r){"use strict";var n=r("zIkb"),a=r("K31e");t.a={name:"Home",data:function(){return{message:"Welcome to my first vue app"}},components:{DishMenu:n.a,Login:a.a}}},pYh0:function(e,t,r){"use strict";var n=r("g2+m");t.a={name:"app",components:{NavBar:n.a}}},qScR:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal",router:"true"}},[r("el-menu-item",{attrs:{index:"1",router:"/"}},[e._v(" index ")]),e._v(" "),r("el-menu-item",{attrs:{index:"2",route:"/home"}},[e._v(" fakehome ")]),e._v(" "),r("el-menu-item",{attrs:{index:"3",route:"/file"}},[e._v(" 文件 ")]),e._v(" "),r("el-menu-item",{attrs:{index:"4"}},[e._v(" 选项4 ")]),e._v(" "),r("el-menu-item",{attrs:{index:"5",id:"log",route:"/login"}},[e._v(" 登录|注册 ")])],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},wUZA:function(e,t,r){"use strict";function n(e){r("1Bh2")}var a=r("nSLz"),o=r("SQrV"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,"data-v-2cc24f4a",null);t.a=u.exports},wW0W:function(e,t){},xUlW:function(e,t,r){"use strict";t.a={name:"Reg",data:function(){return{form:{email:"",username:"",password:""},rules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}}}},xWEe:function(e,t,r){"use strict";function n(e){r("XsMz")}var a=r("UA8P"),o=r("3G2q"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,"data-v-60ac4e5b",null);t.a=u.exports},xhFM:function(e,t,r){"use strict";t.a={name:"DishMenu",data:function(){return{dishes:[{id:1,name:"pizza",price:50},{id:2,name:"bread",price:10}]}},methods:{highlight:function(e){e.target.style.background="red"}}}},zIkb:function(e,t,r){"use strict";function n(e){r("eKtB")}var a=r("xhFM"),o=r("hUUn"),s=r("Z0/y"),i=n,u=s(a.a,o.a,!1,i,"data-v-1a454f2c",null);t.a=u.exports}},["NHnr"]);
//# sourceMappingURL=app.6ff79e9ae6ee4d846ead.js.map