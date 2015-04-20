---
layout: default
title: UnlinkExternalLogin
position: 10
categories: 
tags: 
---

Удаляет у текущего пользователя имя входа у внешнего провайдера.

   

#### Request

```
HTTP POST /Auth/UnlinkExternalLogin
{
	"type": "object",
	"properties": {
		"Provider": {
			"description": "Провайдер входа в систему",
			"type": "string",
			"required": true
		},
		"ProviderKey": {
			"description": "Ключ, представляющий имя входа для провайдера",
			"type": "string",
			"required": true
		}
	}
}
```

   

#### Success responce (equal 200)

```
null
```

   

#### Failure responce (not equal 200)

```
{
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/AuthErrorInfo"
	}
}
```

 

 

