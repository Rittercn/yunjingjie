(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/activity"],{"0c4e":function(t,n,a){"use strict";var e=a("e35c"),i=a.n(e);i.a},"6d0a":function(t,n,a){"use strict";a.r(n);var e=a("d3d1"),i=a("f189");for(var c in i)"default"!==c&&function(t){a.d(n,t,(function(){return i[t]}))}(c);a("0c4e");var o,r=a("f0c5"),u=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);n["default"]=u.exports},a0f5:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a("0da5"),i=getApp(),c={name:"activity",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){if(t){var a=JSON.parse(JSON.stringify(t.imgList.list));this.activityOne=t.imgList.list[0],a.splice(0,1),this.activity=a,this.isShow=t.isShow.val}}}},data:function(){return{activity:[],activityOne:{},name:this.$options.name,isShow:!0,isIframe:i.globalData.isIframe}},created:function(){},methods:{gopage:function(n){(0,e.goPage)().then((function(a){-1!=n.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n),t.navigateTo({url:n}))}))}}};n.default=c}).call(this,a("543d")["default"])},d3d1:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement;t._self._c},c=[]},e35c:function(t,n,a){},f189:function(t,n,a){"use strict";a.r(n);var e=a("a0f5"),i=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/activity-create-component',
    {
        'pages/index/components/activity-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6d0a"))
        })
    },
    [['pages/index/components/activity-create-component']]
]);