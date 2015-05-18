---
layout: doc
title: "PrintElementInline.TextDecoration"
position: 
categories: 
tags: 
---

Оформление текста.

   

#### Type

[[PrintElementTextDecoration]]

   

#### Example

[[PrintElementInline.TextDecoration.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Margin": {
          "Bottom": 20
        },
        "Inlines": [
          {
            "Run": {
              "TextDecoration": "Normal",
              "Text": "Normal"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Margin": {
          "Bottom": 20
        },
        "Inlines": [
          {
            "Run": {
              "TextDecoration": "Overline",
              "Text": "Overline"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Margin": {
          "Bottom": 20
        },
        "Inlines": [
          {
            "Run": {
              "TextDecoration": "Strikethrough",
              "Text": "Strikethrough"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Margin": {
          "Bottom": 20
        },
        "Inlines": [
          {
            "Run": {
              "TextDecoration": "Underline",
              "Text": "Underline"
            }
          }
        ]
      }
    }
  ]
}
```

 

 

