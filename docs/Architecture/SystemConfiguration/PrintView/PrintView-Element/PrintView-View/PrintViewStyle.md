---
layout: doc
title: "PrintViewStyle"
position: 
categories: 
tags: 
---

Стиль печатного представления.

   

Зачастую требуется, чтобы печатное представление было выполнено в одном стилевом решении. Для этих целей метаданные печатного представления позволяют задать список стилей ([[PrintView.Styles]]) и ссылаться на них на уровне отдельных элементов ([[PrintElement.Style]]). В итоге, структура самого документа не будет перегружена настройками форматирования (шрифты, отступы и т.п.), а настройки стилевого оформления будут сосредоточены в одном месте.

   

#### Type

object

   

#### Schema

```
{
  "id": "PrintViewStyle",
  "description": "Стиль печатного представления",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Наименование стиля",
      "type": "string",
      "minLength": 1,
      "required": true
    },
    "Font": {
      "description": "Настройки шрифта элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Font"
    },
    "Foreground": {
      "description": "Цвет содержимого элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Color"
    },
    "Background": {
      "description": "Цвет фона содержимого элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Color"
    },
    "TextCase": {
      "description": "Регистр символов текста элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTextCase"
    },
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
    },
    "TextDecoration": {
      "description": "Оформление текста элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTextDecoration"
    }
  },
  "additionalProperties": false
}
```

 

 

