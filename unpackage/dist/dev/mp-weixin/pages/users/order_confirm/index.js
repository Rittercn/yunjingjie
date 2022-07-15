(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/users/order_confirm/index"],{

/***/ 437:
/*!*******************************************************************************************************!*\
  !*** D:/crmeb/CRMEB-v4.3.0/template/uni-app/main.js?{"page":"pages%2Fusers%2Forder_confirm%2Findex"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/users/order_confirm/index.vue */ 438));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 438:
/*!**********************************************************************************!*\
  !*** D:/crmeb/CRMEB-v4.3.0/template/uni-app/pages/users/order_confirm/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=064d693c&scoped=true& */ 439);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 441);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_064d693c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=064d693c&lang=scss&scoped=true& */ 443);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 34);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "064d693c",
  null,
  false,
  _index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/users/order_confirm/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 439:
/*!*****************************************************************************************************************************!*\
  !*** D:/crmeb/CRMEB-v4.3.0/template/uni-app/pages/users/order_confirm/index.vue?vue&type=template&id=064d693c&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=064d693c&scoped=true& */ 440);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_064d693c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 440:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/crmeb/CRMEB-v4.3.0/template/uni-app/pages/users/order_confirm/index.vue?vue&type=template&id=064d693c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = (
    parseFloat(_vm.priceGroup.totalPrice) + parseFloat(_vm.priceGroup.vipPrice)
  ).toFixed(2)
  var g1 =
    _vm.priceGroup.storePostage > 0
      ? (
          parseFloat(_vm.priceGroup.storePostage) +
          parseFloat(_vm.priceGroup.storePostageDiscount)
        ).toFixed(2)
      : null
  var g2 = _vm.coupon_price > 0 ? parseFloat(_vm.coupon_price).toFixed(2) : null
  var g3 =
    _vm.integral_price > 0 ? parseFloat(_vm.integral_price).toFixed(2) : null
  var g4 = _vm.totalPrice.toString()
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 441:
/*!***********************************************************************************************************!*\
  !*** D:/crmeb/CRMEB-v4.3.0/template/uni-app/pages/users/order_confirm/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 442);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 442:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/crmeb/CRMEB-v4.3.0/template/uni-app/pages/users/order_confirm/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
































































































































































































var _order = __webpack_require__(/*! @/api/order.js */ 29);





var _user = __webpack_require__(/*! @/api/user.js */ 14);





var _SubscribeMessage = __webpack_require__(/*! @/utils/SubscribeMessage.js */ 156);


var _store = __webpack_require__(/*! @/api/store.js */ 46);


var _cache = __webpack_require__(/*! @/config/cache.js */ 17);








var _login = __webpack_require__(/*! @/libs/login.js */ 9);


var _vuex = __webpack_require__(/*! vuex */ 11);






var _color = _interopRequireDefault(__webpack_require__(/*! @/mixins/color */ 31));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var couponListWindow = function couponListWindow() {Promise.all(/*! require.ensure | components/couponListWindow/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/couponListWindow/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/couponListWindow */ 1159));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var addressWindow = function addressWindow() {__webpack_require__.e(/*! require.ensure | components/addressWindow/index */ "components/addressWindow/index").then((function () {return resolve(__webpack_require__(/*! @/components/addressWindow */ 1166));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var orderGoods = function orderGoods() {__webpack_require__.e(/*! require.ensure | components/orderGoods/index */ "components/orderGoods/index").then((function () {return resolve(__webpack_require__(/*! @/components/orderGoods */ 1117));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var home = function home() {Promise.all(/*! require.ensure | components/home/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/home/index")]).then((function () {return resolve(__webpack_require__(/*! @/components/home */ 1049));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var invoicePicker = function invoicePicker() {__webpack_require__.e(/*! require.ensure | components/invoicePicker/index */ "components/invoicePicker/index").then((function () {return resolve(__webpack_require__(/*! @/components/invoicePicker */ 1124));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var authorize = function authorize() {__webpack_require__.e(/*! require.ensure | components/Authorize */ "components/Authorize").then((function () {return resolve(__webpack_require__(/*! @/components/Authorize */ 1012));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var payment = function payment() {__webpack_require__.e(/*! require.ensure | components/payment/index */ "components/payment/index").then((function () {return resolve(__webpack_require__(/*! @/components/payment */ 1110));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { components: { payment: payment, invoicePicker: invoicePicker, couponListWindow: couponListWindow, addressWindow: addressWindow, orderGoods: orderGoods, home: home, authorize: authorize }, mixins: [_color.default], data: function data() {return { textareaStatus: true, //支付方式
      cartArr: [{ "name": "微信支付", "icon": "icon-weixin2", value: 'weixin', title: '使用微信快捷支付', payStatus: 1 }, { "name": "支付宝支付", "icon": "icon-zhifubao", value: 'alipay', title: '使用线上支付宝支付', payStatus: 1 }, { "name": "余额支付", "icon": "icon-yuezhifu", value: 'yue', title: '可用余额:', payStatus: 1 }, { "name": "线下支付", "icon": "icon-yuezhifu1", value: 'offline', title: '选择线下付款方式', payStatus: 2 }], virtual_type: 0, formContent: '', payType: 'weixin', //支付方式
      openType: 1, //优惠券打开方式 1=使用
      active: 0, //支付方式切换
      coupon: { coupon: false, list: [], statusTile: '立即使用' }, //优惠券组件
      address: { address: false }, //地址组件
      addressInfo: {}, //地址信息
      pinkId: 0, //拼团id
      addressId: 0, //地址id
      couponId: 0, //优惠券id
      cartId: '', //购物车id
      BargainId: 0, combinationId: 0, seckillId: 0, discountId: 0, userInfo: {}, //用户信息
      mark: '', //备注信息
      couponTitle: '请选择', //优惠券
      coupon_price: 0, //优惠券抵扣金额
      useIntegral: false, //是否使用积分
      integral_price: 0, //积分抵扣金额
      integral: 0, ChangePrice: 0, //使用积分抵扣变动后的金额
      formIds: [], //收集formid
      status: 0, is_address: false, toPay: false, //修复进入支付时页面隐藏从新刷新页面
      shippingType: 0, system_store: {}, storePostage: 0, advanceId: 0, contacts: '', contactsTel: '', mydata: {}, storeList: [], store_self_mention: 0, cartInfo: [], priceGroup: {}, animated: false, totalPrice: 0, integralRatio: "0", pagesUrl: "", orderKey: "", // usableCoupon: {},
      offlinePostage: "", isAuto: false, //没有授权的不会自动授权
      isShowAuth: false, //是否隐藏授权
      from: '', news: 1, invTitle: '不开发票', special_invoice: false, invoice_func: false, header_type: '', invShow: false, invList: [], invChecked: '', urlQuery: '', pay_close: false, noCoupon: 0, valid_count: 0, discount_id: 0 };}, computed: (0, _vuex.mapGetters)(['isLogin']), onLoad: function onLoad(options) {this.from = 'routine';if (!options.cartId) return this.$util.Tips({ title: '请选择要购买的商品' }, { tab: 3, url: 1 });this.couponId = options.couponId || 0;this.noCoupon = options.noCoupon || 0;this.pinkId = options.pinkId ? parseInt(options.pinkId) : 0;this.addressId = options.addressId || 0;this.cartId = options.cartId;this.is_address = options.is_address ? true : false;this.news = !options.new || options.new === '0' ? 0 : 1;this.invChecked = options.invoice_id || '';this.header_type = options.header_type || '1';this.couponTitle = options.couponTitle || '请选择';switch (options.invoice_type) {case '1':this.invTitle = '增值税电子普通发票';break;case '2':this.invTitle = '增值税电子专用发票';break;}this.textareaStatus = true;if (this.isLogin && this.toPay == false) {this.getaddressInfo();this.getConfirm();this.$nextTick(function () {this.$refs.addressWindow.getAddressList();});} else {(0, _login.toLogin)();}}, /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 生命周期函数--监听页面显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */onShow: function onShow() {var _this = this;uni.$on("handClick", function (res) {if (res) {_this.system_store = res.address;} // 清除监听
      uni.$off('handClick');});}, methods: { // 不开发票
    invCancel: function invCancel() {this.invChecked = '';this.invTitle = '不开发票';this.invShow = false;}, // 选择发票
    invChange: function invChange(id) {this.invChecked = id;this.invShow = false;var result = this.invList.find(function (item) {return item.id === id;});var name = '';name += result.header_type === 1 ? '个人' : '企业';name += result.type === 1 ? '普通' : '专用';name += '发票';this.invTitle = name;}, // 关闭发票
    invClose: function invClose() {this.invShow = false;this.getInvoiceList();}, getInvoiceList: function getInvoiceList() {var _this2 = this;uni.showLoading({ title: '正在加载…' });(0, _user.invoiceList)().then(function (res) {uni.hideLoading();_this2.invList = res.data.map(function (item) {item.id = item.id.toString();return item;});var result = _this2.invList.find(function (item) {return item.id == _this2.invChecked;});if (result) {var name = '';name += result.header_type === 1 ? '个人' : '企业';name += result.type === 1 ? '普通' : '专用';name += '发票';_this2.invTitle = name;}}).catch(function (err) {uni.showToast({ title: err, icon: 'none' });

      });
    },
    /**
        * 开发票
        */
    goInvoice: function goInvoice() {
      this.getInvoiceList();
      this.invShow = true;
      this.urlQuery = "new=".concat(
      this.news, "&cartId=").concat(this.cartId, "&pinkId=").concat(this.pinkId, "&couponId=").concat(this.couponId, "&addressId=").concat(this.addressId, "&specialInvoice=").concat(this.special_invoice, "&couponTitle=").concat(this.couponTitle);
    },
    /**
        * 授权回调事件
        * 
        */
    onLoadFun: function onLoadFun() {
      this.getaddressInfo();
      this.getConfirm();
      //调用子页面方法授权后执行获取地址列表
      // this.$scope.selectComponent('#address-window').getAddressList();
    },
    /**
        * 事件回调
        *
        */
    onChangeFun: function onChangeFun(e) {
      var opt = e;
      var action = opt.action || null;
      var value = opt.value != undefined ? opt.value : null;
      action && this[action] && this[action](value);
    },
    payClose: function payClose() {
      this.pay_close = false;
    },
    goPay: function goPay() {
      this.pay_close = true;
    },
    payCheck: function payCheck(type) {
      this.payType = type;
      this.SubOrder();
    },
    /**
        * 获取门店列表数据
        */
    getList: function getList() {var _this3 = this;
      var longitude = uni.getStorageSync("user_longitude"); //经度
      var latitude = uni.getStorageSync("user_latitude"); //纬度
      var data = {
        latitude: latitude, //纬度
        longitude: longitude, //经度
        page: 1,
        limit: 10 };

      (0, _store.storeListApi)(data).then(function (res) {
        var list = res.data.list.list || [];
        _this3.$set(_this3, 'storeList', list);
        _this3.$set(_this3, 'system_store', list[0]);
      }).catch(function (err) {});
    },
    // 关闭地址弹窗；
    changeClose: function changeClose() {
      this.$set(this.address, 'address', false);
    },
    /*
        * 跳转门店列表
        */
    showStoreList: function showStoreList() {

      var _this = this;
      if (this.storeList.length > 0) {
        uni.navigateTo({
          url: '/pages/users/goods_details_store/index' });

      }
    },
    changePayType: function changePayType(type) {
      this.payType = type;
      this.computedPrice();
    },
    computedPrice: function computedPrice() {var _this4 = this;
      var shippingType = this.shippingType;
      (0, _order.postOrderComputed)(this.orderKey, {
        addressId: this.addressId,
        useIntegral: this.useIntegral ? 1 : 0,
        couponId: this.couponId,
        shipping_type: parseInt(shippingType) + 1,
        payType: this.payType }).
      then(function (res) {
        var result = res.data.result;
        if (result) {
          _this4.totalPrice = result.pay_price;
          _this4.integral_price = result.deduction_price;
          _this4.coupon_price = result.coupon_price;
          _this4.integral = _this4.useIntegral ? result.SurplusIntegral : _this4.userInfo.integral;
          _this4.$set(_this4.priceGroup, 'storePostage', shippingType == 1 ? 0 : result.pay_postage);
          _this4.$set(_this4.priceGroup, 'storePostageDiscount', result.storePostageDiscount);
        }
      });
    },
    addressType: function addressType(e) {
      var index = e;
      this.shippingType = parseInt(index);
      this.computedPrice();
      if (index == 1) this.getList();
    },
    bindPickerChange: function bindPickerChange(e) {
      var value = e.detail.value;
      this.shippingType = value;
      this.computedPrice();
    },
    ChangCouponsClone: function ChangCouponsClone() {
      this.$set(this.coupon, 'coupon', false);
    },
    changeTextareaStatus: function changeTextareaStatus() {
      for (var i = 0, len = this.coupon.list.length; i < len; i++) {
        this.coupon.list[i].use_title = '';
        this.coupon.list[i].is_use = 0;
      }
      this.textareaStatus = true;
      this.status = 0;
      this.$set(this.coupon, 'list', this.coupon.list);
    },
    /**
        * 处理点击优惠券后的事件
        * 
        */
    ChangCoupons: function ChangCoupons(e) {
      // this.usableCoupon = e
      // this.coupon.coupon = false
      var index = e,
      list = this.coupon.list,
      couponTitle = '请选择',
      couponId = 0;
      for (var i = 0, len = list.length; i < len; i++) {
        if (i != index) {
          list[i].use_title = '';
          list[i].is_use = 0;
        }
      }
      if (list[index].is_use) {
        //不使用优惠券
        list[index].use_title = '';
        list[index].is_use = 0;
      } else {
        //使用优惠券
        list[index].use_title = '不使用';
        list[index].is_use = 1;
        couponTitle = list[index].coupon_title;
        couponId = list[index].id;
      }
      this.couponTitle = couponTitle;
      this.couponId = couponId;
      this.$set(this.coupon, 'coupon', false);
      this.$set(this.coupon, 'list', list);
      this.computedPrice();
    },
    /**
        * 使用积分抵扣
        */
    ChangeIntegral: function ChangeIntegral() {
      this.useIntegral = !this.useIntegral;
      this.computedPrice();
    },
    /**
        * 选择地址后改变事件
        * @param object e
        */
    OnChangeAddress: function OnChangeAddress(e) {
      this.textareaStatus = true;
      this.addressId = e;
      this.address.address = false;
      this.getConfirm();
      this.getaddressInfo();
      this.computedPrice();
    },
    bindHideKeyboard: function bindHideKeyboard(e) {
      this.mark = e.detail.value;
    },
    /**
        * 获取当前订单详细信息
        * 
        */
    getConfirm: function getConfirm() {var _this5 = this;
      var that = this;
      // return;
      uni.showLoading({
        title: '订单加载中',
        mask: true });

      (0, _order.orderConfirm)(that.cartId, that.news, that.addressId).then(function (res) {
        that.$set(that, 'userInfo', res.data.userInfo);
        that.$set(that, 'integral', res.data.userInfo.integral);
        that.$set(that, 'contacts', res.data.userInfo.real_name);
        that.$set(that, 'contactsTel', res.data.userInfo.record_phone === '0' ? '' : res.data.
        userInfo.record_phone);
        that.$set(that, 'cartInfo', res.data.cartInfo);
        that.$set(that, 'integralRatio', res.data.integralRatio);
        that.$set(that, 'offlinePostage', res.data.offlinePostage);
        that.$set(that, 'orderKey', res.data.orderKey);
        that.$set(that, 'valid_count', res.data.valid_count);
        that.$set(that, 'discount_id', res.data.discount_id);
        that.$set(that, 'priceGroup', res.data.priceGroup);
        that.$set(that, 'totalPrice', that.$util.$h.Add(parseFloat(res.data.priceGroup.totalPrice),
        parseFloat(res.data.
        priceGroup.storePostage)));
        that.$set(that, 'seckillId', parseInt(res.data.seckill_id));
        that.$set(that, 'invoice_func', res.data.invoice_func);
        that.$set(that, 'special_invoice', res.data.special_invoice);
        that.$set(that, 'store_self_mention', res.data.store_self_mention);
        that.$set(that, 'virtual_type', res.data.virtual_type || 0);
        //微信支付是否开启
        that.cartArr[0].payStatus = res.data.pay_weixin_open || 0;
        //支付宝是否开启
        that.cartArr[1].payStatus = res.data.ali_pay_status || 0;

        that.cartArr[1].payStatus = 0;

        //余额支付是否开启
        // that.cartArr[2].title = '可用余额:' + res.data.userInfo.now_money;
        that.cartArr[2].number = res.data.userInfo.now_money;
        that.cartArr[2].payStatus = res.data.yue_pay_status == 1 ? res.data.yue_pay_status : 0;
        if (res.data.offline_pay_status == 2 || res.data.deduction) {
          that.cartArr[3].payStatus = 0;
        } else {
          that.cartArr[3].payStatus = 1;
        }

        // that.$set(that, 'cartArr', that.cartArr);
        that.$set(that, 'ChangePrice', that.totalPrice);
        that.getBargainId();
        that.getCouponList();
        if (_this5.addressId) {
          _this5.computedPrice();
        }
        uni.hideLoading();
      }).catch(function (err) {
        uni.hideLoading();
        return _this5.$util.Tips({
          title: err });

      });
    },
    /*
        * 提取砍价和拼团id
        */
    getBargainId: function getBargainId() {
      var that = this;
      var cartINfo = that.cartInfo;
      var BargainId = 0;
      var combinationId = 0;
      var discountId = 0;
      var advanceId = 0;
      cartINfo.forEach(function (value, index, cartINfo) {
        BargainId = cartINfo[index].bargain_id,
        combinationId = cartINfo[index].combination_id,
        discountId = cartINfo[index].discount_id,
        advanceId = cartINfo[index].advance_id;
      });
      that.$set(that, 'BargainId', parseInt(BargainId));
      that.$set(that, 'combinationId', parseInt(combinationId));
      that.$set(that, 'discountId', parseInt(discountId));
      that.$set(that, 'advanceId', parseInt(advanceId));
      if (that.cartArr.length == 3 && (BargainId || combinationId || that.seckillId || discountId)) {
        that.cartArr[2].payStatus = 0;
        that.$set(that, 'cartArr', that.cartArr);
      }
    },
    /**
        * 获取当前金额可用优惠券
        * 
        */
    getCouponList: function getCouponList() {
      var that = this;
      var data = {
        cartId: this.cartId,
        'new': this.news };

      (0, _order.getCouponsOrderPrice)(this.totalPrice, data).then(function (res) {
        that.$set(that.coupon, 'list', res.data);
        that.openType = 1;
      });
    },
    /*
        * 获取默认收货地址或者获取某条地址信息
        */
    getaddressInfo: function getaddressInfo() {
      var that = this;
      if (that.addressId) {
        (0, _user.getAddressDetail)(that.addressId).then(function (res) {
          res.data.is_default = parseInt(res.data.is_default);
          that.addressInfo = res.data || {};
          that.addressId = res.data.id || 0;
          that.address.addressId = res.data.id || 0;
        });
      } else {
        (0, _user.getAddressDefault)().then(function (res) {
          res.data.is_default = parseInt(res.data.is_default);
          that.addressInfo = res.data || {};
          that.addressId = res.data.id || 0;
          that.address.addressId = res.data.id || 0;
        });
      }
    },
    payItem: function payItem(e) {
      var that = this;
      var active = e;
      that.active = active;
      that.animated = true;
      that.payType = that.cartArr[active].value;
      that.computedPrice();
      setTimeout(function () {
        that.car();
      }, 500);
    },
    couponTap: function couponTap() {var _this6 = this;
      this.coupon.coupon = true;
      this.coupon.list.forEach(function (item, index) {
        if (item.id == _this6.couponId) {
          item.is_use = 1;
        } else {
          item.is_use = 0;
        }
      });
      this.$set(this.coupon, 'list', this.coupon.list);
    },
    car: function car() {
      var that = this;
      that.animated = false;
    },
    onAddress: function onAddress() {
      var that = this;
      that.textareaStatus = false;
      that.address.address = true;
      that.pagesUrl = '/pages/users/user_address_list/index?news=' + this.news + '&cartId=' + this.cartId +
      '&pinkId=' +
      this.pinkId +
      '&couponId=' +
      this.couponId;
    },
    payment: function payment(data) {var _this7 = this;
      var that = this;
      (0, _order.orderCreate)(that.orderKey, data).then(function (res) {
        var status = res.data.status,
        orderId = res.data.result.orderId,
        jsConfig = res.data.result.jsConfig,
        goPages = '/pages/order_pay_status/index?order_id=' + orderId + '&msg=' + res.msg +
        '&type=3' + '&totalPrice=' + _this7.totalPrice;
        switch (status) {
          case 'ORDER_EXIST':
          case 'EXTEND_ORDER':
          case 'PAY_ERROR':
            uni.hideLoading();
            return that.$util.Tips({
              title: res.msg },
            {
              tab: 5,
              url: goPages });

            break;
          case 'SUCCESS':
            uni.hideLoading();
            if (that.BargainId || that.combinationId || that.pinkId || that.seckillId || that.
            discountId)
            return that.$util.Tips({
              title: res.msg,
              icon: 'success' },
            {
              tab: 4,
              url: goPages });

            return that.$util.Tips({
              title: res.msg,
              icon: 'success' },
            {
              tab: 5,
              url: goPages });

            break;
          case 'WECHAT_PAY':
            that.toPay = true;

            /* that.toPay = true; */
            uni.requestPayment({
              timeStamp: jsConfig.timestamp,
              nonceStr: jsConfig.nonceStr,
              package: jsConfig.package,
              signType: jsConfig.signType,
              paySign: jsConfig.paySign,
              success: function success(res) {
                uni.hideLoading();
                if (that.BargainId || that.combinationId || that.pinkId || that.
                seckillId || that.discountId)
                return that.$util.Tips({
                  title: '支付成功',
                  icon: 'success' },
                {
                  tab: 4,
                  url: goPages });

                return that.$util.Tips({
                  title: '支付成功',
                  icon: 'success' },
                {
                  tab: 5,
                  url: goPages });

              },
              fail: function fail(e) {
                uni.hideLoading();
                return that.$util.Tips({
                  title: '取消支付' },
                {
                  tab: 5,
                  url: goPages + '&status=2' });

              },
              complete: function complete(e) {
                uni.hideLoading();
                //关闭当前页面跳转至订单状态
                if (res.errMsg == 'requestPayment:cancel') return that.$util.
                Tips({
                  title: '取消支付' },
                {
                  tab: 5,
                  url: goPages + '&status=2' });

              } });































































            break;
          case 'PAY_DEFICIENCY':
            uni.hideLoading();
            //余额不足
            return that.$util.Tips({
              title: res.msg },
            {
              tab: 5,
              url: goPages + '&status=1' });

            break;
          case "WECHAT_H5_PAY":
            uni.hideLoading();
            that.$util.Tips({
              title: '订单创建成功!' },
            {
              tab: 4,
              url: goPages + '&status=0' });

            setTimeout(function () {
              location.href = res.data.result.jsConfig.mweb_url;
            }, 2000);
            break;

          case 'ALIPAY_PAY':














            uni.navigateTo({
              url: "/pages/users/alipay_invoke/index?id=".concat(orderId, "&link=").concat(jsConfig.qrCode) });









































            break;}

      }).catch(function (err) {
        uni.hideLoading();
        return that.$util.Tips({
          title: err });

      });
    },
    clickTextArea: function clickTextArea() {
      this.$refs.textarea.focus();
    },
    SubOrder: function SubOrder(e) {
      var that = this,
      data = {};

      if (!that.payType) return that.$util.Tips({
        title: '请选择支付方式' });

      if (!that.addressId && !that.shippingType && !that.virtual_type) return that.$util.Tips({
        title: '请选择收货地址' });

      if (that.shippingType == 1) {
        if (that.contacts == "" || that.contactsTel == "") {
          return that.$util.Tips({
            title: '请填写联系人或联系人电话' });

        }
        if (!/^1(3|4|5|7|8|9|6)\d{9}$/.test(that.contactsTel)) {
          return that.$util.Tips({
            title: '请填写正确的手机号' });

        }
        if (!that.contacts) {
          return that.$util.Tips({
            title: '请填写您的真实姓名' });

        }
        if (that.storeList.length == 0) return that.$util.Tips({
          title: '暂无门店,请选择其他方式' });

      }
      data = {
        real_name: that.contacts,
        phone: that.contactsTel,
        addressId: that.addressId,
        formId: '',
        couponId: that.couponId,
        payType: that.payType,
        useIntegral: that.useIntegral,
        bargainId: that.BargainId,
        combinationId: that.combinationId,
        discountId: that.discountId,
        pinkId: that.pinkId,
        advanceId: that.advanceId,
        seckill_id: that.seckillId,
        mark: that.mark,
        store_id: that.system_store ? that.system_store.id : 0,
        'from': that.from,
        shipping_type: that.$util.$h.Add(that.shippingType, 1),
        'new': that.news,
        'invoice_id': that.invChecked };









      if (data.payType == 'yue' && parseFloat(that.userInfo.now_money) < parseFloat(that.totalPrice))
      return that.$util.Tips({
        title: '余额不足！' });

      uni.showLoading({
        title: '订单支付中' });


      (0, _SubscribeMessage.openPaySubscribe)().then(function () {
        that.payment(data);
      });




    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 443:
/*!********************************************************************************************************************************************!*\
  !*** D:/crmeb/CRMEB-v4.3.0/template/uni-app/pages/users/order_confirm/index.vue?vue&type=style&index=0&id=064d693c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_064d693c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=064d693c&lang=scss&scoped=true& */ 444);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_064d693c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_064d693c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_064d693c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_064d693c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_064d693c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 444:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/crmeb/CRMEB-v4.3.0/template/uni-app/pages/users/order_confirm/index.vue?vue&type=style&index=0&id=064d693c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[437,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/users/order_confirm/index.js.map