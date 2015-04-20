---
layout: default
title: Generator
position: 5
categories: 
tags: 
---

Генератор представления.  

   

```
{
	"id": "Generator",
	"description": "Генератор представления",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {
		"Service": {
			"description": "Наименование сервиса генератора",
			"type": "string"
		},
		"MetadataType": {
			"description": "Тип генерируемого представления",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ViewType"
		},
        "ActionUnit": {
            "description": "Наименование сценария ( см. http://demo.infinnity.ru:8081/display/MC/Scenario )",
            "type": "string"
        }
	}
}
```

   

```
{
  "Id": "e980e8b4-198d-4e51-9972-84a465a8080c",
  "Name": "MenuList",
  "ActionUnit": "ActionUnitGeneratorMenu",
  "Service": "MenuList",
  "MetadataType": "SelectView"
}
```

 

 

