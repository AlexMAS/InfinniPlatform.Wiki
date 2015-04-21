---
layout: default
title: OpenViewAction
position: 12
categories: 
tags: 
---

Действие открытия представления.

   

#### Description

Открывает указанное представление.

   

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
  "id": "OpenViewAction",
  "description": "Действие открытия представления",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Command"
  },
  "properties": {
    "View": {
      "description": "Ссылка на представление",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkView",
      "required": true
    }
  },
  "additionalProperties": false
}
```

     

 

