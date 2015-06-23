---
layout: doc
title: "Collection.at()"
position: 28
---

Возвращает элемент коллекции с заданным индексом.

# Syntax

```js
Collection.at(index)
```

## Parameters

`index`

Индекс элемента.

## Returns

Элемент коллекции с заданным индексом.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
var item0 = collection.at(0); // 'A'
var item1 = collection.at(1); // 'B'
var item2 = collection.at(2); // 'C'
```

# See Also

* [`id()`](../Collection.id/)
* [`find()`](../Collection.find/)
* [`indexOf()`](../Collection.indexOf/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
* [`findIndex()`](../Collection.findIndex/)
