---
layout: doc
title: "Collection.push()"
position: 11
---

Добавляет элемент в коллекцию.

# Description

Метод [`push()`](../Collection.push/) добавляет указанный элемент в конец коллекции. Успешное
выполнение данного метода приводит к возникновению события [`onAdd`](../Collection.onAdd/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/),
которое информирует о наличии любых изменений. Аргументы обеих событий в данном случае
будут идентичны.

# Syntax

```js
Collection.push(newItem)
```

## Parameters

`newItem`

Элемент, который необходимо добавить в коллекцию.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection();
collection.push('A'); // [ 'A' ]
collection.push('B'); // [ 'A', 'B' ]
collection.push('C'); // [ 'A', 'B', 'C' ]
```

# See Also

* [`add()`](../Collection.add/)
* [`addAll()`](../Collection.addAll/)
* [`insert()`](../Collection.insert/)
* [`insertAll()`](../Collection.insertAll/)
* [`onAdd`](../Collection.onAdd/)
* [`onChange`](../Collection.onChange/)
