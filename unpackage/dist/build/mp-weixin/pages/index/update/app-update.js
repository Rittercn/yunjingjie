(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/update/app-update"],{"17d2":function(t,e,n){"use strict";n.r(e);var i=n("cdc0"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"57fa":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,!t.popup_show||t.downstatus<1?null:(t.downSize/1024/1024).toFixed(2)),i=!t.popup_show||t.downstatus<1?null:(t.fileSize/1024/1024).toFixed(2);t.$mp.data=Object.assign({},{$root:{g0:n,g1:i}})},a=[]},b9b9:function(t,e,n){"use strict";var i=n("dcf5"),o=n.n(i);o.a},cdc0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n("dcdb"),a={name:"appUpdate",props:{tabbar:{type:Boolean,default:!1}},data:function(){return{popup_show:!0,platform:"",version:"1.0.0",need_update:!1,downing:!1,downstatus:0,update_info:{os:"",version:"",info:""},fileSize:0,downSize:0,viewObj:null}},created:function(){i=this},computed:{lengthWidth:function(){var t=this.downSize/this.fileSize*100;return t=t?t.toFixed(2):0,{width:t+"%"}},getHeight:function(){var t=0;return this.tabbar&&(t=50),{bottom:t+"px",height:"auto"}}},methods:{update:function(){},getUpdateInfo:function(){(0,o.getUpdateInfo)("ios"===this.platform?2:1).then((function(t){var e=t.data;i.update_info=e,i.update_info.platform&&i.checkUpdate()})).catch((function(t){i.popup_show=!1}))},checkUpdate:function(){i.need_update=i.compareVersion(i.version,i.update_info.version),i.need_update&&(i.popup_show=!0,i.tabbar&&(i.viewObj=new plus.nativeObj.View("viewObj",{bottom:"0px",left:"0px",height:"50px",width:"100%",backgroundColor:"rgba(0,0,0,.6)"}),i.viewObj.show()))},closeUpdate:function(){i.update_info.is_force?"android"==this.platform?plus.runtime.quit():plus.ios.import("UIApplication").sharedApplication().performSelector("exit"):(i.popup_show=!1,i.viewObj&&i.viewObj.hide())},nowUpdate:function(){if(i.downing)return!1;i.downing=!0,/\.apk$/.test(i.update_info.url)||/\.wgt$/.test(i.update_info.url)?i.download_wgt():plus.runtime.openURL(i.update_info.url,(function(){plus.nativeUI.toast("打开错误")}))},download_wgt:function(){plus.nativeUI.showWaiting("下载更新文件...");var t={method:"get"},e=plus.downloader.createDownload(i.update_info.url,t,(function(t,e){}));e.addEventListener("statechanged",(function(t,e){if(null===e);else if(200==e)switch(i.downstatus=t.state,t.state){case 3:i.downSize=t.downloadedSize,t.totalSize&&(i.fileSize=t.totalSize);break;case 4:i.installWgt(t.filename);break}else plus.nativeUI.closeWaiting(),plus.nativeUI.toast("下载出错"),i.downing=!1,i.downstatus=0})),e.start()},installWgt:function(t){plus.nativeUI.showWaiting("安装更新文件..."),plus.runtime.install(t,{},(function(){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("应用资源下载完成！",(function(){plus.runtime.restart()}))}),(function(t){plus.nativeUI.closeWaiting(),plus.nativeUI.alert("安装更新文件失败["+t.code+"]："+t.message)}))},compareVersion:function(t,e){if(!t||!e||""==t||""==e)return!1;for(var n=t.split(".",4),i=e.split(".",4),o=0;o<n.length&&o<i.length;o++){var a=n[o],u=parseInt(a),r=i[o],s=parseInt(r);if(s>u||r.length>a.length)return!0;if(s<u)return!1}return i.length>n.length&&0==e.indexOf(t)}}};e.default=a},da31:function(t,e,n){"use strict";n.r(e);var i=n("57fa"),o=n("17d2");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("b9b9");var u,r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"5b3f5568",null,!1,i["a"],u);e["default"]=s.exports},dcf5:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/update/app-update-create-component',
    {
        'pages/index/update/app-update-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("da31"))
        })
    },
    [['pages/index/update/app-update-create-component']]
]);
