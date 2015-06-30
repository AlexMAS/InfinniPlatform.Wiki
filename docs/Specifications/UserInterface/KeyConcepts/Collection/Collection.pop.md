---
layout: doc
title: "Collection.pop()"
position: 19
---

Удаляет последний элемент из коллекции.

# Description

Метод [`pop()`](../Collection.pop/) удаляет последний элемент из коллекции и возвращает его в
качестве результата работы. Успешное выполнение данного метода приводит к возникновению события
[`onRemove`](../Collection.onRemove/). Вместе с этим событием также генерируется событие
[`onChange`](../Collection.onChange/), которое информирует о наличии любых изменений.
Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.pop()
```

## Returns

Возвращает последний элемент коллекции, который был удален.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
var item2 = collection.pop(); // 'C'
var item1 = collection.pop(); // 'B'
var item0 = collection.pop(); // 'A'
```

# See Also

* [`remove()`](../Collection.remove/)
* [`removeById()`](../Collection.removeById/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`clear()`](../Collection.clear/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
