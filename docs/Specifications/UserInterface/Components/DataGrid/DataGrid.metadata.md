---
layout: doc
title: "DataGrid.metadata"
position: 0
---

Метаданные типа [`DataGrid`](../).

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/Components/DataGrid/DataGrid.resjson" lang="json" %}

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
