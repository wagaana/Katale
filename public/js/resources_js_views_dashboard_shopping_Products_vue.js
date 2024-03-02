"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_shopping_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/Products.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/Products.vue?vue&type=script&lang=js& ***!
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
      file: null,
      countries: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.countries,
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      escapeHtml: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.escapeHtml,
      productCompose: {},
      activeProduct: {},
      composeMessage: {},
      dialogAddProduct: false,
      dialogComposeEmail: false,
      viewShopingProduct: false,
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
        text: "Icon",
        value: "imageUrl"
      }, {
        text: "Label",
        align: "left",
        sortable: false,
        value: "label"
      }, {
        text: "Description",
        value: "short_description"
      }, {
        text: "Date Added",
        value: "created_at"
      }],
      systemUserLevels: [{
        id: "OWNER",
        label: "System Owner"
      }, {
        id: "EDITOR",
        label: "System Editor"
      }, {
        id: "VIEWER",
        label: "System Viewer"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("fetchShoppingCategories");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["products", "shoppingCategories", "shopingSubCategories", "shopingBrands", "shopingBrandsModels"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getProducts", "messageAlert", "getShoppingCategories", "getShopingSubCategories", "getShopingBrands", "getShopingBrandModels"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: "Success",
          text: val.body
        });
        this.$store.dispatch("loadProducts");
      }
    }
  },
  methods: {
    loadSubCategories: function loadSubCategories(categoryId) {
      this.$store.dispatch("fetchShopingSubCategories", categoryId);
      this.$store.dispatch("fetchShopingBrands", categoryId);
    },
    loadBrandModels: function loadBrandModels(brandId) {
      this.$store.dispatch("fetchShopingBrandModels", brandId);
    },
    loadCategory: function loadCategory(activeProduct) {
      this.activeProduct = activeProduct;
      this.viewShopingProduct = true;
    },
    deleteProduct: function deleteProduct(activeProduct) {
      this.$store.dispatch("deleteProduct", activeProduct.id);
      this.viewShopingProduct = false;
    },
    composeEmail: function composeEmail(user) {
      this.viewShopingProduct = false;
      this.dialogComposeEmail = true;
    },
    validateEmail: function validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.productCompose);
      }
    },
    sendEmail: function sendEmail() {
      alert("Sending");
    },
    validate: function validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createProduct(this.productCompose);
      }
    },
    createProduct: function createProduct(productCompose) {
      //send the message via API/server endpoint here
      this.dialogAddProduct = false;
      this.$store.dispatch("submitShopingProduct", productCompose);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/Products.vue?vue&type=template&id=0c188d3e&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/Products.vue?vue&type=template&id=0c188d3e& ***!
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
    staticClass: "col-md-10 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("Products")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v("Manage Products here")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "primary",
    attrs: {
      to: "/admin/shopping/createProduct"
    }
  }, [_vm._v("New")])], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getProducts,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.loadCategory(item);
            }
          }
        }, [_c("td", [_c("img", {
          attrs: {
            src: "".concat(item.thumbnail),
            width: "30px",
            height: "30px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.short_description))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.created_at))])])];
      }
    }])
  })], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogAddProduct,
      callback: function callback($$v) {
        _vm.dialogAddProduct = $$v;
      },
      expression: "dialogAddProduct"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        New Product\n      ")]), _vm._v(" "), _c("v-card-text", {
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
      label: "product Label",
      rules: [_vm.rules.required],
      autocomplete: "email",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.label,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "label", $$v);
      },
      expression: "productCompose.label"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "product Description",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.description,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "description", $$v);
      },
      expression: "productCompose.description"
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      items: _vm.getShoppingCategories,
      label: "Select Category",
      "item-text": "label",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    on: {
      change: function change($event) {
        return _vm.loadSubCategories(_vm.productCompose.categoryId);
      }
    },
    model: {
      value: _vm.productCompose.categoryId,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "categoryId", $$v);
      },
      expression: "productCompose.categoryId"
    }
  }), _vm._v(" "), _vm.productCompose.categoryId ? _c("v-select", {
    attrs: {
      items: _vm.getShopingSubCategories,
      label: "Select Sub Category",
      "item-text": "label",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.subCategoryId,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "subCategoryId", $$v);
      },
      expression: "productCompose.subCategoryId"
    }
  }) : _vm._e(), _vm._v(" "), _vm.productCompose.subCategoryId ? _c("v-select", {
    attrs: {
      items: _vm.getShopingBrands,
      label: "Select Brand",
      "item-text": "label",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    on: {
      change: function change($event) {
        return _vm.loadBrandModels(_vm.productCompose.brandId);
      }
    },
    model: {
      value: _vm.productCompose.brandId,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "brandId", $$v);
      },
      expression: "productCompose.brandId"
    }
  }) : _vm._e(), _vm._v(" "), _vm.productCompose.brandId ? _c("v-select", {
    attrs: {
      items: _vm.getShopingBrandModels,
      label: "Select Brand Model",
      "item-text": "label",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.brandModel,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "brandModel", $$v);
      },
      expression: "productCompose.brandModel"
    }
  }) : _vm._e(), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Cost Price",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.costPrice,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "costPrice", $$v);
      },
      expression: "productCompose.costPrice"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Sell Price",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.sellPrice,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "sellPrice", $$v);
      },
      expression: "productCompose.sellPrice"
    }
  }), _vm._v(" "), _c("v-checkbox", {
    attrs: {
      label: "On Discount",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.onDiscount,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "onDiscount", $$v);
      },
      expression: "productCompose.onDiscount"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Discount Price",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.discountPrice,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "discountPrice", $$v);
      },
      expression: "productCompose.discountPrice"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Items In Stock",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.itemsInStock,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "itemsInStock", $$v);
      },
      expression: "productCompose.itemsInStock"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Max Order Qty",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.maxOrder,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "maxOrder", $$v);
      },
      expression: "productCompose.maxOrder"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Min Order Qty",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.minOrder,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "minOrder", $$v);
      },
      expression: "productCompose.minOrder"
    }
  }), _vm._v(" "), _c("v-file-input", {
    attrs: {
      label: "Product Image",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productCompose.image,
      callback: function callback($$v) {
        _vm.$set(_vm.productCompose, "image", $$v);
      },
      expression: "productCompose.image"
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
        _vm.dialogAddProduct = false;
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
  }, [_vm._v("Add Product")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewShopingProduct,
      callback: function callback($$v) {
        _vm.viewShopingProduct = $$v;
      },
      expression: "viewShopingProduct"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        " + _vm._s(_vm.activeProduct.name) + "\n      ")]), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "".concat(_vm.activeProduct.thumbnail),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n          " + _vm._s(_vm.activeProduct.description) + "\n        ")]), _vm._v(" "), _c("p", [_vm._v("\n          Cost Price: " + _vm._s(_vm.activeProduct.purchase_cost) + "\n          "), _c("br"), _vm._v("\n          Sell Price: " + _vm._s(_vm.activeProduct.price) + "\n          "), _c("br"), _vm._v("\n          Is Featured: " + _vm._s(_vm.activeProduct.is_featured) + "\n          "), _c("br"), _vm._v("\n          DATE: " + _vm._s(_vm.activeProduct.created_at) + "\n        ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteProduct(_vm.activeProduct);
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
        _vm.viewShopingProduct = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      to: "/admin/shopping/products/".concat(_vm.activeProduct.id === undefined ? "" : _vm.activeProduct.id),
      outlined: "",
      color: "primary"
    }
  }, [_vm._v("Details")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/shopping/Products.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/Products.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_0c188d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=0c188d3e& */ "./resources/js/views/dashboard/shopping/Products.vue?vue&type=template&id=0c188d3e&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/shopping/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_0c188d3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_0c188d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/shopping/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/Products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/Products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/Products.vue?vue&type=template&id=0c188d3e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/Products.vue?vue&type=template&id=0c188d3e& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_0c188d3e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_0c188d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_0c188d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=0c188d3e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/Products.vue?vue&type=template&id=0c188d3e&");


/***/ })

}]);