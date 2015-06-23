---
layout: doc
title: "Collection.add()"
position: 12
---

Добавляет элемент в конец коллекции.

# Description

Метод [`add()`](../Collection.add/) добавляет указанный элемент в конец коллекции. Успешное
выполнение данного метода приводит к возникновению события [`onAdd`](../Collection.onAdd/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/),
которое информирует о наличии любых изменений. Аргументы обеих событий в данном случае
будут идентичны.

# Syntax

```js
Collection.add(newItem)
```

## Parameters

`newItem`

Элемент, который необходимо добавить в коллекцию.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection();
collection.add('A'); // [ 'A' ]
collection.add('B'); // [ 'A', 'B' ]
collection.add('C'); // [ 'A', 'B', 'C' ]
```

# See Also

* [`push()`](../Collection.push/)
* [`addAll()`](../Collection.addAll/)
* [`insert()`](../Collection.insert/)
* [`insertAll()`](../Collection.insertAll/)
* [`onAdd`](../Collection.onAdd/)
* [`onChange`](../Collection.onChange/)
