"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_campaigns_CampaignTemplates_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      rules: {
        required: function required(value) {
          return !!value || "This field is required";
        },
        email: function email(v) {
          return /.+@.+\..+/.test(v) || "Must be a valid email";
        }
      },
      dialogTemplate: false,
      activeTemplate: {},
      headers: [{
        text: "Label",
        align: "left",
        sortable: false,
        value: "text"
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Purpose",
        value: "purpose"
      }, {
        text: "Creation Time",
        value: "created_at"
      }, {
        text: "Deleted",
        value: "deleted"
      }]
    };
  },
  created: function created() {
    this.$store.dispatch("loadCampaignTemplates");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["campaignTemplates"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getCampaignTemplates", "messageAlert"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
      }
    }
  },
  methods: {
    createTemplate: function createTemplate() {
      this.$router.push({
        path: "/admin/marketingCampaigns/createTemplate",
        query: {
          action: "createTemplate"
        }
      });
    },
    viewTemplate: function viewTemplate(templateID) {
      this.$router.push({
        path: "/admin/marketingCampaigns/createTemplate",
        query: {
          action: "vewTemplate",
          id: templateID
        }
      });
    },
    loadTemplate: function loadTemplate(template) {
      this.activeTemplate = template;
      this.dialogTemplate = true;
    },
    deleteTemplate: function deleteTemplate(template) {
      this.$store.dispatch("deleteTemplate", template.templateID);
      this.dialogTemplate = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=template&id=03e056d3&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=template&id=03e056d3& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", [_c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "primary font-weight-light",
    on: {
      click: _vm.createTemplate
    }
  }, [_vm._v("New Template")])], 1)]), _vm._v(" "), _c("v-card", [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getCampaignTemplates,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.loadTemplate(item);
            }
          }
        }, [_c("td", [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c("td", [_vm._v("\n              " + _vm._s(item.purpose !== null ? item.purpose : "Email Campaigns") + "\n            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.created_at))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.deleted))])])];
      }
    }])
  })], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogTemplate,
      callback: function callback($$v) {
        _vm.dialogTemplate = $$v;
      },
      expression: "dialogTemplate"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.activeTemplate.label))])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card", {
    staticClass: "pa-5"
  }, [_c("v-card-text", [_c("p", [_vm._v(_vm._s(_vm.activeTemplate.description))]), _vm._v(" "), _c("span", {
    staticClass: "success--text subtitle-1"
  }, [_vm._v("\n              Created: " + _vm._s(_vm.activeTemplate.created_at) + "\n            ")])])], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteTemplate(_vm.activeTemplate);
      }
    }
  }, [_vm._v("Delete")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogTemplate = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.viewTemplate(_vm.activeTemplate.templateID);
      }
    }
  }, [_vm._v("Configure")])], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-10 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light"
  }, [_vm._v("Templates")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CampaignTemplates.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CampaignTemplates.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CampaignTemplates_vue_vue_type_template_id_03e056d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignTemplates.vue?vue&type=template&id=03e056d3& */ "./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=template&id=03e056d3&");
/* harmony import */ var _CampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignTemplates.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignTemplates_vue_vue_type_template_id_03e056d3___WEBPACK_IMPORTED_MODULE_0__.render,
  _CampaignTemplates_vue_vue_type_template_id_03e056d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/campaigns/CampaignTemplates.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CampaignTemplates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=template&id=03e056d3&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=template&id=03e056d3& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTemplates_vue_vue_type_template_id_03e056d3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTemplates_vue_vue_type_template_id_03e056d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTemplates_vue_vue_type_template_id_03e056d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CampaignTemplates.vue?vue&type=template&id=03e056d3& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CampaignTemplates.vue?vue&type=template&id=03e056d3&");


/***/ })

}]);