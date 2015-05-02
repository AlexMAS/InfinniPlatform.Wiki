---
layout: default
title: "Size"
position: 
categories: 
tags: 
---

Размеры прямоугольника.

   

#### Type

object

  

#### Schema

```
{
  "id": "Size",
  "description": "Размеры прямоугольника",
  "type": "object",
  "properties": {
    "Width": {
      "description": "Ширина",
      "type": "number",
      "minimum": 0,
      "exclusiveMinimum": false
    },
    "Height": {
      "description": "Высота",
      "type": "number",
      "minimum": 0,
      "exclusiveMinimum": false
    },
    "SizeUnit": {
      "description": "Единица измерения размеров",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/SizeUnit",
      "default": "Pt"
    }
  },
  "additionalProperties": false
}
```

   

#### Example

```
{
  "Width": 10,
  "Height": 20,
  "SizeUnit": "Cm"
}
```

 

 

