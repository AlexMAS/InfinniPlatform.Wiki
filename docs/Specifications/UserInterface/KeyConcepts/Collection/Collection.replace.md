---
layout: doc
title: "Collection.replace()"
position: 18
---

Заменяет элемент коллекции на указанный.

# Description

Метод [`replace()`](../Collection.replace/) заменяет элемент коллекции на указанный. При этом новый
элемент помещается в ту же позицию, в которой находился существующий элемент. Успешное выполнение
данного метода приводит к возникновению события [`onReplace`](../Collection.onReplace/). Вместе с
этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое информирует
о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.replace(oldItem, newItem)
```

## Parameters

`oldItem`

Существующий элемент коллекции, который нужно заменить.

`newItem`

Новый элемент коллекции, которым нужно заменить существующий.

## Returns

Возвращает `true`, если коллекция была изменена, иначе - `false`.

# Examples

```js
var collection = new Collection([ 'A', 'B', 'C' ]);
collection.replace('C', 'D'); // [ 'A', 'B', 'D' ]
```

# See Also

* [`onReplace`](../Collection.onReplace/)
* [`onChange`](../Collection.onChange/)
