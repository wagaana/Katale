"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8598],{8598:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var i=r(629),n=r(538),a=r(2640);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u={data:function(){return{rules:{required:function(e){return!!e||"This field is required"},email:function(e){return/.+@.+\..+/.test(e)||"Must be a valid email"}},uploads:a.q6,dialogTemplate:!1,activeProfile:{},headers:[{text:"ID",align:"left",sortable:!1,value:"id"},{text:"Avator",value:"profile_picture"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Gender",value:"gender"},{text:"Email Varified",value:"email_verified"},{text:"Join Date",value:"created_at"}]}},created:function(){this.$store.dispatch("loadSystemUsers")},computed:l(l({},(0,i.rn)(["profiles"])),(0,i.Se)(["getUserProfiles","messageAlert"])),watch:{messageAlert:function(e){null!=e&&n.default.notify({group:"foo",title:e.title,text:e.body,type:e.type})}},methods:{viewProfile:function(e){this.$router.push({path:"/admin/customers/"+e.id,query:{}})},createCampaign:function(){this.$router.push({path:"/createCampaign",query:{action:"newCampaign"}})},loadTemplate:function(e){this.activeProfile=e,this.dialogTemplate=!0}}};const d=(0,r(1900).Z)(u,(function(){var e=this,t=e._self._c;return t("v-container",[t("div",[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12 pr-md-1 sm-6"},[t("h1",{staticClass:"font-weight-light"},[e._v("System Users")]),e._v(" "),t("span",{staticClass:"overline"},[e._v("Manage all the users Here")])])]),e._v(" "),t("v-card",[t("v-data-table",{attrs:{headers:e.headers,items:e.getUserProfiles,"item-key":"id"},scopedSlots:e._u([{key:"item",fn:function(r){var i=r.item;return[t("tr",{on:{click:function(t){return e.loadTemplate(i)}}},[t("td",[e._v(e._s(i.id))]),e._v(" "),t("td",[t("img",{attrs:{src:"".concat(e.uploads).concat(i.profile_picture),width:"30px",height:"30px"}})]),e._v(" "),t("td",[e._v(e._s(i.name))]),e._v(" "),t("td",[e._v(e._s(i.email))]),e._v(" "),t("td",[e._v("\n                            "+e._s(i.gender)+"\n                        ")]),e._v(" "),t("td",[e._v(e._s(i.email_verified))]),e._v(" "),t("td",[e._v(e._s(i.created_at))])])]}}])})],1),e._v(" "),t("v-dialog",{attrs:{width:"420"},model:{value:e.dialogTemplate,callback:function(t){e.dialogTemplate=t},expression:"dialogTemplate"}},[t("v-card",[t("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t("h2",[e._v(e._s(e.activeProfile.name))])]),e._v(" "),t("v-divider"),e._v(" "),t("v-card",{staticClass:"pa-5"},[t("v-card-title",[t("v-img",{attrs:{src:"".concat(e.uploads).concat(e.activeProfile.profile_picture),width:"350px"}})],1),e._v(" "),t("v-card-text",[t("p",[e._v(e._s(e.activeProfile.email))]),e._v(" "),t("span",{staticClass:"success--text subtitle-1"},[e._v("\n                            Created: "+e._s(e.activeProfile.created_at)+"\n                        ")])])],1),e._v(" "),t("v-divider"),e._v(" "),t("v-card-actions",{staticClass:"pa-5"},[t("v-btn",{attrs:{color:"success",outlined:""}},[e._v("Email")]),e._v(" "),t("v-btn",{staticClass:"ml-auto",attrs:{outlined:"",color:"red"},on:{click:function(t){e.dialogTemplate=!1}}},[e._v("Close")]),e._v(" "),t("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(t){return e.viewProfile(e.activeProfile)}}},[e._v("View Profile")])],1)],1)],1)],1)])}),[],!1,null,null,null).exports},1900:(e,t,r)=>{function i(e,t,r,i,n,a,o,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=s?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}r.d(t,{Z:()=>i})}}]);