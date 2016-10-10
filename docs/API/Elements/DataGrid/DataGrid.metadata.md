---
layout: doc
title: "DataGrid.metadata"
position: 0
---

Метаданные типа [`DataGrid`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|Columns|Array.<[`DataGridColumn`](../DataGridColumn/)>|–|Список колонок таблицы.|
|ShowSelectors|Boolean|`true`|Определяет показывать ли колонку с CheckBox/Radio для выбора элементов.|
|CheckAllVisible|Boolean|`false`|Определяет виден ли элемент "Выбрать все" в шапке таблицы.|
|OnCheckAllChanged|[`Script`](../../../Core/Script/)|–|Устанавливает обработчик изменения состоняие элемента "Выбрать все" в шапке таблицы.|
|RowBackground|[`Color`](/docs/API/Core/Style/ColorStyle/)(&hArr;)|–|Цвет фона строки|
|RowForeground|[`Color`](/docs/API/Core/Style/ColorStyle/)(&hArr;)|–|Цвет текста строки|
|RowTextStyle|[`TextStyle`](../../../Style/TextStyle/)(&hArr;)|–|Стиль текста строки|
|RowStyle|`String`(&hArr;)|–|Имя кастомного стиля, применяемого к строке|
|onRowClick|[`Script`](../../../Core/Script/)|–|Устанавливает [обработчик события](../../Core/Script/) на клик по элементам DataGrid.|
|onRowDoubleClick|[`Script`](../../../Core/Script/)|–|Устанавливает [обработчик события](../../Core/Script/) на двойной клик по элементам DataGrid.|

(&hArr;) Свойство может быть задано, как [`DataBinding`](../../../Core/DataBinding/DataBinding.metadata/).

# Examples

```json
{
  "DataGrid": {
    "Columns": [
      {
        "Header": "Name",
        "CellProperty": "Name",
        "Sortable": true,
        "SortedDefault": "asc",
        "SortFunction": "{ console.log(args.sortDirection) }"
      },
      {
        "Header": "Family",
        "CellProperty": "Family"
      },
      {
        "Header": "Kingdom",
        "CellProperty": "Kingdom"
      }
    ],
    "Items": {
      "Source": "peopleDataSource"
    },
    "OnRowClick": "{ console.log(args.source) }",
    "OnRowDoubleClick": "{ console.log(args.source) }",
    "RowBackground": {
      "Source": "RowStyleDataSource",
      "Property": "#",
      "Mode": "ToElement",
      "Converter": {
        "ToElement": "{ return args.value.Age > 100 ? 'Accent1' : 'Accent2'; }"
      }
    }
  }
}
```
