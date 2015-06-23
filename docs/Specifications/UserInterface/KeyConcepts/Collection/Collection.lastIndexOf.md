---
layout: doc
title: "Collection.lastIndexOf()"
position: 31
---

Возвращает индекс первого найденного элемента коллекции при поиске с конца.

# Syntax

```js
Collection.lastIndexOf(item[, fromIndex = Collection.length - 1])
```

## Parameters

`item`

Искомый элемент коллекции.

`fromIndex`

Необязательный. Индекс элемента, с которого необходимо начать поиск.

## Returns

Индекс первого найденного элемента коллекции или `-1`, если элемент не найден.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C', 'A', 'B', 'C' ]);
var index1 = collection.lastIndexOf('C');    // index1 === 5
var index2 = collection.lastIndexOf('C', 4); // index2 === 2
var index3 = collection.lastIndexOf('D');    // index3 === -1
```

# See Also

* [`id()`](../Collection.id/)
* [`at()`](../Collection.at/)
* [`find()`](../Collection.find/)
* [`indexOf()`](../Collection.indexOf/)
* [`findIndex()`](../Collection.findIndex/)
