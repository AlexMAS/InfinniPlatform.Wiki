---
layout: doc
title: "TextBox.metadata"
position: 5
---

Метаданные типа [`TextBox`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|`Multiline`|`Boolean`|`false`|Разрешен ли многострочный текст|
|`LineCount`|`Integer`||Максимально видимое количество строк|

# Examples

```json
{
  "Label": "Description",
  "LabelFloating": true,
  "Multiline": true,
  "LineCount": 5,
  "Value": {
    "Source": "dataSource1",
    "Property": "$.Description"
  }
}
```
