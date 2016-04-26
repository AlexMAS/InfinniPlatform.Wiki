---
layout: doc
title: "DocumentViewer.metadata"
position: 0
---

Метаданные типа [`DocumentViewer`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|PrintViewId|`String`|Нет|Идентификатор печатного представления|
|PrintViewType|[`PrintViewType`](../DocumentViewer.PrintViewType/)||Тип печатного представления|
|DataSource|`String`||Источник данных|

# Examples

```json
{
    "Name": "DocumentViewer1",
    "DataSource": "PatientDataSource"
}
```