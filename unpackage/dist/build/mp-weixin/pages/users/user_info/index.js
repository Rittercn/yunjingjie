(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_info/index"],{"1a82":function(t,n,e){"use strict";(function(t){e("6352");i(e("66fd"));var n=i(e("96ab"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"32db":function(t,n,e){"use strict";var i=e("c043"),o=e.n(i);o.a},8976:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("90d1"),o=e("7c5a"),u=e("4d01"),s=e("26cb"),a=(c(e("9737")),c(e("4938")));function c(t){return t&&t.__esModule?t:{default:t}}var r=function(){e.e("components/Authorize").then(function(){return resolve(e("daa1"))}.bind(null,e)).catch(e.oe)},f={components:{authorize:r},mixins:[a.default],data:function(){return{userInfo:{},loginType:"h5",userIndex:0,switchUserInfo:[],isAuto:!1,isShowAuth:!1,canvasWidth:"",canvasHeight:"",canvasStatus:!1}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getUserInfo()},deep:!0}},onLoad:function(){this.isLogin?this.getUserInfo():(0,u.toLogin)()},methods:{onLoadFun:function(){this.getUserInfo()},authColse:function(t){this.isShowAuth=t},Setting:function(){t.openSetting({success:function(t){}})},switchAccounts:function(n){var e=this,i=this.switchUserInfo[n],s=this;return s.userIndex=n,s.switchUserInfo.length<=1||(void 0===i?s.$util.Tips({title:"切换的账号不存在"}):void("h5"===i.user_type?(t.showLoading({title:"正在切换中"}),(0,o.switchH5Login)().then((function(n){t.hideLoading(),s.$store.commit("LOGIN",{token:n.data.token,time:e.$Cache.strTotime(n.data.expires_time)-e.$Cache.time()}),s.getUserInfo()})).catch((function(n){return t.hideLoading(),s.$util.Tips({title:n})}))):(s.$store.commit("LOGOUT"),t.showLoading({title:"正在切换中"}),(0,u.toLogin)())))},outLogin:function(){var n=this;"h5"==n.loginType&&t.showModal({title:"提示",content:"确认退出登录?",success:function(e){e.confirm?(0,i.getLogout)().then((function(e){n.$store.commit("LOGOUT"),t.reLaunch({url:"/pages/index/index"})})).catch((function(t){})):e.cancel}})},getUserInfo:function(){var t=this;(0,i.getUserInfo)().then((function(n){t.$set(t,"userInfo",n.data);for(var e=n.data.switchUserInfo||[],i=0;i<e.length;i++)e[i].uid==t.userInfo.uid&&(t.userIndex=i);t.$set(t,"switchUserInfo",e)}))},uploadpic:function(){var t=this,n=this;this.canvasStatus=!0,n.$util.uploadImageChange("upload/image",(function(e){var i=n.switchUserInfo[n.userIndex];void 0!==i&&(n.userInfo.avatar=e.data.url),n.switchUserInfo[n.userIndex]=i,n.$set(n,"switchUserInfo",n.switchUserInfo),t.canvasStatus=!1}),(function(n){t.canvasStatus=!1}),(function(n){t.canvasWidth=n.w,t.canvasHeight=n.h}))},formSubmit:function(t){var n=this,e=t.detail.value;n.switchUserInfo[n.userIndex];if(!e.nickname)return n.$util.Tips({title:"用户姓名不能为空"});e.avatar=this.userInfo.avatar,(0,i.userEdit)(e).then((function(t){return n.$util.Tips({title:t.msg,icon:"success"},{tab:3,url:1})})).catch((function(t){return n.$util.Tips({title:t||"保存失败，您并没有修改"},{tab:3,url:1})}))}}};n.default=f}).call(this,e("543d")["default"])},"96ab":function(t,n,e){"use strict";e.r(n);var i=e("c4da"),o=e("c0ac");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("32db");var s,a=e("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"bd36aa5c",null,!1,i["a"],s);n["default"]=c.exports},c043:function(t,n,e){},c0ac:function(t,n,e){"use strict";e.r(n);var i=e("8976"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},c4da:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},u=[]}},[["1a82","common/runtime","common/vendor"]]]);