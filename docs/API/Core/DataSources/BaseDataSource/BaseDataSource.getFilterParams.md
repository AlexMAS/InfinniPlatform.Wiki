---
layout: doc
title: "BaseDataSource.getFilterParams()"
position: 25
---

Возвращает значение параметра фильтра.

# Syntax

```js
BaseDataSource.getFilterParams(paramName)
```

## Parameters

|Name|Description|
|----|-----------|
|paramName|Название параметра|

## Returns

Значение указанного параметра, либо объект со всеми параметрами, если метод вызывался без названия параметра.

# Examples

```js
var filterParams = dataSource.getFilterParams();
var name = dataSource.getFilterParams('filterName');
```

# See Also

* [`setFilterParams()`](../BaseDataSource.setFilterParams/)
* [`getFilter()`](../BaseDataSource.getFilter/)
* [`setFilter()`](../BaseDataSource.setFilter/)
