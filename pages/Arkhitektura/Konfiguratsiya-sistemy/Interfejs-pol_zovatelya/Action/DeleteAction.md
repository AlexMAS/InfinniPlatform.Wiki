---
layout: default
title: DeleteAction
position: 7
categories: 
tags: 
---

Действие удаления текущего элемента из источника данных.

   

#### Description

* Запрашивает у пользователя подтверждение удаления выделенного элемента источника данных родительского представления.
* Если пользователь подтвердил удаление, выделенный элемент источника данных родительского представления удаляется.
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
  "id": "DeleteAction",
  "description": "Действие удаления текущего элемента из источника данных",
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
    "DataSource": {
      "description": "Источник данных",
      "type": "string",
      "required": true
    }
  },
  "additionalProperties": false
}
```

     

 

