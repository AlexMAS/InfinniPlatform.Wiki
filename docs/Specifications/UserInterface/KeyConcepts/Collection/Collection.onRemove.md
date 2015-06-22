---
layout: doc
title: "Collection.onRemove"
position: 102
---

Устанавливает [обработчик события](../../Script/) о том, что произошло удаление элементов.

# Description

Успешное выполнение методов [`pop()`](../Collection.pop/), [`remove()`](../Collection.remove/),
[`removeId()`](../Collection.removeId/), [`removeAt()`](../Collection.removeAt/),
[`removeAll()`](../Collection.removeAll/), [`removeRange()`](../Collection.removeRange/),
[`removePredicate()`](../Collection.removePredicate/) и [`clear()`](../Collection.clear/)
приводит к возникновению события [`onRemove`](../Collection.onRemove/). Вместе с этим событием
также генерируется событие [`onChange`](../Collection.onChange/), которое информирует о наличии
любых изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.onRemove(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что произошло удаление одного или нескольких
элементов из коллекции. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.action` содержит тип действия и в данном случае равно `'remove'` (удаление);
`argument.oldItems` - массив элементов, которые были удалены; `argument.oldStartingIndex` - индекс,
начиная с которого были удалены элементы (или `-1`, если элементы удалялись не подряд).

# Examples

```js
var collection = new Collection([ 'A' ]);

collection.onRemove(function(context, argument) {
  alert('Some items are removed!');
});

collection.remove('A');
```

# See Also

* [`pop()`](../Collection.pop/)
* [`remove()`](../Collection.remove/)
* [`removeId()`](../Collection.removeId/)
* [`removeAt()`](../Collection.removeAt/)
* [`removeAll()`](../Collection.removeAll/)
* [`removeRange()`](../Collection.removeRange/)
* [`removePredicate()`](../Collection.removePredicate/)
* [`clear()`](../Collection.clear/)
* [`onChange`](../Collection.onChange/)
