"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_settings_CreateServicePoint_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=script&lang=js& ***!
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
      validServicePoint: false,
      newServicePoint: {},
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
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("fetchMyCompany");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["freelancerCompany"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["messageAlert"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$router.push("/admin/settings/myServicePoints");
      }
    }
  },
  methods: {
    validateNewServicePointForm: function validateNewServicePointForm() {
      if (this.$refs.servicePointForm.validate()) {
        // send it
        this.$store.dispatch("submitServicePoint", this.newServicePoint);
      }
    },
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function getAddressData(addressData, placeResultData, id) {
      this.address = addressData;
      console.log(placeResultData);
      this.newServicePoint.data = placeResultData;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=template&id=d8443bce&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=template&id=d8443bce& ***!
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
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-0 pa-5",
    attrs: {
      cols: "12"
    }
  }, [_c("h1", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Create Service Point")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v("Register Your Service Point here")])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      xxs: "12"
    }
  }, [_c("v-form", {
    ref: "servicePointForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validServicePoint,
      callback: function callback($$v) {
        _vm.validServicePoint = $$v;
      },
      expression: "validServicePoint"
    }
  }, [_c("v-card", {
    staticClass: "mb-4 pa-5"
  }, [_c("v-text-field", {
    attrs: {
      label: "Label",
      autocomplete: "company",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newServicePoint.label,
      callback: function callback($$v) {
        _vm.$set(_vm.newServicePoint, "label", $$v);
      },
      expression: "newServicePoint.label"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "Description",
      rows: "2",
      "max-rows": "4",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newServicePoint.description,
      callback: function callback($$v) {
        _vm.$set(_vm.newServicePoint, "description", $$v);
      },
      expression: "newServicePoint.description"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Phone",
      autocomplete: "phone",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newServicePoint.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.newServicePoint, "phone", $$v);
      },
      expression: "newServicePoint.phone"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Website",
      autocomplete: "website",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newServicePoint.website,
      callback: function callback($$v) {
        _vm.$set(_vm.newServicePoint, "website", $$v);
      },
      expression: "newServicePoint.website"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Email",
      autocomplete: "email",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required, _vm.rules.email]
    },
    model: {
      value: _vm.newServicePoint.email,
      callback: function callback($$v) {
        _vm.$set(_vm.newServicePoint, "email", $$v);
      },
      expression: "newServicePoint.email"
    }
  }), _vm._v(" "), _c("v-file-input", {
    attrs: {
      label: "Featured Picture",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newServicePoint.image,
      callback: function callback($$v) {
        _vm.$set(_vm.newServicePoint, "image", $$v);
      },
      expression: "newServicePoint.image"
    }
  }), _vm._v(" "), _c("vuetify-google-autocomplete", {
    ref: "address",
    attrs: {
      id: "map",
      classname: "form-control",
      placeholder: "Please type your address",
      country: "ug",
      outlined: "",
      dense: ""
    },
    on: {
      placechanged: _vm.getAddressData
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "mb-1",
    attrs: {
      disabled: !_vm.validServicePoint,
      variant: "success"
    },
    on: {
      click: _vm.validateNewServicePointForm
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/settings/CreateServicePoint.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/CreateServicePoint.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateServicePoint_vue_vue_type_template_id_d8443bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateServicePoint.vue?vue&type=template&id=d8443bce& */ "./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=template&id=d8443bce&");
/* harmony import */ var _CreateServicePoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateServicePoint.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateServicePoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateServicePoint_vue_vue_type_template_id_d8443bce___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateServicePoint_vue_vue_type_template_id_d8443bce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/settings/CreateServicePoint.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateServicePoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateServicePoint.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateServicePoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=template&id=d8443bce&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=template&id=d8443bce& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateServicePoint_vue_vue_type_template_id_d8443bce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateServicePoint_vue_vue_type_template_id_d8443bce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateServicePoint_vue_vue_type_template_id_d8443bce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateServicePoint.vue?vue&type=template&id=d8443bce& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/CreateServicePoint.vue?vue&type=template&id=d8443bce&");


/***/ })

}]);