"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_Bank_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Bank.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Bank.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
      dialogEditConfigLocation: false,
      activeFieldLabel: "",
      activeField: "",
      activeFieldValue: "",
      getDeliveryRequestDetails: {},
      activeCurrency: {},
      viewCurrency: false,
      headers: [{
        text: "Currency",
        align: "left",
        sortable: false,
        value: "currency"
      }, {
        text: "Exchange Rate",
        value: "exchangeRate"
      }, {
        text: "Currency",
        value: "name"
      }, {
        text: "Country",
        value: "entity"
      }, {
        text: "Time Added",
        value: "created_at"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("fetchBank", this.$route.params.code);
    this.$store.dispatch("fetchBankStatistics", this.$route.params.code);
    this.$store.dispatch("loadBankCurencies", this.$route.params.code);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["bankCurencies", "bank", "bankStatistics"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getBankCurencies", "messageAlert", "getBank", "getBankStatistics"])),
  created: function created() {},
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: "Success",
          text: val.body
        });
        this.$store.dispatch("fetchBank", this.$route.params.code);
        this.$store.dispatch("fetchBankStatistics", this.$route.params.code);
        this.$store.dispatch("loadBankCurencies", this.$route.params.code);
      }
    }
  },
  methods: {
    updateConfig: function updateConfig() {
      this.$store.dispatch("updateBankConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        bankCode: this.$route.params.code
      });
      this.dialogEditConfig = false;
    },
    updateLocationConfig: function updateLocationConfig() {
      this.$store.dispatch("updateBankLocationConfig", {
        latitude: this.getBank.latitude,
        longitude: this.getBank.longitude,
        bankCode: this.$route.params.code
      });
      this.dialogEditConfigLocation = false;
    },
    OpenEditModule: function OpenEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditConfig = true;
    },
    OpenEditConfigLocation: function OpenEditConfigLocation() {
      this.dialogEditConfigLocation = true;
    },
    displayCurrency: function displayCurrency(currency) {
      this.activeCurrency = currency;
      this.viewCurrency = true;
    },
    ChagePaymentMethodStatus: function ChagePaymentMethodStatus() {
      this.$store.dispatch("updateBankConfig", {
        activeFieldId: "status",
        activeFieldLabel: "Status",
        activeFieldValue: this.getBank.status === "active" ? "not active" : "active",
        bankCode: this.$route.params.code
      });
    },
    OpenCuccencyDetails: function OpenCuccencyDetails(activeCurrency) {
      this.$router.push({
        path: "/admin/suportedBanks/" + this.$route.params.code + "/" + activeCurrency.code
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Bank.vue?vue&type=template&id=5be9d036&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Bank.vue?vue&type=template&id=5be9d036& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h2", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("\n        " + _vm._s(_vm.getBank.label) + "\n      ")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v(" " + _vm._s(_vm.getBank.description))])]), _vm._v(" "), _c("v-col", {
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
  }, [_c("p", {
    staticClass: "font-weight-light"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-checkbox-marked-circle-outline")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v(_vm._s(_vm.getBank.status))])], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "font-weight-light",
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.ChagePaymentMethodStatus
    }
  }, [_vm._v("\n              " + _vm._s(_vm.getBank.status === "active" ? "Deactivate" : "Activate") + "\n            ")])], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "4",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    attrs: {
      "min-width": "150",
      elevation: "12"
    }
  }, [_vm.getBank.image ? _c("v-img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.getBank.image)
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "8",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "py-2",
    attrs: {
      "min-height": "300",
      "min-width": "150",
      elevation: "1"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
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
  }, [_vm._v("Statistics")])]), _vm._v(" "), _c("v-col", {
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
  }, [_vm._v("mdi-bike")]), _vm._v("\n                        Total Orders:\n                        " + _vm._s(_vm.getBankStatistics.totalOrders !== undefined ? _vm.getBankStatistics.totalOrders : "0.0") + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-signal")]), _vm._v("\n                        Successful Transactions:\n                        " + _vm._s(_vm.getBankStatistics.successfulTransactions !== undefined ? _vm.getBankStatistics.successfulTransactions : "0.0") + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-signal-off")]), _vm._v("\n                        Failed Transactions:\n                        " + _vm._s(_vm.getBankStatistics.failedTransactions !== undefined ? _vm.getBankStatistics.failedTransactions : "0.0") + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-chart-bar")]), _vm._v("\n                        Usage:\n                        " + _vm._s(_vm.getBankStatistics.totalTransactions / _vm.getBankStatistics.successfulTransactions * 100) + "%\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("Minimum Limit (UGX):\n                        " + _vm._s(_vm.getBank.minLimit) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("minLimit", "Minimum Limit", _vm.getBank.minLimit || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("Maximum Limit (UGX):\n                        " + _vm._s(_vm.getBank.maxLimit) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("maxLimit", "Maximum Limit", _vm.getBank.maxLimit || 0.0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
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
  }, [_vm._v("mdi-account")]), _vm._v("\n                        " + _vm._s(_vm.getBank.suport_name) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_name", "Suport Name", _vm.getBank.suport_name || 0.0);
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
  }, [_vm._v("mdi-phone")]), _vm._v("\n                        " + _vm._s(_vm.getBank.suport_phone) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_phone", "Suport Phone", _vm.getBank.suport_phone || 0.0);
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
  }, [_vm._v("mdi-at")]), _vm._v("\n                        " + _vm._s(_vm.getBank.suport_email) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_email", "Suport Email", _vm.getBank.suport_email || 0.0);
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
  }, [_vm._v("mdi-web")]), _vm._v("\n                        " + _vm._s(_vm.getBank.suport_website) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_website", "Suport Website", _vm.getBank.suport_website || 0.0);
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
      href: "https://www.google.com/maps/search/?api=1&query=".concat(_vm.getBank.latitude, "%2C").concat(_vm.getBank.longitude)
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-map")]), _vm._v("\n                          Get Directions\n                        ")], 1), _vm._v(" "), _c("a", {
    on: {
      click: _vm.OpenEditConfigLocation
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)]), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                        " + _vm._s(_vm.getBank.created_at) + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-light"
  }, [_vm._v("\n                        " + _vm._s(_vm.data.address) + "\n                      ")])])], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
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
      value: _vm.viewCurrency,
      callback: function callback($$v) {
        _vm.viewCurrency = $$v;
      },
      expression: "viewCurrency"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.activeCurrency.name) + "\n          ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n              " + _vm._s(_vm.activeCurrency.code) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n              Exchange Rate:\n              " + _vm._s(_vm.activeCurrency.exchangeRate) + "\n              "), _c("br"), _vm._v("\n              Country:\n              " + _vm._s(_vm.activeCurrency.entity) + "\n              "), _c("br"), _vm._v("\n              Created:\n              " + _vm._s(_vm.activeCurrency.created_at) + "\n            ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteCurrency(_vm.activeCurrency);
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
        return _vm.OpenCuccencyDetails(_vm.activeCurrency);
      }
    }
  }, [_vm._v("Details")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
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
      value: _vm.getBank.latitude,
      callback: function callback($$v) {
        _vm.$set(_vm.getBank, "latitude", $$v);
      },
      expression: "getBank.latitude"
    }
  })], 1), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Longitude",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.getBank.longitude,
      callback: function callback($$v) {
        _vm.$set(_vm.getBank, "longitude", $$v);
      },
      expression: "getBank.longitude"
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
  }, [_vm._v("Update")])], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getBankCurencies,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displayCurrency(item);
            }
          }
        }, [_c("td", [_vm._v(_vm._s(item.currency))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.exchangeRate))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.entity))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.created_at))])])];
      }
    }])
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/Bank.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/dashboard/Bank.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bank_vue_vue_type_template_id_5be9d036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bank.vue?vue&type=template&id=5be9d036& */ "./resources/js/views/dashboard/Bank.vue?vue&type=template&id=5be9d036&");
/* harmony import */ var _Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bank.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Bank.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bank_vue_vue_type_template_id_5be9d036___WEBPACK_IMPORTED_MODULE_0__.render,
  _Bank_vue_vue_type_template_id_5be9d036___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Bank.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Bank.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/dashboard/Bank.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Bank.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Bank.vue?vue&type=template&id=5be9d036&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/dashboard/Bank.vue?vue&type=template&id=5be9d036& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_5be9d036___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_5be9d036___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_5be9d036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Bank.vue?vue&type=template&id=5be9d036& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Bank.vue?vue&type=template&id=5be9d036&");


/***/ })

}]);