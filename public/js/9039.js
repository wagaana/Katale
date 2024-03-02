"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9039],{9039:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var r=i(629),n=i(538),a=i(2640);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const d={data:function(){return{uploads:a.q6,activeFile:{},deleteFileDalogTemplate:!1}},beforeCreate:function(){this.$store.dispatch("loadUserFiles")},computed:s(s({},(0,r.rn)(["userFiles"])),(0,r.Se)(["messageAlert","getUserFiles"])),watch:{messageAlert:function(t){null!=t&&(n.default.notify({group:"foo",title:t.title,text:t.body,type:t.type}),this.$store.dispatch("loadUserFiles"))},getSystemSettings:function(t){if(null!=t)for(var e=0;e<t.length;e++){var i=t[e];this.settings[i.setting_name]=i.setting_value}}},mounted:function(){},methods:{editProfileImage:function(){document.getElementById("mediaInput").click()},handleDeleteButtonClick:function(t){this.activeFile=t,this.deleteFileDalogTemplate=!0},handleMediaChange:function(t){for(var e=t.target.files,i=new FormData,r=0;r<e.length;r++)i.append("files[]",e[r]);this.$store.dispatch("uploadMultiple",i)},deleteFile:function(t){this.$store.dispatch("deleteFile",t.id),this.deleteFileDalogTemplate=!1}}};const u=(0,i(1900).Z)(d,(function(){var t=this,e=t._self._c;return e("v-container",{attrs:{"grid-list-xl":""}},[e("v-row",[e("v-row",[e("v-col",{staticClass:"col-md-11 pr-md-1 sm-6"},[e("h1",{staticClass:"font-weight-light mb-0"},[t._v("Files & Media")]),t._v(" "),e("span",{staticClass:"overline"},[t._v("Upload Your Files & Media To use later")])]),t._v(" "),e("v-col",{staticClass:"col-md-1 pr-md-1"},[e("input",{attrs:{type:"file",id:"mediaInput",hidden:"",multiple:"",accept:".jpg, .jpeg, .png, .gif, .mp4, .mpg, .mpeg, .webp, .webm, .ogg, .avi, .mov, .flv, .swf, .mkv, .wmv, .wma, .aac, .wav, .mp3, .zip, .rar, .7z, .doc, .txt, .docx, .pdf, .csv, .xml, .ods, .xlr, .xls, .xlsx"},on:{change:t.handleMediaChange}}),t._v(" "),e("v-btn",{staticClass:"primary",attrs:{width:"100%"},on:{click:t.editProfileImage}},[t._v("Upload")])],1)],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.getUserFiles,(function(i){return e("v-flex",{key:i.id,attrs:{xs12:"",sm6:"",md4:"",xl2:""}},[e("v-card",[[e("v-list-item",[e("v-row",{staticClass:"pa-2"},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{style:{"background-image":"url(".concat(t.uploads).concat(i.path,")"),"background-repeat":"no-repeat",height:"200px",width:"100%","background-size":"cover"}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-row",{staticClass:"d-flex align-center"},[e("v-col",{staticClass:"col-md-10 pr-md-1 sm-6"},[e("v-list-item-content",[e("v-list-item-subtitle",[t._v("\n                            "+t._s(i.created_at)+"\n                          ")]),t._v(" "),e("v-list-item-title",[t._v("\n                            "+t._s(i.name)+"\n                          ")])],1)],1),t._v(" "),e("v-col",{staticClass:"col-md-2 pr-md-1 sm-6"},[e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.handleDeleteButtonClick(i)}}},[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-delete")])],1)],1)],1)],1)],1)],1)]],2)],1)})),1)],1),t._v(" "),e("v-dialog",{attrs:{width:"420"},model:{value:t.deleteFileDalogTemplate,callback:function(e){t.deleteFileDalogTemplate=e},expression:"deleteFileDalogTemplate"}},[e("v-card",[e("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[e("h2",[t._v("Delete File")])]),t._v(" "),e("v-divider"),t._v(" "),e("v-card",{staticClass:"pa-5"},[e("v-card-title",[e("v-card",{style:{"background-image":"url(".concat(t.uploads).concat(t.activeFile.path,")"),"background-repeat":"no-repeat",height:"200px",width:"100%","background-size":"cover"}})],1),t._v(" "),e("v-card-text",[e("p",[t._v(t._s(t.activeFile.name))]),t._v(" "),e("span",{staticClass:"success--text subtitle-1"},[t._v("\n              Created: "+t._s(t.activeFile.created_at)+"\n            ")])])],1),t._v(" "),e("v-divider"),t._v(" "),e("v-card-actions",{staticClass:"pa-5"},[e("v-btn",{staticClass:"ml-auto",attrs:{outlined:"",color:"primary"},on:{click:function(e){t.deleteFileDalogTemplate=!1}}},[t._v("Close")]),t._v(" "),e("v-btn",{attrs:{outlined:"",color:"red"},on:{click:function(e){return t.deleteFile(t.activeFile)}}},[t._v("Delete")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},1900:(t,e,i)=>{function r(t,e,i,r,n,a,l,o){var s,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),l?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=s):n&&(s=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),s)if(c.functional){c._injectStyles=s;var d=c.render;c.render=function(t,e){return s.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:c}}i.d(e,{Z:()=>r})}}]);