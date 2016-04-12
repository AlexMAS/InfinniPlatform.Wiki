---
layout: doc
title: "DataGrid.metadata"
position: 0
---

Метаданные типа [`DataGrid`](../).

# Schema

Name|Type|Default|Description
----|----|----|-----------
Columns|Array.<[`DataGridColumn`](../DataGridColumn/)>||Список колонок таблицы.

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
