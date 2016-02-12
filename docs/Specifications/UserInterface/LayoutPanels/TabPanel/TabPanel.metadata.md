---
layout: doc
title: "TabPanel.metadata"
position: 0
---

Метаданные типа [`TabPanel`](../).

# Schema

{% include github.html path="InfinniPlatform.Core/.schema/UI/LayoutPanel/TabPanel/TabPanel.resjson" lang="json" %}

# Examples

```json
{
  "Items": [
    {
      "TabPage": {
        "Text": "Header of Page1",
        "Items": [
          {
            "Label": {
              "Value": "Content of Page1"
            }
          }
        ]
      }
    },
    {
      "TabPage": {
        "Text": "Header of Page2",
        "Items": [
          {
            "Label": {
              "Value": "Content of Page2"
            }
          }
        ]
      }
    }
  ]
}
```
