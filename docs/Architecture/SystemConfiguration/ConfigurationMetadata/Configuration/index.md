---
layout: doc
title: "Configuration"
position: 
categories: 
tags: 
---

Конфигурация.

   

```
{
	"id": "Configuration",
	"description": "Конфигурация",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties" : {
		"Version": {
			"description" : "Версия конфигурации",
			"type" : "string",
			"required": true
		},
		"Documents": {
			"description": "Список документов",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata" 									
			}
		},
		"Registers": {
			"description": "Список регистров",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata" 									
			}
		},
		"Exchanges": {
			"description": "Список точек обмена сообщениями",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata",							
			}
		},
		"Menu": {
			"description": "Список меню",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"Reports": {
			"description": "Список отчетов",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"Relations": {
			"description": "Список отношений",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/Relation"
			}
		}
	}
}
```

 

 

