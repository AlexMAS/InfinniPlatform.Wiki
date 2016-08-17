---
layout: doc
title: "DataGridColumn.setCellSelector"
position: 2
---

Устанавливает функцию которая возвращает значение селектора ячейки.

# Syntax

```js
DataGridColumn.setCellSelector(value);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Script`|Функция возвращающая значение селектора ячейки.|

## Returns

Нет.

# Examples

```js
DataGridColumn.setCellSelector(function (value) {
  return value;
});
```

# See Also

* [`getCellSelector()`](../DataGridColumn.getCellSelector/)
