---
layout: doc
title: "ScenarioLink"
position: 1
categories: 
tags: 
---

Ссылка на сценарий.

   

Ссылка на сценарий определяет ссылку на сценарий бизнес-логики (см. [[Scenario]]) для заданной точки расширения.

   

```
{
	"id": "ScenarioLink",
	"description": "Ссылка на сценарий",
	"type": "object",
	"properties": {
		"TypeName": {
			"description": "Наименование типа ссылки на сценарий",
			"type": "object",
			"properties": {
				"Name": {
					"description": "Название типа ссылки",
					"type": "string"
				},
				"ContexType": {
					"description": "Тип контекста сценария",
            		"$ref": "http://demo.infinnity.ru:8081/display/MC/ContextTypeKind"
				}		
			}
		},
		"ScenarioId": {
			"description": "Идентификатор сценария ( см. http://demo.infinnity.ru:8081/display/MC/Scenario )",
			"type": "string",
			"required": true
		}
	}
}
```

   

```
{
	"TypeName": {
		"Name: "SearchModel",
		"ContextType": 16			
	},
	"ScenarioId": "SearchModel"
}	
```

 

 

