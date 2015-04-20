---
layout: default
title: PrintElementSpan
position: 1
categories: 
tags: 
---

Однострочный элемент печатного представления для группировки множества однострочных элементов.

   

Сгруппировав несколько однострочных элементов, можно установить им единые стилевые настройки или единый источник данных.

   

#### Type

object

   

#### Extends

[[PrintElementInline]]

   

#### Schema

```
{
  "id": "PrintElementSpan",
  "description": "Однострочный элемент печатного представления для группировки множества однострочных элементов",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementInline"
  },
  "properties": {
    "Inlines": {
      "description": "Список однострочных элементов печатного представления",
      "type": "array",
      "items": {
        "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementInlineContainer"
      }
    }
  },
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementSpan.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Span": {
              "Font": {
                "Weight": "Bold"
              },
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

 

 

