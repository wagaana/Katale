"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3871],{3871:(t,a,e)=>{e.r(a),e.d(a,{default:()=>d});var i=e(629),n=e(538),l=e(2640);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){c(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function c(t,a,e){return(a=function(t){var a=function(t,a){if("object"!==o(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,a||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(t,"string");return"symbol"===o(a)?a:String(a)}(a))in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const v={data:function(){return{languages_options:l.mQ,uploads:l.q6,mLocalization:{},translation:{},activeTranslation:{},composeMessage:{},dialogNewLocalization:!1,createNewTranslation:!1,viewTranslation:!1,search:"",localization_valid:!1,translation_valid:!1,rules:{required:function(t){return!!t||"This field is required"},email:function(t){return/.+@.+\..+/.test(t)||"Must be a valid email"}},headers:[{text:"Key",align:"left",sortable:!1,value:"translationkey"},{text:"Value",value:"value"},{text:"Language",value:"label"},{text:"Time Added",value:"creationTime"}],categories:[{id:"ANIMAL",label:"Animal"},{id:"CROP",label:"Crop"}]}},beforeCreate:function(){this.$store.dispatch("loadLocalizations")},computed:r(r({},(0,i.rn)(["localization","translations"])),(0,i.Se)(["getLocalization","getTranslations","getActiveLanguage","messageAlert"])),created:function(){this.$store.dispatch("loadTranslations",void 0!==this.getActiveLanguage?this.getActiveLanguage:"1")},watch:{messageAlert:function(t){null!=t&&(this.$store.dispatch("loadLocalizations"),this.$store.dispatch("loadTranslations",void 0!==this.getActiveLanguage?this.getActiveLanguage:"1"),n.default.notify({group:"foo",title:t.title,text:t.body,type:t.type}))},getActiveLanguage:function(t){null!=t&&(this.$store.dispatch("loadLocalizations"),this.$store.dispatch("loadTranslations",t))}},methods:{loadTranslation:function(t){this.activeTranslation=t,this.viewTranslation=!0},deleteTranslation:function(t){this.viewTranslation=!1,this.$store.dispatch("deleteTranslation",t.id)},validateTranslationForm:function(){this.$refs.translationForm.validate()&&this.createTranslation(this.translation)},validateLocalization:function(){this.$refs.localizationForm.validate()&&this.createLocalization(this.mLocalization)},createTranslation:function(t){this.createNewTranslation=!1,t.localizationId=this.getActiveLanguage,this.$store.dispatch("createTranslation",t)},createLocalization:function(t){this.dialogNewLocalization=!1,console.log("createLocalization",t),this.$store.dispatch("createLocalization",t)},setActiveLanguage:function(t){this.createNewTranslation=!1,this.$store.dispatch("setActiveLanguage",t)}}};const d=(0,e(1900).Z)(v,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("h1",{staticClass:"font-weight-light mb-0"},[t._v("Translations")]),t._v(" "),a("span",{staticClass:"overline"},[t._v("Manage system Translation Settings Here")]),t._v(" "),a("v-card",{staticClass:"py-6"},[a("v-row",{staticClass:"row px-2"},[a("v-col",{staticClass:"py-6",attrs:{lg:"3",cols:"12"}},[a("v-row",[a("v-col",{staticClass:"col-md-12"},[a("v-btn",{staticClass:"primary",attrs:{width:"100%"},on:{click:function(a){t.dialogNewLocalization=!0}}},[a("v-icon",[t._v("mdi-plus")]),t._v("New\n                                    Localization")],1)],1)],1),t._v(" "),a("v-card",[a("v-list",{attrs:{dense:"",nav:""}},t._l(t.getLocalization,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.href,color:e.id+""==t.getActiveLanguage+""?"red":"black"},on:{click:function(a){return t.setActiveLanguage(e.id)}}},[a("v-list-item-icon",[e.id+""==t.getActiveLanguage+""?a("div",{staticClass:"cyan fill-height"},[t._v("\n                                             \n                                        ")]):t._e(),t._v("\n                                         \n                                        "),a("v-icon",[t._v("mdi-translate")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s("".concat(e.label," (").concat(e.language,")")))])],1)],1)})),1)],1)],1),t._v(" "),a("v-col",{staticClass:"py-6",attrs:{lg:"9",cols:"12"}},[a("div",[a("v-row",[a("v-col",[a("v-btn",{staticClass:"primary",on:{click:function(a){t.createNewTranslation=!0}}},[t._v("New Translation")])],1),t._v(" "),a("v-col",[a("v-text-field",{attrs:{"append-icon":"mdi-translate",label:"Search","hide-details":"",dense:"",outlined:""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1),t._v(" "),a("v-card",{staticClass:"py-2 pa-0"},[a("v-data-table",{attrs:{headers:t.headers,items:t.getTranslations,"item-key":"id"},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.item;return[a("tr",{on:{click:function(a){return t.loadTranslation(i)}}},[a("td",[t._v("\n                                                "+t._s(i.translationkey)+"\n                                            ")]),t._v(" "),a("td",[t._v(t._s(i.value))]),t._v(" "),a("td",[t._v(t._s(i.label))]),t._v(" "),a("td",[t._v(t._s(i.creationTime))])])]}}])})],1),t._v(" "),a("v-dialog",{attrs:{width:"500"},model:{value:t.dialogNewLocalization,callback:function(a){t.dialogNewLocalization=a},expression:"dialogNewLocalization"}},[a("v-card",[a("v-card-title",{staticClass:"headline black",attrs:{"primary-title":""}},[t._v("\n                                        Create Localization\n                                    ")]),t._v(" "),a("v-card-text",{staticClass:"pa-5"},[a("v-form",{ref:"localizationForm",attrs:{"lazy-validation":""},model:{value:t.localization_valid,callback:function(a){t.localization_valid=a},expression:"localization_valid"}},[a("v-text-field",{attrs:{label:"Localization Name",rules:[t.rules.required],outlined:"",dense:""},model:{value:t.mLocalization.label,callback:function(a){t.$set(t.mLocalization,"label",a)},expression:"\n                                                    mLocalization.label\n                                                "}}),t._v(" "),a("v-autocomplete",{attrs:{items:t.languages_options,label:"Select Language","item-text":"label","item-value":"id",rules:[t.rules.required],outlined:"",dense:""},model:{value:t.mLocalization.language,callback:function(a){t.$set(t.mLocalization,"language",a)},expression:"\n                                                    mLocalization.language\n                                                "}})],1)],1),t._v(" "),a("v-card-actions",{staticClass:"pa-5"},[a("v-btn",{staticClass:"ml-auto",attrs:{outlined:"",color:"primary"},on:{click:function(a){t.dialogNewLocalization=!1}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"primary",disabled:!t.localization_valid},on:{click:t.validateLocalization}},[t._v("Create")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"400"},model:{value:t.createNewTranslation,callback:function(a){t.createNewTranslation=a},expression:"createNewTranslation"}},[a("v-card",[a("v-card-title",{staticClass:"headline black",attrs:{"primary-title":""}},[t._v("\n                                        Add New Translation Line\n                                    ")]),t._v(" "),a("v-card-text",{staticClass:"pa-5"},[a("v-form",{ref:"translationForm",attrs:{"lazy-validation":""},model:{value:t.translation_valid,callback:function(a){t.translation_valid=a},expression:"translation_valid"}},[a("v-text-field",{attrs:{label:"Translation Key",rules:[t.rules.required],outlined:"",dense:""},model:{value:t.translation.translationkey,callback:function(a){t.$set(t.translation,"translationkey",a)},expression:"\n                                                    translation.translationkey\n                                                "}}),t._v(" "),a("v-text-field",{attrs:{label:"Translation Value",rules:[t.rules.required],outlined:"",dense:""},model:{value:t.translation.value,callback:function(a){t.$set(t.translation,"value",a)},expression:"translation.value"}})],1)],1),t._v(" "),a("v-card-actions",{staticClass:"pa-5"},[a("v-btn",{staticClass:"ml-auto",attrs:{outlined:"",color:"primary"},on:{click:function(a){t.createNewTranslation=!1}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"primary",disabled:!t.translation_valid},on:{click:t.validateTranslationForm}},[t._v("Create")])],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{width:"400"},model:{value:t.viewTranslation,callback:function(a){t.viewTranslation=a},expression:"viewTranslation"}},[a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n                                        "+t._s(t.activeTranslation.translationkey)+"\n                                    ")]),t._v(" "),a("v-card-text",{staticClass:"pa-5"},[a("p",[t._v("\n                                            VALUE:\n                                            "+t._s(t.activeTranslation.value)+"\n                                            "),a("br"),t._v("\n                                            DATE:\n                                            "+t._s(t.activeTranslation.creationTime)+"\n                                            "),a("br"),t._v("\n                                            LANGUAGE:\n                                            "+t._s(t.activeTranslation.label)+"\n                                        ")])]),t._v(" "),a("v-card-actions",{staticClass:"pa-5"},[a("v-btn",{attrs:{color:"red",outlined:""},on:{click:function(a){return t.deleteTranslation(t.activeTranslation)}}},[t._v("Delete")])],1)],1)],1)],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},1900:(t,a,e)=>{function i(t,a,e,i,n,l,o,s){var r,c="function"==typeof t?t.options:t;if(a&&(c.render=a,c.staticRenderFns=e,c._compiled=!0),i&&(c.functional=!0),l&&(c._scopeId="data-v-"+l),o?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=r):n&&(r=s?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(c.functional){c._injectStyles=r;var v=c.render;c.render=function(t,a){return r.call(a),v(t,a)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,r):[r]}return{exports:t,options:c}}e.d(a,{Z:()=>i})}}]);