(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/productConSwiper/index"],{1659:function(t,n,e){},2495:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"53b3":function(t,n,e){"use strict";var i=e("1659"),o=e.n(i);o.a},bab6:function(t,n,e){"use strict";e.r(n);var i=e("2495"),o=e("c141");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("53b3");var u,c=e("f0c5"),a=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"29631916",null,!1,i["a"],u);n["default"]=a.exports},c141:function(t,n,e){"use strict";e.r(n);var i=e("cc82"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},cc82:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{imgUrls:{type:Array,default:function(){return[]}},videoline:{type:String,value:""}},data:function(){return{indicatorDots:!0,circular:!0,autoplay:!0,interval:3e3,duration:500,currents:"1",controls:!0,isPlay:!0,videoContext:""}},mounted:function(){this.videoline&&this.imgUrls.shift(),this.videoContext=t.createVideoContext("myVideo",this)},methods:{videoPause:function(t){},bindPause:function(){this.videoContext.play(),this.$set(this,"controls",!1),this.autoplay=!1},change:function(t){this.$set(this,"currents",t.detail.current+1)}}};n.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/productConSwiper/index-create-component',
    {
        'components/productConSwiper/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bab6"))
        })
    },
    [['components/productConSwiper/index-create-component']]
]);
