(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/mBanner"],{"3d40":function(t,n,e){},9016:function(t,n,e){"use strict";e.r(n);var i=e("b542"),a=e("c472");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("a4ac");var o,r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=c.exports},a4ac:function(t,n,e){"use strict";var i=e("3d40"),a=e.n(i);a.a},b542:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},s=[]},c472:function(t,n,e){"use strict";e.r(n);var i=e("c9d2"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},c9d2:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("0da5"),a=getApp(),s={name:"swiperBg",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},data:function(){return{indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,bastBanner:[],name:this.$options.name,isIframe:!1,isShow:!0,imageH:375}},watch:{dataConfig:{immediate:!0,handler:function(n,e){var i=this;n&&(this.bastBanner=n.imgList.list,this.isShow=n.isShow.val,this.imgUrls=n.imgList?n.imgList.list:[],this.isShow=!n.isShow||n.isShow.val,t.getImageInfo({src:this.imgUrls.length?this.imgUrls[0].img:"",success:function(t){t&&t.height>0?i.$set(i,"imageH",t.height/t.width*710):i.$set(i,"imageH",375)},fail:function(t){i.$set(i,"imageH",375)}}))}}},created:function(){this.isIframe=a.globalData.isIframe},mounted:function(){},methods:{setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},goDetail:function(n){(0,i.goPage)().then((function(e){var i=n.info[1].value;-1!=i.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(i),t.navigateTo({url:i}))}))}}};n.default=s}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/mBanner-create-component',
    {
        'pages/index/components/mBanner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9016"))
        })
    },
    [['pages/index/components/mBanner-create-component']]
]);