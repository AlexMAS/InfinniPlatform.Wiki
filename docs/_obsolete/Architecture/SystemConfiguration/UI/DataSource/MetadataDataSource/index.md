---
layout: doc
title: "MetadataDataSource"
position: 3
categories: 
tags: 
---

Источник данных представления для метаданных конфигурации.

см. также [[Реализация провайдера работы с метаданными]]

```
{
	"id": "MetadataDataSource",
	"description": "Источник данных представления для метаданных конфигурации",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseDataSource"
	},
	"properties": {
		"ConfigId": {
			"description": "Идентификатор конфигурации",
			"type": "string",
			"required": false
		},
		"DocumentId": {
			"description": "Идентификатор документа",
			"type": "string",
			"required": false
		},
		"MetadataType": {
			"description": "Тип метаданных конфигурации",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/MetadataType",
			"required": false
		},
		"MetadataName": {
			"description": "Наименование элемента метаданных конфигурации",
			"type": "string",
			"required": false
		},
	}
}
```

   

```
{
	"Name": "PatienViewDataSource",
	"ConfigId": "Integration",
	"DocumentId": "Patient",
	"MetadataType": "View",
	"MetadataName" : "PatientEditView"
}
```

```
{
	"Name": "IntegrationMenuDataSource",
	"ConfigId": "Integration",
	"MetadataType": "Menu"
}
```

```
{
	"Name": "ConfigurationDataSource",
	"ConfigId": "Integration",
	"DocumentId" : "Patient"
}
```

 

 

