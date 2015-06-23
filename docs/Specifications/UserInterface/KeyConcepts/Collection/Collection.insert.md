---
layout: doc
title: "Collection.insert()"
position: 14
---

Вставляет элемент в указанную позицию коллекции.

# Description

Метод [`insert()`](../Collection.insert/) добавляет указанный элемент в заданную позицию коллекции.
Успешное выполнение данного метода приводит к возникновению события [`onAdd`](../Collection.onAdd/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.insert(index, newItem)
```

## Parameters

`index`

Индекс вставляемого элемента.

`newItem`

Элемент, который необходимо добавить в коллекцию.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection();
collection.insert(0, 'A'); // [ 'A' ]
collection.insert(0, 'B'); // [ 'B', 'A' ]
collection.insert(0, 'C'); // [ 'C', 'B', 'A' ]
```

# See Also

* [`push()`](../Collection.push/)
* [`add()`](../Collection.add/)
* [`addAll()`](../Collection.addAll/)
* [`insertAll()`](../Collection.insertAll/)
* [`onAdd`](../Collection.onAdd/)
* [`onChange`](../Collection.onChange/)
