---
layout: default
title: PrintElementBarcodeQr
position: 10
categories: 
tags: 
---

Однострочный элемент печатного представления для отображения штрих-кода в формате QR.

   

#### Type

object

   

#### Extends

[[PrintElementInline]]

   

#### Schema

```
{
  "id": "PrintElementBarcodeQr",
  "description": "Однострочный элемент печатного представления для отображения штрих-кода в формате QR",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementInline"
  },
  "properties": {
    "Text": {
      "description": "Текст для кодирования",
      "type": "string",
      "minLength": 1
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
    "ErrorCorrection": {
      "description": "Уровень защиты от ошибок",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBarcodeQrErrorCorrection",
      "default": "Low"
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

[[PrintElementBarcodeQr.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "BarcodeQr": {
              "Text": "Infinnity Solutions"
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 300,
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

 

 

