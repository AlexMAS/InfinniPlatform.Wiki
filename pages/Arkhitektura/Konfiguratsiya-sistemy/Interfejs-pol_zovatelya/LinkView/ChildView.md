---
layout: default
title: ChildView
position: 6
categories: 
tags: 
---

Ссылка на дочернее представление.

   

Список дочерних представлений объявляются в свойстве метаданных [[View]].ChildViews.

   

#### Schema

```
{
  "id": "ChildView",
  "description": "Ссылка на дочернее представление",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/BaseLinkView"
  },
  "properties": {
    "Name": {
      "description": "Наименование ссылки на представление",
      "type": "string",
      "required": true
    }
  },
  "additionalProperties": false
}
```

 

 

