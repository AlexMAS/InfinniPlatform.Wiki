---
layout: doc
title: "BaseDataSource.onItemSaved"
position: 103
---

Устанавливает [обработчик события](../../../Script/) о том, что элемент сохранен.

# Description

Вызов метода [`saveItem()`](../BaseDataSource.saveItem/) производит сохранение всех изменений
указанного элемента в соответствующем источнику данных хранилище. Успешное сохранение элемента
приводит к возникновению события [`onItemSaved`](../BaseDataSource.onItemSaved/).

# Syntax

```js
BaseDataSource.onItemSaved(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[Script](../../../Script/)|Обработчик события о том, что элемент сохранен. Параметр `args` данного обработчика содержит поля: source - ссылка на [источник данных](../), value -  сохраненный элемент,  result - информация о сохранении|

# Examples

```js
BaseDataSource.onItemSaved(
  function(context, args) { alert('Item is saved!'); }
);
```

# See Also

* [`saveItem()`](../BaseDataSource.saveItem/)
* [`isModified()`](../BaseDataSource.isModified/)
