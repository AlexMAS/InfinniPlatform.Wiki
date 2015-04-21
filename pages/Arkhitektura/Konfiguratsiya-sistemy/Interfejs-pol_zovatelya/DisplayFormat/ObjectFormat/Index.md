---
layout: default
title: "ObjectFormat"
position: 4
categories: 
tags: 
---

Формат отображения объекта.

 

Правила построения строки форматирования описаны в разделе [[ObjectFomatting]].

  

|Name|Description|
|----|-----------|
|GetFormat(): string|Возвращает строку форматирования объекта.|
|SetFormat(string value)|Устанавливает строку форматирования объекта.|

  

```
{
	"id": "ObjectFormat",
	"description": "Формат отображения объекта",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseFormat"
	},
	"properties": {
		"Format": {
			"description": "Строка форматирования объекта",
			"type": "string",
			"required": true
		}
	}
}
```

   

```
{
	"Format": "{:n3}"
}
```

```
{
	"Format": "Birth date: {BirthDate:d}"
}
```

```
{
	"Format": "Weight: {Weight:n2} kg"
}
```

   

#### Примеры форматирования

 

```
// Given
var value = 123.4567;
var target = new ObjectFormat();
target.SetFormat("{:n3}");

// When
var result = target.Format(value);

// Then
Assert.AreEqual("123.457", result); // en-US
```

```
// Given
var value = { BirthDate: new DateTime(2014, 9, 4) };
var target = new ObjectFormat();
target.SetFormatString("Birth date: {BirthDate:d}");

// When
var result = target.Format(value);

// Then
Assert.AreEqual("Birth date: 9/4/2014", result); // en-US
```

```
// Given
var value = { Weight: 123.4567 };
var target = new CustomFormat();
target.SetFormatString("Weight: {Weight:n2} kg");

// When
var result = target.Format(value);

// Then
Assert.AreEqual("Weight: 123.46 kg", result); // en-US
```

 

 

