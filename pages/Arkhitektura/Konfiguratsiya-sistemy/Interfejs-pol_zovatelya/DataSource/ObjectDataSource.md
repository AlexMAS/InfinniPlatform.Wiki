---
layout: default
title: "ObjectDataSource"
position: 1
categories: 
tags: 
---

Источник данных представления для произвольного массива.

  

```
{
	"id": "ObjectDataSource",
	"description": "Источник данных представления для произвольного массива",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseDataSource"
	},
	"properties": {
		"Items": {
			"description": "Список элементов источника данных",
			"type": "array",
			"items": {
				"type": "any"
			}
		}
	}
}
```

   

```
{
	"Name": "AddressTypeDataSource",
	"Items": [
		"Почтовый",
		"Юридический",
		"Фактический"
	]
}
```

 

 

