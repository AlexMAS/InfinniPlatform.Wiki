---
layout: doc
title: "BaseDataSource.getFilter()"
position: 12
---

Возвращает фильтр элементов.

# Description

Фильтр элементов представляется массивом [критериев фильтрации](../Criteria/).

# Syntax

```js
BaseDataSource.getFilter()
```

## Returns

Массив [критериев фильтрации](../Criteria/).

# Examples

```js
var filter = BaseDataSource.getFilter();
```

# See Also

* [`setFilter()`](../BaseDataSource.setFilter/)
* [`onFilterChanged`](../BaseDataSource.onFilterChanged/)
* [`updateItems()`](../BaseDataSource.updateItems/)
* [`addNextItems()`](../BaseDataSource.addNextItems/)
* [`Criteria`](../Criteria/)
