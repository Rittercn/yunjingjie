(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"40e6":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"47c6":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("0da5"),r=c(e("4938"));function c(t){return t&&t.__esModule?t:{default:t}}var o={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(n){(0,a.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=o}).call(this,e("543d")["default"])},"6ae5":function(t,n,e){},b6c9:function(t,n,e){"use strict";e.r(n);var u=e("47c6"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},b6ea:function(t,n,e){"use strict";var u=e("6ae5"),a=e.n(u);a.a},db15:function(t,n,e){"use strict";e.r(n);var u=e("40e6"),a=e("b6c9");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("b6ea");var c,o=e("f0c5"),i=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"628ebb5a",null,!1,u["a"],c);n["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("db15"))
        })
    },
    [['components/recommend/index-create-component']]
]);
