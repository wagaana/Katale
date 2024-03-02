"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_shopping_DeliveryCompanies_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      dialogNewPackageSample: false,
      getFreelancerCompany: {},
      headers: [{
        text: "Name",
        value: "name"
      }, {
        text: "Type",
        value: "state"
      }, {
        text: "Area",
        value: "country"
      }, {
        text: "Qty",
        value: "quantity"
      }, {
        text: "Weigh",
        value: "weight"
      }, {
        text: "Delete",
        value: "delete"
      }],
      packageTypes: [{
        text: "Document",
        value: "Document"
      }, {
        text: "Package",
        value: "Package"
      }],
      valid: false,
      rules: {
        required: function required(value) {
          return !!value || "This field is required";
        },
        email: function email(v) {
          return /.+@.+\..+/.test(v) || "Must be a valid email";
        }
      },
      newPackageSample: {
        quantity: 1
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["packageTypes"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getPackageTypes", "messageAlert"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$store.dispatch("loadPackageTypes");
      }
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadPackageTypes");
  },
  methods: {
    validate: function validate() {
      if (this.$refs.packageSampleForm.validate()) {
        // send it
        this.createRegion(this.newPackageSample);
      }
    },
    createRegion: function createRegion(newPackageSample) {
      this.$store.dispatch("submitPackageType", newPackageSample);
      this.dialogNewPackageSample = false;
    },
    deletePackageType: function deletePackageType(packageSample) {
      this.$store.dispatch("deletePackageType", packageSample.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=template&id=5189499a&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=template&id=5189499a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("v-card-actions", {
    staticClass: "pa-3"
  }, [_c("h5", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("Package Samples")]), _vm._v(" "), _c("v-btn", {
    staticClass: "primary ml-auto",
    on: {
      click: function click($event) {
        _vm.dialogNewPackageSample = true;
      }
    }
  }, [_vm._v("New")])], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getPackageTypes,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", [_c("td", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.package_type))]), _vm._v(" "), _c("td", [_vm._v(_vm._s("".concat(item.length, "X").concat(item.width, "X").concat(item.height, "(CM)")))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.quantity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s("".concat(item.weight, "Kg")))]), _vm._v(" "), _c("td", [_c("v-btn", {
          attrs: {
            icon: ""
          },
          on: {
            click: function click($event) {
              return _vm.deletePackageType(item);
            }
          }
        }, [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-delete")])], 1)], 1)])];
      }
    }])
  })], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogNewPackageSample,
      callback: function callback($$v) {
        _vm.dialogNewPackageSample = $$v;
      },
      expression: "dialogNewPackageSample"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        New Package Sample\n      ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "packageSampleForm",
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
  }, [_c("v-autocomplete", {
    attrs: {
      items: _vm.packageTypes,
      label: "Select Package Type",
      "item-text": "text",
      "item-value": "value",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newPackageSample.package_type,
      callback: function callback($$v) {
        _vm.$set(_vm.newPackageSample, "package_type", $$v);
      },
      expression: "newPackageSample.package_type"
    }
  })], 1), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Label",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newPackageSample.name,
      callback: function callback($$v) {
        _vm.$set(_vm.newPackageSample, "name", $$v);
      },
      expression: "newPackageSample.name"
    }
  }), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      lg: "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Length (CM)",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newPackageSample.length,
      callback: function callback($$v) {
        _vm.$set(_vm.newPackageSample, "length", $$v);
      },
      expression: "newPackageSample.length"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Width (CM)",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newPackageSample.width,
      callback: function callback($$v) {
        _vm.$set(_vm.newPackageSample, "width", $$v);
      },
      expression: "newPackageSample.width"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "4"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Height (CM)",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newPackageSample.height,
      callback: function callback($$v) {
        _vm.$set(_vm.newPackageSample, "height", $$v);
      },
      expression: "newPackageSample.height"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Quantity",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newPackageSample.quantity,
      callback: function callback($$v) {
        _vm.$set(_vm.newPackageSample, "quantity", $$v);
      },
      expression: "newPackageSample.quantity"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Weight (KG)",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newPackageSample.weight,
      callback: function callback($$v) {
        _vm.$set(_vm.newPackageSample, "weight", $$v);
      },
      expression: "newPackageSample.weight"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogNewPackageSample = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.valid
    },
    on: {
      click: _vm.validate
    }
  }, [_vm._v("Add Sample")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/shopping/DeliveryCompanies.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/DeliveryCompanies.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeliveryCompanies_vue_vue_type_template_id_5189499a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliveryCompanies.vue?vue&type=template&id=5189499a& */ "./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=template&id=5189499a&");
/* harmony import */ var _DeliveryCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliveryCompanies.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeliveryCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeliveryCompanies_vue_vue_type_template_id_5189499a___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeliveryCompanies_vue_vue_type_template_id_5189499a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/shopping/DeliveryCompanies.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeliveryCompanies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryCompanies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=template&id=5189499a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=template&id=5189499a& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryCompanies_vue_vue_type_template_id_5189499a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryCompanies_vue_vue_type_template_id_5189499a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryCompanies_vue_vue_type_template_id_5189499a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeliveryCompanies.vue?vue&type=template&id=5189499a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/DeliveryCompanies.vue?vue&type=template&id=5189499a&");


/***/ })

}]);