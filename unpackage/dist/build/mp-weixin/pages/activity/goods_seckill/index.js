(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_seckill/index"],{"3e15":function(t,e,i){"use strict";(function(t){i("6352");n(i("66fd"));var e=n(i("8c32"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"5e54":function(t,e,i){"use strict";var n=i("6c20"),a=i.n(n);a.a},"5eea":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("c132"),a=o(i("4938"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("8c61"))}.bind(null,i)).catch(i.oe)},l={components:{home:c},mixins:[a.default],data:function(){return{topImage:"",seckillList:[],timeList:[],active:5,scrollLeft:0,interval:0,status:1,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",page:1,limit:8,loading:!1,loadend:!1,pageloading:!1,intoindex:""}},onLoad:function(){this.getSeckillConfig()},methods:{getSeckillConfig:function(){var t=this;(0,n.getSeckillIndexTime)().then((function(e){t.topImage=e.data.lovely,t.timeList=e.data.seckillTime,t.active=e.data.seckillTimeIndex,t.$nextTick((function(){t.intoindex="sort"+e.data.seckillTimeIndex})),t.timeList.length&&(t.scrollLeft=100*(t.active-1.37),setTimeout((function(){t.loading=!0}),2e3),t.seckillList=[],t.page=1,t.status=t.timeList[t.active].status,t.getSeckillList())}))},getSeckillList:function(){var t=this,e={page:t.page,limit:t.limit};t.loadend||t.pageloading||(this.pageloading=!0,(0,n.getSeckillList)(t.timeList[t.active].id,e).then((function(e){var i=e.data,n=i.length<t.limit;t.page++,t.seckillList=t.seckillList.concat(i),t.page=t.page,t.pageloading=!1,t.loadend=n})).catch((function(e){t.pageloading=!1})))},settimeList:function(t,e){var i=this;this.active=e,i.interval&&(clearInterval(i.interval),i.interval=null),i.interval=0,i.countDownHour="00",i.countDownMinute="00",i.countDownSecond="00",i.status=i.timeList[i.active].status,i.loadend=!1,i.page=1,i.seckillList=[],i.getSeckillList()},goDetails:function(e){t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id="+e.id+"&time="+this.timeList[this.active].stop+"&status="+this.status})}},onReachBottom:function(){this.getSeckillList()}};e.default=l}).call(this,i("543d")["default"])},"6c20":function(t,e,i){},"8c32":function(t,e,i){"use strict";i.r(e);var n=i("e0d1"),a=i("e52d");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5e54");var c,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);e["default"]=s.exports},e0d1:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},e52d:function(t,e,i){"use strict";i.r(e);var n=i("5eea"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}},[["3e15","common/runtime","common/vendor"]]]);