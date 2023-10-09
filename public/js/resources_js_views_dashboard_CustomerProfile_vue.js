"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_CustomerProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FundUserWallet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FundUserWallet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data"],
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      findFriendsDialog: false,
      fundingDetails: {
        conditionValue: null
      },
      activeCurrency: {},
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
    this.$store.dispatch("loadPaymentMethods");
    this.$store.dispatch("fetchSupportedCountries");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["paymentMethods", "paymentMethodCurencies"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getPaymentMethods", "getPaymentMethodCurencies"])),
  watch: {
    queryText: function queryText(val) {
      if (val != null) {
        this.$store.dispatch("searchUsers", val);
      }
    }
  },
  methods: {
    searchUsers: function searchUsers() {
      this.$store.dispatch("searchUsers", this.queryText);
    },
    openUserPublicProfile: function openUserPublicProfile(userId) {
      this.$router.push({
        path: "/userPublicProfile",
        query: {
          userIndex: userId
        }
      });
    },
    fetchCurrencies: function fetchCurrencies() {
      this.$store.dispatch("loadPaymentMethodCurencies", this.fundingDetails.payment_method);
    },
    setPaymentCategory: function setPaymentCategory() {
      var context = this;
      context.getPaymentMethods.forEach(function (data) {
        if (context.fundingDetails.payment_method === data.code) {
          context.fundingDetails.paymentCategory = data.category;
        }
      });
      context.getPaymentMethodCurencies.forEach(function (data) {
        if (context.fundingDetails.payment_method_currency === data.code) {
          context.activeCurrency = data;
        }
      });
    },
    fundTheWallet: function fundTheWallet() {
      this.fundingDetails.userId = this.$route.query.userId;
      this.$store.dispatch("createCustomerTopupRequest", this.fundingDetails);
      this.findFriendsDialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CustomerProfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CustomerProfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_FundUserWallet_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/FundUserWallet.vue */ "./resources/js/components/FundUserWallet.vue");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FundUserWallet: _components_FundUserWallet_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.uploads,
      theme: false,
      menuItems: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.mainMenuItems,
      dialogActiveAccount: false,
      activeProfile: {},
      transactions_headers: [{
        text: "Image",
        align: "left",
        sortable: false,
        value: "profile_picture"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Provider",
        value: "provider"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "External Id",
        value: "externalId"
      }, {
        text: "gross",
        value: "gross"
      }, {
        text: "Fee",
        value: "fee"
      }, {
        text: "Net",
        value: "net"
      }, {
        text: "Time",
        value: "created_at"
      }],
      friends_headers: [{
        text: "ID",
        align: "left",
        sortable: false,
        value: "id"
      }, {
        text: "Avator",
        value: "profile_picture"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Email",
        value: "email"
      }, {
        text: "Email Varified",
        value: "email_verified"
      }, {
        text: "Join Date",
        value: "created_at"
      }],
      tab: 0,
      tabs: [{
        name: "Transactions"
      }, {
        name: "Friends"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("fetchCustomerFriends", this.$route.params.userId);
    this.$store.dispatch("getSelectedUserProfile", this.$route.params.userId);
    this.$store.dispatch("loadUserTransactions", this.$route.params.userId);
    this.$store.dispatch("getUserCustomerCareChatGroupId", this.$route.params.userId);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["userTransactions", "myUserProfile", "customerFriends", "selectedUser", "userCustomerCareChatGroupId"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["messageAlert", "getUserTransactions", "myUserProfile", "getCustomerFriends", "userSelected", "getUserCustomerCareChatGroupId"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_3__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$store.dispatch("getSelectedUserProfile", this.$route.params.userId);
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("fetchCustomerFriends", this.$route.params.userId);
        this.$store.dispatch("fetchUserCompleteDeliveryRequest");
        this.$store.dispatch("fetchUserDeliveryRequest");
      }
    },
    $route: function $route(to, from) {
      this.$store.dispatch("getMyProfile");
      this.$store.dispatch("fetchCustomerFriends", this.$route.params.userId);
      this.$store.dispatch("getSelectedUserProfile", this.$route.params.userId);
      this.$store.dispatch("loadUserTransactions", this.$route.params.userId);
    }
  },
  methods: {
    viewProfile: function viewProfile(activeProfile) {
      this.$router.push({
        path: "/admin/customers/" + activeProfile.accountId,
        query: {
          userId: activeProfile.accountId
        }
      });
      this.dialogActiveAccount = false;
    },
    createCampaign: function createCampaign() {
      this.$router.push({
        path: "/createCampaign",
        query: {
          action: "newCampaign"
        }
      });
    },
    OpenUserInfo: function OpenUserInfo(item) {
      this.activeProfile = item;
      this.dialogActiveAccount = true;
    },
    readMessage: function readMessage() {
      this.$router.push({
        path: "/admin/ccInbox/ccChat",
        query: {
          chatId: this.getUserCustomerCareChatGroupId,
          userId: this.$route.params.userId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FundUserWallet.vue?vue&type=template&id=3dc9da18&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FundUserWallet.vue?vue&type=template&id=3dc9da18& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", [_c("v-row", [_c("v-btn", {
    attrs: {
      outlined: "",
      rounded: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.findFriendsDialog = true;
      }
    }
  }, [_vm._v("\n            Fund Wallet\n        ")]), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.findFriendsDialog,
      callback: function callback($$v) {
        _vm.findFriendsDialog = $$v;
      },
      expression: "findFriendsDialog"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v("Fund Wallet")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", [_c("v-card-text", [_c("v-form", {
    ref: "paymentInfoForm",
    attrs: {
      "lazy-validation": ""
    }
  }, [_c("v-select", {
    attrs: {
      rules: [_vm.rules.required],
      items: _vm.getPaymentMethods,
      label: "Payment Method",
      "item-text": "label",
      "item-value": "code",
      outlined: "",
      dense: ""
    },
    on: {
      change: _vm.fetchCurrencies
    },
    model: {
      value: _vm.fundingDetails.payment_method,
      callback: function callback($$v) {
        _vm.$set(_vm.fundingDetails, "payment_method", $$v);
      },
      expression: "\n                                            fundingDetails.payment_method\n                                        "
    }
  }), _vm._v(" "), _vm.fundingDetails.payment_method != null ? _c("v-select", {
    attrs: {
      rules: [_vm.rules.required],
      items: _vm.getPaymentMethodCurencies,
      label: "Currency",
      "item-text": "name",
      "item-value": "code",
      outlined: "",
      dense: ""
    },
    on: {
      change: _vm.setPaymentCategory
    },
    model: {
      value: _vm.fundingDetails.payment_method_currency,
      callback: function callback($$v) {
        _vm.$set(_vm.fundingDetails, "payment_method_currency", $$v);
      },
      expression: "\n                                            fundingDetails.payment_method_currency\n                                        "
    }
  }) : _vm._e(), _vm._v(" "), _vm.fundingDetails.payment_method != null ? _c("v-text-field", {
    attrs: {
      rules: [_vm.rules.required],
      label: "Ammount",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.fundingDetails.gross,
      callback: function callback($$v) {
        _vm.$set(_vm.fundingDetails, "gross", $$v);
      },
      expression: "fundingDetails.gross"
    }
  }) : _vm._e(), _vm._v(" "), _vm.fundingDetails.paymentCategory == "MOBILE_MONEY" ? _c("v-text-field", {
    attrs: {
      rules: [_vm.rules.required],
      label: "Phone",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.fundingDetails.conditionValue,
      callback: function callback($$v) {
        _vm.$set(_vm.fundingDetails, "conditionValue", $$v);
      },
      expression: "\n                                            fundingDetails.conditionValue\n                                        "
    }
  }) : _vm._e(), _vm._v(" "), _vm.fundingDetails.paymentCategory == "BANK_TRANSFER" ? _c("v-text-field", {
    attrs: {
      rules: [_vm.rules.required],
      label: "Reference",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.fundingDetails.conditionValue,
      callback: function callback($$v) {
        _vm.$set(_vm.fundingDetails, "conditionValue", $$v);
      },
      expression: "\n                                            fundingDetails.conditionValue\n                                        "
    }
  }) : _vm._e(), _vm._v(" "), _vm.fundingDetails.paymentCategory == "PAYPAL" ? _c("v-text-field", {
    attrs: {
      rules: [_vm.rules.required],
      label: "Reason",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.fundingDetails.description,
      callback: function callback($$v) {
        _vm.$set(_vm.fundingDetails, "description", $$v);
      },
      expression: "fundingDetails.description"
    }
  }) : _vm._e(), _vm._v(" "), _c("h5", [_vm._v("\n                                        TO DEPOSIT: UGX\n                                        " + _vm._s(_vm.fundingDetails.gross * _vm.activeCurrency.exchangeRate) + "\n                                    ")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "success",
      outlined: ""
    }
  }, [_vm._v("Chat")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "red"
    },
    on: {
      click: function click($event) {
        _vm.findFriendsDialog = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: _vm.fundTheWallet
    }
  }, [_vm._v("Send")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CustomerProfile.vue?vue&type=template&id=9b03eb3e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CustomerProfile.vue?vue&type=template&id=9b03eb3e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    attrs: {
      width: "100%"
    }
  }, [_c("div", [_c("v-row", [_c("v-col", {
    staticClass: "py-6 pa-5",
    attrs: {
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-0",
    attrs: {
      lg: "12",
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      xxs: "12"
    }
  }, [_c("v-card", {
    staticClass: "mb-1 pa-1"
  }, [_c("v-row", {
    staticClass: "pa-1"
  }, [_c("v-col", {
    staticClass: "center relative",
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", {
    staticClass: "mx-auto",
    attrs: {
      tile: ""
    }
  }, [_c("v-img", {
    attrs: {
      height: "300",
      src: "".concat(_vm.uploads).concat(_vm.userSelected.cover_picture)
    }
  }), _vm._v(" "), _c("div", [_c("v-tooltip", {
    attrs: {
      top: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on;
        return [_c("v-btn", _vm._g({
          staticClass: "mx-0 my-10",
          attrs: {
            fab: "",
            small: "",
            color: "#32BCC3",
            absolute: "",
            right: "",
            top: "",
            dark: ""
          },
          on: {
            click: _vm.readMessage
          }
        }, on), [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("mdi-chat")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c("span", [_vm._v("Send\n                                                            Message")])])], 1), _vm._v(" "), _c("v-row", {
    staticStyle: {
      margin: "2.5%",
      position: "absolute",
      top: "220px"
    }
  }, [_c("v-list-item", {
    staticClass: "center relative",
    attrs: {
      center: ""
    }
  }, [_c("v-list-item-avatar", {
    staticClass: "center relative",
    attrs: {
      size: "150",
      center: ""
    }
  }, [_c("v-img", {
    staticClass: "card-img",
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.userSelected.profile_picture)
    }
  })], 1), _vm._v(" "), _c("v-list-item-content", [_c("v-list-item-title", {
    staticClass: "title",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_vm._v(_vm._s(_vm.userSelected.name))]), _vm._v(" "), _c("v-list-item-subtitle", [_vm._v(_vm._s(_vm.userSelected.email) + "\n                                                                |\n                                                                " + _vm._s(_vm.userSelected.phone))])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-12",
    staticStyle: {
      "margin-top": "50px"
    },
    attrs: {
      lg: "12",
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      lg: "4",
      cols: "12"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("v-row", {
    staticClass: "no-gutters"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "cyan fill-height"
  }, [_vm._v("\n                                                             \n                                                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 py-4 cyan--text"
  }, [_c("h5", {
    staticClass: "text-truncate text-uppercase"
  }, [_vm._v("\n                                                            BAL: UGX\n                                                            " + _vm._s(_vm.userSelected.wallet_balance > 0 ? _vm.userSelected.wallet_balance : "0.0") + "\n                                                        ")])]), _vm._v(" "), _c("v-card-actions", [_c("FundUserWallet")], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "8",
      cols: "12"
    }
  }, [_c("v-card", [_c("v-tabs", {
    staticClass: "fill-width",
    attrs: {
      "show-arrows": "",
      grow: "",
      height: "60px"
    },
    model: {
      value: _vm.tab,
      callback: function callback($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c("v-tabs-slider", {
    attrs: {
      color: "primary"
    }
  }), _vm._v(" "), _vm._l(_vm.tabs, function (t) {
    return _c("v-tab", {
      key: t
    }, [_c("div", {
      staticClass: "caption py-1"
    }, [_vm._v("\n                                                        " + _vm._s(t.name) + "\n                                                    ")])]);
  })], 2), _vm._v(" "), _c("v-tabs-items", {
    staticClass: "pa-4",
    attrs: {
      grow: ""
    },
    model: {
      value: _vm.tab,
      callback: function callback($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c("v-tab-item", [_c("v-data-table", {
    attrs: {
      headers: _vm.transactions_headers,
      items: _vm.getUserTransactions,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.openRequestDetails(item.id);
            }
          }
        }, [_c("td", [_c("img", {
          attrs: {
            src: "".concat(_vm.uploads).concat(item.profile_picture),
            width: "30px",
            height: "30px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.name) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.provider) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.status) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.externalId) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.currency) + "\n                                                                    " + _vm._s(item.gross) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.currency) + "\n                                                                    " + _vm._s(item.fee) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.currency) + "\n                                                                    " + _vm._s(item.net) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.created_at) + "\n                                                                ")])])];
      }
    }])
  })], 1), _vm._v(" "), _c("v-tab-item", [_c("v-data-table", {
    attrs: {
      headers: _vm.friends_headers,
      items: _vm.getCustomerFriends,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.OpenUserInfo(item);
            }
          }
        }, [_c("td", [_vm._v("\n                                                                    " + _vm._s(item.userId) + "\n                                                                ")]), _vm._v(" "), _c("td", [_c("img", {
          attrs: {
            src: item.profile_picture,
            width: "30px",
            height: "30px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.name) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.email) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.email_verified) + "\n                                                                ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                    " + _vm._s(item.created_at) + "\n                                                                ")])])];
      }
    }])
  })], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "420"
    },
    model: {
      value: _vm.dialogActiveAccount,
      callback: function callback($$v) {
        _vm.dialogActiveAccount = $$v;
      },
      expression: "dialogActiveAccount"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.activeProfile.name))])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card", {
    staticClass: "pa-5"
  }, [_c("v-card-title", [_c("v-img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.activeProfile.profile_picture),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", [_c("p", [_vm._v(_vm._s(_vm.activeProfile.email))]), _vm._v(" "), _c("span", {
    staticClass: "success--text subtitle-1"
  }, [_vm._v("\n                            Created: " + _vm._s(_vm.activeProfile.created_at) + "\n                        ")])])], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "success",
      outlined: ""
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "red"
    },
    on: {
      click: function click($event) {
        _vm.dialogActiveAccount = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.viewProfile(_vm.activeProfile);
      }
    }
  }, [_vm._v("View Profile")])], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/FundUserWallet.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/FundUserWallet.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FundUserWallet_vue_vue_type_template_id_3dc9da18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FundUserWallet.vue?vue&type=template&id=3dc9da18& */ "./resources/js/components/FundUserWallet.vue?vue&type=template&id=3dc9da18&");
/* harmony import */ var _FundUserWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FundUserWallet.vue?vue&type=script&lang=js& */ "./resources/js/components/FundUserWallet.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FundUserWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FundUserWallet_vue_vue_type_template_id_3dc9da18___WEBPACK_IMPORTED_MODULE_0__.render,
  _FundUserWallet_vue_vue_type_template_id_3dc9da18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FundUserWallet.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/CustomerProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/dashboard/CustomerProfile.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerProfile_vue_vue_type_template_id_9b03eb3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerProfile.vue?vue&type=template&id=9b03eb3e& */ "./resources/js/views/dashboard/CustomerProfile.vue?vue&type=template&id=9b03eb3e&");
/* harmony import */ var _CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/CustomerProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerProfile_vue_vue_type_template_id_9b03eb3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerProfile_vue_vue_type_template_id_9b03eb3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/CustomerProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FundUserWallet.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FundUserWallet.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundUserWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FundUserWallet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FundUserWallet.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundUserWallet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/CustomerProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/CustomerProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CustomerProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FundUserWallet.vue?vue&type=template&id=3dc9da18&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/FundUserWallet.vue?vue&type=template&id=3dc9da18& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundUserWallet_vue_vue_type_template_id_3dc9da18___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundUserWallet_vue_vue_type_template_id_3dc9da18___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FundUserWallet_vue_vue_type_template_id_3dc9da18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FundUserWallet.vue?vue&type=template&id=3dc9da18& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FundUserWallet.vue?vue&type=template&id=3dc9da18&");


/***/ }),

/***/ "./resources/js/views/dashboard/CustomerProfile.vue?vue&type=template&id=9b03eb3e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/CustomerProfile.vue?vue&type=template&id=9b03eb3e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_9b03eb3e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_9b03eb3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerProfile_vue_vue_type_template_id_9b03eb3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerProfile.vue?vue&type=template&id=9b03eb3e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/CustomerProfile.vue?vue&type=template&id=9b03eb3e&");


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