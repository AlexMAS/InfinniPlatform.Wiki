---
layout: doc
title: "DataGridColumn.metadata"
position: 0
---

Метаданные типа [`DataGridColumn`](../).

# Schema

|Name|Type|Default|Description|
|----|----|----|-----------|
|HeaderTemplate|[`Element`](../../../Core/Elements/Element/)||Шаблон отображения заголовка колонки.|
|Header|`String`||Заголовок колонки.|
|CellSelector|[`Script`](../../../Core/Script/)||Функция выборки из элемента коллеции значения для ячейки.|
|CellProperty|`String`||Свойство элемента коллекции со значением для ячейки.|
|CellFormat|`String`&#124;[`Format`](../../../Core/DisplayFormat/)||Правила форматирования элемента коллекции для ячейки.|
|CellTemplate|[`Element`](../../../Core/Elements/Element/)||Шаблон отображения элемента коллекции для ячейки.|
|Width|`String`||Ширина колонки (напр. "100px", "25%").|


# Examples

```json
{
  "Header": "Kingdom",
  "CellProperty": "Kingdom"
}
```
