---
layout: doc
title: "Collection.onAdd"
position: 100
---

Устанавливает [обработчик события](../../Script/) о том, что произошло добавление элементов.

# Description

Успешное выполнение методов [`push()`](../Collection.push/), [`add()`](../Collection.add/),
[`addAll()`](../Collection.addAll/), [`insert()`](../Collection.insert/) и [`insertAll()`](../Collection.insertAll/)
приводит к возникновению события [`onAdd`](../Collection.onAdd/). Вместе с этим событием также
генерируется событие [`onChange`](../Collection.onChange/), которое информирует о наличии любых
изменений. Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.onAdd(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../Script/)|[Обработчик события](../../Script/) о том, что произошло добавление одного или нескольких элементов в коллекцию. В параметре `argument` передается информация о произошедшем событии. Свойство `argument.action` содержит тип действия и в данном случае равно `'add'` (добавление); `argument.newItems` - массив добавленных элементов; `argument.newStartingIndex` - индекс, по которому были добавлены элементы (или `-1`, если элементы были добавлены в конец коллекции).|

# Examples

```js
var collection = new Collection();

collection.onAdd(function(context, argument) {
  alert('New items are added!');
});

collection.add('A');
```

# See Also

* [`push()`](../Collection.push/)
* [`add()`](../Collection.add/)
* [`addAll()`](../Collection.addAll/)
* [`insert()`](../Collection.insert/)
* [`insertAll()`](../Collection.insertAll/)
* [`onChange`](../Collection.onChange/)
