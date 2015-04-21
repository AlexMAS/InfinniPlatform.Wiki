---
layout: default
title: "Element"
position: 3
categories: 
tags: 
---

Базовый тип для визуальных элементов представления.

 

Данный раздел описывает базовый API и метаданные для всех типов элементов представления.

   

|Name|Description|
|----|-----------|
|GetView(): [[View]]|Возвращает родительское представление.|
|GetName(): string|Возвращает наименование элемента.|
|SetName(string value)|Устанавливает наименование элемента.|
|GetText(): string|Возвращает текст заголовка элемента.|
|SetText(string value)|Устанавливает текст заголовка элемента.|
|GetEnabled(): boolean|Возвращает значение, определяющее, возможен ли доступ к элементу.|
|SetEnabled(boolean value)|Устанавливает значение, определяющее, возможен ли доступ к элементу.|
|GetVisible(): boolean|Возвращает значение, определяющее, отображается ли элемент в интерфейсе.|
|SetVisible(boolean value)|Устанавливает значение, определяющее, отображается ли элемент в интерфейсе.|
|GetVerticalAlignment(): [[ElementVerticalAlignment]]|Возвращает вертикальное выравнивание в родительском элементе.|
|SetVerticalAlignment([[ElementVerticalAlignment]] value)|Устанавливает вертикальное выравнивание в родительском элементе.|
|GetHorizontalAlignment(): [[ElementHorizontalAlignment]]|Возвращает горизонтальное выравнивание в родительском элементе.|
|SetHorizontalAlignment([[ElementHorizontalAlignment]] value)|Устанавливает горизонтальное выравнивание в родительском элементе.|
|GetChildElements(): array<>|Возвращает список дочерних элементов.|

|Name|Description|
|----|-----------|
|OnLoaded([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что элемент загружен.|
|OnGotFocus([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что элемент получил фокус ввода.|
|OnLostFocus([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что элемент потерял фокус ввода.|

  

```
{
  "id": "Element",
  "description": "Базовый тип для визуальных элементов представления",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Наименование элемента",
      "type": "string"
    },
    "Text": {
      "description": "Текст заголовка элемента",
      "type": "string"
    },
    "Enabled": {
      "description": "Возможен ли доступ к элементу",
      "type": "boolean",
      "default": true
    },
    "Visible": {
      "description": "Отображается ли элемент в интерфейсе",
      "type": "boolean",
      "default": true
    },
    "VerticalAlignment": {
      "description": "Вертикальное выравнивание в родительском элементе",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/ElementVerticalAlignment",
      "default": "Stretch"
    },
    "HorizontalAlignment": {
      "description": "Горизонтальное выравнивание в родительском элементе",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/ElementHorizontalAlignment",
      "default": "Stretch"
    },
    "OnLoaded": {
      "description": "Обработчик события о том, что элемент загружен",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "OnGotFocus": {
      "description": "Обработчик события о том, что элемент получил фокус ввода",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "OnLostFocus": {
      "description": "Обработчик события о том, что элемент потерял фокус ввода",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    }
  },
  "additionalProperties": false
}
```

 

 

