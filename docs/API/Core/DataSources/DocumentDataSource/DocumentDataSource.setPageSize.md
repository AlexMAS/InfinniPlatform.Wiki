---
layout: doc
title: "DocumentDataSource.setPageSize()"
position: 11
---

Устанавливает размер страницы.

# Description

Если в источнике данных [разрешено обновление списка элементов](../../BaseDataSource/BaseDataSource.resumeUpdate/),
изменение размера страницы приводит к автоматическому [обновлению списка элементов источника данных](../../BaseDataSource/BaseDataSource.updateItems/).

# Syntax

```js
DocumentDataSource.setPageSize(value)
```

## Parameters

|Name|Description|
|----|-----------|
|value|Размер страницы. Положительное число|

## Returns

Метод ничего не возвращает

# Examples

```js
DocumentDataSource.setPageSize(50);
```

# See Also

* [`getPageSize()`](../DocumentDataSource.getPageSize/)
* [`updateItems()`](../../BaseDataSource/BaseDataSource.updateItems/)
* [`suspendUpdate()`](../../BaseDataSource/BaseDataSource.suspendUpdate/)
* [`resumeUpdate()`](../../BaseDataSource/BaseDataSource.resumeUpdate/)
