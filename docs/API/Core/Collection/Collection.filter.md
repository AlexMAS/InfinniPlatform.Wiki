---
layout: doc
title: "Collection.filter"
position: 37
---

Возвращает элементы коллекции, удовлетворяющие указанному условию.

# Syntax

```js
Collection.filter(predicate, thisArg)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`<sup>*</sup>|`Function`|Предикат, определяющий условие поиска элемента.<br> Предикат принимает три параметра: <br> &#9679; `item` - проверяемый элемент коллекции, <br> &#9679; `index` - индекс проверяемого элемента коллекции, <br> &#9679; `collection` - обрабатываемая коллекция.<br> Предикат возвращает `true`, если проверяемый элемент удовлетворяет условию, иначе - `false`.|
|`thisArg`|&#42;|Объект, используемый как контекст исполнения `this` предиката `predicate`.|

<sup>*</sup> Обязательный аргумент.

## Returns

Массив элементов коллекции, удовлетворяющих указанному условию.

# Examples

```js
var isBigEnough = function(item, index, collection) {
  return element >= 10;
};

var collection = new Collection([ 12, 5, 8, 130, 44 ]);
var filtered = collection.filter(isBigEnough); // [ 12, 130, 44 ]
```

# See Also

* [`forEach()`](../Collection.forEach/)
* [`take()`](../Collection.take/)
* [`toArray()`](../Collection.toArray/)
