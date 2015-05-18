---
layout: doc
title: "AuthUserInfo"
position: 0
categories: 
tags: 
---

Информация о пользователе.

   

Данная структура возвращается некоторыми [[сервисами аутентификации|Сервисы аутентификации]]. Смысловое значение свойств этой структуры может совпадать с одноименными свойствами структуры [[ApplicationUser]].

   

```
{
	"id": "AuthUserInfo",
	"type": "object",
	"description": "Информация о пользователе",
	"properties": {
		"UserName": {
			"description": "Уникальное имя пользователя",
			"type": "string"
		},
		"DisplayName": {
			"description": "Отображаемое имя пользователя",
			"type": "string"
		},
		"Description": {
			"description": "Описание пользователя",
			"type": "string"
		},
		"ActiveRole": {
			"description": "Активная роль пользователя",
			"type": "string"
		},
		"DefaultRole": {
			"description": "Роль пользователя по умолчанию",
			"type": "string"
		},
		"Roles": {
			"description": "Список ролей пользователя",
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"Id": {
						"type": "string"
					},
					"DisplayName": {
						"type": "string"
					}
				}
			}
		},
		"Logins": {
			"description": "Список имен входа пользователя у внешних провайдеров",
			"type": "array",
			"items": {
				"type": "object",
				"properties": {
					"Provider": {
						"type": "string"
					},
					"ProviderKey": {
						"type": "string"
					}
				}
			}
		}
	}
}
```

 

 

