(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_details/index"],{"09b4":function(t,e,i){"use strict";var o=i("ddf4"),n=i.n(o);n.a},"17b9":function(t,e,i){"use strict";i.r(e);var o=i("33c9"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=n.a},"33c9":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("26cb"),n=i("4d01"),s=i("c132"),r=i("dfa9"),a=i("dcdb"),u=i("90d1"),c=l(i("4938"));function l(t){return t&&t.__esModule?t:{default:t}}var d=getApp(),h=function(){i.e("components/Authorize").then(function(){return resolve(i("daa1"))}.bind(null,i)).catch(i.oe)},p=function(){i.e("components/productConSwiper/index").then(function(){return resolve(i("bab6"))}.bind(null,i)).catch(i.oe)},f=function(){i.e("components/productWindow/index").then(function(){return resolve(i("f313"))}.bind(null,i)).catch(i.oe)},m=function(){i.e("components/userEvaluation/index").then(function(){return resolve(i("5206"))}.bind(null,i)).catch(i.oe)},g=function(){i.e("components/countDown/index").then(function(){return resolve(i("735b"))}.bind(null,i)).catch(i.oe)},b=function(){Promise.all([i.e("common/vendor"),i.e("components/kefuIcon/index")]).then(function(){return resolve(i("7425"))}.bind(null,i)).catch(i.oe)},$=function(){Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(i("4e1c"))}.bind(null,i)).catch(i.oe)},v=function(){i.e("components/cus-previewImg/cus-previewImg").then(function(){return resolve(i("cd2b"))}.bind(null,i)).catch(i.oe)},S={components:{productConSwiper:p,kefuIcon:b,authorize:h,"product-window":f,userEvaluation:m,countDown:g,cusPreviewImg:v,parser:$},computed:(0,o.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),mixins:[c.default],data:function(){return{dataShow:0,navH:"",id:0,userInfo:{},itemNew:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,attribute:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],isOpen:!1,attr:"请选择",attrValue:"",AllIndex:2,maxAllIndex:0,replyChance:"",limitNum:1,timeer:null,iSplus:!1,navList:["商品","评价","详情"],opacity:0,scrollY:0,topArr:[],toView:"",height:0,heightArr:[],lock:!1,scrollTop:0,storeInfo:{},pink_ok_sum:0,pink:[],replyCount:0,reply:[],imgUrls:[],sharePacket:"",tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},posters:!1,weixinStatus:!1,posterImageStatus:!1,canvasStatus:!1,storeImage:"",PromotionCode:"",posterImage:"",posterbackgd:"/static/images/posterbackgd.png",navActive:0,actionSheetHidden:!1,attrTxt:"",cart_num:"",isAuto:!1,isShowAuth:!1,AllIndexDefault:0,homeTop:20,returnShow:!0,H5ShareBox:!1,routineContact:0,skuArr:[],selectSku:{}}},watch:{isLogin:{handler:function(t,e){t&&(this.downloadFilePromotionCode(),this.combinationDetail())},deep:!0}},onLoad:function(e){var i=this,o=this,s=getCurrentPages();if(o.returnShow=1!==s.length,this.$nextTick((function(){var e=t.getMenuButtonBoundingClientRect(),o=t.createSelectorQuery().in(i);o.select("#home").boundingClientRect((function(t){i.homeTop=2*e.top+e.height-t.height})).exec()})),this.navH=d.globalData.navHeight,t.getSystemInfo({success:function(t){o.height=t.windowHeight}}),e.scene){var r=this.$util.getUrlParams(decodeURIComponent(e.scene));r.id&&(e.id=r.id),r.pid&&(d.globalData.spid=r.pid)}if(!e.id&&!e.scene)return this.$util.Tips({title:"缺少参数无法查看商品"},{tab:3,url:1});if(e.spid&&(d.globalData.spid=e.spid),e.hasOwnProperty("id"))this.id=e.id,this.isLogin?this.combinationDetail():(this.$Cache.set("login_back_url","/pages/activity/goods_combination_details/index?id=".concat(e.id)),(0,n.toLogin)());else try{var a=t.getStorageSync("comGoodsId");""!=a&&(this.id=a,this.combinationDetail())}catch(u){t.showToast({title:"参数错误",icon:"none",duration:1e3,mask:!0})}},methods:{showAll:function(){this.AllIndexDefault=this.AllIndex,this.AllIndex=this.pink.length},hideAll:function(){this.AllIndex=this.AllIndexDefault},authColse:function(t){this.isShowAuth=t},iptCartNum:function(t){this.$set(this.attribute.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},returns:function(){t.navigateBack()},combinationDetail:function(){var e=this,i=e.id;(0,s.getCombinationDetail)(i).then((function(i){for(var o in e.dataShow=1,t.setNavigationBarTitle({title:i.data.storeInfo.title.substring(0,16)}),e.imgUrls=i.data.storeInfo.images,e.storeInfo=i.data.storeInfo,e.storeInfo.description=e.storeInfo.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),e.attribute.productSelect.num=i.data.storeInfo.num,e.pink=i.data.pink,e.pindAll=i.data.pindAll,e.reply=i.data.reply?[i.data.reply]:[],e.replyCount=i.data.replyCount,e.itemNew=i.data.pink_ok_list,e.pink_ok_sum=i.data.pink_ok_sum,e.replyChance=i.data.replyChance,e.attribute.productAttr=i.data.productAttr,e.productValue=i.data.productValue,e.PromotionCode=i.data.storeInfo.code_base,e.routineContact=Number(i.data.routine_contact_type),i.data.productValue){var n=i.data.productValue[o];e.skuArr.push(n)}e.$set(e,"selectSku",e.skuArr[0]);var s=["商品","详情"];i.data.replyCount&&s.splice(1,0,"评价"),e.$set(e,"navList",s),e.downloadFilestoreImage(),e.downloadFilePromotionCode(),e.DefaultSelect(),setTimeout((function(){e.infoScroll()}),500)})).catch((function(t){e.$util.Tips({title:t},{tab:3})}))},DefaultSelect:function(){var t=this,e=t.attribute.productAttr,i=[];for(var o in this.productValue)if(this.productValue[o].quota>0){i=this.attribute.productAttr.length?o.split(","):[];break}for(var n=0;n<e.length;n++)this.$set(e[n],"index",i[n]);var s=t.productValue[i.join(",")];s&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",s.image),t.$set(t.attribute.productSelect,"price",s.price),t.$set(t.attribute.productSelect,"stock",s.stock),t.$set(t.attribute.productSelect,"unique",s.unique),t.$set(t.attribute.productSelect,"quota",s.quota),t.$set(t.attribute.productSelect,"quota_show",s.quota_show),t.$set(t.attribute.productSelect,"product_stock",s.product_stock),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",i.join(",")),t.attrValue=i.join(",")):!s&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"quota_show",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"stock",0),t.$set(t.attribute.productSelect,"unique",""),t.$set(t.attribute.productSelect,"cart_num",0),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择")):s||e.length||(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"stock",t.storeInfo.stock),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"unique",t.storeInfo.unique||""),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择"))},infoScroll:function(){for(var e=this,i=[],o=[],n=0;n<e.navList.length;n++){var s=t.createSelectorQuery().in(this),r="#past"+n;this.replyCount||1!=n||(r="#past2"),s.select(r).boundingClientRect(),s.exec((function(t){var n=t[0].top,s=t[0].height;i.push(n),o.push(s),e.topArr=i,e.heightArr=o}))}},onLoadFun:function(t){this.userInfo=t,d.globalData.openPages="/pages/activity/goods_combination_details/index?id="+this.id+"&spid="+t.uid,this.downloadFilePromotionCode(),this.combinationDetail()},selecAttr:function(){this.attribute.cartAttr=!0},onMyEvent:function(){this.$set(this.attribute,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attribute.productSelect.cart_num=this.cart_num),void 0!==e||this.attribute.productAttr.length||(e=this.attribute.productSelect),void 0!==e){e.stock,e.quota_show;var i=e.quota||0,o=e.product_stock||0,n=this.attribute.productSelect,s=this.storeInfo.num||0;if(void 0==e.cart_num&&(e.cart_num=1),t){n.cart_num++;var r=[];r.push(s),r.push(i),r.push(o);var a=Math.min.apply(null,r);n.cart_num>=a&&(this.$set(this.attribute.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attribute.productSelect,"cart_num",n.cart_num)}else n.cart_num--,n.cart_num<1&&(this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attribute.productSelect,"cart_num",n.cart_num)}},attrVal:function(t){this.attribute.productAttr[t.indexw].index=this.attribute.productAttr[t.indexw].attr_values[t.indexn]},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];this.$set(this,"selectSku",e),e?(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this.attribute.productSelect,"quota",e.quota),this.$set(this.attribute.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.attrTxt="已选择"):(this.$set(this.attribute.productSelect,"image",this.storeInfo.image),this.$set(this.attribute.productSelect,"price",this.storeInfo.price),this.$set(this.attribute.productSelect,"stock",0),this.$set(this.attribute.productSelect,"unique",""),this.$set(this.attribute.productSelect,"cart_num",0),this.$set(this.attribute.productSelect,"quota",0),this.$set(this.attribute.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.attrTxt="已选择")},goProduct:function(){t.navigateTo({url:"/pages/goods_details/index?id="+this.storeInfo.product_id})},goCat:function(){var e=this,i=this.productValue[this.attrValue];if(this.isOpen?this.attribute.cartAttr=!0:this.attribute.cartAttr=!this.attribute.cartAttr,!0===this.attribute.cartAttr&&0==this.isOpen)return this.isOpen=!0;if(this.attribute.productAttr.length&&void 0===i&&1==this.isOpen)return e.$util.Tips({title:"请选择属性"});var o={productId:e.storeInfo.product_id,secKillId:0,bargainId:0,combinationId:e.id,cartNum:e.cart_num,uniqueId:void 0!==i?i.unique:"",is_new:1};(0,r.postCartAdd)(o).then((function(i){e.isOpen=!1,t.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+i.data.cartId})})).catch((function(e){t.showToast({title:e,icon:"none"})}))},setCollect:function(){var t=this;this.storeInfo.userCollect?(0,r.collectDel)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect})):(0,r.collectAdd)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect}))},listenerActionSheet:function(){0==this.isLogin?(0,n.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},downloadFilestoreImage:function(){var e=this;t.downloadFile({url:e.setDomain(e.storeInfo.image),success:function(t){e.storeImage=t.tempFilePath},fail:function(){return e.$util.Tips({title:""})}})},downloadFileAppCode:function(){var e=this;t.downloadFile({url:e.setDomain(e.storeInfo.code_base),success:function(t){e.PromotionCode=t.tempFilePath},fail:function(){return e.$util.Tips({title:""})}})},downloadFilePromotionCode:function(e){var i=this;(0,s.scombinationCode)(i.id).then((function(o){t.downloadFile({url:i.setDomain(o.data.code),success:function(t){i.$set(i,"isDown",!1),"function"==typeof e?e&&e(t.tempFilePath):i.$set(i,"PromotionCode",t.tempFilePath)},fail:function(){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}})})).catch((function(t){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}))},getImageBase64:function(){var t=this;(0,a.imageBase64)(t.storeImage,t.PromotionCode).then((function(e){t.storeImage=e.data.image,t.PromotionCode=e.data.code})).catch((function(){}))},goFriend:function(){this.posters=!1},goPoster:function(){var e=this;e.posters=!1,e.$set(e,"canvasStatus",!0);var i=[e.posterbackgd,e.storeImage,e.PromotionCode];if(e.isDown)return e.$util.Tips({title:"正在下载海报,请稍后再试！"});t.getImageInfo({src:e.PromotionCode,fail:function(t){return e.$util.Tips({title:"小程序二维码需要发布正式版后才能获取到"})},success:function(){""==i[2]?e.downloadFilePromotionCode((function(t){if(i[2]=t,""==i[2])return e.$util.Tips({title:"海报二维码生成失败！"});e.$util.PosterCanvas(i,e.storeInfo.title,e.storeInfo.price,e.storeInfo.product_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))})):e.$util.PosterCanvas(i,e.storeInfo.title,e.storeInfo.price,e.storeInfo.product_price,(function(t){e.$set(e,"posterImage",t),e.$set(e,"posterImageStatus",!0),e.$set(e,"canvasStatus",!1),e.$set(e,"actionSheetHidden",!e.actionSheetHidden)}))}})},savePosterPath:function(){var e=this;t.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},setShareInfoStatus:function(){var t=this,e=this.storeInfo,i=location.href;this.$wechat.isWeixin()&&(0,u.getUserInfo)().then((function(o){i=-1===i.indexOf("?")?i+"?spread="+o.data.uid:i+"&spread="+o.data.uid;var n={desc:e.store_info,title:e.store_name,link:i,imgUrl:e.image};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)}))},scroll:function(t){var e=this,i=t.detail.scrollTop,o=i/200;if(o=o>1?1:o,e.opacity=o,e.scrollY=i,e.lock)e.lock=!1;else for(var n=0;n<e.topArr.length;n++)if(i<e.topArr[n]-d.globalData.navHeight/2+e.heightArr[n]){e.navActive=n;break}},tap:function(t,e){var i=t.id,o=(e=e,this);this.replyCount||"past1"!=i||(i="past2"),this.toView=i,this.navActive=e,this.lock=!0,this.scrollTop=e>0?o.topArr[e]-d.globalData.navHeight/2:o.topArr[e]},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this.skuArr[t];this.$set(this,"selectSku",e);var i=e.suk.split(",");this.$set(this.attribute.productAttr[0],"index",i[0]),2==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1])):3==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2])):4==i.length&&(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2]),this.$set(this.attribute.productAttr[3],"index",i[3])),e&&(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"vipPrice",e.vipPrice),this.$set(this,"attrTxt","已选择"),this.$set(this,"attrValue",e.suk))}},onShareAppMessage:function(){return{title:this.storeInfo.title,path:d.globalData.openPages,imageUrl:this.storeInfo.image}}};e.default=S}).call(this,i("543d")["default"])},"864e":function(t,e,i){"use strict";i.r(e);var o=i("f332"),n=i("17b9");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("09b4");var r,a=i("f0c5"),u=Object(a["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=u.exports},c5cc:function(t,e,i){"use strict";(function(t){i("6352");o(i("66fd"));var e=o(i("864e"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},ddf4:function(t,e,i){},f332:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var o={cusPreviewImg:function(){return i.e("components/cus-previewImg/cus-previewImg").then(i.bind(null,"cd2b"))}},n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.attribute.productAttr.length&&t.skuArr.length>1?t.skuArr.slice(0,4):null);t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},s=[]}},[["c5cc","common/runtime","common/vendor"]]]);