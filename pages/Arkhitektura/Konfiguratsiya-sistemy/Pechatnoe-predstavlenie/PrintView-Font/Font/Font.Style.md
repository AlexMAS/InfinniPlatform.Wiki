---
layout: default
title: Font.Style
position: 2
categories: 
tags: 
---

Стиль шрифта.

    

#### Type

[[FontStyle]]

   

#### Example

[[Font.Style.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Font": {
          "Style": "Normal"
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Normal font style"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Font": {
          "Style": "Italic"
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Italic font style"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Font": {
          "Style": "Oblique"
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Oblique font style"
            }
          }
        ]
      }
    }
  ],
  "Font": {
    "Family": "Times New Roman"
  },
  "PageSize": {
    "Width": 200,
    "Height": 150,
    "SizeUnit": "Px"
  }
}
```

  


  


