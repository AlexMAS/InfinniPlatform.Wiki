---
layout: default
title: "PrintElementBarcodeQr.ErrorCorrection"
position: 1
categories: 
tags: 
---

Уровень защиты от ошибок.

   

#### Type

[[PrintElementBarcodeQrErrorCorrection]]  


   

#### Example

[[PrintElementBarcodeQr.ErrorCorrection.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "ErrorCorrection=Low"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "ErrorCorrection": "Low"
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
              "Text": "ErrorCorrection=Medium"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "ErrorCorrection": "Medium"
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
              "Text": "ErrorCorrection=Quartile"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "ErrorCorrection": "Quartile"
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
              "Text": "ErrorCorrection=High"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "ErrorCorrection": "High"
            }
          }
        ]
      }
    }
  ],
  "PagePadding": {
    "Left": 10,
    "Top": 10,
    "Right": 10,
    "Bottom": 10
  }
}
```

  


  


