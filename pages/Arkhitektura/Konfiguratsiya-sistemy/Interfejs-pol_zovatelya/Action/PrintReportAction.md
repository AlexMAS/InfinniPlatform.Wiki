---
layout: default
title: PrintReportAction
position: 14
categories: 
tags: 
---

Действие открытия отчета.

   

#### Description

Открывает представление и отображает в нем указанный отчет.

   

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
  "id": "PrintReportAction",
  "description": "Действие открытия отчета",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Command"
  },
  "properties": {
    "ConfigId": {
      "description": "Идентификатор конфигурации",
      "type": "string",
      "required": true
    },
    "ReportId": {
      "description": "Идентификатор отчета",
      "type": "string",
      "required": true
    },
    "Parameters": {
      "description": "Список значений параметров отчета",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "Name": {
            "description": "Наименование параметра отчета",
            "type": "string",
            "required": true
          },
          "Value": {
            "description": "Привязка данных текущего представления на параметр отчета",
            "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding",
            "required": true
          }
        }
      }
    }
  },
  "additionalProperties": false
}
```

     

 

