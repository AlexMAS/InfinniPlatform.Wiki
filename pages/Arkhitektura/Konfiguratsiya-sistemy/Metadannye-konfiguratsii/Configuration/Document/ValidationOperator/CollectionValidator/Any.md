---
layout: default
title: Any
position: 1
categories: 
tags: 
---

Один из элементов коллекции удовлетворяют заданному условию.

   

Оператор Any проверяет, что хотя бы один из элементов коллекции удовлетворяет заданному условию. Если все элементы коллекции не удовлетворяют условию, оператор выдает ошибку, полученную путем объединения всех ошибок по всем элементам.

   

```
{
	"id": "Any",
	"description": "Один из элементов коллекции удовлетворяют заданному условию",
	"type": "object",
	"extends": {
		"$ref": "http://wiki.infinnity.lan:8081/display/MC/BaseValidationOperator"
	},
	"properties": {
		"Operator": {
			"description": "Оператор проверки элементов коллекции",
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
(target != null && target.Any(item => item < 3))
```

```
{
	"Operator": {
		"IsLessThan": {
			"Message": "Элементы должны быть меньше 3",
			"Value": 3
		}
	}
}
```

```
// Given
var target1 = [ 1, 2, 3, 4 ];
var target2 = [ 3, 4 ];
   
var validator = new All {
	Operator = new IsLessThan {
		Message = "Элементы должны быть меньше 3",
		Value = 3
	}
};
 
// When
string message1, message2;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsFalse(result2);
Assert.AreEqual("Элементы должны быть меньше 3\nЭлементы должны быть меньше 3", message2);
```

   

#### Пример #2

 

```
(target != null && target.Any(item => item.Property1 < 3))
```

```
{
	"Operator": {
		"IsLessThan": {
			"Message": "Свойство Property1 элементов должно быть меньше 3",
			"Value": 3
		}
	}
}
```

```
// Given

var target1 = [ 1, 2, 3, 4 ];
var target2 = [ 3, 4 ];
   
var validator = new All {
	Operator = new IsLessThan {
		Message = "Свойство Property1 элементов должно быть меньше 3",
		Property = "Property1",
		Value = 3
	}
};
 
// When
string message1, message2;
var result1 = validator.Validate(target1, out message1);
var result2 = validator.Validate(target2, out message2);
 
// Then
Assert.IsTrue(result1);
Assert.IsNull(message1);
Assert.IsFalse(result2);
Assert.AreEqual("Свойство Property1 элементов должно быть меньше 3\nСвойство Property1 элементов должно быть меньше 3", message2);
```

 

 

