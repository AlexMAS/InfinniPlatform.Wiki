---
layout: default
title: "VirtualTherapeuticMoiety"
position: 0
categories: 
tags: 
---

Virtual Therapeutic Moiety (VTM) - описание действующего вещества лекарственного средства (см. также определение [функциональной группы](http://en.wikipedia.org/wiki/Functional_group)). Под действующим веществом лекарственного средства (therapeutic moiety) понимается структурный фрагмент органической молекулы (некоторая группа атомов), определяющий её химические свойства. Данное описание предназначено для медицинских работников, делающих назначения пациентам. Например, Atenolol, Doxorubicin, Fluoruracil.

 

```
{
	"Type": "Object",
	"Caption": "Virtual Therapeutic Moiety (VTM)",
	"Description": "Действующее вещество лекарственного средства",
	"Properties": {
		"Id": {
			"Type": "String",
			"Caption": "Identifier",
			"Description": "Идентификатор действующего вещества лекарственного средства (VTMID)"
		},
		"IdPrev": {
			"Type": "String",
			"Caption": "Previous identifier",
			"Description": "Предыдущий идентификатор действующего вещества лекарственного средства (VTMIDPREV)"
		},
		"IdDate": {
			"Type": "DateTime",
			"Caption": "Identifier date",
			"Description": "Дата утверждения идентификатора действующего вещества лекарственного средства (VTMIDDT)"
		},
		"Name": {
			"Type": "String",
			"Caption": "Name",
			"Description": "Наименование действующего вещества лекарственного средства (NM)"
		},
		"NameShort": {
			"Type": "String",
			"Caption": "Abbreviated name",
			"Description": "Краткое наименование действующего вещества лекарственного средства (ABBREVNM)"
		},
		"IsInvalid": {
			"Type": "Bool",
			"Caption": "Invalidity flag",
			"Description": "Запись о действующем веществе лекарственного средства является недействительной (INVALID)"
		}
	}
}
```

 

 

