---
layout: doc
title: "Collection.find"
position: 29
---

Возвращает первый найденный элемент коллекции, удовлетворяющий условию.

# Syntax

```js
Collection.find(predicate, thisArg)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`<sup>*</sup>|`Function`|Предикат, определяющий условие поиска элемента.<br> Предикат принимает три параметра: <br> &#9679; `item` - проверяемый элемент коллекции, <br> &#9679; `index` - индекс проверяемого элемента коллекции, <br> &#9679; `collection` - обрабатываемая коллекция.<br> Предикат возвращает `true`, если проверяемый элемент удовлетворяет условию, иначе - `false`.|
|`thisArg`|&#42;|Объект, используемый как контекст исполнения `this` предиката `predicate`.|

<sup>*</sup> Обязательный аргумент.

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
