---
layout: doc
title: "Collection.getById()"
position: 27
---

Возвращает элемент коллекции с заданным идентификатором.

# Syntax

```js
Collection.getById(id)
```

## Parameters

`id`

Идентификатор элемента.

## Returns

Элемент коллекции с заданным идентификатором.

# Examples

```js
var collection = new Collection([
  { key: 1, value: 'A' },
  { key: 2, value: 'B' },
  { key: 3, value: 'C' }
], 'key');

var item1 = collection.getById(1); // { key: 1, value: 'A' }
var item2 = collection.getById(2); // { key: 2, value: 'B' }
var item3 = collection.getById(3); // { key: 3, value: 'C' }
```

# See Also

* [`getByIndex()`](../Collection.getByIndex/)
* [`find()`](../Collection.find/)
* [`indexOf()`](../Collection.indexOf/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
* [`findIndex()`](../Collection.findIndex/)
* [`idProperty`](../Collection.idProperty/)
