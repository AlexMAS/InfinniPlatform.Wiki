---
layout: default
title: BaseLinkView
position: 0
categories: 
tags: 
---

Базовый тип для ссылки на представление.

Данный раздел описывает базовый API и метаданные для всех типов ссылок на представление.

   

#### Methods

|Name|Description|
|----|-----------|
|GetOpenMode(): [[OpenMode]]|Возвращает способ открытия представления.|
|SetOpenMode([[OpenMode]] value)|Устанавливает способ открытия представления.|
| | |
|GetContainer(): string|Возвращает имя контейнера для открытия представления.|
|SetContainer(string value)|Устанавливает имя контейнера для открытия представления.|
| | |
|CreateView(): [[View]]|Создает представление.|

    

#### Schema

```
{
  "id": "BaseLinkView",
  "description": "Базовый тип для ссылки на представление",
  "type": "object",
  "properties": {
    "Text": {
      "description": "Текст заголовка представления",
      "type": "string"
    },
    "OpenMode": {
      "description": "Способ открытия представления",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/OpenMode",
      "default": "Application"
    },
    "Container": {
      "description": "Имя контейнера для открытия представления",
      "type": "string",
      "default": "MainContainer"
    },
    "Parameters": {
      "description": "Правила передачи параметров в открываемое представление",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "Name": {
            "description": "Наименование параметра открываемого представления",
            "type": "string",
            "required": true
          },
          "Value": {
            "description": "Значение параметра открываемого представления",
            "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding",
            "required": true
          }
        }
      }
    }
  }
}
```

 

 

