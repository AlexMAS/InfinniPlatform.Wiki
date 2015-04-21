---
layout: default
title: DisplayFormat
position: 9
categories: 
tags: 
---

Формат отображения данных.

Формат отображения данных для указания способа отображения данных. Для описания способа ввода данных используется [[EditMask]].

   

Базовый тип для формата отображения данных описан в разделе [[BaseFormat]].

  

```
{
	"id": "DisplayFormat",
	"description": "Формат отображения данных",
	"type": "object",
	"properties": {
		"BooleanFormat": {
			"description": "Формат отображения логического значения",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/BooleanFormat"
		},
		"DateTimeFormat": {
			"description": "Формат отображения даты/времени",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DateTimeFormat"
		},
		"NumberFormat": {
			"description": "Формат отображения числового значения",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/NumberFormat"
		},
		"ObjectFormat": {
			"description": "Формат отображения объекта",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectFormat"
		}
	}
}
```

   

 

