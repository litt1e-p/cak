function Cak (e) {
  this.default_expires = e || 15
  this.map = new Map()
}

Cak.prototype.default_expires = 15

Cak.prototype.get = function (k) {
  if (!k) {
    return false
  }
  let t = this.map.has.apply(this.map, arguments)
  if (t === false) {
    return t
  }
  let g = this.map.get.apply(this.map, arguments)
  let ex = new Date().getTime() - g.exp > 0
  if (ex) {
    this.map.delete.apply(this.map, arguments)
    return false
  }
  return g.val
}

Cak.prototype.set = function (k, v, e) {
  if (!k || v === void 0) {
    return false
  }
  if (e !== void 0 && e <= 0) {
    return false
  }
  e = e === void 0 ? this.default_expires : e
  this.map.set(k, {val: v, exp: new Date().getTime() + e * 1000, time: e})
  return true
}

Cak.prototype.has = function (k) {
  if (!k) {
    return false
  }
  return this.get.apply(this, arguments) !== false
}

Cak.prototype.all = function () {
  let rs = Array.prototype.constructor()
  let et = this.map.entries()
  let it = et.next()
  while (it.value !== void 0 && !it.done) {
    rs.push(it.value)
    it = et.next()
  }
  return rs
}

Cak.prototype.keys = function () {
  let rs = Array.prototype.constructor()
  let et = this.map.entries()
  let it = et.next()
  while (it.value !== void 0 && !it.done) {
    rs.push(it.value[0])
    it = et.next()
  }
  return rs
}

Cak.prototype.values = function () {
  let rs = Array.prototype.constructor()
  let et = this.map.entries()
  let it = et.next()
  while (it.value !== void 0 && !it.done) {
    rs.push(it.value[1])
    it = et.next()
  }
  return rs
}

Cak.prototype.size = function () {
  return this.keys.apply(this, arguments).length
}

Cak.prototype.empty = function () {
  return !this.size.apply(this, arguments)
}

Cak.prototype.flush = function (k) {
  return this.map.delete.apply(this.map, arguments)
}

Cak.prototype.clear = function (k) {
  let ks = this.keys()
  if (!ks || ks.length <= 0) {
    return true
  }
  while (ks.length) {
    this.map.delete(ks.pop())
  }
  return true
}

export default Cak
