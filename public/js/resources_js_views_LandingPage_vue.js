(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_LandingPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_main_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/main.webp */ "./resources/assets/img/main.webp");
/* harmony import */ var _assets_img_main_webp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_img_main_webp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_sub_main_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/sub_main.jpg */ "./resources/assets/img/sub_main.jpg");
/* harmony import */ var _assets_img_sub_main_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_sub_main_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_social_cover_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/social_cover.jpeg */ "./resources/assets/img/social_cover.jpeg");
/* harmony import */ var _assets_img_social_cover_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_social_cover_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constants */ "./resources/js/utils/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "App",
  data: function data() {
    return {
      uploads: _utils_constants__WEBPACK_IMPORTED_MODULE_4__.uploads,
      title: " Nsiimbi",
      imageLink: {
        main: (_assets_img_main_webp__WEBPACK_IMPORTED_MODULE_1___default()),
        sub_main: (_assets_img_sub_main_jpg__WEBPACK_IMPORTED_MODULE_2___default()),
        logo: (_assets_logo_png__WEBPACK_IMPORTED_MODULE_0___default()),
        social_cover: (_assets_img_social_cover_jpeg__WEBPACK_IMPORTED_MODULE_3___default())
      },
      email: "",
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail must be valid";
      }],
      subscribed: false
    };
  },
  beforeCreate: function beforeCreate() {
    this.$store.dispatch("getMyProfile");
  },
  methods: {
    subscribe: function subscribe() {
      this.subscribed = !this.subscribed;
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)(["myUserProfile"])), (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["myUserProfile"])), {}, {
    imgHeight: function imgHeight() {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  }),
  mounted: function mounted() {
    this.calculateHeight();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true& ***!
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
  return _c("v-app", {
    attrs: {
      light: ""
    }
  }, [_c("v-toolbar", {
    staticClass: "black"
  }, [_c("v-toolbar-side-icon", {
    staticClass: "mx-2"
  }, [_c("img", {
    attrs: {
      src: _vm.imageLink.logo,
      alt: _vm.title,
      height: "50px"
    }
  })]), _vm._v(" "), _c("v-toolbar-title", {
    staticClass: "mx-0 white--text",
    domProps: {
      textContent: _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "white--text"
  }, [_vm._v("©")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-toolbar-items", [_vm.myUserProfile.profile_picture == null || _vm.myUserProfile.profile_picture == undefined ? _c("v-btn", {
    attrs: {
      flat: "",
      to: "login"
    }
  }, [_vm._v("Sign In")]) : _c("v-list-item-avatar", [_c("img", {
    attrs: {
      src: "".concat(_vm.uploads).concat(_vm.myUserProfile.profile_picture)
    }
  })])], 1)], 1), _vm._v(" "), _c("v-content", [_c("section", [_c("v-parallax", {
    attrs: {
      src: _vm.imageLink.sub_main,
      height: "600"
    }
  }, [_c("v-layout", {
    staticClass: "white--text",
    attrs: {
      column: "",
      "align-center": "",
      "justify-center": ""
    }
  }, [_c("h1", {
    staticClass: "white--text mb-2 display-1 text-xs-center",
    staticStyle: {
      "font-weight": "900",
      "text-shadow": "3px 2px #000000"
    }
  }, [_vm._v("\n            We’ve got you covered.\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "white--text subheading mb-3 text-xs-center",
    staticStyle: {
      "font-weight": "900",
      "text-shadow": "2px 2px #000000"
    }
  }, [_vm._v("\n            Endless possibilities for every user or business\n          ")]), _vm._v(" "), _c("v-btn", {
    staticClass: "blue lighten-2 mt-5",
    attrs: {
      dark: "",
      large: "",
      to: "/home"
    }
  }, [_vm._v("\n            Get Started\n          ")])], 1)], 1)], 1), _vm._v(" "), _c("section", [_c("v-layout", {
    staticClass: "my-5",
    attrs: {
      column: "",
      wrap: "",
      "align-center": ""
    }
  }, [_c("v-flex", {
    staticClass: "my-3",
    attrs: {
      xs12: "",
      sm4: ""
    }
  }, [_c("div", {
    staticClass: "text-xs-center"
  }, [_c("h2", {
    staticClass: "headline"
  }, [_vm._v("THE WORLD AT YOUR FINGERTIPS")])])]), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: ""
    }
  }, [_c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("v-layout", {
    attrs: {
      row: "",
      wrap: "",
      "align-center": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      md4: ""
    }
  }, [_c("v-card", {
    staticClass: "elevation-0 transparent"
  }, [_c("v-card-text", {
    staticClass: "layout justify-center"
  }, [_c("v-icon", {
    staticClass: "blue--text text--lighten-2",
    attrs: {
      "x-large": ""
    }
  }, [_vm._v("mdi-security")])], 1), _vm._v(" "), _c("v-card-title", {
    staticClass: "layout justify-center",
    attrs: {
      "primary-title": ""
    }
  }, [_c("div", {
    staticClass: "headline text-xs-center"
  }, [_vm._v("\n                      Safer and protected\n                    ")])]), _vm._v(" "), _c("v-card-text", [_vm._v("\n                    Shop with peace of mind. We don’t share your full\n                    financial information with sellers. And Nsiimbi Exchange\n                    Buyer Protection covers your eligible purchases if they\n                    don’t show up or match their description.\n                  ")])], 1)], 1), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: "",
      md4: ""
    }
  }, [_c("v-card", {
    staticClass: "elevation-0 transparent"
  }, [_c("v-card-text", {
    staticClass: "layout justify-center"
  }, [_c("v-icon", {
    staticClass: "blue--text text--lighten-2",
    attrs: {
      "x-large": ""
    }
  }, [_vm._v("mdi-earth")])], 1), _vm._v(" "), _c("v-card-title", {
    staticClass: "layout justify-center",
    attrs: {
      "primary-title": ""
    }
  }, [_c("div", {
    staticClass: "headline"
  }, [_vm._v("Across devices, worldwide")])]), _vm._v(" "), _c("v-card-text", [_vm._v("\n                    With just one account, you can shop at millions of\n                    merchants around the world, and send payments for goods or\n                    services almost anywhere. Use any of your devices to\n                    manage your account on the go with the Nsiimbi Exchange\n                    app.\n                  ")])], 1)], 1), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: "",
      md4: ""
    }
  }, [_c("v-card", {
    staticClass: "elevation-0 transparent"
  }, [_c("v-card-text", {
    staticClass: "layout justify-center"
  }, [_c("v-icon", {
    staticClass: "blue--text text--lighten-2",
    attrs: {
      "x-large": ""
    }
  }, [_vm._v("mdi-flash")])], 1), _vm._v(" "), _c("v-card-title", {
    staticClass: "layout justify-center",
    attrs: {
      "primary-title": ""
    }
  }, [_c("div", {
    staticClass: "headline text-xs-center"
  }, [_vm._v("\n                      Mostly free, always upfront\n                    ")])]), _vm._v(" "), _c("v-card-text", [_vm._v("\n                    It’s free to open a Nsiimbi Exchange account and buy\n                    something using Nsiimbi Exchange unless it involves a\n                    currency conversion.\n                  ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("section", [_c("v-parallax", {
    attrs: {
      src: _vm.imageLink.main,
      height: "380"
    }
  }, [_c("v-layout", {
    attrs: {
      column: "",
      "align-center": "",
      "justify-center": ""
    }
  }, [_c("div", {
    staticClass: "headline white--text mb-3 text-xs-center"
  }, [_vm._v("\n            Nsiimbi Exchange is for everyone who pays online.\n          ")]), _vm._v(" "), _c("em", [_vm._v("Sell online, process payments, build financial products, or use\n            business tools designed to grow your business.")]), _vm._v(" "), _c("v-btn", {
    staticClass: "blue lighten-2 mt-5",
    attrs: {
      dark: "",
      large: "",
      to: "/home"
    }
  }, [_vm._v("\n            Get more info\n          ")])], 1)], 1)], 1), _vm._v(" "), _c("section", [_c("v-container", {
    attrs: {
      "grid-list-xl": ""
    }
  }, [_c("v-layout", {
    staticClass: "my-5",
    attrs: {
      row: "",
      wrap: "",
      "justify-center": ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      sm4: ""
    }
  }, [_c("v-card", {
    staticClass: "elevation-0 transparent"
  }, [_c("v-card-title", {
    staticClass: "layout justify-center",
    attrs: {
      "primary-title": ""
    }
  }, [_c("div", {
    staticClass: "headline"
  }, [_vm._v("Company info")])]), _vm._v(" "), _c("v-card-text", [_vm._v("\n                WAGAANA TECH (HOLDINGS) LTD has an extended network of\n                specialists who can be staffed on a client’s project team to\n                address specific needs or solve issues.\n              ")])], 1)], 1), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: "",
      sm4: "",
      "offset-sm1": ""
    }
  }, [_c("v-card", {
    staticClass: "elevation-0 transparent"
  }, [_c("v-card-title", {
    staticClass: "layout justify-center",
    attrs: {
      "primary-title": ""
    }
  }, [_c("div", {
    staticClass: "headline"
  }, [_vm._v("We are hiring")])]), _vm._v(" "), _c("v-card-text", [_vm._v("\n                Your skills are needed to rethink and reinvent new ways to\n                make money safe and accessible for all. Find the perfect fit\n                with a team and role that suits your skills.\n              ")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("section", [_c("v-container", [_c("v-layout", [_c("v-flex", {
    staticClass: "text-xs-center",
    attrs: {
      xs12: ""
    }
  }, [_c("img", {
    attrs: {
      height: "200px",
      src: _vm.imageLink.logo
    }
  })])], 1)], 1)], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/img/main.webp":
/*!****************************************!*\
  !*** ./resources/assets/img/main.webp ***!
  \****************************************/
/***/ ((module) => {

module.exports = "/images/main.webp?0a983e5a654ef62ad6d5ffe2a4a3fe92";

/***/ }),

/***/ "./resources/assets/img/social_cover.jpeg":
/*!************************************************!*\
  !*** ./resources/assets/img/social_cover.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/social_cover.jpeg?a165bb48a01c2612dbf28dcc51c59551";

/***/ }),

/***/ "./resources/assets/img/sub_main.jpg":
/*!*******************************************!*\
  !*** ./resources/assets/img/sub_main.jpg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "/images/sub_main.jpg?a0e7f85d43c0eb4ef1e3bd6e4603b96c";

/***/ }),

/***/ "./resources/assets/logo.png":
/*!***********************************!*\
  !*** ./resources/assets/logo.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "/images/logo.png?da4d6fae660790bcdc10327028833f26";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.finedTitle[data-v-ff0b8c12] {\n  font-weight: 900;\n  text-shadow: 2px 2px #000000;\n}\n.social-icon[data-v-ff0b8c12] {\n  font-size: 21px;\n  color: white;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_ff0b8c12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_ff0b8c12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_ff0b8c12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/LandingPage.vue":
/*!********************************************!*\
  !*** ./resources/js/views/LandingPage.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LandingPage_vue_vue_type_template_id_ff0b8c12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true& */ "./resources/js/views/LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true&");
/* harmony import */ var _LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=script&lang=js& */ "./resources/js/views/LandingPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _LandingPage_vue_vue_type_style_index_0_id_ff0b8c12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css& */ "./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LandingPage_vue_vue_type_template_id_ff0b8c12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LandingPage_vue_vue_type_template_id_ff0b8c12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ff0b8c12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/LandingPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/LandingPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/LandingPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LandingPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_ff0b8c12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_ff0b8c12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_ff0b8c12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=template&id=ff0b8c12&scoped=true&");


/***/ }),

/***/ "./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_id_ff0b8c12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/LandingPage.vue?vue&type=style&index=0&id=ff0b8c12&scoped=true&lang=css&");


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