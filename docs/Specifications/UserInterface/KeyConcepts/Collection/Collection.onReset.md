---
layout: doc
title: "Collection.onReset"
position: 104
---

Устанавливает [обработчик события](../../Script/) о том, что произошли существенные изменения.

# Description

Выполнение некоторых операций может существенно изменять коллекцию. К таким методам относятся
[`reset()`](../Collection.reset/), [`set()`](../Collection.set/) и [`sort()`](../Collection.sort/).
Успешное выполнение одного из этих методов приводит к возникновению события [`onReset`](../Collection.onReset/).
Вместе с этим событием также генерируется событие [`onChange`](../Collection.onChange/), которое
информирует о наличии любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.onReset(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что в коллекции произошли существенные изменения.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.action`
содержит тип действия и в данном случае равно `'reset'` (сброс).

# Examples

```js
var collection = new Collection();

collection.onReset(function(context, argument) {
  alert('Collection is changed!');
});

collection.reset([ 'A', 'B', 'C' ]);
```

# See Also

* [`reset()`](../Collection.reset/)
* [`set()`](../Collection.set/)
* [`sort()`](../Collection.sort/)
