---
layout: default
title: "VirtualProductPackTariff"
position: 
categories: 
tags: 
---

Категория тарификации и цена упаковки виртуального лекарственного средства.

 

```
{
	"Type": "Object",
	"Caption": "Drug Tariff Category Information",
	"Description": "Категория тарификации и цена упаковки виртуального лекарственного средства",
	"Properties": {
		"PaymentCategoryId": {
			"Type": "Object",
			"Caption": "Payment category",
			"Description": "Категория тарификации упаковки виртуального лекарственного средства (PAY_CATCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "VirtualProductPackPaymentCategoryLoockup",
					"Inline": false
                }
            }
		},
		"Price": {
			"Type": "Float",
			"Caption": "Price",
			"Description": "Цена упаковки виртуального лекарственного средства (PRICE)"
		},
		"PricePrev": {
			"Type": "Float",
			"Caption": "Previous price",
			"Description": "Предыдущая цена упаковки виртуального лекарственного средства (PREVPRICE)"
		},
		"PriceDate": {
			"Type": "DateTime",
			"Caption": "Price date",
			"Description": "Дата утверждения текущей цены упаковки виртуального лекарственного средства (DT)"
		}
	}
}
```

 

 

