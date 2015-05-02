---
layout: default
title: "Or"
position: 
categories: 
tags: 
---

Объект должен удовлетворять хотя бы одному из заданных условий.

   

Оператор Or проверяет, что объект удовлетворяет хотя бы одному из заданных из условий. Если все условия не выполняются, оператор выдает ошибку, полученную путем объединения всех ошибок по всем условиям.

   

```
{
	"id": "Or",
	"description": "Объект должен удовлетворять хотя бы одному из заданных условий",
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
(target < 0 || target > 3)
```

```
{
	"Operators": [
		{
			"IsLessThan": {
				"Message": "Значение должно быть меньше 0",
				"Value": 0
			}
		},
		{
			"IsMoreThan": {
				"Message": "Значение должно быть больше 3",
				"Value": 3
			}
		}
	]
}
```

```
// Given
var target1 = -1;
var target2 = 4;
var target2 = 2;
  
var validator = new Or {
	Operators = [
		new IsLessThan {
			Message = "Значение должно быть меньше 0",
			Value = 0
		},
		new IsMoreThan {
			Message = "Значение должно быть больше 3",
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
Assert.IsTrue(result2);
Assert.IsNull(message2);
Assert.IsFalse(result3);
Assert.AreEqual("Значение должно быть меньше 0\nЗначение должно быть больше 3", message3);
```

   

#### Пример #2

 

```
(target.Property1 < 0 || target.Property1 > 3)
```

```
{
	"Property": "Property1",
	"Operators": [
		{
			"IsLessThan": {
				"Message": "Свойство Property1 должно быть меньше 0",
				"Value": 0
			}
		},
		{
			"IsMoreThan": {
				"Message": "Свойство Property1 должно быть больше 3",
				"Value": 3
			}
		}
	]
}
 
ИЛИ
 
{
	"Operators": [
		{
			"IsLessThan": {
				"Message": "Свойство Property1 должно быть меньше 0",
				"Property": "Property1",
				"Value": 0
			}
		},
		{
			"IsMoreThan": {
				"Message": "Свойство Property1 должно быть больше 3",
				"Property": "Property1",
				"Value": 3
			}
		}
	]
}
```

```
// Given
var target1 = new { Property1 = -1 };
var target2 = new { Property1 = 4 };
var target2 = new { Property1 = 2 };
  
var validator = new Or {
	Property = "Property1",
	Operators = [
		new IsMoreThan {
			Message = "Свойство Property1 должно быть меньше 0",
			Value = 0
		},
		new IsLessThan {
			Message = "Свойство Property1 должно быть больше 3",
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
Assert.IsTrue(result2);
Assert.IsNull(message2);
Assert.IsFalse(result3);
Assert.AreEqual("Свойство Property1 должно быть меньше 0\nСвойство Property1 должно быть больше 3", message3);
```

 

 

