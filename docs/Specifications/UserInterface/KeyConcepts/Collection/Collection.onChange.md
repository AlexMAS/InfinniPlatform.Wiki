---
layout: doc
title: "Collection.onChange"
position: 105
---

Устанавливает [обработчик события](../../Script/) о том, что произошли какие-то изменения.

# Description

Любые операции над коллекцией, которые приводят к ее изменению (добавление новых элементов,
замена существующих элементов, удаление существующих элементов, изменение порядка элементов),
приводят к возникновению события [`onChange`](../Collection.onChange/).

# Syntax

```js
Collection.onChange(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что в коллекции произошли какие-то изменения.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.action`
содержит тип действия (`'add'`, `'replace'`, `'remove'`, `'move'` или `'reset'`). Значение
остальных возможных свойств (`argument.oldItems`, `argument.newItems`, `argument.oldStartingIndex`
и `argument.newStartingIndex`) интерпретируются в зависимости от типа действия (см. описание
обработчиков соответствующих событий).

# Examples

```js
var collection = new Collection();

collection.onChange(function(context, argument) {
  alert('Collection is changed!');
});

collection.add('A');
collection.remove('A');
```

# See Also

* [`onAdd`](../Collection.onAdd/)
* [`onReplace`](../Collection.onReplace/)
* [`onRemove`](../Collection.onRemove/)
* [`onMove`](../Collection.onMove/)
* [`onReset`](../Collection.onReset/)
