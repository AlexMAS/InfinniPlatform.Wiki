---
layout: doc
title: "PrintElementBarcodeEan13"
position: 9
categories: 
tags: 
---

Однострочный элемент печатного представления для отображения штрих-кода в формате EAN13.

   

#### Type

object

   

#### Extends

[[PrintElementInline]]

   

#### Schema

```
{
  "id": "PrintElementBarcodeEan13",
  "description": "Однострочный элемент печатного представления для отображения штрих-кода в формате EAN13",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementInline"
  },
  "properties": {
    "Text": {
      "description": "Текст для кодирования",
      "type": "string",
      "pattern": "[0-9]+"
    },
    "ShowText": {
      "description": "Показывать ли текст в штрих-коде",
      "type": "boolean",
      "default": true
    },
    "SourceFormat": {
      "description": "Формат отображения значения источника данных",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    },
    "CalcCheckSum": {
      "description": "Автоматически рассчитывать контрольную сумму",
      "type": "boolean",
      "default": true
    },
    "WideBarRatio": {
      "description": "Относительная ширина штрихов в штрих-коде",
      "type": "number",
      "default": 2,
      "minimum": 2,
      "exclusiveMinimum": false
    },
    "Rotation": {
      "description": "Поворот изображения штрих-кода",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementRotation",
      "default": "Rotate0"
    }
  },
  "additionalProperties": false
}
```

   

#### Example

[[PrintElementBarcodeEan13.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "BarcodeEan13": {
              "Text": "123456789012"
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

 

 

