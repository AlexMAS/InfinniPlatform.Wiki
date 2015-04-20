---
layout: default
title: SignInExternal
position: 8
categories: 
tags: 
---

Осуществляет вход пользователя в систему через внешний провайдер.

   

Данный запрос при успешном выполнении возвращает статус 302 или 401 (зависит от реализации внешнего провайдера), который переводит пользователя на страницу входа внешнего провайдера. Вызов данного метода должен быть не асинхронным (не AJAX), так как внешний провайдер аутентификации, скорей всего, не будет иметь нужных настроек для разрешения кросс-доменных запросов (Access-Control-Allow-Origin).

   

#### Request

```
HTTP POST /Auth/SignInExternal
{
	"type": "object",
	"properties": {
		"Provider": {
			"description": "Тип внешнего провайдера",
			"type": "string",
			"required": true
		},
		"SuccessUrl": {
			"description": "Адрес возврата в случае успешного входа",
			"type": "string",
			"required": true
		},
		"FailureUrl": {
			"description": "Адрес возврата в случае неуспешного входа",
			"type": "boolean",
			"default": false
		}
	}
}
```

   

#### Success responce (equal 302 or 401)

```
null
```

   

#### Failure responce (not equal 302 and 401)

```
{
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/AuthErrorInfo"
	}
}
```

 

 

