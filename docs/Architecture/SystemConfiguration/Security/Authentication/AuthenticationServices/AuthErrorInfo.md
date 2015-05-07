---
layout: doc
title: "AuthErrorInfo"
position: 1
categories: 
tags: 
---

Информация об ошибке.

   

Данная структура возвращается [[сервисами аутентификации|Сервисы аутентификации]] в случае ошибки.

   

```
{
	"id": "AuthErrorInfo",
	"type": "object",
	"properties": {
		"Error": {
			"type": "any"
		}
	}
}
```

 

 

