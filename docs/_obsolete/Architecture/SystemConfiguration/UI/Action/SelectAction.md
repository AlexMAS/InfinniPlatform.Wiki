---
layout: doc
title: "SelectAction"
position: 13
categories: 
tags: 
---

Действие открытия представления для выбора данных.

   

#### Description

* Открывает указанное представление.
* Если представление закрывается со статусом подтверждения, значение из источника записывается в приемник.
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
  "id": "SelectAction",
  "description": "Действие открытия представления для выбора данных",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Command"
  },
  "properties": {
    "View": {
      "description": "Ссылка на представление",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkView"
    },
    "SourceValue": {
      "description": "Источник выбранного значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    },
    "DestinationValue": {
      "description": "Приемник выбранного значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    }
  },
  "additionalProperties": false
}
```

     

 

