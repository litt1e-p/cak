# Cak

mini js cache with expire time

## Installation

```
npm i cak

```

## Usage

> Notice: cahe will be deleted after expired

```js
import Cak from 'cak'
let expire-time = 60 // seconds
let cak = new Cak(expire-time)

// set
cak.set(k, v)
cak.set(k, v, expire-time)

// get 
cak.get(k)

// has
cak.has(k)

// all caches
cak.all()

// keys of cache
cak.keys()

// values of cache
cak.values()

// size of cache
cak.size()

// is empty
cak.empty()

// flush one or clear all
cak.flush(k)
cak.clear()
```
