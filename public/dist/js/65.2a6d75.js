/*! For license information please see 65.2a6d75.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{370:function(t,r,e){"use strict";e.r(r);var n=e(4),o=e.n(n);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=x(i,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=f(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var m={};u(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(C([])));g&&g!==r&&e.call(g,o)&&(m=g);var b=v.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){var n;this._invoke=function(o,i){function c(){return new r((function(n,c){!function n(o,i,c,s){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==a(h)&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}(o,i,n,c)}))}return n=n?n.then(c,c):c()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,u(b,"constructor",v),u(v,"constructor",d),d.displayName=u(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new _(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,s,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:C(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function c(t,r,e,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}var s={middleware:["auth","check-permissions"],metaInfo:function(){return{title:this.$t("backup.page_title")}},data:function(){return{breadcrumbsCurrent:"backup.breadcrumbs_current",breadcrumbs:[{name:"backup.breadcrumbs_first",url:"home"},{name:"backup.breadcrumbs_active",url:""}],form:new o.a({format:"sql"}),loading:!0,user:""}},methods:{databaseBackup:function(){var t,r=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:toast.fire({type:"warning",title:r.$t("You are not allowed to do this in demo version.")});case 1:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)}))})()}}},u=e(1),l=Object(u.a)(s,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("breadcrumbs",{attrs:{items:t.breadcrumbs,current:t.breadcrumbsCurrent}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 m-auto"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[t._v(t._s(t.$t("backup.page_title")))]),t._v(" "),e("router-link",{staticClass:"btn btn-dark float-right",attrs:{to:{name:"home"}}},[e("i",{staticClass:"fas fa-long-arrow-alt-left"}),t._v(" "+t._s(t.$t("common.back"))+"\n          ")])],1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{staticClass:"form-horizontal",on:{submit:function(r){return r.preventDefault(),t.databaseBackup.apply(null,arguments)},keydown:function(r){return t.form.onKeydown(r)}}},[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"format"}},[t._v(t._s(t.$t("backup.format"))+"\n                "),e("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.format,expression:"form.format"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("format")},attrs:{id:"format"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"format",r.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"sql"}},[t._v(t._s(t.$t("backup.format_sql")))])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"format"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"offset-sm-2 col-sm-10"},[e("v-button",{staticClass:"btn btn-primary",attrs:{loading:t.form.busy}},[e("i",{staticClass:"fas fa-file-export"}),t._v(" "+t._s(t.$t("backup.export"))+"\n                ")])],1)])])])])])])],1)}),[],!1,null,"9d430590",null);r.default=l.exports}}]);