---
layout: doc
title: "PrintElementBarcodeEan13.ShowText"
position: 0
categories: 
tags: 
---

Показывать ли текст в штрих-коде.

   

#### Type

boolean

   

#### Example

[[PrintElementBarcodeEan13.ShowText.pdf]] 

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "ShowText=false"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeEan13": {
              "Text": "123456789012",
              "ShowText": false
            }
          },
          {
            "LineBreak": {}
          },
          {
            "LineBreak": {}
          },
          {
            "Run": {
              "Text": "ShowText=true"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeEan13": {
              "Text": "123456789012",
              "ShowText": true
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 200,
    "Height": 300,
    "SizeUnit": "Px"
  },
  "PagePadding": {
    "Left": 10,
    "Top": 10,
    "Right": 10,
    "Bottom": 10
  }
}
```

  


  


