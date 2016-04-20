---
layout: doc
title: "BaseDataSource.setFilter()"
position: 10
---

Устанавливает фильтр элементов.

# Description

Фильтр элементов представляется массивом критериев фильтрации. 
Если в источнике данных [разрешено обновление списка элементов](../BaseDataSource.resumeUpdate/),
изменение фильтра приводит к автоматическому [обновлению списка элементов источника данных](../BaseDataSource.updateItems/).

# Syntax

```js
BaseDataSource.setFilter(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Array`|Массив критериев фильтрации|

## Returns

Метод ничего не возвращает.

# Examples

```js
BaseDataSource.setFilter([
  {
    criteriaType: 1,
    property: 'FirstName',
    value: 'Jo'
  }
]);

# See Also

* [`getFilter()`](../BaseDataSource.getFilter/)
* [`setIdFilter()`](../BaseDataSource.setIdFilter/)
* [`suspendUpdate()`](../BaseDataSource.suspendUpdate/)
* [`resumeUpdate()`](../BaseDataSource.resumeUpdate/)
* [`updateItems()`](../BaseDataSource.updateItems/)