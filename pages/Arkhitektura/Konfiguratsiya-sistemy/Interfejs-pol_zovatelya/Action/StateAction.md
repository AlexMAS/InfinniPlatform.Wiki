---
layout: default
title: "StateAction"
position: 10
categories: 
tags: 
---

Действие изменения состояния текущего элемента источника данных.

   

#### Description

Изменяет состояние текущего элемента источника данных, используя модель переходов.

   

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
  "id": "StateAction",
  "description": "Действие изменения состояния текущего элемента источника данных",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Command"
  },
  "properties": {
    "Workflow": {
      "description": "Описание возможных переходов",
      "type": "object"
    },
    "Items": {
      "description": "Привязка данных для списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    }
  },
  "additionalProperties": false
}
```

     

 

