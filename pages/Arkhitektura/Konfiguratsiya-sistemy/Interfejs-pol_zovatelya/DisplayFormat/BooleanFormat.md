---
layout: default
title: "BooleanFormat"
position: 1
categories: 
tags: 
---

Формат отображения логического значения.

 

|Name|Description|
|----|-----------|
|GetFalseText(): string|Возвращает текст для отображения ложного значения.|
|SetFalseText(string value)|Устанавливает текст для отображения ложного значения.|
| | |
|GetTrueText(): string|Возвращает текст для отображения истинного значения.|
|SetTrueText(string value)|Устанавливает текст для отображения истинного значения.|

  

```
{
	"id": "BooleanFormat",
	"description": "Формат отображения логического значения",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseFormat"
	},
	"properties": {
		"TrueText": {
			"description": "Текст для отображения истинного значения",
			"type": "string",
			"default": "True"
		},
		"FalseText": {
			"description": "Текст для отображения ложного значения",
			"type": "string",
			"default": "False"
		}
	}
}
```

   

```
{
	"TrueText": "Y",
	"FalseText": "N"
}
```

 

#### Примеры форматирования

 

```
// Given
var target = new BooleanFormat();
target.SetTrueText("Y");
target.SetFalseText("N");

// When
var trueString = target.Format(true);
var falseString = target.Format(false);

// Then
Assert.AreEqual("Y", trueString);
Assert.AreEqual("N", falseString);
```

 

 

