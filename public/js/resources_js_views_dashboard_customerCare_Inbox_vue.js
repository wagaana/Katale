"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_customerCare_Inbox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      overlay: false,
      sidebarMenu: true,
      toggleMini: false,
      themeSwitch: false,
      theme: false,
      messageTitles: [{
        id: "image",
        name: "🖼 Image"
      }, {
        id: "video",
        name: "🎬 Video"
      }, {
        id: "contact",
        name: "👤 Contact"
      }, {
        id: "location",
        name: "🗺 Location"
      }, {
        id: "file",
        name: "💾 Document"
      }, {
        id: "audio",
        name: "🔊 Voice Note"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("getCustomerServiceChats");
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["customerServiceChats", "myUserProfile", "newMessages", "userNotifications"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["messageAlert", "getCustomerServiceChats", "myUserProfile", "getNewMessages", "getUserNotifications"])), {}, {
    countNewNotifications: function countNewNotifications() {
      return this.getUserNotifications.length > 0 ? this.getUserNotifications.length : 0;
    },
    countNewMessages: function countNewMessages() {
      return this.getNewMessages.length > 0 ? this.getNewMessages.length : 0;
    }
  }),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("getCustomerServiceChats");
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
      }
    },
    getCustomerServiceChats: function getCustomerServiceChats(val) {
      if (val != null) {
        this.scrollToElement();
      }
    }
  },
  mounted: function mounted() {
    if (localStorage.getItem("theme") == "light") {
      this.themeSwitch = false;
      this.theme = false;
    } else {
      this.themeSwitch = true;
      this.theme = true;
    }
  },
  methods: {
    switchTheme: function switchTheme(e) {
      if (e) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      console.log("THEME:::", e);
      setTimeout(function () {
        window.location.reload();
      }, 500);
    },
    markDeleted: function markDeleted(message) {
      message.deleted = true;
    },
    restoreToInbox: function restoreToInbox(message) {
      message.deleted = false;
    },
    countItems: function countItems(list) {
      switch (list) {
        case "Messages":
          return 0;
        // break;
        case "Contacts":
          return 0;
        // break;
        default:
          return 0;
      }
    },
    readMessage: function readMessage(chatId, userId) {
      this.$router.push({
        path: "/admin/ccInbox/ccChat",
        query: {
          chatId: chatId,
          userId: userId
        }
      });
    },
    SendMessage: function SendMessage() {
      var formData = new FormData();
      formData.append("contentType", "text");
      formData.append("message", this.messageContent);
      formData.append("chatId", this.chatId);
      formData.append("recieverId", this.recieverId);
      this.messageContent = "";
      this.$store.dispatch("sendMessage", formData);
    },
    handleImageChange: function handleImageChange(event) {
      var image = event.target.files[0];
      var formData = new FormData();
      formData.append("image", image);
      formData.append("contentType", "image");
      formData.append("message", this.messageContent);
      formData.append("chatId", this.chatId);
      formData.append("recieverId", this.recieverId);
      this.messageContent = "";
      this.$store.dispatch("sendMessage", formData);
    },
    pickAttachment: function pickAttachment() {
      var imageInput = document.getElementById("imageInput");
      imageInput.click();
    },
    isMyMessage: function isMyMessage(msg) {
      return msg.senderId !== this.userSelected.userId ? true : false;
    },
    decodeTextMessage: function decodeTextMessage(x) {
      x = x.replace(/\+/g, "%20");
      x = x.replace(/\<br>/g, "\n");
      return decodeURIComponent(x);
    },
    getMessageTitle: function getMessageTitle(x) {
      var context = this;
      var title = x;
      context.messageTitles.forEach(function (data) {
        if (x === data.id) {
          title = data.name;
        }
      });
      return title;
    },
    scrollToElement: function scrollToElement() {
      var el = this.$refs.scrollToMe;
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=template&id=193ba5c0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=template&id=193ba5c0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      fluid: ""
    }
  }, [_c("v-card", [_c("v-row", {
    staticClass: "py-0 px-2 elevation-2"
  }, [_c("v-col", {
    staticClass: "py-1 elevation-2",
    staticStyle: {
      "max-height": "73vh",
      height: "73vh"
    },
    attrs: {
      lg: "4",
      grow: "",
      height: "600"
    }
  }, [_c("v-tabs", {
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
  }), _vm._v(" "), _c("v-tab", [_c("div", {
    staticClass: "caption py-1"
  }, [_vm._v("\n                            Customer Service Live Chat\n                        ")])])], 1), _vm._v(" "), _c("v-tabs-items", {
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
  }, [_c("v-container", {
    ref: "scrollToMe",
    staticClass: "flex-grow-1 overflow-y-auto fill-height pa-0",
    staticStyle: {
      "max-height": "63vh"
    },
    attrs: {
      "fill-height": "",
      height: "100%"
    }
  }, [_c("v-responsive", {
    staticClass: "overflow-y-hidden fill-height"
  }, [_c("v-tab-item", [_vm.getCustomerServiceChats.length === 0 ? _c("div", {
    staticClass: "text-center px-2"
  }, [_vm._v("\n                                    You have no chats yes\n                                ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.getCustomerServiceChats, function (message, i) {
    return _c("v-row", {
      key: i,
      staticClass: "mb-5 pb-2 elevation-1",
      attrs: {
        "align-center": ""
      }
    }, [_c("v-col", {
      attrs: {
        lg: "3",
        cols: "12"
      }
    }, [_c("v-avatar", {
      attrs: {
        size: "70",
        height: "70"
      }
    }, [_c("v-img", {
      attrs: {
        alt: "",
        src: "".concat(_vm.uploads).concat(message.profile_picture)
      }
    })], 1)], 1), _vm._v(" "), _c("v-col", {
      attrs: {
        lg: "9",
        cols: "12"
      }
    }, [_c("v-row", {
      staticClass: "mt-1 pb-2"
    }, [_c("v-col", {
      staticClass: "py-0",
      style: {
        cursor: "pointer"
      },
      attrs: {
        sm: "8",
        cols: "8"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.readMessage(message.id, message.chatSenderId);
        }
      }
    }, [_c("h4", {
      "class": !message.read ? "font-italic" : ""
    }, [_vm._v("\n                                                    " + _vm._s(message.name) + "\n                                                    "), _c("v-icon", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: message.read,
        expression: "\n                                                            message.read\n                                                        "
      }],
      attrs: {
        small: "",
        title: "Read"
      }
    }, [_vm._v("mdi-check")])], 1)]), _vm._v(" "), _c("v-col", {
      staticClass: "text-right caption py-0",
      attrs: {
        sm: "4",
        cols: "4"
      }
    }, [_vm._v("\n                                                " + _vm._s(message.sentTime) + "\n                                            ")]), _vm._v(" "), _c("v-col", {
      staticClass: "py-0",
      attrs: {
        cols: "12"
      },
      on: {
        click: function click($event) {
          return _vm.readMessage(message.id, message.chatSenderId);
        }
      }
    }, [_c("div", [_vm._v("\n                                                    " + _vm._s(_vm.decodeTextMessage(message.contentType === "text" ? message.message : _vm.getMessageTitle(message.contentType))) + "\n                                                ")])])], 1)], 1)], 1);
  })], 2)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-1 elevation-2",
    attrs: {
      lg: "8",
      grow: ""
    }
  }, [_c("transition", {
    attrs: {
      name: "fade",
      fluid: ""
    }
  }, [_c("router-view")], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "overline mb-1 pt-6",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        Manage & track all your shipments.\n    ")])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/dashboard/customerCare/Inbox.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/dashboard/customerCare/Inbox.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inbox_vue_vue_type_template_id_193ba5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inbox.vue?vue&type=template&id=193ba5c0& */ "./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=template&id=193ba5c0&");
/* harmony import */ var _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inbox.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Inbox_vue_vue_type_template_id_193ba5c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Inbox_vue_vue_type_template_id_193ba5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/customerCare/Inbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=template&id=193ba5c0&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=template&id=193ba5c0& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_193ba5c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_193ba5c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_193ba5c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=template&id=193ba5c0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/customerCare/Inbox.vue?vue&type=template&id=193ba5c0&");


/***/ })

}]);