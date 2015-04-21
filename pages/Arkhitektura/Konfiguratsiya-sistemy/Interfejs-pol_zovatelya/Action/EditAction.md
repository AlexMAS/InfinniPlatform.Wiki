---
layout: default
title: EditAction
position: 5
categories: 
tags: 
---

Действие редактирования текущего элемента источника данных.

   

#### Description

* Открывает указанное представление и передает ему выделенный элемент источника данных родительского представления.
* Если представление закрывается со статусом подтверждения, источник данных родительского представления обновляется.
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
  "id": "EditAction",
  "description": "Действие редактирования текущего элемента источника данных",
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

     

 

