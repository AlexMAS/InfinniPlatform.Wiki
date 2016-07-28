---
layout: doc
title: "ImageBox.metadata"
position: 0
---

Метаданные типа [`ImageBox`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|AcceptTypes|`Array`||Список допустимых форматов данных.|
|MaxSize|`Number`||Максимальный размер данных в байтах.|

# Examples

```json
{
  "AcceptTypes": [
    "image/jpeg",
    "image/png"
  ],
  "MaxSize": 1048576,
  "Value": {
    "Source": "dataSource1",
    "Property": "$.Photo"
  }
}
```

```json
{
  "ImageBox": {
    "Enabled": false,
    "Value": "\\img\\notice.png"
  }
}
```
