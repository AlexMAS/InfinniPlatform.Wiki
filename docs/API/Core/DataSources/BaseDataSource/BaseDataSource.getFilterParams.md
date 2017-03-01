---
layout: doc
title: "BaseDataSource.getFilterParams()"
position: 41
---

Возвращает значение параметра фильтра.

# Description

Вызов метода возвращает значение параметра фильтра.

# Syntax

```js
BaseDataSource.getFilterParams(paramName)
```

## Parameters

|Name|Description|
|----|-----------|
|paramName|Имя параметра|

## Returns

Значение параметра.

# Examples

```js

BaseDataSource.getFilterParams('filterName'); // name
BaseDataSource.getFilterParams('filterPrice'); // 999
```

# See Also

* [`getFilter()`](../BaseDataSource.getFilter/)
* [`setFilter()`](../BaseDataSource.setFilter/)
* [`setFilterParams()`](../BaseDataSource.setFilterParams/)
