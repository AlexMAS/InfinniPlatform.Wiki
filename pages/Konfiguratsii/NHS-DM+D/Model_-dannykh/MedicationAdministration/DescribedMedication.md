---
layout: default
title: DescribedMedication
position: 1
categories: 
tags: 
---

Represents a medication and the various levels at which it can be described within the *dm+d* data model.

Все поля берутся из совпадающих по названию полей для VMP ([[VirtualProduct]]). Получить [[VirtualProduct]] из [[ActualProduct]] можно с использованием запроса: *"Получение данных справочника VirtualProduct по соответствующему идентификатору ActualProduct"*.

   

```
{
    "Type": "Object",
    "Caption": "Described Medication",
    "Description": "Described Medication",
	"Properties": {
		"MedicationId" : {
            "Type": "String",
            "Caption": "Identifier of selected medication",
            "Description": "Identifier of selected medication from DM+D model"		
		},
		"DoseFormId" : {
            "Type": "Object",
            "Caption": "Physical form of the Medication",
            "Description": "Physical form of the Medication",
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "VirtualProductDoseFormLoockup",
                    "Inline": false
                }
            }
		},
        "DoseUnitId": {
            "Type": "Object",
            "Caption": "Unit dose unit",
            "Description": "Unit dose unit of measure of one dose unit",
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "UnitOfMeasureLoockup",
                    "Inline": false
                }
            }
        },
        "DoseFormUnitId": {
            "Type": "Object",
            "Caption": "Unit Dose Form Size Unit of Measure",
            "Description": "Unit Dose Form Size Unit of Measure (UDFS UOM) of a VMP-equivalent of a medication",
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "UnitOfMeasureLoockup",
                    "Inline": false
                }
            }
        },
		"Brand" : {
            "Type": "String",
            "Caption": "Brand of an AMP-equivalent",
            "Description": "Brand of an AMP-equivalent of a medication described",
		},
		"DoseFormSize" : {
            "Type": "Float",
            "Caption": "Dose form size",
            "Description": "Dm+d Unit Dose Form Size Indicator (UDFSI) of a VMP-equivalent"
		},
        "Ingredients": {
            "Type": "Array",
            "Caption": "active ingredients of a VMP",
            "Description": "represents an active ingredients of a VMP",
            "Items": {
                "Type": "Object",
                "TypeInfo": {
                    "DocumentLink": {
                        "ConfigId": "Dmd",
                        "DocumentId": "VirtualProductIngredient",
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
	"MedicationId" : "24097111000001109",
	"DoseFormId": {
		"Id": "1",
		"DisplayName": "Discrete"
	},
	"DoseFormSize": 5,
	"DoseFormUnitId": {
		"Id": "258773002",
		"DisplayName": "ml"
	},
	"DoseUnitId": {
		"Id": "413516001",
		"DisplayName": "ampoule"
	},
	"Ingredients" : [
		{
			"SubstanceId": {
				"Id": "60886004",
				"DisplayName": "Morphine sulfate"
			},
			"BasisStrengthId": {
				"Id": "0001",
				"DisplayName": "Based on Ingredient Substance"
			},
			"StrengthNumeratorValue": 1,
			"StrengthNumeratorUnitId": {
				"Id": "258684004",
				"DisplayName": "mg"
			},
			"StrengthDenominatorValue": 1,
			"StrengthDenominatorUnitId": {
				"Id": "258773002",
				"DisplayName": "ml"
			}
		}
	]	 
}
```

 

 

