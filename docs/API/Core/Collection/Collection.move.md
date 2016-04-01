---
layout: doc
title: "Collection.move"
position: 40
---

Перемещает элемент коллекции в позицию с указанным индексом.

# Description

Метод [`move()`](../Collection.move/) перемещает элемент коллекции в позицию с указанным индексом.
Успешное выполнение данного метода приводит к возникновению события [`onMove`](../Collection.onMove/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.move(oldIndex, newIndex)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`oldIndex`|`Integer`|Индекс элемента, который необходимо переместить.|
|`newIndex`|`Integer`|Индекс нового местоположения элемента.|

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
collection.move(2, 0); // [ 'C', 'A', 'B' ]
collection.move(2, 1); // [ 'C', 'B', 'A' ]
```

# See Also

* [`sort()`](../Collection.sort/)
* [`onMove`](../Collection.onMove/)
* [`onChange`](../Collection.onChange/)
