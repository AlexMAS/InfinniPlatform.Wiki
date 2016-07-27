---
layout: doc
title: "FileBox.metadata"
position: 0
---

Метаданные типа [`FileBox`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|AcceptTypes|`Array`|Список допустимых форматов данных.|
|MaxSize|`Number`|Максимальный размер данных в байтах.|

# Examples

```json
{
  "AcceptTypes": [
    "application/pdf",
    "application/msword"
  ],
  "MaxSize": 1048576,
  "Value": {
    "Source": "dataSource1",
    "Property": "$.Attachment"
  }
}
```
