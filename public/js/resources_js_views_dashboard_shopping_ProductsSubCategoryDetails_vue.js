"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_shopping_ProductsSubCategoryDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      dialogSubCategoryCompose: false,
      dialogEditQueryParameter: false,
      activeFieldLabel: "",
      activeField: "",
      activeLabel: "",
      field: null,
      subCategoryCompose: {},
      brandCompose: {},
      getDeliveryRequestDetails: {},
      activeSubCategory: {},
      activeBrand: {},
      viewSubCategoryProfile: false,
      viewBrandProfile: false,
      valid: false,
      brandValid: false,
      queryParameterValid: false,
      dialogCategoryBrandCompose: false,
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
      brand_headers: [{
        text: "Brand Icon",
        value: "imageUrl"
      }, {
        text: "Brand Label",
        align: "left",
        sortable: false,
        value: "label"
      }],
      query_param_headers: [{
        text: "Brand Label",
        align: "left",
        sortable: false,
        value: "label"
      }, {
        text: "Date Added",
        value: "created_at"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("fetchShopingSubCategoryBrands", this.$route.params.subCategoryId);
    this.$store.dispatch("fetchShopingChildSubCategories", this.$route.params.subCategoryId);
    this.$store.dispatch("fetchBankStatistics", this.$route.params.categoryId);
    this.$store.dispatch("fetchShopingSubCategory", this.$route.params.subCategoryId);
    this.$store.dispatch("fetchShoppingQueryParameter", this.$route.params.subCategoryId);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["shopingChildSubCategories", "bankStatistics", "shopingBrands", "shopingSubCategory", "shoppingQueryParameter"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getShopingChildSubCategories", "messageAlert", "getBankStatistics", "getShopingBrands", "getShopingSubCategory", "getShoppingQueryParameter"])),
  created: function created() {},
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: "Success",
          text: val.body
        });
        this.$store.dispatch("fetchShopingChildSubCategories", this.$route.params.subCategoryId);
        this.$store.dispatch("fetchShopingSubCategoryBrands", this.$route.params.subCategoryId);
        this.$store.dispatch("fetchBankStatistics", this.$route.params.categoryId);
        this.$store.dispatch("fetchShopingSubCategory", this.$route.params.subCategoryId);
        this.$store.dispatch("fetchShoppingQueryParameter", this.$route.params.subCategoryId);
      }
    }
  },
  methods: {
    updateQueryParameterLabel: function updateQueryParameterLabel() {
      this.$store.dispatch("updateShoppingQueryParameterLabel", {
        label: this.activeLabel,
        parentId: this.$route.params.subCategoryId,
        field: this.field
      });
      this.dialogEditQueryParameter = false;
    },
    OpenEditQueryParameterModule: function OpenEditQueryParameterModule(field) {
      this.dialogEditQueryParameter = true;
      this.activeLabel = this.getShoppingQueryParameter[field];
      this.field = field;
    },
    displaySubCategory: function displaySubCategory(subCategory) {
      this.activeSubCategory = subCategory;
      this.viewSubCategoryProfile = true;
    },
    displayBrand: function displayBrand(brand) {
      this.activeBrand = brand;
      this.viewBrandProfile = true;
    },
    ChagePaymentMethodStatus: function ChagePaymentMethodStatus() {
      this.$store.dispatch("updateBankConfig", {
        activeFieldId: "status",
        activeFieldLabel: "Status",
        activeFieldValue: this.getShopingSubCategory.status === "active" ? "not active" : "active",
        bankCode: this.$route.params.categoryId
      });
    },
    validate: function validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createSubCategory(this.subCategoryCompose);
      }
    },
    createSubCategory: function createSubCategory(subCategoryCompose) {
      this.dialogSubCategoryCompose = false;
      subCategoryCompose["categoryId"] = this.$route.params.categoryId;
      subCategoryCompose["parentId"] = this.$route.params.subCategoryId;
      this.$store.dispatch("submitShopingChildSubCategory", subCategoryCompose);
    },
    validateBrand: function validateBrand() {
      if (this.$refs.brandForm.validate()) {
        // send it
        this.createBrand(this.brandCompose);
      }
    },
    createBrand: function createBrand(brandCompose) {
      this.dialogCategoryBrandCompose = false;
      // brandCompose["categoryId"] = this.$route.params.categoryId;
      brandCompose["subCategoryId"] = this.$route.params.subCategoryId;
      this.$store.dispatch("submitShopingBrand", brandCompose);
    },
    deleteBrand: function deleteBrand(activeBrand) {
      this.$store.dispatch("deleteShopingBrands", activeBrand.id);
      this.viewBrandProfile = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n        " + _vm._s(_vm.getShopingSubCategory.label) + "\n      ")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v(" " + _vm._s(_vm.getShopingSubCategory.description))])]), _vm._v(" "), _c("v-col", {
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
  }, [_vm._v(_vm._s(_vm.getShopingSubCategory.status))])], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "font-weight-light",
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.ChagePaymentMethodStatus
    }
  }, [_vm._v("\n              " + _vm._s(_vm.getShopingSubCategory.status === "active" ? "Deactivate" : "Activate") + "\n            ")])], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
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
  }, [_vm.getShopingSubCategory.imageUrl ? _c("v-img", {
    attrs: {
      src: "/".concat(_vm.getShopingSubCategory.imageUrl)
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
      "min-height": "230",
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
  }, [_vm._v("mdi-currency-eur")]), _vm._v("Ads:\n                        " + _vm._s(_vm.getShopingSubCategory.adsCount) + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-eur")]), _vm._v("views:\n                        " + _vm._s(_vm.getShopingSubCategory.views) + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-calendar")]), _vm._v("\n                        " + _vm._s(_vm.getShopingSubCategory.created_at) + "\n                      ")], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
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
  }, [_vm._v("mdi-account")]), _vm._v("\n                        " + _vm._s(_vm.getShopingSubCategory.name) + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-phone")]), _vm._v("\n                        " + _vm._s(_vm.getShopingSubCategory.phone) + "\n                      ")], 1), _vm._v(" "), _c("p", {
    staticClass: "font-weight-bold"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-at")]), _vm._v("\n                        " + _vm._s(_vm.getShopingSubCategory.email) + "\n                      ")], 1)])], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.viewSubCategoryProfile,
      callback: function callback($$v) {
        _vm.viewSubCategoryProfile = $$v;
      },
      expression: "viewSubCategoryProfile"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.activeSubCategory.label) + "\n          ")]), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "/".concat(_vm.activeSubCategory.imageUrl),
      height: "200px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n              " + _vm._s(_vm.activeSubCategory.description) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n              ADS: " + _vm._s(_vm.activeSubCategory.adsCount) + "\n              "), _c("br"), _vm._v("\n              VIEWS: " + _vm._s(_vm.activeSubCategory.views) + "\n              "), _c("br"), _vm._v("\n              DATE: " + _vm._s(_vm.activeSubCategory.created_at) + "\n            ")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteCategory(_vm.activeSubCategory);
      }
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewBrandProfile,
      callback: function callback($$v) {
        _vm.viewBrandProfile = $$v;
      },
      expression: "viewBrandProfile"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            " + _vm._s(_vm.activeBrand.label) + "\n          ")]), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "/".concat(_vm.activeBrand.imageUrl),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n              " + _vm._s(_vm.activeBrand.description) + "\n            ")]), _vm._v(" "), _c("p", [_vm._v("\n              ADS: " + _vm._s(_vm.activeBrand.adsCount) + "\n              "), _c("br"), _vm._v("\n              VIEWS: " + _vm._s(_vm.activeBrand.views) + "\n              "), _c("br"), _vm._v("\n              DATE: " + _vm._s(_vm.activeBrand.created_at) + "\n            ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteBrand(_vm.activeBrand);
      }
    }
  }, [_vm._v("Delete")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "green"
    },
    on: {
      click: function click($event) {
        _vm.viewBrandProfile = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      to: "/admin/shopping/productsSubCategoryBrandDetails/".concat(_vm.activeBrand.id === undefined ? "" : _vm.activeBrand.id),
      outlined: "",
      color: "primary"
    }
  }, [_vm._v("Configure")])], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-7 pr-md-1 sm-2",
    attrs: {
      cols: "12",
      sm: "12"
    }
  }, [_c("v-card", {
    staticClass: "py-1 pa-0"
  }, [_c("v-card-actions", {
    staticClass: "pa-2"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("\n                " + _vm._s(_vm.getShoppingQueryParameter.label) + "\n                "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditQueryParameterModule("label");
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      color: "primary",
      outlined: "",
      rounded: ""
    },
    on: {
      click: function click($event) {
        _vm.dialogSubCategoryCompose = true;
      }
    }
  }, [_vm._v("Add New")])], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getShopingChildSubCategories,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displaySubCategory(item);
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
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-5 pr-md-1 sm-2",
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
    staticClass: "col-md-8 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("\n                  " + _vm._s(_vm.getShoppingQueryParameter.brandLabel) + "\n                  "), _c("a", {
    on: {
      click: function click($event) {
        return _vm.OpenEditQueryParameterModule("brandLabel");
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-pencil")])], 1)])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-4 pr-md-1 fill-width sm-6",
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
        _vm.dialogCategoryBrandCompose = true;
      }
    }
  }, [_vm._v("Add New")])], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.brand_headers,
      items: _vm.getShopingBrands,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displayBrand(item);
            }
          }
        }, [_c("td", [_c("img", {
          attrs: {
            src: "/".concat(item.imageUrl),
            width: "30px",
            height: "30px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.label))])])];
      }
    }])
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogSubCategoryCompose,
      callback: function callback($$v) {
        _vm.dialogSubCategoryCompose = $$v;
      },
      expression: "dialogSubCategoryCompose"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            New Sub Category\n          ")]), _vm._v(" "), _c("v-card-text", {
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
  }, [_c("v-text-field", {
    attrs: {
      label: "Sub Category Label",
      rules: [_vm.rules.required],
      autocomplete: "email",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.subCategoryCompose.label,
      callback: function callback($$v) {
        _vm.$set(_vm.subCategoryCompose, "label", $$v);
      },
      expression: "subCategoryCompose.label"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "Sub Category Description",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.subCategoryCompose.description,
      callback: function callback($$v) {
        _vm.$set(_vm.subCategoryCompose, "description", $$v);
      },
      expression: "subCategoryCompose.description"
    }
  }), _vm._v(" "), _c("v-file-input", {
    attrs: {
      label: "Sub Category Icon",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.subCategoryCompose.image,
      callback: function callback($$v) {
        _vm.$set(_vm.subCategoryCompose, "image", $$v);
      },
      expression: "subCategoryCompose.image"
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
  }, [_vm._v("Add Category")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
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
      value: _vm.dialogCategoryBrandCompose,
      callback: function callback($$v) {
        _vm.dialogCategoryBrandCompose = $$v;
      },
      expression: "dialogCategoryBrandCompose"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n            New Brand\n          ")]), _vm._v(" "), _c("v-card-text", {
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
      label: "Brand Label",
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
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "Brand Description",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.brandCompose.description,
      callback: function callback($$v) {
        _vm.$set(_vm.brandCompose, "description", $$v);
      },
      expression: "brandCompose.description"
    }
  }), _vm._v(" "), _c("v-file-input", {
    attrs: {
      label: "Brand Icon",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.brandCompose.image,
      callback: function callback($$v) {
        _vm.$set(_vm.brandCompose, "image", $$v);
      },
      expression: "brandCompose.image"
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
        _vm.dialogCategoryBrandCompose = false;
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
  }, [_vm._v("Add Brand")])], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductsSubCategoryDetails_vue_vue_type_template_id_553e0845___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845& */ "./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845&");
/* harmony import */ var _ProductsSubCategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsSubCategoryDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductsSubCategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsSubCategoryDetails_vue_vue_type_template_id_553e0845___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductsSubCategoryDetails_vue_vue_type_template_id_553e0845___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsSubCategoryDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryDetails_vue_vue_type_template_id_553e0845___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryDetails_vue_vue_type_template_id_553e0845___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsSubCategoryDetails_vue_vue_type_template_id_553e0845___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductsSubCategoryDetails.vue?vue&type=template&id=553e0845&");


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