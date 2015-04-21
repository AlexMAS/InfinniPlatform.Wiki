---
layout: default
title: "PrintElementLine"
position: 5
categories: 
tags: 
---

Блочный элемент печатного представления для отображения горизонтальной линии.

   

#### Type

object

   

#### Extends

[[PrintElementBlock]]

   

#### Schema

```
{
  "id": "PrintElementLine",
  "description": "Блочный элемент печатного представления для отображения горизонтальной линии",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlock"
  },
  "properties": {},
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementLine.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "Before line."
            }
          }
        ]
      }
    },
    {
      "Line": {}
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "After line."
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 400,
    "Height": 200,
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

 

 

