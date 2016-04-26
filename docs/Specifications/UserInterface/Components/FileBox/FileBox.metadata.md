---
layout: doc
title: "FileBox.metadata"
position: 0
---

Метаданные типа [`FileBox`](../).

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/Components/FileBox/FileBox.resjson" lang="json" %}

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
