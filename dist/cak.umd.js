!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).cak={})}(this,(function(t){"use strict";function e(t){this.default_expires=t||15,this.map=new Map}e.prototype.default_expires=15,e.prototype.get=function(t){if(!t)return!1;var e=this.map.has.apply(this.map,arguments);if(!1===e)return e;var p=this.map.get.apply(this.map,arguments),o=(new Date).getTime()-p.exp>0;return o?(this.map.delete.apply(this.map,arguments),!1):p.val},e.prototype.set=function(t,e,p){return!(!t||void 0===e)&&(!(void 0!==p&&p<=0)&&(p=void 0===p?this.default_expires:p,this.map.set(t,{val:e,exp:(new Date).getTime()+1e3*p,time:p}),!0))},e.prototype.has=function(t){return!!t&&!1!==this.get.apply(this,arguments)},e.prototype.all=function(){for(var t=Array.prototype.constructor(),e=this.map.entries(),p=e.next();void 0!==p.value&&!p.done;)t.push(p.value),p=e.next();return t},e.prototype.keys=function(){for(var t=Array.prototype.constructor(),e=this.map.entries(),p=e.next();void 0!==p.value&&!p.done;)t.push(p.value[0]),p=e.next();return t},e.prototype.values=function(){for(var t=Array.prototype.constructor(),e=this.map.entries(),p=e.next();void 0!==p.value&&!p.done;)t.push(p.value[1]),p=e.next();return t},e.prototype.size=function(){return this.keys.apply(this,arguments).length},e.prototype.empty=function(){return this.size.apply(this,arguments)},e.prototype.flush=function(t){return this.map.delete.apply(this.map,arguments)},e.prototype.clear=function(t){var e=this.keys();if(!e||e.length<=0)return!0;for(;e.length;)this.map.delete(e.pop());return!0},t.default=e,Object.defineProperty(t,"__esModule",{value:!0})}));
