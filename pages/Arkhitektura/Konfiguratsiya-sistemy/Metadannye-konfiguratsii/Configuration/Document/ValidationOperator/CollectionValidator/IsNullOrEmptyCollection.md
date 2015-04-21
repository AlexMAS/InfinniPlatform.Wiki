---
layout: default
title: IsNullOrEmptyCollection
position: 2
categories: 
tags: 
---

Коллекция является нулевым указателем или пустой коллекцией.

 

```
{
	"id": "IsNullOrEmptyCollection",
	"description": "Коллекция является нулевым указателем или пустой коллекцией",
	"type": "object",
	"extends": {
		"$ref": "http://wiki.infinnity.lan:8081/display/MC/BaseValidationOperator"
	},
	"properties": {
		"Message": {
			"description": "Сообщение об ошибке",
			"type": "string"
		}
	}
}
```

   

#### Пример #1

 

```
(target == null || target.Length == 0) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется"
}
```

```
// Given
var target1 = null;
var target2 = [ ];
var target3 = [ 1, 2, 3 ];
var validator = new IsNullOrEmptyCollection { Message = "Error" };
 
// When
string message1, message2, message3;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
var result3 = validator.Validate(target3, out message3);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsTrue(result2);
Assert.IsNull(message2);
Assert.IsFalse(result3);
Assert.AreEqual("Error", message3);
```

   

 

