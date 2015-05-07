---
layout: doc
title: "Service"
position: 4
categories: 
tags: 
---

Сервис.

   

```
{
	"id": "Service",
	"description": "Сервис",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {
		"Type": {
			"description": "Тип сервиса",
			"type": "object",
			"required": true,
			"properties": {
        		"Name": {
            		"description": "Наименование типа сервиса",
            		"type": "string"
				}
			}						
		},
		"ExtensionPoints": {
			"description": "Список ссылок на сценарии",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ScenarioLink"
			}
		}
	}
}
```

    

```
{
	"Id": "d1b3bba9-5f24-4267-b333-fe61062e77fe",
	"Name": "Search",
	"Description" : "Поиск документа",
	"Caption": "Поиск справочников",
	"Type": {
		"Name": "search"
	},	
	"ExtensionPoints": [
		{
			"TypeName": {
				"Name: "SearchModel",
				"ContextType": 16			
			},
			"ScenarioId": "SearchModel"
		}
	]
}	
```

 

 

