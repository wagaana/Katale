"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_campaigns_MarketingCampaigns_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: [{
        title: "campaigns",
        icon: "mdi-message-cog-outline",
        href: "/admin/marketingCampaigns/campaigns"
      }, {
        title: "campaignOffers",
        icon: "mdi-account-multiple",
        href: "/admin/marketingCampaigns/campaignOffers"
      }, {
        title: "campaignTargets",
        icon: "mdi-database-settings-outline",
        href: "/admin/marketingCampaigns/campaignTargets"
      }, {
        title: "templates",
        icon: "mdi-cogs",
        href: "/admin/marketingCampaigns/campaignTemplates"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=template&id=4266d783&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=template&id=4266d783& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("h1", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Campaigns")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v("Manage Marketing Campaigns Here")]), _vm._v(" "), _c("v-card", [_c("v-card-text", [_c("v-container", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("v-card", [_c("v-list", {
    attrs: {
      dense: "",
      nav: ""
    }
  }, _vm._l(_vm.items, function (item) {
    return _c("v-list-item", {
      key: item.title,
      attrs: {
        link: "",
        to: item.href
      }
    }, [_c("v-list-item-icon", [_c("v-icon", [_vm._v(_vm._s(item.icon))])], 1), _vm._v(" "), _c("v-list-item-content", [_c("v-list-item-title", [_vm._v(_vm._s(item.title))])], 1)], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("router-view")], 1)])])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MarketingCampaigns_vue_vue_type_template_id_4266d783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarketingCampaigns.vue?vue&type=template&id=4266d783& */ "./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=template&id=4266d783&");
/* harmony import */ var _MarketingCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarketingCampaigns.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MarketingCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MarketingCampaigns_vue_vue_type_template_id_4266d783___WEBPACK_IMPORTED_MODULE_0__.render,
  _MarketingCampaigns_vue_vue_type_template_id_4266d783___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/campaigns/MarketingCampaigns.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketingCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarketingCampaigns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketingCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=template&id=4266d783&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=template&id=4266d783& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketingCampaigns_vue_vue_type_template_id_4266d783___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketingCampaigns_vue_vue_type_template_id_4266d783___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MarketingCampaigns_vue_vue_type_template_id_4266d783___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MarketingCampaigns.vue?vue&type=template&id=4266d783& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/MarketingCampaigns.vue?vue&type=template&id=4266d783&");


/***/ })

}]);