---
layout: default
title: ActualProductIngredient
position: 
categories: 
tags: 
---

Ингредиент существующего лекарственного средства.

 

```
{
	"Type": "Object",
	"Caption": "Actual Product Excipient",
	"Description": "Ингредиент существующего лекарственного средства",
	"Properties": {
		"SubstanceId": {
			"Type": "Object",
			"Caption": "Substance",
			"Description": "Ингредиент существующего лекарственного средства (ISID)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "IngredientLoockup",
					"Inline": false
				}
			}
		},
		"StrengthNumeratorValue": {
			"Type": "Float",
			"Caption": "Strength value",
			"Description": "Значение числителя фармацевтической эффективности ингредиента существующего лекарственного средства (STRNTH)"
		},
		"StrengthNumeratorUnitId": {
			"Type": "Object",
			"Caption": "Strength unit",
			"Description": "Единица измерения значения числителя фармацевтической эффективности ингредиента существующего лекарственного средства (UOMCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "UnitOfMeasureLoockup",
					"Inline": false
				}
			}
		}
	}
}
```

 

 

