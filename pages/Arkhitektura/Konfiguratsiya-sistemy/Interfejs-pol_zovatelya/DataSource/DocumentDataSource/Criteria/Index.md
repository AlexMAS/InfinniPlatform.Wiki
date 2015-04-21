---
layout: default
title: "Criteria"
position: 
categories: 
tags: 
---

Критерий фильтрации документа.

 

```
{
	"id": "Criteria",
	"description": "Критерий фильтрации документа",
	"type": "object",
	"properties": {
		"Property": {
			"description": "Наименование свойства документа",
			"type": "string"
		},
		"Value": {
			"description": "Значение критерия фильтрации",
			"type": "any"
		},
		"CriteriaType": {
			"description": "Операция фильтрации",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/CriteriaType",
			"required": true
		}
	}
}
```

 

 

