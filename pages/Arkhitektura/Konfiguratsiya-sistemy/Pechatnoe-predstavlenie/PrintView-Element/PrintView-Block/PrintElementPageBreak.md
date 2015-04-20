---
layout: default
title: PrintElementPageBreak
position: 6
categories: 
tags: 
---

Блочный элемент печатного представления для разрыва страницы.

   

#### Type

object

   

#### Extends

[[PrintElementBlock]]   

   

#### Schema

```
{
  "id": "PrintElementPageBreak",
  "description": "Блочный элемент печатного представления для разрыва страницы",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlock"
  },
  "properties": {},
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementPageBreak.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "Before page break."
            }
          }
        ]
      }
    },
    {
      "PageBreak": {}
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "After page break."
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

 

 

