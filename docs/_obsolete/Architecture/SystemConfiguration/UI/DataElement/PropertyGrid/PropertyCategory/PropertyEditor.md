---
layout: doc
title: "PropertyEditor"
position: 
categories: 
tags: 
---

Описание способа отображения и редактирования свойства объекта.

 

|Name|Description|
|----|-----------|
|GetText(): string|Возвращает текст заголовка свойства.|
|SetText(string)|Устанавливает текст заголовка свойства.|
|GetProperty(): string|Возвращает свойство элемента источника данных.|
|GetEditor(): [[DataElement]]|Возвращает элемент для отображения и редактирования свойства.|

|Name|Description|
|----|-----------|
| | |

    

```
{
	"id": "PropertyEditor",
	"description": "Описание способа отображения и редактирования свойства объекта",
	"type": "object",
	"properties": {
		"Text": {
			"description": "Текст заголовка свойства",
			"type": "string"
		},
		"Property": {
			"description": "Свойство элемента источника данных",
			"type": "string",
			"required": true
		},
		"Editor": {
			"description": "Описание элемента для отображения и редактирования свойства",
			"oneOf": [
				{ "$ref": "http://demo.infinnity.ru:8081/display/MC/ActionElement" },
				{ "$ref": "http://demo.infinnity.ru:8081/display/MC/DataElement" },
				{ "$ref": "http://demo.infinnity.ru:8081/display/MC/LayoutPanel" }
			]
		}
	}
}
```

```
{
	"Text": "Фамилия",
	"Property": "LastName",
	"Editor": {
		"TextBox": {
		}
	}
}
```

 

 

