---
layout: doc
title: "PrintElement"
position: 3
categories: 
tags: 
---

Элемент печатного представления.

   

#### Type

object

   

#### Schema

```
{
  "id": "PrintElement",
  "description": "Элемент печатного представления",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Наименование элемента",
      "type": "string",
      "minLength": 1
    },
    "Style": {
      "description": "Наименование стиля",
      "type": "string",
      "minLength": 1
    },
    "Font": {
      "description": "Настройки шрифта",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Font"
    },
    "Foreground": {
      "description": "Цвет содержимого",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Color"
    },
    "Background": {
      "description": "Цвет фона содержимого",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Color"
    },
    "TextCase": {
      "description": "Регистр символов текста",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTextCase"
    },
    "Visibility": {
      "description": "Видимость элемента печатного представления",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementVisibility",
      "default": "Source"
    },
    "Source": {
      "description": "Источник данных",
      "type": "string",
      "minLength": 1
    }
  },
  "additionalProperties": false
}
```

 

 

