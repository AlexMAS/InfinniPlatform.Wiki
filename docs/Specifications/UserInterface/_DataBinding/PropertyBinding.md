---
layout: doc
title: "PropertyBinding"
position: 2
categories: 
tags: 
---

Описывает связь между элементом представления и свойством источника данных.

Элемент хранит имя [[источника данных|DataSource]] и [[путь к свойству объекта|DotNotation]] источника данных.

 

Данные тип привязки используется в случаях, когда в качестве источника данных выступает источник данных представления или свойство элемента источника данных представления.

   

|Name|Description|
|----|-----------|
|GetDataSource(): string|Возвращает наименование источника данных.|
|GetProperty(): string|Возвращает путь к свойству источника данных.|
|GetDefaultValue(): any|Возвращает значение свойства источника данных по умолчанию.|
|SetDefaultValue(any value)|Устанавливает значение свойства источника данных по умолчанию.|

  

```
{
	"id": "PropertyBinding",
	"description": "Описывает связь между элементом представления и свойством источника данных",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseDataBinding"
	},
	"properties": {
		"DataSource": {
			"description": "Наименование источника данных",
			"type": "string",
			"required": true
		},
		"Property": {
			"description": "Путь к свойству элемента источника данных",
			"type": "string"
		},
		"DefaultValue": {
			"description": "Значение свойства источника данных по умолчанию",
			"type": "any"
		}
	}
}
```

   

```
{
	"DataSource": "PatientDataSource",
	"Property": "$.FirstName"
}
```

```
{
	"DataSource": "AddressTypeDataSource",
	"Property": ""
}
```

```
{
	"DataSource": "PatientDataSource",
	"Property": "$.Addresses"
}
```

```
{
	"DataSource": "DiseaseDataSource",
	"Property": "$.DisplayName"
}
```

 

 

