---
layout: doc
title: "Collection.reset()"
position: 16
---

Устанавливает список элементов коллекции.

# Description

Метод [`reset()`](../Collection.reset/) заменяет элементы коллекции новым набором элементов.
Успешное выполнение данного метода приводит к возникновению события [`onReset`](../Collection.onReset/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.reset(newItems)
```

## Parameters

`newItems`

Массив новых элементов коллекции.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection();
collection.reset([ 'A', 'B' ]); // [ 'A', 'B' ]
collection.reset([ 'C', 'D' ]); // [ 'C', 'D' ]
```

# See Also

* [`set()`](../Collection.set/)
* [`onReset`](../Collection.onReset/)
* [`onChange`](../Collection.onChange/)
