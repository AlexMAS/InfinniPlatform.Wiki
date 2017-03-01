---
layout: doc
title: "BaseDataSource.setFilter()"
position: 40
---

Устанавливает строку фильтра.

# Description

Вызов метода устанавливает строку фильтра.

# Syntax

```js
BaseDataSource.setFilter(filter)
```

## Parameters

|Name|Description|
|----|-----------|
|filter|Строка фильтра|

## Returns

Нет.

# Examples

```js
var filter = 'and(contains(Name, <%filterName%>),contains(currency, <%filterPrice%>))';
BaseDataSource.setFilter(filter);
```

# See Also

* [`getFilter()`](../BaseDataSource.getFilter/)
* [`getFilterParams()`](../BaseDataSource.getFilterParams/)
* [`setFilterParams()`](../BaseDataSource.setFilterParams/)
