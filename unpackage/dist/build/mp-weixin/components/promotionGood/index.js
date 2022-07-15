(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/promotionGood/index"],{1035:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("0da5"),o=i(e("4938"));function i(t){return t&&t.__esModule?t:{default:t}}var r={computed:(0,u.mapGetters)(["uid"]),mixins:[o.default],props:{benefit:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,a.goPage)().then((function(u){(0,a.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=r}).call(this,e("543d")["default"])},1446:function(t,n,e){},"1ef4":function(t,n,e){"use strict";e.r(n);var u=e("43a7"),a=e("424a");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("cc04");var i,r=e("f0c5"),c=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"2bd95962",null,!1,u["a"],i);n["default"]=c.exports},"424a":function(t,n,e){"use strict";e.r(n);var u=e("1035"),a=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=a.a},"43a7":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},cc04:function(t,n,e){"use strict";var u=e("1446"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/promotionGood/index-create-component',
    {
        'components/promotionGood/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1ef4"))
        })
    },
    [['components/promotionGood/index-create-component']]
]);
