---
layout: doc
title: "DataGridColumn"
position: 
categories: 
tags: 
---

Колонка таблицы.

   

#### Methods

|Name|Description|
|----|-----------|
|GetName(): string|Возвращает наименование колонки.|
| | |
|GetText(): string|Возвращает текст заголовка колонки.|
|SetText(string)|Устанавливает текст заголовка колонки.|
| | |
|GetImage(): string|Возвращает изображение заголовка колонки.|
|SetImage(string)|Устанавливает изображение заголовка колонки.|
| | |
|GetVisible(): boolean|Возвращает значение, определяющее, отображается ли колонка в таблице.|
|SetVisible(boolean)|Устанавливает значение, определяющее, отображается ли колонка в таблице.|

   

#### Events

|Name|Description|
|----|-----------|
| | |

   

#### Schema

```
{
  "id": "DataGridColumn",
  "description": "Колонка таблицы",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Наименование колонки",
      "type": "string"
    },
    "Text": {
      "description": "Текст заголовка колонки",
      "type": "string"
    },
    "Image": {
      "description": "Изображение заголовка колонки",
      "type": "string"
    },
    "Resizable": {
      "description": "Разрешено ли изменение размеров колонки",
      "type": "boolean",
      "default": true
    },
    "Visible": {
      "description": "Отображается ли колонка в таблице",
      "type": "boolean",
      "default": true
    },
    "DisplayProperty": {
      "description": "Свойство элемента источника данных, которое хранит значение для отображения",
      "type": "string"
    },
    "ItemFormat": {
      "description": "Формат отображения элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    },
    "ItemTemplate": {
      "description": "Шаблон отображения элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/VisualElement"
    }
  },
  "additionalProperties": false
}
```

   

#### Examples

```
{
  "Name": "Column1",
  "Text": "Фамилия",
  "Property": "LastName"
}
```

 

 

