(self.webpackChunk=self.webpackChunk||[]).push([[6304],{5211:e=>{e.exports="/images/main.webp?0a983e5a654ef62ad6d5ffe2a4a3fe92"},5481:e=>{e.exports="/images/social_cover.jpeg?a165bb48a01c2612dbf28dcc51c59551"},7223:e=>{e.exports="/images/sub_main.jpg?a0e7f85d43c0eb4ef1e3bd6e4603b96c"},12:e=>{e.exports="/images/logo.png?da4d6fae660790bcdc10327028833f26"},6304:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var o=r(629),i=r(12),n=r.n(i),s=r(5211),a=r.n(s),c=r(7223),l=r.n(c),u=r(5481),f=r.n(u),p=r(2640);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const y={template:"#documentation",data:function(){return{title:"Nsiimbi",imageLink:{main:a(),sub_main:l(),logo:n(),social_cover:f()},selectedLanguage:{},selectedResponse:{},uploads:p.q6,items:[{title:"Request To Pay",icon:"mdi-cloud",href:"/api_reference/requestToPay"},{title:"Request Status",icon:"mdi-wechat",href:"/api_reference/request_status"}]}},computed:b(b({},(0,o.rn)(["myUserProfile"])),(0,o.Se)(["myUserProfile"])),beforeCreate:function(){this.$store.dispatch("getMyProfile")}};const _=(0,r(1900).Z)(y,(function(){var e=this,t=e._self._c;return t("v-container",[t("v-row",{staticClass:"no-gutters"},[t("v-col",{staticClass:"col"},[t("h1",{staticClass:"mb-0"},[e._v("Hello "+e._s(e.myUserProfile.name)+",")]),e._v(" "),t("div",{staticClass:"overline mb-4"},[e._v("We are at your service today!.")])]),e._v(" "),t("v-list-item-avatar",{staticClass:"ml-auto",attrs:{size:"70"}},[null==e.myUserProfile.profile_picture||null==e.myUserProfile.profile_picture?t("img",{attrs:{src:e.imageLink.logo,alt:e.title,height:"50px"}}):t("img",{attrs:{src:"".concat(e.uploads).concat(e.myUserProfile.profile_picture)}})])],1),e._v(" "),t("v-row",[t("v-col",{staticClass:"pb-2",attrs:{lg:"4",cols:"sm"}},[t("v-card",{staticClass:"mb-4 pa-5"},[t("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(r){return t("v-list-item",{key:r.title,attrs:{link:"",to:r.href}},[t("v-list-item-icon",[t("v-icon",[e._v(e._s(r.icon))])],1),e._v(" "),t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(r.title))])],1)],1)})),1)],1)],1),e._v(" "),t("v-col",{staticClass:"pb-2",attrs:{lg:"8",cols:"sm"}},[t("router-view")],1)],1)],1)}),[],!1,null,null,null).exports},1900:(e,t,r)=>{"use strict";function o(e,t,r,o,i,n,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),o&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=a?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:l}}r.d(t,{Z:()=>o})}}]);