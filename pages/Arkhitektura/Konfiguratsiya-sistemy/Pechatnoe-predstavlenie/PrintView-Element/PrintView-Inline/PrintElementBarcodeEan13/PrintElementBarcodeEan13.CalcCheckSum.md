---
layout: default
title: PrintElementBarcodeEan13.CalcCheckSum
position: 1
categories: 
tags: 
---

Автоматически рассчитывать контрольную сумму.

   

#### Type

boolean

   

#### Example

[[PrintElementBarcodeEan13.CalcCheckSum.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "CalcCheckSum=false"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeEan13": {
              "Text": "1234567890128",
              "CalcCheckSum": false
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
              "Text": "CalcCheckSum=true"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeEan13": {
              "Text": "123456789012",
              "CalcCheckSum": true
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

  


  


