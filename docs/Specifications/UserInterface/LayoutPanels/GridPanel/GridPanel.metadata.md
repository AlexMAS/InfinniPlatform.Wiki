---
layout: doc
title: "GridPanel.metadata"
position: 0
---

Метаданные типа [`GridPanel`](../).

# Schema

{% include github.html path="InfinniPlatform.Core/.schema/UI/LayoutPanel/GridPanel/GridPanel.resjson" lang="json" %}

# Examples

```json
{
  "Items": [
    {
      "GridCell": {
        "ColumnSpan": 6,
        "Items": [
          {
            "Label": {
              "Value": "Row 1, 6 columns"
            }
          }
        ]
      }
    },
    {
      "GridCell": {
        "ColumnSpan": 6,
        "Items": [
          {
            "Label": {
              "Value": "Row 1, 6 columns"
            }
          }
        ]
      }
    },
    {
      "GridCell": {
        "ColumnSpan": 12,
        "Items": [
          {
            "Label": {
              "Value": "Row 2, 12 columns"
            }
          }
        ]
      }
    }
  ]
}
```
