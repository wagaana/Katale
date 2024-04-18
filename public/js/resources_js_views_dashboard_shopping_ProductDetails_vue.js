(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_dashboard_shopping_ProductDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesSelector.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesSelector.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Comment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Comment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommentReply_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentReply.vue */ "./resources/js/components/Products/CommentReply.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_2__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body
        });
        this.$store.dispatch("fetchItemDetails", {
          purpose: this.$route.query.purpose,
          itemID: this.$route.query.itemID
        });
        this.$store.dispatch("loadProductDiscussions", this.$route.query.itemID);
      }
    }
  },
  components: {
    CommentReply: _CommentReply_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      addComment: false,
      body: ""
    };
  },
  created: function created() {
    this.$store.dispatch("getMyProfile");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(["singleUserPosts"])), (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["loadingUI", "loadingForm", "myUserProfile", "newsAndEventDetails"])),
  methods: {
    getUser: function getUser() {},
    handleCommentSubmit: function handleCommentSubmit() {
      var _this = this;
      this.$store.dispatch("submitShoppingProductDiscussionReply", {
        productId: this.$route.params.id,
        message: this.body,
        discussionId: this.data.id
      }).then(function () {
        _this.body = "";
      })["catch"](function (error) {
        return error;
      });
    }
  },
  filters: {
    exactDay: function exactDay(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("h:mm a, MMMM DD YYYY");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentReply.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentReply.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      body: ""
    };
  },
  created: function created() {
    // window.scrollTo(0, 0);
  },
  computed: {},
  methods: {
    getUser: function getUser() {}
  },
  filters: {
    exactDay: function exactDay(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("h:mm a, MMMM DD YYYY");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentsAndReplys.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentsAndReplys.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue */ "./resources/js/components/Products/Comment.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  template: "#page",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    Comment: _Comment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      body: ""
    };
  },
  methods: {
    handleCommentSubmit: function handleCommentSubmit() {
      var _this = this;
      this.$store.dispatch("submitShoppingProductDiscussion", {
        productId: this.$route.params.id,
        message: this.body
      }).then(function () {
        _this.body = "";
      })["catch"](function (error) {
        return error;
      });
    }
  },
  created: function created() {
    this.$store.dispatch("getMyProfile");
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(["shoppingProductDiscussions"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["loadingForm", "myUserProfile", "getShoppingProductDiscussions"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductConfiguration.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductConfiguration.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      body: "",
      featuredProduct: false
    };
  },
  watch: {
    data: function data(val) {
      if (val != null) {
        this.featuredProduct = val.is_featured;
      }
    }
  },
  filters: {
    exactDay: function exactDay(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("h:mm a, MMMM DD YYYY");
    }
  },
  methods: {
    handleCommentSubmit: function handleCommentSubmit() {
      var _this = this;
      this.$store.dispatch("SUBMIT_COMMENT", {
        screamId: this.screamId,
        comment: {
          body: this.body
        }
      }).then(function () {
        _this.body = "";
      })["catch"](function (error) {
        return error;
      });
    },
    switchProduuctFeaturedStatus: function switchProduuctFeaturedStatus(product) {
      this.$store.dispatch("switchProduuctFeaturedStatus", {
        productId: product.id,
        is_featured: this.featuredProduct
      });
    }
  },
  beforeCreate: function beforeCreate() {
    // this.$store.dispatch("getMyProfile");
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["getSystemSettings"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotos.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotos.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesSelector_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FilesSelector.vue */ "./resources/js/components/FilesSelector.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FilesSelector: _FilesSelector_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  template: "#page",
  props: {
    getShopingProductData: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      body: "",
      displayAllPictures: false
    };
  },
  methods: {
    selectedFiles: function selectedFiles(file) {
      var formData = new FormData();
      formData.append("productId", this.$route.params.id);
      formData.append("image", JSON.stringify(file));
      this.$store.dispatch("submitProductPhoto", formData);
    },
    deleteImage: function deleteImage(imageId) {
      var formData = new FormData();
      formData.append("productId", this.$route.params.id);
      formData.append("imageId", imageId);
      this.$store.dispatch("deleteProductPhoto", formData);
    }
  },
  created: function created() {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductPhotos_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPhotos.vue */ "./resources/js/components/Products/ProductPhotos.vue");
/* harmony import */ var _ProductPublisher_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPublisher.vue */ "./resources/js/components/Products/ProductPublisher.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  template: "#page",
  components: {
    ProductPhotos: _ProductPhotos_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductPublisher: _ProductPublisher_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      body: ""
    };
  },
  methods: {
    handleCommentSubmit: function handleCommentSubmit() {
      var _this = this;
      this.$store.dispatch("SUBMIT_COMMENT", {
        screamId: this.screamId,
        comment: {
          body: this.body
        }
      }).then(function () {
        _this.body = "";
      })["catch"](function (error) {
        return error;
      });
    }
  },
  beforeCreate: function beforeCreate() {
    // this.$store.dispatch("getMyProfile");
  },
  created: function created() {},
  computed: {
    // ...mapGetters(["loadingForm", "myUserProfile"]),
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPublisher.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPublisher.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  template: "#page",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_Products_CommentsAndReplys_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Products/CommentsAndReplys.vue */ "./resources/js/components/Products/CommentsAndReplys.vue");
/* harmony import */ var _components_Products_ProductPhotosAndHosts_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Products/ProductPhotosAndHosts.vue */ "./resources/js/components/Products/ProductPhotosAndHosts.vue");
/* harmony import */ var _components_Products_ProductConfiguration_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Products/ProductConfiguration.vue */ "./resources/js/components/Products/ProductConfiguration.vue");
/* harmony import */ var _components_FilesEntry_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FilesEntry.vue */ "./resources/js/components/FilesEntry.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  template: "#page",
  components: {
    CommentsAndReplys: _components_Products_CommentsAndReplys_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductPhotosAndHosts: _components_Products_ProductPhotosAndHosts_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductConfiguration: _components_Products_ProductConfiguration_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FilesEntry: _components_FilesEntry_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    var _ref;
    return _ref = {
      countries: _utils_constants__WEBPACK_IMPORTED_MODULE_4__.countries,
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_4__.uploads,
      escapeHtml: _utils_constants__WEBPACK_IMPORTED_MODULE_4__.escapeHtml,
      valid: true,
      specificationValid: false,
      galleryImage: null,
      dialogUploadImages: false,
      dialogAddSpecifications: false,
      specificationCompose: {},
      productColorOption: {},
      productColorOptionValid: false,
      dialogAddAttributeOption: false,
      productAttributeOption: {
        isDefault: false
      },
      productAttributeOptionValid: false,
      viewProductAttributeOption: false,
      viewProductColorOption: false
    }, _defineProperty(_ref, "productColorOption", {}), _defineProperty(_ref, "activeAttribute", {}), _defineProperty(_ref, "isColorDefault", false), _defineProperty(_ref, "isAttributeDefault", false), _defineProperty(_ref, "rules", {
      required: function required(value) {
        return !!value || "This field is required";
      },
      email: function email(v) {
        return /.+@.+\..+/.test(v) || "Must be a valid email";
      }
    }), _defineProperty(_ref, "headers", [{
      text: "Icon",
      value: "imageUrl"
    }, {
      text: "Label",
      align: "left",
      sortable: false,
      value: "label"
    }, {
      text: "Description",
      value: "description"
    }, {
      text: "Author",
      value: "name"
    }, {
      text: "Date Added",
      value: "created_at"
    }]), _ref;
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("loadProductDetails", this.$route.params.id);
    this.$store.dispatch("loadSystemSettings");
    this.$store.dispatch("loadSpecifications");
    this.$store.dispatch("loadShopingProductSpecifications", this.$route.params.id);
    this.$store.dispatch("loadProductAttributes", this.$route.params.id);
    this.$store.dispatch("fetchShoppingProductDiscussions", this.$route.params.id);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)(["productDetails", "systemSettings", "specifications", "shopingProductSpecifications", "productAttributes", "shoppingProductDiscussions"])), (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["getProductDetails", "getSystemSettings", "messageAlert", "getSpecifications", "getShopingProductSpecifications", "getProductAttributes", "getShoppingProductDiscussions"])),
  watch: {
    messageAlert: function messageAlert(val) {
      if (val != null) {
        vue__WEBPACK_IMPORTED_MODULE_6__["default"].notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type
        });
        this.dialogUploadImages = false;
        this.$store.dispatch("loadProductDetails", this.$route.params.id);
        this.$store.dispatch("loadSystemSettings");
        this.$store.dispatch("loadSpecifications");
        this.$store.dispatch("loadShopingProductSpecifications", this.$route.params.id);
        this.$store.dispatch("loadProductAttributes", this.$route.params.id);
        this.$store.dispatch("fetchShoppingProductDiscussions", this.$route.params.id);
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    getProductAttributeSetAtributes: function getProductAttributeSetAtributes(attribute_id) {
      var attributes = [];
      var _iterator = _createForOfIteratorHelper(this.getProductAttributes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mAttribute = _step.value;
          if (mAttribute.attribute_id == attribute_id) {
            attributes.push(mAttribute);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return attributes;
    },
    validateUpdate: function validateUpdate() {
      if (this.$refs.sendForm.validate()) {
        // send it
        this.PostPhotos();
      }
    },
    switchShopingProductAttributeOptionDefaultStatus: function switchShopingProductAttributeOptionDefaultStatus(productAttributeOption) {
      this.$store.dispatch("switchShopingProductAttributeOptionDefaultStatus", {
        productId: this.$route.params.id,
        optionId: productAttributeOption.id,
        isDefault: this.isAttributeDefault
      });
    },
    switchShopingProductColorOptionDefaultStatus: function switchShopingProductColorOptionDefaultStatus(productColorOption) {
      this.$store.dispatch("switchShopingProductColorOptionDefaultStatus", {
        productId: this.$route.params.id,
        optionId: productColorOption.id,
        isDefault: this.isColorDefault
      });
    },
    displayShopingProductAttributeOption: function displayShopingProductAttributeOption(attribute, attributeActive) {
      this.viewProductAttributeOption = true;
      this.isAttributeDefault = attribute.isDefault == "true" ? true : false;
      this.productAttributeOption = attribute;
      this.activeAttribute = attributeActive;
    },
    displayShopingProductColorOption: function displayShopingProductColorOption(colorOption) {
      this.viewProductColorOption = true;
      this.isColorDefault = colorOption.isDefault == "true" ? true : false;
      this.productColorOption = colorOption;
    },
    PostPhotos: function PostPhotos() {
      this.$store.dispatch("submitShopingProductGalleryImage", {
        productId: this.$route.params.id,
        image: this.galleryImage
      });
    },
    validateSpecification: function validateSpecification() {
      if (this.$refs.specificationForm.validate()) {
        // send it
        this.specificationCompose["productId"] = this.$route.params.id;
        this.$store.dispatch("submitShopingProductSpecification", this.specificationCompose);
        this.dialogAddSpecifications = false;
      }
    },
    validateProductAttributeOption: function validateProductAttributeOption() {
      if (this.$refs.productAttributeOptionForm.validate()) {
        // send it
        this.productAttributeOption["productId"] = this.$route.params.id;
        this.productAttributeOption["attribute_form"] = this.activeAttribute.attribute_form;
        this.productAttributeOption["attribute_id"] = this.activeAttribute.id;
        this.$store.dispatch("submitShopingProductAttributeOption", this.productAttributeOption);
        this.dialogAddAttributeOption = false;
      }
    },
    openAddAttributeOptionDialog: function openAddAttributeOptionDialog(attribute) {
      this.productAttributeOption = {
        isDefault: false
      };
      this.activeAttribute = attribute;
      this.dialogAddAttributeOption = true;
    },
    selectedFiles: function selectedFiles(file) {
      this.productAttributeOption.image = JSON.stringify(file);
    },
    deleteAttribute: function deleteAttribute(attribute) {
      this.$store.dispatch("deleteProductAttribute", attribute.id);
      this.viewProductAttributeOption = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesSelector.vue?vue&type=template&id=76281c1b&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesSelector.vue?vue&type=template&id=76281c1b& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-container", [_c("v-btn", {
    staticClass: "pa-2",
    attrs: {
      outlined: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogOpenFiles = true;
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.label))]), _vm._v(" "), _c("v-dialog", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Comment.vue?vue&type=template&id=eab3ce02&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Comment.vue?vue&type=template&id=eab3ce02& ***!
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
    staticClass: "py-1"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "2",
      "offset-sm": "0"
    }
  }, [_c("div", {
    staticClass: "py-3 text-center"
  }, [_c("v-avatar", {
    attrs: {
      size: "80"
    }
  }, [_c("v-img", {
    attrs: {
      src: "/".concat(_vm.data.profile_picture),
      alt: "avatar"
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "10"
    }
  }, [_c("div", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h3", {
    staticClass: "cyan--text hover",
    on: {
      click: _vm.getUser
    }
  }, [_vm._v("\n              " + _vm._s(_vm.data.name) + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "font-weight-light grey--text text--darken-1 body-2 mt-1"
  }, [_vm._v("\n              " + _vm._s(_vm._f("exactDay")(_vm.data.created_at)) + "\n            ")])]), _vm._v(" "), _c("v-col", {
    staticClass: "text-left",
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "font-weight-regular"
  }, [_vm._v("\n              " + _vm._s(_vm.data.message) + "\n            ")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "8"
    }
  }), _vm._v(" "), _c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "12",
      md: "4"
    }
  }), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("CommentReply", {
    attrs: {
      data: _vm.data.altComment
    }
  })], 1), _vm._v(" "), _vm.addComment ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4",
      "offset-sm": "0",
      sm: "2"
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("v-avatar", {
    attrs: {
      size: "50"
    }
  }, [_c("v-img", {
    attrs: {
      src: "/".concat(_vm.myUserProfile.profile_picture),
      alt: "avatar"
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "pa-2",
    attrs: {
      cols: "8",
      sm: "10"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "text-left pa-2",
    attrs: {
      cols: "12"
    }
  }, [_c("form", {
    ref: "form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.handleCommentSubmit.apply(null, arguments);
      }
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-textarea", {
    attrs: {
      label: "Write a comment",
      type: "text",
      required: "",
      counter: "",
      outlined: "",
      loading: _vm.loadingForm,
      "no-resize": "",
      color: "#32BCC3",
      rows: "2"
    },
    model: {
      value: _vm.body,
      callback: function callback($$v) {
        _vm.body = $$v;
      },
      expression: "body"
    }
  })], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("div", {
    staticClass: "flex-grow-1"
  }), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "cyan darken-2",
      disabled: _vm.loadingForm,
      text: "",
      small: ""
    },
    on: {
      click: function click($event) {
        _vm.addComment = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "cyan darken-2",
      disabled: _vm.loadingForm,
      text: "",
      small: ""
    },
    on: {
      click: function click($event) {
        _vm.body = "";
      }
    }
  }, [_vm._v("Clear")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "cyan darken-2",
      loading: _vm.loadingForm,
      text: "",
      type: "submit",
      small: ""
    }
  }, [_vm._v("Comment")])], 1)], 1)])], 1)], 1)], 1)], 1) : _vm._e()], 1)], 1)])], 1), _vm._v(" "), !_vm.addComment ? _c("v-card-actions", [_c("div", {
    staticClass: "flex-grow-1"
  }), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "cyan darken-2",
      loading: _vm.loadingForm,
      text: "",
      type: "submit",
      small: ""
    },
    on: {
      click: function click($event) {
        _vm.addComment = true;
      }
    }
  }, [_vm._v("Comment")])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentReply.vue?vue&type=template&id=5b2a3b4a&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentReply.vue?vue&type=template&id=5b2a3b4a& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "py-1"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "2",
      "offset-sm": "0"
    }
  }, [_c("div", {
    staticClass: "py-3 text-center"
  }, [_c("v-avatar", {
    attrs: {
      size: "80"
    }
  }, [_c("v-img", {
    attrs: {
      src: "/".concat(_vm.data.profile_picture),
      alt: "avatar"
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "10"
    }
  }, [_c("div", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h3", {
    staticClass: "cyan--text hover",
    on: {
      click: _vm.getUser
    }
  }, [_vm._v("\n              " + _vm._s(_vm.data.name) + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "font-weight-light grey--text text--darken-1 body-2 mt-1"
  }, [_vm._v("\n              " + _vm._s(_vm._f("exactDay")(_vm.data.created_at)) + "\n            ")])]), _vm._v(" "), _c("v-col", {
    staticClass: "text-left",
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "font-weight-regular"
  }, [_vm._v("\n              " + _vm._s(_vm.data.message) + "\n            ")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "8"
    }
  }), _vm._v(" "), _c("v-col", {
    staticClass: "center",
    attrs: {
      cols: "12",
      md: "4"
    }
  })], 1)], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentsAndReplys.vue?vue&type=template&id=80a58be8&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentsAndReplys.vue?vue&type=template&id=80a58be8& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "py-5 px-2",
    attrs: {
      elevation: "1"
    }
  }, [_c("v-row", {
    staticClass: "py-2 px-2"
  }, [_c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("v-row", {
    staticClass: "py-2 px-2"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("h4", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Comments")]), _vm._v(" "), _c("p", [_vm._v("Last conversations about this product.")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-card", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      "offset-sm": "0",
      sm: "2"
    }
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("v-avatar", {
    attrs: {
      size: "100"
    }
  }, [_c("v-img", {
    attrs: {
      src: "/".concat(_vm.myUserProfile.profile_picture),
      alt: "avatar"
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "pa-2",
    attrs: {
      cols: "12",
      sm: "9"
    }
  }, [_c("v-row", [_c("v-col", {
    staticClass: "pa-2",
    attrs: {
      cols: "12"
    }
  }, [_c("h3", {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.myUserProfile.name))])]), _vm._v(" "), _c("v-col", {
    staticClass: "text-left pa-2",
    attrs: {
      cols: "12"
    }
  }, [_c("form", {
    ref: "form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.handleCommentSubmit.apply(null, arguments);
      }
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-textarea", {
    attrs: {
      label: "Write a comment",
      type: "text",
      required: "",
      counter: "",
      outlined: "",
      loading: _vm.loadingForm,
      "no-resize": "",
      color: "#32BCC3",
      rows: "3"
    },
    model: {
      value: _vm.body,
      callback: function callback($$v) {
        _vm.body = $$v;
      },
      expression: "body"
    }
  })], 1)], 1), _vm._v(" "), _c("v-card-actions", [_c("div", {
    staticClass: "flex-grow-1"
  }), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "cyan darken-2",
      disabled: _vm.loadingForm,
      text: "",
      small: ""
    },
    on: {
      click: function click($event) {
        _vm.body = "";
      }
    }
  }, [_vm._v("Clear")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "cyan darken-2",
      loading: _vm.loadingForm,
      text: "",
      type: "submit",
      small: ""
    }
  }, [_vm._v("Comment")])], 1)], 1)])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, _vm._l(_vm.getShoppingProductDiscussions, function (comment) {
    return _c("Comment", {
      key: comment.id,
      attrs: {
        data: comment
      }
    });
  }), 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductConfiguration.vue?vue&type=template&id=7b4088d7&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductConfiguration.vue?vue&type=template&id=7b4088d7& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("v-row", {
    staticClass: "px-0"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-1"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-1"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "2",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-alarm")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "10",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n                " + _vm._s(_vm._f("exactDay")(_vm.data.created_at)) + "\n              ")])])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-1"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "2",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-database-settings-outline")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "10",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("p", {
    staticClass: "font-weight-light"
  }, [_vm._v(_vm._s(_vm.data.category_id) + " Category")])])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-1"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "2",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-account-multiple")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "10",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("a", {
    staticClass: "font-weight-bold"
  }, [_vm._v(" " + _vm._s(_vm.data.total_sale) + " sales ")])])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-switch", {
    attrs: {
      inset: "",
      label: "Is Featured",
      outlined: "",
      dense: ""
    },
    on: {
      change: function change($event) {
        return _vm.switchProduuctFeaturedStatus(_vm.data);
      }
    },
    model: {
      value: _vm.featuredProduct,
      callback: function callback($$v) {
        _vm.featuredProduct = $$v;
      },
      expression: "featuredProduct"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-1"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-1"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "2",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-currency-usd")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "10",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("p", {
    staticClass: "font-weight-bold"
  }, [_vm._v("Product Prices")]), _vm._v(" "), _c("v-card", {
    attrs: {
      elevation: "0"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      sm: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      sm: "5"
    }
  }, [_vm._v("Cost Price")]), _c("v-col", {
    attrs: {
      sm: "7"
    }
  }, [_vm._v(_vm._s(_vm.getSystemSettings.currency) + "\n                        " + _vm._s(_vm.data.purchase_cost))])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      sm: "5"
    }
  }, [_vm._v("Discount Price")]), _c("v-col", {
    attrs: {
      sm: "7"
    }
  }, [_vm._v(_vm._s(_vm.getSystemSettings.currency) + "\n                        " + _vm._s(_vm.data.special_discount))])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      sm: "5"
    }
  }, [_vm._v("Sell Price")]), _c("v-col", {
    attrs: {
      sm: "7"
    }
  }, [_vm._v(_vm._s(_vm.getSystemSettings.currency) + "\n                        " + _vm._s(_vm.data.price))])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-divider")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotos.vue?vue&type=template&id=d632d320&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotos.vue?vue&type=template&id=d632d320& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-row", {
    staticClass: "py-2 px-2"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-card-actions", {
    staticClass: "pa-2"
  }, [_c("FilesSelector", {
    attrs: {
      label: "Add Photo"
    },
    on: {
      selectedFiles: _vm.selectedFiles
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "ml-auto font-weight-light mb-0"
  }, [_vm._v("Photos")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-4"
  }, _vm._l(_vm.getShopingProductData.images, function (image) {
    return _c("v-col", {
      key: image.id,
      attrs: {
        cols: "12",
        sm: "4",
        "order-sm": "2"
      }
    }, [_c("v-card", {
      attrs: {
        elevation: "12"
      }
    }, [_c("v-img", {
      attrs: {
        height: "200px",
        src: "".concat(image.url)
      }
    }), _vm._v(" "), _c("div", [_c("v-tooltip", {
      attrs: {
        top: ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on;
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
              click: function click($event) {
                return _vm.deleteImage(image.id);
              }
            }
          }, on), [_c("v-icon", {
            attrs: {
              dark: ""
            }
          }, [_vm._v("mdi-delete")])], 1)];
        }
      }], null, true)
    }, [_vm._v(" "), _c("span", [_vm._v("Delete Image")])])], 1)], 1)], 1);
  }), 1)], 1), _vm._v(" "), _c("v-col", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-divider")], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=template&id=72938678&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=template&id=72938678& ***!
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
  return _c("v-card", {
    staticClass: "py-5 px-2",
    attrs: {
      elevation: "1"
    }
  }, [_c("v-row", {
    staticClass: "py-2 px-2"
  }, [_c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12",
      sm: "8",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("ProductPhotos", {
    attrs: {
      getShopingProductData: _vm.data
    }
  })], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12",
      sm: "4",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("ProductPublisher", {
    attrs: {
      data: _vm.data
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPublisher.vue?vue&type=template&id=55244f5d&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPublisher.vue?vue&type=template&id=55244f5d& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-row", {
    staticClass: "py-2 px-2"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("h4", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Publisher")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      order: "-1",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "px-2 py-2"
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
      src: "/".concat(_vm.data.profile_picture)
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
  }, [_vm._v("\n                " + _vm._s(_vm.data.authorName) + "\n              ")]), _vm._v(" "), _c("p", {
    staticClass: "font-weight-light grey--text text--darken-1 body-2"
  }, [_vm._v("\n                " + _vm._s(_vm.data.email) + "\n              ")])])], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=template&id=55bb1b10&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=template&id=55bb1b10& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-row", [_c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12"
    }
  }, [_c("h2", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("\n      " + _vm._s(_vm.getProductDetails.name) + "\n    ")]), _vm._v(" "), _c("span", {
    staticClass: "overline"
  }, [_vm._v(_vm._s(_vm.getProductDetails.short_description))])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    attrs: {
      elevation: "10"
    }
  }, [_c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-10 pr-md-1"
  }, [_c("p", {
    staticClass: "font-weight-light"
  }, [_c("v-icon", {
    attrs: {
      color: "primary"
    }
  }, [_vm._v("mdi-checkbox-marked-circle-outline")])], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-2 pr-md-1 fill-width"
  }, [_c("v-btn", {
    staticClass: "font-weight-light",
    attrs: {
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogUploadImages = true;
      }
    }
  }, [_vm._v("post photos")])], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "4",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    attrs: {
      "min-width": "150",
      elevation: "12"
    }
  }, [_c("v-img", {
    attrs: {
      src: "".concat(_vm.getProductDetails.thumbnail)
    }
  })], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "8",
      "order-sm": "2"
    }
  }, [_c("v-card", {
    staticClass: "py-2",
    attrs: {
      "min-height": "300",
      "min-width": "150",
      elevation: "1"
    }
  }, [_c("ProductConfiguration", {
    attrs: {
      data: _vm.getProductDetails
    }
  }), _vm._v(" "), _c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("h4", {
    staticClass: "font-weight-bold mb-0"
  }, [_vm._v("\n                  " + _vm._s(_vm.getProductDetails.name) + "\n                ")])]), _vm._v(" "), _c("v-col", {
    staticClass: "py-2",
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.getProductDetails.description)
    }
  })])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("ProductPhotosAndHosts", {
    attrs: {
      data: _vm.getProductDetails
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-row", {
    staticClass: "px-1"
  }, [_vm._l(_vm.getProductDetails.attribute_sets, function (attribute_set) {
    return _c("v-col", {
      key: attribute_set.id,
      staticClass: "col-md-4 pr-md-1 sm-2",
      attrs: {
        cols: "12"
      }
    }, [_c("v-card", {
      staticClass: "py-1 pa-0"
    }, [_c("v-row", {
      staticClass: "px-4"
    }, [_c("v-col", {
      staticClass: "col-md-7 pr-md-1 sm-6"
    }, [_c("h1", {
      staticClass: "font-weight-light mb-2"
    }, [_vm._v("\n                " + _vm._s(attribute_set.title) + "\n              ")])]), _vm._v(" "), _c("v-col", {
      staticClass: "col-md-5 pr-md-1 fill-width sm-6",
      attrs: {
        cols: "12",
        sm: "12",
        "order-sm": "2"
      }
    }, [_c("v-btn", {
      attrs: {
        outlined: "",
        rounded: "",
        color: "primary"
      },
      on: {
        click: function click($event) {
          return _vm.openAddAttributeOptionDialog(attribute_set);
        }
      }
    }, [_vm._v("Add New")])], 1)], 1), _vm._v(" "), _c("v-card", {
      staticClass: "py-2 pa-0"
    }, [_c("v-data-table", {
      attrs: {
        items: _vm.getProductAttributeSetAtributes(attribute_set.id),
        "item-key": "id"
      },
      scopedSlots: _vm._u([{
        key: "item",
        fn: function fn(_ref) {
          var item = _ref.item;
          return [_c("tr", {
            on: {
              click: function click($event) {
                return _vm.displayShopingProductAttributeOption(item, attribute_set);
              }
            }
          }, [item.attribute_form !== "image" ? _c("td", [_vm._v("\n                    " + _vm._s(item.value) + "\n                  ")]) : _c("td", [_c("v-img", {
            attrs: {
              src: item.value != null ? "".concat(item.value) : "/images/default/default-image-40x40.png",
              height: "30",
              width: "30"
            }
          })], 1), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.price))])])];
        }
      }], null, true)
    })], 1)], 1)], 1);
  }), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-4 pr-md-1 sm-2",
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", {
    staticClass: "py-1 pa-0"
  }, [_c("v-row", {
    staticClass: "px-4"
  }, [_c("v-col", {
    staticClass: "col-md-7 pr-md-1 sm-6"
  }, [_c("h1", {
    staticClass: "font-weight-light mb-2"
  }, [_vm._v("Specs")])]), _vm._v(" "), _c("v-col", {
    staticClass: "col-md-5 pr-md-1 fill-width sm-6",
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_c("v-btn", {
    attrs: {
      outlined: "",
      rounded: "",
      color: "primary"
    },
    on: {
      click: function click($event) {
        _vm.dialogAddSpecifications = true;
      }
    }
  }, [_vm._v("Add New")])], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "py-2 pa-0"
  }, [_c("v-data-table", {
    attrs: {
      items: _vm.getShopingProductSpecifications,
      "item-key": "id"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("tr", {
          on: {
            click: function click($event) {
              return _vm.displaySpecificationsModel(item);
            }
          }
        }, [_c("td", [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.value))])])];
      }
    }])
  })], 1)], 1)], 1)], 2)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      "order-sm": "2"
    }
  }, [_vm.getProductDetails.id !== undefined || _vm.getProductDetails.id !== null ? _c("CommentsAndReplys", {
    attrs: {
      data: _vm.getProductDetails
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.dialogAddAttributeOption,
      callback: function callback($$v) {
        _vm.dialogAddAttributeOption = $$v;
      },
      expression: "dialogAddAttributeOption"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        Add Product " + _vm._s(_vm.activeAttribute.title) + " Option\n      ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "productAttributeOptionForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.productAttributeOptionValid,
      callback: function callback($$v) {
        _vm.productAttributeOptionValid = $$v;
      },
      expression: "productAttributeOptionValid"
    }
  }, [_vm.activeAttribute.attribute_form !== "text" ? _c("v-text-field", {
    attrs: {
      label: "".concat(_vm.activeAttribute.title, " Label"),
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productAttributeOption.label,
      callback: function callback($$v) {
        _vm.$set(_vm.productAttributeOption, "label", $$v);
      },
      expression: "productAttributeOption.label"
    }
  }) : _vm._e(), _vm._v(" "), _vm.activeAttribute.attribute_form == "text" || _vm.activeAttribute.attribute_form == "color" ? _c("v-text-field", {
    attrs: {
      label: "".concat(_vm.activeAttribute.title, " Option ").concat(_vm.activeAttribute.attribute_form == "color" ? "Color Code" : "Value", " *"),
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productAttributeOption.value,
      callback: function callback($$v) {
        _vm.$set(_vm.productAttributeOption, "value", $$v);
      },
      expression: "productAttributeOption.value"
    }
  }) : _vm._e(), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "".concat(_vm.activeAttribute.title, " Additional Price (optional)"),
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productAttributeOption.price,
      callback: function callback($$v) {
        _vm.$set(_vm.productAttributeOption, "price", $$v);
      },
      expression: "productAttributeOption.price"
    }
  }), _vm._v(" "), _vm.activeAttribute.attribute_form == "image" ? _c("FilesEntry", {
    attrs: {
      label: "".concat(_vm.activeAttribute.title, " Option Image (optional)"),
      outlined: "",
      dense: ""
    },
    on: {
      selectedFiles: _vm.selectedFiles
    }
  }) : _vm._e(), _vm._v(" "), _c("v-switch", {
    attrs: {
      inset: "",
      label: "Is Default",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.productAttributeOption.isDefault,
      callback: function callback($$v) {
        _vm.$set(_vm.productAttributeOption, "isDefault", $$v);
      },
      expression: "productAttributeOption.isDefault"
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
        _vm.dialogAddAttributeOption = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.productAttributeOptionValid
    },
    on: {
      click: _vm.validateProductAttributeOption
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogAddSpecifications,
      callback: function callback($$v) {
        _vm.dialogAddSpecifications = $$v;
      },
      expression: "dialogAddSpecifications"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        Add Product Specification\n      ")]), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-form", {
    ref: "specificationForm",
    attrs: {
      "lazy-validation": ""
    },
    model: {
      value: _vm.specificationValid,
      callback: function callback($$v) {
        _vm.specificationValid = $$v;
      },
      expression: "specificationValid"
    }
  }, [_c("v-select", {
    attrs: {
      rules: [_vm.rules.required],
      items: _vm.getSpecifications,
      label: "Select Specification",
      "item-text": "title",
      "item-value": "id",
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.specificationCompose.specificationId,
      callback: function callback($$v) {
        _vm.$set(_vm.specificationCompose, "specificationId", $$v);
      },
      expression: "specificationCompose.specificationId"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "Specification Value",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.specificationCompose.value,
      callback: function callback($$v) {
        _vm.$set(_vm.specificationCompose, "value", $$v);
      },
      expression: "specificationCompose.value"
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
        _vm.dialogAddSpecifications = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.specificationValid
    },
    on: {
      click: _vm.validateSpecification
    }
  }, [_vm._v("Submit")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "500"
    },
    model: {
      value: _vm.dialogUploadImages,
      callback: function callback($$v) {
        _vm.dialogUploadImages = $$v;
      },
      expression: "dialogUploadImages"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline black",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        Product Photos\n      ")]), _vm._v(" "), _c("v-card-text", {
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
  }, [_c("v-file-input", {
    attrs: {
      label: "Product Image",
      rules: [_vm.rules.required],
      outlined: "",
      dense: ""
    },
    model: {
      value: _vm.galleryImage,
      callback: function callback($$v) {
        _vm.galleryImage = $$v;
      },
      expression: "galleryImage"
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
        _vm.dialogUploadImages = false;
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "primary",
      disabled: !_vm.valid
    },
    on: {
      click: _vm.validateUpdate
    }
  }, [_vm._v("Update")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewProductColorOption,
      callback: function callback($$v) {
        _vm.viewProductColorOption = $$v;
      },
      expression: "viewProductColorOption"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        " + _vm._s(_vm.productColorOption.label) + "\n      ")]), _vm._v(" "), _c("v-card-title", [_c("v-img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.productColorOption.imageUrl),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("\n          " + _vm._s(_vm.productColorOption.colorCode) + "\n        ")]), _vm._v(" "), _c("p", [_vm._v("DATE: " + _vm._s(_vm.productColorOption.created_at))])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5 background-secundario"
  }, [_c("v-switch", {
    attrs: {
      inset: "",
      label: "Default",
      outlined: "",
      dense: ""
    },
    on: {
      change: function change($event) {
        return _vm.switchShopingProductColorOptionDefaultStatus(_vm.productColorOption);
      }
    },
    model: {
      value: _vm.isColorDefault,
      callback: function callback($$v) {
        _vm.isColorDefault = $$v;
      },
      expression: "isColorDefault"
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteAttribute(_vm.productColorOption);
      }
    }
  }, [_vm._v("Delete")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      outlined: "",
      color: "green"
    },
    on: {
      click: function click($event) {
        _vm.viewProductColorOption = false;
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      width: "400"
    },
    model: {
      value: _vm.viewProductAttributeOption,
      callback: function callback($$v) {
        _vm.viewProductAttributeOption = $$v;
      },
      expression: "viewProductAttributeOption"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "headline",
    attrs: {
      "primary-title": ""
    }
  }, [_vm._v("\n        " + _vm._s(_vm.activeAttribute.title) + "\n      ")]), _vm._v(" "), _c("v-card-title", [_vm.productAttributeOption.attribute_form !== "image" ? _c("h", [_vm._v("\n          " + _vm._s(_vm.productAttributeOption.value) + "\n        ")]) : _c("v-img", {
    attrs: {
      src: "".concat(_vm.productAttributeOption.value),
      width: "350px"
    }
  })], 1), _vm._v(" "), _c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("p", [_vm._v("Form: " + _vm._s(_vm.productAttributeOption.attribute_form))]), _vm._v(" "), _c("p", [_vm._v("DATE: " + _vm._s(_vm.productAttributeOption.created_at))])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-card-actions", {
    staticClass: "pa-5 background-secundario"
  }, [_c("v-switch", {
    attrs: {
      inset: "",
      label: "Default",
      outlined: "",
      dense: ""
    },
    on: {
      change: function change($event) {
        return _vm.switchShopingProductAttributeOptionDefaultStatus(_vm.productAttributeOption);
      }
    },
    model: {
      value: _vm.isAttributeDefault,
      callback: function callback($$v) {
        _vm.isAttributeDefault = $$v;
      },
      expression: "isAttributeDefault"
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-auto",
    attrs: {
      color: "red",
      outlined: ""
    },
    on: {
      click: function click($event) {
        return _vm.deleteAttribute(_vm.productAttributeOption);
      }
    }
  }, [_vm._v("Delete")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      outlined: "",
      color: "green"
    },
    on: {
      click: function click($event) {
        _vm.viewProductAttributeOption = false;
      }
    }
  }, [_vm._v("Close")])], 1)], 1)], 1)], 1);
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

/***/ "./resources/js/components/FilesEntry.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FilesEntry.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/components/FilesSelector.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/FilesSelector.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FilesSelector_vue_vue_type_template_id_76281c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilesSelector.vue?vue&type=template&id=76281c1b& */ "./resources/js/components/FilesSelector.vue?vue&type=template&id=76281c1b&");
/* harmony import */ var _FilesSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilesSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesSelector.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilesSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilesSelector_vue_vue_type_template_id_76281c1b___WEBPACK_IMPORTED_MODULE_0__.render,
  _FilesSelector_vue_vue_type_template_id_76281c1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/Comment.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Products/Comment.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comment_vue_vue_type_template_id_eab3ce02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment.vue?vue&type=template&id=eab3ce02& */ "./resources/js/components/Products/Comment.vue?vue&type=template&id=eab3ce02&");
/* harmony import */ var _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/Comment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comment_vue_vue_type_template_id_eab3ce02___WEBPACK_IMPORTED_MODULE_0__.render,
  _Comment_vue_vue_type_template_id_eab3ce02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/Comment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/CommentReply.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Products/CommentReply.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentReply_vue_vue_type_template_id_5b2a3b4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentReply.vue?vue&type=template&id=5b2a3b4a& */ "./resources/js/components/Products/CommentReply.vue?vue&type=template&id=5b2a3b4a&");
/* harmony import */ var _CommentReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentReply.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/CommentReply.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentReply_vue_vue_type_template_id_5b2a3b4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentReply_vue_vue_type_template_id_5b2a3b4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/CommentReply.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/CommentsAndReplys.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Products/CommentsAndReplys.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentsAndReplys_vue_vue_type_template_id_80a58be8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentsAndReplys.vue?vue&type=template&id=80a58be8& */ "./resources/js/components/Products/CommentsAndReplys.vue?vue&type=template&id=80a58be8&");
/* harmony import */ var _CommentsAndReplys_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentsAndReplys.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/CommentsAndReplys.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentsAndReplys_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentsAndReplys_vue_vue_type_template_id_80a58be8___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentsAndReplys_vue_vue_type_template_id_80a58be8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/CommentsAndReplys.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/ProductConfiguration.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Products/ProductConfiguration.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductConfiguration_vue_vue_type_template_id_7b4088d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductConfiguration.vue?vue&type=template&id=7b4088d7& */ "./resources/js/components/Products/ProductConfiguration.vue?vue&type=template&id=7b4088d7&");
/* harmony import */ var _ProductConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductConfiguration.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/ProductConfiguration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductConfiguration_vue_vue_type_template_id_7b4088d7___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductConfiguration_vue_vue_type_template_id_7b4088d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/ProductConfiguration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/ProductPhotos.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Products/ProductPhotos.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductPhotos_vue_vue_type_template_id_d632d320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPhotos.vue?vue&type=template&id=d632d320& */ "./resources/js/components/Products/ProductPhotos.vue?vue&type=template&id=d632d320&");
/* harmony import */ var _ProductPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPhotos.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/ProductPhotos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPhotos_vue_vue_type_template_id_d632d320___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductPhotos_vue_vue_type_template_id_d632d320___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/ProductPhotos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/ProductPhotosAndHosts.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Products/ProductPhotosAndHosts.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductPhotosAndHosts_vue_vue_type_template_id_72938678___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPhotosAndHosts.vue?vue&type=template&id=72938678& */ "./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=template&id=72938678&");
/* harmony import */ var _ProductPhotosAndHosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPhotosAndHosts.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductPhotosAndHosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPhotosAndHosts_vue_vue_type_template_id_72938678___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductPhotosAndHosts_vue_vue_type_template_id_72938678___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/ProductPhotosAndHosts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Products/ProductPublisher.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Products/ProductPublisher.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductPublisher_vue_vue_type_template_id_55244f5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPublisher.vue?vue&type=template&id=55244f5d& */ "./resources/js/components/Products/ProductPublisher.vue?vue&type=template&id=55244f5d&");
/* harmony import */ var _ProductPublisher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPublisher.vue?vue&type=script&lang=js& */ "./resources/js/components/Products/ProductPublisher.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductPublisher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductPublisher_vue_vue_type_template_id_55244f5d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductPublisher_vue_vue_type_template_id_55244f5d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Products/ProductPublisher.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductDetails.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductDetails.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductDetails_vue_vue_type_template_id_55bb1b10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=template&id=55bb1b10& */ "./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=template&id=55bb1b10&");
/* harmony import */ var _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetails_vue_vue_type_template_id_55bb1b10___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductDetails_vue_vue_type_template_id_55bb1b10___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/shopping/ProductDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesEntry.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/FilesEntry.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesEntry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FilesSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesSelector.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/Comment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Products/Comment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Comment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/CommentReply.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Products/CommentReply.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentReply.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentReply.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentReply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/CommentsAndReplys.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Products/CommentsAndReplys.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsAndReplys_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentsAndReplys.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentsAndReplys.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsAndReplys_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/ProductConfiguration.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductConfiguration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductConfiguration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductConfiguration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductConfiguration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/ProductPhotos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductPhotos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductPhotos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotosAndHosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductPhotosAndHosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotosAndHosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Products/ProductPublisher.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductPublisher.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPublisher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductPublisher.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPublisher.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPublisher_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesEntry_vue_vue_type_template_id_72c76766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesEntry.vue?vue&type=template&id=72c76766& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesEntry.vue?vue&type=template&id=72c76766&");


/***/ }),

/***/ "./resources/js/components/FilesSelector.vue?vue&type=template&id=76281c1b&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilesSelector.vue?vue&type=template&id=76281c1b& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSelector_vue_vue_type_template_id_76281c1b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSelector_vue_vue_type_template_id_76281c1b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilesSelector_vue_vue_type_template_id_76281c1b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FilesSelector.vue?vue&type=template&id=76281c1b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FilesSelector.vue?vue&type=template&id=76281c1b&");


/***/ }),

/***/ "./resources/js/components/Products/Comment.vue?vue&type=template&id=eab3ce02&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Products/Comment.vue?vue&type=template&id=eab3ce02& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_eab3ce02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_eab3ce02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_template_id_eab3ce02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Comment.vue?vue&type=template&id=eab3ce02& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/Comment.vue?vue&type=template&id=eab3ce02&");


/***/ }),

/***/ "./resources/js/components/Products/CommentReply.vue?vue&type=template&id=5b2a3b4a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Products/CommentReply.vue?vue&type=template&id=5b2a3b4a& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentReply_vue_vue_type_template_id_5b2a3b4a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentReply_vue_vue_type_template_id_5b2a3b4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentReply_vue_vue_type_template_id_5b2a3b4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentReply.vue?vue&type=template&id=5b2a3b4a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentReply.vue?vue&type=template&id=5b2a3b4a&");


/***/ }),

/***/ "./resources/js/components/Products/CommentsAndReplys.vue?vue&type=template&id=80a58be8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Products/CommentsAndReplys.vue?vue&type=template&id=80a58be8& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsAndReplys_vue_vue_type_template_id_80a58be8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsAndReplys_vue_vue_type_template_id_80a58be8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentsAndReplys_vue_vue_type_template_id_80a58be8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentsAndReplys.vue?vue&type=template&id=80a58be8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/CommentsAndReplys.vue?vue&type=template&id=80a58be8&");


/***/ }),

/***/ "./resources/js/components/Products/ProductConfiguration.vue?vue&type=template&id=7b4088d7&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductConfiguration.vue?vue&type=template&id=7b4088d7& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductConfiguration_vue_vue_type_template_id_7b4088d7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductConfiguration_vue_vue_type_template_id_7b4088d7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductConfiguration_vue_vue_type_template_id_7b4088d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductConfiguration.vue?vue&type=template&id=7b4088d7& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductConfiguration.vue?vue&type=template&id=7b4088d7&");


/***/ }),

/***/ "./resources/js/components/Products/ProductPhotos.vue?vue&type=template&id=d632d320&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductPhotos.vue?vue&type=template&id=d632d320& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotos_vue_vue_type_template_id_d632d320___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotos_vue_vue_type_template_id_d632d320___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotos_vue_vue_type_template_id_d632d320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductPhotos.vue?vue&type=template&id=d632d320& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotos.vue?vue&type=template&id=d632d320&");


/***/ }),

/***/ "./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=template&id=72938678&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=template&id=72938678& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotosAndHosts_vue_vue_type_template_id_72938678___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotosAndHosts_vue_vue_type_template_id_72938678___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPhotosAndHosts_vue_vue_type_template_id_72938678___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductPhotosAndHosts.vue?vue&type=template&id=72938678& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPhotosAndHosts.vue?vue&type=template&id=72938678&");


/***/ }),

/***/ "./resources/js/components/Products/ProductPublisher.vue?vue&type=template&id=55244f5d&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Products/ProductPublisher.vue?vue&type=template&id=55244f5d& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPublisher_vue_vue_type_template_id_55244f5d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPublisher_vue_vue_type_template_id_55244f5d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductPublisher_vue_vue_type_template_id_55244f5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductPublisher.vue?vue&type=template&id=55244f5d& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Products/ProductPublisher.vue?vue&type=template&id=55244f5d&");


/***/ }),

/***/ "./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=template&id=55bb1b10&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=template&id=55bb1b10& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_55bb1b10___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_55bb1b10___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_55bb1b10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductDetails.vue?vue&type=template&id=55bb1b10& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/dashboard/shopping/ProductDetails.vue?vue&type=template&id=55bb1b10&");


/***/ })

}]);