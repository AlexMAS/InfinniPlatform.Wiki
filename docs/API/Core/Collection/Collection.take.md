---
layout: doc
title: "Collection.take"
position: 38
---

Возвращает указанный диапазон элементов коллекции.

# Syntax

```js
Collection.take(fromIndex, count)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`fromIndex`<sup>*</sup>|`Integer`|Индекс начала диапазона элементов, которые необходимо выбрать из коллекции.|
|`count`|`Integer`|Количество выбираемых элементов. Если количество элементов не определено, из коллекции будут выбраны все элементы, начиная с позиции, указанной в параметре `fromIndex`.|

<sup>*</sup> Обязательный аргумент.

## Returns

Массив элементов коллекции из указанного диапазона.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C', 'D' ]);
collection.take(1, 2); // [ 'B', 'C' ]
collection.take(2);    // [ 'C', 'D' ]
```

# See Also

* [`forEach()`](../Collection.forEach/)
* [`take()`](../Collection.take/)
* [`toArray()`](../Collection.toArray/)
