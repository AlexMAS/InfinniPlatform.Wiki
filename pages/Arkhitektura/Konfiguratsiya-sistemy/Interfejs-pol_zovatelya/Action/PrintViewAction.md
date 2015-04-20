---
layout: default
title: PrintViewAction
position: 15
categories: 
tags: 
---

Действие открытия печатного представления ([[PrintView]]).

   

#### Description

Отображает печатное представления для указанного источника данных.

   

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
  "id": "PrintViewAction",
  "description": "Действие открытия печатного представления",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Command"
  },
  "properties": {
    "PrintViewId": {
      "description": "Идентификатор печатного представления",
      "type": "string"
    },
    "PrintViewType": {
      "description": "Тип печатного представления",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/PrintViewType",
      "default": "ObjectView"
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

     

 

