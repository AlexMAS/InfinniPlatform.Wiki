---
layout: default
title: LinkLabel
position: 5
categories: 
tags: 
---

Элемент представления для отображения данных в виде текстовой метки со ссылкой.

   

#### Sketch

![](Link.png)

   

#### Methods

|Name|Description|
|----|-----------|
|GetHorizontalTextAlignment(): [[HorizontalTextAlignment]]|Возвращает горизонтальное выравнивание текста внутри элемента.|
|SetHorizontalTextAlignment([[HorizontalTextAlignment]] value)|Устанавливает горизонтальное выравнивание текста внутри элемента.|
| | |
|GetForeground(): [[TextStyle]]|Возвращает цвет текста.|
|SetForeground([[TextStyle]] value)|Устанавливает цвет текста.|
| | |
|GetBackground(): [[TextStyle]]|Возвращает цвет фона.|
|SetBackground([[TextStyle]] value)|Устанавливает цвет фона.|
| | |
|GetTextStyle(): [[TextStyle]]|Возвращает стиль текста.|
|SetTextStyle([[TextStyle]] value)|Устанавливает стиль текста.|
| | |
|GetTextTrimming(): boolean|Возвращает значение, определяющее, усекается ли текст многоточием при переполнении.|
|SetTextTrimming(boolean value)|Устанавливает значение, определяющее, усекается ли текст многоточием при переполнении.|
| | |
|GetTextWrapping(): boolean|Возвращает значение, определяющее, переносится ли текст на новую строчку при переполнении.|
|SetTextWrapping(boolean value)|Устанавливает значение, определяющее, переносится ли текст на новую строчку при переполнении.|
| | |
|GetLineCount(): int|Возвращает видимое количество строк.|
|SetLineCount(int value)|Устанавливает видимое количество строк.|
| | |
|GetDisplayFormat(): [[BaseFormat]]|Возвращает формат отображения данных.|
|SetDisplayFormat([[BaseFormat]] value)|Устанавливает формат отображения данных.|
| | |
|GetValue(): any|Возвращает значение.|
|SetValue(any value)|Устанавливает значение.|
| | |
|GetReference(): string|Возвращает ссылку.|
|SetReference(string value)|Устанавливает ссылку.|
| | |
|GetAction(): [[Command]]|Возвращает действие, выполняемое при нажатии на ссылку.|
|SetAction([[Command]] value)|Устанавливает действие, выполняемое при нажатии на ссылку.|

   

#### Events

|Name|Description|
|----|-----------|
|OnClick([[Context]] context, [[BaseMessage]] argument)|Возвращает или устанавливает обработчик события нажатия на ссылку.|

         

#### Schema

```
{
  "id": "LinkLabel",
  "description": "Элемент представления для отображения данных в виде текстовой метки со ссылкой",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
  },
  "properties": {
    "Foreground": {
      "description": "Цвет текста",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/ColorStyle",
      "default": "Black"
    },
    "Background": {
      "description": "Цвет фона",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/ColorStyle",
      "default": "Transparent"
    },
    "HorizontalTextAlignment": {
      "description": "Горизонтальное выравнивание текста внутри элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/HorizontalTextAlignment",
      "default": "Left"
    },
    "TextStyle": {
      "description": "Стиль текста",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/TextStyle",
      "default": "Body1"
    },
    "TextTrimming": {
      "description": "Усекается ли текст многоточием при переполнении",
      "type": "boolean",
      "default": true
    },
    "TextWrapping": {
      "description": "Переносится ли текст на новую строчку при переполнении",
      "type": "boolean",
      "default": true
    },
    "LineCount": {
      "description": "Видимое количество строк",
      "type": "integer"
    },
    "DisplayFormat": {
      "description": "Формат отображения значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    },
    "Value": {
      "description": "Привязка данных для значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    },
    "Reference": {
      "description": "Привязка данных для ссылки",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    },
    "Action": {
      "description": "Действие при нажатии на ссылку",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Action"
    },
    "OnClick": {
      "description": "Обработчик события нажатия на ссылку",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    }
  },
  "additionalProperties": false
}
```

   

#### Examples

```
{
  "Text": "Перейти",
  "Reference": "http://some"
}
```

 

 

