---
layout: default
title: And
position: 
categories: 
tags: 
---

Объект должен удовлетворять всем заданным условиям.

   

Оператор And проверяет, что объект удовлетворяет всем заданным условиям. Если очередное условие не выполняется, оператор выдает ошибку этого условия и прекращает проверку.

   

```
{
	"id": "And",
	"description": "Объект должен удовлетворять всем заданным условиям",
	"type": "object",
	"extends": {
		"$ref": "http://wiki.infinnity.lan:8081/display/MC/BaseValidationOperator"
	},
	"properties": {
		"Property": {
			"description": "Наименование свойства",
			"type": "string"
		},
		"Operators": {
			"description": "Список операторов",
			"type": "array",
			"items": {
				"type": "object",
				"oneOf": [
					{ "$ref": "http://wiki.infinnity.lan:8081/display/MC/BooleanValidator" },
					{ "$ref": "http://wiki.infinnity.lan:8081/display/MC/CollectionValidator" },
					{ "$ref": "http://wiki.infinnity.lan:8081/display/MC/ObjectValidator" }
				]
			}
		}
	}
}
```

   

#### Пример #1

 

```
(target > 0 && target < 3)
```

```
{
	"Operators": [
		{
			"IsMoreThan": {
				"Message": "Значение должно быть больше 0",
				"Value": 0
			}
		},
		{
			"IsLessThan": {
				"Message": "Значение должно быть меньше 3",
				"Value": 3
			}
		}
	]
}
```

```
// Given
var target1 = 1;
var target2 = 0;
var target2 = 3;
  
var validator = new And {
	Operators = [
		new IsMoreThan {
			Message = "Значение должно быть больше 0",
			Value = 0
		},
		new IsLessThan {
			Message = "Значение должно быть меньше 3",
			Value = 3
		}
	]
};
 
// When
string message1, message2, message3;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
var result3 = validator.Validate(target3, out message3);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsFalse(result2);
Assert.AreEqual("Значение должно быть больше 0", message2);
Assert.IsFalse(result3);
Assert.AreEqual("Значение должно быть меньше 3", message3);
```

   

#### Пример #2

 

```
(target.Property1 > 0 && target.Property1 < 3)
```

```
{
	"Property": "Property1",
	"Operators": [
		{
			"IsMoreThan": {
				"Message": "Свойство Property1 должно быть больше 0",
				"Value": 0
			}
		},
		{
			"IsLessThan": {
				"Message": "Свойство Property1 должно быть меньше 3",
				"Value": 3
			}
		}
	]
}
 
ИЛИ
 
{
	"Operators": [
		{
			"IsMoreThan": {
				"Message": "Свойство Property1 должно быть больше 0",
				"Property": "Property1",
				"Value": 0
			}
		},
		{
			"IsLessThan": {
				"Message": "Свойство Property1 должно быть меньше 3",
				"Property": "Property1",
				"Value": 3
			}
		}
	]
}
```

```
// Given
var target1 = new { Property1 = 1 };
var target2 = new { Property1 = 0 };
var target2 = new { Property1 = 3 };
  
var validator = new And {
	Property = "Property1",
	Operators = [
		new IsMoreThan {
			Message = "Свойство Property1 должно быть больше 0",
			Value = 0
		},

		new IsLessThan {
			Message = "Свойство Property1 должно быть меньше 3",
			Value = 3
		}
	]
};
 
// When
string message1, message2, message3;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
var result3 = validator.Validate(target3, out message3);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsFalse(result2);
Assert.AreEqual("Свойство Property1 должно быть больше 0", message2);
Assert.IsFalse(result3);
Assert.AreEqual("Свойство Property1 должно быть меньше 3", message3);
```

 

 

