---
layout: doc
title: "Collection.removeAll"
position: 23
---

Удаляет указанные элементы из коллекции.

# Description

Метод [`removeAll()`](../Collection.removeAll/) удаляет указанные элементы из коллекции. Успешное
выполнение данного метода приводит к возникновению события [`onRemove`](../Collection.onRemove/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.removeAll(items)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`items`|`Array`|Массив элементов, которые необходимо удалить из коллекции.|

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C', 'D' ]);
collection.removeAll([ 'A', 'C' ]); // [ 'B', 'D' ]
collection.removeAll([ 'B', 'D' ]); // [ ]
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeById()`](../Collection.removeById/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeRange()`](../Collection.removeRange/)
* [`removeEvery()`](../Collection.removeEvery/)
* [`clear()`](../Collection.clear/)
* [`onRemove`](../Collection.onRemove/)
* [`onChange`](../Collection.onChange/)
