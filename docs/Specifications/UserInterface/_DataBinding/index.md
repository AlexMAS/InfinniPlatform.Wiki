---
layout: doc
title: "DataBinding"
position: 8
categories: 
tags: 
---

Контейнер для описания связи между элементом представления и данными.

 

Базовый тип для привязки данных описан в разделе [[BaseDataBinding]].

   

```
{
	"id": "DataBinding",
	"description": "Контейнер для описания связи между элементом представления и данными",
	"type": "object",
	"properties": {
		"ObjectBinding": {
			"description": "Описывает связь между элементом представления и произвольным объектом",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectBinding"
		},
		"PropertyBinding": {
			"description": "Описывает связь между элементом представления и свойством источника данных",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/PropertyBinding"
		},
		"ParameterBinding": {
			"description": "Описывает связь между элементом представления и параметром представления",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ParameterBinding"
		}
	}
}
```

   

```
{
	"ObjectBinding": {
		"Value": 3.14
	}
}
```

```
{
	"PropertyBinding": {
		"DataSource": "PatientsDataSource",
		"Property": "$.Addresses"
	}
}
```

```
{
	"PropertyBinding": {
		"DataSource": "DiseasesDataSource",
		"Property": "$.DisplayName"
	}
}
```

```
{
	"ParameterBinding": {
		"Parameter": "PatientId"
	}
}
```

```
{
	"ParameterBinding": {
		"Parameter": "Patient",
		"Property": "Id"
	}
}
```

 

 

