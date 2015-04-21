---
layout: default
title: Label
position: 3
categories: 
tags: 
---

Элемент представления для отображения данных в виде текстовой метки.

   

#### Sketch

![](Label.png)

   

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

   

#### Events

|Name|Description|
|----|-----------|
| | |

    

#### Schema

```
{
  "id": "Label",
  "description": "Элемент представления для отображения данных в виде текстовой метки",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
  },
  "properties": {
    "HorizontalTextAlignment": {
      "description": "Горизонтальное выравнивание текста внутри элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/HorizontalTextAlignment",
      "default": "Left"
    },
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
    }
  },
  "additionalProperties": false
}
```

  

#### Examples

```
{
  "Text": "Фамилия"
}
```

```
{
  "Value": "Фамилия"
}
```

```
{
  "Text": {
    "PropertyBinding": {
      "DataSource": "MainDataSource",
      "Property": "LastName"
    }
  }
}
```

```
{
  "Value": {
    "PropertyBinding": {
      "DataSource": "MainDataSource",
      "Property": "LastName"
    }
  }
}
```

 

 

