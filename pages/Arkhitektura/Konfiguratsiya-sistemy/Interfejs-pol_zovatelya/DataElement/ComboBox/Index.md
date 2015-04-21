---
layout: default
title: ComboBox
position: 9
categories: 
tags: 
---

Элемент представления для поиска и выбора одного или нескольких значений.

Элемент может работать в двух режимах: выбор одного значения, выбор нескольких значений (см. рис.).

   

#### Scketch



    



      



           

#### Methods

|Name|Description|
|----|-----------|
|GetHorizontalTextAlignment(): [[HorizontalTextAlignment]]|Возвращает горизонтальное выравнивание текста внутри элемента.|
|SetHorizontalTextAlignment([[HorizontalTextAlignment]] value)|Устанавливает горизонтальное выравнивание текста внутри элемента.|
| | |
|GetVerticalTextAlignment(): [[VerticalTextAlignment]]|Возвращает вертикальное выравнивание текста внутри элемента.|
|SetVerticalTextAlignment([[VerticalTextAlignment]] value)|Устанавливает вертикальное выравнивание текста внутри элемента.|
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
|GetDisplayFormat(): [[BaseFormat]]|Возвращает формат отображения значения.|
|SetDisplayFormat([[BaseFormat]] value)|Устанавливает формат отображения значения.|
| | |
|GetHintText(): string|Возвращает текст подсказки для ввода значения.|
|SetHintText(string value)|Устанавливает текст подсказки для ввода значения.|
| | |
|GetErrorText(): string|Возвращает текст ошибки введенного значения.|
|SetErrorText(string value)|Устанавливает текст ошибки введенного значения.|
| | |
|GetLabelText(): string|Возвращает текст метки введенного значения.|
|SetLabelText(string value)|Устанавливает текст метки введенного значения.|
| | |
|GetLabelFloating(): boolean|Возвращает значение, определяющее, является ли метка введенного значения плавающей.|
|SetLabelFloating(boolean value)|Устанавливает значение, определяющее, является ли метка введенного значения плавающей.|
| | |
|GetAutocomplete(): [[Autocomplete]]|Возвращает способ автозаполнения при вводе с клавиатуры.|
|SetAutocomplete([[Autocomplete]] value)|Устанавливает способ автозаполнения при вводе с клавиатуры.|
| | |
|GetSelectInDialog(): boolean|Возвращает значение, определяющее, производить ли выбор в диалоге.|
|SetSelectInDialog(boolean value)|Устанавливает значение, определяющее, производить ли выбор в диалоге.|

   

#### Events

|Name|Description|
|----|-----------|
| | |

    

#### Schema

```
{
  "id": "ComboBox",
  "description": "Элемент представления для выбора одного или нескольких значений",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/BaseListElement"
  },
  "properties": {
    "HorizontalTextAlignment": {
      "description": "Горизонтальное выравнивание текста внутри элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/HorizontalTextAlignment",
      "default": "Left"
    },
    "VerticalTextAlignment": {
      "description": "Вертикальное выравнивание текста внутри элемента",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/VerticalTextAlignment",
      "default": "Center"
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
    "DisplayFormat": {
      "description": "Формат отображения значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    },
    "HintText": {
      "description": "Текст подсказки для ввода значения",
      "type": "string"
    },
    "ErrorText": {
      "description": "Текст ошибки введенного значения",
      "type": "string"
    },
    "LabelText": {
      "description": "Текст метки введенного значения",
      "type": "string"
    },
    "LabelFloating": {
      "description": "Является ли метка введенного значения плавающей",
      "type": "boolean",
      "default": false
    },
    "Autocomplete": {
      "description": "Способ автозаполнения при вводе с клавиатуры",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/Autocomplete",
      "default": "None"
    },
    "SelectInDialog": {
      "description": "Производить выбор значения в диалоге",
      "type": "boolean",
      "default": false
    }
  },
  "additionalProperties": false
}
```

   

#### Examples

```
{
  "LabelText": "Responsible",
  "LabelFloating": true,
  "Autocomplete": "Server",
  "Value": {
    "PropertyBinding": {
      "DataSource": "MainDataSource",
      "Property": "Responsible"
    }
  },
  "Items": {
    "PropertyBinding": {
      "DataSource": "CharactersDataSource"
    }
  }
}
```

 

  
