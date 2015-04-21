---
layout: default
title: IsEqual
position: 1
categories: 
tags: 
---

Объект равен заданному объекту.

 

```
{
	"id": "IsEqual",
	"description": "Объект равен заданному объекту",
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
		"Value": {
			"description": "Значение оператора",
			"type": "any"
		}
	}
}
```

   

#### Пример #1

 

```
(target == 1234) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Value": 1234
}
```

```
// Given
var target1 = 1234;
var target2 = 4321;
var validator = new IsEqual { Message = "Error", Value = 1234 };
 
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
(target.Property1 == 1234) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1",
	"Value": 1234
}
```

```
// Given
var target1 = new { Property1 = 1234 };
var target2 = new { Property1 = 4321 };
var validator = new IsEqual { Message = "Error", Property = "Property1", Value = 1234 } ;
 
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

 

 

