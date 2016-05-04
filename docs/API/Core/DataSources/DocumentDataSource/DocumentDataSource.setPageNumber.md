---
layout: doc
title: "DocumentDataSource.setPageNumber()"
position: 9
---

Устанавливает номер страницы.

# Description

Если в источнике данных [разрешено обновление списка элементов](../../BaseDataSource/BaseDataSource.resumeUpdate/),
изменение номера страницы приводит к автоматическому [обновлению списка элементов источника данных](../../BaseDataSource/BaseDataSource.updateItems/).

# Syntax

```js
DocumentDataSource.setPageNumber(value)
```

## Parameters

|Name|Description|
|----|-----------|
|value|Номер страницы. Целое число, начиная с 0|

## Returns

Метод ничего не возвращает

# Examples

```js
DocumentDataSource.setPageNumber(5);
```

# See Also

* [`getPageNumber()`](../DocumentDataSource.getPageNumber/)
* [`updateItems()`](../../BaseDataSource/BaseDataSource.updateItems/)
* [`suspendUpdate()`](../../BaseDataSource/BaseDataSource.suspendUpdate/)
* [`resumeUpdate()`](../../BaseDataSource/BaseDataSource.resumeUpdate/)
