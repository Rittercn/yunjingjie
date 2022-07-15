(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/lottery/components/noticeBar"],{"6c69":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"noticeBar",data:function(){return{animateUp:!1,listData:JSON.parse(JSON.stringify(this.showMsg)),timer:null}},props:{showMsg:{type:Array}},mounted:function(){this.timer=setInterval(this.scrollAnimate,2500)},methods:{scrollAnimate:function(){var t=this;this.animateUp=!0,setTimeout((function(){t.listData.push(t.listData[0]),t.listData.shift(),t.animateUp=!1}),500)}},destroyed:function(){clearInterval(this.timer)}};n.default=a},"7d88":function(t,n,e){},"8b4c":function(t,n,e){"use strict";e.r(n);var a=e("6c69"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"9e90":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},r=[]},daf8:function(t,n,e){"use strict";var a=e("7d88"),i=e.n(a);i.a},db45:function(t,n,e){"use strict";e.r(n);var a=e("9e90"),i=e("8b4c");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("daf8");var u,c=e("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"66e4c842",null,!1,a["a"],u);n["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/activity/lottery/components/noticeBar-create-component',
    {
        'pages/activity/lottery/components/noticeBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("db45"))
        })
    },
    [['pages/activity/lottery/components/noticeBar-create-component']]
]);
