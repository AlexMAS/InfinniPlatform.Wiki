---
layout: doc
title: "Collection.contains"
position: 33
---

Проверяет наличие указанного элемента в коллекции.

# Syntax

```js
Collection.contains(item[, fromIndex = 0])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`item`|&#42;|Искомый элемент коллекции.|
|`fromIndex`|`Integer`|Необязательный. Индекс элемента, с которого необходимо начать поиск.|

## Returns

Возвращает `true`, если указанный элемент содержится в коллекции, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
collection.contains('A'); // true
collection.contains('B'); // true
collection.contains('C'); // true
collection.contains('A', 1); // false
collection.contains('B', 2); // false
collection.contains('C', 3); // false
```

# See Also

* [`every()`](../Collection.every/)
* [`some()`](../Collection.some/)
