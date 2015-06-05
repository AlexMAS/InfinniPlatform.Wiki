---
layout: doc
title: "BaseDataSource.onItemSaved"
position: 106
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что элемент сохранен.

# Description

Вызов метода [`saveItem()`](../BaseDataSource.saveItem/) производит сохранение всех изменений
указанного элемента в соответствующем источнику данных хранилище. Успешное сохранение элемента
приводит к возникновению события [`onItemSaved`](../BaseDataSource.onItemSaved/).

# Syntax

```js
BaseDataSource.onItemSaved(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что элемент сохранен. В параметре `argument`
передается информация о произошедшем событии. Свойство `argument.value` содержит ссылку на сохраненный
элемент.

# Examples

```js
BaseDataSource.onItemSaved(
  function(context, argument) { alert('Item is saved!'); }
);
```

# See Also

* [`saveItem()`](../BaseDataSource.saveItem/)
* [`isModified()`](../BaseDataSource.isModified/)
