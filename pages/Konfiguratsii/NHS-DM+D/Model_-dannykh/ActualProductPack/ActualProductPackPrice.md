---
layout: default
title: ActualProductPackPrice
position: 3
categories: 
tags: 
---

Цена упаковки виртуального лекарственного средства.

 

```
{
	"Type": "Object",
	"Caption": "Medicinal Product Price",
	"Description": "Цена упаковки виртуального лекарственного средства",
	"Properties": {
		"Price": {
			"Type": "Float",
			"Caption": "Price",
			"Description": "Цена упаковки существующего лекарственного средства в Pence (Sterling) (PRICE)"
		},
		"PricePrev": {
			"Type": "Float",
			"Caption": "Price prior to change date",
			"Description": "Предыдущая цена упаковки существующего лекарственного средства в Pence (Sterling) (PRICE_PREV)"
		},
		"PriceDate": {
			"Type": "DateTime",
			"Caption": "Date of price validity",
			"Description": "Дата утверждения текущей цены упаковки существующего лекарственного средства (PRICEDT)"
		},
		"PriceBasisId": {
			"Type": "Object",
			"Caption": "Price basis",
			"Description": "Основание ценообразования упаковки существующего лекарственного средства (REIMB_STATCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "ActualProductPackPriceBasisLoockup",
					"Inline": false
				}
			}
		}
	}
}
```

 

 

