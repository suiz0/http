!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios")):"function"==typeof define&&define.amd?define("vHttp",["axios"],e):"object"==typeof exports?exports.vHttp=e(require("axios")):t.vHttp=e(t.axios)}(this,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(n(2));class u{constructor(t){this.settings=this.parseOptions(u.defaultSettings,t),this.http=o.default.create(this.settings)}ajax(t,e){var n=this.parseOptions(this.settings,e);return this.http(t,n)}parseOptions(t,e){return Object.assign({},t,e||{})}}u.defaultSettings={method:"get"},e.default=u},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(n(0)),u=r(n(3));function i(t){return u.default.getInstance(t)}function s(t,e){return u.default.getInstance().ajax(t,e)}function a(t,e,n){return u.default.getInstance().ajax(t,Object.assign(n||{},{method:"post",data:e}))}function f(t,e){return u.default.getInstance().ajax(t,Object.assign(e||{},{method:"delete"}))}function c(t,e,n){let r={method:"put",data:e};return u.default.getInstance().ajax(t,Object.assign(n||{},r))}e.default={install:function(t,e){t.ajaxSetup=i,t.http=o.default,t.prototype.$get=s,t.prototype.$post=a,t.prototype.$del=f,t.prototype.$put=c}}},function(e,n){e.exports=t},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(n(0)),u={getConfig:function(){return i?i.settings:null},getInstance:function(t){return i&&!t||(i=function(t){return new o.default(t)}(t)),i}};var i;e.default=u}]).default}));