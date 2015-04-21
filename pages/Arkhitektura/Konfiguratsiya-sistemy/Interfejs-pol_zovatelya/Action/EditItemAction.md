---
layout: default
title: EditItemAction
position: 6
categories: 
tags: 
---

Действие редактирования текущего элемента коллекции источника данных.

   

#### Description

* Открывает указанное представление и предает ему выделенный элемент указанной коллекции.
* Если представление закрывается со статусом подтверждения, в указанной коллекции обновляется элемент.
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
  "id": "EditItemAction",
  "description": "Действие редактирования текущего элемента коллекции источника данных",
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

     

 

