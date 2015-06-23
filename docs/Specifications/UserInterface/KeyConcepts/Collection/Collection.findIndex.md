---
layout: doc
title: "Collection.findIndex()"
position: 32
---

Возвращает индекс первого найденного элемента коллекции, удовлетворяющего условию.

# Syntax

```js
Collection.findIndex(predicate[, thisArg])
```

## Parameters

`predicate`

Предикат, определяющий условие поиска элемента. Предикат принимает три параметра: `item` -
проверяемый элемент коллекции, `index` - индекс проверяемого элемента коллекции, `collection` -
обрабатываемая коллекция. Предикат возвращает `true`, если проверяемый элемент удовлетворяет
условию, иначе - `false`.

`thisArg`

Необязательный. Объект, используемый как контекст исполнения `this` предиката `predicate`.

## Returns

Индекс первого найденного элемента коллекции, удовлетворяющего указанному условию.

# Examples

```js
var collection = new Collection([ 1, 3, 5, 6, 7, 9, 11, 12 ]);

var result = collection.findIndex(function(item, index, collection) {
  return item % 2 === 0;
}); // result === 3
```

# See Also

* [`id()`](../Collection.id/)
* [`at()`](../Collection.at/)
* [`find()`](../Collection.find/)
* [`indexOf()`](../Collection.indexOf/)
* [`lastIndexOf()`](../Collection.lastIndexOf/)
