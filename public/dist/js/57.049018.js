/*! For license information please see 57.049018.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{363:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var m={};function h(){}function p(){}function v(){}var d={};u(d,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y($([])));g&&g!==e&&r.call(g,o)&&(d=g);var w=v.prototype=h.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,i){function s(){return new e((function(n,s){!function n(o,i,s,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==a(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(m).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}(o,i,n,s)}))}return n=n?n.then(s,s):s()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,m;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=v,u(w,"constructor",v),u(v,"constructor",p),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(_.prototype),u(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),u(w,c,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function s(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var c={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("assets.types.create.page_title")}},data:function(){return{breadcrumbsCurrent:"assets.types.create.breadcrumbs_current",breadcrumbs:[{name:"assets.types.create.breadcrumbs_first",url:"home"},{name:"assets.types.create.breadcrumbs_second",url:"assetTypes.index"},{name:"assets.types.create.breadcrumbs_active",url:""}],form:new o.a({name:"",note:"",status:1}),loading:!0}},methods:{saveType:function(){var t,e=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post(window.location.origin+"/api/asset-types").then((function(){toast.fire({type:"success",title:e.$t("assets.types.create.success_msg")}),e.$router.push({name:"assetTypes.index"})})).catch((function(){toast.fire({type:"error",title:e.$t("common.error_msg")})}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))})()}}},u=r(1),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h3",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("assets.types.create.form_title"))+"\n          ")]),t._v(" "),r("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"assetTypes.index"}}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")])],1),t._v(" "),r("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.saveType.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"name"}},[t._v(t._s(t.$t("common.name"))+"\n                  "),r("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{id:"name",type:"text",name:"name",placeholder:t.$t("common.name_placeholder")},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"status"}},[t._v(t._s(t.$t("common.status")))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status,expression:"form.status"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("status")},attrs:{id:"status"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"1"}},[t._v(t._s(t.$t("common.active")))]),t._v(" "),r("option",{attrs:{value:"0"}},[t._v(t._s(t.$t("common.in_active")))])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"status"}})],1)]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"note"}},[t._v(t._s(t.$t("common.note")))]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{id:"note",placeholder:t.$t("common.note_placeholder")},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"note"}})],1)]),t._v(" "),r("div",{staticClass:"card-footer"},[r("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[r("i",{staticClass:"fas fa-save"}),t._v(" "+t._s(t.$t("common.save"))+"\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"},on:{click:function(e){return t.form.reset()}}},[r("i",{staticClass:"fas fa-power-off"}),t._v(" "+t._s(t.$t("common.reset"))+"\n            ")])],1)])])])])],1)}),[],!1,null,"722dfc2a",null);e.default=l.exports}}]);