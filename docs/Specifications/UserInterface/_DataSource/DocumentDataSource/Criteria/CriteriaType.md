---
layout: doc
title: "CriteriaType"
position: 
categories: 
tags: 
---

Операции фильтрации.

 

|Значение|Флаговое соответствие|Описание|
|--------|---------------------|--------|
|IsEquals|1|Равно.|
|IsNotEquals|2|Не равно.|
|IsMoreThan|4|Больше.|
|IsLessThan|8|Меньше.|
|IsMoreThanOrEquals|16|Больше или равно.|
|IsLessThanOrEquals|32|Меньше или равно.|
|IsContains|64|Содержит.|
|IsNotContains|128|Не содержит.|
|IsEmpty|256|Пустое значение.|
|IsNotEmpty|512|Не пустое значение.|
|IsStartsWith|1024|Начинается с.|
|IsNotStartsWith|2048|Не начинается с.|
|IsEndsWith|4096|Заканчивается на.|
|IsNotEndsWith|8192|Не заканчивается на.|
|IsIn|16384|Входит в множество.|
|IsNotIn|не реализовано|Не входит в множество.|

    

```
{
	"id": "CriteriaType",
	"description": "Критерии фильтрации",
	"enum": [
		"IsEquals",
		"IsNotEquals",
		"IsMoreThan",
		"IsLessThan",
		"IsMoreThanOrEquals",
		"IsLessThanOrEquals",
		"IsContains",
		"IsNotContains",
		"IsEmpty",
		"IsNotEmpty",
		"IsStartsWith",
		"IsNotStartsWith",
		"IsEndsWith",
		"IsNotEndsWith",
		"IsIn",
		"IsNotIn"
	]
}
```

 

 

