---
layout: doc
title: "TablePanel.metadata"
position: 0
---

Метаданные типа [`TablePanel`](../).

# Properties

Нет

# Examples

```js
//infinni-ui-demo
{
  "Items": [
  //infinni-ui-display-begin
{
  "TablePanel": {
    "Items": [
      {
        "Row": {
          "Items": [
            {
              "Cell": {
                "ColumnSpan": 5,
                "Items": [
                  {
                    "Label": {
                      "Value": "Row 1, 5 columns"
                    }
                  }
                ]
              }
            },
            {
              "Cell": {
                "ColumnSpan": 3,
                "Items": [
                   {
                    "Label": {
                      "Value": "Row 1, 3 columns"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "Row": {
          "Items": [
            {
              "Cell": {
                "ColumnSpan": 2,
                "Items": [
                  {
                    "Label": {
                      "Value": "Row 2, 2 columns"
                    }
                  }
                ]
              }
            },
            {
              "Cell": {
                "ColumnSpan": 6,
                "Items": [
                   {
                    "Label": {
                      "Value": "Row 2, 6 columns"
                    }
                  }
                ]
              }
            },
            {
              "Cell": {
                "ColumnSpan": 4,
                "Items": [
                   {
                    "Label": {
                      "Value": "Row 2, 4 columns"
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
    //infinni-ui-display-end
  ]
}
```