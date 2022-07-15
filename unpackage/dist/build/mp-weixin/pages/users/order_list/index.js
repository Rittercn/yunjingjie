(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/order_list/index"],{"47df":function(t,e,i){"use strict";(function(t){i("6352");n(i("66fd"));var e=n(i("8c5e"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"50c0":function(t,e,i){},6520:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("1d40"),o=i("90d1"),a=i("e0e1"),r=i("4d01"),s=i("26cb"),u=d(i("4938"));function d(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("8c61"))}.bind(null,i)).catch(i.oe)},l=function(){i.e("components/payment/index").then(function(){return resolve(i("e5ae9"))}.bind(null,i)).catch(i.oe)},f=function(){i.e("components/Authorize").then(function(){return resolve(i("daa1"))}.bind(null,i)).catch(i.oe)},h=function(){i.e("components/emptyPage").then(function(){return resolve(i("d85e"))}.bind(null,i)).catch(i.oe)},p={components:{payment:l,home:c,emptyPage:h,authorize:f},mixins:[u.default],data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],orderData:{},orderStatus:0,page:1,limit:20,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"使用线上支付宝支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"当前可用余额：",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,s.mapGetters)(["isLogin"]),onShow:function(){this.isLogin?this.onLoadFun():(0,r.toLogin)()},methods:{onLoadFun:function(){this.getOrderData(),this.getOrderList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,n=void 0!=e.value?e.value:null;i&&this[i]&&this[i](n)},getUserInfo:function(){var t=this;(0,o.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},getOrderData:function(){var t=this,e=this;(0,n.orderData)().then((function(i){e.$set(e,"orderData",i.data),e.payMode.map((function(t){"weixin"==t.value&&(t.payStatus=!!i.data.pay_weixin_open),"alipay"==t.value&&(t.payStatus=!!i.data.ali_pay_status),"yue"==t.value&&(t.payStatus=1==i.data.yue_pay_status)})),t.payMode[1].payStatus=!1}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少订单号无法取消订单"});(0,n.orderCancel)(e).then((function(e){return i.$util.Tips({title:e.msg,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.$set(this,"pay_order_id",e),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,t.navigateTo({url:"/pages/order_pay_status/index?order_id="+this.pay_order_id+"&msg=支付成功&type=3&totalPrice="+this.totalPrice}),this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(e){if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});t.showLoading({title:"正在加载"}),(0,a.openOrderSubscribe)().then((function(){t.hideLoading(),t.navigateTo({url:"/pages/users/order_details/index?order_id="+e})})).catch((function(e){t.hideLoading()}))},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var e=this;e.loadend||e.loading||(e.loading=!0,e.loadTitle="加载更多",t.showLoading({title:"加载中"}),(0,n.getOrderList)({type:e.orderStatus,page:e.page,limit:e.limit}).then((function(i){var n=i.data||[],o=n.length<e.limit;e.orderList=e.$util.SplitArray(n,e.orderList),e.$set(e,"orderList",e.orderList),e.loadend=o,e.loading=!1,e.loadTitle=o?"我也是有底线的":"加载更多",e.page=e.page+1,t.hideLoading()})).catch((function(i){e.loading=!1,e.loadTitle="加载更多",t.hideLoading()})))},delOrder:function(e,i){var o=this;t.showModal({title:"删除订单",content:"确定删除该订单",success:function(t){if(t.confirm)(0,n.orderDel)(e).then((function(t){return o.orderList.splice(i,1),o.$set(o,"orderList",o.orderList),o.$set(o.orderData,"unpaid_count",o.orderData.unpaid_count-1),o.getOrderData(),o.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return o.$util.Tips({title:t})}));else if(t.cancel)return o.$util.Tips({title:"已取消"})}})}},onReachBottom:function(){this.getOrderList()}};e.default=p}).call(this,i("543d")["default"])},"8c5e":function(t,e,i){"use strict";i.r(e);var n=i("d05f"),o=i("f4e8");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("9495");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"52db2974",null,!1,n["a"],r);e["default"]=u.exports},9495:function(t,e,i){"use strict";var n=i("50c0"),o=i.n(n);o.a},d05f:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},f4e8:function(t,e,i){"use strict";i.r(e);var n=i("6520"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a}},[["47df","common/runtime","common/vendor"]]]);