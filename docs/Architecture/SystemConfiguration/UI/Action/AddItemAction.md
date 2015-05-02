---
layout: default
title: "AddItemAction"
position: 4
categories: 
tags: 
---

Действие добавления элемента в источник данных.

   

#### Description

* Открывает указанное представление.
* Если представление закрывается со статусом подтверждения, в указанную коллекцию добавляется элемент.
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
  "id": "AddItemAction",
  "description": "Действие добавления элемента в коллекцию источника данных",
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
    "Items": {
      "description": "Привязка данных для списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding",
      "required": true
    }
  },
  "additionalProperties": false
}
```

     

 

