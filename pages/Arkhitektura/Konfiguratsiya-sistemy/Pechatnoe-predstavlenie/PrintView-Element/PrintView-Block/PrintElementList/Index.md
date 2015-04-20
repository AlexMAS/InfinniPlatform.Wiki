---
layout: default
title: PrintElementList
position: 3
categories: 
tags: 
---

Блочный элемент печатного представления для отображения списка.

   

#### Type

object

   

#### Extends

[[PrintElementBlock]]

   

#### Schema

```
{
  "id": "PrintElementList",
  "description": "Блочный элемент печатного представления для отображения списка",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlock"
  },
  "properties": {
    "StartIndex": {
      "description": "Индекс первого элемента списка",
      "type": "integer",
      "default": 1
    },
    "MarkerStyle": {
      "description": "Стиль маркера элементов списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementListMarkerStyle",
      "default": "Disc"
    },
    "MarkerOffsetSize": {
      "description": "Отступ содержимого элемента от края маркера",
      "type": "number",
      "default": 0,
      "minimum": 0,
      "exclusiveMinimum": false
    },
    "MarkerOffsetSizeUnit": {
      "description": "Единица измерения отступа содержимого элемента от края маркера",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/SizeUnit",
      "default": "Pt"
    },
    "ItemTemplate": {
      "description": "Шаблон элементов списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlockContainer"
    },
    "Items": {
      "description": "Список элементов",
      "type": "array",
      "items": {
        "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementSection"
      }
    }
  },
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementList.pdf]]

```
{
  "Blocks": [
    {
      "List": {
        "MarkerStyle": "Decimal",
        "Items": [
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Item 1"
                  }
                }
              ]
            }
          },
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Item 2"
                  }
                }
              ]
            }
          },
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Item 3"
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
    "Width": 400,
    "Height": 200,
    "SizeUnit": "Px"
  },
  "PagePadding": {
    "Left": 1,
    "Top": 1,
    "Right": 1,
    "Bottom": 1,
    "SizeUnit": "Cm"
  }
}
```

 

 

