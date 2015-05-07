---
layout: doc
title: "ApplicationUserClaim"
position: 2
categories: 
tags: 
---

Утверждение пользователя системы.

   

```
{
	"Type": "Object",
	"Caption": "Утверждение пользователя системы",
	"Properties": {
		"Type": {
			"Type": "Object",
			"Caption": "Тип утверждения",
			"TypeInfo": {
				"DocumentLink": {
					"ConfigId": "Security",
					"DocumentId": "ApplicationClaimType"
				}
			}
		},
		"Value": {
			"Type": "String",
			"Caption": "Значение утверждения"
		}
	}
}
```

   

```
{
	"Type": {
		"Id": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone",
		"DisplayName": "Мобильный телефон"
	},
	"Value": "+7 (123) 456-78-90"
}
```

 

 

