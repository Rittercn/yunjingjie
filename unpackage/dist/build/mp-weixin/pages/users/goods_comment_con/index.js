(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_comment_con/index"],{15368:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"200c":function(t,n,e){"use strict";e.r(n);var i=e("724d"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},3033:function(t,n,e){},"5e67":function(t,n,e){"use strict";(function(t){e("6352");i(e("66fd"));var n=i(e("d84d"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"724d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("1d40"),u=e("4d01"),o=e("26cb"),c=r(e("4938"));function r(t){return t&&t.__esModule?t:{default:t}}var s=function(){e.e("components/Authorize").then(function(){return resolve(e("daa1"))}.bind(null,e)).catch(e.oe)},a={components:{authorize:s},mixins:[c.default],data:function(){return{pics:[],scoreList:[{name:"商品质量",stars:["","","","",""],index:-1},{name:"服务态度",stars:["","","","",""],index:-1}],orderId:"",unique:"",productInfo:{},cart_num:0,isAuto:!1,isShowAuth:!1,canvasWidth:"",canvasHeight:"",canvasStatus:!1}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getOrderProduct()},deep:!0}},onLoad:function(t){if(!t.unique||!t.uni)return this.$util.Tips({title:"缺少参数"},{tab:3,url:1});this.unique=t.unique,this.orderId=t.uni,this.isLogin?this.getOrderProduct():(0,u.toLogin)()},methods:{onLoadFun:function(){this.getOrderProduct()},authColse:function(t){this.isShowAuth=t},getOrderProduct:function(){var t=this;(0,i.orderProduct)(t.unique).then((function(n){t.$set(t,"productInfo",n.data.productInfo),t.cart_num=n.data.cart_num}))},stars:function(t,n){this.scoreList[n].index=t},DelPic:function(t){var n=this;this.pics[t];n.pics.splice(t,1),n.$set(n,"pics",n.pics)},uploadpic:function(){var t=this,n=this;this.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(t){n.pics.push(t.data.url)}),(function(n){t.canvasStatus=!1}),(function(n){t.canvasWidth=n.w,t.canvasHeight=n.h}))},formSubmit:function(n){n.detail.formId;var e=n.detail.value,u=this,o=u.scoreList[0].index+1===0?"":u.scoreList[0].index+1,c=u.scoreList[1].index+1===0?"":u.scoreList[1].index+1;if(!e.comment)return u.$util.Tips({title:"请填写你对宝贝的心得！"});e.product_score=o,e.service_score=c,e.pics=u.pics,e.unique=u.unique,t.showLoading({title:"正在发布评论……"}),(0,i.orderComment)(e).then((function(n){if(t.hideLoading(),n.data.to_lottery){var e="/pages/users/goods_comment_con/lottery_comment?type=4&order_id="+u.orderId;u.$util.Tips({title:"感谢您的评价!",icon:"success"},e)}else u.$util.Tips({title:"感谢您的评价",icon:"success"}),setTimeout((function(n){t.navigateBack()}),1500)})).catch((function(n){return t.hideLoading(),u.$util.Tips({title:n})}))}}};n.default=a}).call(this,e("543d")["default"])},"79cf":function(t,n,e){"use strict";var i=e("3033"),u=e.n(i);u.a},d84d:function(t,n,e){"use strict";e.r(n);var i=e("15368"),u=e("200c");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("79cf");var c,r=e("f0c5"),s=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,"cba018e6",null,!1,i["a"],c);n["default"]=s.exports}},[["5e67","common/runtime","common/vendor"]]]);