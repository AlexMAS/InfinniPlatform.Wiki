---
layout: doc
title: "NumericBox.metadata"
position: 9
---

Метаданные типа [`NumericBox`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|MinValue|`Number`||Минимальное значение|
|MaxValue|`Number`||Максимальное значение|
|Increment|`Number`|1|Приращение значения|
|StartValue|`Number`||Начальное значение по умолчанию|

# Examples

```json
{
  "LabelText": "Age",
  "LabelFloating": true,
  "MinValue": 0,
  "Value": {
    "Source": "mainDataSource",
    "Property": "$.Age"
  }
}
```
