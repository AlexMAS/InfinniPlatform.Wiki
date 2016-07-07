---
layout: doc
title: "TabPanel.metadata"
position: 0
---

Метаданные типа [`TabPanel`](../).

# Schema

{% include github.html path="LayoutPanel/TabPanel/TabPanel.json" lang="json" %}

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
