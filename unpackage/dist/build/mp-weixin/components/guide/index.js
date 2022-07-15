(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/guide/index"],{4019:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{autoplay:!1,duration:500,jumpover:"跳过",experience:"立即体验",time:5,timecount:void 0}},props:{advList:{type:Array,default:function(){}}},mounted:function(){this.timer()},methods:{timer:function(){var t=this,n=5;this.timecount=setInterval((function(){n--,t.time=n,n<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),t.switchTab({url:"/pages/index/index"})}}};n.default=e}).call(this,e("543d")["default"])},a474:function(t,n,e){},ab9e:function(t,n,e){"use strict";e.r(n);var u=e("eecf"),a=e("bcf4");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("e2e8");var c,r=e("f0c5"),o=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=o.exports},bcf4:function(t,n,e){"use strict";e.r(n);var u=e("4019"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=a.a},e2e8:function(t,n,e){"use strict";var u=e("a474"),a=e.n(u);a.a},eecf:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/guide/index-create-component',
    {
        'components/guide/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ab9e"))
        })
    },
    [['components/guide/index-create-component']]
]);
