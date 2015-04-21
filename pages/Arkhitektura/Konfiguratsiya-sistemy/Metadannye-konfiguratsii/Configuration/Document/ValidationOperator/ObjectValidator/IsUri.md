---
layout: default
title: "IsUri"
position: 4
categories: 
tags: 
---

Объект является URI.

 

```
{
	"id": "IsUri",
	"description": "Объект является URI",
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
(target is Uri) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется"
}
```

```
// Given
var absoluteUri = "http://wiki.infinnity.lan:8081/display/MC/IsUri";
var relativeUri = "/display/MC/IsUri";
var notUri = 1234;
var validator = new IsUri { Message = "Error" };
 
// When
string message1, message2, message3;
var result1 = validator.Validate(absoluteUri, out message1);
var result2 = validator.Validate(relativeUri, out message2);
var result3 = validator.Validate(notUri, out message3);
 
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
(target.Property1 is Uri) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1"
}
```

```
// Given
var absoluteUri = new { Property1 = "http://wiki.infinnity.lan:8081/display/MC/IsUri" };
var relativeUri = new { Property1 = "/display/MC/IsUri" };
var notUri = new { Property1 = 1234 };
var validator = new IsUri { Message = "Error", Property = "Property1" };
 
// When
string message1, message2, message3;
var result1 = validator.Validate(absoluteUri, out message1);
var result2 = validator.Validate(relativeUri, out message2);
var result3 = validator.Validate(notUri, out message3);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsTrue(result2);
Assert.IsNull(message2);
Assert.IsFalse(result3);
Assert.AreEqual("Error", message3);
```

 

 

