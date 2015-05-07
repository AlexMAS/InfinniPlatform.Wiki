---
layout: doc
title: "DeleteItemAction"
position: 8
categories: 
tags: 
---

Действие удаления текущего элемента из коллекции источника данных.

   

#### Description

* Запрашивает у пользователя подтверждение удаления выделенного элемента указанной коллекции.
* Если пользователь подтвердил удаление, выделенный элемент указанной коллекции удаляется.
* Если пользователь не подтвердил удаление, ничего не происходит.

   

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
  "id": "DeleteItemAction",
  "description": "Действие удаления текущего элемента из коллекции источника данных",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Command"
  },
  "properties": {
    "Accept": {
      "description": "Нужно ли подтверждение удаления",
      "type": "boolean",
      "default": true
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

     

 

