"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_customer_UserPublicProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesAndMedia.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesAndMedia.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data"],
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      displayAllPictures: false,
      table: ""
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)([])),
  watch: {
    campaignTarget: function campaignTarget(val) {
      if (val !== null) {
        console.log(val);
        this.params = val;
      }
    }
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)([]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/UserPublicProfile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/UserPublicProfile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./resources/js/utils/constants.js");
/* harmony import */ var _components_FilesAndMedia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FilesAndMedia.vue */ "./resources/js/components/FilesAndMedia.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FilesAndMedia: _components_FilesAndMedia_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
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
      }],
      data: {
        gallery: [{
          id: 1,
          title: "My Account",
          avator: "mdi-shield-account",
          href: "/profileSettings"
        }, {
          id: 3,
          title: "Change Password",
          avator: "mdi-cog",
          href: "/passwordSettings"
        }, {
          id: 4,
          title: "Logout",
          avator: "mdi-key-outline",
          href: "/login"
        }]
      },
      chatId: null
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("getChatID", this.$route.query.userIndex);
    this.$store.dispatch("checkFriendshipStatus", this.$route.query.userIndex);
    this.$store.dispatch("getSelectedUserProfile", this.$route.query.userIndex);
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("getCustomerCareChatGroupId");
  },
  created: function created() {},
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["chatID", "customerCareChatGroupId", "friendData", "myUserProfile", "friendChatConversationMedia", "selectedUser", "newMessages", "userNotifications"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["getChatID", "getCustomerCareChatGroupId", "getFriendData", "myUserProfile", "getFriendChatConversationMedia", "messageAlert", "userSelected", "getNewMessages", "getUserNotifications"])), {}, {
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
        vue__WEBPACK_IMPORTED_MODULE_3__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$store.dispatch("getSelectedUserProfile", this.$route.query.userIndex);
        this.$store.dispatch("getChatID", this.$route.query.userIndex);
        this.$store.dispatch("checkFriendshipStatus", this.$route.query.userIndex);
        this.$store.dispatch("fetchFriendChatConversationMedia", this.chatId);
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("getCustomerCareChatGroupId");
      }
    },
    userSelected: function userSelected(val) {
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
    getChatID: function getChatID(id) {
      if (/^-?\d+$/.test(id)) {
        this.chatId = id;
        this.$store.dispatch("fetchFriendChatConversationMedia", id);
      }
    },
    getFriendChatConversationMedia: function getFriendChatConversationMedia(val) {
      if (val != null) {
        this.scrollToElement();
      }
    },
    getFriendData: function getFriendData(val) {
      console.log("getFriendData", this.isObjectEmpty(val));
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
    SaveContact: function SaveContact() {
      this.$store.dispatch("createNewFriend", this.$route.query.userIndex);
    },
    OpenChat: function OpenChat() {
      if (this.myUserProfile.id !== this.userSelected.id) {
        this.$router.push({
          path: "/chat",
          query: {
            chatId: this.getFriendData.chatId,
            userId: this.userSelected.id
          }
        });
      } else {
        this.$router.push({
          path: "/profileSettings",
          query: {}
        });
      }
    },
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
    readMessage: function readMessage(chatId, userId, chatType) {
      if (this.userSelected.id + "" !== userId || chatType !== "SINGLE_CAST") {
        this.$router.push({
          path: "/chat",
          query: {
            chatId: chatId,
            userId: userId
          }
        });
      } else {
        this.$router.push({
          path: "/profileSettings",
          query: {}
        });
      }
    },
    getNotificationDetails: function getNotificationDetails(notificationId) {
      console.log(notificationId);
    },
    openUserRequestDetails: function openUserRequestDetails(requestId) {
      this.$router.push({
        path: "/userRequestDetails",
        query: {
          requestId: requestId
        }
      });
    },
    scrollToElement: function scrollToElement() {
      var el = this.$refs.scrollToMe;
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({
          behavior: "smooth"
        });
      }
    },
    isObjectEmpty: function isObjectEmpty(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          return false;
        }
      }
      return JSON.stringify(obj) === JSON.stringify({});
    },
    BlockUser: function BlockUser() {
      this.$store.dispatch("blockUser", this.$route.query.userIndex);
    },
    UnblockUser: function UnblockUser() {
      this.$store.dispatch("unblockUser", this.$route.query.userIndex);
    },
    ReportUser: function ReportUser() {
      this.$router.push({
        path: "/chat",
        query: {
          chatId: this.getCustomerCareChatGroupId,
          userId: this.myUserProfile.userId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesAndMedia.vue?vue&type=template&id=1530d589&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesAndMedia.vue?vue&type=template&id=1530d589& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-row", {
    staticClass: "py-0 px-0"
  }, [_c("v-slide-group", {
    staticClass: "pa-4",
    attrs: {
      multiple: "",
      "show-arrows": ""
    }
  }, _vm._l(_vm.data, function (photo) {
    return _c("v-slide-item", {
      key: photo.id
    }, [_c("v-card", {
      staticClass: "ma-4",
      attrs: {
        elevation: "12",
        height: "200",
        width: "200"
      }
    }, [_c("v-img", {
      attrs: {
        height: "200",
        src: "".concat(_vm.uploads).concat(photo.message)
      }
    })], 1)], 1);
  }), 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/UserPublicProfile.vue?vue&type=template&id=519a9723&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/UserPublicProfile.vue?vue&type=template&id=519a9723& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-app", [_c("v-app-bar", {
    attrs: {
      app: ""
    }
  }, [_c("v-app-bar-nav-icon", {
    attrs: {
      to: "/home"
    }
  }, [_c("v-icon", [_vm._v("mdi-arrow-left-thick")])], 1), _vm._v(" "), _c("v-toolbar-title", [_vm._v("Profile")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-menu", {
    attrs: {
      "offset-y": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on;
        return [_c("v-btn", _vm._g({
          attrs: {
            dark: "",
            icon: ""
          }
        }, on), [_vm.countNewMessages < 1 ? _c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-chat")]) : _c("v-badge", {
          attrs: {
            overlap: ""
          },
          scopedSlots: _vm._u([{
            key: "badge",
            fn: function fn() {
              return [_c("span", {
                staticClass: "caption"
              }, [_vm._v(_vm._s(_vm.countNewMessages))])];
            },
            proxy: true
          }], null, true)
        }, [_vm._v(" "), _c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-chat")])], 1)], 1)];
      }
    }])
  }, [_vm._v(" "), _c("v-card", [_c("v-list", {
    attrs: {
      dense: ""
    }
  }, [_c("v-subheader", [_c("router-link", {
    attrs: {
      to: "inbox"
    }
  }, [_c("h6", [_vm._v("Open Messages")])])], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _vm._l(_vm.getNewMessages, function (message) {
    return _c("v-list-item", {
      key: message.id,
      attrs: {
        link: ""
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.readMessage(message.id, message.senderId === _vm.myUserProfile.id + "" ? message.recieverId : message.senderId);
        }
      }
    }, [_c("v-list-item-icon", [_c("v-avatar", {
      attrs: {
        size: "35"
      }
    }, [_c("v-img", {
      attrs: {
        alt: "",
        src: "".concat(_vm.uploads).concat(message.chatType === "SINGLE_CAST" ? message.profilePicture : message.logoUrl)
      }
    })], 1)], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "primary--text"
    }, [_vm._v(_vm._s(message.chatType === "SINGLE_CAST" ? message.userName : message.label) + "\n              "), _c("br"), _vm._v("\n              " + _vm._s(message.contentType === "text" ? message.message : "File Data"))])], 1);
  }), _vm._v(" "), _vm.countNewMessages < 1 ? _c("v-list-item", [_c("v-list-item-title", {
    staticClass: "primary--text"
  }, [_vm._v("You have no new messages yet...")])], 1) : _vm._e()], 2)], 1)], 1), _vm._v(" "), _c("v-menu", {
    attrs: {
      "offset-y": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref2) {
        var on = _ref2.on;
        return [_c("v-btn", _vm._g({
          attrs: {
            dark: "",
            icon: ""
          }
        }, on), [_vm.countNewNotifications < 1 ? _c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-bell")]) : _c("v-badge", {
          attrs: {
            overlap: ""
          },
          scopedSlots: _vm._u([{
            key: "badge",
            fn: function fn() {
              return [_c("span", {
                staticClass: "caption"
              }, [_vm._v(_vm._s(_vm.countNewNotifications))])];
            },
            proxy: true
          }], null, true)
        }, [_vm._v(" "), _c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-bell")])], 1)], 1)];
      }
    }])
  }, [_vm._v(" "), _c("v-card", [_c("v-list", {
    attrs: {
      dense: ""
    }
  }, [_c("v-subheader", [_c("h6", [_vm._v("Notifications")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _vm._l(_vm.getUserNotifications, function (notification) {
    return _c("v-list-item", {
      key: notification.id,
      attrs: {
        link: ""
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.getNotificationDetails(notification.id);
        }
      }
    }, [_c("v-list-item-icon", [_c("v-avatar", {
      attrs: {
        size: "35"
      }
    }, [_c("v-img", {
      attrs: {
        alt: "",
        src: "".concat(_vm.uploads).concat(notification.iconUrl)
      }
    })], 1)], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "primary--text"
    }, [_vm._v(_vm._s(notification.message) + " "), _c("br"), _vm._v("\n              " + _vm._s(notification.creationTime))])], 1);
  }), _vm._v(" "), _vm.countNewNotifications < 1 ? _c("v-list-item", [_c("v-list-item-title", {
    staticClass: "primary--text"
  }, [_vm._v("You have no notifications yet...")])], 1) : _vm._e()], 2)], 1)], 1), _vm._v(" "), _c("v-menu", {
    attrs: {
      "offset-y": ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref3) {
        var on = _ref3.on;
        return [_c("v-btn", _vm._g({
          attrs: {
            dark: "",
            icon: ""
          }
        }, on), [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-shield-account")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c("v-card", [_c("v-list", {
    attrs: {
      dense: ""
    }
  }, [_c("v-container", [_c("v-switch", {
    attrs: {
      inset: "",
      label: "Dark Mode"
    },
    on: {
      change: _vm.switchTheme
    },
    model: {
      value: _vm.themeSwitch,
      callback: function callback($$v) {
        _vm.themeSwitch = $$v;
      },
      expression: "themeSwitch"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _vm._l(_vm.settings, function (notification) {
    return _c("v-list-item", {
      key: "notification-key-".concat(notification.id),
      attrs: {
        link: "",
        to: notification.href
      }
    }, [_c("v-list-item-icon", [_c("v-icon", {
      attrs: {
        color: "primary"
      }
    }, [_vm._v(_vm._s(notification.icon))])], 1), _vm._v(" "), _c("v-list-item-title", {
      staticClass: "primary--text"
    }, [_vm._v(_vm._s(notification.title))])], 1);
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c("v-main", [_c("v-container", {
    attrs: {
      width: "100%"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-6 pa-5",
    attrs: {
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "py-0",
    attrs: {
      lg: "12",
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      xxs: "12"
    }
  }, [_c("v-card", {
    staticClass: "mb-1 pa-1"
  }, [_c("v-row", {
    staticClass: "pa-1"
  }, [_c("v-col", {
    staticClass: "center relative",
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", {
    staticClass: "mx-auto",
    attrs: {
      tile: ""
    }
  }, [_c("v-img", {
    attrs: {
      height: "300",
      src: "".concat(_vm.uploads).concat(_vm.userSelected.cover_picture)
    }
  }), _vm._v(" "), _vm.getFriendData === null ? _c("div", [_c("v-tooltip", {
    attrs: {
      top: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref4) {
        var on = _ref4.on;
        return [_c("v-btn", _vm._g({
          staticClass: "mx-0 my-10",
          attrs: {
            fab: "",
            small: "",
            color: "#32BCC3",
            absolute: "",
            right: "",
            top: "",
            dark: ""
          },
          on: {
            click: _vm.SaveContact
          }
        }, on), [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("mdi-account-plus")])], 1)];
      }
    }], null, false, 1704653610)
  }, [_vm._v(" "), _c("span", [_vm._v("Save Contact")])])], 1) : _vm.getFriendData.blocked === "false" && _vm.getFriendData !== null ? _c("div", [_c("v-tooltip", {
    attrs: {
      top: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref5) {
        var on = _ref5.on;
        return [_c("v-btn", _vm._g({
          staticClass: "mx-0 my-10",
          attrs: {
            fab: "",
            small: "",
            color: "#32BCC3",
            absolute: "",
            right: "",
            top: "",
            dark: ""
          },
          on: {
            click: _vm.OpenChat
          }
        }, on), [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("mdi-message")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c("span", [_vm._v("Send Message")])])], 1) : _vm._e(), _vm._v(" "), _c("v-row", {
    staticStyle: {
      margin: "2.5%",
      position: "absolute",
      top: "220px"
    }
  }, [_c("v-list-item", {
    staticClass: "center relative",
    attrs: {
      center: ""
    }
  }, [_c("v-list-item-avatar", {
    staticClass: "center relative",
    attrs: {
      size: "150",
      center: ""
    }
  }, [_c("v-img", {
    staticClass: "card-img",
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.userSelected.profile_picture)
    }
  })], 1), _vm._v(" "), _c("v-list-item-content", [_c("v-list-item-title", {
    staticClass: "title",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_vm._v(_vm._s(_vm.userSelected.name))]), _vm._v(" "), _c("v-list-item-subtitle", [_vm._v("Joined:\n                                  " + _vm._s(_vm.userSelected.created_at) + "\n                                  |\n                                  " + _vm._s(_vm.userSelected.address_label !== null ? "Lives: ".concat(_vm.userSelected.address_label) : "Lives: Kampala, Uganda"))]), _vm._v(" "), _c("v-list-item-subtitle", [_vm._v(_vm._s(_vm.userSelected.about !== null ? _vm.userSelected.about : "I look at it from a completely deferent lense."))])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-12",
    staticStyle: {
      "margin-top": "50px"
    },
    attrs: {
      lg: "12",
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      lg: "4",
      cols: "12"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("v-row", {
    staticClass: "no-gutters"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "cyan fill-height"
  }, [_vm._v(" ")])]), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 py-4 cyan--text"
  }, [_c("h5", {
    staticClass: "text-truncate text-uppercase"
  }, [_vm._v("\n                                Security\n                              ")])])]), _vm._v(" "), _vm.getFriendData === null ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "px-2 py-2",
    on: {
      click: _vm.BlockUser
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "3"
    }
  }, [_c("v-icon", {
    attrs: {
      dark: "",
      color: "red"
    }
  }, [_vm._v("mdi-account-check")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "9"
    }
  }, [_c("h5", {
    staticClass: "text-truncate red--text"
  }, [_vm._v("\n                                    Block User\n                                  ")])])], 1)], 1)], 1) : _vm.getFriendData.blocked === "false" && _vm.getFriendData !== null ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "px-2 py-2",
    on: {
      click: _vm.BlockUser
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "3"
    }
  }, [_c("v-icon", {
    attrs: {
      dark: "",
      color: "red"
    }
  }, [_vm._v("mdi-account-check")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "9"
    }
  }, [_c("h5", {
    staticClass: "text-truncate red--text"
  }, [_vm._v("\n                                    Block User\n                                  ")])])], 1)], 1)], 1) : _vm.getFriendData.blocked === "true" && _vm.getFriendData.blockerId == _vm.myUserProfile.userId ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "px-2 py-2",
    on: {
      click: _vm.UnblockUser
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "3"
    }
  }, [_c("v-icon", {
    attrs: {
      dark: "",
      color: "red"
    }
  }, [_vm._v("mdi-account-lock")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "9"
    }
  }, [_c("h5", {
    staticClass: "text-truncate red--text"
  }, [_vm._v("\n                                    Unblock User\n                                  ")])])], 1)], 1)], 1) : _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "px-2 py-2"
  }, [_c("v-row", [_c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "3"
    }
  }, [_c("v-icon", {
    attrs: {
      dark: "",
      color: "red"
    }
  }, [_vm._v("mdi-block-helper")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "9"
    }
  }, [_c("h5", {
    staticClass: "text-truncate red--text"
  }, [_vm._v("\n                                    You are blocked\n                                  ")])])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "px-2 py-2",
    on: {
      click: _vm.ReportUser
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "3"
    }
  }, [_c("v-icon", {
    attrs: {
      dark: "",
      color: "red"
    }
  }, [_vm._v("mdi-thumb-down")])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "9"
    }
  }, [_c("h5", {
    staticClass: "text-truncate red--text"
  }, [_vm._v("\n                                    Report User\n                                  ")])])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "8",
      cols: "12"
    }
  }, [_c("v-card", [_c("v-row", {
    staticClass: "no-gutters"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "cyan fill-height"
  }, [_vm._v(" ")])]), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 py-4 cyan--text"
  }, [_c("h5", {
    staticClass: "text-truncate text-uppercase"
  }, [_vm._v("\n                              Files And Media\n                            ")])])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("FilesAndMedia", {
    attrs: {
      data: _vm.getFriendChatConversationMedia
    }
  })], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "overline mb-1 pt-6",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        Manage & track all your shipments.\n      ")])], 1), _vm._v(" "), _c("v-footer", {
    staticClass: "py-3",
    attrs: {
      app: ""
    }
  }, [_c("span", {
    staticClass: "ml-auto overline"
  }, [_vm._v("NSIIMBI.COM ©" + _vm._s(new Date().getFullYear()))])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/FilesAndMedia.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/FilesAndMedia.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesAndMedia_vue_vue_type_template_id_1530d589___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesAndMedia.vue?vue&type=template&id=1530d589& */ "./resources/js/components/FilesAndMedia.vue?vue&type=template&id=1530d589&");
/* harmony import */ var _FilesAndMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesAndMedia.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesAndMedia.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesAndMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesAndMedia_vue_vue_type_template_id_1530d589___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesAndMedia_vue_vue_type_template_id_1530d589___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesAndMedia.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/customer/UserPublicProfile.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/customer/UserPublicProfile.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserPublicProfile_vue_vue_type_template_id_519a9723___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPublicProfile.vue?vue&type=template&id=519a9723& */ "./resources/js/views/customer/UserPublicProfile.vue?vue&type=template&id=519a9723&");
/* harmony import */ var _UserPublicProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPublicProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/customer/UserPublicProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPublicProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPublicProfile_vue_vue_type_template_id_519a9723___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserPublicProfile_vue_vue_type_template_id_519a9723___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customer/UserPublicProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesAndMedia.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FilesAndMedia.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesAndMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesAndMedia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesAndMedia.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesAndMedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/customer/UserPublicProfile.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/customer/UserPublicProfile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPublicProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPublicProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/UserPublicProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPublicProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesAndMedia.vue?vue&type=template&id=1530d589&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilesAndMedia.vue?vue&type=template&id=1530d589& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesAndMedia_vue_vue_type_template_id_1530d589___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesAndMedia_vue_vue_type_template_id_1530d589___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesAndMedia_vue_vue_type_template_id_1530d589___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesAndMedia.vue?vue&type=template&id=1530d589& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesAndMedia.vue?vue&type=template&id=1530d589&");


/***/ }),

/***/ "./resources/js/views/customer/UserPublicProfile.vue?vue&type=template&id=519a9723&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/customer/UserPublicProfile.vue?vue&type=template&id=519a9723& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPublicProfile_vue_vue_type_template_id_519a9723___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPublicProfile_vue_vue_type_template_id_519a9723___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPublicProfile_vue_vue_type_template_id_519a9723___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserPublicProfile.vue?vue&type=template&id=519a9723& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/UserPublicProfile.vue?vue&type=template&id=519a9723&");


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