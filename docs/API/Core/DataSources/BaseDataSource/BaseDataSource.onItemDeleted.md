---
layout: doc
title: "BaseDataSource.onItemDeleted"
position: 104
---

Устанавливает [обработчик события](../../../Script/) о том, что элемент удален.

# Description

Вызов метода [`deleteItem()`](../BaseDataSource.deleteItem/) производит удаление указанного элемента
в соответствующем источнику данных хранилище. Успешное удаление элемента приводит к возникновению
события [`onItemDeleted`](../BaseDataSource.onItemDeleted/).

# Syntax

```js
BaseDataSource.onItemDeleted(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[Script](../../../Script/)|Обработчик события о том, что элемент удален. Параметр `args` данного обработчика содержит поля: source - ссылка на [источник данных](../), value -  удаленный элемент|

# Examples

```js
BaseDataSource.onItemDeleted(
  function(context, args) { alert('Item is deleted!'); }
);
```

# See Also

* [`deleteItem()`](../BaseDataSource.deleteItem/)
