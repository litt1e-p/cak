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

// flush one or clear all
cak.flush(k)
cak.clear()
```
