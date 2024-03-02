(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_customer_messaging_Chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Chat.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Chat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/constants */ "./resources/js/utils/constants.js");
/* harmony import */ var _assets_img_folder_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/img/folder.png */ "./resources/assets/img/folder.png");
/* harmony import */ var _assets_img_folder_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_folder_png__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activeChat: 1,
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      folder_logo: (_assets_img_folder_png__WEBPACK_IMPORTED_MODULE_1___default()),
      messageContent: null,
      chatId: null,
      recieverId: null,
      messageForm: {
        content: "",
        me: true,
        created_at: "11:11am"
      },
      overlay: false,
      sidebarMenu: true,
      toggleMini: false,
      themeSwitch: false,
      theme: false,
      settings: [{
        id: 1,
        title: "My Account",
        icon: "mdi-shield-account",
        href: "/profileSettings"
      }, {
        id: 3,
        title: "Change Password",
        icon: "mdi-cog",
        href: "/passwordSettings"
      }, {
        id: 4,
        title: "Logout",
        icon: "mdi-key-outline",
        href: "/login"
      }]
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({
    mini: function mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["selectedUser", "chatDetails", "myUserProfile", "conversations", "newMessages", "userNotifications"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["messageAlert", "getChatDetails", "myUserProfile", "userSelected", "conversations", "getNewMessages", "getUserNotifications"])), {}, {
    countNewNotifications: function countNewNotifications() {
      return this.getUserNotifications.length > 0 ? this.getUserNotifications.length : 0;
    },
    countNewMessages: function countNewMessages() {
      return this.getNewMessages.length > 0 ? this.getNewMessages.length : 0;
    }
  }),
  mounted: function mounted() {
    if (localStorage.getItem("theme") == "light") {
      this.themeSwitch = false;
      this.theme = false;
    } else {
      this.themeSwitch = true;
      this.theme = true;
    }
  },
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        this.chatId = this.$route.query.chatId;
        this.recieverId = this.$route.query.userId;
        this.$store.dispatch("getSelectedUserProfile", this.recieverId);
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("fetchChatConversation", {
          chatId: this.chatId,
          recieverId: this.recieverId
        });
        this.$store.dispatch("getChatDetails", {
          chatId: this.chatId,
          recieverId: this.recieverId
        });
      }
    },
    $route: function $route(to, from) {
      this.chatId = this.$route.query.chatId;
      this.recieverId = this.$route.query.userId;
      this.$store.dispatch("fetchNewMessages");
      this.$store.dispatch("getSelectedUserProfile", this.recieverId);
      this.$store.dispatch("fetchChatConversation", {
        chatId: this.chatId,
        recieverId: this.recieverId
      });
      this.$store.dispatch("getChatDetails", {
        chatId: this.chatId,
        recieverId: this.recieverId
      });
      this.$store.dispatch("fetchNewMessages");
      this.$store.dispatch("fetchUserNotifications");
      this.$store.dispatch("getMyProfile");
    },
    myUserProfile: function myUserProfile(val) {
      if (val != null) {
        if (val.level > 1) {
          this.settings[3] = {
            id: 5,
            title: "Admin",
            icon: "mdi-cog",
            href: "/admin"
          };
        }
      }
    },
    conversations: function conversations(val) {
      if (val != null) {
        this.scrollToElement();
      }
    }
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("getMyProfile");
  },
  created: function created() {
    this.chatId = this.$route.query.chatId;
    this.recieverId = this.$route.query.userId;
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("getSelectedUserProfile", this.recieverId);
    this.$store.dispatch("fetchChatConversation", {
      chatId: this.chatId,
      recieverId: this.recieverId
    });
    this.$store.dispatch("getChatDetails", {
      chatId: this.chatId,
      recieverId: this.recieverId
    });
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
    this.$store.dispatch("getMyProfile");
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
    SendMessage: function SendMessage() {
      if (this.getChatDetails.chatType === "CUSTOMER_SERVICE") {
        this.recieverId = this.myUserProfile.id;
      }
      var formData = new FormData();
      formData.append("contentType", "text");
      formData.append("message", this.messageContent);
      formData.append("chatId", this.chatId);
      formData.append("recieverId", this.recieverId);
      this.messageContent = "";
      this.$store.dispatch("sendMessage", formData);
    },
    handleImageChange: function handleImageChange(event) {
      if (this.getChatDetails.chatType === "CUSTOMER_SERVICE") {
        this.recieverId = this.myUserProfile.id;
      }
      var image = event.target.files[0];
      var formData = new FormData();
      formData.append("image", image);
      formData.append("contentType", "image");
      formData.append("message", this.messageContent);
      formData.append("chatId", this.chatId);
      formData.append("recieverId", this.recieverId);
      this.messageContent = "";
      this.$store.dispatch("sendFile", formData);
    },
    pickAttachment: function pickAttachment() {
      var imageInput = document.getElementById("imageInput");
      imageInput.click();
    },
    isMyMessage: function isMyMessage(msg) {
      return msg.senderId === this.myUserProfile.id + "" ? true : false;
    },
    decodeTextMessage: function decodeTextMessage(x) {
      x = x.replace(/\+/g, "%20");
      x = x.replace(/\<br>/g, "\n");
      return decodeURIComponent(x);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Chat.vue?vue&type=template&id=6840a376&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Chat.vue?vue&type=template&id=6840a376& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    staticClass: "fill-height pa-0",
    staticStyle: {
      "max-height": "73vh"
    },
    attrs: {
      "fill-height": "",
      height: "100%"
    }
  }, [_vm.activeChat ? _c("v-responsive", {
    staticClass: "overflow-y-hidden fill-height"
  }, [_c("v-card", {
    staticClass: "d-flex flex-column fill-height",
    attrs: {
      flat: ""
    }
  }, [_c("v-card-title", [_c("v-list-item", {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      to: "/userPublicProfile?userIndex=".concat(_vm.getChatDetails.chatType !== "SINGLE_CAST" ? (_vm.userSelected.id === _vm.getChatDetails.chatSenderId ? _vm.getChatDetails.chatSenderId : _vm.userSelected.id) !== _vm.myUserProfile.id ? _vm.userSelected.id : _vm.getChatDetails.chatSenderId : _vm.userSelected.id)
    }
  }, [_c("v-list-item-avatar", [_vm.getChatDetails.chatType === "SINGLE_CAST" && _vm.userSelected.profile_picture === undefined ? _c("v-icon", [_vm._v("mdi-account-outline")]) : _c("v-img", {
    staticClass: "card-img",
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.getChatDetails.chatType !== "SINGLE_CAST" ? _vm.userSelected.id === _vm.getChatDetails.chatSenderId ? _vm.getChatDetails.logoUrl : _vm.userSelected.id !== _vm.myUserProfile.id ? _vm.userSelected.profile_picture : _vm.getChatDetails.logoUrl : _vm.userSelected.profile_picture)
    }
  })], 1), _vm._v(" "), _c("v-list-item-content", {
    staticClass: "text-truncate title"
  }, [_c("h6", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("\n              " + _vm._s(_vm.getChatDetails.chatType !== "SINGLE_CAST" ? _vm.userSelected.id === _vm.getChatDetails.chatSenderId ? _vm.getChatDetails.label : _vm.userSelected.id !== _vm.myUserProfile.id ? "CC: " + _vm.userSelected.name : _vm.getChatDetails.label : _vm.userSelected.name) + "\n            ")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v(_vm._s(_vm.getChatDetails.chatType !== "SINGLE_CAST" ? _vm.userSelected.id === _vm.getChatDetails.chatSenderId ? _vm.getChatDetails.description : _vm.userSelected.id !== _vm.myUserProfile.id ? "last seen " + _vm.userSelected.lastSeen : _vm.getChatDetails.description : "last seen " + _vm.userSelected.lastSeen))])])], 1)], 1), _vm._v(" "), _c("v-container", {
    ref: "scrollToMe",
    staticClass: "flex-grow-1 overflow-y-auto",
    attrs: {
      "fill-height": ""
    }
  }, [_c("v-card-text", _vm._l(_vm.conversations, function (msg, i) {
    return _c("div", {
      key: i
    }, [[_c("div", {
      "class": {
        "d-flex flex-row-reverse": _vm.isMyMessage(msg)
      }
    }, [_c("v-menu", {
      attrs: {
        "offset-y": ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on;
          return [_c("v-hover", {
            scopedSlots: _vm._u([{
              key: "default",
              fn: function fn(_ref2) {
                var hover = _ref2.hover;
                return [msg.contentType === "text" ? _c("v-chip", _vm._g({
                  staticClass: "pa-4 mb-2",
                  staticStyle: {
                    height: "auto",
                    "white-space": "normal"
                  },
                  attrs: {
                    color: _vm.isMyMessage(msg) ? "primary" : "",
                    dark: ""
                  }
                }, on), [_vm._v("\n                        " + _vm._s(_vm.decodeTextMessage(msg.message)) + "\n                        "), _c("sub", {
                  staticClass: "ml-2",
                  staticStyle: {
                    "font-size": "0.5rem"
                  }
                }, [_vm._v("\n                          " + _vm._s(msg.sentTime) + "\n                        ")]), _vm._v(" "), hover ? _c("v-icon", {
                  attrs: {
                    small: ""
                  }
                }, [_vm._v(" fa-expand ")]) : _vm._e()], 1) : msg.contentType === "location" ? _c("v-chip", {
                  staticClass: "pa-4 mb-2",
                  staticStyle: {
                    height: "auto",
                    "white-space": "normal"
                  },
                  attrs: {
                    color: _vm.isMyMessage(msg) ? "primary" : "",
                    dark: ""
                  }
                }, [_c("a", {
                  attrs: {
                    href: "https://www.google.com/maps/search/?api=1&query=".concat(msg.mLatitude, "%2C").concat(msg.mLongitude),
                    target: "__APP"
                  }
                }, [_c("v-img", {
                  attrs: {
                    src: "".concat(_vm.uploads).concat(msg.mImage)
                  }
                }, [_c("div", {
                  staticClass: "ml-2",
                  staticStyle: {
                    "font-size": "0.5rem"
                  }
                }, [_vm._v("\n                              " + _vm._s(msg.sentTime) + "\n                            ")]), _vm._v(" "), hover ? _c("v-icon", {
                  attrs: {
                    small: ""
                  }
                }, [_vm._v(" fa-expand ")]) : _vm._e()], 1)], 1)]) : msg.contentType === "image" ? _c("v-chip", _vm._g({
                  staticClass: "pa-4 mb-2",
                  staticStyle: {
                    height: "auto",
                    "white-space": "normal",
                    "max-width": "70%"
                  },
                  attrs: {
                    color: _vm.isMyMessage(msg) ? "primary" : "",
                    dark: ""
                  }
                }, on), [_c("v-img", {
                  attrs: {
                    src: "".concat(_vm.uploads).concat(msg.message)
                  }
                }, [_c("div", {
                  staticClass: "ml-2",
                  staticStyle: {
                    "font-size": "0.5rem"
                  }
                }, [_vm._v("\n                            " + _vm._s(msg.sentTime) + "\n                          ")]), _vm._v(" "), hover ? _c("v-icon", {
                  attrs: {
                    small: ""
                  }
                }, [_vm._v(" fa-expand ")]) : _vm._e()], 1)], 1) : msg.contentType === "audio" ? _c("v-chip", _vm._g({
                  staticClass: "pa-4 mb-2",
                  staticStyle: {
                    height: "auto",
                    "white-space": "normal"
                  },
                  attrs: {
                    color: _vm.isMyMessage(msg) ? "primary" : "",
                    dark: ""
                  }
                }, on), [_c("audio", {
                  ref: "player-".concat(msg.message),
                  refInFor: true,
                  attrs: {
                    controls: "",
                    src: _vm.uploads + msg.message,
                    type: "audio/mpeg"
                  }
                }, [_c("div", {
                  staticClass: "ml-2",
                  staticStyle: {
                    "font-size": "0.5rem"
                  }
                }, [_vm._v("\n                            " + _vm._s(msg.sentTime) + "\n                          ")]), _vm._v(" "), hover ? _c("v-icon", {
                  attrs: {
                    small: ""
                  }
                }, [_vm._v(" fa-expand ")]) : _vm._e()], 1)]) : msg.contentType === "contact" ? _c("v-chip", _vm._g({
                  staticClass: "pa-4 mb-2",
                  staticStyle: {
                    height: "auto",
                    "white-space": "normal"
                  },
                  attrs: {
                    color: _vm.isMyMessage(msg) ? "primary" : "",
                    dark: ""
                  }
                }, on), [_c("div", [_vm._v("\n                          Phone Contact (Download Our App To View This\n                          Contact)\n                          "), _c("div", {
                  staticClass: "ml-2",
                  staticStyle: {
                    "font-size": "0.5rem"
                  }
                }, [_vm._v("\n                            " + _vm._s(msg.sentTime) + "\n                          ")]), _vm._v(" "), hover ? _c("v-icon", {
                  attrs: {
                    small: ""
                  }
                }, [_vm._v(" fa-expand ")]) : _vm._e()], 1)]) : msg.contentType === "file" ? _c("v-chip", _vm._g({
                  staticClass: "pa-4 mb-2",
                  staticStyle: {
                    height: "auto",
                    "white-space": "normal"
                  },
                  attrs: {
                    color: _vm.isMyMessage(msg) ? "primary" : "",
                    dark: ""
                  }
                }, on), [_c("a", {
                  attrs: {
                    href: _vm.uploads + msg.message,
                    target: "__APP"
                  }
                }, [_c("v-img", {
                  attrs: {
                    src: "".concat(_vm.folder_logo),
                    width: "200",
                    height: "200"
                  }
                }, [_c("div", {
                  staticClass: "ml-2",
                  staticStyle: {
                    "font-size": "0.5rem"
                  }
                }, [_vm._v("\n                              " + _vm._s(msg.sentTime) + "\n                            ")]), _vm._v(" "), hover ? _c("v-icon", {
                  attrs: {
                    small: ""
                  }
                }, [_vm._v(" fa-expand ")]) : _vm._e()], 1)], 1)]) : _c("v-chip", _vm._g({
                  staticClass: "pa-4 mb-2",
                  staticStyle: {
                    height: "auto",
                    "white-space": "normal"
                  },
                  attrs: {
                    color: _vm.isMyMessage(msg) ? "primary" : "",
                    dark: ""
                  }
                }, on), [_c("v-img", {
                  attrs: {
                    src: "".concat(_vm.uploads).concat(msg.message)
                  }
                }, [_c("div", {
                  staticClass: "ml-2",
                  staticStyle: {
                    "font-size": "0.5rem"
                  }
                }, [_vm._v("\n                            " + _vm._s(msg.sentTime) + "\n                          ")]), _vm._v(" "), hover ? _c("v-icon", {
                  attrs: {
                    small: ""
                  }
                }, [_vm._v(" fa-expand ")]) : _vm._e()], 1)], 1)];
              }
            }], null, true)
          })];
        }
      }], null, true)
    }, [_vm._v(" "), _c("v-list", [_c("v-list-item", [_c("v-list-item-title", [_vm._v("Delete")]), _vm._v(" "), _c("v-list-item-title", [_vm._v("Reply")]), _vm._v(" "), _c("v-list-item-title", [_vm._v("Report")])], 1)], 1)], 1)], 1)]], 2);
  }), 0)], 1), _vm._v(" "), _c("v-footer", [_c("input", {
    attrs: {
      type: "file",
      id: "imageInput",
      hidden: ""
    },
    on: {
      change: _vm.handleImageChange
    }
  }), _vm._v(" "), _c("v-card-text", {
    staticClass: "flex-shrink-1"
  }, [_c("v-text-field", {
    attrs: {
      label: "Type a message",
      type: "text",
      "no-details": "",
      outlined: "",
      "append-icon": "mdi-paperclip",
      "append-outer-icon": "mdi-send",
      "hide-details": ""
    },
    on: {
      "click:append": _vm.pickAttachment,
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.SendMessage.apply(null, arguments);
      },
      "click:append-outer": _vm.SendMessage
    },
    model: {
      value: _vm.messageContent,
      callback: function callback($$v) {
        _vm.messageContent = $$v;
      },
      expression: "messageContent"
    }
  })], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/img/folder.png":
/*!*****************************************!*\
  !*** ./resources/assets/img/folder.png ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "/images/folder.png?f48c9fe9d41e3aef0f5df46754524513";

/***/ }),

/***/ "./resources/js/views/customer/messaging/Chat.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/customer/messaging/Chat.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_6840a376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=6840a376& */ "./resources/js/views/customer/messaging/Chat.vue?vue&type=template&id=6840a376&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/views/customer/messaging/Chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_6840a376___WEBPACK_IMPORTED_MODULE_0__.render,
  _Chat_vue_vue_type_template_id_6840a376___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customer/messaging/Chat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/customer/messaging/Chat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/customer/messaging/Chat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Chat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/customer/messaging/Chat.vue?vue&type=template&id=6840a376&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/customer/messaging/Chat.vue?vue&type=template&id=6840a376& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_6840a376___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_6840a376___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_6840a376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chat.vue?vue&type=template&id=6840a376& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Chat.vue?vue&type=template&id=6840a376&");


/***/ })

}]);