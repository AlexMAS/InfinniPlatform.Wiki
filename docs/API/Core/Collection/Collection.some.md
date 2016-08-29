---
layout: doc
title: "Collection.some"
position: 35
---

Проверяет, что некоторый элемент коллекции удовлетворяет указанному условию.

# Syntax

```js
Collection.some(predicate, thisArg)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`<sup>*</sup>|`Function`|Предикат, определяющий условие поиска элемента. <br>Предикат принимает три параметра: <br> &#9679; `item` - проверяемый элемент коллекции, <br> &#9679; `index` - индекс проверяемого элемента коллекции, <br> &#9679; `collection` - обрабатываемая коллекция. <br>Предикат возвращает `true`, если проверяемый элемент удовлетворяет условию, иначе - `false`.|
|`thisArg`|&#42;|Объект, используемый как контекст исполнения `this` предиката `predicate`.|

<sup>*</sup> Обязательный аргумент.

## Returns

Возвращает `true`, если есть элемент, удовлетворяющий указанному условию, иначе - `false`.

# Examples

```js
var isBigEnough = isBiggerThan10(item, index, collection) {
  return element > 10;
};

new Collection([ 2, 5, 8, 1, 4 ]).some(isBiggerThan10);  // false
new Collection([ 12, 5, 8, 1, 4 ]).some(isBiggerThan10); // true
```

# See Also

* [`contains()`](../Collection.contains/)
* [`every()`](../Collection.every/)
