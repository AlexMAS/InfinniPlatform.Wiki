---
layout: doc
title: "IsIn"
position: 17
categories: 
tags: 
---

Объект содержится в заданной коллекции.

 

```
{
	"id": "IsIn",
	"description": "Объект содержится в заданной коллекции",
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
		"Items": {
			"description": "Значение оператора",
			"type": "array",
			"items": {
				"type": "any"
			}
		}
	}
}
```

   

#### Пример #1

 

```
(target != null && target in [ 1, 2, 3 ])
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Items": [ 1, 2, 3 ]
}
```

```
// Given
var target1 = 1;
var target2 = 2;
var target3 = 4;
var validator = new IsIn { Message = "Error", Items = [ 1, 2, 3 ] };
 
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

   

#### Пример #2

 

```
(target.Property1 != null && target.Property1 in [ 1, 2, 3 ])
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1",
	"Items": [ 1, 2, 3 ]
}
```

```
// Given
var target1 = new { Property1 = 1 };
var target2 = new { Property1 = 2 };
var target3 = new { Property1 = 4 };
var validator = new IsIn { Message = "Error", Property = "Property1", Items = [ 1, 2, 3 ] };
 
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

 

 

