function t(t){this.default_expires=t||15,this.map=new Map}t.prototype.default_expires=15,t.prototype.get=function(t){if(!t)return!1;var e=this.map.has.apply(this.map,arguments);if(!1===e)return e;var r=this.map.get.apply(this.map,arguments),p=(new Date).getTime()-r.exp>0;return p?(this.map.delete.apply(this.map,arguments),!1):r.val},t.prototype.set=function(t,e,r){return!(!t||void 0===e)&&(!(void 0!==r&&r<=0)&&(r=void 0===r?this.default_expires:r,this.map.set(t,{val:e,exp:(new Date).getTime()+1e3*r,time:r}),!0))},t.prototype.has=function(t){return!!t&&!1!==this.get.apply(this,arguments)},t.prototype.all=function(){for(var t=Array.prototype.constructor(),e=this.map.entries(),r=e.next();void 0!==r.value&&!r.done;)t.push(r.value),r=e.next();return t},t.prototype.keys=function(){for(var t=Array.prototype.constructor(),e=this.map.entries(),r=e.next();void 0!==r.value&&!r.done;)t.push(r.value[0]),r=e.next();return t},t.prototype.values=function(){for(var t=Array.prototype.constructor(),e=this.map.entries(),r=e.next();void 0!==r.value&&!r.done;)t.push(r.value[1]),r=e.next();return t},t.prototype.size=function(){return this.keys.apply(this,arguments).length},t.prototype.empty=function(){return this.size.apply(this,arguments)},t.prototype.flush=function(t){return this.map.delete.apply(this.map,arguments)},t.prototype.clear=function(t){var e=this.keys();if(!e||e.length<=0)return!0;for(;e.length;)this.map.delete(e.pop());return!0};export default t;
