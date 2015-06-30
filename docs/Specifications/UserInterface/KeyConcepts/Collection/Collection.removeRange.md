---
layout: doc
title: "Collection.removeRange()"
position: 24
---

Удаляет диапазон элементов из коллекции.

# Description

Метод [`removeRange()`](../Collection.removeRange/) удаляет диапазон элементов из коллекции. Успешное
выполнение данного метода приводит к возникновению события [`onRemove`](../Collection.onRemove/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.removeRange(fromIndex[, count])
```

## Parameters

`fromIndex`

Индекс начала диапазона элементов, которые необходимо удалить из коллекции.

`count`

Необязательный. Количество удаляемых элементов. Если количество элементов не определено, из
коллекции будут удалены все элементы, начиная с позиции, указанной в параметре `fromIndex`.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C', 'D' ]);
collection.removeRange(1, 2); // [ 'A', 'D' ]
collection.removeRange(0);    // [ ]
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeById()`](../Collection.removeById/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`clear()`](../Collection.clear/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
