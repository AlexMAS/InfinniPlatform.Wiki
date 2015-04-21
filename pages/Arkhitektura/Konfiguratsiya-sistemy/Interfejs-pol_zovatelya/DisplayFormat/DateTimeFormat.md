---
layout: default
title: "DateTimeFormat"
position: 2
categories: 
tags: 
---

Формат отображения даты/времени.

   

Строка форматирования должна записываться в формате, который описан в разделе [[DateTimeFormating]].

   

|Name|Description|
|----|-----------|
|GetFormat(): string|Возвращает строку форматирования даты/времени.|
|SetFormat(string value)|Устанавливает строку форматирования даты/времени.|

  

```
{
	"id": "DateTimeFormat",
	"description": "Формат отображения даты/времени",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseFormat"
	},
	"properties": {
		"Format": {
			"description": "Строка форматирования даты/времени",
			"type": "string",
			"required": true,
			"default": "G"
		}
	}
}
```

   

```
{
	"Format": "d"
}
```

####    

#### Примеры форматирования

 

```
// Given
var value = new DateTime(2014, 9, 4);
var target = new DateFormat();
target.SetFormat("d");

// When
var result = target.Format(value);

// Then
Assert.AreEqual("9/4/2014", result); // en-US
```

 

 

