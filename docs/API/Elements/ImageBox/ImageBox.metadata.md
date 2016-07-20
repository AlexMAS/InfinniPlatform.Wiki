---
layout: doc
title: "ImageBox.metadata"
position: 0
---

Метаданные типа [`ImageBox`](../).

# Schema

|Name|Type|Default|Description|
|----|----|----|-----------|
|AcceptTypes|`Array`||Список допустимых форматов данных.|
|MaxSize|`Number`||Максимальный размер данных в байтах.|
|ReadOnly|`Boolean`|`false`|Значение, определяющее, возможено ли изменение изображения.|

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
