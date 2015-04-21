---
layout: default
title: PrintElementRun
position: 7
categories: 
tags: 
---

Однострочный элемент печатного представления для вывода неформатированного текста.

   

#### Type

object

   

#### Extends

[[PrintElementInline]]

    

#### Schema

```
{
  "id": "PrintElementRun",
  "description": "Однострочный элемент печатного представления для вывода неформатированного текста",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementInline"
  },
  "properties": {
    "Text": {
      "description": "Текст",
      "type": "string"
    },
    "SourceFormat": {
      "description": "Формат отображения значения источника данных",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    }
  },
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementRun.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
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

 

 

