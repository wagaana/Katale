"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9144],{9707:(t,e,i)=>{i.d(e,{Z:()=>d});var o=i(629),s=i(538),n=i(2640);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const p={props:["selectedFiles","label"],data:function(){return{uploads:n.q6,activeFile:{},dialogOpenFiles:!1}},beforeCreate:function(){this.$store.dispatch("loadUserFiles")},computed:c(c({},(0,o.rn)(["userFiles"])),(0,o.Se)(["messageAlert","getUserFiles"])),watch:{messageAlert:function(t){null!=t&&(s.default.notify({group:"foo",title:t.title,text:t.body,type:t.type}),this.$store.dispatch("loadUserFiles"))},getSystemSettings:function(t){if(null!=t)for(var e=0;e<t.length;e++){var i=t[e];this.settings[i.setting_name]=i.setting_value}}},mounted:function(){},methods:{editProfileImage:function(){document.getElementById("mediaInput").click()},handleMediaChange:function(t){for(var e=t.target.files,i=new FormData,o=0;o<e.length;o++)i.append("files[]",e[o]);this.$store.dispatch("uploadMultiple",i)},emitFile:function(t){this.activeFile=t,this.dialogOpenFiles=!1,this.$emit("selectedFiles",t)}}};const d=(0,i(1900).Z)(p,(function(){var t=this,e=t._self._c;return e("v-container",{attrs:{"grid-list-xl":""}},[e("v-card",{staticClass:"pa-2",on:{click:function(e){t.dialogOpenFiles=!0}}},[e("v-row",[e("v-col",{staticClass:"py-4 center",attrs:{cols:"12","offset-sm":"0",sm:"4"}},[e("v-img",{attrs:{src:null!=t.activeFile.path?"".concat(t.uploads).concat(t.activeFile.path):"/images/default/default-image-40x40.png",height:"30",width:"30"}})],1),t._v(" "),e("v-col",{staticClass:"py-5 center",attrs:{cols:"12",sm:"8"}},[t._v(" "+t._s(t.label)+" ")])],1)],1),t._v(" "),e("v-dialog",{attrs:{width:"900"},model:{value:t.dialogOpenFiles,callback:function(e){t.dialogOpenFiles=e},expression:"dialogOpenFiles"}},[e("v-card",{staticClass:"pa-3"},[e("v-row",{staticClass:"pa-2"},[e("v-row",[e("v-col",{staticClass:"col-md-11 pr-md-1 sm-6"},[e("h1",{staticClass:"font-weight-light mb-0"},[t._v("Files & Media")]),t._v(" "),e("span",{staticClass:"overline"},[t._v("Upload Your Files & Media To use later")])]),t._v(" "),e("v-col",{staticClass:"col-md-1 pr-md-1"},[e("input",{attrs:{type:"file",id:"mediaInput",hidden:"",multiple:"",accept:".jpg, .jpeg, .png, .gif, .mp4, .mpg, .mpeg, .webp, .webm, .ogg, .avi, .mov, .flv, .swf, .mkv, .wmv, .wma, .aac, .wav, .mp3, .zip, .rar, .7z, .doc, .txt, .docx, .pdf, .csv, .xml, .ods, .xlr, .xls, .xlsx"},on:{change:t.handleMediaChange}}),t._v(" "),e("v-btn",{staticClass:"primary",attrs:{width:"100%"},on:{click:t.editProfileImage}},[t._v("Upload")])],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.getUserFiles,(function(i){return e("v-flex",{key:i.id,attrs:{xs12:"",sm6:"",md4:"",xl2:""}},[e("v-card",{on:{click:function(e){return t.emitFile(i)}}},[[e("v-list-item",[e("v-row",{staticClass:"pa-2"},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{style:{"background-image":"url(".concat(t.uploads).concat(i.path,")"),"background-repeat":"no-repeat",height:"200px",width:"100%","background-size":"cover"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-row",{staticClass:"d-flex align-center"},[e("v-col",{staticClass:"col-md-12 pr-md-1 sm-6"},[e("v-list-item-content",[e("v-list-item-subtitle",[t._v("\n                                "+t._s(i.created_at)+"\n                              ")]),t._v(" "),e("v-list-item-title",[t._v("\n                                "+t._s(i.name)+"\n                              ")])],1)],1)],1)],1)],1)],1)]],2)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},9144:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var o=i(629),s=i(538),n=i(2640);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const p={components:{FilesEntry:i(9707).Z},data:function(){return{file:null,countries:n.hW,uploads:n.q6,escapeHtml:n.Xv,specificationCompose:{},activeSpecification:{},composeMessage:{},dialogComposeEmail:!1,viewUserProfile:!1,valid:!1,rules:{required:function(t){return!!t||"This field is required"},email:function(t){return/.+@.+\..+/.test(t)||"Must be a valid email"}},headers:[{text:"Title",align:"left",sortable:!1,value:"title"},{text:"Description",align:"left",sortable:!1,value:"description"}],systemUserLevels:[{id:"OWNER",label:"System Owner"},{id:"EDITOR",label:"System Editor"},{id:"VIEWER",label:"System Viewer"}]}},beforeCreate:function(){this.$store.dispatch("loadSpecifications"),this.$store.dispatch("loadShopingCategories")},computed:c(c({},(0,o.rn)(["specifications","shopingCategories"])),(0,o.Se)(["getSpecifications","getShopingCategories","messageAlert"])),watch:{messageAlert:function(t){null!=t&&(s.default.notify({group:"foo",title:"Success",text:t.body}),this.$store.dispatch("loadSpecifications"),this.$store.dispatch("loadShopingCategories"))}},methods:{loadSpecification:function(t){this.activeSpecification=t,this.viewUserProfile=!0},deleteSpecification:function(t){this.$store.dispatch("deleteSpecification",t.id),this.viewUserProfile=!1},composeEmail:function(t){this.viewUserProfile=!1,this.dialogComposeEmail=!0},validateEmail:function(){this.$refs.sendForm.validate()&&this.sendEmail(this.specificationCompose)},sendEmail:function(){alert("Sending")},validate:function(){this.$refs.sendForm.validate()&&this.createSpecification(this.specificationCompose)},createSpecification:function(t){this.$store.dispatch("submitSpecification",t)}}};const d=(0,i(1900).Z)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("v-row",[e("v-col",{staticClass:"col-md-8 pr-md-1 sm-6"},[e("v-row",[e("v-col",{staticClass:"col-md-10 pr-md-1 sm-6"},[e("h1",{staticClass:"font-weight-light mb-2"},[t._v("Products Specifications")]),t._v(" "),e("span",{staticClass:"overline"},[t._v("Manage Products Specifications here")])])],1),t._v(" "),e("v-card",{staticClass:"py-2 pa-0"},[e("v-data-table",{attrs:{headers:t.headers,items:t.getSpecifications,"item-key":"id"},scopedSlots:t._u([{key:"item",fn:function(i){var o=i.item;return[e("tr",{on:{click:function(e){return t.loadSpecification(o)}}},[e("td",[t._v(t._s(o.title))]),t._v(" "),e("td",[t._v(t._s(o.description))])])]}}])})],1)],1),t._v(" "),e("v-col",{staticClass:"col-md-4 pr-md-1 fill-width"},[e("v-card",[e("v-card-text",{staticClass:"pa-2"},[e("v-form",{ref:"sendForm",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-text-field",{attrs:{label:"Specification Label",rules:[t.rules.required],autocomplete:"email",outlined:"",dense:""},model:{value:t.specificationCompose.title,callback:function(e){t.$set(t.specificationCompose,"title",e)},expression:"specificationCompose.title"}}),t._v(" "),e("v-autocomplete",{attrs:{items:t.getShopingCategories,label:"Select Parent","item-text":"title","item-value":"id",outlined:"",dense:""},model:{value:t.specificationCompose.parent_id,callback:function(e){t.$set(t.specificationCompose,"parent_id",e)},expression:"specificationCompose.parent_id"}}),t._v(" "),e("v-textarea",{attrs:{label:"Specification Description",rules:[t.rules.required],outlined:"",dense:""},model:{value:t.specificationCompose.description,callback:function(e){t.$set(t.specificationCompose,"description",e)},expression:"specificationCompose.description"}})],1)],1),t._v(" "),e("v-card-actions",{staticClass:"pa-2"},[e("v-btn",{staticClass:"ml-auto",attrs:{color:"primary",disabled:!t.valid},on:{click:t.validate}},[t._v("Submit")])],1)],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{width:"400"},model:{value:t.viewUserProfile,callback:function(e){t.viewUserProfile=e},expression:"viewUserProfile"}},[e("v-card",[e("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n        "+t._s(t.activeSpecification.title)+"\n      ")]),t._v(" "),e("v-card-title",[e("v-card",{style:{"background-image":"url(".concat(t.activeSpecification.logo,")"),"background-repeat":"no-repeat",height:"200px",width:"100%","background-size":"cover"}})],1),t._v(" "),e("v-card-text",{staticClass:"pa-5"},[e("p",[t._v("\n          "+t._s(t.activeSpecification.description)+"\n        ")]),t._v(" "),e("p",[t._v("DATE: "+t._s(t.activeSpecification.created_at))])]),t._v(" "),e("v-card-actions",{staticClass:"pa-5"},[e("v-btn",{attrs:{color:"red",outlined:""},on:{click:function(e){return t.deleteSpecification(t.activeSpecification)}}},[t._v("Delete")]),t._v(" "),e("v-btn",{staticClass:"ml-auto",attrs:{outlined:"",color:"green"},on:{click:function(e){return t.openAdminDetails(t.activeUser)}}},[t._v("Items")]),t._v(" "),e("v-btn",{attrs:{to:"/admin/shopping/productsCategories/".concat(void 0===t.activeSpecification.id?"":t.activeSpecification.id),outlined:"",color:"primary"}},[t._v("Configure")])],1)],1)],1)],1)}),[],!1,null,null,null).exports},1900:(t,e,i)=>{function o(t,e,i,o,s,n,r,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),o&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=a?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(t,e){return c.call(e),p(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}i.d(e,{Z:()=>o})}}]);