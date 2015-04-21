---
layout: default
title: IsGuid
position: 3
categories: 
tags: 
---

Объект является глобально уникальным идентификатором (GUID).

 

```
{
	"id": "IsGuid",
	"description": "Объект является глобально уникальным идентификатором (GUID)",
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
(target is Guid) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется"
}
```

```
// Given
var target1 = "436CAC70-4BD9-4476-B513-A13D7A6F197F";
var target2 = "Not Guid";
var validator = new IsGuid { Message = "Error" };
 
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
(target.Property1 is Guid) 
```

```
{
	"Message": "Сообщение об ошибке, если условие не выполняется",
	"Property": "Property1"
}
```

```
// Given
var target1 = new { Property1 = "436CAC70-4BD9-4476-B513-A13D7A6F197F" };
var target2 = new { Property1 = "Not Guid" };
var validator = new IsGuid { Message = "Error", Property = "Property1" } ;
 
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

 

 

