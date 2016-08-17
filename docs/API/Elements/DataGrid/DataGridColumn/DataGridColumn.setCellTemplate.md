---
layout: doc
title: "DataGridColumn.setCellTemplate"
position: 4
---

Устанавливает [функцию](../../../Core/Script/) шаблонизации ячейки дочернего элемента DataGrid.

# Syntax

```js
DataGridColumn.setCellTemplate();
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Core/Script/)|Функция шаблонизации ячейки дочернего элемента DataGrid. В параметре `args` передается информация, необходимая для формирования [визуального элемента](../../../Core/Elements/Element/), который будет отображен в качестве элемента DataGrid. Результатом работы функции должен быть [визуальный элемент](../../../Core/Elements/Element/)|

## Returns

Нет.

# Examples

```js
DataGridColumn.setCellTemplate(function(context, argument) {
  var cell = new Label();
  cell.setValue(argument.value);
  return cell;
});
```

# See Also

* [`getCellTemplate()`](../DataGridColumn.getCellTemplate/)
