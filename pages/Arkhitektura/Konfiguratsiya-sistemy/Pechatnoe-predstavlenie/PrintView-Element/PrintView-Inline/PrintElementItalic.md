---
layout: default
title: PrintElementItalic
position: 3
categories: 
tags: 
---

Однострочный элемент печатного представления, текстовое содержимое которого отображается курсивом.

   

#### Type

object

   

#### Extends

[[PrintElementSpan]]

   

#### Schema

```
{
  "id": "PrintElementItalic",
  "description": "Однострочный элемент печатного представления, текстовое содержимое которого отображается курсивом",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementSpan"
  },
  "properties": {},
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementItalic.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Italic": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Phrase 1. "
                  }
                },
                {
                  "Run": {
                    "Text": "Phrase 2. "
                  }
                }
              ]
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

 

 

