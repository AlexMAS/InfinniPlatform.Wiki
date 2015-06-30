---
layout: doc
title: "Collection.clear()"
position: 26
---

Удаляет все элементы из коллекции.

# Description

Метод [`clear()`](../Collection.clear/) удаляет все элементы из коллекции. Успешное выполнение данного
метода приводит к возникновению события [`onRemove`](../Collection.onRemove/). Вместе с этим событием
также генерируется событие [`onChange`](../Collection.onChange/), которое информирует о наличии любых
изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.clear()
```

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
collection.clear(); // [ ]
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeById()`](../Collection.removeById/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
