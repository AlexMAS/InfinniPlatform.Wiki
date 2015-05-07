---
layout: doc
title: "Process"
position: 3
categories: 
tags: 
---

Бизнес-процесс.

   

```
{
	"id": "Process",
	"description": "Бизнес-процесс",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {		
		"Transitions": {
			"description": "Список потоков работы бизнес-процесса",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/Transition"
		}
	}
}
```

   

```
{
	"Id": "796e105c-a017-49ef-9175-8f34f64ff10f",
	"Name": "Default",
	"Caption": "Default",
	"Description": "Default",
	"Transitions": [
		{
			"Id": "601c7f6e-edfc-461b-b108-e9c72e81b65f",
			"SchemaPrefill": {
				"Name": "TestDocument",
				"Caption": "TestDocument",
				"Properties": {				
					"Name": {
						"Type": "String",
						"Caption": "Patient name",
						"DefaultValue": "ИВАНОВ"
					}
				}
			},
			"ActionPoint": {
				"TypeName": "Action",
				"ScenarioId": "TestComplexFillDocumentAction"
			}
		}
	]
}
```

 

 

