---
layout: doc
title: "Collection.addAll()"
position: 13
---

Добавляет элементы в коллекцию.

# Description

Метод [`addAll()`](../Collection.addAll/) добавляет указанные элементы в конец коллекции.
Успешное выполнение данного метода приводит к возникновению события [`onAdd`](../Collection.onAdd/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.addAll(newItems)
```

## Parameters

`newItems`

Массив элементов, которые необходимо добавить в коллекцию.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection();
collection.addAll([ 'A', 'B' ]); // [ 'A', 'B' ]
collection.addAll([ 'C', 'D' ]); // [ 'A', 'B', 'C', 'D' ]
```

# See Also

* [`push()`](../Collection.push/)
* [`add()`](../Collection.add/)
* [`insert()`](../Collection.insert/)
* [`insertAll()`](../Collection.insertAll/)
* [`onAdd`](../Collection.onAdd/)
* [`onChange`](../Collection.onChange/)
