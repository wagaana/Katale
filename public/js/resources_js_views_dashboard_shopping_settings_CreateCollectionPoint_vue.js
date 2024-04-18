"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_shopping_settings_CreateCollectionPoint_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["selectedFiles", "label"],
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      activeFile: {},
      dialogOpenFiles: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadUserFiles");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["userFiles"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["messageAlert", "getUserFiles"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$store.dispatch("loadUserFiles");
      }
    },
    getSystemSettings: function getSystemSettings(val) {
      if (val != null) {
        for (var i = 0; i < val.length; i++) {
          var value = val[i];
          this.settings[value.setting_name] = value.setting_value;
        }
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    editProfileImage: function editProfileImage() {
      var mediaInput = document.getElementById("mediaInput");
      mediaInput.click();
    },
    handleMediaChange: function handleMediaChange(event) {
      var files = event.target.files;
      var formData = new FormData();
      for (var i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]); // Use files[] to handle multiple files
      }

      this.$store.dispatch("uploadMultiple", formData);
    },
    emitFile: function emitFile(activeFile) {
      this.activeFile = activeFile;
      this.dialogOpenFiles = false;
      this.$emit("selectedFiles", activeFile);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/constants */ "./resources/js/utils/constants.js");
/* harmony import */ var _components_FilesEntry_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/FilesEntry.vue */ "./resources/js/components/FilesEntry.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FilesEntry: _components_FilesEntry_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      validCollectionPoint: false,
      newCollectionPoint: {},
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
  beforeCreate: function beforeCreate() {},
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)([])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["messageAlert"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_3__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$router.push("/admin/shopping/settings/collectionPoints");
      }
    }
  },
  methods: {
    validateNewCollectionPointForm: function validateNewCollectionPointForm() {
      if (this.$refs.collectionPointForm.validate()) {
        // send it
        this.$store.dispatch("submitCollectionPoint", this.newCollectionPoint);
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
      this.newCollectionPoint.data = placeResultData;
    },
    selectedFiles: function selectedFiles(file) {
      this.newCollectionPoint.image = JSON.stringify(file);
      this.newCollectionPoint.logo_id = file.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
      "grid-list-xl": ""
    }
  }, [_c("v-card", {
    staticClass: "pa-2",
    on: {
      click: function click($event) {
        _vm.dialogOpenFiles = true;
      }
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-4 center",
    attrs: {
      cols: "12",
      "offset-sm": "0",
      sm: "4"
    }
  }, [_c("v-img", {
    attrs: {
      src: _vm.activeFile.path != null ? "".concat(_vm.uploads).concat(_vm.activeFile.path) : "/images/default/default-image-40x40.png",
      height: "30",
      width: "30"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-5 center",
    attrs: {
      cols: "12",
      sm: "8"
    }
  }, [_vm._v(" " + _vm._s(_vm.label) + " ")])], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "900"
    },
    model: {
      value: _vm.dialogOpenFiles,
      callback: function callback($$v) {
        _vm.dialogOpenFiles = $$v;
      },
      expression: "dialogOpenFiles"
    }
  }, [_c("v-card", {
    staticClass: "pa-3"
  }, [_c("v-row", {
    staticClass: "pa-2"
  }, [_c("v-row", [_c("v-col", {
    staticClass: "col-md-11 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Files & Media")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v("Upload Your Files & Media To use later")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-1 pr-md-1"
  }, [_c("input", {
    attrs: {
      type: "file",
      id: "mediaInput",
      hidden: "",
      multiple: "",
      accept: ".jpg, .jpeg, .png, .gif, .mp4, .mpg, .mpeg, .webp, .webm, .ogg, .avi, .mov, .flv, .swf, .mkv, .wmv, .wma, .aac, .wav, .mp3, .zip, .rar, .7z, .doc, .txt, .docx, .pdf, .csv, .xml, .ods, .xlr, .xls, .xlsx"
    },
    on: {
      change: _vm.handleMediaChange
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "primary",
    attrs: {
      width: "100%"
    },
    on: {
      click: _vm.editProfileImage
    }
  }, [_vm._v("Upload")])], 1)], 1), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("v-layout", {
    attrs: {
      row: "",
      wrap: ""
    }
  }, _vm._l(_vm.getUserFiles, function (fileUpload) {
    return _c("v-flex", {
      key: fileUpload.id,
      attrs: {
        xs12: "",
        sm6: "",
        md4: "",
        xl2: ""
      }
    }, [_c("v-card", {
      on: {
        click: function click($event) {
          return _vm.emitFile(fileUpload);
        }
      }
    }, [[_c("v-list-item", [_c("v-row", {
      staticClass: "pa-2"
    }, [_c("v-col", {
      attrs: {
        cols: "12"
      }
    }, [_c("v-card", {
      style: {
        "background-image": "".concat(fileUpload.url),
        "background-repeat": "no-repeat",
        height: "200px",
        width: "100%",
        "background-size": "cover"
      }
    })], 1), _vm._v(" "), _c("v-col", {
      attrs: {
        cols: "12"
      }
    }, [_c("v-row", {
      staticClass: "d-flex align-center"
    }, [_c("v-col", {
      staticClass: "col-md-12 pr-md-1 sm-6"
    }, [_c("v-list-item-content", [_c("v-list-item-subtitle", [_vm._v("\n                                " + _vm._s(fileUpload.created_at) + "\n                              ")]), _vm._v(" "), _c("v-list-item-title", [_vm._v("\n                                " + _vm._s(fileUpload.name) + "\n                              ")])], 1)], 1)], 1)], 1)], 1)], 1)]], 2)], 1);
  }), 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=template&id=f64c49f2&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=template&id=f64c49f2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      cols: "12"
    }
  }, [_c("h5", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("Create Collection Point")])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("v-form", {
    ref: "collectionPointForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.validCollectionPoint,
      callback: function callback($$v) {
        _vm.validCollectionPoint = $$v;
      },
      expression: "validCollectionPoint"
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Label",
      autocomplete: "company",
      outlined: "",
      dense: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newCollectionPoint.label,
      callback: function callback($$v) {
        _vm.$set(_vm.newCollectionPoint, "label", $$v);
      },
      expression: "newCollectionPoint.label"
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
      value: _vm.newCollectionPoint.description,
      callback: function callback($$v) {
        _vm.$set(_vm.newCollectionPoint, "description", $$v);
      },
      expression: "newCollectionPoint.description"
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
      value: _vm.newCollectionPoint.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.newCollectionPoint, "phone", $$v);
      },
      expression: "newCollectionPoint.phone"
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
      value: _vm.newCollectionPoint.website,
      callback: function callback($$v) {
        _vm.$set(_vm.newCollectionPoint, "website", $$v);
      },
      expression: "newCollectionPoint.website"
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
      value: _vm.newCollectionPoint.email,
      callback: function callback($$v) {
        _vm.$set(_vm.newCollectionPoint, "email", $$v);
      },
      expression: "newCollectionPoint.email"
    }
  }), _vm._v(" "), _c("FilesEntry", {
    staticClass: "pa-5",
    attrs: {
      label: "Featured Picture"
    },
    on: {
      selectedFiles: _vm.selectedFiles
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
      disabled: !_vm.validCollectionPoint,
      variant: "success"
    },
    on: {
      click: _vm.validateNewCollectionPointForm
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/FilesEntry.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FilesEntry.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesEntry.vue?vue&type=template&id=72c76766& */ "./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766&");
/* harmony import */ var _FilesEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesEntry.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesEntry.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesEntry.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateCollectionPoint_vue_vue_type_template_id_f64c49f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCollectionPoint.vue?vue&type=template&id=f64c49f2& */ "./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=template&id=f64c49f2&");
/* harmony import */ var _CreateCollectionPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCollectionPoint.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateCollectionPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateCollectionPoint_vue_vue_type_template_id_f64c49f2___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateCollectionPoint_vue_vue_type_template_id_f64c49f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesEntry.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/FilesEntry.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCollectionPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCollectionPoint.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCollectionPoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesEntry.vue?vue&type=template&id=72c76766& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766&");


/***/ }),

/***/ "./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=template&id=f64c49f2&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=template&id=f64c49f2& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCollectionPoint_vue_vue_type_template_id_f64c49f2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCollectionPoint_vue_vue_type_template_id_f64c49f2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCollectionPoint_vue_vue_type_template_id_f64c49f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCollectionPoint.vue?vue&type=template&id=f64c49f2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/settings/CreateCollectionPoint.vue?vue&type=template&id=f64c49f2&");


/***/ })

}]);