---
layout: default
title: "PrintElementBarcodeQr.ShowText"
position: 0
categories: 
tags: 
---

Показывать ли текст в штрих-коде.

   

#### Type

boolean

   

#### Example

[[PrintElementBarcodeQr.ShowText.pdf]]  


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
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
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
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "ShowText": true
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 200,
    "Height": 400,
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

  


  


