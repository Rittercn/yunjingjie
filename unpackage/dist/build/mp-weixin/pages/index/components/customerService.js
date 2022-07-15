(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/customerService"],{"0b40":function(t,n,e){},"0c05":function(t,n,e){"use strict";var o=e("0b40"),i=e.n(o);i.a},"1bc9":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=getApp(),i={name:"customerService",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.logoConfig=t.imgUrl.url,this.isShow=t.isShow.val,this.routineContact=t.routine_contact_type)}}},data:function(){return{logoConfig:"",topConfig:"200px",name:this.$options.name,isIframe:!1,isShow:!0,routineContact:"0"}},created:function(){this.isIframe=o.globalData.isIframe},methods:{setTouchMove:function(t){var n=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(n.topConfig=t.touches[0].clientY+"px")}}};n.default=i},"38d8":function(t,n,e){"use strict";e.r(n);var o=e("1bc9"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,(function(){return o[t]}))}(c);n["default"]=i.a},"9f6e":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},c=[]},a058:function(t,n,e){"use strict";e.r(n);var o=e("9f6e"),i=e("38d8");for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);e("0c05");var a,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/customerService-create-component',
    {
        'pages/index/components/customerService-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a058"))
        })
    },
    [['pages/index/components/customerService-create-component']]
]);
