---
layout: doc
title: "IsEndsWith"
position: 11
categories: 
tags: 
---

Объект оканчивается заданной подстрокой.

 

```
{
	"id": "IsEndsWith",
	"description": "Объект оканчивается заданной подстрокой",
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
			"type": "string"
		}
	}
}
```

   

#### Пример #1

 

```
(target != null && target.EndsWith("Abc")) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Value": "Abc"
}
```

```
// Given
var target1 = null;
var target2 = "Xyz";
var target3 = "Xyzabc";
var validator = new IsEndsWith { Message = "Error", Value = "Abc" };
 
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
(target.Property1 != null && target.Property1.EndsWith("Abc")) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1",
	"Value": "Abc"
}
```

```
// Given
var target1 = new { Property1 = null };
var target2 = new { Property1 = "Xyz" };
var target3 = new { Property1 = "Xyzabc" };
var validator = new IsEndsWith { Message = "Error", Property = "Property1", Value = "Abc" };
 
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

 

 

