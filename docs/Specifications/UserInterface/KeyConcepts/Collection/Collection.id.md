---
layout: doc
title: "Collection.id()"
position: 27
---

Возвращает элемент коллекции с заданным идентификатором.

# Syntax

```js
Collection.id(id)
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

var item1 = collection.id(1); // { key: 1, value: 'A' }
var item2 = collection.id(2); // { key: 2, value: 'B' }
var item3 = collection.id(3); // { key: 3, value: 'C' }
```

# See Also

* [`at()`](../Collection.at/)
* [`find()`](../Collection.find/)
* [`indexOf()`](../Collection.indexOf/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
* [`findIndex()`](../Collection.findIndex/)
* [`idProperty`](../Collection.idProperty/)
