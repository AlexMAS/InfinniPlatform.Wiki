---
layout: doc
title: "MenuBar.metadata"
position: 0
---

Метаданные типа [`MenuBar`](../).

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/Components/MenuBar/MenuBar.resjson" lang="json" %}

# Examples

```json
{
  "Items": [
    {
      "MenuBarItem": {
        "Text": "Item1",
        "Items": [
          {
            "MenuBarItem": {
              "Text": "Subitem11"
            }
          },
          {
            "MenuBarItem": {
              "Text": "Subitem12"
            }
          }
        ]
      }
    },
    {
      "MenuBarItem": {
        "Text": "Item2",
        "Items": [
          {
            "MenuBarItem": {
              "Text": "Subitem21"
            }
          },
          {
            "MenuBarItem": {
              "Text": "Subitem22"
            }
          }
        ]
      }
    },
    {
      "MenuBarItem": {
        "Text": "Item3"
      }
    }
  ]
}
```
