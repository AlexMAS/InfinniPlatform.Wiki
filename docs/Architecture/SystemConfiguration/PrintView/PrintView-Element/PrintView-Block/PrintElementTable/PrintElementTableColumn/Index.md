---
layout: default
title: "PrintElementTableColumn"
position: 0
categories: 
tags: 
---

Настройки столбца таблицы.

   

#### Type

object

   

#### Schema

```
{
  "id": "PrintElementTableColumn",
  "description": "Настройки столбца таблицы",
  "type": "object",
  "properties": {
    "Size": {
      "description": "Ширина столбца",
      "type": "number",
      "minimum": 0,
      "exclusiveMinimum": false
    },
    "SizeUnit": {
      "description": "Единица измерения ширины столбца",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/SizeUnit",
      "default": "Pt"
    },
    "Header": {
      "description": "Заголовок столбца",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTableCell"
    },
    "CellTemplate": {
      "description": "Шаблон ячеек столбца",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTableCell"
    }
  },
  "additionalProperties": false
}
```

 

 

