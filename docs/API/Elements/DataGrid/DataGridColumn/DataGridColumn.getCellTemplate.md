---
layout: doc
title: "DataGridColumn.getCellTemplate"
position: 3
---

Возвращает [функцию](../../../Core/Script/) шаблонизации дочернего элемента DataGrid.

# Syntax

```js
DataGridColumn.getCellTemplate();
```

## Parameters

Нет

## Returns

[Функция](../../../Core/Script/) шаблонизации ячейки дочернего элемента DataGrid. В параметре `args` передается информация, необходимая для формирования [визуального элемента](../../../Core/Elements/Element/), который будет отображен в качестве элемента DataGrid. Результатом работы функции должен быть [визуальный элемент](../../../Core/Elements/Element/).

# Examples

```js
var cellTemplate = DataGridColumn.getCellTemplate();
```

# See Also

* [`setCellTemplate()`](../DataGridColumn.setCellTemplate/)
