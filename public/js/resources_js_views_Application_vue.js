(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Application_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./resources/js/utils/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      sidebarMenu: true,
      toggleMini: false,
      themeSwitch: false,
      theme: false,
      icon: (_assets_logo_png__WEBPACK_IMPORTED_MODULE_1___default()),
      items: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.mainMenuItems,
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.uploads,
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
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
  },
  computed: _objectSpread(_objectSpread(_objectSpread({
    mini: function mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["myUserProfile", "newMessages", "userNotifications"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["messageAlert", "myUserProfile", "getNewMessages", "getUserNotifications", "isAuthenticated"])), {}, {
    countNewNotifications: function countNewNotifications() {
      return this.getUserNotifications.length > 0 ? this.getUserNotifications.length : 0;
    },
    countNewMessages: function countNewMessages() {
      return this.getNewMessages.length > 0 ? this.getNewMessages.length : 0;
    }
  }),
  watch: {
    isAuthenticated: function isAuthenticated(val) {
      if (!val) {
        next("/login");
      }
    }
  },
  mounted: function mounted() {
    // let theme = ;
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
    readMessage: function readMessage(chatId, userId, chatType) {
      if (this.myUserProfile.userId !== userId || chatType !== "SINGLE_CAST") {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=template&id=52ddfd01&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=template&id=52ddfd01&scoped=true& ***!
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
  return _c("v-app", [_c("v-app-bar", {
    attrs: {
      app: ""
    }
  }, [_c("v-app-bar-nav-icon", {
    on: {
      click: function click($event) {
        _vm.toggleMini = !_vm.toggleMini;
      }
    }
  }), _vm._v(" "), _c("v-toolbar-title", [_vm._v("Dashboard")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-menu", {
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
        }, [_vm._v("fa-chat")])], 1)], 1)];
      }
    }])
  }, [_vm._v(" "), _c("v-card", [_c("v-list", {
    attrs: {
      dense: ""
    }
  }, [_c("v-subheader", [_c("router-link", {
    attrs: {
      to: "/inbox"
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
          return _vm.readMessage(message.id, message.senderId === _vm.myUserProfile.userId ? message.recieverId : message.senderId, message.chatType);
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
      label: _vm.themeSwitch ? "Dark Mode" : "Light Mode"
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
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c("v-navigation-drawer", {
    attrs: {
      permanent: "",
      app: "",
      "mini-variant": _vm.mini,
      color: _vm.theme ? "grey darken-4" : ""
    },
    on: {
      "update:miniVariant": function updateMiniVariant($event) {
        _vm.mini = $event;
      },
      "update:mini-variant": function updateMiniVariant($event) {
        _vm.mini = $event;
      }
    },
    model: {
      value: _vm.sidebarMenu,
      callback: function callback($$v) {
        _vm.sidebarMenu = $$v;
      },
      expression: "sidebarMenu"
    }
  }, [_vm.myUserProfile ? _c("v-list-item", {
    staticClass: "px-2 pb-0",
    on: {
      click: function click($event) {
        _vm.toggleMini = !_vm.toggleMini;
      }
    }
  }, [_c("v-list-item-avatar", [_c("img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.myUserProfile.profile_picture)
    }
  })]), _vm._v(" "), _c("v-list-item-content", {
    staticClass: "text-truncate"
  }, [_vm._v("\n        " + _vm._s(_vm.myUserProfile.name) + "\n      ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      icon: "",
      small: ""
    }
  }, [_c("v-icon", [_vm._v("mdi-chevron-left")])], 1)], 1) : _c("v-list-item", {
    staticClass: "px-2 pb-0",
    on: {
      click: function click($event) {
        _vm.toggleMini = !_vm.toggleMini;
      }
    }
  }, [_c("v-list-item-avatar", [_c("img", {
    attrs: {
      src: _vm.icon
    }
  })]), _vm._v(" "), _c("v-list-item-content", {
    staticClass: "text-truncate"
  }, [_vm._v("\n        EXCHANGE\n      ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      icon: "",
      small: ""
    }
  }, [_c("v-icon", [_vm._v("mdi-chevron-left")])], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list", _vm._l(_vm.items, function (item) {
    return _c("v-list-item", {
      key: item.title,
      staticStyle: {
        "text-decoration": "none"
      },
      attrs: {
        to: item.href
      }
    }, [_c("v-list-item-icon", [_c("v-icon", {
      attrs: {
        color: "primary"
      }
    }, [_vm._v(_vm._s(item.icon))])], 1), _vm._v(" "), _c("v-list-item-content", [_c("v-list-item-title", {
      staticClass: "primary--text"
    }, [_vm._v(_vm._s(item.title))])], 1)], 1);
  }), 1)], 1), _vm._v(" "), _c("v-main", [_c("v-container", {
    staticClass: "px-4 py-12 fill-height",
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", {
    staticClass: "fill-height"
  }, [_c("v-col", [_c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_c("router-view")], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-footer", {
    staticClass: "py-3",
    attrs: {
      app: "",
      elevation: "2"
    }
  }, [_c("span", {
    staticClass: "ml-auto overline"
  }, [_vm._v("nsiimbi.com ©2021")])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/logo.png":
/*!***********************************!*\
  !*** ./resources/assets/logo.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "/images/logo.png?da4d6fae660790bcdc10327028833f26";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\na[data-v-52ddfd01] {\n  text-decoration: none !important;\n}\na[data-v-52ddfd01]:hover {\n  text-decoration: none !important;\n}\n#app[data-v-52ddfd01] {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_id_52ddfd01_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_id_52ddfd01_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_id_52ddfd01_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/Application.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Application.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_vue_vue_type_template_id_52ddfd01_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application.vue?vue&type=template&id=52ddfd01&scoped=true& */ "./resources/js/views/Application.vue?vue&type=template&id=52ddfd01&scoped=true&");
/* harmony import */ var _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application.vue?vue&type=script&lang=js& */ "./resources/js/views/Application.vue?vue&type=script&lang=js&");
/* harmony import */ var _Application_vue_vue_type_style_index_0_id_52ddfd01_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css& */ "./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_52ddfd01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Application_vue_vue_type_template_id_52ddfd01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "52ddfd01",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Application.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Application.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Application.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Application.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Application.vue?vue&type=template&id=52ddfd01&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Application.vue?vue&type=template&id=52ddfd01&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_52ddfd01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_52ddfd01_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_52ddfd01_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Application.vue?vue&type=template&id=52ddfd01&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=template&id=52ddfd01&scoped=true&");


/***/ }),

/***/ "./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_style_index_0_id_52ddfd01_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Application.vue?vue&type=style&index=0&id=52ddfd01&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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