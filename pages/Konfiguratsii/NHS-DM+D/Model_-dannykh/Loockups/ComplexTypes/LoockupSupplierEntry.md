---
layout: default
title: "LoockupSupplierEntry"
position: 2
categories: 
tags: 
---

Запись справочника поставщиков.

 

```
{
	"Type": "Object",
	"Caption": "Supplier entry",
	"Description": "Запись справочника поставщиков",
	"Properties": {
		"Id": {
			"Type": "String",
			"Caption": "Identifier",
			"Description": "Идентификатор поставщика (CD)"
		},
		"IdPrev": {
			"Type": "String",
			"Caption": "Previous identifier",
			"Description": "Предыдущий идентификатор поставщика (CDPREV)"
		},
		"IdDate": {
			"Type": "DateTime",
			"Caption": "Identifier date",
			"Description": "Дата утверждения текущего идентификатора поставщика (CDDT)"
		},
		"DisplayName": {
			"Type": "String",
			"Caption": "Display name",
			"Description": "Наименование поставщика (DESC)"
		},
		"IsInvalid": {
			"Type": "Bool",
			"Caption": "Invalidity flag",
			"Description": "Запись о поставщике является недействительной (INVALID)"
		}
	}
}
```

 

 

