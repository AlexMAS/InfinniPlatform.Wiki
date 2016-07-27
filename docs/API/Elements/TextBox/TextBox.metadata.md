---
layout: doc
title: "TextBox.metadata"
position: 0
---

Метаданные типа [`TextBox`](../).

# Properties

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
