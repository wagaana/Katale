"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_customer_messaging_Inbox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
      findFriendsDialog: false,
      queryText: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["userSearch"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getUserSearch"])),
  watch: {
    queryText: function queryText(val) {
      if (val != null) {
        this.$store.dispatch("searchUsers", val);
      }
    }
  },
  methods: {
    searchUsers: function searchUsers() {
      this.$store.dispatch("searchUsers", this.queryText);
    },
    openUserPublicProfile: function openUserPublicProfile(userId) {
      this.$router.push({
        path: "/userPublicProfile",
        query: {
          userIndex: userId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Inbox.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Inbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/constants */ "./resources/js/utils/constants.js");
/* harmony import */ var _components_AddFriend_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/AddFriend.vue */ "./resources/js/components/AddFriend.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddFriend: _components_AddFriend_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
      tab: 0,
      tabs: [{
        name: "Messages",
        icon: "mdi-email"
      }, {
        name: "Contacts",
        icon: "mdi-contacts"
      }],
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
    this.$store.dispatch("getChats");
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
    this.$store.dispatch("fetchFriends");
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["friends", "chats", "myUserProfile", "newMessages", "userNotifications"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["messageAlert", "getFriends", "getChats", "myUserProfile", "getNewMessages", "getUserNotifications"])), {}, {
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
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("getChats");
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("fetchFriends");
      }
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
    chats: function chats(val) {
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
    readMessage: function readMessage(chatId, userId, chatType) {
      if (this.myUserProfile.id + "" !== userId + "" || chatType !== "SINGLE_CAST") {
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
      return msg.senderId !== this.userSelected.id ? true : false;
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
    },
    openUserPublicProfile: function openUserPublicProfile(userId) {
      this.$router.push({
        path: "/userPublicProfile",
        query: {
          userIndex: userId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=template&id=73901578& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", [_c("v-row", [_c("v-btn", {
    attrs: {
      outlined: "",
      rounded: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.findFriendsDialog = true;
      }
    }
  }, [_vm._v("\n            Add New\n        ")]), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.findFriendsDialog,
      callback: function callback($$v) {
        _vm.findFriendsDialog = $$v;
      },
      expression: "findFriendsDialog"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("v-text-field", {
    attrs: {
      "append-icon": "mdi-shield-account",
      label: "Find Friends",
      "hide-details": "",
      dense: "",
      outlined: ""
    },
    on: {
      change: _vm.searchUsers
    },
    model: {
      value: _vm.queryText,
      callback: function callback($$v) {
        _vm.queryText = $$v;
      },
      expression: "queryText"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-text", _vm._l(_vm.getUserSearch, function (profile) {
    return _c("v-col", {
      key: profile.id,
      attrs: {
        cols: "12",
        sm: "12",
        order: "-1",
        "order-sm": "2"
      }
    }, [_c("v-card", {
      staticClass: "px-2 py-2",
      on: {
        click: function click($event) {
          return _vm.openUserPublicProfile(profile.id);
        }
      }
    }, [_c("v-row", [_c("v-col", {
      staticClass: "py-4 center",
      attrs: {
        cols: "12",
        "offset-sm": "0",
        sm: "3"
      }
    }, [_c("v-avatar", {
      attrs: {
        size: "60"
      }
    }, [_c("v-img", {
      staticClass: "card-img",
      attrs: {
        src: "".concat(_vm.uploads).concat(profile.profile_picture)
      }
    })], 1)], 1), _vm._v(" "), _c("v-col", {
      attrs: {
        cols: "12",
        sm: "8"
      }
    }, [_c("v-row", [_c("v-col", {
      attrs: {
        cols: "12"
      }
    }, [_c("h2", {
      staticClass: "title cyan--text hover"
    }, [_vm._v("\n                                                " + _vm._s(profile.name) + "\n                                            ")]), _vm._v(" "), _c("p", {
      staticClass: "font-weight-light grey--text text--darken-1 body-2"
    }, [_vm._v("\n                                                @" + _vm._s(profile.user_name) + "\n                                            ")])])], 1)], 1)], 1)], 1)], 1);
  }), 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Inbox.vue?vue&type=template&id=6d704f2e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Inbox.vue?vue&type=template&id=6d704f2e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-app", {
    staticClass: "fill-height"
  }, [_c("v-app-bar", {
    attrs: {
      app: ""
    }
  }, [_c("v-app-bar-nav-icon", {
    attrs: {
      to: "/home"
    }
  }, [_c("v-icon", [_vm._v("mdi-arrow-left-thick")])], 1), _vm._v(" "), _c("v-toolbar-title", [_vm._v("Inbox")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-menu", {
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
    }, [_vm._v(_vm._s(message.chatType === "SINGLE_CAST" ? message.userName : message.label) + "\n                            "), _c("br"), _vm._v("\n                            " + _vm._s(message.contentType === "text" ? message.message : "File Data"))])], 1);
  }), _vm._v(" "), _vm.countNewMessages < 1 ? _c("v-list-item", [_c("v-list-item-title", {
    staticClass: "primary--text"
  }, [_vm._v("You have no new messages\n                            yet...")])], 1) : _vm._e()], 2)], 1)], 1), _vm._v(" "), _c("v-menu", {
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
    }, [_vm._v(_vm._s(notification.message) + " "), _c("br"), _vm._v("\n                            " + _vm._s(notification.creationTime))])], 1);
  }), _vm._v(" "), _vm.countNewNotifications < 1 ? _c("v-list-item", [_c("v-list-item-title", {
    staticClass: "primary--text"
  }, [_vm._v("You have no notifications\n                            yet...")])], 1) : _vm._e()], 2)], 1)], 1), _vm._v(" "), _c("v-menu", {
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
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-main", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-card", [_c("v-row", {
    staticClass: "py-0 px-2 elevation-2"
  }, [_c("v-col", {
    staticClass: "py-1 elevation-2",
    attrs: {
      lg: "4",
      grow: ""
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
  }), _vm._v(" "), _vm._l(_vm.tabs, function (t) {
    return _c("v-tab", {
      key: t
    }, [_c("div", {
      staticClass: "caption py-1"
    }, [_vm._v("\n                                    " + _vm._s(t.name) + "\n                                    "), _c("v-icon", {
      domProps: {
        textContent: _vm._s(t.icon)
      }
    })], 1)]);
  })], 2), _vm._v(" "), _c("v-tabs-items", {
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
  }, [_c("v-tab-item", [_c("v-container", {
    ref: "scrollToMe",
    staticClass: "flex-grow-1 overflow-y-auto fill-height pa-0",
    staticStyle: {
      "max-height": "63vh"
    },
    attrs: {
      "fill-height": "",
      height: "100%"
    }
  }, [_c("v-responsive", [_vm.getChats.length === 0 ? _c("div", {
    staticClass: "text-center px-2"
  }, [_vm._v("\n                                            You have no chats yes\n                                        ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.getChats, function (message, i) {
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
        src: "".concat(_vm.uploads).concat(message.chatType !== "SINGLE_CAST" ? _vm.myUserProfile.id + "" === message.chatSenderId ? message.logoUrl : message.profile_picture : message.profile_picture)
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
          return _vm.readMessage(message.id, message.userId, message.chatType);
        }
      }
    }, [_c("h4", {
      "class": !message.read ? "font-italic" : ""
    }, [_vm._v("\n                                                            " + _vm._s(message.chatType !== "SINGLE_CAST" ? _vm.myUserProfile.id + "" === message.chatSenderId ? message.label : "CC: " + message.name : message.name) + "\n\n                                                            "), _c("v-icon", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: message.read,
        expression: "\n                                                                    message.read\n                                                                "
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
    }, [_vm._v("\n                                                        " + _vm._s(message.sentTime) + "\n                                                    ")]), _vm._v(" "), _c("v-col", {
      staticClass: "py-0",
      attrs: {
        cols: "12"
      },
      on: {
        click: function click($event) {
          return _vm.readMessage(message.id, message.userId, message.chatType);
        }
      }
    }, [_c("div", [_vm._v("\n                                                            " + _vm._s(_vm.decodeTextMessage(message.contentType === "text" ? message.message : _vm.getMessageTitle(message.contentType))) + "\n                                                        ")])])], 1)], 1)], 1);
  })], 2)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-container", {
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
  }, [_c("v-row", {
    staticClass: "no-gutters"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "cyan fill-height"
  }, [_vm._v("\n                                                     \n                                                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 py-5 cyan--text"
  }, [_c("h5", {
    staticClass: "text-truncate text-uppercase"
  }, [_vm._v("\n                                                    My Contacts\n                                                ")])]), _vm._v(" "), _c("v-card-actions", [_c("AddFriend")], 1)], 1), _vm._v(" "), _vm.getFriends.length === 0 ? _c("div", {
    staticClass: "text-center px-2"
  }, [_vm._v("\n                                            You have no contacts here\n                                        ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.getFriends, function (userProfile, i) {
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
        src: "".concat(_vm.uploads).concat(userProfile.profile_picture)
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
        sm: "12",
        cols: "12"
      },
      on: {
        click: function click($event) {
          return _vm.readMessage(userProfile.chatId, userProfile.userId === _vm.myUserProfile.id + "" ? userProfile.accountId : userProfile.userId, "SINGLE_CAST");
        }
      }
    }, [_c("h4", [_vm._v("\n                                                            " + _vm._s(userProfile.name) + "\n                                                            "), _c("v-icon", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: userProfile.read,
        expression: "\n                                                                    userProfile.read\n                                                                "
      }],
      attrs: {
        small: "",
        title: "Read"
      }
    }, [_vm._v("mdi-check")])], 1)]), _vm._v(" "), _c("v-col", {
      staticClass: "py-0",
      attrs: {
        cols: "12"
      }
    }, [_c("div", [_vm._v("\n                                                            @" + _vm._s(userProfile.user_name) + "\n                                                        ")])])], 1)], 1)], 1);
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
  }, [_vm._v("\n                Manage & track all your shipments.\n            ")])], 1), _vm._v(" "), _c("v-footer", {
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

/***/ "./resources/js/components/AddFriend.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AddFriend.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=template&id=73901578& */ "./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&");
/* harmony import */ var _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFriend.vue?vue&type=script&lang=js& */ "./resources/js/components/AddFriend.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddFriend.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/customer/messaging/Inbox.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/customer/messaging/Inbox.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inbox_vue_vue_type_template_id_6d704f2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inbox.vue?vue&type=template&id=6d704f2e& */ "./resources/js/views/customer/messaging/Inbox.vue?vue&type=template&id=6d704f2e&");
/* harmony import */ var _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inbox.vue?vue&type=script&lang=js& */ "./resources/js/views/customer/messaging/Inbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Inbox_vue_vue_type_template_id_6d704f2e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Inbox_vue_vue_type_template_id_6d704f2e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customer/messaging/Inbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddFriend.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AddFriend.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddFriend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/customer/messaging/Inbox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/customer/messaging/Inbox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Inbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/AddFriend.vue?vue&type=template&id=73901578& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFriend_vue_vue_type_template_id_73901578___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddFriend.vue?vue&type=template&id=73901578& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddFriend.vue?vue&type=template&id=73901578&");


/***/ }),

/***/ "./resources/js/views/customer/messaging/Inbox.vue?vue&type=template&id=6d704f2e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/customer/messaging/Inbox.vue?vue&type=template&id=6d704f2e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_6d704f2e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_6d704f2e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_6d704f2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=template&id=6d704f2e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/messaging/Inbox.vue?vue&type=template&id=6d704f2e&");


/***/ })

}]);