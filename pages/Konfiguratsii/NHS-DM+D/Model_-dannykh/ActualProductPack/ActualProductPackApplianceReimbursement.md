---
layout: default
title: ActualProductPackApplianceReimbursement
position: 2
categories: 
tags: 
---

Компенсация стоимости устройства из упаковки существующего лекарственного средства.

 

```
{
	"Type": "Object",
	"Caption": "Appliance Pack Information",
	"Description": "Компенсация стоимости устройства из упаковки существующего лекарственного средства",
	"Properties": {
		"ApplianceReimbursementId": {
			"Type": "Object",
			"Caption": "Appliance reimbursement status",
			"Description": "Тип возможности компенсации стоимости устройства (REIMB_STATCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "ActualProductPackApplianceReimbursementStatusLoockup",
					"Inline": false
				}
			}
		},
		"ApplianceReimbursementIdPrev": {
			"Type": "Object",
			"Caption": "Appliance reimbursement previous status",
			"Description": "Предыдущий тип возможности компенсации стоимости устройства (REIMB_STATPREVCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "ActualProductPackApplianceReimbursementStatusLoockup",
					"Inline": false
				}
			}
		},
		"ApplianceReimbursementDate": {
			"Type": "DateTime",
			"Caption": "Appliance reimbursement status date",
			"Description": "Дата утверждения текущего типа возможности компенсации стоимости устройства (REIMB_STATDT)"
		},
		"OrderNumber": {
			"Type": "String",
			"Caption": "Pack order number",
			"Description": "Порядковый номер устройства (PACK_ORDER_NO)"
		}
	}
}
```

 

 

