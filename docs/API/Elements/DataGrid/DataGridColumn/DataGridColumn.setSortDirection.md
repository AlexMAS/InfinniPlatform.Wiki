---
layout: doc
title: "DataGridColumn.setSortDirection"
position: 14
---

Возвращает направление сортировки.

# Description

Возможны следующие направления сортировки:

* asc - сортировка по возрастанию,
* desc - сортировка по убыванию.

# Syntax

```js
DataGridColumn.setSortDirection(value);
```

## Parameters

Name|Type|Description
----|----|-----------
value|`String`|Направление сортировки.

## Returns

Нет.

# Examples

```js
column.setSortDirection('asc');
```

# See Also

* [`getSortable()`](../DataGridColumn.getSortable/)
* [`setSortable()`](../DataGridColumn.setSortable/)
* [`getSortDirection()`](../DataGridColumn.getSortDirection/)
* [`isSortable()`](../DataGridColumn.isSortable/)
* [`onSort()`](../DataGridColumn.onSort/)
