---
layout: doc
title: "DataGridColumn.setHeaderTemplate"
position: 8
---

Устанавливает [функцию](../../../Core/Script/) шаблонизации ячейки заголовка DataGrid.

# Syntax

```js
DataGridColumn.setHeaderTemplate(value);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Core/Script/)|Функция шаблонизации ячейки заголовка DataGrid. Результатом работы функции должен быть [визуальный элемент](../../../Core/Elements/Element/)|

## Returns

Нет.

# Examples

```js
DataGridColumn.setHeaderTemplate(function(context, argument) {
  var header = new Label();
  header.setValue(argument.value);
  return header;
});
```

# See Also

* [`getHeaderTemplate()`](../DataGridColumn.getHeaderTemplate/)
