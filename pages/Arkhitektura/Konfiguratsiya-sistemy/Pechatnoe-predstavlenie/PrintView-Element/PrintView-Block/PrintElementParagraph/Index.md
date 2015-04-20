---
layout: default
title: PrintElementParagraph
position: 2
categories: 
tags: 
---

Блочный элемент печатного представления для группировки однострочных элементов в абзац.

   

#### Type

object

   

#### Extends

[[PrintElementBlock]]

   

#### Schema

```
{
  "id": "PrintElementParagraph",
  "description": "Блочный элемент печатного представления для группировки однострочных элементов в абзац",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlock"
  },
  "properties": {
    "IndentSize": {
      "description": "Отступ первой строки",
      "type": "number",
      "default": 0,
      "minimum": 0,
      "exclusiveMinimum": false
    },
    "IndentSizeUnit": {
      "description": "Единица измерения отступа первой строки",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/SizeUnit",
      "default": "Pt"
    },
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

[[PrintElementParagraph.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Margin": {
          "Top": 5,
          "Bottom": 5
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Paragraph 11. "
            }
          },
          {
            "Run": {
              "Text": "Paragraph 12. "
            }
          },
          {
            "Run": {
              "Text": "Paragraph 13. "
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Margin": {
          "Top": 5,
          "Bottom": 5
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Paragraph 21. "
            }
          },
          {
            "Run": {
              "Text": "Paragraph 22. "
            }
          },
          {
            "Run": {
              "Text": "Paragraph 23. "
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

 

 

