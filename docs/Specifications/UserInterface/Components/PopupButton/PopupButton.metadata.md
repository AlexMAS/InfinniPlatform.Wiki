---
layout: doc
title: "PopupButton.metadata"
position: 0
---

Метаданные типа [`PopupButton`](../).

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/Components/PopupButton/PopupButton.resjson" lang="json" %}

# Examples

```json
{
  "Text": "Delete",
  "Items": [
    {
      "Button": {
        "Text": "Delete rows"
      }
    },
    {
      "Button": {
        "Text": "Delete columns"
      }
    },
    {
      "Button": {
        "Text": "Delete cells"
      }
    },
    {
      "Button": {
        "Text": "Delete table"
      }
    }
  ]
}
```
