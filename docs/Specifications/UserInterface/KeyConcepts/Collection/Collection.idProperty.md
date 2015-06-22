---
layout: doc
title: "Collection.idProperty"
position: 2
---

Возвращает свойство с идентификатором элемента коллекции.

# Syntax

```js
Collection.idProperty
```

## Returns

Свойство с идентификатором элемента коллекции, указанное при ее создании.

# Examples

```js
var collection = new Collection([
  { key: 1, value: 'A' },
  { key: 2, value: 'B' },
  { key: 3, value: 'C' }
], null, 'key');

var value1 = collection.id(1); // 'A'
var value2 = collection.id(2); // 'B'
var value3 = collection.id(3); // 'C'
```

# See Also

* [`id()`](../Collection.id/)
