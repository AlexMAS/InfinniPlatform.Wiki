---
layout: doc
title: "BaseDataSource.onItemDeleted"
position: 107
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что элемент удален.

# Description

Вызов метода [`deleteItem()`](../BaseDataSource.deleteItem/) производит удаление указанного элемента
в соответствующем источнику данных хранилище. Успешное удаление элемента приводит к возникновению
события [`onItemDeleted`](../BaseDataSource.onItemDeleted/).

# Syntax

```js
BaseDataSource.onItemDeleted(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что элемент удален. В параметре `argument`
передается информация о произошедшем событии. Свойство `argument.value` содержит ссылку на удаленный
элемент.

# Examples

```js
BaseDataSource.onItemDeleted(
  function(context, argument) { alert('Item is deleted!'); }
);
```

# See Also

* [`deleteItem()`](../BaseDataSource.deleteItem/)
