---
layout: default
title: PrintElementInline
position: 5
categories: 
tags: 
---

Однострочный элемент печатного представления.

   

#### Type

object

   

#### Extends

[[PrintElement]]

   

#### Schema

```
{
  "id": "PrintElementInline",
  "description": "Однострочный элемент печатного представления",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElement"
  },
  "properties": {
    "TextDecoration": {
      "description": "Оформление текста",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintElementTextDecoration"
    }
  },
  "additionalProperties": false
}
```

 

 

