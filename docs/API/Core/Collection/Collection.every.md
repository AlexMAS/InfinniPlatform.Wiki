---
layout: doc
title: "Collection.every"
position: 34
---

Проверяет, что каждый элемент коллекции удовлетворяет указанному условию.

# Syntax

```js
Collection.every(predicate, thisArg)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`<sup>*</sup>|`Function`|Предикат, определяющий условие поиска элемента. <br>Предикат принимает три параметра: <br> &#9679; `item` - проверяемый элемент коллекции, <br> &#9679; `index` - индекс проверяемого элемента коллекции, <br> &#9679; `collection` - обрабатываемая коллекция. <br>Предикат возвращает `true`, если проверяемый элемент удовлетворяет условию, иначе - `false`.|
|`thisArg`|&#42;|Объект, используемый как контекст исполнения `this` предиката `predicate`.|

<sup>*</sup> Обязательный аргумент.

## Returns

Возвращает `true`, если каждый элемент удовлетворяют указанному условию, иначе - `false`.

# Examples

```js
var isBigEnough = function(item, index, collection) {
  return element >= 10;
};

new Collection([ 12, 5, 8, 130, 44 ]).every(isBigEnough);   // false
new Collection([ 12, 54, 18, 130, 44 ]).every(isBigEnough); // true
```

# See Also

* [`contains()`](../Collection.contains/)
* [`some()`](../Collection.some/)
