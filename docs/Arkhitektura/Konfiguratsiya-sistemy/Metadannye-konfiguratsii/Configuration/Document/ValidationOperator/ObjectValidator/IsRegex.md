---
layout: default
title: "IsRegex"
position: 12
categories: 
tags: 
---

Объект удовлетворяет заданному регулярному выражению.

 

```
{
	"id": "IsRegex",
	"description": "Объект удовлетворяет заданному регулярному выражению",
	"type": "object",
	"extends": {
		"$ref": "http://wiki.infinnity.lan:8081/display/MC/BaseValidationOperator"
	},
	"properties": {
		"Message": {
			"description": "Сообщение об ошибке",
			"type": "string"
		},
		"Property": {
			"description": "Наименование свойства",
			"type": "string"
		},
		"Pattern": {
			"description": "Регулярное выражение",
			"type": "string"
		}
	}
}
```

   

#### Пример #1

 

```
(target != null && Regex.IsMatch(target, "[0-9]+"))
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Pattern": "[0-9]+"
}
```

```
// Given
var target1 = null;
var target2 = "Xyz";
var target3 = "1234";
var validator = new IsRegex { Message = "Error", Pattern = "[0-9]+" };
 
// When
string message1, message2, message3;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
var result3 = validator.Validate(target3, out message3);
 
// Then
Assert.IsFalse(result1);
Assert.AreEqual("Error", message1);
Assert.IsFalse(result2);
Assert.AreEqual("Error", message2);
Assert.IsTrue(result3);
Assert.IsNull(message3);
```

   

#### Пример #2

 

```
(target.Property1 != null && Regex.IsMatch(target.Property1, "[0-9]+"))
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1",
	"Pattern": "[0-9]+"
}
```

```
// Given
var target1 = new { Property1 = null };
var target2 = new { Property1 = "Xyz" };
var target3 = new { Property1 = "1234" };
var validator = new IsRegex{ Message = "Error", Property = "Property1", Pattern = "[0-9]+" };
 
// When
string message1, message2, message3;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
var result3 = validator.Validate(target3, out message3);
 
// Then
Assert.IsFalse(result1);
Assert.AreEqual("Error", message1);
Assert.IsFalse(result2);
Assert.AreEqual("Error", message2);
Assert.IsTrue(result3);
Assert.IsNull(message3);
```

 

 

