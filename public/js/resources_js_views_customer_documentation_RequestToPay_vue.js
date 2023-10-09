"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_customer_documentation_RequestToPay_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  template: "#documentation",
  data: function data() {
    return {
      selectedLanguage: {},
      selectedResponse: {},
      requestHeaders: [{
        id: 1,
        label: "Accept",
        dataType: "String",
        description: "(REQUIRED*) must be 'application/json'."
      }, {
        id: 2,
        label: "Authorization",
        dataType: "String",
        description: "(REQUIRED*) must be Bearer, here you will pass your API key you generated from your profile."
      }, {
        id: 4,
        label: "App-Private-Key",
        dataType: "String",
        description: "(REQUIRED*) Here an application key is passed, the key is labled private key under application details"
      }],
      requestBody: "{\n    \"ammount\": 1000, //request ammount\n    \"externalKey\": \"4p1CqwY9j4xcbr8\", //external key for your reference\n    \"message\": \"PAyment for movie tecket\" //transaction message\n}",
      phpSample: "\n      <?php\n\n        $curl = curl_init();\n\n        curl_setopt_array($curl, array(\n        CURLOPT_URL => 'https://pay.nsiimbi.com/api/requestToPay',\n        CURLOPT_RETURNTRANSFER => true,\n        CURLOPT_ENCODING => '',\n        CURLOPT_MAXREDIRS => 10,\n        CURLOPT_TIMEOUT => 0,\n        CURLOPT_FOLLOWLOCATION => true,\n        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n        CURLOPT_CUSTOMREQUEST => 'POST',\n        CURLOPT_POSTFIELDS =>'{\n            \"ammount\": 1000,\n            \"externalKey\": 765778,\n            \"message\": \"PAyment for food\"\n        }',\n        CURLOPT_HTTPHEADER => array(\n            'Accept: application/json',\n            'App-Private-Key: tOWcKkLEvtB***************************4p1CqwY9j4xcbr8',\n            'Authorization: Bearer WOUNRLlaLf****************************hjPdyQ2A',\n            'Content-Type: application/json'\n        ),\n        ));\n\n        $response = curl_exec($curl);\n\n        curl_close($curl);\n        echo $response;\n",
      javaSample: "\n      OkHttpClient client = new OkHttpClient().newBuilder()\n        .build();\n        MediaType mediaType = MediaType.parse(\"application/json\");\n        RequestBody body = RequestBody.create(mediaType, \"{\r\n    \"ammount\": 1000,\r\n    \"externalKey\": 765778,\r\n    \"message\": \"PAyment for food\"\r\n}\");\n        Request request = new Request.Builder()\n        .url(\"https://pay.nsiimbi.com/api/requestToPay\")\n        .method(\"POST\", body)\n        .addHeader(\"Accept\", \"application/json\")\n        .addHeader(\"App-Private-Key\", \"tOWcKkLEvtB***************************4p1CqwY9j4xcbr8\")\n        .addHeader(\"Authorization\", \"Bearer WOUNRLlaLf****************************hjPdyQ2A\")\n        .addHeader(\"Content-Type\", \"application/json\")\n        .build();\n        Response response = client.newCall(request).execute();\n  ",
      pythonSample: "\n      import requests\n        import json\n\n        url = \"https://pay.nsiimbi.com/api/requestToPay\"\n\n        payload = json.dumps({\n        \"ammount\": 1000,\n        \"externalKey\": 765778,\n        \"message\": \"PAyment for food\"\n        })\n        headers = {\n        'Accept': 'application/json',\n        'App-Private-Key': 'tOWcKkLEvtB***************************4p1CqwY9j4xcbr8',\n        'Authorization': 'Bearer WOUNRLlaLf****************************hjPdyQ2A',\n        'Content-Type': 'application/json'\n        }\n\n        response = requests.request(\"POST\", url, headers=headers, data=payload)\n\n        print(response.text)\n",
      javaScriptSample: "\n        var myHeaders = new Headers();\n        myHeaders.append(\"Accept\", \"application/json\");\n        myHeaders.append(\"App-Private-Key\", \"tOWcKkLEvtB***************************4p1CqwY9j4xcbr8\");\n        myHeaders.append(\"Authorization\", \"Bearer WOUNRLlaLf****************************hjPdyQ2A\");\n        myHeaders.append(\"Content-Type\", \"application/json\");\n\n        var raw = JSON.stringify({\n        \"ammount\": 1000,\n        \"externalKey\": 765778,\n        \"message\": \"PAyment for food\"\n        });\n\n        var requestOptions = {\n        method: 'POST',\n        headers: myHeaders,\n        body: raw,\n        redirect: 'follow'\n        };\n\n        fetch(\"https://pay.nsiimbi.com/api/requestToPay\", requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));",
      programmingLanguages: [{
        text: "JavaScript",
        value: "nodejs",
        icon: "mdi mdi-language-javascript"
      }, {
        text: "PHP",
        value: "php",
        icon: "mdi-language-php"
      }, {
        text: "Java",
        value: "java",
        icon: "mdi-language-java"
      }, {
        text: "Python",
        value: "python",
        icon: "mdi-language-python"
      }],
      apiResponses: [{
        text: "Successful response",
        value: "success"
      }, {
        text: "Failed response",
        value: "fail"
      }],
      successfulResponse: "\n      {\n          \"request_token\": \"a3a5*************************fce196de\",\n          \"payment_url\": \"https://pay.nsiimbi.com/payments/a3a5*************************fce196de\"\n      }",
      failedResponse: "\n      {\n        \"message\": \"\",\n        \"statis\": \"500\",\n      }"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=template&id=223417d5&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=template&id=223417d5& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      lg: "12"
    }
  }, [_c("v-card", [_c("v-container", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      lg: "12"
    }
  }, [_c("h2", {
    staticClass: "font-weight-bold mb-0"
  }, [_vm._v("Request To Pay")]), _vm._v(" "), _c("span", {
    staticClass: "font-weight-bold mb-0 py-2"
  }, [_vm._v("\n              This API request allows you to create a payment URL that can be\n              used by your customer/user to pay for your goods/services\n              through Nsiimbi. The API endpoint is\n              "), _c("a", {
    staticClass: "text-primary"
  }, [_vm._v("https://pay.nsiimbi.com/api/requestToPay")]), _vm._v(". "), _c("br"), _c("br"), _vm._v("Note: Only POST requests are accepted by this API\n            ")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("h3", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Request Headers")]), _vm._v(" "), _vm._l(_vm.requestHeaders, function (requestHeader) {
    return _c("div", {
      key: requestHeader.id,
      staticClass: "mt-2"
    }, [_c("v-divider"), _vm._v(" "), _c("v-row", {
      staticClass: "mt-2"
    }, [_c("v-col", {
      attrs: {
        cols: "12",
        lg: "3"
      }
    }, [_vm._v(_vm._s(requestHeader.label) + " ")]), _vm._v(" "), _c("v-col", {
      attrs: {
        cols: "12",
        lg: "2"
      }
    }, [_vm._v(_vm._s(requestHeader.dataType) + " ")]), _vm._v(" "), _c("v-col", {
      attrs: {
        cols: "12",
        lg: "7"
      }
    }, [_c("div", {
      domProps: {
        innerHTML: _vm._s(requestHeader.description)
      }
    })])], 1)], 1);
  }), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("h3", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Request Body")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("pre", [_vm._v("                  "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.requestBody)
    }
  }), _vm._v("\n                ")])])], 1), _vm._v(" "), _c("v-divider")], 2)], 1), _vm._v(" "), _c("h3", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Code samples")]), _vm._v(" "), _c("v-card", {
    staticClass: "mt-5"
  }, [_c("v-tabs", {
    attrs: {
      "background-color": "primary",
      dark: ""
    },
    model: {
      value: _vm.selectedLanguage,
      callback: function callback($$v) {
        _vm.selectedLanguage = $$v;
      },
      expression: "selectedLanguage"
    }
  }, _vm._l(_vm.programmingLanguages, function (language) {
    return _c("v-tab", {
      key: language.id
    }, [_c("v-icon", [_vm._v(_vm._s(language.icon))])], 1);
  }), 1), _vm._v(" "), _c("v-tabs-items", {
    model: {
      value: _vm.selectedLanguage,
      callback: function callback($$v) {
        _vm.selectedLanguage = $$v;
      },
      expression: "selectedLanguage"
    }
  }, [_c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("pre", [_vm._v("                        "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.javaScriptSample)
    }
  }), _vm._v("\n                      ")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("pre", [_vm._v("                        "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.phpSample)
    }
  }), _vm._v("\n                      ")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("pre", [_vm._v("                        "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.javaSample)
    }
  }), _vm._v("\n                      ")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("pre", [_vm._v("                        "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.pythonSample)
    }
  }), _vm._v("\n                      ")])])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("h3", {
    staticClass: "font-weight-light mb-0"
  }, [_vm._v("Expected Responses")]), _vm._v(" "), _c("v-card", {
    staticClass: "mt-5"
  }, [_c("v-tabs", {
    attrs: {
      "background-color": "primary",
      dark: ""
    },
    model: {
      value: _vm.selectedResponse,
      callback: function callback($$v) {
        _vm.selectedResponse = $$v;
      },
      expression: "selectedResponse"
    }
  }, _vm._l(_vm.apiResponses, function (apiResponse) {
    return _c("v-tab", {
      key: apiResponse.id
    }, [_vm._v("\n              " + _vm._s(apiResponse.text) + "\n            ")]);
  }), 1), _vm._v(" "), _c("v-tabs-items", {
    model: {
      value: _vm.selectedResponse,
      callback: function callback($$v) {
        _vm.selectedResponse = $$v;
      },
      expression: "selectedResponse"
    }
  }, [_c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("pre", [_vm._v("                        "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.successfulResponse)
    }
  }), _vm._v("\n                      ")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("v-card-text", {
    staticClass: "pa-5"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("pre", [_vm._v("                        "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.failedResponse)
    }
  }), _vm._v("\n                      ")])])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/customer/documentation/RequestToPay.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/customer/documentation/RequestToPay.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RequestToPay_vue_vue_type_template_id_223417d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestToPay.vue?vue&type=template&id=223417d5& */ "./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=template&id=223417d5&");
/* harmony import */ var _RequestToPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestToPay.vue?vue&type=script&lang=js& */ "./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequestToPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequestToPay_vue_vue_type_template_id_223417d5___WEBPACK_IMPORTED_MODULE_0__.render,
  _RequestToPay_vue_vue_type_template_id_223417d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customer/documentation/RequestToPay.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestToPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestToPay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestToPay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=template&id=223417d5&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=template&id=223417d5& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestToPay_vue_vue_type_template_id_223417d5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestToPay_vue_vue_type_template_id_223417d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RequestToPay_vue_vue_type_template_id_223417d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RequestToPay.vue?vue&type=template&id=223417d5& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customer/documentation/RequestToPay.vue?vue&type=template&id=223417d5&");


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