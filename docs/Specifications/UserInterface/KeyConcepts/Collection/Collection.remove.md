---
layout: doc
title: "Collection.remove()"
position: 20
---

Удаляет указанный элемент из коллекции.

# Description

Метод [`remove()`](../Collection.remove/) удаляет указанный элемент из коллекции. Успешное
выполнение данного метода приводит к возникновению события [`onRemove`](../Collection.onRemove/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.remove(item)
```

## Parameters

`item`

Элемент, который необходимо удалить из коллекции.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
collection.remove('B'); // [ 'A', 'C' ]
collection.remove('A'); // [ 'C' ]
collection.remove('C'); // [ ]
```

# See Also

* [`pop()`](../Collection.pop/)
* [`removeId()`](../Collection.removeId/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`clear()`](../Collection.clear/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
