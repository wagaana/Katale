"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_CryptoAssets_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CryptoAssets.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CryptoAssets.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./resources/js/utils/constants.js");
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
      cryptoAssetsData: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.cryptoAssetsData,
      newCryptoAsset: {
        code: null,
        currencyCode: null
      },
      activeCryptoAsset: {},
      composeMessage: {},
      dialogCompose: false,
      viewPromo: false,
      valid: false,
      rules: {
        required: function required(value) {
          return !!value || "This field is required";
        },
        email: function email(v) {
          return /.+@.+\..+/.test(v) || "Must be a valid email";
        }
      },
      headers: [{
        text: "Logo",
        value: "image"
      }, {
        text: "Label",
        value: "label"
      }, {
        text: "Code",
        align: "left",
        sortable: false,
        value: "currencyCode"
      }, {
        text: "Exchange Rate",
        value: "exchangeRate"
      }, {
        text: "Buy",
        value: "buy"
      }, {
        text: "Sell",
        value: "sell"
      }, {
        text: "Date Added",
        value: "created_at"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("fetchCryptoAssets");
    this.$store.dispatch("loadStebleCurency");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["cryptoAssets", "stebleCurency"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getCryptoAssets", "getStebleCurency", "messageAlert"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$store.dispatch("fetchCryptoAssets");
        this.$store.dispatch("loadStebleCurency");
      }
    }
  },
  methods: {
    loadPromo: function loadPromo(promo) {
      this.activeCryptoAsset = promo;
      this.viewPromo = true;
    },
    setCurrencyCode: function setCurrencyCode() {
      var context = this;
      var code = this.newCryptoAsset.code;
      var currencyCode = null;
      var currencyLabel = null;
      for (var index in context.cryptoAssetsData) {
        var crypto = context.cryptoAssetsData[index];
        if (crypto.code === code) {
          currencyCode = crypto.currencyCode;
          currencyLabel = crypto.title;
        }
      }
      context.newCryptoAsset.currencyCode = currencyCode;
      context.newCryptoAsset.label = currencyLabel;
    },
    deletePromo: function deletePromo() {
      alert("Deleting");
    },
    validate: function validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.addnewCryptoAsset(this.newCryptoAsset);
      }
    },
    addnewCryptoAsset: function addnewCryptoAsset(newCryptoAsset) {
      //send the message via API/server endpoint here
      this.dialogCompose = false;
      this.$store.dispatch("addnewCryptoAsset", newCryptoAsset);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CryptoAssets.vue?vue&type=template&id=54434f9e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CryptoAssets.vue?vue&type=template&id=54434f9e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", [_c("v-row", [_c("v-col", {
    staticClass: "col-md-11 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("Crypto Assets")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v("Manage Crypto Assets here")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-1 pr-md-1"
  }, [_c("v-btn", {
    staticClass: "primary",
    attrs: {
      width: "100%"
    },
    on: {
      click: function click($event) {
        _vm.dialogCompose = true;
      }
    }
  }, [_vm._v("New")])], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getCryptoAssets,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.loadPromo(item);
            }
          }
        }, [_c("td", [_c("img", {
          attrs: {
            src: "".concat(_vm.uploads).concat(item.image),
            width: "30px",
            height: "30px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.currencyCode))]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm.getStebleCurency.code) + _vm._s(item.exchangeRate) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm.getStebleCurency.code) + _vm._s(item.buy) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm.getStebleCurency.code) + _vm._s(item.sell) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.created_at))])])];
      }
    }])
  })], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogCompose,
      callback: function callback($$v) {
        _vm.dialogCompose = $$v;
      },
      expression: "dialogCompose"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n                    Add Crypto Asset\n                ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "sendForm",
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
  }, [_c("v-select", {
    attrs: {
      items: _vm.cryptoAssetsData,
      label: "Crypto Assets",
      "item-text": "title",
      "item-value": "code",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    on: {
      change: _vm.setCurrencyCode
    },
    model: {
      value: _vm.newCryptoAsset.code,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "code", $$v);
      },
      expression: "newCryptoAsset.code"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Code",
      rules: [_vm.rules.required],
      outlined: "",
      dense: "",
      disabled: ""
    },
    model: {
      value: _vm.newCryptoAsset.currencyCode,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "currencyCode", $$v);
      },
      expression: "newCryptoAsset.currencyCode"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "ExchangeRate",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newCryptoAsset.exchangeRate,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "exchangeRate", $$v);
      },
      expression: "newCryptoAsset.exchangeRate"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "buy",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newCryptoAsset.buy,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "buy", $$v);
      },
      expression: "newCryptoAsset.buy"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "sell",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newCryptoAsset.sell,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "sell", $$v);
      },
      expression: "newCryptoAsset.sell"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Charge Percentage",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newCryptoAsset.chargePercentage,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "chargePercentage", $$v);
      },
      expression: "newCryptoAsset.chargePercentage"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Transaction Fee",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newCryptoAsset.transactionFee,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "transactionFee", $$v);
      },
      expression: "newCryptoAsset.transactionFee"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "description",
      rules: [_vm.rules.required],
      outlined: "",
      lines: "2",
      dense: ""
    },
    model: {
      value: _vm.newCryptoAsset.description,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "description", $$v);
      },
      expression: "newCryptoAsset.description"
    }
  }), _vm._v(" "), _c("v-file-input", {
    attrs: {
      label: "Icon",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newCryptoAsset.image,
      callback: function callback($$v) {
        _vm.$set(_vm.newCryptoAsset, "image", $$v);
      },
      expression: "newCryptoAsset.image"
    }
  })], 1)], 1), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogCompose = false;
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
  }, [_vm._v("Create")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewPromo,
      callback: function callback($$v) {
        _vm.viewPromo = $$v;
      },
      expression: "viewPromo"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.activeCryptoAsset.label) + "\n                ")]), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.activeCryptoAsset.image),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n                        " + _vm._s(_vm.activeCryptoAsset.description) + "\n                    ")]), _vm._v(" "), _c("p", [_vm._v("\n                        Exchange Rate:\n                        " + _vm._s(_vm.getStebleCurency.code) + _vm._s(_vm.activeCryptoAsset.exchangeRate) + "\n                        "), _c("br"), _vm._v("\n                        Charge Percentage:\n                        " + _vm._s(_vm.activeCryptoAsset.chargePercentage) + "%\n                        "), _c("br"), _vm._v("\n                        transactionFee:\n                        " + _vm._s(_vm.activeCryptoAsset.transactionFee) + "\n                        "), _c("br"), _vm._v("\n                        Direction Percentage:\n                        " + _vm._s(_vm.activeCryptoAsset.directionPercentage) + "%\n                        "), _c("br"), _vm._v("\n                        Buy: " + _vm._s(_vm.getStebleCurency.code) + "\n                        " + _vm._s(_vm.activeCryptoAsset.buy) + "\n                        "), _c("br"), _vm._v("\n                        Sell: " + _vm._s(_vm.getStebleCurency.code) + "\n                        " + _vm._s(_vm.activeCryptoAsset.sell) + "\n                        "), _c("br"), _vm._v("\n                        DATE: " + _vm._s(_vm.activeCryptoAsset.created_at) + "\n                    ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deletePromo(_vm.activeCryptoAsset);
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
        return _vm.composeEmail(_vm.activeCryptoAsset);
      }
    }
  }, [_vm._v("EDIT")])], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/CryptoAssets.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/dashboard/CryptoAssets.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CryptoAssets_vue_vue_type_template_id_54434f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CryptoAssets.vue?vue&type=template&id=54434f9e& */ "./resources/js/views/dashboard/CryptoAssets.vue?vue&type=template&id=54434f9e&");
/* harmony import */ var _CryptoAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CryptoAssets.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CryptoAssets.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CryptoAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CryptoAssets_vue_vue_type_template_id_54434f9e___WEBPACK_IMPORTED_MODULE_0__.render,
  _CryptoAssets_vue_vue_type_template_id_54434f9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CryptoAssets.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CryptoAssets.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/dashboard/CryptoAssets.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CryptoAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CryptoAssets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CryptoAssets.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CryptoAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/CryptoAssets.vue?vue&type=template&id=54434f9e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CryptoAssets.vue?vue&type=template&id=54434f9e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CryptoAssets_vue_vue_type_template_id_54434f9e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CryptoAssets_vue_vue_type_template_id_54434f9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CryptoAssets_vue_vue_type_template_id_54434f9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CryptoAssets.vue?vue&type=template&id=54434f9e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CryptoAssets.vue?vue&type=template&id=54434f9e&");


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