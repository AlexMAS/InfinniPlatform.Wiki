---
layout: default
title: PrintElementSection
position: 1
categories: 
tags: 
---

Блочный элемент печатного представления для группировки множества блочных элементов.

   

Сгруппировав несколько блочных элементов, можно установить им единые стилевые настройки или единый источник данных.

   

#### Type

object

   

#### Extends

[[PrintElementBlock]]

     

#### Schema

```
{
  "id": "PrintElementSection",
  "description": "Блочный элемент печатного представления для группировки множества блочных элементов",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlock"
  },
  "properties": {
    "Blocks": {
      "description": "Список блочных элементов печатного представления",
      "type": "array",
      "items": {
        "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBlockContainer"
      }
    }
  },
  "additionalProperties": false
}
```

    

#### Example

[[PrintElementSection.pdf]]

```
{
  "Blocks": [
    {
      "Section": {
        "TextAlignment": "Right",
        "Blocks": [
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Paragraph 1."
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
                    "Text": "Paragraph 2."
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
    "Left": 10,
    "Top": 10,
    "Right": 10,
    "Bottom": 10
  }
}
```

 

 

