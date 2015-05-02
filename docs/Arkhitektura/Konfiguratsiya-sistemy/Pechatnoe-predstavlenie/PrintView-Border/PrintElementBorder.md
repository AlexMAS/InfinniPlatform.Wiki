---
layout: default
title: "PrintElementBorder"
position: 
categories: 
tags: 
---

Границы элемента печатного представления.

   

#### Type

object

   

#### Schema

```
{
  "id": "PrintElementBorder",
  "description": "Границы элемента печатного представления",
  "type": "object",
  "properties": {
    "Thickness": {
      "description": "Толщина границ",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Thickness"
    },
    "Color": {
      "description": "Цвет границ",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Color",
      "default": "Transparent"
    }
  },
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementBorder.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Border": {
          "Thickness": {
            "Left": 1,
            "Top": 2,
            "Right": 4,
            "Bottom": 8,
            "SizeUnit": "Px"
          },
          "Color": "Blue"
        },
        "Padding": {
          "All": 10
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Left: 1px, Top: 2px, Right: 4px, Bottom: 8px, Color: Blue"
            }
          }
        ]
      }
    }
  ],
  "Font": {
    "Size": 8
  },
  "PageSize": {
    "Width": 400,
    "Height": 150,
    "SizeUnit": "Px"
  }
}
```

 

 

