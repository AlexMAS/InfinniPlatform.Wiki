---
layout: doc
title: "BaseDataSource.onItemsUpdated"
position: 105
---

Устанавливает [обработчик события](../../../Script/) о том, что список элементов обновлен.

# Description

Вызов метода [`updateItems()`](../BaseDataSource.updateItems/) производит загрузку списка элементов
из соответствующего источнику данных хранилища. Если в источнике данных были несохраненные изменения,
они будут потеряны, так как загруженные ранее данные будут заменены (обновлены) новыми. 
Успешное обновление списка элементов приводит к возникновению события [`onItemsUpdated`](../BaseDataSource.onItemsUpdated/).

# Syntax

```js
BaseDataSource.onItemsUpdated(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[Script](../../../Script/)|Обработчик события о том, что список элементов обновлен. Параметр args данного обработчика содержит новый список элементов источника данных в поле value|

# Examples

```js
BaseDataSource.onItemsUpdated(
  function(context, args) { alert('Items are updated!'); }
);
```

# See Also

* [`updateItems()`](../BaseDataSource.updateItems/)
