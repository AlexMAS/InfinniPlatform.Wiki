---
layout: doc
title: "PrintElementUnderline"
position: 4
categories: 
tags: 
---

Однострочный элемент печатного представления, текстовое содержимое которого отображается с эффектом подчеркивания.

   

#### Type

object

   

#### Extends

[[PrintElementSpan]]

   

#### Schema

```
{
  "id": "PrintElementUnderline",
  "description": "Однострочный элемент печатного представления, текстовое содержимое которого отображается с эффектом подчеркивания",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementSpan"
  },
  "properties": {},
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementUnderline.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Underline": {
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

 

 

