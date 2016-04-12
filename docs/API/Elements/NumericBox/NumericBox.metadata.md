---
layout: doc
title: "NumericBox.metadata"
position: 7
---

Метаданные типа [`NumericBox`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|MinValue|`Number`||Минимальное значение|
|MaxValue|`Number`||Максимальное значение|
|Increment|`Number`|1|Приращение значения|

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
