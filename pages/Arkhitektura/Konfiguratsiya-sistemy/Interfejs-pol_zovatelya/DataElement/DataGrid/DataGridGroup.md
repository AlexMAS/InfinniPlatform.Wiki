---
layout: default
title: DataGridGroup
position: 
categories: 
tags: 
---

Группа таблицы.

   

#### Sketch

![](DataGrid_SingleSelect_Group.png)   ![](DataGrid_MultiSelect_Group.png)

   

#### Methods

|Name|Description|
|----|-----------|
|GetValueProperty(): string|Возвращает свойство элемента источника данных, которое используется для группировки.|
|SetValueProperty(string value)|Устанавливает свойство элемента источника данных, которое используется для группировки.|

   

#### Events

|Name|Description|
|----|-----------|
| | |

   

#### Schema

```
{
  "id": "DataGridGroup",
  "description": "Группа таблицы",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Наименование группы",
      "type": "string"
    },
    "ValueProperty": {
      "description": "Свойство элемента источника данных, которое используется для группировки",
      "type": "string",
      "required": true
    }
  }
}
```

   

#### Examples

```
{
  "ValueProperty": "Country"
}
```

 

 

