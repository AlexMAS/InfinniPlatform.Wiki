---
layout: default
title: ActualProductPackReimbursement
position: 1
categories: 
tags: 
---

Компенсация стоимости упаковки существующего лекарственного средства.

 

```
{
	"Type": "Object",
	"Caption": "Reimbursement Information",
	"Description": "Компенсация стоимости упаковки существующего лекарственного средства",
	"Properties": {
		"PrescriptionCharges": {
			"Type": "Integer",
			"Caption": "Prescription charges",
			"Description": "Количество выплат в случае покупки по частям упаковки существующего лекарственного средства (PX_CHRGS)"
		},
		"DispensingFees": {
			"Type": "Integer",
			"Caption": "Dispensing fees",
			"Description": "Количество сборов в случае покупки по частям упаковки существующего лекарственного средства (DISP_FEES)"
		},
		"IsBrokenBulk": {
			"Type": "Bool",
			"Caption": "Broken bulk",
			"Description": "Признак того, что упаковка существующего лекарственного средства может быть вскрыта (BB)"
		},
		"IsCalendarPack": {
			"Type": "Bool",
			"Caption": "Calendar pack",
			"Description": "Признак того, что упаковка существующего лекарственного средства содержит календарное расписание (CAL_PACK)"
		},
		"IsFp34D": {
			"Type": "Bool",
			"Caption": "FP34D",
			"Description": "Признак того, что упаковка существующего лекарственного средства разрешена, как Bulk vaccine (FP34D)"
		},
		"SpecialContainerId": {
			"Type": "Object",
			"Caption": "Special container",
			"Description": "Тип специального контейнера упаковки существующего лекарственного средства (SPEC_CONTCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "ActualProductPackSpecialContainerLoockup",
					"Inline": false
				}
			}
		},
		"DiscountNotDeductedId": {
			"Type": "Object",
			"Caption": "Discount not deducted",
			"Description": "Признак того, что скидка на упаковку существующего лекарственного средства не вычитается при компенсации (DND)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "ActualProductPackDiscountNotDeductedLoockup",
					"Inline": false
				}
			}
		}
	}
}
```

 

 

