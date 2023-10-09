"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_PaymentMethodCurrency_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      data: {},
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      dialogEditConfig: false,
      dialogAddTariff: false,
      dialogEditTariff: false,
      activeFieldLabel: "",
      activeField: "",
      activeFieldValue: "",
      getDeliveryRequestDetails: {},
      activeCurrencyTariff: {},
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
      viewCurrencyTariff: false,
      headers: [{
        text: "Ammount Range",
        align: "left",
        sortable: false,
        value: "minAmmount"
      }, {
        text: "Sending Fee",
        value: "sending"
      }, {
        text: "Withdraw Fee",
        value: "withdraw"
      }, {
        text: "Payments Fee",
        value: "payments"
      }, {
        text: "Min Tax",
        value: "minTax"
      }, {
        text: "Max Tax",
        value: "maxTax"
      }],
      withdrowTariffEnabled: false,
      depositTariffEnabled: false,
      depositChargesEnabled: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadPaymentMethodCurencyDetails", this.$route.params.currencyCode);
    this.$store.dispatch("fetchPaymentMethodStatistics", this.$route.params.code);
    this.$store.dispatch("fetchPaymentMethodCurrencyTariffs", this.$route.params.currencyCode);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["paymentMethodCurrencyTariffs", "paymentMethodCurencyDetails", "paymentMethodStatistics"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getPaymentMethodCurrencyTariffs", "messageAlert", "getPaymentMethodCurencyDetails", "getPaymentMethodStatistics"])),
  created: function created() {},
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: "Success",
          text: val.body
        });
        this.$store.dispatch("loadPaymentMethodCurencyDetails", this.$route.params.currencyCode);
        this.$store.dispatch("fetchPaymentMethodStatistics", this.$route.params.code);
        this.$store.dispatch("fetchPaymentMethodCurrencyTariffs", this.$route.params.currencyCode);
      }
    },
    getPaymentMethodCurencyDetails: function getPaymentMethodCurencyDetails(val) {
      if (val != null) {
        this.withdrowTariffEnabled = val.withdrowTariffEnabled == "true" ? true : false;
        this.depositTariffEnabled = val.depositTariffEnabled == "true" ? true : false;
        this.depositChargesEnabled = val.depositChargesEnabled == "true" ? true : false;
      }
    }
  },
  methods: {
    updateConfig: function updateConfig() {
      this.$store.dispatch("updatePaymentMethodCurrencyConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        paymentMethodCode: this.$route.params.currencyCode
      });
      this.dialogEditConfig = false;
    },
    AddNewTariff: function AddNewTariff() {
      this.newTariff.code = this.$route.params.currencyCode;
      this.newTariff.currency = this.$route.params.code;
      this.$store.dispatch("addNewPaymentMethodCurrencyTariff", this.newTariff);
      this.dialogAddTariff = false;
    },
    UpdateActiveCurrencyTariff: function UpdateActiveCurrencyTariff() {
      this.$store.dispatch("updatePaymentMethodCurrencyTariff", this.activeCurrencyTariff);
      this.dialogEditTariff = false;
    },
    OpenEditModule: function OpenEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditConfig = true;
    },
    OpenEditConfigLocation: function OpenEditConfigLocation() {
      this.dialogAddTariff = true;
    },
    displayCurrencyTariff: function displayCurrencyTariff(currency) {
      this.activeCurrencyTariff = currency;
      this.viewCurrencyTariff = true;
    },
    deleteCurrencyTariff: function deleteCurrencyTariff(activeCurrencyTariff) {
      this.viewCurrencyTariff = false;
      this.$store.dispatch("deletePaymentMethodCurrencyTariffs", activeCurrencyTariff.id);
    },
    openEditTariffDialog: function openEditTariffDialog() {
      this.viewCurrencyTariff = false;
      this.dialogEditTariff = true;
    },
    switchDepositTariffsStatus: function switchDepositTariffsStatus() {
      this.$store.dispatch("updatePaymentMethodCurrencyConfig", {
        activeFieldId: "depositTariffEnabled",
        activeFieldLabel: "Deposit Tariff",
        activeFieldValue: this.depositTariffEnabled,
        paymentMethodCode: this.$route.params.currencyCode
      });
    },
    switchWithdrowTariffsStatus: function switchWithdrowTariffsStatus() {
      this.$store.dispatch("updatePaymentMethodCurrencyConfig", {
        activeFieldId: "withdrowTariffEnabled",
        activeFieldLabel: "Withdrow Tariff",
        activeFieldValue: this.withdrowTariffEnabled,
        paymentMethodCode: this.$route.params.currencyCode
      });
    },
    switchDepositChargesEnabledStatus: function switchDepositChargesEnabledStatus() {
      this.$store.dispatch("updatePaymentMethodCurrencyConfig", {
        activeFieldId: "depositChargesEnabled",
        activeFieldLabel: "Depost Charges Status",
        activeFieldValue: this.depositChargesEnabled,
        paymentMethodCode: this.$route.params.currencyCode
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=template&id=703c612e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=template&id=703c612e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n              " + _vm._s(_vm.getPaymentMethodCurencyDetails.code) + "\n            ")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "font-weight-light",
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogAddTariff = true;
      }
    }
  }, [_vm._v("\n              Add Tariff\n            ")])], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
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
  }, [_vm._v("Config")])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("v-switch", {
    attrs: {
      inset: "",
      label: "Deposit Charges",
      outlined: "",
      dense: ""
    },
    on: {
      change: _vm.switchDepositChargesEnabledStatus
    },
    model: {
      value: _vm.depositChargesEnabled,
      callback: function callback($$v) {
        _vm.depositChargesEnabled = $$v;
      },
      expression: "depositChargesEnabled"
    }
  }), _vm._v(" "), _c("v-switch", {
    attrs: {
      inset: "",
      label: "Withdrow Tariffs",
      outlined: "",
      dense: ""
    },
    on: {
      change: _vm.switchWithdrowTariffsStatus
    },
    model: {
      value: _vm.withdrowTariffEnabled,
      callback: function callback($$v) {
        _vm.withdrowTariffEnabled = $$v;
      },
      expression: "withdrowTariffEnabled"
    }
  }), _vm._v(" "), _c("v-switch", {
    attrs: {
      inset: "",
      label: "Deposit Tariffs",
      outlined: "",
      dense: ""
    },
    on: {
      change: _vm.switchDepositTariffsStatus
    },
    model: {
      value: _vm.depositTariffEnabled,
      callback: function callback($$v) {
        _vm.depositTariffEnabled = $$v;
      },
      expression: "depositTariffEnabled"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("Exchange Rate:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.exchangeRate) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("exchangeRate", "Exchange Rate", _vm.getPaymentMethodCurencyDetails.exchangeRate || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Buy:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.buy) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("buy", "Buy Price", _vm.getPaymentMethodCurencyDetails.buy || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Sell:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.sell) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("sell", "Sell Price", _vm.getPaymentMethodCurencyDetails.sell || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Charge Percentage:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.chargePercentage) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("chargePercentage", "Charge Percentage", _vm.getPaymentMethodCurencyDetails.chargePercentage || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Txn Fee:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.transactionFee) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("transactionFee", "Transaction Fee", _vm.getPaymentMethodCurencyDetails.transactionFee || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Currency:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.currency) + "\n                    ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Max Withdrow Limite:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.maxWithdrowLimit) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("maxWithdrowLimit", "Max Withdrow Limit", _vm.getPaymentMethodCurencyDetails.maxWithdrowLimit || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Min Withdrow Limite:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.minWithdrowLimit) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("minWithdrowLimit", "Min Withdrow Limit", _vm.getPaymentMethodCurencyDetails.minWithdrowLimit || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Max Deposit Limite:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.maxDepositLimit) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("maxDepositLimit", "Max Deposit Limit", _vm.getPaymentMethodCurencyDetails.maxDepositLimit || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("\n                      Min Deposit Limite:\n                      " + _vm._s(_vm.getPaymentMethodCurencyDetails.minDepositLimit) + "\n                      "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("minDepositLimit", "Min Deposit Limit", _vm.getPaymentMethodCurencyDetails.minDepositLimit || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1)])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
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
      value: _vm.viewCurrencyTariff,
      callback: function callback($$v) {
        _vm.viewCurrencyTariff = $$v;
      },
      expression: "viewCurrencyTariff"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            " + _vm._s("".concat(_vm.activeCurrencyTariff.minAmmount, " - ").concat(_vm.activeCurrencyTariff.maxAmmount, " (").concat(_vm.getPaymentMethodCurencyDetails.currency, ")")) + "\n          ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n              " + _vm._s(_vm.activeCurrencyTariff.code) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n              Sending Fee:\n              " + _vm._s(_vm.activeCurrencyTariff.sending) + "\n              "), _c("br"), _vm._v("\n              Withdraw Fee:\n              " + _vm._s(_vm.activeCurrencyTariff.withdraw) + "\n              "), _c("br"), _vm._v("\n              Payments Fee:\n              " + _vm._s(_vm.activeCurrencyTariff.payments) + "\n              "), _c("br"), _vm._v("\n              Min Tax:\n              " + _vm._s(_vm.activeCurrencyTariff.minTax) + "\n              "), _c("br"), _vm._v("\n              Max Tax:\n              " + _vm._s(_vm.activeCurrencyTariff.maxTax) + "\n              "), _c("br"), _vm._v("\n              Created:\n              " + _vm._s(_vm.activeCurrencyTariff.created_at) + "\n            ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteCurrencyTariff(_vm.activeCurrencyTariff);
      }
    }
  }, [_vm._v("Delete")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: _vm.openEditTariffDialog
    }
  }, [_vm._v("Edit")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "600"
    },
    model: {
      value: _vm.dialogAddTariff,
      callback: function callback($$v) {
        _vm.dialogAddTariff = $$v;
      },
      expression: "dialogAddTariff"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v("Add New Tariff")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-text", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Min Ammount",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newTariff.minAmmount,
      callback: function callback($$v) {
        _vm.$set(_vm.newTariff, "minAmmount", $$v);
      },
      expression: "newTariff.minAmmount"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Max Ammount",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newTariff.maxAmmount,
      callback: function callback($$v) {
        _vm.$set(_vm.newTariff, "maxAmmount", $$v);
      },
      expression: "newTariff.maxAmmount"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Sending Fee",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newTariff.sending,
      callback: function callback($$v) {
        _vm.$set(_vm.newTariff, "sending", $$v);
      },
      expression: "newTariff.sending"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Withdraw Fee",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newTariff.withdraw,
      callback: function callback($$v) {
        _vm.$set(_vm.newTariff, "withdraw", $$v);
      },
      expression: "newTariff.withdraw"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Payments Fee",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newTariff.payments,
      callback: function callback($$v) {
        _vm.$set(_vm.newTariff, "payments", $$v);
      },
      expression: "newTariff.payments"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Min Tax",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newTariff.minTax,
      callback: function callback($$v) {
        _vm.$set(_vm.newTariff, "minTax", $$v);
      },
      expression: "newTariff.minTax"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Max Tax",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newTariff.maxTax,
      callback: function callback($$v) {
        _vm.$set(_vm.newTariff, "maxTax", $$v);
      },
      expression: "newTariff.maxTax"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogAddTariff = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.AddNewTariff
    }
  }, [_vm._v("Add Tariff")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "600"
    },
    model: {
      value: _vm.dialogEditTariff,
      callback: function callback($$v) {
        _vm.dialogEditTariff = $$v;
      },
      expression: "dialogEditTariff"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v("Edit Tariff")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-text", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Min Ammount",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeCurrencyTariff.minAmmount,
      callback: function callback($$v) {
        _vm.$set(_vm.activeCurrencyTariff, "minAmmount", $$v);
      },
      expression: "activeCurrencyTariff.minAmmount"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Max Ammount",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeCurrencyTariff.maxAmmount,
      callback: function callback($$v) {
        _vm.$set(_vm.activeCurrencyTariff, "maxAmmount", $$v);
      },
      expression: "activeCurrencyTariff.maxAmmount"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Sending Fee",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeCurrencyTariff.sending,
      callback: function callback($$v) {
        _vm.$set(_vm.activeCurrencyTariff, "sending", $$v);
      },
      expression: "activeCurrencyTariff.sending"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Withdraw Fee",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeCurrencyTariff.withdraw,
      callback: function callback($$v) {
        _vm.$set(_vm.activeCurrencyTariff, "withdraw", $$v);
      },
      expression: "activeCurrencyTariff.withdraw"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Payments Fee",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeCurrencyTariff.payments,
      callback: function callback($$v) {
        _vm.$set(_vm.activeCurrencyTariff, "payments", $$v);
      },
      expression: "activeCurrencyTariff.payments"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Min Tax",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeCurrencyTariff.minTax,
      callback: function callback($$v) {
        _vm.$set(_vm.activeCurrencyTariff, "minTax", $$v);
      },
      expression: "activeCurrencyTariff.minTax"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Max Tax",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeCurrencyTariff.maxTax,
      callback: function callback($$v) {
        _vm.$set(_vm.activeCurrencyTariff, "maxTax", $$v);
      },
      expression: "activeCurrencyTariff.maxTax"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogEditTariff = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.UpdateActiveCurrencyTariff
    }
  }, [_vm._v("Update")])], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("h4", {
    staticClass: "font-weight-bold mb-0"
  }, [_vm._v("Tariffs")]), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-2"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getPaymentMethodCurrencyTariffs,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displayCurrencyTariff(item);
            }
          }
        }, [_c("td", [_vm._v(_vm._s("".concat(item.minAmmount, " - ").concat(item.maxAmmount)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.sending))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.withdraw))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.payments))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.minTax))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.maxTax))])])];
      }
    }])
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/PaymentMethodCurrency.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/dashboard/PaymentMethodCurrency.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentMethodCurrency_vue_vue_type_template_id_703c612e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentMethodCurrency.vue?vue&type=template&id=703c612e& */ "./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=template&id=703c612e&");
/* harmony import */ var _PaymentMethodCurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentMethodCurrency.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentMethodCurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentMethodCurrency_vue_vue_type_template_id_703c612e___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentMethodCurrency_vue_vue_type_template_id_703c612e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/PaymentMethodCurrency.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentMethodCurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentMethodCurrency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentMethodCurrency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=template&id=703c612e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=template&id=703c612e& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentMethodCurrency_vue_vue_type_template_id_703c612e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentMethodCurrency_vue_vue_type_template_id_703c612e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentMethodCurrency_vue_vue_type_template_id_703c612e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentMethodCurrency.vue?vue&type=template&id=703c612e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/PaymentMethodCurrency.vue?vue&type=template&id=703c612e&");


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