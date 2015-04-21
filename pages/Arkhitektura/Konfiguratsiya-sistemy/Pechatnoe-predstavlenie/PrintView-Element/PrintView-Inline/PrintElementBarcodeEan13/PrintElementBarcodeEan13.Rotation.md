---
layout: default
title: "PrintElementBarcodeEan13.Rotation"
position: 3
categories: 
tags: 
---

Поворот изображения штрих-кода.

   

#### Type

[[PrintElementRotation]]  


   

#### Example

[[PrintElementBarcodeEan13.Rotation.pdf]]

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
            "BarcodeEan13": {
              "Text": "123456789012",
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
            "BarcodeEan13": {
              "Text": "123456789012",
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
            "BarcodeEan13": {
              "Text": "123456789012",
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
            "BarcodeEan13": {
              "Text": "123456789012",
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

  


  


