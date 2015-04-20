---
layout: default
title: PrintElementBlock
position: 4
categories: 
tags: 
---

Блочный элемент печатного представления.

   

#### Type

object

   

#### Extends

[[PrintElementVisibility]]

   

#### Schema

```
{
  "id": "PrintElementBlock",
  "description": "Блочный элемент печатного представления",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElement"
  },
  "properties": {
    "Border": {
      "description": "Границы элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementBorder"
    },
    "Margin": {
      "description": "Отступ от края элемента до родительского элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Thickness"
    },
    "Padding": {
      "description": "Отступ от края элемента до содержимого элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Thickness"
    },
    "TextAlignment": {
      "description": "Горизонтальное выравнивание текста элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTextAlignment"
    }
  },
  "additionalProperties": false
}
```

 

 

