(self.webpackChunk=self.webpackChunk||[]).push([[8791],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,s="millisecond",n="second",a="minute",i="hour",o="day",c="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(r)+t},_={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),s=Math.floor(r/60),n=r%60;return(e<=0?"+":"-")+y(s,2,"0")+":"+y(n,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var s=12*(r.year()-e.year())+(r.month()-e.month()),n=e.clone().add(s,u),a=r-n<0,i=e.clone().add(s+(a?-1:1),u);return+(-(s+(r-n)/(a?n-i:i-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:o,D:h,h:i,m:a,s:n,ms:s,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",b={};b[g]=p;var $="$isDayjsObject",D=function(t){return t instanceof M||!(!t||!t[$])},S=function t(e,r,s){var n;if(!e)return g;if("string"==typeof e){var a=e.toLowerCase();b[a]&&(n=a),r&&(b[a]=r,n=a);var i=e.split("-");if(!n&&i.length>1)return t(i[0])}else{var o=e.name;b[o]=e,n=o}return!s&&n&&(g=n),n||!s&&g},C=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new M(r)},w=_;w.l=S,w.i=D,w.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[$]=!0}var y=p.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(v);if(s){var n=s[2]-1||0,a=(s[7]||"0").substring(0,3);return r?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var r=C(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return C(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<C(t)},y.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,s=!!w.u(e)||e,l=w.p(t),f=function(t,e){var n=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return s?n:n.endOf(o)},v=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,p=this.$M,y=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case d:return s?f(1,0):f(31,11);case u:return s?f(1,p):f(0,p+1);case c:var g=this.$locale().weekStart||0,b=(m<g?m+7:m)-g;return f(s?y-b:y+(6-b),p);case o:case h:return v(_+"Hours",0);case i:return v(_+"Minutes",1);case a:return v(_+"Seconds",2);case n:return v(_+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,c=w.p(t),l="set"+(this.$u?"UTC":""),f=(r={},r[o]=l+"Date",r[h]=l+"Date",r[u]=l+"Month",r[d]=l+"FullYear",r[i]=l+"Hours",r[a]=l+"Minutes",r[n]=l+"Seconds",r[s]=l+"Milliseconds",r)[c],v=c===o?this.$D+(e-this.$W):e;if(c===u||c===d){var m=this.clone().set(h,1);m.$d[f](v),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(s,l){var h,f=this;s=Number(s);var v=w.p(l),m=function(t){var e=C(f);return w.w(e.date(e.date()+Math.round(t*s)),f)};if(v===u)return this.set(u,this.$M+s);if(v===d)return this.set(d,this.$y+s);if(v===o)return m(1);if(v===c)return m(7);var p=(h={},h[a]=e,h[i]=r,h[n]=t,h)[v]||1,y=this.$d.getTime()+s*p;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",n=w.z(this),a=this.$H,i=this.$m,o=this.$M,c=r.weekdays,u=r.months,l=r.meridiem,d=function(t,r,n,a){return t&&(t[r]||t(e,s))||n[r].slice(0,a)},h=function(t){return w.s(a%12||12,t,"0")},v=l||function(t,e,r){var s=t<12?"AM":"PM";return r?s.toLowerCase():s};return s.replace(m,(function(t,s){return s||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return o+1;case"MM":return w.s(o+1,2,"0");case"MMM":return d(r.monthsShort,o,u,3);case"MMMM":return d(u,o);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,c,2);case"ddd":return d(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return v(a,i,!0);case"A":return v(a,i,!1);case"m":return String(i);case"mm":return w.s(i,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return n}return null}(t)||n.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(s,h,f){var v,m=this,p=w.p(h),y=C(s),_=(y.utcOffset()-this.utcOffset())*e,g=this-y,b=function(){return w.m(m,y)};switch(p){case d:v=b()/12;break;case u:v=b();break;case l:v=b()/3;break;case c:v=(g-_)/6048e5;break;case o:v=(g-_)/864e5;break;case i:v=g/r;break;case a:v=g/e;break;case n:v=g/t;break;default:v=g}return f?v:w.a(v)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return b[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),s=S(t,e,!0);return s&&(r.$L=s),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),x=M.prototype;return C.prototype=x,[["$ms",s],["$s",n],["$m",a],["$H",i],["$W",o],["$M",u],["$y",d],["$D",h]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,M,C),t.$i=!0),C},C.locale=S,C.isDayjs=D,C.unix=function(t){return C(1e3*t)},C.en=b[g],C.Ls=b,C.p={},C}()},8791:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>h});var s=r(7484),n=r.n(s),a=r(629),i=r(538);r(2640);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var s=r.call(t,e||"default");if("object"!==o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const d={template:"#home",data:function(){return{}},beforeCreate:function(){this.$store.dispatch("loadDashboardSumary"),this.$store.dispatch("getMyProfile"),this.$store.dispatch("fetchDashboardSparklineData")},computed:u(u({},(0,a.rn)(["myUserProfile","dashboardSumary","dashboardSparklineData"])),(0,a.Se)(["myUserProfile","getDashboardSumary","getDashboardSparklineData","messageAlert"])),filters:{exactDay:function(t){return n()(t).format("h:mm a, MMMM DD YYYY")},exactDayShort:function(t){return n()(t).format("MMMM DD YYYY")}},watch:{messageAlert:function(t){null!=t&&i.default.notify({group:"foo",title:t.title,text:t.body,type:t.type})}},methods:{}};const h=(0,r(1900).Z)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("v-row",[e("v-col",{staticClass:"pb-2",attrs:{lg:"4",cols:"sm"}},[e("v-card",[e("v-row",{staticClass:"no-gutters"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"cyan fill-height"},[t._v(" ")])]),t._v(" "),e("div",{staticClass:"col pa-3 py-4 cyan--text"},[e("h5",{staticClass:"text-truncate text-uppercase"},[t._v("User Accounts")]),t._v(" "),e("h1",[t._v(t._s(t.getDashboardSumary.usersCount))])])])],1)],1),t._v(" "),e("v-col",{staticClass:"pb-2",attrs:{lg:"4",cols:"sm"}},[e("v-card",[e("v-row",{staticClass:"no-gutters"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"primary fill-height"},[t._v(" ")])]),t._v(" "),e("div",{staticClass:"col pa-3 py-4 primary--text"},[e("h5",{staticClass:"text-truncate text-uppercase"},[t._v("Month Aquisistion")]),t._v(" "),e("h1",[t._v(t._s(t.getDashboardSumary.usersAquisistion))])])])],1)],1),t._v(" "),e("v-col",{staticClass:"pb-2",attrs:{lg:"4",cols:"sm"}},[e("v-card",[e("v-row",{staticClass:"no-gutters"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"success fill-height"},[t._v(" ")])]),t._v(" "),e("div",{staticClass:"col pa-3 py-4 success--text"},[e("h5",{staticClass:"text-truncate text-uppercase"},[t._v("Transactions")]),t._v(" "),e("h1",[t._v(t._s(t.getDashboardSumary.transactions))])])])],1)],1)],1),t._v(" "),e("v-row",[e("v-col",{staticClass:"pb-2",attrs:{lg:"4",cols:"md"}},[e("v-card",{staticClass:"dark"},[e("v-card-title",{staticClass:"font-weight-light text-truncate cyan--text"},[t._v("\n          Month Performance\n        ")]),t._v(" "),e("v-card-text",[e("v-carousel",{attrs:{cycle:"",height:"180",interval:"2000","hide-delimiter-background":"","show-arrows-on-hover":""}},[e("v-carousel-item",[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col"},[e("div",[e("h2",{staticClass:"cyan--text"},[t._v("Transactions")]),t._v(" "),e("p",{staticClass:"mt-1"},[t._v("\n                      Since\n                      "+t._s(t._f("exactDayShort")(t.getDashboardSumary.initialTransactionsDate))+"\n                    ")]),t._v(" "),e("h3",{staticClass:"mb-0"},[t._v("\n                      UGX "+t._s(t.getDashboardSumary.totalTxnAmmount)+"\n                      "),e("i",{staticClass:"mdi mdi-36px mdi-credit-card-outline float-right"})]),t._v(" "),e("p",[t._v("\n                      Total Txns: "+t._s(t.getDashboardSumary.monthlyTransactions)+"\n                    ")])])])])]),t._v(" "),e("v-carousel-item",[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col"},[e("div",[e("h2",{staticClass:"cyan--text"},[t._v("Revenue")]),t._v(" "),e("p",{staticClass:"mt-1"},[t._v("\n                      Since\n                      "+t._s(t._f("exactDayShort")(t.getDashboardSumary.initialTransactionsDate))+"\n                    ")]),t._v(" "),e("h3",{staticClass:"mb-0"},[t._v("\n                      UGX "+t._s(t.getDashboardSumary.totalTxnRevenue)+"\n                      "),e("i",{staticClass:"mdi mdi-36px mdi-paypal float-right"})]),t._v(" "),e("p",[t._v("\n                      Total Txns: "+t._s(t.getDashboardSumary.monthlyTransactions)+"\n                    ")])])])])])],1)],1)],1)],1),t._v(" "),e("v-col",{staticClass:"pb-2",attrs:{lg:"4",cols:"md"}},[e("v-card",{attrs:{"min-height":"252"}},[e("v-card-title",{staticClass:"font-weight-light text-truncate primary--text"},[t._v("\n          Marketing\n        ")]),t._v(" "),e("v-card-text",[e("p",{staticClass:"primary--text subtitle-1"},[t._v("\n            "+t._s(t.getDashboardSumary.campaigns)+" campaigns are running\n          ")]),t._v(" "),e("div",{staticClass:"my-5"},[e("v-progress-linear",{attrs:{indeterminate:"",height:"8",color:"primary"}}),t._v(" "),e("h6",[t._v("\n              SINCE\n              "+t._s(t._f("exactDay")(t.getDashboardSumary.initialCampaignDate))+"\n            ")])],1)]),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{outlined:"",rounded:"",to:"/admin/marketingCampaigns",color:"primary"}},[t._v("\n            Details\n          ")])],1)],1)],1),t._v(" "),e("v-col",{staticClass:"pb-2",attrs:{lg:"4",cols:"md"}},[e("v-card",{attrs:{"min-height":"252"}},[e("v-card-title",{staticClass:"font-weight-light text-truncate success--text"},[t._v("\n          My Account\n        ")]),t._v(" "),e("v-card-text",[e("span",{staticClass:"success--text subtitle-1"},[t._v("\n            @"+t._s(t.myUserProfile.user_name)+"\n          ")]),t._v(" "),e("div",{staticClass:"mb-3"},[e("h3",[t._v(t._s(t.myUserProfile.name))]),t._v(" "),e("span",{staticClass:"overline"},[t._v("Join date: "+t._s(t._f("exactDay")(t.myUserProfile.created_at)))])])]),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{outlined:"",rounded:"",to:"/profileSettings",color:"success"}},[t._v("\n            View\n          ")])],1)],1)],1)],1),t._v(" "),e("v-row",[e("v-col",[e("v-card",{staticClass:"mx-auto text-center"},[e("v-card-title",{staticClass:"primary--text"},[t._v(" Revenue ")]),t._v(" "),e("v-sparkline",{attrs:{value:t.getDashboardSparklineData,padding:"18","label-size":"4",color:"cyan",gradient:["#007bff","cyan"],"line-width":2,"stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(" UGX "+t._s(e.value)+" ")]}}])}),t._v(" "),e("v-card-actions",{staticClass:"py-4 justify-center"},[e("v-btn",{attrs:{color:"primary",to:"/admin/requests"}},[t._v("Transactions")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports},1900:(t,e,r)=>{"use strict";function s(t,e,r,s,n,a,i,o){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),s&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):n&&(c=o?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}r.d(e,{Z:()=>s})}}]);