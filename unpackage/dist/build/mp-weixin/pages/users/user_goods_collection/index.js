(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_goods_collection/index"],{1074:function(t,o,e){},"1e84":function(t,o,e){"use strict";var n;e.d(o,"b",(function(){return c})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return n}));var c=function(){var t=this,o=t.$createElement;t._self._c},i=[]},6504:function(t,o,e){"use strict";e.r(o);var n=e("1e84"),c=e("fed8");for(var i in c)"default"!==i&&function(t){e.d(o,t,(function(){return c[t]}))}(i);e("b09c");var u,l=e("f0c5"),r=Object(l["a"])(c["default"],n["b"],n["c"],!1,null,"192b4abc",null,!1,n["a"],u);o["default"]=r.exports},"961b":function(t,o,e){"use strict";(function(t){e("6352");n(e("66fd"));var o=n(e("6504"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e("543d")["createPage"])},b09c:function(t,o,e){"use strict";var n=e("1074"),c=e.n(n);c.a},e75e:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=e("dfa9"),c=e("26cb"),i=e("4d01");function u(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var l=function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("db15"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/Authorize").then(function(){return resolve(e("daa1"))}.bind(null,e)).catch(e.oe)},s=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("8c61"))}.bind(null,e)).catch(e.oe)},a=u({components:{recommend:l,authorize:r,home:s},data:function(){return{hostProduct:[],loadTitle:"加载更多",loading:!1,loadend:!1,collectProductList:[],limit:8,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10}},computed:(0,c.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.loadend=!1,this.page=1,this.collectProductList=[],this.get_user_collect_product(),this.get_host_product()):(0,i.toLogin)()},onShow:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.get_user_collect_product()},onReachBottom:function(){this.get_user_collect_product()},methods:{onLoadFun:function(){this.loadend=!1,this.page=1,this.$set(this,"collectProductList",[]),this.get_user_collect_product(),this.get_host_product()},authColse:function(t){this.isShowAuth=t},get_user_collect_product:function(){var t=this;this.loading||this.loadend||(t.loading=!0,t.loadTitle="",(0,n.getCollectUserList)({page:t.page,limit:t.limit}).then((function(o){var e=o.data,n=e.length<t.limit;t.collectProductList=t.$util.SplitArray(e,t.collectProductList),t.$set(t,"collectProductList",t.collectProductList),t.loadend=n,t.loadTitle=n?"我也是有底线的":"加载更多",t.page=t.page+1,t.loading=!1})).catch((function(o){t.loading=!1,t.loadTitle="加载更多"})))},delCollection:function(t,o){var e=this;(0,n.collectDel)(t).then((function(t){return e.$util.Tips({title:"取消收藏成功",icon:"success"},(function(){e.collectProductList.splice(o,1),e.$set(e,"collectProductList",e.collectProductList)}))}))},get_host_product:function(){var t=this;t.hotScroll||(0,n.getProductHot)(t.hotPage,t.hotLimit).then((function(o){t.hotPage++,t.hotScroll=o.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(o.data)}))}}},"onReachBottom",(function(){this.get_host_product()}));o.default=a},fed8:function(t,o,e){"use strict";e.r(o);var n=e("e75e"),c=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,(function(){return n[t]}))}(i);o["default"]=c.a}},[["961b","common/runtime","common/vendor"]]]);