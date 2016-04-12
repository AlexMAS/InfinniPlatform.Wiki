---
layout: doc
title: "Collection.getByIndex"
position: 28
---

Возвращает элемент коллекции с заданным индексом.

# Syntax

```js
Collection.getByIndex(index)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`index`|`Integer`|Индекс элемента.|

## Returns

Элемент коллекции с заданным индексом.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
var item0 = collection.getByIndex(0); // 'A'
var item1 = collection.getByIndex(1); // 'B'
var item2 = collection.getByIndex(2); // 'C'
```

# See Also

* [`getById()`](../Collection.getById/)
* [`find()`](../Collection.find/)
* [`indexOf()`](../Collection.indexOf/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
* [`findIndex()`](../Collection.findIndex/)
