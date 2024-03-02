"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_shopping_ProductsSubCategoryBrandDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      dialogEditConfig: false,
      dialogEditQueryParameter: false,
      dialogEditConfigLocation: false,
      dialogBrandModelCompose: false,
      dialogSpecificationCompose: false,
      activeFieldLabel: "",
      activeField: "",
      field: "",
      activeLabel: "",
      activeFieldValue: "",
      subCategoryCompose: {},
      brandCompose: {},
      getDeliveryRequestDetails: {},
      activeBrandModel: {},
      specificationCompose: {},
      activeSpecificationModel: {},
      viewBrandModel: false,
      valid: false,
      brandValid: false,
      specificationValid: false,
      viewSpecificationModel: false,
      rules: {
        required: function required(value) {
          return !!value || "This field is required";
        },
        email: function email(v) {
          return /.+@.+\..+/.test(v) || "Must be a valid email";
        }
      },
      headers: [{
        text: "Icon",
        value: "imageUrl"
      }, {
        text: "Label",
        align: "left",
        sortable: false,
        value: "label"
      }, {
        text: "Description",
        value: "description"
      }, {
        text: "Author",
        value: "name"
      }, {
        text: "Date Added",
        value: "created_at"
      }],
      specificationsHeaders: [{
        text: "Label",
        align: "left",
        sortable: false,
        value: "label"
      }, {
        text: "Description",
        value: "description"
      }],
      brand_model_headers: [{
        text: "Model Label",
        value: "label"
      }, {
        text: "Manufactured Date",
        align: "left",
        sortable: false,
        value: "mfd"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("fetchShopingBrand", this.$route.params.id);
    this.$store.dispatch("fetchBrandShopingProducts", this.$route.params.id);
    this.$store.dispatch("fetchShopingBrandModels", this.$route.params.id);
    this.$store.dispatch("fetchBankStatistics", this.$route.params.id);
    this.$store.dispatch("loadShopingSpecifications", this.$route.params.id);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["brandShopingProducts", "shopingBrand", "bankStatistics", "shopingBrandsModels", "shopingSpecifications", "shoppingQueryParameter"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getShopingBrand", "getBrandShopingProducts", "messageAlert", "getBankStatistics", "getShopingBrandModels", "getShopingSpecifications", "getShoppingQueryParameter"])),
  created: function created() {},
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: "Success",
          text: val.body
        });
        this.$store.dispatch("fetchShopingBrand", this.$route.params.id);
        this.$store.dispatch("fetchBrandShopingProducts", this.$route.params.id);
        this.$store.dispatch("fetchShopingBrandModels", this.$route.params.id);
        this.$store.dispatch("fetchBankStatistics", this.$route.params.id);
        this.$store.dispatch("loadShopingSpecifications", this.$route.params.id);
        this.$store.dispatch("fetchShoppingQueryParameter", this.getShopingBrand.subCategoryId);
      }
    },
    getShopingBrand: function getShopingBrand(val) {
      if (val != null) {
        this.$store.dispatch("fetchShoppingQueryParameter", val.subCategoryId);
      }
    }
  },
  methods: {
    updateQueryParameterLabel: function updateQueryParameterLabel() {
      this.$store.dispatch("updateShoppingQueryParameterLabel", {
        label: this.activeLabel,
        parentId: this.getShopingBrand.subCategoryId,
        field: this.field
      });
      this.dialogEditQueryParameter = false;
    },
    OpenEditQueryParameterModule: function OpenEditQueryParameterModule(field) {
      this.dialogEditQueryParameter = true;
      this.activeLabel = this.getShoppingQueryParameter[field];
      this.field = field;
    },
    updateConfig: function updateConfig() {
      this.$store.dispatch("updateBankConfig", {
        activeFieldId: this.activeField,
        activeFieldLabel: this.activeFieldLabel,
        activeFieldValue: this.activeFieldValue,
        bankCode: this.$route.params.id
      });
      this.dialogEditConfig = false;
    },
    updateLocationConfig: function updateLocationConfig() {
      this.$store.dispatch("updateBankLocationConfig", {
        latitude: this.getShopingBrand.latitude,
        longitude: this.getShopingBrand.longitude,
        bankCode: this.$route.params.id
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
    displayBrandModelCompose: function displayBrandModelCompose(brandModel) {
      this.activeBrandModel = brandModel;
      this.viewBrandModel = true;
    },
    displaySpecificationsModel: function displaySpecificationsModel(specification) {
      this.activeSpecificationModel = specification;
      this.viewSpecificationModel = true;
    },
    ChagePaymentMethodStatus: function ChagePaymentMethodStatus() {
      this.$store.dispatch("updateBankConfig", {
        activeFieldId: "status",
        activeFieldLabel: "Status",
        activeFieldValue: this.getShopingBrand.status === "active" ? "not active" : "active",
        bankCode: this.$route.params.id
      });
    },
    validateBrand: function validateBrand() {
      if (this.$refs.brandForm.validate()) {
        // send it
        this.createBrand(this.brandCompose);
      }
    },
    validateSpecification: function validateSpecification() {
      if (this.$refs.specificationForm.validate()) {
        // send it
        this.dialogSpecificationCompose = false;
        this.specificationCompose["brandId"] = this.$route.params.id;
        this.specificationCompose["categoryId"] = this.getShopingBrand.categoryId;
        this.specificationCompose["subCategoryId"] = this.getShopingBrand.subCategoryId;
        this.$store.dispatch("submitShopingSpecification", this.specificationCompose);
      }
    },
    createBrand: function createBrand(brandCompose) {
      this.dialogBrandModelCompose = false;
      brandCompose["brandId"] = this.$route.params.id;
      this.$store.dispatch("submitShopingBrandModel", brandCompose);
    },
    deleteSpecificationModel: function deleteSpecificationModel(activeSpecificationModel) {
      this.$store.dispatch("deleteSpecificationModel", activeSpecificationModel.id);
      this.viewSpecificationModel = false;
    },
    deleteBrandModel: function deleteBrandModel(activeBrandModel) {
      this.$store.dispatch("deleteBrandModel", activeBrandModel.id);
      this.viewBrandModel = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n        " + _vm._s(_vm.getShopingBrand.label) + "\n      ")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v(" " + _vm._s(_vm.getShopingBrand.description))])]), _vm._v(" "), _c("v-col", {
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
  }, [_vm._v(_vm._s(_vm.getShopingBrand.status))])], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "font-weight-light",
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.ChagePaymentMethodStatus
    }
  }, [_vm._v("\n              " + _vm._s(_vm.getShopingBrand.status === "active" ? "Deactivate" : "Activate") + "\n            ")])], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
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
  }, [_vm.getShopingBrand.imageUrl ? _c("v-img", {
    attrs: {
      src: "/".concat(_vm.getShopingBrand.imageUrl)
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("Ads:\n                        " + _vm._s(_vm.getShopingBrand.adsCount) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("minLimit", "Minimum Limit", _vm.getShopingBrand.adsCount || 0.0);
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("views:\n                        " + _vm._s(_vm.getShopingBrand.views) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("maxLimit", "Maximum Limit", _vm.getShopingBrand.views || 0.0);
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
  }, [_vm._v("mdi-account")]), _vm._v("\n                        " + _vm._s(_vm.getShopingBrand.suport_name) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_name", "Suport Name", _vm.getShopingBrand.suport_name || 0.0);
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
  }, [_vm._v("mdi-phone")]), _vm._v("\n                        " + _vm._s(_vm.getShopingBrand.suport_phone) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_phone", "Suport Phone", _vm.getShopingBrand.suport_phone || 0.0);
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
  }, [_vm._v("mdi-at")]), _vm._v("\n                        " + _vm._s(_vm.getShopingBrand.suport_email) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_email", "Suport Email", _vm.getShopingBrand.suport_email || 0.0);
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
  }, [_vm._v("mdi-web")]), _vm._v("\n                        " + _vm._s(_vm.getShopingBrand.suport_website) + "\n                        "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditModule("suport_website", "Suport Website", _vm.getShopingBrand.suport_website || 0.0);
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
      href: "https://www.google.com/maps/search/?api=1&query=".concat(_vm.getShopingBrand.latitude, "%2C").concat(_vm.getShopingBrand.longitude)
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
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                        " + _vm._s(_vm.getShopingBrand.created_at) + "\n                      ")], 1), _vm._v(" "), _c("p", {
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
      value: _vm.viewBrandModel,
      callback: function callback($$v) {
        _vm.viewBrandModel = $$v;
      },
      expression: "viewBrandModel"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.getShopingBrand.label) + " " + _vm._s(_vm.activeBrandModel.label) + "\n          ")]), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "/".concat(_vm.activeBrandModel.imageUrl),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n              ADS: " + _vm._s(_vm.activeBrandModel.adsCount) + "\n              "), _c("br"), _vm._v("\n              VIEWS: " + _vm._s(_vm.activeBrandModel.views) + "\n              "), _c("br"), _vm._v("\n              DATE MFD: " + _vm._s(_vm.activeBrandModel.mfd) + "\n              "), _c("br"), _vm._v("\n              DATE ADDED: " + _vm._s(_vm.activeBrandModel.created_at) + "\n            ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteBrandModel(_vm.activeBrandModel);
      }
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
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
      value: _vm.getShopingBrand.latitude,
      callback: function callback($$v) {
        _vm.$set(_vm.getShopingBrand, "latitude", $$v);
      },
      expression: "getShopingBrand.latitude"
    }
  })], 1), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Longitude",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.getShopingBrand.longitude,
      callback: function callback($$v) {
        _vm.$set(_vm.getShopingBrand, "longitude", $$v);
      },
      expression: "getShopingBrand.longitude"
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
  }, [_vm._v("Update")])], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-6 pr-md-1 sm-2",
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "py-1 pa-0"
  }, [_c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-9 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("\n                  " + _vm._s(_vm.getShoppingQueryParameter.brandModelLabel) + "\n                  "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditQueryParameterModule("brandModelLabel");
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-3 pr-md-1 fill-width sm-6",
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-btn", {
    attrs: {
      outlined: "",
      rounded: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogBrandModelCompose = true;
      }
    }
  }, [_vm._v("Add New")])], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.brand_model_headers,
      items: _vm.getShopingBrandModels,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displayBrandModelCompose(item);
            }
          }
        }, [_c("td", [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.mfd))])])];
      }
    }])
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-6 pr-md-1 sm-2",
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", {
    staticClass: "py-1 pa-0"
  }, [_c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-9 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("Specifications")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-3 pr-md-1 fill-width sm-6",
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-btn", {
    attrs: {
      outlined: "",
      rounded: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogSpecificationCompose = true;
      }
    }
  }, [_vm._v("Add New")])], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.specificationsHeaders,
      items: _vm.getShopingSpecifications,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displaySpecificationsModel(item);
            }
          }
        }, [_c("td", [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.description))])])];
      }
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-12 pr-md-1 sm-2",
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "py-1 pa-0"
  }, [_c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-12 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("Brand Products")])])], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getBrandShopingProducts,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displayCurrency(item);
            }
          }
        }, [_c("td", [_c("img", {
          attrs: {
            src: "/".concat(item.imageUrl),
            width: "30px",
            height: "30px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.description))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.created_at))])])];
      }
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewSpecificationModel,
      callback: function callback($$v) {
        _vm.viewSpecificationModel = $$v;
      },
      expression: "viewSpecificationModel"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.activeSpecificationModel.label) + "\n          ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v(_vm._s(_vm.activeSpecificationModel.description))]), _vm._v(" "), _c("p", [_vm._v("\n              ADS: " + _vm._s(_vm.activeSpecificationModel.adsCount) + "\n              "), _c("br"), _vm._v("\n              DATE ADDED: " + _vm._s(_vm.activeSpecificationModel.created_at) + "\n            ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteSpecificationModel(_vm.activeSpecificationModel);
      }
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogSpecificationCompose,
      callback: function callback($$v) {
        _vm.dialogSpecificationCompose = $$v;
      },
      expression: "dialogSpecificationCompose"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            New Specification\n          ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "specificationForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.specificationValid,
      callback: function callback($$v) {
        _vm.specificationValid = $$v;
      },
      expression: "specificationValid"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Specification Name",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.specificationCompose.label,
      callback: function callback($$v) {
        _vm.$set(_vm.specificationCompose, "label", $$v);
      },
      expression: "specificationCompose.label"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "Specification description",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.specificationCompose.description,
      callback: function callback($$v) {
        _vm.$set(_vm.specificationCompose, "description", $$v);
      },
      expression: "specificationCompose.description"
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
        _vm.dialogSpecificationCompose = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.specificationValid
    },
    on: {
      click: _vm.validateSpecification
    }
  }, [_vm._v("Add Specifications")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogEditQueryParameter,
      callback: function callback($$v) {
        _vm.dialogEditQueryParameter = $$v;
      },
      expression: "dialogEditQueryParameter"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v("Edit Query Parameter")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "Label",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeLabel,
      callback: function callback($$v) {
        _vm.activeLabel = $$v;
      },
      expression: "activeLabel"
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
        _vm.dialogEditQueryParameter = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.updateQueryParameterLabel
    }
  }, [_vm._v("Update")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogBrandModelCompose,
      callback: function callback($$v) {
        _vm.dialogBrandModelCompose = $$v;
      },
      expression: "dialogBrandModelCompose"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            New Brand Model\n          ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "brandForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.brandValid,
      callback: function callback($$v) {
        _vm.brandValid = $$v;
      },
      expression: "brandValid"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Model Name",
      rules: [_vm.rules.required],
      autocomplete: "email",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.brandCompose.label,
      callback: function callback($$v) {
        _vm.$set(_vm.brandCompose, "label", $$v);
      },
      expression: "brandCompose.label"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Model Manufactured Date",
      rules: [_vm.rules.required],
      autocomplete: "email",
      outlined: "",
      dense: "",
      type: "date"
    },
    model: {
      value: _vm.brandCompose.mfd,
      callback: function callback($$v) {
        _vm.$set(_vm.brandCompose, "mfd", $$v);
      },
      expression: "brandCompose.mfd"
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
      disabled: !_vm.brandValid
    },
    on: {
      click: _vm.validateBrand
    }
  }, [_vm._v("Add Model")])], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductsSubCategoryBrandDetails_vue_vue_type_template_id_5acf1c48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48& */ "./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48&");
/* harmony import */ var _ProductsSubCategoryBrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsSubCategoryBrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsSubCategoryBrandDetails_vue_vue_type_template_id_5acf1c48___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductsSubCategoryBrandDetails_vue_vue_type_template_id_5acf1c48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryBrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryBrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryBrandDetails_vue_vue_type_template_id_5acf1c48___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryBrandDetails_vue_vue_type_template_id_5acf1c48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryBrandDetails_vue_vue_type_template_id_5acf1c48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryBrandDetails.vue?vue&type=template&id=5acf1c48&");


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