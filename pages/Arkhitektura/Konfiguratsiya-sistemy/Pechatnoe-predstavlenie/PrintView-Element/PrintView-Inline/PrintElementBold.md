---
layout: default
title: PrintElementBold
position: 2
categories: 
tags: 
---

Однострочный элемент печатного представления, текстовое содержимое которого отображается полужирным шрифтом.

   

#### Type

object

   

#### Extends

[[PrintElementSpan]]

   

#### Schema

```
{
  "id": "PrintElementBold",
  "description": "Однострочный элемент печатного представления, текстовое содержимое которого отображается полужирным шрифтом",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementSpan"
  },
  "properties": {},
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementBold.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Bold": {
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

 

 

