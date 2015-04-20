---
layout: default
title: Document
position: 0
categories: 
tags: 
---

Документ.

   

```
{
	"id": "Document",
	"description": "Документ",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {
		"Versioning": {
			"description": "Способ хранения документа",
			"type": "integer",
			"required": true,
			"default": 2
		},
		"MetadataIndex": {
			"description": "Индекс для хранения документа",
			"type": "string",
			"required": true
		},
		"Schema": {
			"description": "Модель данных документа",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DataSchema",
			"required": true
		},
		"ValidationErrors": {
			"description": "Оператор проверки модели данных документа на ошибки",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/BooleanValidator"
			}
			"required": true 
		},
		"ValidationWarnings": {
			"description": "Оператор проверки модели данных документа на предупреждения",
			"type": "array",
			"items": {
			 	"$ref": "http://demo.infinnity.ru:8081/display/MC/BooleanValidator"
			}
			"required": true
    	},
		"Scenarios": {
			"description": "Список сценариев",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"Processes": {
			"description": "Список бизнес-процессов",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"Services": {
			"description": "Список сервисов",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"Generators": {
			"description": "Список генераторов",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"Views": {
			"description": "Список представлений",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"PrintViews": {
			"description": "Список печатных представлений",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
		},
		"DocumentStatuses": {
			"description": "Список статусов документа",
			"type": "array",
			"items": {
			 	"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
			}
    	}
	}
}
```

 

 

