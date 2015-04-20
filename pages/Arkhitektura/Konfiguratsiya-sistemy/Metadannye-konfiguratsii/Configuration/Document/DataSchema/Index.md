---
layout: default
title: DataSchema
position: 0
categories: 
tags: 
---

Модель данных.

 

```
{
	"id": "DataSchema",
	"description": "Модель данных",
	"type": "object",
	"properties": {
		"Type": {
			"description": "Тип данных",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DataType",
			"required": true
		},
		"TypeInfo": {
			"description": "Информация о типе данных",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DataTypeInfo"
		},
		"Sortable": {
			"description": "Возможна ли сортировка",
			"type": "boolean",
			"default": false
		},
		"Caption": {
			"description": "Заголовок модели данных",
			"type": "string"
		},
		"Description": {
			"description": "Описание модели данных",
			"type": "string"
		},
		"Items": {
			"description": "Описание элементов массива",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DataSchema"
		}
		"Properties": {
			"description": "Описание свойств модели данных",
			"type": "object",
			"additionalProperties": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/DataSchema"
			}
		}
	}
}
```

```
{
	"Type": "Object",
	"Caption": "Пациент",
	"Description": "Сведения о пациенте",
	"Properties": {
		"Id": {
			"Type": "Uuid",
			"Caption": "Уникальный идентификатор"
		},
		"FirstName": {
			"Type": "String",
			"Caption": "Имя"
		},
		"MiddleName": {
			"Type": "String",
			"Caption": "Отчество"
		},
		"LastName": {
			"Type": "String",
			"Caption": "Фамилия"
		},
		"BirthTime": {
			"Type": "DateTime",
			"Caption": "Дата рождения"
		},
		"Sex": {
			"Type": "Object",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "NSI",
					"DocumentId": "SexClassifier"
				}
			},
			"Caption": "Пол"
		},
		"Addresses": {
			"Type": "Array",
			"Caption": "Адреса",
			"Items": {
				"Type": "Object",
				"TypeInfo": {
					"DocumentLink": {
						"ConfigId": "Integration",
						"DocumentId": "Address",
						"Inline": true
					}
				}
			}
		}
	}
}
```

```
{
	"Id": "BED65F4A-A419-4D0E-B5E5-5F48FE96518B",
	"FirstName": "Иван",
	"MiddleName": "Иванович",
	"LastName": "Иванов",
	"BirthTime": "1987-01-02",
	"Sex": {
		"Id": "D2036518-21B5-40B1-8455-52294619308E",
		"DisplayName": "Мужской"
	},
	"Addresses": [
		{
			"ZIP": "454000",
			"City": {
				"Id": "DACF8FAD-EF21-4320-97AA-E9A6C7B5143C",
				"DisplayName": "Челябинск"
			},
			"Street": {
				"Id": "FA31BACF-CF5E-4DD5-BEE4-D139C79A5A21",
				"DisplayName": "Ленина ул."
			},
			"House": "1а"
		}
	]
}
```

 

 

