(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/adsRecommend"],{"0567":function(n,t,e){"use strict";e.r(t);var a=e("d3e8"),i=e("c4fd");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("11c7");var u,c=e("f0c5"),f=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=f.exports},"11c7":function(n,t,e){"use strict";var a=e("a1a5"),i=e.n(a);i.a},a1a5:function(n,t,e){},c4fd:function(n,t,e){"use strict";e.r(t);var a=e("ead6"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},d3e8:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement;n._self._c},o=[]},ead6:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("0da5"),i=getApp(),o={name:"adsRecommend",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(n,t){n&&(this.recommendList=n.imgList.list,this.isShow=n.isShow.val)}}},data:function(){return{recommendList:[],name:this.$options.name,isIframe:i.globalData.isIframe,isShow:!0}},created:function(){},mounted:function(){},methods:{goDetail:function(t){(0,a.goPage)(t).then((function(e){n.navigateTo({url:t.info[0].value})}))}}};t.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/adsRecommend-create-component',
    {
        'pages/index/components/adsRecommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0567"))
        })
    },
    [['pages/index/components/adsRecommend-create-component']]
]);
