---
layout: doc
title: "Collection.onMove"
position: 103
---

Устанавливает [обработчик события](../../Script/) о том, что произошло перемещение элементов.

# Description

Успешное выполнение метода [`move()`](../Collection.move/) приводит к возникновению события
[`onMove`](../Collection.onMove/). Вместе с этим событием также генерируется событие
[`onChange`](../Collection.onChange/), которое информирует о наличии любых
изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.onMove(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что произошло перемещение одного или нескольких
элементов в коллекции. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.action` содержит тип действия и в данном случае равно `'move'` (сброс);
свойства `argument.oldItems` и `argument.newItems` равны и содержат массив элементов,
которые были перемещены; `argument.oldStartingIndex` - индекс, откуда были перемещены
элементы; `argument.newStartingIndex` - индекс, куда были перемещены элементы.

# Examples

```js
var collection = new Collection([ 'A', 'B' ]);

collection.onReset(function(context, argument) {
  alert('Some items are moved!');
});

collection.move(1, 0); // [ 'B', 'A' ]
```

# See Also

* [`move()`](../Collection.move/)
* [`onChange`](../Collection.onChange/)
