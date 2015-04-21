---
layout: default
title: PrintElementBarcodeEan13.WideBarRatio
position: 2
categories: 
tags: 
---

Относительная ширина штрихов в штрих-коде.

   

#### Type

number

    

#### Example

[[PrintElementBarcodeEan13.WideBarRatio.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "WideBarRatio=2"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeEan13": {
              "Text": "123456789012",
              "WideBarRatio": 2
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
              "Text": "WideBarRatio=4"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeEan13": {
              "Text": "123456789012",
              "WideBarRatio": 4
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

  


  


