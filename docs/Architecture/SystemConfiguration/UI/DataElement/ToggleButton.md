---
layout: doc
title: "ToggleButton"
position: 8
categories: 
tags: 
---

Элемент представления для отображения и редактирования логического значения в виде переключателя. Может быть заменен элементом [[CheckBox]].

   

#### Scketch

![](ToggleButton_01.png)

   

#### Methods

|Name|Description|
|----|-----------|
|GetValue(): boolean|Возвращает значение.|
|SetValue(boolean value)|Устанавливает значение.|
| | |
|GetTextOn(): string|Возвращает текст на включенное состояние.|
|SetTextOn(string value)|Устанавливает текст на включенное состояние.|
| | |
|GetTextOff(): string|Возвращает текст на выключенное состояние.|
|SetTextOff(string value)|Устанавливает текст на выключенное состояние.|

   

#### Events

|Name|Description|
|----|-----------|
|OnValueChanged([[Context]] context, [[DataSourceMessage]] argument)|Возвращает или устанавливает обработчик события изменения значения.|

   

#### Schema

```
{
  "id": "ToggleButton",
  "description": "Элемент представления для отображения и редактирования логического значения в виде переключателя",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
  },
  "properties": {
    "Value": {
      "description": "Привязка данных для значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    },
    "TextOn": {
      "description": "Текст на включенное состояние",
      "type": "string"
    },
    "TextOff": {
      "description": "Текст на выключенное состояние",
      "type": "string"
    },
    "OnValueChanged": {
      "description": "Обработчик события изменения значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    }
  },
  "additionalProperties": false
}
```

    

#### Examples

```
{
  "Text": "Подписаться на новости",
  "TextOn": "Да",
  "TextOff": "Нет",
  "Value": {
    "PropertyBinding": {
      "DataSource": "MainDataSource",
      "Property": "IsSubscribe"
    }
  }
}
```

 

 

