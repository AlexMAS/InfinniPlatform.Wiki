---
layout: default
title: DoseQuantities
position: 0
categories: 
tags: 
---

Represent the key physical quantity attributes of dose quantity, dose timing and, for continuously administered medications, dose duration and dose rate.

Многие поля данного документа пока являются строковыми и заполняются вручную. В будущем эти поля будут преобразованы в ссылки на соответствующие справочники.

   

|Поле документа|Соответствие в VirtualProduct (VMP)|
|--------------|-----------------------------------|
|MedicationUnitDose|VirtualPacks.$ (где $ - выбранная упаковка продукта в коллекции упаковок).Атрибут хранит ссылку на VMPP ([[VirtualProductPack]]), а его название было сохранено для преемственности Dose Syntax.|

   

```
{
    "Type": "Object",
    "Caption": "Dose Quantities",
    "Description": "Dose Quantities",
    "Properties": {
        "MedicationId" : {
            "Type": "String",
            "Caption": "Identifier of selected medication",
            "Description": "Identifier of selected medication from DM+D model"     
        },
        "MedicationUnitDose" : {
            "Type": "Object",
            "Caption": "Unit of measure for dose",
            "Description": "The unit of measure for dose"     
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "VirtualProductPack",
                    "Inline": false
                }
            }
		},
        "MedicationUnitDoseQuantity" : {
            "Type": "Integer",
            "Caption": "Number of specified dimensioned units",
            "Description": "Number of specified dimensioned units"     
		},
		"MedicationDoseQuantityRatio" : {
            "Type": "String",
            "Caption": "Ratio of two specified Medication Unit Dose Quantity instances",
            "Description": "A ratio of two specified Medication Unit Dose Quantity instances"  			
		},
		"MedicationDoseRate" : {
            "Type": "String",
            "Caption": "Rate of continuous administration",
            "Description": "The rate of continuous administration of a quantity of medication"  			
		},
		"MedicationDoseTiming" : {
            "Type": "String",
            "Caption": "Timing instructions",
            "Description": "The specification of timing instructions"  					
		},
		"MedicationDoseOccurrence" : {
            "Type": "String",
            "Caption": "Specified number of doses",
            "Description": "A specified number of doses"  					
		},
		"MedicationDoseFrequency" : {
            "Type": "String",
            "Caption": "Dose frequency as the ratio of the number of doses",
            "Description": "A specialisation of Medication Dose Timing that represents dose frequency as the ratio of the number of doses in a specified period of time"  			
		},
		"MedicationDoseInterval" : {
            "Type": "String",
            "Caption": "Periodic interval of time between successive doses",
            "Description": "A periodic interval of time between successive doses"  			
		},
		"TimePeriod" : {
            "Type": "String",
            "Caption": "Specified amount of time",
            "Description": "A specified amount of time in years, months, days, hours, minutes and seconds"  			
		}
    }      
}
```

   

```
{
	"MedicationUnitDoseQuantity" : 500,
	"MedicationUnitDose" : {
		"Id": "24097311000001106",
		"DisplayName": "Morphine 5mg/5ml nebuliser liquid ampoules 10 ampoule"
	},
	"MedicationDoseQuantityRatio" : "96 mg in 4 mL",
	"MedicationDoseRate" : "200 mL/h",
	"MedicationDoseTiming" : "three times a day",
	"MedicationDoseOccurrence" : "2 to 4 doses",
	"MedicationDoseFrequency" : "take three times a day",
	"MedicationDoseInterval" : "every 8 hours",
	"TimePeriod" : "2 hours"
}
```

 

 

