---
layout: default
title: SignOut
position: 11
categories: 
tags: 
---

Осуществляет выход пользователя из системы.

   

#### Request

```
HTTP POST /Auth/SignOut
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

 

 

