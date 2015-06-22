---
layout: doc
title: "Collection.insertAll()"
position: 15
---

Вставляет элементы, начиная с указанной позиции.

# Description

Метод [`insertAll()`](../Collection.insertAll/) добавляет указанные элементы, начиная с заданной позиции.
Успешное выполнение данного метода приводит к возникновению события [`onAdd`](../Collection.onAdd/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.insertAll(index, newItems)
```

## Parameters

`index`

Индекс первого вставляемого элемента.

`newItems`

Массив элементов, которые необходимо добавить в коллекцию.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection();
collection.insertAll(0, [ 'A', 'B' ]); // [ 'A', 'B' ]
collection.insertAll(0, [ 'C', 'D' ]); // [ 'C', 'D', 'A', 'B' ]
```

# See Also

* [`push()`](../Collection.push/)
* [`add()`](../Collection.add/)
* [`addAll()`](../Collection.addAll/)
* [`insert()`](../Collection.insert/)
* [`onAdd`](../Collection.onAdd/)
