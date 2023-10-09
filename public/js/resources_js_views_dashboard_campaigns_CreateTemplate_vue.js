"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_campaigns_CreateTemplate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      newTemplate: {
        parameters: []
      },
      action: null,
      activeParameter: {},
      parameter: {},
      dialogParameter: false,
      inputTypes: [{
        id: "text",
        label: "Text",
        value: "text"
      }, {
        id: "string",
        label: "String",
        value: "string"
      }, {
        id: "file",
        label: "Image File",
        value: "file"
      }],
      inputVariables: [],
      tableHeaders: [{
        text: "Type",
        value: "inputType"
      }, {
        text: "Label",
        value: "label"
      }, {
        text: "Value",
        value: "value"
      }],
      valid: false,
      rules: {
        required: function required(value) {
          return !!value || "This field is required";
        },
        email: function email(v) {
          return /.+@.+\..+/.test(v) || "Must be a valid email";
        }
      }
    };
  },
  created: function created() {
    if (this.$route.query.action === "vewTemplate") {
      this.action = this.$route.query.action;
      this.$store.dispatch("loadTemplateDetails", this.$route.query.id);
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["allTemplates", "templateDetails"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getAllTemplates", "getTemplateDetails", "messageAlert"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          type: val.type,
          title: val.title,
          text: val.body
        });
        if (val.body === "OK") {
          this.$router.push({
            path: "/admin/marketingCampaigns/campaignTemplates",
            query: {}
          });
        }
      }
    },
    getTemplateDetails: function getTemplateDetails(val) {
      if (val != null) {
        try {
          this.newTemplate = val;
          this.getTemplateVariables(this.getTemplateDetails.html);
        } catch (e) {}
      }
    }
  },
  methods: {
    SubmitTemplate: function SubmitTemplate() {
      if (this.$refs.templateForm.validate()) {
        // send it
        if (this.newTemplate.parameters.length > 0) {
          this.$store.dispatch("submitTemplate", this.newTemplate);
        } else {
          vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
            group: "foo",
            type: "error",
            title: "Error",
            text: "Set all template variables to continue..."
          });
        }
      } else {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          type: "error",
          title: "Error",
          text: "Set all template variables to continue..."
        });
      }
    },
    UpdateTemplate: function UpdateTemplate() {
      if (this.$refs.templateForm.validate()) {
        // send it
        if (this.newTemplate.parameters.length > 0) {
          this.$store.dispatch("updateTemplate", this.newTemplate);
        } else {
          vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
            group: "foo",
            type: "error",
            title: "Error",
            text: "Set all template variables to continue..."
          });
        }
      } else {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          type: "error",
          title: "Error",
          text: "Set all template variables to continue..."
        });
      }
    },
    loadParameter: function loadParameter(parameter) {
      this.activeParameter = parameter;
      this.dialogParameter = true;
    },
    deleteParameter: function deleteParameter(parameter) {
      this.newTemplate.parameters = this.newTemplate.parameters.filter(function (el) {
        return el.label != parameter.label;
      });
      this.dialogParameter = false;
    },
    displayError: function displayError() {
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
        group: "foo",
        type: "error",
        title: "Error",
        text: "All fields are required"
      });
    },
    getTemplateVariables: function getTemplateVariables(htmlVariables) {
      var freeVariables = [];
      try {
        // eslint-disable-next-line no-useless-escape
        htmlVariables = htmlVariables.match(/\%[^}\s]+\%/g || 0);
        for (var mIndex in htmlVariables) {
          var addToList = true;
          for (var index in this.newTemplate.parameters) {
            if (this.newTemplate.parameters[index].value === htmlVariables[mIndex]) {
              addToList = false;
              break;
            }
          }
          if (addToList) {
            freeVariables.push(htmlVariables[mIndex]);
          }
        }
      } catch (e) {}
      return freeVariables;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=template&id=49704488&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=template&id=49704488& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "col-md-10 pr-md-1 sm-6"
  }, [_vm.action !== "vewTemplate" ? _c("h1", {
    staticClass: "font-weight-light white--text"
  }, [_vm._v("\n          Create Template\n        ")]) : _c("h1", {
    staticClass: "font-weight-light white--text"
  }, [_vm._v("Update Template")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_vm.action !== "vewTemplate" ? _c("v-btn", {
    staticClass: "primary font-weight-light",
    on: {
      click: _vm.SubmitTemplate
    }
  }, [_vm._v("Submit Template")]) : _c("v-btn", {
    staticClass: "primary font-weight-light",
    on: {
      click: _vm.UpdateTemplate
    }
  }, [_vm._v("Update Template")])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pr-md-1 fill-width"
  }, [_c("v-card", {
    staticClass: "mb-3"
  }, [_c("v-container", [_c("div", {
    staticClass: "mb-3 row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("v-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("v-form", {
    ref: "templateForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.valid,
      callback: function callback($$v) {
        _vm.valid = $$v;
      },
      expression: "valid"
    }
  }, [_c("v-expansion-panels", {
    attrs: {
      value: 0
    }
  }, [_c("v-expansion-panel", [_c("v-expansion-panel-header", {
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-arrow-up-circle")])];
      },
      proxy: true
    }])
  }, [_vm._v("\n                          Template Description\n                          ")]), _vm._v(" "), _c("v-expansion-panel-content", [_c("v-container", [_c("v-text-field", {
    attrs: {
      label: "Template Name",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newTemplate.label,
      callback: function callback($$v) {
        _vm.$set(_vm.newTemplate, "label", $$v);
      },
      expression: "newTemplate.label"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "Template Description",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newTemplate.description,
      callback: function callback($$v) {
        _vm.$set(_vm.newTemplate, "description", $$v);
      },
      expression: "newTemplate.description"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-expansion-panel", [_c("v-expansion-panel-header", {
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-arrow-up-circle")])];
      },
      proxy: true
    }])
  }, [_vm._v("\n                          Template Html Content\n                          ")]), _vm._v(" "), _c("v-expansion-panel-content", [_c("v-textarea", {
    attrs: {
      label: "Template Html",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newTemplate.html,
      callback: function callback($$v) {
        _vm.$set(_vm.newTemplate, "html", $$v);
      },
      expression: "newTemplate.html"
    }
  })], 1)], 1), _vm._v(" "), _c("v-expansion-panel", [_c("v-expansion-panel-header", {
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-arrow-up-circle")])];
      },
      proxy: true
    }])
  }, [_vm._v("\n                          Template Parameters\n                          ")]), _vm._v(" "), _c("v-expansion-panel-content", [_c("div", [_c("label", [_vm._v("Query parameters")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Label",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.parameter.label,
      callback: function callback($$v) {
        _vm.$set(_vm.parameter, "label", $$v);
      },
      expression: "parameter.label"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Place Holder",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.parameter.placeHolder,
      callback: function callback($$v) {
        _vm.$set(_vm.parameter, "placeHolder", $$v);
      },
      expression: "parameter.placeHolder"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("v-select", {
    attrs: {
      items: _vm.inputTypes,
      "item-text": "label",
      "item-value": "id",
      label: "Type",
      dense: "",
      outlined: ""
    },
    model: {
      value: _vm.parameter.inputType,
      callback: function callback($$v) {
        _vm.$set(_vm.parameter, "inputType", $$v);
      },
      expression: "parameter.inputType"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("v-select", {
    attrs: {
      items: _vm.getTemplateVariables(_vm.newTemplate.html),
      label: "Variable",
      dense: "",
      outlined: ""
    },
    model: {
      value: _vm.parameter.value,
      callback: function callback($$v) {
        _vm.$set(_vm.parameter, "value", $$v);
      },
      expression: "parameter.value"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("v-btn", {
    attrs: {
      color: "primary",
      block: "",
      depressed: ""
    },
    on: {
      click: function click($event) {
        ;
        _vm.parameter.value !== undefined & _vm.parameter.label !== undefined & _vm.parameter.placeHolder !== undefined ? _vm.newTemplate.parameters.push(_vm.parameter) : _vm.displayError();
        _vm.parameter = {};
      }
    }
  }, [_vm._v("Set")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "py-4"
  }, [_vm.newTemplate.parameters.length > 0 ? _c("v-data-table", {
    attrs: {
      headers: _vm.tableHeaders,
      items: _vm.newTemplate.parameters
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.loadParameter(item);
            }
          }
        }, [_c("td", [_vm._v("\n                                      " + _vm._s(item.inputType) + "\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                      " + _vm._s(item.label) + "\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                      " + _vm._s(item.value) + "\n                                    ")])])];
      }
    }], null, false, 1437271787)
  }) : _vm._e()], 1), _vm._v(" "), _vm.newTemplate.parameters.length > 0 ? _c("div", {
    staticClass: "row px-4 pb-2 d-flex justify-content-end align-items-end"
  }) : _vm._e()], 1)])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("v-card", {
    staticClass: "col-md-12"
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.newTemplate.html)
    }
  })])], 1)])])])], 1)], 1)]), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "340"
    },
    model: {
      value: _vm.dialogParameter,
      callback: function callback($$v) {
        _vm.dialogParameter = $$v;
      },
      expression: "dialogParameter"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n          " + _vm._s(_vm.activeParameter.label) + "\n        ")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card", {
    staticClass: "pa-5"
  }, [_c("v-card-text", [_c("p", [_vm._v("Type: " + _vm._s(_vm.activeParameter.inputType))]), _vm._v(" "), _c("p", [_vm._v("Value: " + _vm._s(_vm.activeParameter.value))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.activeParameter.placeHolder))])])], 1), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.deleteParameter(_vm.activeParameter);
      }
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CreateTemplate.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CreateTemplate.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateTemplate_vue_vue_type_template_id_49704488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTemplate.vue?vue&type=template&id=49704488& */ "./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=template&id=49704488&");
/* harmony import */ var _CreateTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTemplate.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateTemplate_vue_vue_type_template_id_49704488___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateTemplate_vue_vue_type_template_id_49704488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/campaigns/CreateTemplate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateTemplate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=template&id=49704488&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=template&id=49704488& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTemplate_vue_vue_type_template_id_49704488___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTemplate_vue_vue_type_template_id_49704488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateTemplate_vue_vue_type_template_id_49704488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateTemplate.vue?vue&type=template&id=49704488& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateTemplate.vue?vue&type=template&id=49704488&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);