---
layout: default
title: "Exchange"
position: 2
categories: 
tags: 
---

Точка обмена сообщениями.

  

```
{
	"id": "Exchange",
	"description": "Точка обмена сообщениями",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {
		"Type": {
			"description": "Тип точки обмена сообщениями",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ExchangeType",
			"default": "Fanout",
			"required": true
		},
		"Subscriptions": {
			"description": "Список подписок точки обмена сообщениями",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/Subscription"
			}
		}
	}
}
```

 

 

