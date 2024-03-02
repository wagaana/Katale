"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_campaigns_ViewCampaignOffer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      overlay: false,
      campaignOffer: {},
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      e6: 1,
      emailTemplate: {
        parameters: []
      },
      temp: {},
      dialogRead: false,
      activeField: null,
      action: "",
      activeTableMappings: [{
        id: "userId",
        label: "User Id"
      }, {
        id: "email",
        label: "Email Address"
      }, {
        id: "phone",
        label: "Phone Number"
      }, {
        id: "userName",
        label: "User Name"
      }, {
        id: "emailVerified",
        label: "Email Varified"
      }, {
        id: "level",
        label: "User level"
      }, {
        id: "dob",
        label: "Date Of Birth"
      }, {
        id: "gender",
        label: "User Gender"
      }, {
        id: "joinDate",
        label: "Join Date"
      }]
    };
  },
  created: function created() {
    if (this.$route.query.action === "vewOffer") {
      this.action = this.$route.query.action;
      this.$store.dispatch("loadSystemCampaignOfferDetails", this.$route.query.id);
    }
    this.$store.dispatch("loadCampaignTemplates");
  },
  computed: _objectSpread(_objectSpread({
    getEmailTemplateHtml: function getEmailTemplateHtml() {
      var context = this;
      try {
        console.log(context.campaignOffer.templateID);
        for (var offerIndex in context.getCampaignTemplates) {
          if (context.getCampaignTemplates[offerIndex].templateID === context.campaignOffer.templateID) {
            context.emailTemplate = context.getCampaignTemplates[offerIndex];
            break;
          }
        }
      } catch (e) {
        console.log("Error getting template");
      }
      var templateHtml = context.emailTemplate.html;
      for (var index in context.campaignOffer.parameters) {
        var keyToReplace = context.campaignOffer.parameters[index].value;
        var placeHolder = context.campaignOffer.parameters[index].placeHolder;
        var inputType = context.campaignOffer.parameters[index].inputType;
        if (inputType === "file") {
          placeHolder = "".concat(context.uploads).concat(placeHolder);
        }
        templateHtml = templateHtml.replace(keyToReplace, placeHolder);
      }
      return templateHtml;
    },
    validateFieldsCampaignDetailsForm: function validateFieldsCampaignDetailsForm() {
      var formStatus = true;
      if (this.campaignOffer.label === undefined || this.campaignOffer.label === "") {
        formStatus = false;
      }
      if (this.campaignOffer.description === undefined || this.campaignOffer.description === "") {
        formStatus = false;
      }
      return formStatus;
    },
    validateOfferForm: function validateOfferForm() {
      var formStatus = true;
      return formStatus;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["systemCampaignOfferDetails", "isUpdating", "campaignTemplates", "campaignsOffersOptions", "uploadedCampaignOfferFile"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getSystemCampaignOfferDetails", "messageAlert", "getUpdatingStatus", "getCampaignTemplates", "getUploadedCampaignOfferFile"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          type: val.type,
          text: val.body
        });
      }
    },
    // getSystemCampaignOfferDetails(val) {
    //   console.log("getSystemCampaignOfferDetails", val);
    //   this.campaignOffer = val;
    // },
    getSystemCampaignOfferDetails: function getSystemCampaignOfferDetails(val) {
      console.log("getSystemCampaignOfferDetails", val);
      this.campaignOffer.parameters = val.parameters;
      this.campaignOffer = val;
    },
    getUploadedCampaignOfferFile: function getUploadedCampaignOfferFile(val) {
      var _this = this;
      val && setTimeout(function () {
        var index = _this.campaignOffer.parameters.findIndex(function (el) {
          return el.id == parseInt(val.reference);
        });
        _this.campaignOffer.parameters[index].placeHolder = val.fileName;
        _this.overlay = false;
      }, 3000);
    }
  },
  methods: {
    displayFormError: function displayFormError(message) {
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
        group: "foo",
        title: "Error",
        text: message,
        type: "error"
      });
    },
    onImageFileChange: function onImageFileChange(e, parameter) {
      console.log(e);
      if (e !== null) {
        this.overlay = true;
        var formData = new FormData();
        formData.append("image", e);
        formData.append("reference", parameter.id);
        this.$store.dispatch("uploadCampaignOfferFile", formData);
      }
    },
    showModal: function showModal(refname) {
      this.dialogRead = true;
    },
    appendSelectedParam: function appendSelectedParam(field) {
      var _this2 = this;
      if (this.activeField == null) {
        this.campaignOffer.template.message = this.campaignOffer.template.message + " {" + field.id + "}";
      } else {
        var index = this.campaignOffer.parameters.findIndex(function (el) {
          return el.value == _this2.activeField;
        });
        var placeHolder = this.campaignOffer.parameters[index].placeHolder;
        if (placeHolder == undefined || placeHolder == null) {
          placeHolder = " {" + field.id + "}";
        } else {
          placeHolder = placeHolder + " {" + field.id + "}";
        }
        this.campaignOffer.parameters[index].placeHolder = placeHolder;
        this.campaignOffer.parameters[index].placeHolder = placeHolder;
      }
      this.dialogRead = false;
    },
    submitCampaignOffer: function submitCampaignOffer() {
      var context = this;
      console.log("submitCampaignOffer", this.campaignOffer);
      this.$store.dispatch("submitCampaignOffer", this.campaignOffer);
    },
    updateCampaignOffer: function updateCampaignOffer() {
      var context = this;
      console.log("updateCampaignOffer", this.campaignOffer);
      this.$store.dispatch("updateCampaignOffer", this.campaignOffer);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=template&id=a4495f5e&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=template&id=a4495f5e& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", [_c("v-stepper", {
    attrs: {
      vertical: ""
    },
    model: {
      value: _vm.e6,
      callback: function callback($$v) {
        _vm.e6 = $$v;
      },
      expression: "e6"
    }
  }, [_c("v-stepper-step", {
    attrs: {
      complete: _vm.e6 > 1,
      step: "1"
    }
  }, [_vm._v("\n        Campaign Offer Details\n        "), _c("small", [_vm._v("Describe your campaign offer below.")])]), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "1"
    }
  }, [_c("v-card", {
    staticClass: "mb-12"
  }, [_c("v-container", [_c("v-text-field", {
    attrs: {
      label: "Campaign Offer Name",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaignOffer.label,
      callback: function callback($$v) {
        _vm.$set(_vm.campaignOffer, "label", $$v);
      },
      expression: "campaignOffer.label"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "Campaign Offer Description",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaignOffer.description,
      callback: function callback($$v) {
        _vm.$set(_vm.campaignOffer, "description", $$v);
      },
      expression: "campaignOffer.description"
    }
  })], 1)], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "md-1 px-6"
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.validateFieldsCampaignDetailsForm != false ? _vm.e6 = 2 : _vm.displayFormError("Please fill all required Fields.");
      }
    }
  }, [_vm._v("Continue")])], 1), _vm._v(" "), _c("v-stepper-step", {
    attrs: {
      complete: _vm.e6 > 2,
      step: "2"
    }
  }, [_vm._v("Configure Campaign Offer.")]), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "2"
    }
  }, [_c("v-card", {
    staticClass: "mb-3"
  }, [_c("v-container", [_c("div", {
    staticClass: "mb-3 row"
  }, [_c("div", {
    staticClass: "col-md-6 col"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("v-text-field", {
    attrs: {
      placeholder: "Email Subject",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaignOffer.subject,
      callback: function callback($$v) {
        _vm.$set(_vm.campaignOffer, "subject", $$v);
      },
      expression: "campaignOffer.subject"
    }
  }), _vm._v(" "), _c("div", _vm._l(_vm.campaignOffer.parameters, function (parameter, i) {
    return _c("span", {
      key: i
    }, [parameter.inputType === "file" ? _c("v-file-input", {
      attrs: {
        label: parameter.label,
        outlined: "",
        dense: ""
      },
      on: {
        change: function change($event) {
          return _vm.onImageFileChange($event, parameter);
        }
      }
    }) : _vm._e(), _vm._v(" "), parameter.inputType === "string" ? _c("v-text-field", {
      attrs: {
        label: parameter.label,
        outlined: "",
        dense: ""
      },
      model: {
        value: parameter.placeHolder,
        callback: function callback($$v) {
          _vm.$set(parameter, "placeHolder", $$v);
        },
        expression: "parameter.placeHolder"
      }
    }) : _vm._e(), _vm._v(" "), parameter.inputType === "text" ? _c("div", {
      staticStyle: {
        position: "relative"
      }
    }, [_c("v-textarea", {
      attrs: {
        outlined: "",
        dense: "",
        label: parameter.label
      },
      model: {
        value: parameter.placeHolder,
        callback: function callback($$v) {
          _vm.$set(parameter, "placeHolder", $$v);
        },
        expression: "parameter.placeHolder"
      }
    }), _vm._v(" "), _c("v-btn", {
      staticStyle: {
        position: "absolute",
        right: "5px",
        top: "5px",
        padding: "5px 10px",
        "font-weight": "bold"
      },
      attrs: {
        variant: "outline-primary"
      },
      on: {
        click: function click($event) {
          _vm.activeField = parameter.value;
          _vm.showModal("modalUserParams");
        }
      }
    }, [_vm._v("{}")])], 1) : _vm._e()], 1);
  }), 0)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 col"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("v-select", {
    attrs: {
      label: "Offer Template",
      items: _vm.getCampaignTemplates,
      "item-text": "label",
      "item-value": "templateID",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaignOffer.templateID,
      callback: function callback($$v) {
        _vm.$set(_vm.campaignOffer, "templateID", $$v);
      },
      expression: "campaignOffer.templateID"
    }
  }), _vm._v(" "), _c("v-card", {
    staticClass: "col-md-12",
    domProps: {
      innerHTML: _vm._s(_vm.getEmailTemplateHtml)
    }
  })], 1)])])])], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "md-1 px-6",
    on: {
      click: function click($event) {
        _vm.e6 = 1;
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _vm.action !== "vewOffer" ? _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.validateOfferForm != false ? _vm.submitCampaignOffer() : _vm.displayFormError("Please provide the offer.");
      }
    }
  }, [_vm._v("Submit")]) : _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.validateOfferForm != false ? _vm.updateCampaignOffer() : _vm.displayFormError("Please provide the offer.");
      }
    }
  }, [_vm._v("Update")])], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogRead,
      callback: function callback($$v) {
        _vm.dialogRead = $$v;
      },
      expression: "dialogRead"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("v-toolbar-title", [_vm._v("Select Field to Add")])], 1), _vm._v(" "), _c("v-card", {
    staticClass: "pa-5"
  }, _vm._l(_vm.activeTableMappings, function (field, index) {
    return _c("v-row", {
      key: "field: ".concat(index),
      staticClass: "mb-3"
    }, [_c("v-btn", {
      staticStyle: {
        width: "100%"
      },
      attrs: {
        variant: "outline-primary"
      },
      on: {
        click: function click($event) {
          return _vm.appendSelectedParam(field);
        }
      }
    }, [_vm._v(_vm._s(field.label))])], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c("v-overlay", {
    attrs: {
      value: _vm.overlay
    }
  }, [_c("v-progress-circular", {
    attrs: {
      indeterminate: "",
      size: "64"
    }
  })], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewCampaignOffer_vue_vue_type_template_id_a4495f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewCampaignOffer.vue?vue&type=template&id=a4495f5e& */ "./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=template&id=a4495f5e&");
/* harmony import */ var _ViewCampaignOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewCampaignOffer.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewCampaignOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewCampaignOffer_vue_vue_type_template_id_a4495f5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _ViewCampaignOffer_vue_vue_type_template_id_a4495f5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCampaignOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewCampaignOffer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCampaignOffer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=template&id=a4495f5e&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=template&id=a4495f5e& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCampaignOffer_vue_vue_type_template_id_a4495f5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCampaignOffer_vue_vue_type_template_id_a4495f5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCampaignOffer_vue_vue_type_template_id_a4495f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewCampaignOffer.vue?vue&type=template&id=a4495f5e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/ViewCampaignOffer.vue?vue&type=template&id=a4495f5e&");


/***/ })

}]);