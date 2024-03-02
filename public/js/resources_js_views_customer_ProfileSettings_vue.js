(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_customer_ProfileSettings_vue"],{

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/***/ ((module) => {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActivityListItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActivityListItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["myUserProfile", "balance"],
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.uploads
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadPaymentMethods");
    this.$store.dispatch("fetchSupportedCountries");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(["paymentMethods", "paymentMethodCurencies"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["getPaymentMethods", "getPaymentMethodCurencies"])),
  filters: {
    exactDay: function exactDay(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("h:mm a, MMM DD YYYY");
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddNewApplication.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddNewApplication.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data"],
  data: function data() {
    return {
      findFriendsDialog: false,
      newApplication: {},
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
  methods: {
    submitApplication: function submitApplication() {
      this.$store.dispatch("submitApplication", this.newApplication);
      this.findFriendsDialog = false;
      this.newApplication = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_content_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-content-loader */ "./node_modules/vue-content-loader/dist/vue-content-loader.es.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ContentLoader: vue_content_loader__WEBPACK_IMPORTED_MODULE_0__.ContentLoader
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/ProfileSettings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/ProfileSettings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./resources/js/utils/constants.js");
/* harmony import */ var _components_AddNewApplication_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AddNewApplication.vue */ "./resources/js/components/AddNewApplication.vue");
/* harmony import */ var _components_ActivityListItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ActivityListItem.vue */ "./resources/js/components/ActivityListItem.vue");
/* harmony import */ var _components_loaders_TransactionsListLoader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loaders/TransactionsListLoader.vue */ "./resources/js/components/loaders/TransactionsListLoader.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddNewApplication: _components_AddNewApplication_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ActivityListItem: _components_ActivityListItem_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    TransactionsListLoader: _components_loaders_TransactionsListLoader_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    var _ref;
    return _ref = {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.uploads,
      overlay: false,
      sidebarMenu: true,
      toggleMini: false,
      themeSwitch: false,
      theme: false
    }, _defineProperty(_ref, "uploads", _utils_constants__WEBPACK_IMPORTED_MODULE_1__.uploads), _defineProperty(_ref, "activeFieldLabel", ""), _defineProperty(_ref, "activeField", ""), _defineProperty(_ref, "activeFieldValue", ""), _defineProperty(_ref, "activeApplication", {}), _defineProperty(_ref, "dialogApplicationInfo", false), _defineProperty(_ref, "showTocket", false), _defineProperty(_ref, "showKey", false), _defineProperty(_ref, "apiKeysheet", false), _defineProperty(_ref, "userPassword", null), _defineProperty(_ref, "showPassword", false), _defineProperty(_ref, "rules", {
      required: function required(value) {
        return !!value || "This field is required";
      },
      email: function email(v) {
        return /.+@.+\..+/.test(v) || "Must be a valid email";
      }
    }), _defineProperty(_ref, "settings", [{
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
    }]), _defineProperty(_ref, "dialogEditProfile", false), _defineProperty(_ref, "headers", [{
      text: "Image",
      align: "left",
      sortable: false,
      value: "profilePicture"
    }, {
      text: "Pick Up Addr",
      value: "pickUpAddress"
    }, {
      text: "Drop Off Addr",
      value: "dropOffAddress"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "Net",
      value: "net"
    }, {
      text: "Time",
      value: "timeAdded"
    }]), _ref;
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("getMyProfile");
    this.$store.dispatch("fetchNewMessages");
    this.$store.dispatch("fetchUserNotifications");
    this.$store.dispatch("loadMyApplications");
    this.$store.dispatch("fetchUserCompleteDeliveryRequest");
    this.$store.dispatch("fetchUserDeliveryRequest");
    this.$store.dispatch("getMyBalances");
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)(["userDeliveryRequests", "myUserProfile", "newMessages", "userNotifications", "myApplications", "userCompleteDeliveryRequest", "myBalances", "apiKey"])), (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["messageAlert", "getUserDeliveryRequests", "myUserProfile", "getNewMessages", "getUserNotifications", "getMyApplications", "getUserCompleteDeliveryRequest", "getMyBalances", "getapiKey"])), {}, {
    countNewNotifications: function countNewNotifications() {
      return this.getUserNotifications.length > 0 ? this.getUserNotifications.length : 0;
    },
    countNewMessages: function countNewMessages() {
      return this.getNewMessages.length > 0 ? this.getNewMessages.length : 0;
    }
  }),
  watch: _defineProperty({
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.$store.dispatch("getMyProfile");
        this.$store.dispatch("fetchNewMessages");
        this.$store.dispatch("fetchUserNotifications");
        this.$store.dispatch("loadMyApplications");
        this.$store.dispatch("fetchUserCompleteDeliveryRequest");
        this.$store.dispatch("fetchUserDeliveryRequest");
        this.$store.dispatch("getMyBalances");
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
    getapiKey: function getapiKey(val) {
      if (val != null) {
        this.showKey = true;
        this.apiKeysheet = false;
      }
    }
  }, "myUserProfile", function myUserProfile(val) {
    if (val != null) {
      this.myUserProfile.apiStatus = val.apiStatus == "true" ? true : false;
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
  filters: {
    exactDay: function exactDay(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("h:mm a, MMM DD YYYY");
    }
  },
  methods: {
    OpenProfileEditModule: function OpenProfileEditModule(field, label, value) {
      this.activeField = field;
      this.activeFieldLabel = label;
      this.activeFieldValue = value;
      this.dialogEditProfile = true;
    },
    updateUserProfile: function updateUserProfile() {
      if (this.activeFieldValue !== "") {
        var formData = new FormData();
        formData.append("editSubject", this.activeField);
        formData.append("editValue", this.activeFieldValue);
        this.$store.dispatch("updateUserProfileValue", formData);
      } else {
        this.$notify("error", "Update Error", this.activeFieldLabel + " Is Required", {
          duration: 3000,
          permanent: false
        });
      }
      this.dialogEditProfile = false;
    },
    handleImageChange: function handleImageChange(event) {
      var image = event.target.files[0];
      var formData = new FormData();
      formData.append("image", image);
      this.$store.dispatch("saveUserAvator", formData);
    },
    handleCoverImageChange: function handleCoverImageChange(event) {
      var image = event.target.files[0];
      var formData = new FormData();
      formData.append("image", image);
      this.$store.dispatch("uploadUserCoverPhoto", formData);
    },
    editProfileImage: function editProfileImage() {
      var profileImageInput = document.getElementById("profileImageInput");
      profileImageInput.click();
    },
    editImage: function editImage() {
      var imageInput = document.getElementById("imageInput");
      imageInput.click();
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
      if (this.myUserProfile.id !== userId || chatType !== "SINGLE_CAST") {
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
    openApplicationDetails: function openApplicationDetails(application) {
      this.activeApplication = application;
      this.dialogApplicationInfo = true;
    },
    deleteApplication: function deleteApplication(appId) {},
    resetApiKey: function resetApiKey() {
      var userPassword = this.userPassword;
      var email = this.myUserProfile.email;
      this.$store.dispatch("resetApiKey", {
        email: email,
        password: userPassword
      });
      this.apiKeysheet = false;
    },
    saveCallbackUrl: function saveCallbackUrl() {
      var formData = new FormData();
      formData.append("editSubject", "callbackURL");
      formData.append("editValue", this.myUserProfile.callbackURL);
      this.$store.dispatch("updateUserProfileValue", formData);
      this.apiKeysheet = false;
    },
    SwitchApiStatus: function SwitchApiStatus() {
      var formData = new FormData();
      formData.append("editSubject", "apiStatus");
      formData.append("editValue", this.myUserProfile.apiStatus);
      this.$store.dispatch("updateUserProfileValue", formData);
      this.apiKeysheet = false;
    },
    updateApplicationCallbackURL: function updateApplicationCallbackURL(appId) {
      var formData = new FormData();
      formData.append("appId", appId);
      formData.append("callbackURL", this.activeApplication.callbackURL);
      this.$store.dispatch("updateApplicationCallbackURL", formData);
      this.dialogApplicationInfo = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActivityListItem.vue?vue&type=template&id=2f4e0b6b&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActivityListItem.vue?vue&type=template&id=2f4e0b6b& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-card", {
    staticClass: "mb-4 pa-3"
  }, [_c("v-row", [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    "class": "".concat(_vm.balance.gross > 0 ? "success" : "error", " fill-height")
  }, [_vm._v("\n         \n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 ml-auto"
  }, [_c("v-row", [_c("div", {
    staticClass: "col-auto"
  }, [_c("v-row", {
    staticStyle: {
      "padding-bottom": "20px"
    }
  }, [_c("v-col", {
    staticClass: "px-3",
    attrs: {
      cols: "12",
      "offset-sm": "0",
      sm: "2"
    }
  }, [_c("v-avatar", {
    staticStyle: {
      "margin-right": "150px"
    },
    attrs: {
      size: "40"
    }
  }, [_c("v-img", {
    staticClass: "card-img",
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.balance.image)
    }
  })], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "10"
    }
  }, [_c("h2", {
    staticClass: "title cyan--text hover"
  }, [_vm._v("\n                " + _vm._s(_vm.balance.label) + "\n              ")])])], 1), _vm._v(" "), _c("v-list-item-title", {
    staticClass: "ml-auto"
  }, [_vm._v("\n            " + _vm._s(_vm._f("exactDay")(_vm.balance.created_at)) + "\n          ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-truncate text-uppercase layout"
  }, [_vm._v("\n            " + _vm._s(_vm.balance.transactionKey) + "\n          ")]), _vm._v(" "), _c("v-list-item-title", {
    staticClass: "ml-auto"
  }, [_vm._v("\n            Txn Fee: " + _vm._s(_vm.balance.currency) + " " + _vm._s(_vm.balance.fee) + "\n          ")]), _vm._v(" "), _c("v-list-item-title", {
    staticClass: "ml-auto"
  }, [_vm._v("\n            Txn " + _vm._s(_vm.balance.gross > 0 ? "Net" : "Gross") + ":\n            " + _vm._s(_vm.balance.currency) + "\n            " + _vm._s(_vm.balance.gross > 0 ? _vm.balance.net : _vm.balance.gross) + "\n          ")]), _vm._v(" "), _c("v-list-item-title", {
    staticClass: "ml-auto"
  }, [_vm._v("\n            " + _vm._s(_vm.myUserProfile.id + "" !== _vm.balance.transactionOwner ? _vm.balance.name : "") + "\n          ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 ml-auto"
  }, [_c("h3", {
    "class": "layout justify-end ".concat(_vm.balance.gross > 0 ? "success--text" : "error--text")
  }, [_vm._v("\n            " + _vm._s(_vm.balance.currency) + "\n            " + _vm._s(_vm.balance.gross > 0 ? _vm.balance.gross : _vm.balance.net) + "\n          ")])])])], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddNewApplication.vue?vue&type=template&id=f07e1994&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddNewApplication.vue?vue&type=template&id=f07e1994& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h2", [_vm._v("Add New Application")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("v-text-field", {
    attrs: {
      "append-icon": "mdi-shield-account",
      label: "Application Name",
      dense: "",
      outlined: "",
      rules: [_vm.rules.required]
    },
    model: {
      value: _vm.newApplication.label,
      callback: function callback($$v) {
        _vm.$set(_vm.newApplication, "label", $$v);
      },
      expression: "newApplication.label"
    }
  })], 1), _vm._v(" "), _c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("v-textarea", {
    attrs: {
      label: "description",
      rules: [_vm.rules.required],
      outlined: "",
      lines: "2",
      dense: ""
    },
    model: {
      value: _vm.newApplication.description,
      callback: function callback($$v) {
        _vm.$set(_vm.newApplication, "description", $$v);
      },
      expression: "newApplication.description"
    }
  })], 1), _vm._v(" "), _c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("v-file-input", {
    attrs: {
      label: "Icon",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.newApplication.image,
      callback: function callback($$v) {
        _vm.$set(_vm.newApplication, "image", $$v);
      },
      expression: "newApplication.image"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-2"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.findFriendsDialog = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.submitApplication
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=template&id=38233860&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=template&id=38233860& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("content-loader", {
    attrs: {
      height: 80,
      primaryColor: "#f3f3f3",
      secondaryColor: "#007bff"
    }
  }, [_c("rect", {
    attrs: {
      x: "25",
      y: "3",
      rx: "3",
      ry: "3",
      width: "30%",
      height: "8"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "25",
      y: "15",
      rx: "3",
      ry: "3",
      width: "15%",
      height: "6"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "0",
      y: "25",
      rx: "3",
      ry: "3",
      width: "30%",
      height: "6"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "0",
      y: "35",
      rx: "3",
      ry: "3",
      width: "40%",
      height: "6"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "0",
      y: "45",
      rx: "3",
      ry: "3",
      width: "30%",
      height: "6"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "10",
      cy: "10",
      r: "10"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "85%",
      y: "3",
      rx: "3",
      ry: "3",
      width: "15%",
      height: "12"
    }
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/ProfileSettings.vue?vue&type=template&id=6ab3a51a&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/ProfileSettings.vue?vue&type=template&id=6ab3a51a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
          return _vm.readMessage(message.id, message.senderId === _vm.myUserProfile.id ? message.recieverId : message.senderId, message.chatType);
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
      src: "".concat(_vm.uploads).concat(_vm.myUserProfile.cover_picture)
    }
  }), _vm._v(" "), _c("div", [_c("input", {
    attrs: {
      type: "file",
      id: "imageInput",
      hidden: ""
    },
    on: {
      change: _vm.handleCoverImageChange
    }
  }), _vm._v(" "), _c("v-tooltip", {
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
            click: _vm.editImage
          }
        }, on), [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("mdi-camera")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c("span", [_vm._v("Edit Profile Image")])])], 1), _vm._v(" "), _c("v-row", {
    staticStyle: {
      margin: "2.5%",
      position: "absolute",
      top: "220px"
    }
  }, [_c("v-list-item", {
    staticClass: "center relative ml-auto",
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
      src: "".concat(_vm.uploads).concat(_vm.myUserProfile.profile_picture)
    }
  })], 1), _vm._v(" "), _c("div", [_c("input", {
    attrs: {
      type: "file",
      id: "profileImageInput",
      hidden: ""
    },
    on: {
      change: _vm.handleImageChange
    }
  }), _vm._v(" "), _c("v-tooltip", {
    attrs: {
      bottom: ""
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref5) {
        var on = _ref5.on;
        return [_c("v-btn", _vm._g({
          staticClass: "mx-6 my-6",
          attrs: {
            fab: "",
            small: "",
            color: "#32BCC3",
            absolute: "",
            left: "",
            bottom: "",
            dark: ""
          },
          on: {
            click: _vm.editProfileImage
          }
        }, on), [_c("v-icon", {
          attrs: {
            dark: ""
          }
        }, [_vm._v("mdi-camera")])], 1)];
      }
    }])
  }, [_vm._v(" "), _c("span", [_vm._v("Edit Profile Image")])])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
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
  }, [_c("v-list-item-content", [_c("v-list-item-title", {
    staticClass: "title",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_vm._v(_vm._s(_vm.myUserProfile.name) + "\n                          "), _c("span", {
    style: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.OpenProfileEditModule("name", "Name", _vm.myUserProfile.name || "");
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "#32BCC3"
    }
  }, [_vm._v("mdi-pencil")])], 1)]), _vm._v(" "), _c("v-list-item-title", [_vm._v("\n                          " + _vm._s(_vm.myUserProfile.email) + "\n                          "), _c("span", {
    style: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.OpenProfileEditModule("email", "Email", _vm.myUserProfile.email || "");
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "#32BCC3"
    }
  }, [_vm._v("mdi-pencil")])], 1), _vm._v("\n                          |\n                          " + _vm._s(_vm.myUserProfile.phone)), _c("span", {
    style: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.OpenProfileEditModule("phone", "Phone", _vm.myUserProfile.phone || "");
      }
    }
  }, [_c("v-icon", {
    attrs: {
      color: "#32BCC3"
    }
  }, [_vm._v("mdi-pencil")])], 1)])], 1), _vm._v(" "), _c("v-card", [_c("v-card-title", {
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
  }, [_vm._v("\n                                My Applications\n                              ")])]), _vm._v(" "), _c("v-card-actions", [_c("AddNewApplication")], 1)], 1), _vm._v(" "), _vm._l(_vm.getMyApplications, function (app) {
    return _c("v-col", {
      key: app.id,
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
          return _vm.openApplicationDetails(app);
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
        src: "".concat(_vm.uploads).concat(app.imageUrl)
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
    }, [_vm._v("\n                                        " + _vm._s(app.label) + "\n                                      ")]), _vm._v(" "), _c("p", {
      staticClass: "font-weight-light grey--text text--darken-1 body-2"
    }, [_vm._v("\n                                        " + _vm._s(_vm._f("exactDay")(app.created_at)) + "\n                                      ")])])], 1)], 1)], 1)], 1)], 1);
  })], 2)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "8",
      cols: "12"
    }
  }, [_c("v-card", {
    staticClass: "pa-5"
  }, [_c("v-expansion-panels", {
    attrs: {
      value: 0
    }
  }, [_c("v-expansion-panel", [_c("v-expansion-panel-header", {
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-arrow-up-circle")])];
      },
      proxy: true
    }])
  }, [_vm._v("\n                              My API Account Details\n                              ")]), _vm._v(" "), _c("v-expansion-panel-content", [_c("v-switch", {
    attrs: {
      inset: "",
      label: _vm.myUserProfile.apiStatus ? "You Are In Live Mode (Real money is used)" : "You Are In Sandbox Mode (No Real money is used)"
    },
    on: {
      change: _vm.SwitchApiStatus
    },
    model: {
      value: _vm.myUserProfile.apiStatus,
      callback: function callback($$v) {
        _vm.$set(_vm.myUserProfile, "apiStatus", $$v);
      },
      expression: "myUserProfile.apiStatus"
    }
  }), _vm._v(" "), _c("v-row", [_c("v-col", {
    staticClass: "pb-2",
    attrs: {
      lg: "6",
      cols: "sm"
    }
  }, [_c("v-card", [_c("v-row", {
    staticClass: "no-gutters"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "cyan fill-height"
  }, [_vm._v("\n                                           \n                                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 py-4 cyan--text"
  }, [_c("h5", {
    staticClass: "text-truncate text-uppercase"
  }, [_vm._v("\n                                          Developer Community\n                                        ")]), _vm._v(" "), _c("p", [_vm._v("\n                                          We have built a Community for all\n                                          things integration (Forum, stop by\n                                          step integration) related. Please\n                                          visit the\n                                          "), _c("a", {
    attrs: {
      href: "https://join.skype.com/jHrVbbmR9GKL",
      target: "__BLANK"
    }
  }, [_vm._v("developer Community")])])])])], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "pb-2",
    attrs: {
      lg: "6",
      cols: "sm"
    }
  }, [_c("v-card", [_c("v-row", {
    staticClass: "no-gutters"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "cyan fill-height"
  }, [_vm._v("\n                                           \n                                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col pa-3 py-4 cyan--text"
  }, [_c("h5", {
    staticClass: "text-truncate text-uppercase"
  }, [_vm._v("\n                                          API reference\n                                        ")]), _vm._v(" "), _c("p", [_vm._v("\n                                          For the API reference you can view\n                                          the latest documentation with\n                                          snippets of code.Please visit the\n                                          "), _c("a", {
    attrs: {
      href: "/api_reference"
    }
  }, [_vm._v("API reference")])])])])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-expansion-panel", [_c("v-expansion-panel-header", {
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-arrow-up-circle")])];
      },
      proxy: true
    }])
  }, [_vm._v("\n                              Display API Credentials\n                              ")]), _vm._v(" "), _c("v-expansion-panel-content", [_c("v-container", [_c("v-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onBasicSubmit.apply(null, arguments);
      }
    }
  }, [_c("v-text-field", {
    attrs: {
      "append-icon": _vm.showKey ? "mdi-eye" : "mdi-eye-off",
      type: _vm.showKey ? "text" : "password",
      label: "Private Key",
      outlined: "",
      dense: ""
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.getapiKey === null ? _vm.apiKeysheet = !_vm.apiKeysheet : _vm.showKey = !_vm.showKey;
      }
    },
    model: {
      value: _vm.getapiKey,
      callback: function callback($$v) {
        _vm.getapiKey = $$v;
      },
      expression: "getapiKey"
    }
  }), _vm._v(" "), _vm.getapiKey === null ? _c("v-btn", {
    staticClass: "mt-4",
    attrs: {
      type: "submit",
      variant: "primary"
    },
    on: {
      click: function click($event) {
        _vm.apiKeysheet = !_vm.apiKeysheet;
      }
    }
  }, [_vm._v("Create API Key")]) : _c("v-btn", {
    staticClass: "mt-4",
    attrs: {
      type: "submit",
      variant: "primary"
    },
    on: {
      click: function click($event) {
        _vm.apiKeysheet = !_vm.apiKeysheet;
      }
    }
  }, [_vm._v("Reset Keys")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-expansion-panel", [_c("v-expansion-panel-header", {
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn() {
        return [_c("v-icon", {
          attrs: {
            color: "primary"
          }
        }, [_vm._v("mdi-arrow-up-circle")])];
      },
      proxy: true
    }])
  }, [_vm._v("\n                              API Settings\n                              ")]), _vm._v(" "), _c("v-expansion-panel-content", [_c("v-container", [_c("v-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onBasicSubmit.apply(null, arguments);
      }
    }
  }, [_c("v-text-field", {
    attrs: {
      label: "Callback URL",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.myUserProfile.callbackURL,
      callback: function callback($$v) {
        _vm.$set(_vm.myUserProfile, "callbackURL", $$v);
      },
      expression: "myUserProfile.callbackURL"
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "mt-4",
    attrs: {
      type: "submit",
      variant: "primary"
    },
    on: {
      click: _vm.saveCallbackUrl
    }
  }, [_vm._v("Save")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogEditProfile,
      callback: function callback($$v) {
        _vm.dialogEditProfile = $$v;
      },
      expression: "dialogEditProfile"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v(_vm._s("Edit ".concat(_vm.activeFieldLabel)))])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      label: "".concat(_vm.activeFieldLabel, " Value"),
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeFieldValue,
      callback: function callback($$v) {
        _vm.activeFieldValue = $$v;
      },
      expression: "activeFieldValue"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-2"
  }, [_c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogEditProfile = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary"
    },
    on: {
      click: _vm.updateUserProfile
    }
  }, [_vm._v("Update")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogApplicationInfo,
      callback: function callback($$v) {
        _vm.dialogApplicationInfo = $$v;
      },
      expression: "dialogApplicationInfo"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.activeApplication.label))])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.activeApplication.imageUrl),
      width: "350px",
      height: "100px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n              " + _vm._s(_vm.activeApplication.description) + "\n              "), _c("br"), _vm._v("\n              DATE: " + _vm._s(_vm._f("exactDay")(_vm.activeApplication.created_at)) + "\n              "), _c("br"), _vm._v("\n              STATUS:\n              " + _vm._s(_vm.activeApplication.approved === "false" ? "Pending" : "Aproved") + "\n            ")])]), _vm._v(" "), _c("v-card-text", [_c("v-text-field", {
    attrs: {
      "append-icon": _vm.showTocket ? "mdi-eye" : "mdi-eye-off",
      type: _vm.showTocket ? "text" : "password",
      label: "Private Key",
      outlined: "",
      dense: ""
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.showTocket = !_vm.showTocket;
      }
    },
    model: {
      value: _vm.activeApplication.app_token,
      callback: function callback($$v) {
        _vm.$set(_vm.activeApplication, "app_token", $$v);
      },
      expression: "activeApplication.app_token"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Callback URL",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.activeApplication.callbackURL,
      callback: function callback($$v) {
        _vm.$set(_vm.activeApplication, "callbackURL", $$v);
      },
      expression: "activeApplication.callbackURL"
    }
  })], 1), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "success",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.updateApplicationCallbackURL(_vm.activeApplication.id);
      }
    }
  }, [_vm._v("Save")]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogApplicationInfo = false;
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "red"
    },
    on: {
      click: function click($event) {
        return _vm.deleteApplication(_vm.activeApplication.id);
      }
    }
  }, [_vm._v("Delete")])], 1)], 1)], 1), _vm._v(" "), _c("v-bottom-sheet", {
    attrs: {
      inset: ""
    },
    model: {
      value: _vm.apiKeysheet,
      callback: function callback($$v) {
        _vm.apiKeysheet = $$v;
      },
      expression: "apiKeysheet"
    }
  }, [_c("v-list", [_c("div", {
    staticClass: "col pa-3 py-4 primary--text"
  }, [_c("h3", {
    staticClass: "text-truncate"
  }, [_vm._v("\n              Create API Key\n              "), _c("v-btn", {
    staticClass: "red--text subtitle-3 float-right text-uppercase",
    on: {
      click: function click($event) {
        _vm.apiKeysheet = false;
      }
    }
  }, [_vm._v("\n                X\n              ")])], 1), _vm._v(" "), _c("p", {
    staticClass: "overline"
  }, [_vm._v("\n              This will generate a new API key for this account.\n            ")])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", [_c("v-card-text", [_c("v-form", {
    ref: "paymentInfoForm",
    attrs: {
      "lazy-validation": ""
    }
  }, [_c("v-text-field", {
    attrs: {
      rules: [_vm.rules.required],
      "append-icon": _vm.showPassword ? "mdi-eye" : "mdi-eye-off",
      type: _vm.showPassword ? "text" : "password",
      label: "Password",
      autocomplete: "current-password",
      outlined: "",
      dense: ""
    },
    on: {
      "click:append": function clickAppend($event) {
        _vm.showPassword = !_vm.showPassword;
      }
    },
    model: {
      value: _vm.userPassword,
      callback: function callback($$v) {
        _vm.userPassword = $$v;
      },
      expression: "userPassword"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5"
  }, [(_vm.getapiKey === null ? false : true) ? _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: _vm.resetApiKey
    }
  }, [_vm._v("Reset Key")]) : _vm._e(), _vm._v(" "), (_vm.getapiKey === null ? true : false) ? _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      outlined: "",
      color: "success"
    },
    on: {
      click: _vm.resetApiKey
    }
  }, [_vm._v("Create Key")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "overline mb-1 pt-6",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        Manage & track all your finances.\n      ")])], 1), _vm._v(" "), _c("v-footer", {
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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/vue-content-loader/dist/vue-content-loader.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-content-loader/dist/vue-content-loader.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulletListLoader: () => (/* binding */ BulletListLoader),
/* harmony export */   CodeLoader: () => (/* binding */ CodeLoader),
/* harmony export */   ContentLoader: () => (/* binding */ ContentLoader),
/* harmony export */   FacebookLoader: () => (/* binding */ FacebookLoader),
/* harmony export */   InstagramLoader: () => (/* binding */ InstagramLoader),
/* harmony export */   ListLoader: () => (/* binding */ ListLoader)
/* harmony export */ });
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);


var uid = (function () {
  return Math.random().toString(36).substring(2);
});

var ContentLoader = {
  name: 'ContentLoader',
  functional: true,
  props: {
    width: {
      type: [Number, String],
      "default": 400
    },
    height: {
      type: [Number, String],
      "default": 130
    },
    speed: {
      type: Number,
      "default": 2
    },
    preserveAspectRatio: {
      type: String,
      "default": 'xMidYMid meet'
    },
    baseUrl: {
      type: String,
      "default": ''
    },
    primaryColor: {
      type: String,
      "default": '#f9f9f9'
    },
    secondaryColor: {
      type: String,
      "default": '#ecebeb'
    },
    primaryOpacity: {
      type: Number,
      "default": 1
    },
    secondaryOpacity: {
      type: Number,
      "default": 1
    },
    uniqueKey: {
      type: String
    },
    animate: {
      type: Boolean,
      "default": true
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var idClip = props.uniqueKey ? props.uniqueKey + "-idClip" : uid();
    var idGradient = props.uniqueKey ? props.uniqueKey + "-idGradient" : uid();
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([data, {
      attrs: {
        viewBox: "0 0 " + props.width + " " + props.height,
        version: "1.1",
        preserveAspectRatio: props.preserveAspectRatio
      }
    }]), [h("rect", {
      style: {
        fill: "url(" + props.baseUrl + "#" + idGradient + ")"
      },
      attrs: {
        "clip-path": "url(" + props.baseUrl + "#" + idClip + ")",
        x: "0",
        y: "0",
        width: props.width,
        height: props.height
      }
    }), h("defs", [h("clipPath", {
      attrs: {
        id: idClip
      }
    }, [children || h("rect", {
      attrs: {
        x: "0",
        y: "0",
        rx: "5",
        ry: "5",
        width: props.width,
        height: props.height
      }
    })]), h("linearGradient", {
      attrs: {
        id: idGradient
      }
    }, [h("stop", {
      attrs: {
        offset: "0%",
        "stop-color": props.primaryColor,
        "stop-opacity": props.primaryOpacity
      }
    }, [props.animate ? h("animate", {
      attrs: {
        attributeName: "offset",
        values: "-2; 1",
        dur: props.speed + "s",
        repeatCount: "indefinite"
      }
    }) : null]), h("stop", {
      attrs: {
        offset: "50%",
        "stop-color": props.secondaryColor,
        "stop-opacity": props.secondaryOpacity
      }
    }, [props.animate ? h("animate", {
      attrs: {
        attributeName: "offset",
        values: "-1.5; 1.5",
        dur: props.speed + "s",
        repeatCount: "indefinite"
      }
    }) : null]), h("stop", {
      attrs: {
        offset: "100%",
        "stop-color": props.primaryColor,
        "stop-opacity": props.primaryOpacity
      }
    }, [props.animate ? h("animate", {
      attrs: {
        attributeName: "offset",
        values: "-1; 2",
        dur: props.speed + "s",
        repeatCount: "indefinite"
      }
    }) : null])])])]);
  }
};

var BulletListLoader = {
  name: 'BulletListLoader',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data;
    return h(ContentLoader, data, [h("circle", {
      attrs: {
        cx: "10",
        cy: "20",
        r: "8"
      }
    }), h("rect", {
      attrs: {
        x: "25",
        y: "15",
        rx: "5",
        ry: "5",
        width: "220",
        height: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "10",
        cy: "50",
        r: "8"
      }
    }), h("rect", {
      attrs: {
        x: "25",
        y: "45",
        rx: "5",
        ry: "5",
        width: "220",
        height: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "10",
        cy: "80",
        r: "8"
      }
    }), h("rect", {
      attrs: {
        x: "25",
        y: "75",
        rx: "5",
        ry: "5",
        width: "220",
        height: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "10",
        cy: "110",
        r: "8"
      }
    }), h("rect", {
      attrs: {
        x: "25",
        y: "105",
        rx: "5",
        ry: "5",
        width: "220",
        height: "10"
      }
    })]);
  }
};

var CodeLoader = {
  name: 'CodeLoader',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data;
    return h(ContentLoader, data, [h("rect", {
      attrs: {
        x: "0",
        y: "0",
        rx: "3",
        ry: "3",
        width: "70",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "80",
        y: "0",
        rx: "3",
        ry: "3",
        width: "100",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "190",
        y: "0",
        rx: "3",
        ry: "3",
        width: "10",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "15",
        y: "20",
        rx: "3",
        ry: "3",
        width: "130",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "155",
        y: "20",
        rx: "3",
        ry: "3",
        width: "130",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "15",
        y: "40",
        rx: "3",
        ry: "3",
        width: "90",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "115",
        y: "40",
        rx: "3",
        ry: "3",
        width: "60",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "185",
        y: "40",
        rx: "3",
        ry: "3",
        width: "60",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "0",
        y: "60",
        rx: "3",
        ry: "3",
        width: "30",
        height: "10"
      }
    })]);
  }
};

var FacebookLoader = {
  name: 'FacebookLoader',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data;
    return h(ContentLoader, data, [h("rect", {
      attrs: {
        x: "70",
        y: "15",
        rx: "4",
        ry: "4",
        width: "117",
        height: "6.4"
      }
    }), h("rect", {
      attrs: {
        x: "70",
        y: "35",
        rx: "3",
        ry: "3",
        width: "85",
        height: "6.4"
      }
    }), h("rect", {
      attrs: {
        x: "0",
        y: "80",
        rx: "3",
        ry: "3",
        width: "350",
        height: "6.4"
      }
    }), h("rect", {
      attrs: {
        x: "0",
        y: "100",
        rx: "3",
        ry: "3",
        width: "380",
        height: "6.4"
      }
    }), h("rect", {
      attrs: {
        x: "0",
        y: "120",
        rx: "3",
        ry: "3",
        width: "201",
        height: "6.4"
      }
    }), h("circle", {
      attrs: {
        cx: "30",
        cy: "30",
        r: "30"
      }
    })]);
  }
};

var ListLoader = {
  name: 'ListLoader',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data;
    return h(ContentLoader, data, [h("rect", {
      attrs: {
        x: "0",
        y: "0",
        rx: "3",
        ry: "3",
        width: "250",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "20",
        y: "20",
        rx: "3",
        ry: "3",
        width: "220",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "20",
        y: "40",
        rx: "3",
        ry: "3",
        width: "170",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "0",
        y: "60",
        rx: "3",
        ry: "3",
        width: "250",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "20",
        y: "80",
        rx: "3",
        ry: "3",
        width: "200",
        height: "10"
      }
    }), h("rect", {
      attrs: {
        x: "20",
        y: "100",
        rx: "3",
        ry: "3",
        width: "80",
        height: "10"
      }
    })]);
  }
};

var InstagramLoader = {
  name: 'InstagramLoader',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data;
    return h(ContentLoader, babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([data, {
      attrs: {
        height: 480
      }
    }]), [h("circle", {
      attrs: {
        cx: "30",
        cy: "30",
        r: "30"
      }
    }), h("rect", {
      attrs: {
        x: "75",
        y: "13",
        rx: "4",
        ry: "4",
        width: "100",
        height: "13"
      }
    }), h("rect", {
      attrs: {
        x: "75",
        y: "37",
        rx: "4",
        ry: "4",
        width: "50",
        height: "8"
      }
    }), h("rect", {
      attrs: {
        x: "0",
        y: "70",
        rx: "5",
        ry: "5",
        width: "400",
        height: "400"
      }
    })]);
  }
};




/***/ }),

/***/ "./resources/js/components/ActivityListItem.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ActivityListItem.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActivityListItem_vue_vue_type_template_id_2f4e0b6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityListItem.vue?vue&type=template&id=2f4e0b6b& */ "./resources/js/components/ActivityListItem.vue?vue&type=template&id=2f4e0b6b&");
/* harmony import */ var _ActivityListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityListItem.vue?vue&type=script&lang=js& */ "./resources/js/components/ActivityListItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActivityListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActivityListItem_vue_vue_type_template_id_2f4e0b6b___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActivityListItem_vue_vue_type_template_id_2f4e0b6b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ActivityListItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/AddNewApplication.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/AddNewApplication.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddNewApplication_vue_vue_type_template_id_f07e1994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNewApplication.vue?vue&type=template&id=f07e1994& */ "./resources/js/components/AddNewApplication.vue?vue&type=template&id=f07e1994&");
/* harmony import */ var _AddNewApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNewApplication.vue?vue&type=script&lang=js& */ "./resources/js/components/AddNewApplication.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddNewApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNewApplication_vue_vue_type_template_id_f07e1994___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddNewApplication_vue_vue_type_template_id_f07e1994___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AddNewApplication.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loaders/TransactionsListLoader.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/loaders/TransactionsListLoader.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TransactionsListLoader_vue_vue_type_template_id_38233860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionsListLoader.vue?vue&type=template&id=38233860& */ "./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=template&id=38233860&");
/* harmony import */ var _TransactionsListLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsListLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransactionsListLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionsListLoader_vue_vue_type_template_id_38233860___WEBPACK_IMPORTED_MODULE_0__.render,
  _TransactionsListLoader_vue_vue_type_template_id_38233860___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/loaders/TransactionsListLoader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/customer/ProfileSettings.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/customer/ProfileSettings.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileSettings_vue_vue_type_template_id_6ab3a51a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSettings.vue?vue&type=template&id=6ab3a51a& */ "./resources/js/views/customer/ProfileSettings.vue?vue&type=template&id=6ab3a51a&");
/* harmony import */ var _ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileSettings.vue?vue&type=script&lang=js& */ "./resources/js/views/customer/ProfileSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileSettings_vue_vue_type_template_id_6ab3a51a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileSettings_vue_vue_type_template_id_6ab3a51a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customer/ProfileSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ActivityListItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ActivityListItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActivityListItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActivityListItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityListItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AddNewApplication.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AddNewApplication.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddNewApplication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddNewApplication.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsListLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/customer/ProfileSettings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/customer/ProfileSettings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/ProfileSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ActivityListItem.vue?vue&type=template&id=2f4e0b6b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ActivityListItem.vue?vue&type=template&id=2f4e0b6b& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityListItem_vue_vue_type_template_id_2f4e0b6b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityListItem_vue_vue_type_template_id_2f4e0b6b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityListItem_vue_vue_type_template_id_2f4e0b6b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActivityListItem.vue?vue&type=template&id=2f4e0b6b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActivityListItem.vue?vue&type=template&id=2f4e0b6b&");


/***/ }),

/***/ "./resources/js/components/AddNewApplication.vue?vue&type=template&id=f07e1994&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/AddNewApplication.vue?vue&type=template&id=f07e1994& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewApplication_vue_vue_type_template_id_f07e1994___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewApplication_vue_vue_type_template_id_f07e1994___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewApplication_vue_vue_type_template_id_f07e1994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddNewApplication.vue?vue&type=template&id=f07e1994& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AddNewApplication.vue?vue&type=template&id=f07e1994&");


/***/ }),

/***/ "./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=template&id=38233860&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=template&id=38233860& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListLoader_vue_vue_type_template_id_38233860___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListLoader_vue_vue_type_template_id_38233860___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListLoader_vue_vue_type_template_id_38233860___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TransactionsListLoader.vue?vue&type=template&id=38233860& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loaders/TransactionsListLoader.vue?vue&type=template&id=38233860&");


/***/ }),

/***/ "./resources/js/views/customer/ProfileSettings.vue?vue&type=template&id=6ab3a51a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/customer/ProfileSettings.vue?vue&type=template&id=6ab3a51a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_template_id_6ab3a51a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_template_id_6ab3a51a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileSettings_vue_vue_type_template_id_6ab3a51a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileSettings.vue?vue&type=template&id=6ab3a51a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/ProfileSettings.vue?vue&type=template&id=6ab3a51a&");


/***/ })

}]);