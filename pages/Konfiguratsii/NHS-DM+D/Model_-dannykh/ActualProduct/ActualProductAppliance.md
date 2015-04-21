---
layout: default
title: ActualProductAppliance
position: 
categories: 
tags: 
---

Устройство существующего лекарственного средства.

 

```
{
	"Type": "Object",
	"Caption": "Appliance Product Information",
	"Description": "Устройство существующего лекарственного средства",
	"Properties": {
		"SizeOrWeight": {
			"Type": "String",
			"Caption": "Size/weight",
			"Description": "Размер или вес устройства (SZ_WEIGHT)"
		},
		"ColorId": {
			"Type": "Object",
			"Caption": "Color",
			"Description": "Цвет устройства (COLOURCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "ActualProductColorLoockup",
					"Inline": false
				}
			}
		},
		"OrderNumber": {
			"Type": "String",
			"Caption": "Order number",
			"Description": "Порядковый номер устройства (PROD_ORDER_NO)"
		}
	}
}
```

 

 

