---
layout: doc
title: "TabPanel.metadata"
position: 0
---

Метаданные [контейнера в виде набора закладок](../).

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/LayoutPanel/TabPanel/TabPanel.resjson" lang="json" %}

# Examples

```json
{
  "Items": [
    {
      "Text": "Page1",
      "Items": [
        {
          "Label": {
            "Value": "Content of Page1"
          }
        }
      ]
    },
    {
      "Text": "Page2",
      "Items": [
        {
          "Label": {
            "Value": "Content of Page2"
          }
        }
      ]
    }
  ]
}
```
