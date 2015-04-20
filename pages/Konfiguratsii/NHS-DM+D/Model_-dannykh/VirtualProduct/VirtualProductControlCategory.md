---
layout: default
title: VirtualProductControlCategory
position: 
categories: 
tags: 
---

Информация о категории контроля виртуального лекарственного средства.

 

```
{
	"Type": "Object",
	"Caption": "Controlled Drug Prescribing Information",
	"Description": "Виртуальное лекарственное средство",
	"Properties": {
		"CategoryId": {
			"Type": "Object",
			"Caption": "Category",
			"Description": "Категория контроля виртуального лекарственного средства (CATCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "VirtualProductControlCategoryLookup",
					"Inline": false
				}
			}
		},
		"CategoryIdPrev": {
			"Type": "Object",
			"Caption": "Previous category",
			"Description": "Предыдущая категория контроля виртуального лекарственного средства (CAT_PREVCD)",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Dmd",
					"DocumentId": "VirtualProductControlCategoryLookup",
					"Inline": false
				}
			}
		},
		"CategoryDate": {
			"Type": "DateTime",
			"Caption": "Category date",
			"Description": "Дата утверждения текущей категории контроля виртуального лекарственного средства (CATDT)"
		}
	}
}
```

 

 

