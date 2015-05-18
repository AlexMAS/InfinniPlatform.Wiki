---
layout: doc
title: "GetCurrentUser"
position: 2
categories: 
tags: 
---

Возвращает информацию о текущем пользователе.

   

#### Request

```
HTTP GET /Auth/GetCurrentUser
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

 

 

