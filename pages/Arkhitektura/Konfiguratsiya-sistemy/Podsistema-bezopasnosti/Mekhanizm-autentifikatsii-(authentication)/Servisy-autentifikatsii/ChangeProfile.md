---
layout: default
title: ChangeProfile
position: 4
categories: 
tags: 
---

Изменяет персональную информацию текущего пользователя.

   

#### Request

```
HTTP POST /Auth/ChangeProfile
{
	"type": "object",
	"properties": {
		"DisplayName": {
			"description": "Отображаемое имя пользователя",
			"type": "string"
		},
		"Description": {
			"description": "Описание пользователя",
			"type": "string"
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

 

 

