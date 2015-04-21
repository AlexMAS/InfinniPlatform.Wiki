---
layout: default
title: DataSourceMessage
position: 2
categories: 
tags: 
---

Тело сообщения для событий, связанных с источником данных.

   

#### Schema

```
{
  "id": "DataSourceMessage",
  "description": "Тело сообщения для событий, связанных с источником данных",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/BaseMessage"
  },
  "properties": {
    "DataSource": {
      "description": "Наименование источника данных",
      "type": "string",
      "required": true
    },
    "Property": {
      "description": "Путь к свойству элемента источника данных",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```

 

 

