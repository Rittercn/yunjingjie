(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customer_list/index"],{"4cd5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("90d1"),r=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("8c61"))}.bind(null,n)).catch(n.oe)},u={name:"CustomerList",components:{home:r},data:function(){return{list:[],productId:0,orderId:""}},methods:{getList:function(){var t=this;(0,o.serviceList)().then((function(e){t.list=e.data}))},goPage:function(e){t.navigateTo({url:"/pages/customer_list/chat?uid="+e.uid+"&productId="+this.productId+"&orderId="+this.orderId})}},onLoad:function(t){this.getList(),t.productId&&(this.productId=t.productId),t.orderId&&(this.orderId=t.orderId)}};e.default=u}).call(this,n("543d")["default"])},7598:function(t,e,n){"use strict";(function(t){n("6352");o(n("66fd"));var e=o(n("ae79"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"825a":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]},a76fa:function(t,e,n){"use strict";var o=n("f498"),r=n.n(o);r.a},ae79:function(t,e,n){"use strict";n.r(e);var o=n("825a"),r=n("d61e");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("a76fa");var c,d=n("f0c5"),i=Object(d["a"])(r["default"],o["b"],o["c"],!1,null,"19bbe5d7",null,!1,o["a"],c);e["default"]=i.exports},d61e:function(t,e,n){"use strict";n.r(e);var o=n("4cd5"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},f498:function(t,e,n){}},[["7598","common/runtime","common/vendor"]]]);