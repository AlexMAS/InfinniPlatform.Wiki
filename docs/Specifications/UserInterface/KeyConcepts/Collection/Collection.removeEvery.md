---
layout: doc
title: "Collection.removeEvery()"
position: 25
---

Удаляет все элементы из коллекции, удовлетворяющие указанному условию.

# Description

Метод [`removeEvery()`](../Collection.removeEvery/) удаляет все элементы из коллекции,
удовлетворяющие указанному условию. Успешное выполнение данного метода приводит к возникновению
события [`onRemove`](../Collection.onRemove/). Вместе с этим событием также генерируется событие
[`onChange`](../Collection.onChange/), которое информирует о наличии любых изменений. Аргументы
обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.removeEvery(predicate[, thisArg])
```

## Parameters

`predicate`

Предикат, определяющий условие удаление элемента. Предикат принимает три параметра: `item` -
проверяемый элемент коллекции, `index` - индекс проверяемого элемента коллекции, `collection` -
обрабатываемая коллекция. Предикат возвращает `true`, если проверяемый элемент удовлетворяет
условию, иначе - `false`.

`thisArg`

Необязательный. Объект, используемый как контекст исполнения `this` предиката `predicate`.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 1, 10, 2, 20, 3, 30 ]);

collection.removeEvery(function(item, index, collection) {
  return item >= 10;
}); // [ 1, 2, 3 ]
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeId()`](../Collection.removeId/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`clear()`](../Collection.clear/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
