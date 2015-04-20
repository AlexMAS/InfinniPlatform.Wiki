---
layout: default
title: PrintElement.Font
position: 2
categories: 
tags: 
---

Настройки шрифта.

   

#### Type

[[Font]]

   

#### Example

[[PrintElement.Font.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Family": "Arial",
                "Size": 12,
                "SizeUnit": "Pt",
                "Style": "Italic"
              },
              "Text": "Arial, 12pt, Italic"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Family": "Times New Roman",
                "Size": 12,
                "SizeUnit": "Px",
                "Style": "Italic",
                "Weight": "Bold"
              },
              "Text": "Times New Roman, 12px, Italic, Bold"
            }
          }
        ]
      }
    }
  ]
}
```

  


 

