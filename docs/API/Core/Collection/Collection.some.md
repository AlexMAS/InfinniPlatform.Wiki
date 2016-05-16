---
layout: doc
title: "Collection.some"
position: 35
---

Проверяет, что некоторый элемент коллекции удовлетворяет указанному условию.

# Syntax

```js
Collection.some(predicate[, thisArg])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`predicate`|`Function`|Предикат, определяющий условие поиска элемента. Предикат принимает три параметра: <ul><li>`item` - проверяемый элемент коллекции, </li><li>`index` - индекс проверяемого элемента коллекции, </li><li>`collection` - обрабатываемая коллекция. </li></ul>Предикат возвращает `true`, если проверяемый элемент удовлетворяет условию, иначе - `false`.|
|`thisArg`|&#42;|Необязательный. Объект, используемый как контекст исполнения `this` предиката `predicate`.|

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
