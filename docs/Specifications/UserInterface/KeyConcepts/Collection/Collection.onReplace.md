---
layout: doc
title: "Collection.onReplace"
position: 100
---

Устанавливает [обработчик события](../../Script/) о том, что произошла замена элементов.

# Description

Успешное выполнение метода [`replace()`](../Collection.replace/) приводит к возникновению события
[`onReplace`](../Collection.onReplace/). Вместе с этим событием также генерируется событие
[`onChange`](../Collection.onChange/), которое информирует о наличии любых изменений.
Аргументы обеих событий в данном случае будут идентичны.

# Syntax

```js
Collection.onReplace(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что произошла замена одного или нескольких
элементов в коллекции. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.action` содержит тип действия и в данном случае равно `'replace'` (замена);
`argument.oldItems` - массив старых элементов, которые были заменены; `argument.newItems` -
массив новых элементов, которыми были заменены старые элементы.

# Examples

```js
var collection = new Collection([ 'A' ]);

collection.onReplace(function(context, argument) {
  alert('Some items are replaced!');
});

collection.replace('A', 'B');
```

# See Also

* [`replace()`](../Collection.replace/)
