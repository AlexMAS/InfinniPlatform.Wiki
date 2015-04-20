---
layout: default
title: FilterPanel
position: 18
categories: 
tags: 
---

Элемент представления для настраиваемого фильтра источника данных.

 



  

|Name|Description|
|----|-----------|
| | |

|Name|Description|
|----|-----------|
| | |

    

```
{
  "id": "FilterPanel",
  "description": "Элемент представления для настраиваемого фильтра источника данных",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
  },
  "properties": {
    "AllowAdvancedMode": {
      "description": "Разрешен ли режим расширенной фильтрации",
      "type": "boolean",
      "default": true
    },
    "GeneralProperties": {
      "description": "Список основных свойств для фильтрации",
      "type": "array",
      "items": {
        "$ref": "http://demo.infinnity.ru:8081/display/MC/FilterPanelProperty"
      }
    },
    "AdditionalProperties": {
      "description": "Список дополнительных свойств для фильтрации",
      "type": "array",
      "items": {
        "$ref": "http://demo.infinnity.ru:8081/display/MC/FilterPanelProperty"
      }
    },
    "DataSource": {
      "description": "Источник данных для фильтрации",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```

```
{
	"Name": "FilterPanel1",
	"GeneralProperties": [
		{
			"Text": "Имя",
			"Property": "FirstName",
			"DefaultOperator": "IsStartsWith",
			"Operators": [ ... ]
		},
		{
			"Text": "Отчество",
			"Property": "MiddleName",
			"DefaultOperator": "IsStartsWith",
			"Operators": [ ... ]
		},
		{
			"Text": "Фамилия",
			"Property": "LastName",
			"DefaultOperator": "IsStartsWith",
			"Operators": [ ... ]
		},
		{
			"Text": "Дата рождения",
			"Property": "BirthDate",
			"DefaultOperator": "IsEquals",
			"Operators": [ ... ]
		}
	],
	"AdditionalProperties": [
		{
			"Text": "Номер полиса",
			"Property": "Policy.Number",
			"DefaultOperator": "IsEquals",
			"Operators": [ ... ]
		}
	],
	"DataSource": "PatientDataSource"
}
```

 

 

