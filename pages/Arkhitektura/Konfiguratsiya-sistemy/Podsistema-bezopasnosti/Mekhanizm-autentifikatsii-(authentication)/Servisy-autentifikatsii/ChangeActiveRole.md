---
layout: default
title: ChangeActiveRole
position: 5
categories: 
tags: 
---

Изменяет активную роль текущего пользователя.

   

#### Request

```
HTTP POST /Auth/ChangeActiveRole
{
	"type": "object",
	"properties": {
		"ActiveRole": {
			"description": "Активная роль пользователя",
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

 

 

