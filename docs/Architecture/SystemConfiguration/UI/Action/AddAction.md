---
layout: doc
title: "AddAction"
position: 3
categories: 
tags: 
---

Действие добавления элемента в источник данных.

   

#### Description

* Открывает указанное представление.
* Если представление закрывается со статусом подтверждения, источник данных родительского представления обновляется.
* Если представление закрывается со статусом отмены, ничего не происходит.

   

#### Extends

|Name|Description|
|----|-----------|
| [[Command]]| Базовый тип действия, которое может быть вызвано из визуального представления.|

   

#### Methods

|Name|Description|
|----|-----------|
| | |

    

#### Events

|Name|Description|
|----|-----------|
| | |

   

#### Schema

```
{
  "id": "AddAction",
  "description": "Действие добавления элемента в источник данных",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Command"
  },
  "properties": {
    "View": {
      "description": "Ссылка на представление",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkView",
      "required": true
    },
    "DataSource": {
      "description": "Источник данных",
      "type": "string",
      "required": true
    }
  },
  "additionalProperties": false
}
```

     

 

