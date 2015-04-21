---
layout: default
title: "IsContainsCollection"
position: 3
categories: 
tags: 
---

Коллекция содержит заданное значение.

 

```
{
	"id": "IsContainsCollection",
	"description": "Коллекция содержит заданное значение",
	"type": "object",
	"extends": {
		"$ref": "http://wiki.infinnity.lan:8081/display/MC/BaseValidationOperator"
	},
	"properties": {
		"Message": {
			"description": "Сообщение об ошибке",
			"type": "string"
		},
		"Value": {
			"description": "Значение элемента",
			"type": "any"
		}
	}
}
```

   

#### Пример #1

 

```
(target != null && target.Contains(1234)) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Value": 1234
}
```

```
// Given
var target1 = [ 1234, 4321 ];
var target2 = [ 4321 ];
var validator = new IsContainsCollection { Message = "Error", Value = 1234 };
 
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

   

 

