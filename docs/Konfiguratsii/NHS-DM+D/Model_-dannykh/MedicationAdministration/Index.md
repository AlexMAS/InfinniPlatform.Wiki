---
layout: default
title: "MedicationAdministration"
position: 6
categories: 
tags: 
---

Назначение лекарственного средства.

 

```
{
    "Type": "Object",
    "Caption": "Medication Administration",
    "Description": "Medication Administration",
	"Properties": {
        "Id": {
            "Type": "String",
            "Caption": "Identifier",
            "Description": "Medication administration identifier"
        },
		"PatientId": {
			"Type": "Object",
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "Patient",
                    "Inline": false                    
                }
            }
		},
		"DoseString": {
            "Type": "String",
            "Caption": "Dose text presentation",
            "Description": "Text presentation of entire dose instruction"
		},
		"MedicationAdministrationProcedure": {
			"Type": "Object",
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "MedicationAdministrationProcedure",
                    "Inline": true                    
                }
            }
		},
		"Precondition": {
            "Type": "String",
            "Caption": "Specified condition",
            "Description": "Specified condition that must be true before the medication administration can occur"
		},
		"Goal": {
            "Type": "String",
            "Caption": "Theraputic outcome",
            "Description": "Represents a desired therapeutic outcome"		
		},
		"AdditionalInstructions": {
            "Type": "String",
            "Caption": "Instructions about the medication amdinistration",
            "Description": "Any additional human readable free text instructions about the medication administration"		
		},
		"DescribedMedication": {
			"Type": "Object",
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "DescribedMedication",
                    "Inline": true                    
                }
            }
		},
		"DoseQuantities": {
			"Type": "Object",
            "TypeInfo": {
                "DocumentLink": {
                    "ConfigId": "Dmd",
                    "DocumentId": "DoseQuantities",
                    "Inline": true                    
                }
            }
		}			 
	}		
}
```

   

```
{
   "Id":"1795ED33-DB8D-4161-8C9F-637757F7C871",
   "PatientId":"D4F76039-EB1A-4CCF-8DE1-7B3516BA2648",
   "DoseString":"paracetamol - oral - tablets - 1000 mg - four times at a day",
   "Precondition":"give two hours before the procedure",
   "Goal":"to maintain systolic blood pressure at greater than 70mmHg",
   "AdditionalInstructions":"Dissolve in water",
   "MedicalAdministrationProcedure":{
      "Route":"intravenous",
      "AdministrationSite":"affected area",
      "AdministrationMethod":"inject"
   },
   "DescribedMedication":{
      "MedicationId":"24097111000001109",
      "DoseFormId":{
         "Id":"1",
         "DisplayName":"Discrete"
      },
      "DoseFormSize":5,
      "DoseFormUnitId":{
         "Id":"258773002",
         "DisplayName":"ml"
      },
      "DoseUnitId":{
         "Id":"413516001",
         "DisplayName":"ampoule"
      },
      "Ingredients":[
         {
            "SubstanceId":{
               "Id":"60886004",
               "DisplayName":"Morphine sulfate"
            },
            "BasisStrengthId":{
               "Id":"0001",
               "DisplayName":"Based on Ingredient Substance"
            },
            "StrengthNumeratorValue":1,
            "StrengthNumeratorUnitId":{
               "Id":"258684004",
               "DisplayName":"mg"
            },
            "StrengthDenominatorValue":1,
            "StrengthDenominatorUnitId":{
               "Id":"258773002",
               "DisplayName":"ml"
            }
         }
      ]
   },
   "DoseQuantities":{
      "MedicationUnitDoseQuantity":500,
      "MedicationUnitDose":{
         "Id":"24097311000001106",
         "DisplayName":"Morphine 5mg/5ml nebuliser liquid ampoules 10 ampoule"
      },
      "MedicationDoseQuantityRatio":"96 mg in 4 mL",
      "MedicationDoseRate":"200 mL/h",
      "MedicationDoseTiming":"three times a day",
      "MedicationDoseOccurrence":"2 to 4 doses",
      "MedicationDoseFrequency":"take three times a day",
      "MedicationDoseInterval":"every 8 hours",
      "TimePeriod":"2 hours"
   }
}
```

Соответствие полей:

В DescribedMedication все поля кроме MedicationId по наименованию соответствуют полям VMP (Virtual Product)

MedicationId <=> Id из VMP

```
{
   "Id":"1795ED33-DB8D-4161-8C9F-637757F7C871",
   "PatientId":"D4F76039-EB1A-4CCF-8DE1-7B3516BA2648",
   "DoseString":"paracetamol - oral - tablets - 1000 mg - four times at a day",
   "Precondition":"give two hours before the procedure",
   "Goal":"to maintain systolic blood pressure at greater than 70mmHg",
   "AdditionalInstructions":"Dissolve in water",
   "MedicalAdministrationProcedure":{
      "Route":"intravenous",
      "AdministrationSite":"affected area",
      "AdministrationMethod":"inject"
   },
   "DescribedMedication":{
      "MedicationId":"24097411000001104",
	  "VirtualProductId" : "24097111000001109",
      "Name":"Morphine 5mg/5ml nebuliser liquid ampoules",
      "Description":"Morphine 5mg/5ml nebuliser liquid ampoules (Special Order)",
      "SupplierId":{
         "Id":"8286711000001104",
         "DisplayName":"Special Order"
      },
      "AvailabilityRestrictionId":{
         "Id":"0006",
         "DisplayName":"Special"
      },
      "LicensingAuthorityId":{
         "Id":"0000",
         "DisplayName":"None"
      },
      "ActualPacks":[
         {
            "Id":"24097511000001100",
            "DisplayName":"Morphine 5mg/5ml nebuliser liquid ampoules (Special Order) 1 ampoule"
         },
         {
            "Id":"24097611000001101",
            "DisplayName":"Morphine 5mg/5ml nebuliser liquid ampoules (Special Order) 10 ampoule"
         }
      ],
      "DoseFormId":{
         "Id":"1",
         "DisplayName":"Discrete"
      },
      "DoseFormSize":5,
      "DoseFormUnitId":{
         "Id":"258773002",
         "DisplayName":"ml"
      },
      "DoseUnitId":{
         "Id":"413516001",
         "DisplayName":"ampoule"
      },
      "Ingredients":[
         {
            "SubstanceId":{
               "Id":"60886004",
               "DisplayName":"Morphine sulfate"
            },
            "BasisStrengthId":{
               "Id":"0001",
               "DisplayName":"Based on Ingredient Substance"
            },
            "StrengthNumeratorValue":1,
            "StrengthNumeratorUnitId":{
               "Id":"258684004",
               "DisplayName":"mg"
            },
            "StrengthDenominatorValue":1,
            "StrengthDenominatorUnitId":{
               "Id":"258773002",
               "DisplayName":"ml"
            }
         }
      ]
   },
   "DoseQuantities":{
      "MedicationUnitDoseQuantity":500,
      "MedicationUnitDose":{
         "Id":"24097311000001106",
         "DisplayName":"Morphine 5mg/5ml nebuliser liquid ampoules 10 ampoule"
      },
      "MedicationDoseQuantityRatio":"96 mg in 4 mL",
      "MedicationDoseRate":"200 mL/h",
      "MedicationDoseTiming":"three times a day",
      "MedicationDoseOccurrence":"2 to 4 doses",
      "MedicationDoseFrequency":"take three times a day",
      "MedicationDoseInterval":"every 8 hours",
      "TimePeriod":"2 hours"
   }
}
```

MedicationId <=> Id из ActualProduct

VirtualProductId <=> VirtualProductId из ActualProduct/ Id из VirtualProduct

|Источник|Поля|
|--------|----|
|ActualProduct|SupplierId
AvailabilityRestrictionId
LicensingAuthorityId
ActualPacks         |
|VirtualProduct|DoseFormId
DoseFormSize
DoseFormUnitId
DoseUnitId
Ingredients|
|VirtualProductPack|MedicationUnitDose|

