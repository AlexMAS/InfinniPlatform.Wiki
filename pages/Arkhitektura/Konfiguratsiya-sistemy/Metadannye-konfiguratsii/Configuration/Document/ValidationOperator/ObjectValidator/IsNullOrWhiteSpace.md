---
layout: default
title: IsNullOrWhiteSpace
position: 8
categories: 
tags: 
---

Объект является нулевым указателем или строкой из пробелов.

 

```
{
	"id": "IsNullOrWhiteSpace",
	"description": "Объект является нулевым указателем или строкой из пробелов",
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
		}
	}
}
```

   

#### Пример #1

 

```
(target == null || target == "" || target.IsWhiteSpace()) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется"
}
```

```
// Given
var nullString = null;
var emptyString = "";
var whiteSpaceString = "   ";
var notEmptyOrWhiteSpaceString = " not empty ";
var validator = new IsNullOrWhiteSpace { Message = "Error" };
 
// When
string message1, message2, message3, message4;
var result1 = validator.Validate(nullString, out message1);
var result2 = validator.Validate(emptyString, out message2);
var result3 = validator.Validate(whiteSpaceString, out message3);
var result4 = validator.Validate(notEmptyOrWhiteSpaceString, out message4);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsTrue(result2);
Assert.IsNull(message2);
Assert.IsTrue(result3);
Assert.IsNull(message3);
Assert.IsFalse(result4);
Assert.AreEqual("Error", message4);
```

   

#### Пример #2

 

```
(target.Property1 == null || target.Property1 == "" || target.Property1.IsWhiteSpace()) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1"
}
```

```
// Given
var nullString = new { Property1 = null };
var emptyString = new { Property1 = "" };
var whiteSpaceString = new { Property1 = "   " };
var notEmptyOrWhiteSpaceString = new { Property1 = " not empty " };
var validator = new IsNullOrWhiteSpace { Message = "Error", Property = "Property1" };
 
// When
string message1, message2, message3, message4;
var result1 = validator.Validate(nullString, out message1);
var result2 = validator.Validate(emptyString, out message2);
var result3 = validator.Validate(whiteSpaceString, out message3);
var result4 = validator.Validate(notEmptyOrWhiteSpaceString, out message4);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsTrue(result2);
Assert.IsNull(message2);
Assert.IsTrue(result3);
Assert.IsNull(message3);
Assert.IsFalse(result4);
Assert.AreEqual("Error", message4);
```

 

 

