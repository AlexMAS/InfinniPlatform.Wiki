---
layout: default
title: GetExternalProviders
position: 6
categories: 
tags: 
---

Возвращает список внешних провайдеров входа в систему.

   

#### Request

```
HTTP GET /Auth/GetExternalProviders
```

   

#### Success responce (equal 200)

```
{
	"type": "object",
	"properties": {
		"Type": {
			"description": "Тип внешнего провайдера",
			"type": "string"
		},
		"Name": {
			"description": "Наименование внешнего провайдера",
			"type": "string"
		}
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

 

 

