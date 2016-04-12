---
layout: doc
title: "PasswordBox.metadata"
position: 0
---

Метаданные типа [`PasswordBox`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|LabelText|`String`||Текст метки|
|LabelFloating|`Boolean`|`false`|Является ли метка плавающей|

# Examples

```json
{
  "Label": "Password",
  "LabelFloating": true,
  "Value": {
    "Source": "dataSource1",
    "Property": "$.Password"
  }
}
```
