---
layout: doc
title: "Collection.lastIndexOf"
position: 31
---

Возвращает индекс первого найденного элемента коллекции при поиске с конца.

# Syntax

```js
Collection.lastIndexOf(item, fromIndex)
```

## Parameters

|Name|Type|Default|Description|
|----|----|-------|-----------|
|`item`<sup>*</sup>|&#42;| |Искомый элемент коллекции.|
|`fromIndex`|`Index`|Collection.length - 1|Индекс элемента, с которого необходимо начать поиск.|

<sup>*</sup> Обязательный аргумент.

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

* [`getById()`](../Collection.getById/)
* [`getByIndex()`](../Collection.getByIndex/)
* [`find()`](../Collection.find/)
* [`indexOf()`](../Collection.indexOf/)
* [`findIndex()`](../Collection.findIndex/)
