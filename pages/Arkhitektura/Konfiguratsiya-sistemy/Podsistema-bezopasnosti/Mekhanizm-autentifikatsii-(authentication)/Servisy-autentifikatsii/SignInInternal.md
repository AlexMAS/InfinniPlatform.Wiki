---
layout: default
title: SignInInternal
position: 7
categories: 
tags: 
---

Осуществляет вход пользователя в систему через внутренний провайдер.

   

#### Request

```
HTTP POST /Auth/SignInInternal
{
	"type": "object",
	"properties": {
		"UserName": {
			"description": "Уникальное имя пользователя",
			"type": "string",
			"required": true
		},
		"Password": {
			"description": "Пароль пользователя",
			"type": "string",
			"required": true
		},
		"Remember": {
			"description": "Оставаться в системе",
			"type": "boolean",
			"default": false
		}
	}
}
```

   

#### Success responce (equal 200)

```
{
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/AuthUserInfo"
	}
}
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

 

 

