"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_settings_Currency_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/Currency.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/Currency.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      data: {},
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      dialogEditConfig: false,
      dialogAddTariff: false,
      dialogEditTariff: false,
      activeFieldLabel: "",
      activeField: "",
      activeFieldValue: "",
      getDeliveryRequestDetails: {},
      dialogEditConfigLocation: false,
      newTariff: {
        code: "",
        currency: "",
        minAmmount: 0,
        maxAmmount: 0,
        sending: 0,
        withdraw: 0,
        payments: 0,
        minTax: 0,
        maxTax: 0
      },
      withdrowTariffEnabled: false,
      depositTariffEnabled: false,
      depositChargesEnabled: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadCurencyDetails", this.$route.params.code);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["curencyDetails"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["messageAlert", "getCurencyDetails"])),
  created: function created() {},
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: "Success",
          text: val.body
        });
        this.$store.dispatch("loadCurencyDetails", this.$route.params.code);
      }
    },
    getCurencyDetails: function getCurencyDetails(val) {
      if (val != null) {
        this.withdrowTariffEnabled = val.withdrowTariffEnabled == "true" ? true : false;
        this.depositTariffEnabled = val.depositTariffEnabled == "true" ? true : false;
        this.depositChargesEnabled = val.depositChargesEnabled == "true" ? true : false;
      }
    }
  },
  methods: {
    updateConfig: function updateConfig() {
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        paymentMethodCode: this.$route.params.code
      });
      this.dialogEditConfig = false;
    },
    OpenEditModule: function OpenEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditConfig = true;
    },
    updateLocationConfig: function updateLocationConfig() {
      this.$store.dispatch("updateCurrencyLocationConfig", {
        suport_latitude: this.getCurencyDetails.suport_latitude,
        suport_longitude: this.getCurencyDetails.suport_longitude,
        curencyCode: this.$route.params.code
      });
      this.dialogEditConfigLocation = false;
    },
    OpenEditConfigLocation: function OpenEditConfigLocation() {
      this.dialogEditConfigLocation = true;
    },
    switchDepositTariffsStatus: function switchDepositTariffsStatus() {
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: "depositTariffEnabled",
        activeFieldLabel: "Deposit Tariff",
        activeFieldValue: this.depositTariffEnabled,
        paymentMethodCode: this.$route.params.code
      });
    },
    switchWithdrowTariffsStatus: function switchWithdrowTariffsStatus() {
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: "withdrowTariffEnabled",
        activeFieldLabel: "Withdrow Tariff",
        activeFieldValue: this.withdrowTariffEnabled,
        paymentMethodCode: this.$route.params.code
      });
    },
    switchDepositChargesEnabledStatus: function switchDepositChargesEnabledStatus() {
      this.$store.dispatch("updateCurrencyConfig", {
        activeFieldId: "depositChargesEnabled",
        activeFieldLabel: "Depost Charges Status",
        activeFieldValue: this.depositChargesEnabled,
        paymentMethodCode: this.$route.params.code
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/Currency.vue?vue&type=template&id=a6ab129a&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/Currency.vue?vue&type=template&id=a6ab129a& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    attrs: {
      elevation: "10"
    }
  }, [_c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-10 pr-md-1"
  }, [_c("h2", {
    staticClass: "col-md-10 pr-md-1"
  }, [_vm._v("\n              " + _vm._s(_vm.getCurencyDetails.name) + "\n            ")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    attrs: {
      cols: "12 py-2",
      sm: "12",
      "order-sm": "2",
      "min-height": "100",
      "min-width": "150"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "4",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("h4", {
    staticClass: "font-weight-bold mb-0"
  }, [_vm._v("Suport")])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-account")]), _vm._v("\n                      " + _vm._s(_vm.getCurencyDetails.suport_name) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_name", "Suport Name", _vm.getCurencyDetails.suport_name || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-phone")]), _vm._v("\n                      " + _vm._s(_vm.getCurencyDetails.suport_phone) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_phone", "Suport Phone", _vm.getCurencyDetails.suport_phone || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-at")]), _vm._v("\n                      " + _vm._s(_vm.getCurencyDetails.suport_email) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_email", "Suport Email", _vm.getCurencyDetails.suport_email || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-web")]), _vm._v("\n                      " + _vm._s(_vm.getCurencyDetails.suport_website) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_website", "Suport Website", _vm.getCurencyDetails.suport_website || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1), _vm._v(" "), _c("p", [_c("a", {
    staticClass: "font-weight-bold",
    attrs: {
      target: "__BLANK",
      href: "https://www.google.com/maps/search/?api=1&query=".concat(_vm.getCurencyDetails.latitude, "%2C").concat(_vm.getCurencyDetails.longitude)
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-map")]), _vm._v("\n                        Get Directions\n                      ")], 1), _vm._v(" "), _c("a", {
    on: {
      click: _vm.OpenEditConfigLocation
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)]), _vm._v(" "), _c("p", {
    staticClass: "font-weight-light"
  }, [_vm._v("\n                      " + _vm._s(_vm.data.address) + "\n                    ")])])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "4",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("h4", {
    staticClass: "font-weight-bold mb-0"
  }, [_vm._v("Exchange")])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("Exchange Rate:\n                      " + _vm._s(_vm.getCurencyDetails.exchange_rate) + "\n                    ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Buy:\n                      " + _vm._s(_vm.getCurencyDetails.buy) + "\n                    ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Sell:\n                      " + _vm._s(_vm.getCurencyDetails.sell) + "\n                    ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Conversion Charge %ge:\n                      " + _vm._s(_vm.getCurencyDetails.conversionChargePercentage) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("conversionChargePercentage", "Charge Percentage %ge", _vm.getCurencyDetails.conversionChargePercentage || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Txn Fee:\n                      " + _vm._s(_vm.getCurencyDetails.transactionFee) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("transactionFee", "Transaction Fee", _vm.getCurencyDetails.transactionFee || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "4",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("h4", {
    staticClass: "font-weight-bold mb-0"
  }, [_vm._v("Charge")])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Currency:\n                      " + _vm._s(_vm.getCurencyDetails.code) + "\n                    ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Bid Ask %ge Buy:\n                      " + _vm._s(_vm.getCurencyDetails.bidAskPercentageBuy) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("bidAskPercentageBuy", "Bid Ask %ge Buy", _vm.getCurencyDetails.bidAskPercentageBuy || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Bid Ask %ge Sell:\n                      " + _vm._s(_vm.getCurencyDetails.bidAskPercentageSell) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("bidAskPercentageSell", "Bid Ask %ge Sell", _vm.getCurencyDetails.bidAskPercentageSell || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Country:\n                      " + _vm._s(_vm.getCurencyDetails.entity) + "\n                    ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Minor Unit:\n                      " + _vm._s(_vm.getCurencyDetails.minorUnit) + "\n                    ")], 1)])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogEditConfig,
      callback: function callback($$v) {
        _vm.dialogEditConfig = $$v;
      },
      expression: "dialogEditConfig"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v(_vm._s("Edit ".concat(_vm.activeFieldLabel)))])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "".concat(_vm.activeFieldLabel, " Value"),
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeFieldValue,
      callback: function callback($$v) {
        _vm.activeFieldValue = $$v;
      },
      expression: "activeFieldValue"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-2"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogEditConfig = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.updateConfig
    }
  }, [_vm._v("Update")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogEditConfigLocation,
      callback: function callback($$v) {
        _vm.dialogEditConfigLocation = $$v;
      },
      expression: "dialogEditConfigLocation"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v("Edit Suport Location")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Latitude",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.getCurencyDetails.suport_latitude,
      callback: function callback($$v) {
        _vm.$set(_vm.getCurencyDetails, "suport_latitude", $$v);
      },
      expression: "getCurencyDetails.suport_latitude"
    }
  })], 1), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Longitude",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.getCurencyDetails.suport_longitude,
      callback: function callback($$v) {
        _vm.$set(_vm.getCurencyDetails, "suport_longitude", $$v);
      },
      expression: "getCurencyDetails.suport_longitude"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-2"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogEditConfigLocation = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.updateLocationConfig
    }
  }, [_vm._v("Update")])], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/settings/Currency.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/Currency.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Currency_vue_vue_type_template_id_a6ab129a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Currency.vue?vue&type=template&id=a6ab129a& */ "./resources/js/views/dashboard/settings/Currency.vue?vue&type=template&id=a6ab129a&");
/* harmony import */ var _Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Currency.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/settings/Currency.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Currency_vue_vue_type_template_id_a6ab129a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Currency_vue_vue_type_template_id_a6ab129a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/settings/Currency.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/settings/Currency.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/Currency.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Currency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/Currency.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/settings/Currency.vue?vue&type=template&id=a6ab129a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/Currency.vue?vue&type=template&id=a6ab129a& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_a6ab129a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_a6ab129a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_a6ab129a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Currency.vue?vue&type=template&id=a6ab129a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/Currency.vue?vue&type=template&id=a6ab129a&");


/***/ })

}]);