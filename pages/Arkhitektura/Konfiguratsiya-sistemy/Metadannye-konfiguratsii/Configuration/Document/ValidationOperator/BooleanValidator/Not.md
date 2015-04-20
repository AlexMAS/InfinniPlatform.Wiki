---
layout: default
title: Not
position: 
categories: 
tags: 
---

Объект не должен удовлетворять заданному условию.

      

```
{
	"id": "Not",
	"description": "Объект не должен удовлетворять заданному условию",
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
		"Operator": {
			"description": "Оператор проверки",
			"type": "object",
			"oneOf": [
				{ "$ref": "http://wiki.infinnity.lan:8081/display/MC/BooleanValidator" },
				{ "$ref": "http://wiki.infinnity.lan:8081/display/MC/CollectionValidator" },
				{ "$ref": "http://wiki.infinnity.lan:8081/display/MC/ObjectValidator" }
			]
		}
	}
}
```

   

#### Пример #1

 

```
(target != 1234)
```

```
{
	"Message": "Значение не может быть равно 1234",
	"Operator": {
		"IsEqual": {
			"Value": 1234
		}
	}
}
```

```
// Given
var target1 = 1234;
var target2 = 4321;
  
var validator = new Not {
	Message = "Значение не может быть равно 1234",
	Operator = new IsEqual {
		Value = 1234
	}
};
 
// When
string message1, message2;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
 
// Then
Assert.IsFalse(result1);
Assert.AreEqual("Значение не может быть равно 1234", message1);
Assert.IsTrue(result2);
Assert.IsNull(message2);
```

   

#### Пример #2

 

```
(target.Property1 != 1234)
```

```
{
	"Message": "Свойство Property1 не может быть равно 1234",
	"Property": "Property1",
	"Operator": {
		"IsEqual": {
			"Value": 1234
		}
	}
}
  
ИЛИ
  
{
	"Message": "Свойство Property1 не может быть равно 1234",
	"Operator": {
		"IsEqual": {
			"Property": "Property1",
			"Value": 1234
		}
	}
}
```

```
// Given
var target1 = new { Property1 = 1234 };
var target2 = new { Property1 = 4321 };
  
var validator = new Not {
	Message = "Свойство Property1 не может быть равно 1234",
	Property = "Property1",
	Operator = new IsEqual {
		Value = 1234
	}
};
 
// When
string message1, message2;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
 
// Then
Assert.IsFalse(result1);
Assert.AreEqual("Свойство Property1 не может быть равно 1234", message1);
Assert.IsTrue(result2);
Assert.IsNull(message2);
```

 

 

