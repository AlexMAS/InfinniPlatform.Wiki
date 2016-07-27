---
layout: doc
title: "DataGrid.metadata"
position: 0
---

Метаданные типа [`DataGrid`](../).

# Properties

Name|Type|Default|Description
----|----|----|-----------
Columns|Array.<[`DataGridColumn`](../DataGridColumn/)>||Список колонок таблицы.
ShowSelectors|Boolean|`true`|Определяет показывать ли колонку с CheckBox/Radio для выбора элементов.
CheckAllVisible|Boolean|`false`|Определяет виден ли элемент "Выбрать все" в шапке таблицы.
OnCheckAllChanged|[`Script`](../../../Core/Script/)||Устанавливает обработчик изменения состоняие элемента "Выбрать все" в шапке таблицы.

# Examples

```json
{
  "Columns": [
    {
      "Header": "Name",
      "CellProperty": "Name"
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
  }
}
```
