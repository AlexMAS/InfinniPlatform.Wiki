---
layout: default
title: PrintElementBarcodeQr.Rotation
position: 2
categories: 
tags: 
---

Поворот изображения штрих-кода.

   

#### Type

[[PrintElementRotation]]  


   

#### Example

[[PrintElementBarcodeQr.Rotation.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "Rotation=Rotate0"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "Rotation": "Rotate0"
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
              "Text": "Rotation=Rotate90"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "Rotation": "Rotate90"
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
              "Text": "Rotation=Rotate180"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "Rotation": "Rotate180"
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
              "Text": "Rotation=Rotate270"
            }
          },
          {
            "LineBreak": {}
          },
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions",
              "Rotation": "Rotate270"
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

  


  


