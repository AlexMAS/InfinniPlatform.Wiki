---
layout: default
title: PrintElementLineBreak
position: 6
categories: 
tags: 
---

Однострочный элемент печатного представления для разрыва строки.

   

#### Type

object

   

#### Extends

[[PrintElementInline]]

   

#### Schema

```
{
  "id": "PrintElementLineBreak",
  "description": "Однострочный элемент печатного представления для разрыва строки",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementInline"
  },
  "properties": {},
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementLineBreak.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "Before line break. "
            }
          },
          {
            "LineBreak": {}
          },
          {
            "Run": {
              "Text": "After line break. "
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 200,
    "Height": 100,
    "SizeUnit": "Px"
  },
  "PagePadding": {
    "Left": 0,
    "Top": 0,
    "Right": 0,
    "Bottom": 0
  }
}
```

 

 

