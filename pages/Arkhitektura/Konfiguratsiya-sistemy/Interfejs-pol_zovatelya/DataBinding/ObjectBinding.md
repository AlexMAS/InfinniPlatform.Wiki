---
layout: default
title: "ObjectBinding"
position: 1
categories: 
tags: 
---

Описывает связь между элементом представления и произвольным объектом.

 

Данные тип привязки используется в случаях, когда в качестве источника данных выступает некоторая константа.

   

```
{
	"id": "ObjectBinding",
	"description": "Описывает связь между элементом представления и произвольным объектом",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseDataBinding"
	},
	"type": "object",
	"properties": {
		"Value": {
			"description": "Произвольный объект",
			"type": "any",
			"default": null
		}
	}
}
```

   

```
{
	"Value": 3.14
}
```

```
{
	"Value": "Поиск"
}
```

```
{
	"Value": {
		"Id": "DF6DE0B0-3F52-45DE-AADF-83233C8EFF90",
		"DisplayName": "Мужской"
	}
}
```

```
{
	"Value": [
		{
			"Id": "DF6DE0B0-3F52-45DE-AADF-83233C8EFF90",
			"DisplayName": "Мужской"
		},
		{
			"Id": "FCEDF30F-AA4F-44B3-B374-CCBD0FF7C0F6",
			"DisplayName": "Женский"
		}
	]
}
```

 

 

