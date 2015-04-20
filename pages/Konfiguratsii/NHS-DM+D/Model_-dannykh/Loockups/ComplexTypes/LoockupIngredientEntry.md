---
layout: default
title: LoockupIngredientEntry
position: 3
categories: 
tags: 
---

Запись справочника ингредиентов.

 

```
{
	"Type": "Object",
	"Caption": "Ingredient entry",
	"Description": "Запись справочника ингредиентов",
	"Properties": {
		"Id": {
			"Type": "String",
			"Caption": "Identifier",
			"Description": "Идентификатор ингредиента (ISID)"
		},
		"IdPrev": {
			"Type": "String",
			"Caption": "Previous identifier",
			"Description": "Предыдущий идентификатор ингредиента (CDPREV)"
		},
		"IdDate": {
			"Type": "DateTime",
			"Caption": "Identifier date",
			"Description": "Дата утверждения текущего идентификатора ингредиента (ISIDDT)"
		},
		"DisplayName": {
			"Type": "String",
			"Caption": "Display name",
			"Description": "Наименование ингредиента (NM)"
		},
		"IsInvalid": {
			"Type": "Bool",
			"Caption": "Invalidity flag",
			"Description": "Запись об ингредиенте является недействительной (INVALID)"
		}
	}
}
```

 

 

