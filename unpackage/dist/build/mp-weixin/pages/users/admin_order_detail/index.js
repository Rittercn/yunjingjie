(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/admin_order_detail/index"],{"1d5a":function(t,e,n){"use strict";var a=n("d3e3"),r=n.n(a);r.a},6014:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("18f5"),r={name:"AdminOrder",data:function(){return{order:!1,change:!1,order_id:"",orderInfo:{_status:{}},status:"",title:"",payType:"",types:"",clickNum:1,goname:""}},watch:{"$route.params.oid":function(t){var e=this;void 0!=t&&(e.order_id=t,e.getIndex())}},onLoad:function(t){this.order_id=t.id,this.goname=t.goname,this.getIndex()},methods:{getIndex:function(){var t=this;(0,a.getAdminOrderDetail)(t.order_id).then((function(e){t.orderInfo=e.data,t.types=e.data._status._type,t.title=e.data._status._title,t.payType=e.data._status._payType}),(function(e){t.$util.Tips({title:e},{tab:3,url:1})}))}}};e.default=r},"610d":function(t,e,n){"use strict";n.r(e);var a=n("6014"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},d3e3:function(t,e,n){},d7bc:function(t,e,n){"use strict";(function(t){n("6352");a(n("66fd"));var e=a(n("eeca"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},eeca:function(t,e,n){"use strict";n.r(e);var a=n("fa36"),r=n("610d");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("1d5a");var i,d=n("f0c5"),o=Object(d["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=o.exports},fa36:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["d7bc","common/runtime","common/vendor"]]]);