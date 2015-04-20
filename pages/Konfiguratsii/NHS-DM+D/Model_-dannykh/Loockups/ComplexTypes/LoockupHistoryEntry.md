---
layout: default
title: LoockupHistoryEntry
position: 1
categories: 
tags: 
---

Запись справочника с информацией об изменениях.

 

```
{
	"Type": "Object",
	"Caption": "Loockup history entry",
	"Description": "Запись справочника с информацией об изменениях",
	"Properties": {
		"Id": {
			"Type": "String",
			"Caption": "Identifier",
			"Description": "Идентификатор записи справочника (CD)"
		},
		"IdPrev": {
			"Type": "String",
			"Caption": "Previous identifier",
			"Description": "Предыдущий идентификатор записи справочника (CDPREV)"
		},
		"IdDate": {
			"Type": "DateTime",
			"Caption": "Identifier date",
			"Description": "Дата утверждения текущего идентификатора записи справочника (CDDT)"
		},
		"DisplayName": {
			"Type": "String",
			"Caption": "Display name",
			"Description": "Наименование записи справочника (DESC)"
		}
	}
}
```

 

 

