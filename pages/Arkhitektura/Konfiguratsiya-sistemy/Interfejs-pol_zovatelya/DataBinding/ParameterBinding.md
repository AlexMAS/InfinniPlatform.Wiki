---
layout: default
title: ParameterBinding
position: 3
categories: 
tags: 
---

Описывает связь между элементом представления и параметром представления.

Элемент хранит имя [[параметра представления|Parameter]] и [[путь к свойству объекта|DotNotation]] значения параметра.

   

|Name|Description|
|----|-----------|
|GetParameter(): string|Возвращает наименование параметра.|
|GetProperty(): string|Возвращает путь к свойству значения параметра.|

  

```
{
	"id": "ParameterBinding",
	"description": "Описывает связь между элементом представления и параметром представления",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseDataBinding"
	},
	"properties": {
		"Parameter": {
			"description": "Наименование параметра",
			"type": "string",
			"required": true
		},
		"Property": {
			"description": "Путь к свойству значения параметра",
			"type": "string"
		}
	}
}
```

   

```
{
	"Parameter": "PatientId"
}
```

```
{
	"Parameter": "Patient",
	"Property": "Id"
}
```

 

 

