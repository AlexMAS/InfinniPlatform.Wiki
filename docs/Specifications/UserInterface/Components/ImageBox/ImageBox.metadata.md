---
layout: doc
title: "ImageBox.metadata"
position: 0
---

Метаданные типа [`ImageBox`](../).

# Schema

{% include github.html path="InfinniPlatform.Core/.schema/UI/Components/ImageBox/ImageBox.resjson" lang="json" %}

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
