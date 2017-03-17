---
layout: doc
title: "BaseDataSource.setFilterParams()"
position: 26
---

Устанавливает значение параметра фильтра.

# Syntax

```js
BaseDataSource.setFilterParams(paramName, value)
```

## Parameters

|Name|Description|
|----|-----------|
|paramName|Название параметра|
|value|Значение параметра|

## Returns

Метод ничего не возвращает.

# Examples

```js
var filter = 'and(contains(Name, <%filterName%>),contains(currency, <%filterPrice%>))';
dataSource.setFilter(filter);

dataSource.setFilterParams('filterName', 'name');
dataSource.setFilterParams('filterPrice', '999');
```

# See Also

* [`getFilterParams()`](../BaseDataSource.getFilterParams/)
* [`getFilter()`](../BaseDataSource.getFilter/)
* [`setFilter()`](../BaseDataSource.setFilter/)
