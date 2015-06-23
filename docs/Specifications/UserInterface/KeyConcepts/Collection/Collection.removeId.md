---
layout: doc
title: "Collection.removeId()"
position: 21
---

Удаляет элемент с указанным идентификатором из коллекции.

# Description

Метод [`removeId()`](../Collection.removeId/) удаляет элемент с указанным идентификатором из коллекции.
Успешное выполнение данного метода приводит к возникновению события [`onRemove`](../Collection.onRemove/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.removeId(id)
```

## Parameters

`id`

Идентификатор элемента, который необходимо удалить из коллекции.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([
  { key: 1, value: 'A' },
  { key: 2, value: 'B' },
  { key: 3, value: 'C' }
], 'key');

collection.removeId(2);
collection.removeId(1);
collection.removeId(3);
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`clear()`](../Collection.clear/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
