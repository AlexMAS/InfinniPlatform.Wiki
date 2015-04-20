---
layout: default
title: Scenario
position: 2
categories: 
tags: 
---

Сценарий (прикладной скрипт).

   

```
{
	"id": "Scenario",
	"description": "Сценарий",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {
		"ContextType": {
			"description": "Тип контекста сценария",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ContextTypeKind"
		},
		"ScriptUnitType": {
			"description": "Тип сценария",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ScriptUnitType"
		},
        "ScenarionId": {
            "description": "Ссылка на сам сценарий",
            "type": "string"
        }
	}
}
```

   

```
{  
	"Id": "b4b1cd29-07db-414a-9d82-c15f418307c1",
	"Name": "ActionUnitSearchRosminzdravClassifiers",
	"Caption": "SearchRosminzdravClassifiers",
	"Description": "Сценарий поиска справочника",
	"ScenarioId": "ActionUnitSearchRosminzdravClassifiers",
	"ContextType": 16,
	"ScriptUnitType": 1   
}
```

