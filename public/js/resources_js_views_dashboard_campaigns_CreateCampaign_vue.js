"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_campaigns_CreateCampaign_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      campaign: {
        selectedScheduleOptions: [],
        template: {}
      },
      e6: 1,
      temp: {},
      action: "",
      getScheduleOptions: [{
        id: "DAILY",
        value: "DAILY",
        label: "Daily Campaign"
      }, {
        id: "WEEKLY",
        value: "WEEKLY",
        label: "Weekly Campaign"
      }, {
        id: "MONTHLY",
        value: "MONTHLY",
        label: "Montly Campaign"
      }]
    };
  },
  created: function created() {
    if (this.$route.query.action === "viewCampaign") {
      this.action = this.$route.query.action;
      this.$store.dispatch("loadCampaignDetails", this.$route.query.campaignID);
    }
    this.$store.dispatch("loadSystemTemplates");
    this.$store.dispatch("loadCampaignTargets");
    this.$store.dispatch("loadSystemCampaignOffers");
  },
  computed: _objectSpread(_objectSpread({
    validateFieldsCampaignDetailsForm: function validateFieldsCampaignDetailsForm() {
      var formStatus = true;
      if (this.campaign.label === undefined || this.campaign.label === "") {
        formStatus = false;
      }
      if (this.campaign.description === undefined || this.campaign.description === "") {
        formStatus = false;
      }
      return formStatus;
    },
    validateSchedulingForm: function validateSchedulingForm() {
      var formStatus = true;
      if (this.campaign.offerId === undefined || this.campaign.offerId === null) {
        formStatus = false;
      }
      if (this.campaign.startDate === undefined || this.campaign.startDate === null) {
        formStatus = false;
      }
      if (this.campaign.endDate === undefined || this.campaign.endDate === null) {
        formStatus = false;
      }
      return formStatus;
    },
    validateConsentForm: function validateConsentForm() {
      var formStatus = true;
      if (this.campaign.consent === undefined || this.campaign.consent === "" || this.campaign.consent === null) {
        formStatus = false;
      }
      return formStatus;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["campaignDetails", "isUpdating", "fileURI", "allTemplates", "campaignsOffersOptions", "campaignTargets", "campaignOffers"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getCampaignDetails", "messageAlert", "getUpdatingStatus", "getAllTemplates", "getCampaignTargets", "getCampaignOffers"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          type: val.type,
          text: val.body
        });
        this.$router.push({
          path: "/admin/marketingCampaigns/campaigns",
          query: {
            campaignID: "123"
          }
        });
      }
    },
    getCampaignDetails: function getCampaignDetails(val) {
      console.log("getCampaignDetails", val);
      this.campaign = val;
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
    submitCampaign: function submitCampaign(e) {
      console.log("submitCampaign", this.campaign);
      this.$store.dispatch("submitCampaign", this.campaign);
    },
    updateCampaign: function updateCampaign(e) {
      this.$store.dispatch("updateCampaign", this.campaign);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=template&id=1fbdd752&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=template&id=1fbdd752& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n        Campaign Details\n        "), _c("small", [_vm._v("Describe your campaign below.")])]), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "1"
    }
  }, [_c("v-card", {
    staticClass: "mb-12"
  }, [_c("v-container", [_c("v-text-field", {
    attrs: {
      label: "Campaign Name",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaign.label,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "label", $$v);
      },
      expression: "campaign.label"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      label: "Campaign Description",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaign.description,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "description", $$v);
      },
      expression: "campaign.description"
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      items: _vm.getCampaignTargets,
      label: "Select Target",
      "item-text": "label",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaign.targetId,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "targetId", $$v);
      },
      expression: "campaign.targetId"
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      items: _vm.getCampaignOffers,
      label: "Select Campaign Offer",
      "item-text": "label",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaign.offerId,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "offerId", $$v);
      },
      expression: "campaign.offerId"
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
  }, [_vm._v("Configure Campaign Scheduling.")]), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "2"
    }
  }, [_c("v-card", {
    staticClass: "mb-12",
    attrs: {
      color: "pl-4 pr-4 pt-4 grey darken-4"
    }
  }, [_c("v-select", {
    attrs: {
      items: _vm.getScheduleOptions,
      label: "Select Campaign Interval",
      "item-text": "label",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaign.campaignInterval,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "campaignInterval", $$v);
      },
      expression: "campaign.campaignInterval"
    }
  }), _vm._v(" "), _c("v-row", {
    attrs: {
      lg: "12",
      cols: "sm"
    }
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("v-text-field", {
    attrs: {
      type: "date",
      id: "startDate",
      label: "Campaign Start Date",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaign.startDate,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "startDate", $$v);
      },
      expression: "campaign.startDate"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("v-text-field", {
    attrs: {
      type: "date",
      id: "endDate",
      label: "Campaign End Date",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.campaign.endDate,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "endDate", $$v);
      },
      expression: "campaign.endDate"
    }
  })], 1)])], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "md-1 px-6",
    on: {
      click: function click($event) {
        _vm.e6 = 1;
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.validateSchedulingForm != false ? _vm.e6 = 3 : _vm.displayFormError("Please choose an option.");
      }
    }
  }, [_vm._v("Continue")])], 1), _vm._v(" "), _c("v-stepper-step", {
    attrs: {
      step: "3"
    }
  }, [_vm._v("Consent")]), _vm._v(" "), _c("v-stepper-content", {
    attrs: {
      step: "3"
    }
  }, [_c("v-card", {
    staticClass: "mb-12",
    attrs: {
      height: "160px"
    }
  }, [_c("v-card-text", [_c("p", [_vm._v("\n              By submitting this campaign, we asume that you have gone through\n              what you have writen, and you are aware that any mistakes made\n              on creation of the campaign can negatively impact the company.\n            ")]), _vm._v(" "), _c("v-checkbox", {
    attrs: {
      label: "I know and understand what am doing."
    },
    model: {
      value: _vm.campaign.consent,
      callback: function callback($$v) {
        _vm.$set(_vm.campaign, "consent", $$v);
      },
      expression: "campaign.consent"
    }
  })], 1)], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "md-1 px-6",
    on: {
      click: function click($event) {
        _vm.e6 = 2;
      }
    }
  }, [_vm._v("Back")]), _vm._v(" "), _vm.action === "viewCampaign" ? _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.validateConsentForm != false ? _vm.updateCampaign() : _vm.displayFormError("Please Aggree to the terms and continue");
      }
    }
  }, [_vm._v("Update")]) : _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.validateConsentForm != false ? _vm.submitCampaign() : _vm.displayFormError("Please Aggree to the terms and continue");
      }
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CreateCampaign.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CreateCampaign.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateCampaign_vue_vue_type_template_id_1fbdd752___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCampaign.vue?vue&type=template&id=1fbdd752& */ "./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=template&id=1fbdd752&");
/* harmony import */ var _CreateCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCampaign.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateCampaign_vue_vue_type_template_id_1fbdd752___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateCampaign_vue_vue_type_template_id_1fbdd752___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/campaigns/CreateCampaign.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCampaign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCampaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=template&id=1fbdd752&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=template&id=1fbdd752& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCampaign_vue_vue_type_template_id_1fbdd752___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCampaign_vue_vue_type_template_id_1fbdd752___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCampaign_vue_vue_type_template_id_1fbdd752___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateCampaign.vue?vue&type=template&id=1fbdd752& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/campaigns/CreateCampaign.vue?vue&type=template&id=1fbdd752&");


/***/ })

}]);