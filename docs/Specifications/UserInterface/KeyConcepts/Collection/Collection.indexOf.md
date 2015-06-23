---
layout: doc
title: "Collection.indexOf()"
position: 30
---

Возвращает индекс первого найденного элемента коллекции при поиске с начала.

# Syntax

```js
Collection.indexOf(item[, fromIndex = 0])
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
var index1 = collection.indexOf('C');    // index1 === 2
var index2 = collection.indexOf('C', 3); // index2 === 5
var index3 = collection.indexOf('D');    // index3 === -1
```

# See Also

* [`id()`](../Collection.id/)
* [`at()`](../Collection.at/)
* [`find()`](../Collection.find/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
* [`findIndex()`](../Collection.findIndex/)
