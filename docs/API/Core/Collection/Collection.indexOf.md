---
layout: doc
title: "Collection.indexOf"
position: 30
---

Возвращает индекс первого найденного элемента коллекции при поиске с начала.

# Syntax

```js
Collection.indexOf(item, fromIndex)
```

## Parameters

|Name|Type|Default|Description|
|----|----|:-----:|-----------|
|`item`<sup>*</sup>|&#42;| |Искомый элемент коллекции.|
|`fromIndex`|`Integer`|0|Индекс элемента, с которого необходимо начать поиск.|

<sup>*</sup> Обязательный аргумент.

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

* [`getById()`](../Collection.getById/)
* [`getByIndex()`](../Collection.getByIndex/)
* [`find()`](../Collection.find/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
* [`findIndex()`](../Collection.findIndex/)
