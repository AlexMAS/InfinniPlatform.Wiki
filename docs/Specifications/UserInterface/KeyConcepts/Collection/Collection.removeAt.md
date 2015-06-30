---
layout: doc
title: "Collection.removeAt()"
position: 22
---

Удаляет элемент с указанным индексом из коллекции.

# Description

Метод [`removeAt()`](../Collection.removeAt/) удаляет элемент с указанным индексом из коллекции.
Успешное выполнение данного метода приводит к возникновению события [`onRemove`](../Collection.onRemove/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.removeAt(index)
```

## Parameters

`index`

Индекс элемента, который необходимо удалить из коллекции.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
collection.removeAt(1); // [ 'A', 'C' ]
collection.removeAt(0); // [ 'C' ]
collection.removeAt(0); // [ ]
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeById()`](../Collection.removeById/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`clear()`](../Collection.clear/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
