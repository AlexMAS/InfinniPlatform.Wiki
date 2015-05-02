---
layout: default
title: "IsDefaultValue"
position: 2
categories: 
tags: 
---

Объект является значением по умолчанию для данного типа.

 

```
{
	"id": "IsDefaultValue",
	"description": "Объект является значением по умолчанию для данного типа",
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
(target == default(integer)) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется"
}
```

```
// Given
var target1 = 0;
var target2 = 1234;
var validator = new IsDefaultValue { Message = "Error" };
 
// When
string message1, message2;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsFalse(result2);
Assert.AreEqual("Error", message2);
```

   

#### Пример #2

 

```
(target.Property1 == default(integer)) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1"
}
```

```
// Given
var target1 = new { Property1 = 0 };
var target2 = new { Property1 = 1234 };
var validator = new IsDefaultValue { Message = "Error", Property = "Property1" } ;
 
// When
string message1, message2;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsFalse(result2);
Assert.AreEqual("Error", message2);
```

 

 

