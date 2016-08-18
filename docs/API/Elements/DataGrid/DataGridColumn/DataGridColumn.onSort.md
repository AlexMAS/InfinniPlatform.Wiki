---
layout: doc
title: "DataGridColumn.onSort"
position: 18
---

Устанавливает [обработчик события](../../../../Core/Script/) на событие 'onSort'

# Description

Новое значение переключателя передаётся в параметре `args.sortDirection`.

# Syntax

```js
DataGridColumn.onSort(callback);
```

## Parameters

Name|Type|Description
----|----|-----------
callback|[Обработчик события](../../../../Core/Script/)|[Обработчик события](../../../../Core/Script/) о том, что необходимо изменить сортировку элементов DataGrid.

## Returns

Нет.

# Examples

```js
column.onSort(callback);
```

# See Also

* [`getSortable()`](../DataGridColumn.getSortable/)
* [`setSortable()`](../DataGridColumn.setSortable/)
* [`getSortDirection()`](../DataGridColumn.getSortDirection/)
* [`setSortDirection()`](../DataGridColumn.setSortDirection/)
* [`isSortable()`](../DataGridColumn.isSortable/)
