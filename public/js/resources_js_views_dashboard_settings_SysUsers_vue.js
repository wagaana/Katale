"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_settings_SysUsers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      newUser: {},
      activeUser: {},
      composeMessage: {},
      dialogAddNewUser: false,
      dialogComposeEmail: false,
      viewUserProfile: false,
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
        text: "Image",
        value: "imageTitle"
      }, {
        text: "Name",
        align: "left",
        sortable: false,
        value: "name"
      }, {
        text: "Email",
        value: "email"
      }, {
        text: "Level",
        value: "level"
      }, {
        text: "Date Added",
        value: "timeAdded"
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
    this.$store.dispatch("getAdminUsers");
    this.$store.dispatch("fetchMyServicePoints");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["myCompanyUsers", "myServicePints"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getMyCompanyUsers", "getMyServicePints"])),
  methods: {
    loadUserProfile: function loadUserProfile(user) {
      this.activeUser = user;
      this.viewUserProfile = true;
    },
    deleteUser: function deleteUser(activeUser) {
      alert("Deleting");
    },
    composeEmail: function composeEmail(user) {
      this.viewUserProfile = false;
      this.dialogComposeEmail = true;
    },
    openAdminDetails: function openAdminDetails(user) {
      this.$router.push({
        path: "/admin/customers/" + user.id,
        query: {
          userId: user.id
        }
      });
    },
    validateEmail: function validateEmail() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.sendEmail(this.newUser);
      }
    },
    sendEmail: function sendEmail() {
      alert("Sending");
    },
    validate: function validate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.createUser(this.newUser);
      }
    },
    createUser: function createUser(newUser) {
      //send the message via API/server endpoint here
      this.dialogAddNewUser = false;
      this.$store.dispatch("submitSystemAdmin", newUser);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=template&id=e1460e46&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=template&id=e1460e46& ***!
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
  }, [_c("div", [_c("v-row", [_c("v-col", {
    staticClass: "col-md-10 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("System Users")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v("Manage System Users here")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "primary",
    on: {
      click: function click($event) {
        _vm.dialogAddNewUser = true;
      }
    }
  }, [_vm._v("New")])], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.getMyCompanyUsers,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.loadUserProfile(item);
            }
          }
        }, [_c("td", [_c("img", {
          attrs: {
            src: "".concat(_vm.uploads).concat(item.profile_picture),
            width: "30px",
            height: "30px"
          }
        })]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.email))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.level))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.created_at))])])];
      }
    }])
  })], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogAddNewUser,
      callback: function callback($$v) {
        _vm.dialogAddNewUser = $$v;
      },
      expression: "dialogAddNewUser"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n          New User\n        ")]), _vm._v(" "), _c("v-card-text", {
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
      label: "User Email",
      rules: [_vm.rules.required, _vm.rules.email],
      autocomplete: "email",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newUser.email,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "email", $$v);
      },
      expression: "newUser.email"
    }
  }), _vm._v(" "), _c("v-select", {
    attrs: {
      items: _vm.systemUserLevels,
      label: "Select Level",
      "item-text": "label",
      "item-value": "id",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newUser.level,
      callback: function callback($$v) {
        _vm.$set(_vm.newUser, "level", $$v);
      },
      expression: "newUser.level"
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
        _vm.dialogAddNewUser = false;
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
  }, [_vm._v("Add User")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewUserProfile,
      callback: function callback($$v) {
        _vm.viewUserProfile = $$v;
      },
      expression: "viewUserProfile"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n          " + _vm._s(_vm.activeUser.name) + "\n        ")]), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.activeUser.profilePicture),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n            EMAIL: " + _vm._s(_vm.activeUser.email) + "\n            "), _c("br"), _vm._v("\n            DATE: " + _vm._s(_vm.activeUser.created_at) + "\n            "), _c("br"), _vm._v("\n            LEVEL: " + _vm._s(_vm.activeUser.level) + "\n          ")])]), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteUser(_vm.activeUser);
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
        return _vm.openAdminDetails(_vm.activeUser);
      }
    }
  }, [_vm._v("Details")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.composeEmail(_vm.activeUser);
      }
    }
  }, [_vm._v("Email")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogComposeEmail,
      callback: function callback($$v) {
        _vm.dialogComposeEmail = $$v;
      },
      expression: "dialogComposeEmail"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n          Compose Message\n        ")]), _vm._v(" "), _c("v-card-text", {
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
      label: "To",
      disabled: "",
      rules: [_vm.rules.required, _vm.rules.email]
    },
    model: {
      value: _vm.activeUser.email,
      callback: function callback($$v) {
        _vm.$set(_vm.activeUser, "email", $$v);
      },
      expression: "activeUser.email"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Subject",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.composeMessage.subject,
      callback: function callback($$v) {
        _vm.$set(_vm.composeMessage, "subject", $$v);
      },
      expression: "composeMessage.subject"
    }
  }), _vm._v(" "), _c("v-textarea", {
    attrs: {
      rules: [_vm.rules.required],
      label: "Message"
    },
    model: {
      value: _vm.composeMessage.body,
      callback: function callback($$v) {
        _vm.$set(_vm.composeMessage, "body", $$v);
      },
      expression: "composeMessage.body"
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
        _vm.dialogComposeEmail = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.valid
    },
    on: {
      click: _vm.validateEmail
    }
  }, [_vm._v("Send")])], 1)], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/settings/SysUsers.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/SysUsers.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SysUsers_vue_vue_type_template_id_e1460e46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SysUsers.vue?vue&type=template&id=e1460e46& */ "./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=template&id=e1460e46&");
/* harmony import */ var _SysUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SysUsers.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SysUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SysUsers_vue_vue_type_template_id_e1460e46___WEBPACK_IMPORTED_MODULE_0__.render,
  _SysUsers_vue_vue_type_template_id_e1460e46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/settings/SysUsers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SysUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SysUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SysUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=template&id=e1460e46&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=template&id=e1460e46& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SysUsers_vue_vue_type_template_id_e1460e46___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SysUsers_vue_vue_type_template_id_e1460e46___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SysUsers_vue_vue_type_template_id_e1460e46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SysUsers.vue?vue&type=template&id=e1460e46& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/settings/SysUsers.vue?vue&type=template&id=e1460e46&");


/***/ })

}]);