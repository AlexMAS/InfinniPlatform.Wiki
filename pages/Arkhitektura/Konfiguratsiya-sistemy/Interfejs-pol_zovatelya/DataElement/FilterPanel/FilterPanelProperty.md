---
layout: default
title: FilterPanelProperty
position: 
categories: 
tags: 
---

Фильтр свойства панели фильтрации.

 

```
{
	"id": "FilterPanelProperty",
	"description": "Фильтр свойства панели фильтрации",
	"type": "object",
	"properties": {
		"Text": {
			"description": "Заголовок свойства",
			"type": "string",
			"required": true
		},
		"Property": {
			"description": "Наименование свойства",
			"type": "string",
			"required": true
		},
		"DefaultOperator": {
			"description": "Операция фильтрации по умолчанию",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/CriteriaType",
			"default": "IsEquals"
		},
		"Operators": {
			"description": "Список доступных операций фильтрации",
			"type": "array",
			"minItems": 1,
			"items": {
				"description": "Редактор значения для операции фильтрации",
				"type": "object",
				"properties": {
					"Operator": {
						"description": "Операция фильтрации",
						"$ref": "http://demo.infinnity.ru:8081/display/MC/CriteriaType",
						"required": true
					},
					"Editor": {
						"description": "Редактор значения",
						"$ref": "http://demo.infinnity.ru:8081/display/MC/DataElement",
						"required": true
					}
				}
			}
		}
	}
}
```

```
{
	"Text": "Имя",
	"Property": "FirstName",
	"DefaultOperator": "IsStartsWith",
	"Operators": [
		{
			"Operator": "IsStartsWith",
			"Editor": {
				"TextBox": {
					"Name": "TextBox1",
					"Value": {
						"PropertyBinding": {
							"DataSource": "PatientDataSource",
							"Property": "FirstName"
					}
				}
			}
		}
	]
}
```

 

 

