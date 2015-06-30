---
layout: doc
title: "Collection.removeById()"
position: 21
---

Удаляет элемент с указанным идентификатором из коллекции.

# Description

Метод [`removeById()`](../Collection.removeById/) удаляет элемент с указанным идентификатором из коллекции.
Успешное выполнение данного метода приводит к возникновению события [`onRemove`](../Collection.onRemove/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.removeById(id)
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

collection.removeById(2);
collection.removeById(1);
collection.removeById(3);
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`clear()`](../Collection.clear/)
* [`idProperty`](../Collection.idProperty/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
