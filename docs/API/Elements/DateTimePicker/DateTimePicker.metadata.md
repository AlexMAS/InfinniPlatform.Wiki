---
layout: doc
title: "DateTimePicker.metadata"
position: 7
---

Метаданные типа [`DateTimePicker`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|MinValue|`String`||Минимальное значение в формате ISO8601|
|MaxValue|`String`||Максимальное значение в формате ISO8601|
|Mode|`String`|`Date`|Режим работы элемента (`Date`, `Time`, `DateTime`)|

# Examples

```json
{
  "LabelText": "Birthday",
  "LabelFloating": true,
  "Value": {
    "Source": "mainDataSource",
    "Property": "$.Birthday"
  }
}
```
