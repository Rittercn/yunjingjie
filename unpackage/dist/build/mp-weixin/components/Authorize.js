(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Authorize"],{"0196":function(t,e,n){"use strict";n.r(e);var a=n("16fb"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"16fb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("bf3b")),o=n("dcdb"),i=n("cfbb"),u=n("26cb"),s=c(n("e646")),d=c(n("ac64"));function c(t){return t&&t.__esModule?t:{default:t}}var r=getApp(),l={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},data:function(){return{logoUrl:"",authKey:""}},computed:(0,u.mapGetters)(["isLogin","userInfo"]),watch:{isLogin:function(t){!0===t&&this.$emit("onLoadFun",this.userInfo)}},mounted:function(){this.getLogoUrl();var t=this;this.isLogin||a.default.has(i.STATE_R_KEY)?this.setAuthStatus():wx.login({success:function(e){a.default.set(i.STATE_R_KEY,e.code,10800);var n=r.globalData.spid?r.globalData.spid:"";(0,o.silenceAuth)({code:e.code,spread:n,spid:r.globalData.code}).then((function(e){if(void 0!==e.data.key&&e.data.key)t.authKey=e.data.key;else{r.globalData.code=0;var n=e.data.expires_time-a.default.time();d.default.commit("LOGIN",{token:e.data.token,time:n})}})).catch((function(t){}))}})},methods:{setAuthStatus:function(){var t=this;s.default.authorize().then((function(e){!1===e.islogin?t.setUserInfo():t.$emit("onLoadFun",t.userInfo)})).catch((function(e){t.isAuto&&t.$emit("authColse",!0)}))},getUserInfo:function(e){var n=this;s.default.getUserInfo().then((function(a){var o=a.userInfo;o.code=e,o.spread_spid=r.globalData.spid,o.spread_code=r.globalData.code,s.default.authUserInfo(o).then((function(e){t.hideLoading(),n.$emit("authColse",!1),n.$emit("onLoadFun",n.userInfo)})).catch((function(e){t.hideLoading(),t.showToast({title:e.msg,icon:"none",duration:2e3})}))})).catch((function(e){t.hideLoading()}))},getUserPhoneNumber:function(e,n,a){var i=this;(0,o.getUserPhone)({encryptedData:e,iv:n,code:a,spid:r.globalData.spid,spread:r.globalData.code}).then((function(e){var n=e.data.expires_time-i.$Cache.time();i.$store.commit("LOGIN",{token:e.data.token,time:n}),i.$emit("authColse",!1),i.$emit("onLoadFun",e.data.userInfo),t.hideLoading()})).catch((function(e){t.hideLoading()}))},setUserInfo:function(e){var n=this;t.showLoading({title:"正在登录中"}),s.default.getCode().then((function(t){n.getUserPhoneNumber(e.detail.encryptedData,e.detail.iv,t)})).catch((function(e){t.hideLoading()}))},getLogoUrl:function(){var t=this;a.default.has(i.LOGO_URL)?this.logoUrl=a.default.get(i.LOGO_URL):(0,o.getLogo)().then((function(e){t.logoUrl=e.data.logo_url,a.default.set(i.LOGO_URL,t.logoUrl)}))},close:function(){var e=getCurrentPages();e[e.length-1];this.isGoIndex?t.navigateTo({url:"/pages/index/index"}):this.$emit("authColse",!1)}}};e.default=l}).call(this,n("543d")["default"])},"26b9":function(t,e,n){},"3a53":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},cb933:function(t,e,n){"use strict";var a=n("26b9"),o=n.n(a);o.a},daa1:function(t,e,n){"use strict";n.r(e);var a=n("3a53"),o=n("0196");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("cb933");var u,s=n("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"03cc894a",null,!1,a["a"],u);e["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Authorize-create-component',
    {
        'components/Authorize-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("daa1"))
        })
    },
    [['components/Authorize-create-component']]
]);