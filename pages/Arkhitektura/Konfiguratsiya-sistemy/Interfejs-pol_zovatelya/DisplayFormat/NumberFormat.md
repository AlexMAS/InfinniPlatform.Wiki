---
layout: default
title: NumberFormat
position: 3
categories: 
tags: 
---

Формат отображения числового значения.

   

Строка форматирования должна записываться в формате, который описан в разделе [[NumberFormatting]].

   

|Name|Description|
|----|-----------|
|GetFormat(): string|Возвращает строку форматирования числового значения.|
|SetFormat(string value)|Устанавливает строку форматирования числового значения.|

   

```
{
	"id": "NumberFormat",
	"description": "Формат отображения числового значения",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseFormat"
	},
	"properties": {
		"Format": {
			"description": "Строка форматирования числового значения",
			"type": "string",
			"required": true,
			"default": "n"
		}
	}
}
```

   

```
{
	"Format": "n3"
}
```

 

#### Примеры форматирования

 

```
// Given
var value = 123.4567;
var target = new NumberFormat();
target.SetFormat("n3");

// When
var result = target.Format(value);

// Then
Assert.AreEqual("123.457", result); // en-US
```

 

 

