(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{"019e":function(t,n,e){"use strict";e.r(n);var u=e("2547"),a=e("0f59");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("e682");var i,r=e("f0c5"),c=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"48f8e84b",null,!1,u["a"],i);n["default"]=c.exports},"0f59":function(t,n,e){"use strict";e.r(n);var u=e("74eb"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},2547:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"74eb":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("0da5"),o={computed:(0,u.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,a.goPage)().then((function(u){(0,a.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=o}).call(this,e("543d")["default"])},"9a60":function(t,n,e){},e682:function(t,n,e){"use strict";var u=e("9a60"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("019e"))
        })
    },
    [['components/goodList/index-create-component']]
]);
