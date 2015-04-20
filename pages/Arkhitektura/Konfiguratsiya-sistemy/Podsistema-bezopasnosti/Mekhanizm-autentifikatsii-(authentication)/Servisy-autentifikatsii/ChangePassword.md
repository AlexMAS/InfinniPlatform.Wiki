---
layout: default
title: ChangePassword
position: 3
categories: 
tags: 
---

Изменяет пароль текущего пользователя.

   

#### Request

```
HTTP POST /Auth/ChangePassword
{
	"type": "object",
	"properties": {
		"OldPassword": {
			"description": "Старый пароль",
			"type": "string"
		},
		"NewPassword": {
			"description": "Новый пароль",
			"type": "string",
			"required": true
		}
	}
}
```

   

#### Success responce (equal 200)

```
null
```

   

#### Failure responce (not equal 200)

```
{
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/AuthErrorInfo"
	}
}
```

 

 

