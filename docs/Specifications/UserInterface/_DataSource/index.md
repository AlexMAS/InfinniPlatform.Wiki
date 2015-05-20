---
layout: doc
title: "DataSource"
position: 7
categories: 
tags: 
---

Контейнер для описания источника данных представления.

 

Базовый тип для источников данных описан в разделе [[BaseDataSource]].

   

```
{
	"id": "DataSource",
	"description": "Контейнер для описания источника данных представления",
	"type": "object",
	"properties": {
		"ObjectDataSource": {
			"description": "Источник данных представления для произвольного массива",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectDataSource"
		},
		"DocumentDataSource": {
			"description": "Источник данных представления для документов",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DocumentDataSource"
		},
		"MetadataDataSource": {
			"description": "Источник данных представления для метаданных конфигурации",
			"$ref":"http://demo.infinnity.ru:8081/display/MC/MetadataDataSource"
		}
    }
}
```

   

```
{
	"ObjectDataSource": {
		"Name": "AddressTypeDataSource",
		"Value": [
			"Почтовый",
			"Юридический",
			"Фактический"
		]
	}
}
```

```
{
	"DocumentDataSource": {
		"Name": "PatientDataSource",
		"ConfigId": "Integration",
		"DocumentId": "Patient"
	}
}
```

 

 

