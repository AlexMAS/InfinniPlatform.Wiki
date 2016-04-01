---
layout: doc
title: "Collection.find"
position: 29
---

Возвращает первый найденный элемент коллекции, удовлетворяющий условию.

# Syntax

```js
Collection.find(predicate[, thisArg])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`|`Function`|Предикат, определяющий условие поиска элемента. Предикат принимает три параметра: <ul><li>`item` - проверяемый элемент коллекции, </li><li>`index` - индекс проверяемого элемента коллекции, </li><li>`collection` - обрабатываемая коллекция.</ul> Предикат возвращает `true`, если проверяемый элемент удовлетворяет условию, иначе - `false`.|
|`thisArg`|&#42;|Необязательный. Объект, используемый как контекст исполнения `this` предиката `predicate`.|

## Returns

Первый найденный элемент коллекции, удовлетворяющий указанному условию.

# Examples

```js
var collection = new Collection([ 1, 3, 5, 6, 7, 9, 11, 12 ]);

var result = collection.find(function(item, index, collection) {
  return item % 2 === 0;
}); // result === 6
```

# See Also

* [`getById()`](../Collection.getById/)
* [`getByIndex()`](../Collection.getByIndex/)
* [`indexOf()`](../Collection.indexOf/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
* [`findIndex()`](../Collection.findIndex/)
