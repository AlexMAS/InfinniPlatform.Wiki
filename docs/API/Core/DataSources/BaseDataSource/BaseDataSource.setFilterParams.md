---
layout: doc
title: "BaseDataSource.setFilterParams()"
position: 42
---

Устанавливает значение параметра фильтра.

# Description

Вызов метода устанавливает значение параметра фильтра.

# Syntax

```js
BaseDataSource.setFilterParams(paramName, value)
```

## Parameters

|Name|Description|
|----|-----------|
|paramName|Имя параметра|
|value|Значение параметра|

## Returns

Нет.

# Examples

```js
var filter = 'and(contains(Name, <%filterName%>),contains(currency, <%filterPrice%>))';
BaseDataSource.setFilter(filter);

BaseDataSource.setFilterParams('filterName', 'name');
BaseDataSource.setFilterParams('filterPrice', '999');
```

# See Also

* [`getFilter()`](../BaseDataSource.getFilter/)
* [`setFilter()`](../BaseDataSource.setFilter/)
* [`getFilterParams()`](../BaseDataSource.getFilterParams/)
