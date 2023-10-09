"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_Translations_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Translations.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Translations.vue?vue&type=script&lang=js& ***!
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
      languages_options: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.languages_options,
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      mLocalization: {},
      translation: {},
      activeTranslation: {},
      composeMessage: {},
      dialogNewLocalization: false,
      createNewTranslation: false,
      viewTranslation: false,
      search: "",
      localization_valid: false,
      translation_valid: false,
      rules: {
        required: function required(value) {
          return !!value || "This field is required";
        },
        email: function email(v) {
          return /.+@.+\..+/.test(v) || "Must be a valid email";
        }
      },
      headers: [{
        text: "Key",
        align: "left",
        sortable: false,
        value: "translationkey"
      }, {
        text: "Value",
        value: "value"
      }, {
        text: "Language",
        value: "label"
      }, {
        text: "Time Added",
        value: "creationTime"
      }],
      categories: [{
        id: "ANIMAL",
        label: "Animal"
      }, {
        id: "CROP",
        label: "Crop"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadLocalizations");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["localization", "translations"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getLocalization", "getTranslations", "getActiveLanguage", "messageAlert"])),
  created: function created() {
    this.$store.dispatch("loadTranslations", this.getActiveLanguage !== undefined ? this.getActiveLanguage : "1");
  },
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        this.$store.dispatch("loadLocalizations");
        this.$store.dispatch("loadTranslations", this.getActiveLanguage !== undefined ? this.getActiveLanguage : "1");
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
      }
    },
    getActiveLanguage: function getActiveLanguage(val) {
      if (val != null) {
        this.$store.dispatch("loadLocalizations");
        this.$store.dispatch("loadTranslations", val);
      }
    }
  },
  methods: {
    loadTranslation: function loadTranslation(translation) {
      this.activeTranslation = translation;
      this.viewTranslation = true;
    },
    deleteTranslation: function deleteTranslation(translation) {
      this.viewTranslation = false;
      this.$store.dispatch("deleteTranslation", translation.id);
    },
    validateTranslationForm: function validateTranslationForm() {
      if (this.$refs.translationForm.validate()) {
        // send it
        this.createTranslation(this.translation);
      }
    },
    validateLocalization: function validateLocalization() {
      if (this.$refs.localizationForm.validate()) {
        // send it
        this.createLocalization(this.mLocalization);
      }
    },
    createTranslation: function createTranslation(translation) {
      this.createNewTranslation = false;
      translation.localizationId = this.getActiveLanguage;
      this.$store.dispatch("createTranslation", translation);
    },
    createLocalization: function createLocalization(mLocalization) {
      this.dialogNewLocalization = false;
      console.log("createLocalization", mLocalization);
      this.$store.dispatch("createLocalization", mLocalization);
    },
    setActiveLanguage: function setActiveLanguage(language) {
      this.createNewTranslation = false;
      this.$store.dispatch("setActiveLanguage", language);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Translations.vue?vue&type=template&id=d7ab2e48&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Translations.vue?vue&type=template&id=d7ab2e48& ***!
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
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("h1", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Translations")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v("Manage system Translation Settings Here")]), _vm._v(" "), _c("v-card", {
    staticClass: "py-6"
  }, [_c("v-row", {
    staticClass: "row px-2"
  }, [_c("v-col", {
    staticClass: "py-6",
    attrs: {
      lg: "3",
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "col-md-12"
  }, [_c("v-btn", {
    staticClass: "primary",
    attrs: {
      width: "100%"
    },
    on: {
      click: function click($event) {
        _vm.dialogNewLocalization = true;
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-plus")]), _vm._v("New\n                                    Localization")], 1)], 1)], 1), _vm._v(" "), _c("v-card", [_c("v-list", {
    attrs: {
      dense: "",
      nav: ""
    }
  }, _vm._l(_vm.getLocalization, function (item) {
    return _c("v-list-item", {
      key: item.title,
      attrs: {
        link: "",
        to: item.href,
        color: item.id + "" === _vm.getActiveLanguage + "" ? "red" : "black"
      },
      on: {
        click: function click($event) {
          return _vm.setActiveLanguage(item.id);
        }
      }
    }, [_c("v-list-item-icon", [item.id + "" === _vm.getActiveLanguage + "" ? _c("div", {
      staticClass: "cyan fill-height"
    }, [_vm._v("\n                                             \n                                        ")]) : _vm._e(), _vm._v("\n                                         \n                                        "), _c("v-icon", [_vm._v("mdi-translate")])], 1), _vm._v(" "), _c("v-list-item-content", [_c("v-list-item-title", [_vm._v(_vm._s("".concat(item.label, " (").concat(item.language, ")")))])], 1)], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-6",
    attrs: {
      lg: "9",
      cols: "12"
    }
  }, [_c("div", [_c("v-row", [_c("v-col", [_c("v-btn", {
    staticClass: "primary",
    on: {
      click: function click($event) {
        _vm.createNewTranslation = true;
      }
    }
  }, [_vm._v("New Translation")])], 1), _vm._v(" "), _c("v-col", [_c("v-text-field", {
    attrs: {
      "append-icon": "mdi-translate",
      label: "Search",
      "hide-details": "",
      dense: "",
      outlined: ""
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getTranslations,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.loadTranslation(item);
            }
          }
        }, [_c("td", [_vm._v("\n                                                " + _vm._s(item.translationkey) + "\n                                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.value))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.creationTime))])])];
      }
    }])
  })], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogNewLocalization,
      callback: function callback($$v) {
        _vm.dialogNewLocalization = $$v;
      },
      expression: "dialogNewLocalization"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n                                        Create Localization\n                                    ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "localizationForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.localization_valid,
      callback: function callback($$v) {
        _vm.localization_valid = $$v;
      },
      expression: "localization_valid"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Localization Name",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.mLocalization.label,
      callback: function callback($$v) {
        _vm.$set(_vm.mLocalization, "label", $$v);
      },
      expression: "\n                                                    mLocalization.label\n                                                "
    }
  }), _vm._v(" "), _c("v-autocomplete", {
    attrs: {
      items: _vm.languages_options,
      label: "Select Language",
      "item-text": "label",
      "item-value": "id",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.mLocalization.language,
      callback: function callback($$v) {
        _vm.$set(_vm.mLocalization, "language", $$v);
      },
      expression: "\n                                                    mLocalization.language\n                                                "
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
        _vm.dialogNewLocalization = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.localization_valid
    },
    on: {
      click: _vm.validateLocalization
    }
  }, [_vm._v("Create")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.createNewTranslation,
      callback: function callback($$v) {
        _vm.createNewTranslation = $$v;
      },
      expression: "createNewTranslation"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n                                        Add New Translation Line\n                                    ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "translationForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.translation_valid,
      callback: function callback($$v) {
        _vm.translation_valid = $$v;
      },
      expression: "translation_valid"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Translation Key",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.translation.translationkey,
      callback: function callback($$v) {
        _vm.$set(_vm.translation, "translationkey", $$v);
      },
      expression: "\n                                                    translation.translationkey\n                                                "
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Translation Value",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.translation.value,
      callback: function callback($$v) {
        _vm.$set(_vm.translation, "value", $$v);
      },
      expression: "translation.value"
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
        _vm.createNewTranslation = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.translation_valid
    },
    on: {
      click: _vm.validateTranslationForm
    }
  }, [_vm._v("Create")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewTranslation,
      callback: function callback($$v) {
        _vm.viewTranslation = $$v;
      },
      expression: "viewTranslation"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n                                        " + _vm._s(_vm.activeTranslation.translationkey) + "\n                                    ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n                                            VALUE:\n                                            " + _vm._s(_vm.activeTranslation.value) + "\n                                            "), _c("br"), _vm._v("\n                                            DATE:\n                                            " + _vm._s(_vm.activeTranslation.creationTime) + "\n                                            "), _c("br"), _vm._v("\n                                            LANGUAGE:\n                                            " + _vm._s(_vm.activeTranslation.label) + "\n                                        ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteTranslation(_vm.activeTranslation);
      }
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1)], 1)])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/Translations.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/dashboard/Translations.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Translations_vue_vue_type_template_id_d7ab2e48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translations.vue?vue&type=template&id=d7ab2e48& */ "./resources/js/views/dashboard/Translations.vue?vue&type=template&id=d7ab2e48&");
/* harmony import */ var _Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Translations.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Translations.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Translations_vue_vue_type_template_id_d7ab2e48___WEBPACK_IMPORTED_MODULE_0__.render,
  _Translations_vue_vue_type_template_id_d7ab2e48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Translations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Translations.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/dashboard/Translations.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Translations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Translations.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Translations.vue?vue&type=template&id=d7ab2e48&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Translations.vue?vue&type=template&id=d7ab2e48& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_template_id_d7ab2e48___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_template_id_d7ab2e48___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_template_id_d7ab2e48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Translations.vue?vue&type=template&id=d7ab2e48& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/Translations.vue?vue&type=template&id=d7ab2e48&");


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