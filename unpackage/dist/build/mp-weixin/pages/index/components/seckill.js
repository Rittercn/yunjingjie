(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/seckill"],{"181f":function(t,e,i){},"31ce":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"592d":function(t,e,i){"use strict";i.r(e);var n=i("31ce"),s=i("eb72");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("a9d2");var o,c=i("f0c5"),l=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=l.exports},"85cb":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("0da5"),s=i("dfa9"),a=getApp(),o=function(){i.e("components/countDown/index").then(function(){return resolve(i("735b"))}.bind(null,i)).catch(i.oe)},c={name:"seckill",components:{countDown:o},props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue),this.$set(this,"type",t.titleInfo.type),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.productslist())}}},data:function(){return{datatime:0,point:"",spikeList:[],name:this.$options.name,isIframe:a.globalData.isIframe,isShow:!0,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0}},created:function(){},mounted:function(){},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,s.getHomeProducts)(e).then((function(e){t.spikeList=e.data.list,t.point=e.data.time,t.datatime=e.data.stop})).catch((function(e){t.$util.Tips({title:e})}))},goDetail:function(e){var i=this;(0,n.goPage)(e).then((function(n){t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(e.id,"&time=").concat(i.datatime,"&status=1")})}))}}};e.default=c}).call(this,i("543d")["default"])},a9d2:function(t,e,i){"use strict";var n=i("181f"),s=i.n(n);s.a},eb72:function(t,e,i){"use strict";i.r(e);var n=i("85cb"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/seckill-create-component',
    {
        'pages/index/components/seckill-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("592d"))
        })
    },
    [['pages/index/components/seckill-create-component']]
]);
